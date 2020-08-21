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
var colours_1 = __webpack_require__(/*! ../colours */ "./src/scenes/colours.ts");
var primary_button_1 = __webpack_require__(/*! ../../ui/primary-button */ "./src/ui/primary-button.ts");
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
                .setTint(colours_1.PLAYER_TINTS[player.id - 1])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvdXJsLWluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb2xvdXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvY29tYmluZWQtc3RhdGUtbWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2hleC1nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvY3JlYXRlZC1sb2JieS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LWRpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9jYWwtZ2FtZS1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvY2FsLXN0b3JhZ2UvbG9jYWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvZGlzcGxheS1vYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUva2V5Ym9hcmQtbWFwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2xvY2FsLWFjdGlvbi1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvbWFwLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3RleHRzLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3VpLWJvcmRlci1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS91bml0LWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51L21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGVlci1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wZWVyLXNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BlZXItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9wcmltYXJ5LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9hc3luYy11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL2pzb24tc2VyaWFsaXNhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9waGFzZXIvdHdlZW4tdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcmFuZG9tLXV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvYWN0aW9uLXBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGV4LWRpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oaXQtcG9pbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3VuaXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkEsc0ZBQXlDO0FBR3pDLHFIQUFpRjtBQU9qRjtJQUFnQyw4QkFBSztJQUFyQzs7SUFJQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLENBSitCLGVBQUssR0FJcEM7QUFKWSxnQ0FBVTtBQU1WLHdCQUFnQixHQUFHOzs7OztnQkFDeEIsS0FBSyxHQUFHLElBQUksZUFBSyxDQUFDLFlBQVksQ0FBQztnQkFDckMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ3RCLFdBQVcsRUFBRSxXQUFXO2lCQUN6QixDQUFDO2dCQUNGLHFCQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUU7O2dCQUFsQixTQUFrQjtnQkFDbEIsc0JBQU8sSUFBSSxZQUFZLENBQWEsS0FBSyxDQUFDOzs7S0FDM0M7QUFFRDtJQUdFLHNCQUFZLEtBQWlCO1FBQTdCLGlCQUVDO1FBRU0sVUFBSyxHQUFHLFVBQU8sTUFBYyxFQUFFLEtBQWlCOzs7NEJBQ3JELHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs0QkFDL0IsTUFBTTs0QkFDTixLQUFLLEVBQUUsb0NBQWUsQ0FBQyxLQUFLLENBQUM7eUJBQzlCLENBQUM7O3dCQUhGLFNBR0U7Ozs7YUFDSDtRQUVNLHFCQUFnQixHQUFHLFVBQU8sTUFBYzs7Ozs0QkFDN0IscUJBQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUU7O3dCQUEvRSxPQUFPLEdBQUcsU0FBcUU7d0JBQ3JGLHNCQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssK0NBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxDQUFDOzs7YUFDbEU7UUFFTSxxQkFBZ0IsR0FBRyxVQUFPLE1BQWM7Ozs7NEJBQzlCLHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUU7O3dCQUF2RCxNQUFNLEdBQUcsU0FBOEM7d0JBQzdELHNCQUFPLE1BQU0sS0FBSyxTQUFTOzs7YUFDNUI7UUFFTyx3QkFBbUIsR0FBRyxVQUFDLE1BQWM7WUFDM0MsWUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFBckQsQ0FBcUQ7UUFyQnJELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztJQUNwQixDQUFDO0lBcUJILG1CQUFDO0FBQUQsQ0FBQztBQTFCWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCWixvQkFBWSxHQUFHLFVBQUMsS0FBbUI7SUFDOUMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO0FBQy9CLENBQUM7QUFFWSxxQkFBYSxHQUFHLFVBQUMsS0FBbUI7SUFDL0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO0FBQ2hDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRCxzRkFBZ0M7QUFDaEMsNEVBQTZCO0FBQzdCLHNLQUEyRTtBQUUzRSxJQUFNLFVBQVUsR0FBaUM7SUFDL0MsS0FBSyxFQUFFLFlBQVk7SUFFbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO0lBRWpCLEtBQUssRUFBRTtRQUNMLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVTtRQUN4QixNQUFNLEVBQUUsTUFBTSxDQUFDLFdBQVc7S0FDM0I7SUFFRCxLQUFLLEVBQUUsZ0JBQU07SUFFYixPQUFPLEVBQUU7UUFDUCxPQUFPLEVBQUUsUUFBUTtRQUNqQixNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7SUFDRCxNQUFNLEVBQUUsTUFBTTtJQUNkLEdBQUcsRUFBRTtRQUNILGVBQWUsRUFBRSxJQUFJO0tBQ3RCO0lBQ0QsZUFBZSxFQUFFLFNBQVM7SUFDMUIsT0FBTyxFQUFFO1FBQ1AsTUFBTSxFQUFFO1lBQ047Z0JBQ0UsR0FBRyxFQUFFLGFBQWE7Z0JBQ2xCLE1BQU0sRUFBRSw0QkFBYztnQkFDdEIsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0Y7Q0FDRjtBQUVZLFlBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBRS9DLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7SUFDaEMsWUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO0lBQzdELFlBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQ3RCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNDVyxpQkFBUyxHQUFHO0lBQ3ZCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLE1BQU07SUFDWixRQUFRLEVBQUUsVUFBVTtJQUNwQixLQUFLLEVBQUUsT0FBTztJQUNkLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxtQkFBbUIsRUFBRSxxQkFBcUI7SUFDMUMsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsWUFBWSxFQUFFLGNBQWM7SUFDNUIsb0JBQW9CLEVBQUUsc0JBQXNCO0lBQzVDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsZUFBZSxFQUFFLGlCQUFpQjtDQUNuQztBQUVZLGlCQUFTLEdBQUc7SUFDdkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsbUJBQW1CLEVBQUUsaUJBQWlCO0lBQ3RDLGFBQWEsRUFBRSxlQUFlO0lBQzlCLEtBQUssRUFBRSxPQUFPO0lBQ2QsSUFBSSxFQUFFLE1BQU07Q0FDYjtBQUVZLHNCQUFjLEdBQUc7SUFDNUIsaUJBQVMsQ0FBQyxRQUFRO0lBQ2xCLGlCQUFTLENBQUMsUUFBUTtJQUNsQixpQkFBUyxDQUFDLFFBQVE7SUFDbEIsaUJBQVMsQ0FBQyxLQUFLO0lBQ2YsaUJBQVMsQ0FBQyxJQUFJO0lBQ2QsaUJBQVMsQ0FBQyxRQUFRO0lBQ2xCLGlCQUFTLENBQUMsZUFBZTtJQUN6QixpQkFBUyxDQUFDLG1CQUFtQjtJQUM3QixpQkFBUyxDQUFDLGFBQWE7SUFDdkIsaUJBQVMsQ0FBQyxLQUFLO0lBQ2YsaUJBQVMsQ0FBQyxJQUFJO0NBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERELDZFQUEyRDtBQUMzRCwwRkFBb0Q7QUFDcEQsOEdBQStFO0FBQy9FLDZIQUFrRTtBQUVsRSx3R0FBd0U7QUFDeEUsd0ZBQTRDO0FBRTVDLHdGQUE0QztBQUM1Qyx5R0FBc0U7QUFDdEUsd0ZBQTREO0FBRy9DLHNCQUFjLEdBQUcsTUFBTTtBQUVwQyxJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxzQkFBYztDQUNwQjtBQUVEO0lBQStCLDZCQUFZO0lBQ3pDO1FBQUEsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFtRE8sZ0JBQVUsR0FBRzs7Ozs7d0JBQ2IsT0FBTyxHQUFHLHFCQUFVLEVBQUU7NkJBQ3hCLE9BQU8sRUFBUCx3QkFBTzt3QkFDVCxxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDOzt3QkFBckMsU0FBcUM7Ozt3QkFFckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMscUNBQW1CLENBQUM7Ozs7O2FBRXhDO1FBRU8sdUJBQWlCLEdBQUcsVUFBTyxPQUFnQjs7Ozs0QkFDNUIscUJBQU0saUNBQWdCLEVBQUU7O3dCQUF2QyxZQUFZLEdBQUcsU0FBd0I7d0JBQ3ZDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTt3QkFDdkIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRO3dCQUNoQixxQkFBTSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOzt3QkFBdEQsUUFBUSxHQUFHLFNBQTJDOzZCQUN4RCxRQUFRLEVBQVIsd0JBQVE7d0JBQ1YscUJBQU0sSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUM7O3dCQUFwRCxTQUFvRDs7NEJBRXBELHFCQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDOzt3QkFBaEQsU0FBZ0Q7Ozs7O2FBRW5EO1FBRU8seUJBQW1CLEdBQUcsVUFBTyxNQUFjLEVBQUUsUUFBMEI7Ozs7Ozt3QkFHbEUscUJBQU0sZUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O3dCQUFyQyxNQUFNLEdBQUcsU0FBNEI7Ozs7d0JBRXJDLElBQUksQ0FBQyxXQUFXLENBQUMsbURBQW1ELENBQUM7d0JBQ3JFLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBQyxDQUFDO3dCQUNoQixzQkFBTTs7d0JBRVIsSUFBSSxRQUFRLEVBQUU7NEJBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQzt5QkFDOUM7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDO3lCQUNsQzs7OzthQUNGO1FBRU8sa0JBQVksR0FBRyxVQUFPLE1BQWMsRUFBRSxNQUFjOzs7OzRCQUN2QyxxQkFBTSxNQUFNLENBQUMsSUFBSSxFQUFFOzt3QkFBaEMsVUFBVSxHQUFHLFNBQW1CO3dCQUN0QyxJQUFJLFVBQVUsRUFBRTs0QkFDTixRQUFRLEdBQUssVUFBVSxTQUFmLENBQWU7NEJBQy9CLHFCQUFVLENBQUMsRUFBRSxNQUFNLFVBQUUsUUFBUSxZQUFFLENBQUM7NEJBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3lCQUN0Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLGdEQUFnRCxDQUFDO3lCQUNuRTs7OzthQUNGO1FBRU8saUJBQVcsR0FBRyxVQUFDLE9BQWU7WUFDOUIsU0FBb0IsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUExQyxLQUFLLGFBQUUsTUFBTSxZQUE2QjtZQUNsRCxLQUFJLENBQUMsR0FBRztpQkFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQztpQkFDcEMsU0FBUyxDQUFDLEdBQUcsQ0FBQztpQkFDZCxXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFFTyxvQkFBYyxHQUFHLFVBQU8sTUFBYyxFQUFFLE1BQWMsRUFBRSxRQUFrQjs7Ozs0QkFDN0QscUJBQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7O3dCQUExQyxVQUFVLEdBQUcsU0FBNkI7d0JBQ2hELElBQUksVUFBVSxFQUFFOzRCQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3lCQUN0Qjs2QkFBTTs0QkFDTCxzQkFBc0I7eUJBQ3ZCOzs7O2FBQ0Y7UUFFTyxjQUFRLEdBQUcsVUFBQyxNQUFjO1lBQ2hDLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3BDLElBQU0sU0FBUyxHQUFrQixFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUU7Z0JBQzNELEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDJCQUFjLEVBQUUsU0FBUyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLElBQU0sU0FBUyxHQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUU7Z0JBQzVELEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDZCQUFlLEVBQUUsU0FBUyxDQUFDO2FBQzdDO1FBQ0gsQ0FBQztRQUVPLHlCQUFtQixHQUFHLFVBQU8sTUFBYyxFQUFFLFlBQTBCOzs7OzRCQUM5RCxxQkFBTSxlQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7O3dCQUF2RCxNQUFNLEdBQUcsU0FBOEM7d0JBQ3ZELFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVTt3QkFDcEMsSUFBSSxVQUFVLENBQUMsY0FBYyxFQUFFOzRCQUN2QixTQUFTLEdBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRTs0QkFDM0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsMkJBQWMsRUFBRSxTQUFTLENBQUM7eUJBQzVDOzZCQUFNOzRCQUNDLFNBQVMsR0FBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFOzRCQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyw2QkFBZSxFQUFFLFNBQVMsQ0FBQzt5QkFDN0M7Ozs7YUFDRjs7SUF4SUQsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7UUFBQSxpQkErQ0M7UUE5Q0MsSUFBTSxTQUFTLEdBQUcsc0JBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHO1FBQzFDLElBQU0sVUFBVSxHQUFHLHVCQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRztRQUU1QyxJQUFNLGlCQUFpQixHQUFHLEdBQUc7UUFDN0IsSUFBTSxnQkFBZ0IsR0FBRyxHQUFHO1FBRTVCLElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQzdDLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixRQUFRLENBQ1Q7UUFDRCxJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FDcEMsU0FBUyxHQUFHLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUNqRCxVQUFVLEVBQ1YsRUFBRSxFQUNGLGlCQUFpQixHQUFHLEVBQUUsRUFDdEIsUUFBUSxDQUNUO1FBRUQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxVQUFVLEdBQUcsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDakcsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUNuRixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxFQUFFLFVBQVUsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUVyRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFhO1lBQ3JDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLO1lBRW5ELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUN2QyxXQUFXLENBQUMsT0FBTyxDQUFJLE9BQU8sTUFBRyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFDLElBQWdCO1lBQzVDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDdkIsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3JCLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFDbkIsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQixvQkFBb0IsQ0FBQyxPQUFPLEVBQUU7WUFDOUIsS0FBSSxDQUFDLFVBQVUsRUFBRTtRQUNuQixDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxFQUFFO0lBQ25CLENBQUM7SUF5Rk8sOEJBQVUsR0FBbEI7UUFDRSxpRUFBaUU7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxPQUFPLEVBQUUsbUNBQW1DLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxXQUFXLEVBQUUsMkNBQTJDLENBQUM7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxXQUFXLEVBQUUsMkNBQTJDLENBQUM7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxXQUFXLEVBQUUsMkNBQTJDLENBQUM7UUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxXQUFXLEVBQUUsMkNBQTJDLENBQUM7UUFFbkYsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsZUFBZSxFQUFFLDJDQUEyQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsZ0JBQWdCLEVBQUUsNENBQTRDLENBQUM7UUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxrQkFBa0IsRUFBRSw4Q0FBOEMsQ0FBQztRQUM3RixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBUyxDQUFDLG1CQUFtQixFQUFFLCtDQUErQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsaUJBQWlCLEVBQUUsNkNBQTZDLENBQUM7UUFDM0YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxlQUFlLEVBQUUsMkNBQTJDLENBQUM7UUFDdkYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxZQUFZLEVBQUUsaUNBQWlDLENBQUM7UUFDMUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxvQkFBb0IsRUFBRSx5Q0FBeUMsQ0FBQztRQUUxRixpREFBaUQ7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxTQUFTLEVBQUUsOEJBQThCLENBQUM7UUFDcEUsdURBQXVEO1FBQ3ZELGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBUyxDQUFDLEtBQUssRUFBRSwyQkFBMkIsQ0FBQztRQUM3RCxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxJQUFJLEVBQUUsc0NBQXNDLENBQUM7UUFDdkUsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsUUFBUSxFQUFFLG9DQUFvQyxDQUFDO1FBQ3pFLCtDQUErQztRQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBUyxDQUFDLEtBQUssRUFBRSwwQkFBMEIsQ0FBQztRQUU1RCwrRUFBK0U7UUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxlQUFlLEVBQUUsb0NBQW9DLENBQUM7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxlQUFlLEVBQUUsb0NBQW9DLENBQUM7UUFFaEYsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDO1FBQ2pFLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBUyxDQUFDLEtBQUssRUFBRSx5QkFBeUIsQ0FBQztRQUMzRCxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxJQUFJLEVBQUUsbUNBQW1DLENBQUM7UUFDcEUsd0RBQXdEO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsUUFBUSxFQUFFLGdDQUFnQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsbUJBQW1CLEVBQUUsZ0NBQWdDLENBQUM7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxlQUFlLEVBQUUsb0NBQW9DLENBQUM7UUFFaEYsOENBQThDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFTLENBQUMsYUFBYSxFQUFFLDhCQUE4QixDQUFDO1FBRXhFLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxzQkFBUyxDQUFDLEtBQUssRUFBRSx3QkFBd0IsQ0FBQztRQUMxRCxzREFBc0Q7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsc0JBQVMsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUM7SUFDMUQsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQXZNOEIsTUFBTSxDQUFDLEtBQUssR0F1TTFDO0FBdk1ZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDWlQsa0JBQVUsR0FBRztJQUN4QixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7SUFDakMsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1FBQ2YsT0FBTTtLQUNQO0lBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDaEMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUMxQixJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztJQUMvRSxPQUFPLEVBQUUsTUFBTSxVQUFFLFFBQVEsWUFBRTtBQUM3QixDQUFDO0FBRVksa0JBQVUsR0FBRyxVQUFDLE9BQWdCO0lBQ3pDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNO0lBQ3pCLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7UUFDbEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUTtLQUMvQjtJQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUk7QUFDN0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRCxJQUFPLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7QUFLdEIsb0JBQVksR0FBRyxVQUFDLFlBQTBCLElBQW1CLFlBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQTFDLENBQTBDO0FBRXZHLDRCQUFvQixHQUFHLG9CQUFZLENBQUMsU0FBUyxDQUFDO0FBQzlDLDJCQUFtQixHQUFHLG9CQUFZLENBQUMsU0FBUyxDQUFDO0FBQzdDLDBCQUFrQixHQUFHLG9CQUFZLENBQUMsU0FBUyxDQUFDO0FBRTVDLGtDQUEwQixHQUFHLG9CQUFZLENBQUMsU0FBUyxDQUFDO0FBQ3BELHlCQUFpQixHQUFHLG9CQUFZLENBQUMsU0FBUyxDQUFDO0FBQzNDLG1DQUEyQixHQUFHLG9CQUFZLENBQUMsU0FBUyxDQUFDO0FBQ3JELHFDQUE2QixHQUFHLG9CQUFZLENBQUMsU0FBUyxDQUFDO0FBRXZELDBCQUFrQixHQUFHLFNBQVM7QUFDOUIsZ0NBQXdCLEdBQUcsU0FBUztBQUVwQyxvQkFBWSxHQUFHO0lBQzFCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxTQUFTO0NBQ1YsQ0FBQyxHQUFHLENBQUMsb0JBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbkIsNkVBQTBCO0FBRzFCLG9KQUFzRTtBQUV0RTtJQUlFLHVCQUFZLFVBQXNCLEVBQUUsY0FBOEI7UUFBbEUsaUJBR0M7UUFFTSxxQkFBZ0IsR0FBRztZQUN4QixZQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQXhFLENBQXdFO1FBVW5FLHVCQUFrQixHQUFHLFVBQUMsR0FBUSxJQUFtQixZQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUF2QyxDQUF1QztRQUV4Riw2QkFBd0IsR0FBRyxVQUFDLElBQVU7WUFDM0MsV0FBSSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFNBQVM7UUFBcEcsQ0FBb0c7UUFFL0YsK0JBQTBCLEdBQUcsVUFBQyxJQUFVO1lBQzdDLFdBQUksQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTO1FBQXBHLENBQW9HO1FBRS9GLHFCQUFnQixHQUFHLFVBQUMsSUFBVSxFQUFFLEdBQVE7WUFDN0MsWUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQztnQkFDbkMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2dCQUNuQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7Z0JBQ3BDLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztRQUo3QixDQUk2QjtRQUUvQjs7V0FFRztRQUNJLHFCQUFnQixHQUFHLFVBQUMsSUFBVSxFQUFFLFFBQWEsRUFBRSxVQUFzQjtZQUMxRSxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1lBQ3BELElBQ0UsS0FBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQztnQkFDckMsVUFBVSxLQUFLLFNBQVM7Z0JBQ3hCLFVBQVUsQ0FBQyxRQUFRLEtBQUssS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRO2dCQUNwRCw0Q0FBYyxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztnQkFFeEUsT0FBTyxVQUFVO1FBQ3JCLENBQUM7UUFFTSx3Q0FBbUMsR0FBRyxVQUFDLE1BQWU7O1lBQzNELElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQzdCLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxFQUNqQixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLHNCQUFzQixFQUEzQixDQUEyQixDQUFDLENBQy9GO1lBQ0QsSUFBSSxNQUFNO2dCQUNSLE9BQU8sT0FDTCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxtQ0FDekQsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxFQUFoQixDQUFnQixDQUFDLENBQUMsQ0FDMUQ7O2dCQUNFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDcEMsQ0FBQztRQUVNLHFCQUFnQixHQUFHO1lBQ3hCLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7WUFDeEQsSUFBSSxDQUFDLE1BQU07Z0JBQUUsTUFBTSxtQ0FBaUMsS0FBSSxDQUFDLFFBQVU7WUFDbkUsT0FBTyxNQUFNO1FBQ2YsQ0FBQztRQTdEQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjO0lBQ3RDLENBQUM7SUFLRCxzQkFBVyxzQ0FBVzthQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsbUNBQVE7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUTtRQUNyQyxDQUFDOzs7T0FBQTtJQWlESCxvQkFBQztBQUFELENBQUM7QUFuRVksc0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMUIsMEVBQWtDO0FBSXJCLG1CQUFXLEdBQUcsVUFBQyxHQUFRLElBQVksUUFBQztJQUMvQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNwRCxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7Q0FDbkIsQ0FBQyxFQUg4QyxDQUc5QztBQUVXLGlCQUFTLEdBQUcsVUFBQyxLQUFZO0lBQ3BDLElBQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNwRCxJQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUMzQixPQUFPLEtBQUssQ0FBQyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELElBQU0sS0FBSyxHQUFHLFVBQUMsR0FBUTtJQUNyQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDNUIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUU1QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVsQyxJQUFJLEtBQUssR0FBRyxLQUFLLElBQUksS0FBSyxHQUFHLEtBQUs7UUFBRSxPQUFPLElBQUksU0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDM0QsSUFBSSxLQUFLLEdBQUcsS0FBSztRQUFFLE9BQU8sSUFBSSxTQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7UUFDL0MsT0FBTyxJQUFJLFNBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFFRCxJQUFN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LFFBQVE7U0FDeEIsQ0FBQztJQVBGLENBT0U7SUE0Qk4saUJBQUM7Q0FBQTtBQXZLWSxnQ0FBVSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgRGV4aWUsIHsgQ29sbGVjdGlvbiB9IGZyb20gJ2RleGllJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFdvcmxkRXZlbnRSZWNvcmQge1xuICBnYW1lSWQ6IEdhbWVJZFxuICBldmVudDogYW55IC8vIHNlcmlhbGlzZWQgV29ybGRFdmVudFxufVxuXG5leHBvcnQgY2xhc3MgTGxhbWFEZXhpZSBleHRlbmRzIERleGllIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIHdvcmxkRXZlbnRzOiBEZXhpZS5UYWJsZTxXb3JsZEV2ZW50UmVjb3JkLCBzdHJpbmc+XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuV29ybGRFdmVudERiID0gYXN5bmMgKCk6IFByb21pc2U8V29ybGRFdmVudERiPiA9PiB7XG4gIGNvbnN0IGRleGllID0gbmV3IERleGllKCdsbGFtYS13YXJzJylcbiAgZGV4aWUudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgIHdvcmxkRXZlbnRzOiAnKyssZ2FtZUlkJyxcbiAgfSlcbiAgYXdhaXQgZGV4aWUub3BlbigpXG4gIHJldHVybiBuZXcgV29ybGRFdmVudERiKDxMbGFtYURleGllPmRleGllKVxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRFdmVudERiIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkZXhpZTogTGxhbWFEZXhpZVxuXG4gIGNvbnN0cnVjdG9yKGRleGllOiBMbGFtYURleGllKSB7XG4gICAgdGhpcy5kZXhpZSA9IGRleGllXG4gIH1cblxuICBwdWJsaWMgc3RvcmUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQsIGV2ZW50OiBXb3JsZEV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYXdhaXQgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy5hZGQoe1xuICAgICAgZ2FtZUlkLFxuICAgICAgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCksXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRFdmVudHNGb3JHYW1lID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxXb3JsZEV2ZW50W10+ID0+IHtcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy53aGVyZSgnZ2FtZUlkJykuZXF1YWxzKGdhbWVJZCkudG9BcnJheSgpXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGRlc2VyaWFsaXNlRnJvbUpzb24ocmVjb3JkLmV2ZW50KSlcbiAgfVxuXG4gIHB1YmxpYyBoYXNFdmVudHNGb3JHYW1lID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgdGhpcy5xdWVyeUV2ZW50c0J5R2FtZUlkKGdhbWVJZCkuZmlyc3QoKVxuICAgIHJldHVybiByZWNvcmQgIT09IHVuZGVmaW5lZFxuICB9XG5cbiAgcHJpdmF0ZSBxdWVyeUV2ZW50c0J5R2FtZUlkID0gKGdhbWVJZDogc3RyaW5nKTogQ29sbGVjdGlvbjxXb3JsZEV2ZW50UmVjb3JkLCBzdHJpbmc+ID0+XG4gICAgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy53aGVyZSgnZ2FtZUlkJykuZXF1YWxzKGdhbWVJZClcbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoXG59XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHRcbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJ1xuaW1wb3J0IFRleHRFZGl0UGx1Z2luIGZyb20gJ3BoYXNlcjMtcmV4LXBsdWdpbnMvcGx1Z2lucy90ZXh0ZWRpdC1wbHVnaW4uanMnXG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnTGxhbWEgV2FycycsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG5cbiAgc2NhbGU6IHtcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gIH0sXG5cbiAgc2NlbmU6IFNjZW5lcyxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBwYXJlbnQ6ICdnYW1lJyxcbiAgZG9tOiB7XG4gICAgY3JlYXRlQ29udGFpbmVyOiB0cnVlLFxuICB9LFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcbiAgcGx1Z2luczoge1xuICAgIGdsb2JhbDogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdyZXhUZXh0RWRpdCcsXG4gICAgICAgIHBsdWdpbjogVGV4dEVkaXRQbHVnaW4sXG4gICAgICAgIHN0YXJ0OiB0cnVlLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxufVxuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lLnNjYWxlLnNldEdhbWVTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpXG59KVxuIiwiZXhwb3J0IGNvbnN0IEltYWdlS2V5cyA9IHtcbiAgTExBTUFfMTogJ2xsYW1hLTEnLFxuICBMTEFNQV8yOiAnbGxhbWEtMicsXG4gIExMQU1BXzM6ICdsbGFtYS0zJyxcbiAgTExBTUFfNDogJ2xsYW1hLTQnLFxuICBMTEFNQV9FQVRfMTogJ2xsYW1hLWVhdC0xJyxcbiAgTExBTUFfRUFUXzI6ICdsbGFtYS1lYXQtMicsXG4gIExMQU1BX0VBVF8zOiAnbGxhbWEtZWF0LTMnLFxuICBMTEFNQV9FQVRfNDogJ2xsYW1hLWVhdC00JyxcbiAgSE9VUkdMQVNTOiAnaG91cmdsYXNzJyxcbiAgR1JBU1M6ICdncmFzcycsXG4gIFNQSVQ6ICdzcGl0JyxcbiAgTU9VTlRBSU46ICdtb3VudGFpbicsXG4gIENST1dOOiAnY3Jvd24nLFxuICBCT1JERVJfVE9QX0xFRlQ6ICdib3JkZXItdG9wLWxlZnQnLFxuICBCT1JERVJfQk9UVE9NX0xFRlQ6ICdib3JkZXItYm90dG9tLWxlZnQnLFxuICBCT1JERVJfVE9QX1JJR0hUOiAnYm9yZGVyLXRvcC1yaWdodCcsXG4gIEJPUkRFUl9CT1RUT01fUklHSFQ6ICdib3JkZXItYm90dG9tLXJpZ2h0JyxcbiAgQk9SREVSX0hPUklaT05UQUw6ICdib3JkZXItaG9yaXpvbnRhbCcsXG4gIEJPUkRFUl9WRVJUSUNBTDogJ2JvcmRlci12ZXJ0aWNhbCcsXG4gIEJMQU5LX0JVVFRPTjogJ2JsYW5rLWJ1dHRvbicsXG4gIEJMQU5LX0JVVFRPTl9QUkVTU0VEOiAnYmxhbmstYnV0dG9uLXByZXNzZWQnLFxuICBERUxFVEVfQlVUVE9OXzE6ICdkZWxldGUtYnV0dG9uLTEnLFxuICBERUxFVEVfQlVUVE9OXzI6ICdkZWxldGUtYnV0dG9uLTInLFxufVxuXG5leHBvcnQgY29uc3QgQXVkaW9LZXlzID0ge1xuICBBVFRBQ0tfMTogJ2F0dGFjazEnLFxuICBBVFRBQ0tfMjogJ2F0dGFjazInLFxuICBBVFRBQ0tfMzogJ2F0dGFjazMnLFxuICBERUFUSDogJ2RlYXRoJyxcbiAgV0FMSzogJ3dhbGsnLFxuICBORVdfVFVSTjogJ25ldy10dXJuJyxcbiAgUExBWUVSX0RFRkVBVEVEOiAncGxheWVyLWRlZmVhdGVkJyxcbiAgUExBWUVSX0pPSU5FRF9MT0JCWTogJ3BsYXllci1kZWZlYXRlZCcsXG4gIFZJQ1RPUllfTVVTSUM6ICd2aWN0b3J5LW11c2ljJyxcbiAgQ0xJQ0s6ICdjbGljaycsXG4gIFNQSVQ6ICdzcGl0Jyxcbn1cblxuZXhwb3J0IGNvbnN0IEFMTF9BVURJT19LRVlTID0gW1xuICBBdWRpb0tleXMuQVRUQUNLXzEsXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMixcbiAgQXVkaW9LZXlzLkFUVEFDS18zLFxuICBBdWRpb0tleXMuREVBVEgsXG4gIEF1ZGlvS2V5cy5XQUxLLFxuICBBdWRpb0tleXMuTkVXX1RVUk4sXG4gIEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsXG4gIEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZLFxuICBBdWRpb0tleXMuVklDVE9SWV9NVVNJQyxcbiAgQXVkaW9LZXlzLkNMSUNLLFxuICBBdWRpb0tleXMuU1BJVCxcbl1cbiIsImltcG9ydCB7IGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnXG5pbXBvcnQgeyBBdWRpb0tleXMsIEltYWdlS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZUlkLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNQUlOX01FTlVfU0NFTkVfS0VZIH0gZnJvbSAnLi4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBvcGVuV29ybGRFdmVudERiLCBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi8uLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBMT0JCWV9TQ0VORV9LRVksIExvYmJ5U2NlbmVEYXRhIH0gZnJvbSAnLi4vbG9iYnkvbG9iYnktc2NlbmUnXG5pbXBvcnQgeyBnZXRVcmxJbmZvLCBzZXRVcmxJbmZvLCBVcmxJbmZvIH0gZnJvbSAnLi91cmwtaW5mbydcbmltcG9ydCBGaWxlQ29uZmlnID0gUGhhc2VyLlR5cGVzLkxvYWRlci5GaWxlQ29uZmlnXG5cbmV4cG9ydCBjb25zdCBCT09UX1NDRU5FX0tFWSA9ICdCb290J1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogQk9PVF9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIHB1YmxpYyBwcmVsb2FkKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNVxuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckhlaWdodCA9IDEwMFxuICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSA0MDBcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoLFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIHByb2dyZXNzQmFyV2lkdGgsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCxcbiAgICAgIDB4MDAwMDAwLFxuICAgIClcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgMTAsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCAtIDIwLFxuICAgICAgMHg4ODg4ODgsXG4gICAgKVxuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWVcblxuICAgICAgY29uc3QgcGVyY2VudCA9IE1hdGgucm91bmQodmFsdWUgKiAxMDApXG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGU6IEZpbGVDb25maWcpID0+IHtcbiAgICAgIGFzc2V0VGV4dC5zZXRUZXh0KGZpbGUua2V5KVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KClcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLmxhdW5jaEdhbWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2hHYW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHVybEluZm8gPSBnZXRVcmxJbmZvKClcbiAgICBpZiAodXJsSW5mbykge1xuICAgICAgYXdhaXQgdGhpcy5qb2luT3JSZXN0b3JlR2FtZSh1cmxJbmZvKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KE1BSU5fTUVOVV9TQ0VORV9LRVkpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luT3JSZXN0b3JlR2FtZSA9IGFzeW5jICh1cmxJbmZvOiBVcmxJbmZvKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRFdmVudERiID0gYXdhaXQgb3BlbldvcmxkRXZlbnREYigpXG4gICAgY29uc3QgZ2FtZUlkID0gdXJsSW5mby5nYW1lSWRcbiAgICBjb25zdCBwbGF5ZXJJZCA9IHVybEluZm8ucGxheWVySWRcbiAgICBjb25zdCBpc1NlcnZlciA9IGF3YWl0IHdvcmxkRXZlbnREYi5oYXNFdmVudHNGb3JHYW1lKGdhbWVJZClcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVzdG9yZUdhbWVBc1NlcnZlcihnYW1lSWQsIHdvcmxkRXZlbnREYilcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5qb2luT3JSZXN0b3JlQ2xpZW50KGdhbWVJZCwgcGxheWVySWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luT3JSZXN0b3JlQ2xpZW50ID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCBwbGF5ZXJJZDogT3B0aW9uPFBsYXllcklkPik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGxldCBjbGllbnRcbiAgICB0cnkge1xuICAgICAgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmNvbm5lY3QoZ2FtZUlkKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2hvd01lc3NhZ2UoJ1VuYWJsZSB0byBqb2luIGdhbWUsIGNvdWxkIG5vdCBjb25uZWN0IHRvIHNlcnZlci4nKVxuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChwbGF5ZXJJZCkge1xuICAgICAgdGhpcy5yZWpvaW5Bc0NsaWVudChjbGllbnQsIGdhbWVJZCwgcGxheWVySWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuam9pbkFzQ2xpZW50KGNsaWVudCwgZ2FtZUlkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbkFzQ2xpZW50ID0gYXN5bmMgKGNsaWVudDogQ2xpZW50LCBnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGpvaW5SZXN1bHQgPSBhd2FpdCBjbGllbnQuam9pbigpXG4gICAgaWYgKGpvaW5SZXN1bHQpIHtcbiAgICAgIGNvbnN0IHsgcGxheWVySWQgfSA9IGpvaW5SZXN1bHRcbiAgICAgIHNldFVybEluZm8oeyBnYW1lSWQsIHBsYXllcklkIH0pXG4gICAgICB0aGlzLmpvaW5HYW1lKGNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93TWVzc2FnZSgnVW5hYmxlIHRvIGpvaW4gZ2FtZSBhcyBpdCBoYXMgYWxyZWFkeSBzdGFydGVkLicpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93TWVzc2FnZSA9IChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuZ2FtZS5zY2FsZS5nYW1lU2l6ZVxuICAgIHRoaXMuYWRkXG4gICAgICAudGV4dCh3aWR0aCAvIDIsIGhlaWdodCAvIDIsIG1lc3NhZ2UpXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNClcbiAgfVxuXG4gIHByaXZhdGUgcmVqb2luQXNDbGllbnQgPSBhc3luYyAoY2xpZW50OiBDbGllbnQsIGdhbWVJZDogR2FtZUlkLCBwbGF5ZXJJZDogUGxheWVySWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gYXdhaXQgY2xpZW50LnJlam9pbihwbGF5ZXJJZClcbiAgICBpZiAod29ybGRTdGF0ZSkge1xuICAgICAgdGhpcy5qb2luR2FtZShjbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IGluZm9ybSBjbGllbnRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5HYW1lID0gKGNsaWVudDogQ2xpZW50KSA9PiB7XG4gICAgaWYgKGNsaWVudC53b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50IH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlR2FtZUFzU2VydmVyID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHNlcnZlciA9IGF3YWl0IFNlcnZlci5yZXN0b3JlR2FtZSh3b3JsZEV2ZW50RGIsIGdhbWVJZClcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoR0FNRV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbHBjLXN0eWxlLWZhcm0tYW5pbWFsc1xuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfMSwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hL2xsYW1hXzE1LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV8yLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWEvbGxhbWFfMTQucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BXzMsICdhc3NldHMvc3ByaXRlcy9sbGFtYS9sbGFtYV8xMy5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfNCwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hL2xsYW1hXzEyLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV9FQVRfMSwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hLWVhdC9sbGFtYV9lYXRfMTIucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BX0VBVF8yLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWEtZWF0L2xsYW1hX2VhdF8xMy5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfRUFUXzMsICdhc3NldHMvc3ByaXRlcy9sbGFtYS1lYXQvbGxhbWFfZWF0XzE0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV9FQVRfNCwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hLWVhdC9sbGFtYV9lYXRfMTUucG5nJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvcnBnLWd1aS1jb25zdHJ1Y3Rpb24ta2l0LXYxMFxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuQk9SREVSX1RPUF9MRUZULCAnYXNzZXRzL3Nwcml0ZXMvYm9yZGVyL2JvcmRlci10b3AtbGVmdC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuQk9SREVSX1RPUF9SSUdIVCwgJ2Fzc2V0cy9zcHJpdGVzL2JvcmRlci9ib3JkZXItdG9wLXJpZ2h0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CT1JERVJfQk9UVE9NX0xFRlQsICdhc3NldHMvc3ByaXRlcy9ib3JkZXIvYm9yZGVyLWJvdHRvbS1sZWZ0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CT1JERVJfQk9UVE9NX1JJR0hULCAnYXNzZXRzL3Nwcml0ZXMvYm9yZGVyL2JvcmRlci1ib3R0b20tcmlnaHQucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkJPUkRFUl9IT1JJWk9OVEFMLCAnYXNzZXRzL3Nwcml0ZXMvYm9yZGVyL2JvcmRlci1ob3Jpem9udGFsLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CT1JERVJfVkVSVElDQUwsICdhc3NldHMvc3ByaXRlcy9ib3JkZXIvYm9yZGVyLXZlcnRpY2FsLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5CTEFOS19CVVRUT04sICdhc3NldHMvc3ByaXRlcy9ibGFuay1idXR0b24ucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkJMQU5LX0JVVFRPTl9QUkVTU0VELCAnYXNzZXRzL3Nwcml0ZXMvYmxhbmstYnV0dG9uLXByZXNzZWQucG5nJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaG91cmdsYXNzLWljb25cbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkhPVVJHTEFTUywgJ2Fzc2V0cy9zcHJpdGVzL0hvdXJnbGFzcy5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtdGV4dHVyZXMtdGlsZXNcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLXRleHR1cmVcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkdSQVNTLCAnYXNzZXRzL3Nwcml0ZXMvZ3Jhc3MyLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9wdWRkbGUtY29ycHNlc1xuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuU1BJVCwgJ2Fzc2V0cy9zcHJpdGVzL3B1ZGRsZV9saWdodF9ibHVlLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC93b3JsZC1tYXAtdGlsZXNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLk1PVU5UQUlOLCAnYXNzZXRzL3Nwcml0ZXMvbW91bnRhaW5zX291dGVyLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9nYW1lLWljb25zLTBcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkNST1dOLCAnYXNzZXRzL3Nwcml0ZXMvY3Jvd24ucG5nJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvMjUwLWh1ZC1hbmQtaW50ZXJmYWNlLWljb25zLXVua25vd24taG9yaXpvbnNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkRFTEVURV9CVVRUT05fMSwgJ2Fzc2V0cy9zcHJpdGVzL2RlbGV0ZS1idXR0b24tMS5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuREVMRVRFX0JVVFRPTl8yLCAnYXNzZXRzL3Nwcml0ZXMvZGVsZXRlLWJ1dHRvbi0yLnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50LzM3LWhpdHNwdW5jaGVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMSwgJ2Fzc2V0cy9hdWRpby9oaXQxNC5tcDMubXAzJylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18yLCAnYXNzZXRzL2F1ZGlvL2hpdDE3Lm1wMy5tcDMnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzMsICdhc3NldHMvYXVkaW8vaGl0MTgubXAzLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9tYWxlLWdydW50eWVsbGluZy1zb3VuZHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkRFQVRILCAnYXNzZXRzL2F1ZGlvLzF5ZWxsNC53YXYnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtZm9vdC1zdGVwLXNvdW5kcy15by1mcmFua2llXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5XQUxLLCAnYXNzZXRzL2F1ZGlvL3NmeF9zdGVwX2dyYXNzX2wubXAzJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3VpLXNvdW5kLWVmZmVjdHMtcGFja1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuTkVXX1RVUk4sICdhc3NldHMvYXVkaW8vTUVOVSBBX1NlbGVjdC53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSwgJ2Fzc2V0cy9hdWRpby9NRU5VIEJfU2VsZWN0LndhdicpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsICdhc3NldHMvYXVkaW8vTUVTU0FHRS1CX0RlY2xpbmUud2F2JylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvY2xlYXItc2tpZXNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsICdhc3NldHMvYXVkaW8vQ2xlYXIgU2tpZXMubXAzJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3VpLXNvdW5kLWVmZmVjdHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkNMSUNLLCAnYXNzZXRzL2F1ZGlvL2NsaWNrLndhdicpXG4gICAgLy9odHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL3R2bGF1ZGlvL3NvdW5kcy8yNjc4OTcvXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5TUElULCAnYXNzZXRzL2F1ZGlvL3NwaXQud2F2JylcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsSW5mbyB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIHBsYXllcklkPzogUGxheWVySWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVybEluZm8gPSAoKTogT3B0aW9uPFVybEluZm8+ID0+IHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gIGlmIChoYXNoID09PSAnJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHBhdGggPSBoYXNoLnN1YnN0cigxKVxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKVxuICBjb25zdCBnYW1lSWQgPSBzZWdtZW50c1swXVxuICBjb25zdCBwbGF5ZXJJZCA9IHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoc2VnbWVudHNbMV0pIDogdW5kZWZpbmVkXG4gIHJldHVybiB7IGdhbWVJZCwgcGxheWVySWQgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0VXJsSW5mbyA9ICh1cmxJbmZvOiBVcmxJbmZvKTogdm9pZCA9PiB7XG4gIGxldCBoYXNoID0gdXJsSW5mby5nYW1lSWRcbiAgaWYgKHVybEluZm8ucGxheWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGhhc2ggKz0gJy8nICsgdXJsSW5mby5wbGF5ZXJJZFxuICB9XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaFxufVxuIiwiaW1wb3J0IENvbG9yID0gUGhhc2VyLkRpc3BsYXkuQ29sb3JcblxuZXhwb3J0IHR5cGUgQ29sb3VyU3RyaW5nID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb2xvdXJOdW1iZXIgPSBudW1iZXJcblxuZXhwb3J0IGNvbnN0IGNvbG91ck51bWJlciA9IChjb2xvdXJTdHJpbmc6IENvbG91clN0cmluZyk6IENvbG91ck51bWJlciA9PiBDb2xvci5IZXhTdHJpbmdUb0NvbG9yKGNvbG91clN0cmluZykuY29sb3JcblxuZXhwb3J0IGNvbnN0IEhFQUxUSF9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRU1QVFlfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZmZmJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRlVMTF9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM0ZGYwMzcnKVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyMwMDAwMDAnKVxuZXhwb3J0IGNvbnN0IEhPVkVSX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjY2NmZmJlJylcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZkMDgnKVxuZXhwb3J0IGNvbnN0IFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjOWRmMWU3JylcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9URVhUX0NPTE9VUiA9ICcjY2NjYzAwJ1xuZXhwb3J0IGNvbnN0IEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiA9ICcjZmZmZjAwJ1xuXG5leHBvcnQgY29uc3QgUExBWUVSX1RJTlRTID0gW1xuICAnI2ZmYmJiYicsXG4gICcjYmJiYmZmJyxcbiAgJyNiYmZmYmInLFxuICAnI2JiZmZmZicsXG4gICcjZmZmZmJiJyxcbiAgJyNmZmJiZmYnLFxuICAnI2ZmZmZmZicsXG4gICcjYmJiYmJiJyxcbl0ubWFwKGNvbG91ck51bWJlcilcbiIsImltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEF0dGFja1R5cGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgY2FuQXR0YWNrT2NjdXIgfSBmcm9tICcuLi9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY2xhc3MgQ29tYmluZWRTdGF0ZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByb3RlY3RlZCByZWFkb25seSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gIH1cblxuICBwdWJsaWMgZmluZFNlbGVjdGVkVW5pdCA9ICgpOiBPcHRpb248VW5pdD4gPT5cbiAgICB0aGlzLnNlbGVjdGVkSGV4ID8gdGhpcy5maW5kVW5pdEluTG9jYXRpb24odGhpcy5zZWxlY3RlZEhleCkgOiB1bmRlZmluZWRcblxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSGV4KCk6IE9wdGlvbjxIZXg+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICB9XG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQgJiYgdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09PSB0aGlzLnBsYXllcklkICYmIHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDYW5Nb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgaGV4OiBIZXgpOiBib29sZWFuID0+XG4gICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkgJiZcbiAgICBoZXguaXNBZGphY2VudFRvKHVuaXQubG9jYXRpb24pICYmXG4gICAgdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkgJiZcbiAgICAhdGhpcy53b3JsZFN0YXRlLm1hcC5pc01vdW50YWluKGhleCkgJiZcbiAgICAhdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHRoZSB1bml0IGluIHRoZSBoZXggdG8gYXR0YWNrLCBpZiBhbiBhdHRhY2sgaXMgcG9zc2libGUsIGVsc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGljIHVuaXRDYW5BdHRhY2tIZXggPSAodW5pdDogVW5pdCwgbG9jYXRpb246IEhleCwgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VW5pdCA9IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGxvY2F0aW9uKVxuICAgIGlmIChcbiAgICAgIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkgJiZcbiAgICAgIHRhcmdldFVuaXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGFyZ2V0VW5pdC5wbGF5ZXJJZCAhPT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAmJlxuICAgICAgY2FuQXR0YWNrT2NjdXIoYXR0YWNrVHlwZSwgdGhpcy53b3JsZFN0YXRlLm1hcCwgdW5pdC5sb2NhdGlvbiwgbG9jYXRpb24pXG4gICAgKVxuICAgICAgcmV0dXJuIHRhcmdldFVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cyA9ICh1bml0SWQ/OiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT4ge1xuICAgIGNvbnN0IGNhbmRpZGF0ZVVuaXRzID0gUi5zb3J0QnkoXG4gICAgICAodW5pdCkgPT4gdW5pdC5pZCxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS5nZXRVbml0c0ZvclBsYXllcih0aGlzLnBsYXllcklkKS5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyksXG4gICAgKVxuICAgIGlmICh1bml0SWQpXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkID4gdW5pdElkKSkgPz9cbiAgICAgICAgUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCA8IHVuaXRJZCkpXG4gICAgICApXG4gICAgZWxzZSByZXR1cm4gUi5oZWFkKGNhbmRpZGF0ZVVuaXRzKVxuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGxheWVyIHdpdGggaWQgJHt0aGlzLnBsYXllcklkfWBcbiAgICByZXR1cm4gcGxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuXG5leHBvcnQgY29uc3QgY2VudGVyUG9pbnQgPSAoaGV4OiBIZXgpOiBQb2ludCA9PiAoe1xuICB4OiBoZXgueCAqIE1hdGguc3FydCgzKSArIChoZXgueSAqIE1hdGguc3FydCgzKSkgLyAyLFxuICB5OiAoaGV4LnkgKiAzKSAvIDIsXG59KVxuXG5leHBvcnQgY29uc3QgZnJvbVBvaW50ID0gKHBvaW50OiBQb2ludCk6IEhleCA9PiB7XG4gIGNvbnN0IHggPSAocG9pbnQueCAqIE1hdGguc3FydCgzKSkgLyAzIC0gcG9pbnQueSAvIDNcbiAgY29uc3QgeSA9ICgyICogcG9pbnQueSkgLyAzXG4gIHJldHVybiByb3VuZChuZXcgSGV4KHgsIHkpKVxufVxuXG5jb25zdCByb3VuZCA9IChoZXg6IEhleCk6IEhleCA9PiB7XG4gIGNvbnN0IHJ4ID0gTWF0aC5yb3VuZChoZXgueClcbiAgY29uc3QgcnkgPSBNYXRoLnJvdW5kKGhleC55KVxuICBjb25zdCByeiA9IE1hdGgucm91bmQoaGV4LnopXG5cbiAgY29uc3QgeERpZmYgPSBNYXRoLmFicyhyeCAtIGhleC54KVxuICBjb25zdCB5RGlmZiA9IE1hdGguYWJzKHJ5IC0gaGV4LnkpXG4gIGNvbnN0IHpEaWZmID0gTWF0aC5hYnMocnogLSBoZXgueSlcblxuICBpZiAoeERpZmYgPiB5RGlmZiAmJiB4RGlmZiA+IHpEaWZmKSByZXR1cm4gbmV3IEhleCgtcnkgLSByeiwgcnkpXG4gIGVsc2UgaWYgKHlEaWZmID4gekRpZmYpIHJldHVybiBuZXcgSGV4KHJ4LCAtcnggLSByeilcbiAgZWxzZSByZXR1cm4gbmV3IEhleChyeCwgcnkpXG59XG5cbmNvbnN0IGhleEFuZ2xlID0gTWF0aC5QSSAvIDNcbmNvbnN0IGhleE9mZnNldCA9IE1hdGguUEkgLyA2XG5cbmNvbnN0IGhleENvcm5lciA9IChjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIsIGk6IG51bWJlcik6IFBvaW50ID0+IHtcbiAgY29uc3QgYW5nbGVSYWRpYW5zID0gaGV4QW5nbGUgKiBpIC0gaGV4T2Zmc2V0XG4gIGNvbnN0IHggPSBjZW50ZXIueCArIHNpemUgKiBNYXRoLmNvcyhhbmdsZVJhZGlhbnMpXG4gIGNvbnN0IHkgPSBjZW50ZXIueSArIHNpemUgKiBNYXRoLnNpbihhbmdsZVJhZGlhbnMpXG4gIHJldHVybiB7IHgsIHkgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGhleENvcm5lcnMoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxQb2ludD4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHlpZWxkIGhleENvcm5lcihjZW50ZXIsIHNpemUsIGkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hcEhlaWdodCA9IChtYXA6IFdvcmxkTWFwKTogbnVtYmVyID0+IChtYXAuaGVpZ2h0ICogMykgLyAyXG5cbmV4cG9ydCBjb25zdCBoZXhXaWR0aCA9IChoZXhTaXplOiBudW1iZXIpOiBudW1iZXIgPT4gaGV4U2l6ZSAqIE1hdGguc3FydCgzKVxuIiwiaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290L2Jvb3Qtc2NlbmUnXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IExvYmJ5U2NlbmUgfSBmcm9tICcuL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBHYW1lU2NlbmUsIE1haW5NZW51U2NlbmUsIExvYmJ5U2NlbmVdXG4iLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVTY2VuZURhdGEgfSBmcm9tICcuLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgTG9iYnlEaXNwbGF5T2JqZWN0cyB9IGZyb20gJy4vbG9iYnktZGlzcGxheS1vYmplY3RzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyJ1xuaW1wb3J0IHsgZmlyZUFuZEZvcmdldCB9IGZyb20gJy4uLy4uL3V0aWwvYXN5bmMtdXRpbCdcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL2xvY2FsLXN0b3JhZ2UvbG9jYWwnXG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVkTG9iYnlTY2VuZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHJlYWRvbmx5IHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBsb2JieURpc3BsYXlPYmplY3RzOiBMb2JieURpc3BsYXlPYmplY3RzXG4gIHByaXZhdGUgbGlzdGVuZXI/OiBXb3JsZEV2ZW50TGlzdGVuZXJcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50KSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5zZXJ2ZXJPckNsaWVudCA9IHNlcnZlck9yQ2xpZW50XG4gICAgdGhpcy5wbGF5ZXJJZCA9IHNlcnZlck9yQ2xpZW50LnBsYXllcklkXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wYXVzZU9uQmx1ciA9IGZhbHNlXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLkNMSUNLKVxuICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKEF1ZGlvS2V5cy5ORVdfVFVSTilcbiAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZChBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSlcbiAgICB0aGlzLmxvYmJ5RGlzcGxheU9iamVjdHMgPSB0aGlzLm1ha2VMb2JieURpc3BsYXlPYmplY3RzKHNjZW5lLCB0aGlzLnBsYXllcklkKVxuICAgIGlmIChzZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIENsaWVudCkge1xuICAgICAgdGhpcy5hY3RBc0NsaWVudChzZXJ2ZXJPckNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcihzZXJ2ZXJPckNsaWVudClcbiAgICB9XG4gICAgdGhpcy5zeW5jKClcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUxvYmJ5RGlzcGxheU9iamVjdHMgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgcGxheWVySWQ6IFBsYXllcklkKSA9PlxuICAgIG5ldyBMb2JieURpc3BsYXlPYmplY3RzKHNjZW5lLCBwbGF5ZXJJZCwgdGhpcy5oYW5kbGVTdGFydEdhbWUsIHRoaXMuaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSwgdGhpcy5oYW5kbGVLaWNrUGxheWVyKVxuXG4gIHByaXZhdGUgYWN0QXNDbGllbnQgPSAoY2xpZW50OiBDbGllbnQpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVyID0gKGV2ZW50OiBXb3JsZEV2ZW50KSA9PiB0aGlzLmhhbmRsZVdvcmxkRXZlbnQoZXZlbnQsIGNsaWVudClcbiAgICBjbGllbnQuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlV29ybGRFdmVudCA9IChldmVudDogV29ybGRFdmVudCwgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgIHNlcnZlck9yQ2xpZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG4gICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF1bmNoR2FtZVNjZW5lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZKVxuICAgICAgICB0aGlzLnN5bmMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zeW5jKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxhdW5jaEdhbWVTY2VuZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7XG4gICAgICBzZXJ2ZXJPckNsaWVudDogdGhpcy5zZXJ2ZXJPckNsaWVudCxcbiAgICB9XG4gICAgdGhpcy5zY2VuZS5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lID0gKG5hbWU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgIExvY2FsU3RvcmFnZS5zdG9yZU5hbWUobmFtZSlcbiAgICB0aGlzLmRpc3BhdGNoQWN0aW9uKHsgdHlwZTogJ2NoYW5nZVBsYXllck5hbWUnLCBuYW1lIH0pXG4gIH1cblxuICBwcml2YXRlIGRpc3BhdGNoQWN0aW9uID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiB2b2lkID0+XG4gICAgZmlyZUFuZEZvcmdldCgoKSA9PiB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKSlcblxuICBwdWJsaWMgc3luYyA9ICgpOiB2b2lkID0+IHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cy5zeW5jKHRoaXMuc2VydmVyT3JDbGllbnQud29ybGRTdGF0ZSlcblxuICBwcml2YXRlIGFjdEFzU2VydmVyID0gKHNlcnZlcjogU2VydmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChldmVudCkgPT4gdGhpcy5oYW5kbGVXb3JsZEV2ZW50KGV2ZW50LCBzZXJ2ZXIpXG4gICAgc2VydmVyLmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpID0+IHRoaXMuZGlzcGF0Y2hBY3Rpb24oeyB0eXBlOiAnc3RhcnRHYW1lJyB9KVxuXG4gIHByaXZhdGUgaGFuZGxlS2lja1BsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpID0+IHtcbiAgICB0aGlzLmRpc3BhdGNoQWN0aW9uKHsgdHlwZTogJ2tpY2tQbGF5ZXInLCBwbGF5ZXJJZCB9KVxuICB9XG59XG4iLCJpbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBBdWRpb0tleXMsIEltYWdlS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBQTEFZRVJfVElOVFMgfSBmcm9tICcuLi9jb2xvdXJzJ1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL3ByaW1hcnktYnV0dG9uJ1xuXG5pbnRlcmZhY2UgUGxheWVyT2JqZWN0cyB7XG4gIG5hbWVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBsbGFtYTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxuICBraWNrQnV0dG9uPzogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG59XG5cbmV4cG9ydCBjbGFzcyBMb2JieURpc3BsYXlPYmplY3RzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHByaXZhdGUgcmVhZG9ubHkgb25TdGFydEdhbWU6IFZvaWRGdW5jdGlvblxuICBwcml2YXRlIHJlYWRvbmx5IG9uQ2hhbmdlUGxheWVyTmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZFxuICBwcml2YXRlIHJlYWRvbmx5IG9uS2lja1BsYXllcjogKHBsYXllcklkOiBQbGF5ZXJJZCkgPT4gdm9pZFxuXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVyT2JqZWN0czogTWFwPFBsYXllcklkLCBQbGF5ZXJPYmplY3RzPiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGhvc3RDcm93bjogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRHYW1lQnV0dG9uPzogUHJpbWFyeUJ1dHRvblxuICBwcml2YXRlIHJlYWRvbmx5IHdhaXRpbmdGb3JIb3N0VGV4dD86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICBwbGF5ZXJJZDogUGxheWVySWQsXG4gICAgb25TdGFydEdhbWU6IFZvaWRGdW5jdGlvbixcbiAgICBvbkNoYW5nZVBsYXllck5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQsXG4gICAgb25LaWNrUGxheWVyOiAocGxheWVySWQ6IFBsYXllcklkKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm9uU3RhcnRHYW1lID0gb25TdGFydEdhbWVcbiAgICB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZSA9IG9uQ2hhbmdlUGxheWVyTmFtZVxuICAgIHRoaXMub25LaWNrUGxheWVyID0gb25LaWNrUGxheWVyXG4gICAgdGhpcy5zY2VuZS5hZGQudGV4dCgxNTUsIDUwLCAnTGxhbWEgV2FycycsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI2KVxuICAgIGlmIChwbGF5ZXJJZCA9PT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uID0gbmV3IFByaW1hcnlCdXR0b24odGhpcy5zY2VuZSwgMTAwLCAwLCAnU3RhcnQgR2FtZScsIHRoaXMuaGFuZGxlU3RhcnRHYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMTAwLCAwLCAnV2FpdGluZyBmb3IgaG9zdCB0byBzdGFydCB0aGUgZ2FtZS4uLicpXG4gICAgfVxuICAgIHRoaXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGtleTogJ2xsYW1hLXdhbGsnLFxuICAgICAgZnJhbWVzOiBbXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfMSB9IGFzIGFueSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8yIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfMyB9LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzQgfSxcbiAgICAgIF0sXG4gICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICByZXBlYXQ6IC0xLFxuICAgIH0pXG4gICAgdGhpcy5ob3N0Q3Jvd24gPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgzNzAsIDAsICdjcm93bicpLnNldFNjYWxlKDAuNilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgdGhpcy5vblN0YXJ0R2FtZSgpXG4gIH1cblxuICBwdWJsaWMgc3luYyA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgdGhpcy5jcmVhdGVBbmREZXN0cm95UGxheWVyT2JqZWN0cyh3b3JsZFN0YXRlKVxuICAgIGxldCB5ID0gMTAwXG4gICAgY29uc3Qgc29ydGVkUGxheWVycyA9IHdvcmxkU3RhdGUuZ2V0U29ydGVkUGxheWVycygpXG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2Ygc29ydGVkUGxheWVycykge1xuICAgICAgaWYgKHBsYXllci5pZCA9PT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgICAgdGhpcy5ob3N0Q3Jvd24uc2V0WSh5ICsgNSlcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgbmFtZVRleHQsIGxsYW1hLCBraWNrQnV0dG9uIH0gPSB0aGlzLmdldFBsYXllck9iamVjdHMocGxheWVyLmlkKVxuICAgICAgbmFtZVRleHQuc2V0VGV4dChwbGF5ZXIubmFtZSkuc2V0WSh5KVxuICAgICAgbGxhbWEuc2V0WSh5ICsgMTApXG4gICAgICBraWNrQnV0dG9uPy5zZXRZKHkgKyAxNSlcbiAgICAgIHkgKz0gNTBcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5zZXRZKHkpXG4gICAgfVxuICAgIGlmICh0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9ySG9zdFRleHQuc2V0WSh5KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyT2JqZWN0cyA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBQbGF5ZXJPYmplY3RzID0+IHtcbiAgICBjb25zdCBwbGF5ZXJPYmplY3RzID0gdGhpcy5wbGF5ZXJPYmplY3RzLmdldChwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllck9iamVjdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gcGxheWVyIG9iamVjdHMgZm91bmQgZm9yICR7cGxheWVySWR9YClcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllck9iamVjdHNcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQW5kRGVzdHJveVBsYXllck9iamVjdHMgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJlcXVpcmVkUGxheWVySWRzID0gd29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJZHMgPSBBcnJheS5mcm9tKHRoaXMucGxheWVyT2JqZWN0cy5rZXlzKCkpXG5cbiAgICBjb25zdCBzdXJwbHVzUGxheWVySWRzID0gUi5kaWZmZXJlbmNlKGN1cnJlbnRQbGF5ZXJJZHMsIHJlcXVpcmVkUGxheWVySWRzKVxuICAgIGZvciAoY29uc3QgcGxheWVySWQgb2Ygc3VycGx1c1BsYXllcklkcykge1xuICAgICAgY29uc3QgeyBuYW1lVGV4dCwgbGxhbWEsIGtpY2tCdXR0b24gfSA9IHRoaXMuZ2V0UGxheWVyT2JqZWN0cyhwbGF5ZXJJZClcbiAgICAgIG5hbWVUZXh0LmRlc3Ryb3koKVxuICAgICAgbGxhbWEuZGVzdHJveSgpXG4gICAgICBraWNrQnV0dG9uPy5kZXN0cm95KClcbiAgICAgIHRoaXMucGxheWVyT2JqZWN0cy5kZWxldGUocGxheWVySWQpXG4gICAgfVxuXG4gICAgY29uc3QgbWlzc2luZ1BsYXllcklkcyA9IFIuZGlmZmVyZW5jZShyZXF1aXJlZFBsYXllcklkcywgY3VycmVudFBsYXllcklkcylcbiAgICBmb3IgKGNvbnN0IHBsYXllcklkIG9mIG1pc3NpbmdQbGF5ZXJJZHMpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHdvcmxkU3RhdGUuZ2V0UGxheWVyKHBsYXllcklkKVxuICAgICAgdGhpcy5jcmVhdGVPYmplY3RzRm9yUGxheWVyKHBsYXllcilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU9iamVjdHNGb3JQbGF5ZXIgPSAocGxheWVyOiBQbGF5ZXIpID0+IHtcbiAgICBjb25zdCBuYW1lVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCgxNDAsIDAsIHBsYXllci5uYW1lLCB7XG4gICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgZml4ZWRXaWR0aDogMjAwLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBsYXllci5pZCA9PT0gdGhpcy5wbGF5ZXJJZCA/ICcjMzMzMzMzJyA6ICcjMDAwMDAwJyxcbiAgICAgIH0pXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmhhbmRsZVBsYXllclRleHRDbGljayhwbGF5ZXIsIG5hbWVUZXh0KSlcbiAgICBjb25zdCBsbGFtYSA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAuc3ByaXRlKDExMCwgMCwgSW1hZ2VLZXlzLkxMQU1BX0VBVF8xKVxuICAgICAgLnNldFNjYWxlKDAuNilcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1twbGF5ZXIuaWQgLSAxXSlcbiAgICAgIC5wbGF5KCdsbGFtYS13YWxrJylcblxuICAgIGNvbnN0IGtpY2tCdXR0b24gPVxuICAgICAgcGxheWVyLmlkID09PSBIT1NUX1BMQVlFUl9JRCB8fCB0aGlzLnBsYXllcklkICE9PSBIT1NUX1BMQVlFUl9JRFxuICAgICAgICA/IHVuZGVmaW5lZFxuICAgICAgICA6IHRoaXMuc2NlbmUuYWRkXG4gICAgICAgICAgICAuaW1hZ2UoMzcwLCAwLCBJbWFnZUtleXMuREVMRVRFX0JVVFRPTl8xKVxuICAgICAgICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgICAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IGtpY2tCdXR0b24/LnNldFRleHR1cmUoSW1hZ2VLZXlzLkRFTEVURV9CVVRUT05fMSkpXG4gICAgICAgICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ga2lja0J1dHRvbj8uc2V0VGV4dHVyZShJbWFnZUtleXMuREVMRVRFX0JVVFRPTl8yKSlcbiAgICAgICAgICAgIC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICAgICAgICB0aGlzLm9uS2lja1BsYXllcihwbGF5ZXIuaWQpXG4gICAgICAgICAgICB9KVxuICAgIGNvbnN0IHBsYXllck9iamVjdHM6IFBsYXllck9iamVjdHMgPSB7IG5hbWVUZXh0LCBsbGFtYSwga2lja0J1dHRvbiB9XG4gICAgdGhpcy5wbGF5ZXJPYmplY3RzLnNldChwbGF5ZXIuaWQsIHBsYXllck9iamVjdHMpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllclRleHRDbGljayA9IChwbGF5ZXI6IFBsYXllciwgcGxheWVyVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQpOiB2b2lkID0+IHtcbiAgICBpZiAocGxheWVyLmlkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnNjZW5lLnBsdWdpbnMuZ2V0KCdyZXhUZXh0RWRpdCcpIGFzIGFueVxuICAgICAgcGx1Z2luLmVkaXQocGxheWVyVGV4dCwge1xuICAgICAgICBvbkNsb3NlOiAoKSA9PiB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZShwbGF5ZXJUZXh0LnRleHQpLFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQ3JlYXRlZExvYmJ5U2NlbmUgfSBmcm9tICcuL2NyZWF0ZWQtbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBjb25zdCBMT0JCWV9TQ0VORV9LRVkgPSAnTG9iYnknXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9iYnlTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG59XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBMT0JCWV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBMb2JieVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHNlcnZlck9yQ2xpZW50IH0gPSBzY2VuZURhdGFcbiAgICBuZXcgQ3JlYXRlZExvYmJ5U2NlbmUodGhpcywgc2VydmVyT3JDbGllbnQpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21haW4tZ2FtZS9tb2RlJ1xuaW1wb3J0IHsgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IHR5cGUgU2lkZWJhciA9ICdsb2cnIHwgJ3BsYXllcnMnXG5cbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVTdGF0ZSB7XG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBtb2RlOiBNb2RlXG4gIHJlYWRvbmx5IHNlbGVjdGVkSGV4OiBPcHRpb248SGV4PlxuICByZWFkb25seSBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyOiBudW1iZXJcbiAgcmVhZG9ubHkgc2lkZWJhcjogU2lkZWJhclxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwbGF5ZXJJZCxcbiAgICBtb2RlLFxuICAgIHNlbGVjdGVkSGV4LFxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSAwLFxuICAgIHNpZGViYXIsXG4gIH06IHtcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBtb2RlOiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBPcHRpb248SGV4PlxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBudW1iZXJcbiAgICBzaWRlYmFyOiBTaWRlYmFyXG4gIH0pIHtcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm1vZGUgPSBtb2RlXG4gICAgdGhpcy5zZWxlY3RlZEhleCA9IHNlbGVjdGVkSGV4XG4gICAgdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlclxuICAgIHRoaXMuc2lkZWJhciA9IHNpZGViYXJcbiAgICBhc3NlcnQoYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA+PSAwKVxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBtb2RlID0gdGhpcy5tb2RlLFxuICAgIHNlbGVjdGVkSGV4ID0gdG9NYXliZSh0aGlzLnNlbGVjdGVkSGV4KSxcbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyLFxuICAgIHNpZGViYXIgPSB0aGlzLnNpZGViYXIsXG4gIH06IHtcbiAgICBwbGF5ZXJJZD86IFBsYXllcklkXG4gICAgbW9kZT86IE1vZGVcbiAgICBzZWxlY3RlZEhleD86IE1heWJlPEhleD5cbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogbnVtYmVyXG4gICAgc2lkZWJhcj86IFNpZGViYXJcbiAgfSA9IHt9KTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICBuZXcgTG9jYWxHYW1lU3RhdGUoeyBwbGF5ZXJJZCwgbW9kZSwgc2VsZWN0ZWRIZXg6IHRvT3B0aW9uKHNlbGVjdGVkSGV4KSwgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciwgc2lkZWJhciB9KVxuXG4gIHB1YmxpYyBkZXNlbGVjdCA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZClcblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRIZXggPSAoc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+KTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgc2VsZWN0ZWRIZXg6IHRvTWF5YmUoc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldE1vZGUgPSAobW9kZTogTW9kZSk6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IG1vZGUgfSlcblxuICBwdWJsaWMgaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciArIDEgfSlcblxuICBwdWJsaWMgZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciAtIDEgfSlcbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSA9IG5ldyBMb2NhbEdhbWVTdGF0ZSh7XG4gIHBsYXllcklkOiAxLFxuICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gIHNpZGViYXI6ICdsb2cnLFxufSlcbiIsImltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5cbmNvbnN0IFBMQVlFUl9OQU1FX0tFWSA9ICdwbGF5ZXJOYW1lJ1xuXG5leHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlID0ge1xuICBzdG9yZU5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShQTEFZRVJfTkFNRV9LRVksIG5hbWUpLFxuICBmaW5kTmFtZTogKCk6IE9wdGlvbjxzdHJpbmc+ID0+IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShQTEFZRVJfTkFNRV9LRVkpID8/IHVuZGVmaW5lZCxcbn1cbiIsImltcG9ydCB7IE1hcERpc3BsYXlPYmplY3QgfSBmcm9tICcuL21hcC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBVbml0RGlzcGxheU9iamVjdCB9IGZyb20gJy4vdW5pdC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IExvY2FsQWN0aW9uRGlzcGF0Y2hlciwgVGV4dHNEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi90ZXh0cy1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzLCBJbWFnZUtleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGZpcmVBbmRGb3JnZXQgfSBmcm9tICcuLi8uLi91dGlsL2FzeW5jLXV0aWwnXG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblNwZWVkID0gJ25vcm1hbCcgfCAncXVpY2snXG5cbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUFuaW1hdGlvblNwZWMge1xuICB0eXBlOiAnbW92ZSdcbiAgdW5pdElkOiBVbml0SWRcbiAgZnJvbTogSGV4XG4gIHRvOiBIZXhcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21iYXRBbmltYXRpb25TcGVjIHtcbiAgdHlwZTogJ2NvbWJhdCdcbiAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZVxuICBhdHRhY2tlcjoge1xuICAgIHVuaXRJZDogVW5pdElkXG4gICAgbG9jYXRpb246IEhleFxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAga2lsbGVkOiBib29sZWFuXG4gIH1cbiAgZGVmZW5kZXI6IHtcbiAgICB1bml0SWQ6IFVuaXRJZFxuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGtpbGxlZDogYm9vbGVhblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblNwZWMgPSBNb3ZlQW5pbWF0aW9uU3BlYyB8IENvbWJhdEFuaW1hdGlvblNwZWNcblxuZXhwb3J0IGNsYXNzIERpc3BsYXlPYmplY3RzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgbWFwRGlzcGxheU9iamVjdDogTWFwRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHJlYWRvbmx5IHVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IHRleHRzRGlzcGxheU9iamVjdDogVGV4dHNEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBpc0FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIGFuaW1hdGlvbnM6IEFuaW1hdGlvblNwZWNbXSA9IFtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0ID0gbmV3IE1hcERpc3BsYXlPYmplY3Qoc2NlbmUsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdCA9IG5ldyBUZXh0c0Rpc3BsYXlPYmplY3QoXG4gICAgICBzY2VuZSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZSxcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUsXG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgICApXG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnbGxhbWEtd2FsaycsXG4gICAgICBmcmFtZXM6IFtcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8xIH0gYXMgYW55LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzIgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8zIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfNCB9LFxuICAgICAgXSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSlcbiAgICB0aGlzLnNjZW5lLmFuaW1zLmNyZWF0ZSh7XG4gICAgICBrZXk6ICdsbGFtYS1lYXQnLFxuICAgICAgZnJhbWVzOiBbXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzEgfSBhcyBhbnksXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzIgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV9FQVRfMyB9LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BX0VBVF80IH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzMgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV9FQVRfNCB9LFxuICAgICAgXSxcbiAgICAgIGZyYW1lUmF0ZTogNCxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICB0aGlzLnNjaGVkdWxlRWF0aW5nQW5pbWF0aW9uKClcbiAgfVxuXG4gIHByaXZhdGUgc2NoZWR1bGVFYXRpbmdBbmltYXRpb24gPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGltZXMgPSBbNDAwMCwgNTAwMCwgNzAwMF1cbiAgICBjb25zdCBkZWxheSA9IHJhbmRvbUVsZW1lbnQodGltZXMpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdHMgPSBBcnJheS5mcm9tKHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnZhbHVlcygpKVxuICAgICAgaWYgKHVuaXREaXNwbGF5T2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVVuaXQgPSByYW5kb21FbGVtZW50KHVuaXREaXNwbGF5T2JqZWN0cylcbiAgICAgICAgZmlyZUFuZEZvcmdldCgoKSA9PiByYW5kb21Vbml0LnJ1bkVhdEFuaW1hdGlvbigpKVxuICAgICAgfVxuICAgICAgdGhpcy5zY2hlZHVsZUVhdGluZ0FuaW1hdGlvbigpXG4gICAgfSwgZGVsYXkpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnQ6IFBvaW50KTogdm9pZCA9PiB0aGlzLm1hcERpc3BsYXlPYmplY3Q/LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50KVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB0aGlzLnRleHRzRGlzcGxheU9iamVjdC5oYXNDbGlja0hhbmRsZXJGb3IocG9pbnQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9IChcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBhbmltYXRpb246IE9wdGlvbjxBbmltYXRpb25TcGVjPixcbiAgKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFIuYXBwZW5kKGFuaW1hdGlvbikodGhpcy5hbmltYXRpb25zKVxuICAgICAgdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pLmZvckVhY2godGhpcy5tYW5hZ2VVbml0QXNCZWluZ0FuaW1hdGVkKVxuICAgICAgdGhpcy50cmlnZ2VyQW5pbWF0aW9ucygpXG4gICAgfVxuXG4gICAgdGhpcy5zeW5jVW5pdHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVW5pdHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5yZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCgpXG4gICAgY29uc3QgdW5pdHNUb1N5bmMgPSB0aGlzLndvcmxkU3RhdGUudW5pdHMuZmlsdGVyKCh1bml0KSA9PiAhdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5oYXModW5pdC5pZCkpXG4gICAgZm9yIChjb25zdCB1bml0IG9mIHVuaXRzVG9TeW5jKSB7XG4gICAgICBsZXQgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdC5pZClcbiAgICAgIGlmICghdW5pdERpc3BsYXlPYmplY3QpIHtcbiAgICAgICAgdW5pdERpc3BsYXlPYmplY3QgPSBuZXcgVW5pdERpc3BsYXlPYmplY3QodGhpcy5zY2VuZSwgdW5pdClcbiAgICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXQuaWQsIHVuaXREaXNwbGF5T2JqZWN0KVxuICAgICAgfVxuICAgICAgdW5pdERpc3BsYXlPYmplY3Quc3luY1NjZW5lKHVuaXQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdXJwbHVzVW5pdElkcyA9IFIuZGlmZmVyZW5jZShcbiAgICAgIEFycmF5LmZyb20odGhpcy51bml0RGlzcGxheU9iamVjdHMua2V5cygpKSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQuaWQpLFxuICAgIClcbiAgICBmb3IgKGNvbnN0IHVuaXRJZCBvZiBzdXJwbHVzVW5pdElkcykge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZCk/LmRlc3Ryb3koKVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJBbmltYXRpb25zID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzQW5pbWF0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXF1ZW5jZUFuaW1hdGlvbnMgPSAoKToge1xuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3c6IEFuaW1hdGlvblNwZWNbXVxuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlcjogQW5pbWF0aW9uU3BlY1tdXG4gIH0gPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMgPSBuZXcgU2V0PFVuaXRJZD4oKVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cgPSBbXVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciA9IFtdXG4gICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICBjb25zdCB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgY29uc3QgYWZmZWN0ZWRCeUVhcmxpZXJBbmltYXRpb25zID0gUi5hbnkoXG4gICAgICAgICh1bml0SWQpID0+IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMuaGFzKHVuaXRJZCksXG4gICAgICAgIHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLFxuICAgICAgKVxuICAgICAgaWYgKGFmZmVjdGVkQnlFYXJsaWVyQW5pbWF0aW9ucykge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIucHVzaChhbmltYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTm93LnB1c2goYW5pbWF0aW9uKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB1bml0SWQgb2YgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24pIHtcbiAgICAgICAgdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucy5hZGQodW5pdElkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQW5pbWF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICB3aGlsZSAodGhpcy5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgeyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfSA9IHRoaXMuc2VxdWVuY2VBbmltYXRpb25zKClcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyLmxlbmd0aCA9PT0gMCA/ICdub3JtYWwnIDogJ3F1aWNrJ1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChhbmltYXRpb25zVG9QZXJmb3JtTm93Lm1hcCgoYW5pbWF0aW9uKSA9PiB0aGlzLnJ1bkFuaW1hdGlvbihhbmltYXRpb24sIHNwZWVkKSkpXG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cpIHtcbiAgICAgICAgICB0aGlzLnJlbGVhc2VVbml0c0Zyb21CZWluZ0FuaW1hdGVkV2hlcmVOb0xvbmdlck5lZWRlZChhbmltYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQgPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdElkc0luQW5pbWF0aW9uID0gdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgY29uc3QgdW5pdElkc0luUmVtYWluaW5nQW5pbWF0aW9ucyA9IHRoaXMuZ2V0VW5pdHNJbnZvbHZlZEluQW5pbWF0aW9ucygpXG4gICAgY29uc3QgdW5pdElkc1RvUmVsZWFzZSA9IFIuZGlmZmVyZW5jZSh1bml0SWRzSW5BbmltYXRpb24sIHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMpXG4gICAgdW5pdElkc1RvUmVsZWFzZS5mb3JFYWNoKHRoaXMucmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZClcbiAgfVxuXG4gIHByaXZhdGUgbWFuYWdlVW5pdEFzQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmIChkaXNwbGF5T2JqZWN0KSB7XG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdElkLCBkaXNwbGF5T2JqZWN0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7dW5pdElkfWBcbiAgICB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh1bml0KSB7XG4gICAgICBkaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheU9iamVjdC5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMgPSAoKTogVW5pdElkW10gPT4gUi5jaGFpbih0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLCB0aGlzLmFuaW1hdGlvbnMpXG5cbiAgcHJpdmF0ZSBnZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiBVbml0SWRbXSA9PiB7XG4gICAgc3dpdGNoIChhbmltYXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLnVuaXRJZF1cbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLmF0dGFja2VyLnVuaXRJZCwgYW5pbWF0aW9uLmRlZmVuZGVyLnVuaXRJZF1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bkFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IEFuaW1hdGlvblNwZWMsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bk1vdmVBbmltYXRpb24oYW5pbWF0aW9uLCBzcGVlZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ29tYmF0QW5pbWF0aW9uKGFuaW1hdGlvbiwgc3BlZWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IE1vdmVBbmltYXRpb25TcGVjLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYW5pbWF0aW9uLnVuaXRJZClcbiAgICBpZiAoIWRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHthbmltYXRpb24udW5pdElkfWBcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLldBTEspXG4gICAgYXdhaXQgZGlzcGxheU9iamVjdC5ydW5Nb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbi5mcm9tLCBhbmltYXRpb24udG8sIHNwZWVkKVxuICB9XG5cbiAgcHJpdmF0ZSBydW5Db21iYXRBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBDb21iYXRBbmltYXRpb25TcGVjLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gYW5pbWF0aW9uXG4gICAgY29uc3QgYXR0YWNrZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYXR0YWNrZXIudW5pdElkKVxuICAgIGlmICghYXR0YWNrZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YXR0YWNrZXIudW5pdElkfWBcbiAgICBjb25zdCBkZWZlbmRlckRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChkZWZlbmRlci51bml0SWQpXG4gICAgaWYgKCFkZWZlbmRlckRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHtkZWZlbmRlci51bml0SWR9YFxuICAgIGlmIChhbmltYXRpb24uYXR0YWNrVHlwZSA9PT0gJ21lbGVlJykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KHJhbmRvbUVsZW1lbnQoW0F1ZGlvS2V5cy5BVFRBQ0tfMSwgQXVkaW9LZXlzLkFUVEFDS18yLCBBdWRpb0tleXMuQVRUQUNLXzNdKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5TUElUKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkIHx8IGRlZmVuZGVyLmtpbGxlZCkge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ERUFUSClcbiAgICB9XG4gICAgY29uc3Qgc2ltdWx0YW5lb3VzQW5pbWF0aW9uczogUHJvbWlzZTx2b2lkPltdID0gW11cbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuQXR0YWNrQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbiwgc3BlZWQpKVxuICAgIH0gZWxzZSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1blNwaXRBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uLCBzcGVlZCkpXG4gICAgfVxuICAgIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuRGVhdGhBbmltYXRpb24oc3BlZWQpKVxuICAgIH1cbiAgICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKHNwZWVkKSlcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoc2ltdWx0YW5lb3VzQW5pbWF0aW9ucylcbiAgICBpZiAoYXR0YWNrZXIuZGFtYWdlID4gMCkge1xuICAgICAgZmlyZUFuZEZvcmdldCgoKSA9PiBhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuRGFtYWdlQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBhdHRhY2tlci5kYW1hZ2UsIHNwZWVkKSlcbiAgICB9XG4gICAgaWYgKGRlZmVuZGVyLmRhbWFnZSA+IDApIHtcbiAgICAgIGZpcmVBbmRGb3JnZXQoKCkgPT4gZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihkZWZlbmRlci5sb2NhdGlvbiwgZGVmZW5kZXIuZGFtYWdlLCBzcGVlZCkpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRQb2ludHMsIG11bHRpcGx5UG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFLCBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBTExfQVVESU9fS0VZUywgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IG1hcFRvTG9jYWxBY3Rpb24gfSBmcm9tICcuL2tleWJvYXJkLW1hcHBlcidcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5pbXBvcnQgeyBMb2NhbEFjdGlvblByb2Nlc3NvciwgTG9jYWxBY3Rpb25SZXN1bHQgfSBmcm9tICcuL2xvY2FsLWFjdGlvbi1wcm9jZXNzb3InXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi8uLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBBbmltYXRpb25TcGVjLCBEaXNwbGF5T2JqZWN0cyB9IGZyb20gJy4vZGlzcGxheS1vYmplY3RzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgUG9pbnRlciA9IFBoYXNlci5JbnB1dC5Qb2ludGVyXG5cbmV4cG9ydCBjb25zdCBHQU1FX1NDRU5FX0tFWSA9ICdHYW1lJ1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogR0FNRV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2FtZVNjZW5lRGF0YSB7XG4gIHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnRcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9TSVpFID0gNDhcbmV4cG9ydCBjb25zdCBEUkFXSU5HX09GRlNFVCA9IHsgeDogNjAsIHk6IDEwMCB9XG5leHBvcnQgY29uc3QgaGV4Q2VudGVyID0gKGhleDogSGV4KTogUG9pbnQgPT4gYWRkUG9pbnRzKG11bHRpcGx5UG9pbnQoY2VudGVyUG9pbnQoaGV4KSwgSEVYX1NJWkUpLCBEUkFXSU5HX09GRlNFVClcblxuZXhwb3J0IHR5cGUgR2FtZUlkID0gc3RyaW5nXG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBwcml2YXRlIGNyZWF0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIHNlcnZlck9yQ2xpZW50PzogU2VydmVyIHwgQ2xpZW50XG5cbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURVxuXG4gIHByaXZhdGUgZGlzcGxheU9iamVjdHM/OiBEaXNwbGF5T2JqZWN0c1xuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgLy8gQ3JlYXRlXG4gIC8vIC0tLS0tLVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuY3JlYXRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdHYW1lIHNjZW5lIGhhcyBhbHJlYWR5IGJlZW4gY3JlYXRlZCcpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JlYXRlZCA9IHRydWVcbiAgICB9XG4gICAgY29uc3QgeyBzZXJ2ZXJPckNsaWVudCB9ID0gc2NlbmVEYXRhXG4gICAgdGhpcy5zZXRVcFNvdW5kKClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXJPckNsaWVudC53b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURS5jb3B5KHsgcGxheWVySWQ6IHNlcnZlck9yQ2xpZW50LnBsYXllcklkIH0pXG4gICAgdGhpcy5zZXJ2ZXJPckNsaWVudCA9IHNlcnZlck9yQ2xpZW50XG4gICAgc2VydmVyT3JDbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVXb3JsZEV2ZW50KVxuXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cyA9IG5ldyBEaXNwbGF5T2JqZWN0cyh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24pXG4gICAgdGhpcy51cGRhdGVBc0F0U3RhcnRPZlR1cm4oKVxuICAgIHRoaXMuc2V0VXBJbnB1dHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFNvdW5kID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goKGtleSkgPT4gdGhpcy5zb3VuZC5hZGQoa2V5KSlcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoYW5pbWF0aW9uPzogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlLCBhbmltYXRpb24pXG5cbiAgLy8gTmV0d29ya2luZ1xuICAvLyAtLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBhc3luY1NlbmRUb1NlcnZlciA9IGFzeW5jIChhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCF0aGlzLnNlcnZlck9yQ2xpZW50KSB7XG4gICAgICB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIHNlcnZlck9yQ2xpZW50YFxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICB9XG5cbiAgLy8gSW5wdXQgaGFuZGxlcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIHNldFVwSW5wdXRzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuaW5wdXQubW91c2UuZGlzYWJsZUNvbnRleHRNZW51KClcbiAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkpXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb24gPSBtYXBUb0xvY2FsQWN0aW9uKGV2ZW50LCB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgaWYgKGxvY2FsQWN0aW9uKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKGxvY2FsQWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTG9jYWxBY3Rpb24gPSAobG9jYWxBY3Rpb246IExvY2FsQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb25Qcm9jZXNzb3IgPSBuZXcgTG9jYWxBY3Rpb25Qcm9jZXNzb3IodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsQWN0aW9uUHJvY2Vzc29yLnByb2Nlc3MobG9jYWxBY3Rpb24pXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5lbmFjdExvY2FsQWN0aW9uUmVzdWx0KHJlc3VsdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVuYWN0TG9jYWxBY3Rpb25SZXN1bHQgPSAocmVzdWx0OiBMb2NhbEFjdGlvblJlc3VsdCk6IHZvaWQgPT4ge1xuICAgIGlmIChyZXN1bHQubmV3TG9jYWxHYW1lU3RhdGUpIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSByZXN1bHQubmV3TG9jYWxHYW1lU3RhdGVcbiAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICB9XG4gICAgaWYgKHJlc3VsdC53b3JsZEFjdGlvbikge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICAgIHRoaXMuYXN5bmNTZW5kVG9TZXJ2ZXIocmVzdWx0LndvcmxkQWN0aW9uKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9pbnRlclBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cz8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyRG93biA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGVzZSBhcyB0aGV5IGhhdmUgdGhlaXIgb3duIGhhbmRsZXJzXG4gICAgY29uc3QgcHJlc3NlZFBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdHM/Lmhhc0NsaWNrSGFuZGxlckZvcihwcmVzc2VkUG9pbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocHJlc3NlZFBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHBvaW50ZXIuYnV0dG9uID09PSAyKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2dvSGV4JywgaGV4IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlTGVmdENsaWNrKGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4ID0gKGhleDogSGV4KTogTG9jYWxBY3Rpb24gPT4ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdEhleCcsIGhleCB9XG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZU1vdmUnLCB1bml0SWQ6IG1vZGUudW5pdElkLCBoZXggfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2NvbXBsZXRlQXR0YWNrJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4LCBhdHRhY2tUeXBlOiBtb2RlLmF0dGFja1R5cGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTGVmdENsaWNrID0gKGhleDogSGV4KTogdm9pZCA9PiB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHRoaXMuZ2V0TG9jYWxBY3Rpb25Gb3JDbGlja2luZ0FIZXgoaGV4KSlcblxuICAvLyBIYW5kbGUgd29ybGQgZXZlbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGVcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgY2FzZSAncGxheWVyQ2hhbmdlZE5hbWUnOlxuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgY2FzZSAnY2hhdCc6XG4gICAgICBjYXNlICdwbGF5ZXJLaWNrZWQnOlxuICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgICB0aGlzLmhhbmRsZVVuaXRNb3ZlZFdvcmxkRXZlbnQoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQ29tYmF0V29ybGRFdmVudChldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRW5kZWRUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJFbmRlZFR1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckRlZmVhdGVkKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcihldmVudClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZU5ld1R1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR2FtZU92ZXIgPSAoZXZlbnQ6IEdhbWVPdmVyV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC52aWN0b3IgPT09IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWQpIHtcbiAgICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuVklDVE9SWV9NVVNJQylcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJEZWZlYXRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLlBMQVlFUl9ERUZFQVRFRClcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5ld1R1cm4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ORVdfVFVSTilcbiAgICB0aGlzLnVwZGF0ZUFzQXRTdGFydE9mVHVybigpXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUFzQXRTdGFydE9mVHVybigpIHtcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMoKVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgICAuY29weSh7IG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSB9KVxuICAgICAgLnNldFNlbGVjdGVkSGV4KHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50ID0gKGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHVuaXRJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgY29uc3Qgd2FzUHJldmlvdXNseVNlbGVjdGVkID1cbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXggJiZcbiAgICAgIHByZXZpb3VzV29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCk/LmlkID09PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayh1bml0SWQsIHRvKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSB9KS5zZXRTZWxlY3RlZEhleChuZXdTZWxlY3RlZEhleClcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoeyB0eXBlOiAnbW92ZScsIHVuaXRJZCwgZnJvbSwgdG8gfSlcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sgPSAodW5pdElkOiBVbml0SWQsIGRlZmF1bHRMb2NhdGlvbjogSGV4KTogT3B0aW9uPEhleD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICAvLyBSZXRhaW4gc2VsZWN0aW9uIGlmIHVuaXQgc3RpbGwgZXhpc3RzIGFuZCB3ZSBzdGlsbCBoYXZlIGFjdGlvbiBwb2ludHMsIGVsc2Ugc2VsZWN0IG5leHQgdW5pdCAob3Igbm90aGluZyBpZiB0aGVyZSBpc24ndCBvbmUpXG4gICAgbGV0IG5ld1NlbGVjdGVkSGV4XG4gICAgaWYgKCF1bml0IHx8IHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIGNvbnN0IG5leHRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHVuaXRJZClcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gbmV4dFVuaXQ/LmxvY2F0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gZGVmYXVsdExvY2F0aW9uXG4gICAgfVxuICAgIHJldHVybiBuZXdTZWxlY3RlZEhleFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21iYXRXb3JsZEV2ZW50ID0gKGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpID0+IHtcbiAgICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gZXZlbnRcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbkFmdGVyQ29tYmF0KGF0dGFja2VyLCBkZWZlbmRlciwgcHJldmlvdXNXb3JsZFN0YXRlKVxuICAgIHRoaXMuc3luY1NjZW5lKHtcbiAgICAgIHR5cGU6ICdjb21iYXQnLFxuICAgICAgYXR0YWNrVHlwZTogZXZlbnQuYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyLFxuICAgICAgZGVmZW5kZXIsXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQgPSAoXG4gICAgYXR0YWNrZXI6IENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgICBkZWZlbmRlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkVW5pdElkID0gbmV3IENvbWJpbmVkU3RhdGUocHJldmlvdXNXb3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKS5maW5kU2VsZWN0ZWRVbml0KCk/LmlkXG4gICAgaWYgKHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCA9PT0gYXR0YWNrZXIudW5pdElkICYmIGF0dGFja2VyLnBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEhleCA9IHRoaXMuY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2soYXR0YWNrZXIudW5pdElkLCBhdHRhY2tlci5sb2NhdGlvbilcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0gfSkuc2V0U2VsZWN0ZWRIZXgobmV3U2VsZWN0ZWRIZXgpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlc2VsZWN0IHVuaXQga2lsbGVkIGJ5IGFub3RoZXIgcGxheWVyXG4gICAgICBpZiAoZGVmZW5kZXIua2lsbGVkICYmIGRlZmVuZGVyLnVuaXRJZCA9PT0gcHJldmlvdXNseVNlbGVjdGVkVW5pdElkICYmIGRlZmVuZGVyLnBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0gfSkuZGVzZWxlY3QoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFV0aWwgcXVlcmllc1xuICAvLyAtLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgfVxufVxuIiwiaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5pbXBvcnQgeyBIZXhEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC9oZXgtZGlyZWN0aW9uJ1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbW9kZSdcblxuZXhwb3J0IGNvbnN0IG1hcFRvTG9jYWxBY3Rpb24gPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIG1vZGU6IE1vZGUpOiBPcHRpb248TG9jYWxBY3Rpb24+ID0+IHtcbiAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgIGNhc2UgJzQnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uV0VTVCB9XG4gICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgY2FzZSAnNic6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5FQVNUIH1cbiAgICBjYXNlICc3JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1QgfVxuICAgIGNhc2UgJzMnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVCB9XG4gICAgY2FzZSAnOSc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5OT1JUSF9FQVNUIH1cbiAgICBjYXNlICcxJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1QgfVxuICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnYWJvcnQnIH1cbiAgICBjYXNlICdFbnRlcic6XG4gICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHJldHVybiB7IHR5cGU6ICdlbmRUdXJuJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ24nOlxuICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHJldHVybiB7IHR5cGU6ICdzZWxlY3ROZXh0VW5pdCcgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdtJzpcbiAgICAgIGlmIChtb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSByZXR1cm4geyB0eXBlOiAnZW50ZXJNb3ZlTW9kZScgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhJzpcbiAgICAgIGlmIChtb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSByZXR1cm4geyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ21lbGVlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3MnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnc3BpdCcgfVxuICAgICAgYnJlYWtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUsIFNpZGViYXIgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSwgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIZXhEaXJlY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC9oZXgtZGlyZWN0aW9uJ1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbW9kZSdcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuLi9jb21iaW5lZC1zdGF0ZS1tZXRob2RzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsQWN0aW9uUmVzdWx0IHtcbiAgbmV3TG9jYWxHYW1lU3RhdGU/OiBMb2NhbEdhbWVTdGF0ZVxuICB3b3JsZEFjdGlvbj86IFdvcmxkQWN0aW9uXG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbEFjdGlvblByb2Nlc3NvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIHB1YmxpYyBwcm9jZXNzID0gKGFjdGlvbjogTG9jYWxBY3Rpb24pOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdnbyc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUdvKGFjdGlvbi5kaXJlY3Rpb24pXG4gICAgICBjYXNlICdnb0hleCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUdvSGV4KGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdzZWxlY3ROZXh0VW5pdCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbGVjdE5leHRVbml0KClcbiAgICAgIGNhc2UgJ2Fib3J0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQWJvcnQoKVxuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVuZFR1cm4oKVxuICAgICAgY2FzZSAnZW50ZXJNb3ZlTW9kZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVudGVyTW92ZU1vZGUoKVxuICAgICAgY2FzZSAnZW50ZXJBdHRhY2tNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJBdHRhY2tNb2RlKGFjdGlvbi5hdHRhY2tUeXBlKVxuICAgICAgY2FzZSAnY29tcGxldGVNb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVNb3ZlKGFjdGlvbi51bml0SWQsIGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdjb21wbGV0ZUF0dGFjayc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNvbXBsZXRlQXR0YWNrKGFjdGlvbi51bml0SWQsIGFjdGlvbi5oZXgsIGFjdGlvbi5hdHRhY2tUeXBlKVxuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0SGV4KGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdjaGFuZ2VTaWRlYmFyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2hhbmdlU2lkZWJhcihhY3Rpb24uc2lkZWJhcilcbiAgICAgIGNhc2UgJ2NoYXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDaGF0KGFjdGlvbi5tZXNzYWdlKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdE5leHRVbml0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMoc2VsZWN0ZWRVbml0Py5pZClcbiAgICBpZiAodW5pdFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICAgICAgLnNldFNlbGVjdGVkSGV4KHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pXG4gICAgICAgIC5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiBuZXdMb2NhbEdhbWVTdGF0ZSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFib3J0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlc2VsZWN0KCkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleCkgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgsICdtZWxlZScpXG4gICAgICBpZiAodGFyZ2V0VW5pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoJ21lbGVlJywgc2VsZWN0ZWRVbml0LCB0YXJnZXRVbml0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNrSGV4ID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGF0dGFja2VyOiBVbml0LCBkZWZlbmRlcjogVW5pdCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyOiB7IHVuaXRJZDogYXR0YWNrZXIuaWQsIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbiB9LFxuICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uIH0sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicsIHR1cm46IHRoaXMud29ybGRTdGF0ZS50dXJuIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAodW5pdCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQsIGF0dGFja1R5cGUgfVxuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9ICh1bml0SWQ6IFVuaXRJZCwgZGVzdGluYXRpb246IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbikpIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAoXG4gICAgdW5pdElkOiBVbml0SWQsXG4gICAgdGFyZ2V0SGV4OiBIZXgsXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCwgYXR0YWNrVHlwZSlcbiAgICBpZiAoZGVmZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tUeXBlLCBhdHRhY2tlciwgZGVmZW5kZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5kZXNlbGVjdCgpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlc2VsZWN0KCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVNpZGViYXIgPSAoc2lkZWJhcjogU2lkZWJhcik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4gKHtcbiAgICBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2lkZWJhciB9KSxcbiAgfSlcblxuICBwcml2YXRlIGhhbmRsZUNoYXQgPSAobWVzc2FnZTogc3RyaW5nKTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHsgd29ybGRBY3Rpb246IHsgdHlwZTogJ2NoYXQnLCBtZXNzYWdlIH0gfSlcbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgZnJvbVBvaW50LCBoZXhDb3JuZXJzIH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgSE9WRVJfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIsXG59IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCBQb2x5Z29uID0gUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb25cblxudHlwZSBUaWxlU3RhdGUgPSAnZGVmYXVsdCcgfCAnc2VsZWN0ZWQnIHwgJ3RhcmdldGFibGUnXG5cbmV4cG9ydCBjbGFzcyBNYXBEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGhleFBvbHlnb25zOiBNYXA8c3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4gPSBuZXcgTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+KClcbiAgcHJpdmF0ZSBwcmV2aW91c0hvdmVySGV4PzogSGV4XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGZvciAoY29uc3QgaGV4IG9mIHRoaXMud29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSkge1xuICAgICAgdGhpcy5jcmVhdGVIZXgoaGV4KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSGV4ID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9seWdvbkNlbnRlciA9IGhleENlbnRlcihoZXgpXG4gICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9seWdvbkNlbnRlci54LCBwb2x5Z29uQ2VudGVyLnksICdncmFzcycpLnNldFNjYWxlKDAuNjUpLnNldERlcHRoKC01KVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzTW91bnRhaW4oaGV4KSkge1xuICAgICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9seWdvbkNlbnRlci54LCBwb2x5Z29uQ2VudGVyLnksICdtb3VudGFpbicpLnNldERlcHRoKC01KVxuICAgIH1cbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKS5zZXRPcmlnaW4oMCwgMCkuc2V0RmlsbFN0eWxlKDB4MDAwMDAsIDApXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUoaGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIERlcHRoc1xuICAvLyAtNSAtIGltYWdlXG4gIC8vIC00IC0gZGVmYXVsdCBib3JkZXJcbiAgLy8gLTMgLSB0YXJnZXRhYmxlIGJvcmRlclxuICAvLyAtMiAtIHNlbGVjdGVkXG4gIC8vIC0xIC0gaG92ZXJcblxuICBwcml2YXRlIGdldERlcHRoID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogbnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiAtNFxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiAtM1xuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gLTJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNUaWxlID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldFN0cm9rZVN0eWxlKDMsIHRoaXMuZ2V0SGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpLnNldERlcHRoKHRoaXMuZ2V0RGVwdGgodGlsZVN0YXRlKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHRocm93IGBObyBwb2x5Z29uIGZvdW5kIGZvciAke2hleH1gXG4gICAgcmV0dXJuIHBvbHlnb25cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGlsZVN0YXRlID0gKGhleDogSGV4KTogVGlsZVN0YXRlID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkSGV4LCBtb2RlIH0gPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09PSAnbW92ZVVuaXQnKSB7XG4gICAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKG1vZGUudW5pdElkKVxuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHVuaXQsIGhleCkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09PSAnYXR0YWNrJykge1xuICAgICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZChtb2RlLnVuaXRJZClcbiAgICAgIGlmIChzZWxlY3RlZEhleCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleCh1bml0LCBoZXgsIG1vZGUuYXR0YWNrVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ2RlZmF1bHQnXG4gIH1cblxuICBwcml2YXRlIGdldEhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gREVGQVVMVF9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIgPSAodGlsZVN0YXRlOiBUaWxlU3RhdGUpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIHN3aXRjaCAodGlsZVN0YXRlKSB7XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgcmV0dXJuIEhPVkVSX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50OiBQb2ludCk6IHZvaWQge1xuICAgIGNvbnN0IGhleCA9IGZyb21Qb2ludChtdWx0aXBseVBvaW50KHN1YnRyYWN0UG9pbnRzKHBvaW50ZXJQb2ludCwgRFJBV0lOR19PRkZTRVQpLCAxIC8gSEVYX1NJWkUpKVxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXggJiYgdGhpcy5wcmV2aW91c0hvdmVySGV4LmVxdWFscyhoZXgpKSByZXR1cm5cbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVySGV4KSB7XG4gICAgICB0aGlzLnN5bmNUaWxlKHRoaXMucHJldmlvdXNIb3ZlckhleClcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlckhleCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpXG4gICAgICAgIC5zZXRTdHJva2VTdHlsZSh0aWxlU3RhdGUgPT09ICdkZWZhdWx0JyA/IDIgOiA0LCB0aGlzLmdldEhvdmVySGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpXG4gICAgICAgIC5zZXREZXB0aCgtMSlcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlckhleCA9IGhleFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgaGV4V2lkdGgsIG1hcEhlaWdodCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IEFDVElPTl9URVhUX0NPTE9VUiwgSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSLCBQTEFZRVJfVElOVFMgfSBmcm9tICcuLi9jb2xvdXJzJ1xuaW1wb3J0IHsgRFJBV0lOR19PRkZTRVQsIEhFWF9TSVpFIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBwb2ludCwgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBdWRpb0tleXMsIEltYWdlS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFVpQm9yZGVyRGlzcGxheU9iamVjdCB9IGZyb20gJy4vdWktYm9yZGVyLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL3ByaW1hcnktYnV0dG9uJ1xuXG5leHBvcnQgdHlwZSBMb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbikgPT4gdm9pZFxuXG5pbnRlcmZhY2UgUGxheWVyT2JqZWN0cyB7XG4gIG5hbWVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBsbGFtYTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB2aWN0b3J5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZExvZ1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0V29ybGRMb2dUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdFBsYXllcnNUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllck9iamVjdHM6IE1hcDxQbGF5ZXJJZCwgUGxheWVyT2JqZWN0cz4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBob3N0Q3Jvd246IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICBwcml2YXRlIHJlYWRvbmx5IGVuZFR1cm5CdXR0b246IFByaW1hcnlCdXR0b25cbiAgcHJpdmF0ZSByZWFkb25seSBjaGF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxuICAgIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICAgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlLFxuICAgIGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyLFxuICApIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSBsb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgICBjb25zdCBtYXAgPSB0aGlzLndvcmxkU3RhdGUubWFwXG4gICAgdGhpcy5zY2VuZS5hZGRcbiAgICAgIC5pbWFnZSg0MCwgMjgsIEltYWdlS2V5cy5MTEFNQV8yKVxuICAgICAgLnNldFNjYWxlKDAuNilcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1tsb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMucGxheWVyVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoNzAsIDIwLCAnJylcbiAgICB0aGlzLmhvdXJnbGFzcyA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDg3NSwgMzAsICdob3VyZ2xhc3MnKS5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgIERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLFxuICAgICAgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksXG4gICAgICAnJyxcbiAgICApXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDI1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDUwLCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQzID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDc1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQzQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQzLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDc5MCArIDUyMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA2OCArIDcyLCAnJywge1xuICAgICAgICBmaWxsOiAnI2ZmZmZmZicsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0U2hhZG93KDIsIDIsICcjMDAwMDAwJylcbiAgICB0aGlzLmVuZFR1cm5CdXR0b24gPSBuZXcgUHJpbWFyeUJ1dHRvbihcbiAgICAgIHRoaXMuc2NlbmUsXG4gICAgICA2NTAgKyA1MjAsXG4gICAgICBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDQ0ICsgNzIsXG4gICAgICAnRW5kIFR1cm4nLFxuICAgICAgKCkgPT4gdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW5kVHVybicgfSksXG4gICAgKVxuXG4gICAgdGhpcy5zZWxlY3RXb3JsZExvZ1RleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoOTYwLCAyNiwgJ0xvZycsIHsgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSIH0pXG4gICAgICAuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2NoYW5nZVNpZGViYXInLCBzaWRlYmFyOiAnbG9nJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLnNlbGVjdFdvcmxkTG9nVGV4dC5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLnNlbGVjdFdvcmxkTG9nVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5zZWxlY3RQbGF5ZXJzVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCgxMDI0LCAyNiwgJ1BsYXllcnMnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdjaGFuZ2VTaWRlYmFyJywgc2lkZWJhcjogJ3BsYXllcnMnIH0pKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuc2VsZWN0UGxheWVyc1RleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5zZWxlY3RQbGF5ZXJzVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5kZWZlYXRUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDQ2MiwgKG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55KSAvIDIsICdZb3UgaGF2ZSBiZWVuIGRlZmVhdGVkIScsIHtcbiAgICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogNCxcbiAgICAgIH0pXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcbiAgICAgIC5zZXRGb250U2l6ZSg0MilcbiAgICAgIC5zZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgLnNldERlcHRoKDEwMClcbiAgICB0aGlzLnZpY3RvcnlUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDQ2MiwgMzAsICdWaWN0b3J5IScsIHtcbiAgICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogNCxcbiAgICAgIH0pXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcbiAgICAgIC5zZXRGb250U2l6ZSg0MilcbiAgICAgIC5zZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgLnNldERlcHRoKDEwMClcbiAgICB0aGlzLndvcmxkTG9nVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoOTYwLCA1MCwgJycpLnNldFdvcmRXcmFwV2lkdGgoNDcwKS5zZXRGb250U2l6ZSgxNClcbiAgICB0aGlzLmNoYXRUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDk2MCwgNjAwLCAnQ2hhdC4uLicsIHtcbiAgICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgICBmaXhlZFdpZHRoOiA0NzgsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMzMzMzMnLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgIC5zZXRQYWRkaW5nKDAsIDAsIDAsIDApXG4gICAgICAuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgdGhpcy5jaGF0VGV4dC5zZXRUZXh0KCcnKVxuICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnNjZW5lLnBsdWdpbnMuZ2V0KCdyZXhUZXh0RWRpdCcpIGFzIGFueVxuICAgICAgICBwbHVnaW4uZWRpdCh0aGlzLmNoYXRUZXh0LCB7XG4gICAgICAgICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnY2hhdCcsIG1lc3NhZ2U6IHRoaXMuY2hhdFRleHQudGV4dCB9KVxuICAgICAgICAgICAgdGhpcy5jaGF0VGV4dC5zZXRUZXh0KCdDaGF0Li4uJylcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB0aGlzLmhvc3RDcm93biA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDEyMzUsIDAsICdjcm93bicpLnNldFNjYWxlKDAuNilcbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiB3b3JsZFN0YXRlLmdldFNvcnRlZFBsYXllcnMoKSkge1xuICAgICAgY29uc3QgbmFtZVRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgICAudGV4dCgxMDA1LCAwLCBwbGF5ZXIubmFtZSwge1xuICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgICBmaXhlZFdpZHRoOiAyMDAsXG4gICAgICAgICAgZm9udFN0eWxlOiBwbGF5ZXIuaWQgPT09IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWQgPyAnYm9sZCcgOiAnbm9ybWFsJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnNldEZvbnRTaXplKDE4KVxuICAgICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgY29uc3QgbGxhbWEgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgICAuc3ByaXRlKDk3NSwgMCwgSW1hZ2VLZXlzLkxMQU1BX0VBVF8xKVxuICAgICAgICAuc2V0U2NhbGUoMC42KVxuICAgICAgICAuc2V0VGludChQTEFZRVJfVElOVFNbcGxheWVyLmlkIC0gMV0pXG4gICAgICBjb25zdCBwbGF5ZXJPYmplY3RzOiBQbGF5ZXJPYmplY3RzID0geyBuYW1lVGV4dCwgbGxhbWEgfVxuICAgICAgdGhpcy5wbGF5ZXJPYmplY3RzLnNldChwbGF5ZXIuaWQsIHBsYXllck9iamVjdHMpXG4gICAgfVxuICAgIG5ldyBVaUJvcmRlckRpc3BsYXlPYmplY3Qoc2NlbmUsIHsgdG9wTGVmdDogcG9pbnQoOTUwLCAyMCksIHdpZHRoOiA1MDAsIGhlaWdodDogNjIwIH0pXG4gICAgbmV3IFVpQm9yZGVyRGlzcGxheU9iamVjdChzY2VuZSwgeyB0b3BMZWZ0OiBwb2ludCgxMCwgNTIwKSwgd2lkdGg6IDkzMCwgaGVpZ2h0OiAxMjAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dENsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJNb3ZlTW9kZScgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2Fib3J0JyB9KVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0MkNsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnbWVsZWUnIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0M0NsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnc3BpdCcgfSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFzQ2xpY2tIYW5kbGVyRm9yID0gKHBvaW50OiBQb2ludCk6IGJvb2xlYW4gPT4ge1xuICAgIGZvciAoY29uc3QgZ2FtZU9iamVjdCBvZiBbdGhpcy5lbmRUdXJuVGV4dCwgdGhpcy5hY3Rpb25UZXh0LCB0aGlzLmFjdGlvblRleHQyLCB0aGlzLmFjdGlvblRleHQzXSlcbiAgICAgIGlmIChnYW1lT2JqZWN0LmdldEJvdW5kcygpLmNvbnRhaW5zKHBvaW50LngsIHBvaW50LnkpKSByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5jb21iaW5lZFN0YXRlLmdldEN1cnJlbnRQbGF5ZXIoKVxuICAgIHRoaXMuaG91cmdsYXNzLnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA+IDApXG4gICAgdGhpcy5wbGF5ZXJUZXh0LnNldFRleHQoYCR7cGxheWVyLm5hbWV9IC0gVHVybiAke3RoaXMud29ybGRTdGF0ZS50dXJufWApXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQoJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0Mi5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dDMuc2V0VGV4dCgnJylcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuc3luY1NlbGVjdEhleE1vZGVUZXh0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5zeW5jTW92ZVVuaXRNb2RlVGV4dChtb2RlLnVuaXRJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuc3luY0F0dGFja01vZGVUZXh0KG1vZGUudW5pdElkLCBtb2RlLmF0dGFja1R5cGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gICAgY29uc3QgY2FuQWN0ID0gd29ybGRTdGF0ZS5jYW5QbGF5ZXJBY3QocGxheWVyLmlkKVxuICAgIGlmIChjYW5BY3QpIHtcbiAgICAgIHRoaXMuZW5kVHVyblRleHQuc2V0VGV4dCgnRW5kIFR1cm4nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ1dhaXRpbmcgZm9yIG5leHQgdHVybi4uLicpXG4gICAgfVxuICAgIHRoaXMuZW5kVHVybkJ1dHRvbi5zZXRWaXNpYmxlKGNhbkFjdClcbiAgICB0aGlzLmRlZmVhdFRleHQuc2V0VmlzaWJsZShwbGF5ZXIuZGVmZWF0ZWQpXG4gICAgdGhpcy52aWN0b3J5VGV4dC5zZXRWaXNpYmxlKHdvcmxkU3RhdGUuZ2FtZU92ZXJJbmZvPy52aWN0b3IgPT09IHBsYXllci5pZClcbiAgICB0aGlzLndvcmxkTG9nVGV4dC5zZXRUZXh0KFIudGFrZUxhc3QoMjAsIHRoaXMud29ybGRTdGF0ZS53b3JsZExvZykuam9pbignXFxuJykpXG4gICAgdGhpcy53b3JsZExvZ1RleHQuc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5zaWRlYmFyID09PSAnbG9nJylcbiAgICBsZXQgeSA9IDY1XG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2Ygd29ybGRTdGF0ZS5nZXRTb3J0ZWRQbGF5ZXJzKCkpIHtcbiAgICAgIGlmIChwbGF5ZXIuaWQgPT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICAgIHRoaXMuaG9zdENyb3duLnNldFkoeSArIDUpXG4gICAgICB9XG4gICAgICBjb25zdCB7IG5hbWVUZXh0LCBsbGFtYSB9ID0gdGhpcy5nZXRQbGF5ZXJPYmplY3RzKHBsYXllci5pZClcbiAgICAgIG5hbWVUZXh0XG4gICAgICAgIC5zZXRUZXh0KHBsYXllci5uYW1lKVxuICAgICAgICAuc2V0WSh5KVxuICAgICAgICAuc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5zaWRlYmFyID09PSAncGxheWVycycpXG4gICAgICBsbGFtYVxuICAgICAgICAuc2V0WSh5ICsgMTApXG4gICAgICAgIC5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLnNpZGViYXIgPT09ICdwbGF5ZXJzJylcbiAgICAgICAgLnNldEZsaXBYKCF0aGlzLndvcmxkU3RhdGUuY2FuUGxheWVyQWN0KHBsYXllci5pZCkpXG4gICAgICB5ICs9IDUwXG4gICAgfVxuICAgIHRoaXMuaG9zdENyb3duLnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuc2lkZWJhciA9PT0gJ3BsYXllcnMnKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jQXR0YWNrTW9kZVRleHQgPSAodW5pdElkOiBVbml0SWQsIGF0dGFja1R5cGU6IEF0dGFja1R5cGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCh0aGlzLmRlc2NyaWJlVW5pdCh1bml0KSlcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dChgQ2xpY2sgdW5pdCB0byAke2F0dGFja1R5cGUgPT09ICdtZWxlZScgPyAnYXR0YWNrJyA6ICdzcGl0J30gKG9yIEVTQyB0byBjYW5jZWwpYClcbiAgfVxuXG4gIHByaXZhdGUgc3luY01vdmVVbml0TW9kZVRleHQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCh0aGlzLmRlc2NyaWJlVW5pdCh1bml0KSlcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnQ2xpY2sgdGlsZSB0byBtb3ZlIHRvIChvciBFU0MgdG8gY2FuY2VsKScpXG4gIH1cblxuICBwcml2YXRlIHN5bmNTZWxlY3RIZXhNb2RlVGV4dCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQoc2VsZWN0ZWRVbml0KSlcbiAgICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlKHNlbGVjdGVkVW5pdCkpIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCdNb3ZlIChtKScpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHNlbGVjdGVkVW5pdCkpIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnQXR0YWNrIChhKScpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHNlbGVjdGVkVW5pdCkpIHRoaXMuYWN0aW9uVGV4dDMuc2V0VGV4dCgnU3BpdCAocyknKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyTmFtZSA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBzdHJpbmcgPT4gdGhpcy53b3JsZFN0YXRlLmdldFBsYXllcihwbGF5ZXJJZCkubmFtZVxuXG4gIHByaXZhdGUgZGVzY3JpYmVVbml0ID0gKHVuaXQ6IFVuaXQpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGxheWVySWQsIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0gPSB1bml0XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IHRoaXMuZ2V0UGxheWVyTmFtZShwbGF5ZXJJZClcbiAgICByZXR1cm4gYCR7bmFtZX0gLSBMbGFtYSB3YXJyaW9yIC0gJHtwbGF5ZXJOYW1lfSAtIEhQICR7aGl0UG9pbnRzLmN1cnJlbnR9LyR7aGl0UG9pbnRzLm1heH0gLSBhY3Rpb25zICR7YWN0aW9uUG9pbnRzLmN1cnJlbnR9LyR7YWN0aW9uUG9pbnRzLm1heH1gXG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllck9iamVjdHMgPSAocGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyT2JqZWN0cyA9PiB7XG4gICAgY29uc3QgcGxheWVyT2JqZWN0cyA9IHRoaXMucGxheWVyT2JqZWN0cy5nZXQocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXJPYmplY3RzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsYXllciBvYmplY3RzIGZvdW5kIGZvciAke3BsYXllcklkfWApXG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJPYmplY3RzXG4gIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBJbWFnZUtleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuXG5jb25zdCBIT1JJWk9OVEFMX0lNQUdFX1dJRFRIID0gNzRcbmNvbnN0IFZFUlRJQ0FMX0lNQUdFX0hFSUdIVCA9IDU5XG5jb25zdCBDT1JORVJfV0lEVEggPSAxNVxuY29uc3QgQ09STkVSX0hFSUdIVCA9IDE1XG5jb25zdCBUSElDS05FU1MgPSA0XG5cbmV4cG9ydCBjbGFzcyBVaUJvcmRlckRpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVtdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSB0b3BMZWZ0OiBQb2ludFxuICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXJcbiAgcHJpdmF0ZSByZWFkb25seSBoZWlnaHQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHsgdG9wTGVmdCwgd2lkdGgsIGhlaWdodCB9OiB7IHRvcExlZnQ6IFBvaW50OyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9KSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy50b3BMZWZ0ID0gdG9wTGVmdFxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy5jcmVhdGVDb3JuZXJzKClcbiAgICB0aGlzLmNyZWF0ZVZlcnRpY2FsU2VjdGlvbnMoKVxuICAgIHRoaXMuY3JlYXRlSG9yaXpvbnRhbFNlY3Rpb25zKClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSG9yaXpvbnRhbFNlY3Rpb25zKCkge1xuICAgIGNvbnN0IGhvcml6b250YWxXaWR0aCA9IHRoaXMud2lkdGggLSAyICogQ09STkVSX1dJRFRIXG4gICAgY29uc3Qgd2hvbGVDb3BpZXMgPSBNYXRoLmZsb29yKGhvcml6b250YWxXaWR0aCAvIEhPUklaT05UQUxfSU1BR0VfV0lEVEgpXG4gICAgY29uc3QgZXhjZXNzV2lkdGggPSBob3Jpem9udGFsV2lkdGggJSBIT1JJWk9OVEFMX0lNQUdFX1dJRFRIXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gd2hvbGVDb3BpZXM7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHRoaXMudG9wTGVmdC54ICsgQ09STkVSX1dJRFRIICsgaSAqIEhPUklaT05UQUxfSU1BR0VfV0lEVEhcbiAgICAgIGNvbnN0IHlUb3AgPSB0aGlzLnRvcExlZnQueVxuICAgICAgY29uc3QgeUJvdHRvbSA9IHRoaXMudG9wTGVmdC55ICsgdGhpcy5oZWlnaHQgLSBUSElDS05FU1NcbiAgICAgIGNvbnN0IHRvcEhvcml6b250YWxJbWFnZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKHgsIHlUb3AsIEltYWdlS2V5cy5CT1JERVJfSE9SSVpPTlRBTCkuc2V0T3JpZ2luKDAsIDApXG4gICAgICBjb25zdCBib3R0b21Ib3Jpem9udGFsSW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4LCB5Qm90dG9tLCBJbWFnZUtleXMuQk9SREVSX0hPUklaT05UQUwpLnNldE9yaWdpbigwLCAwKVxuICAgICAgaWYgKGkgPT09IHdob2xlQ29waWVzKSB7XG4gICAgICAgIHRvcEhvcml6b250YWxJbWFnZS5zZXRDcm9wKDAsIDAsIGV4Y2Vzc1dpZHRoLCA1KVxuICAgICAgICBib3R0b21Ib3Jpem9udGFsSW1hZ2Uuc2V0Q3JvcCgwLCAwLCBleGNlc3NXaWR0aCwgNSlcbiAgICAgIH1cbiAgICAgIHRoaXMuaW1hZ2VzLnB1c2goYm90dG9tSG9yaXpvbnRhbEltYWdlLCB0b3BIb3Jpem9udGFsSW1hZ2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVWZXJ0aWNhbFNlY3Rpb25zKCkge1xuICAgIGNvbnN0IHZlcnRpY2FsSGVpZ2h0ID0gdGhpcy5oZWlnaHQgLSAyICogQ09STkVSX0hFSUdIVFxuICAgIGNvbnN0IHdob2xlQ29waWVzID0gTWF0aC5mbG9vcih2ZXJ0aWNhbEhlaWdodCAvIFZFUlRJQ0FMX0lNQUdFX0hFSUdIVClcbiAgICBjb25zdCBleGNlc3NIZWlnaHQgPSB2ZXJ0aWNhbEhlaWdodCAlIFZFUlRJQ0FMX0lNQUdFX0hFSUdIVFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHdob2xlQ29waWVzOyBpKyspIHtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnRvcExlZnQueSArIENPUk5FUl9XSURUSCArIGkgKiBWRVJUSUNBTF9JTUFHRV9IRUlHSFRcbiAgICAgIGNvbnN0IHhMZWZ0ID0gdGhpcy50b3BMZWZ0LnhcbiAgICAgIGNvbnN0IHhSaWdodCA9IHRoaXMudG9wTGVmdC54ICsgdGhpcy53aWR0aCAtIFRISUNLTkVTU1xuICAgICAgY29uc3QgbGVmdFZlcnRpY2FsSW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4TGVmdCwgeSwgSW1hZ2VLZXlzLkJPUkRFUl9WRVJUSUNBTCkuc2V0T3JpZ2luKDAsIDApXG4gICAgICBjb25zdCByaWdodFZlcnRpY2FsSW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4UmlnaHQsIHksIEltYWdlS2V5cy5CT1JERVJfVkVSVElDQUwpLnNldE9yaWdpbigwLCAwKVxuICAgICAgaWYgKGkgPT09IHdob2xlQ29waWVzKSB7XG4gICAgICAgIGxlZnRWZXJ0aWNhbEltYWdlLnNldENyb3AoMCwgMCwgNSwgZXhjZXNzSGVpZ2h0KVxuICAgICAgICByaWdodFZlcnRpY2FsSW1hZ2Uuc2V0Q3JvcCgwLCAwLCA1LCBleGNlc3NIZWlnaHQpXG4gICAgICB9XG4gICAgICB0aGlzLmltYWdlcy5wdXNoKGxlZnRWZXJ0aWNhbEltYWdlLCByaWdodFZlcnRpY2FsSW1hZ2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb3JuZXJzKCkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy50b3BMZWZ0XG4gICAgY29uc3QgeDIgPSB4ICsgdGhpcy53aWR0aCAtIENPUk5FUl9XSURUSFxuICAgIGNvbnN0IHkyID0geSArIHRoaXMuaGVpZ2h0IC0gQ09STkVSX0hFSUdIVFxuICAgIGNvbnN0IHRvcExlZnRJbWFnZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKHgsIHksIEltYWdlS2V5cy5CT1JERVJfVE9QX0xFRlQpLnNldE9yaWdpbigwLCAwKVxuICAgIGNvbnN0IHRvcFJpZ2h0SW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSh4MiwgeSwgSW1hZ2VLZXlzLkJPUkRFUl9UT1BfUklHSFQpLnNldE9yaWdpbigwLCAwKVxuICAgIGNvbnN0IGJvdHRvbUxlZnRJbWFnZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKHgsIHkyLCBJbWFnZUtleXMuQk9SREVSX0JPVFRPTV9MRUZUKS5zZXRPcmlnaW4oMCwgMClcbiAgICBjb25zdCBib3R0b21SaWdodEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoeDIsIHkyLCBJbWFnZUtleXMuQk9SREVSX0JPVFRPTV9SSUdIVCkuc2V0T3JpZ2luKDAsIDApXG4gICAgdGhpcy5pbWFnZXMucHVzaCh0b3BMZWZ0SW1hZ2UsIHRvcFJpZ2h0SW1hZ2UsIGJvdHRvbUxlZnRJbWFnZSwgYm90dG9tUmlnaHRJbWFnZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBoZXhDZW50ZXIgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBIRUFMVEhfQk9SREVSX0NPTE9VUiwgSEVBTFRIX0VNUFRZX0NPTE9VUiwgSEVBTFRIX0ZVTExfQ09MT1VSLCBQTEFZRVJfVElOVFMgfSBmcm9tICcuLi9jb2xvdXJzJ1xuaW1wb3J0IHsgYWRkUG9pbnRzLCBkaXN0YW5jZUJldHdlZW5Qb2ludHMsIFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBwbGF5VHdlZW4gfSBmcm9tICcuLi8uLi91dGlsL3BoYXNlci90d2Vlbi11dGlscydcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBbmltYXRpb25TcGVlZCB9IGZyb20gJy4vZGlzcGxheS1vYmplY3RzJ1xuaW1wb3J0IHsgcmFuZG9tSW50SW5jbHVzaXZlIH0gZnJvbSAnLi4vLi4vdXRpbC9yYW5kb20tdXRpbCdcblxuY29uc3QgSEVBTFRIX0JBUl9XSURUSCA9IDUwXG5jb25zdCBIRUFMVEhfQkFSX0hFSUdIVCA9IDEyXG5jb25zdCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MgPSAyXG5jb25zdCBJTUFHRV9PRkZTRVQgPSB7IHg6IDAsIHk6IDQgfVxuY29uc3QgSEVBTFRIX0JBUl9PRkZTRVQgPSB7IHg6IC0yNSwgeTogLTQwIH1cblxuZXhwb3J0IGNsYXNzIFVuaXREaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgdW5pdDogVW5pdFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoQmFyR3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljc1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgdGhpcy5pbWFnZSA9IHNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ2xsYW1hLTInKS5zZXRTY2FsZSgwLjgpLnNldFRpbnQodGhpcy5nZXRQbGF5ZXJUaW50KHRoaXMudW5pdC5wbGF5ZXJJZCkpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcyA9IHNjZW5lLmFkZC5ncmFwaGljcygpXG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllclRpbnQgPSAocGxheWVySWQ6IFBsYXllcklkKSA9PlxuICAgIFBMQVlFUl9USU5UU1soUExBWUVSX1RJTlRTLmxlbmd0aCArIHBsYXllcklkIC0gMSkgJSBQTEFZRVJfVElOVFMubGVuZ3RoXVxuXG4gIHByaXZhdGUgZ2V0SGVhbHRoQmFyUG9zaXRpb24gPSAocG9pbnQ6IFBvaW50KTogUG9pbnQgPT4gYWRkUG9pbnRzKHBvaW50LCBIRUFMVEhfQkFSX09GRlNFVClcblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHVuaXQ6IFVuaXQpOiB2b2lkID0+IHtcbiAgICBhc3NlcnQodW5pdC5pZCA9PT0gdGhpcy51bml0LmlkKVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICBjb25zdCB1bml0UG9pbnQgPSBoZXhDZW50ZXIodGhpcy51bml0LmxvY2F0aW9uKVxuICAgIHRoaXMuaW1hZ2Uuc2V0UG9zaXRpb24odW5pdFBvaW50LnggKyBJTUFHRV9PRkZTRVQueCwgdW5pdFBvaW50LnkgKyBJTUFHRV9PRkZTRVQueSlcbiAgICB0aGlzLnN5bmNIZWFsdGhCYXIodW5pdFBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jSGVhbHRoQmFyID0gKHVuaXRQb2ludDogUG9pbnQpID0+IHtcbiAgICBjb25zdCBoZWFsdGhCYXJQb3NpdGlvbiA9IHRoaXMuZ2V0SGVhbHRoQmFyUG9zaXRpb24odW5pdFBvaW50KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3Muc2V0UG9zaXRpb24oaGVhbHRoQmFyUG9zaXRpb24ueCwgaGVhbHRoQmFyUG9zaXRpb24ueSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmNsZWFyKClcblxuICAgIC8vIERyYXcgYm9yZGVyXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IEhFQUxUSF9CQVJfV0lEVEggLSAyICogSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTXG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBIRUFMVEhfQkFSX0hFSUdIVCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfQk9SREVSX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KDAsIDAsIEhFQUxUSF9CQVJfV0lEVEgsIEhFQUxUSF9CQVJfSEVJR0hUKVxuXG4gICAgLy8gRHJhdyBlbXB0eSBiYWNrZ3JvdW5kXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0VNUFRZX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcblxuICAgIC8vIEZpbGwgaW4gYmFyXG4gICAgY29uc3QgeyBjdXJyZW50LCBtYXggfSA9IHRoaXMudW5pdC5oaXRQb2ludHNcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRlVMTF9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdChcbiAgICAgIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUyxcbiAgICAgIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUyxcbiAgICAgIChpbm5lcldpZHRoICogY3VycmVudCkgLyBtYXgsXG4gICAgICBpbm5lckhlaWdodCxcbiAgICApXG4gIH1cblxuICBwdWJsaWMgcnVuTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5zY2FsZVNwZWVkKDUwMCwgc3BlZWQpXG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5hbmltcy5wbGF5KCdsbGFtYS13YWxrJylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5oZWFsdGhCYXJHcmFwaGljcyxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSEVBTFRIX0JBUl9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtwbGF5VHdlZW4odHdlZW4xKSwgcGxheVR3ZWVuKHR3ZWVuMildKVxuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5pbWFnZS5hbmltcy5jdXJyZW50QW5pbS5mcmFtZXNbMV1cbiAgICB0aGlzLmltYWdlLmFuaW1zLnN0b3BPbkZyYW1lKGZyYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBzY2FsZVNwZWVkID0gKGR1cmF0aW9uOiBudW1iZXIsIHNwZWVkOiBBbmltYXRpb25TcGVlZCkgPT4gKHNwZWVkID09PSAnbm9ybWFsJyA/IGR1cmF0aW9uIDogZHVyYXRpb24gLyA0KVxuXG4gIHB1YmxpYyBydW5EZWF0aEFuaW1hdGlvbiA9IGFzeW5jIChzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuc2NhbGVTcGVlZCgxMDAwLCBzcGVlZClcbiAgICBjb25zdCB0d2VlbiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiBbdGhpcy5pbWFnZSwgdGhpcy5oZWFsdGhCYXJHcmFwaGljc10sXG4gICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgYXdhaXQgcGxheVR3ZWVuKHR3ZWVuKVxuICB9XG5cbiAgcHVibGljIHJ1blNwaXRBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4LCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBmcm9tUG9pbnQgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCB0b1BvaW50ID0gaGV4Q2VudGVyKHRvKVxuICAgIGNvbnN0IGRpc3RhbmNlID0gZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKGZyb21Qb2ludCwgdG9Qb2ludClcbiAgICBjb25zdCBpbWFnZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKGZyb21Qb2ludC54LCBmcm9tUG9pbnQueSwgJ3NwaXQnKS5zZXRTY2FsZSgwLjgpXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnNjYWxlU3BlZWQoZGlzdGFuY2UgKiA0LCBzcGVlZClcbiAgICBjb25zdCB0d2VlbiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiBpbWFnZSxcbiAgICAgIHg6IHtcbiAgICAgICAgZnJvbTogZnJvbVBvaW50LngsXG4gICAgICAgIHRvOiB0b1BvaW50LngsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBmcm9tOiBmcm9tUG9pbnQueSxcbiAgICAgICAgdG86IHRvUG9pbnQueSxcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiAnUXVhZCcsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gICAgaW1hZ2UuZGVzdHJveSgpXG4gIH1cblxuICBwdWJsaWMgcnVuRGFtYWdlQW5pbWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uOiBIZXgsIGRhbWFnZTogbnVtYmVyLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBsb2NhdGlvblBvaW50ID0gaGV4Q2VudGVyKGxvY2F0aW9uKVxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQobG9jYXRpb25Qb2ludC54LCBsb2NhdGlvblBvaW50LnksIGRhbWFnZS50b1N0cmluZygpLCB7XG4gICAgICAgIGNvbG9yOiAnI2ZmODg4OCcsXG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDIsXG4gICAgICB9KVxuICAgICAgLnNldEZvbnRTaXplKDI2KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnNjYWxlU3BlZWQoMjAwMCwgc3BlZWQpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRleHQsXG4gICAgICB5OiB7XG4gICAgICAgIGZyb206IGxvY2F0aW9uUG9pbnQueSAtIDUwLFxuICAgICAgICB0bzogbG9jYXRpb25Qb2ludC55IC0gNzUsXG4gICAgICB9LFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlOiAnTGluZWFyJyxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0N1YmljLmluJyxcbiAgICB9KVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtwbGF5VHdlZW4odHdlZW4xKSwgcGxheVR3ZWVuKHR3ZWVuMildKVxuICAgIHRleHQuZGVzdHJveSgpXG4gIH1cblxuICBwdWJsaWMgcnVuRWF0QW5pbWF0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmIChyYW5kb21JbnRJbmNsdXNpdmUoMSwgMykgPT09IDEpIHtcbiAgICAgIHRoaXMuaW1hZ2UudG9nZ2xlRmxpcFgoKVxuICAgIH1cbiAgICB0aGlzLmltYWdlLmFuaW1zLnBsYXkoJ2xsYW1hLWVhdCcpXG4gIH1cblxuICBwdWJsaWMgcnVuQXR0YWNrQW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCwgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgdGhpcy5pbWFnZS5hbmltcy5wbGF5KCdsbGFtYS13YWxrJylcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuc2NhbGVTcGVlZCg0MDAsIHNwZWVkKVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmltYWdlLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBJTUFHRV9PRkZTRVQpLFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgIH0pXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3BsYXlUd2Vlbih0d2VlbjEpLCBwbGF5VHdlZW4odHdlZW4yKV0pXG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmltYWdlLmFuaW1zLmN1cnJlbnRBbmltLmZyYW1lc1sxXVxuICAgIHRoaXMuaW1hZ2UuYW5pbXMuc3RvcE9uRnJhbWUoZnJhbWUpXG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5raWxsVHdlZW5zT2YoW3RoaXMuaGVhbHRoQmFyR3JhcGhpY3MsIHRoaXMuaW1hZ2VdKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZGVzdHJveSgpXG4gICAgdGhpcy5pbWFnZS5kZXN0cm95KClcbiAgfVxufVxuXG50eXBlIFR3ZWVuWFkgPSB7IHg6IHsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH07IHk6IHsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH0gfVxuXG5jb25zdCBjYWxjdWxhdGVUd2VlblhZID0gKGZyb206IFBvaW50LCB0bzogUG9pbnQsIG9mZnNldDogUG9pbnQpOiBUd2VlblhZID0+ICh7XG4gIHg6IHtcbiAgICBmcm9tOiBmcm9tLnggKyBvZmZzZXQueCxcbiAgICB0bzogdG8ueCArIG9mZnNldC54LFxuICB9LFxuICB5OiB7XG4gICAgZnJvbTogZnJvbS55ICsgb2Zmc2V0LnksXG4gICAgdG86IHRvLnkgKyBvZmZzZXQueSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IG9wZW5Xb3JsZEV2ZW50RGIgfSBmcm9tICcuLi8uLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi8uLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lEIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgc2V0VXJsSW5mbyB9IGZyb20gJy4uL2Jvb3QvdXJsLWluZm8nXG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSAnLi4vLi4vdWkvcHJpbWFyeS1idXR0b24nXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi9sb2NhbC1zdG9yYWdlL2xvY2FsJ1xuXG5leHBvcnQgY29uc3QgTUFJTl9NRU5VX1NDRU5FX0tFWSA9ICdNYWluTWVudSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IE1BSU5fTUVOVV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYWRkLnRleHQoMTU1LCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNilcbiAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgbmV3IFByaW1hcnlCdXR0b24odGhpcywgMTAwLCAxMjAsICdIb3N0IEdhbWUnLCB0aGlzLmhhbmRsZUhvc3RHYW1lKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVIb3N0R2FtZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB3b3JsZEV2ZW50RGIgPSBhd2FpdCBvcGVuV29ybGRFdmVudERiKClcbiAgICBjb25zdCBnYW1lSWQ6IEdhbWVJZCA9IHV1aWQoKVxuICAgIGNvbnN0IHBsYXllcklkID0gSE9TVF9QTEFZRVJfSURcbiAgICBsZXQgd29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgICBjb25zdCBuYW1lID0gTG9jYWxTdG9yYWdlLmZpbmROYW1lKClcbiAgICBpZiAobmFtZSkge1xuICAgICAgd29ybGRTdGF0ZSA9IHdvcmxkU3RhdGUuc2V0UGxheWVyTmFtZShwbGF5ZXJJZCwgbmFtZSlcbiAgICB9XG4gICAgY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgd29ybGRTdGF0ZSwgMClcbiAgICBzZXJ2ZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCB7IHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IHdvcmxkU3RhdGUgfSlcbiAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkIH0pXG4gICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciB9XG4gICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlQb2ludCA9IChwb2ludDogUG9pbnQsIG46IG51bWJlcik6IFBvaW50ID0+ICh7IHg6IHBvaW50LnggKiBuLCB5OiBwb2ludC55ICogbiB9KVxuXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHtcbiAgeDogcG9pbnQxLnggLSBwb2ludDIueCxcbiAgeTogcG9pbnQxLnkgLSBwb2ludDIueSxcbn0pXG5cbmNvbnN0IHNxdWFyZSA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4gbiAqIG5cblxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlblBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogbnVtYmVyID0+XG4gIE1hdGguc3FydChzcXVhcmUocG9pbnQxLnggLSBwb2ludDIueCkgKyBzcXVhcmUocG9pbnQxLnkgLSBwb2ludDIueSkpXG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSwgQXR0YWNrV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgQ29tYmF0V29ybGRFdmVudCwgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgcmFuZG9tSW50SW5jbHVzaXZlIH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuXG5leHBvcnQgY29uc3QgY2FuQXR0YWNrT2NjdXIgPSAoYXR0YWNrVHlwZTogQXR0YWNrVHlwZSwgbWFwOiBXb3JsZE1hcCwgZnJvbTogSGV4LCB0bzogSGV4KTogYm9vbGVhbiA9PiB7XG4gIHN3aXRjaCAoYXR0YWNrVHlwZSkge1xuICAgIGNhc2UgJ21lbGVlJzpcbiAgICAgIHJldHVybiBmcm9tLmlzQWRqYWNlbnRUbyh0bylcbiAgICBjYXNlICdzcGl0JzpcbiAgICAgIGNvbnN0IGJsb2NrZWRCeU1vdW50YWlucyA9IFIuYWxsKG1hcC5pc01vdW50YWluLCBSLmludGVyc2VjdGlvbihmcm9tLm5laWdoYm91cnMoKSwgdG8ubmVpZ2hib3VycygpKSlcbiAgICAgIHJldHVybiAhYmxvY2tlZEJ5TW91bnRhaW5zICYmIGZyb20uZGlzdGFuY2VUbyh0bykgPD0gMlxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQXR0YWNrID0gKGFjdGlvbjogQXR0YWNrV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSB0aGlzLnZhbGlkYXRlQXR0YWNrKGFjdGlvbilcbiAgICBjb25zdCB7IGF0dGFja1R5cGUgfSA9IGFjdGlvblxuICAgIGNvbnN0IHJhd0F0dGFja2VyRGFtYWdlID0gYXR0YWNrVHlwZSA9PT0gJ21lbGVlJyA/IHJhbmRvbUludEluY2x1c2l2ZSg4LCAxMikgOiAwXG4gICAgY29uc3QgcmF3RGVmZW5kZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKDE3LCAyMykgOiByYW5kb21JbnRJbmNsdXNpdmUoNCwgNilcbiAgICBjb25zdCBhdHRhY2tlckRhbWFnZSA9IE1hdGgubWluKGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50LCByYXdBdHRhY2tlckRhbWFnZSlcbiAgICBjb25zdCBkZWZlbmRlckRhbWFnZSA9IE1hdGgubWluKGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50LCByYXdEZWZlbmRlckRhbWFnZSlcbiAgICBjb25zdCBjb21iYXRXb3JsZEV2ZW50ID0gdGhpcy5tYWtlQ29tYmF0V29ybGRFdmVudChhdHRhY2tUeXBlLCBhdHRhY2tlciwgYXR0YWNrZXJEYW1hZ2UsIGRlZmVuZGVyLCBkZWZlbmRlckRhbWFnZSlcblxuICAgIGxldCBuZXdXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnQoY29tYmF0V29ybGRFdmVudClcbiAgICBjb25zdCBldmVudHM6IFdvcmxkRXZlbnRbXSA9IFtjb21iYXRXb3JsZEV2ZW50XVxuICAgIGxldCBuZXh0V29ybGRFdmVudElkID0gdGhpcy5uZXh0V29ybGRFdmVudElkICsgMVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmlzUGxheWVyRGVmZWF0ZWQoZGVmZW5kZXIucGxheWVySWQpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMucGxheWVyRGVmZWF0ZWRFdmVudChuZXh0V29ybGRFdmVudElkKyssIGRlZmVuZGVyLnBsYXllcklkKVxuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICBuZXdXb3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICBpZiAobmV3V29ybGRTdGF0ZS5pc1BsYXllckRlZmVhdGVkKGF0dGFja2VyLnBsYXllcklkKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLnBsYXllckRlZmVhdGVkRXZlbnQobmV4dFdvcmxkRXZlbnRJZCsrLCBhdHRhY2tlci5wbGF5ZXJJZClcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KVxuICAgICAgbmV3V29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgY29uc3QgdW5kZWZlYXRlZFBsYXllcnMgPSBuZXdXb3JsZFN0YXRlLnBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIuZGVmZWF0ZWQpXG4gICAgaWYgKFIuaXNFbXB0eSh1bmRlZmVhdGVkUGxheWVycykpIHtcbiAgICAgIGV2ZW50cy5wdXNoKHsgaWQ6IG5leHRXb3JsZEV2ZW50SWQrKywgdHlwZTogJ2dhbWVPdmVyJyB9KVxuICAgIH0gZWxzZSBpZiAodW5kZWZlYXRlZFBsYXllcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCB2aWN0b3IgPSB1bmRlZmVhdGVkUGxheWVyc1swXS5pZFxuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInLCB2aWN0b3IgfSlcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5ZXJEZWZlYXRlZEV2ZW50ID0gKGlkOiBXb3JsZEV2ZW50SWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllckRlZmVhdGVkV29ybGRFdmVudCA9PiAoe1xuICAgIGlkLFxuICAgIHR5cGU6ICdwbGF5ZXJEZWZlYXRlZCcsXG4gICAgcGxheWVySWQ6IHBsYXllcklkLFxuICB9KVxuXG4gIHByaXZhdGUgdmFsaWRhdGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IHsgYXR0YWNrZXI6IFVuaXQ7IGRlZmVuZGVyOiBVbml0IH0gPT4ge1xuICAgIGNvbnN0IGF0dGFja2VySWQgPSBhY3Rpb24uYXR0YWNrZXIudW5pdElkXG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VySWQpXG4gICAgaWYgKCFhdHRhY2tlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHthdHRhY2tlcklkfWApXG4gICAgfVxuICAgIGlmIChhdHRhY2tlci5wbGF5ZXJJZCAhPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgY29udHJvbCBhbm90aGVyIHBsYXllcidzIHVuaXQ6ICR7YXR0YWNrZXIuaWR9YClcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLmFjdGlvblBvaW50cy5jdXJyZW50IDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gYXR0YWNrYClcbiAgICB9XG4gICAgaWYgKCFhdHRhY2tlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmF0dGFja2VyLmxvY2F0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRhY2tlciBub3QgaW4gZXhwZWN0ZWQgbG9jYXRpb25gKVxuICAgIH1cblxuICAgIGNvbnN0IGRlZmVuZGVySWQgPSBhY3Rpb24uZGVmZW5kZXIudW5pdElkXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVySWQpXG4gICAgaWYgKCFkZWZlbmRlcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlcklkfWApXG4gICAgfVxuICAgIGlmIChkZWZlbmRlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgYXR0YWNrIG93biB1bml0YClcbiAgICB9XG4gICAgaWYgKCFkZWZlbmRlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmRlZmVuZGVyLmxvY2F0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBEZWZlbmRlciBub3QgaW4gZXhwZWN0ZWQgbG9jYXRpb25gKVxuICAgIH1cblxuICAgIGlmICghY2FuQXR0YWNrT2NjdXIoYWN0aW9uLmF0dGFja1R5cGUsIHRoaXMud29ybGRTdGF0ZS5tYXAsIGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgdW5pdCBhdHRhY2sgb2YgdHlwZSAke2FjdGlvbi5hdHRhY2tUeXBlfSBiZXR3ZWVuIGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259IHRvbyBmYXIgYXBhcnRgLFxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4geyBhdHRhY2tlciwgZGVmZW5kZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlQ29tYmF0V29ybGRFdmVudCA9IChcbiAgICBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLFxuICAgIGF0dGFja2VyOiBVbml0LFxuICAgIGF0dGFja2VyRGFtYWdlOiBudW1iZXIsXG4gICAgZGVmZW5kZXI6IFVuaXQsXG4gICAgZGVmZW5kZXJEYW1hZ2U6IG51bWJlcixcbiAgKTogQ29tYmF0V29ybGRFdmVudCA9PiAoe1xuICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgYXR0YWNrVHlwZSxcbiAgICBhdHRhY2tlcjoge1xuICAgICAgcGxheWVySWQ6IGF0dGFja2VyLnBsYXllcklkLFxuICAgICAgdW5pdElkOiBhdHRhY2tlci5pZCxcbiAgICAgIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbixcbiAgICAgIGRhbWFnZTogYXR0YWNrZXJEYW1hZ2UsXG4gICAgICBraWxsZWQ6IGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50ID09PSBhdHRhY2tlckRhbWFnZSxcbiAgICB9LFxuICAgIGRlZmVuZGVyOiB7XG4gICAgICBwbGF5ZXJJZDogZGVmZW5kZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGRlZmVuZGVyLmlkLFxuICAgICAgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBkZWZlbmRlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT09IGRlZmVuZGVyRGFtYWdlLFxuICAgIH0sXG4gICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gIH0pXG59XG4iLCJpbXBvcnQge1xuICBKb2luUmVxdWVzdCxcbiAgSm9pblJlc3BvbnNlLFxuICBSZWpvaW5SZXF1ZXN0LFxuICBSZWpvaW5SZXNwb25zZSxcbiAgV29ybGRBY3Rpb25SZXF1ZXN0LFxuICBXb3JsZEV2ZW50TWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBQZWVyQ2xpZW50IH0gZnJvbSAnLi9wZWVyLWNsaWVudCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3dvcmxkLXN0YXRlLW93bmVyJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgd2l0aFRpbWVvdXQgfSBmcm9tICcuLi91dGlsL2FzeW5jLXV0aWwnXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsU3RvcmFnZSB9IGZyb20gJy4uL3NjZW5lcy9sb2NhbC1zdG9yYWdlL2xvY2FsJ1xuXG5jb25zdCBUSU1FT1VUID0gNTAwMFxuXG5leHBvcnQgY2xhc3MgQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyQ2xpZW50OiBQZWVyQ2xpZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG4gIHByaXZhdGUgX3dvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gIHByaXZhdGUgX3BsYXllcklkOiBQbGF5ZXJJZCA9IC0xXG5cbiAgcHVibGljIGdldCB3b3JsZFN0YXRlKCk6IFdvcmxkU3RhdGUge1xuICAgIHJldHVybiB0aGlzLl93b3JsZFN0YXRlXG4gIH1cblxuICBwdWJsaWMgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5fcGxheWVySWRcbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocGVlckNsaWVudDogUGVlckNsaWVudCkge1xuICAgIHRoaXMucGVlckNsaWVudCA9IHBlZXJDbGllbnRcbiAgICBwZWVyQ2xpZW50LmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlV29ybGRFdmVudE1lc3NhZ2UpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnRNZXNzYWdlID0gKG1lc3NhZ2U6IFdvcmxkRXZlbnRNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuZXZlbnQpXG4gICAgY29uc3QgcHJldmlvdXNXb3JsZFN0YXRlID0gdGhpcy5fd29ybGRTdGF0ZVxuICAgIGNvbnN0IG5ld1dvcmxkU3RhdGUgPSBwcmV2aW91c1dvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB0aGlzLl93b3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZVxuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbm5lY3QgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPENsaWVudD4gPT4ge1xuICAgIGNvbnN0IHBlZXJDbGllbnQgPSBhd2FpdCB3aXRoVGltZW91dChUSU1FT1VUKShQZWVyQ2xpZW50LmNvbm5lY3QoZ2FtZUlkKSlcbiAgICByZXR1cm4gbmV3IENsaWVudChwZWVyQ2xpZW50KVxuICB9XG5cbiAgcHVibGljIHJlam9pbiA9IGFzeW5jIChwbGF5ZXJJZDogUGxheWVySWQpOiBQcm9taXNlPE9wdGlvbjxXb3JsZFN0YXRlPj4gPT4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IFJlam9pblJlcXVlc3QgPSB7IHR5cGU6ICdyZWpvaW4nLCBwbGF5ZXJJZCB9XG4gICAgY29uc3QgcmVzcG9uc2U6IFJlam9pblJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZW5kUmVxdWVzdChyZXF1ZXN0KVxuICAgIHN3aXRjaCAocmVzcG9uc2UudHlwZSkge1xuICAgICAgY2FzZSAncmVqb2luZWQnOlxuICAgICAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihyZXNwb25zZS53b3JsZFN0YXRlKVxuICAgICAgICB0aGlzLl9wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgICAgIHRoaXMuX3dvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgICAgIHJldHVybiB3b3JsZFN0YXRlXG4gICAgICBjYXNlICd1bmFibGVUb1Jlam9pbic6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihyZXNwb25zZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgam9pbiA9IGFzeW5jICgpOiBQcm9taXNlPE9wdGlvbjx7IHBsYXllcklkOiBQbGF5ZXJJZDsgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSB9Pj4gPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBMb2NhbFN0b3JhZ2UuZmluZE5hbWUoKVxuICAgIGNvbnN0IHJlcXVlc3Q6IEpvaW5SZXF1ZXN0ID0geyB0eXBlOiAnam9pbicsIG5hbWUgfVxuICAgIGNvbnN0IHJlc3BvbnNlOiBKb2luUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0KHJlcXVlc3QpXG4gICAgc3dpdGNoIChyZXNwb25zZS50eXBlKSB7XG4gICAgICBjYXNlICdqb2luZWQnOlxuICAgICAgICBjb25zdCBwbGF5ZXJJZCA9IHJlc3BvbnNlLnBsYXllcklkXG4gICAgICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBXb3JsZFN0YXRlLmZyb21Kc29uKHJlc3BvbnNlLndvcmxkU3RhdGUpXG4gICAgICAgIHRoaXMuX3BsYXllcklkID0gcGxheWVySWRcbiAgICAgICAgdGhpcy5fd29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICAgICAgcmV0dXJuIHsgcGxheWVySWQsIHdvcmxkU3RhdGUgfVxuICAgICAgY2FzZSAndW5hYmxlVG9Kb2luJzpcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHJlc3BvbnNlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VuZFJlcXVlc3QgPSBhc3luYyAocmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+ID0+IHdpdGhUaW1lb3V0KFRJTUVPVVQpKHRoaXMucGVlckNsaWVudC5zZW5kUmVxdWVzdChyZXF1ZXN0KSlcblxuICBwdWJsaWMgc2VuZEFjdGlvbiA9IGFzeW5jIChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBXb3JsZEFjdGlvblJlcXVlc3QgPSB7XG4gICAgICB0eXBlOiAnd29ybGRBY3Rpb24nLFxuICAgICAgYWN0aW9uOiBzZXJpYWxpc2VUb0pzb24oYWN0aW9uKSxcbiAgICAgIHBsYXllcklkOiBwbGF5ZXJJZCxcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zZW5kUmVxdWVzdChyZXF1ZXN0KVxuICB9XG59XG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCdcbmltcG9ydCB7XG4gIEJyb2FkY2FzdE1lc3NhZ2UsXG4gIEVycm9yUmVzcG9uc2VNZXNzYWdlLFxuICBQZWVySWQsXG4gIFJlcXVlc3RJZCxcbiAgUmVxdWVzdE1lc3NhZ2UsXG4gIFJlc3BvbnNlTWVzc2FnZSxcbiAgU2VydmVyVG9DbGllbnRNZXNzYWdlLFxufSBmcm9tICcuL3BlZXItc2VydmVyJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IFBlZXIgPSByZXF1aXJlKCdwZWVyanMnKVxuaW1wb3J0IHsgbmV3UGVlciB9IGZyb20gJy4vcGVlci11dGlscydcbmltcG9ydCB7IFJlamVjdCwgUmVzb2x2ZSB9IGZyb20gJy4uL3V0aWwvYXN5bmMtdXRpbCdcblxuaW50ZXJmYWNlIFJlc29sdmVBbmRSZWplY3Q8VD4ge1xuICByZXNvbHZlOiBSZXNvbHZlPFQ+XG4gIHJlamVjdDogUmVqZWN0XG59XG5cbmV4cG9ydCB0eXBlIFBlZXJMaXN0ZW5lciA9IChtZXNzYWdlOiBhbnkpID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIFBlZXJDbGllbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb25cbiAgcHJpdmF0ZSByZWFkb25seSBvdXRzdGFuZGluZ1JlcXVlc3RzOiBNYXA8UmVxdWVzdElkLCBSZXNvbHZlQW5kUmVqZWN0PGFueT4+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBQZWVyTGlzdGVuZXJbXSA9IFtdXG5cbiAgY29uc3RydWN0b3IoY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbikge1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb25cbiAgICBjb25uZWN0aW9uLm9uKCdkYXRhJywgdGhpcy5oYW5kbGVDb25uZWN0aW9uRGF0YSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29ubmVjdGlvbkRhdGEgPSAobWVzc2FnZTogU2VydmVyVG9DbGllbnRNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ0NMSUVOVDogcmVjZWl2ZWQgbWVzc2FnZScpXG4gICAgLy8gY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKG1lc3NhZ2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdlcnJvclJlc3BvbnNlJzpcbiAgICAgICAgdGhpcy5oYW5kbGVFcnJvclJlc3BvbnNlKG1lc3NhZ2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdicm9hZGNhc3QnOlxuICAgICAgICB0aGlzLmhhbmRsZUJyb2FkY2FzdChtZXNzYWdlKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb25uZWN0ID0gKHBlZXJJZDogUGVlcklkKTogUHJvbWlzZTxQZWVyQ2xpZW50PiA9PlxuICAgIG5ldyBQcm9taXNlPFBlZXJDbGllbnQ+KChyZXNvbHZlOiBSZXNvbHZlPGFueT4sIHJlamVjdDogUmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBwZWVyID0gbmV3UGVlcigpXG4gICAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZVxuICAgICAgcGVlci5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgaWYgKCFyZXNvbHZlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBwZWVyLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiBvcGVuJylcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHBlZXIuY29ubmVjdChwZWVySWQsIHsgcmVsaWFibGU6IHRydWUgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiBjb25uZWN0aW9uIG9wZW4nKVxuICAgICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBQZWVyQ2xpZW50KGNvbm5lY3Rpb24pXG4gICAgICAgICAgcmVzb2x2ZShjbGllbnQpXG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgcHVibGljIHNlbmRSZXF1ZXN0ID0gKHJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiA9PlxuICAgIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmU6IFJlc29sdmU8YW55PiwgcmVqZWN0OiBSZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RNZXNzYWdlOiBSZXF1ZXN0TWVzc2FnZSA9IHtcbiAgICAgICAgdHlwZTogJ3JlcXVlc3QnLFxuICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUVOVDogc2VuZGluZyByZXF1ZXN0JylcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3RNZXNzYWdlKVxuICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQocmVxdWVzdE1lc3NhZ2UpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuc2V0KHJlcXVlc3RNZXNzYWdlLmlkLCB7IHJlc29sdmUsIHJlamVjdCB9KVxuICAgIH0pXG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZSA9IChtZXNzYWdlOiBSZXNwb25zZU1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBjb25zdCByZXF1ZXN0SWQgPSBtZXNzYWdlLnJlc3BvbnNlVG9cbiAgICBjb25zdCByZXNvbHZlQW5kUmVqZWN0OiBPcHRpb248UmVzb2x2ZUFuZFJlamVjdDxhbnk+PiA9IHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5nZXQocmVxdWVzdElkKVxuICAgIGlmIChyZXNvbHZlQW5kUmVqZWN0KSB7XG4gICAgICByZXNvbHZlQW5kUmVqZWN0LnJlc29sdmUobWVzc2FnZS5yZXNwb25zZSlcbiAgICAgIHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5kZWxldGUocmVxdWVzdElkKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ0xJRU5UOiByZXNwb25zZSByZWNlaXZlZCBmb3IgdW5rbm93biByZXF1ZXN0ICR7cmVxdWVzdElkfWApXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvclJlc3BvbnNlID0gKG1lc3NhZ2U6IEVycm9yUmVzcG9uc2VNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcmVxdWVzdElkID0gbWVzc2FnZS5yZXNwb25zZVRvXG4gICAgY29uc3QgcmVzb2x2ZUFuZFJlamVjdDogT3B0aW9uPFJlc29sdmVBbmRSZWplY3Q8YW55Pj4gPSB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZ2V0KHJlcXVlc3RJZClcbiAgICBpZiAocmVzb2x2ZUFuZFJlamVjdCkge1xuICAgICAgcmVzb2x2ZUFuZFJlamVjdC5yZWplY3QoJ0Vycm9yIHJlY2VpdmVkIGZyb20gc2VydmVyJylcbiAgICAgIHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5kZWxldGUocmVxdWVzdElkKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgQ0xJRU5UOiBlcnJvciByZXNwb25zZSByZWNlaXZlZCBmb3IgdW5rbm93biByZXF1ZXN0ICR7cmVxdWVzdElkfWApXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBQZWVyTGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyID0gKGxpc3RlbmVyOiBQZWVyTGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChtZXNzYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQnJvYWRjYXN0ID0gKG1lc3NhZ2U6IEJyb2FkY2FzdE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhtZXNzYWdlLmJvZHkpXG4gIH1cbn1cbiIsImltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcbmltcG9ydCB7IG5ld1BlZXIgfSBmcm9tICcuL3BlZXItdXRpbHMnXG5cbmV4cG9ydCB0eXBlIFBlZXJJZCA9IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0SWQgPSBzdHJpbmdcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0TWVzc2FnZSB7XG4gIHR5cGU6ICdyZXF1ZXN0J1xuICBpZDogUmVxdWVzdElkXG4gIHJlcXVlc3Q6IGFueVxufVxuXG5leHBvcnQgdHlwZSBDbGllbnRUb1NlcnZlck1lc3NhZ2UgPSBSZXF1ZXN0TWVzc2FnZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlTWVzc2FnZSB7XG4gIHR5cGU6ICdyZXNwb25zZSdcbiAgcmVzcG9uc2VUbzogUmVxdWVzdElkXG4gIHJlc3BvbnNlOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvclJlc3BvbnNlTWVzc2FnZSB7XG4gIHR5cGU6ICdlcnJvclJlc3BvbnNlJ1xuICByZXNwb25zZVRvOiBSZXF1ZXN0SWRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcm9hZGNhc3RNZXNzYWdlIHtcbiAgdHlwZTogJ2Jyb2FkY2FzdCdcbiAgYm9keTogYW55XG59XG5cbmV4cG9ydCB0eXBlIFNlcnZlclRvQ2xpZW50TWVzc2FnZSA9IFJlc3BvbnNlTWVzc2FnZSB8IEVycm9yUmVzcG9uc2VNZXNzYWdlIHwgQnJvYWRjYXN0TWVzc2FnZVxuXG5leHBvcnQgY2xhc3MgUGVlclNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGVlcjogUGVlclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbm5lY3Rpb25zOiBQZWVyLkRhdGFDb25uZWN0aW9uW10gPSBbXVxuICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZU1lc3NhZ2U6IChtZXNzYWdlOiBhbnkpID0+IGFueVxuXG4gIGNvbnN0cnVjdG9yKGlkOiBQZWVySWQsIGhhbmRsZU1lc3NhZ2U6IChtZXNzYWdlOiBhbnkpID0+IGFueSkge1xuICAgIHRoaXMuaGFuZGxlTWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2VcbiAgICB0aGlzLnBlZXIgPSBuZXdQZWVyKGlkKVxuICAgIHRoaXMucGVlci5vbignZXJyb3InLCAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIHRoaXMucGVlci5vbignY29ubmVjdGlvbicsIHRoaXMuaGFuZGxlTmV3Q29ubmVjdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3Q29ubmVjdGlvbiA9IChjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ1NFUlZFUjogcmVjZWl2ZWQgbmV3IGNvbm5lY3Rpb24gZnJvbSAnICsgY29ubmVjdGlvbi5wZWVyKVxuICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKVxuICAgIGNvbm5lY3Rpb24ub24oJ2RhdGEnLCB0aGlzLmhhbmRsZUNvbm5lY3Rpb25EYXRhKGNvbm5lY3Rpb24pKVxuICB9XG5cbiAgcHVibGljIGJyb2FkY2FzdCA9IChtZXNzYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBjb25zdCBicm9hZGNhc3RNZXNzYWdlOiBCcm9hZGNhc3RNZXNzYWdlID0geyB0eXBlOiAnYnJvYWRjYXN0JywgYm9keTogbWVzc2FnZSB9XG4gICAgZm9yIChjb25zdCBjb25uZWN0aW9uIG9mIHRoaXMuY29ubmVjdGlvbnMpIHtcbiAgICAgIGNvbm5lY3Rpb24uc2VuZChicm9hZGNhc3RNZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29ubmVjdGlvbkRhdGEgPSAoY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbikgPT4gKG1lc3NhZ2U6IENsaWVudFRvU2VydmVyTWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdTRVJWRVI6IHJlY2VpdmVkIG5ldyBtZXNzYWdlIGZyb20gJyArIGNvbm5lY3Rpb24ucGVlcilcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIGxldCByZXNwb25zZVxuICAgIHRyeSB7XG4gICAgICByZXNwb25zZSA9IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlLnJlcXVlc3QpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc3QgZXJyb3JSZXNwb25zZU1lc3NhZ2U6IEVycm9yUmVzcG9uc2VNZXNzYWdlID0ge1xuICAgICAgICB0eXBlOiAnZXJyb3JSZXNwb25zZScsXG4gICAgICAgIHJlc3BvbnNlVG86IG1lc3NhZ2UuaWQsXG4gICAgICB9XG4gICAgICBjb25uZWN0aW9uLnNlbmQoZXJyb3JSZXNwb25zZU1lc3NhZ2UpXG4gICAgICB0aHJvdyBlXG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlTWVzc2FnZTogUmVzcG9uc2VNZXNzYWdlID0ge1xuICAgICAgdHlwZTogJ3Jlc3BvbnNlJyxcbiAgICAgIHJlc3BvbnNlVG86IG1lc3NhZ2UuaWQsXG4gICAgICByZXNwb25zZSxcbiAgICB9XG4gICAgY29ubmVjdGlvbi5zZW5kKHJlc3BvbnNlTWVzc2FnZSlcbiAgfVxufVxuIiwiaW1wb3J0IFBlZXIgPSByZXF1aXJlKCdwZWVyanMnKVxuXG5leHBvcnQgY29uc3QgbmV3UGVlciA9IChpZD86IHN0cmluZywgb3B0aW9ucz86IFBlZXIuUGVlckpTT3B0aW9uKTogUGVlciA9PiB7XG4gIGNvbnN0IF9QZWVyID0gKHdpbmRvdyBhcyBhbnkpLlBlZXIgYXMgdHlwZW9mIFBlZXJcbiAgcmV0dXJuIG5ldyBfUGVlcihpZCwgb3B0aW9ucylcbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIsIFdvcmxkU3RhdGVPd25lciB9IGZyb20gJy4vd29ybGQtc3RhdGUtb3duZXInXG5pbXBvcnQgeyBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQsIFdvcmxkRXZlbnRJZCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IENsaWVudFJlcXVlc3QsIEpvaW5SZXNwb25zZSwgUmVqb2luUmVxdWVzdCwgUmVqb2luUmVzcG9uc2UsIFdvcmxkRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBZGRQbGF5ZXJXb3JsZEFjdGlvbiwgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudERiIH0gZnJvbSAnLi4vZGIvd29ybGQtZXZlbnQtZGInXG5pbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFBlZXJTZXJ2ZXIgfSBmcm9tICcuL3BlZXItc2VydmVyJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZU93bmVyOiBXb3JsZFN0YXRlT3duZXJcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYlxuICBwcml2YXRlIHJlYWRvbmx5IGdhbWVJZDogR2FtZUlkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyU2VydmVyOiBQZWVyU2VydmVyXG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIEhPU1RfUExBWUVSX0lEXG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmxkU3RhdGUoKTogV29ybGRTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMud29ybGRTdGF0ZU93bmVyLndvcmxkU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzdG9yZUdhbWUgPSBhc3luYyAod29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIsIGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxTZXJ2ZXI+ID0+IHtcbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCB3b3JsZEV2ZW50RGIuZ2V0RXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgY29uc3Qgc29ydGVkRXZlbnRzID0gUi5zb3J0QnkoKGV2ZW50KSA9PiBldmVudC5pZCwgZXZlbnRzKVxuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFLmFwcGx5RXZlbnRzKHNvcnRlZEV2ZW50cylcbiAgICByZXR1cm4gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgd29ybGRTdGF0ZSwgZXZlbnRzLmxlbmd0aCArIDEpXG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZEV2ZW50RGIgPSB3b3JsZEV2ZW50RGJcbiAgICB0aGlzLmdhbWVJZCA9IGdhbWVJZFxuICAgIHRoaXMucGVlclNlcnZlciA9IG5ldyBQZWVyU2VydmVyKHRoaXMuZ2FtZUlkLCB0aGlzLmhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSlcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lciA9IG5ldyBXb3JsZFN0YXRlT3duZXIod29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZClcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lci5hZGRMaXN0ZW5lcihcbiAgICAgIChldmVudDogV29ybGRFdmVudCwgcHJldmlvdXNXb3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gICAgICAgIHRoaXMud29ybGRFdmVudERiLnN0b3JlKHRoaXMuZ2FtZUlkLCBldmVudClcbiAgICAgICAgY29uc3QgbWVzc2FnZTogV29ybGRFdmVudE1lc3NhZ2UgPSB7IHR5cGU6ICd3b3JsZEV2ZW50JywgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCkgfVxuICAgICAgICB0aGlzLnBlZXJTZXJ2ZXIuYnJvYWRjYXN0KG1lc3NhZ2UpXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50Sm9pbiA9IChuYW1lOiBPcHRpb248c3RyaW5nPik6IEpvaW5SZXNwb25zZSA9PiB7XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ3VuYWJsZVRvSm9pbicgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhZGRQbGF5ZXJBY3Rpb246IEFkZFBsYXllcldvcmxkQWN0aW9uID0geyB0eXBlOiAnYWRkUGxheWVyJywgbmFtZSB9XG4gICAgICBjb25zdCBwbGF5ZXJBZGRlZEV2ZW50ID0gPFBsYXllckFkZGVkV29ybGRFdmVudD50aGlzLmhhbmRsZUFjdGlvbih0aGlzLnBsYXllcklkLCBhZGRQbGF5ZXJBY3Rpb24pWzBdXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnam9pbmVkJyxcbiAgICAgICAgcGxheWVySWQ6IHBsYXllckFkZGVkRXZlbnQucGxheWVySWQsXG4gICAgICAgIHdvcmxkU3RhdGU6IHRoaXMud29ybGRTdGF0ZS50b0pzb24oKSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudFJlam9pbiA9IChtZXNzYWdlOiBSZWpvaW5SZXF1ZXN0KTogUmVqb2luUmVzcG9uc2UgPT4ge1xuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5pc1ZhbGlkUGxheWVySWQobWVzc2FnZS5wbGF5ZXJJZCkpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6ICdyZWpvaW5lZCcsIHdvcmxkU3RhdGU6IHdvcmxkU3RhdGUudG9Kc29uKCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyB0eXBlOiAndW5hYmxlVG9SZWpvaW4nIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSA9IChtZXNzYWdlOiBDbGllbnRSZXF1ZXN0KTogYW55ID0+IHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdqb2luJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2xpZW50Sm9pbihtZXNzYWdlLm5hbWUpXG4gICAgICBjYXNlICdyZWpvaW4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDbGllbnRSZWpvaW4obWVzc2FnZSlcbiAgICAgIGNhc2UgJ3dvcmxkQWN0aW9uJzpcbiAgICAgICAgdGhpcy53b3JsZFN0YXRlT3duZXIuaGFuZGxlQWN0aW9uKG1lc3NhZ2UucGxheWVySWQsIGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5hY3Rpb24pKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUFjdGlvbiA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT5cbiAgICB0aGlzLndvcmxkU3RhdGVPd25lci5oYW5kbGVBY3Rpb24ocGxheWVySWQsIGFjdGlvbilcblxuICBwdWJsaWMgc2VuZEFjdGlvbiA9IGFzeW5jIChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0aGlzLmhhbmRsZUFjdGlvbihwbGF5ZXJJZCwgYWN0aW9uKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQWRkUGxheWVyV29ybGRBY3Rpb24sXG4gIEF0dGFja1dvcmxkQWN0aW9uLFxuICBDaGFuZ2VQbGF5ZXJOYW1lV29ybGRBY3Rpb24sXG4gIENoYXRXb3JsZEFjdGlvbixcbiAgRW5kVHVybldvcmxkQWN0aW9uLFxuICBJbml0aWFsaXNlV29ybGRBY3Rpb24sXG4gIEtpY2tQbGF5ZXJXb3JsZEFjdGlvbixcbiAgTW92ZVVuaXRXb3JsZEFjdGlvbixcbiAgV29ybGRBY3Rpb24sXG59IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQge1xuICBDaGF0V29ybGRFdmVudCxcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgTmV3VHVybldvcmxkRXZlbnQsXG4gIFBsYXllckFkZGVkV29ybGRFdmVudCxcbiAgUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBQbGF5ZXJLaWNrZWRXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkR2VuZXJhdG9yIH0gZnJvbSAnLi93b3JsZC1nZW5lcmF0b3InXG5pbXBvcnQgeyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNsYXNzIFdvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVXb3JsZEV2ZW50cyA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLmNhbGN1bGF0ZVNwZWNpZmljV29ybGRFdmVudHMoYWN0aW9uKVxuICAgIHJldHVybiB0aGlzLmJlZ2luTmV3VHVybklmTmVlZGVkKGV2ZW50cylcbiAgfVxuXG4gIHByaXZhdGUgYmVnaW5OZXdUdXJuSWZOZWVkZWQoZXZlbnRzOiBXb3JsZEV2ZW50W10pIHtcbiAgICBjb25zdCBsYXN0RXZlbnQgPSBSLmxhc3QoZXZlbnRzKVxuICAgIGlmIChsYXN0RXZlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1dvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudHMoZXZlbnRzKVxuICAgICAgaWYgKG5ld1dvcmxkU3RhdGUudHVybiA9PT0gMCB8fCBuZXdXb3JsZFN0YXRlLmNhbkFueVBsYXllckFjdCgpIHx8IG5ld1dvcmxkU3RhdGUudW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBldmVudHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRXb3JsZEV2ZW50SWQgPSBsYXN0RXZlbnQuaWQgKyAxXG4gICAgICAgIGNvbnN0IG5ld1R1cm5FdmVudDogTmV3VHVybldvcmxkRXZlbnQgPSB7IGlkOiBuZXh0V29ybGRFdmVudElkLCB0eXBlOiAnbmV3VHVybicgfVxuICAgICAgICByZXR1cm4gUi5hcHBlbmQobmV3VHVybkV2ZW50LCBldmVudHMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTcGVjaWZpY1dvcmxkRXZlbnRzID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVJbml0aWFsaXNlKGFjdGlvbilcbiAgICAgIGNhc2UgJ2FkZFBsYXllcic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFkZFBsYXllcihhY3Rpb24pXG4gICAgICBjYXNlICdjaGFuZ2VQbGF5ZXJOYW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2hhbmdlUGxheWVyTmFtZShhY3Rpb24pXG4gICAgICBjYXNlICdzdGFydEdhbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTdGFydEdhbWUoKVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXR0YWNrKGFjdGlvbilcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZVVuaXQoYWN0aW9uKVxuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVuZFR1cm4oYWN0aW9uKVxuICAgICAgY2FzZSAnY2hhdCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNoYXQoYWN0aW9uKVxuICAgICAgY2FzZSAna2lja1BsYXllcic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUtpY2tQbGF5ZXIoYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5pdGlhbGlzZSA9IChhY3Rpb246IEluaXRpYWxpc2VXb3JsZEFjdGlvbik6IFtJbml0aWFsaXNlV29ybGRFdmVudF0gPT4ge1xuICAgIGlmICh0aGlzLm5leHRXb3JsZEV2ZW50SWQgPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbiBvbmx5IGluaXRpYWxpc2UgYXMgdGhlIGZpcnN0IGV2ZW50YClcbiAgICB9XG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBZGRQbGF5ZXIgPSAoYWN0aW9uOiBBZGRQbGF5ZXJXb3JsZEFjdGlvbik6IFtQbGF5ZXJBZGRlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1BsYXllcklkcyA9IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IHBsYXllcklkID0gUi5hcHBseShNYXRoLm1heCwgZXhpc3RpbmdQbGF5ZXJJZHMpICsgMVxuICAgIGNvbnN0IG5hbWUgPSBhY3Rpb24ubmFtZSA/PyBgUGxheWVyICR7cGxheWVySWR9YFxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAncGxheWVyQWRkZWQnLCBwbGF5ZXJJZCwgbmFtZSB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lID0gKGFjdGlvbjogQ2hhbmdlUGxheWVyTmFtZVdvcmxkQWN0aW9uKTogW1BsYXllckNoYW5nZWROYW1lV29ybGRFdmVudF0gPT4ge1xuICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckNoYW5nZWROYW1lJywgcGxheWVySWQ6IHRoaXMucGxheWVySWQsIG5hbWU6IGFjdGlvbi5uYW1lIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpOiBbR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qgc3RhcnQgYW4gYWxyZWFkeS1zdGFydGVkIGdhbWVgKVxuICAgIH1cbiAgICBpZiAodGhpcy5wbGF5ZXJJZCAhPT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHN0YXJ0IHRoZSBnYW1lIHVubGVzcyB0aGUgaG9zdGApXG4gICAgfVxuICAgIGNvbnN0IHdvcmxkR2VuZXJhdG9yID0gbmV3IFdvcmxkR2VuZXJhdG9yKHRoaXMud29ybGRTdGF0ZSlcbiAgICBjb25zdCB1bml0cyA9IHdvcmxkR2VuZXJhdG9yLmdlbmVyYXRlVW5pdHMoKVxuICAgIGNvbnN0IG1vdW50YWlucyA9IHdvcmxkR2VuZXJhdG9yLmdlbmVyYXRlTW91bnRhaW5zKClcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ2dhbWVTdGFydGVkJywgdW5pdHMsIG1vdW50YWlucyB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PlxuICAgIG5ldyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIodGhpcy53b3JsZFN0YXRlLCB0aGlzLnBsYXllcklkLCB0aGlzLm5leHRXb3JsZEV2ZW50SWQpLmhhbmRsZUF0dGFjayhhY3Rpb24pXG5cbiAgcHJpdmF0ZSBoYW5kbGVNb3ZlVW5pdCA9IChhY3Rpb246IE1vdmVVbml0V29ybGRBY3Rpb24pOiBbVW5pdE1vdmVkV29ybGRFdmVudF0gPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCB0byB9ID0gYWN0aW9uXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YClcbiAgICB9XG4gICAgY29uc3QgZnJvbSA9IHVuaXQubG9jYXRpb25cbiAgICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHtmcm9tfSB0byAke3RvfWApXG4gICAgfVxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gKVxuICAgIH1cbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YClcbiAgICB9XG4gICAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBlbm91Z2ggYWN0aW9uIHBvaW50cyB0byBtb3ZlYClcbiAgICB9XG4gICAgaWYgKHVuaXQucGxheWVySWQgIT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IG1vdmUgYW5vdGhlciBwbGF5ZXIncyB1bml0YClcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICAgICAgdHlwZTogJ3VuaXRNb3ZlZCcsXG4gICAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgICAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgICAgICAgdW5pdElkLFxuICAgICAgICBmcm9tLFxuICAgICAgICB0byxcbiAgICAgIH0sXG4gICAgXVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbmRUdXJuID0gKGFjdGlvbjogRW5kVHVybldvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBpZiAoYWN0aW9uLnR1cm4gIT09IHRoaXMud29ybGRTdGF0ZS50dXJuKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBlbmQgYSB0dXJuIHRoYXQncyBub3QgdGhlIGN1cnJlbnQgdHVybmApXG4gICAgfVxuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKClcbiAgICBpZiAocGxheWVyLmVuZGVkVHVybikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQbGF5ZXIgaGFzIGFscmVhZHkgZW5kZWQgdGhlaXIgdHVybmApXG4gICAgfVxuICAgIGNvbnN0IHBsYXllckVuZGVkVHVybkFjdGlvbjogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCA9IHtcbiAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICB0eXBlOiAncGxheWVyRW5kZWRUdXJuJyxcbiAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIH1cbiAgICByZXR1cm4gW3BsYXllckVuZGVkVHVybkFjdGlvbl1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbGF5ZXIgd2l0aCBJRCAke3RoaXMucGxheWVySWR9YClcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllclxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDaGF0ID0gKGFjdGlvbjogQ2hhdFdvcmxkQWN0aW9uKTogW0NoYXRXb3JsZEV2ZW50XSA9PiBbXG4gICAgeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAnY2hhdCcsIHBsYXllcklkOiB0aGlzLnBsYXllcklkLCBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSB9LFxuICBdXG5cbiAgcHJpdmF0ZSBoYW5kbGVLaWNrUGxheWVyID0gKGFjdGlvbjogS2lja1BsYXllcldvcmxkQWN0aW9uKTogW1BsYXllcktpY2tlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBjb25zdCBwbGF5ZXJJZCA9IGFjdGlvbi5wbGF5ZXJJZFxuICAgIGNvbnN0IHBsYXllciA9IHRoaXMud29ybGRTdGF0ZS5maW5kUGxheWVyKHBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsYXllciB3aXRoIElEICR7cGxheWVySWR9YClcbiAgICB9XG4gICAgaWYgKHBsYXllcklkID09PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qga2ljayBob3N0YClcbiAgICB9XG4gICAgaWYgKHRoaXMucGxheWVySWQgIT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9ubHkgdGhlIGhvc3QgY2FuIGtpY2sgcGxheWVyc2ApXG4gICAgfVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAncGxheWVyS2lja2VkJywgcGxheWVySWQgfV1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmNvbnN0IExMQU1BX05BTUVTID0gW1xuICAnV2FsdGVyJyxcbiAgJ0RvbGx5JyxcbiAgJ0NoZXdwYWNhJyxcbiAgJ0JhcmFjayBPLiBMbGFtYScsXG4gICdDb21vIFNlJyxcbiAgJ0Z1enp5JyxcbiAgJ0plcmVteScsXG4gICdBbGZvbnNvJyxcbiAgJ1Jvc2UnLFxuICAnTG9yZW56bycsXG4gICdSaXRhJyxcbiAgJ0FudG9uJyxcbiAgJ0Jlcm5hcmQnLFxuICAnQ2Fzc2llJyxcbiAgJ0ZyYW5jZXNjYScsXG4gICdNaWxseScsXG4gICdDYXJsb3MnLFxuICAnUmljYXJkbycsXG5dXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlbWFpbmluZ0hleGVzOiBIZXhbXVxuICBwcml2YXRlIG5leHRVbml0SWQ6IFVuaXRJZCA9IDFcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucmVtYWluaW5nSGV4ZXMgPSBBcnJheS5mcm9tKHdvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVW5pdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0ID0+IHtcbiAgICBjb25zdCBpZCA9IHRoaXMubmV4dFVuaXRJZCsrXG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIGNvbnN0IG5hbWUgPSByYW5kb21FbGVtZW50KExMQU1BX05BTUVTKVxuICAgIHJldHVybiBuZXcgVW5pdCh7XG4gICAgICBpZCxcbiAgICAgIHBsYXllcklkLFxuICAgICAgbmFtZSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZU1vdW50YWluID0gKCk6IEhleCA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIHJldHVybiBsb2NhdGlvblxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlTW91bnRhaW5zID0gKCk6IEhleFtdID0+IFIucmFuZ2UoMSwgMTApLm1hcCh0aGlzLmdlbmVyYXRlTW91bnRhaW4pXG5cbiAgcHVibGljIGdlbmVyYXRlVW5pdHMgPSAoKTogVW5pdFtdID0+XG4gICAgUi5jaGFpbigocGxheWVyKSA9PiBbdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKSwgdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKV0sIHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzKVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi93b3JsZC1hY3Rpb24taGFuZGxlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBXb3JsZEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZU93bmVyIHtcbiAgcHVibGljIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWRcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUFjdGlvbiA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHdvcmxkQWN0aW9uSGFuZGxlciA9IG5ldyBXb3JsZEFjdGlvbkhhbmRsZXIodGhpcy53b3JsZFN0YXRlLCBwbGF5ZXJJZCwgdGhpcy5uZXh0V29ybGRFdmVudElkKVxuICAgIGNvbnN0IGV2ZW50cyA9IHdvcmxkQWN0aW9uSGFuZGxlci5jYWxjdWxhdGVXb3JsZEV2ZW50cyhhY3Rpb24pXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgICAgY29uc3QgbmV3V29ybGRTdGF0ZSA9IHByZXZpb3VzV29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgICAgdGhpcy53b3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZVxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZSlcbiAgICB9XG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkICs9IGV2ZW50cy5sZW5ndGhcbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cbn1cbiIsImltcG9ydCB7IEF1ZGlvS2V5cywgSW1hZ2VLZXlzIH0gZnJvbSAnLi4vc2NlbmVzL2Fzc2V0LWtleXMnXG5cbmV4cG9ydCBjbGFzcyBQcmltYXJ5QnV0dG9uIHtcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuQnV0dG9uOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvblByZXNzZWQ6ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLmVuZFR1cm5CdXR0b24gPSBzY2VuZS5hZGRcbiAgICAgIC5pbWFnZSh4LCB5LCAnYmxhbmstYnV0dG9uJylcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5lbmRUdXJuQnV0dG9uLnNldFRleHR1cmUoSW1hZ2VLZXlzLkJMQU5LX0JVVFRPTl9QUkVTU0VEKSlcbiAgICAgIC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmVuZFR1cm5CdXR0b24uc2V0VGV4dHVyZShJbWFnZUtleXMuQkxBTktfQlVUVE9OKVxuICAgICAgICBzY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgICAgb25QcmVzc2VkKClcbiAgICAgIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmVuZFR1cm5CdXR0b24uc2V0VGV4dHVyZShJbWFnZUtleXMuQkxBTktfQlVUVE9OKSlcbiAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gc2NlbmUuYWRkXG4gICAgICAudGV4dCh4ICsgdGhpcy5lbmRUdXJuQnV0dG9uLndpZHRoIC8gMiwgeSArIHRoaXMuZW5kVHVybkJ1dHRvbi5oZWlnaHQgLyAyLCB0ZXh0LCB7XG4gICAgICAgIGZpbGw6ICcjZmZmZmZmJyxcbiAgICAgIH0pXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcbiAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgIC5zZXRTaGFkb3coMiwgMiwgJyMwMDAwMDAnKVxuICB9XG5cbiAgcHVibGljIHNldFZpc2libGUgPSAodmlzaWJsZTogYm9vbGVhbik6IHRoaXMgPT4ge1xuICAgIHRoaXMuZW5kVHVybkJ1dHRvbi5zZXRWaXNpYmxlKHZpc2libGUpXG4gICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRWaXNpYmxlKHZpc2libGUpXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHB1YmxpYyBzZXRZID0gKHk6IG51bWJlcik6IHRoaXMgPT4ge1xuICAgIHRoaXMuZW5kVHVybkJ1dHRvbi5zZXRZKHkpXG4gICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRZKHkgKyB0aGlzLmVuZFR1cm5CdXR0b24uaGVpZ2h0IC8gMilcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBCbHVlYmlyZCBmcm9tICdibHVlYmlyZCdcblxuZXhwb3J0IGNvbnN0IGZpcmVBbmRGb3JnZXQgPSA8VD4oYXN5bmNUYXNrOiAoKSA9PiBQcm9taXNlPFQ+KTogdm9pZCA9PiB7XG4gIGFzeW5jVGFzaygpXG59XG5cbmV4cG9ydCBjb25zdCB3aXRoVGltZW91dCA9ICh0aW1lb3V0OiBudW1iZXIpID0+IDxUPihwcm9taXNlOiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiA9PlxuICBCbHVlYmlyZC5Qcm9taXNlLnJlc29sdmUocHJvbWlzZSkudGltZW91dCh0aW1lb3V0KVxuXG5leHBvcnQgdHlwZSBSZXNvbHZlPFQ+ID0gKHZhbHVlPzogVCB8IFByb21pc2VMaWtlPFQ+KSA9PiB2b2lkXG5leHBvcnQgdHlwZSBSZWplY3QgPSAocmVhc29uPzogYW55KSA9PiB2b2lkXG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLW1hcCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvaGl0LXBvaW50cydcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpc2VUb0pzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoc2VyaWFsaXNlVG9Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhleCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIZXgnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZE1hcCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdXb3JsZE1hcCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdvcmxkU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRTdGF0ZScgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFVuaXQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnVW5pdCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhpdFBvaW50cykge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIaXRQb2ludHMnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBBY3Rpb25Qb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnQWN0aW9uUG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1BsYXllcicgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0OiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBzZXJpYWxpc2VUb0pzb24odmFsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3RcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpc2VGcm9tSnNvbiA9ICh2YWx1ZTogYW55KTogYW55ID0+IHtcbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChkZXNlcmlhbGlzZUZyb21Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ0hleCcpIHtcbiAgICAgICAgcmV0dXJuIEhleC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdXb3JsZE1hcCcpIHtcbiAgICAgICAgcmV0dXJuIFdvcmxkTWFwLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1dvcmxkU3RhdGUnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZFN0YXRlLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1VuaXQnKSB7XG4gICAgICAgIHJldHVybiBVbml0LmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ0FjdGlvblBvaW50cycpIHtcbiAgICAgICAgcmV0dXJuIEFjdGlvblBvaW50cy5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdIaXRQb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBIaXRQb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnUGxheWVyJykge1xuICAgICAgICByZXR1cm4gUGxheWVyLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0OiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBkZXNlcmlhbGlzZUZyb21Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBUd2VlbiA9IFBoYXNlci5Ud2VlbnMuVHdlZW5cblxuZXhwb3J0IGNvbnN0IHBsYXlUd2VlbiA9ICh0d2VlbjogVHdlZW4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB0d2Vlbi5zZXRDYWxsYmFjaygnb25Db21wbGV0ZScsIHJlc29sdmUsIFtdKS5wbGF5KCkpXG4iLCJleHBvcnQgY29uc3QgcmFuZG9tSW50SW5jbHVzaXZlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PlxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnRFeGNsdXNpdmUgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pblxuXG5leHBvcnQgY29uc3QgcmFuZG9tRWxlbWVudCA9IDxUPihhcnJheTogVFtdKTogVCA9PiBhcnJheVtyYW5kb21JbnRFeGNsdXNpdmUoMCwgYXJyYXkubGVuZ3RoKV1cbiIsImV4cG9ydCB0eXBlIE9wdGlvbjxUPiA9IFQgfCB1bmRlZmluZWRcblxuZXhwb3J0IGludGVyZmFjZSBKdXN0PFQ+IHtcbiAgdHlwZTogJ2p1c3QnXG4gIGl0ZW06IFRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RoaW5nIHtcbiAgdHlwZTogJ25vdGhpbmcnXG59XG5cbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gSnVzdDxUPiB8IE5vdGhpbmdcblxuZXhwb3J0IGNvbnN0IHRvTWF5YmUgPSA8VD4ob3B0aW9uOiBPcHRpb248VD4pOiBNYXliZTxUPiA9PiAob3B0aW9uID09PSB1bmRlZmluZWQgPyBub3RoaW5nIDoganVzdChvcHRpb24pKVxuXG5leHBvcnQgY29uc3QgdG9PcHRpb24gPSA8VD4obWF5YmU6IE1heWJlPFQ+KTogT3B0aW9uPFQ+ID0+IHtcbiAgc3dpdGNoIChtYXliZS50eXBlKSB7XG4gICAgY2FzZSAnanVzdCc6XG4gICAgICByZXR1cm4gbWF5YmUuaXRlbVxuICAgIGNhc2UgJ25vdGhpbmcnOlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBub3RoaW5nOiBOb3RoaW5nID0geyB0eXBlOiAnbm90aGluZycgfVxuZXhwb3J0IGNvbnN0IGp1c3QgPSA8VD4oaXRlbTogVCk6IEp1c3Q8VD4gPT4gKHtcbiAgdHlwZTogJ2p1c3QnLFxuICBpdGVtLFxufSlcbiIsImV4cG9ydCBjbGFzcyBVbnJlYWNoYWJsZUNhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IG5ldmVyKSB7XG4gICAgc3VwZXIoYFVucmVhY2hhYmxlIGNhc2U6ICR7dmFsdWV9YClcbiAgfVxufVxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25Qb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIHJlZHVjZSA9IChwb2ludHM6IG51bWJlcik6IEFjdGlvblBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEFjdGlvblBvaW50cyA9PlxuICAgIG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgcmVmcmVzaCA9ICgpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IHRoaXMubWF4LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxufVxuIiwiaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIZXgsIEhleFZlY3RvciB9IGZyb20gJy4vaGV4J1xuXG5leHBvcnQgZW51bSBIZXhEaXJlY3Rpb24ge1xuICBFQVNUID0gJ0VBU1QnLFxuICBXRVNUID0gJ1dFU1QnLFxuICBOT1JUSF9FQVNUID0gJ05PUlRIX0VBU1QnLFxuICBTT1VUSF9FQVNUID0gJ1NPVVRIX0VBU1QnLFxuICBOT1JUSF9XRVNUID0gJ05PUlRIX1dFU1QnLFxuICBTT1VUSF9XRVNUID0gJ1NPVVRIX1dFU1QnLFxufVxuXG5leHBvcnQgY29uc3QgSEVYX0RJUkVDVElPTlMgPSBbXG4gIEhleERpcmVjdGlvbi5FQVNULFxuICBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5XRVNULFxuICBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QsXG5dXG5cbmV4cG9ydCBjb25zdCBnZXRVbml0VmVjdG9yID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogSGV4VmVjdG9yID0+IHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIEhleERpcmVjdGlvbi5FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMSwgMClcbiAgICBjYXNlIEhleERpcmVjdGlvbi5XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoLTEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIC0xKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgwLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5TT1VUSF9FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5TT1VUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoLTEsIDEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihkaXJlY3Rpb24pXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBnZXRVbml0VmVjdG9yLCBIZXhEaXJlY3Rpb24gfSBmcm9tICcuL2hleC1kaXJlY3Rpb24nXG5cbmV4cG9ydCBjbGFzcyBIZXgge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgZ2V0IHooKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLXRoaXMueCAtIHRoaXMueVxuICB9XG5cbiAgcHVibGljIHBsdXMgPSAodGhhdDogSGV4KTogSGV4ID0+IG5ldyBIZXgodGhpcy54ICsgdGhhdC54LCB0aGlzLnkgKyB0aGF0LnkpXG5cbiAgcHVibGljIG5laWdoYm91cnMgPSAoKTogSGV4W10gPT4gSGV4Lk5FSUdIQk9VUlMubWFwKHRoaXMucGx1cylcblxuICBwdWJsaWMgaXNBZGphY2VudFRvID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gUi5pbmNsdWRlcyh0aGF0LCB0aGlzLm5laWdoYm91cnMoKSlcblxuICBwdWJsaWMgZGlzdGFuY2VUbyA9ICh0aGF0OiBIZXgpOiBudW1iZXIgPT5cbiAgICAoTWF0aC5hYnModGhpcy54IC0gdGhhdC54KSArIE1hdGguYWJzKHRoaXMueSAtIHRoYXQueSkgKyBNYXRoLmFicyh0aGlzLnogLSB0aGF0LnopKSAvIDJcblxuICBwcml2YXRlIHN0YXRpYyBORUlHSEJPVVJTOiBIZXhbXSA9IFtcbiAgICBuZXcgSGV4KDAsIDEpLFxuICAgIG5ldyBIZXgoMSwgMCksXG4gICAgbmV3IEhleCgxLCAtMSksXG4gICAgbmV3IEhleCgwLCAtMSksXG4gICAgbmV3IEhleCgtMSwgMCksXG4gICAgbmV3IEhleCgtMSwgMSksXG4gIF1cblxuICBwdWJsaWMgZXF1YWxzID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gdGhpcy54ID09PSB0aGF0LnggJiYgdGhpcy55ID09PSB0aGF0LnlcblxuICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IGBIZXgoJHt0aGlzLnh9LCAke3RoaXMueX0pYFxuXG4gIHB1YmxpYyBnbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleCA9PiB0aGlzLnBsdXMoZ2V0VW5pdFZlY3RvcihkaXJlY3Rpb24pKVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBIZXggPT4gbmV3IEhleChqc29uLngsIGpzb24ueSlcbn1cblxuZXhwb3J0IHR5cGUgSGV4VmVjdG9yID0gSGV4XG4iLCJpbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIEhpdFBvaW50cyB7XG4gIHJlYWRvbmx5IGN1cnJlbnQ6IG51bWJlclxuICByZWFkb25seSBtYXg6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgY3VycmVudCwgbWF4IH06IHsgY3VycmVudDogbnVtYmVyOyBtYXg6IG51bWJlciB9KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMubWF4ID0gbWF4XG4gICAgYXNzZXJ0KG1heCA+IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPj0gMClcbiAgICBhc3NlcnQoY3VycmVudCA8PSBtYXgpXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogSGl0UG9pbnRzID0+IHRoaXMuY29weSh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCAtIHBvaW50cyB9KVxuXG4gIHB1YmxpYyBjb3B5ID0gKHsgY3VycmVudCA9IHRoaXMuY3VycmVudCwgbWF4ID0gdGhpcy5tYXggfTogeyBjdXJyZW50PzogbnVtYmVyOyBtYXg/OiBudW1iZXIgfSA9IHt9KTogSGl0UG9pbnRzID0+XG4gICAgbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQsIG1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGl0UG9pbnRzID0+IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi93b3JsZC1tYXAnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcidcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfV09STERfU1RBVEU6IFdvcmxkU3RhdGUgPSBuZXcgV29ybGRTdGF0ZSh7XG4gIHR1cm46IDAsXG4gIG1hcDogbmV3IFdvcmxkTWFwKHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDYgfSksXG4gIHBsYXllcnM6IFtcbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiBIT1NUX1BMQVlFUl9JRCxcbiAgICAgIG5hbWU6ICdQbGF5ZXIgMScsXG4gICAgICBlbmRlZFR1cm46IGZhbHNlLFxuICAgIH0pLFxuICBdLFxuICB1bml0czogW10sXG59KVxuIiwiZXhwb3J0IGNvbnN0IEhPU1RfUExBWUVSX0lEID0gMVxuXG5leHBvcnQgdHlwZSBQbGF5ZXJJZCA9IG51bWJlclxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgcmVhZG9ubHkgaWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICByZWFkb25seSBlbmRlZFR1cm46IGJvb2xlYW5cbiAgcmVhZG9ubHkgZGVmZWF0ZWQ6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBlbmRlZFR1cm4gPSBmYWxzZSxcbiAgICBkZWZlYXRlZCA9IGZhbHNlLFxuICB9OiB7XG4gICAgaWQ6IFBsYXllcklkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgZW5kZWRUdXJuPzogYm9vbGVhblxuICAgIGRlZmVhdGVkPzogYm9vbGVhblxuICB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuZW5kZWRUdXJuID0gZW5kZWRUdXJuXG4gICAgdGhpcy5kZWZlYXRlZCA9IGRlZmVhdGVkXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgaWQgPSB0aGlzLmlkLFxuICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgZW5kZWRUdXJuID0gdGhpcy5lbmRlZFR1cm4sXG4gICAgZGVmZWF0ZWQgPSB0aGlzLmRlZmVhdGVkLFxuICB9OiB7IGlkPzogUGxheWVySWQ7IG5hbWU/OiBzdHJpbmc7IGVuZGVkVHVybj86IGJvb2xlYW47IGRlZmVhdGVkPzogYm9vbGVhbiB9ID0ge30pOiBQbGF5ZXIgPT5cbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGVuZGVkVHVybixcbiAgICAgIGRlZmVhdGVkLFxuICAgIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgaWQ6IHRoaXMuaWQsIG5hbWU6IHRoaXMubmFtZSwgZW5kZWRUdXJuOiB0aGlzLmVuZGVkVHVybiwgZGVmZWF0ZWQ6IHRoaXMuZGVmZWF0ZWQgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFBsYXllciA9PlxuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICBuYW1lOiBqc29uLm5hbWUsXG4gICAgICBlbmRlZFR1cm46IGpzb24uZW5kZWRUdXJuLFxuICAgICAgZGVmZWF0ZWQ6IGpzb24uZGVmZWF0ZWQsXG4gICAgfSlcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi9oaXQtcG9pbnRzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcblxuZXhwb3J0IHR5cGUgVW5pdElkID0gbnVtYmVyXG5cbmV4cG9ydCBjbGFzcyBVbml0IHtcbiAgcmVhZG9ubHkgaWQ6IFVuaXRJZFxuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGxvY2F0aW9uOiBIZXhcbiAgcmVhZG9ubHkgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgcmVhZG9ubHkgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgaWQsXG4gICAgcGxheWVySWQsXG4gICAgbmFtZSxcbiAgICBsb2NhdGlvbixcbiAgICBoaXRQb2ludHMsXG4gICAgYWN0aW9uUG9pbnRzLFxuICB9OiB7XG4gICAgaWQ6IFVuaXRJZFxuICAgIHBsYXllcklkOiBQbGF5ZXJJZFxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBoaXRQb2ludHM6IEhpdFBvaW50c1xuICAgIGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzXG4gIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gICAgdGhpcy5oaXRQb2ludHMgPSBoaXRQb2ludHNcbiAgICB0aGlzLmFjdGlvblBvaW50cyA9IGFjdGlvblBvaW50c1xuICB9XG5cbiAgcHVibGljIGRhbWFnZSA9IChwb2ludHM6IG51bWJlcik6IFVuaXQgPT4gdGhpcy5jb3B5KHsgaGl0UG9pbnRzOiB0aGlzLmhpdFBvaW50cy5kYW1hZ2UocG9pbnRzKSB9KVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBpZCA9IHRoaXMuaWQsXG4gICAgcGxheWVySWQgPSB0aGlzLnBsYXllcklkLFxuICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uLFxuICAgIGhpdFBvaW50cyA9IHRoaXMuaGl0UG9pbnRzLFxuICAgIGFjdGlvblBvaW50cyA9IHRoaXMuYWN0aW9uUG9pbnRzLFxuICB9OiB7XG4gICAgaWQ/OiBVbml0SWRcbiAgICBwbGF5ZXJJZD86IFBsYXllcklkXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGxvY2F0aW9uPzogSGV4XG4gICAgaGl0UG9pbnRzPzogSGl0UG9pbnRzXG4gICAgYWN0aW9uUG9pbnRzPzogQWN0aW9uUG9pbnRzXG4gIH0gPSB7fSk6IFVuaXQgPT4gbmV3IFVuaXQoeyBpZCwgcGxheWVySWQsIG5hbWUsIGxvY2F0aW9uLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9KVxuXG4gIHB1YmxpYyBtb3ZlID0gKGxvY2F0aW9uOiBIZXgsIGFjdGlvblBvaW50c0NvbnN1bWVkOiBudW1iZXIpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgbG9jYXRpb24sIGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWR1Y2VBY3Rpb25Qb2ludHMgPSAoYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZHVjZShhY3Rpb25Qb2ludHNDb25zdW1lZCkgfSlcblxuICBwdWJsaWMgcmVmcmVzaEFjdGlvblBvaW50cyA9ICgpOiBVbml0ID0+IHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVmcmVzaCgpIH0pXG5cbiAgcHVibGljIGdldCBoYXNVbnNwZW50QWN0aW9uUG9pbnRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvblBvaW50cy5jdXJyZW50ID4gMFxuICB9XG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHtcbiAgICBpZDogdGhpcy5pZCxcbiAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24udG9Kc29uKCksXG4gICAgaGl0UG9pbnRzOiB0aGlzLmhpdFBvaW50cy50b0pzb24oKSxcbiAgICBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnRvSnNvbigpLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogVW5pdCA9PlxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiBqc29uLmlkLFxuICAgICAgcGxheWVySWQ6IGpzb24ucGxheWVySWQsXG4gICAgICBuYW1lOiBqc29uLm5hbWUsXG4gICAgICBsb2NhdGlvbjogSGV4LmZyb21Kc29uKGpzb24ubG9jYXRpb24pLFxuICAgICAgaGl0UG9pbnRzOiBIaXRQb2ludHMuZnJvbUpzb24oanNvbi5oaXRQb2ludHMpLFxuICAgICAgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHMuZnJvbUpzb24oanNvbi5hY3Rpb25Qb2ludHMpLFxuICAgIH0pXG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBDaGF0V29ybGRFdmVudCxcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBHYW1lU3RhcnRlZFdvcmxkRXZlbnQsXG4gIEluaXRpYWxpc2VXb3JsZEV2ZW50LFxuICBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCxcbiAgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBQbGF5ZXJLaWNrZWRXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCB7IGNhbkF0dGFja09jY3VyIH0gZnJvbSAnLi4vc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNvbnN0IGFwcGx5RXZlbnQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgcmV0dXJuIGhhbmRsZUluaXRpYWxpc2UoZXZlbnQpXG4gICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckFkZGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJDaGFuZ2VkTmFtZSc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQ2hhbmdlZE5hbWUoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lU3RhcnRlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckVuZGVkVHVybihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckRlZmVhdGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICduZXdUdXJuJzpcbiAgICAgIHJldHVybiBoYW5kbGVOZXdUdXJuKHN0YXRlKVxuICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lT3ZlcihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnY2hhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ2hhdChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAncGxheWVyS2lja2VkJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJLaWNrZWQoc3RhdGUsIGV2ZW50KVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlSW5pdGlhbGlzZSA9IChldmVudDogSW5pdGlhbGlzZVdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKGV2ZW50LmlkID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW5pdGlhbGlzZSBtdXN0IGJlIHRoZSBmaXJzdCBldmVudGApXG4gIH1cbiAgcmV0dXJuIGV2ZW50LnN0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckFkZGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyQWRkZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IGV2ZW50LnBsYXllcklkLCBzdGF0ZS5wbGF5ZXJzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUGxheWVyIElEIGFscmVhZHkgaW4gdXNlYClcbiAgfVxuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHsgaWQ6IHBsYXllcklkLCBuYW1lOiBldmVudC5uYW1lIH0pXG4gIHJldHVybiBzdGF0ZS5hZGRQbGF5ZXIocGxheWVyKVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJDaGFuZ2VkTmFtZSA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkLCBuYW1lIH0gPSBldmVudFxuICBnZXRQbGF5ZXIoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGUuc2V0UGxheWVyTmFtZShwbGF5ZXJJZCwgbmFtZSlcbn1cblxuY29uc3QgZ2V0UGxheWVyID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQpOiBQbGF5ZXIgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBzdGF0ZS5maW5kUGxheWVyKHBsYXllcklkKVxuICBpZiAoIXBsYXllcikgdGhyb3cgbmV3IEVycm9yKGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWApXG4gIHJldHVybiBwbGF5ZXJcbn1cblxuY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBHYW1lU3RhcnRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKHN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBHYW1lIGFscmVhZHkgc3RhcnRlZGApXG4gIH1cbiAgcmV0dXJuIHN0YXRlXG4gICAgLmNvcHkoeyB0dXJuOiAxLCB1bml0czogZXZlbnQudW5pdHMgfSlcbiAgICAudXBkYXRlV29ybGRNYXAoKG1hcCkgPT4gbWFwLmNvcHkoeyBtb3VudGFpbnM6IGV2ZW50Lm1vdW50YWlucyB9KSlcbiAgICAuYWRkV29ybGRMb2coJ0xldCBiYXR0bGUgY29tbWVuY2UhJylcbn1cblxuY29uc3QgaGFuZGxlVW5pdE1vdmVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHVuaXRJZCwgcGxheWVySWQsIGZyb20sIHRvIH0gPSBldmVudFxuICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gKVxuICB9XG4gIGlmICghc3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gKVxuICB9XG4gIGNvbnN0IHVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICBpZiAoIXVuaXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gKVxuICB9XG4gIGlmICghdW5pdC5sb2NhdGlvbi5lcXVhbHMoZnJvbSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVW5pdCBpcyBub3QgaW4gdGhlIGV4cGVjdGVkIGxvY2F0aW9uIGZvciBtb3ZlbWVudC4gVW5pdCBpcyBhdCAke3VuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7ZnJvbX1gLFxuICAgIClcbiAgfVxuICBjb25zdCB0b1VuaXQgPSBzdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odG8pXG4gIGlmICh0b1VuaXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGApXG4gIH1cbiAgaWYgKHVuaXQucGxheWVySWQgIT09IHBsYXllcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGF0dGVtcHQgdG8gbW92ZSB1bml0IG9mIGFub3RoZXIgcGxheWVyYClcbiAgfVxuICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFjdGlvbiBwb2ludCB1c2FnZWApXG4gIH1cbiAgcmV0dXJuIHN0YXRlLnJlcGxhY2VVbml0KHVuaXQuaWQsIHVuaXQubW92ZSh0bywgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpKVxufVxuXG5jb25zdCBoYW5kbGVDb21iYXQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuXG4gIGNvbnN0IGF0dGFja2VyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChhdHRhY2tlci51bml0SWQpXG4gIGlmICghYXR0YWNrZXJVbml0KSB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VyLnVuaXRJZH1gKVxuICBpZiAoIWF0dGFja2VyVW5pdC5sb2NhdGlvbi5lcXVhbHMoYXR0YWNrZXIubG9jYXRpb24pKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIGxvY2F0aW9uIGZvciBhdHRhY2tlci4gQXR0YWNraW5nIHVuaXQgJHthdHRhY2tlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7YXR0YWNrZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2F0dGFja2VyLmxvY2F0aW9ufWAsXG4gICAgKVxuXG4gIGNvbnN0IGRlZmVuZGVyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChkZWZlbmRlci51bml0SWQpXG4gIGlmICghZGVmZW5kZXJVbml0KSB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVyLnVuaXRJZH1gKVxuICBpZiAoIWRlZmVuZGVyVW5pdC5sb2NhdGlvbi5lcXVhbHMoZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIGxvY2F0aW9uIGZvciBkZWZlbmRlci4gRGVmZW5kaW5nIHVuaXQgJHtkZWZlbmRlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7ZGVmZW5kZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2RlZmVuZGVyLmxvY2F0aW9ufWAsXG4gICAgKVxuXG4gIGlmIChhdHRhY2tlclVuaXQucGxheWVySWQgPT09IGRlZmVuZGVyVW5pdC5wbGF5ZXJJZCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbWJhdCB3aXRoIHNlbGZgKVxuICBpZiAoIWNhbkF0dGFja09jY3VyKGV2ZW50LmF0dGFja1R5cGUsIHN0YXRlLm1hcCwgYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBjb21iYXQgb2YgdHlwZSAke2V2ZW50LmF0dGFja1R5cGV9IGJldHdlZW4gaGV4ZXMgJHthdHRhY2tlci5sb2NhdGlvbn0gdG8gJHtkZWZlbmRlci5sb2NhdGlvbn1gLFxuICAgIClcbiAgaWYgKGF0dGFja2VyVW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYClcblxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZVxuXG4gIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoYXR0YWNrZXJVbml0LmlkKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVwZGF0ZWRBdHRhY2tlciA9IGF0dGFja2VyVW5pdC5kYW1hZ2UoYXR0YWNrZXIuZGFtYWdlKS5yZWR1Y2VBY3Rpb25Qb2ludHMoZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChhdHRhY2tlclVuaXQuaWQsIHVwZGF0ZWRBdHRhY2tlcilcbiAgfVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoZGVmZW5kZXJVbml0LmlkKVxuICB9IGVsc2Uge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoZGVmZW5kZXJVbml0LmlkLCBkZWZlbmRlclVuaXQuZGFtYWdlKGRlZmVuZGVyLmRhbWFnZSkpXG4gIH1cblxuICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgJHtkZWZlbmRlclVuaXQubmFtZX0gd2FzIHRha2VuIG91dCBpbiBhIHN1aWNpZGUgYXR0YWNrIGJ5ICR7YXR0YWNrZXJVbml0Lm5hbWV9LmApXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYCR7ZGVmZW5kZXJVbml0Lm5hbWV9IHdhcyBicnV0YWxseSBtdXJkZXJlZCBieSAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICAgIH1cbiAgfSBlbHNlIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGAke2F0dGFja2VyVW5pdC5uYW1lfSBkaWVkIGluIGEgZnV0aWxlIGF0dGVtcHQgdG8gdGFrZSBvbiAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZlcmIgPSBldmVudC5hdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFja2VkJyA6ICdzcGF0IGF0J1xuICAgIGNvbnN0IHRha2luZ0RhbWFnZUNsYXVzZSA9IGF0dGFja2VyLmRhbWFnZSA9PT0gMCA/ICcnIDogYCBhbmQgdGFraW5nICR7YXR0YWNrZXIuZGFtYWdlfSBkYW1hZ2VgXG4gICAgY29uc3QgbWVzc2FnZSA9IGAke2F0dGFja2VyVW5pdC5uYW1lfSAke3ZlcmJ9ICR7ZGVmZW5kZXJVbml0Lm5hbWV9LCBjYXVzaW5nICR7ZGVmZW5kZXIuZGFtYWdlfSBkYW1hZ2Uke3Rha2luZ0RhbWFnZUNsYXVzZX0uYFxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2cobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gbmV3U3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBnZXRQbGF5ZXIoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGUudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogdHJ1ZSB9KSlcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRGVmZWF0ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJEZWZlYXRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gZ2V0UGxheWVyKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlXG4gICAgLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBkZWZlYXRlZDogdHJ1ZSB9KSlcbiAgICAuYWRkV29ybGRMb2coYCR7cGxheWVyLm5hbWV9IGhhcyBiZWVuIHZhbnF1aXNoZWQuYClcbn1cblxuY29uc3QgaGFuZGxlTmV3VHVybiA9IChzdGF0ZTogV29ybGRTdGF0ZSk6IFdvcmxkU3RhdGUgPT5cbiAgc3RhdGUubmV3VHVybigpLmFkZFdvcmxkTG9nKGBUdXJuICR7c3RhdGUudHVybiArIDF9IGhhcyBiZWd1bi5gKVxuXG5jb25zdCBoYW5kbGVHYW1lT3ZlciA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IEdhbWVPdmVyV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHZpY3RvciB9ID0gZXZlbnRcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGUuZ2FtZU92ZXIodmljdG9yKVxuICBpZiAodmljdG9yKSB7XG4gICAgY29uc3QgdmljdG9yUGxheWVyID0gZ2V0UGxheWVyKHN0YXRlLCB2aWN0b3IpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhg8J+PhiAke3ZpY3RvclBsYXllci5uYW1lfSBpcyB2aWN0b3Jpb3VzIWApXG4gIH0gZWxzZSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgVGhlcmUgYXJlIG5vIHdpbm5lcnMgaW4gd2FyLmApXG4gIH1cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllcktpY2tlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllcktpY2tlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gc3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgaWYgKCFwbGF5ZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsYXllciB3aXRoIElEICR7cGxheWVySWR9YClcbiAgfVxuICBpZiAocGxheWVySWQgPT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3Qga2ljayBob3N0YClcbiAgfVxuICByZXR1cm4gc3RhdGUucmVtb3ZlUGxheWVyKHBsYXllcklkKVxufVxuXG5jb25zdCBoYW5kbGVDaGF0ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogQ2hhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLmFkZFdvcmxkTG9nKGBbJHtzdGF0ZS5nZXRQbGF5ZXIoZXZlbnQucGxheWVySWQpLm5hbWV9XSAke2V2ZW50Lm1lc3NhZ2V9YClcbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5cbmV4cG9ydCBjbGFzcyBXb3JsZE1hcCB7XG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXJcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXJcbiAgcmVhZG9ubHkgbW91bnRhaW5zOiBIZXhbXVxuXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGgsIGhlaWdodCwgbW91bnRhaW5zID0gW10gfTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgbW91bnRhaW5zPzogSGV4W10gfSkge1xuICAgIGFzc2VydCh3aWR0aCA+IDApXG4gICAgYXNzZXJ0KGhlaWdodCA+IDApXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgICB0aGlzLm1vdW50YWlucyA9IG1vdW50YWluc1xuICB9XG5cbiAgcHVibGljIGlzSW5Cb3VuZHMgPSAoaGV4OiBIZXgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBxID0gaGV4LnggKyBNYXRoLmZsb29yKGhleC55IC8gMilcbiAgICByZXR1cm4gMCA8PSBxICYmIHEgPCB0aGlzLndpZHRoICYmIDAgPD0gaGV4LnkgJiYgaGV4LnkgPCB0aGlzLmhlaWdodFxuICB9XG5cbiAgcHVibGljICpnZXRNYXBIZXhlcygpOiBJdGVyYWJsZUl0ZXJhdG9yPEhleD4ge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuaGVpZ2h0OyByb3crKylcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IHggPSAtTWF0aC5mbG9vcihyb3cgLyAyKSArIGNvbHVtblxuICAgICAgICB5aWVsZCBuZXcgSGV4KHgsIHJvdylcbiAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICB3aWR0aCA9IHRoaXMud2lkdGgsXG4gICAgaGVpZ2h0ID0gdGhpcy5oZWlnaHQsXG4gICAgbW91bnRhaW5zID0gdGhpcy5tb3VudGFpbnMsXG4gIH06IHsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlcjsgbW91bnRhaW5zPzogSGV4W10gfSA9IHt9KTogV29ybGRNYXAgPT5cbiAgICBuZXcgV29ybGRNYXAoeyB3aWR0aCwgaGVpZ2h0LCBtb3VudGFpbnMgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgbW91bnRhaW5zOiB0aGlzLm1vdW50YWlucy5tYXAoKG1vdW50YWluKSA9PiBtb3VudGFpbi50b0pzb24oKSksXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBXb3JsZE1hcCA9PlxuICAgIG5ldyBXb3JsZE1hcCh7IHdpZHRoOiBqc29uLndpZHRoLCBoZWlnaHQ6IGpzb24uaGVpZ2h0LCBtb3VudGFpbnM6IGpzb24ubW91bnRhaW5zLm1hcChIZXguZnJvbUpzb24pIH0pXG5cbiAgcHVibGljIGlzTW91bnRhaW4gPSAoaGV4OiBIZXgpOiBib29sZWFuID0+IFIuY29udGFpbnMoaGV4LCB0aGlzLm1vdW50YWlucylcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi93b3JsZC1tYXAnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuL3VuaXQnXG5pbXBvcnQgeyBqdXN0LCBNYXliZSwgT3B0aW9uLCB0b01heWJlLCB0b09wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuL3dvcmxkLWV2ZW50cydcblxuaW50ZXJmYWNlIEdhbWVPdmVySW5mbyB7XG4gIHZpY3RvcjogT3B0aW9uPFBsYXllcklkPlxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZSB7XG4gIHJlYWRvbmx5IHR1cm46IG51bWJlciAvKiB0dXJuID0gMCBiZWZvcmUgdGhlIGdhbWUgaGFzIHN0YXJ0ZWQgKi9cbiAgcmVhZG9ubHkgbWFwOiBXb3JsZE1hcFxuICByZWFkb25seSB1bml0czogVW5pdFtdXG4gIHJlYWRvbmx5IHBsYXllcnM6IFBsYXllcltdXG4gIHJlYWRvbmx5IGdhbWVPdmVySW5mbz86IEdhbWVPdmVySW5mb1xuICByZWFkb25seSB3b3JsZExvZzogc3RyaW5nW11cblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgdHVybixcbiAgICBtYXAsXG4gICAgdW5pdHMsXG4gICAgcGxheWVycyxcbiAgICBnYW1lT3ZlckluZm8sXG4gICAgd29ybGRMb2cgPSBbXSxcbiAgfToge1xuICAgIHR1cm46IG51bWJlclxuICAgIG1hcDogV29ybGRNYXBcbiAgICB1bml0czogVW5pdFtdXG4gICAgcGxheWVyczogUGxheWVyW11cbiAgICBnYW1lT3ZlckluZm8/OiBPcHRpb248R2FtZU92ZXJJbmZvPlxuICAgIHdvcmxkTG9nPzogc3RyaW5nW11cbiAgfSkge1xuICAgIHRoaXMudHVybiA9IHR1cm5cbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMudW5pdHMgPSB1bml0c1xuICAgIHRoaXMucGxheWVycyA9IHBsYXllcnNcbiAgICB0aGlzLmdhbWVPdmVySW5mbyA9IGdhbWVPdmVySW5mb1xuICAgIHRoaXMud29ybGRMb2cgPSB3b3JsZExvZ1xuICAgIGFzc2VydCh0dXJuID49IDApXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgdHVybiA9IHRoaXMudHVybixcbiAgICBtYXAgPSB0aGlzLm1hcCxcbiAgICB1bml0cyA9IHRoaXMudW5pdHMsXG4gICAgcGxheWVycyA9IHRoaXMucGxheWVycyxcbiAgICBnYW1lT3ZlckluZm8gPSB0b01heWJlKHRoaXMuZ2FtZU92ZXJJbmZvKSxcbiAgICB3b3JsZExvZyA9IHRoaXMud29ybGRMb2csXG4gIH06IHtcbiAgICB0dXJuPzogbnVtYmVyXG4gICAgbWFwPzogV29ybGRNYXBcbiAgICB1bml0cz86IFVuaXRbXVxuICAgIHBsYXllcnM/OiBQbGF5ZXJbXVxuICAgIGdhbWVPdmVySW5mbz86IE1heWJlPEdhbWVPdmVySW5mbz5cbiAgICB3b3JsZExvZz86IHN0cmluZ1tdXG4gIH0gPSB7fSk6IFdvcmxkU3RhdGUgPT4gbmV3IFdvcmxkU3RhdGUoeyB0dXJuLCBtYXAsIHVuaXRzLCBwbGF5ZXJzLCBnYW1lT3ZlckluZm86IHRvT3B0aW9uKGdhbWVPdmVySW5mbyksIHdvcmxkTG9nIH0pXG5cbiAgcHVibGljIGdldCBnYW1lSGFzU3RhcnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50dXJuID4gMFxuICB9XG5cbiAgcHVibGljIGdldFBsYXllcklkcyA9ICgpOiBQbGF5ZXJJZFtdID0+IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmlkKVxuXG4gIHB1YmxpYyBpc1BsYXllckRlZmVhdGVkID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IGJvb2xlYW4gPT4gdGhpcy5nZXRVbml0c0ZvclBsYXllcihwbGF5ZXJJZCkubGVuZ3RoID09PSAwXG5cbiAgcHVibGljIGNhblBsYXllckFjdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBlbmRlZFR1cm4gPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpPy5lbmRlZFR1cm5cbiAgICByZXR1cm4gIWVuZGVkVHVybiAmJiBSLmFueSgodW5pdCkgPT4gdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzLCB0aGlzLmdldFVuaXRzRm9yUGxheWVyKHBsYXllcklkKSlcbiAgfVxuXG4gIHB1YmxpYyBjYW5BbnlQbGF5ZXJBY3QgPSAoKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiB0aGlzLmNhblBsYXllckFjdChwbGF5ZXIuaWQpLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdldFVuaXRzRm9yUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFVuaXRbXSA9PiB0aGlzLnVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5wbGF5ZXJJZCA9PT0gcGxheWVySWQpXG5cbiAgcHVibGljIGZpbmRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogT3B0aW9uPFBsYXllcj4gPT4gUi5maW5kKChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2V0UGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEJ5SWQgPSAodW5pdElkOiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT4gUi5maW5kKCh1bml0KSA9PiB1bml0LmlkID09PSB1bml0SWQsIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIGdldFVuaXRCeUlkID0gKHVuaXRJZDogbnVtYmVyKTogVW5pdCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIH1cbiAgICByZXR1cm4gdW5pdFxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQubG9jYXRpb24uZXF1YWxzKGhleCksIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIHJlcGxhY2VVbml0ID0gKHVuaXRJZDogVW5pdElkLCB1bml0OiBVbml0KTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICB1bml0czogUi5hcHBlbmQoXG4gICAgICAgIHVuaXQsXG4gICAgICAgIFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9PSB1bml0SWQsIHRoaXMudW5pdHMpLFxuICAgICAgKSxcbiAgICB9KVxuXG4gIHB1YmxpYyByZW1vdmVVbml0ID0gKHVuaXRJZDogVW5pdElkKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHVuaXRzOiBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPT0gdW5pdElkLCB0aGlzLnVuaXRzKSB9KVxuXG4gIHB1YmxpYyB1cGRhdGVQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkLCBtb2RpZnk6IChwbGF5ZXI6IFBsYXllcikgPT4gUGxheWVyKTogV29ybGRTdGF0ZSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZVBsYXllcihwbGF5ZXJJZCwgbW9kaWZ5KHBsYXllcikpXG4gIH1cblxuICBwdWJsaWMgc2V0UGxheWVyTmFtZSA9IChwbGF5ZXJJZDogUGxheWVySWQsIG5hbWU6IHN0cmluZykgPT5cbiAgICB0aGlzLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBuYW1lIH0pKVxuXG4gIHB1YmxpYyByZXBsYWNlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgcGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHtcbiAgICBhc3NlcnQocGxheWVySWQgPT09IHBsYXllci5pZClcbiAgICByZXR1cm4gdGhpcy5jb3B5KHtcbiAgICAgIHBsYXllcnM6IFIuYXBwZW5kKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIFIuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5pZCAhPT0gcGxheWVySWQsIHRoaXMucGxheWVycyksXG4gICAgICApLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYWRkUGxheWVyID0gKHBsYXllcjogUGxheWVyKTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBwbGF5ZXJzOiBSLmFwcGVuZChwbGF5ZXIsIHRoaXMucGxheWVycykgfSlcblxuICBwdWJsaWMgcmVtb3ZlUGxheWVyID0gKHBsYXllcklkOiBudW1iZXIpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgcGxheWVyczogdGhpcy5wbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuaWQgIT09IHBsYXllcklkKSB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgdHVybjogdGhpcy50dXJuLFxuICAgIG1hcDogdGhpcy5tYXAudG9Kc29uKCksXG4gICAgdW5pdHM6IHRoaXMudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LnRvSnNvbigpKSxcbiAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci50b0pzb24oKSksXG4gICAgZ2FtZU92ZXJJbmZvOiB0aGlzLmdhbWVPdmVySW5mbyxcbiAgICB3b3JsZExvZzogdGhpcy53b3JsZExvZyxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkU3RhdGUgPT5cbiAgICBuZXcgV29ybGRTdGF0ZSh7XG4gICAgICB0dXJuOiBqc29uLnR1cm4sXG4gICAgICBtYXA6IFdvcmxkTWFwLmZyb21Kc29uKGpzb24ubWFwKSxcbiAgICAgIHVuaXRzOiBqc29uLnVuaXRzLm1hcCgodW5pdDogYW55KSA9PiBVbml0LmZyb21Kc29uKHVuaXQpKSxcbiAgICAgIHBsYXllcnM6IGpzb24ucGxheWVycy5tYXAoKHVuaXQ6IGFueSkgPT4gUGxheWVyLmZyb21Kc29uKHVuaXQpKSxcbiAgICAgIGdhbWVPdmVySW5mbzoganNvbi5nYW1lT3ZlckluZm8sXG4gICAgICB3b3JsZExvZzoganNvbi53b3JsZExvZyxcbiAgICB9KVxuXG4gIHB1YmxpYyBpc1ZhbGlkUGxheWVySWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdhbWVPdmVyID0gKHZpY3RvcjogT3B0aW9uPG51bWJlcj4pOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IGdhbWVPdmVySW5mbzoganVzdCh7IHZpY3RvciB9KSB9KVxuXG4gIHB1YmxpYyBhcHBseUV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiBhcHBseUV2ZW50KHRoaXMsIGV2ZW50KVxuXG4gIHB1YmxpYyBhcHBseUV2ZW50cyA9IChldmVudHM6IFdvcmxkRXZlbnRbXSk6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGxldCBzdGF0ZTogV29ybGRTdGF0ZSA9IHRoaXNcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBhZGRXb3JsZExvZyA9IChtZXNzYWdlOiBzdHJpbmcpOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IHdvcmxkTG9nOiBSLmFwcGVuZChtZXNzYWdlLCB0aGlzLndvcmxkTG9nKSB9KVxuXG4gIHB1YmxpYyB1cGRhdGVXb3JsZE1hcCA9IChtb2RpZnk6IChtYXA6IFdvcmxkTWFwKSA9PiBXb3JsZE1hcCk6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgbWFwOiBtb2RpZnkodGhpcy5tYXApIH0pXG5cbiAgcHVibGljIG5ld1R1cm4gPSAoKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICB0dXJuOiB0aGlzLnR1cm4gKyAxLFxuICAgICAgdW5pdHM6IHRoaXMudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LnJlZnJlc2hBY3Rpb25Qb2ludHMoKSksXG4gICAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiBmYWxzZSB9KSksXG4gICAgfSlcblxuICBwdWJsaWMgZ2V0U29ydGVkUGxheWVycyA9ICgpOiBQbGF5ZXJbXSA9PiBSLnNvcnRCeSgocGxheWVyKSA9PiBwbGF5ZXIuaWQsIHRoaXMucGxheWVycylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=