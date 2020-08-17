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
exports.ALL_AUDIO_KEYS = exports.AudioKeys = void 0;
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
exports.setUrlInfo = exports.getUrlInfo = exports.BootScene = exports.BOOT_SCENE_KEY = void 0;
var helpers_1 = __webpack_require__(/*! ../../helpers */ "./src/helpers.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var game_scene_1 = __webpack_require__(/*! ../main-game/game-scene */ "./src/scenes/main-game/game-scene.ts");
var main_menu_scene_1 = __webpack_require__(/*! ../main-menu/main-menu-scene */ "./src/scenes/main-menu/main-menu-scene.ts");
var world_event_db_1 = __webpack_require__(/*! ../../db/world-event-db */ "./src/db/world-event-db.ts");
var server_1 = __webpack_require__(/*! ../../server/server */ "./src/server/server.ts");
var client_1 = __webpack_require__(/*! ../../server/client */ "./src/server/client.ts");
var lobby_scene_1 = __webpack_require__(/*! ../lobby/lobby-scene */ "./src/scenes/lobby/lobby-scene.ts");
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
                        urlInfo = exports.getUrlInfo();
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
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client_1.Client.connect(gameId)];
                    case 1:
                        client = _a.sent();
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
            var _a, playerId, worldState;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, client.join()];
                    case 1:
                        _a = _b.sent(), playerId = _a.playerId, worldState = _a.worldState;
                        exports.setUrlInfo({ gameId: gameId, playerId: playerId });
                        this.joinGame(worldState, client, playerId);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.rejoinAsClient = function (client, gameId, playerId) { return __awaiter(_this, void 0, void 0, function () {
            var worldState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.rejoin(playerId)];
                    case 1:
                        worldState = _a.sent();
                        this.joinGame(worldState, client, playerId);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.joinGame = function (worldState, client, playerId) {
            if (worldState.gameHasStarted) {
                var sceneData = { serverOrClient: client, worldState: worldState, playerId: playerId };
                _this.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
            }
            else {
                var sceneData = { serverOrClient: client, worldState: worldState, playerId: playerId };
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
                            sceneData = { serverOrClient: server, worldState: worldState, playerId: 1 };
                            this.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
                        }
                        else {
                            sceneData = { serverOrClient: server, worldState: worldState, playerId: 1 };
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
            var percent = value * 100;
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
        // Source: https://opengameart.org/content/hex-tileset-pack
        this.load.image('llama', 'assets/sprites/llama_14.png');
        // https://opengameart.org/content/hourglass-icon
        this.load.image('hourglass', 'assets/sprites/Hourglass.png');
        // https://opengameart.org/content/grass-textures-tiles
        // https://opengameart.org/content/grass-texture
        this.load.image('grass', 'assets/sprites/grass2.png');
        // https://opengameart.org/content/puddle-corpses
        this.load.image('spit', 'assets/sprites/puddle_light_blue.png');
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
                attack_world_action_handler_1.canAttackOccur(attackType, unit.location, location))
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
var server_1 = __webpack_require__(/*! ../../server/server */ "./src/server/server.ts");
var game_scene_1 = __webpack_require__(/*! ../main-game/game-scene */ "./src/scenes/main-game/game-scene.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var lobby_display_objects_1 = __webpack_require__(/*! ./lobby-display-objects */ "./src/scenes/lobby/lobby-display-objects.ts");
var CreatedLobbyScene = /** @class */ (function () {
    function CreatedLobbyScene(scene, serverOrClient, playerId, worldState) {
        var _this = this;
        this.makeLobbyDisplayObjects = function (scene, playerId) {
            return new lobby_display_objects_1.LobbyDisplayObjects(scene, playerId, _this.handleStartGame, _this.handleChangePlayerName);
        };
        this.actAsClient = function (client) {
            _this.listener = function (event) { return _this.handleWorldEvent(event, client); };
            client.addListener(_this.listener);
        };
        this.handleWorldEvent = function (event, client) {
            _this.worldState = _this.worldState.applyEvent(event);
            switch (event.type) {
                case 'gameStarted':
                    _this.scene.sound.play(asset_keys_1.AudioKeys.NEW_TURN);
                    if (_this.listener) {
                        client.removeListener(_this.listener);
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
        this.handleWorldEvent2 = function (event, server) {
            _this.worldState = _this.worldState.applyEvent(event);
            switch (event.type) {
                case 'gameStarted':
                    _this.scene.sound.play(asset_keys_1.AudioKeys.NEW_TURN);
                    if (_this.listener) {
                        server.removeListener(_this.listener);
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
                worldState: _this.worldState,
                playerId: _this.playerId,
            };
            _this.scene.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
        };
        this.handleChangePlayerName = function (name) { return _this.dispatchAction({ type: 'changePlayerName', name: name }); };
        this.dispatchAction = function (action) {
            if (_this.serverOrClient instanceof server_1.Server) {
                _this.serverOrClient.handleAction(_this.playerId, action);
            }
            else {
                _this.serverOrClient.sendAction(_this.playerId, action);
            }
        };
        this.sync = function () { return _this.lobbyDisplayObjects.sync(_this.worldState); };
        this.actAsServer = function (server) {
            _this.listener = function (event) { return _this.handleWorldEvent2(event, server); };
            server.addListener(_this.listener);
        };
        this.handleStartGame = function () { return _this.dispatchAction({ type: 'startGame' }); };
        this.scene = scene;
        this.serverOrClient = serverOrClient;
        this.playerId = playerId;
        this.worldState = worldState;
        this.scene.sound.pauseOnBlur = false;
        this.scene.sound.add(asset_keys_1.AudioKeys.CLICK);
        this.scene.sound.add(asset_keys_1.AudioKeys.NEW_TURN);
        this.scene.sound.add(asset_keys_1.AudioKeys.PLAYER_JOINED_LOBBY);
        this.lobbyDisplayObjects = this.makeLobbyDisplayObjects(scene, playerId);
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
var LobbyDisplayObjects = /** @class */ (function () {
    function LobbyDisplayObjects(scene, playerId, onStartGame, onChangePlayerName) {
        var _this = this;
        this.playerNameTexts = new Map();
        this.handleStartGame = function () {
            _this.scene.sound.play(asset_keys_1.AudioKeys.CLICK);
            _this.onStartGame();
        };
        this.sync = function (worldState) {
            var e_1, _a, e_2, _b, e_3, _c;
            var _d;
            var requiredPlayerIds = worldState.getPlayerIds();
            var currentPlayerIds = Array.from(_this.playerNameTexts.keys());
            var surplusPlayerIds = R.difference(currentPlayerIds, requiredPlayerIds);
            try {
                for (var surplusPlayerIds_1 = __values(surplusPlayerIds), surplusPlayerIds_1_1 = surplusPlayerIds_1.next(); !surplusPlayerIds_1_1.done; surplusPlayerIds_1_1 = surplusPlayerIds_1.next()) {
                    var playerId = surplusPlayerIds_1_1.value;
                    (_d = _this.playerNameTexts.get(playerId)) === null || _d === void 0 ? void 0 : _d.destroy();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (surplusPlayerIds_1_1 && !surplusPlayerIds_1_1.done && (_a = surplusPlayerIds_1.return)) _a.call(surplusPlayerIds_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var missingPlayerIds = R.difference(requiredPlayerIds, currentPlayerIds);
            var _loop_1 = function (playerId) {
                var player = worldState.getPlayer(playerId);
                var playerText = _this.scene.add
                    .text(100, 0, player.name, {
                    fill: '#FFFFFF',
                    fixedWidth: 200,
                    backgroundColor: playerId === _this.playerId ? '#333333' : '#000000',
                })
                    .setFontSize(18)
                    .setPadding(0, 0, 0, 0)
                    .setInteractive()
                    .on('pointerdown', function () {
                    if (playerId === _this.playerId) {
                        var plugin = _this.scene.plugins.get('rexTextEdit');
                        plugin.edit(playerText, {
                            onClose: function () { return _this.onChangePlayerName(playerText.text); },
                        });
                    }
                });
                _this.playerNameTexts.set(playerId, playerText);
            };
            try {
                for (var missingPlayerIds_1 = __values(missingPlayerIds), missingPlayerIds_1_1 = missingPlayerIds_1.next(); !missingPlayerIds_1_1.done; missingPlayerIds_1_1 = missingPlayerIds_1.next()) {
                    var playerId = missingPlayerIds_1_1.value;
                    _loop_1(playerId);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (missingPlayerIds_1_1 && !missingPlayerIds_1_1.done && (_b = missingPlayerIds_1.return)) _b.call(missingPlayerIds_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            var y = 100;
            var sortedPlayers = R.sortBy(function (player) { return player.id; }, worldState.players);
            try {
                for (var sortedPlayers_1 = __values(sortedPlayers), sortedPlayers_1_1 = sortedPlayers_1.next(); !sortedPlayers_1_1.done; sortedPlayers_1_1 = sortedPlayers_1.next()) {
                    var player = sortedPlayers_1_1.value;
                    var playerText = _this.playerNameTexts.get(player.id);
                    playerText === null || playerText === void 0 ? void 0 : playerText.setText(player.name).setY(y);
                    y += 50;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (sortedPlayers_1_1 && !sortedPlayers_1_1.done && (_c = sortedPlayers_1.return)) _c.call(sortedPlayers_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            if (_this.startGameButton) {
                _this.startGameButton.setY(y);
            }
            if (_this.waitingForHostText) {
                _this.waitingForHostText.setY(y);
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
            var serverOrClient = sceneData.serverOrClient, playerId = sceneData.playerId, worldState = sceneData.worldState;
            new created_lobby_scene_1.CreatedLobbyScene(_this, serverOrClient, playerId, worldState);
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
        var playerId = _a.playerId, mode = _a.mode, selectedHex = _a.selectedHex, _b = _a.actionsOutstandingWithServer, actionsOutstandingWithServer = _b === void 0 ? 0 : _b;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.playerId, playerId = _c === void 0 ? _this.playerId : _c, _d = _b.mode, mode = _d === void 0 ? _this.mode : _d, _e = _b.selectedHex, selectedHex = _e === void 0 ? types_1.toMaybe(_this.selectedHex) : _e, _f = _b.actionsOutstandingWithServer, actionsOutstandingWithServer = _f === void 0 ? _this.actionsOutstandingWithServer : _f;
            return new LocalGameState({ playerId: playerId, mode: mode, selectedHex: types_1.toOption(selectedHex), actionsOutstandingWithServer: actionsOutstandingWithServer });
        };
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
        assert(actionsOutstandingWithServer >= 0);
    }
    return LocalGameState;
}());
exports.LocalGameState = LocalGameState;
exports.INITIAL_LOCAL_GAME_STATE = new LocalGameState({
    playerId: 1,
    mode: { type: 'selectHex' },
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
var DisplayObjects = /** @class */ (function () {
    function DisplayObjects(scene, worldState, localGameState, localActionDispatcher) {
        var _this = this;
        this.unitDisplayObjects = new Map();
        this.animatedUnitDisplayObjects = new Map();
        this.isAnimating = false;
        this.animations = [];
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
            var _a, animationsToPerformNow, animationsToPerformLater, animationsToPerformNow_1, animationsToPerformNow_1_1, animation;
            var e_5, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.isAnimating = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, , 5, 6]);
                        _c.label = 2;
                    case 2:
                        if (!(this.animations.length > 0)) return [3 /*break*/, 4];
                        _a = this.sequenceAnimations(), animationsToPerformNow = _a.animationsToPerformNow, animationsToPerformLater = _a.animationsToPerformLater;
                        this.animations = animationsToPerformLater;
                        return [4 /*yield*/, Promise.all(animationsToPerformNow.map(this.runAnimation))];
                    case 3:
                        _c.sent();
                        try {
                            for (animationsToPerformNow_1 = (e_5 = void 0, __values(animationsToPerformNow)), animationsToPerformNow_1_1 = animationsToPerformNow_1.next(); !animationsToPerformNow_1_1.done; animationsToPerformNow_1_1 = animationsToPerformNow_1.next()) {
                                animation = animationsToPerformNow_1_1.value;
                                this.releaseUnitsFromBeingAnimatedWhereNoLongerNeeded(animation);
                            }
                        }
                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                        finally {
                            try {
                                if (animationsToPerformNow_1_1 && !animationsToPerformNow_1_1.done && (_b = animationsToPerformNow_1.return)) _b.call(animationsToPerformNow_1);
                            }
                            finally { if (e_5) throw e_5.error; }
                        }
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
        this.runAnimation = function (animation) { return __awaiter(_this, void 0, void 0, function () {
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
                    case 1: return [4 /*yield*/, this.runMoveAnimation(animation)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.runCombatAnimation(animation)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5: throw new unreachable_case_error_1.UnreachableCaseError(animation);
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.runMoveAnimation = function (animation) { return __awaiter(_this, void 0, void 0, function () {
            var displayObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        displayObject = this.animatedUnitDisplayObjects.get(animation.unitId);
                        if (!displayObject)
                            throw "Unexpected missing display object for unit " + animation.unitId;
                        this.scene.sound.play(asset_keys_1.AudioKeys.WALK);
                        return [4 /*yield*/, displayObject.runMoveAnimation(animation.from, animation.to)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.runCombatAnimation = function (animation) { return __awaiter(_this, void 0, void 0, function () {
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
                            simultaneousAnimations.push(attackerDisplayObject.runAttackAnimation(attacker.location, defender.location));
                        }
                        else {
                            simultaneousAnimations.push(attackerDisplayObject.runSpitAnimation(attacker.location, defender.location));
                        }
                        if (attacker.killed) {
                            simultaneousAnimations.push(attackerDisplayObject.runDeathAnimation());
                        }
                        if (defender.killed) {
                            simultaneousAnimations.push(defenderDisplayObject.runDeathAnimation());
                        }
                        return [4 /*yield*/, Promise.all(simultaneousAnimations)];
                    case 1:
                        _a.sent();
                        if (attacker.damage > 0)
                            attackerDisplayObject.runDamageAnimation(attacker.location, attacker.damage);
                        if (defender.damage > 0)
                            defenderDisplayObject.runDamageAnimation(defender.location, defender.damage);
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
var types_1 = __webpack_require__(/*! ../../util/types */ "./src/util/types.ts");
var local_game_state_1 = __webpack_require__(/*! ../local-game-state */ "./src/scenes/local-game-state.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var keyboard_mapper_1 = __webpack_require__(/*! ./keyboard-mapper */ "./src/scenes/main-game/keyboard-mapper.ts");
var local_action_processor_1 = __webpack_require__(/*! ./local-action-processor */ "./src/scenes/main-game/local-action-processor.ts");
var combined_state_methods_1 = __webpack_require__(/*! ../combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var initial_world_state_1 = __webpack_require__(/*! ../../world/initial-world-state */ "./src/world/initial-world-state.ts");
var server_1 = __webpack_require__(/*! ../../server/server */ "./src/server/server.ts");
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
            var serverOrClient = sceneData.serverOrClient, playerId = sceneData.playerId, worldState = sceneData.worldState;
            _this.setUpSound();
            _this.worldState = worldState;
            _this.localGameState = local_game_state_1.INITIAL_LOCAL_GAME_STATE.copy({ playerId: playerId });
            _this.serverOrClient = serverOrClient;
            if (serverOrClient instanceof server_1.Server) {
                _this.actAsServer(serverOrClient);
            }
            else {
                _this.actAsClient(serverOrClient);
            }
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
        _this.actAsClient = function (client) {
            _this.serverOrClient = client;
            client.addListener(_this.handleWorldEvent);
        };
        _this.actAsServer = function (server) {
            server.addListener(_this.handleWorldEvent);
            _this.worldState = server.worldState;
        };
        _this.asyncSendToServer = function (action) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.serverOrClient) {
                            throw "Unexpected missing serverOrClient";
                        }
                        if (!(this.serverOrClient instanceof server_1.Server)) return [3 /*break*/, 1];
                        this.serverOrClient.handleAction(this.playerId, action);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.serverOrClient.sendAction(this.playerId, action)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
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
            if (localAction)
                _this.handleLocalAction(localAction);
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
        _this.handleWorldEvent = function (event) {
            var oldWorldState = _this.worldState;
            _this.worldState = oldWorldState.applyEvent(event);
            switch (event.type) {
                case 'initialise':
                case 'playerAdded':
                case 'playerChangedName':
                case 'gameStarted':
                    break;
                case 'unitMoved':
                    _this.handleUnitMovedWorldEvent(event, oldWorldState);
                    break;
                case 'combat':
                    _this.handleCombatWorldEvent(event, oldWorldState);
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
        _this.handleUnitMovedWorldEvent = function (event, oldWorldState) {
            var _a;
            var unitId = event.unitId, from = event.from, to = event.to;
            var unit = _this.worldState.getUnitById(unitId);
            var wasPreviouslySelected = _this.localGameState.selectedHex &&
                ((_a = oldWorldState.findUnitInLocation(_this.localGameState.selectedHex)) === null || _a === void 0 ? void 0 : _a.id) === unitId;
            if (wasPreviouslySelected && unit.playerId === _this.playerId) {
                var newSelectedHex = _this.calculateNewSelectedUnitAfterMoveOrAttack(unitId, to);
                _this.localGameState = _this.localGameState.copy({
                    mode: { type: 'selectHex' },
                    selectedHex: types_1.toMaybe(newSelectedHex),
                });
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
        _this.handleCombatWorldEvent = function (event, oldWorldState) {
            var attacker = event.attacker, defender = event.defender;
            _this.updateSelectionAfterCombat(attacker, defender, oldWorldState);
            _this.syncScene({
                type: 'combat',
                attackType: event.attackType,
                attacker: attacker,
                defender: defender,
            });
        };
        _this.updateSelectionAfterCombat = function (attacker, defender, oldWorldState) {
            var _a;
            var previouslySelectedUnitId = (_a = new combined_state_methods_1.CombinedState(oldWorldState, _this.localGameState).findSelectedUnit()) === null || _a === void 0 ? void 0 : _a.id;
            if (previouslySelectedUnitId === attacker.unitId && attacker.playerId === _this.playerId) {
                var newSelectedHex = _this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId, attacker.location);
                _this.localGameState = _this.localGameState.copy({
                    mode: { type: 'selectHex' },
                    selectedHex: types_1.toMaybe(newSelectedHex),
                });
            }
            else {
                // deselect unit killed by another player
                if (defender.killed && defender.unitId === previouslySelectedUnitId && defender.playerId === _this.playerId) {
                    _this.localGameState = _this.localGameState.copy({
                        mode: { type: 'selectHex' },
                        selectedHex: types_1.nothing,
                    });
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
        this.localGameState = this.localGameState.copy({
            mode: { type: 'selectHex' },
            selectedHex: types_1.toMaybe(unitToSelect === null || unitToSelect === void 0 ? void 0 : unitToSelect.location),
        });
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
var types_1 = __webpack_require__(/*! ../../util/types */ "./src/util/types.ts");
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
                    return { newLocalGameState: _this.localGameState.copy({ selectedHex: types_1.nothing }) };
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
                    return { newLocalGameState: _this.localGameState.setSelectedHex(undefined) };
                }
            }
            else if (selectedHex && selectedHex.equals(hex)) {
                // if selected hex is clicked, toggle selection off
                return { newLocalGameState: _this.localGameState.setSelectedHex(undefined) };
            }
            else {
                return { newLocalGameState: _this.localGameState.setSelectedHex(hex) };
            }
        };
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
var attack_world_action_handler_1 = __webpack_require__(/*! ../../server/attack-world-action-handler */ "./src/server/attack-world-action-handler.ts");
var MapDisplayObject = /** @class */ (function () {
    function MapDisplayObject(scene, worldState, localGameState) {
        var e_1, _a;
        var _this = this;
        this.hexPolygons = new Map();
        this.createHex = function (hex) {
            var polygonCenter = game_scene_1.hexCenter(hex);
            _this.scene.add.image(polygonCenter.x, polygonCenter.y, 'grass').setScale(0.65).setDepth(-5);
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
            var _a = _this.localGameState, playerId = _a.playerId, selectedHex = _a.selectedHex, mode = _a.mode;
            if (selectedHex && selectedHex.equals(hex)) {
                return 'selected';
            }
            if (mode.type === 'moveUnit') {
                if (selectedHex && hex.isAdjacentTo(selectedHex) && !_this.findUnitInLocation(hex)) {
                    return 'targetable';
                }
            }
            if (mode.type === 'attack') {
                if (selectedHex && attack_world_action_handler_1.canAttackOccur(mode.attackType, hex, selectedHex)) {
                    var unit = _this.findUnitInLocation(hex);
                    if (unit && unit.playerId !== playerId) {
                        return 'targetable';
                    }
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
        this.findUnitInLocation = function (hex) { return _this.worldState.findUnitInLocation(hex); };
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
var combined_state_methods_1 = __webpack_require__(/*! ../combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var TextsDisplayObject = /** @class */ (function () {
    function TextsDisplayObject(scene, worldState, localGameState, localActionDispatcher) {
        var _this = this;
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
            var e_1, _a;
            try {
                for (var _b = __values([_this.endTurnText, _this.actionText, _this.actionText2, _this.actionText3]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var gameObject = _c.value;
                    if (gameObject.getBounds().contains(point.x, point.y))
                        return true;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return false;
        };
        this.syncScene = function (worldState, localGameState) {
            var _a;
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
            if (player.endedTurn) {
                _this.endTurnText.setText('Waiting for next turn...');
            }
            else {
                _this.endTurnText.setText('End Turn (Shift + Enter)');
            }
            _this.defeatText.setVisible(player.defeated);
            _this.victoryText.setVisible(((_a = worldState.gameOverInfo) === null || _a === void 0 ? void 0 : _a.victor) === player.id);
            _this.worldLogText.setText(R.takeLast(30, _this.worldState.worldLog).join('\n'));
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
        this.scene = scene;
        this.worldState = worldState;
        this.localGameState = localGameState;
        this.localActionDispatcher = localActionDispatcher;
        var map = this.worldState.map;
        this.scene.add
            .image(36, 32, 'llama')
            .setScale(0.8)
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
            .text(700, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y, '', { fill: colours_1.ACTION_TEXT_COLOUR })
            .setInteractive()
            .on('pointerdown', function () { return _this.localActionDispatcher({ type: 'endTurn' }); })
            .on('pointerover', function () { return _this.endTurnText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.endTurnText.setFill(colours_1.ACTION_TEXT_COLOUR); });
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
        this.worldLogText = this.scene.add.text(960, 50, '');
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
        this.runMoveAnimation = function (from, to) { return __awaiter(_this, void 0, void 0, function () {
            var MOVE_ANIMATION_DURATION, beforeCoords, afterCoords, tween1, tween2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        MOVE_ANIMATION_DURATION = 500;
                        beforeCoords = game_scene_1.hexCenter(from);
                        afterCoords = game_scene_1.hexCenter(to);
                        this.image.setFlipX(afterCoords.x < beforeCoords.x);
                        tween1 = this.scene.tweens.create(__assign(__assign({ targets: this.image }, calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET)), { duration: MOVE_ANIMATION_DURATION, ease: 'Cubic' }));
                        tween2 = this.scene.tweens.create(__assign(__assign({ targets: this.healthBarGraphics }, calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET)), { duration: MOVE_ANIMATION_DURATION, ease: 'Cubic' }));
                        return [4 /*yield*/, Promise.all([tween_utils_1.playTween(tween1), tween_utils_1.playTween(tween2)])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.runDeathAnimation = function () { return __awaiter(_this, void 0, void 0, function () {
            var tween;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tween = this.scene.tweens.create({
                            targets: [this.image, this.healthBarGraphics],
                            alpha: { from: 1, to: 0 },
                            duration: 1000,
                            ease: 'Cubic',
                        });
                        return [4 /*yield*/, tween_utils_1.playTween(tween)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.runSpitAnimation = function (from, to) { return __awaiter(_this, void 0, void 0, function () {
            var fromPoint, toPoint, distance, image, tween;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromPoint = game_scene_1.hexCenter(from);
                        toPoint = game_scene_1.hexCenter(to);
                        distance = point_1.distanceBetweenPoints(fromPoint, toPoint);
                        image = this.scene.add.image(fromPoint.x, fromPoint.y, 'spit').setScale(0.8);
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
                            duration: distance * 4,
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
        this.runDamageAnimation = function (location, damage) { return __awaiter(_this, void 0, void 0, function () {
            var locationPoint, text, tween1, tween2;
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
                        tween1 = this.scene.tweens.create({
                            targets: text,
                            y: {
                                from: locationPoint.y - 50,
                                to: locationPoint.y - 75,
                            },
                            duration: 2000,
                            ease: 'Linear',
                        });
                        tween2 = this.scene.tweens.create({
                            targets: text,
                            alpha: { from: 1, to: 0 },
                            duration: 2000,
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
        this.runAttackAnimation = function (from, to) { return __awaiter(_this, void 0, void 0, function () {
            var beforeCoords, afterCoords, tween1, tween2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        beforeCoords = game_scene_1.hexCenter(from);
                        afterCoords = game_scene_1.hexCenter(to);
                        this.image.setFlipX(afterCoords.x < beforeCoords.x);
                        tween1 = this.scene.tweens.create(__assign(__assign({ targets: this.image }, calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET)), { duration: 400, ease: 'Cubic', yoyo: true }));
                        tween2 = this.scene.tweens.create(__assign(__assign({ targets: this.healthBarGraphics }, calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET)), { duration: 400, ease: 'Cubic', yoyo: true }));
                        return [4 /*yield*/, Promise.all([tween_utils_1.playTween(tween1), tween_utils_1.playTween(tween2)])];
                    case 1:
                        _a.sent();
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
        this.image = scene.add.image(0, 0, 'llama').setScale(0.8).setTint(this.getPlayerTint(this.unit.playerId));
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
var boot_scene_1 = __webpack_require__(/*! ../boot/boot-scene */ "./src/scenes/boot/boot-scene.ts");
var lobby_scene_1 = __webpack_require__(/*! ../lobby/lobby-scene */ "./src/scenes/lobby/lobby-scene.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var player_1 = __webpack_require__(/*! ../../world/player */ "./src/world/player.ts");
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
                        boot_scene_1.setUrlInfo({ gameId: gameId });
                        sceneData = { serverOrClient: server, worldState: server.worldState, playerId: playerId };
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
exports.canAttackOccur = function (attackType, from, to) {
    switch (attackType) {
        case 'melee':
            return from.isAdjacentTo(to);
        case 'spit':
            return from.distanceTo(to) <= 2;
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
            if (!exports.canAttackOccur(action.attackType, attacker.location, defender.location))
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
var Client = /** @class */ (function () {
    function Client(peerClient) {
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
        this.notifyListeners = function (event) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var listener = _c.value;
                    listener(event);
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
            _this.notifyListeners(event);
        };
        this.rejoin = function (playerId) { return __awaiter(_this, void 0, void 0, function () {
            var rejoinRequest, rejoinedResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rejoinRequest = { type: 'rejoin', playerId: playerId };
                        return [4 /*yield*/, this.peerClient.sendRequest(rejoinRequest)];
                    case 1:
                        rejoinedResponse = _a.sent();
                        return [2 /*return*/, world_state_1.WorldState.fromJson(rejoinedResponse.worldState)];
                }
            });
        }); };
        this.join = function () { return __awaiter(_this, void 0, void 0, function () {
            var joinRequest, joinedResponse, playerId, worldState;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        joinRequest = { type: 'join' };
                        return [4 /*yield*/, this.peerClient.sendRequest(joinRequest)];
                    case 1:
                        joinedResponse = _a.sent();
                        playerId = joinedResponse.playerId;
                        worldState = world_state_1.WorldState.fromJson(joinedResponse.worldState);
                        return [2 /*return*/, { playerId: playerId, worldState: worldState }];
                }
            });
        }); };
        this.sendAction = function (playerId, action) { return __awaiter(_this, void 0, void 0, function () {
            var message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        message = {
                            type: 'worldAction',
                            action: json_serialisation_1.serialiseToJson(action),
                            playerId: playerId,
                        };
                        return [4 /*yield*/, this.peerClient.sendRequest(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.peerClient = peerClient;
        peerClient.addListener(this.handleWorldEventMessage);
    }
    Client.connect = function (gameId) { return __awaiter(void 0, void 0, void 0, function () {
        var peerClient;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, peer_client_1.PeerClient.connect(gameId)];
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
                case 'broadcast':
                    _this.handleBroadcast(message);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(message);
            }
        };
        this.sendRequest = function (request) {
            return new Promise(function (resolve) {
                var requestMessage = {
                    type: 'request',
                    id: uuid_1.v4(),
                    request: request,
                };
                // console.log('CLIENT: sending request')
                // console.log(requestMessage)
                _this.connection.send(requestMessage);
                _this.outstandingRequests.set(requestMessage.id, resolve);
            });
        };
        this.handleResponse = function (message) {
            var requestId = message.responseTo;
            var resolve = _this.outstandingRequests.get(requestId);
            if (resolve) {
                resolve(message.response);
                _this.outstandingRequests.delete(requestId);
            }
            else {
                console.log("CLIENT: response received for unknown request " + requestId);
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
        return new Promise(function (resolve) {
            var peer = peer_utils_1.newPeer();
            peer.on('error', function (err) { return console.log(err); });
            peer.on('open', function () {
                // console.log('CLIENT: open')
                var connection = peer.connect(peerId, { reliable: true });
                connection.on('open', function () {
                    // console.log('CLIENT: connection open')
                    var client = new PeerClient(connection);
                    resolve(client);
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
            var response = _this.handleMessage(message.request);
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
        this.notifyListeners = function (event) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var listener = _c.value;
                    listener(event);
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
                // TODO: tell the client "bad luck"
            }
            else {
                var addPlayerAction = { type: 'addPlayer' };
                var playerAddedEvent = _this.handleAction(1, addPlayerAction)[0];
                return {
                    type: 'joined',
                    playerId: playerAddedEvent.playerId,
                    worldState: _this.worldState.toJson(),
                };
            }
        };
        this.handleClientRejoin = function (message) {
            var worldState = _this.worldState;
            if (worldState.isValidPlayerId(message.playerId))
                return {
                    type: 'rejoined',
                    worldState: worldState.toJson(),
                };
            else {
                // TODO: tell the client no
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
        this.worldEventDb = worldEventDb;
        this.gameId = gameId;
        this.peerServer = new peer_server_1.PeerServer(this.gameId, this.handleClientToServerMessage);
        this.worldStateOwner = new world_state_owner_1.WorldStateOwner(worldState, nextWorldEventId);
        this.worldStateOwner.addListener(function (event) {
            _this.notifyListeners(event);
            _this.worldEventDb.store(_this.gameId, event);
            var message = { type: 'worldEvent', event: json_serialisation_1.serialiseToJson(event) };
            _this.peerServer.broadcast(message);
        });
    }
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
            return _this.addNewTurnIfNeeded(events);
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
            var units = new world_generator_1.WorldGenerator(_this.worldState).generateUnits();
            return [{ id: _this.nextWorldEventId, type: 'gameStarted', units: units }];
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
        this.worldState = worldState;
        this.playerId = playerId;
        this.nextWorldEventId = nextWorldEventId;
    }
    WorldActionHandler.prototype.addNewTurnIfNeeded = function (events) {
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
        this.notifyListeners = function (event) {
            var e_1, _a;
            try {
                for (var _b = __values(_this.listeners), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var listener = _c.value;
                    listener(event);
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
                    _this.worldState = _this.worldState.applyEvent(event_1);
                    _this.notifyListeners(event_1);
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
            id: 1,
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
    return state.copy({ turn: 1, units: event.units }).addWorldLog('Let battle commence!');
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
    if (!attack_world_action_handler_1.canAttackOccur(event.attackType, attacker.location, defender.location))
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
var hex_1 = __webpack_require__(/*! ./hex */ "./src/world/hex.ts");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var WorldMap = /** @class */ (function () {
    function WorldMap(_a) {
        var _this = this;
        var width = _a.width, height = _a.height;
        this.isInBounds = function (hex) {
            var q = hex.x + Math.floor(hex.y / 2);
            return 0 <= q && q < _this.width && 0 <= hex.y && hex.y < _this.height;
        };
        this.toJson = function () { return ({ width: _this.width, height: _this.height }); };
        assert(width > 0);
        assert(height > 0);
        this.width = width;
        this.height = height;
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
    WorldMap.fromJson = function (json) { return new WorldMap({ width: json.width, height: json.height }); };
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
        this.newTurn = function () {
            return _this.copy({
                turn: _this.turn + 1,
                units: _this.units.map(function (unit) { return unit.refreshActionPoints(); }),
                players: _this.players.map(function (player) { return player.copy({ endedTurn: false }); }),
            });
        };
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
        });
    };
    return WorldState;
}());
exports.WorldState = WorldState;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb21iaW5lZC1zdGF0ZS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaGV4LWdlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2JieS9jcmVhdGVkLWxvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvbG9iYnktZGlzcGxheS1vYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvbG9iYnktc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2NhbC1nYW1lLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2Rpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2tleWJvYXJkLW1hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL21hcC1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS90ZXh0cy1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS91bml0LWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51L21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGVlci1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wZWVyLXNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BlZXItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXNlcmlhbGlzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbS11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2FjdGlvbi1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGl0LXBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC91bml0LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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O0NBQ25CLENBQUMsRUFIOEMsQ0FHOUM7QUFFVyxpQkFBUyxHQUFHLFVBQUMsS0FBWTtJQUNwQyxJQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0IsT0FBTyxLQUFLLENBQUMsSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxJQUFNLEtBQUssR0FBRyxVQUFDLEdBQVE7SUFDckIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLO1FBQUUsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQzNELElBQUksS0FBSyxHQUFHLEtBQUs7UUFBRSxPQUFPLElBQUksU0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7O1FBQy9DLE9BQU8sSUFBSSxTQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQzVCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUU3QixJQUFNLFNBQVMsR0FBRyxVQUFDLE1BQWEsRUFBRSxJQUFZLEVBQUUsQ0FBUztJQUN2RCxJQUFNLFlBQVksR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFNBQVM7SUFDN0MsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDbEQsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDbEQsT0FBTyxFQUFFLENBQUMsS0FBRSxDQUFDLEtBQUU7QUFDakIsQ0FBQztBQUVELFNBQWlCLFVBQVUsQ0FBQyxNQUFhLEVBQUUsSUFBWTs7Ozs7Z0JBQzVDLENBQUMsR0FBRyxDQUFDOzs7cUJBQUUsRUFBQyxHQUFHLENBQUM7Z0JBQ25CLHFCQUFNLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Z0JBQWhDLFNBQWdDOzs7Z0JBRFgsQ0FBQyxFQUFFOzs7OztDQUczQjtBQUpELGdDQUlDO0FBRVksaUJBQVMsR0FBRyxVQUFDLEdBQWEsSUFBYSxRQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFwQixDQUFvQjtBQUUzRCxnQkFBUSxHQUFHLFVBQUMsT0FBZSxJQUFhLGNBQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0MzRSxtR0FBNkM7QUFDN0MsNkdBQWtEO0FBQ2xELDRIQUEyRDtBQUMzRCx3R0FBZ0Q7QUFFaEQsa0JBQWUsQ0FBQyxzQkFBUyxFQUFFLHNCQUFTLEVBQUUsK0JBQWEsRUFBRSx3QkFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTGhFLHdGQUE0QztBQUM1Qyx3RkFBNEM7QUFHNUMsOEdBQXVFO0FBRXZFLDBGQUF5QztBQUN6QyxnSUFBNkQ7QUFJN0Q7SUFRRSwyQkFBWSxLQUFtQixFQUFFLGNBQStCLEVBQUUsUUFBa0IsRUFBRSxVQUFzQjtRQUE1RyxpQkFnQkM7UUFFTyw0QkFBdUIsR0FBRyxVQUFDLEtBQW1CLEVBQUUsUUFBa0I7WUFDeEUsV0FBSSwyQ0FBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLHNCQUFzQixDQUFDO1FBQTNGLENBQTJGO1FBRXJGLGdCQUFXLEdBQUcsVUFBQyxNQUFjO1lBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsVUFBQyxLQUFpQixJQUFLLFlBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQXBDLENBQW9DO1lBQzNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxDQUFDO1FBRU8scUJBQWdCLEdBQUcsVUFBQyxLQUFpQixFQUFFLE1BQWM7WUFDM0QsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbkQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNsQixLQUFLLGFBQWE7b0JBQ2hCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLFFBQVEsQ0FBQztvQkFDekMsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUztxQkFDMUI7b0JBQ0QsS0FBSSxDQUFDLGVBQWUsRUFBRTtvQkFDdEIsTUFBSztnQkFDUCxLQUFLLGFBQWE7b0JBQ2hCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLG1CQUFtQixDQUFDO29CQUNwRCxLQUFJLENBQUMsSUFBSSxFQUFFO29CQUNYLE1BQUs7Z0JBQ1A7b0JBQ0UsS0FBSSxDQUFDLElBQUksRUFBRTthQUNkO1FBQ0gsQ0FBQztRQUVPLHNCQUFpQixHQUFHLFVBQUMsS0FBaUIsRUFBRSxNQUFjO1lBQzVELEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ25ELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbEIsS0FBSyxhQUFhO29CQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxRQUFRLENBQUM7b0JBQ3pDLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNwQyxLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVM7cUJBQzFCO29CQUNELEtBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3RCLE1BQUs7Z0JBQ1AsS0FBSyxhQUFhO29CQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDcEQsS0FBSSxDQUFDLElBQUksRUFBRTtvQkFDWCxNQUFLO2dCQUNQO29CQUNFLEtBQUksQ0FBQyxJQUFJLEVBQUU7YUFDZDtRQUNILENBQUM7UUFDTyxvQkFBZSxHQUFHO1lBQ3hCLElBQU0sU0FBUyxHQUFrQjtnQkFDL0IsY0FBYyxFQUFFLEtBQUksQ0FBQyxjQUFjO2dCQUNuQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVU7Z0JBQzNCLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUTthQUN4QjtZQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywyQkFBYyxFQUFFLFNBQVMsQ0FBQztRQUNuRCxDQUFDO1FBRU8sMkJBQXNCLEdBQUcsVUFBQyxJQUFZLElBQVcsWUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLFFBQUUsQ0FBQyxFQUF2RCxDQUF1RDtRQUV4RyxtQkFBYyxHQUFHLFVBQUMsTUFBbUI7WUFDM0MsSUFBSSxLQUFJLENBQUMsY0FBYyxZQUFZLGVBQU0sRUFBRTtnQkFDekMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7YUFDdEQ7UUFDSCxDQUFDO1FBRU0sU0FBSSxHQUFHLGNBQVksWUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQTlDLENBQThDO1FBRWhFLGdCQUFXLEdBQUcsVUFBQyxNQUFjO1lBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsVUFBQyxLQUFLLElBQUssWUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBckMsQ0FBcUM7WUFDaEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLENBQUM7UUFFTyxvQkFBZSxHQUFHLGNBQU0sWUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUExQyxDQUEwQztRQTFGeEUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxzQkFBUyxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsc0JBQVMsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHNCQUFTLENBQUMsbUJBQW1CLENBQUM7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ3hFLElBQUksY0FBYyxZQUFZLGVBQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ2IsQ0FBQztJQTRFSCx3QkFBQztBQUFELENBQUM7QUFwR1ksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOUIsc0ZBQTZEO0FBQzdELCtGQUFpRDtBQUNqRCw2RUFBMEI7QUFFMUIsMEZBQXlDO0FBRXpDO0lBVUUsNkJBQ0UsS0FBbUIsRUFDbkIsUUFBa0IsRUFDbEIsV0FBeUIsRUFDekIsa0JBQTBDO1FBSjVDLGlCQWdCQztRQXBCZ0Isb0JBQWUsR0FBMkMsSUFBSSxHQUFHLEVBQUU7UUFzQjVFLG9CQUFlLEdBQUc7WUFDeEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxXQUFXLEVBQUU7UUFDcEIsQ0FBQztRQUVNLFNBQUksR0FBRyxVQUFDLFVBQXNCOzs7WUFDbkMsSUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQ25ELElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hFLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQzs7Z0JBQzFFLEtBQXVCLGtEQUFnQixtSUFBRTtvQkFBcEMsSUFBTSxRQUFRO29CQUNqQixXQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsMENBQUUsT0FBTyxHQUFFO2lCQUM5Qzs7Ozs7Ozs7O1lBQ0QsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDO29DQUMvRCxRQUFRO2dCQUNqQixJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztnQkFDN0MsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO3FCQUM5QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFO29CQUN6QixJQUFJLEVBQUUsU0FBUztvQkFDZixVQUFVLEVBQUUsR0FBRztvQkFDZixlQUFlLEVBQUUsUUFBUSxLQUFLLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztpQkFDcEUsQ0FBQztxQkFDRCxXQUFXLENBQUMsRUFBRSxDQUFDO3FCQUNmLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3RCLGNBQWMsRUFBRTtxQkFDaEIsRUFBRSxDQUFDLGFBQWEsRUFBRTtvQkFDakIsSUFBSSxRQUFRLEtBQUssS0FBSSxDQUFDLFFBQVEsRUFBRTt3QkFDOUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBUTt3QkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ3RCLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQXhDLENBQXdDO3lCQUN4RCxDQUFDO3FCQUNIO2dCQUNILENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDOzs7Z0JBbkJoRCxLQUF1QixrREFBZ0I7b0JBQWxDLElBQU0sUUFBUTs0QkFBUixRQUFRO2lCQW9CbEI7Ozs7Ozs7OztZQUNELElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDWCxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxFQUFFLEVBQVQsQ0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUM7O2dCQUN6RSxLQUFxQiw0Q0FBYSxvSEFBRTtvQkFBL0IsSUFBTSxNQUFNO29CQUNmLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ3RELFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFDO29CQUN4QyxDQUFDLElBQUksRUFBRTtpQkFDUjs7Ozs7Ozs7O1lBQ0QsSUFBSSxLQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDO1FBM0RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0I7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxJQUFJLFFBQVEsS0FBSyx1QkFBYyxFQUFFO1lBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx3QkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM5RjthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLHVDQUF1QyxDQUFDO1NBQy9GO0lBQ0gsQ0FBQztJQWtESCwwQkFBQztBQUFELENBQUM7QUE1RVksa0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZoQywwSEFBeUQ7QUFFNUMsdUJBQWUsR0FBRyxPQUFPO0FBUXRDLElBQU0sV0FBVyxHQUF1QztJQUN0RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLHVCQUFlO0NBQ3JCO0FBRUQ7SUFBZ0MsOEJBQVk7SUFDMUM7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQUVNLFlBQU0sR0FBRyxVQUFDLFNBQXlCO1lBQ2hDLGtCQUFjLEdBQTJCLFNBQVMsZUFBcEMsRUFBRSxRQUFRLEdBQWlCLFNBQVMsU0FBMUIsRUFBRSxVQUFVLEdBQUssU0FBUyxXQUFkLENBQWM7WUFDMUQsSUFBSSx1Q0FBaUIsQ0FBQyxLQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDbkUsQ0FBQzs7SUFMRCxDQUFDO0lBTUgsaUJBQUM7QUFBRCxDQUFDLENBVCtCLE1BQU0sQ0FBQyxLQUFLLEdBUzNDO0FBVFksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnZCLDhFQUFnRTtBQUVoRSxrRkFBaUM7QUFFakM7SUFNRSx3QkFBWSxFQVVYO1FBVkQsaUJBZ0JDO1lBZkMsUUFBUSxnQkFDUixJQUFJLFlBQ0osV0FBVyxtQkFDWCxvQ0FBZ0MsRUFBaEMsNEJBQTRCLG1CQUFHLENBQUM7UUFjM0IsU0FBSSxHQUFHLFVBQUMsRUFVVDtnQkFWUyxxQkFVWCxFQUFFLE9BVEosZ0JBQXdCLEVBQXhCLFFBQVEsbUJBQUcsS0FBSSxDQUFDLFFBQVEsT0FDeEIsWUFBZ0IsRUFBaEIsSUFBSSxtQkFBRyxLQUFJLENBQUMsSUFBSSxPQUNoQixtQkFBdUMsRUFBdkMsV0FBVyxtQkFBRyxlQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUN2QyxvQ0FBZ0UsRUFBaEUsNEJBQTRCLG1CQUFHLEtBQUksQ0FBQyw0QkFBNEI7WUFPaEUsV0FBSSxjQUFjLENBQUMsRUFBRSxRQUFRLFlBQUUsSUFBSSxRQUFFLFdBQVcsRUFBRSxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLDRCQUE0QixnQ0FBRSxDQUFDO1FBQXhHLENBQXdHO1FBRW5HLG1CQUFjLEdBQUcsVUFBQyxXQUF3QixJQUFxQixZQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLGVBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQWhELENBQWdEO1FBRS9HLFlBQU8sR0FBRyxVQUFDLElBQVUsSUFBcUIsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksUUFBRSxDQUFDLEVBQW5CLENBQW1CO1FBRTdELDBDQUFxQyxHQUFHO1lBQzdDLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSw0QkFBNEIsRUFBRSxLQUFJLENBQUMsNEJBQTRCLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFBbEYsQ0FBa0Y7UUFFN0UsMENBQXFDLEdBQUc7WUFDN0MsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLDRCQUE0QixFQUFFLEtBQUksQ0FBQyw0QkFBNEIsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUFsRixDQUFrRjtRQTVCbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFDOUIsSUFBSSxDQUFDLDRCQUE0QixHQUFHLDRCQUE0QjtRQUNoRSxNQUFNLENBQUMsNEJBQTRCLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUF3QkgscUJBQUM7QUFBRCxDQUFDO0FBOUNZLHdDQUFjO0FBZ0RkLGdDQUF3QixHQUFHLElBQUksY0FBYyxDQUFDO0lBQ3pELFFBQVEsRUFBRSxDQUFDO0lBQ1gsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtDQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REYsMkhBQXVEO0FBRXZELDhIQUF5RDtBQUN6RCxpSUFBa0Y7QUFJbEYsNkVBQTBCO0FBRTFCLG9JQUF3RTtBQUV4RSwwRkFBeUM7QUFDekMsbUdBQXNEO0FBNkJ0RDtJQVlFLHdCQUNFLEtBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLHFCQUE0QztRQUo5QyxpQkFpQkM7UUExQmdCLHVCQUFrQixHQUFtQyxJQUFJLEdBQUcsRUFBRTtRQUM5RCwrQkFBMEIsR0FBbUMsSUFBSSxHQUFHLEVBQUU7UUFHL0UsZ0JBQVcsR0FBWSxLQUFLO1FBRzVCLGVBQVUsR0FBb0IsRUFBRTtRQXFCakMsc0JBQWlCLEdBQUcsVUFBQyxLQUFZLHlCQUFXLEtBQUksQ0FBQyxnQkFBZ0IsMENBQUUsaUJBQWlCLENBQUMsS0FBSyxJQUFDO1FBRTNGLHVCQUFrQixHQUFHLFVBQUMsS0FBWSxJQUFjLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBakQsQ0FBaUQ7UUFFakcsY0FBUyxHQUFHLFVBQ2pCLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLFNBQWdDOztZQUVoQyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7WUFDNUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFjO1lBQ3BDLFdBQUksQ0FBQyxnQkFBZ0IsMENBQUUsU0FBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsRUFBQztZQUN0RSxXQUFJLENBQUMsa0JBQWtCLDBDQUFFLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxjQUFjLEVBQUM7WUFFeEUsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3RELEtBQUksQ0FBQyw2QkFBNkIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLHlCQUF5QixDQUFDO2dCQUNyRixLQUFJLENBQUMsaUJBQWlCLEVBQUU7YUFDekI7WUFFRCxLQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2xCLENBQUM7UUFFTyxjQUFTLEdBQUc7O1lBQ2xCLEtBQUksQ0FBQyxzQ0FBc0MsRUFBRTtZQUM3QyxJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssUUFBQyxLQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQzs7Z0JBQ3pHLEtBQW1CLHdDQUFXLDBHQUFFO29CQUEzQixJQUFNLElBQUk7b0JBQ2IsSUFBSSxpQkFBaUIsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQzVELElBQUksQ0FBQyxpQkFBaUIsRUFBRTt3QkFDdEIsaUJBQWlCLEdBQUcsSUFBSSx1Q0FBaUIsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDO3FCQUN4RDtvQkFDRCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2lCQUNsQzs7Ozs7Ozs7O1FBQ0gsQ0FBQztRQUVPLDJDQUFzQyxHQUFHOzs7WUFDL0MsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFDMUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxDQUFDLENBQzdDOztnQkFDRCxLQUFxQiw4Q0FBYyx5SEFBRTtvQkFBaEMsSUFBTSxNQUFNO29CQUNmLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLDBDQUFFLE9BQU8sR0FBRTtvQkFDOUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ3ZDOzs7Ozs7Ozs7UUFDSCxDQUFDO1FBRU8sc0JBQWlCLEdBQUc7WUFDMUIsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixPQUFNO2FBQ1A7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGlCQUFpQixFQUFFO2FBQ3pCO1FBQ0gsQ0FBQztRQUVPLHVCQUFrQixHQUFHOztZQUkzQixJQUFNLGtDQUFrQyxHQUFHLElBQUksR0FBRyxFQUFVO1lBQzVELElBQU0sc0JBQXNCLEdBQUcsRUFBRTtZQUNqQyxJQUFNLHdCQUF3QixHQUFHLEVBQUU7O2dCQUNuQyxLQUF3Qix1QkFBSSxDQUFDLFVBQVUsNkNBQUU7b0JBQXBDLElBQU0sU0FBUztvQkFDbEIsSUFBTSwwQkFBMEIsR0FBRyxLQUFJLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDO29CQUNoRixJQUFNLDJCQUEyQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQ3ZDLFVBQUMsTUFBTSxJQUFLLHlDQUFrQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBOUMsQ0FBOEMsRUFDMUQsMEJBQTBCLENBQzNCO29CQUNELElBQUksMkJBQTJCLEVBQUU7d0JBQy9CLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cUJBQ3pDO3lCQUFNO3dCQUNMLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cUJBQ3ZDOzt3QkFDRCxLQUFxQixxRkFBMEIsc0xBQUU7NEJBQTVDLElBQU0sTUFBTTs0QkFDZixrQ0FBa0MsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO3lCQUMvQzs7Ozs7Ozs7O2lCQUNGOzs7Ozs7Ozs7WUFDRCxPQUFPLEVBQUUsc0JBQXNCLDBCQUFFLHdCQUF3Qiw0QkFBRTtRQUM3RCxDQUFDO1FBRU8sc0JBQWlCLEdBQUc7Ozs7Ozt3QkFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJOzs7Ozs7NkJBRWQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFDekIsS0FBdUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQTlFLHNCQUFzQiw4QkFBRSx3QkFBd0IsK0JBQThCO3dCQUN0RixJQUFJLENBQUMsVUFBVSxHQUFHLHdCQUF3Qjt3QkFDMUMscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzt3QkFBaEUsU0FBZ0U7OzRCQUNoRSxLQUF3Qix5RUFBc0Isa0tBQUU7Z0NBQXJDLFNBQVM7Z0NBQ2xCLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxTQUFTLENBQUM7NkJBQ2pFOzs7Ozs7Ozs7Ozs7d0JBR0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLOzs7OzthQUUzQjtRQUVPLHFEQUFnRCxHQUFHLFVBQUMsU0FBd0I7WUFDbEYsSUFBTSxrQkFBa0IsR0FBRyxLQUFJLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDO1lBQ3hFLElBQU0sNEJBQTRCLEdBQUcsS0FBSSxDQUFDLDRCQUE0QixFQUFFO1lBQ3hFLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSw0QkFBNEIsQ0FBQztZQUN2RixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLDRCQUE0QixDQUFDO1FBQzdELENBQUM7UUFFTyw4QkFBeUIsR0FBRyxVQUFDLE1BQWM7WUFDakQsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekQsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUM7YUFDM0Q7UUFDSCxDQUFDO1FBRU8saUNBQTRCLEdBQUcsVUFBQyxNQUFjO1lBQ3BELElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxhQUFhO2dCQUFFLE1BQU0sZ0RBQThDLE1BQVE7WUFDaEYsS0FBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDOUMsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2pELElBQUksSUFBSSxFQUFFO2dCQUNSLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUM3QixLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLE9BQU8sRUFBRTthQUN4QjtRQUNILENBQUM7UUFFTyxpQ0FBNEIsR0FBRyxjQUFnQixRQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQTVELENBQTREO1FBRTNHLGtDQUE2QixHQUFHLFVBQUMsU0FBd0I7WUFDL0QsUUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFO2dCQUN0QixLQUFLLE1BQU07b0JBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLEtBQUssUUFBUTtvQkFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEU7UUFDSCxDQUFDO1FBRU8saUJBQVksR0FBRyxVQUFPLFNBQXdCOzs7Ozt3QkFDNUMsY0FBUyxDQUFDLElBQUk7O2lDQUNmLE1BQU0sQ0FBQyxDQUFQLHdCQUFNO2lDQUdOLFFBQVEsQ0FBQyxDQUFULHdCQUFROzs7NEJBRlgscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzs7d0JBQXRDLFNBQXNDO3dCQUN0Qyx3QkFBSzs0QkFFTCxxQkFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDOzt3QkFBeEMsU0FBd0M7d0JBQ3hDLHdCQUFLOzRCQUVMLE1BQU0sSUFBSSw2Q0FBb0IsQ0FBQyxTQUFTLENBQUM7Ozs7YUFFOUM7UUFFTyxxQkFBZ0IsR0FBRyxVQUFPLFNBQTRCOzs7Ozt3QkFDdEQsYUFBYSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzt3QkFDM0UsSUFBSSxDQUFDLGFBQWE7NEJBQUUsTUFBTSxnREFBOEMsU0FBUyxDQUFDLE1BQVE7d0JBQzFGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLElBQUksQ0FBQzt3QkFDckMscUJBQU0sYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQzs7d0JBQWxFLFNBQWtFOzs7O2FBQ25FO1FBRU8sdUJBQWtCLEdBQUcsVUFBTyxTQUE4Qjs7Ozs7d0JBQ3hELFFBQVEsR0FBZSxTQUFTLFNBQXhCLEVBQUUsUUFBUSxHQUFLLFNBQVMsU0FBZCxDQUFjO3dCQUNsQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQ2xGLElBQUksQ0FBQyxxQkFBcUI7NEJBQUUsTUFBTSxnREFBOEMsUUFBUSxDQUFDLE1BQVE7d0JBQzNGLHFCQUFxQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEYsSUFBSSxDQUFDLHFCQUFxQjs0QkFBRSxNQUFNLGdEQUE4QyxRQUFRLENBQUMsTUFBUTt3QkFDakcsSUFBSSxTQUFTLENBQUMsVUFBVSxLQUFLLE9BQU8sRUFBRTs0QkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUFhLENBQUMsQ0FBQyxzQkFBUyxDQUFDLFFBQVEsRUFBRSxzQkFBUyxDQUFDLFFBQVEsRUFBRSxzQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7eUJBQ25HOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLElBQUksQ0FBQzt5QkFDdEM7d0JBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7NEJBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLEtBQUssQ0FBQzt5QkFDdkM7d0JBQ0ssc0JBQXNCLEdBQW9CLEVBQUU7d0JBQ2xELElBQUksU0FBUyxDQUFDLFVBQVUsS0FBSyxPQUFPLEVBQUU7NEJBQ3BDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDNUc7NkJBQU07NEJBQ0wsc0JBQXNCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUMxRzt3QkFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7NEJBQ25CLHNCQUFzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3lCQUN2RTt3QkFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7NEJBQ25CLHNCQUFzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3lCQUN2RTt3QkFDRCxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDOzt3QkFBekMsU0FBeUM7d0JBQ3pDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDckcsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDOzs7O2FBQ3RHO1FBck1DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjO1FBQ3BDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUI7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkscUNBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN6RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSx5Q0FBa0IsQ0FDOUMsS0FBSyxFQUNMLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLHFCQUFxQixDQUMzQjtJQUNILENBQUM7SUEyTEgscUJBQUM7QUFBRCxDQUFDO0FBeE5ZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDM0IsMkVBQTBFO0FBRTFFLGdHQUF3RDtBQVV4RCxvSUFBd0U7QUFDeEUsaUZBQTJEO0FBQzNELDRHQUE4RTtBQUM5RSwwRkFBeUQ7QUFDekQsa0hBQW9EO0FBRXBELHVJQUFrRjtBQUNsRiw4SEFBeUQ7QUFFekQsNkhBQXFFO0FBRXJFLHdGQUE0QztBQUM1QyxrSEFBaUU7QUFJcEQsc0JBQWMsR0FBRyxNQUFNO0FBRXBDLElBQU0sV0FBVyxHQUF1QztJQUN0RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLHNCQUFjO0NBQ3BCO0FBUVksZ0JBQVEsR0FBRyxFQUFFO0FBQ2Isc0JBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtBQUNsQyxpQkFBUyxHQUFHLFVBQUMsR0FBUSxJQUFZLHdCQUFTLENBQUMscUJBQWEsQ0FBQywwQkFBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGdCQUFRLENBQUMsRUFBRSxzQkFBYyxDQUFDLEVBQXBFLENBQW9FO0FBSWxIO0lBQStCLDZCQUFZO0lBYXpDO1FBQUEsWUFDRSxrQkFBTSxXQUFXLENBQUMsU0FDbkI7UUFkTyxhQUFPLEdBQVksS0FBSztRQUd4QixnQkFBVSxHQUFlLHlDQUFtQjtRQUM1QyxvQkFBYyxHQUFtQiwyQ0FBd0I7UUFZakUsU0FBUztRQUNULFNBQVM7UUFFRixZQUFNLEdBQUcsVUFBQyxTQUF3QjtZQUN2QyxJQUFJLEtBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJO2FBQ3BCO1lBQ08sa0JBQWMsR0FBMkIsU0FBUyxlQUFwQyxFQUFFLFFBQVEsR0FBaUIsU0FBUyxTQUExQixFQUFFLFVBQVUsR0FBSyxTQUFTLFdBQWQsQ0FBYztZQUMxRCxLQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtZQUM1QixLQUFJLENBQUMsY0FBYyxHQUFHLDJDQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsWUFBRSxDQUFDO1lBQ2pFLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztZQUNwQyxJQUFJLGNBQWMsWUFBWSxlQUFNLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO2FBQ2pDO1lBRUQsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGdDQUFjLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDNUcsS0FBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzVCLEtBQUksQ0FBQyxXQUFXLEVBQUU7UUFDcEIsQ0FBQztRQUVPLGdCQUFVLEdBQUc7WUFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSztZQUM5QiwyQkFBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyxZQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztRQUN0RCxDQUFDO1FBRU0sZUFBUyxHQUFHLFVBQUMsU0FBeUIseUJBQzNDLEtBQUksQ0FBQyxjQUFjLDBDQUFFLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxJQUFDO1FBRWpGLGFBQWE7UUFDYixhQUFhO1FBRUwsaUJBQVcsR0FBRyxVQUFDLE1BQWM7WUFDbkMsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzNDLENBQUM7UUFFTyxpQkFBVyxHQUFHLFVBQUMsTUFBYztZQUNuQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN6QyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVO1FBQ3JDLENBQUM7UUFFTyx1QkFBaUIsR0FBRyxVQUFPLE1BQW1COzs7O3dCQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTs0QkFDeEIsTUFBTSxtQ0FBbUM7eUJBQzFDOzZCQUNHLEtBQUksQ0FBQyxjQUFjLFlBQVksZUFBTSxHQUFyQyx3QkFBcUM7d0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDOzs0QkFFdkQscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7O3dCQUEzRCxTQUEyRDs7Ozs7YUFFOUQ7UUFFRCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBRVQsaUJBQVcsR0FBRztZQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUNyQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUM7WUFDakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRCxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3RELENBQUM7UUFFTyxlQUFTLEdBQUcsVUFBQyxLQUFvQjtZQUN2QyxJQUFNLFdBQVcsR0FBRyxrQ0FBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckUsSUFBSSxXQUFXO2dCQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7UUFDdEQsQ0FBQztRQUVPLHVCQUFpQixHQUFHLFVBQUMsV0FBd0I7WUFDbkQsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLDZDQUFvQixDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQztZQUMzRixJQUFNLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3hELElBQUksTUFBTSxFQUFFO2dCQUNWLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7YUFDcEM7UUFDSCxDQUFDO1FBRU8sNEJBQXNCLEdBQUcsVUFBQyxNQUF5QjtZQUN6RCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtnQkFDNUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsaUJBQWlCO2dCQUM5QyxLQUFJLENBQUMsU0FBUyxFQUFFO2FBQ2pCO1lBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUN0QixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMscUNBQXFDLEVBQUU7Z0JBQ2pGLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBRWhCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUNqRCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMscUNBQXFDLEVBQUU7b0JBQ2pGLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLENBQUMsQ0FBQzthQUNIO1FBQ0gsQ0FBQztRQUVPLHVCQUFpQixHQUFHLFVBQUMsT0FBZ0I7O1lBQzNDLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDbkQsV0FBSSxDQUFDLGNBQWMsMENBQUUsaUJBQWlCLENBQUMsWUFBWSxFQUFDO1FBQ3RELENBQUM7UUFFTyx1QkFBaUIsR0FBRyxVQUFDLE9BQWdCOztZQUMzQyx5REFBeUQ7WUFDekQsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRTtZQUNuRCxVQUFJLEtBQUksQ0FBQyxjQUFjLDBDQUFFLGtCQUFrQixDQUFDLFlBQVksR0FBRztnQkFDekQsT0FBTTthQUNQO1lBQ0QsSUFBTSxHQUFHLEdBQUcsd0JBQVMsQ0FBQyxxQkFBYSxDQUFDLHNCQUFjLENBQUMsWUFBWSxFQUFFLHNCQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxDQUFDO1lBQ2hHLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFFLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7YUFDMUI7UUFDSCxDQUFDO1FBRU8sbUNBQTZCLEdBQUcsVUFBQyxHQUFRO1lBQy9DLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSTtZQUNyQyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLEtBQUssV0FBVztvQkFDZCxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQUU7Z0JBQ25DLEtBQUssVUFBVTtvQkFDYixPQUFPLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQUU7Z0JBQzNELEtBQUssUUFBUTtvQkFDWCxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTthQUMzRjtRQUNILENBQUM7UUFFTyxxQkFBZSxHQUFHLFVBQUMsR0FBUSxJQUFXLFlBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBL0QsQ0FBK0Q7UUFFN0csc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUVkLHNCQUFnQixHQUFHLFVBQUMsS0FBaUI7WUFDM0MsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLFVBQVU7WUFDckMsS0FBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUVqRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssWUFBWSxDQUFDO2dCQUNsQixLQUFLLGFBQWEsQ0FBQztnQkFDbkIsS0FBSyxtQkFBbUIsQ0FBQztnQkFDekIsS0FBSyxhQUFhO29CQUNoQixNQUFLO2dCQUNQLEtBQUssV0FBVztvQkFDZCxLQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQztvQkFDcEQsTUFBSztnQkFDUCxLQUFLLFFBQVE7b0JBQ1gsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUM7b0JBQ2pELE1BQUs7Z0JBQ1AsS0FBSyxpQkFBaUI7b0JBQ3BCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtvQkFDNUIsTUFBSztnQkFDUCxLQUFLLGdCQUFnQjtvQkFDbkIsS0FBSSxDQUFDLG9CQUFvQixFQUFFO29CQUMzQixNQUFLO2dCQUNQLEtBQUssVUFBVTtvQkFDYixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztvQkFDMUIsTUFBSztnQkFDUCxLQUFLLFNBQVM7b0JBQ1osS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDcEIsTUFBSztnQkFDUDtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsS0FBSyxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQztRQUVPLG9CQUFjLEdBQUcsVUFBQyxLQUF5QjtZQUNqRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pELEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsYUFBYSxDQUFDO2FBQ3pDO1lBQ0QsS0FBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQixDQUFDO1FBRU8sMkJBQXFCLEdBQUc7WUFDOUIsS0FBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQixDQUFDO1FBRU8sMEJBQW9CLEdBQUc7WUFDN0IsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxlQUFlLENBQUM7WUFDMUMsS0FBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQixDQUFDO1FBRU8sbUJBQWEsR0FBRztZQUN0QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFJLENBQUMscUJBQXFCLEVBQUU7UUFDOUIsQ0FBQztRQVdPLCtCQUF5QixHQUFHLFVBQUMsS0FBMEIsRUFBRSxhQUF5Qjs7WUFDaEYsVUFBTSxHQUFlLEtBQUssT0FBcEIsRUFBRSxJQUFJLEdBQVMsS0FBSyxLQUFkLEVBQUUsRUFBRSxHQUFLLEtBQUssR0FBVixDQUFVO1lBQ2xDLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNoRCxJQUFNLHFCQUFxQixHQUN6QixLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVc7Z0JBQy9CLG9CQUFhLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsMENBQUUsRUFBRSxNQUFLLE1BQU07WUFDbEYsSUFBSSxxQkFBcUIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzVELElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO2dCQUNqRixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUM3QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29CQUMzQixXQUFXLEVBQUUsZUFBTyxDQUFDLGNBQWMsQ0FBQztpQkFDckMsQ0FBQzthQUNIO1lBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFFLElBQUksUUFBRSxFQUFFLE1BQUUsQ0FBQztRQUNwRCxDQUFDO1FBRU8sK0NBQXlDLEdBQUcsVUFBQyxNQUFjLEVBQUUsZUFBb0I7WUFDdkYsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2pELCtIQUErSDtZQUMvSCxJQUFJLGNBQWM7WUFDbEIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQzVDLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsTUFBTSxDQUFDO2dCQUMvRSxjQUFjLEdBQUcsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFFBQVE7YUFDcEM7aUJBQU07Z0JBQ0wsY0FBYyxHQUFHLGVBQWU7YUFDakM7WUFDRCxPQUFPLGNBQWM7UUFDdkIsQ0FBQztRQUVPLDRCQUFzQixHQUFHLFVBQUMsS0FBdUIsRUFBRSxhQUF5QjtZQUMxRSxZQUFRLEdBQWUsS0FBSyxTQUFwQixFQUFFLFFBQVEsR0FBSyxLQUFLLFNBQVYsQ0FBVTtZQUNwQyxLQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUM7WUFDbEUsS0FBSSxDQUFDLFNBQVMsQ0FBQztnQkFDYixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7Z0JBQzVCLFFBQVE7Z0JBQ1IsUUFBUTthQUNULENBQUM7UUFDSixDQUFDO1FBRU8sZ0NBQTBCLEdBQUcsVUFDbkMsUUFBK0IsRUFDL0IsUUFBK0IsRUFDL0IsYUFBeUI7O1lBRXpCLElBQU0sd0JBQXdCLFNBQUcsSUFBSSxzQ0FBYSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsMENBQUUsRUFBRTtZQUM3RyxJQUFJLHdCQUF3QixLQUFLLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN2RixJQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMseUNBQXlDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUN6RyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUM3QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29CQUMzQixXQUFXLEVBQUUsZUFBTyxDQUFDLGNBQWMsQ0FBQztpQkFDckMsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLHlDQUF5QztnQkFDekMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssd0JBQXdCLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsUUFBUSxFQUFFO29CQUMxRyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO3dCQUM3QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dCQUMzQixXQUFXLEVBQUUsZUFBTztxQkFDckIsQ0FBQztpQkFDSDthQUNGO1FBQ0gsQ0FBQzs7SUFsUUQsQ0FBQztJQU5ELHNCQUFZLG9DQUFhO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLHNDQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBZ01PLHlDQUFxQixHQUE3QjtRQUNFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUNBQW1DLEVBQUU7UUFDN0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzNCLFdBQVcsRUFBRSxlQUFPLENBQUMsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLFFBQVEsQ0FBQztTQUM3QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNsQixDQUFDO0lBb0VELHNCQUFZLCtCQUFRO1FBSHBCLGVBQWU7UUFDZixlQUFlO2FBRWY7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUTtRQUNyQyxDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQXpSOEIsTUFBTSxDQUFDLEtBQUssR0F5UjFDO0FBelJZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUN0QiwyR0FBd0Q7QUFHM0Msd0JBQWdCLEdBQUcsVUFBQyxLQUFvQixFQUFFLElBQVU7SUFDL0QsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ2pCLEtBQUssV0FBVyxDQUFDO1FBQ2pCLEtBQUssR0FBRztZQUNOLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSw0QkFBWSxDQUFDLElBQUksRUFBRTtRQUNyRCxLQUFLLFlBQVksQ0FBQztRQUNsQixLQUFLLEdBQUc7WUFDTixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsNEJBQVksQ0FBQyxJQUFJLEVBQUU7UUFDckQsS0FBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLDRCQUFZLENBQUMsVUFBVSxFQUFFO1FBQzNELEtBQUssR0FBRztZQUNOLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSw0QkFBWSxDQUFDLFVBQVUsRUFBRTtRQUMzRCxLQUFLLEdBQUc7WUFDTixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsNEJBQVksQ0FBQyxVQUFVLEVBQUU7UUFDM0QsS0FBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLDRCQUFZLENBQUMsVUFBVSxFQUFFO1FBQzNELEtBQUssUUFBUTtZQUNYLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1FBQzFCLEtBQUssT0FBTztZQUNWLElBQUksS0FBSyxDQUFDLFFBQVE7Z0JBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDOUMsTUFBSztRQUNQLEtBQUssR0FBRztZQUNOLElBQUksS0FBSyxDQUFDLE9BQU87Z0JBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUNwRCxNQUFLO1FBQ1AsS0FBSyxHQUFHO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVc7Z0JBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDL0QsTUFBSztRQUNQLEtBQUssR0FBRztZQUNOLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXO2dCQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRTtZQUN0RixNQUFLO1FBQ1AsS0FBSyxHQUFHO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVc7Z0JBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO1lBQ3JGLE1BQUs7S0FDUjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0QsaUZBQWtEO0FBR2xELG9JQUF3RTtBQUd4RSw4SEFBeUQ7QUFPekQ7SUFJRSw4QkFBWSxVQUFzQixFQUFFLGNBQThCO1FBQWxFLGlCQUdDO1FBTU0sWUFBTyxHQUFHLFVBQUMsTUFBbUI7WUFDbkMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLElBQUk7b0JBQ1AsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLEtBQUssT0FBTztvQkFDVixPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDckMsS0FBSyxnQkFBZ0I7b0JBQ25CLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUNwQyxLQUFLLE9BQU87b0JBQ1YsT0FBTyxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMzQixLQUFLLFNBQVM7b0JBQ1osT0FBTyxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUM3QixLQUFLLGVBQWU7b0JBQ2xCLE9BQU8sS0FBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUNuQyxLQUFLLGlCQUFpQjtvQkFDcEIsT0FBTyxLQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDdEQsS0FBSyxjQUFjO29CQUNqQixPQUFPLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQzNELEtBQUssZ0JBQWdCO29CQUNuQixPQUFPLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDaEYsS0FBSyxXQUFXO29CQUNkLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUN6QztvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsTUFBTSxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQztRQUVPLHlCQUFvQixHQUFHO1lBQzdCLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUQsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsRUFBRSxDQUFDO1lBQzdGLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFNLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxjQUFjO3FCQUMxQyxjQUFjLENBQUMsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLFFBQVEsQ0FBQztxQkFDdEMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO2dCQUNqQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUU7YUFDaEQ7aUJBQU07Z0JBQ0wsT0FBTyxTQUFTO2FBQ2pCO1FBQ0gsQ0FBQztRQUVPLGdCQUFXLEdBQUc7WUFDcEIsUUFBUSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JDLEtBQUssV0FBVztvQkFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsZUFBTyxFQUFFLENBQUMsRUFBRTtnQkFDbEYsS0FBSyxRQUFRLENBQUM7Z0JBQ2QsS0FBSyxVQUFVO29CQUNiLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO2dCQUNsRjtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7YUFDM0Q7UUFDSCxDQUFDO1FBRU8sYUFBUSxHQUFHLFVBQUMsU0FBdUI7WUFDekMsSUFBTSxXQUFXLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXO1lBQ25ELElBQUksV0FBVztnQkFBRSxPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRU8sZ0JBQVcsR0FBRyxVQUFDLEdBQVEsSUFBZ0MsWUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUI7UUFFaEYsb0JBQWUsR0FBRyxVQUFDLEdBQVE7WUFDakMsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDMUQsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7aUJBQ3pDO2dCQUNELElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7Z0JBQ2xGLElBQUksVUFBVSxFQUFFO29CQUNkLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztpQkFDekQ7YUFDRjtRQUNILENBQUM7UUFFTyxjQUFTLEdBQUcsVUFBQyxVQUFzQixFQUFFLFFBQWMsRUFBRSxRQUFjLElBQXdCLFFBQUM7WUFDbEcsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRSxRQUFRO2dCQUNkLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQzlELFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFO2FBQy9EO1NBQ0YsQ0FBQyxFQVBpRyxDQU9qRztRQUVNLGNBQVMsR0FBRyxVQUFDLElBQVUsRUFBRSxXQUFnQixJQUF3QixRQUFDO1lBQ3hFLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNmLEVBQUUsRUFBRSxXQUFXO2FBQ2hCO1NBQ0YsQ0FBQyxFQU51RSxDQU12RTtRQUVNLGtCQUFhLEdBQUc7WUFDdEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO2FBQ3hFO1FBQ0gsQ0FBQztRQUVPLHdCQUFtQixHQUFHO1lBQzVCLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0QsSUFBTSxPQUFPLEdBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDbkU7UUFDSCxDQUFDO1FBRU8sMEJBQXFCLEdBQUcsVUFBQyxVQUFzQjtZQUNyRCxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO1lBQ2xELElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9ELElBQU0sT0FBTyxHQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLGNBQUU7Z0JBQzFGLElBQU0saUJBQWlCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUM5RCxPQUFPLEVBQUUsaUJBQWlCLHFCQUFFO2FBQzdCO1FBQ0gsQ0FBQztRQUVPLHVCQUFrQixHQUFHLFVBQUMsTUFBYyxFQUFFLFdBQWdCO1lBQzVELElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNoRCxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztRQUN0RyxDQUFDO1FBRU8seUJBQW9CLEdBQUcsVUFDN0IsTUFBYyxFQUNkLFNBQWMsRUFDZCxVQUFzQjtZQUV0QixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDcEQsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztZQUNyRixJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsT0FBTyxLQUFJLENBQUMsV0FBVyxFQUFFO2FBQzFCO1FBQ0gsQ0FBQztRQUVPLG9CQUFlLEdBQUcsVUFBQyxHQUFRO1lBQ2pDLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVztZQUNuRCxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4Qyx1REFBdUQ7Z0JBQ3ZELElBQUksV0FBVyxFQUFFO29CQUNmLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtpQkFDNUU7YUFDRjtpQkFBTSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRCxtREFBbUQ7Z0JBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTthQUM1RTtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7YUFDdEU7UUFDSCxDQUFDO1FBeEpDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7SUFDdEMsQ0FBQztJQUVELHNCQUFZLCtDQUFhO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLHNDQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBbUpILDJCQUFDO0FBQUQsQ0FBQztBQTlKWSxvREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJqQyxtR0FBa0U7QUFDbEUsMkVBQXNFO0FBQ3RFLGdHQUF1RDtBQUV2RCxpRkFNbUI7QUFLbkIsdUpBQXlFO0FBSXpFO0lBT0UsMEJBQVksS0FBbUIsRUFBRSxVQUFzQixFQUFFLGNBQThCOztRQUF2RixpQkFPQztRQVZnQixnQkFBVyxHQUE0QyxJQUFJLEdBQUcsRUFBc0M7UUFZN0csY0FBUyxHQUFHLFVBQUMsR0FBUTtZQUMzQixJQUFNLGFBQWEsR0FBRyxzQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUNwQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQVEsQ0FBQztZQUN4RCxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDO1FBQy9DLENBQUM7UUFPTSxjQUFTLEdBQUcsVUFBQyxVQUFzQixFQUFFLGNBQThCOztZQUN4RSxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7WUFDNUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFjOztnQkFDcEMsS0FBa0IsdUJBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSw2Q0FBRTtvQkFBaEQsSUFBTSxHQUFHO29CQUNaLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2lCQUNuQjs7Ozs7Ozs7O1FBQ0gsQ0FBQztRQUVELFNBQVM7UUFDVCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsYUFBYTtRQUVMLGFBQVEsR0FBRyxVQUFDLFNBQW9CO1lBQ3RDLFFBQVEsU0FBUyxFQUFFO2dCQUNqQixLQUFLLFNBQVM7b0JBQ1osT0FBTyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxZQUFZO29CQUNmLE9BQU8sQ0FBQyxDQUFDO2dCQUNYLEtBQUssVUFBVTtvQkFDYixPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0gsQ0FBQztRQUVPLGFBQVEsR0FBRyxVQUFDLEdBQVE7WUFDMUIsSUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztZQUM5QyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEgsQ0FBQztRQUVPLGtCQUFhLEdBQUcsVUFBQyxHQUFRO1lBQy9CLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTztnQkFBRSxNQUFNLDBCQUF3QixHQUFLO1lBQ2pELE9BQU8sT0FBTztRQUNoQixDQUFDO1FBRU8sdUJBQWtCLEdBQUcsVUFBQyxHQUFRO1lBQzlCLFNBQWtDLEtBQUksQ0FBQyxjQUFjLEVBQW5ELFFBQVEsZ0JBQUUsV0FBVyxtQkFBRSxJQUFJLFVBQXdCO1lBQzNELElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sVUFBVTthQUNsQjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQzVCLElBQUksV0FBVyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2pGLE9BQU8sWUFBWTtpQkFDcEI7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzFCLElBQUksV0FBVyxJQUFJLDRDQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ3BFLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7b0JBQ3pDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO3dCQUN0QyxPQUFPLFlBQVk7cUJBQ3BCO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLFNBQVM7UUFDbEIsQ0FBQztRQUVPLHVCQUFrQixHQUFHLFVBQUMsU0FBb0I7WUFDaEQsUUFBUSxTQUFTLEVBQUU7Z0JBQ2pCLEtBQUssU0FBUztvQkFDWixPQUFPLG9DQUEwQjtnQkFDbkMsS0FBSyxVQUFVO29CQUNiLE9BQU8scUNBQTJCO2dCQUNwQyxLQUFLLFlBQVk7b0JBQ2YsT0FBTyx1Q0FBNkI7YUFDdkM7UUFDSCxDQUFDO1FBRU8sNEJBQXVCLEdBQUcsVUFBQyxTQUFvQjtZQUNyRCxRQUFRLFNBQVMsRUFBRTtnQkFDakIsS0FBSyxTQUFTO29CQUNaLE9BQU8sMkJBQWlCO2dCQUMxQixLQUFLLFVBQVU7b0JBQ2IsT0FBTyxxQ0FBMkI7Z0JBQ3BDLEtBQUssWUFBWTtvQkFDZixPQUFPLHVDQUE2QjthQUN2QztRQUNILENBQUM7UUFFTyx1QkFBa0IsR0FBRyxVQUFDLEdBQVEsSUFBbUIsWUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBdkMsQ0FBdUM7UUFwRzlGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjOztZQUNwQyxLQUFrQixzQkFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLDZDQUFFO2dCQUFoRCxJQUFNLEdBQUc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDcEI7Ozs7Ozs7OztJQUNILENBQUM7SUFTTyxxQ0FBVSxHQUFsQixVQUFtQixNQUFhLEVBQUUsSUFBWTtRQUM1QyxJQUFNLFFBQVEsWUFBTyx5QkFBVSxDQUFDLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQW9GTSw0Q0FBaUIsR0FBeEIsVUFBeUIsWUFBbUI7UUFDMUMsSUFBTSxHQUFHLEdBQUcsd0JBQVMsQ0FBQyxxQkFBYSxDQUFDLHNCQUFjLENBQUMsWUFBWSxFQUFFLDJCQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcscUJBQVEsQ0FBQyxDQUFDO1FBQ2hHLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTTtRQUN0RSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7aUJBQ3BCLGNBQWMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3hGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHO1NBQzVCO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQztBQTdIWSw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCN0IsNkVBQTBCO0FBSTFCLGdHQUFxRDtBQUNyRCxpRkFBdUY7QUFDdkYsbUdBQXVEO0FBQ3ZELG9JQUF3RTtBQUd4RSw4SEFBeUQ7QUFHekQsMEZBQXlDO0FBS3pDO0lBcUJFLDRCQUNFLEtBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLHFCQUE0QztRQUo5QyxpQkF3RUM7UUFFTywwQkFBcUIsR0FBRztZQUM5QixJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7WUFDckMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLFdBQVc7b0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO29CQUN0QyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUM7b0JBQ3JELE1BQUs7Z0JBQ1AsS0FBSyxVQUFVLENBQUM7Z0JBQ2hCLEtBQUssUUFBUTtvQkFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxLQUFLLENBQUM7b0JBQ3RDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztvQkFDN0MsTUFBSztnQkFDUDtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsSUFBSSxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQztRQUVPLDJCQUFzQixHQUFHO1lBQy9CLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzdFO1FBQ0gsQ0FBQztRQUVPLDJCQUFzQixHQUFHO1lBQy9CLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzVFO1FBQ0gsQ0FBQztRQUVNLHVCQUFrQixHQUFHLFVBQUMsS0FBWTs7O2dCQUN2QyxLQUF5QixtQkFBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDO29CQUEzRixJQUFNLFVBQVU7b0JBQ25CLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQUUsT0FBTyxJQUFJO2lCQUFBOzs7Ozs7Ozs7WUFDcEUsT0FBTyxLQUFLO1FBQ2QsQ0FBQztRQUVNLGNBQVMsR0FBRyxVQUFDLFVBQXNCLEVBQUUsY0FBOEI7O1lBQ3hFLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtZQUM1QixLQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7WUFDcEMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwRCxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLEdBQUcsQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGdCQUFXLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBTSxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM1QixJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7WUFDckMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLFdBQVc7b0JBQ2QsS0FBSSxDQUFDLHFCQUFxQixFQUFFO29CQUM1QixNQUFLO2dCQUNQLEtBQUssVUFBVTtvQkFDYixLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsTUFBSztnQkFDUCxLQUFLLFFBQVE7b0JBQ1gsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDckQsTUFBSztnQkFDUDtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsSUFBSSxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQzthQUNyRDtZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQVUsQ0FBQyxZQUFZLDBDQUFFLE1BQU0sTUFBSyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzFFLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUM7UUFFTyx1QkFBa0IsR0FBRyxVQUFDLE1BQWMsRUFBRSxVQUFzQjtZQUNsRSxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxvQkFBaUIsVUFBVSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLHlCQUFxQixDQUFDO1FBQzNHLENBQUM7UUFFTyx5QkFBb0IsR0FBRyxVQUFDLE1BQWM7WUFDNUMsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsMENBQTBDLENBQUM7UUFDckUsQ0FBQztRQUVPLDBCQUFxQixHQUFHO1lBQzlCLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNELElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUM7b0JBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUNsRyxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDO29CQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztnQkFDdkcsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQztvQkFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7YUFDdEc7UUFDSCxDQUFDO1FBRU8sa0JBQWEsR0FBRyxVQUFDLFFBQWtCLElBQWEsWUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUF4QyxDQUF3QztRQUV4RixpQkFBWSxHQUFHLFVBQUMsSUFBVTtZQUN4QixRQUFJLEdBQXdDLElBQUksS0FBNUMsRUFBRSxRQUFRLEdBQThCLElBQUksU0FBbEMsRUFBRSxTQUFTLEdBQW1CLElBQUksVUFBdkIsRUFBRSxZQUFZLEdBQUssSUFBSSxhQUFULENBQVM7WUFDeEQsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDL0MsT0FBVSxJQUFJLDJCQUFzQixVQUFVLGNBQVMsU0FBUyxDQUFDLE9BQU8sU0FBSSxTQUFTLENBQUMsR0FBRyxtQkFBYyxZQUFZLENBQUMsT0FBTyxTQUFJLFlBQVksQ0FBQyxHQUFLO1FBQ25KLENBQUM7UUF2S0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7UUFDcEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQjtRQUNsRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQ1gsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDO2FBQ3RCLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDYixPQUFPLENBQUMsc0JBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUU3RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDdEMsMkJBQWMsQ0FBQyxDQUFDLEdBQUcsdUJBQVEsQ0FBQyxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxFQUN6Qyx3QkFBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHFCQUFRLEdBQUcsMkJBQWMsQ0FBQyxDQUFDLEVBQzVDLEVBQUUsQ0FDSDtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQzdCLElBQUksQ0FBQywyQkFBYyxDQUFDLENBQUMsR0FBRyx1QkFBUSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsd0JBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUSxHQUFHLDJCQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdEcsSUFBSSxFQUFFLDRCQUFrQjtTQUN6QixDQUFDO2FBQ0QsY0FBYyxFQUFFO2FBQ2hCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2FBQzdDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxZQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxrQ0FBd0IsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDO2FBQzFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxZQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyw0QkFBa0IsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQzlCLElBQUksQ0FBQywyQkFBYyxDQUFDLENBQUMsR0FBRyx1QkFBUSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsd0JBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUSxHQUFHLDJCQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdEcsSUFBSSxFQUFFLDRCQUFrQjtTQUN6QixDQUFDO2FBQ0QsY0FBYyxFQUFFO2FBQ2hCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2FBQzlDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQ0FBd0IsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO2FBQzNFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyw0QkFBa0IsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQzlCLElBQUksQ0FBQywyQkFBYyxDQUFDLENBQUMsR0FBRyx1QkFBUSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsd0JBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUSxHQUFHLDJCQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdEcsSUFBSSxFQUFFLDRCQUFrQjtTQUN6QixDQUFDO2FBQ0QsY0FBYyxFQUFFO2FBQ2hCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2FBQzlDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQ0FBd0IsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO2FBQzNFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyw0QkFBa0IsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsd0JBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUSxHQUFHLDJCQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSw0QkFBa0IsRUFBRSxDQUFDO2FBQ3pGLGNBQWMsRUFBRTthQUNoQixFQUFFLENBQUMsYUFBYSxFQUFFLGNBQU0sWUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQS9DLENBQStDLENBQUM7YUFDeEUsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFNLFlBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGtDQUF3QixDQUFDLEVBQWxELENBQWtELENBQUM7YUFDM0UsRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFNLFlBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLDRCQUFrQixDQUFDLEVBQTVDLENBQTRDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7YUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQVEsR0FBRywyQkFBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSx5QkFBeUIsRUFBRTtZQUN4RixNQUFNLEVBQUUsU0FBUztZQUNqQixlQUFlLEVBQUUsQ0FBQztTQUNuQixDQUFDO2FBQ0QsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUNkLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDZixVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ2pCLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7YUFDOUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7YUFDRCxTQUFTLENBQUMsR0FBRyxDQUFDO2FBQ2QsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUNmLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDakIsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBNUVELHNCQUFZLDZDQUFhO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLHNDQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBZ0xILHlCQUFDO0FBQUQsQ0FBQztBQW5NWSxnREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCL0IsbUdBQXdDO0FBQ3hDLGlGQUF3RztBQUN4RywyRUFBa0U7QUFDbEUsaUhBQXlEO0FBQ3pELGtGQUFpQztBQUdqQyxJQUFNLGdCQUFnQixHQUFHLEVBQUU7QUFDM0IsSUFBTSxpQkFBaUIsR0FBRyxFQUFFO0FBQzVCLElBQU0sMkJBQTJCLEdBQUcsQ0FBQztBQUNyQyxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUU1QztJQU1FLDJCQUFZLEtBQW1CLEVBQUUsSUFBVTtRQUEzQyxpQkFLQztRQUVPLGtCQUFhLEdBQUcsVUFBQyxRQUFrQjtZQUN6Qyw2QkFBWSxDQUFDLENBQUMsc0JBQVksQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLHNCQUFZLENBQUMsTUFBTSxDQUFDO1FBQXhFLENBQXdFO1FBRWxFLHlCQUFvQixHQUFHLFVBQUMsS0FBWSxJQUFZLHdCQUFTLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLEVBQW5DLENBQW1DO1FBRXBGLGNBQVMsR0FBRyxVQUFDLElBQVU7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ2hCLElBQU0sU0FBUyxHQUFHLHNCQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNsRixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDO1FBRU8sa0JBQWEsR0FBRyxVQUFDLFNBQWdCO1lBQ3ZDLElBQU0saUJBQWlCLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztZQUM5RCxLQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDNUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRTtZQUU5QixjQUFjO1lBQ2QsSUFBTSxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLDJCQUEyQjtZQUNyRSxJQUFNLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsMkJBQTJCO1lBQ3ZFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsOEJBQW9CLENBQUM7WUFDdEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO1lBRTFFLHdCQUF3QjtZQUN4QixLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLDZCQUFtQixDQUFDO1lBQ3JELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztZQUVsSCxjQUFjO1lBQ1IsU0FBbUIsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQXBDLE9BQU8sZUFBRSxHQUFHLFNBQXdCO1lBQzVDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsNEJBQWtCLENBQUM7WUFDcEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FDN0IsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQixDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQzVCLFdBQVcsQ0FDWjtRQUNILENBQUM7UUFFTSxxQkFBZ0IsR0FBRyxVQUFPLElBQVMsRUFBRSxFQUFPOzs7Ozt3QkFDM0MsdUJBQXVCLEdBQUcsR0FBRzt3QkFDN0IsWUFBWSxHQUFHLHNCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUM5QixXQUFXLEdBQUcsc0JBQVMsQ0FBQyxFQUFFLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0scUJBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxJQUNoQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxLQUM1RCxRQUFRLEVBQUUsdUJBQXVCLEVBQ2pDLElBQUksRUFBRSxPQUFPLElBQ2I7d0JBQ0ksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0scUJBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQzVCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsS0FDakUsUUFBUSxFQUFFLHVCQUF1QixFQUNqQyxJQUFJLEVBQUUsT0FBTyxJQUNiO3dCQUNGLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLHVCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7d0JBQXpELFNBQXlEOzs7O2FBQzFEO1FBRU0sc0JBQWlCLEdBQUc7Ozs7O3dCQUNuQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOzRCQUNyQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs0QkFDN0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsSUFBSTs0QkFDZCxJQUFJLEVBQUUsT0FBTzt5QkFDZCxDQUFDO3dCQUNGLHFCQUFNLHVCQUFTLENBQUMsS0FBSyxDQUFDOzt3QkFBdEIsU0FBc0I7Ozs7YUFDdkI7UUFFTSxxQkFBZ0IsR0FBRyxVQUFPLElBQVMsRUFBRSxFQUFPOzs7Ozt3QkFDM0MsU0FBUyxHQUFHLHNCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUMzQixPQUFPLEdBQUcsc0JBQVMsQ0FBQyxFQUFFLENBQUM7d0JBQ3ZCLFFBQVEsR0FBRyw2QkFBcUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO3dCQUNwRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO3dCQUM1RSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOzRCQUNyQyxPQUFPLEVBQUUsS0FBSzs0QkFDZCxDQUFDLEVBQUU7Z0NBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dDQUNqQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7NkJBQ2Q7NEJBQ0QsQ0FBQyxFQUFFO2dDQUNELElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQ0FDakIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzZCQUNkOzRCQUNELFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQzs0QkFDdEIsSUFBSSxFQUFFLE1BQU07eUJBQ2IsQ0FBQzt3QkFDRixxQkFBTSx1QkFBUyxDQUFDLEtBQUssQ0FBQzs7d0JBQXRCLFNBQXNCO3dCQUN0QixLQUFLLENBQUMsT0FBTyxFQUFFOzs7O2FBQ2hCO1FBRU0sdUJBQWtCLEdBQUcsVUFBTyxRQUFhLEVBQUUsTUFBYzs7Ozs7d0JBQ3hELGFBQWEsR0FBRyxzQkFBUyxDQUFDLFFBQVEsQ0FBQzt3QkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs2QkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUU7NEJBQ3pELEtBQUssRUFBRSxTQUFTOzRCQUNoQixNQUFNLEVBQUUsU0FBUzs0QkFDakIsZUFBZSxFQUFFLENBQUM7eUJBQ25CLENBQUM7NkJBQ0QsV0FBVyxDQUFDLEVBQUUsQ0FBQzs2QkFDZixTQUFTLENBQUMsR0FBRyxDQUFDO3dCQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQ3RDLE9BQU8sRUFBRSxJQUFJOzRCQUNiLENBQUMsRUFBRTtnQ0FDRCxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFO2dDQUMxQixFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFOzZCQUN6Qjs0QkFDRCxRQUFRLEVBQUUsSUFBSTs0QkFDZCxJQUFJLEVBQUUsUUFBUTt5QkFDZixDQUFDO3dCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQ3RDLE9BQU8sRUFBRSxJQUFJOzRCQUNiLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTs0QkFDekIsUUFBUSxFQUFFLElBQUk7NEJBQ2QsSUFBSSxFQUFFLFVBQVU7eUJBQ2pCLENBQUM7d0JBQ0YscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHVCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsdUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzt3QkFBekQsU0FBeUQ7d0JBQ3pELElBQUksQ0FBQyxPQUFPLEVBQUU7Ozs7YUFDZjtRQUVNLHVCQUFrQixHQUFHLFVBQU8sSUFBUyxFQUFFLEVBQU87Ozs7O3dCQUM3QyxZQUFZLEdBQUcsc0JBQVMsQ0FBQyxJQUFJLENBQUM7d0JBQzlCLFdBQVcsR0FBRyxzQkFBUyxDQUFDLEVBQUUsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxxQkFDckMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQ2hCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLEtBQzVELFFBQVEsRUFBRSxHQUFHLEVBQ2IsSUFBSSxFQUFFLE9BQU8sRUFDYixJQUFJLEVBQUUsSUFBSSxJQUNWO3dCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLHFCQUNyQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixJQUM1QixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDLEtBQ2pFLFFBQVEsRUFBRSxHQUFHLEVBQ2IsSUFBSSxFQUFFLE9BQU8sRUFDYixJQUFJLEVBQUUsSUFBSSxJQUNWO3dCQUNGLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLHVCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7d0JBQXpELFNBQXlEOzs7O2FBQzFEO1FBRU0sWUFBTyxHQUFHO1lBQ2YsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ3RCLENBQUM7UUF2SkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQy9DLENBQUM7SUFvSkgsd0JBQUM7QUFBRCxDQUFDO0FBL0pZLDhDQUFpQjtBQW1LOUIsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLElBQVcsRUFBRSxFQUFTLEVBQUUsTUFBYSxJQUFjLFFBQUM7SUFDNUUsQ0FBQyxFQUFFO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdkIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDcEI7SUFDRCxDQUFDLEVBQUU7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN2QixFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztLQUNwQjtDQUNGLENBQUMsRUFUMkUsQ0FTM0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xGLDhGQUFpQztBQUNqQywrRkFBaUQ7QUFFakQsd0ZBQTRDO0FBQzVDLHdHQUEwRDtBQUMxRCw2SEFBcUU7QUFDckUsb0dBQStDO0FBQy9DLHlHQUFzRTtBQUN0RSwwRkFBeUM7QUFDekMsc0ZBQW1EO0FBRXRDLDJCQUFtQixHQUFHLFVBQVU7QUFFN0MsSUFBTSxXQUFXLEdBQXVDO0lBQ3RELE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxHQUFHLEVBQUUsMkJBQW1CO0NBQ3pCO0FBRUQ7SUFBbUMsaUNBQVk7SUFDN0M7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQUVNLFlBQU0sR0FBRztZQUNkLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN6RSxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLO1lBQzlCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksd0JBQVUsQ0FBQyxLQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUU7Z0JBQzFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFTyxvQkFBYyxHQUFHOzs7OzRCQUNGLHFCQUFNLGlDQUFnQixFQUFFOzt3QkFBdkMsWUFBWSxHQUFHLFNBQXdCO3dCQUN2QyxNQUFNLEdBQVcsU0FBSSxFQUFFO3dCQUN2QixRQUFRLEdBQUcsdUJBQWM7d0JBQ3pCLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLHlDQUFtQixFQUFFLENBQUMsQ0FBQzt3QkFDdkUsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSx5Q0FBbUIsRUFBRSxDQUFDO3dCQUNqRix1QkFBVSxDQUFDLEVBQUUsTUFBTSxVQUFFLENBQUM7d0JBQ2hCLFNBQVMsR0FBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7d0JBQy9HLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDZCQUFlLEVBQUUsU0FBUyxDQUFDOzs7O2FBQzdDOztJQXJCRCxDQUFDO0lBc0JILG9CQUFDO0FBQUQsQ0FBQyxDQXpCa0MsTUFBTSxDQUFDLEtBQUssR0F5QjlDO0FBekJZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDZGIsYUFBSyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVMsSUFBWSxRQUFDLEVBQUUsQ0FBQyxLQUFFLENBQUMsS0FBRSxDQUFDLEVBQVYsQ0FBVTtBQUVuRCxxQkFBYSxHQUFHLFVBQUMsS0FBWSxFQUFFLENBQVMsSUFBWSxRQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQXBDLENBQW9DO0FBRXhGLGlCQUFTLEdBQUcsVUFBQyxNQUFhLEVBQUUsTUFBYSxJQUFZLFFBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFwRCxDQUFvRDtBQUV6RyxzQkFBYyxHQUFHLFVBQUMsTUFBYSxFQUFFLE1BQWEsSUFBWSxRQUFDO0lBQ3RFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0NBQ3ZCLENBQUMsRUFIcUUsQ0FHckU7QUFFRixJQUFNLE1BQU0sR0FBRyxVQUFDLENBQVMsSUFBYSxRQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUs7QUFFOUIsNkJBQXFCLEdBQUcsVUFBQyxNQUFhLEVBQUUsTUFBYTtJQUNoRSxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBcEUsQ0FBb0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnRFLDZFQUEwQjtBQU0xQixnR0FBd0Q7QUFHM0Msc0JBQWMsR0FBRyxVQUFDLFVBQXNCLEVBQUUsSUFBUyxFQUFFLEVBQU87SUFDdkUsUUFBUSxVQUFVLEVBQUU7UUFDbEIsS0FBSyxPQUFPO1lBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUM5QixLQUFLLE1BQU07WUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztLQUNsQztBQUNILENBQUM7QUFFRDtJQUtFLGtDQUFZLFVBQXNCLEVBQUUsUUFBa0IsRUFBRSxnQkFBd0I7UUFBaEYsaUJBSUM7UUFFTSxpQkFBWSxHQUFHLFVBQUMsTUFBeUI7WUFDeEMsU0FBeUIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBbEQsUUFBUSxnQkFBRSxRQUFRLGNBQWdDO1lBQ2xELGNBQVUsR0FBSyxNQUFNLFdBQVgsQ0FBVztZQUM3QixJQUFNLGlCQUFpQixHQUFHLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdDQUFrQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixJQUFNLGlCQUFpQixHQUFHLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdDQUFrQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RyxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO1lBQzlFLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7WUFDOUUsSUFBTSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQztZQUVsSCxJQUFJLGFBQWEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRSxJQUFNLE1BQU0sR0FBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQyxJQUFJLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDO1lBQ2hELElBQUksYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckQsSUFBTSxPQUFLLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUM7Z0JBQ2xCLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQUssQ0FBQzthQUNoRDtZQUNELElBQUksYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckQsSUFBTSxPQUFLLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUM7Z0JBQ2xCLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQUssQ0FBQzthQUNoRDtZQUNELElBQU0saUJBQWlCLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLElBQUssUUFBQyxNQUFNLENBQUMsUUFBUSxFQUFoQixDQUFnQixDQUFDO1lBQ3BGLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzFEO2lCQUFNLElBQUksaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDekMsSUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFFLENBQUM7YUFDbEU7WUFDRCxPQUFPLE1BQU07UUFDZixDQUFDO1FBRU8sd0JBQW1CLEdBQUcsVUFBQyxFQUFnQixFQUFFLFFBQWtCLElBQStCLFFBQUM7WUFDakcsRUFBRTtZQUNGLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxFQUpnRyxDQUloRztRQUVNLG1CQUFjLEdBQUcsVUFBQyxNQUF5QjtZQUNqRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDekMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRO2dCQUFFLE1BQU0sMkJBQXlCLFVBQVk7WUFDMUQsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLEtBQUksQ0FBQyxRQUFRO2dCQUFFLE1BQU0sMkNBQXlDLFFBQVEsQ0FBQyxFQUFJO1lBQ3JHLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQztnQkFBRSxNQUFNLG9DQUFvQztZQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQUUsTUFBTSxtQ0FBbUM7WUFFbEcsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ3pDLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUN6RCxJQUFJLENBQUMsUUFBUTtnQkFBRSxNQUFNLDJCQUF5QixVQUFZO1lBQzFELElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsUUFBUTtnQkFBRSxNQUFNLHdCQUF3QjtZQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQUUsTUFBTSxtQ0FBbUM7WUFFbEcsSUFBSSxDQUFDLHNCQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQzFFLE1BQU0saUNBQStCLE1BQU0sQ0FBQyxVQUFVLHVCQUFrQixRQUFRLENBQUMsUUFBUSxZQUFPLFFBQVEsQ0FBQyxRQUFRLG1CQUFnQjtZQUNuSSxPQUFPLEVBQUUsUUFBUSxZQUFFLFFBQVEsWUFBRTtRQUMvQixDQUFDO1FBRU8seUJBQW9CLEdBQUcsVUFDN0IsVUFBc0IsRUFDdEIsUUFBYyxFQUNkLGNBQXNCLEVBQ3RCLFFBQWMsRUFDZCxjQUFzQixJQUNELFFBQUM7WUFDdEIsRUFBRSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0I7WUFDekIsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVO1lBQ1YsUUFBUSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtnQkFDM0IsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7Z0JBQzNCLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssY0FBYzthQUN0RDtZQUNELFFBQVEsRUFBRTtnQkFDUixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7Z0JBQzNCLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO2dCQUMzQixNQUFNLEVBQUUsY0FBYztnQkFDdEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxLQUFLLGNBQWM7YUFDdEQ7WUFDRCxvQkFBb0IsRUFBRSxDQUFDO1NBQ3hCLENBQUMsRUFuQnFCLENBbUJyQjtRQXZGQSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0I7SUFDMUMsQ0FBQztJQXFGSCwrQkFBQztBQUFELENBQUM7QUE5RlksNERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckMscUhBQWlGO0FBRWpGLDRGQUEwQztBQUMxQyxrR0FBaUQ7QUFJakQ7SUFxQkUsZ0JBQVksVUFBc0I7UUFBbEMsaUJBR0M7UUF0QmdCLGNBQVMsR0FBeUIsRUFBRTtRQUU5QyxnQkFBVyxHQUFHLFVBQUMsUUFBNEI7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLENBQUM7UUFFTSxtQkFBYyxHQUFHLFVBQUMsUUFBNEI7WUFDbkQsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDO1FBRU8sb0JBQWUsR0FBRyxVQUFDLEtBQWlCOzs7Z0JBQzFDLEtBQXVCLHVCQUFJLENBQUMsU0FBUyw2Q0FBRTtvQkFBbEMsSUFBTSxRQUFRO29CQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUNoQjs7Ozs7Ozs7O1FBQ0gsQ0FBQztRQU9PLDRCQUF1QixHQUFHLFVBQUMsT0FBMEI7WUFDM0QsSUFBTSxLQUFLLEdBQUcsd0NBQW1CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNoRCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBT00sV0FBTSxHQUFHLFVBQU8sUUFBa0I7Ozs7O3dCQUNqQyxhQUFhLEdBQWtCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLFlBQUU7d0JBQ3RCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzs7d0JBQXJGLGdCQUFnQixHQUFxQixTQUFnRDt3QkFDM0Ysc0JBQU8sd0JBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDOzs7YUFDeEQ7UUFFTSxTQUFJLEdBQUc7Ozs7O3dCQUNOLFdBQVcsR0FBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO3dCQUNWLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQzs7d0JBQS9FLGNBQWMsR0FBbUIsU0FBOEM7d0JBQy9FLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUTt3QkFDbEMsVUFBVSxHQUFHLHdCQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7d0JBQ2pFLHNCQUFPLEVBQUUsUUFBUSxZQUFFLFVBQVUsY0FBRTs7O2FBQ2hDO1FBRU0sZUFBVSxHQUFHLFVBQU8sUUFBa0IsRUFBRSxNQUFtQjs7Ozs7d0JBQzFELE9BQU8sR0FBdUI7NEJBQ2xDLElBQUksRUFBRSxhQUFhOzRCQUNuQixNQUFNLEVBQUUsb0NBQWUsQ0FBQyxNQUFNLENBQUM7NEJBQy9CLFFBQVEsRUFBRSxRQUFRO3lCQUNuQjt3QkFDRCxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7O3dCQUExQyxTQUEwQzs7OzthQUMzQztRQW5DQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEQsQ0FBQztJQU9hLGNBQU8sR0FBRyxVQUFPLE1BQWM7Ozs7d0JBQ3hCLHFCQUFNLHdCQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7b0JBQTdDLFVBQVUsR0FBRyxTQUFnQztvQkFDbkQsc0JBQU8sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDOzs7U0FDOUI7SUF3QkgsYUFBQztDQUFBO0FBMURZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQm5CLDhGQUFpQztBQVNqQyxpSUFBcUU7QUFHckUseUZBQXNDO0FBTXRDO0lBS0Usb0JBQVksVUFBK0I7UUFBM0MsaUJBR0M7UUFOZ0Isd0JBQW1CLEdBQWlDLElBQUksR0FBRyxFQUFFO1FBQzdELGNBQVMsR0FBbUIsRUFBRTtRQU92Qyx5QkFBb0IsR0FBRyxVQUFDLE9BQStCO1lBQzdELDBDQUEwQztZQUMxQyx1QkFBdUI7WUFDdkIsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNwQixLQUFLLFVBQVU7b0JBQ2IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7b0JBQzVCLE1BQUs7Z0JBQ1AsS0FBSyxXQUFXO29CQUNkLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO29CQUM3QixNQUFLO2dCQUNQO29CQUNFLE1BQU0sSUFBSSw2Q0FBb0IsQ0FBQyxPQUFPLENBQUM7YUFDMUM7UUFDSCxDQUFDO1FBaUJNLGdCQUFXLEdBQUcsVUFBQyxPQUFZO1lBQ2hDLFdBQUksT0FBTyxDQUFNLFVBQUMsT0FBcUI7Z0JBQ3JDLElBQU0sY0FBYyxHQUFvQjtvQkFDdEMsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsRUFBRSxFQUFFLFNBQUksRUFBRTtvQkFDVixPQUFPLEVBQUUsT0FBTztpQkFDakI7Z0JBQ0QseUNBQXlDO2dCQUN6Qyw4QkFBOEI7Z0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQztZQUMxRCxDQUFDLENBQUM7UUFWRixDQVVFO1FBRUksbUJBQWMsR0FBRyxVQUFDLE9BQXlCO1lBQ2pELElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVO1lBQ3BDLElBQU0sT0FBTyxHQUF5QixLQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUM3RSxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDekIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBaUQsU0FBVyxDQUFDO2FBQzFFO1FBQ0gsQ0FBQztRQUVNLGdCQUFXLEdBQUcsVUFBQyxRQUFzQjtZQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsQ0FBQztRQUVNLG1CQUFjLEdBQUcsVUFBQyxRQUFzQjtZQUM3QyxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUM7UUFFTyxvQkFBZSxHQUFHLFVBQUMsT0FBWTs7O2dCQUNyQyxLQUF1Qix1QkFBSSxDQUFDLFNBQVMsNkNBQUU7b0JBQWxDLElBQU0sUUFBUTtvQkFDakIsUUFBUSxDQUFDLE9BQU8sQ0FBQztpQkFDbEI7Ozs7Ozs7OztRQUNILENBQUM7UUFFTyxvQkFBZSxHQUFHLFVBQUMsT0FBMEI7WUFDbkQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3BDLENBQUM7UUE3RUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNsRCxDQUFDO0lBaUJhLGtCQUFPLEdBQUcsVUFBQyxNQUFjO1FBQ3JDLFdBQUksT0FBTyxDQUFhLFVBQUMsT0FBTztZQUM5QixJQUFNLElBQUksR0FBRyxvQkFBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxJQUFLLGNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUM7WUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsOEJBQThCO2dCQUM5QixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDM0QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQ3BCLHlDQUF5QztvQkFDekMsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDO29CQUN6QyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUNqQixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFaRixDQVlFO0lBOENOLGlCQUFDO0NBQUE7QUFwRlksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCdkIseUZBQXNDO0FBMkJ0QztJQUtFLG9CQUFZLEVBQVUsRUFBRSxhQUFvQztRQUE1RCxpQkFLQztRQVJnQixnQkFBVyxHQUEwQixFQUFFO1FBVWhELHdCQUFtQixHQUFHLFVBQUMsVUFBK0I7WUFDNUQseUVBQXlFO1lBQ3pFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVNLGNBQVMsR0FBRyxVQUFDLE9BQVk7O1lBQzlCLElBQU0sZ0JBQWdCLEdBQXNCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOztnQkFDaEYsS0FBeUIsdUJBQUksQ0FBQyxXQUFXO29CQUFwQyxJQUFNLFVBQVU7b0JBQXNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7aUJBQUE7Ozs7Ozs7OztRQUM5RSxDQUFDO1FBRU8seUJBQW9CLEdBQUcsVUFBQyxVQUErQixJQUFLLGlCQUFDLE9BQStCO1lBQ2xHLHNFQUFzRTtZQUN0RSx1QkFBdUI7WUFDdkIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3BELElBQU0sZUFBZSxHQUFxQjtnQkFDeEMsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDdEIsUUFBUTthQUNUO1lBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDbEMsQ0FBQyxFQVZtRSxDQVVuRTtRQTNCQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3RELENBQUM7SUF3QkgsaUJBQUM7QUFBRCxDQUFDO0FBbENZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJWLGVBQU8sR0FBRyxVQUFDLEVBQVcsRUFBRSxPQUEyQjtJQUM5RCxJQUFNLEtBQUssR0FBSSxNQUFjLENBQUMsSUFBbUI7SUFDakQsT0FBTyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDO0FBQy9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xELDZFQUEwQjtBQUMxQiw4R0FBeUU7QUFHekUscUhBQWlGO0FBQ2pGLGlJQUFxRTtBQUtyRSwwSEFBa0U7QUFFbEUsNEZBQTBDO0FBRTFDO0lBb0NFLGdCQUFZLFlBQTBCLEVBQUUsTUFBYyxFQUFFLFVBQXNCLEVBQUUsZ0JBQThCO1FBQTlHLGlCQVdDO1FBMUNnQixjQUFTLEdBQXlCLEVBQUU7UUFjOUMsZ0JBQVcsR0FBRyxVQUFDLFFBQTRCO1lBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixDQUFDO1FBRU0sbUJBQWMsR0FBRyxVQUFDLFFBQTRCO1lBQ25ELElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUM5QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDZCxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ2hDO1FBQ0gsQ0FBQztRQUVPLG9CQUFlLEdBQUcsVUFBQyxLQUFpQjs7O2dCQUMxQyxLQUF1Qix1QkFBSSxDQUFDLFNBQVMsNkNBQUU7b0JBQWxDLElBQU0sUUFBUTtvQkFDakIsUUFBUSxDQUFDLEtBQUssQ0FBQztpQkFDaEI7Ozs7Ozs7OztRQUNILENBQUM7UUFlTyxxQkFBZ0IsR0FBRztZQUN6QixJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO2dCQUNsQyxtQ0FBbUM7YUFDcEM7aUJBQU07Z0JBQ0wsSUFBTSxlQUFlLEdBQXlCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFDbkUsSUFBTSxnQkFBZ0IsR0FBMEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4RixPQUFPO29CQUNMLElBQUksRUFBRSxRQUFRO29CQUNkLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRO29CQUNuQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUU7aUJBQ3JDO2FBQ0Y7UUFDSCxDQUFDO1FBRU8sdUJBQWtCLEdBQUcsVUFBQyxPQUFzQjtZQUNsRCxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVTtZQUNsQyxJQUFJLFVBQVUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDOUMsT0FBTztvQkFDTCxJQUFJLEVBQUUsVUFBVTtvQkFDaEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxNQUFNLEVBQUU7aUJBQ2hDO2lCQUNFO2dCQUNILDJCQUEyQjthQUM1QjtRQUNILENBQUM7UUFFTyxnQ0FBMkIsR0FBRyxVQUFDLE9BQXNCO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3BCLFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRTtnQkFDcEIsS0FBSyxNQUFNO29CQUNULE9BQU8sS0FBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUNoQyxLQUFLLFFBQVE7b0JBQ1gsT0FBTyxLQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxLQUFLLGFBQWE7b0JBQ2hCLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsd0NBQW1CLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4RixNQUFLO2dCQUNQO29CQUNFLE1BQU0sSUFBSSw2Q0FBb0IsQ0FBQyxPQUFPLENBQUM7YUFDMUM7UUFDSCxDQUFDO1FBRU0saUJBQVksR0FBRyxVQUFDLFFBQWtCLEVBQUUsTUFBbUI7WUFDNUQsWUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztRQUFuRCxDQUFtRDtRQXREbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksd0JBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQywyQkFBMkIsQ0FBQztRQUMvRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksbUNBQWUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7UUFDeEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsVUFBQyxLQUFpQjtZQUNqRCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztZQUMzQixLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQztZQUMzQyxJQUFNLE9BQU8sR0FBc0IsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxvQ0FBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hGLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBdkNELHNCQUFXLDhCQUFVO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVU7UUFDeEMsQ0FBQzs7O09BQUE7SUFFYSxrQkFBVyxHQUFHLFVBQU8sWUFBMEIsRUFBRSxNQUFjOzs7O3dCQUM1RCxxQkFBTSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDOztvQkFBcEQsTUFBTSxHQUFHLFNBQTJDO29CQUNwRCxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFLLENBQUMsRUFBRSxFQUFSLENBQVEsRUFBRSxNQUFNLENBQUM7b0JBQ3BELFVBQVUsR0FBRyx5Q0FBbUIsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDO29CQUNoRSxzQkFBTyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7O1NBQ3ZFO0lBMkVILGFBQUM7Q0FBQTtBQTVGWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQ2RuQiw2RUFBMEI7QUFvQjFCLG1GQUFrRTtBQUNsRSx3R0FBa0Q7QUFDbEQsNElBQXdFO0FBRXhFO0lBS0UsNEJBQVksVUFBc0IsRUFBRSxRQUFrQixFQUFFLGdCQUF3QjtRQUFoRixpQkFJQztRQUVNLHlCQUFvQixHQUFHLFVBQUMsTUFBbUI7WUFDaEQsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQztZQUN4RCxPQUFPLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7UUFDeEMsQ0FBQztRQWtCTyxpQ0FBNEIsR0FBRyxVQUFDLE1BQW1CO1lBQ3pELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDbkIsS0FBSyxZQUFZO29CQUNmLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztnQkFDdEMsS0FBSyxXQUFXO29CQUNkLE9BQU8sS0FBSSxDQUFDLGVBQWUsRUFBRTtnQkFDL0IsS0FBSyxrQkFBa0I7b0JBQ3JCLE9BQU8sS0FBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQztnQkFDNUMsS0FBSyxXQUFXO29CQUNkLE9BQU8sS0FBSSxDQUFDLGVBQWUsRUFBRTtnQkFDL0IsS0FBSyxRQUFRO29CQUNYLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLEtBQUssVUFBVTtvQkFDYixPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO2dCQUNwQyxLQUFLLFNBQVM7b0JBQ1osT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUNwQztRQUNILENBQUM7UUFFTyxxQkFBZ0IsR0FBRyxVQUFDLE1BQTZCO1lBQ3ZELElBQUksS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsRUFBRTtnQkFDN0IsTUFBTSx3Q0FBd0M7YUFDL0M7WUFDRCxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqRixDQUFDO1FBRU8sb0JBQWUsR0FBRztZQUN4QixJQUFNLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQ3hELElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7WUFDekQsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFFBQVEsWUFBRSxDQUFDO1FBQ3ZFLENBQUM7UUFFTywyQkFBc0IsR0FBRyxVQUFDLE1BQW1DO1lBQ25FLEtBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvRyxDQUFDO1FBRU8sb0JBQWUsR0FBRztZQUN4QixJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO2dCQUNsQyxNQUFNLHNDQUFzQzthQUM3QztZQUNELElBQUksS0FBSSxDQUFDLFFBQVEsS0FBSyx1QkFBYyxFQUFFO2dCQUNwQyxNQUFNLHVDQUF1QzthQUM5QztZQUNELElBQU0sS0FBSyxHQUFHLElBQUksZ0NBQWMsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ2pFLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLFNBQUUsQ0FBQztRQUNwRSxDQUFDO1FBRU8saUJBQVksR0FBRyxVQUFDLE1BQXlCO1lBQy9DLFdBQUksc0RBQXdCLENBQUMsS0FBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFBeEcsQ0FBd0c7UUFFbEcsbUJBQWMsR0FBRyxVQUFDLE1BQTJCO1lBQzNDLFVBQU0sR0FBUyxNQUFNLE9BQWYsRUFBRSxFQUFFLEdBQUssTUFBTSxHQUFYLENBQVc7WUFDN0IsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2pELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsTUFBTSwyQkFBeUIsTUFBUTthQUN4QztZQUNELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQixNQUFNLHNEQUFvRCxJQUFJLFlBQU8sRUFBSTthQUMxRTtZQUNELElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sZ0RBQThDLEVBQUk7YUFDekQ7WUFDRCxJQUFJLEtBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFDLE1BQU0sK0NBQStDO2FBQ3REO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLE1BQU0sa0NBQWtDO2FBQ3pDO1lBQ0QsT0FBTztnQkFDTDtvQkFDRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGdCQUFnQjtvQkFDekIsSUFBSSxFQUFFLFdBQVc7b0JBQ2pCLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUTtvQkFDdkIsb0JBQW9CLEVBQUUsQ0FBQztvQkFDdkIsTUFBTTtvQkFDTixJQUFJO29CQUNKLEVBQUU7aUJBQ0g7YUFDRjtRQUNILENBQUM7UUFFTyxrQkFBYSxHQUFHLFVBQUMsTUFBMEI7WUFDakQsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO2dCQUN4QyxNQUFNLCtDQUErQzthQUN0RDtZQUNELElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNwQixNQUFNLHFDQUFxQzthQUM1QztZQUNELElBQU0scUJBQXFCLEdBQThCO2dCQUN2RCxFQUFFLEVBQUUsS0FBSSxDQUFDLGdCQUFnQjtnQkFDekIsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRO2FBQ3hCO1lBQ0QsT0FBTyxDQUFDLHFCQUFxQixDQUFDO1FBQ2hDLENBQUM7UUFFTyxjQUFTLEdBQUc7WUFDbEIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE1BQU0sdUJBQXFCLEtBQUksQ0FBQyxRQUFVO2FBQzNDO1lBQ0QsT0FBTyxNQUFNO1FBQ2YsQ0FBQztRQW5JQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0I7SUFDMUMsQ0FBQztJQU9PLCtDQUFrQixHQUExQixVQUEyQixNQUFvQjtRQUM3QyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDM0IsT0FBTyxFQUFFO1NBQ1Y7YUFBTTtZQUNMLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUN6RCxJQUFJLGFBQWEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZFLE9BQU8sTUFBTTthQUNkO2lCQUFNO2dCQUNMLElBQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUN6QyxJQUFNLFlBQVksR0FBc0IsRUFBRSxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtnQkFDakYsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUM7YUFDdEM7U0FDRjtJQUNILENBQUM7SUE0R0gseUJBQUM7QUFBRCxDQUFDO0FBMUlZLGdEQUFrQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCL0IsNkVBQTRDO0FBRTVDLGdHQUFtRDtBQUNuRCw2RUFBMEI7QUFDMUIsd0dBQXFEO0FBQ3JELCtGQUErQztBQUcvQyxJQUFNLFdBQVcsR0FBRztJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULE1BQU07SUFDTixTQUFTO0NBQ1Y7QUFFRDtJQUtFLHdCQUFZLFVBQXNCO1FBQWxDLGlCQUdDO1FBTE8sZUFBVSxHQUFXLENBQUM7UUFPdEIsaUJBQVksR0FBRyxVQUFDLFFBQWtCO1lBQ3hDLElBQU0sRUFBRSxHQUFHLEtBQUksQ0FBQyxVQUFVLEVBQUU7WUFDNUIsSUFBTSxRQUFRLEdBQUcsMkJBQWEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUM7WUFDaEUsSUFBTSxJQUFJLEdBQUcsMkJBQWEsQ0FBQyxXQUFXLENBQUM7WUFDdkMsT0FBTyxJQUFJLFdBQUksQ0FBQztnQkFDZCxFQUFFO2dCQUNGLFFBQVE7Z0JBQ1IsSUFBSTtnQkFDSixRQUFRO2dCQUNSLFlBQVksRUFBRSxJQUFJLDRCQUFZLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDdEQsU0FBUyxFQUFFLElBQUksc0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3JELENBQUM7UUFDSixDQUFDO1FBRU0sa0JBQWEsR0FBRztZQUNyQixRQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsTUFBTSxJQUFLLFFBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBNUQsQ0FBNEQsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUExRyxDQUEwRztRQXBCMUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFtQkgscUJBQUM7QUFBRCxDQUFDO0FBM0JZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjNCLHVIQUEyRDtBQUszRDtJQUtFLHlCQUFZLFVBQXNCLEVBQUUsZ0JBQThCO1FBQWxFLGlCQUdDO1FBTGdCLGNBQVMsR0FBeUIsRUFBRTtRQU85QyxnQkFBVyxHQUFHLFVBQUMsUUFBNEI7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLENBQUM7UUFFTyxvQkFBZSxHQUFHLFVBQUMsS0FBaUI7OztnQkFDMUMsS0FBdUIsdUJBQUksQ0FBQyxTQUFTO29CQUFoQyxJQUFNLFFBQVE7b0JBQW9CLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQUE7Ozs7Ozs7OztRQUN4RCxDQUFDO1FBRU0saUJBQVksR0FBRyxVQUFDLFFBQWtCLEVBQUUsTUFBbUI7O1lBQzVELElBQU0sa0JBQWtCLEdBQUcsSUFBSSx5Q0FBa0IsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDbkcsSUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDOztnQkFDOUQsS0FBb0IsOEJBQU0saUZBQUU7b0JBQXZCLElBQU0sT0FBSztvQkFDZCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQUssQ0FBQztvQkFDbkQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFLLENBQUM7aUJBQzVCOzs7Ozs7Ozs7WUFDRCxLQUFJLENBQUMsZ0JBQWdCLElBQUksTUFBTSxDQUFDLE1BQU07WUFDdEMsT0FBTyxNQUFNO1FBQ2YsQ0FBQztRQXJCQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQjtJQUMxQyxDQUFDO0lBb0JILHNCQUFDO0FBQUQsQ0FBQztBQTVCWSwwQ0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNUIsc0ZBQWdDO0FBRWhDLElBQU0sT0FBTyxHQUFHLEVBQUU7QUFDbEIsSUFBTSxZQUFZLEdBQUcsR0FBRztBQUN4QixJQUFNLGFBQWEsR0FBRyxFQUFFO0FBRXhCO0lBQWdDLDhCQUE0QjtJQUcxRCxvQkFBWSxLQUFtQixFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsSUFBWSxFQUFFLE9BQW9CO1FBQXpGLFlBQ0Usa0JBQU0sS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsU0EwQm5CO1FBekJDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQztRQUN4QixLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFcEIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzthQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQzthQUNwQyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ2YsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUVyQixJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPO1FBQzdDLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU87UUFFL0MsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFVLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFlBQVk7UUFDbkUsS0FBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWE7UUFFeEUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUN6QyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQzthQUNqRCxFQUFFLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyx3QkFBd0IsQ0FBQzthQUMvQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQywwQkFBMEIsQ0FBQzthQUNsRCxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyx5QkFBeUIsQ0FBQztRQUVsRCxJQUFJLE9BQU8sRUFBRTtZQUNYLEtBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQztTQUM5QjtRQUVELEtBQUksQ0FBQyx3QkFBd0IsRUFBRTs7SUFDakMsQ0FBQztJQUVPLDhDQUF5QixHQUFqQztRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU8sNkNBQXdCLEdBQWhDO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTywrQ0FBMEIsR0FBbEM7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVNLHlCQUFJLEdBQVgsVUFBWSxLQUFjO1FBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixPQUFPLGlCQUFNLElBQUksWUFBQyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQW5EK0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBbUQzRDtBQW5EWSxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZCLDBFQUFrQztBQUNsQyw0RkFBNkM7QUFDN0MsNkVBQW9DO0FBQ3BDLCtGQUErQztBQUMvQyx3R0FBcUQ7QUFDckQsbUZBQXdDO0FBQ3hDLGtHQUFpRDtBQUVwQyx1QkFBZSxHQUFHLFVBQUMsS0FBVTs7SUFDeEMsUUFBUSxPQUFPLEtBQUssRUFBRTtRQUNwQixLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLFdBQVc7WUFDZCxPQUFPLEtBQUs7UUFDZCxLQUFLLFFBQVE7WUFDWCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyx1QkFBZSxDQUFDO2FBQ2xDO2lCQUFNLElBQUksS0FBSyxZQUFZLFNBQUcsRUFBRTtnQkFDL0IsNkJBQVksS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFFLFdBQVcsRUFBRSxLQUFLLElBQUU7YUFDakQ7aUJBQU0sSUFBSSxLQUFLLFlBQVksb0JBQVEsRUFBRTtnQkFDcEMsNkJBQVksS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFFLFdBQVcsRUFBRSxVQUFVLElBQUU7YUFDdEQ7aUJBQU0sSUFBSSxLQUFLLFlBQVksd0JBQVUsRUFBRTtnQkFDdEMsNkJBQVksS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFFLFdBQVcsRUFBRSxZQUFZLElBQUU7YUFDeEQ7aUJBQU0sSUFBSSxLQUFLLFlBQVksV0FBSSxFQUFFO2dCQUNoQyw2QkFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUUsV0FBVyxFQUFFLE1BQU0sSUFBRTthQUNsRDtpQkFBTSxJQUFJLEtBQUssWUFBWSxzQkFBUyxFQUFFO2dCQUNyQyw2QkFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUUsV0FBVyxFQUFFLFdBQVcsSUFBRTthQUN2RDtpQkFBTSxJQUFJLEtBQUssWUFBWSw0QkFBWSxFQUFFO2dCQUN4Qyw2QkFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUUsV0FBVyxFQUFFLGNBQWMsSUFBRTthQUMxRDtpQkFBTSxJQUFJLEtBQUssWUFBWSxlQUFNLEVBQUU7Z0JBQ2xDLDZCQUFZLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBRSxXQUFXLEVBQUUsUUFBUSxJQUFFO2FBQ3BEO2lCQUFNO2dCQUNMLElBQU0sU0FBUyxHQUFRLEVBQUU7O29CQUN6QixLQUF5Qix3QkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkNBQUU7d0JBQXJDLDRCQUFVLEVBQVQsR0FBRyxVQUFFLEdBQUc7d0JBQ2xCLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyx1QkFBZSxDQUFDLEdBQUcsQ0FBQztxQkFDdEM7Ozs7Ozs7OztnQkFDRCxPQUFPLFNBQVM7YUFDakI7S0FDSjtBQUNILENBQUM7QUFFWSwyQkFBbUIsR0FBRyxVQUFDLEtBQVU7O0lBQzVDLFFBQVEsT0FBTyxLQUFLLEVBQUU7UUFDcEIsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxXQUFXO1lBQ2QsT0FBTyxLQUFLO1FBQ2QsS0FBSyxRQUFRO1lBQ1gsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsMkJBQW1CLENBQUM7YUFDdEM7aUJBQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTtnQkFDdEMsT0FBTyxTQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUMzQjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFO2dCQUMzQyxPQUFPLG9CQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNoQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssWUFBWSxFQUFFO2dCQUM3QyxPQUFPLHdCQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNsQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssTUFBTSxFQUFFO2dCQUN2QyxPQUFPLFdBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQzVCO2lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxjQUFjLEVBQUU7Z0JBQy9DLE9BQU8sNEJBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ3BDO2lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxXQUFXLEVBQUU7Z0JBQzVDLE9BQU8sc0JBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2pDO2lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxRQUFRLEVBQUU7Z0JBQ3pDLE9BQU8sZUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBTSxTQUFTLEdBQVEsRUFBRTs7b0JBQ3pCLEtBQXlCLHdCQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyw2Q0FBRTt3QkFBckMsNEJBQVUsRUFBVCxHQUFHLFVBQUUsR0FBRzt3QkFDbEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLDJCQUFtQixDQUFDLEdBQUcsQ0FBQztxQkFDMUM7Ozs7Ozs7OztnQkFDRCxPQUFPLFNBQVM7YUFDakI7S0FDSjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RVksaUJBQVMsR0FBRyxVQUFDLEtBQVk7SUFDcEMsV0FBSSxPQUFPLENBQUMsVUFBQyxPQUFPLElBQUssWUFBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFuRCxDQUFtRCxDQUFDO0FBQTdFLENBQTZFOzs7Ozs7Ozs7Ozs7Ozs7O0FDSGxFLDBCQUFrQixHQUFHLFVBQUMsR0FBVyxFQUFFLEdBQVc7SUFDekQsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztBQUFqRCxDQUFpRDtBQUV0QywwQkFBa0IsR0FBRyxVQUFDLEdBQVcsRUFBRSxHQUFXLElBQWEsV0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQTdDLENBQTZDO0FBRXhHLHFCQUFhLEdBQUcsVUFBSSxLQUFVLElBQVEsWUFBSyxDQUFDLDBCQUFrQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBMUMsQ0FBMEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNRaEYsZUFBTyxHQUFHLFVBQUksTUFBaUIsSUFBZSxRQUFDLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQU8sQ0FBQyxDQUFDLENBQUMsWUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQS9DLENBQStDO0FBRTdGLGdCQUFRLEdBQUcsVUFBSSxLQUFlO0lBQ3pDLFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtRQUNsQixLQUFLLE1BQU07WUFDVCxPQUFPLEtBQUssQ0FBQyxJQUFJO1FBQ25CLEtBQUssU0FBUztZQUNaLE9BQU8sU0FBUztLQUNuQjtBQUNILENBQUM7QUFFWSxlQUFPLEdBQVksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLFlBQUksR0FBRyxVQUFJLElBQU8sSUFBYyxRQUFDO0lBQzVDLElBQUksRUFBRSxNQUFNO0lBQ1osSUFBSTtDQUNMLENBQUMsRUFIMkMsQ0FHM0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJGO0lBQTBDLHdDQUFLO0lBQzdDLDhCQUFZLEtBQVk7ZUFDdEIsa0JBQU0sdUJBQXFCLEtBQU8sQ0FBQztJQUNyQyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLENBSnlDLEtBQUssR0FJOUM7QUFKWSxvREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakMsa0ZBQWlDO0FBRWpDO0lBSUUsc0JBQVksRUFBa0Q7UUFBOUQsaUJBTUM7WUFOYSxPQUFPLGVBQUUsR0FBRztRQVFuQixXQUFNLEdBQUcsVUFBQyxNQUFjLElBQW1CLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUE3QyxDQUE2QztRQUV4RixTQUFJLEdBQUcsVUFBQyxFQUFtRjtnQkFBbkYscUJBQWlGLEVBQUUsT0FBakYsZUFBc0IsRUFBdEIsT0FBTyxtQkFBRyxLQUFJLENBQUMsT0FBTyxPQUFFLFdBQWMsRUFBZCxHQUFHLG1CQUFHLEtBQUksQ0FBQyxHQUFHO1lBQ3JELFdBQUksWUFBWSxDQUFDLEVBQUUsT0FBTyxXQUFFLEdBQUcsT0FBRSxDQUFDO1FBQWxDLENBQWtDO1FBRTdCLFlBQU8sR0FBRyxjQUFvQixXQUFJLFlBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBdEQsQ0FBc0Q7UUFFcEYsV0FBTSxHQUFHLGNBQVcsUUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBMUMsQ0FBMEM7UUFkbkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRztRQUNkLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQVdhLHFCQUFRLEdBQUcsVUFBQyxJQUFTLElBQW1CLFdBQUksWUFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUExRCxDQUEwRDtJQUNsSCxtQkFBQztDQUFBO0FBdEJZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnpCLGlJQUFxRTtBQUNyRSxtRUFBc0M7QUFFdEMsSUFBWSxZQU9YO0FBUEQsV0FBWSxZQUFZO0lBQ3RCLDZCQUFhO0lBQ2IsNkJBQWE7SUFDYix5Q0FBeUI7SUFDekIseUNBQXlCO0lBQ3pCLHlDQUF5QjtJQUN6Qix5Q0FBeUI7QUFDM0IsQ0FBQyxFQVBXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBT3ZCO0FBRVksc0JBQWMsR0FBRztJQUM1QixZQUFZLENBQUMsSUFBSTtJQUNqQixZQUFZLENBQUMsVUFBVTtJQUN2QixZQUFZLENBQUMsVUFBVTtJQUN2QixZQUFZLENBQUMsSUFBSTtJQUNqQixZQUFZLENBQUMsVUFBVTtJQUN2QixZQUFZLENBQUMsVUFBVTtDQUN4QjtBQUVZLHFCQUFhLEdBQUcsVUFBQyxTQUF1QjtJQUNuRCxRQUFRLFNBQVMsRUFBRTtRQUNqQixLQUFLLFlBQVksQ0FBQyxJQUFJO1lBQ3BCLE9BQU8sSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixLQUFLLFlBQVksQ0FBQyxJQUFJO1lBQ3BCLE9BQU8sSUFBSSxTQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssWUFBWSxDQUFDLFVBQVU7WUFDMUIsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkIsS0FBSyxZQUFZLENBQUMsVUFBVTtZQUMxQixPQUFPLElBQUksU0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixLQUFLLFlBQVksQ0FBQyxVQUFVO1lBQzFCLE9BQU8sSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QixLQUFLLFlBQVksQ0FBQyxVQUFVO1lBQzFCLE9BQU8sSUFBSSxTQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCO1lBQ0UsTUFBTSxJQUFJLDZDQUFvQixDQUFDLFNBQVMsQ0FBQztLQUM1QztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0QsNkVBQTBCO0FBQzFCLGlHQUE2RDtBQUU3RDtJQUlFLGFBQVksQ0FBUyxFQUFFLENBQVM7UUFBaEMsaUJBR0M7UUFNTSxTQUFJLEdBQUcsVUFBQyxJQUFTLElBQVUsV0FBSSxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF6QyxDQUF5QztRQUVwRSxlQUFVLEdBQUcsY0FBYSxVQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQTdCLENBQTZCO1FBRXZELGlCQUFZLEdBQUcsVUFBQyxJQUFTLElBQWMsUUFBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQW5DLENBQW1DO1FBRTFFLGVBQVUsR0FBRyxVQUFDLElBQVM7WUFDNUIsUUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFBdkYsQ0FBdUY7UUFXbEYsV0FBTSxHQUFHLFVBQUMsSUFBUyxJQUFjLFlBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQXRDLENBQXNDO1FBRXZFLGFBQVEsR0FBRyxjQUFjLGdCQUFPLEtBQUksQ0FBQyxDQUFDLFVBQUssS0FBSSxDQUFDLENBQUMsTUFBRyxFQUEzQixDQUEyQjtRQUVwRCxPQUFFLEdBQUcsVUFBQyxTQUF1QixJQUFVLFlBQUksQ0FBQyxJQUFJLENBQUMsNkJBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFuQyxDQUFtQztRQUUxRSxXQUFNLEdBQUcsY0FBVyxRQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUExQixDQUEwQjtRQWhDbkQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1YsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUVELHNCQUFJLGtCQUFDO2FBQUw7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQVdjLGNBQVUsR0FBVTtRQUNqQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNiLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNkLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNkLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNmO0lBVWEsWUFBUSxHQUFHLFVBQUMsSUFBUyxJQUFVLFdBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF2QixDQUF1QjtJQUN0RSxVQUFDO0NBQUE7QUF4Q1ksa0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIaEIsa0ZBQWlDO0FBRWpDO0lBSUUsbUJBQVksRUFBa0Q7UUFBOUQsaUJBTUM7WUFOYSxPQUFPLGVBQUUsR0FBRztRQVFuQixXQUFNLEdBQUcsVUFBQyxNQUFjLElBQWdCLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUE3QyxDQUE2QztRQUVyRixTQUFJLEdBQUcsVUFBQyxFQUFtRjtnQkFBbkYscUJBQWlGLEVBQUUsT0FBakYsZUFBc0IsRUFBdEIsT0FBTyxtQkFBRyxLQUFJLENBQUMsT0FBTyxPQUFFLFdBQWMsRUFBZCxHQUFHLG1CQUFHLEtBQUksQ0FBQyxHQUFHO1lBQ3JELFdBQUksU0FBUyxDQUFDLEVBQUUsT0FBTyxXQUFFLEdBQUcsT0FBRSxDQUFDO1FBQS9CLENBQStCO1FBRTFCLFdBQU0sR0FBRyxjQUFXLFFBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQTFDLENBQTBDO1FBWm5FLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7UUFDZCxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNmLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFTYSxrQkFBUSxHQUFHLFVBQUMsSUFBUyxJQUFnQixXQUFJLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBdkQsQ0FBdUQ7SUFDNUcsZ0JBQUM7Q0FBQTtBQXBCWSw4QkFBUzs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z0QixxRkFBc0M7QUFDdEMsMkZBQTBDO0FBQzFDLDRFQUFpQztBQUVwQiwyQkFBbUIsR0FBZSxJQUFJLHdCQUFVLENBQUM7SUFDNUQsSUFBSSxFQUFFLENBQUM7SUFDUCxHQUFHLEVBQUUsSUFBSSxvQkFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDM0MsT0FBTyxFQUFFO1FBQ1AsSUFBSSxlQUFNLENBQUM7WUFDVCxFQUFFLEVBQUUsQ0FBQztZQUNMLElBQUksRUFBRSxVQUFVO1lBQ2hCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCLENBQUM7S0FDSDtJQUNELEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZXLHNCQUFjLEdBQUcsQ0FBQztBQUkvQjtJQU1FLGdCQUFZLEVBVVg7UUFWRCxpQkFlQztZQWRDLEVBQUUsVUFDRixJQUFJLFlBQ0osaUJBQWlCLEVBQWpCLFNBQVMsbUJBQUcsS0FBSyxPQUNqQixnQkFBZ0IsRUFBaEIsUUFBUSxtQkFBRyxLQUFLO1FBYVgsU0FBSSxHQUFHLFVBQUMsRUFLa0U7Z0JBTGxFLHFCQUtnRSxFQUFFLE9BSi9FLFVBQVksRUFBWixFQUFFLG1CQUFHLEtBQUksQ0FBQyxFQUFFLE9BQ1osWUFBZ0IsRUFBaEIsSUFBSSxtQkFBRyxLQUFJLENBQUMsSUFBSSxPQUNoQixpQkFBMEIsRUFBMUIsU0FBUyxtQkFBRyxLQUFJLENBQUMsU0FBUyxPQUMxQixnQkFBd0IsRUFBeEIsUUFBUSxtQkFBRyxLQUFJLENBQUMsUUFBUTtZQUV4QixXQUFJLE1BQU0sQ0FBQztnQkFDVCxFQUFFO2dCQUNGLElBQUk7Z0JBQ0osU0FBUztnQkFDVCxRQUFRO2FBQ1QsQ0FBQztRQUxGLENBS0U7UUFFRyxXQUFNLEdBQUcsY0FBVyxRQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUF0RixDQUFzRjtRQW5CL0csSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUztRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7SUFDMUIsQ0FBQztJQWlCYSxlQUFRLEdBQUcsVUFBQyxJQUFTO1FBQ2pDLFdBQUksTUFBTSxDQUFDO1lBQ1QsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDO0lBTEYsQ0FLRTtJQUNOLGFBQUM7Q0FBQTtBQTdDWSx3QkFBTTs7Ozs7Ozs7Ozs7Ozs7OztBQ0puQixtRUFBMkI7QUFDM0IsaUdBQThDO0FBQzlDLHdGQUF3QztBQUt4QztJQVFFLGNBQVksRUFjWDtRQWRELGlCQXFCQztZQXBCQyxFQUFFLFVBQ0YsUUFBUSxnQkFDUixJQUFJLFlBQ0osUUFBUSxnQkFDUixTQUFTLGlCQUNULFlBQVk7UUFpQlAsV0FBTSxHQUFHLFVBQUMsTUFBYyxJQUFXLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUF2RCxDQUF1RDtRQUUxRixTQUFJLEdBQUcsVUFBQyxFQWNUO2dCQWRTLHFCQWNYLEVBQUUsT0FiSixVQUFZLEVBQVosRUFBRSxtQkFBRyxLQUFJLENBQUMsRUFBRSxPQUNaLGdCQUF3QixFQUF4QixRQUFRLG1CQUFHLEtBQUksQ0FBQyxRQUFRLE9BQ3hCLFlBQWdCLEVBQWhCLElBQUksbUJBQUcsS0FBSSxDQUFDLElBQUksT0FDaEIsZ0JBQXdCLEVBQXhCLFFBQVEsbUJBQUcsS0FBSSxDQUFDLFFBQVEsT0FDeEIsaUJBQTBCLEVBQTFCLFNBQVMsbUJBQUcsS0FBSSxDQUFDLFNBQVMsT0FDMUIsb0JBQWdDLEVBQWhDLFlBQVksbUJBQUcsS0FBSSxDQUFDLFlBQVk7WUFRakIsV0FBSSxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQUUsUUFBUSxZQUFFLElBQUksUUFBRSxRQUFRLFlBQUUsU0FBUyxhQUFFLFlBQVksZ0JBQUUsQ0FBQztRQUFuRSxDQUFtRTtRQUU3RSxTQUFJLEdBQUcsVUFBQyxRQUFhLEVBQUUsb0JBQTRCO1lBQ3hELFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLFlBQUUsWUFBWSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztRQUFyRixDQUFxRjtRQUVoRix1QkFBa0IsR0FBRyxVQUFDLG9CQUE0QjtZQUN2RCxZQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQztRQUEzRSxDQUEyRTtRQUV0RSx3QkFBbUIsR0FBRyxjQUFZLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQXhELENBQXdEO1FBTTFGLFdBQU0sR0FBRyxjQUFXLFFBQUM7WUFDMUIsRUFBRSxFQUFFLEtBQUksQ0FBQyxFQUFFO1lBQ1gsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSTtZQUNmLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNoQyxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbEMsWUFBWSxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFO1NBQ3pDLENBQUMsRUFQeUIsQ0FPekI7UUE3Q0EsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWTtJQUNsQyxDQUFDO0lBNEJELHNCQUFXLHdDQUFzQjthQUFqQztZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQVdhLGFBQVEsR0FBRyxVQUFDLElBQVM7UUFDakMsV0FBSSxJQUFJLENBQUM7WUFDUCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLFNBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNyQyxTQUFTLEVBQUUsc0JBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUM3QyxZQUFZLEVBQUUsNEJBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN2RCxDQUFDO0lBUEYsQ0FPRTtJQUNOLFdBQUM7Q0FBQTtBQS9FWSxvQkFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BqQiw2RUFBMEI7QUFjMUIsaUlBQXFFO0FBQ3JFLDRFQUEyQztBQUMzQyxvSkFBc0U7QUFFekQsa0JBQVUsR0FBRyxVQUFDLEtBQWlCLEVBQUUsS0FBaUI7SUFDN0QsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2xCLEtBQUssWUFBWTtZQUNmLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1FBQ2hDLEtBQUssYUFBYTtZQUNoQixPQUFPLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDeEMsS0FBSyxtQkFBbUI7WUFDdEIsT0FBTyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQzlDLEtBQUssYUFBYTtZQUNoQixPQUFPLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDeEMsS0FBSyxXQUFXO1lBQ2QsT0FBTyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUN0QyxLQUFLLFFBQVE7WUFDWCxPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ25DLEtBQUssaUJBQWlCO1lBQ3BCLE9BQU8scUJBQXFCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUM1QyxLQUFLLGdCQUFnQjtZQUNuQixPQUFPLG9CQUFvQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDM0MsS0FBSyxTQUFTO1lBQ1osT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzdCLEtBQUssVUFBVTtZQUNiLE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDckM7WUFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsS0FBSyxDQUFDO0tBQ3hDO0FBQ0gsQ0FBQztBQUVELElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxLQUEyQjtJQUNuRCxJQUFJLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUM7S0FDdEQ7SUFDRCxPQUFPLEtBQUssQ0FBQyxLQUFLO0FBQ3BCLENBQUM7QUFFRCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsS0FBaUIsRUFBRSxLQUE0QjtJQUN4RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssYUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUE1QixDQUE0QixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsRSxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDO0tBQzVDO0lBQ08sWUFBUSxHQUFLLEtBQUssU0FBVixDQUFVO0lBQzFCLElBQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBVSxRQUFVLEVBQUUsQ0FBQztJQUN2RSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQ2hDLENBQUM7QUFFRCxJQUFNLHVCQUF1QixHQUFHLFVBQUMsS0FBaUIsRUFBRSxLQUFrQztJQUM1RSxZQUFRLEdBQVcsS0FBSyxTQUFoQixFQUFFLElBQUksR0FBSyxLQUFLLEtBQVYsQ0FBVTtJQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztJQUMxQixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLFFBQUUsQ0FBQyxFQUFyQixDQUFxQixDQUFDO0FBQ3hFLENBQUM7QUFFRCxJQUFNLFNBQVMsR0FBRyxVQUFDLEtBQWlCLEVBQUUsUUFBa0I7SUFDdEQsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDekMsSUFBSSxDQUFDLE1BQU07UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDZCQUEyQixRQUFVLENBQUM7SUFDbkUsT0FBTyxNQUFNO0FBQ2YsQ0FBQztBQUVELElBQU0saUJBQWlCLEdBQUcsVUFBQyxLQUFpQixFQUFFLEtBQTRCO0lBQ3hFLElBQUksS0FBSyxDQUFDLGNBQWMsRUFBRTtRQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDO0tBQ3hDO0lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDO0FBQ3hGLENBQUM7QUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQWlCLEVBQUUsS0FBMEI7SUFDNUQsVUFBTSxHQUF5QixLQUFLLE9BQTlCLEVBQUUsUUFBUSxHQUFlLEtBQUssU0FBcEIsRUFBRSxJQUFJLEdBQVMsS0FBSyxLQUFkLEVBQUUsRUFBRSxHQUFLLEtBQUssR0FBVixDQUFVO0lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQW9ELElBQUksWUFBTyxFQUFJLENBQUM7S0FDckY7SUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBOEMsRUFBSSxDQUFDO0tBQ3BFO0lBQ0QsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQXlCLE1BQVEsQ0FBQztLQUNuRDtJQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMvQixNQUFNLElBQUksS0FBSyxDQUNiLG1FQUFpRSxJQUFJLENBQUMsUUFBUSxvQ0FBK0IsSUFBTSxDQUNwSDtLQUNGO0lBQ0QsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQztJQUMzQyxJQUFJLE1BQU0sRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsK0NBQStDLENBQUM7S0FDakU7SUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1FBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUM7S0FDbEU7SUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsRUFBRTtRQUMxRCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDO0tBQzlDO0lBQ0QsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDOUUsQ0FBQztBQUVELElBQU0sWUFBWSxHQUFHLFVBQUMsS0FBaUIsRUFBRSxLQUF1QjtJQUN0RCxZQUFRLEdBQWUsS0FBSyxTQUFwQixFQUFFLFFBQVEsR0FBSyxLQUFLLFNBQVYsQ0FBVTtJQUVwQyxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEQsSUFBSSxDQUFDLFlBQVk7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUF5QixRQUFRLENBQUMsTUFBUSxDQUFDO0lBQzlFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xELE1BQU0sSUFBSSxLQUFLLENBQ2IsbURBQWlELFlBQVksQ0FBQyxFQUFFLHdCQUFtQixZQUFZLENBQUMsUUFBUSxvQ0FBK0IsUUFBUSxDQUFDLFFBQVUsQ0FDM0o7SUFFSCxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEQsSUFBSSxDQUFDLFlBQVk7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUF5QixRQUFRLENBQUMsTUFBUSxDQUFDO0lBQzlFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ2xELE1BQU0sSUFBSSxLQUFLLENBQ2IsbURBQWlELFlBQVksQ0FBQyxFQUFFLHdCQUFtQixZQUFZLENBQUMsUUFBUSxvQ0FBK0IsUUFBUSxDQUFDLFFBQVUsQ0FDM0o7SUFFSCxJQUFJLFlBQVksQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFDLFFBQVE7UUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDO0lBQ2hHLElBQUksQ0FBQyw0Q0FBYyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3pFLE1BQU0sSUFBSSxLQUFLLENBQ2IsNEJBQTBCLEtBQUssQ0FBQyxVQUFVLHVCQUFrQixRQUFRLENBQUMsUUFBUSxZQUFPLFFBQVEsQ0FBQyxRQUFVLENBQ3hHO0lBQ0gsSUFBSSxZQUFZLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsb0JBQW9CO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQztJQUVqSCxJQUFJLFFBQVEsR0FBRyxLQUFLO0lBRXBCLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNuQixRQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO0tBQ2hEO1NBQU07UUFDTCxJQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7UUFDM0csUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUM7S0FDbEU7SUFFRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDbkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztLQUNoRDtTQUFNO1FBQ0wsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN2RjtJQUVELElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNuQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUksWUFBWSxDQUFDLElBQUksOENBQXlDLFlBQVksQ0FBQyxJQUFJLE1BQUcsQ0FBQztTQUNuSDthQUFNO1lBQ0wsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUksWUFBWSxDQUFDLElBQUksa0NBQTZCLFlBQVksQ0FBQyxJQUFJLE1BQUcsQ0FBQztTQUN2RztLQUNGO1NBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQzFCLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFJLFlBQVksQ0FBQyxJQUFJLDZDQUF3QyxZQUFZLENBQUMsSUFBSSxNQUFHLENBQUM7S0FDbEg7U0FBTTtRQUNMLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDbEUsSUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBZSxRQUFRLENBQUMsTUFBTSxZQUFTO1FBQy9GLElBQU0sT0FBTyxHQUFNLFlBQVksQ0FBQyxJQUFJLFNBQUksSUFBSSxTQUFJLFlBQVksQ0FBQyxJQUFJLGtCQUFhLFFBQVEsQ0FBQyxNQUFNLGVBQVUsa0JBQWtCLE1BQUc7UUFDNUgsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxRQUFRO0FBQ2pCLENBQUM7QUFFRCxJQUFNLHFCQUFxQixHQUFHLFVBQUMsS0FBaUIsRUFBRSxLQUFnQztJQUN4RSxZQUFRLEdBQUssS0FBSyxTQUFWLENBQVU7SUFDMUIsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7SUFDMUIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxVQUFDLE1BQU0sSUFBSyxhQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQWhDLENBQWdDLENBQUM7QUFDbkYsQ0FBQztBQUVELElBQU0sb0JBQW9CLEdBQUcsVUFBQyxLQUFpQixFQUFFLEtBQStCO0lBQ3RFLFlBQVEsR0FBSyxLQUFLLFNBQVYsQ0FBVTtJQUMxQixJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztJQUN6QyxPQUFPLEtBQUs7U0FDVCxZQUFZLENBQUMsUUFBUSxFQUFFLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztTQUNuRSxXQUFXLENBQUksTUFBTSxDQUFDLElBQUksMEJBQXVCLENBQUM7QUFDdkQsQ0FBQztBQUVELElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBaUI7SUFDdEMsWUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFRLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxpQkFBYSxDQUFDO0FBQWhFLENBQWdFO0FBRWxFLElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBaUIsRUFBRSxLQUF5QjtJQUMxRCxVQUFNLEdBQUssS0FBSyxPQUFWLENBQVU7SUFDeEIsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBSSxNQUFNLEVBQUU7UUFDVixJQUFNLFlBQVksR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQztRQUM3QyxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxrQkFBTSxZQUFZLENBQUMsSUFBSSxvQkFBaUIsQ0FBQztLQUMxRTtTQUFNO1FBQ0wsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsOEJBQThCLENBQUM7S0FDaEU7SUFDRCxPQUFPLFFBQVE7QUFDakIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNRCxtRUFBMkI7QUFDM0Isa0ZBQWlDO0FBRWpDO0lBSUUsa0JBQVksRUFBb0Q7UUFBaEUsaUJBS0M7WUFMYSxLQUFLLGFBQUUsTUFBTTtRQU9wQixlQUFVLEdBQUcsVUFBQyxHQUFRO1lBQzNCLElBQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTTtRQUN0RSxDQUFDO1FBVU0sV0FBTSxHQUFHLGNBQVcsUUFBQyxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBNUMsQ0FBNEM7UUFuQnJFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDdEIsQ0FBQztJQU9PLDhCQUFXLEdBQW5COzs7OztvQkFDVyxHQUFHLEdBQUcsQ0FBQzs7O3lCQUFFLElBQUcsR0FBRyxJQUFJLENBQUMsTUFBTTtvQkFDeEIsTUFBTSxHQUFHLENBQUM7Ozt5QkFBRSxPQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUs7b0JBQ2hDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU07b0JBQ3ZDLHFCQUFNLElBQUksU0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7O29CQUFyQixTQUFxQjs7O29CQUZtQixNQUFNLEVBQUU7OztvQkFEZixHQUFHLEVBQUU7Ozs7O0tBSzNDO0lBSWEsaUJBQVEsR0FBRyxVQUFDLElBQVMsSUFBZSxXQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBeEQsQ0FBd0Q7SUFDNUcsZUFBQztDQUFBO0FBM0JZLDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckIsNkVBQTBCO0FBQzFCLHFGQUFzQztBQUN0QyxzRUFBcUM7QUFDckMsOEVBQXNFO0FBQ3RFLDRFQUEyQztBQUMzQyxrRkFBaUM7QUFDakMseUhBQW9EO0FBT3BEO0lBUUUsb0JBQVksRUFjWDtRQWRELGlCQXNCQztZQXJCQyxJQUFJLFlBQ0osR0FBRyxXQUNILEtBQUssYUFDTCxPQUFPLGVBQ1AsWUFBWSxvQkFDWixnQkFBYSxFQUFiLFFBQVEsbUJBQUcsRUFBRTtRQWtCUixTQUFJLEdBQUcsVUFBQyxFQWNUO2dCQWRTLHFCQWNYLEVBQUUsT0FiSixZQUFnQixFQUFoQixJQUFJLG1CQUFHLEtBQUksQ0FBQyxJQUFJLE9BQ2hCLFdBQWMsRUFBZCxHQUFHLG1CQUFHLEtBQUksQ0FBQyxHQUFHLE9BQ2QsYUFBa0IsRUFBbEIsS0FBSyxtQkFBRyxLQUFJLENBQUMsS0FBSyxPQUNsQixlQUFzQixFQUF0QixPQUFPLG1CQUFHLEtBQUksQ0FBQyxPQUFPLE9BQ3RCLG9CQUF5QyxFQUF6QyxZQUFZLG1CQUFHLGVBQU8sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQ3pDLGdCQUF3QixFQUF4QixRQUFRLG1CQUFHLEtBQUksQ0FBQyxRQUFRO1lBUUgsV0FBSSxVQUFVLENBQUMsRUFBRSxJQUFJLFFBQUUsR0FBRyxPQUFFLEtBQUssU0FBRSxPQUFPLFdBQUUsWUFBWSxFQUFFLGdCQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsUUFBUSxZQUFFLENBQUM7UUFBN0YsQ0FBNkY7UUFVN0csaUJBQVksR0FBRyxjQUFrQixZQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxhQUFNLENBQUMsRUFBRSxFQUFULENBQVMsQ0FBQyxFQUF2QyxDQUF1QztRQUV4RSxxQkFBZ0IsR0FBRyxVQUFDLFFBQWtCLElBQWMsWUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQTdDLENBQTZDO1FBRWpHLGlCQUFZLEdBQUcsVUFBQyxRQUFrQjs7WUFDdkMsSUFBTSxTQUFTLFNBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsMENBQUUsU0FBUztZQUN0RCxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLHNCQUFzQixFQUEzQixDQUEyQixFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRyxDQUFDO1FBRU0sb0JBQWUsR0FBRyxjQUFlLFFBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssWUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQTVCLENBQTRCLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUE3RCxDQUE2RDtRQUU5RixzQkFBaUIsR0FBRyxVQUFDLFFBQWtCLElBQWEsWUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFBdkQsQ0FBdUQ7UUFFM0csZUFBVSxHQUFHLFVBQUMsUUFBa0IsSUFBcUIsUUFBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU0sSUFBSyxhQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBdEIsQ0FBc0IsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQXhELENBQXdEO1FBRTdHLGNBQVMsR0FBRyxVQUFDLFFBQWtCO1lBQ3BDLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSw2QkFBMkIsUUFBVTthQUM1QztZQUNELE9BQU8sTUFBTTtRQUNmLENBQUM7UUFFTSxpQkFBWSxHQUFHLFVBQUMsTUFBYyxJQUFtQixRQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxFQUFFLEtBQUssTUFBTSxFQUFsQixDQUFrQixFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBaEQsQ0FBZ0Q7UUFFakcsZ0JBQVcsR0FBRyxVQUFDLE1BQWM7WUFDbEMsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDdEMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxNQUFNLDJCQUF5QixNQUFRO2FBQ3hDO1lBQ0QsT0FBTyxJQUFJO1FBQ2IsQ0FBQztRQUVNLHVCQUFrQixHQUFHLFVBQUMsR0FBUSxJQUFtQixRQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUF6QixDQUF5QixFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBdkQsQ0FBdUQ7UUFFeEcsZ0JBQVcsR0FBRyxVQUFDLE1BQWMsRUFBRSxJQUFVO1lBQzlDLFlBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQ2IsSUFBSSxFQUNKLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWxCLENBQWtCLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUNuRDthQUNGLENBQUM7UUFMRixDQUtFO1FBRUcsZUFBVSxHQUFHLFVBQUMsTUFBYztZQUNqQyxZQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWxCLENBQWtCLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFBeEUsQ0FBd0U7UUFFbkUsaUJBQVksR0FBRyxVQUFDLFFBQWtCLEVBQUUsTUFBa0M7WUFDM0UsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsTUFBTSw2QkFBMkIsUUFBVTtZQUN4RCxPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRU0sa0JBQWEsR0FBRyxVQUFDLFFBQWtCLEVBQUUsTUFBYztZQUN4RCxNQUFNLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDOUIsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNmLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUNmLE1BQU0sRUFDTixDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUF0QixDQUFzQixFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FDM0Q7YUFDRixDQUFDO1FBQ0osQ0FBQztRQUVNLGNBQVMsR0FBRyxVQUFDLE1BQWMsSUFBaUIsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUF0RCxDQUFzRDtRQUVsRyxXQUFNLEdBQUcsY0FBVyxRQUFDO1lBQzFCLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUN0QixLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsQ0FBQztZQUM5QyxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssYUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFmLENBQWUsQ0FBQztZQUN0RCxZQUFZLEVBQUUsS0FBSSxDQUFDLFlBQVk7U0FDaEMsQ0FBQyxFQU55QixDQU16QjtRQVdLLG9CQUFlLEdBQUcsVUFBQyxRQUFrQixJQUFjLFFBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssYUFBTSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQXRCLENBQXNCLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUF2RCxDQUF1RDtRQUUxRyxhQUFRLEdBQUcsVUFBQyxNQUFzQixJQUFpQixZQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQUksQ0FBQyxFQUFFLE1BQU0sVUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUE3QyxDQUE2QztRQUVoRyxlQUFVLEdBQUcsVUFBQyxLQUFpQixJQUFpQix5Q0FBVSxDQUFDLEtBQUksRUFBRSxLQUFLLENBQUMsRUFBdkIsQ0FBdUI7UUFFdkUsZ0JBQVcsR0FBRyxVQUFDLE1BQW9COztZQUN4QyxJQUFJLEtBQUssR0FBZSxLQUFJOztnQkFDNUIsS0FBb0IsOEJBQU0saUZBQUU7b0JBQXZCLElBQU0sT0FBSztvQkFDZCxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFLLENBQUM7aUJBQ2hDOzs7Ozs7Ozs7WUFDRCxPQUFPLEtBQUs7UUFDZCxDQUFDO1FBRU0sZ0JBQVcsR0FBRyxVQUFDLE9BQWUsSUFBaUIsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6RCxDQUF5RDtRQUV4RyxZQUFPLEdBQUc7WUFDZixZQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNSLElBQUksRUFBRSxLQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBMUIsQ0FBMEIsQ0FBQztnQkFDM0QsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBakMsQ0FBaUMsQ0FBQzthQUN6RSxDQUFDO1FBSkYsQ0FJRTtRQXZJRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTztRQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVk7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFrQkQsc0JBQVcsa0NBQVU7YUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNDQUFjO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUEwRWEsbUJBQVEsR0FBRyxVQUFDLElBQVM7UUFDakMsV0FBSSxVQUFVLENBQUM7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsb0JBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLElBQUssa0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLENBQUM7WUFDekQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUyxJQUFLLHNCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDO1lBQy9ELFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBTkYsQ0FNRTtJQXdCTixpQkFBQztDQUFBO0FBL0pZLGdDQUFVIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBEZXhpZSwgeyBDb2xsZWN0aW9uIH0gZnJvbSAnZGV4aWUnXG5pbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgV29ybGRFdmVudFJlY29yZCB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIGV2ZW50OiBhbnkgLy8gc2VyaWFsaXNlZCBXb3JsZEV2ZW50XG59XG5cbmV4cG9ydCBjbGFzcyBMbGFtYURleGllIGV4dGVuZHMgRGV4aWUge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1pZ25vcmVcbiAgd29ybGRFdmVudHM6IERleGllLlRhYmxlPFdvcmxkRXZlbnRSZWNvcmQsIHN0cmluZz5cbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5Xb3JsZEV2ZW50RGIgPSBhc3luYyAoKTogUHJvbWlzZTxXb3JsZEV2ZW50RGI+ID0+IHtcbiAgY29uc3QgZGV4aWUgPSBuZXcgRGV4aWUoJ2xsYW1hLXdhcnMnKVxuICBkZXhpZS52ZXJzaW9uKDEpLnN0b3Jlcyh7XG4gICAgd29ybGRFdmVudHM6ICcrKyxnYW1lSWQnLFxuICB9KVxuICBhd2FpdCBkZXhpZS5vcGVuKClcbiAgcmV0dXJuIG5ldyBXb3JsZEV2ZW50RGIoPExsYW1hRGV4aWU+ZGV4aWUpXG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZEV2ZW50RGIge1xuICBwcml2YXRlIHJlYWRvbmx5IGRleGllOiBMbGFtYURleGllXG5cbiAgY29uc3RydWN0b3IoZGV4aWU6IExsYW1hRGV4aWUpIHtcbiAgICB0aGlzLmRleGllID0gZGV4aWVcbiAgfVxuXG4gIHB1YmxpYyBzdG9yZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCB0aGlzLmRleGllLndvcmxkRXZlbnRzLmFkZCh7XG4gICAgICBnYW1lSWQsXG4gICAgICBldmVudDogc2VyaWFsaXNlVG9Kc29uKGV2ZW50KSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdldEV2ZW50c0ZvckdhbWUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPFdvcmxkRXZlbnRbXT4gPT4ge1xuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCB0aGlzLmRleGllLndvcmxkRXZlbnRzLndoZXJlKCdnYW1lSWQnKS5lcXVhbHMoZ2FtZUlkKS50b0FycmF5KClcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHJlY29yZCkgPT4gZGVzZXJpYWxpc2VGcm9tSnNvbihyZWNvcmQuZXZlbnQpKVxuICB9XG5cbiAgcHVibGljIGhhc0V2ZW50c0ZvckdhbWUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCB0aGlzLnF1ZXJ5RXZlbnRzQnlHYW1lSWQoZ2FtZUlkKS5maXJzdCgpXG4gICAgcmV0dXJuIHJlY29yZCAhPT0gdW5kZWZpbmVkXG4gIH1cblxuICBwcml2YXRlIHF1ZXJ5RXZlbnRzQnlHYW1lSWQgPSAoZ2FtZUlkOiBzdHJpbmcpOiBDb2xsZWN0aW9uPFdvcmxkRXZlbnRSZWNvcmQsIHN0cmluZz4gPT5cbiAgICB0aGlzLmRleGllLndvcmxkRXZlbnRzLndoZXJlKCdnYW1lSWQnKS5lcXVhbHMoZ2FtZUlkKVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGhcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodFxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnXG5pbXBvcnQgVGV4dEVkaXRQbHVnaW4gZnJvbSAncGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3RleHRlZGl0LXBsdWdpbi5qcydcblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdMbGFtYSBXYXJzJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHBhcmVudDogJ2dhbWUnLFxuICBkb206IHtcbiAgICBjcmVhdGVDb250YWluZXI6IHRydWUsXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxuICBwbHVnaW5zOiB7XG4gICAgZ2xvYmFsOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JleFRleHRFZGl0JyxcbiAgICAgICAgcGx1Z2luOiBUZXh0RWRpdFBsdWdpbixcbiAgICAgICAgc3RhcnQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUuc2V0R2FtZVNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcbiAgZ2FtZS5zY2FsZS5yZWZyZXNoKClcbn0pXG4iLCJleHBvcnQgY29uc3QgQXVkaW9LZXlzID0ge1xuICBBVFRBQ0tfMTogJ2F0dGFjazEnLFxuICBBVFRBQ0tfMjogJ2F0dGFjazInLFxuICBBVFRBQ0tfMzogJ2F0dGFjazMnLFxuICBERUFUSDogJ2RlYXRoJyxcbiAgV0FMSzogJ3dhbGsnLFxuICBORVdfVFVSTjogJ25ldy10dXJuJyxcbiAgUExBWUVSX0RFRkVBVEVEOiAncGxheWVyLWRlZmVhdGVkJyxcbiAgUExBWUVSX0pPSU5FRF9MT0JCWTogJ3BsYXllci1kZWZlYXRlZCcsXG4gIFZJQ1RPUllfTVVTSUM6ICd2aWN0b3J5LW11c2ljJyxcbiAgQ0xJQ0s6ICdjbGljaycsXG4gIFNQSVQ6ICdzcGl0Jyxcbn1cblxuZXhwb3J0IGNvbnN0IEFMTF9BVURJT19LRVlTID0gW1xuICBBdWRpb0tleXMuQVRUQUNLXzEsXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMixcbiAgQXVkaW9LZXlzLkFUVEFDS18zLFxuICBBdWRpb0tleXMuREVBVEgsXG4gIEF1ZGlvS2V5cy5XQUxLLFxuICBBdWRpb0tleXMuTkVXX1RVUk4sXG4gIEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsXG4gIEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZLFxuICBBdWRpb0tleXMuVklDVE9SWV9NVVNJQyxcbiAgQXVkaW9LZXlzLkNMSUNLLFxuICBBdWRpb0tleXMuU1BJVCxcbl1cbiIsImltcG9ydCB7IGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVJZCwgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTUFJTl9NRU5VX1NDRU5FX0tFWSB9IGZyb20gJy4uL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiwgV29ybGRFdmVudERiIH0gZnJvbSAnLi4vLi4vZGIvd29ybGQtZXZlbnQtZGInXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuaW1wb3J0IEZpbGVDb25maWcgPSBQaGFzZXIuVHlwZXMuTG9hZGVyLkZpbGVDb25maWdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuZXhwb3J0IGNvbnN0IEJPT1RfU0NFTkVfS0VZID0gJ0Jvb3QnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBCT09UX1NDRU5FX0tFWSxcbn1cblxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjVcblxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMFxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGgsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgcHJvZ3Jlc3NCYXJXaWR0aCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0LFxuICAgICAgMHgwMDAwMDAsXG4gICAgKVxuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICAxMCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsXG4gICAgICAweDg4ODg4OCxcbiAgICApXG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpXG5cbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZVxuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDBcbiAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7cGVyY2VudH0lYClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZTogRmlsZUNvbmZpZykgPT4ge1xuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICBsb2FkaW5nVGV4dC5kZXN0cm95KClcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKVxuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXIuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KClcbiAgICAgIHRoaXMubGF1bmNoR2FtZSgpXG4gICAgfSlcblxuICAgIHRoaXMubG9hZEFzc2V0cygpXG4gIH1cblxuICBwcml2YXRlIGxhdW5jaEdhbWUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgdXJsSW5mbyA9IGdldFVybEluZm8oKVxuICAgIGlmICh1cmxJbmZvKSB7XG4gICAgICBhd2FpdCB0aGlzLmpvaW5PclJlc3RvcmVHYW1lKHVybEluZm8pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTUFJTl9NRU5VX1NDRU5FX0tFWSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5PclJlc3RvcmVHYW1lID0gYXN5bmMgKHVybEluZm86IFVybEluZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB3b3JsZEV2ZW50RGIgPSBhd2FpdCBvcGVuV29ybGRFdmVudERiKClcbiAgICBjb25zdCBnYW1lSWQgPSB1cmxJbmZvLmdhbWVJZFxuICAgIGNvbnN0IHBsYXllcklkID0gdXJsSW5mby5wbGF5ZXJJZFxuICAgIGNvbnN0IGlzU2VydmVyID0gYXdhaXQgd29ybGRFdmVudERiLmhhc0V2ZW50c0ZvckdhbWUoZ2FtZUlkKVxuICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgYXdhaXQgdGhpcy5yZXN0b3JlR2FtZUFzU2VydmVyKGdhbWVJZCwgd29ybGRFdmVudERiKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLmpvaW5PclJlc3RvcmVDbGllbnQoZ2FtZUlkLCBwbGF5ZXJJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5PclJlc3RvcmVDbGllbnQgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQsIHBsYXllcklkOiBPcHRpb248UGxheWVySWQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmNvbm5lY3QoZ2FtZUlkKVxuICAgIGlmIChwbGF5ZXJJZCkge1xuICAgICAgdGhpcy5yZWpvaW5Bc0NsaWVudChjbGllbnQsIGdhbWVJZCwgcGxheWVySWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuam9pbkFzQ2xpZW50KGNsaWVudCwgZ2FtZUlkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbkFzQ2xpZW50ID0gYXN5bmMgKGNsaWVudDogQ2xpZW50LCBnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHsgcGxheWVySWQsIHdvcmxkU3RhdGUgfSA9IGF3YWl0IGNsaWVudC5qb2luKClcbiAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkLCBwbGF5ZXJJZCB9KVxuICAgIHRoaXMuam9pbkdhbWUod29ybGRTdGF0ZSwgY2xpZW50LCBwbGF5ZXJJZClcbiAgfVxuXG4gIHByaXZhdGUgcmVqb2luQXNDbGllbnQgPSBhc3luYyAoY2xpZW50OiBDbGllbnQsIGdhbWVJZDogR2FtZUlkLCBwbGF5ZXJJZDogUGxheWVySWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gYXdhaXQgY2xpZW50LnJlam9pbihwbGF5ZXJJZClcbiAgICB0aGlzLmpvaW5HYW1lKHdvcmxkU3RhdGUsIGNsaWVudCwgcGxheWVySWQpXG4gIH1cblxuICBwcml2YXRlIGpvaW5HYW1lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGNsaWVudDogQ2xpZW50LCBwbGF5ZXJJZDogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHdvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IGNsaWVudCwgd29ybGRTdGF0ZSwgcGxheWVySWQgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50LCB3b3JsZFN0YXRlLCBwbGF5ZXJJZCB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUdhbWVBc1NlcnZlciA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgd29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBzZXJ2ZXIgPSBhd2FpdCBTZXJ2ZXIucmVzdG9yZUdhbWUod29ybGRFdmVudERiLCBnYW1lSWQpXG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IHNlcnZlci53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciwgd29ybGRTdGF0ZTogd29ybGRTdGF0ZSwgcGxheWVySWQ6IDEgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyLCB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLCBwbGF5ZXJJZDogMSB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaGV4LXRpbGVzZXQtcGFja1xuICAgIHRoaXMubG9hZC5pbWFnZSgnbGxhbWEnLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWFfMTQucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2hvdXJnbGFzcy1pY29uXG4gICAgdGhpcy5sb2FkLmltYWdlKCdob3VyZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvSG91cmdsYXNzLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy10ZXh0dXJlcy10aWxlc1xuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtdGV4dHVyZVxuICAgIHRoaXMubG9hZC5pbWFnZSgnZ3Jhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvZ3Jhc3MyLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9wdWRkbGUtY29ycHNlc1xuICAgIHRoaXMubG9hZC5pbWFnZSgnc3BpdCcsICdhc3NldHMvc3ByaXRlcy9wdWRkbGVfbGlnaHRfYmx1ZS5wbmcnKVxuXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC8zNy1oaXRzcHVuY2hlc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzEsICdhc3NldHMvYXVkaW8vaGl0MTQubXAzLm1wMycpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMiwgJ2Fzc2V0cy9hdWRpby9oaXQxNy5tcDMubXAzJylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18zLCAnYXNzZXRzL2F1ZGlvL2hpdDE4Lm1wMy5tcDMnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbWFsZS1ncnVudHllbGxpbmctc291bmRzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5ERUFUSCwgJ2Fzc2V0cy9hdWRpby8xeWVsbDQud2F2JylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLWZvb3Qtc3RlcC1zb3VuZHMteW8tZnJhbmtpZVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuV0FMSywgJ2Fzc2V0cy9hdWRpby9zZnhfc3RlcF9ncmFzc19sLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC91aS1zb3VuZC1lZmZlY3RzLXBhY2tcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLk5FV19UVVJOLCAnYXNzZXRzL2F1ZGlvL01FTlUgQV9TZWxlY3Qud2F2JylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlksICdhc3NldHMvYXVkaW8vTUVOVSBCX1NlbGVjdC53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVELCAnYXNzZXRzL2F1ZGlvL01FU1NBR0UtQl9EZWNsaW5lLndhdicpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2NsZWFyLXNraWVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDLCAnYXNzZXRzL2F1ZGlvL0NsZWFyIFNraWVzLm1wMycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2d1aS1zb3VuZC1lZmZlY3RzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5DTElDSywgJ2Fzc2V0cy9hdWRpby9jbGljay53YXYnKVxuICAgIC8vaHR0cHM6Ly9mcmVlc291bmQub3JnL3Blb3BsZS90dmxhdWRpby9zb3VuZHMvMjY3ODk3L1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuU1BJVCwgJ2Fzc2V0cy9hdWRpby9zcGl0LndhdicpXG4gIH1cbn1cblxuaW50ZXJmYWNlIFVybEluZm8ge1xuICBnYW1lSWQ6IEdhbWVJZFxuICBwbGF5ZXJJZD86IFBsYXllcklkXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVcmxJbmZvID0gKCk6IE9wdGlvbjxVcmxJbmZvPiA9PiB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaFxuICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBwYXRoID0gaGFzaC5zdWJzdHIoMSlcbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJylcbiAgY29uc3QgZ2FtZUlkID0gc2VnbWVudHNbMF1cbiAgY29uc3QgcGxheWVySWQgPSBzZWdtZW50cy5sZW5ndGggPiAxID8gTnVtYmVyLnBhcnNlSW50KHNlZ21lbnRzWzFdKSA6IHVuZGVmaW5lZFxuICByZXR1cm4geyBnYW1lSWQsIHBsYXllcklkIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFVybEluZm8gPSAodXJsSW5mbzogVXJsSW5mbyk6IHZvaWQgPT4ge1xuICBsZXQgaGFzaCA9IHVybEluZm8uZ2FtZUlkXG4gIGlmICh1cmxJbmZvLnBsYXllcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICBoYXNoICs9ICcvJyArIHVybEluZm8ucGxheWVySWRcbiAgfVxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hcbn1cbiIsImltcG9ydCBDb2xvciA9IFBoYXNlci5EaXNwbGF5LkNvbG9yXG5cbmV4cG9ydCB0eXBlIENvbG91clN0cmluZyA9IHN0cmluZ1xuZXhwb3J0IHR5cGUgQ29sb3VyTnVtYmVyID0gbnVtYmVyXG5cbmV4cG9ydCBjb25zdCBjb2xvdXJOdW1iZXIgPSAoY29sb3VyU3RyaW5nOiBDb2xvdXJTdHJpbmcpOiBDb2xvdXJOdW1iZXIgPT4gQ29sb3IuSGV4U3RyaW5nVG9Db2xvcihjb2xvdXJTdHJpbmcpLmNvbG9yXG5cbmV4cG9ydCBjb25zdCBIRUFMVEhfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzAwMDAwMCcpXG5leHBvcnQgY29uc3QgSEVBTFRIX0VNUFRZX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmZmZicpXG5leHBvcnQgY29uc3QgSEVBTFRIX0ZVTExfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjNGRmMDM3JylcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIT1ZFUl9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2NjZmZiZScpXG5leHBvcnQgY29uc3QgU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZDA4JylcbmV4cG9ydCBjb25zdCBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzlkZjFlNycpXG5cbmV4cG9ydCBjb25zdCBBQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2NjY2MwMCdcbmV4cG9ydCBjb25zdCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2ZmZmYwMCdcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9USU5UUyA9IFtcbiAgJyNmZmJiYmInLFxuICAnI2JiYmJmZicsXG4gICcjYmJmZmJiJyxcbiAgJyNiYmZmZmYnLFxuICAnI2ZmZmZiYicsXG4gICcjZmZiYmZmJyxcbiAgJyNmZmZmZmYnLFxuICAnI2JiYmJiYicsXG5dLm1hcChjb2xvdXJOdW1iZXIpXG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGNhbkF0dGFja09jY3VyIH0gZnJvbSAnLi4vc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNsYXNzIENvbWJpbmVkU3RhdGUge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHVibGljIGZpbmRTZWxlY3RlZFVuaXQgPSAoKTogT3B0aW9uPFVuaXQ+ID0+XG4gICAgdGhpcy5zZWxlY3RlZEhleCA/IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMuc2VsZWN0ZWRIZXgpIDogdW5kZWZpbmVkXG5cbiAgcHVibGljIGdldCBzZWxlY3RlZEhleCgpOiBPcHRpb248SGV4PiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGxheWVySWQoKTogUGxheWVySWQge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkXG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyB1bml0Q291bGRQb3RlbnRpYWxseU1vdmUgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09PSB0aGlzLnBsYXllcklkICYmIHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrID0gKHVuaXQ6IFVuaXQpOiBib29sZWFuID0+XG4gICAgdW5pdC5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMgJiYgIXRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVyblxuXG4gIHB1YmxpYyB1bml0Q2FuTW92ZVRvSGV4ID0gKHVuaXQ6IFVuaXQsIGhleDogSGV4KTogYm9vbGVhbiA9PlxuICAgIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlKHVuaXQpICYmXG4gICAgaGV4LmlzQWRqYWNlbnRUbyh1bml0LmxvY2F0aW9uKSAmJlxuICAgIHRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyhoZXgpICYmXG4gICAgIXRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGhleClcblxuICAvKipcbiAgICogQHJldHVybiB0aGUgdW5pdCBpbiB0aGUgaGV4IHRvIGF0dGFjaywgaWYgYW4gYXR0YWNrIGlzIHBvc3NpYmxlLCBlbHNlIHVuZGVmaW5lZC5cbiAgICovXG4gIHB1YmxpYyB1bml0Q2FuQXR0YWNrSGV4ID0gKHVuaXQ6IFVuaXQsIGxvY2F0aW9uOiBIZXgsIGF0dGFja1R5cGU6IEF0dGFja1R5cGUpOiBPcHRpb248VW5pdD4gPT4ge1xuICAgIGNvbnN0IHRhcmdldFVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihsb2NhdGlvbilcbiAgICBpZiAoXG4gICAgICB0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHVuaXQpICYmXG4gICAgICB0YXJnZXRVbml0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRhcmdldFVuaXQucGxheWVySWQgIT09IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWQgJiZcbiAgICAgIGNhbkF0dGFja09jY3VyKGF0dGFja1R5cGUsIHVuaXQubG9jYXRpb24sIGxvY2F0aW9uKVxuICAgIClcbiAgICAgIHJldHVybiB0YXJnZXRVbml0XG4gIH1cblxuICBwdWJsaWMgZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMgPSAodW5pdElkPzogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCBjYW5kaWRhdGVVbml0cyA9IFIuc29ydEJ5KFxuICAgICAgKHVuaXQpID0+IHVuaXQuaWQsXG4gICAgICB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdHNGb3JQbGF5ZXIodGhpcy5wbGF5ZXJJZCkuZmlsdGVyKCh1bml0KSA9PiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMpLFxuICAgIClcbiAgICBpZiAodW5pdElkKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCA+IHVuaXRJZCkpID8/XG4gICAgICAgIFIuaGVhZChjYW5kaWRhdGVVbml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgPCB1bml0SWQpKVxuICAgICAgKVxuICAgIGVsc2UgcmV0dXJuIFIuaGVhZChjYW5kaWRhdGVVbml0cylcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBsYXllciB3aXRoIGlkICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHBsYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLW1hcCdcblxuZXhwb3J0IGNvbnN0IGNlbnRlclBvaW50ID0gKGhleDogSGV4KTogUG9pbnQgPT4gKHtcbiAgeDogaGV4LnggKiBNYXRoLnNxcnQoMykgKyAoaGV4LnkgKiBNYXRoLnNxcnQoMykpIC8gMixcbiAgeTogKGhleC55ICogMykgLyAyLFxufSlcblxuZXhwb3J0IGNvbnN0IGZyb21Qb2ludCA9IChwb2ludDogUG9pbnQpOiBIZXggPT4ge1xuICBjb25zdCB4ID0gKHBvaW50LnggKiBNYXRoLnNxcnQoMykpIC8gMyAtIHBvaW50LnkgLyAzXG4gIGNvbnN0IHkgPSAoMiAqIHBvaW50LnkpIC8gM1xuICByZXR1cm4gcm91bmQobmV3IEhleCh4LCB5KSlcbn1cblxuY29uc3Qgcm91bmQgPSAoaGV4OiBIZXgpOiBIZXggPT4ge1xuICBjb25zdCByeCA9IE1hdGgucm91bmQoaGV4LngpXG4gIGNvbnN0IHJ5ID0gTWF0aC5yb3VuZChoZXgueSlcbiAgY29uc3QgcnogPSBNYXRoLnJvdW5kKGhleC56KVxuXG4gIGNvbnN0IHhEaWZmID0gTWF0aC5hYnMocnggLSBoZXgueClcbiAgY29uc3QgeURpZmYgPSBNYXRoLmFicyhyeSAtIGhleC55KVxuICBjb25zdCB6RGlmZiA9IE1hdGguYWJzKHJ6IC0gaGV4LnkpXG5cbiAgaWYgKHhEaWZmID4geURpZmYgJiYgeERpZmYgPiB6RGlmZikgcmV0dXJuIG5ldyBIZXgoLXJ5IC0gcnosIHJ5KVxuICBlbHNlIGlmICh5RGlmZiA+IHpEaWZmKSByZXR1cm4gbmV3IEhleChyeCwgLXJ4IC0gcnopXG4gIGVsc2UgcmV0dXJuIG5ldyBIZXgocngsIHJ5KVxufVxuXG5jb25zdCBoZXhBbmdsZSA9IE1hdGguUEkgLyAzXG5jb25zdCBoZXhPZmZzZXQgPSBNYXRoLlBJIC8gNlxuXG5jb25zdCBoZXhDb3JuZXIgPSAoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyLCBpOiBudW1iZXIpOiBQb2ludCA9PiB7XG4gIGNvbnN0IGFuZ2xlUmFkaWFucyA9IGhleEFuZ2xlICogaSAtIGhleE9mZnNldFxuICBjb25zdCB4ID0gY2VudGVyLnggKyBzaXplICogTWF0aC5jb3MoYW5nbGVSYWRpYW5zKVxuICBjb25zdCB5ID0gY2VudGVyLnkgKyBzaXplICogTWF0aC5zaW4oYW5nbGVSYWRpYW5zKVxuICByZXR1cm4geyB4LCB5IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBoZXhDb3JuZXJzKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8UG9pbnQ+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB5aWVsZCBoZXhDb3JuZXIoY2VudGVyLCBzaXplLCBpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtYXBIZWlnaHQgPSAobWFwOiBXb3JsZE1hcCk6IG51bWJlciA9PiAobWFwLmhlaWdodCAqIDMpIC8gMlxuXG5leHBvcnQgY29uc3QgaGV4V2lkdGggPSAoaGV4U2l6ZTogbnVtYmVyKTogbnVtYmVyID0+IGhleFNpemUgKiBNYXRoLnNxcnQoMylcbiIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC9ib290LXNjZW5lJ1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tICcuL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUnXG5pbXBvcnQgeyBMb2JieVNjZW5lIH0gZnJvbSAnLi9sb2JieS9sb2JieS1zY2VuZSdcblxuZXhwb3J0IGRlZmF1bHQgW0Jvb3RTY2VuZSwgR2FtZVNjZW5lLCBNYWluTWVudVNjZW5lLCBMb2JieVNjZW5lXVxuIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEdBTUVfU0NFTkVfS0VZLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IExvYmJ5RGlzcGxheU9iamVjdHMgfSBmcm9tICcuL2xvYmJ5LWRpc3BsYXktb2JqZWN0cydcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uLy4uL3NlcnZlci93b3JsZC1zdGF0ZS1vd25lcidcblxuZXhwb3J0IGNsYXNzIENyZWF0ZWRMb2JieVNjZW5lIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBsb2JieURpc3BsYXlPYmplY3RzOiBMb2JieURpc3BsYXlPYmplY3RzXG4gIHByaXZhdGUgbGlzdGVuZXI/OiBXb3JsZEV2ZW50TGlzdGVuZXJcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50LCBwbGF5ZXJJZDogUGxheWVySWQsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wYXVzZU9uQmx1ciA9IGZhbHNlXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLkNMSUNLKVxuICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKEF1ZGlvS2V5cy5ORVdfVFVSTilcbiAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZChBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSlcbiAgICB0aGlzLmxvYmJ5RGlzcGxheU9iamVjdHMgPSB0aGlzLm1ha2VMb2JieURpc3BsYXlPYmplY3RzKHNjZW5lLCBwbGF5ZXJJZClcbiAgICBpZiAoc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBDbGllbnQpIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoc2VydmVyT3JDbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0QXNTZXJ2ZXIoc2VydmVyT3JDbGllbnQpXG4gICAgfVxuICAgIHRoaXMuc3luYygpXG4gIH1cblxuICBwcml2YXRlIG1ha2VMb2JieURpc3BsYXlPYmplY3RzID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHBsYXllcklkOiBQbGF5ZXJJZCkgPT5cbiAgICBuZXcgTG9iYnlEaXNwbGF5T2JqZWN0cyhzY2VuZSwgcGxheWVySWQsIHRoaXMuaGFuZGxlU3RhcnRHYW1lLCB0aGlzLmhhbmRsZUNoYW5nZVBsYXllck5hbWUpXG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpID0+IHRoaXMuaGFuZGxlV29ybGRFdmVudChldmVudCwgY2xpZW50KVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgIGNsaWVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhdW5jaEdhbWVTY2VuZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSlcbiAgICAgICAgdGhpcy5zeW5jKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3luYygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50MiA9IChldmVudDogV29ybGRFdmVudCwgc2VydmVyOiBTZXJ2ZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ORVdfVFVSTilcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIpIHtcbiAgICAgICAgICBzZXJ2ZXIucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXVuY2hHYW1lU2NlbmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlkpXG4gICAgICAgIHRoaXMuc3luYygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnN5bmMoKVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGxhdW5jaEdhbWVTY2VuZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7XG4gICAgICBzZXJ2ZXJPckNsaWVudDogdGhpcy5zZXJ2ZXJPckNsaWVudCxcbiAgICAgIHdvcmxkU3RhdGU6IHRoaXMud29ybGRTdGF0ZSxcbiAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIH1cbiAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVBsYXllck5hbWUgPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB0aGlzLmRpc3BhdGNoQWN0aW9uKHsgdHlwZTogJ2NoYW5nZVBsYXllck5hbWUnLCBuYW1lIH0pXG5cbiAgcHJpdmF0ZSBkaXNwYXRjaEFjdGlvbiA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuaGFuZGxlQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJ2ZXJPckNsaWVudC5zZW5kQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3luYyA9ICgpOiB2b2lkID0+IHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cy5zeW5jKHRoaXMud29ybGRTdGF0ZSlcblxuICBwcml2YXRlIGFjdEFzU2VydmVyID0gKHNlcnZlcjogU2VydmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChldmVudCkgPT4gdGhpcy5oYW5kbGVXb3JsZEV2ZW50MihldmVudCwgc2VydmVyKVxuICAgIHNlcnZlci5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKSA9PiB0aGlzLmRpc3BhdGNoQWN0aW9uKHsgdHlwZTogJ3N0YXJ0R2FtZScgfSlcbn1cbiIsImltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi8uLi91aS9tZW51LWJ1dHRvbidcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuXG5leHBvcnQgY2xhc3MgTG9iYnlEaXNwbGF5T2JqZWN0cyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG9uU3RhcnRHYW1lOiBWb2lkRnVuY3Rpb25cbiAgcHJpdmF0ZSByZWFkb25seSBvbkNoYW5nZVBsYXllck5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWRcblxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllck5hbWVUZXh0czogTWFwPFBsYXllcklkLCBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFydEdhbWVCdXR0b24/OiBNZW51QnV0dG9uXG4gIHByaXZhdGUgcmVhZG9ubHkgd2FpdGluZ0Zvckhvc3RUZXh0PzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxuICAgIHBsYXllcklkOiBQbGF5ZXJJZCxcbiAgICBvblN0YXJ0R2FtZTogVm9pZEZ1bmN0aW9uLFxuICAgIG9uQ2hhbmdlUGxheWVyTmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZCxcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5vblN0YXJ0R2FtZSA9IG9uU3RhcnRHYW1lXG4gICAgdGhpcy5vbkNoYW5nZVBsYXllck5hbWUgPSBvbkNoYW5nZVBsYXllck5hbWVcbiAgICB0aGlzLnNjZW5lLmFkZC50ZXh0KDEwMCwgNTAsICdMbGFtYSBXYXJzJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpXG4gICAgaWYgKHBsYXllcklkID09PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24gPSBuZXcgTWVudUJ1dHRvbih0aGlzLnNjZW5lLCAxMDAsIDAsICdTdGFydCBHYW1lJywgdGhpcy5oYW5kbGVTdGFydEdhbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dCgxMDAsIDAsICdXYWl0aW5nIGZvciBob3N0IHRvIHN0YXJ0IHRoZSBnYW1lLi4uJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgIHRoaXMub25TdGFydEdhbWUoKVxuICB9XG5cbiAgcHVibGljIHN5bmMgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJlcXVpcmVkUGxheWVySWRzID0gd29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJZHMgPSBBcnJheS5mcm9tKHRoaXMucGxheWVyTmFtZVRleHRzLmtleXMoKSlcbiAgICBjb25zdCBzdXJwbHVzUGxheWVySWRzID0gUi5kaWZmZXJlbmNlKGN1cnJlbnRQbGF5ZXJJZHMsIHJlcXVpcmVkUGxheWVySWRzKVxuICAgIGZvciAoY29uc3QgcGxheWVySWQgb2Ygc3VycGx1c1BsYXllcklkcykge1xuICAgICAgdGhpcy5wbGF5ZXJOYW1lVGV4dHMuZ2V0KHBsYXllcklkKT8uZGVzdHJveSgpXG4gICAgfVxuICAgIGNvbnN0IG1pc3NpbmdQbGF5ZXJJZHMgPSBSLmRpZmZlcmVuY2UocmVxdWlyZWRQbGF5ZXJJZHMsIGN1cnJlbnRQbGF5ZXJJZHMpXG4gICAgZm9yIChjb25zdCBwbGF5ZXJJZCBvZiBtaXNzaW5nUGxheWVySWRzKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB3b3JsZFN0YXRlLmdldFBsYXllcihwbGF5ZXJJZClcbiAgICAgIGNvbnN0IHBsYXllclRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgICAudGV4dCgxMDAsIDAsIHBsYXllci5uYW1lLCB7XG4gICAgICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgICAgIGZpeGVkV2lkdGg6IDIwMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBsYXllcklkID09PSB0aGlzLnBsYXllcklkID8gJyMzMzMzMzMnIDogJyMwMDAwMDAnLFxuICAgICAgICB9KVxuICAgICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAgIC5zZXRQYWRkaW5nKDAsIDAsIDAsIDApXG4gICAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnNjZW5lLnBsdWdpbnMuZ2V0KCdyZXhUZXh0RWRpdCcpIGFzIGFueVxuICAgICAgICAgICAgcGx1Z2luLmVkaXQocGxheWVyVGV4dCwge1xuICAgICAgICAgICAgICBvbkNsb3NlOiAoKSA9PiB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZShwbGF5ZXJUZXh0LnRleHQpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB0aGlzLnBsYXllck5hbWVUZXh0cy5zZXQocGxheWVySWQsIHBsYXllclRleHQpXG4gICAgfVxuICAgIGxldCB5ID0gMTAwXG4gICAgY29uc3Qgc29ydGVkUGxheWVycyA9IFIuc29ydEJ5KChwbGF5ZXIpID0+IHBsYXllci5pZCwgd29ybGRTdGF0ZS5wbGF5ZXJzKVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHNvcnRlZFBsYXllcnMpIHtcbiAgICAgIGNvbnN0IHBsYXllclRleHQgPSB0aGlzLnBsYXllck5hbWVUZXh0cy5nZXQocGxheWVyLmlkKVxuICAgICAgcGxheWVyVGV4dD8uc2V0VGV4dChwbGF5ZXIubmFtZSkuc2V0WSh5KVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICBpZiAodGhpcy5zdGFydEdhbWVCdXR0b24pIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLnNldFkoeSlcbiAgICB9XG4gICAgaWYgKHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0KSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dC5zZXRZKHkpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQ3JlYXRlZExvYmJ5U2NlbmUgfSBmcm9tICcuL2NyZWF0ZWQtbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBjb25zdCBMT0JCWV9TQ0VORV9LRVkgPSAnTG9iYnknXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9iYnlTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG4gIHBsYXllcklkOiBQbGF5ZXJJZFxuICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG59XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBMT0JCWV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBMb2JieVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHNlcnZlck9yQ2xpZW50LCBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9ID0gc2NlbmVEYXRhXG4gICAgbmV3IENyZWF0ZWRMb2JieVNjZW5lKHRoaXMsIHNlcnZlck9yQ2xpZW50LCBwbGF5ZXJJZCwgd29ybGRTdGF0ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbWFpbi1nYW1lL21vZGUnXG5pbXBvcnQgeyBNYXliZSwgT3B0aW9uLCB0b01heWJlLCB0b09wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lU3RhdGUge1xuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbW9kZTogTW9kZVxuICByZWFkb25seSBzZWxlY3RlZEhleDogT3B0aW9uPEhleD5cbiAgcmVhZG9ubHkgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcjogbnVtYmVyXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHBsYXllcklkLFxuICAgIG1vZGUsXG4gICAgc2VsZWN0ZWRIZXgsXG4gICAgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9IDAsXG4gIH06IHtcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBtb2RlOiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBPcHRpb248SGV4PlxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBudW1iZXJcbiAgfSkge1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICB0aGlzLnNlbGVjdGVkSGV4ID0gc2VsZWN0ZWRIZXhcbiAgICB0aGlzLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyXG4gICAgYXNzZXJ0KGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPj0gMClcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgbW9kZSA9IHRoaXMubW9kZSxcbiAgICBzZWxlY3RlZEhleCA9IHRvTWF5YmUodGhpcy5zZWxlY3RlZEhleCksXG4gICAgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcixcbiAgfToge1xuICAgIHBsYXllcklkPzogUGxheWVySWRcbiAgICBtb2RlPzogTW9kZVxuICAgIHNlbGVjdGVkSGV4PzogTWF5YmU8SGV4PlxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBudW1iZXJcbiAgfSA9IHt9KTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICBuZXcgTG9jYWxHYW1lU3RhdGUoeyBwbGF5ZXJJZCwgbW9kZSwgc2VsZWN0ZWRIZXg6IHRvT3B0aW9uKHNlbGVjdGVkSGV4KSwgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciB9KVxuXG4gIHB1YmxpYyBzZXRTZWxlY3RlZEhleCA9IChzZWxlY3RlZEhleDogT3B0aW9uPEhleD4pOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLmNvcHkoeyBzZWxlY3RlZEhleDogdG9NYXliZShzZWxlY3RlZEhleCkgfSlcblxuICBwdWJsaWMgc2V0TW9kZSA9IChtb2RlOiBNb2RlKTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgbW9kZSB9KVxuXG4gIHB1YmxpYyBpbmNyZW1lbnRBY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gKCk6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcjogdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyICsgMSB9KVxuXG4gIHB1YmxpYyBkZWNyZW1lbnRBY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gKCk6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcjogdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyIC0gMSB9KVxufVxuXG5leHBvcnQgY29uc3QgSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFID0gbmV3IExvY2FsR2FtZVN0YXRlKHtcbiAgcGxheWVySWQ6IDEsXG4gIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbn0pXG4iLCJpbXBvcnQgeyBNYXBEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi9tYXAtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgVW5pdERpc3BsYXlPYmplY3QgfSBmcm9tICcuL3VuaXQtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsIFRleHRzRGlzcGxheU9iamVjdCB9IGZyb20gJy4vdGV4dHMtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyByYW5kb21FbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCB7IEF0dGFja1R5cGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVBbmltYXRpb25TcGVjIHtcbiAgdHlwZTogJ21vdmUnXG4gIHVuaXRJZDogVW5pdElkXG4gIGZyb206IEhleFxuICB0bzogSGV4XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0QW5pbWF0aW9uU3BlYyB7XG4gIHR5cGU6ICdjb21iYXQnXG4gIGF0dGFja1R5cGU6IEF0dGFja1R5cGVcbiAgYXR0YWNrZXI6IHtcbiAgICB1bml0SWQ6IFVuaXRJZFxuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGtpbGxlZDogYm9vbGVhblxuICB9XG4gIGRlZmVuZGVyOiB7XG4gICAgdW5pdElkOiBVbml0SWRcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgZGFtYWdlOiBudW1iZXJcbiAgICBraWxsZWQ6IGJvb2xlYW5cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBbmltYXRpb25TcGVjID0gTW92ZUFuaW1hdGlvblNwZWMgfCBDb21iYXRBbmltYXRpb25TcGVjXG5cbmV4cG9ydCBjbGFzcyBEaXNwbGF5T2JqZWN0cyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHJlYWRvbmx5IG1hcERpc3BsYXlPYmplY3Q6IE1hcERpc3BsYXlPYmplY3RcbiAgcHJpdmF0ZSByZWFkb25seSB1bml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzOiBNYXA8VW5pdElkLCBVbml0RGlzcGxheU9iamVjdD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSB0ZXh0c0Rpc3BsYXlPYmplY3Q6IFRleHRzRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gIHByaXZhdGUgaXNBbmltYXRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSBhbmltYXRpb25zOiBBbmltYXRpb25TcGVjW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmUsXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IGxvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdCA9IG5ldyBNYXBEaXNwbGF5T2JqZWN0KHNjZW5lLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3QgPSBuZXcgVGV4dHNEaXNwbGF5T2JqZWN0KFxuICAgICAgc2NlbmUsXG4gICAgICB0aGlzLndvcmxkU3RhdGUsXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlLFxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICAgKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVBvaW50ZXJNb3ZlID0gKHBvaW50OiBQb2ludCk6IHZvaWQgPT4gdGhpcy5tYXBEaXNwbGF5T2JqZWN0Py5oYW5kbGVQb2ludGVyTW92ZShwb2ludClcblxuICBwdWJsaWMgaGFzQ2xpY2tIYW5kbGVyRm9yID0gKHBvaW50OiBQb2ludCk6IGJvb2xlYW4gPT4gdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3QuaGFzQ2xpY2tIYW5kbGVyRm9yKHBvaW50KVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgYW5pbWF0aW9uOiBPcHRpb248QW5pbWF0aW9uU3BlYz4sXG4gICk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3Q/LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3Q/LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbnMgPSBSLmFwcGVuZChhbmltYXRpb24pKHRoaXMuYW5pbWF0aW9ucylcbiAgICAgIHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKS5mb3JFYWNoKHRoaXMubWFuYWdlVW5pdEFzQmVpbmdBbmltYXRlZClcbiAgICAgIHRoaXMudHJpZ2dlckFuaW1hdGlvbnMoKVxuICAgIH1cblxuICAgIHRoaXMuc3luY1VuaXRzKClcbiAgfVxuXG4gIHByaXZhdGUgc3luY1VuaXRzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVtb3ZlVW5pdERpc3BsYXlPYmplY3RzTm9Mb25nZXJOZWVkZWQoKVxuICAgIGNvbnN0IHVuaXRzVG9TeW5jID0gdGhpcy53b3JsZFN0YXRlLnVuaXRzLmZpbHRlcigodW5pdCkgPT4gIXRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuaGFzKHVuaXQuaWQpKVxuICAgIGZvciAoY29uc3QgdW5pdCBvZiB1bml0c1RvU3luYykge1xuICAgICAgbGV0IHVuaXREaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXQuaWQpXG4gICAgICBpZiAoIXVuaXREaXNwbGF5T2JqZWN0KSB7XG4gICAgICAgIHVuaXREaXNwbGF5T2JqZWN0ID0gbmV3IFVuaXREaXNwbGF5T2JqZWN0KHRoaXMuc2NlbmUsIHVuaXQpXG4gICAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0LmlkLCB1bml0RGlzcGxheU9iamVjdClcbiAgICAgIH1cbiAgICAgIHVuaXREaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVW5pdERpc3BsYXlPYmplY3RzTm9Mb25nZXJOZWVkZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3VycGx1c1VuaXRJZHMgPSBSLmRpZmZlcmVuY2UoXG4gICAgICBBcnJheS5mcm9tKHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmtleXMoKSksXG4gICAgICB0aGlzLndvcmxkU3RhdGUudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LmlkKSxcbiAgICApXG4gICAgZm9yIChjb25zdCB1bml0SWQgb2Ygc3VycGx1c1VuaXRJZHMpIHtcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpPy5kZXN0cm95KClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyQW5pbWF0aW9ucyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvY2Vzc0FuaW1hdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VxdWVuY2VBbmltYXRpb25zID0gKCk6IHtcbiAgICBhbmltYXRpb25zVG9QZXJmb3JtTm93OiBBbmltYXRpb25TcGVjW11cbiAgICBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXI6IEFuaW1hdGlvblNwZWNbXVxuICB9ID0+IHtcbiAgICBjb25zdCB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zID0gbmV3IFNldDxVbml0SWQ+KClcbiAgICBjb25zdCBhbmltYXRpb25zVG9QZXJmb3JtTm93ID0gW11cbiAgICBjb25zdCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgPSBbXVxuICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIHRoaXMuYW5pbWF0aW9ucykge1xuICAgICAgY29uc3QgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24gPSB0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICAgIGNvbnN0IGFmZmVjdGVkQnlFYXJsaWVyQW5pbWF0aW9ucyA9IFIuYW55KFxuICAgICAgICAodW5pdElkKSA9PiB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zLmhhcyh1bml0SWQpLFxuICAgICAgICB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbixcbiAgICAgIClcbiAgICAgIGlmIChhZmZlY3RlZEJ5RWFybGllckFuaW1hdGlvbnMpIHtcbiAgICAgICAgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyLnB1c2goYW5pbWF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdy5wdXNoKGFuaW1hdGlvbilcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdW5pdElkIG9mIHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKSB7XG4gICAgICAgIHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMuYWRkKHVuaXRJZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdywgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0FuaW1hdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICB0cnkge1xuICAgICAgd2hpbGUgKHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHsgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdywgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyIH0gPSB0aGlzLnNlcXVlbmNlQW5pbWF0aW9ucygpXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChhbmltYXRpb25zVG9QZXJmb3JtTm93Lm1hcCh0aGlzLnJ1bkFuaW1hdGlvbikpXG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cpIHtcbiAgICAgICAgICB0aGlzLnJlbGVhc2VVbml0c0Zyb21CZWluZ0FuaW1hdGVkV2hlcmVOb0xvbmdlck5lZWRlZChhbmltYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQgPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdElkc0luQW5pbWF0aW9uID0gdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgY29uc3QgdW5pdElkc0luUmVtYWluaW5nQW5pbWF0aW9ucyA9IHRoaXMuZ2V0VW5pdHNJbnZvbHZlZEluQW5pbWF0aW9ucygpXG4gICAgY29uc3QgdW5pdElkc1RvUmVsZWFzZSA9IFIuZGlmZmVyZW5jZSh1bml0SWRzSW5BbmltYXRpb24sIHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMpXG4gICAgdW5pdElkc1RvUmVsZWFzZS5mb3JFYWNoKHRoaXMucmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZClcbiAgfVxuXG4gIHByaXZhdGUgbWFuYWdlVW5pdEFzQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmIChkaXNwbGF5T2JqZWN0KSB7XG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdElkLCBkaXNwbGF5T2JqZWN0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7dW5pdElkfWBcbiAgICB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh1bml0KSB7XG4gICAgICBkaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheU9iamVjdC5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMgPSAoKTogVW5pdElkW10gPT4gUi5jaGFpbih0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLCB0aGlzLmFuaW1hdGlvbnMpXG5cbiAgcHJpdmF0ZSBnZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiBVbml0SWRbXSA9PiB7XG4gICAgc3dpdGNoIChhbmltYXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLnVuaXRJZF1cbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLmF0dGFja2VyLnVuaXRJZCwgYW5pbWF0aW9uLmRlZmVuZGVyLnVuaXRJZF1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bkFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBzd2l0Y2ggKGFuaW1hdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5Nb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ29tYmF0QW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhbmltYXRpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBydW5Nb3ZlQW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbjogTW92ZUFuaW1hdGlvblNwZWMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYW5pbWF0aW9uLnVuaXRJZClcbiAgICBpZiAoIWRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHthbmltYXRpb24udW5pdElkfWBcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLldBTEspXG4gICAgYXdhaXQgZGlzcGxheU9iamVjdC5ydW5Nb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbi5mcm9tLCBhbmltYXRpb24udG8pXG4gIH1cblxuICBwcml2YXRlIHJ1bkNvbWJhdEFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IENvbWJhdEFuaW1hdGlvblNwZWMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gYW5pbWF0aW9uXG4gICAgY29uc3QgYXR0YWNrZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYXR0YWNrZXIudW5pdElkKVxuICAgIGlmICghYXR0YWNrZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YXR0YWNrZXIudW5pdElkfWBcbiAgICBjb25zdCBkZWZlbmRlckRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChkZWZlbmRlci51bml0SWQpXG4gICAgaWYgKCFkZWZlbmRlckRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHtkZWZlbmRlci51bml0SWR9YFxuICAgIGlmIChhbmltYXRpb24uYXR0YWNrVHlwZSA9PT0gJ21lbGVlJykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KHJhbmRvbUVsZW1lbnQoW0F1ZGlvS2V5cy5BVFRBQ0tfMSwgQXVkaW9LZXlzLkFUVEFDS18yLCBBdWRpb0tleXMuQVRUQUNLXzNdKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5TUElUKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkIHx8IGRlZmVuZGVyLmtpbGxlZCkge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ERUFUSClcbiAgICB9XG4gICAgY29uc3Qgc2ltdWx0YW5lb3VzQW5pbWF0aW9uczogUHJvbWlzZTx2b2lkPltdID0gW11cbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuQXR0YWNrQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuU3BpdEFuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKCkpXG4gICAgfVxuICAgIGlmIChkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChkZWZlbmRlckRpc3BsYXlPYmplY3QucnVuRGVhdGhBbmltYXRpb24oKSlcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoc2ltdWx0YW5lb3VzQW5pbWF0aW9ucylcbiAgICBpZiAoYXR0YWNrZXIuZGFtYWdlID4gMCkgYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgYXR0YWNrZXIuZGFtYWdlKVxuICAgIGlmIChkZWZlbmRlci5kYW1hZ2UgPiAwKSBkZWZlbmRlckRpc3BsYXlPYmplY3QucnVuRGFtYWdlQW5pbWF0aW9uKGRlZmVuZGVyLmxvY2F0aW9uLCBkZWZlbmRlci5kYW1hZ2UpXG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZFBvaW50cywgbXVsdGlwbHlQb2ludCwgUG9pbnQsIHN1YnRyYWN0UG9pbnRzIH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBjZW50ZXJQb2ludCwgZnJvbVBvaW50IH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICBDb21iYXRXb3JsZEV2ZW50LFxuICBHYW1lT3ZlcldvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IG5vdGhpbmcsIE9wdGlvbiwgdG9NYXliZSB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUsIExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IEFMTF9BVURJT19LRVlTLCBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgbWFwVG9Mb2NhbEFjdGlvbiB9IGZyb20gJy4va2V5Ym9hcmQtbWFwcGVyJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IExvY2FsQWN0aW9uUHJvY2Vzc29yLCBMb2NhbEFjdGlvblJlc3VsdCB9IGZyb20gJy4vbG9jYWwtYWN0aW9uLXByb2Nlc3NvcidcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuLi9jb21iaW5lZC1zdGF0ZS1tZXRob2RzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IEFuaW1hdGlvblNwZWMsIERpc3BsYXlPYmplY3RzIH0gZnJvbSAnLi9kaXNwbGF5LW9iamVjdHMnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCBQb2ludGVyID0gUGhhc2VyLklucHV0LlBvaW50ZXJcblxuZXhwb3J0IGNvbnN0IEdBTUVfU0NFTkVfS0VZID0gJ0dhbWUnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBHQU1FX1NDRU5FX0tFWSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lU2NlbmVEYXRhIHtcbiAgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwbGF5ZXJJZDogUGxheWVySWRcbiAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxufVxuXG5leHBvcnQgY29uc3QgSEVYX1NJWkUgPSA0OFxuZXhwb3J0IGNvbnN0IERSQVdJTkdfT0ZGU0VUID0geyB4OiA2MCwgeTogMTAwIH1cbmV4cG9ydCBjb25zdCBoZXhDZW50ZXIgPSAoaGV4OiBIZXgpOiBQb2ludCA9PiBhZGRQb2ludHMobXVsdGlwbHlQb2ludChjZW50ZXJQb2ludChoZXgpLCBIRVhfU0laRSksIERSQVdJTkdfT0ZGU0VUKVxuXG5leHBvcnQgdHlwZSBHYW1lSWQgPSBzdHJpbmdcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgY3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgc2VydmVyT3JDbGllbnQ/OiBTZXJ2ZXIgfCBDbGllbnRcblxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFXG5cbiAgcHJpdmF0ZSBkaXNwbGF5T2JqZWN0cz86IERpc3BsYXlPYmplY3RzXG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICAvLyBDcmVhdGVcbiAgLy8gLS0tLS0tXG5cbiAgcHVibGljIGNyZWF0ZSA9IChzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5jcmVhdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dhbWUgc2NlbmUgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdGVkID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCB7IHNlcnZlck9yQ2xpZW50LCBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9ID0gc2NlbmVEYXRhXG4gICAgdGhpcy5zZXRVcFNvdW5kKClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURS5jb3B5KHsgcGxheWVySWQgfSlcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICBpZiAoc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuYWN0QXNTZXJ2ZXIoc2VydmVyT3JDbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoc2VydmVyT3JDbGllbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cyA9IG5ldyBEaXNwbGF5T2JqZWN0cyh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24pXG4gICAgdGhpcy51cGRhdGVBc0F0U3RhcnRPZlR1cm4oKVxuICAgIHRoaXMuc2V0VXBJbnB1dHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFNvdW5kID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goKGtleSkgPT4gdGhpcy5zb3VuZC5hZGQoa2V5KSlcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoYW5pbWF0aW9uPzogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlLCBhbmltYXRpb24pXG5cbiAgLy8gTmV0d29ya2luZ1xuICAvLyAtLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBjbGllbnRcbiAgICBjbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVXb3JsZEV2ZW50KVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RBc1NlcnZlciA9IChzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT4ge1xuICAgIHNlcnZlci5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnQpXG4gICAgdGhpcy53b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmNTZW5kVG9TZXJ2ZXIgPSBhc3luYyAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmICghdGhpcy5zZXJ2ZXJPckNsaWVudCkge1xuICAgICAgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBzZXJ2ZXJPckNsaWVudGBcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuaGFuZGxlQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5zZXJ2ZXJPckNsaWVudC5zZW5kQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9XG4gIH1cblxuICAvLyBJbnB1dCBoYW5kbGVyc1xuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgc2V0VXBJbnB1dHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5pbnB1dC5tb3VzZS5kaXNhYmxlQ29udGV4dE1lbnUoKVxuICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleSlcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24pXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcm1vdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBsb2NhbEFjdGlvbiA9IG1hcFRvTG9jYWxBY3Rpb24oZXZlbnQsIHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZSlcbiAgICBpZiAobG9jYWxBY3Rpb24pIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24obG9jYWxBY3Rpb24pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxvY2FsQWN0aW9uID0gKGxvY2FsQWN0aW9uOiBMb2NhbEFjdGlvbik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uUHJvY2Vzc29yID0gbmV3IExvY2FsQWN0aW9uUHJvY2Vzc29yKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbEFjdGlvblByb2Nlc3Nvci5wcm9jZXNzKGxvY2FsQWN0aW9uKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMuZW5hY3RMb2NhbEFjdGlvblJlc3VsdChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbmFjdExvY2FsQWN0aW9uUmVzdWx0ID0gKHJlc3VsdDogTG9jYWxBY3Rpb25SZXN1bHQpOiB2b2lkID0+IHtcbiAgICBpZiAocmVzdWx0Lm5ld0xvY2FsR2FtZVN0YXRlKSB7XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gcmVzdWx0Lm5ld0xvY2FsR2FtZVN0YXRlXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICAgIGlmIChyZXN1bHQud29ybGRBY3Rpb24pIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmluY3JlbWVudEFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIoKVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuXG4gICAgICB0aGlzLmFzeW5jU2VuZFRvU2VydmVyKHJlc3VsdC53b3JsZEFjdGlvbikuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlY3JlbWVudEFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIoKVxuICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnRlcjogUG9pbnRlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBvaW50ZXJQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIHRoaXMuZGlzcGxheU9iamVjdHM/LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlckRvd24gPSAocG9pbnRlcjogUG9pbnRlcik6IHZvaWQgPT4ge1xuICAgIC8vIElnbm9yZSBjbGlja3Mgb24gdGhlc2UgYXMgdGhleSBoYXZlIHRoZWlyIG93biBoYW5kbGVyc1xuICAgIGNvbnN0IHByZXNzZWRQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIGlmICh0aGlzLmRpc3BsYXlPYmplY3RzPy5oYXNDbGlja0hhbmRsZXJGb3IocHJlc3NlZFBvaW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGhleCA9IGZyb21Qb2ludChtdWx0aXBseVBvaW50KHN1YnRyYWN0UG9pbnRzKHByZXNzZWRQb2ludCwgRFJBV0lOR19PRkZTRVQpLCAxIC8gSEVYX1NJWkUpKVxuICAgIGlmIChwb2ludGVyLmJ1dHRvbiA9PT0gMikge1xuICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdnb0hleCcsIGhleCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUxlZnRDbGljayhoZXgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMb2NhbEFjdGlvbkZvckNsaWNraW5nQUhleCA9IChoZXg6IEhleCk6IExvY2FsQWN0aW9uID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdzZWxlY3RIZXgnLCBoZXggfVxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4geyB0eXBlOiAnY29tcGxldGVNb3ZlJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4IH1cbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZUF0dGFjaycsIHVuaXRJZDogbW9kZS51bml0SWQsIGhleCwgYXR0YWNrVHlwZTogbW9kZS5hdHRhY2tUeXBlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxlZnRDbGljayA9IChoZXg6IEhleCk6IHZvaWQgPT4gdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih0aGlzLmdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4KGhleCkpXG5cbiAgLy8gSGFuZGxlIHdvcmxkIGV2ZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgb2xkV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IG9sZFdvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcblxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICBjYXNlICdwbGF5ZXJDaGFuZ2VkTmFtZSc6XG4gICAgICBjYXNlICdnYW1lU3RhcnRlZCc6XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgICB0aGlzLmhhbmRsZVVuaXRNb3ZlZFdvcmxkRXZlbnQoZXZlbnQsIG9sZFdvcmxkU3RhdGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICB0aGlzLmhhbmRsZUNvbWJhdFdvcmxkRXZlbnQoZXZlbnQsIG9sZFdvcmxkU3RhdGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckVuZGVkVHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJEZWZlYXRlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyRGVmZWF0ZWQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZ2FtZU92ZXInOlxuICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKGV2ZW50KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbmV3VHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlTmV3VHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHYW1lT3ZlciA9IChldmVudDogR2FtZU92ZXJXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKGV2ZW50LnZpY3RvciA9PT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCkge1xuICAgICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDKVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllckVuZGVkVHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllckRlZmVhdGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVEKVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3VHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMudXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKCkge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogdG9NYXliZSh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKSxcbiAgICB9KVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudCA9IChldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCwgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBjb25zdCB3YXNQcmV2aW91c2x5U2VsZWN0ZWQgPVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCAmJlxuICAgICAgb2xkV29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCk/LmlkID09PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayh1bml0SWQsIHRvKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgc2VsZWN0ZWRIZXg6IHRvTWF5YmUobmV3U2VsZWN0ZWRIZXgpLFxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoeyB0eXBlOiAnbW92ZScsIHVuaXRJZCwgZnJvbSwgdG8gfSlcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sgPSAodW5pdElkOiBVbml0SWQsIGRlZmF1bHRMb2NhdGlvbjogSGV4KTogT3B0aW9uPEhleD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICAvLyBSZXRhaW4gc2VsZWN0aW9uIGlmIHVuaXQgc3RpbGwgZXhpc3RzIGFuZCB3ZSBzdGlsbCBoYXZlIGFjdGlvbiBwb2ludHMsIGVsc2Ugc2VsZWN0IG5leHQgdW5pdCAob3Igbm90aGluZyBpZiB0aGVyZSBpc24ndCBvbmUpXG4gICAgbGV0IG5ld1NlbGVjdGVkSGV4XG4gICAgaWYgKCF1bml0IHx8IHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIGNvbnN0IG5leHRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHVuaXRJZClcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gbmV4dFVuaXQ/LmxvY2F0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gZGVmYXVsdExvY2F0aW9uXG4gICAgfVxuICAgIHJldHVybiBuZXdTZWxlY3RlZEhleFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21iYXRXb3JsZEV2ZW50ID0gKGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50LCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdChhdHRhY2tlciwgZGVmZW5kZXIsIG9sZFdvcmxkU3RhdGUpXG4gICAgdGhpcy5zeW5jU2NlbmUoe1xuICAgICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgICBhdHRhY2tUeXBlOiBldmVudC5hdHRhY2tUeXBlLFxuICAgICAgYXR0YWNrZXIsXG4gICAgICBkZWZlbmRlcixcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdCA9IChcbiAgICBhdHRhY2tlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIGRlZmVuZGVyOiBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gICAgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkVW5pdElkID0gbmV3IENvbWJpbmVkU3RhdGUob2xkV29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSkuZmluZFNlbGVjdGVkVW5pdCgpPy5pZFxuICAgIGlmIChwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgPT09IGF0dGFja2VyLnVuaXRJZCAmJiBhdHRhY2tlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKGF0dGFja2VyLnVuaXRJZCwgYXR0YWNrZXIubG9jYXRpb24pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICAgICAgICBzZWxlY3RlZEhleDogdG9NYXliZShuZXdTZWxlY3RlZEhleCksXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZXNlbGVjdCB1bml0IGtpbGxlZCBieSBhbm90aGVyIHBsYXllclxuICAgICAgaWYgKGRlZmVuZGVyLmtpbGxlZCAmJiBkZWZlbmRlci51bml0SWQgPT09IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCAmJiBkZWZlbmRlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgICAgc2VsZWN0ZWRIZXg6IG5vdGhpbmcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2EnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnbWVsZWUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncyc6XG4gICAgICBpZiAobW9kZS50eXBlID09PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9XG4gICAgICBicmVha1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tUeXBlLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleCwgYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3ROZXh0VW5pdCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgY29uc3QgdW5pdFRvU2VsZWN0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHNlbGVjdGVkVW5pdD8uaWQpXG4gICAgaWYgKHVuaXRUb1NlbGVjdCkge1xuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgICAgIC5zZXRTZWxlY3RlZEhleCh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKVxuICAgICAgICAuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2VsZWN0ZWRIZXg6IG5vdGhpbmcgfSkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleCkgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgsICdtZWxlZScpXG4gICAgICBpZiAodGFyZ2V0VW5pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoJ21lbGVlJywgc2VsZWN0ZWRVbml0LCB0YXJnZXRVbml0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNrSGV4ID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGF0dGFja2VyOiBVbml0LCBkZWZlbmRlcjogVW5pdCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyOiB7IHVuaXRJZDogYXR0YWNrZXIuaWQsIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbiB9LFxuICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uIH0sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicsIHR1cm46IHRoaXMud29ybGRTdGF0ZS50dXJuIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAodW5pdCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQsIGF0dGFja1R5cGUgfVxuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9ICh1bml0SWQ6IFVuaXRJZCwgZGVzdGluYXRpb246IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbikpIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAoXG4gICAgdW5pdElkOiBVbml0SWQsXG4gICAgdGFyZ2V0SGV4OiBIZXgsXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCwgYXR0YWNrVHlwZSlcbiAgICBpZiAoZGVmZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tUeXBlLCBhdHRhY2tlciwgZGVmZW5kZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bmRlZmluZWQpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgZnJvbVBvaW50LCBoZXhDb3JuZXJzIH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgSE9WRVJfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIsXG59IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgUG9seWdvbiA9IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uLy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbnR5cGUgVGlsZVN0YXRlID0gJ2RlZmF1bHQnIHwgJ3NlbGVjdGVkJyB8ICd0YXJnZXRhYmxlJ1xuXG5leHBvcnQgY2xhc3MgTWFwRGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBoZXhQb2x5Z29uczogTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+ID0gbmV3IE1hcDxzdHJpbmcsIFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uPigpXG4gIHByaXZhdGUgcHJldmlvdXNIb3ZlckhleD86IEhleFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuY3JlYXRlSGV4KGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhleCA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBvbHlnb25DZW50ZXIgPSBoZXhDZW50ZXIoaGV4KVxuICAgIHRoaXMuc2NlbmUuYWRkLmltYWdlKHBvbHlnb25DZW50ZXIueCwgcG9seWdvbkNlbnRlci55LCAnZ3Jhc3MnKS5zZXRTY2FsZSgwLjY1KS5zZXREZXB0aCgtNSlcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKS5zZXRPcmlnaW4oMCwgMCkuc2V0RmlsbFN0eWxlKDB4MDAwMDAsIDApXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUoaGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIERlcHRoc1xuICAvLyAtNSAtIGltYWdlXG4gIC8vIC00IC0gZGVmYXVsdCBib3JkZXJcbiAgLy8gLTMgLSB0YXJnZXRhYmxlIGJvcmRlclxuICAvLyAtMiAtIHNlbGVjdGVkXG4gIC8vIC0xIC0gaG92ZXJcblxuICBwcml2YXRlIGdldERlcHRoID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogbnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiAtNFxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiAtM1xuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gLTJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNUaWxlID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldFN0cm9rZVN0eWxlKDMsIHRoaXMuZ2V0SGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpLnNldERlcHRoKHRoaXMuZ2V0RGVwdGgodGlsZVN0YXRlKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHRocm93IGBObyBwb2x5Z29uIGZvdW5kIGZvciAke2hleH1gXG4gICAgcmV0dXJuIHBvbHlnb25cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGlsZVN0YXRlID0gKGhleDogSGV4KTogVGlsZVN0YXRlID0+IHtcbiAgICBjb25zdCB7IHBsYXllcklkLCBzZWxlY3RlZEhleCwgbW9kZSB9ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZVxuICAgIGlmIChzZWxlY3RlZEhleCAmJiBzZWxlY3RlZEhleC5lcXVhbHMoaGV4KSkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PT0gJ21vdmVVbml0Jykge1xuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXgpICYmICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpKSB7XG4gICAgICAgIHJldHVybiAndGFyZ2V0YWJsZSdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PT0gJ2F0dGFjaycpIHtcbiAgICAgIGlmIChzZWxlY3RlZEhleCAmJiBjYW5BdHRhY2tPY2N1cihtb2RlLmF0dGFja1R5cGUsIGhleCwgc2VsZWN0ZWRIZXgpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgIT09IHBsYXllcklkKSB7XG4gICAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4Qm9yZGVyQ29sb3VyID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3ZlckhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gSE9WRVJfVElMRV9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocG9pbnRlclBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlckhleCAmJiB0aGlzLnByZXZpb3VzSG92ZXJIZXguZXF1YWxzKGhleCkpIHJldHVyblxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXgpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUodGhpcy5wcmV2aW91c0hvdmVySGV4KVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleClcbiAgICAgICAgLnNldFN0cm9rZVN0eWxlKHRpbGVTdGF0ZSA9PT0gJ2RlZmF1bHQnID8gMiA6IDQsIHRoaXMuZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIodGlsZVN0YXRlKSlcbiAgICAgICAgLnNldERlcHRoKC0xKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gaGV4XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBoZXhXaWR0aCwgbWFwSGVpZ2h0IH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgQUNUSU9OX1RFWFRfQ09MT1VSLCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBEUkFXSU5HX09GRlNFVCwgSEVYX1NJWkUgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5cbmV4cG9ydCB0eXBlIExvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IChhY3Rpb246IExvY2FsQWN0aW9uKSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB2aWN0b3J5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZExvZ1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2NlbmUuYWRkXG4gICAgICAuaW1hZ2UoMzYsIDMyLCAnbGxhbWEnKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1tsb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMucGxheWVyVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoNzAsIDIwLCAnJylcbiAgICB0aGlzLmhvdXJnbGFzcyA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDg3NSwgMzAsICdob3VyZ2xhc3MnKS5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgIERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLFxuICAgICAgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksXG4gICAgICAnJyxcbiAgICApXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDI1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDUwLCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQzID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDc1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQzQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQzLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDcwMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksICcnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbmRUdXJuJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZGVmZWF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIChtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSkgLyAyLCAnWW91IGhhdmUgYmVlbiBkZWZlYXRlZCEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy52aWN0b3J5VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIDMwLCAnVmljdG9yeSEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy53b3JsZExvZ1RleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDk2MCwgNTAsICcnKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0Q2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnYWJvcnQnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQyQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdtZWxlZScgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQzQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0IG9mIFt0aGlzLmVuZFR1cm5UZXh0LCB0aGlzLmFjdGlvblRleHQsIHRoaXMuYWN0aW9uVGV4dDIsIHRoaXMuYWN0aW9uVGV4dDNdKVxuICAgICAgaWYgKGdhbWVPYmplY3QuZ2V0Qm91bmRzKCkuY29udGFpbnMocG9pbnQueCwgcG9pbnQueSkpIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpXG4gICAgdGhpcy5ob3VyZ2xhc3Muc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID4gMClcbiAgICB0aGlzLnBsYXllclRleHQuc2V0VGV4dChgJHtwbGF5ZXIubmFtZX0gLSBUdXJuICR7dGhpcy53b3JsZFN0YXRlLnR1cm59YClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0My5zZXRUZXh0KCcnKVxuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5zeW5jU2VsZWN0SGV4TW9kZVRleHQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLnN5bmNNb3ZlVW5pdE1vZGVUZXh0KG1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zeW5jQXR0YWNrTW9kZVRleHQobW9kZS51bml0SWQsIG1vZGUuYXR0YWNrVHlwZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgICBpZiAocGxheWVyLmVuZGVkVHVybikge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdXYWl0aW5nIGZvciBuZXh0IHR1cm4uLi4nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ0VuZCBUdXJuIChTaGlmdCArIEVudGVyKScpXG4gICAgfVxuICAgIHRoaXMuZGVmZWF0VGV4dC5zZXRWaXNpYmxlKHBsYXllci5kZWZlYXRlZClcbiAgICB0aGlzLnZpY3RvcnlUZXh0LnNldFZpc2libGUod29ybGRTdGF0ZS5nYW1lT3ZlckluZm8/LnZpY3RvciA9PT0gcGxheWVyLmlkKVxuICAgIHRoaXMud29ybGRMb2dUZXh0LnNldFRleHQoUi50YWtlTGFzdCgzMCwgdGhpcy53b3JsZFN0YXRlLndvcmxkTG9nKS5qb2luKCdcXG4nKSlcbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkLCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoYENsaWNrIHVuaXQgdG8gJHthdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFjaycgOiAnc3BpdCd9IChvciBFU0MgdG8gY2FuY2VsKWApXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJ1NwaXQgKHMpJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllck5hbWUgPSAocGxheWVySWQ6IFBsYXllcklkKTogc3RyaW5nID0+IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpLm5hbWVcblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBsYXllcklkLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9ID0gdW5pdFxuICAgIGNvbnN0IHBsYXllck5hbWUgPSB0aGlzLmdldFBsYXllck5hbWUocGxheWVySWQpXG4gICAgcmV0dXJuIGAke25hbWV9IC0gTGxhbWEgd2FycmlvciAtICR7cGxheWVyTmFtZX0gLSBIUCAke2hpdFBvaW50cy5jdXJyZW50fS8ke2hpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke2FjdGlvblBvaW50cy5jdXJyZW50fS8ke2FjdGlvblBvaW50cy5tYXh9YFxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IGhleENlbnRlciB9IGZyb20gJy4vZ2FtZS1zY2VuZSdcbmltcG9ydCB7IEhFQUxUSF9CT1JERVJfQ09MT1VSLCBIRUFMVEhfRU1QVFlfQ09MT1VSLCBIRUFMVEhfRlVMTF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBhZGRQb2ludHMsIGRpc3RhbmNlQmV0d2VlblBvaW50cywgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IHBsYXlUd2VlbiB9IGZyb20gJy4uLy4uL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcblxuY29uc3QgSEVBTFRIX0JBUl9XSURUSCA9IDUwXG5jb25zdCBIRUFMVEhfQkFSX0hFSUdIVCA9IDEyXG5jb25zdCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MgPSAyXG5jb25zdCBJTUFHRV9PRkZTRVQgPSB7IHg6IDAsIHk6IDQgfVxuY29uc3QgSEVBTFRIX0JBUl9PRkZTRVQgPSB7IHg6IC0yNSwgeTogLTQwIH1cblxuZXhwb3J0IGNsYXNzIFVuaXREaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgdW5pdDogVW5pdFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhCYXJHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzXG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgdW5pdDogVW5pdCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICB0aGlzLmltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIDAsICdsbGFtYScpLnNldFNjYWxlKDAuOCkuc2V0VGludCh0aGlzLmdldFBsYXllclRpbnQodGhpcy51bml0LnBsYXllcklkKSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzID0gc2NlbmUuYWRkLmdyYXBoaWNzKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyVGludCA9IChwbGF5ZXJJZDogUGxheWVySWQpID0+XG4gICAgUExBWUVSX1RJTlRTWyhQTEFZRVJfVElOVFMubGVuZ3RoICsgcGxheWVySWQgLSAxKSAlIFBMQVlFUl9USU5UUy5sZW5ndGhdXG5cbiAgcHJpdmF0ZSBnZXRIZWFsdGhCYXJQb3NpdGlvbiA9IChwb2ludDogUG9pbnQpOiBQb2ludCA9PiBhZGRQb2ludHMocG9pbnQsIEhFQUxUSF9CQVJfT0ZGU0VUKVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAodW5pdDogVW5pdCk6IHZvaWQgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09PSB0aGlzLnVuaXQuaWQpXG4gICAgdGhpcy51bml0ID0gdW5pdFxuICAgIGNvbnN0IHVuaXRQb2ludCA9IGhleENlbnRlcih0aGlzLnVuaXQubG9jYXRpb24pXG4gICAgdGhpcy5pbWFnZS5zZXRQb3NpdGlvbih1bml0UG9pbnQueCArIElNQUdFX09GRlNFVC54LCB1bml0UG9pbnQueSArIElNQUdFX09GRlNFVC55KVxuICAgIHRoaXMuc3luY0hlYWx0aEJhcih1bml0UG9pbnQpXG4gIH1cblxuICBwcml2YXRlIHN5bmNIZWFsdGhCYXIgPSAodW5pdFBvaW50OiBQb2ludCkgPT4ge1xuICAgIGNvbnN0IGhlYWx0aEJhclBvc2l0aW9uID0gdGhpcy5nZXRIZWFsdGhCYXJQb3NpdGlvbih1bml0UG9pbnQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5zZXRQb3NpdGlvbihoZWFsdGhCYXJQb3NpdGlvbi54LCBoZWFsdGhCYXJQb3NpdGlvbi55KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuY2xlYXIoKVxuXG4gICAgLy8gRHJhdyBib3JkZXJcbiAgICBjb25zdCBpbm5lcldpZHRoID0gSEVBTFRIX0JBUl9XSURUSCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IEhFQUxUSF9CQVJfSEVJR0hUIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9CT1JERVJfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoMCwgMCwgSEVBTFRIX0JBUl9XSURUSCwgSEVBTFRIX0JBUl9IRUlHSFQpXG5cbiAgICAvLyBEcmF3IGVtcHR5IGJhY2tncm91bmRcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRU1QVFlfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuXG4gICAgLy8gRmlsbCBpbiBiYXJcbiAgICBjb25zdCB7IGN1cnJlbnQsIG1heCB9ID0gdGhpcy51bml0LmhpdFBvaW50c1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9GVUxMX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgKGlubmVyV2lkdGggKiBjdXJyZW50KSAvIG1heCxcbiAgICAgIGlubmVySGVpZ2h0LFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBydW5Nb3ZlQW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IE1PVkVfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwXG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogTU9WRV9BTklNQVRJT05fRFVSQVRJT04sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiBNT1ZFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBydW5EZWF0aEFuaW1hdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB0d2VlbiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiBbdGhpcy5pbWFnZSwgdGhpcy5oZWFsdGhCYXJHcmFwaGljc10sXG4gICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgYXdhaXQgcGxheVR3ZWVuKHR3ZWVuKVxuICB9XG5cbiAgcHVibGljIHJ1blNwaXRBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZnJvbVBvaW50ID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgdG9Qb2ludCA9IGhleENlbnRlcih0bylcbiAgICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlQmV0d2VlblBvaW50cyhmcm9tUG9pbnQsIHRvUG9pbnQpXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShmcm9tUG9pbnQueCwgZnJvbVBvaW50LnksICdzcGl0Jykuc2V0U2NhbGUoMC44KVxuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IGltYWdlLFxuICAgICAgeDoge1xuICAgICAgICBmcm9tOiBmcm9tUG9pbnQueCxcbiAgICAgICAgdG86IHRvUG9pbnQueCxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIGZyb206IGZyb21Qb2ludC55LFxuICAgICAgICB0bzogdG9Qb2ludC55LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiBkaXN0YW5jZSAqIDQsXG4gICAgICBlYXNlOiAnUXVhZCcsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gICAgaW1hZ2UuZGVzdHJveSgpXG4gIH1cblxuICBwdWJsaWMgcnVuRGFtYWdlQW5pbWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uOiBIZXgsIGRhbWFnZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgbG9jYXRpb25Qb2ludCA9IGhleENlbnRlcihsb2NhdGlvbilcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KGxvY2F0aW9uUG9pbnQueCwgbG9jYXRpb25Qb2ludC55LCBkYW1hZ2UudG9TdHJpbmcoKSwge1xuICAgICAgICBjb2xvcjogJyNmZjg4ODgnLFxuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAyLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNilcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgeToge1xuICAgICAgICBmcm9tOiBsb2NhdGlvblBvaW50LnkgLSA1MCxcbiAgICAgICAgdG86IGxvY2F0aW9uUG9pbnQueSAtIDc1LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgZWFzZTogJ0xpbmVhcicsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGVhc2U6ICdDdWJpYy5pbicsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICB0ZXh0LmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIHJ1bkF0dGFja0FuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2NlbmUudHdlZW5zLmtpbGxUd2VlbnNPZihbdGhpcy5oZWFsdGhCYXJHcmFwaGljcywgdGhpcy5pbWFnZV0pXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5kZXN0cm95KClcbiAgICB0aGlzLmltYWdlLmRlc3Ryb3koKVxuICB9XG59XG5cbnR5cGUgVHdlZW5YWSA9IHsgeDogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfTsgeTogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfSB9XG5cbmNvbnN0IGNhbGN1bGF0ZVR3ZWVuWFkgPSAoZnJvbTogUG9pbnQsIHRvOiBQb2ludCwgb2Zmc2V0OiBQb2ludCk6IFR3ZWVuWFkgPT4gKHtcbiAgeDoge1xuICAgIGZyb206IGZyb20ueCArIG9mZnNldC54LFxuICAgIHRvOiB0by54ICsgb2Zmc2V0LngsXG4gIH0sXG4gIHk6IHtcbiAgICBmcm9tOiBmcm9tLnkgKyBvZmZzZXQueSxcbiAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICB9LFxufSlcbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL21lbnUtYnV0dG9uJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiB9IGZyb20gJy4uLy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBzZXRVcmxJbmZvIH0gZnJvbSAnLi4vYm9vdC9ib290LXNjZW5lJ1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lEIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgY29uc3QgTUFJTl9NRU5VX1NDRU5FX0tFWSA9ICdNYWluTWVudSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IE1BSU5fTUVOVV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNClcbiAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdIb3N0IEdhbWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5oYW5kbGVIb3N0R2FtZSgpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSG9zdEdhbWUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRFdmVudERiID0gYXdhaXQgb3BlbldvcmxkRXZlbnREYigpXG4gICAgY29uc3QgZ2FtZUlkOiBHYW1lSWQgPSB1dWlkKClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IEhPU1RfUExBWUVSX0lEXG4gICAgY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgSU5JVElBTF9XT1JMRF9TVEFURSwgMClcbiAgICBzZXJ2ZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCB7IHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IElOSVRJQUxfV09STERfU1RBVEUgfSlcbiAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkIH0pXG4gICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciwgd29ybGRTdGF0ZTogc2VydmVyLndvcmxkU3RhdGUsIHBsYXllcklkOiBwbGF5ZXJJZCB9XG4gICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlQb2ludCA9IChwb2ludDogUG9pbnQsIG46IG51bWJlcik6IFBvaW50ID0+ICh7IHg6IHBvaW50LnggKiBuLCB5OiBwb2ludC55ICogbiB9KVxuXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHtcbiAgeDogcG9pbnQxLnggLSBwb2ludDIueCxcbiAgeTogcG9pbnQxLnkgLSBwb2ludDIueSxcbn0pXG5cbmNvbnN0IHNxdWFyZSA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4gbiAqIG5cblxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlblBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogbnVtYmVyID0+XG4gIE1hdGguc3FydChzcXVhcmUocG9pbnQxLnggLSBwb2ludDIueCkgKyBzcXVhcmUocG9pbnQxLnkgLSBwb2ludDIueSkpXG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSwgQXR0YWNrV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgQ29tYmF0V29ybGRFdmVudCwgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgcmFuZG9tSW50SW5jbHVzaXZlIH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcblxuZXhwb3J0IGNvbnN0IGNhbkF0dGFja09jY3VyID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGZyb206IEhleCwgdG86IEhleCk6IGJvb2xlYW4gPT4ge1xuICBzd2l0Y2ggKGF0dGFja1R5cGUpIHtcbiAgICBjYXNlICdtZWxlZSc6XG4gICAgICByZXR1cm4gZnJvbS5pc0FkamFjZW50VG8odG8pXG4gICAgY2FzZSAnc3BpdCc6XG4gICAgICByZXR1cm4gZnJvbS5kaXN0YW5jZVRvKHRvKSA8PSAyXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IHRoaXMudmFsaWRhdGVBdHRhY2soYWN0aW9uKVxuICAgIGNvbnN0IHsgYXR0YWNrVHlwZSB9ID0gYWN0aW9uXG4gICAgY29uc3QgcmF3QXR0YWNrZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKDgsIDEyKSA6IDBcbiAgICBjb25zdCByYXdEZWZlbmRlckRhbWFnZSA9IGF0dGFja1R5cGUgPT09ICdtZWxlZScgPyByYW5kb21JbnRJbmNsdXNpdmUoMTcsIDIzKSA6IHJhbmRvbUludEluY2x1c2l2ZSg0LCA2KVxuICAgIGNvbnN0IGF0dGFja2VyRGFtYWdlID0gTWF0aC5taW4oYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQsIHJhd0F0dGFja2VyRGFtYWdlKVxuICAgIGNvbnN0IGRlZmVuZGVyRGFtYWdlID0gTWF0aC5taW4oZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQsIHJhd0RlZmVuZGVyRGFtYWdlKVxuICAgIGNvbnN0IGNvbWJhdFdvcmxkRXZlbnQgPSB0aGlzLm1ha2VDb21iYXRXb3JsZEV2ZW50KGF0dGFja1R5cGUsIGF0dGFja2VyLCBhdHRhY2tlckRhbWFnZSwgZGVmZW5kZXIsIGRlZmVuZGVyRGFtYWdlKVxuXG4gICAgbGV0IG5ld1dvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChjb21iYXRXb3JsZEV2ZW50KVxuICAgIGNvbnN0IGV2ZW50czogV29ybGRFdmVudFtdID0gW2NvbWJhdFdvcmxkRXZlbnRdXG4gICAgbGV0IG5leHRXb3JsZEV2ZW50SWQgPSB0aGlzLm5leHRXb3JsZEV2ZW50SWQgKyAxXG4gICAgaWYgKG5ld1dvcmxkU3RhdGUuaXNQbGF5ZXJEZWZlYXRlZChkZWZlbmRlci5wbGF5ZXJJZCkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5wbGF5ZXJEZWZlYXRlZEV2ZW50KG5leHRXb3JsZEV2ZW50SWQrKywgZGVmZW5kZXIucGxheWVySWQpXG4gICAgICBldmVudHMucHVzaChldmVudClcbiAgICAgIG5ld1dvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgfVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmlzUGxheWVyRGVmZWF0ZWQoYXR0YWNrZXIucGxheWVySWQpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMucGxheWVyRGVmZWF0ZWRFdmVudChuZXh0V29ybGRFdmVudElkKyssIGF0dGFja2VyLnBsYXllcklkKVxuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICBuZXdXb3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICBjb25zdCB1bmRlZmVhdGVkUGxheWVycyA9IG5ld1dvcmxkU3RhdGUucGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5kZWZlYXRlZClcbiAgICBpZiAoUi5pc0VtcHR5KHVuZGVmZWF0ZWRQbGF5ZXJzKSkge1xuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInIH0pXG4gICAgfSBlbHNlIGlmICh1bmRlZmVhdGVkUGxheWVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHZpY3RvciA9IHVuZGVmZWF0ZWRQbGF5ZXJzWzBdLmlkXG4gICAgICBldmVudHMucHVzaCh7IGlkOiBuZXh0V29ybGRFdmVudElkKyssIHR5cGU6ICdnYW1lT3ZlcicsIHZpY3RvciB9KVxuICAgIH1cbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cblxuICBwcml2YXRlIHBsYXllckRlZmVhdGVkRXZlbnQgPSAoaWQ6IFdvcmxkRXZlbnRJZCwgcGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50ID0+ICh7XG4gICAgaWQsXG4gICAgdHlwZTogJ3BsYXllckRlZmVhdGVkJyxcbiAgICBwbGF5ZXJJZDogcGxheWVySWQsXG4gIH0pXG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogeyBhdHRhY2tlcjogVW5pdDsgZGVmZW5kZXI6IFVuaXQgfSA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXJJZCA9IGFjdGlvbi5hdHRhY2tlci51bml0SWRcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXJJZClcbiAgICBpZiAoIWF0dGFja2VyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7YXR0YWNrZXJJZH1gXG4gICAgaWYgKGF0dGFja2VyLnBsYXllcklkICE9PSB0aGlzLnBsYXllcklkKSB0aHJvdyBgQ2Fubm90IGNvbnRyb2wgYW5vdGhlciBwbGF5ZXIncyB1bml0OiAke2F0dGFja2VyLmlkfWBcbiAgICBpZiAoYXR0YWNrZXIuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIGF0dGFja2BcbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uYXR0YWNrZXIubG9jYXRpb24pKSB0aHJvdyBgQXR0YWNrZXIgbm90IGluIGV4cGVjdGVkIGxvY2F0aW9uYFxuXG4gICAgY29uc3QgZGVmZW5kZXJJZCA9IGFjdGlvbi5kZWZlbmRlci51bml0SWRcbiAgICBjb25zdCBkZWZlbmRlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXJJZClcbiAgICBpZiAoIWRlZmVuZGVyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXJJZH1gXG4gICAgaWYgKGRlZmVuZGVyLnBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB0aHJvdyBgQ2Fubm90IGF0dGFjayBvd24gdW5pdGBcbiAgICBpZiAoIWRlZmVuZGVyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uZGVmZW5kZXIubG9jYXRpb24pKSB0aHJvdyBgRGVmZW5kZXIgbm90IGluIGV4cGVjdGVkIGxvY2F0aW9uYFxuXG4gICAgaWYgKCFjYW5BdHRhY2tPY2N1cihhY3Rpb24uYXR0YWNrVHlwZSwgYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgYXR0YWNrIG9mIHR5cGUgJHthY3Rpb24uYXR0YWNrVHlwZX0gYmV0d2VlbiBoZXhlcyAke2F0dGFja2VyLmxvY2F0aW9ufSB0byAke2RlZmVuZGVyLmxvY2F0aW9ufSB0b28gZmFyIGFwYXJ0YFxuICAgIHJldHVybiB7IGF0dGFja2VyLCBkZWZlbmRlciB9XG4gIH1cblxuICBwcml2YXRlIG1ha2VDb21iYXRXb3JsZEV2ZW50ID0gKFxuICAgIGF0dGFja1R5cGU6IEF0dGFja1R5cGUsXG4gICAgYXR0YWNrZXI6IFVuaXQsXG4gICAgYXR0YWNrZXJEYW1hZ2U6IG51bWJlcixcbiAgICBkZWZlbmRlcjogVW5pdCxcbiAgICBkZWZlbmRlckRhbWFnZTogbnVtYmVyLFxuICApOiBDb21iYXRXb3JsZEV2ZW50ID0+ICh7XG4gICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICB0eXBlOiAnY29tYmF0JyxcbiAgICBhdHRhY2tUeXBlLFxuICAgIGF0dGFja2VyOiB7XG4gICAgICBwbGF5ZXJJZDogYXR0YWNrZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGF0dGFja2VyLmlkLFxuICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBhdHRhY2tlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT09IGF0dGFja2VyRGFtYWdlLFxuICAgIH0sXG4gICAgZGVmZW5kZXI6IHtcbiAgICAgIHBsYXllcklkOiBkZWZlbmRlci5wbGF5ZXJJZCxcbiAgICAgIHVuaXRJZDogZGVmZW5kZXIuaWQsXG4gICAgICBsb2NhdGlvbjogZGVmZW5kZXIubG9jYXRpb24sXG4gICAgICBkYW1hZ2U6IGRlZmVuZGVyRGFtYWdlLFxuICAgICAga2lsbGVkOiBkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCA9PT0gZGVmZW5kZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgfSlcbn1cbiIsImltcG9ydCB7XG4gIEpvaW5lZFJlc3BvbnNlLFxuICBKb2luUmVxdWVzdCxcbiAgUmVqb2luZWRSZXNwb25zZSxcbiAgUmVqb2luUmVxdWVzdCxcbiAgV29ybGRBY3Rpb25SZXF1ZXN0LFxuICBXb3JsZEV2ZW50TWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBQZWVyQ2xpZW50IH0gZnJvbSAnLi9wZWVyLWNsaWVudCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3dvcmxkLXN0YXRlLW93bmVyJ1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyQ2xpZW50OiBQZWVyQ2xpZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBlZXJDbGllbnQ6IFBlZXJDbGllbnQpIHtcbiAgICB0aGlzLnBlZXJDbGllbnQgPSBwZWVyQ2xpZW50XG4gICAgcGVlckNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnRNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50TWVzc2FnZSA9IChtZXNzYWdlOiBXb3JsZEV2ZW50TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmV2ZW50KVxuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb25uZWN0ID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxDbGllbnQ+ID0+IHtcbiAgICBjb25zdCBwZWVyQ2xpZW50ID0gYXdhaXQgUGVlckNsaWVudC5jb25uZWN0KGdhbWVJZClcbiAgICByZXR1cm4gbmV3IENsaWVudChwZWVyQ2xpZW50KVxuICB9XG5cbiAgcHVibGljIHJlam9pbiA9IGFzeW5jIChwbGF5ZXJJZDogUGxheWVySWQpOiBQcm9taXNlPFdvcmxkU3RhdGU+ID0+IHtcbiAgICBjb25zdCByZWpvaW5SZXF1ZXN0OiBSZWpvaW5SZXF1ZXN0ID0geyB0eXBlOiAncmVqb2luJywgcGxheWVySWQgfVxuICAgIGNvbnN0IHJlam9pbmVkUmVzcG9uc2U6IFJlam9pbmVkUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnBlZXJDbGllbnQuc2VuZFJlcXVlc3QocmVqb2luUmVxdWVzdClcbiAgICByZXR1cm4gV29ybGRTdGF0ZS5mcm9tSnNvbihyZWpvaW5lZFJlc3BvbnNlLndvcmxkU3RhdGUpXG4gIH1cblxuICBwdWJsaWMgam9pbiA9IGFzeW5jICgpOiBQcm9taXNlPHsgcGxheWVySWQ6IFBsYXllcklkOyB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlIH0+ID0+IHtcbiAgICBjb25zdCBqb2luUmVxdWVzdDogSm9pblJlcXVlc3QgPSB7IHR5cGU6ICdqb2luJyB9XG4gICAgY29uc3Qgam9pbmVkUmVzcG9uc2U6IEpvaW5lZFJlc3BvbnNlID0gYXdhaXQgdGhpcy5wZWVyQ2xpZW50LnNlbmRSZXF1ZXN0KGpvaW5SZXF1ZXN0KVxuICAgIGNvbnN0IHBsYXllcklkID0gam9pbmVkUmVzcG9uc2UucGxheWVySWRcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihqb2luZWRSZXNwb25zZS53b3JsZFN0YXRlKVxuICAgIHJldHVybiB7IHBsYXllcklkLCB3b3JsZFN0YXRlIH1cbiAgfVxuXG4gIHB1YmxpYyBzZW5kQWN0aW9uID0gYXN5bmMgKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2U6IFdvcmxkQWN0aW9uUmVxdWVzdCA9IHtcbiAgICAgIHR5cGU6ICd3b3JsZEFjdGlvbicsXG4gICAgICBhY3Rpb246IHNlcmlhbGlzZVRvSnNvbihhY3Rpb24pLFxuICAgICAgcGxheWVySWQ6IHBsYXllcklkLFxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnBlZXJDbGllbnQuc2VuZFJlcXVlc3QobWVzc2FnZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQge1xuICBCcm9hZGNhc3RNZXNzYWdlMixcbiAgUGVlcklkLFxuICBSZXF1ZXN0SWQsXG4gIFJlcXVlc3RNZXNzYWdlMixcbiAgUmVzcG9uc2VNZXNzYWdlMixcbiAgU2VydmVyVG9DbGllbnRNZXNzYWdlMixcbn0gZnJvbSAnLi9wZWVyLXNlcnZlcidcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcbmltcG9ydCB7IG5ld1BlZXIgfSBmcm9tICcuL3BlZXItdXRpbHMnXG5cbnR5cGUgUmVzb2x2ZTxUPiA9ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBQZWVyTGlzdGVuZXIgPSAobWVzc2FnZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBQZWVyQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0c3RhbmRpbmdSZXF1ZXN0czogTWFwPFJlcXVlc3RJZCwgUmVzb2x2ZTxhbnk+PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogUGVlckxpc3RlbmVyW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25EYXRhID0gKG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZTIpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiByZWNlaXZlZCBtZXNzYWdlJylcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdyZXNwb25zZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jyb2FkY2FzdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQnJvYWRjYXN0KG1lc3NhZ2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbm5lY3QgPSAocGVlcklkOiBQZWVySWQpOiBQcm9taXNlPFBlZXJDbGllbnQ+ID0+XG4gICAgbmV3IFByb21pc2U8UGVlckNsaWVudD4oKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHBlZXIgPSBuZXdQZWVyKClcbiAgICAgIHBlZXIub24oJ2Vycm9yJywgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgIHBlZXIub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IG9wZW4nKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gcGVlci5jb25uZWN0KHBlZXJJZCwgeyByZWxpYWJsZTogdHJ1ZSB9KVxuICAgICAgICBjb25uZWN0aW9uLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IGNvbm5lY3Rpb24gb3BlbicpXG4gICAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFBlZXJDbGllbnQoY29ubmVjdGlvbilcbiAgICAgICAgICByZXNvbHZlKGNsaWVudClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICBwdWJsaWMgc2VuZFJlcXVlc3QgPSAocmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+ID0+XG4gICAgbmV3IFByb21pc2U8YW55PigocmVzb2x2ZTogUmVzb2x2ZTxhbnk+KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0TWVzc2FnZTogUmVxdWVzdE1lc3NhZ2UyID0ge1xuICAgICAgICB0eXBlOiAncmVxdWVzdCcsXG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiBzZW5kaW5nIHJlcXVlc3QnKVxuICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdE1lc3NhZ2UpXG4gICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChyZXF1ZXN0TWVzc2FnZSlcbiAgICAgIHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5zZXQocmVxdWVzdE1lc3NhZ2UuaWQsIHJlc29sdmUpXG4gICAgfSlcblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlID0gKG1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZTIpOiB2b2lkID0+IHtcbiAgICBjb25zdCByZXF1ZXN0SWQgPSBtZXNzYWdlLnJlc3BvbnNlVG9cbiAgICBjb25zdCByZXNvbHZlOiBPcHRpb248UmVzb2x2ZTxhbnk+PiA9IHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5nZXQocmVxdWVzdElkKVxuICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlKG1lc3NhZ2UucmVzcG9uc2UpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYENMSUVOVDogcmVzcG9uc2UgcmVjZWl2ZWQgZm9yIHVua25vd24gcmVxdWVzdCAke3JlcXVlc3RJZH1gKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAobWVzc2FnZTogYW55KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXIobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJyb2FkY2FzdCA9IChtZXNzYWdlOiBCcm9hZGNhc3RNZXNzYWdlMik6IHZvaWQgPT4ge1xuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKG1lc3NhZ2UuYm9keSlcbiAgfVxufVxuIiwiaW1wb3J0IFBlZXIgPSByZXF1aXJlKCdwZWVyanMnKVxuaW1wb3J0IHsgbmV3UGVlciB9IGZyb20gJy4vcGVlci11dGlscydcblxuZXhwb3J0IHR5cGUgUGVlcklkID0gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RJZCA9IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RNZXNzYWdlMiB7XG4gIHR5cGU6ICdyZXF1ZXN0J1xuICBpZDogUmVxdWVzdElkXG4gIHJlcXVlc3Q6IGFueVxufVxuXG5leHBvcnQgdHlwZSBDbGllbnRUb1NlcnZlck1lc3NhZ2UyID0gUmVxdWVzdE1lc3NhZ2UyXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VNZXNzYWdlMiB7XG4gIHR5cGU6ICdyZXNwb25zZSdcbiAgcmVzcG9uc2VUbzogUmVxdWVzdElkXG4gIHJlc3BvbnNlOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcm9hZGNhc3RNZXNzYWdlMiB7XG4gIHR5cGU6ICdicm9hZGNhc3QnXG4gIGJvZHk6IGFueVxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UyID0gUmVzcG9uc2VNZXNzYWdlMiB8IEJyb2FkY2FzdE1lc3NhZ2UyXG5cbmV4cG9ydCBjbGFzcyBQZWVyU2VydmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyOiBQZWVyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29ubmVjdGlvbnM6IFBlZXIuRGF0YUNvbm5lY3Rpb25bXSA9IFtdXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlTWVzc2FnZTogKG1lc3NhZ2U6IGFueSkgPT4gYW55XG5cbiAgY29uc3RydWN0b3IoaWQ6IFBlZXJJZCwgaGFuZGxlTWVzc2FnZTogKG1lc3NhZ2U6IGFueSkgPT4gYW55KSB7XG4gICAgdGhpcy5oYW5kbGVNZXNzYWdlID0gaGFuZGxlTWVzc2FnZVxuICAgIHRoaXMucGVlciA9IG5ld1BlZXIoaWQpXG4gICAgdGhpcy5wZWVyLm9uKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgdGhpcy5wZWVyLm9uKCdjb25uZWN0aW9uJywgdGhpcy5oYW5kbGVOZXdDb25uZWN0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOZXdDb25uZWN0aW9uID0gKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VSVkVSOiByZWNlaXZlZCBuZXcgY29ubmVjdGlvbiBmcm9tICcgKyBjb25uZWN0aW9uLnBlZXIpXG4gICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEoY29ubmVjdGlvbikpXG4gIH1cblxuICBwdWJsaWMgYnJvYWRjYXN0ID0gKG1lc3NhZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJyb2FkY2FzdE1lc3NhZ2U6IEJyb2FkY2FzdE1lc3NhZ2UyID0geyB0eXBlOiAnYnJvYWRjYXN0JywgYm9keTogbWVzc2FnZSB9XG4gICAgZm9yIChjb25zdCBjb25uZWN0aW9uIG9mIHRoaXMuY29ubmVjdGlvbnMpIGNvbm5lY3Rpb24uc2VuZChicm9hZGNhc3RNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb25uZWN0aW9uRGF0YSA9IChjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKSA9PiAobWVzc2FnZTogQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlMik6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdTRVJWRVI6IHJlY2VpdmVkIG5ldyBtZXNzYWdlIGZyb20gJyArIGNvbm5lY3Rpb24ucGVlcilcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UucmVxdWVzdClcbiAgICBjb25zdCByZXNwb25zZU1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZTIgPSB7XG4gICAgICB0eXBlOiAncmVzcG9uc2UnLFxuICAgICAgcmVzcG9uc2VUbzogbWVzc2FnZS5pZCxcbiAgICAgIHJlc3BvbnNlLFxuICAgIH1cbiAgICBjb25uZWN0aW9uLnNlbmQocmVzcG9uc2VNZXNzYWdlKVxuICB9XG59XG4iLCJpbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5cbmV4cG9ydCBjb25zdCBuZXdQZWVyID0gKGlkPzogc3RyaW5nLCBvcHRpb25zPzogUGVlci5QZWVySlNPcHRpb24pOiBQZWVyID0+IHtcbiAgY29uc3QgX1BlZXIgPSAod2luZG93IGFzIGFueSkuUGVlciBhcyB0eXBlb2YgUGVlclxuICByZXR1cm4gbmV3IF9QZWVyKGlkLCBvcHRpb25zKVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkRXZlbnRMaXN0ZW5lciwgV29ybGRTdGF0ZU93bmVyIH0gZnJvbSAnLi93b3JsZC1zdGF0ZS1vd25lcidcbmltcG9ydCB7IFBsYXllckFkZGVkV29ybGRFdmVudCwgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgQ2xpZW50UmVxdWVzdCwgUmVqb2luUmVxdWVzdCwgV29ybGRFdmVudE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQWRkUGxheWVyV29ybGRBY3Rpb24sIFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkRXZlbnREYiB9IGZyb20gJy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBQZWVyU2VydmVyIH0gZnJvbSAnLi9wZWVyLXNlcnZlcidcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZU93bmVyOiBXb3JsZFN0YXRlT3duZXJcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYlxuICBwcml2YXRlIHJlYWRvbmx5IGdhbWVJZDogR2FtZUlkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyU2VydmVyOiBQZWVyU2VydmVyXG5cbiAgcHVibGljIGdldCB3b3JsZFN0YXRlKCk6IFdvcmxkU3RhdGUge1xuICAgIHJldHVybiB0aGlzLndvcmxkU3RhdGVPd25lci53b3JsZFN0YXRlXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlc3RvcmVHYW1lID0gYXN5bmMgKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8U2VydmVyPiA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgd29ybGRFdmVudERiLmdldEV2ZW50c0ZvckdhbWUoZ2FtZUlkKVxuICAgIGNvbnN0IHNvcnRlZEV2ZW50cyA9IFIuc29ydEJ5KChldmVudCkgPT4gZXZlbnQuaWQsIGV2ZW50cylcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURS5hcHBseUV2ZW50cyhzb3J0ZWRFdmVudHMpXG4gICAgcmV0dXJuIG5ldyBTZXJ2ZXIod29ybGRFdmVudERiLCBnYW1lSWQsIHdvcmxkU3RhdGUsIGV2ZW50cy5sZW5ndGggKyAxKVxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZEV2ZW50RGIgPSB3b3JsZEV2ZW50RGJcbiAgICB0aGlzLmdhbWVJZCA9IGdhbWVJZFxuICAgIHRoaXMucGVlclNlcnZlciA9IG5ldyBQZWVyU2VydmVyKHRoaXMuZ2FtZUlkLCB0aGlzLmhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSlcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lciA9IG5ldyBXb3JsZFN0YXRlT3duZXIod29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZClcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lci5hZGRMaXN0ZW5lcigoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICAgICAgdGhpcy53b3JsZEV2ZW50RGIuc3RvcmUodGhpcy5nYW1lSWQsIGV2ZW50KVxuICAgICAgY29uc3QgbWVzc2FnZTogV29ybGRFdmVudE1lc3NhZ2UgPSB7IHR5cGU6ICd3b3JsZEV2ZW50JywgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCkgfVxuICAgICAgdGhpcy5wZWVyU2VydmVyLmJyb2FkY2FzdChtZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudEpvaW4gPSAoKTogYW55ID0+IHtcbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICAvLyBUT0RPOiB0ZWxsIHRoZSBjbGllbnQgXCJiYWQgbHVja1wiXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFkZFBsYXllckFjdGlvbjogQWRkUGxheWVyV29ybGRBY3Rpb24gPSB7IHR5cGU6ICdhZGRQbGF5ZXInIH1cbiAgICAgIGNvbnN0IHBsYXllckFkZGVkRXZlbnQgPSA8UGxheWVyQWRkZWRXb3JsZEV2ZW50PnRoaXMuaGFuZGxlQWN0aW9uKDEsIGFkZFBsYXllckFjdGlvbilbMF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdqb2luZWQnLFxuICAgICAgICBwbGF5ZXJJZDogcGxheWVyQWRkZWRFdmVudC5wbGF5ZXJJZCxcbiAgICAgICAgd29ybGRTdGF0ZTogdGhpcy53b3JsZFN0YXRlLnRvSnNvbigpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50UmVqb2luID0gKG1lc3NhZ2U6IFJlam9pblJlcXVlc3QpOiBhbnkgPT4ge1xuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5pc1ZhbGlkUGxheWVySWQobWVzc2FnZS5wbGF5ZXJJZCkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAncmVqb2luZWQnLFxuICAgICAgICB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLnRvSnNvbigpLFxuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gVE9ETzogdGVsbCB0aGUgY2xpZW50IG5vXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRUb1NlcnZlck1lc3NhZ2UgPSAobWVzc2FnZTogQ2xpZW50UmVxdWVzdCk6IGFueSA9PiB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnam9pbic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNsaWVudEpvaW4oKVxuICAgICAgY2FzZSAncmVqb2luJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2xpZW50UmVqb2luKG1lc3NhZ2UpXG4gICAgICBjYXNlICd3b3JsZEFjdGlvbic6XG4gICAgICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmhhbmRsZUFjdGlvbihtZXNzYWdlLnBsYXllcklkLCBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuYWN0aW9uKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCBhY3Rpb24pXG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQXR0YWNrV29ybGRBY3Rpb24sXG4gIENoYW5nZVBsYXllck5hbWVXb3JsZEFjdGlvbixcbiAgRW5kVHVybldvcmxkQWN0aW9uLFxuICBJbml0aWFsaXNlV29ybGRBY3Rpb24sXG4gIE1vdmVVbml0V29ybGRBY3Rpb24sXG4gIFdvcmxkQWN0aW9uLFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHtcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgTmV3VHVybldvcmxkRXZlbnQsXG4gIFBsYXllckFkZGVkV29ybGRFdmVudCxcbiAgUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkR2VuZXJhdG9yIH0gZnJvbSAnLi93b3JsZC1nZW5lcmF0b3InXG5pbXBvcnQgeyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNsYXNzIFdvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVXb3JsZEV2ZW50cyA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLmNhbGN1bGF0ZVNwZWNpZmljV29ybGRFdmVudHMoYWN0aW9uKVxuICAgIHJldHVybiB0aGlzLmFkZE5ld1R1cm5JZk5lZWRlZChldmVudHMpXG4gIH1cblxuICBwcml2YXRlIGFkZE5ld1R1cm5JZk5lZWRlZChldmVudHM6IFdvcmxkRXZlbnRbXSkge1xuICAgIGNvbnN0IGxhc3RFdmVudCA9IFIubGFzdChldmVudHMpXG4gICAgaWYgKGxhc3RFdmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3V29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50cyhldmVudHMpXG4gICAgICBpZiAobmV3V29ybGRTdGF0ZS5jYW5BbnlQbGF5ZXJBY3QoKSB8fCBuZXdXb3JsZFN0YXRlLnVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZXZlbnRzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXh0V29ybGRFdmVudElkID0gbGFzdEV2ZW50LmlkICsgMVxuICAgICAgICBjb25zdCBuZXdUdXJuRXZlbnQ6IE5ld1R1cm5Xb3JsZEV2ZW50ID0geyBpZDogbmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ25ld1R1cm4nIH1cbiAgICAgICAgcmV0dXJuIFIuYXBwZW5kKG5ld1R1cm5FdmVudCwgZXZlbnRzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlU3BlY2lmaWNXb3JsZEV2ZW50cyA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdpbml0aWFsaXNlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlSW5pdGlhbGlzZShhY3Rpb24pXG4gICAgICBjYXNlICdhZGRQbGF5ZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBZGRQbGF5ZXIoKVxuICAgICAgY2FzZSAnY2hhbmdlUGxheWVyTmFtZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNoYW5nZVBsYXllck5hbWUoYWN0aW9uKVxuICAgICAgY2FzZSAnc3RhcnRHYW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU3RhcnRHYW1lKClcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUF0dGFjayhhY3Rpb24pXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdmVVbml0KGFjdGlvbilcbiAgICAgIGNhc2UgJ2VuZFR1cm4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbmRUdXJuKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUluaXRpYWxpc2UgPSAoYWN0aW9uOiBJbml0aWFsaXNlV29ybGRBY3Rpb24pOiBbSW5pdGlhbGlzZVdvcmxkRXZlbnRdID0+IHtcbiAgICBpZiAodGhpcy5uZXh0V29ybGRFdmVudElkID4gMCkge1xuICAgICAgdGhyb3cgYENhbiBvbmx5IGluaXRpYWxpc2UgYXMgdGhlIGZpcnN0IGV2ZW50YFxuICAgIH1cbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ2luaXRpYWxpc2UnLCBzdGF0ZTogYWN0aW9uLnN0YXRlIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFkZFBsYXllciA9ICgpOiBbUGxheWVyQWRkZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdQbGF5ZXJJZHMgPSB0aGlzLndvcmxkU3RhdGUuZ2V0UGxheWVySWRzKClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IFIuYXBwbHkoTWF0aC5tYXgsIGV4aXN0aW5nUGxheWVySWRzKSArIDFcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckFkZGVkJywgcGxheWVySWQgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSA9IChhY3Rpb246IENoYW5nZVBsYXllck5hbWVXb3JsZEFjdGlvbik6IFtQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnRdID0+IHtcbiAgICB0aGlzLmdldFBsYXllcigpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdwbGF5ZXJDaGFuZ2VkTmFtZScsIHBsYXllcklkOiB0aGlzLnBsYXllcklkLCBuYW1lOiBhY3Rpb24ubmFtZSB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKTogW0dhbWVTdGFydGVkV29ybGRFdmVudF0gPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIHRocm93IGBDYW5ub3Qgc3RhcnQgYW4gYWxyZWFkeS1zdGFydGVkIGdhbWVgXG4gICAgfVxuICAgIGlmICh0aGlzLnBsYXllcklkICE9PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgdGhyb3cgYENhbm5vdCBzdGFydCB0aGUgZ2FtZSB1bmxlc3MgdGhlIGhvc3RgXG4gICAgfVxuICAgIGNvbnN0IHVuaXRzID0gbmV3IFdvcmxkR2VuZXJhdG9yKHRoaXMud29ybGRTdGF0ZSkuZ2VuZXJhdGVVbml0cygpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdnYW1lU3RhcnRlZCcsIHVuaXRzIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgbmV3IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHRoaXMucGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZCkuaGFuZGxlQXR0YWNrKGFjdGlvbilcblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbik6IFtVbml0TW92ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRvIH0gPSBhY3Rpb25cbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICB9XG4gICAgY29uc3QgZnJvbSA9IHVuaXQubG9jYXRpb25cbiAgICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICAgIH1cbiAgICBpZiAoIXRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyh0bykpIHtcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgICB9XG4gICAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB7XG4gICAgICB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIG1vdmVgXG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICAgIHR5cGU6ICd1bml0TW92ZWQnLFxuICAgICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICAgICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gICAgICAgIHVuaXRJZCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICB9LFxuICAgIF1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9IChhY3Rpb246IEVuZFR1cm5Xb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgaWYgKGFjdGlvbi50dXJuICE9PSB0aGlzLndvcmxkU3RhdGUudHVybikge1xuICAgICAgdGhyb3cgYENhbm5vdCBlbmQgYSB0dXJuIHRoYXQncyBub3QgdGhlIGN1cnJlbnQgdHVybmBcbiAgICB9XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKVxuICAgIGlmIChwbGF5ZXIuZW5kZWRUdXJuKSB7XG4gICAgICB0aHJvdyBgUGxheWVyIGhhcyBhbHJlYWR5IGVuZGVkIHRoZWlyIHR1cm5gXG4gICAgfVxuICAgIGNvbnN0IHBsYXllckVuZGVkVHVybkFjdGlvbjogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCA9IHtcbiAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICB0eXBlOiAncGxheWVyRW5kZWRUdXJuJyxcbiAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIH1cbiAgICByZXR1cm4gW3BsYXllckVuZGVkVHVybkFjdGlvbl1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgdGhyb3cgYE5vIHBsYXllciB3aXRoIElEICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmNvbnN0IExMQU1BX05BTUVTID0gW1xuICAnV2FsdGVyJyxcbiAgJ0RvbGx5JyxcbiAgJ0NoZXdwYWNhJyxcbiAgJ0JhcmFjayBPLiBMbGFtYScsXG4gICdDb21vIFNlJyxcbiAgJ0Z1enp5JyxcbiAgJ0plcmVteScsXG4gICdBbGZvbnNvJyxcbiAgJ1Jvc2UnLFxuICAnTG9yZW56bycsXG5dXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlbWFpbmluZ0hleGVzOiBIZXhbXVxuICBwcml2YXRlIG5leHRVbml0SWQ6IFVuaXRJZCA9IDFcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucmVtYWluaW5nSGV4ZXMgPSBBcnJheS5mcm9tKHdvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVW5pdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0ID0+IHtcbiAgICBjb25zdCBpZCA9IHRoaXMubmV4dFVuaXRJZCsrXG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIGNvbnN0IG5hbWUgPSByYW5kb21FbGVtZW50KExMQU1BX05BTUVTKVxuICAgIHJldHVybiBuZXcgVW5pdCh7XG4gICAgICBpZCxcbiAgICAgIHBsYXllcklkLFxuICAgICAgbmFtZSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVW5pdHMgPSAoKTogVW5pdFtdID0+XG4gICAgUi5jaGFpbigocGxheWVyKSA9PiBbdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKSwgdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKV0sIHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzKVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi93b3JsZC1hY3Rpb24taGFuZGxlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBXb3JsZEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIFdvcmxkU3RhdGVPd25lciB7XG4gIHB1YmxpYyB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykgbGlzdGVuZXIoZXZlbnQpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3Qgd29ybGRBY3Rpb25IYW5kbGVyID0gbmV3IFdvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHBsYXllcklkLCB0aGlzLm5leHRXb3JsZEV2ZW50SWQpXG4gICAgY29uc3QgZXZlbnRzID0gd29ybGRBY3Rpb25IYW5kbGVyLmNhbGN1bGF0ZVdvcmxkRXZlbnRzKGFjdGlvbilcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgdGhpcy53b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgICB9XG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkICs9IGV2ZW50cy5sZW5ndGhcbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5cbmNvbnN0IHBhZGRpbmcgPSAxMFxuY29uc3QgbWluaW11bVdpZHRoID0gMjAwXG5jb25zdCBtaW5pbXVtSGVpZ2h0ID0gNTBcblxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KVxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKVxuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApXG5cbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXG4gICAgICAudGV4dCh4ICsgcGFkZGluZywgeSArIHBhZGRpbmcsIHRleHQpXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHBhZGRpbmdcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgcGFkZGluZ1xuXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGggPj0gbWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IG1pbmltdW1XaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gbWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogbWluaW11bUhlaWdodFxuXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVydXAnLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljaylcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpXG4gIH1cblxuICBwdWJsaWMgc2V0WSh2YWx1ZT86IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMubGFiZWwuc2V0WSh2YWx1ZSlcbiAgICByZXR1cm4gc3VwZXIuc2V0WSh2YWx1ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXNlVG9Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKHNlcmlhbGlzZVRvSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGV4JyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV29ybGRNYXApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRNYXAnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1dvcmxkU3RhdGUnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBVbml0KSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1VuaXQnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIaXRQb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGl0UG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQWN0aW9uUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0FjdGlvblBvaW50cycgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdQbGF5ZXInIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gc2VyaWFsaXNlVG9Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlc2VyaWFsaXNlRnJvbUpzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZGVzZXJpYWxpc2VGcm9tSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdIZXgnKSB7XG4gICAgICAgIHJldHVybiBIZXguZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnV29ybGRNYXAnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZE1hcC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdXb3JsZFN0YXRlJykge1xuICAgICAgICByZXR1cm4gV29ybGRTdGF0ZS5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdVbml0Jykge1xuICAgICAgICByZXR1cm4gVW5pdC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdBY3Rpb25Qb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBBY3Rpb25Qb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnSGl0UG9pbnRzJykge1xuICAgICAgICByZXR1cm4gSGl0UG9pbnRzLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1BsYXllcicpIHtcbiAgICAgICAgcmV0dXJuIFBsYXllci5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzZXJpYWxpc2VGcm9tSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVHdlZW4gPSBQaGFzZXIuVHdlZW5zLlR3ZWVuXG5cbmV4cG9ydCBjb25zdCBwbGF5VHdlZW4gPSAodHdlZW46IFR3ZWVuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdHdlZW4uc2V0Q2FsbGJhY2soJ29uQ29tcGxldGUnLCByZXNvbHZlLCBbXSkucGxheSgpKVxuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEluY2x1c2l2ZSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT5cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50RXhjbHVzaXZlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUVsZW1lbnQgPSA8VD4oYXJyYXk6IFRbXSk6IFQgPT4gYXJyYXlbcmFuZG9tSW50RXhjbHVzaXZlKDAsIGFycmF5Lmxlbmd0aCldXG4iLCJleHBvcnQgdHlwZSBPcHRpb248VD4gPSBUIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVzdDxUPiB7XG4gIHR5cGU6ICdqdXN0J1xuICBpdGVtOiBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aGluZyB7XG4gIHR5cGU6ICdub3RoaW5nJ1xufVxuXG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IEp1c3Q8VD4gfCBOb3RoaW5nXG5cbmV4cG9ydCBjb25zdCB0b01heWJlID0gPFQ+KG9wdGlvbjogT3B0aW9uPFQ+KTogTWF5YmU8VD4gPT4gKG9wdGlvbiA9PT0gdW5kZWZpbmVkID8gbm90aGluZyA6IGp1c3Qob3B0aW9uKSlcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pXG4iLCJleHBvcnQgY2xhc3MgVW5yZWFjaGFibGVDYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBuZXZlcikge1xuICAgIHN1cGVyKGBVbnJlYWNoYWJsZSBjYXNlOiAke3ZhbHVlfWApXG4gIH1cbn1cbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uUG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyByZWR1Y2UgPSAocG9pbnRzOiBudW1iZXIpOiBBY3Rpb25Qb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBBY3Rpb25Qb2ludHMgPT5cbiAgICBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiB0aGlzLm1heCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSGV4LCBIZXhWZWN0b3IgfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGVudW0gSGV4RGlyZWN0aW9uIHtcbiAgRUFTVCA9ICdFQVNUJyxcbiAgV0VTVCA9ICdXRVNUJyxcbiAgTk9SVEhfRUFTVCA9ICdOT1JUSF9FQVNUJyxcbiAgU09VVEhfRUFTVCA9ICdTT1VUSF9FQVNUJyxcbiAgTk9SVEhfV0VTVCA9ICdOT1JUSF9XRVNUJyxcbiAgU09VVEhfV0VTVCA9ICdTT1VUSF9XRVNUJyxcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9ESVJFQ1RJT05TID0gW1xuICBIZXhEaXJlY3Rpb24uRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9FQVNULFxuXVxuXG5leHBvcnQgY29uc3QgZ2V0VW5pdFZlY3RvciA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleFZlY3RvciA9PiB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIDEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAxKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZGlyZWN0aW9uKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgZ2V0VW5pdFZlY3RvciwgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi9oZXgtZGlyZWN0aW9uJ1xuXG5leHBvcnQgY2xhc3MgSGV4IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGdldCB6KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC10aGlzLnggLSB0aGlzLnlcbiAgfVxuXG4gIHB1YmxpYyBwbHVzID0gKHRoYXQ6IEhleCk6IEhleCA9PiBuZXcgSGV4KHRoaXMueCArIHRoYXQueCwgdGhpcy55ICsgdGhhdC55KVxuXG4gIHB1YmxpYyBuZWlnaGJvdXJzID0gKCk6IEhleFtdID0+IEhleC5ORUlHSEJPVVJTLm1hcCh0aGlzLnBsdXMpXG5cbiAgcHVibGljIGlzQWRqYWNlbnRUbyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IFIuaW5jbHVkZXModGhhdCwgdGhpcy5uZWlnaGJvdXJzKCkpXG5cbiAgcHVibGljIGRpc3RhbmNlVG8gPSAodGhhdDogSGV4KTogbnVtYmVyID0+XG4gICAgKE1hdGguYWJzKHRoaXMueCAtIHRoYXQueCkgKyBNYXRoLmFicyh0aGlzLnkgLSB0aGF0LnkpICsgTWF0aC5hYnModGhpcy56IC0gdGhhdC56KSkgLyAyXG5cbiAgcHJpdmF0ZSBzdGF0aWMgTkVJR0hCT1VSUzogSGV4W10gPSBbXG4gICAgbmV3IEhleCgwLCAxKSxcbiAgICBuZXcgSGV4KDEsIDApLFxuICAgIG5ldyBIZXgoMSwgLTEpLFxuICAgIG5ldyBIZXgoMCwgLTEpLFxuICAgIG5ldyBIZXgoLTEsIDApLFxuICAgIG5ldyBIZXgoLTEsIDEpLFxuICBdXG5cbiAgcHVibGljIGVxdWFscyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IHRoaXMueCA9PT0gdGhhdC54ICYmIHRoaXMueSA9PT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcblxuICBwdWJsaWMgZ28gPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXggPT4gdGhpcy5wbHVzKGdldFVuaXRWZWN0b3IoZGlyZWN0aW9uKSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGV4ID0+IG5ldyBIZXgoanNvbi54LCBqc29uLnkpXG59XG5cbmV4cG9ydCB0eXBlIEhleFZlY3RvciA9IEhleFxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBIaXRQb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIGRhbWFnZSA9IChwb2ludHM6IG51bWJlcik6IEhpdFBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEhpdFBvaW50cyA9PlxuICAgIG5ldyBIaXRQb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQsIG1heDogdGhpcy5tYXggfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEhpdFBvaW50cyA9PiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDoganNvbi5jdXJyZW50LCBtYXg6IGpzb24ubWF4IH0pXG59XG4iLCJpbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcidcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfV09STERfU1RBVEU6IFdvcmxkU3RhdGUgPSBuZXcgV29ybGRTdGF0ZSh7XG4gIHR1cm46IDAsXG4gIG1hcDogbmV3IFdvcmxkTWFwKHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDYgfSksXG4gIHBsYXllcnM6IFtcbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ1BsYXllciAxJyxcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gIF0sXG4gIHVuaXRzOiBbXSxcbn0pXG4iLCJleHBvcnQgY29uc3QgSE9TVF9QTEFZRVJfSUQgPSAxXG5cbmV4cG9ydCB0eXBlIFBsYXllcklkID0gbnVtYmVyXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICByZWFkb25seSBpZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGVuZGVkVHVybjogYm9vbGVhblxuICByZWFkb25seSBkZWZlYXRlZDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGVuZGVkVHVybiA9IGZhbHNlLFxuICAgIGRlZmVhdGVkID0gZmFsc2UsXG4gIH06IHtcbiAgICBpZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBlbmRlZFR1cm4/OiBib29sZWFuXG4gICAgZGVmZWF0ZWQ/OiBib29sZWFuXG4gIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5lbmRlZFR1cm4gPSBlbmRlZFR1cm5cbiAgICB0aGlzLmRlZmVhdGVkID0gZGVmZWF0ZWRcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBpZCA9IHRoaXMuaWQsXG4gICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICBlbmRlZFR1cm4gPSB0aGlzLmVuZGVkVHVybixcbiAgICBkZWZlYXRlZCA9IHRoaXMuZGVmZWF0ZWQsXG4gIH06IHsgaWQ/OiBQbGF5ZXJJZDsgbmFtZT86IHN0cmluZzsgZW5kZWRUdXJuPzogYm9vbGVhbjsgZGVmZWF0ZWQ/OiBib29sZWFuIH0gPSB7fSk6IFBsYXllciA9PlxuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgZW5kZWRUdXJuLFxuICAgICAgZGVmZWF0ZWQsXG4gICAgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBpZDogdGhpcy5pZCwgbmFtZTogdGhpcy5uYW1lLCBlbmRlZFR1cm46IHRoaXMuZW5kZWRUdXJuLCBkZWZlYXRlZDogdGhpcy5kZWZlYXRlZCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogUGxheWVyID0+XG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgIGVuZGVkVHVybjoganNvbi5lbmRlZFR1cm4sXG4gICAgICBkZWZlYXRlZDoganNvbi5kZWZlYXRlZCxcbiAgICB9KVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBIaXRQb2ludHMgfSBmcm9tICcuL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBVbml0SWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFVuaXQge1xuICByZWFkb25seSBpZDogVW5pdElkXG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgbG9jYXRpb246IEhleFxuICByZWFkb25seSBoaXRQb2ludHM6IEhpdFBvaW50c1xuICByZWFkb25seSBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpZCxcbiAgICBwbGF5ZXJJZCxcbiAgICBuYW1lLFxuICAgIGxvY2F0aW9uLFxuICAgIGhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMsXG4gIH06IHtcbiAgICBpZDogVW5pdElkXG4gICAgcGxheWVySWQ6IFBsYXllcklkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgbG9jYXRpb246IEhleFxuICAgIGhpdFBvaW50czogSGl0UG9pbnRzXG4gICAgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcbiAgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgICB0aGlzLmhpdFBvaW50cyA9IGhpdFBvaW50c1xuICAgIHRoaXMuYWN0aW9uUG9pbnRzID0gYWN0aW9uUG9pbnRzXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLmRhbWFnZShwb2ludHMpIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIGlkID0gdGhpcy5pZCxcbiAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24sXG4gICAgaGl0UG9pbnRzID0gdGhpcy5oaXRQb2ludHMsXG4gICAgYWN0aW9uUG9pbnRzID0gdGhpcy5hY3Rpb25Qb2ludHMsXG4gIH06IHtcbiAgICBpZD86IFVuaXRJZFxuICAgIHBsYXllcklkPzogUGxheWVySWRcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgbG9jYXRpb24/OiBIZXhcbiAgICBoaXRQb2ludHM/OiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM/OiBBY3Rpb25Qb2ludHNcbiAgfSA9IHt9KTogVW5pdCA9PiBuZXcgVW5pdCh7IGlkLCBwbGF5ZXJJZCwgbmFtZSwgbG9jYXRpb24sIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0pXG5cbiAgcHVibGljIG1vdmUgPSAobG9jYXRpb246IEhleCwgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBsb2NhdGlvbiwgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZHVjZUFjdGlvblBvaW50cyA9IChhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWZyZXNoQWN0aW9uUG9pbnRzID0gKCk6IFVuaXQgPT4gdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWZyZXNoKCkgfSlcblxuICBwdWJsaWMgZ2V0IGhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPiAwXG4gIH1cblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIGlkOiB0aGlzLmlkLFxuICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbi50b0pzb24oKSxcbiAgICBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLnRvSnNvbigpLFxuICAgIGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMudG9Kc29uKCksXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBVbml0ID0+XG4gICAgbmV3IFVuaXQoe1xuICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICBwbGF5ZXJJZDoganNvbi5wbGF5ZXJJZCxcbiAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgIGxvY2F0aW9uOiBIZXguZnJvbUpzb24oanNvbi5sb2NhdGlvbiksXG4gICAgICBoaXRQb2ludHM6IEhpdFBvaW50cy5mcm9tSnNvbihqc29uLmhpdFBvaW50cyksXG4gICAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cy5mcm9tSnNvbihqc29uLmFjdGlvblBvaW50cyksXG4gICAgfSlcbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFdvcmxkRXZlbnQsXG4gIEdhbWVPdmVyV29ybGRFdmVudCxcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgUGxheWVyQWRkZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQsXG4gIFBsYXllckRlZmVhdGVkV29ybGRFdmVudCxcbiAgUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCB7IGNhbkF0dGFja09jY3VyIH0gZnJvbSAnLi4vc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNvbnN0IGFwcGx5RXZlbnQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgcmV0dXJuIGhhbmRsZUluaXRpYWxpc2UoZXZlbnQpXG4gICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckFkZGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJDaGFuZ2VkTmFtZSc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQ2hhbmdlZE5hbWUoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lU3RhcnRlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckVuZGVkVHVybihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckRlZmVhdGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICduZXdUdXJuJzpcbiAgICAgIHJldHVybiBoYW5kbGVOZXdUdXJuKHN0YXRlKVxuICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lT3ZlcihzdGF0ZSwgZXZlbnQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihldmVudClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVJbml0aWFsaXNlID0gKGV2ZW50OiBJbml0aWFsaXNlV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBpZiAoZXZlbnQuaWQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbml0aWFsaXNlIG11c3QgYmUgdGhlIGZpcnN0IGV2ZW50YClcbiAgfVxuICByZXR1cm4gZXZlbnQuc3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyQWRkZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gZXZlbnQucGxheWVySWQsIHN0YXRlLnBsYXllcnMpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBQbGF5ZXIgSUQgYWxyZWFkeSBpbiB1c2VgKVxuICB9XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoeyBpZDogcGxheWVySWQsIG5hbWU6IGBQbGF5ZXIgJHtwbGF5ZXJJZH1gIH0pXG4gIHJldHVybiBzdGF0ZS5hZGRQbGF5ZXIocGxheWVyKVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJDaGFuZ2VkTmFtZSA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkLCBuYW1lIH0gPSBldmVudFxuICBnZXRQbGF5ZXIoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGUudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IG5hbWUgfSkpXG59XG5cbmNvbnN0IGdldFBsYXllciA9IChzdGF0ZTogV29ybGRTdGF0ZSwgcGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyID0+IHtcbiAgY29uc3QgcGxheWVyID0gc3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgaWYgKCFwbGF5ZXIpIHRocm93IG5ldyBFcnJvcihgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gKVxuICByZXR1cm4gcGxheWVyXG59XG5cbmNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgR2FtZSBhbHJlYWR5IHN0YXJ0ZWRgKVxuICB9XG4gIHJldHVybiBzdGF0ZS5jb3B5KHsgdHVybjogMSwgdW5pdHM6IGV2ZW50LnVuaXRzIH0pLmFkZFdvcmxkTG9nKCdMZXQgYmF0dGxlIGNvbW1lbmNlIScpXG59XG5cbmNvbnN0IGhhbmRsZVVuaXRNb3ZlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB1bml0SWQsIHBsYXllcklkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YClcbiAgfVxuICBpZiAoIXN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YClcbiAgfVxuICBjb25zdCB1bml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgaWYgKCF1bml0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YClcbiAgfVxuICBpZiAoIXVuaXQubG9jYXRpb24uZXF1YWxzKGZyb20pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFVuaXQgaXMgbm90IGluIHRoZSBleHBlY3RlZCBsb2NhdGlvbiBmb3IgbW92ZW1lbnQuIFVuaXQgaXMgYXQgJHt1bml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2Zyb219YCxcbiAgICApXG4gIH1cbiAgY29uc3QgdG9Vbml0ID0gc3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKVxuICBpZiAodG9Vbml0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gYWxyZWFkeS1vY2N1cGllZCBoZXhgKVxuICB9XG4gIGlmICh1bml0LnBsYXllcklkICE9PSBwbGF5ZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhdHRlbXB0IHRvIG1vdmUgdW5pdCBvZiBhbm90aGVyIHBsYXllcmApXG4gIH1cbiAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgKVxuICB9XG4gIHJldHVybiBzdGF0ZS5yZXBsYWNlVW5pdCh1bml0LmlkLCB1bml0Lm1vdmUodG8sIGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSlcbn1cblxuY29uc3QgaGFuZGxlQ29tYmF0ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogQ29tYmF0V29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gZXZlbnRcblxuICBjb25zdCBhdHRhY2tlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXIudW5pdElkKVxuICBpZiAoIWF0dGFja2VyVW5pdCkgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHthdHRhY2tlci51bml0SWR9YClcbiAgaWYgKCFhdHRhY2tlclVuaXQubG9jYXRpb24uZXF1YWxzKGF0dGFja2VyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBsb2NhdGlvbiBmb3IgYXR0YWNrZXIuIEF0dGFja2luZyB1bml0ICR7YXR0YWNrZXJVbml0LmlkfSBpcyBhdCBsb2NhdGlvbiAke2F0dGFja2VyVW5pdC5sb2NhdGlvbn0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgYXQgJHthdHRhY2tlci5sb2NhdGlvbn1gLFxuICAgIClcblxuICBjb25zdCBkZWZlbmRlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXIudW5pdElkKVxuICBpZiAoIWRlZmVuZGVyVW5pdCkgdGhyb3cgbmV3IEVycm9yKGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlci51bml0SWR9YClcbiAgaWYgKCFkZWZlbmRlclVuaXQubG9jYXRpb24uZXF1YWxzKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBsb2NhdGlvbiBmb3IgZGVmZW5kZXIuIERlZmVuZGluZyB1bml0ICR7ZGVmZW5kZXJVbml0LmlkfSBpcyBhdCBsb2NhdGlvbiAke2RlZmVuZGVyVW5pdC5sb2NhdGlvbn0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgYXQgJHtkZWZlbmRlci5sb2NhdGlvbn1gLFxuICAgIClcblxuICBpZiAoYXR0YWNrZXJVbml0LnBsYXllcklkID09PSBkZWZlbmRlclVuaXQucGxheWVySWQpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb21iYXQgd2l0aCBzZWxmYClcbiAgaWYgKCFjYW5BdHRhY2tPY2N1cihldmVudC5hdHRhY2tUeXBlLCBhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIGNvbWJhdCBvZiB0eXBlICR7ZXZlbnQuYXR0YWNrVHlwZX0gYmV0d2VlbiBoZXhlcyAke2F0dGFja2VyLmxvY2F0aW9ufSB0byAke2RlZmVuZGVyLmxvY2F0aW9ufWAsXG4gICAgKVxuICBpZiAoYXR0YWNrZXJVbml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgKVxuXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlXG5cbiAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChhdHRhY2tlclVuaXQuaWQpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdXBkYXRlZEF0dGFja2VyID0gYXR0YWNrZXJVbml0LmRhbWFnZShhdHRhY2tlci5kYW1hZ2UpLnJlZHVjZUFjdGlvblBvaW50cyhldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZClcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KGF0dGFja2VyVW5pdC5pZCwgdXBkYXRlZEF0dGFja2VyKVxuICB9XG5cbiAgaWYgKGRlZmVuZGVyLmtpbGxlZCkge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChkZWZlbmRlclVuaXQuaWQpXG4gIH0gZWxzZSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChkZWZlbmRlclVuaXQuaWQsIGRlZmVuZGVyVW5pdC5kYW1hZ2UoZGVmZW5kZXIuZGFtYWdlKSlcbiAgfVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpIHtcbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGAke2RlZmVuZGVyVW5pdC5uYW1lfSB3YXMgdGFrZW4gb3V0IGluIGEgc3VpY2lkZSBhdHRhY2sgYnkgJHthdHRhY2tlclVuaXQubmFtZX0uYClcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgJHtkZWZlbmRlclVuaXQubmFtZX0gd2FzIGJydXRhbGx5IG11cmRlcmVkIGJ5ICR7YXR0YWNrZXJVbml0Lm5hbWV9LmApXG4gICAgfVxuICB9IGVsc2UgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYCR7YXR0YWNrZXJVbml0Lm5hbWV9IGRpZWQgaW4gYSBmdXRpbGUgYXR0ZW1wdCB0byB0YWtlIG9uICR7YXR0YWNrZXJVbml0Lm5hbWV9LmApXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdmVyYiA9IGV2ZW50LmF0dGFja1R5cGUgPT09ICdtZWxlZScgPyAnYXR0YWNrZWQnIDogJ3NwYXQgYXQnXG4gICAgY29uc3QgdGFraW5nRGFtYWdlQ2xhdXNlID0gYXR0YWNrZXIuZGFtYWdlID09PSAwID8gJycgOiBgIGFuZCB0YWtpbmcgJHthdHRhY2tlci5kYW1hZ2V9IGRhbWFnZWBcbiAgICBjb25zdCBtZXNzYWdlID0gYCR7YXR0YWNrZXJVbml0Lm5hbWV9ICR7dmVyYn0gJHtkZWZlbmRlclVuaXQubmFtZX0sIGNhdXNpbmcgJHtkZWZlbmRlci5kYW1hZ2V9IGRhbWFnZSR7dGFraW5nRGFtYWdlQ2xhdXNlfS5gXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhtZXNzYWdlKVxuICB9XG4gIHJldHVybiBuZXdTdGF0ZVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGdldFBsYXllcihzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZS51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiB0cnVlIH0pKVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJEZWZlYXRlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckRlZmVhdGVkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBnZXRQbGF5ZXIoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGVcbiAgICAudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGRlZmVhdGVkOiB0cnVlIH0pKVxuICAgIC5hZGRXb3JsZExvZyhgJHtwbGF5ZXIubmFtZX0gaGFzIGJlZW4gdmFucXVpc2hlZC5gKVxufVxuXG5jb25zdCBoYW5kbGVOZXdUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlKTogV29ybGRTdGF0ZSA9PlxuICBzdGF0ZS5uZXdUdXJuKCkuYWRkV29ybGRMb2coYFR1cm4gJHtzdGF0ZS50dXJuICsgMX0gaGFzIGJlZ3VuLmApXG5cbmNvbnN0IGhhbmRsZUdhbWVPdmVyID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogR2FtZU92ZXJXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgdmljdG9yIH0gPSBldmVudFxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZS5nYW1lT3Zlcih2aWN0b3IpXG4gIGlmICh2aWN0b3IpIHtcbiAgICBjb25zdCB2aWN0b3JQbGF5ZXIgPSBnZXRQbGF5ZXIoc3RhdGUsIHZpY3RvcilcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGDwn4+GICR7dmljdG9yUGxheWVyLm5hbWV9IGlzIHZpY3RvcmlvdXMhYClcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGBUaGVyZSBhcmUgbm8gd2lubmVycyBpbiB3YXIuYClcbiAgfVxuICByZXR1cm4gbmV3U3RhdGVcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBXb3JsZE1hcCB7XG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXJcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IHdpZHRoLCBoZWlnaHQgfTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9KSB7XG4gICAgYXNzZXJ0KHdpZHRoID4gMClcbiAgICBhc3NlcnQoaGVpZ2h0ID4gMClcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICB9XG5cbiAgcHVibGljIGlzSW5Cb3VuZHMgPSAoaGV4OiBIZXgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBxID0gaGV4LnggKyBNYXRoLmZsb29yKGhleC55IC8gMilcbiAgICByZXR1cm4gMCA8PSBxICYmIHEgPCB0aGlzLndpZHRoICYmIDAgPD0gaGV4LnkgJiYgaGV4LnkgPCB0aGlzLmhlaWdodFxuICB9XG5cbiAgcHVibGljICpnZXRNYXBIZXhlcygpOiBJdGVyYWJsZUl0ZXJhdG9yPEhleD4ge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuaGVpZ2h0OyByb3crKylcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IHggPSAtTWF0aC5mbG9vcihyb3cgLyAyKSArIGNvbHVtblxuICAgICAgICB5aWVsZCBuZXcgSGV4KHgsIHJvdylcbiAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IHdpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBXb3JsZE1hcCA9PiBuZXcgV29ybGRNYXAoeyB3aWR0aDoganNvbi53aWR0aCwgaGVpZ2h0OiBqc29uLmhlaWdodCB9KVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuL3dvcmxkLW1hcCdcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4vdW5pdCdcbmltcG9ydCB7IGp1c3QsIE1heWJlLCBPcHRpb24sIHRvTWF5YmUsIHRvT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4vd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4vd29ybGQtZXZlbnRzJ1xuXG5pbnRlcmZhY2UgR2FtZU92ZXJJbmZvIHtcbiAgdmljdG9yOiBPcHRpb248UGxheWVySWQ+XG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZFN0YXRlIHtcbiAgcmVhZG9ubHkgdHVybjogbnVtYmVyIC8qIHR1cm4gPSAwIGJlZm9yZSB0aGUgZ2FtZSBoYXMgc3RhcnRlZCAqL1xuICByZWFkb25seSBtYXA6IFdvcmxkTWFwXG4gIHJlYWRvbmx5IHVuaXRzOiBVbml0W11cbiAgcmVhZG9ubHkgcGxheWVyczogUGxheWVyW11cbiAgcmVhZG9ubHkgZ2FtZU92ZXJJbmZvPzogR2FtZU92ZXJJbmZvXG4gIHJlYWRvbmx5IHdvcmxkTG9nOiBzdHJpbmdbXVxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0dXJuLFxuICAgIG1hcCxcbiAgICB1bml0cyxcbiAgICBwbGF5ZXJzLFxuICAgIGdhbWVPdmVySW5mbyxcbiAgICB3b3JsZExvZyA9IFtdLFxuICB9OiB7XG4gICAgdHVybjogbnVtYmVyXG4gICAgbWFwOiBXb3JsZE1hcFxuICAgIHVuaXRzOiBVbml0W11cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXVxuICAgIGdhbWVPdmVySW5mbz86IE9wdGlvbjxHYW1lT3ZlckluZm8+XG4gICAgd29ybGRMb2c/OiBzdHJpbmdbXVxuICB9KSB7XG4gICAgdGhpcy50dXJuID0gdHVyblxuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy51bml0cyA9IHVuaXRzXG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVyc1xuICAgIHRoaXMuZ2FtZU92ZXJJbmZvID0gZ2FtZU92ZXJJbmZvXG4gICAgdGhpcy53b3JsZExvZyA9IHdvcmxkTG9nXG4gICAgYXNzZXJ0KHR1cm4gPj0gMClcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICB0dXJuID0gdGhpcy50dXJuLFxuICAgIG1hcCA9IHRoaXMubWFwLFxuICAgIHVuaXRzID0gdGhpcy51bml0cyxcbiAgICBwbGF5ZXJzID0gdGhpcy5wbGF5ZXJzLFxuICAgIGdhbWVPdmVySW5mbyA9IHRvTWF5YmUodGhpcy5nYW1lT3ZlckluZm8pLFxuICAgIHdvcmxkTG9nID0gdGhpcy53b3JsZExvZyxcbiAgfToge1xuICAgIHR1cm4/OiBudW1iZXJcbiAgICBtYXA/OiBXb3JsZE1hcFxuICAgIHVuaXRzPzogVW5pdFtdXG4gICAgcGxheWVycz86IFBsYXllcltdXG4gICAgZ2FtZU92ZXJJbmZvPzogTWF5YmU8R2FtZU92ZXJJbmZvPlxuICAgIHdvcmxkTG9nPzogc3RyaW5nW11cbiAgfSA9IHt9KTogV29ybGRTdGF0ZSA9PiBuZXcgV29ybGRTdGF0ZSh7IHR1cm4sIG1hcCwgdW5pdHMsIHBsYXllcnMsIGdhbWVPdmVySW5mbzogdG9PcHRpb24oZ2FtZU92ZXJJbmZvKSwgd29ybGRMb2cgfSlcblxuICBwdWJsaWMgZ2V0IGlzR2FtZU92ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXJJbmZvICE9PSB1bmRlZmluZWRcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2FtZUhhc1N0YXJ0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHVybiA+IDBcbiAgfVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXJJZHMgPSAoKTogUGxheWVySWRbXSA9PiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5pZClcblxuICBwdWJsaWMgaXNQbGF5ZXJEZWZlYXRlZCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IHRoaXMuZ2V0VW5pdHNGb3JQbGF5ZXIocGxheWVySWQpLmxlbmd0aCA9PT0gMFxuXG4gIHB1YmxpYyBjYW5QbGF5ZXJBY3QgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgZW5kZWRUdXJuID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKT8uZW5kZWRUdXJuXG4gICAgcmV0dXJuICFlbmRlZFR1cm4gJiYgUi5hbnkoKHVuaXQpID0+IHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cywgdGhpcy5nZXRVbml0c0ZvclBsYXllcihwbGF5ZXJJZCkpXG4gIH1cblxuICBwdWJsaWMgY2FuQW55UGxheWVyQWN0ID0gKCk6IGJvb2xlYW4gPT4gUi5hbnkoKHBsYXllcikgPT4gdGhpcy5jYW5QbGF5ZXJBY3QocGxheWVyLmlkKSwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnZXRVbml0c0ZvclBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0W10gPT4gdGhpcy51bml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQucGxheWVySWQgPT09IHBsYXllcklkKVxuXG4gIHB1YmxpYyBmaW5kUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IE9wdGlvbjxQbGF5ZXI+ID0+IFIuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdldFBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBQbGF5ZXIgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyXG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRCeUlkID0gKHVuaXRJZDogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+IFIuZmluZCgodW5pdCkgPT4gdW5pdC5pZCA9PT0gdW5pdElkLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyBnZXRVbml0QnlJZCA9ICh1bml0SWQ6IG51bWJlcik6IFVuaXQgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICB9XG4gICAgcmV0dXJuIHVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gUi5maW5kKCh1bml0KSA9PiB1bml0LmxvY2F0aW9uLmVxdWFscyhoZXgpLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyByZXBsYWNlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCwgdW5pdDogVW5pdCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoe1xuICAgICAgdW5pdHM6IFIuYXBwZW5kKFxuICAgICAgICB1bml0LFxuICAgICAgICBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPT0gdW5pdElkLCB0aGlzLnVuaXRzKSxcbiAgICAgICksXG4gICAgfSlcblxuICBwdWJsaWMgcmVtb3ZlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyB1bml0czogUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT09IHVuaXRJZCwgdGhpcy51bml0cykgfSlcblxuICBwdWJsaWMgdXBkYXRlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgbW9kaWZ5OiAocGxheWVyOiBQbGF5ZXIpID0+IFBsYXllcik6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VQbGF5ZXIocGxheWVySWQsIG1vZGlmeShwbGF5ZXIpKVxuICB9XG5cbiAgcHVibGljIHJlcGxhY2VQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkLCBwbGF5ZXI6IFBsYXllcik6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGFzc2VydChwbGF5ZXJJZCA9PT0gcGxheWVyLmlkKVxuICAgIHJldHVybiB0aGlzLmNvcHkoe1xuICAgICAgcGxheWVyczogUi5hcHBlbmQoXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgUi5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmlkICE9PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKSxcbiAgICAgICksXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBhZGRQbGF5ZXIgPSAocGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IHBsYXllcnM6IFIuYXBwZW5kKHBsYXllciwgdGhpcy5wbGF5ZXJzKSB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgdHVybjogdGhpcy50dXJuLFxuICAgIG1hcDogdGhpcy5tYXAudG9Kc29uKCksXG4gICAgdW5pdHM6IHRoaXMudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LnRvSnNvbigpKSxcbiAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci50b0pzb24oKSksXG4gICAgZ2FtZU92ZXJJbmZvOiB0aGlzLmdhbWVPdmVySW5mbyxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkU3RhdGUgPT5cbiAgICBuZXcgV29ybGRTdGF0ZSh7XG4gICAgICB0dXJuOiBqc29uLnR1cm4sXG4gICAgICBtYXA6IFdvcmxkTWFwLmZyb21Kc29uKGpzb24ubWFwKSxcbiAgICAgIHVuaXRzOiBqc29uLnVuaXRzLm1hcCgodW5pdDogYW55KSA9PiBVbml0LmZyb21Kc29uKHVuaXQpKSxcbiAgICAgIHBsYXllcnM6IGpzb24ucGxheWVycy5tYXAoKHVuaXQ6IGFueSkgPT4gUGxheWVyLmZyb21Kc29uKHVuaXQpKSxcbiAgICAgIGdhbWVPdmVySW5mbzoganNvbi5nYW1lT3ZlckluZm8sXG4gICAgfSlcblxuICBwdWJsaWMgaXNWYWxpZFBsYXllcklkID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IGJvb2xlYW4gPT4gUi5hbnkoKHBsYXllcikgPT4gcGxheWVyLmlkID09PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnYW1lT3ZlciA9ICh2aWN0b3I6IE9wdGlvbjxudW1iZXI+KTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBnYW1lT3ZlckluZm86IGp1c3QoeyB2aWN0b3IgfSkgfSlcblxuICBwdWJsaWMgYXBwbHlFdmVudCA9IChldmVudDogV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4gYXBwbHlFdmVudCh0aGlzLCBldmVudClcblxuICBwdWJsaWMgYXBwbHlFdmVudHMgPSAoZXZlbnRzOiBXb3JsZEV2ZW50W10pOiBXb3JsZFN0YXRlID0+IHtcbiAgICBsZXQgc3RhdGU6IFdvcmxkU3RhdGUgPSB0aGlzXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIHN0YXRlID0gc3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxuICBwdWJsaWMgYWRkV29ybGRMb2cgPSAobWVzc2FnZTogc3RyaW5nKTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyB3b3JsZExvZzogUi5hcHBlbmQobWVzc2FnZSwgdGhpcy53b3JsZExvZykgfSlcblxuICBwdWJsaWMgbmV3VHVybiA9ICgpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHtcbiAgICAgIHR1cm46IHRoaXMudHVybiArIDEsXG4gICAgICB1bml0czogdGhpcy51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQucmVmcmVzaEFjdGlvblBvaW50cygpKSxcbiAgICAgIHBsYXllcnM6IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IGZhbHNlIH0pKSxcbiAgICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==