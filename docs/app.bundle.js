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
        this.actAsServer = function (server) { return server.addListener(function (event) { return _this.handleWorldEvent2(event, server); }); };
        this.handleStartGame = function () {
            _this.dispatchAction({ type: 'startGame' });
            _this.launchGameScene();
        };
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
var world_event_evaluator_1 = __webpack_require__(/*! ../../world/world-event-evaluator */ "./src/world/world-event-evaluator.ts");
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
        _this.worldState = initial_world_state_1.INITIAL_WORLD_STATE;
        _this.localGameState = local_game_state_1.INITIAL_LOCAL_GAME_STATE;
        // Create
        // ------
        _this.create = function (sceneData) {
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
        // Sync
        // ----
        // Handle world events
        // -------------------
        _this.handleWorldEvent = function (event) {
            var oldWorldState = _this.worldState;
            _this.worldState = world_event_evaluator_1.applyEvent(oldWorldState, event);
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
            console.log('Player defeated');
            console.log(_this.combinedState.getCurrentPlayer().defeated);
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
        var events, worldState, _a, _b, event_1;
        var e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, worldEventDb.getEventsForGame(gameId)];
                case 1:
                    events = _d.sent();
                    worldState = initial_world_state_1.INITIAL_WORLD_STATE;
                    try {
                        for (_a = __values(R.sortBy(function (event) { return event.id; }, events)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            event_1 = _b.value;
                            worldState = worldState.applyEvent(event_1);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
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
        throw "Initialise must be the first event";
    }
    return event.state;
};
var handlePlayerAdded = function (state, event) {
    if (R.any(function (player) { return player.id === event.playerId; }, state.players)) {
        throw "Player ID already in use";
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
        throw "No player found with ID " + playerId;
    return player;
};
var handleGameStarted = function (state, event) {
    if (state.gameHasStarted) {
        throw "Game already started";
    }
    return state.copy({ turn: 1, units: event.units }).addWorldLog('Let battle commence!');
};
var handleUnitMoved = function (state, event) {
    var unitId = event.unitId, playerId = event.playerId, from = event.from, to = event.to;
    if (!from.isAdjacentTo(to)) {
        throw "Invalid unit movement between non-adjacent hexes " + from + " to " + to;
    }
    if (!state.map.isInBounds(to)) {
        throw "Invalid unit movement to out-of-bounds hex " + to;
    }
    var unit = state.findUnitById(unitId);
    if (!unit) {
        throw "No unit found with ID " + unitId;
    }
    if (!unit.location.equals(from)) {
        throw "Unit is not in the expected location for movement. Unit is at " + unit.location + ", but was expected to be at " + from;
    }
    var toUnit = state.findUnitInLocation(to);
    if (toUnit) {
        throw "Invalid unit movement to already-occupied hex";
    }
    if (unit.playerId !== playerId) {
        throw "Invalid attempt to move unit of another player";
    }
    if (unit.actionPoints.current < event.actionPointsConsumed) {
        throw "Invalid action point usage";
    }
    return state.replaceUnit(unit.id, unit.move(to, event.actionPointsConsumed));
};
var handleCombat = function (state, event) {
    var attacker = event.attacker, defender = event.defender;
    var attackerUnit = state.findUnitById(attacker.unitId);
    if (!attackerUnit)
        throw "No unit found with ID " + attacker.unitId;
    if (!attackerUnit.location.equals(attacker.location))
        throw "Invalid location for attacker. Attacking unit " + attackerUnit.id + " is at location " + attackerUnit.location + ", but was expected to be at " + attacker.location;
    var defenderUnit = state.findUnitById(defender.unitId);
    if (!defenderUnit)
        throw "No unit found with ID " + defender.unitId;
    if (!defenderUnit.location.equals(defender.location))
        throw "Invalid location for defender. Defending unit " + defenderUnit.id + " is at location " + defenderUnit.location + ", but was expected to be at " + defender.location;
    if (attackerUnit.playerId === defenderUnit.playerId)
        throw "Invalid combat with self";
    if (!attack_world_action_handler_1.canAttackOccur(event.attackType, attacker.location, defender.location))
        throw "Invalid combat of type " + event.attackType + " between hexes " + attacker.location + " to " + defender.location;
    if (attackerUnit.actionPoints.current < event.actionPointsConsumed)
        throw "Invalid action point usage";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb21iaW5lZC1zdGF0ZS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaGV4LWdlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2JieS9jcmVhdGVkLWxvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvbG9iYnktZGlzcGxheS1vYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvbG9iYnktc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2NhbC1nYW1lLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2Rpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2tleWJvYXJkLW1hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL21hcC1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS90ZXh0cy1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS91bml0LWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51L21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGVlci1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wZWVyLXNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BlZXItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXNlcmlhbGlzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbS11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2FjdGlvbi1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGl0LXBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC91bml0LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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O0NBQ25CLENBQUMsRUFIOEMsQ0FHOUM7QUFFVyxpQkFBUyxHQUFHLFVBQUMsS0FBWTtJQUNwQyxJQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0IsT0FBTyxLQUFLLENBQUMsSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxJQUFNLEtBQUssR0FBRyxVQUFDLEdBQVE7SUFDckIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLO1FBQUUsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQzNELElBQUksS0FBSyxHQUFHLEtBQUs7UUFBRSxPQUFPLElBQUksU0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7O1FBQy9DLE9BQU8sSUFBSSxTQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQzVCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUU3QixJQUFNLFNBQVMsR0FBRyxVQUFDLE1BQWEsRUFBRSxJQUFZLEVBQUUsQ0FBUztJQUN2RCxJQUFNLFlBQVksR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFNBQVM7SUFDN0MsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDbEQsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFDbEQsT0FBTyxFQUFFLENBQUMsS0FBRSxDQUFDLEtBQUU7QUFDakIsQ0FBQztBQUVELFNBQWlCLFVBQVUsQ0FBQyxNQUFhLEVBQUUsSUFBWTs7Ozs7Z0JBQzVDLENBQUMsR0FBRyxDQUFDOzs7cUJBQUUsRUFBQyxHQUFHLENBQUM7Z0JBQ25CLHFCQUFNLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzs7Z0JBQWhDLFNBQWdDOzs7Z0JBRFgsQ0FBQyxFQUFFOzs7OztDQUczQjtBQUpELGdDQUlDO0FBRVksaUJBQVMsR0FBRyxVQUFDLEdBQWEsSUFBYSxRQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFwQixDQUFvQjtBQUUzRCxnQkFBUSxHQUFHLFVBQUMsT0FBZSxJQUFhLGNBQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQjs7Ozs7Ozs7Ozs7Ozs7O0FDL0MzRSxtR0FBNkM7QUFDN0MsNkdBQWtEO0FBQ2xELDRIQUEyRDtBQUMzRCx3R0FBZ0Q7QUFFaEQsa0JBQWUsQ0FBQyxzQkFBUyxFQUFFLHNCQUFTLEVBQUUsK0JBQWEsRUFBRSx3QkFBVSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTGhFLHdGQUE0QztBQUM1Qyx3RkFBNEM7QUFHNUMsOEdBQXVFO0FBRXZFLDBGQUF5QztBQUN6QyxnSUFBNkQ7QUFJN0Q7SUFRRSwyQkFBWSxLQUFtQixFQUFFLGNBQStCLEVBQUUsUUFBa0IsRUFBRSxVQUFzQjtRQUE1RyxpQkFnQkM7UUFFTyw0QkFBdUIsR0FBRyxVQUFDLEtBQW1CLEVBQUUsUUFBa0I7WUFDeEUsV0FBSSwyQ0FBbUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSSxDQUFDLHNCQUFzQixDQUFDO1FBQTNGLENBQTJGO1FBRXJGLGdCQUFXLEdBQUcsVUFBQyxNQUFjO1lBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsVUFBQyxLQUFpQixJQUFLLFlBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQXBDLENBQW9DO1lBQzNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxDQUFDO1FBRU8scUJBQWdCLEdBQUcsVUFBQyxLQUFpQixFQUFFLE1BQWM7WUFDM0QsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDbkQsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO2dCQUNsQixLQUFLLGFBQWE7b0JBQ2hCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLFFBQVEsQ0FBQztvQkFDekMsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLEtBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUztxQkFDMUI7b0JBQ0QsS0FBSSxDQUFDLGVBQWUsRUFBRTtvQkFDdEIsTUFBSztnQkFDUCxLQUFLLGFBQWE7b0JBQ2hCLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLG1CQUFtQixDQUFDO29CQUNwRCxLQUFJLENBQUMsSUFBSSxFQUFFO29CQUNYLE1BQUs7Z0JBQ1A7b0JBQ0UsS0FBSSxDQUFDLElBQUksRUFBRTthQUNkO1FBQ0gsQ0FBQztRQUVPLHNCQUFpQixHQUFHLFVBQUMsS0FBaUIsRUFBRSxNQUFjO1lBQzVELEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ25ELFFBQVEsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDbEIsS0FBSyxhQUFhO29CQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxRQUFRLENBQUM7b0JBQ3pDLElBQUksS0FBSSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO3dCQUNwQyxLQUFJLENBQUMsUUFBUSxHQUFHLFNBQVM7cUJBQzFCO29CQUNELEtBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3RCLE1BQUs7Z0JBQ1AsS0FBSyxhQUFhO29CQUNoQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDcEQsS0FBSSxDQUFDLElBQUksRUFBRTtvQkFDWCxNQUFLO2dCQUNQO29CQUNFLEtBQUksQ0FBQyxJQUFJLEVBQUU7YUFDZDtRQUNILENBQUM7UUFDTyxvQkFBZSxHQUFHO1lBQ3hCLElBQU0sU0FBUyxHQUFrQjtnQkFDL0IsY0FBYyxFQUFFLEtBQUksQ0FBQyxjQUFjO2dCQUNuQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFVBQVU7Z0JBQzNCLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUTthQUN4QjtZQUNELEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQywyQkFBYyxFQUFFLFNBQVMsQ0FBQztRQUNuRCxDQUFDO1FBRU8sMkJBQXNCLEdBQUcsVUFBQyxJQUFZLElBQVcsWUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLFFBQUUsQ0FBQyxFQUF2RCxDQUF1RDtRQUV4RyxtQkFBYyxHQUFHLFVBQUMsTUFBbUI7WUFDM0MsSUFBSSxLQUFJLENBQUMsY0FBYyxZQUFZLGVBQU0sRUFBRTtnQkFDekMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7YUFDeEQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7YUFDdEQ7UUFDSCxDQUFDO1FBRU0sU0FBSSxHQUFHLGNBQVksWUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQTlDLENBQThDO1FBRWhFLGdCQUFXLEdBQUcsVUFBQyxNQUFjLElBQVcsYUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFDLEtBQUssSUFBSyxZQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFyQyxDQUFxQyxDQUFDLEVBQXBFLENBQW9FO1FBRTVHLG9CQUFlLEdBQUc7WUFDeEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQztZQUMxQyxLQUFJLENBQUMsZUFBZSxFQUFFO1FBQ3hCLENBQUM7UUExRkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxzQkFBUyxDQUFDLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsc0JBQVMsQ0FBQyxRQUFRLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHNCQUFTLENBQUMsbUJBQW1CLENBQUM7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ3hFLElBQUksY0FBYyxZQUFZLGVBQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7U0FDakM7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFO0lBQ2IsQ0FBQztJQTRFSCx3QkFBQztBQUFELENBQUM7QUFwR1ksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYOUIsc0ZBQTZEO0FBQzdELCtGQUFpRDtBQUNqRCw2RUFBMEI7QUFFMUIsMEZBQXlDO0FBRXpDO0lBVUUsNkJBQ0UsS0FBbUIsRUFDbkIsUUFBa0IsRUFDbEIsV0FBeUIsRUFDekIsa0JBQTBDO1FBSjVDLGlCQWdCQztRQXBCZ0Isb0JBQWUsR0FBMkMsSUFBSSxHQUFHLEVBQUU7UUFzQjVFLG9CQUFlLEdBQUc7WUFDeEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxXQUFXLEVBQUU7UUFDcEIsQ0FBQztRQUVNLFNBQUksR0FBRyxVQUFDLFVBQXNCOzs7WUFDbkMsSUFBTSxpQkFBaUIsR0FBRyxVQUFVLENBQUMsWUFBWSxFQUFFO1lBQ25ELElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hFLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQzs7Z0JBQzFFLEtBQXVCLGtEQUFnQixtSUFBRTtvQkFBcEMsSUFBTSxRQUFRO29CQUNqQixXQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsMENBQUUsT0FBTyxHQUFFO2lCQUM5Qzs7Ozs7Ozs7O1lBQ0QsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixDQUFDO29DQUMvRCxRQUFRO2dCQUNqQixJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztnQkFDN0MsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO3FCQUM5QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFO29CQUN6QixJQUFJLEVBQUUsU0FBUztvQkFDZixVQUFVLEVBQUUsR0FBRztvQkFDZixlQUFlLEVBQUUsUUFBUSxLQUFLLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztpQkFDcEUsQ0FBQztxQkFDRCxXQUFXLENBQUMsRUFBRSxDQUFDO3FCQUNmLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3RCLGNBQWMsRUFBRTtxQkFDaEIsRUFBRSxDQUFDLGFBQWEsRUFBRTtvQkFDakIsSUFBSSxRQUFRLEtBQUssS0FBSSxDQUFDLFFBQVEsRUFBRTt3QkFDOUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBUTt3QkFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7NEJBQ3RCLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQXhDLENBQXdDO3lCQUN4RCxDQUFDO3FCQUNIO2dCQUNILENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDOzs7Z0JBbkJoRCxLQUF1QixrREFBZ0I7b0JBQWxDLElBQU0sUUFBUTs0QkFBUixRQUFRO2lCQW9CbEI7Ozs7Ozs7OztZQUNELElBQUksQ0FBQyxHQUFHLEdBQUc7WUFDWCxJQUFNLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxFQUFFLEVBQVQsQ0FBUyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUM7O2dCQUN6RSxLQUFxQiw0Q0FBYSxvSEFBRTtvQkFBL0IsSUFBTSxNQUFNO29CQUNmLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQ3RELFVBQVUsYUFBVixVQUFVLHVCQUFWLFVBQVUsQ0FBRSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFDO29CQUN4QyxDQUFDLElBQUksRUFBRTtpQkFDUjs7Ozs7Ozs7O1lBQ0QsSUFBSSxLQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLEtBQUksQ0FBQyxrQkFBa0IsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDO1FBM0RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0I7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUMvRSxJQUFJLFFBQVEsS0FBSyx1QkFBYyxFQUFFO1lBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSx3QkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM5RjthQUFNO1lBQ0wsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLHVDQUF1QyxDQUFDO1NBQy9GO0lBQ0gsQ0FBQztJQWtESCwwQkFBQztBQUFELENBQUM7QUE1RVksa0RBQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZoQywwSEFBeUQ7QUFFNUMsdUJBQWUsR0FBRyxPQUFPO0FBUXRDLElBQU0sV0FBVyxHQUF1QztJQUN0RCxNQUFNLEVBQUUsS0FBSztJQUNiLE9BQU8sRUFBRSxLQUFLO0lBQ2QsR0FBRyxFQUFFLHVCQUFlO0NBQ3JCO0FBRUQ7SUFBZ0MsOEJBQVk7SUFDMUM7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQUVNLFlBQU0sR0FBRyxVQUFDLFNBQXlCO1lBQ2hDLGtCQUFjLEdBQTJCLFNBQVMsZUFBcEMsRUFBRSxRQUFRLEdBQWlCLFNBQVMsU0FBMUIsRUFBRSxVQUFVLEdBQUssU0FBUyxXQUFkLENBQWM7WUFDMUQsSUFBSSx1Q0FBaUIsQ0FBQyxLQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7UUFDbkUsQ0FBQzs7SUFMRCxDQUFDO0lBTUgsaUJBQUM7QUFBRCxDQUFDLENBVCtCLE1BQU0sQ0FBQyxLQUFLLEdBUzNDO0FBVFksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnZCLDhFQUFnRTtBQUVoRSxrRkFBaUM7QUFFakM7SUFNRSx3QkFBWSxFQVVYO1FBVkQsaUJBZ0JDO1lBZkMsUUFBUSxnQkFDUixJQUFJLFlBQ0osV0FBVyxtQkFDWCxvQ0FBZ0MsRUFBaEMsNEJBQTRCLG1CQUFHLENBQUM7UUFjM0IsU0FBSSxHQUFHLFVBQUMsRUFVVDtnQkFWUyxxQkFVWCxFQUFFLE9BVEosZ0JBQXdCLEVBQXhCLFFBQVEsbUJBQUcsS0FBSSxDQUFDLFFBQVEsT0FDeEIsWUFBZ0IsRUFBaEIsSUFBSSxtQkFBRyxLQUFJLENBQUMsSUFBSSxPQUNoQixtQkFBdUMsRUFBdkMsV0FBVyxtQkFBRyxlQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUN2QyxvQ0FBZ0UsRUFBaEUsNEJBQTRCLG1CQUFHLEtBQUksQ0FBQyw0QkFBNEI7WUFPaEUsV0FBSSxjQUFjLENBQUMsRUFBRSxRQUFRLFlBQUUsSUFBSSxRQUFFLFdBQVcsRUFBRSxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLDRCQUE0QixnQ0FBRSxDQUFDO1FBQXhHLENBQXdHO1FBRW5HLG1CQUFjLEdBQUcsVUFBQyxXQUF3QixJQUFxQixZQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLGVBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQWhELENBQWdEO1FBRS9HLFlBQU8sR0FBRyxVQUFDLElBQVUsSUFBcUIsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksUUFBRSxDQUFDLEVBQW5CLENBQW1CO1FBRTdELDBDQUFxQyxHQUFHO1lBQzdDLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSw0QkFBNEIsRUFBRSxLQUFJLENBQUMsNEJBQTRCLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFBbEYsQ0FBa0Y7UUFFN0UsMENBQXFDLEdBQUc7WUFDN0MsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLDRCQUE0QixFQUFFLEtBQUksQ0FBQyw0QkFBNEIsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUFsRixDQUFrRjtRQTVCbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVc7UUFDOUIsSUFBSSxDQUFDLDRCQUE0QixHQUFHLDRCQUE0QjtRQUNoRSxNQUFNLENBQUMsNEJBQTRCLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUF3QkgscUJBQUM7QUFBRCxDQUFDO0FBOUNZLHdDQUFjO0FBZ0RkLGdDQUF3QixHQUFHLElBQUksY0FBYyxDQUFDO0lBQ3pELFFBQVEsRUFBRSxDQUFDO0lBQ1gsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtDQUM1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REYsMkhBQXVEO0FBRXZELDhIQUF5RDtBQUN6RCxpSUFBa0Y7QUFJbEYsNkVBQTBCO0FBRTFCLG9JQUF3RTtBQUV4RSwwRkFBeUM7QUFDekMsbUdBQXNEO0FBNkJ0RDtJQVlFLHdCQUNFLEtBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLHFCQUE0QztRQUo5QyxpQkFpQkM7UUExQmdCLHVCQUFrQixHQUFtQyxJQUFJLEdBQUcsRUFBRTtRQUM5RCwrQkFBMEIsR0FBbUMsSUFBSSxHQUFHLEVBQUU7UUFHL0UsZ0JBQVcsR0FBWSxLQUFLO1FBRzVCLGVBQVUsR0FBb0IsRUFBRTtRQXFCakMsc0JBQWlCLEdBQUcsVUFBQyxLQUFZLHlCQUFXLEtBQUksQ0FBQyxnQkFBZ0IsMENBQUUsaUJBQWlCLENBQUMsS0FBSyxJQUFDO1FBRTNGLHVCQUFrQixHQUFHLFVBQUMsS0FBWSxJQUFjLFlBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsRUFBakQsQ0FBaUQ7UUFFakcsY0FBUyxHQUFHLFVBQ2pCLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLFNBQWdDOztZQUVoQyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7WUFDNUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFjO1lBQ3BDLFdBQUksQ0FBQyxnQkFBZ0IsMENBQUUsU0FBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsRUFBQztZQUN0RSxXQUFJLENBQUMsa0JBQWtCLDBDQUFFLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxjQUFjLEVBQUM7WUFFeEUsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQ3RELEtBQUksQ0FBQyw2QkFBNkIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLHlCQUF5QixDQUFDO2dCQUNyRixLQUFJLENBQUMsaUJBQWlCLEVBQUU7YUFDekI7WUFFRCxLQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2xCLENBQUM7UUFFTyxjQUFTLEdBQUc7O1lBQ2xCLEtBQUksQ0FBQyxzQ0FBc0MsRUFBRTtZQUM3QyxJQUFNLFdBQVcsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssUUFBQyxLQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQzs7Z0JBQ3pHLEtBQW1CLHdDQUFXLDBHQUFFO29CQUEzQixJQUFNLElBQUk7b0JBQ2IsSUFBSSxpQkFBaUIsR0FBRyxLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQzVELElBQUksQ0FBQyxpQkFBaUIsRUFBRTt3QkFDdEIsaUJBQWlCLEdBQUcsSUFBSSx1Q0FBaUIsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQzt3QkFDM0QsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDO3FCQUN4RDtvQkFDRCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2lCQUNsQzs7Ozs7Ozs7O1FBQ0gsQ0FBQztRQUVPLDJDQUFzQyxHQUFHOzs7WUFDL0MsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFDMUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxDQUFDLENBQzdDOztnQkFDRCxLQUFxQiw4Q0FBYyx5SEFBRTtvQkFBaEMsSUFBTSxNQUFNO29CQUNmLFdBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLDBDQUFFLE9BQU8sR0FBRTtvQkFDOUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7aUJBQ3ZDOzs7Ozs7Ozs7UUFDSCxDQUFDO1FBRU8sc0JBQWlCLEdBQUc7WUFDMUIsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixPQUFNO2FBQ1A7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGlCQUFpQixFQUFFO2FBQ3pCO1FBQ0gsQ0FBQztRQUVPLHVCQUFrQixHQUFHOztZQUkzQixJQUFNLGtDQUFrQyxHQUFHLElBQUksR0FBRyxFQUFVO1lBQzVELElBQU0sc0JBQXNCLEdBQUcsRUFBRTtZQUNqQyxJQUFNLHdCQUF3QixHQUFHLEVBQUU7O2dCQUNuQyxLQUF3Qix1QkFBSSxDQUFDLFVBQVUsNkNBQUU7b0JBQXBDLElBQU0sU0FBUztvQkFDbEIsSUFBTSwwQkFBMEIsR0FBRyxLQUFJLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDO29CQUNoRixJQUFNLDJCQUEyQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQ3ZDLFVBQUMsTUFBTSxJQUFLLHlDQUFrQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBOUMsQ0FBOEMsRUFDMUQsMEJBQTBCLENBQzNCO29CQUNELElBQUksMkJBQTJCLEVBQUU7d0JBQy9CLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cUJBQ3pDO3lCQUFNO3dCQUNMLHNCQUFzQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7cUJBQ3ZDOzt3QkFDRCxLQUFxQixxRkFBMEIsc0xBQUU7NEJBQTVDLElBQU0sTUFBTTs0QkFDZixrQ0FBa0MsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO3lCQUMvQzs7Ozs7Ozs7O2lCQUNGOzs7Ozs7Ozs7WUFDRCxPQUFPLEVBQUUsc0JBQXNCLDBCQUFFLHdCQUF3Qiw0QkFBRTtRQUM3RCxDQUFDO1FBRU8sc0JBQWlCLEdBQUc7Ozs7Ozt3QkFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJOzs7Ozs7NkJBRWQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQzt3QkFDekIsS0FBdUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQTlFLHNCQUFzQiw4QkFBRSx3QkFBd0IsK0JBQThCO3dCQUN0RixJQUFJLENBQUMsVUFBVSxHQUFHLHdCQUF3Qjt3QkFDMUMscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzt3QkFBaEUsU0FBZ0U7OzRCQUNoRSxLQUF3Qix5RUFBc0Isa0tBQUU7Z0NBQXJDLFNBQVM7Z0NBQ2xCLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxTQUFTLENBQUM7NkJBQ2pFOzs7Ozs7Ozs7Ozs7d0JBR0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLOzs7OzthQUUzQjtRQUVPLHFEQUFnRCxHQUFHLFVBQUMsU0FBd0I7WUFDbEYsSUFBTSxrQkFBa0IsR0FBRyxLQUFJLENBQUMsNkJBQTZCLENBQUMsU0FBUyxDQUFDO1lBQ3hFLElBQU0sNEJBQTRCLEdBQUcsS0FBSSxDQUFDLDRCQUE0QixFQUFFO1lBQ3hFLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSw0QkFBNEIsQ0FBQztZQUN2RixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLDRCQUE0QixDQUFDO1FBQzdELENBQUM7UUFFTyw4QkFBeUIsR0FBRyxVQUFDLE1BQWM7WUFDakQsSUFBTSxhQUFhLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDekQsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUM7YUFDM0Q7UUFDSCxDQUFDO1FBRU8saUNBQTRCLEdBQUcsVUFBQyxNQUFjO1lBQ3BELElBQU0sYUFBYSxHQUFHLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ2pFLElBQUksQ0FBQyxhQUFhO2dCQUFFLE1BQU0sZ0RBQThDLE1BQVE7WUFDaEYsS0FBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDOUMsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2pELElBQUksSUFBSSxFQUFFO2dCQUNSLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUM3QixLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLE9BQU8sRUFBRTthQUN4QjtRQUNILENBQUM7UUFFTyxpQ0FBNEIsR0FBRyxjQUFnQixRQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQTVELENBQTREO1FBRTNHLGtDQUE2QixHQUFHLFVBQUMsU0FBd0I7WUFDL0QsUUFBUSxTQUFTLENBQUMsSUFBSSxFQUFFO2dCQUN0QixLQUFLLE1BQU07b0JBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLEtBQUssUUFBUTtvQkFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDaEU7UUFDSCxDQUFDO1FBRU8saUJBQVksR0FBRyxVQUFPLFNBQXdCOzs7Ozt3QkFDNUMsY0FBUyxDQUFDLElBQUk7O2lDQUNmLE1BQU0sQ0FBQyxDQUFQLHdCQUFNO2lDQUdOLFFBQVEsQ0FBQyxDQUFULHdCQUFROzs7NEJBRlgscUJBQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQzs7d0JBQXRDLFNBQXNDO3dCQUN0Qyx3QkFBSzs0QkFFTCxxQkFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDOzt3QkFBeEMsU0FBd0M7d0JBQ3hDLHdCQUFLOzRCQUVMLE1BQU0sSUFBSSw2Q0FBb0IsQ0FBQyxTQUFTLENBQUM7Ozs7YUFFOUM7UUFFTyxxQkFBZ0IsR0FBRyxVQUFPLFNBQTRCOzs7Ozt3QkFDdEQsYUFBYSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzt3QkFDM0UsSUFBSSxDQUFDLGFBQWE7NEJBQUUsTUFBTSxnREFBOEMsU0FBUyxDQUFDLE1BQVE7d0JBQzFGLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLElBQUksQ0FBQzt3QkFDckMscUJBQU0sYUFBYSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQzs7d0JBQWxFLFNBQWtFOzs7O2FBQ25FO1FBRU8sdUJBQWtCLEdBQUcsVUFBTyxTQUE4Qjs7Ozs7d0JBQ3hELFFBQVEsR0FBZSxTQUFTLFNBQXhCLEVBQUUsUUFBUSxHQUFLLFNBQVMsU0FBZCxDQUFjO3dCQUNsQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7d0JBQ2xGLElBQUksQ0FBQyxxQkFBcUI7NEJBQUUsTUFBTSxnREFBOEMsUUFBUSxDQUFDLE1BQVE7d0JBQzNGLHFCQUFxQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDbEYsSUFBSSxDQUFDLHFCQUFxQjs0QkFBRSxNQUFNLGdEQUE4QyxRQUFRLENBQUMsTUFBUTt3QkFDakcsSUFBSSxTQUFTLENBQUMsVUFBVSxLQUFLLE9BQU8sRUFBRTs0QkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLDJCQUFhLENBQUMsQ0FBQyxzQkFBUyxDQUFDLFFBQVEsRUFBRSxzQkFBUyxDQUFDLFFBQVEsRUFBRSxzQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7eUJBQ25HOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLElBQUksQ0FBQzt5QkFDdEM7d0JBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7NEJBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLEtBQUssQ0FBQzt5QkFDdkM7d0JBQ0ssc0JBQXNCLEdBQW9CLEVBQUU7d0JBQ2xELElBQUksU0FBUyxDQUFDLFVBQVUsS0FBSyxPQUFPLEVBQUU7NEJBQ3BDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDNUc7NkJBQU07NEJBQ0wsc0JBQXNCLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3lCQUMxRzt3QkFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7NEJBQ25CLHNCQUFzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3lCQUN2RTt3QkFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7NEJBQ25CLHNCQUFzQixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3lCQUN2RTt3QkFDRCxxQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDOzt3QkFBekMsU0FBeUM7d0JBQ3pDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDOzRCQUFFLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQzt3QkFDckcsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7NEJBQUUscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDOzs7O2FBQ3RHO1FBck1DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjO1FBQ3BDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUI7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUkscUNBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN6RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSx5Q0FBa0IsQ0FDOUMsS0FBSyxFQUNMLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLHFCQUFxQixDQUMzQjtJQUNILENBQUM7SUEyTEgscUJBQUM7QUFBRCxDQUFDO0FBeE5ZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDM0IsMkVBQTBFO0FBRTFFLGdHQUF3RDtBQVN4RCxtSUFBOEQ7QUFFOUQsb0lBQXdFO0FBQ3hFLGlGQUEyRDtBQUMzRCw0R0FBOEU7QUFDOUUsMEZBQXlEO0FBQ3pELGtIQUFvRDtBQUVwRCx1SUFBa0Y7QUFDbEYsOEhBQXlEO0FBRXpELDZIQUFxRTtBQUVyRSx3RkFBNEM7QUFDNUMsa0hBQWlFO0FBSXBELHNCQUFjLEdBQUcsTUFBTTtBQUVwQyxJQUFNLFdBQVcsR0FBdUM7SUFDdEQsTUFBTSxFQUFFLEtBQUs7SUFDYixPQUFPLEVBQUUsS0FBSztJQUNkLEdBQUcsRUFBRSxzQkFBYztDQUNwQjtBQVFZLGdCQUFRLEdBQUcsRUFBRTtBQUNiLHNCQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUU7QUFDbEMsaUJBQVMsR0FBRyxVQUFDLEdBQVEsSUFBWSx3QkFBUyxDQUFDLHFCQUFhLENBQUMsMEJBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxnQkFBUSxDQUFDLEVBQUUsc0JBQWMsQ0FBQyxFQUFwRSxDQUFvRTtBQUlsSDtJQUErQiw2QkFBWTtJQVl6QztRQUFBLFlBQ0Usa0JBQU0sV0FBVyxDQUFDLFNBQ25CO1FBWE8sZ0JBQVUsR0FBZSx5Q0FBbUI7UUFDNUMsb0JBQWMsR0FBbUIsMkNBQXdCO1FBWWpFLFNBQVM7UUFDVCxTQUFTO1FBRUYsWUFBTSxHQUFHLFVBQUMsU0FBd0I7WUFDL0Isa0JBQWMsR0FBMkIsU0FBUyxlQUFwQyxFQUFFLFFBQVEsR0FBaUIsU0FBUyxTQUExQixFQUFFLFVBQVUsR0FBSyxTQUFTLFdBQWQsQ0FBYztZQUMxRCxLQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtZQUM1QixLQUFJLENBQUMsY0FBYyxHQUFHLDJDQUF3QixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsWUFBRSxDQUFDO1lBQ2pFLEtBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYztZQUNwQyxJQUFJLGNBQWMsWUFBWSxlQUFNLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO2FBQ2pDO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDO2FBQ2pDO1lBRUQsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGdDQUFjLENBQUMsS0FBSSxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsaUJBQWlCLENBQUM7WUFDNUcsS0FBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzVCLEtBQUksQ0FBQyxXQUFXLEVBQUU7UUFDcEIsQ0FBQztRQUVPLGdCQUFVLEdBQUc7WUFDbkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSztZQUM5QiwyQkFBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyxZQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztRQUN0RCxDQUFDO1FBRU0sZUFBUyxHQUFHLFVBQUMsU0FBeUIseUJBQzNDLEtBQUksQ0FBQyxjQUFjLDBDQUFFLFNBQVMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxjQUFjLEVBQUUsU0FBUyxJQUFDO1FBRWpGLGFBQWE7UUFDYixhQUFhO1FBRUwsaUJBQVcsR0FBRyxVQUFDLE1BQWM7WUFDbkMsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNO1lBQzVCLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzNDLENBQUM7UUFFTyxpQkFBVyxHQUFHLFVBQUMsTUFBYztZQUNuQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN6QyxLQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVO1FBQ3JDLENBQUM7UUFFTyx1QkFBaUIsR0FBRyxVQUFPLE1BQW1COzs7O3dCQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTs0QkFDeEIsTUFBTSxtQ0FBbUM7eUJBQzFDOzZCQUNHLEtBQUksQ0FBQyxjQUFjLFlBQVksZUFBTSxHQUFyQyx3QkFBcUM7d0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDOzs0QkFFdkQscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7O3dCQUEzRCxTQUEyRDs7Ozs7YUFFOUQ7UUFFRCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBRVQsaUJBQVcsR0FBRztZQUNwQixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUNyQyxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUM7WUFDakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRCxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3RELENBQUM7UUFFTyxlQUFTLEdBQUcsVUFBQyxLQUFvQjtZQUN2QyxJQUFNLFdBQVcsR0FBRyxrQ0FBZ0IsQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckUsSUFBSSxXQUFXO2dCQUFFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7UUFDdEQsQ0FBQztRQUVPLHVCQUFpQixHQUFHLFVBQUMsV0FBd0I7WUFDbkQsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLDZDQUFvQixDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQztZQUMzRixJQUFNLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3hELElBQUksTUFBTSxFQUFFO2dCQUNWLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUM7YUFDcEM7UUFDSCxDQUFDO1FBRU8sNEJBQXNCLEdBQUcsVUFBQyxNQUF5QjtZQUN6RCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtnQkFDNUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsaUJBQWlCO2dCQUM5QyxLQUFJLENBQUMsU0FBUyxFQUFFO2FBQ2pCO1lBQ0QsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO2dCQUN0QixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMscUNBQXFDLEVBQUU7Z0JBQ2pGLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBRWhCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDO29CQUNqRCxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMscUNBQXFDLEVBQUU7b0JBQ2pGLEtBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLENBQUMsQ0FBQzthQUNIO1FBQ0gsQ0FBQztRQUVPLHVCQUFpQixHQUFHLFVBQUMsT0FBZ0I7O1lBQzNDLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDbkQsV0FBSSxDQUFDLGNBQWMsMENBQUUsaUJBQWlCLENBQUMsWUFBWSxFQUFDO1FBQ3RELENBQUM7UUFFTyx1QkFBaUIsR0FBRyxVQUFDLE9BQWdCOztZQUMzQyx5REFBeUQ7WUFDekQsSUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRTtZQUNuRCxVQUFJLEtBQUksQ0FBQyxjQUFjLDBDQUFFLGtCQUFrQixDQUFDLFlBQVksR0FBRztnQkFDekQsT0FBTTthQUNQO1lBQ0QsSUFBTSxHQUFHLEdBQUcsd0JBQVMsQ0FBQyxxQkFBYSxDQUFDLHNCQUFjLENBQUMsWUFBWSxFQUFFLHNCQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxDQUFDO1lBQ2hHLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxPQUFFLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7YUFDMUI7UUFDSCxDQUFDO1FBRU8sbUNBQTZCLEdBQUcsVUFBQyxHQUFRO1lBQy9DLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSTtZQUNyQyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLEtBQUssV0FBVztvQkFDZCxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLE9BQUU7Z0JBQ25DLEtBQUssVUFBVTtvQkFDYixPQUFPLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQUU7Z0JBQzNELEtBQUssUUFBUTtvQkFDWCxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRTthQUMzRjtRQUNILENBQUM7UUFFTyxxQkFBZSxHQUFHLFVBQUMsR0FBUSxJQUFXLFlBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFJLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBL0QsQ0FBK0Q7UUFFN0csT0FBTztRQUNQLE9BQU87UUFFUCxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBRWQsc0JBQWdCLEdBQUcsVUFBQyxLQUFpQjtZQUMzQyxJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsVUFBVTtZQUNyQyxLQUFJLENBQUMsVUFBVSxHQUFHLGtDQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQztZQUNsRCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssWUFBWSxDQUFDO2dCQUNsQixLQUFLLGFBQWEsQ0FBQztnQkFDbkIsS0FBSyxtQkFBbUIsQ0FBQztnQkFDekIsS0FBSyxhQUFhO29CQUNoQixNQUFLO2dCQUNQLEtBQUssV0FBVztvQkFDZCxLQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQztvQkFDcEQsTUFBSztnQkFDUCxLQUFLLFFBQVE7b0JBQ1gsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxhQUFhLENBQUM7b0JBQ2pELE1BQUs7Z0JBQ1AsS0FBSyxpQkFBaUI7b0JBQ3BCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRTtvQkFDNUIsTUFBSztnQkFDUCxLQUFLLGdCQUFnQjtvQkFDbkIsS0FBSSxDQUFDLG9CQUFvQixFQUFFO29CQUMzQixNQUFLO2dCQUNQLEtBQUssVUFBVTtvQkFDYixLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztvQkFDMUIsTUFBSztnQkFDUCxLQUFLLFNBQVM7b0JBQ1osS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDcEIsTUFBSztnQkFDUDtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsS0FBSyxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQztRQUVPLG9CQUFjLEdBQUcsVUFBQyxLQUF5QjtZQUNqRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pELEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsYUFBYSxDQUFDO2FBQ3pDO1lBQ0QsS0FBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQixDQUFDO1FBRU8sMkJBQXFCLEdBQUc7WUFDOUIsS0FBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQixDQUFDO1FBRU8sMEJBQW9CLEdBQUc7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDM0QsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxlQUFlLENBQUM7WUFDMUMsS0FBSSxDQUFDLFNBQVMsRUFBRTtRQUNsQixDQUFDO1FBRU8sbUJBQWEsR0FBRztZQUN0QixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBUyxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFJLENBQUMscUJBQXFCLEVBQUU7UUFDOUIsQ0FBQztRQVdPLCtCQUF5QixHQUFHLFVBQUMsS0FBMEIsRUFBRSxhQUF5Qjs7WUFDaEYsVUFBTSxHQUFlLEtBQUssT0FBcEIsRUFBRSxJQUFJLEdBQVMsS0FBSyxLQUFkLEVBQUUsRUFBRSxHQUFLLEtBQUssR0FBVixDQUFVO1lBQ2xDLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNoRCxJQUFNLHFCQUFxQixHQUN6QixLQUFJLENBQUMsY0FBYyxDQUFDLFdBQVc7Z0JBQy9CLG9CQUFhLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsMENBQUUsRUFBRSxNQUFLLE1BQU07WUFDbEYsSUFBSSxxQkFBcUIsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQzVELElBQU0sY0FBYyxHQUFHLEtBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO2dCQUNqRixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUM3QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29CQUMzQixXQUFXLEVBQUUsZUFBTyxDQUFDLGNBQWMsQ0FBQztpQkFDckMsQ0FBQzthQUNIO1lBQ0QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFFLElBQUksUUFBRSxFQUFFLE1BQUUsQ0FBQztRQUNwRCxDQUFDO1FBRU8sK0NBQXlDLEdBQUcsVUFBQyxNQUFjLEVBQUUsZUFBb0I7WUFDdkYsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2pELCtIQUErSDtZQUMvSCxJQUFJLGNBQWM7WUFDbEIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7Z0JBQzVDLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsTUFBTSxDQUFDO2dCQUMvRSxjQUFjLEdBQUcsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLFFBQVE7YUFDcEM7aUJBQU07Z0JBQ0wsY0FBYyxHQUFHLGVBQWU7YUFDakM7WUFDRCxPQUFPLGNBQWM7UUFDdkIsQ0FBQztRQUVPLDRCQUFzQixHQUFHLFVBQUMsS0FBdUIsRUFBRSxhQUF5QjtZQUMxRSxZQUFRLEdBQWUsS0FBSyxTQUFwQixFQUFFLFFBQVEsR0FBSyxLQUFLLFNBQVYsQ0FBVTtZQUNwQyxLQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUM7WUFDbEUsS0FBSSxDQUFDLFNBQVMsQ0FBQztnQkFDYixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7Z0JBQzVCLFFBQVE7Z0JBQ1IsUUFBUTthQUNULENBQUM7UUFDSixDQUFDO1FBRU8sZ0NBQTBCLEdBQUcsVUFDbkMsUUFBK0IsRUFDL0IsUUFBK0IsRUFDL0IsYUFBeUI7O1lBRXpCLElBQU0sd0JBQXdCLFNBQUcsSUFBSSxzQ0FBYSxDQUFDLGFBQWEsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsMENBQUUsRUFBRTtZQUM3RyxJQUFJLHdCQUF3QixLQUFLLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN2RixJQUFNLGNBQWMsR0FBRyxLQUFJLENBQUMseUNBQXlDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUN6RyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO29CQUM3QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO29CQUMzQixXQUFXLEVBQUUsZUFBTyxDQUFDLGNBQWMsQ0FBQztpQkFDckMsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLHlDQUF5QztnQkFDekMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssd0JBQXdCLElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsUUFBUSxFQUFFO29CQUMxRyxLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO3dCQUM3QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3dCQUMzQixXQUFXLEVBQUUsZUFBTztxQkFDckIsQ0FBQztpQkFDSDthQUNGO1FBQ0gsQ0FBQzs7SUFqUUQsQ0FBQztJQU5ELHNCQUFZLG9DQUFhO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLHNDQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBK0xPLHlDQUFxQixHQUE3QjtRQUNFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUNBQW1DLEVBQUU7UUFDN0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUM3QyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQzNCLFdBQVcsRUFBRSxlQUFPLENBQUMsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLFFBQVEsQ0FBQztTQUM3QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRTtJQUNsQixDQUFDO0lBb0VELHNCQUFZLCtCQUFRO1FBSHBCLGVBQWU7UUFDZixlQUFlO2FBRWY7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUTtRQUNyQyxDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQXZSOEIsTUFBTSxDQUFDLEtBQUssR0F1UjFDO0FBdlJZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0N0QiwyR0FBd0Q7QUFHM0Msd0JBQWdCLEdBQUcsVUFBQyxLQUFvQixFQUFFLElBQVU7SUFDL0QsUUFBUSxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ2pCLEtBQUssV0FBVyxDQUFDO1FBQ2pCLEtBQUssR0FBRztZQUNOLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSw0QkFBWSxDQUFDLElBQUksRUFBRTtRQUNyRCxLQUFLLFlBQVksQ0FBQztRQUNsQixLQUFLLEdBQUc7WUFDTixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsNEJBQVksQ0FBQyxJQUFJLEVBQUU7UUFDckQsS0FBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLDRCQUFZLENBQUMsVUFBVSxFQUFFO1FBQzNELEtBQUssR0FBRztZQUNOLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSw0QkFBWSxDQUFDLFVBQVUsRUFBRTtRQUMzRCxLQUFLLEdBQUc7WUFDTixPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsNEJBQVksQ0FBQyxVQUFVLEVBQUU7UUFDM0QsS0FBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLDRCQUFZLENBQUMsVUFBVSxFQUFFO1FBQzNELEtBQUssUUFBUTtZQUNYLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO1FBQzFCLEtBQUssT0FBTztZQUNWLElBQUksS0FBSyxDQUFDLFFBQVE7Z0JBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7WUFDOUMsTUFBSztRQUNQLEtBQUssR0FBRztZQUNOLElBQUksS0FBSyxDQUFDLE9BQU87Z0JBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUNwRCxNQUFLO1FBQ1AsS0FBSyxHQUFHO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVc7Z0JBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDL0QsTUFBSztRQUNQLEtBQUssR0FBRztZQUNOLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxXQUFXO2dCQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRTtZQUN0RixNQUFLO1FBQ1AsS0FBSyxHQUFHO1lBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVc7Z0JBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFO1lBQ3JGLE1BQUs7S0FDUjtBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0QsaUZBQWtEO0FBR2xELG9JQUF3RTtBQUd4RSw4SEFBeUQ7QUFPekQ7SUFJRSw4QkFBWSxVQUFzQixFQUFFLGNBQThCO1FBQWxFLGlCQUdDO1FBTU0sWUFBTyxHQUFHLFVBQUMsTUFBbUI7WUFDbkMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLElBQUk7b0JBQ1AsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ3hDLEtBQUssT0FBTztvQkFDVixPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDckMsS0FBSyxnQkFBZ0I7b0JBQ25CLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUNwQyxLQUFLLE9BQU87b0JBQ1YsT0FBTyxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUMzQixLQUFLLFNBQVM7b0JBQ1osT0FBTyxLQUFJLENBQUMsYUFBYSxFQUFFO2dCQUM3QixLQUFLLGVBQWU7b0JBQ2xCLE9BQU8sS0FBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUNuQyxLQUFLLGlCQUFpQjtvQkFDcEIsT0FBTyxLQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDdEQsS0FBSyxjQUFjO29CQUNqQixPQUFPLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQzNELEtBQUssZ0JBQWdCO29CQUNuQixPQUFPLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztnQkFDaEYsS0FBSyxXQUFXO29CQUNkLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUN6QztvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsTUFBTSxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQztRQUVPLHlCQUFvQixHQUFHO1lBQzdCLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUQsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsRUFBRSxDQUFDO1lBQzdGLElBQUksWUFBWSxFQUFFO2dCQUNoQixJQUFNLGlCQUFpQixHQUFHLEtBQUksQ0FBQyxjQUFjO3FCQUMxQyxjQUFjLENBQUMsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLFFBQVEsQ0FBQztxQkFDdEMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO2dCQUNqQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUU7YUFDaEQ7aUJBQU07Z0JBQ0wsT0FBTyxTQUFTO2FBQ2pCO1FBQ0gsQ0FBQztRQUVPLGdCQUFXLEdBQUc7WUFDcEIsUUFBUSxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JDLEtBQUssV0FBVztvQkFDZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsZUFBTyxFQUFFLENBQUMsRUFBRTtnQkFDbEYsS0FBSyxRQUFRLENBQUM7Z0JBQ2QsS0FBSyxVQUFVO29CQUNiLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFO2dCQUNsRjtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7YUFDM0Q7UUFDSCxDQUFDO1FBRU8sYUFBUSxHQUFHLFVBQUMsU0FBdUI7WUFDekMsSUFBTSxXQUFXLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXO1lBQ25ELElBQUksV0FBVztnQkFBRSxPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRU8sZ0JBQVcsR0FBRyxVQUFDLEdBQVEsSUFBZ0MsWUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUI7UUFFaEYsb0JBQWUsR0FBRyxVQUFDLEdBQVE7WUFDakMsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxRCxJQUFJLFlBQVksRUFBRTtnQkFDaEIsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDMUQsT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7aUJBQ3pDO2dCQUNELElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUM7Z0JBQ2xGLElBQUksVUFBVSxFQUFFO29CQUNkLE9BQU8sS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQztpQkFDekQ7YUFDRjtRQUNILENBQUM7UUFFTyxjQUFTLEdBQUcsVUFBQyxVQUFzQixFQUFFLFFBQWMsRUFBRSxRQUFjLElBQXdCLFFBQUM7WUFDbEcsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRSxRQUFRO2dCQUNkLFVBQVU7Z0JBQ1YsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQzlELFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFO2FBQy9EO1NBQ0YsQ0FBQyxFQVBpRyxDQU9qRztRQUVNLGNBQVMsR0FBRyxVQUFDLElBQVUsRUFBRSxXQUFnQixJQUF3QixRQUFDO1lBQ3hFLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUNmLEVBQUUsRUFBRSxXQUFXO2FBQ2hCO1NBQ0YsQ0FBQyxFQU51RSxDQU12RTtRQUVNLGtCQUFhLEdBQUc7WUFDdEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxFQUFFO2FBQ3hFO1FBQ0gsQ0FBQztRQUVPLHdCQUFtQixHQUFHO1lBQzVCLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7WUFDbEQsSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0QsSUFBTSxPQUFPLEdBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNoRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDbkU7UUFDSCxDQUFDO1FBRU8sMEJBQXFCLEdBQUcsVUFBQyxVQUFzQjtZQUNyRCxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFO1lBQ2xELElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9ELElBQU0sT0FBTyxHQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLGNBQUU7Z0JBQzFGLElBQU0saUJBQWlCLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2dCQUM5RCxPQUFPLEVBQUUsaUJBQWlCLHFCQUFFO2FBQzdCO1FBQ0gsQ0FBQztRQUVPLHVCQUFrQixHQUFHLFVBQUMsTUFBYyxFQUFFLFdBQWdCO1lBQzVELElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUNoRCxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztnQkFBRSxPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztRQUN0RyxDQUFDO1FBRU8seUJBQW9CLEdBQUcsVUFDN0IsTUFBYyxFQUNkLFNBQWMsRUFDZCxVQUFzQjtZQUV0QixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDcEQsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQztZQUNyRixJQUFJLFFBQVEsRUFBRTtnQkFDWixPQUFPLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsT0FBTyxLQUFJLENBQUMsV0FBVyxFQUFFO2FBQzFCO1FBQ0gsQ0FBQztRQUVPLG9CQUFlLEdBQUcsVUFBQyxHQUFRO1lBQ2pDLElBQU0sV0FBVyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVztZQUNuRCxJQUFJLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4Qyx1REFBdUQ7Z0JBQ3ZELElBQUksV0FBVyxFQUFFO29CQUNmLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtpQkFDNUU7YUFDRjtpQkFBTSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqRCxtREFBbUQ7Z0JBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTthQUM1RTtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7YUFDdEU7UUFDSCxDQUFDO1FBeEpDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7SUFDdEMsQ0FBQztJQUVELHNCQUFZLCtDQUFhO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLHNDQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBbUpILDJCQUFDO0FBQUQsQ0FBQztBQTlKWSxvREFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJqQyxtR0FBa0U7QUFDbEUsMkVBQXNFO0FBQ3RFLGdHQUF1RDtBQUV2RCxpRkFNbUI7QUFLbkIsdUpBQXlFO0FBSXpFO0lBT0UsMEJBQVksS0FBbUIsRUFBRSxVQUFzQixFQUFFLGNBQThCOztRQUF2RixpQkFPQztRQVZnQixnQkFBVyxHQUE0QyxJQUFJLEdBQUcsRUFBc0M7UUFZN0csY0FBUyxHQUFHLFVBQUMsR0FBUTtZQUMzQixJQUFNLGFBQWEsR0FBRyxzQkFBUyxDQUFDLEdBQUcsQ0FBQztZQUNwQyxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0YsSUFBTSxPQUFPLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQVEsQ0FBQztZQUN4RCxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxDQUFDO1FBQy9DLENBQUM7UUFPTSxjQUFTLEdBQUcsVUFBQyxVQUFzQixFQUFFLGNBQThCOztZQUN4RSxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7WUFDNUIsS0FBSSxDQUFDLGNBQWMsR0FBRyxjQUFjOztnQkFDcEMsS0FBa0IsdUJBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSw2Q0FBRTtvQkFBaEQsSUFBTSxHQUFHO29CQUNaLEtBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO2lCQUNuQjs7Ozs7Ozs7O1FBQ0gsQ0FBQztRQUVELFNBQVM7UUFDVCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsYUFBYTtRQUVMLGFBQVEsR0FBRyxVQUFDLFNBQW9CO1lBQ3RDLFFBQVEsU0FBUyxFQUFFO2dCQUNqQixLQUFLLFNBQVM7b0JBQ1osT0FBTyxDQUFDLENBQUM7Z0JBQ1gsS0FBSyxZQUFZO29CQUNmLE9BQU8sQ0FBQyxDQUFDO2dCQUNYLEtBQUssVUFBVTtvQkFDYixPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0gsQ0FBQztRQUVPLGFBQVEsR0FBRyxVQUFDLEdBQVE7WUFDMUIsSUFBTSxTQUFTLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQztZQUM5QyxLQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEgsQ0FBQztRQUVPLGtCQUFhLEdBQUcsVUFBQyxHQUFRO1lBQy9CLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTztnQkFBRSxNQUFNLDBCQUF3QixHQUFLO1lBQ2pELE9BQU8sT0FBTztRQUNoQixDQUFDO1FBRU8sdUJBQWtCLEdBQUcsVUFBQyxHQUFRO1lBQzlCLFNBQWtDLEtBQUksQ0FBQyxjQUFjLEVBQW5ELFFBQVEsZ0JBQUUsV0FBVyxtQkFBRSxJQUFJLFVBQXdCO1lBQzNELElBQUksV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sVUFBVTthQUNsQjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQzVCLElBQUksV0FBVyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2pGLE9BQU8sWUFBWTtpQkFDcEI7YUFDRjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzFCLElBQUksV0FBVyxJQUFJLDRDQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLEVBQUU7b0JBQ3BFLElBQU0sSUFBSSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7b0JBQ3pDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO3dCQUN0QyxPQUFPLFlBQVk7cUJBQ3BCO2lCQUNGO2FBQ0Y7WUFDRCxPQUFPLFNBQVM7UUFDbEIsQ0FBQztRQUVPLHVCQUFrQixHQUFHLFVBQUMsU0FBb0I7WUFDaEQsUUFBUSxTQUFTLEVBQUU7Z0JBQ2pCLEtBQUssU0FBUztvQkFDWixPQUFPLG9DQUEwQjtnQkFDbkMsS0FBSyxVQUFVO29CQUNiLE9BQU8scUNBQTJCO2dCQUNwQyxLQUFLLFlBQVk7b0JBQ2YsT0FBTyx1Q0FBNkI7YUFDdkM7UUFDSCxDQUFDO1FBRU8sNEJBQXVCLEdBQUcsVUFBQyxTQUFvQjtZQUNyRCxRQUFRLFNBQVMsRUFBRTtnQkFDakIsS0FBSyxTQUFTO29CQUNaLE9BQU8sMkJBQWlCO2dCQUMxQixLQUFLLFVBQVU7b0JBQ2IsT0FBTyxxQ0FBMkI7Z0JBQ3BDLEtBQUssWUFBWTtvQkFDZixPQUFPLHVDQUE2QjthQUN2QztRQUNILENBQUM7UUFFTyx1QkFBa0IsR0FBRyxVQUFDLEdBQVEsSUFBbUIsWUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBdkMsQ0FBdUM7UUFwRzlGLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjOztZQUNwQyxLQUFrQixzQkFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLDZDQUFFO2dCQUFoRCxJQUFNLEdBQUc7Z0JBQ1osSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7YUFDcEI7Ozs7Ozs7OztJQUNILENBQUM7SUFTTyxxQ0FBVSxHQUFsQixVQUFtQixNQUFhLEVBQUUsSUFBWTtRQUM1QyxJQUFNLFFBQVEsWUFBTyx5QkFBVSxDQUFDLGFBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQW9GTSw0Q0FBaUIsR0FBeEIsVUFBeUIsWUFBbUI7UUFDMUMsSUFBTSxHQUFHLEdBQUcsd0JBQVMsQ0FBQyxxQkFBYSxDQUFDLHNCQUFjLENBQUMsWUFBWSxFQUFFLDJCQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcscUJBQVEsQ0FBQyxDQUFDO1FBQ2hHLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTTtRQUN0RSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUztTQUNsQztRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7aUJBQ3BCLGNBQWMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ3hGLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHO1NBQzVCO0lBQ0gsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQztBQTdIWSw0Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCN0IsNkVBQTBCO0FBSTFCLGdHQUFxRDtBQUNyRCxpRkFBdUY7QUFDdkYsbUdBQXVEO0FBQ3ZELG9JQUF3RTtBQUd4RSw4SEFBeUQ7QUFHekQsMEZBQXlDO0FBS3pDO0lBcUJFLDRCQUNFLEtBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLHFCQUE0QztRQUo5QyxpQkF3RUM7UUFFTywwQkFBcUIsR0FBRztZQUM5QixJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7WUFDckMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLFdBQVc7b0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO29CQUN0QyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLENBQUM7b0JBQ3JELE1BQUs7Z0JBQ1AsS0FBSyxVQUFVLENBQUM7Z0JBQ2hCLEtBQUssUUFBUTtvQkFDWCxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsc0JBQVMsQ0FBQyxLQUFLLENBQUM7b0JBQ3RDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQztvQkFDN0MsTUFBSztnQkFDUDtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsSUFBSSxDQUFDO2FBQ3ZDO1FBQ0gsQ0FBQztRQUVPLDJCQUFzQixHQUFHO1lBQy9CLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzdFO1FBQ0gsQ0FBQztRQUVPLDJCQUFzQixHQUFHO1lBQy9CLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtnQkFDakQsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzVFO1FBQ0gsQ0FBQztRQUVNLHVCQUFrQixHQUFHLFVBQUMsS0FBWTs7O2dCQUN2QyxLQUF5QixtQkFBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDO29CQUEzRixJQUFNLFVBQVU7b0JBQ25CLElBQUksVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQUUsT0FBTyxJQUFJO2lCQUFBOzs7Ozs7Ozs7WUFDcEUsT0FBTyxLQUFLO1FBQ2QsQ0FBQztRQUVNLGNBQVMsR0FBRyxVQUFDLFVBQXNCLEVBQUUsY0FBOEI7O1lBQ3hFLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtZQUM1QixLQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7WUFDcEMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwRCxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsNEJBQTRCLEdBQUcsQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFJLE1BQU0sQ0FBQyxJQUFJLGdCQUFXLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBTSxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM1QixJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUk7WUFDckMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNqQixLQUFLLFdBQVc7b0JBQ2QsS0FBSSxDQUFDLHFCQUFxQixFQUFFO29CQUM1QixNQUFLO2dCQUNQLEtBQUssVUFBVTtvQkFDYixLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDdEMsTUFBSztnQkFDUCxLQUFLLFFBQVE7b0JBQ1gsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDckQsTUFBSztnQkFDUDtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsSUFBSSxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO2dCQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQzthQUNyRDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQzthQUNyRDtZQUNELEtBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDM0MsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQVUsQ0FBQyxZQUFZLDBDQUFFLE1BQU0sTUFBSyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQzFFLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLENBQUM7UUFFTyx1QkFBa0IsR0FBRyxVQUFDLE1BQWMsRUFBRSxVQUFzQjtZQUNsRSxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxLQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxvQkFBaUIsVUFBVSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLHlCQUFxQixDQUFDO1FBQzNHLENBQUM7UUFFTyx5QkFBb0IsR0FBRyxVQUFDLE1BQWM7WUFDNUMsSUFBTSxJQUFJLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsMENBQTBDLENBQUM7UUFDckUsQ0FBQztRQUVPLDBCQUFxQixHQUFHO1lBQzlCLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUQsSUFBSSxZQUFZLEVBQUU7Z0JBQ2hCLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzNELElBQUksS0FBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxZQUFZLENBQUM7b0JBQUUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUNsRyxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsWUFBWSxDQUFDO29CQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztnQkFDdkcsSUFBSSxLQUFJLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLFlBQVksQ0FBQztvQkFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7YUFDdEc7UUFDSCxDQUFDO1FBRU8sa0JBQWEsR0FBRyxVQUFDLFFBQWtCLElBQWEsWUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUF4QyxDQUF3QztRQUV4RixpQkFBWSxHQUFHLFVBQUMsSUFBVTtZQUN4QixRQUFJLEdBQXdDLElBQUksS0FBNUMsRUFBRSxRQUFRLEdBQThCLElBQUksU0FBbEMsRUFBRSxTQUFTLEdBQW1CLElBQUksVUFBdkIsRUFBRSxZQUFZLEdBQUssSUFBSSxhQUFULENBQVM7WUFDeEQsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDL0MsT0FBVSxJQUFJLDJCQUFzQixVQUFVLGNBQVMsU0FBUyxDQUFDLE9BQU8sU0FBSSxTQUFTLENBQUMsR0FBRyxtQkFBYyxZQUFZLENBQUMsT0FBTyxTQUFJLFlBQVksQ0FBQyxHQUFLO1FBQ25KLENBQUM7UUF2S0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWM7UUFDcEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHFCQUFxQjtRQUNsRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUc7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQ1gsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDO2FBQ3RCLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDYixPQUFPLENBQUMsc0JBQVksQ0FBQyxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUU3RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FDdEMsMkJBQWMsQ0FBQyxDQUFDLEdBQUcsdUJBQVEsQ0FBQyxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxFQUN6Qyx3QkFBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHFCQUFRLEdBQUcsMkJBQWMsQ0FBQyxDQUFDLEVBQzVDLEVBQUUsQ0FDSDtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQzdCLElBQUksQ0FBQywyQkFBYyxDQUFDLENBQUMsR0FBRyx1QkFBUSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsd0JBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUSxHQUFHLDJCQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdEcsSUFBSSxFQUFFLDRCQUFrQjtTQUN6QixDQUFDO2FBQ0QsY0FBYyxFQUFFO2FBQ2hCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDO2FBQzdDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxZQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxrQ0FBd0IsQ0FBQyxFQUFqRCxDQUFpRCxDQUFDO2FBQzFFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxZQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyw0QkFBa0IsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQzlCLElBQUksQ0FBQywyQkFBYyxDQUFDLENBQUMsR0FBRyx1QkFBUSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsd0JBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUSxHQUFHLDJCQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdEcsSUFBSSxFQUFFLDRCQUFrQjtTQUN6QixDQUFDO2FBQ0QsY0FBYyxFQUFFO2FBQ2hCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2FBQzlDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQ0FBd0IsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO2FBQzNFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyw0QkFBa0IsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQzlCLElBQUksQ0FBQywyQkFBYyxDQUFDLENBQUMsR0FBRyx1QkFBUSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsd0JBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUSxHQUFHLDJCQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDdEcsSUFBSSxFQUFFLDRCQUFrQjtTQUN6QixDQUFDO2FBQ0QsY0FBYyxFQUFFO2FBQ2hCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDO2FBQzlDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxrQ0FBd0IsQ0FBQyxFQUFsRCxDQUFrRCxDQUFDO2FBQzNFLEVBQUUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxZQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyw0QkFBa0IsQ0FBQyxFQUE1QyxDQUE0QyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHO2FBQzlCLElBQUksQ0FBQyxHQUFHLEVBQUUsd0JBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxxQkFBUSxHQUFHLDJCQUFjLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSw0QkFBa0IsRUFBRSxDQUFDO2FBQ3pGLGNBQWMsRUFBRTthQUNoQixFQUFFLENBQUMsYUFBYSxFQUFFLGNBQU0sWUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQS9DLENBQStDLENBQUM7YUFDeEUsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFNLFlBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGtDQUF3QixDQUFDLEVBQWxELENBQWtELENBQUM7YUFDM0UsRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFNLFlBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLDRCQUFrQixDQUFDLEVBQTVDLENBQTRDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7YUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLHdCQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQVEsR0FBRywyQkFBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSx5QkFBeUIsRUFBRTtZQUN4RixNQUFNLEVBQUUsU0FBUztZQUNqQixlQUFlLEVBQUUsQ0FBQztTQUNuQixDQUFDO2FBQ0QsU0FBUyxDQUFDLEdBQUcsQ0FBQzthQUNkLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDZixVQUFVLENBQUMsS0FBSyxDQUFDO2FBQ2pCLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7YUFDOUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7YUFDRCxTQUFTLENBQUMsR0FBRyxDQUFDO2FBQ2QsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUNmLFVBQVUsQ0FBQyxLQUFLLENBQUM7YUFDakIsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBNUVELHNCQUFZLDZDQUFhO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLHNDQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2hFLENBQUM7OztPQUFBO0lBZ0xILHlCQUFDO0FBQUQsQ0FBQztBQW5NWSxnREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCL0IsbUdBQXdDO0FBQ3hDLGlGQUF3RztBQUN4RywyRUFBa0U7QUFDbEUsaUhBQXlEO0FBQ3pELGtGQUFpQztBQUdqQyxJQUFNLGdCQUFnQixHQUFHLEVBQUU7QUFDM0IsSUFBTSxpQkFBaUIsR0FBRyxFQUFFO0FBQzVCLElBQU0sMkJBQTJCLEdBQUcsQ0FBQztBQUNyQyxJQUFNLFlBQVksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUU1QztJQU1FLDJCQUFZLEtBQW1CLEVBQUUsSUFBVTtRQUEzQyxpQkFLQztRQUVPLGtCQUFhLEdBQUcsVUFBQyxRQUFrQjtZQUN6Qyw2QkFBWSxDQUFDLENBQUMsc0JBQVksQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLHNCQUFZLENBQUMsTUFBTSxDQUFDO1FBQXhFLENBQXdFO1FBRWxFLHlCQUFvQixHQUFHLFVBQUMsS0FBWSxJQUFZLHdCQUFTLENBQUMsS0FBSyxFQUFFLGlCQUFpQixDQUFDLEVBQW5DLENBQW1DO1FBRXBGLGNBQVMsR0FBRyxVQUFDLElBQVU7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDaEMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJO1lBQ2hCLElBQU0sU0FBUyxHQUFHLHNCQUFTLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0MsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNsRixLQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDO1FBRU8sa0JBQWEsR0FBRyxVQUFDLFNBQWdCO1lBQ3ZDLElBQU0saUJBQWlCLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztZQUM5RCxLQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7WUFDNUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRTtZQUU5QixjQUFjO1lBQ2QsSUFBTSxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLDJCQUEyQjtZQUNyRSxJQUFNLFdBQVcsR0FBRyxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsMkJBQTJCO1lBQ3ZFLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsOEJBQW9CLENBQUM7WUFDdEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO1lBRTFFLHdCQUF3QjtZQUN4QixLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLDZCQUFtQixDQUFDO1lBQ3JELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQztZQUVsSCxjQUFjO1lBQ1IsU0FBbUIsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQXBDLE9BQU8sZUFBRSxHQUFHLFNBQXdCO1lBQzVDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsNEJBQWtCLENBQUM7WUFDcEQsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FDN0IsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQixDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQzVCLFdBQVcsQ0FDWjtRQUNILENBQUM7UUFFTSxxQkFBZ0IsR0FBRyxVQUFPLElBQVMsRUFBRSxFQUFPOzs7Ozt3QkFDM0MsdUJBQXVCLEdBQUcsR0FBRzt3QkFDN0IsWUFBWSxHQUFHLHNCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUM5QixXQUFXLEdBQUcsc0JBQVMsQ0FBQyxFQUFFLENBQUM7d0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDN0MsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0scUJBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxJQUNoQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxLQUM1RCxRQUFRLEVBQUUsdUJBQXVCLEVBQ2pDLElBQUksRUFBRSxPQUFPLElBQ2I7d0JBQ0ksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0scUJBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLElBQzVCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsS0FDakUsUUFBUSxFQUFFLHVCQUF1QixFQUNqQyxJQUFJLEVBQUUsT0FBTyxJQUNiO3dCQUNGLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLHVCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7d0JBQXpELFNBQXlEOzs7O2FBQzFEO1FBRU0sc0JBQWlCLEdBQUc7Ozs7O3dCQUNuQixLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOzRCQUNyQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs0QkFDN0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFOzRCQUN6QixRQUFRLEVBQUUsSUFBSTs0QkFDZCxJQUFJLEVBQUUsT0FBTzt5QkFDZCxDQUFDO3dCQUNGLHFCQUFNLHVCQUFTLENBQUMsS0FBSyxDQUFDOzt3QkFBdEIsU0FBc0I7Ozs7YUFDdkI7UUFFTSxxQkFBZ0IsR0FBRyxVQUFPLElBQVMsRUFBRSxFQUFPOzs7Ozt3QkFDM0MsU0FBUyxHQUFHLHNCQUFTLENBQUMsSUFBSSxDQUFDO3dCQUMzQixPQUFPLEdBQUcsc0JBQVMsQ0FBQyxFQUFFLENBQUM7d0JBQ3ZCLFFBQVEsR0FBRyw2QkFBcUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDO3dCQUNwRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO3dCQUM1RSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDOzRCQUNyQyxPQUFPLEVBQUUsS0FBSzs0QkFDZCxDQUFDLEVBQUU7Z0NBQ0QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dDQUNqQixFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7NkJBQ2Q7NEJBQ0QsQ0FBQyxFQUFFO2dDQUNELElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQ0FDakIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzZCQUNkOzRCQUNELFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FBQzs0QkFDdEIsSUFBSSxFQUFFLE1BQU07eUJBQ2IsQ0FBQzt3QkFDRixxQkFBTSx1QkFBUyxDQUFDLEtBQUssQ0FBQzs7d0JBQXRCLFNBQXNCO3dCQUN0QixLQUFLLENBQUMsT0FBTyxFQUFFOzs7O2FBQ2hCO1FBRU0sdUJBQWtCLEdBQUcsVUFBTyxRQUFhLEVBQUUsTUFBYzs7Ozs7d0JBQ3hELGFBQWEsR0FBRyxzQkFBUyxDQUFDLFFBQVEsQ0FBQzt3QkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRzs2QkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUU7NEJBQ3pELEtBQUssRUFBRSxTQUFTOzRCQUNoQixNQUFNLEVBQUUsU0FBUzs0QkFDakIsZUFBZSxFQUFFLENBQUM7eUJBQ25CLENBQUM7NkJBQ0QsV0FBVyxDQUFDLEVBQUUsQ0FBQzs2QkFDZixTQUFTLENBQUMsR0FBRyxDQUFDO3dCQUNYLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQ3RDLE9BQU8sRUFBRSxJQUFJOzRCQUNiLENBQUMsRUFBRTtnQ0FDRCxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFO2dDQUMxQixFQUFFLEVBQUUsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFOzZCQUN6Qjs0QkFDRCxRQUFRLEVBQUUsSUFBSTs0QkFDZCxJQUFJLEVBQUUsUUFBUTt5QkFDZixDQUFDO3dCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7NEJBQ3RDLE9BQU8sRUFBRSxJQUFJOzRCQUNiLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTs0QkFDekIsUUFBUSxFQUFFLElBQUk7NEJBQ2QsSUFBSSxFQUFFLFVBQVU7eUJBQ2pCLENBQUM7d0JBQ0YscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLHVCQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsdUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzt3QkFBekQsU0FBeUQ7d0JBQ3pELElBQUksQ0FBQyxPQUFPLEVBQUU7Ozs7YUFDZjtRQUVNLHVCQUFrQixHQUFHLFVBQU8sSUFBUyxFQUFFLEVBQU87Ozs7O3dCQUM3QyxZQUFZLEdBQUcsc0JBQVMsQ0FBQyxJQUFJLENBQUM7d0JBQzlCLFdBQVcsR0FBRyxzQkFBUyxDQUFDLEVBQUUsQ0FBQzt3QkFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxxQkFDckMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLElBQ2hCLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLEtBQzVELFFBQVEsRUFBRSxHQUFHLEVBQ2IsSUFBSSxFQUFFLE9BQU8sRUFDYixJQUFJLEVBQUUsSUFBSSxJQUNWO3dCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLHFCQUNyQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixJQUM1QixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixDQUFDLEtBQ2pFLFFBQVEsRUFBRSxHQUFHLEVBQ2IsSUFBSSxFQUFFLE9BQU8sRUFDYixJQUFJLEVBQUUsSUFBSSxJQUNWO3dCQUNGLHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyx1QkFBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLHVCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7d0JBQXpELFNBQXlEOzs7O2FBQzFEO1FBRU0sWUFBTyxHQUFHO1lBQ2YsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1FBQ3RCLENBQUM7UUF2SkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQy9DLENBQUM7SUFvSkgsd0JBQUM7QUFBRCxDQUFDO0FBL0pZLDhDQUFpQjtBQW1LOUIsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLElBQVcsRUFBRSxFQUFTLEVBQUUsTUFBYSxJQUFjLFFBQUM7SUFDNUUsQ0FBQyxFQUFFO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDdkIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDcEI7SUFDRCxDQUFDLEVBQUU7UUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUN2QixFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztLQUNwQjtDQUNGLENBQUMsRUFUMkUsQ0FTM0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0xGLDhGQUFpQztBQUNqQywrRkFBaUQ7QUFFakQsd0ZBQTRDO0FBQzVDLHdHQUEwRDtBQUMxRCw2SEFBcUU7QUFDckUsb0dBQStDO0FBQy9DLHlHQUFzRTtBQUN0RSwwRkFBeUM7QUFDekMsc0ZBQW1EO0FBRXRDLDJCQUFtQixHQUFHLFVBQVU7QUFFN0MsSUFBTSxXQUFXLEdBQXVDO0lBQ3RELE1BQU0sRUFBRSxLQUFLO0lBQ2IsT0FBTyxFQUFFLEtBQUs7SUFDZCxHQUFHLEVBQUUsMkJBQW1CO0NBQ3pCO0FBRUQ7SUFBbUMsaUNBQVk7SUFDN0M7UUFBQSxZQUNFLGtCQUFNLFdBQVcsQ0FBQyxTQUNuQjtRQUVNLFlBQU0sR0FBRztZQUNkLEtBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUN6RSxLQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLO1lBQzlCLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO1lBQy9CLElBQUksd0JBQVUsQ0FBQyxLQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUU7Z0JBQzFDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHNCQUFTLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxLQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLENBQUMsQ0FBQztRQUNKLENBQUM7UUFFTyxvQkFBYyxHQUFHOzs7OzRCQUNGLHFCQUFNLGlDQUFnQixFQUFFOzt3QkFBdkMsWUFBWSxHQUFHLFNBQXdCO3dCQUN2QyxNQUFNLEdBQVcsU0FBSSxFQUFFO3dCQUN2QixRQUFRLEdBQUcsdUJBQWM7d0JBQ3pCLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLHlDQUFtQixFQUFFLENBQUMsQ0FBQzt3QkFDdkUsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSx5Q0FBbUIsRUFBRSxDQUFDO3dCQUNqRix1QkFBVSxDQUFDLEVBQUUsTUFBTSxVQUFFLENBQUM7d0JBQ2hCLFNBQVMsR0FBbUIsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUU7d0JBQy9HLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLDZCQUFlLEVBQUUsU0FBUyxDQUFDOzs7O2FBQzdDOztJQXJCRCxDQUFDO0lBc0JILG9CQUFDO0FBQUQsQ0FBQyxDQXpCa0MsTUFBTSxDQUFDLEtBQUssR0F5QjlDO0FBekJZLHNDQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDZGIsYUFBSyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVMsSUFBWSxRQUFDLEVBQUUsQ0FBQyxLQUFFLENBQUMsS0FBRSxDQUFDLEVBQVYsQ0FBVTtBQUVuRCxxQkFBYSxHQUFHLFVBQUMsS0FBWSxFQUFFLENBQVMsSUFBWSxRQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQXBDLENBQW9DO0FBRXhGLGlCQUFTLEdBQUcsVUFBQyxNQUFhLEVBQUUsTUFBYSxJQUFZLFFBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFwRCxDQUFvRDtBQUV6RyxzQkFBYyxHQUFHLFVBQUMsTUFBYSxFQUFFLE1BQWEsSUFBWSxRQUFDO0lBQ3RFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0NBQ3ZCLENBQUMsRUFIcUUsQ0FHckU7QUFFRixJQUFNLE1BQU0sR0FBRyxVQUFDLENBQVMsSUFBYSxRQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUs7QUFFOUIsNkJBQXFCLEdBQUcsVUFBQyxNQUFhLEVBQUUsTUFBYTtJQUNoRSxXQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFBcEUsQ0FBb0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnRFLDZFQUEwQjtBQU0xQixnR0FBd0Q7QUFHM0Msc0JBQWMsR0FBRyxVQUFDLFVBQXNCLEVBQUUsSUFBUyxFQUFFLEVBQU87SUFDdkUsUUFBUSxVQUFVLEVBQUU7UUFDbEIsS0FBSyxPQUFPO1lBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUM5QixLQUFLLE1BQU07WUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztLQUNsQztBQUNILENBQUM7QUFFRDtJQUtFLGtDQUFZLFVBQXNCLEVBQUUsUUFBa0IsRUFBRSxnQkFBd0I7UUFBaEYsaUJBSUM7UUFFTSxpQkFBWSxHQUFHLFVBQUMsTUFBeUI7WUFDeEMsU0FBeUIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBbEQsUUFBUSxnQkFBRSxRQUFRLGNBQWdDO1lBQ2xELGNBQVUsR0FBSyxNQUFNLFdBQVgsQ0FBVztZQUM3QixJQUFNLGlCQUFpQixHQUFHLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdDQUFrQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixJQUFNLGlCQUFpQixHQUFHLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdDQUFrQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RyxJQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO1lBQzlFLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7WUFDOUUsSUFBTSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQztZQUVsSCxJQUFJLGFBQWEsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoRSxJQUFNLE1BQU0sR0FBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztZQUMvQyxJQUFJLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDO1lBQ2hELElBQUksYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckQsSUFBTSxPQUFLLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUM7Z0JBQ2xCLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQUssQ0FBQzthQUNoRDtZQUNELElBQUksYUFBYSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckQsSUFBTSxPQUFLLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQkFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFLLENBQUM7Z0JBQ2xCLGFBQWEsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQUssQ0FBQzthQUNoRDtZQUNELElBQU0saUJBQWlCLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLElBQUssUUFBQyxNQUFNLENBQUMsUUFBUSxFQUFoQixDQUFnQixDQUFDO1lBQ3BGLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO2dCQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO2FBQzFEO2lCQUFNLElBQUksaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDekMsSUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxVQUFFLENBQUM7YUFDbEU7WUFDRCxPQUFPLE1BQU07UUFDZixDQUFDO1FBRU8sd0JBQW1CLEdBQUcsVUFBQyxFQUFnQixFQUFFLFFBQWtCLElBQStCLFFBQUM7WUFDakcsRUFBRTtZQUNGLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsUUFBUSxFQUFFLFFBQVE7U0FDbkIsQ0FBQyxFQUpnRyxDQUloRztRQUVNLG1CQUFjLEdBQUcsVUFBQyxNQUF5QjtZQUNqRCxJQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDekMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRO2dCQUFFLE1BQU0sMkJBQXlCLFVBQVk7WUFDMUQsSUFBSSxRQUFRLENBQUMsUUFBUSxLQUFLLEtBQUksQ0FBQyxRQUFRO2dCQUFFLE1BQU0sMkNBQXlDLFFBQVEsQ0FBQyxFQUFJO1lBQ3JHLElBQUksUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsQ0FBQztnQkFBRSxNQUFNLG9DQUFvQztZQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQUUsTUFBTSxtQ0FBbUM7WUFFbEcsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNO1lBQ3pDLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztZQUN6RCxJQUFJLENBQUMsUUFBUTtnQkFBRSxNQUFNLDJCQUF5QixVQUFZO1lBQzFELElBQUksUUFBUSxDQUFDLFFBQVEsS0FBSyxLQUFJLENBQUMsUUFBUTtnQkFBRSxNQUFNLHdCQUF3QjtZQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQUUsTUFBTSxtQ0FBbUM7WUFFbEcsSUFBSSxDQUFDLHNCQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQzFFLE1BQU0saUNBQStCLE1BQU0sQ0FBQyxVQUFVLHVCQUFrQixRQUFRLENBQUMsUUFBUSxZQUFPLFFBQVEsQ0FBQyxRQUFRLG1CQUFnQjtZQUNuSSxPQUFPLEVBQUUsUUFBUSxZQUFFLFFBQVEsWUFBRTtRQUMvQixDQUFDO1FBRU8seUJBQW9CLEdBQUcsVUFDN0IsVUFBc0IsRUFDdEIsUUFBYyxFQUNkLGNBQXNCLEVBQ3RCLFFBQWMsRUFDZCxjQUFzQixJQUNELFFBQUM7WUFDdEIsRUFBRSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0I7WUFDekIsSUFBSSxFQUFFLFFBQVE7WUFDZCxVQUFVO1lBQ1YsUUFBUSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtnQkFDM0IsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNuQixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7Z0JBQzNCLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixNQUFNLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEtBQUssY0FBYzthQUN0RDtZQUNELFFBQVEsRUFBRTtnQkFDUixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVE7Z0JBQzNCLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDbkIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO2dCQUMzQixNQUFNLEVBQUUsY0FBYztnQkFDdEIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxLQUFLLGNBQWM7YUFDdEQ7WUFDRCxvQkFBb0IsRUFBRSxDQUFDO1NBQ3hCLENBQUMsRUFuQnFCLENBbUJyQjtRQXZGQSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0I7SUFDMUMsQ0FBQztJQXFGSCwrQkFBQztBQUFELENBQUM7QUE5RlksNERBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSckMscUhBQWlGO0FBRWpGLDRGQUEwQztBQUMxQyxrR0FBaUQ7QUFJakQ7SUFxQkUsZ0JBQVksVUFBc0I7UUFBbEMsaUJBR0M7UUF0QmdCLGNBQVMsR0FBeUIsRUFBRTtRQUU5QyxnQkFBVyxHQUFHLFVBQUMsUUFBNEI7WUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLENBQUM7UUFFTSxtQkFBYyxHQUFHLFVBQUMsUUFBNEI7WUFDbkQsSUFBTSxLQUFLLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQzlDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNkLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDaEM7UUFDSCxDQUFDO1FBRU8sb0JBQWUsR0FBRyxVQUFDLEtBQWlCOzs7Z0JBQzFDLEtBQXVCLHVCQUFJLENBQUMsU0FBUyw2Q0FBRTtvQkFBbEMsSUFBTSxRQUFRO29CQUNqQixRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUNoQjs7Ozs7Ozs7O1FBQ0gsQ0FBQztRQU9PLDRCQUF1QixHQUFHLFVBQUMsT0FBMEI7WUFDM0QsSUFBTSxLQUFLLEdBQUcsd0NBQW1CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNoRCxLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDO1FBT00sV0FBTSxHQUFHLFVBQU8sUUFBa0I7Ozs7O3dCQUNqQyxhQUFhLEdBQWtCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLFlBQUU7d0JBQ3RCLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzs7d0JBQXJGLGdCQUFnQixHQUFxQixTQUFnRDt3QkFDM0Ysc0JBQU8sd0JBQVUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDOzs7YUFDeEQ7UUFFTSxTQUFJLEdBQUc7Ozs7O3dCQUNOLFdBQVcsR0FBZ0IsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO3dCQUNWLHFCQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQzs7d0JBQS9FLGNBQWMsR0FBbUIsU0FBOEM7d0JBQy9FLFFBQVEsR0FBRyxjQUFjLENBQUMsUUFBUTt3QkFDbEMsVUFBVSxHQUFHLHdCQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7d0JBQ2pFLHNCQUFPLEVBQUUsUUFBUSxZQUFFLFVBQVUsY0FBRTs7O2FBQ2hDO1FBRU0sZUFBVSxHQUFHLFVBQU8sUUFBa0IsRUFBRSxNQUFtQjs7Ozs7d0JBQzFELE9BQU8sR0FBdUI7NEJBQ2xDLElBQUksRUFBRSxhQUFhOzRCQUNuQixNQUFNLEVBQUUsb0NBQWUsQ0FBQyxNQUFNLENBQUM7NEJBQy9CLFFBQVEsRUFBRSxRQUFRO3lCQUNuQjt3QkFDRCxxQkFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7O3dCQUExQyxTQUEwQzs7OzthQUMzQztRQW5DQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUM7SUFDdEQsQ0FBQztJQU9hLGNBQU8sR0FBRyxVQUFPLE1BQWM7Ozs7d0JBQ3hCLHFCQUFNLHdCQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7b0JBQTdDLFVBQVUsR0FBRyxTQUFnQztvQkFDbkQsc0JBQU8sSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDOzs7U0FDOUI7SUF3QkgsYUFBQztDQUFBO0FBMURZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQm5CLDhGQUFpQztBQVNqQyxpSUFBcUU7QUFHckUseUZBQXNDO0FBTXRDO0lBS0Usb0JBQVksVUFBK0I7UUFBM0MsaUJBR0M7UUFOZ0Isd0JBQW1CLEdBQWlDLElBQUksR0FBRyxFQUFFO1FBQzdELGNBQVMsR0FBbUIsRUFBRTtRQU92Qyx5QkFBb0IsR0FBRyxVQUFDLE9BQStCO1lBQzdELDBDQUEwQztZQUMxQyx1QkFBdUI7WUFDdkIsUUFBUSxPQUFPLENBQUMsSUFBSSxFQUFFO2dCQUNwQixLQUFLLFVBQVU7b0JBQ2IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7b0JBQzVCLE1BQUs7Z0JBQ1AsS0FBSyxXQUFXO29CQUNkLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO29CQUM3QixNQUFLO2dCQUNQO29CQUNFLE1BQU0sSUFBSSw2Q0FBb0IsQ0FBQyxPQUFPLENBQUM7YUFDMUM7UUFDSCxDQUFDO1FBaUJNLGdCQUFXLEdBQUcsVUFBQyxPQUFZO1lBQ2hDLFdBQUksT0FBTyxDQUFNLFVBQUMsT0FBcUI7Z0JBQ3JDLElBQU0sY0FBYyxHQUFvQjtvQkFDdEMsSUFBSSxFQUFFLFNBQVM7b0JBQ2YsRUFBRSxFQUFFLFNBQUksRUFBRTtvQkFDVixPQUFPLEVBQUUsT0FBTztpQkFDakI7Z0JBQ0QseUNBQXlDO2dCQUN6Qyw4QkFBOEI7Z0JBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQztZQUMxRCxDQUFDLENBQUM7UUFWRixDQVVFO1FBRUksbUJBQWMsR0FBRyxVQUFDLE9BQXlCO1lBQ2pELElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVO1lBQ3BDLElBQU0sT0FBTyxHQUF5QixLQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUM3RSxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztnQkFDekIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBaUQsU0FBVyxDQUFDO2FBQzFFO1FBQ0gsQ0FBQztRQUVNLGdCQUFXLEdBQUcsVUFBQyxRQUFzQjtZQUMxQyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsQ0FBQztRQUVNLG1CQUFjLEdBQUcsVUFBQyxRQUFzQjtZQUM3QyxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUM7UUFFTyxvQkFBZSxHQUFHLFVBQUMsT0FBWTs7O2dCQUNyQyxLQUF1Qix1QkFBSSxDQUFDLFNBQVMsNkNBQUU7b0JBQWxDLElBQU0sUUFBUTtvQkFDakIsUUFBUSxDQUFDLE9BQU8sQ0FBQztpQkFDbEI7Ozs7Ozs7OztRQUNILENBQUM7UUFFTyxvQkFBZSxHQUFHLFVBQUMsT0FBMEI7WUFDbkQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3BDLENBQUM7UUE3RUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVO1FBQzVCLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNsRCxDQUFDO0lBaUJhLGtCQUFPLEdBQUcsVUFBQyxNQUFjO1FBQ3JDLFdBQUksT0FBTyxDQUFhLFVBQUMsT0FBTztZQUM5QixJQUFNLElBQUksR0FBRyxvQkFBTyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxJQUFLLGNBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUM7WUFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2QsOEJBQThCO2dCQUM5QixJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDM0QsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7b0JBQ3BCLHlDQUF5QztvQkFDekMsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsVUFBVSxDQUFDO29CQUN6QyxPQUFPLENBQUMsTUFBTSxDQUFDO2dCQUNqQixDQUFDLENBQUM7WUFDSixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7SUFaRixDQVlFO0lBOENOLGlCQUFDO0NBQUE7QUFwRlksZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCdkIseUZBQXNDO0FBMkJ0QztJQUtFLG9CQUFZLEVBQVUsRUFBRSxhQUFvQztRQUE1RCxpQkFLQztRQVJnQixnQkFBVyxHQUEwQixFQUFFO1FBVWhELHdCQUFtQixHQUFHLFVBQUMsVUFBK0I7WUFDNUQseUVBQXlFO1lBQ3pFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxVQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVNLGNBQVMsR0FBRyxVQUFDLE9BQVk7O1lBQzlCLElBQU0sZ0JBQWdCLEdBQXNCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFOztnQkFDaEYsS0FBeUIsdUJBQUksQ0FBQyxXQUFXO29CQUFwQyxJQUFNLFVBQVU7b0JBQXNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7aUJBQUE7Ozs7Ozs7OztRQUM5RSxDQUFDO1FBRU8seUJBQW9CLEdBQUcsVUFBQyxVQUErQixJQUFLLGlCQUFDLE9BQStCO1lBQ2xHLHNFQUFzRTtZQUN0RSx1QkFBdUI7WUFDdkIsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ3BELElBQU0sZUFBZSxHQUFxQjtnQkFDeEMsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFVBQVUsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDdEIsUUFBUTthQUNUO1lBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDbEMsQ0FBQyxFQVZtRSxDQVVuRTtRQTNCQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxvQkFBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQUssY0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQztRQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQ3RELENBQUM7SUF3QkgsaUJBQUM7QUFBRCxDQUFDO0FBbENZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUJWLGVBQU8sR0FBRyxVQUFDLEVBQVcsRUFBRSxPQUEyQjtJQUM5RCxJQUFNLEtBQUssR0FBSSxNQUFjLENBQUMsSUFBbUI7SUFDakQsT0FBTyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDO0FBQy9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xELDZFQUEwQjtBQUMxQiw4R0FBeUU7QUFHekUscUhBQWlGO0FBQ2pGLGlJQUFxRTtBQUtyRSwwSEFBa0U7QUFFbEUsNEZBQTBDO0FBRTFDO0lBb0NFLGdCQUFZLFlBQTBCLEVBQUUsTUFBYyxFQUFFLFVBQXNCLEVBQUUsZ0JBQThCO1FBQTlHLGlCQVdDO1FBMUNnQixjQUFTLEdBQXlCLEVBQUU7UUFnQjlDLGdCQUFXLEdBQUcsVUFBQyxRQUE0QjtZQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsQ0FBQztRQUVNLG1CQUFjLEdBQUcsVUFBQyxRQUE0QjtZQUNuRCxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDOUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNoQztRQUNILENBQUM7UUFFTyxvQkFBZSxHQUFHLFVBQUMsS0FBaUI7OztnQkFDMUMsS0FBdUIsdUJBQUksQ0FBQyxTQUFTO29CQUFoQyxJQUFNLFFBQVE7b0JBQW9CLFFBQVEsQ0FBQyxLQUFLLENBQUM7aUJBQUE7Ozs7Ozs7OztRQUN4RCxDQUFDO1FBZU8scUJBQWdCLEdBQUc7WUFDekIsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRTtnQkFDbEMsbUNBQW1DO2FBQ3BDO2lCQUFNO2dCQUNMLElBQU0sZUFBZSxHQUF5QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBQ25FLElBQU0sZ0JBQWdCLEdBQTBCLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEYsT0FBTztvQkFDTCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsUUFBUTtvQkFDbkMsVUFBVSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO2lCQUNyQzthQUNGO1FBQ0gsQ0FBQztRQUVPLHVCQUFrQixHQUFHLFVBQUMsT0FBc0I7WUFDbEQsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVU7WUFDbEMsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQzlDLE9BQU87b0JBQ0wsSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLFVBQVUsRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFO2lCQUNoQztpQkFDRTtnQkFDSCwyQkFBMkI7YUFDNUI7UUFDSCxDQUFDO1FBRU8sZ0NBQTJCLEdBQUcsVUFBQyxPQUFzQjtZQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUNwQixRQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BCLEtBQUssTUFBTTtvQkFDVCxPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDaEMsS0FBSyxRQUFRO29CQUNYLE9BQU8sS0FBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztnQkFDekMsS0FBSyxhQUFhO29CQUNoQixLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLHdDQUFtQixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDeEYsTUFBSztnQkFDUDtvQkFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsT0FBTyxDQUFDO2FBQzFDO1FBQ0gsQ0FBQztRQUVNLGlCQUFZLEdBQUcsVUFBQyxRQUFrQixFQUFFLE1BQW1CO1lBQzVELFlBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUM7UUFBbkQsQ0FBbUQ7UUF0RG5ELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHdCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsMkJBQTJCLENBQUM7UUFDL0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLG1DQUFlLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQ3hFLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFVBQUMsS0FBaUI7WUFDakQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7WUFDM0MsSUFBTSxPQUFPLEdBQXNCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsb0NBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4RixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDcEMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXZDRCxzQkFBVyw4QkFBVTthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVO1FBQ3hDLENBQUM7OztPQUFBO0lBRWEsa0JBQVcsR0FBRyxVQUFPLFlBQTBCLEVBQUUsTUFBYzs7Ozs7d0JBQzVELHFCQUFNLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O29CQUFwRCxNQUFNLEdBQUcsU0FBMkM7b0JBQ3RELFVBQVUsR0FBRyx5Q0FBbUI7O3dCQUNwQyxLQUFvQixlQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxJQUFLLFlBQUssQ0FBQyxFQUFFLEVBQVIsQ0FBUSxFQUFFLE1BQU0sQ0FBQyw2Q0FBRTs0QkFBdEQ7NEJBQ0gsVUFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBSyxDQUFDO3lCQUMxQzs7Ozs7Ozs7O29CQUNELHNCQUFPLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzs7U0FDdkU7SUF5RUgsYUFBQztDQUFBO0FBNUZZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDZG5CLDZFQUEwQjtBQW9CMUIsbUZBQWtFO0FBQ2xFLHdHQUFrRDtBQUNsRCw0SUFBd0U7QUFFeEU7SUFLRSw0QkFBWSxVQUFzQixFQUFFLFFBQWtCLEVBQUUsZ0JBQXdCO1FBQWhGLGlCQUlDO1FBRU0seUJBQW9CLEdBQUcsVUFBQyxNQUFtQjtZQUNoRCxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDO1lBQ3hELE9BQU8sS0FBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztRQUN4QyxDQUFDO1FBa0JPLGlDQUE0QixHQUFHLFVBQUMsTUFBbUI7WUFDekQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLFlBQVk7b0JBQ2YsT0FBTyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUN0QyxLQUFLLFdBQVc7b0JBQ2QsT0FBTyxLQUFJLENBQUMsZUFBZSxFQUFFO2dCQUMvQixLQUFLLGtCQUFrQjtvQkFDckIsT0FBTyxLQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxLQUFLLFdBQVc7b0JBQ2QsT0FBTyxLQUFJLENBQUMsZUFBZSxFQUFFO2dCQUMvQixLQUFLLFFBQVE7b0JBQ1gsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDbEMsS0FBSyxVQUFVO29CQUNiLE9BQU8sS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BDLEtBQUssU0FBUztvQkFDWixPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQ3BDO1FBQ0gsQ0FBQztRQUVPLHFCQUFnQixHQUFHLFVBQUMsTUFBNkI7WUFDdkQsSUFBSSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixNQUFNLHdDQUF3QzthQUMvQztZQUNELE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pGLENBQUM7UUFFTyxvQkFBZSxHQUFHO1lBQ3hCLElBQU0saUJBQWlCLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUU7WUFDeEQsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLEdBQUcsQ0FBQztZQUN6RCxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxZQUFFLENBQUM7UUFDdkUsQ0FBQztRQUVPLDJCQUFzQixHQUFHLFVBQUMsTUFBbUM7WUFDbkUsS0FBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9HLENBQUM7UUFFTyxvQkFBZSxHQUFHO1lBQ3hCLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUU7Z0JBQ2xDLE1BQU0sc0NBQXNDO2FBQzdDO1lBQ0QsSUFBSSxLQUFJLENBQUMsUUFBUSxLQUFLLHVCQUFjLEVBQUU7Z0JBQ3BDLE1BQU0sdUNBQXVDO2FBQzlDO1lBQ0QsSUFBTSxLQUFLLEdBQUcsSUFBSSxnQ0FBYyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLEVBQUU7WUFDakUsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssU0FBRSxDQUFDO1FBQ3BFLENBQUM7UUFFTyxpQkFBWSxHQUFHLFVBQUMsTUFBeUI7WUFDL0MsV0FBSSxzREFBd0IsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUF4RyxDQUF3RztRQUVsRyxtQkFBYyxHQUFHLFVBQUMsTUFBMkI7WUFDM0MsVUFBTSxHQUFTLE1BQU0sT0FBZixFQUFFLEVBQUUsR0FBSyxNQUFNLEdBQVgsQ0FBVztZQUM3QixJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUM7WUFDakQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxNQUFNLDJCQUF5QixNQUFRO2FBQ3hDO1lBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzFCLE1BQU0sc0RBQW9ELElBQUksWUFBTyxFQUFJO2FBQzFFO1lBQ0QsSUFBSSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDdkMsTUFBTSxnREFBOEMsRUFBSTthQUN6RDtZQUNELElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDMUMsTUFBTSwrQ0FBK0M7YUFDdEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDakMsTUFBTSxrQ0FBa0M7YUFDekM7WUFDRCxPQUFPO2dCQUNMO29CQUNFLEVBQUUsRUFBRSxLQUFJLENBQUMsZ0JBQWdCO29CQUN6QixJQUFJLEVBQUUsV0FBVztvQkFDakIsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRO29CQUN2QixvQkFBb0IsRUFBRSxDQUFDO29CQUN2QixNQUFNO29CQUNOLElBQUk7b0JBQ0osRUFBRTtpQkFDSDthQUNGO1FBQ0gsQ0FBQztRQUVPLGtCQUFhLEdBQUcsVUFBQyxNQUEwQjtZQUNqRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3hDLE1BQU0sK0NBQStDO2FBQ3REO1lBQ0QsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixJQUFJLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BCLE1BQU0scUNBQXFDO2FBQzVDO1lBQ0QsSUFBTSxxQkFBcUIsR0FBOEI7Z0JBQ3ZELEVBQUUsRUFBRSxLQUFJLENBQUMsZ0JBQWdCO2dCQUN6QixJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVE7YUFDeEI7WUFDRCxPQUFPLENBQUMscUJBQXFCLENBQUM7UUFDaEMsQ0FBQztRQUVPLGNBQVMsR0FBRztZQUNsQixJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3hELElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSx1QkFBcUIsS0FBSSxDQUFDLFFBQVU7YUFDM0M7WUFDRCxPQUFPLE1BQU07UUFDZixDQUFDO1FBbklDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQjtJQUMxQyxDQUFDO0lBT08sK0NBQWtCLEdBQTFCLFVBQTJCLE1BQW9CO1FBQzdDLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUMzQixPQUFPLEVBQUU7U0FDVjthQUFNO1lBQ0wsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3pELElBQUksYUFBYSxDQUFDLGVBQWUsRUFBRSxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkUsT0FBTyxNQUFNO2FBQ2Q7aUJBQU07Z0JBQ0wsSUFBTSxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUM7Z0JBQ3pDLElBQU0sWUFBWSxHQUFzQixFQUFFLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO2dCQUNqRixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQzthQUN0QztTQUNGO0lBQ0gsQ0FBQztJQTRHSCx5QkFBQztBQUFELENBQUM7QUExSVksZ0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkIvQiw2RUFBNEM7QUFFNUMsZ0dBQW1EO0FBQ25ELDZFQUEwQjtBQUMxQix3R0FBcUQ7QUFDckQsK0ZBQStDO0FBRy9DLElBQU0sV0FBVyxHQUFHO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsTUFBTTtJQUNOLFNBQVM7Q0FDVjtBQUVEO0lBS0Usd0JBQVksVUFBc0I7UUFBbEMsaUJBR0M7UUFMTyxlQUFVLEdBQVcsQ0FBQztRQU90QixpQkFBWSxHQUFHLFVBQUMsUUFBa0I7WUFDeEMsSUFBTSxFQUFFLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFNLFFBQVEsR0FBRywyQkFBYSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUM7WUFDbkQsS0FBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQztZQUNoRSxJQUFNLElBQUksR0FBRywyQkFBYSxDQUFDLFdBQVcsQ0FBQztZQUN2QyxPQUFPLElBQUksV0FBSSxDQUFDO2dCQUNkLEVBQUU7Z0JBQ0YsUUFBUTtnQkFDUixJQUFJO2dCQUNKLFFBQVE7Z0JBQ1IsWUFBWSxFQUFFLElBQUksNEJBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN0RCxTQUFTLEVBQUUsSUFBSSxzQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDckQsQ0FBQztRQUNKLENBQUM7UUFFTSxrQkFBYSxHQUFHO1lBQ3JCLFFBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxNQUFNLElBQUssUUFBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUE1RCxDQUE0RCxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQTFHLENBQTBHO1FBcEIxRyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVU7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQW1CSCxxQkFBQztBQUFELENBQUM7QUEzQlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CM0IsdUhBQTJEO0FBSzNEO0lBS0UseUJBQVksVUFBc0IsRUFBRSxnQkFBOEI7UUFBbEUsaUJBR0M7UUFMZ0IsY0FBUyxHQUF5QixFQUFFO1FBTzlDLGdCQUFXLEdBQUcsVUFBQyxRQUE0QjtZQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsQ0FBQztRQUVPLG9CQUFlLEdBQUcsVUFBQyxLQUFpQjs7O2dCQUMxQyxLQUF1Qix1QkFBSSxDQUFDLFNBQVM7b0JBQWhDLElBQU0sUUFBUTtvQkFBb0IsUUFBUSxDQUFDLEtBQUssQ0FBQztpQkFBQTs7Ozs7Ozs7O1FBQ3hELENBQUM7UUFFTSxpQkFBWSxHQUFHLFVBQUMsUUFBa0IsRUFBRSxNQUFtQjs7WUFDNUQsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLHlDQUFrQixDQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuRyxJQUFNLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7O2dCQUM5RCxLQUFvQiw4QkFBTSxpRkFBRTtvQkFBdkIsSUFBTSxPQUFLO29CQUNkLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBSyxDQUFDO29CQUNuRCxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQUssQ0FBQztpQkFDNUI7Ozs7Ozs7OztZQUNELEtBQUksQ0FBQyxnQkFBZ0IsSUFBSSxNQUFNLENBQUMsTUFBTTtZQUN0QyxPQUFPLE1BQU07UUFDZixDQUFDO1FBckJDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVTtRQUM1QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCO0lBQzFDLENBQUM7SUFvQkgsc0JBQUM7QUFBRCxDQUFDO0FBNUJZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1I1QixzRkFBZ0M7QUFFaEMsSUFBTSxPQUFPLEdBQUcsRUFBRTtBQUNsQixJQUFNLFlBQVksR0FBRyxHQUFHO0FBQ3hCLElBQU0sYUFBYSxHQUFHLEVBQUU7QUFFeEI7SUFBZ0MsOEJBQTRCO0lBRzFELG9CQUFZLEtBQW1CLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxJQUFZLEVBQUUsT0FBb0I7UUFBekYsWUFDRSxrQkFBTSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQTBCbkI7UUF6QkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDO1FBQ3hCLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVwQixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHO2FBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDO2FBQ3BDLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDZixRQUFRLENBQUMsUUFBUSxDQUFDO1FBRXJCLElBQU0sVUFBVSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU87UUFDN0MsSUFBTSxXQUFXLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTztRQUUvQyxLQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsWUFBWTtRQUNuRSxLQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsYUFBYTtRQUV4RSxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3pDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLHlCQUF5QixDQUFDO2FBQ2pELEVBQUUsQ0FBQyxZQUFZLEVBQUUsS0FBSSxDQUFDLHdCQUF3QixDQUFDO2FBQy9DLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSSxDQUFDLDBCQUEwQixDQUFDO2FBQ2xELEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLHlCQUF5QixDQUFDO1FBRWxELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDO1NBQzlCO1FBRUQsS0FBSSxDQUFDLHdCQUF3QixFQUFFOztJQUNqQyxDQUFDO0lBRU8sOENBQXlCLEdBQWpDO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTyw2Q0FBd0IsR0FBaEM7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVPLCtDQUEwQixHQUFsQztRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0seUJBQUksR0FBWCxVQUFZLEtBQWM7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLE9BQU8saUJBQU0sSUFBSSxZQUFDLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLENBbkQrQixNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FtRDNEO0FBbkRZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkIsMEVBQWtDO0FBQ2xDLDRGQUE2QztBQUM3Qyw2RUFBb0M7QUFDcEMsK0ZBQStDO0FBQy9DLHdHQUFxRDtBQUNyRCxtRkFBd0M7QUFDeEMsa0dBQWlEO0FBRXBDLHVCQUFlLEdBQUcsVUFBQyxLQUFVOztJQUN4QyxRQUFRLE9BQU8sS0FBSyxFQUFFO1FBQ3BCLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFNBQVMsQ0FBQztRQUNmLEtBQUssV0FBVztZQUNkLE9BQU8sS0FBSztRQUNkLEtBQUssUUFBUTtZQUNYLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLHVCQUFlLENBQUM7YUFDbEM7aUJBQU0sSUFBSSxLQUFLLFlBQVksU0FBRyxFQUFFO2dCQUMvQiw2QkFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUUsV0FBVyxFQUFFLEtBQUssSUFBRTthQUNqRDtpQkFBTSxJQUFJLEtBQUssWUFBWSxvQkFBUSxFQUFFO2dCQUNwQyw2QkFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUUsV0FBVyxFQUFFLFVBQVUsSUFBRTthQUN0RDtpQkFBTSxJQUFJLEtBQUssWUFBWSx3QkFBVSxFQUFFO2dCQUN0Qyw2QkFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUUsV0FBVyxFQUFFLFlBQVksSUFBRTthQUN4RDtpQkFBTSxJQUFJLEtBQUssWUFBWSxXQUFJLEVBQUU7Z0JBQ2hDLDZCQUFZLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBRSxXQUFXLEVBQUUsTUFBTSxJQUFFO2FBQ2xEO2lCQUFNLElBQUksS0FBSyxZQUFZLHNCQUFTLEVBQUU7Z0JBQ3JDLDZCQUFZLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBRSxXQUFXLEVBQUUsV0FBVyxJQUFFO2FBQ3ZEO2lCQUFNLElBQUksS0FBSyxZQUFZLDRCQUFZLEVBQUU7Z0JBQ3hDLDZCQUFZLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBRSxXQUFXLEVBQUUsY0FBYyxJQUFFO2FBQzFEO2lCQUFNLElBQUksS0FBSyxZQUFZLGVBQU0sRUFBRTtnQkFDbEMsNkJBQVksS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFFLFdBQVcsRUFBRSxRQUFRLElBQUU7YUFDcEQ7aUJBQU07Z0JBQ0wsSUFBTSxTQUFTLEdBQVEsRUFBRTs7b0JBQ3pCLEtBQXlCLHdCQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyw2Q0FBRTt3QkFBckMsNEJBQVUsRUFBVCxHQUFHLFVBQUUsR0FBRzt3QkFDbEIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLHVCQUFlLENBQUMsR0FBRyxDQUFDO3FCQUN0Qzs7Ozs7Ozs7O2dCQUNELE9BQU8sU0FBUzthQUNqQjtLQUNKO0FBQ0gsQ0FBQztBQUVZLDJCQUFtQixHQUFHLFVBQUMsS0FBVTs7SUFDNUMsUUFBUSxPQUFPLEtBQUssRUFBRTtRQUNwQixLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLFdBQVc7WUFDZCxPQUFPLEtBQUs7UUFDZCxLQUFLLFFBQVE7WUFDWCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQywyQkFBbUIsQ0FBQzthQUN0QztpQkFBTSxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFO2dCQUN0QyxPQUFPLFNBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQzNCO2lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQzNDLE9BQU8sb0JBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2hDO2lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxZQUFZLEVBQUU7Z0JBQzdDLE9BQU8sd0JBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2xDO2lCQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7Z0JBQ3ZDLE9BQU8sV0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDNUI7aUJBQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLGNBQWMsRUFBRTtnQkFDL0MsT0FBTyw0QkFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDcEM7aUJBQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBRTtnQkFDNUMsT0FBTyxzQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDakM7aUJBQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTtnQkFDekMsT0FBTyxlQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUM5QjtpQkFBTTtnQkFDTCxJQUFNLFNBQVMsR0FBUSxFQUFFOztvQkFDekIsS0FBeUIsd0JBQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLDZDQUFFO3dCQUFyQyw0QkFBVSxFQUFULEdBQUcsVUFBRSxHQUFHO3dCQUNsQixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsMkJBQW1CLENBQUMsR0FBRyxDQUFDO3FCQUMxQzs7Ozs7Ozs7O2dCQUNELE9BQU8sU0FBUzthQUNqQjtLQUNKO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFWSxpQkFBUyxHQUFHLFVBQUMsS0FBWTtJQUNwQyxXQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sSUFBSyxZQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQW5ELENBQW1ELENBQUM7QUFBN0UsQ0FBNkU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbEUsMEJBQWtCLEdBQUcsVUFBQyxHQUFXLEVBQUUsR0FBVztJQUN6RCxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO0FBQWpELENBQWlEO0FBRXRDLDBCQUFrQixHQUFHLFVBQUMsR0FBVyxFQUFFLEdBQVcsSUFBYSxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBN0MsQ0FBNkM7QUFFeEcscUJBQWEsR0FBRyxVQUFJLEtBQVUsSUFBUSxZQUFLLENBQUMsMEJBQWtCLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUExQyxDQUEwQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1FoRixlQUFPLEdBQUcsVUFBSSxNQUFpQixJQUFlLFFBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBTyxDQUFDLENBQUMsQ0FBQyxZQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBL0MsQ0FBK0M7QUFFN0YsZ0JBQVEsR0FBRyxVQUFJLEtBQWU7SUFDekMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ2xCLEtBQUssTUFBTTtZQUNULE9BQU8sS0FBSyxDQUFDLElBQUk7UUFDbkIsS0FBSyxTQUFTO1lBQ1osT0FBTyxTQUFTO0tBQ25CO0FBQ0gsQ0FBQztBQUVZLGVBQU8sR0FBWSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDdEMsWUFBSSxHQUFHLFVBQUksSUFBTyxJQUFjLFFBQUM7SUFDNUMsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJO0NBQ0wsQ0FBQyxFQUgyQyxDQUczQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkY7SUFBMEMsd0NBQUs7SUFDN0MsOEJBQVksS0FBWTtlQUN0QixrQkFBTSx1QkFBcUIsS0FBTyxDQUFDO0lBQ3JDLENBQUM7SUFDSCwyQkFBQztBQUFELENBQUMsQ0FKeUMsS0FBSyxHQUk5QztBQUpZLG9EQUFvQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQyxrRkFBaUM7QUFFakM7SUFJRSxzQkFBWSxFQUFrRDtRQUE5RCxpQkFNQztZQU5hLE9BQU8sZUFBRSxHQUFHO1FBUW5CLFdBQU0sR0FBRyxVQUFDLE1BQWMsSUFBbUIsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQTdDLENBQTZDO1FBRXhGLFNBQUksR0FBRyxVQUFDLEVBQW1GO2dCQUFuRixxQkFBaUYsRUFBRSxPQUFqRixlQUFzQixFQUF0QixPQUFPLG1CQUFHLEtBQUksQ0FBQyxPQUFPLE9BQUUsV0FBYyxFQUFkLEdBQUcsbUJBQUcsS0FBSSxDQUFDLEdBQUc7WUFDckQsV0FBSSxZQUFZLENBQUMsRUFBRSxPQUFPLFdBQUUsR0FBRyxPQUFFLENBQUM7UUFBbEMsQ0FBa0M7UUFFN0IsWUFBTyxHQUFHLGNBQW9CLFdBQUksWUFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUF0RCxDQUFzRDtRQUVwRixXQUFNLEdBQUcsY0FBVyxRQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUExQyxDQUEwQztRQWRuRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHO1FBQ2QsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDZixNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBV2EscUJBQVEsR0FBRyxVQUFDLElBQVMsSUFBbUIsV0FBSSxZQUFZLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQTFELENBQTBEO0lBQ2xILG1CQUFDO0NBQUE7QUF0Qlksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGekIsaUlBQXFFO0FBQ3JFLG1FQUFzQztBQUV0QyxJQUFZLFlBT1g7QUFQRCxXQUFZLFlBQVk7SUFDdEIsNkJBQWE7SUFDYiw2QkFBYTtJQUNiLHlDQUF5QjtJQUN6Qix5Q0FBeUI7SUFDekIseUNBQXlCO0lBQ3pCLHlDQUF5QjtBQUMzQixDQUFDLEVBUFcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFPdkI7QUFFWSxzQkFBYyxHQUFHO0lBQzVCLFlBQVksQ0FBQyxJQUFJO0lBQ2pCLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxJQUFJO0lBQ2pCLFlBQVksQ0FBQyxVQUFVO0lBQ3ZCLFlBQVksQ0FBQyxVQUFVO0NBQ3hCO0FBRVkscUJBQWEsR0FBRyxVQUFDLFNBQXVCO0lBQ25ELFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUssWUFBWSxDQUFDLElBQUk7WUFDcEIsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssWUFBWSxDQUFDLElBQUk7WUFDcEIsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsS0FBSyxZQUFZLENBQUMsVUFBVTtZQUMxQixPQUFPLElBQUksU0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixLQUFLLFlBQVksQ0FBQyxVQUFVO1lBQzFCLE9BQU8sSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLEtBQUssWUFBWSxDQUFDLFVBQVU7WUFDMUIsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssWUFBWSxDQUFDLFVBQVU7WUFDMUIsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkI7WUFDRSxNQUFNLElBQUksNkNBQW9CLENBQUMsU0FBUyxDQUFDO0tBQzVDO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRCw2RUFBMEI7QUFDMUIsaUdBQTZEO0FBRTdEO0lBSUUsYUFBWSxDQUFTLEVBQUUsQ0FBUztRQUFoQyxpQkFHQztRQU1NLFNBQUksR0FBRyxVQUFDLElBQVMsSUFBVSxXQUFJLEdBQUcsQ0FBQyxLQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQXpDLENBQXlDO1FBRXBFLGVBQVUsR0FBRyxjQUFhLFVBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBN0IsQ0FBNkI7UUFFdkQsaUJBQVksR0FBRyxVQUFDLElBQVMsSUFBYyxRQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBbkMsQ0FBbUM7UUFFMUUsZUFBVSxHQUFHLFVBQUMsSUFBUztZQUM1QixRQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUF2RixDQUF1RjtRQVdsRixXQUFNLEdBQUcsVUFBQyxJQUFTLElBQWMsWUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsRUFBdEMsQ0FBc0M7UUFFdkUsYUFBUSxHQUFHLGNBQWMsZ0JBQU8sS0FBSSxDQUFDLENBQUMsVUFBSyxLQUFJLENBQUMsQ0FBQyxNQUFHLEVBQTNCLENBQTJCO1FBRXBELE9BQUUsR0FBRyxVQUFDLFNBQXVCLElBQVUsWUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQW5DLENBQW1DO1FBRTFFLFdBQU0sR0FBRyxjQUFXLFFBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQTFCLENBQTBCO1FBaENuRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDVixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDWixDQUFDO0lBRUQsc0JBQUksa0JBQUM7YUFBTDtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBV2MsY0FBVSxHQUFVO1FBQ2pDLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDYixJQUFJLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2Y7SUFVYSxZQUFRLEdBQUcsVUFBQyxJQUFTLElBQVUsV0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQXZCLENBQXVCO0lBQ3RFLFVBQUM7Q0FBQTtBQXhDWSxrQkFBRzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hoQixrRkFBaUM7QUFFakM7SUFJRSxtQkFBWSxFQUFrRDtRQUE5RCxpQkFNQztZQU5hLE9BQU8sZUFBRSxHQUFHO1FBUW5CLFdBQU0sR0FBRyxVQUFDLE1BQWMsSUFBZ0IsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQTdDLENBQTZDO1FBRXJGLFNBQUksR0FBRyxVQUFDLEVBQW1GO2dCQUFuRixxQkFBaUYsRUFBRSxPQUFqRixlQUFzQixFQUF0QixPQUFPLG1CQUFHLEtBQUksQ0FBQyxPQUFPLE9BQUUsV0FBYyxFQUFkLEdBQUcsbUJBQUcsS0FBSSxDQUFDLEdBQUc7WUFDckQsV0FBSSxTQUFTLENBQUMsRUFBRSxPQUFPLFdBQUUsR0FBRyxPQUFFLENBQUM7UUFBL0IsQ0FBK0I7UUFFMUIsV0FBTSxHQUFHLGNBQVcsUUFBQyxFQUFFLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBMUMsQ0FBMEM7UUFabkUsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRztRQUNkLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUM7SUFDeEIsQ0FBQztJQVNhLGtCQUFRLEdBQUcsVUFBQyxJQUFTLElBQWdCLFdBQUksU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUF2RCxDQUF1RDtJQUM1RyxnQkFBQztDQUFBO0FBcEJZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnRCLHFGQUFzQztBQUN0QywyRkFBMEM7QUFDMUMsNEVBQWlDO0FBRXBCLDJCQUFtQixHQUFlLElBQUksd0JBQVUsQ0FBQztJQUM1RCxJQUFJLEVBQUUsQ0FBQztJQUNQLEdBQUcsRUFBRSxJQUFJLG9CQUFRLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMzQyxPQUFPLEVBQUU7UUFDUCxJQUFJLGVBQU0sQ0FBQztZQUNULEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFVBQVU7WUFDaEIsU0FBUyxFQUFFLEtBQUs7U0FDakIsQ0FBQztLQUNIO0lBQ0QsS0FBSyxFQUFFLEVBQUU7Q0FDVixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZlcsc0JBQWMsR0FBRyxDQUFDO0FBSS9CO0lBTUUsZ0JBQVksRUFVWDtRQVZELGlCQWVDO1lBZEMsRUFBRSxVQUNGLElBQUksWUFDSixpQkFBaUIsRUFBakIsU0FBUyxtQkFBRyxLQUFLLE9BQ2pCLGdCQUFnQixFQUFoQixRQUFRLG1CQUFHLEtBQUs7UUFhWCxTQUFJLEdBQUcsVUFBQyxFQUtrRTtnQkFMbEUscUJBS2dFLEVBQUUsT0FKL0UsVUFBWSxFQUFaLEVBQUUsbUJBQUcsS0FBSSxDQUFDLEVBQUUsT0FDWixZQUFnQixFQUFoQixJQUFJLG1CQUFHLEtBQUksQ0FBQyxJQUFJLE9BQ2hCLGlCQUEwQixFQUExQixTQUFTLG1CQUFHLEtBQUksQ0FBQyxTQUFTLE9BQzFCLGdCQUF3QixFQUF4QixRQUFRLG1CQUFHLEtBQUksQ0FBQyxRQUFRO1lBRXhCLFdBQUksTUFBTSxDQUFDO2dCQUNULEVBQUU7Z0JBQ0YsSUFBSTtnQkFDSixTQUFTO2dCQUNULFFBQVE7YUFDVCxDQUFDO1FBTEYsQ0FLRTtRQUVHLFdBQU0sR0FBRyxjQUFXLFFBQUMsRUFBRSxFQUFFLEVBQUUsS0FBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQXRGLENBQXNGO1FBbkIvRyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUU7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtJQUMxQixDQUFDO0lBaUJhLGVBQVEsR0FBRyxVQUFDLElBQVM7UUFDakMsV0FBSSxNQUFNLENBQUM7WUFDVCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFMRixDQUtFO0lBQ04sYUFBQztDQUFBO0FBN0NZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDSm5CLG1FQUEyQjtBQUMzQixpR0FBOEM7QUFDOUMsd0ZBQXdDO0FBS3hDO0lBUUUsY0FBWSxFQWNYO1FBZEQsaUJBcUJDO1lBcEJDLEVBQUUsVUFDRixRQUFRLGdCQUNSLElBQUksWUFDSixRQUFRLGdCQUNSLFNBQVMsaUJBQ1QsWUFBWTtRQWlCUCxXQUFNLEdBQUcsVUFBQyxNQUFjLElBQVcsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQXZELENBQXVEO1FBRTFGLFNBQUksR0FBRyxVQUFDLEVBY1Q7Z0JBZFMscUJBY1gsRUFBRSxPQWJKLFVBQVksRUFBWixFQUFFLG1CQUFHLEtBQUksQ0FBQyxFQUFFLE9BQ1osZ0JBQXdCLEVBQXhCLFFBQVEsbUJBQUcsS0FBSSxDQUFDLFFBQVEsT0FDeEIsWUFBZ0IsRUFBaEIsSUFBSSxtQkFBRyxLQUFJLENBQUMsSUFBSSxPQUNoQixnQkFBd0IsRUFBeEIsUUFBUSxtQkFBRyxLQUFJLENBQUMsUUFBUSxPQUN4QixpQkFBMEIsRUFBMUIsU0FBUyxtQkFBRyxLQUFJLENBQUMsU0FBUyxPQUMxQixvQkFBZ0MsRUFBaEMsWUFBWSxtQkFBRyxLQUFJLENBQUMsWUFBWTtZQVFqQixXQUFJLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBRSxRQUFRLFlBQUUsSUFBSSxRQUFFLFFBQVEsWUFBRSxTQUFTLGFBQUUsWUFBWSxnQkFBRSxDQUFDO1FBQW5FLENBQW1FO1FBRTdFLFNBQUksR0FBRyxVQUFDLFFBQWEsRUFBRSxvQkFBNEI7WUFDeEQsWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsWUFBRSxZQUFZLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO1FBQXJGLENBQXFGO1FBRWhGLHVCQUFrQixHQUFHLFVBQUMsb0JBQTRCO1lBQ3ZELFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO1FBQTNFLENBQTJFO1FBRXRFLHdCQUFtQixHQUFHLGNBQVksWUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsRUFBeEQsQ0FBd0Q7UUFNMUYsV0FBTSxHQUFHLGNBQVcsUUFBQztZQUMxQixFQUFFLEVBQUUsS0FBSSxDQUFDLEVBQUU7WUFDWCxRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2hDLFNBQVMsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNsQyxZQUFZLEVBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7U0FDekMsQ0FBQyxFQVB5QixDQU96QjtRQTdDQSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUU7UUFDWixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZO0lBQ2xDLENBQUM7SUE0QkQsc0JBQVcsd0NBQXNCO2FBQWpDO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBV2EsYUFBUSxHQUFHLFVBQUMsSUFBUztRQUNqQyxXQUFJLElBQUksQ0FBQztZQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsU0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxzQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzdDLFlBQVksRUFBRSw0QkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3ZELENBQUM7SUFQRixDQU9FO0lBQ04sV0FBQztDQUFBO0FBL0VZLG9CQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FDUGpCLDZFQUEwQjtBQWMxQixpSUFBcUU7QUFDckUsNEVBQTJDO0FBQzNDLG9KQUFzRTtBQUV6RCxrQkFBVSxHQUFHLFVBQUMsS0FBaUIsRUFBRSxLQUFpQjtJQUM3RCxRQUFRLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDbEIsS0FBSyxZQUFZO1lBQ2YsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDaEMsS0FBSyxhQUFhO1lBQ2hCLE9BQU8saUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUN4QyxLQUFLLG1CQUFtQjtZQUN0QixPQUFPLHVCQUF1QixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDOUMsS0FBSyxhQUFhO1lBQ2hCLE9BQU8saUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUN4QyxLQUFLLFdBQVc7WUFDZCxPQUFPLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ3RDLEtBQUssUUFBUTtZQUNYLE9BQU8sWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDbkMsS0FBSyxpQkFBaUI7WUFDcEIsT0FBTyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQzVDLEtBQUssZ0JBQWdCO1lBQ25CLE9BQU8sb0JBQW9CLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUMzQyxLQUFLLFNBQVM7WUFDWixPQUFPLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDN0IsS0FBSyxVQUFVO1lBQ2IsT0FBTyxjQUFjLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUNyQztZQUNFLE1BQU0sSUFBSSw2Q0FBb0IsQ0FBQyxLQUFLLENBQUM7S0FDeEM7QUFDSCxDQUFDO0FBRUQsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEtBQTJCO0lBQ25ELElBQUksS0FBSyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDaEIsTUFBTSxvQ0FBb0M7S0FDM0M7SUFDRCxPQUFPLEtBQUssQ0FBQyxLQUFLO0FBQ3BCLENBQUM7QUFFRCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsS0FBaUIsRUFBRSxLQUE0QjtJQUN4RSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssYUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUE1QixDQUE0QixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsRSxNQUFNLDBCQUEwQjtLQUNqQztJQUNPLFlBQVEsR0FBSyxLQUFLLFNBQVYsQ0FBVTtJQUMxQixJQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFlBQVUsUUFBVSxFQUFFLENBQUM7SUFDdkUsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUNoQyxDQUFDO0FBRUQsSUFBTSx1QkFBdUIsR0FBRyxVQUFDLEtBQWlCLEVBQUUsS0FBa0M7SUFDNUUsWUFBUSxHQUFXLEtBQUssU0FBaEIsRUFBRSxJQUFJLEdBQUssS0FBSyxLQUFWLENBQVU7SUFDaEMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7SUFDMUIsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxVQUFDLE1BQU0sSUFBSyxhQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxRQUFFLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztBQUN4RSxDQUFDO0FBRUQsSUFBTSxTQUFTLEdBQUcsVUFBQyxLQUFpQixFQUFFLFFBQWtCO0lBQ3RELElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ3pDLElBQUksQ0FBQyxNQUFNO1FBQUUsTUFBTSw2QkFBMkIsUUFBVTtJQUN4RCxPQUFPLE1BQU07QUFDZixDQUFDO0FBRUQsSUFBTSxpQkFBaUIsR0FBRyxVQUFDLEtBQWlCLEVBQUUsS0FBNEI7SUFDeEUsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFO1FBQ3hCLE1BQU0sc0JBQXNCO0tBQzdCO0lBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDO0FBQ3hGLENBQUM7QUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEtBQWlCLEVBQUUsS0FBMEI7SUFDNUQsVUFBTSxHQUF5QixLQUFLLE9BQTlCLEVBQUUsUUFBUSxHQUFlLEtBQUssU0FBcEIsRUFBRSxJQUFJLEdBQVMsS0FBSyxLQUFkLEVBQUUsRUFBRSxHQUFLLEtBQUssR0FBVixDQUFVO0lBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzFCLE1BQU0sc0RBQW9ELElBQUksWUFBTyxFQUFJO0tBQzFFO0lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzdCLE1BQU0sZ0RBQThDLEVBQUk7S0FDekQ7SUFDRCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUN2QyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1QsTUFBTSwyQkFBeUIsTUFBUTtLQUN4QztJQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMvQixNQUFNLG1FQUFpRSxJQUFJLENBQUMsUUFBUSxvQ0FBK0IsSUFBTTtLQUMxSDtJQUNELElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUM7SUFDM0MsSUFBSSxNQUFNLEVBQUU7UUFDVixNQUFNLCtDQUErQztLQUN0RDtJQUNELElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUU7UUFDOUIsTUFBTSxnREFBZ0Q7S0FDdkQ7SUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsRUFBRTtRQUMxRCxNQUFNLDRCQUE0QjtLQUNuQztJQUNELE9BQU8sS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFRCxJQUFNLFlBQVksR0FBRyxVQUFDLEtBQWlCLEVBQUUsS0FBdUI7SUFDdEQsWUFBUSxHQUFlLEtBQUssU0FBcEIsRUFBRSxRQUFRLEdBQUssS0FBSyxTQUFWLENBQVU7SUFFcEMsSUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3hELElBQUksQ0FBQyxZQUFZO1FBQUUsTUFBTSwyQkFBeUIsUUFBUSxDQUFDLE1BQVE7SUFDbkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbEQsTUFBTSxtREFBaUQsWUFBWSxDQUFDLEVBQUUsd0JBQW1CLFlBQVksQ0FBQyxRQUFRLG9DQUErQixRQUFRLENBQUMsUUFBVTtJQUVsSyxJQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEQsSUFBSSxDQUFDLFlBQVk7UUFBRSxNQUFNLDJCQUF5QixRQUFRLENBQUMsTUFBUTtJQUNuRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxNQUFNLG1EQUFpRCxZQUFZLENBQUMsRUFBRSx3QkFBbUIsWUFBWSxDQUFDLFFBQVEsb0NBQStCLFFBQVEsQ0FBQyxRQUFVO0lBRWxLLElBQUksWUFBWSxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsUUFBUTtRQUFFLE1BQU0sMEJBQTBCO0lBQ3JGLElBQUksQ0FBQyw0Q0FBYyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3pFLE1BQU0sNEJBQTBCLEtBQUssQ0FBQyxVQUFVLHVCQUFrQixRQUFRLENBQUMsUUFBUSxZQUFPLFFBQVEsQ0FBQyxRQUFVO0lBQy9HLElBQUksWUFBWSxDQUFDLFlBQVksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLG9CQUFvQjtRQUFFLE1BQU0sNEJBQTRCO0lBRXRHLElBQUksUUFBUSxHQUFHLEtBQUs7SUFFcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQ25CLFFBQVEsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7S0FDaEQ7U0FBTTtRQUNMLElBQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQztRQUMzRyxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQztLQUNsRTtJQUVELElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUNuQixRQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO0tBQ2hEO1NBQU07UUFDTCxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3ZGO0lBRUQsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1FBQ25CLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQixRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBSSxZQUFZLENBQUMsSUFBSSw4Q0FBeUMsWUFBWSxDQUFDLElBQUksTUFBRyxDQUFDO1NBQ25IO2FBQU07WUFDTCxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBSSxZQUFZLENBQUMsSUFBSSxrQ0FBNkIsWUFBWSxDQUFDLElBQUksTUFBRyxDQUFDO1NBQ3ZHO0tBQ0Y7U0FBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDMUIsUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUksWUFBWSxDQUFDLElBQUksNkNBQXdDLFlBQVksQ0FBQyxJQUFJLE1BQUcsQ0FBQztLQUNsSDtTQUFNO1FBQ0wsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNsRSxJQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFlLFFBQVEsQ0FBQyxNQUFNLFlBQVM7UUFDL0YsSUFBTSxPQUFPLEdBQU0sWUFBWSxDQUFDLElBQUksU0FBSSxJQUFJLFNBQUksWUFBWSxDQUFDLElBQUksa0JBQWEsUUFBUSxDQUFDLE1BQU0sZUFBVSxrQkFBa0IsTUFBRztRQUM1SCxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7S0FDekM7SUFDRCxPQUFPLFFBQVE7QUFDakIsQ0FBQztBQUVELElBQU0scUJBQXFCLEdBQUcsVUFBQyxLQUFpQixFQUFFLEtBQWdDO0lBQ3hFLFlBQVEsR0FBSyxLQUFLLFNBQVYsQ0FBVTtJQUMxQixTQUFTLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztJQUMxQixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQztBQUNuRixDQUFDO0FBRUQsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLEtBQWlCLEVBQUUsS0FBK0I7SUFDdEUsWUFBUSxHQUFLLEtBQUssU0FBVixDQUFVO0lBQzFCLElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO0lBQ3pDLE9BQU8sS0FBSztTQUNULFlBQVksQ0FBQyxRQUFRLEVBQUUsVUFBQyxNQUFNLElBQUssYUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUEvQixDQUErQixDQUFDO1NBQ25FLFdBQVcsQ0FBSSxNQUFNLENBQUMsSUFBSSwwQkFBdUIsQ0FBQztBQUN2RCxDQUFDO0FBRUQsSUFBTSxhQUFhLEdBQUcsVUFBQyxLQUFpQjtJQUN0QyxZQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVEsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLGlCQUFhLENBQUM7QUFBaEUsQ0FBZ0U7QUFFbEUsSUFBTSxjQUFjLEdBQUcsVUFBQyxLQUFpQixFQUFFLEtBQXlCO0lBQzFELFVBQU0sR0FBSyxLQUFLLE9BQVYsQ0FBVTtJQUN4QixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFJLE1BQU0sRUFBRTtRQUNWLElBQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDO1FBQzdDLFFBQVEsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLGtCQUFNLFlBQVksQ0FBQyxJQUFJLG9CQUFpQixDQUFDO0tBQzFFO1NBQU07UUFDTCxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQztLQUNoRTtJQUNELE9BQU8sUUFBUTtBQUNqQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekxELG1FQUEyQjtBQUMzQixrRkFBaUM7QUFFakM7SUFJRSxrQkFBWSxFQUFvRDtRQUFoRSxpQkFLQztZQUxhLEtBQUssYUFBRSxNQUFNO1FBT3BCLGVBQVUsR0FBRyxVQUFDLEdBQVE7WUFDM0IsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNO1FBQ3RFLENBQUM7UUFVTSxXQUFNLEdBQUcsY0FBVyxRQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUE1QyxDQUE0QztRQW5CckUsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtJQUN0QixDQUFDO0lBT08sOEJBQVcsR0FBbkI7Ozs7O29CQUNXLEdBQUcsR0FBRyxDQUFDOzs7eUJBQUUsSUFBRyxHQUFHLElBQUksQ0FBQyxNQUFNO29CQUN4QixNQUFNLEdBQUcsQ0FBQzs7O3lCQUFFLE9BQU0sR0FBRyxJQUFJLENBQUMsS0FBSztvQkFDaEMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTTtvQkFDdkMscUJBQU0sSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7b0JBQXJCLFNBQXFCOzs7b0JBRm1CLE1BQU0sRUFBRTs7O29CQURmLEdBQUcsRUFBRTs7Ozs7S0FLM0M7SUFJYSxpQkFBUSxHQUFHLFVBQUMsSUFBUyxJQUFlLFdBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUF4RCxDQUF3RDtJQUM1RyxlQUFDO0NBQUE7QUEzQlksNEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZyQiw2RUFBMEI7QUFDMUIscUZBQXNDO0FBQ3RDLHNFQUFxQztBQUNyQyw4RUFBc0U7QUFDdEUsNEVBQTJDO0FBQzNDLGtGQUFpQztBQUNqQyx5SEFBb0Q7QUFPcEQ7SUFRRSxvQkFBWSxFQWNYO1FBZEQsaUJBc0JDO1lBckJDLElBQUksWUFDSixHQUFHLFdBQ0gsS0FBSyxhQUNMLE9BQU8sZUFDUCxZQUFZLG9CQUNaLGdCQUFhLEVBQWIsUUFBUSxtQkFBRyxFQUFFO1FBa0JSLFNBQUksR0FBRyxVQUFDLEVBY1Q7Z0JBZFMscUJBY1gsRUFBRSxPQWJKLFlBQWdCLEVBQWhCLElBQUksbUJBQUcsS0FBSSxDQUFDLElBQUksT0FDaEIsV0FBYyxFQUFkLEdBQUcsbUJBQUcsS0FBSSxDQUFDLEdBQUcsT0FDZCxhQUFrQixFQUFsQixLQUFLLG1CQUFHLEtBQUksQ0FBQyxLQUFLLE9BQ2xCLGVBQXNCLEVBQXRCLE9BQU8sbUJBQUcsS0FBSSxDQUFDLE9BQU8sT0FDdEIsb0JBQXlDLEVBQXpDLFlBQVksbUJBQUcsZUFBTyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FDekMsZ0JBQXdCLEVBQXhCLFFBQVEsbUJBQUcsS0FBSSxDQUFDLFFBQVE7WUFRSCxXQUFJLFVBQVUsQ0FBQyxFQUFFLElBQUksUUFBRSxHQUFHLE9BQUUsS0FBSyxTQUFFLE9BQU8sV0FBRSxZQUFZLEVBQUUsZ0JBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxRQUFRLFlBQUUsQ0FBQztRQUE3RixDQUE2RjtRQVU3RyxpQkFBWSxHQUFHLGNBQWtCLFlBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxFQUFFLEVBQVQsQ0FBUyxDQUFDLEVBQXZDLENBQXVDO1FBRXhFLHFCQUFnQixHQUFHLFVBQUMsUUFBa0IsSUFBYyxZQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBN0MsQ0FBNkM7UUFFakcsaUJBQVksR0FBRyxVQUFDLFFBQWtCOztZQUN2QyxJQUFNLFNBQVMsU0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQywwQ0FBRSxTQUFTO1lBQ3RELE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsc0JBQXNCLEVBQTNCLENBQTJCLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JHLENBQUM7UUFFTSxvQkFBZSxHQUFHLGNBQWUsUUFBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxZQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQTdELENBQTZEO1FBRTlGLHNCQUFpQixHQUFHLFVBQUMsUUFBa0IsSUFBYSxZQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBMUIsQ0FBMEIsQ0FBQyxFQUF2RCxDQUF1RDtRQUUzRyxlQUFVLEdBQUcsVUFBQyxRQUFrQixJQUFxQixRQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTSxJQUFLLGFBQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUF0QixDQUFzQixFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBeEQsQ0FBd0Q7UUFFN0csY0FBUyxHQUFHLFVBQUMsUUFBa0I7WUFDcEMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7WUFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxNQUFNLDZCQUEyQixRQUFVO2FBQzVDO1lBQ0QsT0FBTyxNQUFNO1FBQ2YsQ0FBQztRQUVNLGlCQUFZLEdBQUcsVUFBQyxNQUFjLElBQW1CLFFBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLEVBQWxCLENBQWtCLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUFoRCxDQUFnRDtRQUVqRyxnQkFBVyxHQUFHLFVBQUMsTUFBYztZQUNsQyxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztZQUN0QyxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE1BQU0sMkJBQXlCLE1BQVE7YUFDeEM7WUFDRCxPQUFPLElBQUk7UUFDYixDQUFDO1FBRU0sdUJBQWtCLEdBQUcsVUFBQyxHQUFRLElBQW1CLFFBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxFQUF2RCxDQUF1RDtRQUV4RyxnQkFBVyxHQUFHLFVBQUMsTUFBYyxFQUFFLElBQVU7WUFDOUMsWUFBSSxDQUFDLElBQUksQ0FBQztnQkFDUixLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FDYixJQUFJLEVBQ0osQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBbEIsQ0FBa0IsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQ25EO2FBQ0YsQ0FBQztRQUxGLENBS0U7UUFFRyxlQUFVLEdBQUcsVUFBQyxNQUFjO1lBQ2pDLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsRUFBRSxLQUFLLE1BQU0sRUFBbEIsQ0FBa0IsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUF4RSxDQUF3RTtRQUVuRSxpQkFBWSxHQUFHLFVBQUMsUUFBa0IsRUFBRSxNQUFrQztZQUMzRSxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTTtnQkFBRSxNQUFNLDZCQUEyQixRQUFVO1lBQ3hELE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFTSxrQkFBYSxHQUFHLFVBQUMsUUFBa0IsRUFBRSxNQUFjO1lBQ3hELE1BQU0sQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUM5QixPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ2YsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQ2YsTUFBTSxFQUNOLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxNQUFNLElBQUssYUFBTSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQXRCLENBQXNCLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUMzRDthQUNGLENBQUM7UUFDSixDQUFDO1FBRU0sY0FBUyxHQUFHLFVBQUMsTUFBYyxJQUFpQixZQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQXRELENBQXNEO1FBRWxHLFdBQU0sR0FBRyxjQUFXLFFBQUM7WUFDMUIsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJO1lBQ2YsR0FBRyxFQUFFLEtBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3RCLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLENBQUMsTUFBTSxFQUFFLEVBQWIsQ0FBYSxDQUFDO1lBQzlDLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxhQUFNLENBQUMsTUFBTSxFQUFFLEVBQWYsQ0FBZSxDQUFDO1lBQ3RELFlBQVksRUFBRSxLQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDLEVBTnlCLENBTXpCO1FBV0ssb0JBQWUsR0FBRyxVQUFDLFFBQWtCLElBQWMsUUFBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU0sSUFBSyxhQUFNLENBQUMsRUFBRSxLQUFLLFFBQVEsRUFBdEIsQ0FBc0IsRUFBRSxLQUFJLENBQUMsT0FBTyxDQUFDLEVBQXZELENBQXVEO1FBRTFHLGFBQVEsR0FBRyxVQUFDLE1BQXNCLElBQWlCLFlBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsWUFBSSxDQUFDLEVBQUUsTUFBTSxVQUFFLENBQUMsRUFBRSxDQUFDLEVBQTdDLENBQTZDO1FBRWhHLGVBQVUsR0FBRyxVQUFDLEtBQWlCLElBQWlCLHlDQUFVLENBQUMsS0FBSSxFQUFFLEtBQUssQ0FBQyxFQUF2QixDQUF1QjtRQUV2RSxnQkFBVyxHQUFHLFVBQUMsTUFBb0I7O1lBQ3hDLElBQUksS0FBSyxHQUFlLEtBQUk7O2dCQUM1QixLQUFvQiw4QkFBTSxpRkFBRTtvQkFBdkIsSUFBTSxPQUFLO29CQUNkLEtBQUssR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQUssQ0FBQztpQkFDaEM7Ozs7Ozs7OztZQUNELE9BQU8sS0FBSztRQUNkLENBQUM7UUFFTSxnQkFBVyxHQUFHLFVBQUMsT0FBZSxJQUFpQixZQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQXpELENBQXlEO1FBRXhHLFlBQU8sR0FBRztZQUNmLFlBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztnQkFDbkIsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUExQixDQUEwQixDQUFDO2dCQUMzRCxPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssYUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDO2FBQ3pFLENBQUM7UUFKRixDQUlFO1FBdklGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUc7UUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUs7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWTtRQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVE7UUFDeEIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQWtCRCxzQkFBVyxrQ0FBVTthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsc0NBQWM7YUFBekI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQTBFYSxtQkFBUSxHQUFHLFVBQUMsSUFBUztRQUNqQyxXQUFJLFVBQVUsQ0FBQztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVMsSUFBSyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztZQUN6RCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLElBQUssc0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUM7WUFDL0QsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2hDLENBQUM7SUFORixDQU1FO0lBd0JOLGlCQUFDO0NBQUE7QUEvSlksZ0NBQVUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IERleGllLCB7IENvbGxlY3Rpb24gfSBmcm9tICdkZXhpZSdcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uLCBzZXJpYWxpc2VUb0pzb24gfSBmcm9tICcuLi91dGlsL2pzb24tc2VyaWFsaXNhdGlvbidcblxuZXhwb3J0IGludGVyZmFjZSBXb3JsZEV2ZW50UmVjb3JkIHtcbiAgZ2FtZUlkOiBHYW1lSWRcbiAgZXZlbnQ6IGFueSAvLyBzZXJpYWxpc2VkIFdvcmxkRXZlbnRcbn1cblxuZXhwb3J0IGNsYXNzIExsYW1hRGV4aWUgZXh0ZW5kcyBEZXhpZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICB3b3JsZEV2ZW50czogRGV4aWUuVGFibGU8V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPlxufVxuXG5leHBvcnQgY29uc3Qgb3BlbldvcmxkRXZlbnREYiA9IGFzeW5jICgpOiBQcm9taXNlPFdvcmxkRXZlbnREYj4gPT4ge1xuICBjb25zdCBkZXhpZSA9IG5ldyBEZXhpZSgnbGxhbWEtd2FycycpXG4gIGRleGllLnZlcnNpb24oMSkuc3RvcmVzKHtcbiAgICB3b3JsZEV2ZW50czogJysrLGdhbWVJZCcsXG4gIH0pXG4gIGF3YWl0IGRleGllLm9wZW4oKVxuICByZXR1cm4gbmV3IFdvcmxkRXZlbnREYig8TGxhbWFEZXhpZT5kZXhpZSlcbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkRXZlbnREYiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGV4aWU6IExsYW1hRGV4aWVcblxuICBjb25zdHJ1Y3RvcihkZXhpZTogTGxhbWFEZXhpZSkge1xuICAgIHRoaXMuZGV4aWUgPSBkZXhpZVxuICB9XG5cbiAgcHVibGljIHN0b3JlID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCBldmVudDogV29ybGRFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGF3YWl0IHRoaXMuZGV4aWUud29ybGRFdmVudHMuYWRkKHtcbiAgICAgIGdhbWVJZCxcbiAgICAgIGV2ZW50OiBzZXJpYWxpc2VUb0pzb24oZXZlbnQpLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2V0RXZlbnRzRm9yR2FtZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8V29ybGRFdmVudFtdPiA9PiB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpLnRvQXJyYXkoKVxuICAgIHJldHVybiByZWNvcmRzLm1hcCgocmVjb3JkKSA9PiBkZXNlcmlhbGlzZUZyb21Kc29uKHJlY29yZC5ldmVudCkpXG4gIH1cblxuICBwdWJsaWMgaGFzRXZlbnRzRm9yR2FtZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHRoaXMucXVlcnlFdmVudHNCeUdhbWVJZChnYW1lSWQpLmZpcnN0KClcbiAgICByZXR1cm4gcmVjb3JkICE9PSB1bmRlZmluZWRcbiAgfVxuXG4gIHByaXZhdGUgcXVlcnlFdmVudHNCeUdhbWVJZCA9IChnYW1lSWQ6IHN0cmluZyk6IENvbGxlY3Rpb248V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPiA9PlxuICAgIHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpXG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aFxufVxuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcydcbmltcG9ydCBUZXh0RWRpdFBsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvdGV4dGVkaXQtcGx1Z2luLmpzJ1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ0xsYW1hIFdhcnMnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9LFxuXG4gIHNjZW5lOiBTY2VuZXMsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcGFyZW50OiAnZ2FtZScsXG4gIGRvbToge1xuICAgIGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gIHBsdWdpbnM6IHtcbiAgICBnbG9iYWw6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmV4VGV4dEVkaXQnLFxuICAgICAgICBwbHVnaW46IFRleHRFZGl0UGx1Z2luLFxuICAgICAgICBzdGFydDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5zZXRHYW1lU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuICBnYW1lLnNjYWxlLnJlZnJlc2goKVxufSlcbiIsImV4cG9ydCBjb25zdCBBdWRpb0tleXMgPSB7XG4gIEFUVEFDS18xOiAnYXR0YWNrMScsXG4gIEFUVEFDS18yOiAnYXR0YWNrMicsXG4gIEFUVEFDS18zOiAnYXR0YWNrMycsXG4gIERFQVRIOiAnZGVhdGgnLFxuICBXQUxLOiAnd2FsaycsXG4gIE5FV19UVVJOOiAnbmV3LXR1cm4nLFxuICBQTEFZRVJfREVGRUFURUQ6ICdwbGF5ZXItZGVmZWF0ZWQnLFxuICBQTEFZRVJfSk9JTkVEX0xPQkJZOiAncGxheWVyLWRlZmVhdGVkJyxcbiAgVklDVE9SWV9NVVNJQzogJ3ZpY3RvcnktbXVzaWMnLFxuICBDTElDSzogJ2NsaWNrJyxcbiAgU1BJVDogJ3NwaXQnLFxufVxuXG5leHBvcnQgY29uc3QgQUxMX0FVRElPX0tFWVMgPSBbXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMSxcbiAgQXVkaW9LZXlzLkFUVEFDS18yLFxuICBBdWRpb0tleXMuQVRUQUNLXzMsXG4gIEF1ZGlvS2V5cy5ERUFUSCxcbiAgQXVkaW9LZXlzLldBTEssXG4gIEF1ZGlvS2V5cy5ORVdfVFVSTixcbiAgQXVkaW9LZXlzLlBMQVlFUl9ERUZFQVRFRCxcbiAgQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlksXG4gIEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDLFxuICBBdWRpb0tleXMuQ0xJQ0ssXG4gIEF1ZGlvS2V5cy5TUElULFxuXVxuIiwiaW1wb3J0IHsgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSAnLi4vLi4vaGVscGVycydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZUlkLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNQUlOX01FTlVfU0NFTkVfS0VZIH0gZnJvbSAnLi4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBvcGVuV29ybGRFdmVudERiLCBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi8uLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBMT0JCWV9TQ0VORV9LRVksIExvYmJ5U2NlbmVEYXRhIH0gZnJvbSAnLi4vbG9iYnkvbG9iYnktc2NlbmUnXG5pbXBvcnQgRmlsZUNvbmZpZyA9IFBoYXNlci5UeXBlcy5Mb2FkZXIuRmlsZUNvbmZpZ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY29uc3QgQk9PVF9TQ0VORV9LRVkgPSAnQm9vdCdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEJPT1RfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcykgKiAwLjVcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAqIDAuNVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDBcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwXG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQsXG4gICAgICAweDAwMDAwMCxcbiAgICApXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIDEwLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCxcbiAgICAgIDB4ODg4ODg4LFxuICAgIClcblxuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNClcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlXG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMFxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlOiBGaWxlQ29uZmlnKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSlcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKVxuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpXG4gICAgICBhc3NldFRleHQuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5sYXVuY2hHYW1lKClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkQXNzZXRzKClcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoR2FtZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB1cmxJbmZvID0gZ2V0VXJsSW5mbygpXG4gICAgaWYgKHVybEluZm8pIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUdhbWUodXJsSW5mbylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydChNQUlOX01FTlVfU0NFTkVfS0VZKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUdhbWUgPSBhc3luYyAodXJsSW5mbzogVXJsSW5mbyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZCA9IHVybEluZm8uZ2FtZUlkXG4gICAgY29uc3QgcGxheWVySWQgPSB1cmxJbmZvLnBsYXllcklkXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSBhd2FpdCB3b3JsZEV2ZW50RGIuaGFzRXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlc3RvcmVHYW1lQXNTZXJ2ZXIoZ2FtZUlkLCB3b3JsZEV2ZW50RGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUNsaWVudChnYW1lSWQsIHBsYXllcklkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUNsaWVudCA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgcGxheWVySWQ6IE9wdGlvbjxQbGF5ZXJJZD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuY29ubmVjdChnYW1lSWQpXG4gICAgaWYgKHBsYXllcklkKSB7XG4gICAgICB0aGlzLnJlam9pbkFzQ2xpZW50KGNsaWVudCwgZ2FtZUlkLCBwbGF5ZXJJZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qb2luQXNDbGllbnQoY2xpZW50LCBnYW1lSWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luQXNDbGllbnQgPSBhc3luYyAoY2xpZW50OiBDbGllbnQsIGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9ID0gYXdhaXQgY2xpZW50LmpvaW4oKVxuICAgIHNldFVybEluZm8oeyBnYW1lSWQsIHBsYXllcklkIH0pXG4gICAgdGhpcy5qb2luR2FtZSh3b3JsZFN0YXRlLCBjbGllbnQsIHBsYXllcklkKVxuICB9XG5cbiAgcHJpdmF0ZSByZWpvaW5Bc0NsaWVudCA9IGFzeW5jIChjbGllbnQ6IENsaWVudCwgZ2FtZUlkOiBHYW1lSWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBhd2FpdCBjbGllbnQucmVqb2luKHBsYXllcklkKVxuICAgIHRoaXMuam9pbkdhbWUod29ybGRTdGF0ZSwgY2xpZW50LCBwbGF5ZXJJZClcbiAgfVxuXG4gIHByaXZhdGUgam9pbkdhbWUgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgY2xpZW50OiBDbGllbnQsIHBsYXllcklkOiBudW1iZXIpID0+IHtcbiAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50LCB3b3JsZFN0YXRlLCBwbGF5ZXJJZCB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQsIHdvcmxkU3RhdGUsIHBsYXllcklkIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlR2FtZUFzU2VydmVyID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHNlcnZlciA9IGF3YWl0IFNlcnZlci5yZXN0b3JlR2FtZSh3b3JsZEV2ZW50RGIsIGdhbWVJZClcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyLCB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLCBwbGF5ZXJJZDogMSB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIsIHdvcmxkU3RhdGU6IHdvcmxkU3RhdGUsIHBsYXllcklkOiAxIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQXNzZXRzKCkge1xuICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9oZXgtdGlsZXNldC1wYWNrXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsbGFtYScsICdhc3NldHMvc3ByaXRlcy9sbGFtYV8xNC5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaG91cmdsYXNzLWljb25cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2hvdXJnbGFzcycsICdhc3NldHMvc3ByaXRlcy9Ib3VyZ2xhc3MucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLXRleHR1cmVzLXRpbGVzXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy10ZXh0dXJlXG4gICAgdGhpcy5sb2FkLmltYWdlKCdncmFzcycsICdhc3NldHMvc3ByaXRlcy9ncmFzczIucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3B1ZGRsZS1jb3Jwc2VzXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzcGl0JywgJ2Fzc2V0cy9zcHJpdGVzL3B1ZGRsZV9saWdodF9ibHVlLnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50LzM3LWhpdHNwdW5jaGVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMSwgJ2Fzc2V0cy9hdWRpby9oaXQxNC5tcDMubXAzJylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18yLCAnYXNzZXRzL2F1ZGlvL2hpdDE3Lm1wMy5tcDMnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzMsICdhc3NldHMvYXVkaW8vaGl0MTgubXAzLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9tYWxlLWdydW50eWVsbGluZy1zb3VuZHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkRFQVRILCAnYXNzZXRzL2F1ZGlvLzF5ZWxsNC53YXYnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtZm9vdC1zdGVwLXNvdW5kcy15by1mcmFua2llXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5XQUxLLCAnYXNzZXRzL2F1ZGlvL3NmeF9zdGVwX2dyYXNzX2wubXAzJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3VpLXNvdW5kLWVmZmVjdHMtcGFja1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuTkVXX1RVUk4sICdhc3NldHMvYXVkaW8vTUVOVSBBX1NlbGVjdC53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSwgJ2Fzc2V0cy9hdWRpby9NRU5VIEJfU2VsZWN0LndhdicpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsICdhc3NldHMvYXVkaW8vTUVTU0FHRS1CX0RlY2xpbmUud2F2JylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvY2xlYXItc2tpZXNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsICdhc3NldHMvYXVkaW8vQ2xlYXIgU2tpZXMubXAzJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3VpLXNvdW5kLWVmZmVjdHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkNMSUNLLCAnYXNzZXRzL2F1ZGlvL2NsaWNrLndhdicpXG4gICAgLy9odHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL3R2bGF1ZGlvL3NvdW5kcy8yNjc4OTcvXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5TUElULCAnYXNzZXRzL2F1ZGlvL3NwaXQud2F2JylcbiAgfVxufVxuXG5pbnRlcmZhY2UgVXJsSW5mbyB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIHBsYXllcklkPzogUGxheWVySWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVybEluZm8gPSAoKTogT3B0aW9uPFVybEluZm8+ID0+IHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gIGlmIChoYXNoID09PSAnJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHBhdGggPSBoYXNoLnN1YnN0cigxKVxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKVxuICBjb25zdCBnYW1lSWQgPSBzZWdtZW50c1swXVxuICBjb25zdCBwbGF5ZXJJZCA9IHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoc2VnbWVudHNbMV0pIDogdW5kZWZpbmVkXG4gIHJldHVybiB7IGdhbWVJZCwgcGxheWVySWQgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0VXJsSW5mbyA9ICh1cmxJbmZvOiBVcmxJbmZvKTogdm9pZCA9PiB7XG4gIGxldCBoYXNoID0gdXJsSW5mby5nYW1lSWRcbiAgaWYgKHVybEluZm8ucGxheWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGhhc2ggKz0gJy8nICsgdXJsSW5mby5wbGF5ZXJJZFxuICB9XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaFxufVxuIiwiaW1wb3J0IENvbG9yID0gUGhhc2VyLkRpc3BsYXkuQ29sb3JcblxuZXhwb3J0IHR5cGUgQ29sb3VyU3RyaW5nID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb2xvdXJOdW1iZXIgPSBudW1iZXJcblxuZXhwb3J0IGNvbnN0IGNvbG91ck51bWJlciA9IChjb2xvdXJTdHJpbmc6IENvbG91clN0cmluZyk6IENvbG91ck51bWJlciA9PiBDb2xvci5IZXhTdHJpbmdUb0NvbG9yKGNvbG91clN0cmluZykuY29sb3JcblxuZXhwb3J0IGNvbnN0IEhFQUxUSF9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRU1QVFlfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZmZmJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRlVMTF9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM0ZGYwMzcnKVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyMwMDAwMDAnKVxuZXhwb3J0IGNvbnN0IEhPVkVSX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjY2NmZmJlJylcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZkMDgnKVxuZXhwb3J0IGNvbnN0IFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjOWRmMWU3JylcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9URVhUX0NPTE9VUiA9ICcjY2NjYzAwJ1xuZXhwb3J0IGNvbnN0IEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiA9ICcjZmZmZjAwJ1xuXG5leHBvcnQgY29uc3QgUExBWUVSX1RJTlRTID0gW1xuICAnI2ZmYmJiYicsXG4gICcjYmJiYmZmJyxcbiAgJyNiYmZmYmInLFxuICAnI2JiZmZmZicsXG4gICcjZmZmZmJiJyxcbiAgJyNmZmJiZmYnLFxuICAnI2ZmZmZmZicsXG4gICcjYmJiYmJiJyxcbl0ubWFwKGNvbG91ck51bWJlcilcbiIsImltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEF0dGFja1R5cGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgY2FuQXR0YWNrT2NjdXIgfSBmcm9tICcuLi9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY2xhc3MgQ29tYmluZWRTdGF0ZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByb3RlY3RlZCByZWFkb25seSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gIH1cblxuICBwdWJsaWMgZmluZFNlbGVjdGVkVW5pdCA9ICgpOiBPcHRpb248VW5pdD4gPT5cbiAgICB0aGlzLnNlbGVjdGVkSGV4ID8gdGhpcy5maW5kVW5pdEluTG9jYXRpb24odGhpcy5zZWxlY3RlZEhleCkgOiB1bmRlZmluZWRcblxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSGV4KCk6IE9wdGlvbjxIZXg+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICB9XG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQgJiYgdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09PSB0aGlzLnBsYXllcklkICYmIHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDYW5Nb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgaGV4OiBIZXgpOiBib29sZWFuID0+XG4gICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkgJiZcbiAgICBoZXguaXNBZGphY2VudFRvKHVuaXQubG9jYXRpb24pICYmXG4gICAgdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkgJiZcbiAgICAhdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHRoZSB1bml0IGluIHRoZSBoZXggdG8gYXR0YWNrLCBpZiBhbiBhdHRhY2sgaXMgcG9zc2libGUsIGVsc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGljIHVuaXRDYW5BdHRhY2tIZXggPSAodW5pdDogVW5pdCwgbG9jYXRpb246IEhleCwgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VW5pdCA9IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGxvY2F0aW9uKVxuICAgIGlmIChcbiAgICAgIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkgJiZcbiAgICAgIHRhcmdldFVuaXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGFyZ2V0VW5pdC5wbGF5ZXJJZCAhPT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAmJlxuICAgICAgY2FuQXR0YWNrT2NjdXIoYXR0YWNrVHlwZSwgdW5pdC5sb2NhdGlvbiwgbG9jYXRpb24pXG4gICAgKVxuICAgICAgcmV0dXJuIHRhcmdldFVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cyA9ICh1bml0SWQ/OiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT4ge1xuICAgIGNvbnN0IGNhbmRpZGF0ZVVuaXRzID0gUi5zb3J0QnkoXG4gICAgICAodW5pdCkgPT4gdW5pdC5pZCxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS5nZXRVbml0c0ZvclBsYXllcih0aGlzLnBsYXllcklkKS5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyksXG4gICAgKVxuICAgIGlmICh1bml0SWQpXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkID4gdW5pdElkKSkgPz9cbiAgICAgICAgUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCA8IHVuaXRJZCkpXG4gICAgICApXG4gICAgZWxzZSByZXR1cm4gUi5oZWFkKGNhbmRpZGF0ZVVuaXRzKVxuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGxheWVyIHdpdGggaWQgJHt0aGlzLnBsYXllcklkfWBcbiAgICByZXR1cm4gcGxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuXG5leHBvcnQgY29uc3QgY2VudGVyUG9pbnQgPSAoaGV4OiBIZXgpOiBQb2ludCA9PiAoe1xuICB4OiBoZXgueCAqIE1hdGguc3FydCgzKSArIChoZXgueSAqIE1hdGguc3FydCgzKSkgLyAyLFxuICB5OiAoaGV4LnkgKiAzKSAvIDIsXG59KVxuXG5leHBvcnQgY29uc3QgZnJvbVBvaW50ID0gKHBvaW50OiBQb2ludCk6IEhleCA9PiB7XG4gIGNvbnN0IHggPSAocG9pbnQueCAqIE1hdGguc3FydCgzKSkgLyAzIC0gcG9pbnQueSAvIDNcbiAgY29uc3QgeSA9ICgyICogcG9pbnQueSkgLyAzXG4gIHJldHVybiByb3VuZChuZXcgSGV4KHgsIHkpKVxufVxuXG5jb25zdCByb3VuZCA9IChoZXg6IEhleCk6IEhleCA9PiB7XG4gIGNvbnN0IHJ4ID0gTWF0aC5yb3VuZChoZXgueClcbiAgY29uc3QgcnkgPSBNYXRoLnJvdW5kKGhleC55KVxuICBjb25zdCByeiA9IE1hdGgucm91bmQoaGV4LnopXG5cbiAgY29uc3QgeERpZmYgPSBNYXRoLmFicyhyeCAtIGhleC54KVxuICBjb25zdCB5RGlmZiA9IE1hdGguYWJzKHJ5IC0gaGV4LnkpXG4gIGNvbnN0IHpEaWZmID0gTWF0aC5hYnMocnogLSBoZXgueSlcblxuICBpZiAoeERpZmYgPiB5RGlmZiAmJiB4RGlmZiA+IHpEaWZmKSByZXR1cm4gbmV3IEhleCgtcnkgLSByeiwgcnkpXG4gIGVsc2UgaWYgKHlEaWZmID4gekRpZmYpIHJldHVybiBuZXcgSGV4KHJ4LCAtcnggLSByeilcbiAgZWxzZSByZXR1cm4gbmV3IEhleChyeCwgcnkpXG59XG5cbmNvbnN0IGhleEFuZ2xlID0gTWF0aC5QSSAvIDNcbmNvbnN0IGhleE9mZnNldCA9IE1hdGguUEkgLyA2XG5cbmNvbnN0IGhleENvcm5lciA9IChjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIsIGk6IG51bWJlcik6IFBvaW50ID0+IHtcbiAgY29uc3QgYW5nbGVSYWRpYW5zID0gaGV4QW5nbGUgKiBpIC0gaGV4T2Zmc2V0XG4gIGNvbnN0IHggPSBjZW50ZXIueCArIHNpemUgKiBNYXRoLmNvcyhhbmdsZVJhZGlhbnMpXG4gIGNvbnN0IHkgPSBjZW50ZXIueSArIHNpemUgKiBNYXRoLnNpbihhbmdsZVJhZGlhbnMpXG4gIHJldHVybiB7IHgsIHkgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGhleENvcm5lcnMoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxQb2ludD4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHlpZWxkIGhleENvcm5lcihjZW50ZXIsIHNpemUsIGkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hcEhlaWdodCA9IChtYXA6IFdvcmxkTWFwKTogbnVtYmVyID0+IChtYXAuaGVpZ2h0ICogMykgLyAyXG5cbmV4cG9ydCBjb25zdCBoZXhXaWR0aCA9IChoZXhTaXplOiBudW1iZXIpOiBudW1iZXIgPT4gaGV4U2l6ZSAqIE1hdGguc3FydCgzKVxuIiwiaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290L2Jvb3Qtc2NlbmUnXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IExvYmJ5U2NlbmUgfSBmcm9tICcuL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBHYW1lU2NlbmUsIE1haW5NZW51U2NlbmUsIExvYmJ5U2NlbmVdXG4iLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVTY2VuZURhdGEgfSBmcm9tICcuLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgTG9iYnlEaXNwbGF5T2JqZWN0cyB9IGZyb20gJy4vbG9iYnktZGlzcGxheS1vYmplY3RzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyJ1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlZExvYmJ5U2NlbmUge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IGxvYmJ5RGlzcGxheU9iamVjdHM6IExvYmJ5RGlzcGxheU9iamVjdHNcbiAgcHJpdmF0ZSBsaXN0ZW5lcj86IFdvcmxkRXZlbnRMaXN0ZW5lclxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnQsIHBsYXllcklkOiBQbGF5ZXJJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBzZXJ2ZXJPckNsaWVudFxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZKVxuICAgIHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cyA9IHRoaXMubWFrZUxvYmJ5RGlzcGxheU9iamVjdHMoc2NlbmUsIHBsYXllcklkKVxuICAgIGlmIChzZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIENsaWVudCkge1xuICAgICAgdGhpcy5hY3RBc0NsaWVudChzZXJ2ZXJPckNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcihzZXJ2ZXJPckNsaWVudClcbiAgICB9XG4gICAgdGhpcy5zeW5jKClcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUxvYmJ5RGlzcGxheU9iamVjdHMgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgcGxheWVySWQ6IFBsYXllcklkKSA9PlxuICAgIG5ldyBMb2JieURpc3BsYXlPYmplY3RzKHNjZW5lLCBwbGF5ZXJJZCwgdGhpcy5oYW5kbGVTdGFydEdhbWUsIHRoaXMuaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSlcblxuICBwcml2YXRlIGFjdEFzQ2xpZW50ID0gKGNsaWVudDogQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChldmVudDogV29ybGRFdmVudCkgPT4gdGhpcy5oYW5kbGVXb3JsZEV2ZW50KGV2ZW50LCBjbGllbnQpXG4gICAgY2xpZW50LmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIGNsaWVudDogQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdnYW1lU3RhcnRlZCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuTkVXX1RVUk4pXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgY2xpZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG4gICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF1bmNoR2FtZVNjZW5lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZKVxuICAgICAgICB0aGlzLnN5bmMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zeW5jKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQyID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgIHNlcnZlci5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhdW5jaEdhbWVTY2VuZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSlcbiAgICAgICAgdGhpcy5zeW5jKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3luYygpXG4gICAgfVxuICB9XG4gIHByaXZhdGUgbGF1bmNoR2FtZVNjZW5lID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHtcbiAgICAgIHNlcnZlck9yQ2xpZW50OiB0aGlzLnNlcnZlck9yQ2xpZW50LFxuICAgICAgd29ybGRTdGF0ZTogdGhpcy53b3JsZFN0YXRlLFxuICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgfVxuICAgIHRoaXMuc2NlbmUuc2NlbmUuc3RhcnQoR0FNRV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSA9IChuYW1lOiBzdHJpbmcpOiB2b2lkID0+IHRoaXMuZGlzcGF0Y2hBY3Rpb24oeyB0eXBlOiAnY2hhbmdlUGxheWVyTmFtZScsIG5hbWUgfSlcblxuICBwcml2YXRlIGRpc3BhdGNoQWN0aW9uID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5zZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5zZXJ2ZXJPckNsaWVudC5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzeW5jID0gKCk6IHZvaWQgPT4gdGhpcy5sb2JieURpc3BsYXlPYmplY3RzLnN5bmModGhpcy53b3JsZFN0YXRlKVxuXG4gIHByaXZhdGUgYWN0QXNTZXJ2ZXIgPSAoc2VydmVyOiBTZXJ2ZXIpOiB2b2lkID0+IHNlcnZlci5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHRoaXMuaGFuZGxlV29ybGRFdmVudDIoZXZlbnQsIHNlcnZlcikpXG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwYXRjaEFjdGlvbih7IHR5cGU6ICdzdGFydEdhbWUnIH0pXG4gICAgdGhpcy5sYXVuY2hHYW1lU2NlbmUoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vLi4vdWkvbWVudS1idXR0b24nXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcblxuZXhwb3J0IGNsYXNzIExvYmJ5RGlzcGxheU9iamVjdHMge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBvblN0YXJ0R2FtZTogVm9pZEZ1bmN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgb25DaGFuZ2VQbGF5ZXJOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJOYW1lVGV4dHM6IE1hcDxQbGF5ZXJJZCwgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRHYW1lQnV0dG9uPzogTWVudUJ1dHRvblxuICBwcml2YXRlIHJlYWRvbmx5IHdhaXRpbmdGb3JIb3N0VGV4dD86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICBwbGF5ZXJJZDogUGxheWVySWQsXG4gICAgb25TdGFydEdhbWU6IFZvaWRGdW5jdGlvbixcbiAgICBvbkNoYW5nZVBsYXllck5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQsXG4gICkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMub25TdGFydEdhbWUgPSBvblN0YXJ0R2FtZVxuICAgIHRoaXMub25DaGFuZ2VQbGF5ZXJOYW1lID0gb25DaGFuZ2VQbGF5ZXJOYW1lXG4gICAgdGhpcy5zY2VuZS5hZGQudGV4dCgxMDAsIDUwLCAnTGxhbWEgV2FycycsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI0KVxuICAgIGlmIChwbGF5ZXJJZCA9PT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uID0gbmV3IE1lbnVCdXR0b24odGhpcy5zY2VuZSwgMTAwLCAwLCAnU3RhcnQgR2FtZScsIHRoaXMuaGFuZGxlU3RhcnRHYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMTAwLCAwLCAnV2FpdGluZyBmb3IgaG9zdCB0byBzdGFydCB0aGUgZ2FtZS4uLicpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICB0aGlzLm9uU3RhcnRHYW1lKClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCByZXF1aXJlZFBsYXllcklkcyA9IHdvcmxkU3RhdGUuZ2V0UGxheWVySWRzKClcbiAgICBjb25zdCBjdXJyZW50UGxheWVySWRzID0gQXJyYXkuZnJvbSh0aGlzLnBsYXllck5hbWVUZXh0cy5rZXlzKCkpXG4gICAgY29uc3Qgc3VycGx1c1BsYXllcklkcyA9IFIuZGlmZmVyZW5jZShjdXJyZW50UGxheWVySWRzLCByZXF1aXJlZFBsYXllcklkcylcbiAgICBmb3IgKGNvbnN0IHBsYXllcklkIG9mIHN1cnBsdXNQbGF5ZXJJZHMpIHtcbiAgICAgIHRoaXMucGxheWVyTmFtZVRleHRzLmdldChwbGF5ZXJJZCk/LmRlc3Ryb3koKVxuICAgIH1cbiAgICBjb25zdCBtaXNzaW5nUGxheWVySWRzID0gUi5kaWZmZXJlbmNlKHJlcXVpcmVkUGxheWVySWRzLCBjdXJyZW50UGxheWVySWRzKVxuICAgIGZvciAoY29uc3QgcGxheWVySWQgb2YgbWlzc2luZ1BsYXllcklkcykge1xuICAgICAgY29uc3QgcGxheWVyID0gd29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpXG4gICAgICBjb25zdCBwbGF5ZXJUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgICAgLnRleHQoMTAwLCAwLCBwbGF5ZXIubmFtZSwge1xuICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgICBmaXhlZFdpZHRoOiAyMDAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCA/ICcjMzMzMzMzJyA6ICcjMDAwMDAwJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnNldEZvbnRTaXplKDE4KVxuICAgICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgICAuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChwbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5zY2VuZS5wbHVnaW5zLmdldCgncmV4VGV4dEVkaXQnKSBhcyBhbnlcbiAgICAgICAgICAgIHBsdWdpbi5lZGl0KHBsYXllclRleHQsIHtcbiAgICAgICAgICAgICAgb25DbG9zZTogKCkgPT4gdGhpcy5vbkNoYW5nZVBsYXllck5hbWUocGxheWVyVGV4dC50ZXh0KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgdGhpcy5wbGF5ZXJOYW1lVGV4dHMuc2V0KHBsYXllcklkLCBwbGF5ZXJUZXh0KVxuICAgIH1cbiAgICBsZXQgeSA9IDEwMFxuICAgIGNvbnN0IHNvcnRlZFBsYXllcnMgPSBSLnNvcnRCeSgocGxheWVyKSA9PiBwbGF5ZXIuaWQsIHdvcmxkU3RhdGUucGxheWVycylcbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBzb3J0ZWRQbGF5ZXJzKSB7XG4gICAgICBjb25zdCBwbGF5ZXJUZXh0ID0gdGhpcy5wbGF5ZXJOYW1lVGV4dHMuZ2V0KHBsYXllci5pZClcbiAgICAgIHBsYXllclRleHQ/LnNldFRleHQocGxheWVyLm5hbWUpLnNldFkoeSlcbiAgICAgIHkgKz0gNTBcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5zZXRZKHkpXG4gICAgfVxuICAgIGlmICh0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9ySG9zdFRleHQuc2V0WSh5KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENyZWF0ZWRMb2JieVNjZW5lIH0gZnJvbSAnLi9jcmVhdGVkLWxvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgY29uc3QgTE9CQllfU0NFTkVfS0VZID0gJ0xvYmJ5J1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYmJ5U2NlbmVEYXRhIHtcbiAgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwbGF5ZXJJZDogUGxheWVySWRcbiAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxufVxuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogTE9CQllfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgTG9iYnlTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9IChzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBzZXJ2ZXJPckNsaWVudCwgcGxheWVySWQsIHdvcmxkU3RhdGUgfSA9IHNjZW5lRGF0YVxuICAgIG5ldyBDcmVhdGVkTG9iYnlTY2VuZSh0aGlzLCBzZXJ2ZXJPckNsaWVudCwgcGxheWVySWQsIHdvcmxkU3RhdGUpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21haW4tZ2FtZS9tb2RlJ1xuaW1wb3J0IHsgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIExvY2FsR2FtZVN0YXRlIHtcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG1vZGU6IE1vZGVcbiAgcmVhZG9ubHkgc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+XG4gIHJlYWRvbmx5IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwbGF5ZXJJZCxcbiAgICBtb2RlLFxuICAgIHNlbGVjdGVkSGV4LFxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSAwLFxuICB9OiB7XG4gICAgcGxheWVySWQ6IFBsYXllcklkXG4gICAgbW9kZTogTW9kZVxuICAgIHNlbGVjdGVkSGV4PzogT3B0aW9uPEhleD5cbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogbnVtYmVyXG4gIH0pIHtcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm1vZGUgPSBtb2RlXG4gICAgdGhpcy5zZWxlY3RlZEhleCA9IHNlbGVjdGVkSGV4XG4gICAgdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlclxuICAgIGFzc2VydChhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID49IDApXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgcGxheWVySWQgPSB0aGlzLnBsYXllcklkLFxuICAgIG1vZGUgPSB0aGlzLm1vZGUsXG4gICAgc2VsZWN0ZWRIZXggPSB0b01heWJlKHRoaXMuc2VsZWN0ZWRIZXgpLFxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSB0aGlzLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIsXG4gIH06IHtcbiAgICBwbGF5ZXJJZD86IFBsYXllcklkXG4gICAgbW9kZT86IE1vZGVcbiAgICBzZWxlY3RlZEhleD86IE1heWJlPEhleD5cbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogbnVtYmVyXG4gIH0gPSB7fSk6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgbmV3IExvY2FsR2FtZVN0YXRlKHsgcGxheWVySWQsIG1vZGUsIHNlbGVjdGVkSGV4OiB0b09wdGlvbihzZWxlY3RlZEhleCksIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgfSlcblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRIZXggPSAoc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+KTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgc2VsZWN0ZWRIZXg6IHRvTWF5YmUoc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldE1vZGUgPSAobW9kZTogTW9kZSk6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IG1vZGUgfSlcblxuICBwdWJsaWMgaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciArIDEgfSlcblxuICBwdWJsaWMgZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciAtIDEgfSlcbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSA9IG5ldyBMb2NhbEdhbWVTdGF0ZSh7XG4gIHBsYXllcklkOiAxLFxuICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG59KVxuIiwiaW1wb3J0IHsgTWFwRGlzcGxheU9iamVjdCB9IGZyb20gJy4vbWFwLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVuaXREaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi91bml0LWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25EaXNwYXRjaGVyLCBUZXh0c0Rpc3BsYXlPYmplY3QgfSBmcm9tICcuL3RleHRzLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQW5pbWF0aW9uU3BlYyB7XG4gIHR5cGU6ICdtb3ZlJ1xuICB1bml0SWQ6IFVuaXRJZFxuICBmcm9tOiBIZXhcbiAgdG86IEhleFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbWJhdEFuaW1hdGlvblNwZWMge1xuICB0eXBlOiAnY29tYmF0J1xuICBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlXG4gIGF0dGFja2VyOiB7XG4gICAgdW5pdElkOiBVbml0SWRcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgZGFtYWdlOiBudW1iZXJcbiAgICBraWxsZWQ6IGJvb2xlYW5cbiAgfVxuICBkZWZlbmRlcjoge1xuICAgIHVuaXRJZDogVW5pdElkXG4gICAgbG9jYXRpb246IEhleFxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAga2lsbGVkOiBib29sZWFuXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uU3BlYyA9IE1vdmVBbmltYXRpb25TcGVjIHwgQ29tYmF0QW5pbWF0aW9uU3BlY1xuXG5leHBvcnQgY2xhc3MgRGlzcGxheU9iamVjdHMge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSByZWFkb25seSBtYXBEaXNwbGF5T2JqZWN0OiBNYXBEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgcmVhZG9ubHkgdW5pdERpc3BsYXlPYmplY3RzOiBNYXA8VW5pdElkLCBVbml0RGlzcGxheU9iamVjdD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBhbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgdGV4dHNEaXNwbGF5T2JqZWN0OiBUZXh0c0Rpc3BsYXlPYmplY3RcbiAgcHJpdmF0ZSByZWFkb25seSBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICBwcml2YXRlIGlzQW5pbWF0aW5nOiBib29sZWFuID0gZmFsc2VcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgYW5pbWF0aW9uczogQW5pbWF0aW9uU3BlY1tdID0gW11cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxuICAgIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICAgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlLFxuICAgIGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyLFxuICApIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSBsb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3QgPSBuZXcgTWFwRGlzcGxheU9iamVjdChzY2VuZSwgdGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0ID0gbmV3IFRleHRzRGlzcGxheU9iamVjdChcbiAgICAgIHNjZW5lLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLFxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSxcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyLFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludDogUG9pbnQpOiB2b2lkID0+IHRoaXMubWFwRGlzcGxheU9iamVjdD8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnQpXG5cbiAgcHVibGljIGhhc0NsaWNrSGFuZGxlckZvciA9IChwb2ludDogUG9pbnQpOiBib29sZWFuID0+IHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0Lmhhc0NsaWNrSGFuZGxlckZvcihwb2ludClcblxuICBwdWJsaWMgc3luY1NjZW5lID0gKFxuICAgIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICAgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlLFxuICAgIGFuaW1hdGlvbjogT3B0aW9uPEFuaW1hdGlvblNwZWM+LFxuICApOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0Py5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0Py5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuXG4gICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb25zID0gUi5hcHBlbmQoYW5pbWF0aW9uKSh0aGlzLmFuaW1hdGlvbnMpXG4gICAgICB0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKGFuaW1hdGlvbikuZm9yRWFjaCh0aGlzLm1hbmFnZVVuaXRBc0JlaW5nQW5pbWF0ZWQpXG4gICAgICB0aGlzLnRyaWdnZXJBbmltYXRpb25zKClcbiAgICB9XG5cbiAgICB0aGlzLnN5bmNVbml0cygpXG4gIH1cblxuICBwcml2YXRlIHN5bmNVbml0cyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnJlbW92ZVVuaXREaXNwbGF5T2JqZWN0c05vTG9uZ2VyTmVlZGVkKClcbiAgICBjb25zdCB1bml0c1RvU3luYyA9IHRoaXMud29ybGRTdGF0ZS51bml0cy5maWx0ZXIoKHVuaXQpID0+ICF0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmhhcyh1bml0LmlkKSlcbiAgICBmb3IgKGNvbnN0IHVuaXQgb2YgdW5pdHNUb1N5bmMpIHtcbiAgICAgIGxldCB1bml0RGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0LmlkKVxuICAgICAgaWYgKCF1bml0RGlzcGxheU9iamVjdCkge1xuICAgICAgICB1bml0RGlzcGxheU9iamVjdCA9IG5ldyBVbml0RGlzcGxheU9iamVjdCh0aGlzLnNjZW5lLCB1bml0KVxuICAgICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdC5pZCwgdW5pdERpc3BsYXlPYmplY3QpXG4gICAgICB9XG4gICAgICB1bml0RGlzcGxheU9iamVjdC5zeW5jU2NlbmUodW5pdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVVuaXREaXNwbGF5T2JqZWN0c05vTG9uZ2VyTmVlZGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN1cnBsdXNVbml0SWRzID0gUi5kaWZmZXJlbmNlKFxuICAgICAgQXJyYXkuZnJvbSh0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5rZXlzKCkpLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC5pZCksXG4gICAgKVxuICAgIGZvciAoY29uc3QgdW5pdElkIG9mIHN1cnBsdXNVbml0SWRzKSB7XG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKT8uZGVzdHJveSgpXG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlckFuaW1hdGlvbnMgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2Nlc3NBbmltYXRpb25zKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlcXVlbmNlQW5pbWF0aW9ucyA9ICgpOiB7XG4gICAgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdzogQW5pbWF0aW9uU3BlY1tdXG4gICAgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyOiBBbmltYXRpb25TcGVjW11cbiAgfSA9PiB7XG4gICAgY29uc3QgdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucyA9IG5ldyBTZXQ8VW5pdElkPigpXG4gICAgY29uc3QgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdyA9IFtdXG4gICAgY29uc3QgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyID0gW11cbiAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiB0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgIGNvbnN0IHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uID0gdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICBjb25zdCBhZmZlY3RlZEJ5RWFybGllckFuaW1hdGlvbnMgPSBSLmFueShcbiAgICAgICAgKHVuaXRJZCkgPT4gdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucy5oYXModW5pdElkKSxcbiAgICAgICAgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24sXG4gICAgICApXG4gICAgICBpZiAoYWZmZWN0ZWRCeUVhcmxpZXJBbmltYXRpb25zKSB7XG4gICAgICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlci5wdXNoKGFuaW1hdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cucHVzaChhbmltYXRpb24pXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHVuaXRJZCBvZiB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbikge1xuICAgICAgICB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zLmFkZCh1bml0SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3csIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NBbmltYXRpb25zID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgdHJ5IHtcbiAgICAgIHdoaWxlICh0aGlzLmFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB7IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3csIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciB9ID0gdGhpcy5zZXF1ZW5jZUFuaW1hdGlvbnMoKVxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYW5pbWF0aW9uc1RvUGVyZm9ybU5vdy5tYXAodGhpcy5ydW5BbmltYXRpb24pKVxuICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBhbmltYXRpb25zVG9QZXJmb3JtTm93KSB7XG4gICAgICAgICAgdGhpcy5yZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQoYW5pbWF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRzRnJvbUJlaW5nQW5pbWF0ZWRXaGVyZU5vTG9uZ2VyTmVlZGVkID0gKGFuaW1hdGlvbjogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgIGNvbnN0IHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMgPSB0aGlzLmdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMoKVxuICAgIGNvbnN0IHVuaXRJZHNUb1JlbGVhc2UgPSBSLmRpZmZlcmVuY2UodW5pdElkc0luQW5pbWF0aW9uLCB1bml0SWRzSW5SZW1haW5pbmdBbmltYXRpb25zKVxuICAgIHVuaXRJZHNUb1JlbGVhc2UuZm9yRWFjaCh0aGlzLnJlbGVhc2VVbml0RnJvbUJlaW5nQW5pbWF0ZWQpXG4gIH1cblxuICBwcml2YXRlIG1hbmFnZVVuaXRBc0JlaW5nQW5pbWF0ZWQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZClcbiAgICBpZiAoZGlzcGxheU9iamVjdCkge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICAgIHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbGVhc2VVbml0RnJvbUJlaW5nQW5pbWF0ZWQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmICghZGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke3VuaXRJZH1gXG4gICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAodW5pdCkge1xuICAgICAgZGlzcGxheU9iamVjdC5zeW5jU2NlbmUodW5pdClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0SWQsIGRpc3BsYXlPYmplY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlPYmplY3QuZGVzdHJveSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbml0c0ludm9sdmVkSW5BbmltYXRpb25zID0gKCk6IFVuaXRJZFtdID0+IFIuY2hhaW4odGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiwgdGhpcy5hbmltYXRpb25zKVxuXG4gIHByaXZhdGUgZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24gPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogVW5pdElkW10gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICByZXR1cm4gW2FuaW1hdGlvbi51bml0SWRdXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICByZXR1cm4gW2FuaW1hdGlvbi5hdHRhY2tlci51bml0SWQsIGFuaW1hdGlvbi5kZWZlbmRlci51bml0SWRdXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBydW5BbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgc3dpdGNoIChhbmltYXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgIGF3YWl0IHRoaXMucnVuTW92ZUFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bkNvbWJhdEFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IE1vdmVBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGFuaW1hdGlvbi51bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YW5pbWF0aW9uLnVuaXRJZH1gXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5XQUxLKVxuICAgIGF3YWl0IGRpc3BsYXlPYmplY3QucnVuTW92ZUFuaW1hdGlvbihhbmltYXRpb24uZnJvbSwgYW5pbWF0aW9uLnRvKVxuICB9XG5cbiAgcHJpdmF0ZSBydW5Db21iYXRBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBDb21iYXRBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGFuaW1hdGlvblxuICAgIGNvbnN0IGF0dGFja2VyRGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGF0dGFja2VyLnVuaXRJZClcbiAgICBpZiAoIWF0dGFja2VyRGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke2F0dGFja2VyLnVuaXRJZH1gXG4gICAgY29uc3QgZGVmZW5kZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoZGVmZW5kZXIudW5pdElkKVxuICAgIGlmICghZGVmZW5kZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7ZGVmZW5kZXIudW5pdElkfWBcbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShyYW5kb21FbGVtZW50KFtBdWRpb0tleXMuQVRUQUNLXzEsIEF1ZGlvS2V5cy5BVFRBQ0tfMiwgQXVkaW9LZXlzLkFUVEFDS18zXSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuU1BJVClcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCB8fCBkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuREVBVEgpXG4gICAgfVxuICAgIGNvbnN0IHNpbXVsdGFuZW91c0FuaW1hdGlvbnM6IFByb21pc2U8dm9pZD5bXSA9IFtdXG4gICAgaWYgKGFuaW1hdGlvbi5hdHRhY2tUeXBlID09PSAnbWVsZWUnKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkF0dGFja0FuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIH0gZWxzZSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1blNwaXRBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgc2ltdWx0YW5lb3VzQW5pbWF0aW9ucy5wdXNoKGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5EZWF0aEFuaW1hdGlvbigpKVxuICAgIH1cbiAgICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKCkpXG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKHNpbXVsdGFuZW91c0FuaW1hdGlvbnMpXG4gICAgaWYgKGF0dGFja2VyLmRhbWFnZSA+IDApIGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5EYW1hZ2VBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGF0dGFja2VyLmRhbWFnZSlcbiAgICBpZiAoZGVmZW5kZXIuZGFtYWdlID4gMCkgZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihkZWZlbmRlci5sb2NhdGlvbiwgZGVmZW5kZXIuZGFtYWdlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRQb2ludHMsIG11bHRpcGx5UG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uLCB0b01heWJlIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSwgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgQUxMX0FVRElPX0tFWVMsIEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBtYXBUb0xvY2FsQWN0aW9uIH0gZnJvbSAnLi9rZXlib2FyZC1tYXBwZXInXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25Qcm9jZXNzb3IsIExvY2FsQWN0aW9uUmVzdWx0IH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQW5pbWF0aW9uU3BlYywgRGlzcGxheU9iamVjdHMgfSBmcm9tICcuL2Rpc3BsYXktb2JqZWN0cydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IFBvaW50ZXIgPSBQaGFzZXIuSW5wdXQuUG9pbnRlclxuXG5leHBvcnQgY29uc3QgR0FNRV9TQ0VORV9LRVkgPSAnR2FtZSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEdBTUVfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG4gIHBsYXllcklkOiBQbGF5ZXJJZFxuICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfU0laRSA9IDQ4XG5leHBvcnQgY29uc3QgRFJBV0lOR19PRkZTRVQgPSB7IHg6IDYwLCB5OiAxMDAgfVxuZXhwb3J0IGNvbnN0IGhleENlbnRlciA9IChoZXg6IEhleCk6IFBvaW50ID0+IGFkZFBvaW50cyhtdWx0aXBseVBvaW50KGNlbnRlclBvaW50KGhleCksIEhFWF9TSVpFKSwgRFJBV0lOR19PRkZTRVQpXG5cbmV4cG9ydCB0eXBlIEdhbWVJZCA9IHN0cmluZ1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSBzZXJ2ZXJPckNsaWVudD86IFNlcnZlciB8IENsaWVudFxuXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUgPSBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEVcblxuICBwcml2YXRlIGRpc3BsYXlPYmplY3RzPzogRGlzcGxheU9iamVjdHNcblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIC8vIENyZWF0ZVxuICAvLyAtLS0tLS1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgc2VydmVyT3JDbGllbnQsIHBsYXllcklkLCB3b3JsZFN0YXRlIH0gPSBzY2VuZURhdGFcbiAgICB0aGlzLnNldFVwU291bmQoKVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFLmNvcHkoeyBwbGF5ZXJJZCB9KVxuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBzZXJ2ZXJPckNsaWVudFxuICAgIGlmIChzZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcihzZXJ2ZXJPckNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RBc0NsaWVudChzZXJ2ZXJPckNsaWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzID0gbmV3IERpc3BsYXlPYmplY3RzKHRoaXMsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSwgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbilcbiAgICB0aGlzLnVwZGF0ZUFzQXRTdGFydE9mVHVybigpXG4gICAgdGhpcy5zZXRVcElucHV0cygpXG4gIH1cblxuICBwcml2YXRlIHNldFVwU291bmQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zb3VuZC5wYXVzZU9uQmx1ciA9IGZhbHNlXG4gICAgQUxMX0FVRElPX0tFWVMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLnNvdW5kLmFkZChrZXkpKVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9IChhbmltYXRpb24/OiBBbmltYXRpb25TcGVjKTogdm9pZCA9PlxuICAgIHRoaXMuZGlzcGxheU9iamVjdHM/LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIGFuaW1hdGlvbilcblxuICAvLyBOZXR3b3JraW5nXG4gIC8vIC0tLS0tLS0tLS1cblxuICBwcml2YXRlIGFjdEFzQ2xpZW50ID0gKGNsaWVudDogQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgdGhpcy5zZXJ2ZXJPckNsaWVudCA9IGNsaWVudFxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnQpXG4gIH1cblxuICBwcml2YXRlIGFjdEFzU2VydmVyID0gKHNlcnZlcjogU2VydmVyKTogdm9pZCA9PiB7XG4gICAgc2VydmVyLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlV29ybGRFdmVudClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXIud29ybGRTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luY1NlbmRUb1NlcnZlciA9IGFzeW5jIChhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCF0aGlzLnNlcnZlck9yQ2xpZW50KSB7XG4gICAgICB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIHNlcnZlck9yQ2xpZW50YFxuICAgIH1cbiAgICBpZiAodGhpcy5zZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5zZXJ2ZXJPckNsaWVudC5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIC8vIElucHV0IGhhbmRsZXJzXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBzZXRVcElucHV0cyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmlucHV0Lm1vdXNlLmRpc2FibGVDb250ZXh0TWVudSgpXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5KVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bilcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uID0gbWFwVG9Mb2NhbEFjdGlvbihldmVudCwgdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlKVxuICAgIGlmIChsb2NhbEFjdGlvbikgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbihsb2NhbEFjdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTG9jYWxBY3Rpb24gPSAobG9jYWxBY3Rpb246IExvY2FsQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb25Qcm9jZXNzb3IgPSBuZXcgTG9jYWxBY3Rpb25Qcm9jZXNzb3IodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsQWN0aW9uUHJvY2Vzc29yLnByb2Nlc3MobG9jYWxBY3Rpb24pXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5lbmFjdExvY2FsQWN0aW9uUmVzdWx0KHJlc3VsdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVuYWN0TG9jYWxBY3Rpb25SZXN1bHQgPSAocmVzdWx0OiBMb2NhbEFjdGlvblJlc3VsdCk6IHZvaWQgPT4ge1xuICAgIGlmIChyZXN1bHQubmV3TG9jYWxHYW1lU3RhdGUpIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSByZXN1bHQubmV3TG9jYWxHYW1lU3RhdGVcbiAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICB9XG4gICAgaWYgKHJlc3VsdC53b3JsZEFjdGlvbikge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICAgIHRoaXMuYXN5bmNTZW5kVG9TZXJ2ZXIocmVzdWx0LndvcmxkQWN0aW9uKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9pbnRlclBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cz8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyRG93biA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGVzZSBhcyB0aGV5IGhhdmUgdGhlaXIgb3duIGhhbmRsZXJzXG4gICAgY29uc3QgcHJlc3NlZFBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdHM/Lmhhc0NsaWNrSGFuZGxlckZvcihwcmVzc2VkUG9pbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocHJlc3NlZFBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHBvaW50ZXIuYnV0dG9uID09PSAyKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2dvSGV4JywgaGV4IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlTGVmdENsaWNrKGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4ID0gKGhleDogSGV4KTogTG9jYWxBY3Rpb24gPT4ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdEhleCcsIGhleCB9XG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZU1vdmUnLCB1bml0SWQ6IG1vZGUudW5pdElkLCBoZXggfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2NvbXBsZXRlQXR0YWNrJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4LCBhdHRhY2tUeXBlOiBtb2RlLmF0dGFja1R5cGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTGVmdENsaWNrID0gKGhleDogSGV4KTogdm9pZCA9PiB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHRoaXMuZ2V0TG9jYWxBY3Rpb25Gb3JDbGlja2luZ0FIZXgoaGV4KSlcblxuICAvLyBTeW5jXG4gIC8vIC0tLS1cblxuICAvLyBIYW5kbGUgd29ybGQgZXZlbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBvbGRXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudChvbGRXb3JsZFN0YXRlLCBldmVudClcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgY2FzZSAncGxheWVyQ2hhbmdlZE5hbWUnOlxuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgICAgdGhpcy5oYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50KGV2ZW50LCBvbGRXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21iYXRXb3JsZEV2ZW50KGV2ZW50LCBvbGRXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRW5kZWRUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJFbmRlZFR1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckRlZmVhdGVkKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcihldmVudClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZU5ld1R1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR2FtZU92ZXIgPSAoZXZlbnQ6IEdhbWVPdmVyV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC52aWN0b3IgPT09IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWQpIHtcbiAgICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuVklDVE9SWV9NVVNJQylcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJEZWZlYXRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZygnUGxheWVyIGRlZmVhdGVkJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpLmRlZmVhdGVkKVxuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVEKVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3VHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMudXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKCkge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogdG9NYXliZSh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKSxcbiAgICB9KVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudCA9IChldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCwgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBjb25zdCB3YXNQcmV2aW91c2x5U2VsZWN0ZWQgPVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCAmJlxuICAgICAgb2xkV29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCk/LmlkID09PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayh1bml0SWQsIHRvKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgc2VsZWN0ZWRIZXg6IHRvTWF5YmUobmV3U2VsZWN0ZWRIZXgpLFxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoeyB0eXBlOiAnbW92ZScsIHVuaXRJZCwgZnJvbSwgdG8gfSlcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sgPSAodW5pdElkOiBVbml0SWQsIGRlZmF1bHRMb2NhdGlvbjogSGV4KTogT3B0aW9uPEhleD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICAvLyBSZXRhaW4gc2VsZWN0aW9uIGlmIHVuaXQgc3RpbGwgZXhpc3RzIGFuZCB3ZSBzdGlsbCBoYXZlIGFjdGlvbiBwb2ludHMsIGVsc2Ugc2VsZWN0IG5leHQgdW5pdCAob3Igbm90aGluZyBpZiB0aGVyZSBpc24ndCBvbmUpXG4gICAgbGV0IG5ld1NlbGVjdGVkSGV4XG4gICAgaWYgKCF1bml0IHx8IHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIGNvbnN0IG5leHRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHVuaXRJZClcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gbmV4dFVuaXQ/LmxvY2F0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gZGVmYXVsdExvY2F0aW9uXG4gICAgfVxuICAgIHJldHVybiBuZXdTZWxlY3RlZEhleFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21iYXRXb3JsZEV2ZW50ID0gKGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50LCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdChhdHRhY2tlciwgZGVmZW5kZXIsIG9sZFdvcmxkU3RhdGUpXG4gICAgdGhpcy5zeW5jU2NlbmUoe1xuICAgICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgICBhdHRhY2tUeXBlOiBldmVudC5hdHRhY2tUeXBlLFxuICAgICAgYXR0YWNrZXIsXG4gICAgICBkZWZlbmRlcixcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdCA9IChcbiAgICBhdHRhY2tlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIGRlZmVuZGVyOiBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gICAgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkVW5pdElkID0gbmV3IENvbWJpbmVkU3RhdGUob2xkV29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSkuZmluZFNlbGVjdGVkVW5pdCgpPy5pZFxuICAgIGlmIChwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgPT09IGF0dGFja2VyLnVuaXRJZCAmJiBhdHRhY2tlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKGF0dGFja2VyLnVuaXRJZCwgYXR0YWNrZXIubG9jYXRpb24pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICAgICAgICBzZWxlY3RlZEhleDogdG9NYXliZShuZXdTZWxlY3RlZEhleCksXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZXNlbGVjdCB1bml0IGtpbGxlZCBieSBhbm90aGVyIHBsYXllclxuICAgICAgaWYgKGRlZmVuZGVyLmtpbGxlZCAmJiBkZWZlbmRlci51bml0SWQgPT09IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCAmJiBkZWZlbmRlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgICAgc2VsZWN0ZWRIZXg6IG5vdGhpbmcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2EnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnbWVsZWUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncyc6XG4gICAgICBpZiAobW9kZS50eXBlID09PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9XG4gICAgICBicmVha1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tUeXBlLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleCwgYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3ROZXh0VW5pdCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgY29uc3QgdW5pdFRvU2VsZWN0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHNlbGVjdGVkVW5pdD8uaWQpXG4gICAgaWYgKHVuaXRUb1NlbGVjdCkge1xuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgICAgIC5zZXRTZWxlY3RlZEhleCh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKVxuICAgICAgICAuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2VsZWN0ZWRIZXg6IG5vdGhpbmcgfSkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleCkgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgsICdtZWxlZScpXG4gICAgICBpZiAodGFyZ2V0VW5pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoJ21lbGVlJywgc2VsZWN0ZWRVbml0LCB0YXJnZXRVbml0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNrSGV4ID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGF0dGFja2VyOiBVbml0LCBkZWZlbmRlcjogVW5pdCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyOiB7IHVuaXRJZDogYXR0YWNrZXIuaWQsIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbiB9LFxuICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uIH0sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicsIHR1cm46IHRoaXMud29ybGRTdGF0ZS50dXJuIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAodW5pdCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQsIGF0dGFja1R5cGUgfVxuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9ICh1bml0SWQ6IFVuaXRJZCwgZGVzdGluYXRpb246IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbikpIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAoXG4gICAgdW5pdElkOiBVbml0SWQsXG4gICAgdGFyZ2V0SGV4OiBIZXgsXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCwgYXR0YWNrVHlwZSlcbiAgICBpZiAoZGVmZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tUeXBlLCBhdHRhY2tlciwgZGVmZW5kZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bmRlZmluZWQpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgZnJvbVBvaW50LCBoZXhDb3JuZXJzIH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgSE9WRVJfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIsXG59IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgUG9seWdvbiA9IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uLy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbnR5cGUgVGlsZVN0YXRlID0gJ2RlZmF1bHQnIHwgJ3NlbGVjdGVkJyB8ICd0YXJnZXRhYmxlJ1xuXG5leHBvcnQgY2xhc3MgTWFwRGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBoZXhQb2x5Z29uczogTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+ID0gbmV3IE1hcDxzdHJpbmcsIFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uPigpXG4gIHByaXZhdGUgcHJldmlvdXNIb3ZlckhleD86IEhleFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuY3JlYXRlSGV4KGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhleCA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBvbHlnb25DZW50ZXIgPSBoZXhDZW50ZXIoaGV4KVxuICAgIHRoaXMuc2NlbmUuYWRkLmltYWdlKHBvbHlnb25DZW50ZXIueCwgcG9seWdvbkNlbnRlci55LCAnZ3Jhc3MnKS5zZXRTY2FsZSgwLjY1KS5zZXREZXB0aCgtNSlcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKS5zZXRPcmlnaW4oMCwgMCkuc2V0RmlsbFN0eWxlKDB4MDAwMDAsIDApXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUoaGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIERlcHRoc1xuICAvLyAtNSAtIGltYWdlXG4gIC8vIC00IC0gZGVmYXVsdCBib3JkZXJcbiAgLy8gLTMgLSB0YXJnZXRhYmxlIGJvcmRlclxuICAvLyAtMiAtIHNlbGVjdGVkXG4gIC8vIC0xIC0gaG92ZXJcblxuICBwcml2YXRlIGdldERlcHRoID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogbnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiAtNFxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiAtM1xuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gLTJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNUaWxlID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldFN0cm9rZVN0eWxlKDMsIHRoaXMuZ2V0SGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpLnNldERlcHRoKHRoaXMuZ2V0RGVwdGgodGlsZVN0YXRlKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHRocm93IGBObyBwb2x5Z29uIGZvdW5kIGZvciAke2hleH1gXG4gICAgcmV0dXJuIHBvbHlnb25cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGlsZVN0YXRlID0gKGhleDogSGV4KTogVGlsZVN0YXRlID0+IHtcbiAgICBjb25zdCB7IHBsYXllcklkLCBzZWxlY3RlZEhleCwgbW9kZSB9ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZVxuICAgIGlmIChzZWxlY3RlZEhleCAmJiBzZWxlY3RlZEhleC5lcXVhbHMoaGV4KSkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PT0gJ21vdmVVbml0Jykge1xuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXgpICYmICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpKSB7XG4gICAgICAgIHJldHVybiAndGFyZ2V0YWJsZSdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PT0gJ2F0dGFjaycpIHtcbiAgICAgIGlmIChzZWxlY3RlZEhleCAmJiBjYW5BdHRhY2tPY2N1cihtb2RlLmF0dGFja1R5cGUsIGhleCwgc2VsZWN0ZWRIZXgpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgIT09IHBsYXllcklkKSB7XG4gICAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4Qm9yZGVyQ29sb3VyID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3ZlckhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gSE9WRVJfVElMRV9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocG9pbnRlclBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlckhleCAmJiB0aGlzLnByZXZpb3VzSG92ZXJIZXguZXF1YWxzKGhleCkpIHJldHVyblxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXgpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUodGhpcy5wcmV2aW91c0hvdmVySGV4KVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleClcbiAgICAgICAgLnNldFN0cm9rZVN0eWxlKHRpbGVTdGF0ZSA9PT0gJ2RlZmF1bHQnID8gMiA6IDQsIHRoaXMuZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIodGlsZVN0YXRlKSlcbiAgICAgICAgLnNldERlcHRoKC0xKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gaGV4XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBoZXhXaWR0aCwgbWFwSGVpZ2h0IH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgQUNUSU9OX1RFWFRfQ09MT1VSLCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBEUkFXSU5HX09GRlNFVCwgSEVYX1NJWkUgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5cbmV4cG9ydCB0eXBlIExvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IChhY3Rpb246IExvY2FsQWN0aW9uKSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB2aWN0b3J5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZExvZ1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2NlbmUuYWRkXG4gICAgICAuaW1hZ2UoMzYsIDMyLCAnbGxhbWEnKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1tsb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMucGxheWVyVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoNzAsIDIwLCAnJylcbiAgICB0aGlzLmhvdXJnbGFzcyA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDg3NSwgMzAsICdob3VyZ2xhc3MnKS5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgIERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLFxuICAgICAgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksXG4gICAgICAnJyxcbiAgICApXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDI1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDUwLCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQzID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDc1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQzQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQzLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDcwMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksICcnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbmRUdXJuJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZGVmZWF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIChtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSkgLyAyLCAnWW91IGhhdmUgYmVlbiBkZWZlYXRlZCEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy52aWN0b3J5VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIDMwLCAnVmljdG9yeSEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy53b3JsZExvZ1RleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDk2MCwgNTAsICcnKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0Q2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnYWJvcnQnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQyQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdtZWxlZScgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQzQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0IG9mIFt0aGlzLmVuZFR1cm5UZXh0LCB0aGlzLmFjdGlvblRleHQsIHRoaXMuYWN0aW9uVGV4dDIsIHRoaXMuYWN0aW9uVGV4dDNdKVxuICAgICAgaWYgKGdhbWVPYmplY3QuZ2V0Qm91bmRzKCkuY29udGFpbnMocG9pbnQueCwgcG9pbnQueSkpIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpXG4gICAgdGhpcy5ob3VyZ2xhc3Muc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID4gMClcbiAgICB0aGlzLnBsYXllclRleHQuc2V0VGV4dChgJHtwbGF5ZXIubmFtZX0gLSBUdXJuICR7dGhpcy53b3JsZFN0YXRlLnR1cm59YClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0My5zZXRUZXh0KCcnKVxuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5zeW5jU2VsZWN0SGV4TW9kZVRleHQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLnN5bmNNb3ZlVW5pdE1vZGVUZXh0KG1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zeW5jQXR0YWNrTW9kZVRleHQobW9kZS51bml0SWQsIG1vZGUuYXR0YWNrVHlwZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgICBpZiAocGxheWVyLmVuZGVkVHVybikge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdXYWl0aW5nIGZvciBuZXh0IHR1cm4uLi4nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ0VuZCBUdXJuIChTaGlmdCArIEVudGVyKScpXG4gICAgfVxuICAgIHRoaXMuZGVmZWF0VGV4dC5zZXRWaXNpYmxlKHBsYXllci5kZWZlYXRlZClcbiAgICB0aGlzLnZpY3RvcnlUZXh0LnNldFZpc2libGUod29ybGRTdGF0ZS5nYW1lT3ZlckluZm8/LnZpY3RvciA9PT0gcGxheWVyLmlkKVxuICAgIHRoaXMud29ybGRMb2dUZXh0LnNldFRleHQoUi50YWtlTGFzdCgzMCwgdGhpcy53b3JsZFN0YXRlLndvcmxkTG9nKS5qb2luKCdcXG4nKSlcbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkLCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoYENsaWNrIHVuaXQgdG8gJHthdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFjaycgOiAnc3BpdCd9IChvciBFU0MgdG8gY2FuY2VsKWApXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJ1NwaXQgKHMpJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllck5hbWUgPSAocGxheWVySWQ6IFBsYXllcklkKTogc3RyaW5nID0+IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpLm5hbWVcblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBsYXllcklkLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9ID0gdW5pdFxuICAgIGNvbnN0IHBsYXllck5hbWUgPSB0aGlzLmdldFBsYXllck5hbWUocGxheWVySWQpXG4gICAgcmV0dXJuIGAke25hbWV9IC0gTGxhbWEgd2FycmlvciAtICR7cGxheWVyTmFtZX0gLSBIUCAke2hpdFBvaW50cy5jdXJyZW50fS8ke2hpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke2FjdGlvblBvaW50cy5jdXJyZW50fS8ke2FjdGlvblBvaW50cy5tYXh9YFxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IGhleENlbnRlciB9IGZyb20gJy4vZ2FtZS1zY2VuZSdcbmltcG9ydCB7IEhFQUxUSF9CT1JERVJfQ09MT1VSLCBIRUFMVEhfRU1QVFlfQ09MT1VSLCBIRUFMVEhfRlVMTF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBhZGRQb2ludHMsIGRpc3RhbmNlQmV0d2VlblBvaW50cywgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IHBsYXlUd2VlbiB9IGZyb20gJy4uLy4uL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcblxuY29uc3QgSEVBTFRIX0JBUl9XSURUSCA9IDUwXG5jb25zdCBIRUFMVEhfQkFSX0hFSUdIVCA9IDEyXG5jb25zdCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MgPSAyXG5jb25zdCBJTUFHRV9PRkZTRVQgPSB7IHg6IDAsIHk6IDQgfVxuY29uc3QgSEVBTFRIX0JBUl9PRkZTRVQgPSB7IHg6IC0yNSwgeTogLTQwIH1cblxuZXhwb3J0IGNsYXNzIFVuaXREaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgdW5pdDogVW5pdFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhCYXJHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzXG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgdW5pdDogVW5pdCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICB0aGlzLmltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIDAsICdsbGFtYScpLnNldFNjYWxlKDAuOCkuc2V0VGludCh0aGlzLmdldFBsYXllclRpbnQodGhpcy51bml0LnBsYXllcklkKSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzID0gc2NlbmUuYWRkLmdyYXBoaWNzKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyVGludCA9IChwbGF5ZXJJZDogUGxheWVySWQpID0+XG4gICAgUExBWUVSX1RJTlRTWyhQTEFZRVJfVElOVFMubGVuZ3RoICsgcGxheWVySWQgLSAxKSAlIFBMQVlFUl9USU5UUy5sZW5ndGhdXG5cbiAgcHJpdmF0ZSBnZXRIZWFsdGhCYXJQb3NpdGlvbiA9IChwb2ludDogUG9pbnQpOiBQb2ludCA9PiBhZGRQb2ludHMocG9pbnQsIEhFQUxUSF9CQVJfT0ZGU0VUKVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAodW5pdDogVW5pdCk6IHZvaWQgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09PSB0aGlzLnVuaXQuaWQpXG4gICAgdGhpcy51bml0ID0gdW5pdFxuICAgIGNvbnN0IHVuaXRQb2ludCA9IGhleENlbnRlcih0aGlzLnVuaXQubG9jYXRpb24pXG4gICAgdGhpcy5pbWFnZS5zZXRQb3NpdGlvbih1bml0UG9pbnQueCArIElNQUdFX09GRlNFVC54LCB1bml0UG9pbnQueSArIElNQUdFX09GRlNFVC55KVxuICAgIHRoaXMuc3luY0hlYWx0aEJhcih1bml0UG9pbnQpXG4gIH1cblxuICBwcml2YXRlIHN5bmNIZWFsdGhCYXIgPSAodW5pdFBvaW50OiBQb2ludCkgPT4ge1xuICAgIGNvbnN0IGhlYWx0aEJhclBvc2l0aW9uID0gdGhpcy5nZXRIZWFsdGhCYXJQb3NpdGlvbih1bml0UG9pbnQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5zZXRQb3NpdGlvbihoZWFsdGhCYXJQb3NpdGlvbi54LCBoZWFsdGhCYXJQb3NpdGlvbi55KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuY2xlYXIoKVxuXG4gICAgLy8gRHJhdyBib3JkZXJcbiAgICBjb25zdCBpbm5lcldpZHRoID0gSEVBTFRIX0JBUl9XSURUSCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IEhFQUxUSF9CQVJfSEVJR0hUIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9CT1JERVJfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoMCwgMCwgSEVBTFRIX0JBUl9XSURUSCwgSEVBTFRIX0JBUl9IRUlHSFQpXG5cbiAgICAvLyBEcmF3IGVtcHR5IGJhY2tncm91bmRcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRU1QVFlfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuXG4gICAgLy8gRmlsbCBpbiBiYXJcbiAgICBjb25zdCB7IGN1cnJlbnQsIG1heCB9ID0gdGhpcy51bml0LmhpdFBvaW50c1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9GVUxMX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgKGlubmVyV2lkdGggKiBjdXJyZW50KSAvIG1heCxcbiAgICAgIGlubmVySGVpZ2h0LFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBydW5Nb3ZlQW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IE1PVkVfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwXG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogTU9WRV9BTklNQVRJT05fRFVSQVRJT04sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiBNT1ZFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBydW5EZWF0aEFuaW1hdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB0d2VlbiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiBbdGhpcy5pbWFnZSwgdGhpcy5oZWFsdGhCYXJHcmFwaGljc10sXG4gICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgYXdhaXQgcGxheVR3ZWVuKHR3ZWVuKVxuICB9XG5cbiAgcHVibGljIHJ1blNwaXRBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZnJvbVBvaW50ID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgdG9Qb2ludCA9IGhleENlbnRlcih0bylcbiAgICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlQmV0d2VlblBvaW50cyhmcm9tUG9pbnQsIHRvUG9pbnQpXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShmcm9tUG9pbnQueCwgZnJvbVBvaW50LnksICdzcGl0Jykuc2V0U2NhbGUoMC44KVxuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IGltYWdlLFxuICAgICAgeDoge1xuICAgICAgICBmcm9tOiBmcm9tUG9pbnQueCxcbiAgICAgICAgdG86IHRvUG9pbnQueCxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIGZyb206IGZyb21Qb2ludC55LFxuICAgICAgICB0bzogdG9Qb2ludC55LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiBkaXN0YW5jZSAqIDQsXG4gICAgICBlYXNlOiAnUXVhZCcsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gICAgaW1hZ2UuZGVzdHJveSgpXG4gIH1cblxuICBwdWJsaWMgcnVuRGFtYWdlQW5pbWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uOiBIZXgsIGRhbWFnZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgbG9jYXRpb25Qb2ludCA9IGhleENlbnRlcihsb2NhdGlvbilcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KGxvY2F0aW9uUG9pbnQueCwgbG9jYXRpb25Qb2ludC55LCBkYW1hZ2UudG9TdHJpbmcoKSwge1xuICAgICAgICBjb2xvcjogJyNmZjg4ODgnLFxuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAyLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNilcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgeToge1xuICAgICAgICBmcm9tOiBsb2NhdGlvblBvaW50LnkgLSA1MCxcbiAgICAgICAgdG86IGxvY2F0aW9uUG9pbnQueSAtIDc1LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgZWFzZTogJ0xpbmVhcicsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGVhc2U6ICdDdWJpYy5pbicsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICB0ZXh0LmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIHJ1bkF0dGFja0FuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2NlbmUudHdlZW5zLmtpbGxUd2VlbnNPZihbdGhpcy5oZWFsdGhCYXJHcmFwaGljcywgdGhpcy5pbWFnZV0pXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5kZXN0cm95KClcbiAgICB0aGlzLmltYWdlLmRlc3Ryb3koKVxuICB9XG59XG5cbnR5cGUgVHdlZW5YWSA9IHsgeDogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfTsgeTogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfSB9XG5cbmNvbnN0IGNhbGN1bGF0ZVR3ZWVuWFkgPSAoZnJvbTogUG9pbnQsIHRvOiBQb2ludCwgb2Zmc2V0OiBQb2ludCk6IFR3ZWVuWFkgPT4gKHtcbiAgeDoge1xuICAgIGZyb206IGZyb20ueCArIG9mZnNldC54LFxuICAgIHRvOiB0by54ICsgb2Zmc2V0LngsXG4gIH0sXG4gIHk6IHtcbiAgICBmcm9tOiBmcm9tLnkgKyBvZmZzZXQueSxcbiAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICB9LFxufSlcbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL21lbnUtYnV0dG9uJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiB9IGZyb20gJy4uLy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBzZXRVcmxJbmZvIH0gZnJvbSAnLi4vYm9vdC9ib290LXNjZW5lJ1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lEIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgY29uc3QgTUFJTl9NRU5VX1NDRU5FX0tFWSA9ICdNYWluTWVudSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IE1BSU5fTUVOVV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNClcbiAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdIb3N0IEdhbWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5oYW5kbGVIb3N0R2FtZSgpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSG9zdEdhbWUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRFdmVudERiID0gYXdhaXQgb3BlbldvcmxkRXZlbnREYigpXG4gICAgY29uc3QgZ2FtZUlkOiBHYW1lSWQgPSB1dWlkKClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IEhPU1RfUExBWUVSX0lEXG4gICAgY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgSU5JVElBTF9XT1JMRF9TVEFURSwgMClcbiAgICBzZXJ2ZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCB7IHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IElOSVRJQUxfV09STERfU1RBVEUgfSlcbiAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkIH0pXG4gICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciwgd29ybGRTdGF0ZTogc2VydmVyLndvcmxkU3RhdGUsIHBsYXllcklkOiBwbGF5ZXJJZCB9XG4gICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlQb2ludCA9IChwb2ludDogUG9pbnQsIG46IG51bWJlcik6IFBvaW50ID0+ICh7IHg6IHBvaW50LnggKiBuLCB5OiBwb2ludC55ICogbiB9KVxuXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHtcbiAgeDogcG9pbnQxLnggLSBwb2ludDIueCxcbiAgeTogcG9pbnQxLnkgLSBwb2ludDIueSxcbn0pXG5cbmNvbnN0IHNxdWFyZSA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4gbiAqIG5cblxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlblBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogbnVtYmVyID0+XG4gIE1hdGguc3FydChzcXVhcmUocG9pbnQxLnggLSBwb2ludDIueCkgKyBzcXVhcmUocG9pbnQxLnkgLSBwb2ludDIueSkpXG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSwgQXR0YWNrV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgQ29tYmF0V29ybGRFdmVudCwgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgcmFuZG9tSW50SW5jbHVzaXZlIH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcblxuZXhwb3J0IGNvbnN0IGNhbkF0dGFja09jY3VyID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGZyb206IEhleCwgdG86IEhleCk6IGJvb2xlYW4gPT4ge1xuICBzd2l0Y2ggKGF0dGFja1R5cGUpIHtcbiAgICBjYXNlICdtZWxlZSc6XG4gICAgICByZXR1cm4gZnJvbS5pc0FkamFjZW50VG8odG8pXG4gICAgY2FzZSAnc3BpdCc6XG4gICAgICByZXR1cm4gZnJvbS5kaXN0YW5jZVRvKHRvKSA8PSAyXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IHRoaXMudmFsaWRhdGVBdHRhY2soYWN0aW9uKVxuICAgIGNvbnN0IHsgYXR0YWNrVHlwZSB9ID0gYWN0aW9uXG4gICAgY29uc3QgcmF3QXR0YWNrZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKDgsIDEyKSA6IDBcbiAgICBjb25zdCByYXdEZWZlbmRlckRhbWFnZSA9IGF0dGFja1R5cGUgPT09ICdtZWxlZScgPyByYW5kb21JbnRJbmNsdXNpdmUoMTcsIDIzKSA6IHJhbmRvbUludEluY2x1c2l2ZSg0LCA2KVxuICAgIGNvbnN0IGF0dGFja2VyRGFtYWdlID0gTWF0aC5taW4oYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQsIHJhd0F0dGFja2VyRGFtYWdlKVxuICAgIGNvbnN0IGRlZmVuZGVyRGFtYWdlID0gTWF0aC5taW4oZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQsIHJhd0RlZmVuZGVyRGFtYWdlKVxuICAgIGNvbnN0IGNvbWJhdFdvcmxkRXZlbnQgPSB0aGlzLm1ha2VDb21iYXRXb3JsZEV2ZW50KGF0dGFja1R5cGUsIGF0dGFja2VyLCBhdHRhY2tlckRhbWFnZSwgZGVmZW5kZXIsIGRlZmVuZGVyRGFtYWdlKVxuXG4gICAgbGV0IG5ld1dvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChjb21iYXRXb3JsZEV2ZW50KVxuICAgIGNvbnN0IGV2ZW50czogV29ybGRFdmVudFtdID0gW2NvbWJhdFdvcmxkRXZlbnRdXG4gICAgbGV0IG5leHRXb3JsZEV2ZW50SWQgPSB0aGlzLm5leHRXb3JsZEV2ZW50SWQgKyAxXG4gICAgaWYgKG5ld1dvcmxkU3RhdGUuaXNQbGF5ZXJEZWZlYXRlZChkZWZlbmRlci5wbGF5ZXJJZCkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5wbGF5ZXJEZWZlYXRlZEV2ZW50KG5leHRXb3JsZEV2ZW50SWQrKywgZGVmZW5kZXIucGxheWVySWQpXG4gICAgICBldmVudHMucHVzaChldmVudClcbiAgICAgIG5ld1dvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgfVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmlzUGxheWVyRGVmZWF0ZWQoYXR0YWNrZXIucGxheWVySWQpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMucGxheWVyRGVmZWF0ZWRFdmVudChuZXh0V29ybGRFdmVudElkKyssIGF0dGFja2VyLnBsYXllcklkKVxuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICBuZXdXb3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICBjb25zdCB1bmRlZmVhdGVkUGxheWVycyA9IG5ld1dvcmxkU3RhdGUucGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5kZWZlYXRlZClcbiAgICBpZiAoUi5pc0VtcHR5KHVuZGVmZWF0ZWRQbGF5ZXJzKSkge1xuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInIH0pXG4gICAgfSBlbHNlIGlmICh1bmRlZmVhdGVkUGxheWVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHZpY3RvciA9IHVuZGVmZWF0ZWRQbGF5ZXJzWzBdLmlkXG4gICAgICBldmVudHMucHVzaCh7IGlkOiBuZXh0V29ybGRFdmVudElkKyssIHR5cGU6ICdnYW1lT3ZlcicsIHZpY3RvciB9KVxuICAgIH1cbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cblxuICBwcml2YXRlIHBsYXllckRlZmVhdGVkRXZlbnQgPSAoaWQ6IFdvcmxkRXZlbnRJZCwgcGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50ID0+ICh7XG4gICAgaWQsXG4gICAgdHlwZTogJ3BsYXllckRlZmVhdGVkJyxcbiAgICBwbGF5ZXJJZDogcGxheWVySWQsXG4gIH0pXG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogeyBhdHRhY2tlcjogVW5pdDsgZGVmZW5kZXI6IFVuaXQgfSA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXJJZCA9IGFjdGlvbi5hdHRhY2tlci51bml0SWRcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXJJZClcbiAgICBpZiAoIWF0dGFja2VyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7YXR0YWNrZXJJZH1gXG4gICAgaWYgKGF0dGFja2VyLnBsYXllcklkICE9PSB0aGlzLnBsYXllcklkKSB0aHJvdyBgQ2Fubm90IGNvbnRyb2wgYW5vdGhlciBwbGF5ZXIncyB1bml0OiAke2F0dGFja2VyLmlkfWBcbiAgICBpZiAoYXR0YWNrZXIuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIGF0dGFja2BcbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uYXR0YWNrZXIubG9jYXRpb24pKSB0aHJvdyBgQXR0YWNrZXIgbm90IGluIGV4cGVjdGVkIGxvY2F0aW9uYFxuXG4gICAgY29uc3QgZGVmZW5kZXJJZCA9IGFjdGlvbi5kZWZlbmRlci51bml0SWRcbiAgICBjb25zdCBkZWZlbmRlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXJJZClcbiAgICBpZiAoIWRlZmVuZGVyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXJJZH1gXG4gICAgaWYgKGRlZmVuZGVyLnBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB0aHJvdyBgQ2Fubm90IGF0dGFjayBvd24gdW5pdGBcbiAgICBpZiAoIWRlZmVuZGVyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uZGVmZW5kZXIubG9jYXRpb24pKSB0aHJvdyBgRGVmZW5kZXIgbm90IGluIGV4cGVjdGVkIGxvY2F0aW9uYFxuXG4gICAgaWYgKCFjYW5BdHRhY2tPY2N1cihhY3Rpb24uYXR0YWNrVHlwZSwgYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgYXR0YWNrIG9mIHR5cGUgJHthY3Rpb24uYXR0YWNrVHlwZX0gYmV0d2VlbiBoZXhlcyAke2F0dGFja2VyLmxvY2F0aW9ufSB0byAke2RlZmVuZGVyLmxvY2F0aW9ufSB0b28gZmFyIGFwYXJ0YFxuICAgIHJldHVybiB7IGF0dGFja2VyLCBkZWZlbmRlciB9XG4gIH1cblxuICBwcml2YXRlIG1ha2VDb21iYXRXb3JsZEV2ZW50ID0gKFxuICAgIGF0dGFja1R5cGU6IEF0dGFja1R5cGUsXG4gICAgYXR0YWNrZXI6IFVuaXQsXG4gICAgYXR0YWNrZXJEYW1hZ2U6IG51bWJlcixcbiAgICBkZWZlbmRlcjogVW5pdCxcbiAgICBkZWZlbmRlckRhbWFnZTogbnVtYmVyLFxuICApOiBDb21iYXRXb3JsZEV2ZW50ID0+ICh7XG4gICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICB0eXBlOiAnY29tYmF0JyxcbiAgICBhdHRhY2tUeXBlLFxuICAgIGF0dGFja2VyOiB7XG4gICAgICBwbGF5ZXJJZDogYXR0YWNrZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGF0dGFja2VyLmlkLFxuICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBhdHRhY2tlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT09IGF0dGFja2VyRGFtYWdlLFxuICAgIH0sXG4gICAgZGVmZW5kZXI6IHtcbiAgICAgIHBsYXllcklkOiBkZWZlbmRlci5wbGF5ZXJJZCxcbiAgICAgIHVuaXRJZDogZGVmZW5kZXIuaWQsXG4gICAgICBsb2NhdGlvbjogZGVmZW5kZXIubG9jYXRpb24sXG4gICAgICBkYW1hZ2U6IGRlZmVuZGVyRGFtYWdlLFxuICAgICAga2lsbGVkOiBkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCA9PT0gZGVmZW5kZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgfSlcbn1cbiIsImltcG9ydCB7XG4gIEpvaW5lZFJlc3BvbnNlLFxuICBKb2luUmVxdWVzdCxcbiAgUmVqb2luZWRSZXNwb25zZSxcbiAgUmVqb2luUmVxdWVzdCxcbiAgV29ybGRBY3Rpb25SZXF1ZXN0LFxuICBXb3JsZEV2ZW50TWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBQZWVyQ2xpZW50IH0gZnJvbSAnLi9wZWVyLWNsaWVudCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3dvcmxkLXN0YXRlLW93bmVyJ1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyQ2xpZW50OiBQZWVyQ2xpZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBlZXJDbGllbnQ6IFBlZXJDbGllbnQpIHtcbiAgICB0aGlzLnBlZXJDbGllbnQgPSBwZWVyQ2xpZW50XG4gICAgcGVlckNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnRNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50TWVzc2FnZSA9IChtZXNzYWdlOiBXb3JsZEV2ZW50TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmV2ZW50KVxuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb25uZWN0ID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxDbGllbnQ+ID0+IHtcbiAgICBjb25zdCBwZWVyQ2xpZW50ID0gYXdhaXQgUGVlckNsaWVudC5jb25uZWN0KGdhbWVJZClcbiAgICByZXR1cm4gbmV3IENsaWVudChwZWVyQ2xpZW50KVxuICB9XG5cbiAgcHVibGljIHJlam9pbiA9IGFzeW5jIChwbGF5ZXJJZDogUGxheWVySWQpOiBQcm9taXNlPFdvcmxkU3RhdGU+ID0+IHtcbiAgICBjb25zdCByZWpvaW5SZXF1ZXN0OiBSZWpvaW5SZXF1ZXN0ID0geyB0eXBlOiAncmVqb2luJywgcGxheWVySWQgfVxuICAgIGNvbnN0IHJlam9pbmVkUmVzcG9uc2U6IFJlam9pbmVkUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnBlZXJDbGllbnQuc2VuZFJlcXVlc3QocmVqb2luUmVxdWVzdClcbiAgICByZXR1cm4gV29ybGRTdGF0ZS5mcm9tSnNvbihyZWpvaW5lZFJlc3BvbnNlLndvcmxkU3RhdGUpXG4gIH1cblxuICBwdWJsaWMgam9pbiA9IGFzeW5jICgpOiBQcm9taXNlPHsgcGxheWVySWQ6IFBsYXllcklkOyB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlIH0+ID0+IHtcbiAgICBjb25zdCBqb2luUmVxdWVzdDogSm9pblJlcXVlc3QgPSB7IHR5cGU6ICdqb2luJyB9XG4gICAgY29uc3Qgam9pbmVkUmVzcG9uc2U6IEpvaW5lZFJlc3BvbnNlID0gYXdhaXQgdGhpcy5wZWVyQ2xpZW50LnNlbmRSZXF1ZXN0KGpvaW5SZXF1ZXN0KVxuICAgIGNvbnN0IHBsYXllcklkID0gam9pbmVkUmVzcG9uc2UucGxheWVySWRcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihqb2luZWRSZXNwb25zZS53b3JsZFN0YXRlKVxuICAgIHJldHVybiB7IHBsYXllcklkLCB3b3JsZFN0YXRlIH1cbiAgfVxuXG4gIHB1YmxpYyBzZW5kQWN0aW9uID0gYXN5bmMgKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2U6IFdvcmxkQWN0aW9uUmVxdWVzdCA9IHtcbiAgICAgIHR5cGU6ICd3b3JsZEFjdGlvbicsXG4gICAgICBhY3Rpb246IHNlcmlhbGlzZVRvSnNvbihhY3Rpb24pLFxuICAgICAgcGxheWVySWQ6IHBsYXllcklkLFxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnBlZXJDbGllbnQuc2VuZFJlcXVlc3QobWVzc2FnZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQge1xuICBCcm9hZGNhc3RNZXNzYWdlMixcbiAgUGVlcklkLFxuICBSZXF1ZXN0SWQsXG4gIFJlcXVlc3RNZXNzYWdlMixcbiAgUmVzcG9uc2VNZXNzYWdlMixcbiAgU2VydmVyVG9DbGllbnRNZXNzYWdlMixcbn0gZnJvbSAnLi9wZWVyLXNlcnZlcidcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcbmltcG9ydCB7IG5ld1BlZXIgfSBmcm9tICcuL3BlZXItdXRpbHMnXG5cbnR5cGUgUmVzb2x2ZTxUPiA9ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBQZWVyTGlzdGVuZXIgPSAobWVzc2FnZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBQZWVyQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0c3RhbmRpbmdSZXF1ZXN0czogTWFwPFJlcXVlc3RJZCwgUmVzb2x2ZTxhbnk+PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogUGVlckxpc3RlbmVyW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25EYXRhID0gKG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZTIpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiByZWNlaXZlZCBtZXNzYWdlJylcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdyZXNwb25zZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jyb2FkY2FzdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQnJvYWRjYXN0KG1lc3NhZ2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbm5lY3QgPSAocGVlcklkOiBQZWVySWQpOiBQcm9taXNlPFBlZXJDbGllbnQ+ID0+XG4gICAgbmV3IFByb21pc2U8UGVlckNsaWVudD4oKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHBlZXIgPSBuZXdQZWVyKClcbiAgICAgIHBlZXIub24oJ2Vycm9yJywgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgIHBlZXIub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IG9wZW4nKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gcGVlci5jb25uZWN0KHBlZXJJZCwgeyByZWxpYWJsZTogdHJ1ZSB9KVxuICAgICAgICBjb25uZWN0aW9uLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IGNvbm5lY3Rpb24gb3BlbicpXG4gICAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFBlZXJDbGllbnQoY29ubmVjdGlvbilcbiAgICAgICAgICByZXNvbHZlKGNsaWVudClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICBwdWJsaWMgc2VuZFJlcXVlc3QgPSAocmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+ID0+XG4gICAgbmV3IFByb21pc2U8YW55PigocmVzb2x2ZTogUmVzb2x2ZTxhbnk+KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0TWVzc2FnZTogUmVxdWVzdE1lc3NhZ2UyID0ge1xuICAgICAgICB0eXBlOiAncmVxdWVzdCcsXG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiBzZW5kaW5nIHJlcXVlc3QnKVxuICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdE1lc3NhZ2UpXG4gICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChyZXF1ZXN0TWVzc2FnZSlcbiAgICAgIHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5zZXQocmVxdWVzdE1lc3NhZ2UuaWQsIHJlc29sdmUpXG4gICAgfSlcblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlID0gKG1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZTIpOiB2b2lkID0+IHtcbiAgICBjb25zdCByZXF1ZXN0SWQgPSBtZXNzYWdlLnJlc3BvbnNlVG9cbiAgICBjb25zdCByZXNvbHZlOiBPcHRpb248UmVzb2x2ZTxhbnk+PiA9IHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5nZXQocmVxdWVzdElkKVxuICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlKG1lc3NhZ2UucmVzcG9uc2UpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYENMSUVOVDogcmVzcG9uc2UgcmVjZWl2ZWQgZm9yIHVua25vd24gcmVxdWVzdCAke3JlcXVlc3RJZH1gKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAobWVzc2FnZTogYW55KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXIobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJyb2FkY2FzdCA9IChtZXNzYWdlOiBCcm9hZGNhc3RNZXNzYWdlMik6IHZvaWQgPT4ge1xuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKG1lc3NhZ2UuYm9keSlcbiAgfVxufVxuIiwiaW1wb3J0IFBlZXIgPSByZXF1aXJlKCdwZWVyanMnKVxuaW1wb3J0IHsgbmV3UGVlciB9IGZyb20gJy4vcGVlci11dGlscydcblxuZXhwb3J0IHR5cGUgUGVlcklkID0gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RJZCA9IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RNZXNzYWdlMiB7XG4gIHR5cGU6ICdyZXF1ZXN0J1xuICBpZDogUmVxdWVzdElkXG4gIHJlcXVlc3Q6IGFueVxufVxuXG5leHBvcnQgdHlwZSBDbGllbnRUb1NlcnZlck1lc3NhZ2UyID0gUmVxdWVzdE1lc3NhZ2UyXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VNZXNzYWdlMiB7XG4gIHR5cGU6ICdyZXNwb25zZSdcbiAgcmVzcG9uc2VUbzogUmVxdWVzdElkXG4gIHJlc3BvbnNlOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcm9hZGNhc3RNZXNzYWdlMiB7XG4gIHR5cGU6ICdicm9hZGNhc3QnXG4gIGJvZHk6IGFueVxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UyID0gUmVzcG9uc2VNZXNzYWdlMiB8IEJyb2FkY2FzdE1lc3NhZ2UyXG5cbmV4cG9ydCBjbGFzcyBQZWVyU2VydmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyOiBQZWVyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29ubmVjdGlvbnM6IFBlZXIuRGF0YUNvbm5lY3Rpb25bXSA9IFtdXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlTWVzc2FnZTogKG1lc3NhZ2U6IGFueSkgPT4gYW55XG5cbiAgY29uc3RydWN0b3IoaWQ6IFBlZXJJZCwgaGFuZGxlTWVzc2FnZTogKG1lc3NhZ2U6IGFueSkgPT4gYW55KSB7XG4gICAgdGhpcy5oYW5kbGVNZXNzYWdlID0gaGFuZGxlTWVzc2FnZVxuICAgIHRoaXMucGVlciA9IG5ld1BlZXIoaWQpXG4gICAgdGhpcy5wZWVyLm9uKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgdGhpcy5wZWVyLm9uKCdjb25uZWN0aW9uJywgdGhpcy5oYW5kbGVOZXdDb25uZWN0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOZXdDb25uZWN0aW9uID0gKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VSVkVSOiByZWNlaXZlZCBuZXcgY29ubmVjdGlvbiBmcm9tICcgKyBjb25uZWN0aW9uLnBlZXIpXG4gICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEoY29ubmVjdGlvbikpXG4gIH1cblxuICBwdWJsaWMgYnJvYWRjYXN0ID0gKG1lc3NhZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJyb2FkY2FzdE1lc3NhZ2U6IEJyb2FkY2FzdE1lc3NhZ2UyID0geyB0eXBlOiAnYnJvYWRjYXN0JywgYm9keTogbWVzc2FnZSB9XG4gICAgZm9yIChjb25zdCBjb25uZWN0aW9uIG9mIHRoaXMuY29ubmVjdGlvbnMpIGNvbm5lY3Rpb24uc2VuZChicm9hZGNhc3RNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb25uZWN0aW9uRGF0YSA9IChjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKSA9PiAobWVzc2FnZTogQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlMik6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdTRVJWRVI6IHJlY2VpdmVkIG5ldyBtZXNzYWdlIGZyb20gJyArIGNvbm5lY3Rpb24ucGVlcilcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UucmVxdWVzdClcbiAgICBjb25zdCByZXNwb25zZU1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZTIgPSB7XG4gICAgICB0eXBlOiAncmVzcG9uc2UnLFxuICAgICAgcmVzcG9uc2VUbzogbWVzc2FnZS5pZCxcbiAgICAgIHJlc3BvbnNlLFxuICAgIH1cbiAgICBjb25uZWN0aW9uLnNlbmQocmVzcG9uc2VNZXNzYWdlKVxuICB9XG59XG4iLCJpbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5cbmV4cG9ydCBjb25zdCBuZXdQZWVyID0gKGlkPzogc3RyaW5nLCBvcHRpb25zPzogUGVlci5QZWVySlNPcHRpb24pOiBQZWVyID0+IHtcbiAgY29uc3QgX1BlZXIgPSAod2luZG93IGFzIGFueSkuUGVlciBhcyB0eXBlb2YgUGVlclxuICByZXR1cm4gbmV3IF9QZWVyKGlkLCBvcHRpb25zKVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkRXZlbnRMaXN0ZW5lciwgV29ybGRTdGF0ZU93bmVyIH0gZnJvbSAnLi93b3JsZC1zdGF0ZS1vd25lcidcbmltcG9ydCB7IFBsYXllckFkZGVkV29ybGRFdmVudCwgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgQ2xpZW50UmVxdWVzdCwgUmVqb2luUmVxdWVzdCwgV29ybGRFdmVudE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQWRkUGxheWVyV29ybGRBY3Rpb24sIFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkRXZlbnREYiB9IGZyb20gJy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBQZWVyU2VydmVyIH0gZnJvbSAnLi9wZWVyLXNlcnZlcidcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZU93bmVyOiBXb3JsZFN0YXRlT3duZXJcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYlxuICBwcml2YXRlIHJlYWRvbmx5IGdhbWVJZDogR2FtZUlkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyU2VydmVyOiBQZWVyU2VydmVyXG5cbiAgcHVibGljIGdldCB3b3JsZFN0YXRlKCk6IFdvcmxkU3RhdGUge1xuICAgIHJldHVybiB0aGlzLndvcmxkU3RhdGVPd25lci53b3JsZFN0YXRlXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlc3RvcmVHYW1lID0gYXN5bmMgKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8U2VydmVyPiA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgd29ybGRFdmVudERiLmdldEV2ZW50c0ZvckdhbWUoZ2FtZUlkKVxuICAgIGxldCB3b3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgUi5zb3J0QnkoKGV2ZW50KSA9PiBldmVudC5pZCwgZXZlbnRzKSkge1xuICAgICAgd29ybGRTdGF0ZSA9IHdvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTZXJ2ZXIod29ybGRFdmVudERiLCBnYW1lSWQsIHdvcmxkU3RhdGUsIGV2ZW50cy5sZW5ndGggKyAxKVxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIGxpc3RlbmVyKGV2ZW50KVxuICB9XG5cbiAgY29uc3RydWN0b3Iod29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIsIGdhbWVJZDogR2FtZUlkLCB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkRXZlbnREYiA9IHdvcmxkRXZlbnREYlxuICAgIHRoaXMuZ2FtZUlkID0gZ2FtZUlkXG4gICAgdGhpcy5wZWVyU2VydmVyID0gbmV3IFBlZXJTZXJ2ZXIodGhpcy5nYW1lSWQsIHRoaXMuaGFuZGxlQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlKVxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyID0gbmV3IFdvcmxkU3RhdGVPd25lcih3b3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkKVxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmFkZExpc3RlbmVyKChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gICAgICB0aGlzLndvcmxkRXZlbnREYi5zdG9yZSh0aGlzLmdhbWVJZCwgZXZlbnQpXG4gICAgICBjb25zdCBtZXNzYWdlOiBXb3JsZEV2ZW50TWVzc2FnZSA9IHsgdHlwZTogJ3dvcmxkRXZlbnQnLCBldmVudDogc2VyaWFsaXNlVG9Kc29uKGV2ZW50KSB9XG4gICAgICB0aGlzLnBlZXJTZXJ2ZXIuYnJvYWRjYXN0KG1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50Sm9pbiA9ICgpOiBhbnkgPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIC8vIFRPRE86IHRlbGwgdGhlIGNsaWVudCBcImJhZCBsdWNrXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWRkUGxheWVyQWN0aW9uOiBBZGRQbGF5ZXJXb3JsZEFjdGlvbiA9IHsgdHlwZTogJ2FkZFBsYXllcicgfVxuICAgICAgY29uc3QgcGxheWVyQWRkZWRFdmVudCA9IDxQbGF5ZXJBZGRlZFdvcmxkRXZlbnQ+dGhpcy5oYW5kbGVBY3Rpb24oMSwgYWRkUGxheWVyQWN0aW9uKVswXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2pvaW5lZCcsXG4gICAgICAgIHBsYXllcklkOiBwbGF5ZXJBZGRlZEV2ZW50LnBsYXllcklkLFxuICAgICAgICB3b3JsZFN0YXRlOiB0aGlzLndvcmxkU3RhdGUudG9Kc29uKCksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRSZWpvaW4gPSAobWVzc2FnZTogUmVqb2luUmVxdWVzdCk6IGFueSA9PiB7XG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgIGlmICh3b3JsZFN0YXRlLmlzVmFsaWRQbGF5ZXJJZChtZXNzYWdlLnBsYXllcklkKSlcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdyZWpvaW5lZCcsXG4gICAgICAgIHdvcmxkU3RhdGU6IHdvcmxkU3RhdGUudG9Kc29uKCksXG4gICAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBUT0RPOiB0ZWxsIHRoZSBjbGllbnQgbm9cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSA9IChtZXNzYWdlOiBDbGllbnRSZXF1ZXN0KTogYW55ID0+IHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdqb2luJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2xpZW50Sm9pbigpXG4gICAgICBjYXNlICdyZWpvaW4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDbGllbnRSZWpvaW4obWVzc2FnZSlcbiAgICAgIGNhc2UgJ3dvcmxkQWN0aW9uJzpcbiAgICAgICAgdGhpcy53b3JsZFN0YXRlT3duZXIuaGFuZGxlQWN0aW9uKG1lc3NhZ2UucGxheWVySWQsIGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5hY3Rpb24pKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUFjdGlvbiA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT5cbiAgICB0aGlzLndvcmxkU3RhdGVPd25lci5oYW5kbGVBY3Rpb24ocGxheWVySWQsIGFjdGlvbilcbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBBdHRhY2tXb3JsZEFjdGlvbixcbiAgQ2hhbmdlUGxheWVyTmFtZVdvcmxkQWN0aW9uLFxuICBFbmRUdXJuV29ybGRBY3Rpb24sXG4gIEluaXRpYWxpc2VXb3JsZEFjdGlvbixcbiAgTW92ZVVuaXRXb3JsZEFjdGlvbixcbiAgV29ybGRBY3Rpb24sXG59IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQge1xuICBHYW1lU3RhcnRlZFdvcmxkRXZlbnQsXG4gIEluaXRpYWxpc2VXb3JsZEV2ZW50LFxuICBOZXdUdXJuV29ybGRFdmVudCxcbiAgUGxheWVyQWRkZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQsXG4gIFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRHZW5lcmF0b3IgfSBmcm9tICcuL3dvcmxkLWdlbmVyYXRvcidcbmltcG9ydCB7IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlciB9IGZyb20gJy4vYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY2xhc3MgV29ybGRBY3Rpb25IYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHByaXZhdGUgcmVhZG9ubHkgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgcGxheWVySWQ6IFBsYXllcklkLCBuZXh0V29ybGRFdmVudElkOiBudW1iZXIpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGNhbGN1bGF0ZVdvcmxkRXZlbnRzID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IHRoaXMuY2FsY3VsYXRlU3BlY2lmaWNXb3JsZEV2ZW50cyhhY3Rpb24pXG4gICAgcmV0dXJuIHRoaXMuYWRkTmV3VHVybklmTmVlZGVkKGV2ZW50cylcbiAgfVxuXG4gIHByaXZhdGUgYWRkTmV3VHVybklmTmVlZGVkKGV2ZW50czogV29ybGRFdmVudFtdKSB7XG4gICAgY29uc3QgbGFzdEV2ZW50ID0gUi5sYXN0KGV2ZW50cylcbiAgICBpZiAobGFzdEV2ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnRzKGV2ZW50cylcbiAgICAgIGlmIChuZXdXb3JsZFN0YXRlLmNhbkFueVBsYXllckFjdCgpIHx8IG5ld1dvcmxkU3RhdGUudW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBldmVudHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRXb3JsZEV2ZW50SWQgPSBsYXN0RXZlbnQuaWQgKyAxXG4gICAgICAgIGNvbnN0IG5ld1R1cm5FdmVudDogTmV3VHVybldvcmxkRXZlbnQgPSB7IGlkOiBuZXh0V29ybGRFdmVudElkLCB0eXBlOiAnbmV3VHVybicgfVxuICAgICAgICByZXR1cm4gUi5hcHBlbmQobmV3VHVybkV2ZW50LCBldmVudHMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTcGVjaWZpY1dvcmxkRXZlbnRzID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVJbml0aWFsaXNlKGFjdGlvbilcbiAgICAgIGNhc2UgJ2FkZFBsYXllcic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFkZFBsYXllcigpXG4gICAgICBjYXNlICdjaGFuZ2VQbGF5ZXJOYW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2hhbmdlUGxheWVyTmFtZShhY3Rpb24pXG4gICAgICBjYXNlICdzdGFydEdhbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTdGFydEdhbWUoKVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXR0YWNrKGFjdGlvbilcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZVVuaXQoYWN0aW9uKVxuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVuZFR1cm4oYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5pdGlhbGlzZSA9IChhY3Rpb246IEluaXRpYWxpc2VXb3JsZEFjdGlvbik6IFtJbml0aWFsaXNlV29ybGRFdmVudF0gPT4ge1xuICAgIGlmICh0aGlzLm5leHRXb3JsZEV2ZW50SWQgPiAwKSB7XG4gICAgICB0aHJvdyBgQ2FuIG9ubHkgaW5pdGlhbGlzZSBhcyB0aGUgZmlyc3QgZXZlbnRgXG4gICAgfVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAnaW5pdGlhbGlzZScsIHN0YXRlOiBhY3Rpb24uc3RhdGUgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWRkUGxheWVyID0gKCk6IFtQbGF5ZXJBZGRlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1BsYXllcklkcyA9IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IHBsYXllcklkID0gUi5hcHBseShNYXRoLm1heCwgZXhpc3RpbmdQbGF5ZXJJZHMpICsgMVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAncGxheWVyQWRkZWQnLCBwbGF5ZXJJZCB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lID0gKGFjdGlvbjogQ2hhbmdlUGxheWVyTmFtZVdvcmxkQWN0aW9uKTogW1BsYXllckNoYW5nZWROYW1lV29ybGRFdmVudF0gPT4ge1xuICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckNoYW5nZWROYW1lJywgcGxheWVySWQ6IHRoaXMucGxheWVySWQsIG5hbWU6IGFjdGlvbi5uYW1lIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpOiBbR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgdGhyb3cgYENhbm5vdCBzdGFydCBhbiBhbHJlYWR5LXN0YXJ0ZWQgZ2FtZWBcbiAgICB9XG4gICAgaWYgKHRoaXMucGxheWVySWQgIT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICB0aHJvdyBgQ2Fubm90IHN0YXJ0IHRoZSBnYW1lIHVubGVzcyB0aGUgaG9zdGBcbiAgICB9XG4gICAgY29uc3QgdW5pdHMgPSBuZXcgV29ybGRHZW5lcmF0b3IodGhpcy53b3JsZFN0YXRlKS5nZW5lcmF0ZVVuaXRzKClcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ2dhbWVTdGFydGVkJywgdW5pdHMgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQXR0YWNrID0gKGFjdGlvbjogQXR0YWNrV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT5cbiAgICBuZXcgQXR0YWNrV29ybGRBY3Rpb25IYW5kbGVyKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5wbGF5ZXJJZCwgdGhpcy5uZXh0V29ybGRFdmVudElkKS5oYW5kbGVBdHRhY2soYWN0aW9uKVxuXG4gIHByaXZhdGUgaGFuZGxlTW92ZVVuaXQgPSAoYWN0aW9uOiBNb3ZlVW5pdFdvcmxkQWN0aW9uKTogW1VuaXRNb3ZlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBjb25zdCB7IHVuaXRJZCwgdG8gfSA9IGFjdGlvblxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIH1cbiAgICBjb25zdCBmcm9tID0gdW5pdC5sb2NhdGlvblxuICAgIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB7XG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gICAgfVxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBvdXQtb2YtYm91bmRzIGhleCAke3RvfWBcbiAgICB9XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odG8pKSB7XG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YFxuICAgIH1cbiAgICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpIHtcbiAgICAgIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gbW92ZWBcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICAgICAgdHlwZTogJ3VuaXRNb3ZlZCcsXG4gICAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgICAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgICAgICAgdW5pdElkLFxuICAgICAgICBmcm9tLFxuICAgICAgICB0byxcbiAgICAgIH0sXG4gICAgXVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbmRUdXJuID0gKGFjdGlvbjogRW5kVHVybldvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBpZiAoYWN0aW9uLnR1cm4gIT09IHRoaXMud29ybGRTdGF0ZS50dXJuKSB7XG4gICAgICB0aHJvdyBgQ2Fubm90IGVuZCBhIHR1cm4gdGhhdCdzIG5vdCB0aGUgY3VycmVudCB0dXJuYFxuICAgIH1cbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcigpXG4gICAgaWYgKHBsYXllci5lbmRlZFR1cm4pIHtcbiAgICAgIHRocm93IGBQbGF5ZXIgaGFzIGFscmVhZHkgZW5kZWQgdGhlaXIgdHVybmBcbiAgICB9XG4gICAgY29uc3QgcGxheWVyRW5kZWRUdXJuQWN0aW9uOiBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50ID0ge1xuICAgICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICAgIHR5cGU6ICdwbGF5ZXJFbmRlZFR1cm4nLFxuICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgfVxuICAgIHJldHVybiBbcGxheWVyRW5kZWRUdXJuQWN0aW9uXVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICB0aHJvdyBgTm8gcGxheWVyIHdpdGggSUQgJHt0aGlzLnBsYXllcklkfWBcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyByYW5kb21FbGVtZW50IH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvaGl0LXBvaW50cydcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuY29uc3QgTExBTUFfTkFNRVMgPSBbXG4gICdXYWx0ZXInLFxuICAnRG9sbHknLFxuICAnQ2hld3BhY2EnLFxuICAnQmFyYWNrIE8uIExsYW1hJyxcbiAgJ0NvbW8gU2UnLFxuICAnRnV6enknLFxuICAnSmVyZW15JyxcbiAgJ0FsZm9uc28nLFxuICAnUm9zZScsXG4gICdMb3JlbnpvJyxcbl1cblxuZXhwb3J0IGNsYXNzIFdvcmxkR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVtYWluaW5nSGV4ZXM6IEhleFtdXG4gIHByaXZhdGUgbmV4dFVuaXRJZDogVW5pdElkID0gMVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IEFycmF5LmZyb20od29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVbml0ID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFVuaXQgPT4ge1xuICAgIGNvbnN0IGlkID0gdGhpcy5uZXh0VW5pdElkKytcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJhbmRvbUVsZW1lbnQodGhpcy5yZW1haW5pbmdIZXhlcylcbiAgICB0aGlzLnJlbWFpbmluZ0hleGVzID0gUi53aXRob3V0KFtsb2NhdGlvbl0sIHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgY29uc3QgbmFtZSA9IHJhbmRvbUVsZW1lbnQoTExBTUFfTkFNRVMpXG4gICAgcmV0dXJuIG5ldyBVbml0KHtcbiAgICAgIGlkLFxuICAgICAgcGxheWVySWQsXG4gICAgICBuYW1lLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBhY3Rpb25Qb2ludHM6IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiAyLCBtYXg6IDIgfSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVVbml0cyA9ICgpOiBVbml0W10gPT5cbiAgICBSLmNoYWluKChwbGF5ZXIpID0+IFt0aGlzLmdlbmVyYXRlVW5pdChwbGF5ZXIuaWQpLCB0aGlzLmdlbmVyYXRlVW5pdChwbGF5ZXIuaWQpXSwgdGhpcy53b3JsZFN0YXRlLnBsYXllcnMpXG59XG4iLCJpbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL3dvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFdvcmxkRXZlbnRMaXN0ZW5lciA9IChldmVudDogV29ybGRFdmVudCkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZU93bmVyIHtcbiAgcHVibGljIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWRcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSBsaXN0ZW5lcihldmVudClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBjb25zdCB3b3JsZEFjdGlvbkhhbmRsZXIgPSBuZXcgV29ybGRBY3Rpb25IYW5kbGVyKHRoaXMud29ybGRTdGF0ZSwgcGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZClcbiAgICBjb25zdCBldmVudHMgPSB3b3JsZEFjdGlvbkhhbmRsZXIuY2FsY3VsYXRlV29ybGRFdmVudHMoYWN0aW9uKVxuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICB0aGlzLndvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICAgIH1cbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgKz0gZXZlbnRzLmxlbmd0aFxuICAgIHJldHVybiBldmVudHNcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuY29uc3QgcGFkZGluZyA9IDEwXG5jb25zdCBtaW5pbXVtV2lkdGggPSAyMDBcbmNvbnN0IG1pbmltdW1IZWlnaHQgPSA1MFxuXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xuICBwcml2YXRlIGxhYmVsOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpXG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMClcblxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGRcbiAgICAgIC50ZXh0KHggKyBwYWRkaW5nLCB5ICsgcGFkZGluZywgdGV4dClcbiAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJylcblxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsLndpZHRoICsgcGFkZGluZ1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyBwYWRkaW5nXG5cbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSBtaW5pbXVtV2lkdGggPyBsYWJlbFdpZHRoIDogbWluaW11bVdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSBtaW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiBtaW5pbXVtSGVpZ2h0XG5cbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKVxuICAgIH1cblxuICAgIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjMDAwMDAwJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGRkYnKVxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjQkJCQkJCJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDQ0NDQ0NClcbiAgfVxuXG4gIHB1YmxpYyBzZXRZKHZhbHVlPzogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy5sYWJlbC5zZXRZKHZhbHVlKVxuICAgIHJldHVybiBzdXBlci5zZXRZKHZhbHVlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLW1hcCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvaGl0LXBvaW50cydcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpc2VUb0pzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoc2VyaWFsaXNlVG9Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhleCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIZXgnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZE1hcCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdXb3JsZE1hcCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdvcmxkU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRTdGF0ZScgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFVuaXQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnVW5pdCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhpdFBvaW50cykge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIaXRQb2ludHMnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBBY3Rpb25Qb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnQWN0aW9uUG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1BsYXllcicgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0OiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBzZXJpYWxpc2VUb0pzb24odmFsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3RcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpc2VGcm9tSnNvbiA9ICh2YWx1ZTogYW55KTogYW55ID0+IHtcbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChkZXNlcmlhbGlzZUZyb21Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ0hleCcpIHtcbiAgICAgICAgcmV0dXJuIEhleC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdXb3JsZE1hcCcpIHtcbiAgICAgICAgcmV0dXJuIFdvcmxkTWFwLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1dvcmxkU3RhdGUnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZFN0YXRlLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1VuaXQnKSB7XG4gICAgICAgIHJldHVybiBVbml0LmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ0FjdGlvblBvaW50cycpIHtcbiAgICAgICAgcmV0dXJuIEFjdGlvblBvaW50cy5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdIaXRQb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBIaXRQb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnUGxheWVyJykge1xuICAgICAgICByZXR1cm4gUGxheWVyLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0OiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBkZXNlcmlhbGlzZUZyb21Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBUd2VlbiA9IFBoYXNlci5Ud2VlbnMuVHdlZW5cblxuZXhwb3J0IGNvbnN0IHBsYXlUd2VlbiA9ICh0d2VlbjogVHdlZW4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB0d2Vlbi5zZXRDYWxsYmFjaygnb25Db21wbGV0ZScsIHJlc29sdmUsIFtdKS5wbGF5KCkpXG4iLCJleHBvcnQgY29uc3QgcmFuZG9tSW50SW5jbHVzaXZlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PlxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnRFeGNsdXNpdmUgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pblxuXG5leHBvcnQgY29uc3QgcmFuZG9tRWxlbWVudCA9IDxUPihhcnJheTogVFtdKTogVCA9PiBhcnJheVtyYW5kb21JbnRFeGNsdXNpdmUoMCwgYXJyYXkubGVuZ3RoKV1cbiIsImV4cG9ydCB0eXBlIE9wdGlvbjxUPiA9IFQgfCB1bmRlZmluZWRcblxuZXhwb3J0IGludGVyZmFjZSBKdXN0PFQ+IHtcbiAgdHlwZTogJ2p1c3QnXG4gIGl0ZW06IFRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RoaW5nIHtcbiAgdHlwZTogJ25vdGhpbmcnXG59XG5cbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gSnVzdDxUPiB8IE5vdGhpbmdcblxuZXhwb3J0IGNvbnN0IHRvTWF5YmUgPSA8VD4ob3B0aW9uOiBPcHRpb248VD4pOiBNYXliZTxUPiA9PiAob3B0aW9uID09PSB1bmRlZmluZWQgPyBub3RoaW5nIDoganVzdChvcHRpb24pKVxuXG5leHBvcnQgY29uc3QgdG9PcHRpb24gPSA8VD4obWF5YmU6IE1heWJlPFQ+KTogT3B0aW9uPFQ+ID0+IHtcbiAgc3dpdGNoIChtYXliZS50eXBlKSB7XG4gICAgY2FzZSAnanVzdCc6XG4gICAgICByZXR1cm4gbWF5YmUuaXRlbVxuICAgIGNhc2UgJ25vdGhpbmcnOlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBub3RoaW5nOiBOb3RoaW5nID0geyB0eXBlOiAnbm90aGluZycgfVxuZXhwb3J0IGNvbnN0IGp1c3QgPSA8VD4oaXRlbTogVCk6IEp1c3Q8VD4gPT4gKHtcbiAgdHlwZTogJ2p1c3QnLFxuICBpdGVtLFxufSlcbiIsImV4cG9ydCBjbGFzcyBVbnJlYWNoYWJsZUNhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IG5ldmVyKSB7XG4gICAgc3VwZXIoYFVucmVhY2hhYmxlIGNhc2U6ICR7dmFsdWV9YClcbiAgfVxufVxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25Qb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIHJlZHVjZSA9IChwb2ludHM6IG51bWJlcik6IEFjdGlvblBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEFjdGlvblBvaW50cyA9PlxuICAgIG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgcmVmcmVzaCA9ICgpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IHRoaXMubWF4LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxufVxuIiwiaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIZXgsIEhleFZlY3RvciB9IGZyb20gJy4vaGV4J1xuXG5leHBvcnQgZW51bSBIZXhEaXJlY3Rpb24ge1xuICBFQVNUID0gJ0VBU1QnLFxuICBXRVNUID0gJ1dFU1QnLFxuICBOT1JUSF9FQVNUID0gJ05PUlRIX0VBU1QnLFxuICBTT1VUSF9FQVNUID0gJ1NPVVRIX0VBU1QnLFxuICBOT1JUSF9XRVNUID0gJ05PUlRIX1dFU1QnLFxuICBTT1VUSF9XRVNUID0gJ1NPVVRIX1dFU1QnLFxufVxuXG5leHBvcnQgY29uc3QgSEVYX0RJUkVDVElPTlMgPSBbXG4gIEhleERpcmVjdGlvbi5FQVNULFxuICBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5XRVNULFxuICBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QsXG5dXG5cbmV4cG9ydCBjb25zdCBnZXRVbml0VmVjdG9yID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogSGV4VmVjdG9yID0+IHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIEhleERpcmVjdGlvbi5FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMSwgMClcbiAgICBjYXNlIEhleERpcmVjdGlvbi5XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoLTEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIC0xKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgwLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5TT1VUSF9FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5TT1VUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoLTEsIDEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihkaXJlY3Rpb24pXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBnZXRVbml0VmVjdG9yLCBIZXhEaXJlY3Rpb24gfSBmcm9tICcuL2hleC1kaXJlY3Rpb24nXG5cbmV4cG9ydCBjbGFzcyBIZXgge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgZ2V0IHooKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLXRoaXMueCAtIHRoaXMueVxuICB9XG5cbiAgcHVibGljIHBsdXMgPSAodGhhdDogSGV4KTogSGV4ID0+IG5ldyBIZXgodGhpcy54ICsgdGhhdC54LCB0aGlzLnkgKyB0aGF0LnkpXG5cbiAgcHVibGljIG5laWdoYm91cnMgPSAoKTogSGV4W10gPT4gSGV4Lk5FSUdIQk9VUlMubWFwKHRoaXMucGx1cylcblxuICBwdWJsaWMgaXNBZGphY2VudFRvID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gUi5pbmNsdWRlcyh0aGF0LCB0aGlzLm5laWdoYm91cnMoKSlcblxuICBwdWJsaWMgZGlzdGFuY2VUbyA9ICh0aGF0OiBIZXgpOiBudW1iZXIgPT5cbiAgICAoTWF0aC5hYnModGhpcy54IC0gdGhhdC54KSArIE1hdGguYWJzKHRoaXMueSAtIHRoYXQueSkgKyBNYXRoLmFicyh0aGlzLnogLSB0aGF0LnopKSAvIDJcblxuICBwcml2YXRlIHN0YXRpYyBORUlHSEJPVVJTOiBIZXhbXSA9IFtcbiAgICBuZXcgSGV4KDAsIDEpLFxuICAgIG5ldyBIZXgoMSwgMCksXG4gICAgbmV3IEhleCgxLCAtMSksXG4gICAgbmV3IEhleCgwLCAtMSksXG4gICAgbmV3IEhleCgtMSwgMCksXG4gICAgbmV3IEhleCgtMSwgMSksXG4gIF1cblxuICBwdWJsaWMgZXF1YWxzID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gdGhpcy54ID09PSB0aGF0LnggJiYgdGhpcy55ID09PSB0aGF0LnlcblxuICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IGBIZXgoJHt0aGlzLnh9LCAke3RoaXMueX0pYFxuXG4gIHB1YmxpYyBnbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleCA9PiB0aGlzLnBsdXMoZ2V0VW5pdFZlY3RvcihkaXJlY3Rpb24pKVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBIZXggPT4gbmV3IEhleChqc29uLngsIGpzb24ueSlcbn1cblxuZXhwb3J0IHR5cGUgSGV4VmVjdG9yID0gSGV4XG4iLCJpbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIEhpdFBvaW50cyB7XG4gIHJlYWRvbmx5IGN1cnJlbnQ6IG51bWJlclxuICByZWFkb25seSBtYXg6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgY3VycmVudCwgbWF4IH06IHsgY3VycmVudDogbnVtYmVyOyBtYXg6IG51bWJlciB9KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMubWF4ID0gbWF4XG4gICAgYXNzZXJ0KG1heCA+IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPj0gMClcbiAgICBhc3NlcnQoY3VycmVudCA8PSBtYXgpXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogSGl0UG9pbnRzID0+IHRoaXMuY29weSh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCAtIHBvaW50cyB9KVxuXG4gIHB1YmxpYyBjb3B5ID0gKHsgY3VycmVudCA9IHRoaXMuY3VycmVudCwgbWF4ID0gdGhpcy5tYXggfTogeyBjdXJyZW50PzogbnVtYmVyOyBtYXg/OiBudW1iZXIgfSA9IHt9KTogSGl0UG9pbnRzID0+XG4gICAgbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQsIG1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGl0UG9pbnRzID0+IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi93b3JsZC1tYXAnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vcGxheWVyJ1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9XT1JMRF9TVEFURTogV29ybGRTdGF0ZSA9IG5ldyBXb3JsZFN0YXRlKHtcbiAgdHVybjogMCxcbiAgbWFwOiBuZXcgV29ybGRNYXAoeyB3aWR0aDogMTAsIGhlaWdodDogNiB9KSxcbiAgcGxheWVyczogW1xuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnUGxheWVyIDEnLFxuICAgICAgZW5kZWRUdXJuOiBmYWxzZSxcbiAgICB9KSxcbiAgXSxcbiAgdW5pdHM6IFtdLFxufSlcbiIsImV4cG9ydCBjb25zdCBIT1NUX1BMQVlFUl9JRCA9IDFcblxuZXhwb3J0IHR5cGUgUGxheWVySWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIHJlYWRvbmx5IGlkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgZW5kZWRUdXJuOiBib29sZWFuXG4gIHJlYWRvbmx5IGRlZmVhdGVkOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgZW5kZWRUdXJuID0gZmFsc2UsXG4gICAgZGVmZWF0ZWQgPSBmYWxzZSxcbiAgfToge1xuICAgIGlkOiBQbGF5ZXJJZFxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGVuZGVkVHVybj86IGJvb2xlYW5cbiAgICBkZWZlYXRlZD86IGJvb2xlYW5cbiAgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmVuZGVkVHVybiA9IGVuZGVkVHVyblxuICAgIHRoaXMuZGVmZWF0ZWQgPSBkZWZlYXRlZFxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIGlkID0gdGhpcy5pZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGVuZGVkVHVybiA9IHRoaXMuZW5kZWRUdXJuLFxuICAgIGRlZmVhdGVkID0gdGhpcy5kZWZlYXRlZCxcbiAgfTogeyBpZD86IFBsYXllcklkOyBuYW1lPzogc3RyaW5nOyBlbmRlZFR1cm4/OiBib29sZWFuOyBkZWZlYXRlZD86IGJvb2xlYW4gfSA9IHt9KTogUGxheWVyID0+XG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBlbmRlZFR1cm4sXG4gICAgICBkZWZlYXRlZCxcbiAgICB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGlkOiB0aGlzLmlkLCBuYW1lOiB0aGlzLm5hbWUsIGVuZGVkVHVybjogdGhpcy5lbmRlZFR1cm4sIGRlZmVhdGVkOiB0aGlzLmRlZmVhdGVkIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBQbGF5ZXIgPT5cbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiBqc29uLmlkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgZW5kZWRUdXJuOiBqc29uLmVuZGVkVHVybixcbiAgICAgIGRlZmVhdGVkOiBqc29uLmRlZmVhdGVkLFxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4vYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4vaGl0LXBvaW50cydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFVuaXRJZCA9IG51bWJlclxuXG5leHBvcnQgY2xhc3MgVW5pdCB7XG4gIHJlYWRvbmx5IGlkOiBVbml0SWRcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICByZWFkb25seSBsb2NhdGlvbjogSGV4XG4gIHJlYWRvbmx5IGhpdFBvaW50czogSGl0UG9pbnRzXG4gIHJlYWRvbmx5IGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIHBsYXllcklkLFxuICAgIG5hbWUsXG4gICAgbG9jYXRpb24sXG4gICAgaGl0UG9pbnRzLFxuICAgIGFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkOiBVbml0SWRcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuICB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzXG4gICAgdGhpcy5hY3Rpb25Qb2ludHMgPSBhY3Rpb25Qb2ludHNcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBVbml0ID0+IHRoaXMuY29weSh7IGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMuZGFtYWdlKHBvaW50cykgfSlcblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgaWQgPSB0aGlzLmlkLFxuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbixcbiAgICBoaXRQb2ludHMgPSB0aGlzLmhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMgPSB0aGlzLmFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkPzogVW5pdElkXG4gICAgcGxheWVySWQ/OiBQbGF5ZXJJZFxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBsb2NhdGlvbj86IEhleFxuICAgIGhpdFBvaW50cz86IEhpdFBvaW50c1xuICAgIGFjdGlvblBvaW50cz86IEFjdGlvblBvaW50c1xuICB9ID0ge30pOiBVbml0ID0+IG5ldyBVbml0KHsgaWQsIHBsYXllcklkLCBuYW1lLCBsb2NhdGlvbiwgaGl0UG9pbnRzLCBhY3Rpb25Qb2ludHMgfSlcblxuICBwdWJsaWMgbW92ZSA9IChsb2NhdGlvbjogSGV4LCBhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGxvY2F0aW9uLCBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZHVjZShhY3Rpb25Qb2ludHNDb25zdW1lZCkgfSlcblxuICBwdWJsaWMgcmVkdWNlQWN0aW9uUG9pbnRzID0gKGFjdGlvblBvaW50c0NvbnN1bWVkOiBudW1iZXIpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZnJlc2hBY3Rpb25Qb2ludHMgPSAoKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZnJlc2goKSB9KVxuXG4gIHB1YmxpYyBnZXQgaGFzVW5zcGVudEFjdGlvblBvaW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDBcbiAgfVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgaWQ6IHRoaXMuaWQsXG4gICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLnRvSnNvbigpLFxuICAgIGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMudG9Kc29uKCksXG4gICAgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy50b0pzb24oKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFVuaXQgPT5cbiAgICBuZXcgVW5pdCh7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIHBsYXllcklkOiBqc29uLnBsYXllcklkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgbG9jYXRpb246IEhleC5mcm9tSnNvbihqc29uLmxvY2F0aW9uKSxcbiAgICAgIGhpdFBvaW50czogSGl0UG9pbnRzLmZyb21Kc29uKGpzb24uaGl0UG9pbnRzKSxcbiAgICAgIGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzLmZyb21Kc29uKGpzb24uYWN0aW9uUG9pbnRzKSxcbiAgICB9KVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBHYW1lU3RhcnRlZFdvcmxkRXZlbnQsXG4gIEluaXRpYWxpc2VXb3JsZEV2ZW50LFxuICBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCxcbiAgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IHsgY2FuQXR0YWNrT2NjdXIgfSBmcm9tICcuLi9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICByZXR1cm4gaGFuZGxlSW5pdGlhbGlzZShldmVudClcbiAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQWRkZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckNoYW5nZWROYW1lJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJDaGFuZ2VkTmFtZShzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVTdGFydGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVVuaXRNb3ZlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnY29tYmF0JzpcbiAgICAgIHJldHVybiBoYW5kbGVDb21iYXQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckVuZGVkVHVybic6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRW5kZWRUdXJuKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJEZWZlYXRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRGVmZWF0ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1R1cm4oc3RhdGUpXG4gICAgY2FzZSAnZ2FtZU92ZXInOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVPdmVyKHN0YXRlLCBldmVudClcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUluaXRpYWxpc2UgPSAoZXZlbnQ6IEluaXRpYWxpc2VXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChldmVudC5pZCA+IDApIHtcbiAgICB0aHJvdyBgSW5pdGlhbGlzZSBtdXN0IGJlIHRoZSBmaXJzdCBldmVudGBcbiAgfVxuICByZXR1cm4gZXZlbnQuc3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyQWRkZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gZXZlbnQucGxheWVySWQsIHN0YXRlLnBsYXllcnMpKSB7XG4gICAgdGhyb3cgYFBsYXllciBJRCBhbHJlYWR5IGluIHVzZWBcbiAgfVxuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHsgaWQ6IHBsYXllcklkLCBuYW1lOiBgUGxheWVyICR7cGxheWVySWR9YCB9KVxuICByZXR1cm4gc3RhdGUuYWRkUGxheWVyKHBsYXllcilcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyQ2hhbmdlZE5hbWUgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCwgbmFtZSB9ID0gZXZlbnRcbiAgZ2V0UGxheWVyKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBuYW1lIH0pKVxufVxuXG5jb25zdCBnZXRQbGF5ZXIgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllciA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHN0YXRlLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gIGlmICghcGxheWVyKSB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gIHJldHVybiBwbGF5ZXJcbn1cblxuY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBHYW1lU3RhcnRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKHN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgdGhyb3cgYEdhbWUgYWxyZWFkeSBzdGFydGVkYFxuICB9XG4gIHJldHVybiBzdGF0ZS5jb3B5KHsgdHVybjogMSwgdW5pdHM6IGV2ZW50LnVuaXRzIH0pLmFkZFdvcmxkTG9nKCdMZXQgYmF0dGxlIGNvbW1lbmNlIScpXG59XG5cbmNvbnN0IGhhbmRsZVVuaXRNb3ZlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB1bml0SWQsIHBsYXllcklkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpIHtcbiAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gIH1cbiAgaWYgKCFzdGF0ZS5tYXAuaXNJbkJvdW5kcyh0bykpIHtcbiAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICB9XG4gIGNvbnN0IHVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICBpZiAoIXVuaXQpIHtcbiAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgfVxuICBpZiAoIXVuaXQubG9jYXRpb24uZXF1YWxzKGZyb20pKSB7XG4gICAgdGhyb3cgYFVuaXQgaXMgbm90IGluIHRoZSBleHBlY3RlZCBsb2NhdGlvbiBmb3IgbW92ZW1lbnQuIFVuaXQgaXMgYXQgJHt1bml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2Zyb219YFxuICB9XG4gIGNvbnN0IHRvVW5pdCA9IHN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bylcbiAgaWYgKHRvVW5pdCkge1xuICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gYWxyZWFkeS1vY2N1cGllZCBoZXhgXG4gIH1cbiAgaWYgKHVuaXQucGxheWVySWQgIT09IHBsYXllcklkKSB7XG4gICAgdGhyb3cgYEludmFsaWQgYXR0ZW1wdCB0byBtb3ZlIHVuaXQgb2YgYW5vdGhlciBwbGF5ZXJgXG4gIH1cbiAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkge1xuICAgIHRocm93IGBJbnZhbGlkIGFjdGlvbiBwb2ludCB1c2FnZWBcbiAgfVxuICByZXR1cm4gc3RhdGUucmVwbGFjZVVuaXQodW5pdC5pZCwgdW5pdC5tb3ZlKHRvLCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG59XG5cbmNvbnN0IGhhbmRsZUNvbWJhdCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG5cbiAgY29uc3QgYXR0YWNrZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VyLnVuaXRJZClcbiAgaWYgKCFhdHRhY2tlclVuaXQpIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHthdHRhY2tlci51bml0SWR9YFxuICBpZiAoIWF0dGFja2VyVW5pdC5sb2NhdGlvbi5lcXVhbHMoYXR0YWNrZXIubG9jYXRpb24pKVxuICAgIHRocm93IGBJbnZhbGlkIGxvY2F0aW9uIGZvciBhdHRhY2tlci4gQXR0YWNraW5nIHVuaXQgJHthdHRhY2tlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7YXR0YWNrZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2F0dGFja2VyLmxvY2F0aW9ufWBcblxuICBjb25zdCBkZWZlbmRlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXIudW5pdElkKVxuICBpZiAoIWRlZmVuZGVyVW5pdCkgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVyLnVuaXRJZH1gXG4gIGlmICghZGVmZW5kZXJVbml0LmxvY2F0aW9uLmVxdWFscyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGRlZmVuZGVyLiBEZWZlbmRpbmcgdW5pdCAke2RlZmVuZGVyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHtkZWZlbmRlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7ZGVmZW5kZXIubG9jYXRpb259YFxuXG4gIGlmIChhdHRhY2tlclVuaXQucGxheWVySWQgPT09IGRlZmVuZGVyVW5pdC5wbGF5ZXJJZCkgdGhyb3cgYEludmFsaWQgY29tYmF0IHdpdGggc2VsZmBcbiAgaWYgKCFjYW5BdHRhY2tPY2N1cihldmVudC5hdHRhY2tUeXBlLCBhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIHRocm93IGBJbnZhbGlkIGNvbWJhdCBvZiB0eXBlICR7ZXZlbnQuYXR0YWNrVHlwZX0gYmV0d2VlbiBoZXhlcyAke2F0dGFja2VyLmxvY2F0aW9ufSB0byAke2RlZmVuZGVyLmxvY2F0aW9ufWBcbiAgaWYgKGF0dGFja2VyVW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSB0aHJvdyBgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgXG5cbiAgbGV0IG5ld1N0YXRlID0gc3RhdGVcblxuICBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGF0dGFja2VyVW5pdC5pZClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB1cGRhdGVkQXR0YWNrZXIgPSBhdHRhY2tlclVuaXQuZGFtYWdlKGF0dGFja2VyLmRhbWFnZSkucmVkdWNlQWN0aW9uUG9pbnRzKGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoYXR0YWNrZXJVbml0LmlkLCB1cGRhdGVkQXR0YWNrZXIpXG4gIH1cblxuICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGRlZmVuZGVyVW5pdC5pZClcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KGRlZmVuZGVyVW5pdC5pZCwgZGVmZW5kZXJVbml0LmRhbWFnZShkZWZlbmRlci5kYW1hZ2UpKVxuICB9XG5cbiAgaWYgKGRlZmVuZGVyLmtpbGxlZCkge1xuICAgIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYCR7ZGVmZW5kZXJVbml0Lm5hbWV9IHdhcyB0YWtlbiBvdXQgaW4gYSBzdWljaWRlIGF0dGFjayBieSAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGAke2RlZmVuZGVyVW5pdC5uYW1lfSB3YXMgYnJ1dGFsbHkgbXVyZGVyZWQgYnkgJHthdHRhY2tlclVuaXQubmFtZX0uYClcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgJHthdHRhY2tlclVuaXQubmFtZX0gZGllZCBpbiBhIGZ1dGlsZSBhdHRlbXB0IHRvIHRha2Ugb24gJHthdHRhY2tlclVuaXQubmFtZX0uYClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2ZXJiID0gZXZlbnQuYXR0YWNrVHlwZSA9PT0gJ21lbGVlJyA/ICdhdHRhY2tlZCcgOiAnc3BhdCBhdCdcbiAgICBjb25zdCB0YWtpbmdEYW1hZ2VDbGF1c2UgPSBhdHRhY2tlci5kYW1hZ2UgPT09IDAgPyAnJyA6IGAgYW5kIHRha2luZyAke2F0dGFja2VyLmRhbWFnZX0gZGFtYWdlYFxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHthdHRhY2tlclVuaXQubmFtZX0gJHt2ZXJifSAke2RlZmVuZGVyVW5pdC5uYW1lfSwgY2F1c2luZyAke2RlZmVuZGVyLmRhbWFnZX0gZGFtYWdlJHt0YWtpbmdEYW1hZ2VDbGF1c2V9LmBcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckVuZGVkVHVybiA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgZ2V0UGxheWVyKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IHRydWUgfSkpXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckRlZmVhdGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGNvbnN0IHBsYXllciA9IGdldFBsYXllcihzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZVxuICAgIC51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZGVmZWF0ZWQ6IHRydWUgfSkpXG4gICAgLmFkZFdvcmxkTG9nKGAke3BsYXllci5uYW1lfSBoYXMgYmVlbiB2YW5xdWlzaGVkLmApXG59XG5cbmNvbnN0IGhhbmRsZU5ld1R1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLm5ld1R1cm4oKS5hZGRXb3JsZExvZyhgVHVybiAke3N0YXRlLnR1cm4gKyAxfSBoYXMgYmVndW4uYClcblxuY29uc3QgaGFuZGxlR2FtZU92ZXIgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBHYW1lT3ZlcldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB2aWN0b3IgfSA9IGV2ZW50XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlLmdhbWVPdmVyKHZpY3RvcilcbiAgaWYgKHZpY3Rvcikge1xuICAgIGNvbnN0IHZpY3RvclBsYXllciA9IGdldFBsYXllcihzdGF0ZSwgdmljdG9yKVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYPCfj4YgJHt2aWN0b3JQbGF5ZXIubmFtZX0gaXMgdmljdG9yaW91cyFgKVxuICB9IGVsc2Uge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYFRoZXJlIGFyZSBubyB3aW5uZXJzIGluIHdhci5gKVxuICB9XG4gIHJldHVybiBuZXdTdGF0ZVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIFdvcmxkTWFwIHtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlclxuICByZWFkb25seSBoZWlnaHQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGgsIGhlaWdodCB9OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcbiAgICBhc3NlcnQod2lkdGggPiAwKVxuICAgIGFzc2VydChoZWlnaHQgPiAwKVxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cblxuICBwdWJsaWMgaXNJbkJvdW5kcyA9IChoZXg6IEhleCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHEgPSBoZXgueCArIE1hdGguZmxvb3IoaGV4LnkgLyAyKVxuICAgIHJldHVybiAwIDw9IHEgJiYgcSA8IHRoaXMud2lkdGggJiYgMCA8PSBoZXgueSAmJiBoZXgueSA8IHRoaXMuaGVpZ2h0XG4gIH1cblxuICBwdWJsaWMgKmdldE1hcEhleGVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SGV4PiB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5oZWlnaHQ7IHJvdysrKVxuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy53aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgeCA9IC1NYXRoLmZsb29yKHJvdyAvIDIpICsgY29sdW1uXG4gICAgICAgIHlpZWxkIG5ldyBIZXgoeCwgcm93KVxuICAgICAgfVxuICB9XG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkTWFwID0+IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiBqc29uLndpZHRoLCBoZWlnaHQ6IGpzb24uaGVpZ2h0IH0pXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi91bml0J1xuaW1wb3J0IHsganVzdCwgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi93b3JsZC1ldmVudHMnXG5cbmludGVyZmFjZSBHYW1lT3ZlckluZm8ge1xuICB2aWN0b3I6IE9wdGlvbjxQbGF5ZXJJZD5cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkU3RhdGUge1xuICByZWFkb25seSB0dXJuOiBudW1iZXIgLyogdHVybiA9IDAgYmVmb3JlIHRoZSBnYW1lIGhhcyBzdGFydGVkICovXG4gIHJlYWRvbmx5IG1hcDogV29ybGRNYXBcbiAgcmVhZG9ubHkgdW5pdHM6IFVuaXRbXVxuICByZWFkb25seSBwbGF5ZXJzOiBQbGF5ZXJbXVxuICByZWFkb25seSBnYW1lT3ZlckluZm8/OiBHYW1lT3ZlckluZm9cbiAgcmVhZG9ubHkgd29ybGRMb2c6IHN0cmluZ1tdXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHR1cm4sXG4gICAgbWFwLFxuICAgIHVuaXRzLFxuICAgIHBsYXllcnMsXG4gICAgZ2FtZU92ZXJJbmZvLFxuICAgIHdvcmxkTG9nID0gW10sXG4gIH06IHtcbiAgICB0dXJuOiBudW1iZXJcbiAgICBtYXA6IFdvcmxkTWFwXG4gICAgdW5pdHM6IFVuaXRbXVxuICAgIHBsYXllcnM6IFBsYXllcltdXG4gICAgZ2FtZU92ZXJJbmZvPzogT3B0aW9uPEdhbWVPdmVySW5mbz5cbiAgICB3b3JsZExvZz86IHN0cmluZ1tdXG4gIH0pIHtcbiAgICB0aGlzLnR1cm4gPSB0dXJuXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLnVuaXRzID0gdW5pdHNcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzXG4gICAgdGhpcy5nYW1lT3ZlckluZm8gPSBnYW1lT3ZlckluZm9cbiAgICB0aGlzLndvcmxkTG9nID0gd29ybGRMb2dcbiAgICBhc3NlcnQodHVybiA+PSAwKVxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHR1cm4gPSB0aGlzLnR1cm4sXG4gICAgbWFwID0gdGhpcy5tYXAsXG4gICAgdW5pdHMgPSB0aGlzLnVuaXRzLFxuICAgIHBsYXllcnMgPSB0aGlzLnBsYXllcnMsXG4gICAgZ2FtZU92ZXJJbmZvID0gdG9NYXliZSh0aGlzLmdhbWVPdmVySW5mbyksXG4gICAgd29ybGRMb2cgPSB0aGlzLndvcmxkTG9nLFxuICB9OiB7XG4gICAgdHVybj86IG51bWJlclxuICAgIG1hcD86IFdvcmxkTWFwXG4gICAgdW5pdHM/OiBVbml0W11cbiAgICBwbGF5ZXJzPzogUGxheWVyW11cbiAgICBnYW1lT3ZlckluZm8/OiBNYXliZTxHYW1lT3ZlckluZm8+XG4gICAgd29ybGRMb2c/OiBzdHJpbmdbXVxuICB9ID0ge30pOiBXb3JsZFN0YXRlID0+IG5ldyBXb3JsZFN0YXRlKHsgdHVybiwgbWFwLCB1bml0cywgcGxheWVycywgZ2FtZU92ZXJJbmZvOiB0b09wdGlvbihnYW1lT3ZlckluZm8pLCB3b3JsZExvZyB9KVxuXG4gIHB1YmxpYyBnZXQgaXNHYW1lT3ZlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lT3ZlckluZm8gIT09IHVuZGVmaW5lZFxuICB9XG5cbiAgcHVibGljIGdldCBnYW1lSGFzU3RhcnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50dXJuID4gMFxuICB9XG5cbiAgcHVibGljIGdldFBsYXllcklkcyA9ICgpOiBQbGF5ZXJJZFtdID0+IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmlkKVxuXG4gIHB1YmxpYyBpc1BsYXllckRlZmVhdGVkID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IGJvb2xlYW4gPT4gdGhpcy5nZXRVbml0c0ZvclBsYXllcihwbGF5ZXJJZCkubGVuZ3RoID09PSAwXG5cbiAgcHVibGljIGNhblBsYXllckFjdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBlbmRlZFR1cm4gPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpPy5lbmRlZFR1cm5cbiAgICByZXR1cm4gIWVuZGVkVHVybiAmJiBSLmFueSgodW5pdCkgPT4gdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzLCB0aGlzLmdldFVuaXRzRm9yUGxheWVyKHBsYXllcklkKSlcbiAgfVxuXG4gIHB1YmxpYyBjYW5BbnlQbGF5ZXJBY3QgPSAoKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiB0aGlzLmNhblBsYXllckFjdChwbGF5ZXIuaWQpLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdldFVuaXRzRm9yUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFVuaXRbXSA9PiB0aGlzLnVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5wbGF5ZXJJZCA9PT0gcGxheWVySWQpXG5cbiAgcHVibGljIGZpbmRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogT3B0aW9uPFBsYXllcj4gPT4gUi5maW5kKChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2V0UGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEJ5SWQgPSAodW5pdElkOiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT4gUi5maW5kKCh1bml0KSA9PiB1bml0LmlkID09PSB1bml0SWQsIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIGdldFVuaXRCeUlkID0gKHVuaXRJZDogbnVtYmVyKTogVW5pdCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIH1cbiAgICByZXR1cm4gdW5pdFxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQubG9jYXRpb24uZXF1YWxzKGhleCksIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIHJlcGxhY2VVbml0ID0gKHVuaXRJZDogVW5pdElkLCB1bml0OiBVbml0KTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICB1bml0czogUi5hcHBlbmQoXG4gICAgICAgIHVuaXQsXG4gICAgICAgIFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9PSB1bml0SWQsIHRoaXMudW5pdHMpLFxuICAgICAgKSxcbiAgICB9KVxuXG4gIHB1YmxpYyByZW1vdmVVbml0ID0gKHVuaXRJZDogVW5pdElkKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHVuaXRzOiBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPT0gdW5pdElkLCB0aGlzLnVuaXRzKSB9KVxuXG4gIHB1YmxpYyB1cGRhdGVQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkLCBtb2RpZnk6IChwbGF5ZXI6IFBsYXllcikgPT4gUGxheWVyKTogV29ybGRTdGF0ZSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZVBsYXllcihwbGF5ZXJJZCwgbW9kaWZ5KHBsYXllcikpXG4gIH1cblxuICBwdWJsaWMgcmVwbGFjZVBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQsIHBsYXllcjogUGxheWVyKTogV29ybGRTdGF0ZSA9PiB7XG4gICAgYXNzZXJ0KHBsYXllcklkID09PSBwbGF5ZXIuaWQpXG4gICAgcmV0dXJuIHRoaXMuY29weSh7XG4gICAgICBwbGF5ZXJzOiBSLmFwcGVuZChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICBSLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuaWQgIT09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpLFxuICAgICAgKSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGFkZFBsYXllciA9IChwbGF5ZXI6IFBsYXllcik6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgcGxheWVyczogUi5hcHBlbmQocGxheWVyLCB0aGlzLnBsYXllcnMpIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHtcbiAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgbWFwOiB0aGlzLm1hcC50b0pzb24oKSxcbiAgICB1bml0czogdGhpcy51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQudG9Kc29uKCkpLFxuICAgIHBsYXllcnM6IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLnRvSnNvbigpKSxcbiAgICBnYW1lT3ZlckluZm86IHRoaXMuZ2FtZU92ZXJJbmZvLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRTdGF0ZSA9PlxuICAgIG5ldyBXb3JsZFN0YXRlKHtcbiAgICAgIHR1cm46IGpzb24udHVybixcbiAgICAgIG1hcDogV29ybGRNYXAuZnJvbUpzb24oanNvbi5tYXApLFxuICAgICAgdW5pdHM6IGpzb24udW5pdHMubWFwKCh1bml0OiBhbnkpID0+IFVuaXQuZnJvbUpzb24odW5pdCkpLFxuICAgICAgcGxheWVyczoganNvbi5wbGF5ZXJzLm1hcCgodW5pdDogYW55KSA9PiBQbGF5ZXIuZnJvbUpzb24odW5pdCkpLFxuICAgICAgZ2FtZU92ZXJJbmZvOiBqc29uLmdhbWVPdmVySW5mbyxcbiAgICB9KVxuXG4gIHB1YmxpYyBpc1ZhbGlkUGxheWVySWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdhbWVPdmVyID0gKHZpY3RvcjogT3B0aW9uPG51bWJlcj4pOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IGdhbWVPdmVySW5mbzoganVzdCh7IHZpY3RvciB9KSB9KVxuXG4gIHB1YmxpYyBhcHBseUV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiBhcHBseUV2ZW50KHRoaXMsIGV2ZW50KVxuXG4gIHB1YmxpYyBhcHBseUV2ZW50cyA9IChldmVudHM6IFdvcmxkRXZlbnRbXSk6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGxldCBzdGF0ZTogV29ybGRTdGF0ZSA9IHRoaXNcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBhZGRXb3JsZExvZyA9IChtZXNzYWdlOiBzdHJpbmcpOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IHdvcmxkTG9nOiBSLmFwcGVuZChtZXNzYWdlLCB0aGlzLndvcmxkTG9nKSB9KVxuXG4gIHB1YmxpYyBuZXdUdXJuID0gKCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoe1xuICAgICAgdHVybjogdGhpcy50dXJuICsgMSxcbiAgICAgIHVuaXRzOiB0aGlzLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC5yZWZyZXNoQWN0aW9uUG9pbnRzKCkpLFxuICAgICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogZmFsc2UgfSkpLFxuICAgIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9