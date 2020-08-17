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
                _this.asyncSendToServer(result.worldAction).then(function () {
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
    return state.copy({ turn: 1, units: event.units });
};
var handleUnitMoved = function (state, event) {
    var unitId = event.unitId, playerId = event.playerId, from = event.from, to = event.to;
    if (!from.isAdjacentTo(to))
        throw "Invalid unit movement between non-adjacent hexes " + from + " to " + to;
    if (!state.map.isInBounds(to))
        throw "Invalid unit movement to out-of-bounds hex " + to;
    var unit = state.findUnitById(unitId);
    if (!unit)
        throw "No unit found with ID " + unitId;
    var fromUnit = state.findUnitInLocation(from);
    if ((fromUnit === null || fromUnit === void 0 ? void 0 : fromUnit.id) !== unitId) {
        throw "Invalid from location for unit movement. Unit at " + from + " is " + (fromUnit === null || fromUnit === void 0 ? void 0 : fromUnit.id) + ", but was expected to be " + unitId;
    }
    var toUnit = state.findUnitInLocation(to);
    if (toUnit)
        throw "Invalid unit movement to already-occupied hex";
    if (unit.playerId !== playerId)
        throw "Invalid attempt to move unit of another player";
    if (unit.actionPoints.current < event.actionPointsConsumed)
        throw "Invalid action point usage";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb21iaW5lZC1zdGF0ZS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaGV4LWdlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2JieS9jcmVhdGVkLWxvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvbG9iYnktZGlzcGxheS1vYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvbG9iYnktc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2NhbC1nYW1lLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2Rpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2tleWJvYXJkLW1hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL21hcC1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS90ZXh0cy1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS91bml0LWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51L21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGVlci1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wZWVyLXNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BlZXItdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXNlcmlhbGlzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbS11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2FjdGlvbi1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGl0LXBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC91bml0LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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O0NBQ25CLENBQUMsRUFIOEMsQ0FHOUM7QUFFVyxpQkFBUyxHQUFHLFVBQUMsS0FBWTtJQUNwQyxJQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0IsT0FBTyxLQUFLLENBQUMsSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxJQUFNLEtBQUssR0FBRyxVQUFDLEdBQVE7SUFDckIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLO1FBQUUsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQzNELElBQUksS0FBSyxHQUFHLEtBQUs7UUFBRSxPQUFPLElBQUksU0FBRyxDQUFDLEVBQUUsRUFB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ZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IERleGllLCB7IENvbGxlY3Rpb24gfSBmcm9tICdkZXhpZSdcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uLCBzZXJpYWxpc2VUb0pzb24gfSBmcm9tICcuLi91dGlsL2pzb24tc2VyaWFsaXNhdGlvbidcblxuZXhwb3J0IGludGVyZmFjZSBXb3JsZEV2ZW50UmVjb3JkIHtcbiAgZ2FtZUlkOiBHYW1lSWRcbiAgZXZlbnQ6IGFueSAvLyBzZXJpYWxpc2VkIFdvcmxkRXZlbnRcbn1cblxuZXhwb3J0IGNsYXNzIExsYW1hRGV4aWUgZXh0ZW5kcyBEZXhpZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICB3b3JsZEV2ZW50czogRGV4aWUuVGFibGU8V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPlxufVxuXG5leHBvcnQgY29uc3Qgb3BlbldvcmxkRXZlbnREYiA9IGFzeW5jICgpOiBQcm9taXNlPFdvcmxkRXZlbnREYj4gPT4ge1xuICBjb25zdCBkZXhpZSA9IG5ldyBEZXhpZSgnbGxhbWEtd2FycycpXG4gIGRleGllLnZlcnNpb24oMSkuc3RvcmVzKHtcbiAgICB3b3JsZEV2ZW50czogJysrLGdhbWVJZCcsXG4gIH0pXG4gIGF3YWl0IGRleGllLm9wZW4oKVxuICByZXR1cm4gbmV3IFdvcmxkRXZlbnREYig8TGxhbWFEZXhpZT5kZXhpZSlcbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkRXZlbnREYiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGV4aWU6IExsYW1hRGV4aWVcblxuICBjb25zdHJ1Y3RvcihkZXhpZTogTGxhbWFEZXhpZSkge1xuICAgIHRoaXMuZGV4aWUgPSBkZXhpZVxuICB9XG5cbiAgcHVibGljIHN0b3JlID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCBldmVudDogV29ybGRFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGF3YWl0IHRoaXMuZGV4aWUud29ybGRFdmVudHMuYWRkKHtcbiAgICAgIGdhbWVJZCxcbiAgICAgIGV2ZW50OiBzZXJpYWxpc2VUb0pzb24oZXZlbnQpLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2V0RXZlbnRzRm9yR2FtZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8V29ybGRFdmVudFtdPiA9PiB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpLnRvQXJyYXkoKVxuICAgIHJldHVybiByZWNvcmRzLm1hcCgocmVjb3JkKSA9PiBkZXNlcmlhbGlzZUZyb21Kc29uKHJlY29yZC5ldmVudCkpXG4gIH1cblxuICBwdWJsaWMgaGFzRXZlbnRzRm9yR2FtZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHRoaXMucXVlcnlFdmVudHNCeUdhbWVJZChnYW1lSWQpLmZpcnN0KClcbiAgICByZXR1cm4gcmVjb3JkICE9PSB1bmRlZmluZWRcbiAgfVxuXG4gIHByaXZhdGUgcXVlcnlFdmVudHNCeUdhbWVJZCA9IChnYW1lSWQ6IHN0cmluZyk6IENvbGxlY3Rpb248V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPiA9PlxuICAgIHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpXG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aFxufVxuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcydcbmltcG9ydCBUZXh0RWRpdFBsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvdGV4dGVkaXQtcGx1Z2luLmpzJ1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ0xsYW1hIFdhcnMnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9LFxuXG4gIHNjZW5lOiBTY2VuZXMsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcGFyZW50OiAnZ2FtZScsXG4gIGRvbToge1xuICAgIGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gIHBsdWdpbnM6IHtcbiAgICBnbG9iYWw6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmV4VGV4dEVkaXQnLFxuICAgICAgICBwbHVnaW46IFRleHRFZGl0UGx1Z2luLFxuICAgICAgICBzdGFydDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5zZXRHYW1lU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuICBnYW1lLnNjYWxlLnJlZnJlc2goKVxufSlcbiIsImV4cG9ydCBjb25zdCBBdWRpb0tleXMgPSB7XG4gIEFUVEFDS18xOiAnYXR0YWNrMScsXG4gIEFUVEFDS18yOiAnYXR0YWNrMicsXG4gIEFUVEFDS18zOiAnYXR0YWNrMycsXG4gIERFQVRIOiAnZGVhdGgnLFxuICBXQUxLOiAnd2FsaycsXG4gIE5FV19UVVJOOiAnbmV3LXR1cm4nLFxuICBQTEFZRVJfREVGRUFURUQ6ICdwbGF5ZXItZGVmZWF0ZWQnLFxuICBQTEFZRVJfSk9JTkVEX0xPQkJZOiAncGxheWVyLWRlZmVhdGVkJyxcbiAgVklDVE9SWV9NVVNJQzogJ3ZpY3RvcnktbXVzaWMnLFxuICBDTElDSzogJ2NsaWNrJyxcbiAgU1BJVDogJ3NwaXQnLFxufVxuXG5leHBvcnQgY29uc3QgQUxMX0FVRElPX0tFWVMgPSBbXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMSxcbiAgQXVkaW9LZXlzLkFUVEFDS18yLFxuICBBdWRpb0tleXMuQVRUQUNLXzMsXG4gIEF1ZGlvS2V5cy5ERUFUSCxcbiAgQXVkaW9LZXlzLldBTEssXG4gIEF1ZGlvS2V5cy5ORVdfVFVSTixcbiAgQXVkaW9LZXlzLlBMQVlFUl9ERUZFQVRFRCxcbiAgQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlksXG4gIEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDLFxuICBBdWRpb0tleXMuQ0xJQ0ssXG4gIEF1ZGlvS2V5cy5TUElULFxuXVxuIiwiaW1wb3J0IHsgZ2V0R2FtZUhlaWdodCwgZ2V0R2FtZVdpZHRoIH0gZnJvbSAnLi4vLi4vaGVscGVycydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZUlkLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNQUlOX01FTlVfU0NFTkVfS0VZIH0gZnJvbSAnLi4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBvcGVuV29ybGRFdmVudERiLCBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi8uLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBMT0JCWV9TQ0VORV9LRVksIExvYmJ5U2NlbmVEYXRhIH0gZnJvbSAnLi4vbG9iYnkvbG9iYnktc2NlbmUnXG5pbXBvcnQgRmlsZUNvbmZpZyA9IFBoYXNlci5UeXBlcy5Mb2FkZXIuRmlsZUNvbmZpZ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY29uc3QgQk9PVF9TQ0VORV9LRVkgPSAnQm9vdCdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEJPT1RfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcykgKiAwLjVcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAqIDAuNVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDBcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwXG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQsXG4gICAgICAweDAwMDAwMCxcbiAgICApXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIDEwLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCxcbiAgICAgIDB4ODg4ODg4LFxuICAgIClcblxuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNClcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlXG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMFxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlOiBGaWxlQ29uZmlnKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSlcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKVxuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpXG4gICAgICBhc3NldFRleHQuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5sYXVuY2hHYW1lKClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkQXNzZXRzKClcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoR2FtZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB1cmxJbmZvID0gZ2V0VXJsSW5mbygpXG4gICAgaWYgKHVybEluZm8pIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUdhbWUodXJsSW5mbylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydChNQUlOX01FTlVfU0NFTkVfS0VZKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUdhbWUgPSBhc3luYyAodXJsSW5mbzogVXJsSW5mbyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZCA9IHVybEluZm8uZ2FtZUlkXG4gICAgY29uc3QgcGxheWVySWQgPSB1cmxJbmZvLnBsYXllcklkXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSBhd2FpdCB3b3JsZEV2ZW50RGIuaGFzRXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlc3RvcmVHYW1lQXNTZXJ2ZXIoZ2FtZUlkLCB3b3JsZEV2ZW50RGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUNsaWVudChnYW1lSWQsIHBsYXllcklkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUNsaWVudCA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgcGxheWVySWQ6IE9wdGlvbjxQbGF5ZXJJZD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuY29ubmVjdChnYW1lSWQpXG4gICAgaWYgKHBsYXllcklkKSB7XG4gICAgICB0aGlzLnJlam9pbkFzQ2xpZW50KGNsaWVudCwgZ2FtZUlkLCBwbGF5ZXJJZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qb2luQXNDbGllbnQoY2xpZW50LCBnYW1lSWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luQXNDbGllbnQgPSBhc3luYyAoY2xpZW50OiBDbGllbnQsIGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9ID0gYXdhaXQgY2xpZW50LmpvaW4oKVxuICAgIHNldFVybEluZm8oeyBnYW1lSWQsIHBsYXllcklkIH0pXG4gICAgdGhpcy5qb2luR2FtZSh3b3JsZFN0YXRlLCBjbGllbnQsIHBsYXllcklkKVxuICB9XG5cbiAgcHJpdmF0ZSByZWpvaW5Bc0NsaWVudCA9IGFzeW5jIChjbGllbnQ6IENsaWVudCwgZ2FtZUlkOiBHYW1lSWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBhd2FpdCBjbGllbnQucmVqb2luKHBsYXllcklkKVxuICAgIHRoaXMuam9pbkdhbWUod29ybGRTdGF0ZSwgY2xpZW50LCBwbGF5ZXJJZClcbiAgfVxuXG4gIHByaXZhdGUgam9pbkdhbWUgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgY2xpZW50OiBDbGllbnQsIHBsYXllcklkOiBudW1iZXIpID0+IHtcbiAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50LCB3b3JsZFN0YXRlLCBwbGF5ZXJJZCB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQsIHdvcmxkU3RhdGUsIHBsYXllcklkIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlR2FtZUFzU2VydmVyID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHNlcnZlciA9IGF3YWl0IFNlcnZlci5yZXN0b3JlR2FtZSh3b3JsZEV2ZW50RGIsIGdhbWVJZClcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyLCB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLCBwbGF5ZXJJZDogMSB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIsIHdvcmxkU3RhdGU6IHdvcmxkU3RhdGUsIHBsYXllcklkOiAxIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQXNzZXRzKCkge1xuICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9oZXgtdGlsZXNldC1wYWNrXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsbGFtYScsICdhc3NldHMvc3ByaXRlcy9sbGFtYV8xNC5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaG91cmdsYXNzLWljb25cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2hvdXJnbGFzcycsICdhc3NldHMvc3ByaXRlcy9Ib3VyZ2xhc3MucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLXRleHR1cmVzLXRpbGVzXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy10ZXh0dXJlXG4gICAgdGhpcy5sb2FkLmltYWdlKCdncmFzcycsICdhc3NldHMvc3ByaXRlcy9ncmFzczIucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3B1ZGRsZS1jb3Jwc2VzXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzcGl0JywgJ2Fzc2V0cy9zcHJpdGVzL3B1ZGRsZV9saWdodF9ibHVlLnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50LzM3LWhpdHNwdW5jaGVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMSwgJ2Fzc2V0cy9hdWRpby9oaXQxNC5tcDMubXAzJylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18yLCAnYXNzZXRzL2F1ZGlvL2hpdDE3Lm1wMy5tcDMnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzMsICdhc3NldHMvYXVkaW8vaGl0MTgubXAzLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9tYWxlLWdydW50eWVsbGluZy1zb3VuZHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkRFQVRILCAnYXNzZXRzL2F1ZGlvLzF5ZWxsNC53YXYnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtZm9vdC1zdGVwLXNvdW5kcy15by1mcmFua2llXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5XQUxLLCAnYXNzZXRzL2F1ZGlvL3NmeF9zdGVwX2dyYXNzX2wubXAzJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3VpLXNvdW5kLWVmZmVjdHMtcGFja1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuTkVXX1RVUk4sICdhc3NldHMvYXVkaW8vTUVOVSBBX1NlbGVjdC53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSwgJ2Fzc2V0cy9hdWRpby9NRU5VIEJfU2VsZWN0LndhdicpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsICdhc3NldHMvYXVkaW8vTUVTU0FHRS1CX0RlY2xpbmUud2F2JylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvY2xlYXItc2tpZXNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsICdhc3NldHMvYXVkaW8vQ2xlYXIgU2tpZXMubXAzJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3VpLXNvdW5kLWVmZmVjdHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkNMSUNLLCAnYXNzZXRzL2F1ZGlvL2NsaWNrLndhdicpXG4gICAgLy9odHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL3R2bGF1ZGlvL3NvdW5kcy8yNjc4OTcvXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5TUElULCAnYXNzZXRzL2F1ZGlvL3NwaXQud2F2JylcbiAgfVxufVxuXG5pbnRlcmZhY2UgVXJsSW5mbyB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIHBsYXllcklkPzogUGxheWVySWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVybEluZm8gPSAoKTogT3B0aW9uPFVybEluZm8+ID0+IHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gIGlmIChoYXNoID09PSAnJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHBhdGggPSBoYXNoLnN1YnN0cigxKVxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKVxuICBjb25zdCBnYW1lSWQgPSBzZWdtZW50c1swXVxuICBjb25zdCBwbGF5ZXJJZCA9IHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoc2VnbWVudHNbMV0pIDogdW5kZWZpbmVkXG4gIHJldHVybiB7IGdhbWVJZCwgcGxheWVySWQgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0VXJsSW5mbyA9ICh1cmxJbmZvOiBVcmxJbmZvKTogdm9pZCA9PiB7XG4gIGxldCBoYXNoID0gdXJsSW5mby5nYW1lSWRcbiAgaWYgKHVybEluZm8ucGxheWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGhhc2ggKz0gJy8nICsgdXJsSW5mby5wbGF5ZXJJZFxuICB9XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaFxufVxuIiwiaW1wb3J0IENvbG9yID0gUGhhc2VyLkRpc3BsYXkuQ29sb3JcblxuZXhwb3J0IHR5cGUgQ29sb3VyU3RyaW5nID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb2xvdXJOdW1iZXIgPSBudW1iZXJcblxuZXhwb3J0IGNvbnN0IGNvbG91ck51bWJlciA9IChjb2xvdXJTdHJpbmc6IENvbG91clN0cmluZyk6IENvbG91ck51bWJlciA9PiBDb2xvci5IZXhTdHJpbmdUb0NvbG9yKGNvbG91clN0cmluZykuY29sb3JcblxuZXhwb3J0IGNvbnN0IEhFQUxUSF9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRU1QVFlfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZmZmJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRlVMTF9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM0ZGYwMzcnKVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyMwMDAwMDAnKVxuZXhwb3J0IGNvbnN0IEhPVkVSX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjY2NmZmJlJylcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZkMDgnKVxuZXhwb3J0IGNvbnN0IFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjOWRmMWU3JylcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9URVhUX0NPTE9VUiA9ICcjY2NjYzAwJ1xuZXhwb3J0IGNvbnN0IEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiA9ICcjZmZmZjAwJ1xuXG5leHBvcnQgY29uc3QgUExBWUVSX1RJTlRTID0gW1xuICAnI2ZmYmJiYicsXG4gICcjYmJiYmZmJyxcbiAgJyNiYmZmYmInLFxuICAnI2JiZmZmZicsXG4gICcjZmZmZmJiJyxcbiAgJyNmZmJiZmYnLFxuICAnI2ZmZmZmZicsXG4gICcjYmJiYmJiJyxcbl0ubWFwKGNvbG91ck51bWJlcilcbiIsImltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEF0dGFja1R5cGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgY2FuQXR0YWNrT2NjdXIgfSBmcm9tICcuLi9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY2xhc3MgQ29tYmluZWRTdGF0ZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByb3RlY3RlZCByZWFkb25seSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gIH1cblxuICBwdWJsaWMgZmluZFNlbGVjdGVkVW5pdCA9ICgpOiBPcHRpb248VW5pdD4gPT5cbiAgICB0aGlzLnNlbGVjdGVkSGV4ID8gdGhpcy5maW5kVW5pdEluTG9jYXRpb24odGhpcy5zZWxlY3RlZEhleCkgOiB1bmRlZmluZWRcblxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSGV4KCk6IE9wdGlvbjxIZXg+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICB9XG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQgJiYgdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09PSB0aGlzLnBsYXllcklkICYmIHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDYW5Nb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgaGV4OiBIZXgpOiBib29sZWFuID0+XG4gICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkgJiZcbiAgICBoZXguaXNBZGphY2VudFRvKHVuaXQubG9jYXRpb24pICYmXG4gICAgdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkgJiZcbiAgICAhdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHRoZSB1bml0IGluIHRoZSBoZXggdG8gYXR0YWNrLCBpZiBhbiBhdHRhY2sgaXMgcG9zc2libGUsIGVsc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGljIHVuaXRDYW5BdHRhY2tIZXggPSAodW5pdDogVW5pdCwgbG9jYXRpb246IEhleCwgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VW5pdCA9IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGxvY2F0aW9uKVxuICAgIGlmIChcbiAgICAgIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkgJiZcbiAgICAgIHRhcmdldFVuaXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGFyZ2V0VW5pdC5wbGF5ZXJJZCAhPT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAmJlxuICAgICAgY2FuQXR0YWNrT2NjdXIoYXR0YWNrVHlwZSwgdW5pdC5sb2NhdGlvbiwgbG9jYXRpb24pXG4gICAgKVxuICAgICAgcmV0dXJuIHRhcmdldFVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cyA9ICh1bml0SWQ/OiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT4ge1xuICAgIGNvbnN0IGNhbmRpZGF0ZVVuaXRzID0gUi5zb3J0QnkoXG4gICAgICAodW5pdCkgPT4gdW5pdC5pZCxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS5nZXRVbml0c0ZvclBsYXllcih0aGlzLnBsYXllcklkKS5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyksXG4gICAgKVxuICAgIGlmICh1bml0SWQpXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkID4gdW5pdElkKSkgPz9cbiAgICAgICAgUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCA8IHVuaXRJZCkpXG4gICAgICApXG4gICAgZWxzZSByZXR1cm4gUi5oZWFkKGNhbmRpZGF0ZVVuaXRzKVxuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGxheWVyIHdpdGggaWQgJHt0aGlzLnBsYXllcklkfWBcbiAgICByZXR1cm4gcGxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuXG5leHBvcnQgY29uc3QgY2VudGVyUG9pbnQgPSAoaGV4OiBIZXgpOiBQb2ludCA9PiAoe1xuICB4OiBoZXgueCAqIE1hdGguc3FydCgzKSArIChoZXgueSAqIE1hdGguc3FydCgzKSkgLyAyLFxuICB5OiAoaGV4LnkgKiAzKSAvIDIsXG59KVxuXG5leHBvcnQgY29uc3QgZnJvbVBvaW50ID0gKHBvaW50OiBQb2ludCk6IEhleCA9PiB7XG4gIGNvbnN0IHggPSAocG9pbnQueCAqIE1hdGguc3FydCgzKSkgLyAzIC0gcG9pbnQueSAvIDNcbiAgY29uc3QgeSA9ICgyICogcG9pbnQueSkgLyAzXG4gIHJldHVybiByb3VuZChuZXcgSGV4KHgsIHkpKVxufVxuXG5jb25zdCByb3VuZCA9IChoZXg6IEhleCk6IEhleCA9PiB7XG4gIGNvbnN0IHJ4ID0gTWF0aC5yb3VuZChoZXgueClcbiAgY29uc3QgcnkgPSBNYXRoLnJvdW5kKGhleC55KVxuICBjb25zdCByeiA9IE1hdGgucm91bmQoaGV4LnopXG5cbiAgY29uc3QgeERpZmYgPSBNYXRoLmFicyhyeCAtIGhleC54KVxuICBjb25zdCB5RGlmZiA9IE1hdGguYWJzKHJ5IC0gaGV4LnkpXG4gIGNvbnN0IHpEaWZmID0gTWF0aC5hYnMocnogLSBoZXgueSlcblxuICBpZiAoeERpZmYgPiB5RGlmZiAmJiB4RGlmZiA+IHpEaWZmKSByZXR1cm4gbmV3IEhleCgtcnkgLSByeiwgcnkpXG4gIGVsc2UgaWYgKHlEaWZmID4gekRpZmYpIHJldHVybiBuZXcgSGV4KHJ4LCAtcnggLSByeilcbiAgZWxzZSByZXR1cm4gbmV3IEhleChyeCwgcnkpXG59XG5cbmNvbnN0IGhleEFuZ2xlID0gTWF0aC5QSSAvIDNcbmNvbnN0IGhleE9mZnNldCA9IE1hdGguUEkgLyA2XG5cbmNvbnN0IGhleENvcm5lciA9IChjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIsIGk6IG51bWJlcik6IFBvaW50ID0+IHtcbiAgY29uc3QgYW5nbGVSYWRpYW5zID0gaGV4QW5nbGUgKiBpIC0gaGV4T2Zmc2V0XG4gIGNvbnN0IHggPSBjZW50ZXIueCArIHNpemUgKiBNYXRoLmNvcyhhbmdsZVJhZGlhbnMpXG4gIGNvbnN0IHkgPSBjZW50ZXIueSArIHNpemUgKiBNYXRoLnNpbihhbmdsZVJhZGlhbnMpXG4gIHJldHVybiB7IHgsIHkgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGhleENvcm5lcnMoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxQb2ludD4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHlpZWxkIGhleENvcm5lcihjZW50ZXIsIHNpemUsIGkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hcEhlaWdodCA9IChtYXA6IFdvcmxkTWFwKTogbnVtYmVyID0+IChtYXAuaGVpZ2h0ICogMykgLyAyXG5cbmV4cG9ydCBjb25zdCBoZXhXaWR0aCA9IChoZXhTaXplOiBudW1iZXIpOiBudW1iZXIgPT4gaGV4U2l6ZSAqIE1hdGguc3FydCgzKVxuIiwiaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290L2Jvb3Qtc2NlbmUnXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IExvYmJ5U2NlbmUgfSBmcm9tICcuL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBHYW1lU2NlbmUsIE1haW5NZW51U2NlbmUsIExvYmJ5U2NlbmVdXG4iLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVTY2VuZURhdGEgfSBmcm9tICcuLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgTG9iYnlEaXNwbGF5T2JqZWN0cyB9IGZyb20gJy4vbG9iYnktZGlzcGxheS1vYmplY3RzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyJ1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlZExvYmJ5U2NlbmUge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IGxvYmJ5RGlzcGxheU9iamVjdHM6IExvYmJ5RGlzcGxheU9iamVjdHNcbiAgcHJpdmF0ZSBsaXN0ZW5lcj86IFdvcmxkRXZlbnRMaXN0ZW5lclxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnQsIHBsYXllcklkOiBQbGF5ZXJJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBzZXJ2ZXJPckNsaWVudFxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZKVxuICAgIHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cyA9IHRoaXMubWFrZUxvYmJ5RGlzcGxheU9iamVjdHMoc2NlbmUsIHBsYXllcklkKVxuICAgIGlmIChzZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIENsaWVudCkge1xuICAgICAgdGhpcy5hY3RBc0NsaWVudChzZXJ2ZXJPckNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcihzZXJ2ZXJPckNsaWVudClcbiAgICB9XG4gICAgdGhpcy5zeW5jKClcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUxvYmJ5RGlzcGxheU9iamVjdHMgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgcGxheWVySWQ6IFBsYXllcklkKSA9PlxuICAgIG5ldyBMb2JieURpc3BsYXlPYmplY3RzKHNjZW5lLCBwbGF5ZXJJZCwgdGhpcy5oYW5kbGVTdGFydEdhbWUsIHRoaXMuaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSlcblxuICBwcml2YXRlIGFjdEFzQ2xpZW50ID0gKGNsaWVudDogQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChldmVudDogV29ybGRFdmVudCkgPT4gdGhpcy5oYW5kbGVXb3JsZEV2ZW50KGV2ZW50LCBjbGllbnQpXG4gICAgY2xpZW50LmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIGNsaWVudDogQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdnYW1lU3RhcnRlZCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuTkVXX1RVUk4pXG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVyKSB7XG4gICAgICAgICAgY2xpZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG4gICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF1bmNoR2FtZVNjZW5lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZKVxuICAgICAgICB0aGlzLnN5bmMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zeW5jKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQyID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhdW5jaEdhbWVTY2VuZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSlcbiAgICAgICAgdGhpcy5zeW5jKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3luYygpXG4gICAgfVxuICB9XG4gIHByaXZhdGUgbGF1bmNoR2FtZVNjZW5lID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHtcbiAgICAgIHNlcnZlck9yQ2xpZW50OiB0aGlzLnNlcnZlck9yQ2xpZW50LFxuICAgICAgd29ybGRTdGF0ZTogdGhpcy53b3JsZFN0YXRlLFxuICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgfVxuICAgIHRoaXMuc2NlbmUuc2NlbmUuc3RhcnQoR0FNRV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSA9IChuYW1lOiBzdHJpbmcpOiB2b2lkID0+IHRoaXMuZGlzcGF0Y2hBY3Rpb24oeyB0eXBlOiAnY2hhbmdlUGxheWVyTmFtZScsIG5hbWUgfSlcblxuICBwcml2YXRlIGRpc3BhdGNoQWN0aW9uID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5zZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5zZXJ2ZXJPckNsaWVudC5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzeW5jID0gKCk6IHZvaWQgPT4gdGhpcy5sb2JieURpc3BsYXlPYmplY3RzLnN5bmModGhpcy53b3JsZFN0YXRlKVxuXG4gIHByaXZhdGUgYWN0QXNTZXJ2ZXIgPSAoc2VydmVyOiBTZXJ2ZXIpOiB2b2lkID0+IHNlcnZlci5hZGRMaXN0ZW5lcigoZXZlbnQpID0+IHRoaXMuaGFuZGxlV29ybGRFdmVudDIoZXZlbnQsIHNlcnZlcikpXG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5kaXNwYXRjaEFjdGlvbih7IHR5cGU6ICdzdGFydEdhbWUnIH0pXG4gICAgdGhpcy5sYXVuY2hHYW1lU2NlbmUoKVxuICB9XG59XG4iLCJpbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vLi4vdWkvbWVudS1idXR0b24nXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcblxuZXhwb3J0IGNsYXNzIExvYmJ5RGlzcGxheU9iamVjdHMge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBvblN0YXJ0R2FtZTogVm9pZEZ1bmN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgb25DaGFuZ2VQbGF5ZXJOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJOYW1lVGV4dHM6IE1hcDxQbGF5ZXJJZCwgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRHYW1lQnV0dG9uPzogTWVudUJ1dHRvblxuICBwcml2YXRlIHJlYWRvbmx5IHdhaXRpbmdGb3JIb3N0VGV4dD86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICBwbGF5ZXJJZDogUGxheWVySWQsXG4gICAgb25TdGFydEdhbWU6IFZvaWRGdW5jdGlvbixcbiAgICBvbkNoYW5nZVBsYXllck5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWQsXG4gICkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMub25TdGFydEdhbWUgPSBvblN0YXJ0R2FtZVxuICAgIHRoaXMub25DaGFuZ2VQbGF5ZXJOYW1lID0gb25DaGFuZ2VQbGF5ZXJOYW1lXG4gICAgdGhpcy5zY2VuZS5hZGQudGV4dCgxMDAsIDUwLCAnTGxhbWEgV2FycycsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI0KVxuICAgIGlmIChwbGF5ZXJJZCA9PT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uID0gbmV3IE1lbnVCdXR0b24odGhpcy5zY2VuZSwgMTAwLCAwLCAnU3RhcnQgR2FtZScsIHRoaXMuaGFuZGxlU3RhcnRHYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoMTAwLCAwLCAnV2FpdGluZyBmb3IgaG9zdCB0byBzdGFydCB0aGUgZ2FtZS4uLicpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICB0aGlzLm9uU3RhcnRHYW1lKClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCByZXF1aXJlZFBsYXllcklkcyA9IHdvcmxkU3RhdGUuZ2V0UGxheWVySWRzKClcbiAgICBjb25zdCBjdXJyZW50UGxheWVySWRzID0gQXJyYXkuZnJvbSh0aGlzLnBsYXllck5hbWVUZXh0cy5rZXlzKCkpXG4gICAgY29uc3Qgc3VycGx1c1BsYXllcklkcyA9IFIuZGlmZmVyZW5jZShjdXJyZW50UGxheWVySWRzLCByZXF1aXJlZFBsYXllcklkcylcbiAgICBmb3IgKGNvbnN0IHBsYXllcklkIG9mIHN1cnBsdXNQbGF5ZXJJZHMpIHtcbiAgICAgIHRoaXMucGxheWVyTmFtZVRleHRzLmdldChwbGF5ZXJJZCk/LmRlc3Ryb3koKVxuICAgIH1cbiAgICBjb25zdCBtaXNzaW5nUGxheWVySWRzID0gUi5kaWZmZXJlbmNlKHJlcXVpcmVkUGxheWVySWRzLCBjdXJyZW50UGxheWVySWRzKVxuICAgIGZvciAoY29uc3QgcGxheWVySWQgb2YgbWlzc2luZ1BsYXllcklkcykge1xuICAgICAgY29uc3QgcGxheWVyID0gd29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpXG4gICAgICBjb25zdCBwbGF5ZXJUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgICAgLnRleHQoMTAwLCAwLCBwbGF5ZXIubmFtZSwge1xuICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgICBmaXhlZFdpZHRoOiAyMDAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCA/ICcjMzMzMzMzJyA6ICcjMDAwMDAwJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnNldEZvbnRTaXplKDE4KVxuICAgICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgICAuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChwbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5zY2VuZS5wbHVnaW5zLmdldCgncmV4VGV4dEVkaXQnKSBhcyBhbnlcbiAgICAgICAgICAgIHBsdWdpbi5lZGl0KHBsYXllclRleHQsIHtcbiAgICAgICAgICAgICAgb25DbG9zZTogKCkgPT4gdGhpcy5vbkNoYW5nZVBsYXllck5hbWUocGxheWVyVGV4dC50ZXh0KSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgdGhpcy5wbGF5ZXJOYW1lVGV4dHMuc2V0KHBsYXllcklkLCBwbGF5ZXJUZXh0KVxuICAgIH1cbiAgICBsZXQgeSA9IDEwMFxuICAgIGNvbnN0IHNvcnRlZFBsYXllcnMgPSBSLnNvcnRCeSgocGxheWVyKSA9PiBwbGF5ZXIuaWQsIHdvcmxkU3RhdGUucGxheWVycylcbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBzb3J0ZWRQbGF5ZXJzKSB7XG4gICAgICBjb25zdCBwbGF5ZXJUZXh0ID0gdGhpcy5wbGF5ZXJOYW1lVGV4dHMuZ2V0KHBsYXllci5pZClcbiAgICAgIHBsYXllclRleHQ/LnNldFRleHQocGxheWVyLm5hbWUpLnNldFkoeSlcbiAgICAgIHkgKz0gNTBcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5zZXRZKHkpXG4gICAgfVxuICAgIGlmICh0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9ySG9zdFRleHQuc2V0WSh5KVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENyZWF0ZWRMb2JieVNjZW5lIH0gZnJvbSAnLi9jcmVhdGVkLWxvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgY29uc3QgTE9CQllfU0NFTkVfS0VZID0gJ0xvYmJ5J1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYmJ5U2NlbmVEYXRhIHtcbiAgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwbGF5ZXJJZDogUGxheWVySWRcbiAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxufVxuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogTE9CQllfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgTG9iYnlTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9IChzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBzZXJ2ZXJPckNsaWVudCwgcGxheWVySWQsIHdvcmxkU3RhdGUgfSA9IHNjZW5lRGF0YVxuICAgIG5ldyBDcmVhdGVkTG9iYnlTY2VuZSh0aGlzLCBzZXJ2ZXJPckNsaWVudCwgcGxheWVySWQsIHdvcmxkU3RhdGUpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21haW4tZ2FtZS9tb2RlJ1xuaW1wb3J0IHsgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIExvY2FsR2FtZVN0YXRlIHtcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG1vZGU6IE1vZGVcbiAgcmVhZG9ubHkgc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+XG4gIHJlYWRvbmx5IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwbGF5ZXJJZCxcbiAgICBtb2RlLFxuICAgIHNlbGVjdGVkSGV4LFxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSAwLFxuICB9OiB7XG4gICAgcGxheWVySWQ6IFBsYXllcklkXG4gICAgbW9kZTogTW9kZVxuICAgIHNlbGVjdGVkSGV4PzogT3B0aW9uPEhleD5cbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogbnVtYmVyXG4gIH0pIHtcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm1vZGUgPSBtb2RlXG4gICAgdGhpcy5zZWxlY3RlZEhleCA9IHNlbGVjdGVkSGV4XG4gICAgdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlclxuICAgIGFzc2VydChhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID49IDApXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgcGxheWVySWQgPSB0aGlzLnBsYXllcklkLFxuICAgIG1vZGUgPSB0aGlzLm1vZGUsXG4gICAgc2VsZWN0ZWRIZXggPSB0b01heWJlKHRoaXMuc2VsZWN0ZWRIZXgpLFxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSB0aGlzLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIsXG4gIH06IHtcbiAgICBwbGF5ZXJJZD86IFBsYXllcklkXG4gICAgbW9kZT86IE1vZGVcbiAgICBzZWxlY3RlZEhleD86IE1heWJlPEhleD5cbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogbnVtYmVyXG4gIH0gPSB7fSk6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgbmV3IExvY2FsR2FtZVN0YXRlKHsgcGxheWVySWQsIG1vZGUsIHNlbGVjdGVkSGV4OiB0b09wdGlvbihzZWxlY3RlZEhleCksIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgfSlcblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRIZXggPSAoc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+KTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgc2VsZWN0ZWRIZXg6IHRvTWF5YmUoc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldE1vZGUgPSAobW9kZTogTW9kZSk6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IG1vZGUgfSlcblxuICBwdWJsaWMgaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciArIDEgfSlcblxuICBwdWJsaWMgZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciAtIDEgfSlcbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSA9IG5ldyBMb2NhbEdhbWVTdGF0ZSh7XG4gIHBsYXllcklkOiAxLFxuICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG59KVxuIiwiaW1wb3J0IHsgTWFwRGlzcGxheU9iamVjdCB9IGZyb20gJy4vbWFwLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVuaXREaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi91bml0LWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25EaXNwYXRjaGVyLCBUZXh0c0Rpc3BsYXlPYmplY3QgfSBmcm9tICcuL3RleHRzLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQW5pbWF0aW9uU3BlYyB7XG4gIHR5cGU6ICdtb3ZlJ1xuICB1bml0SWQ6IFVuaXRJZFxuICBmcm9tOiBIZXhcbiAgdG86IEhleFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbWJhdEFuaW1hdGlvblNwZWMge1xuICB0eXBlOiAnY29tYmF0J1xuICBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlXG4gIGF0dGFja2VyOiB7XG4gICAgdW5pdElkOiBVbml0SWRcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgZGFtYWdlOiBudW1iZXJcbiAgICBraWxsZWQ6IGJvb2xlYW5cbiAgfVxuICBkZWZlbmRlcjoge1xuICAgIHVuaXRJZDogVW5pdElkXG4gICAgbG9jYXRpb246IEhleFxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAga2lsbGVkOiBib29sZWFuXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uU3BlYyA9IE1vdmVBbmltYXRpb25TcGVjIHwgQ29tYmF0QW5pbWF0aW9uU3BlY1xuXG5leHBvcnQgY2xhc3MgRGlzcGxheU9iamVjdHMge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSByZWFkb25seSBtYXBEaXNwbGF5T2JqZWN0OiBNYXBEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgcmVhZG9ubHkgdW5pdERpc3BsYXlPYmplY3RzOiBNYXA8VW5pdElkLCBVbml0RGlzcGxheU9iamVjdD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBhbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgdGV4dHNEaXNwbGF5T2JqZWN0OiBUZXh0c0Rpc3BsYXlPYmplY3RcbiAgcHJpdmF0ZSByZWFkb25seSBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICBwcml2YXRlIGlzQW5pbWF0aW5nOiBib29sZWFuID0gZmFsc2VcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgYW5pbWF0aW9uczogQW5pbWF0aW9uU3BlY1tdID0gW11cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxuICAgIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICAgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlLFxuICAgIGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyLFxuICApIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSBsb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3QgPSBuZXcgTWFwRGlzcGxheU9iamVjdChzY2VuZSwgdGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0ID0gbmV3IFRleHRzRGlzcGxheU9iamVjdChcbiAgICAgIHNjZW5lLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLFxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSxcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyLFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludDogUG9pbnQpOiB2b2lkID0+IHRoaXMubWFwRGlzcGxheU9iamVjdD8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnQpXG5cbiAgcHVibGljIGhhc0NsaWNrSGFuZGxlckZvciA9IChwb2ludDogUG9pbnQpOiBib29sZWFuID0+IHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0Lmhhc0NsaWNrSGFuZGxlckZvcihwb2ludClcblxuICBwdWJsaWMgc3luY1NjZW5lID0gKFxuICAgIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICAgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlLFxuICAgIGFuaW1hdGlvbjogT3B0aW9uPEFuaW1hdGlvblNwZWM+LFxuICApOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0Py5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0Py5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuXG4gICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb25zID0gUi5hcHBlbmQoYW5pbWF0aW9uKSh0aGlzLmFuaW1hdGlvbnMpXG4gICAgICB0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKGFuaW1hdGlvbikuZm9yRWFjaCh0aGlzLm1hbmFnZVVuaXRBc0JlaW5nQW5pbWF0ZWQpXG4gICAgICB0aGlzLnRyaWdnZXJBbmltYXRpb25zKClcbiAgICB9XG5cbiAgICB0aGlzLnN5bmNVbml0cygpXG4gIH1cblxuICBwcml2YXRlIHN5bmNVbml0cyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnJlbW92ZVVuaXREaXNwbGF5T2JqZWN0c05vTG9uZ2VyTmVlZGVkKClcbiAgICBjb25zdCB1bml0c1RvU3luYyA9IHRoaXMud29ybGRTdGF0ZS51bml0cy5maWx0ZXIoKHVuaXQpID0+ICF0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmhhcyh1bml0LmlkKSlcbiAgICBmb3IgKGNvbnN0IHVuaXQgb2YgdW5pdHNUb1N5bmMpIHtcbiAgICAgIGxldCB1bml0RGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0LmlkKVxuICAgICAgaWYgKCF1bml0RGlzcGxheU9iamVjdCkge1xuICAgICAgICB1bml0RGlzcGxheU9iamVjdCA9IG5ldyBVbml0RGlzcGxheU9iamVjdCh0aGlzLnNjZW5lLCB1bml0KVxuICAgICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdC5pZCwgdW5pdERpc3BsYXlPYmplY3QpXG4gICAgICB9XG4gICAgICB1bml0RGlzcGxheU9iamVjdC5zeW5jU2NlbmUodW5pdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVVuaXREaXNwbGF5T2JqZWN0c05vTG9uZ2VyTmVlZGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN1cnBsdXNVbml0SWRzID0gUi5kaWZmZXJlbmNlKFxuICAgICAgQXJyYXkuZnJvbSh0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5rZXlzKCkpLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC5pZCksXG4gICAgKVxuICAgIGZvciAoY29uc3QgdW5pdElkIG9mIHN1cnBsdXNVbml0SWRzKSB7XG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKT8uZGVzdHJveSgpXG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlckFuaW1hdGlvbnMgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2Nlc3NBbmltYXRpb25zKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlcXVlbmNlQW5pbWF0aW9ucyA9ICgpOiB7XG4gICAgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdzogQW5pbWF0aW9uU3BlY1tdXG4gICAgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyOiBBbmltYXRpb25TcGVjW11cbiAgfSA9PiB7XG4gICAgY29uc3QgdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucyA9IG5ldyBTZXQ8VW5pdElkPigpXG4gICAgY29uc3QgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdyA9IFtdXG4gICAgY29uc3QgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyID0gW11cbiAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiB0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgIGNvbnN0IHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uID0gdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICBjb25zdCBhZmZlY3RlZEJ5RWFybGllckFuaW1hdGlvbnMgPSBSLmFueShcbiAgICAgICAgKHVuaXRJZCkgPT4gdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucy5oYXModW5pdElkKSxcbiAgICAgICAgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24sXG4gICAgICApXG4gICAgICBpZiAoYWZmZWN0ZWRCeUVhcmxpZXJBbmltYXRpb25zKSB7XG4gICAgICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlci5wdXNoKGFuaW1hdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cucHVzaChhbmltYXRpb24pXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHVuaXRJZCBvZiB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbikge1xuICAgICAgICB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zLmFkZCh1bml0SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3csIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NBbmltYXRpb25zID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgdHJ5IHtcbiAgICAgIHdoaWxlICh0aGlzLmFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB7IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3csIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciB9ID0gdGhpcy5zZXF1ZW5jZUFuaW1hdGlvbnMoKVxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYW5pbWF0aW9uc1RvUGVyZm9ybU5vdy5tYXAodGhpcy5ydW5BbmltYXRpb24pKVxuICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBhbmltYXRpb25zVG9QZXJmb3JtTm93KSB7XG4gICAgICAgICAgdGhpcy5yZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQoYW5pbWF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRzRnJvbUJlaW5nQW5pbWF0ZWRXaGVyZU5vTG9uZ2VyTmVlZGVkID0gKGFuaW1hdGlvbjogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgIGNvbnN0IHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMgPSB0aGlzLmdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMoKVxuICAgIGNvbnN0IHVuaXRJZHNUb1JlbGVhc2UgPSBSLmRpZmZlcmVuY2UodW5pdElkc0luQW5pbWF0aW9uLCB1bml0SWRzSW5SZW1haW5pbmdBbmltYXRpb25zKVxuICAgIHVuaXRJZHNUb1JlbGVhc2UuZm9yRWFjaCh0aGlzLnJlbGVhc2VVbml0RnJvbUJlaW5nQW5pbWF0ZWQpXG4gIH1cblxuICBwcml2YXRlIG1hbmFnZVVuaXRBc0JlaW5nQW5pbWF0ZWQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZClcbiAgICBpZiAoZGlzcGxheU9iamVjdCkge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICAgIHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbGVhc2VVbml0RnJvbUJlaW5nQW5pbWF0ZWQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmICghZGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke3VuaXRJZH1gXG4gICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAodW5pdCkge1xuICAgICAgZGlzcGxheU9iamVjdC5zeW5jU2NlbmUodW5pdClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0SWQsIGRpc3BsYXlPYmplY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlPYmplY3QuZGVzdHJveSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbml0c0ludm9sdmVkSW5BbmltYXRpb25zID0gKCk6IFVuaXRJZFtdID0+IFIuY2hhaW4odGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiwgdGhpcy5hbmltYXRpb25zKVxuXG4gIHByaXZhdGUgZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24gPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogVW5pdElkW10gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICByZXR1cm4gW2FuaW1hdGlvbi51bml0SWRdXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICByZXR1cm4gW2FuaW1hdGlvbi5hdHRhY2tlci51bml0SWQsIGFuaW1hdGlvbi5kZWZlbmRlci51bml0SWRdXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBydW5BbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgc3dpdGNoIChhbmltYXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgIGF3YWl0IHRoaXMucnVuTW92ZUFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bkNvbWJhdEFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IE1vdmVBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGFuaW1hdGlvbi51bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YW5pbWF0aW9uLnVuaXRJZH1gXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5XQUxLKVxuICAgIGF3YWl0IGRpc3BsYXlPYmplY3QucnVuTW92ZUFuaW1hdGlvbihhbmltYXRpb24uZnJvbSwgYW5pbWF0aW9uLnRvKVxuICB9XG5cbiAgcHJpdmF0ZSBydW5Db21iYXRBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBDb21iYXRBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGFuaW1hdGlvblxuICAgIGNvbnN0IGF0dGFja2VyRGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGF0dGFja2VyLnVuaXRJZClcbiAgICBpZiAoIWF0dGFja2VyRGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke2F0dGFja2VyLnVuaXRJZH1gXG4gICAgY29uc3QgZGVmZW5kZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoZGVmZW5kZXIudW5pdElkKVxuICAgIGlmICghZGVmZW5kZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7ZGVmZW5kZXIudW5pdElkfWBcbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShyYW5kb21FbGVtZW50KFtBdWRpb0tleXMuQVRUQUNLXzEsIEF1ZGlvS2V5cy5BVFRBQ0tfMiwgQXVkaW9LZXlzLkFUVEFDS18zXSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuU1BJVClcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCB8fCBkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuREVBVEgpXG4gICAgfVxuICAgIGNvbnN0IHNpbXVsdGFuZW91c0FuaW1hdGlvbnM6IFByb21pc2U8dm9pZD5bXSA9IFtdXG4gICAgaWYgKGFuaW1hdGlvbi5hdHRhY2tUeXBlID09PSAnbWVsZWUnKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkF0dGFja0FuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIH0gZWxzZSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1blNwaXRBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgc2ltdWx0YW5lb3VzQW5pbWF0aW9ucy5wdXNoKGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5EZWF0aEFuaW1hdGlvbigpKVxuICAgIH1cbiAgICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKCkpXG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKHNpbXVsdGFuZW91c0FuaW1hdGlvbnMpXG4gICAgaWYgKGF0dGFja2VyLmRhbWFnZSA+IDApIGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5EYW1hZ2VBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGF0dGFja2VyLmRhbWFnZSlcbiAgICBpZiAoZGVmZW5kZXIuZGFtYWdlID4gMCkgZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihkZWZlbmRlci5sb2NhdGlvbiwgZGVmZW5kZXIuZGFtYWdlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRQb2ludHMsIG11bHRpcGx5UG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uLCB0b01heWJlIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSwgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgQUxMX0FVRElPX0tFWVMsIEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBtYXBUb0xvY2FsQWN0aW9uIH0gZnJvbSAnLi9rZXlib2FyZC1tYXBwZXInXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25Qcm9jZXNzb3IsIExvY2FsQWN0aW9uUmVzdWx0IH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQW5pbWF0aW9uU3BlYywgRGlzcGxheU9iamVjdHMgfSBmcm9tICcuL2Rpc3BsYXktb2JqZWN0cydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IFBvaW50ZXIgPSBQaGFzZXIuSW5wdXQuUG9pbnRlclxuXG5leHBvcnQgY29uc3QgR0FNRV9TQ0VORV9LRVkgPSAnR2FtZSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEdBTUVfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG4gIHBsYXllcklkOiBQbGF5ZXJJZFxuICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfU0laRSA9IDQ4XG5leHBvcnQgY29uc3QgRFJBV0lOR19PRkZTRVQgPSB7IHg6IDYwLCB5OiAxMDAgfVxuZXhwb3J0IGNvbnN0IGhleENlbnRlciA9IChoZXg6IEhleCk6IFBvaW50ID0+IGFkZFBvaW50cyhtdWx0aXBseVBvaW50KGNlbnRlclBvaW50KGhleCksIEhFWF9TSVpFKSwgRFJBV0lOR19PRkZTRVQpXG5cbmV4cG9ydCB0eXBlIEdhbWVJZCA9IHN0cmluZ1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSBzZXJ2ZXJPckNsaWVudD86IFNlcnZlciB8IENsaWVudFxuXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUgPSBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEVcblxuICBwcml2YXRlIGRpc3BsYXlPYmplY3RzPzogRGlzcGxheU9iamVjdHNcblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIC8vIENyZWF0ZVxuICAvLyAtLS0tLS1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgc2VydmVyT3JDbGllbnQsIHBsYXllcklkLCB3b3JsZFN0YXRlIH0gPSBzY2VuZURhdGFcbiAgICB0aGlzLnNldFVwU291bmQoKVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFLmNvcHkoeyBwbGF5ZXJJZCB9KVxuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBzZXJ2ZXJPckNsaWVudFxuICAgIGlmIChzZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcihzZXJ2ZXJPckNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RBc0NsaWVudChzZXJ2ZXJPckNsaWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzID0gbmV3IERpc3BsYXlPYmplY3RzKHRoaXMsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSwgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbilcbiAgICB0aGlzLnVwZGF0ZUFzQXRTdGFydE9mVHVybigpXG4gICAgdGhpcy5zZXRVcElucHV0cygpXG4gIH1cblxuICBwcml2YXRlIHNldFVwU291bmQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zb3VuZC5wYXVzZU9uQmx1ciA9IGZhbHNlXG4gICAgQUxMX0FVRElPX0tFWVMuZm9yRWFjaCgoa2V5KSA9PiB0aGlzLnNvdW5kLmFkZChrZXkpKVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9IChhbmltYXRpb24/OiBBbmltYXRpb25TcGVjKTogdm9pZCA9PlxuICAgIHRoaXMuZGlzcGxheU9iamVjdHM/LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIGFuaW1hdGlvbilcblxuICAvLyBOZXR3b3JraW5nXG4gIC8vIC0tLS0tLS0tLS1cblxuICBwcml2YXRlIGFjdEFzQ2xpZW50ID0gKGNsaWVudDogQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgdGhpcy5zZXJ2ZXJPckNsaWVudCA9IGNsaWVudFxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnQpXG4gIH1cblxuICBwcml2YXRlIGFjdEFzU2VydmVyID0gKHNlcnZlcjogU2VydmVyKTogdm9pZCA9PiB7XG4gICAgc2VydmVyLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlV29ybGRFdmVudClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXIud29ybGRTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luY1NlbmRUb1NlcnZlciA9IGFzeW5jIChhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCF0aGlzLnNlcnZlck9yQ2xpZW50KSB7XG4gICAgICB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIHNlcnZlck9yQ2xpZW50YFxuICAgIH1cbiAgICBpZiAodGhpcy5zZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5zZXJ2ZXJPckNsaWVudC5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIC8vIElucHV0IGhhbmRsZXJzXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBzZXRVcElucHV0cyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmlucHV0Lm1vdXNlLmRpc2FibGVDb250ZXh0TWVudSgpXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5KVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bilcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uID0gbWFwVG9Mb2NhbEFjdGlvbihldmVudCwgdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlKVxuICAgIGlmIChsb2NhbEFjdGlvbikgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbihsb2NhbEFjdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTG9jYWxBY3Rpb24gPSAobG9jYWxBY3Rpb246IExvY2FsQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb25Qcm9jZXNzb3IgPSBuZXcgTG9jYWxBY3Rpb25Qcm9jZXNzb3IodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsQWN0aW9uUHJvY2Vzc29yLnByb2Nlc3MobG9jYWxBY3Rpb24pXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5lbmFjdExvY2FsQWN0aW9uUmVzdWx0KHJlc3VsdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVuYWN0TG9jYWxBY3Rpb25SZXN1bHQgPSAocmVzdWx0OiBMb2NhbEFjdGlvblJlc3VsdCk6IHZvaWQgPT4ge1xuICAgIGlmIChyZXN1bHQubmV3TG9jYWxHYW1lU3RhdGUpIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSByZXN1bHQubmV3TG9jYWxHYW1lU3RhdGVcbiAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICB9XG4gICAgaWYgKHJlc3VsdC53b3JsZEFjdGlvbikge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuaW5jcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICAgIHRoaXMuYXN5bmNTZW5kVG9TZXJ2ZXIocmVzdWx0LndvcmxkQWN0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuZGVjcmVtZW50QWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcigpXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9pbnRlclBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cz8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyRG93biA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGVzZSBhcyB0aGV5IGhhdmUgdGhlaXIgb3duIGhhbmRsZXJzXG4gICAgY29uc3QgcHJlc3NlZFBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdHM/Lmhhc0NsaWNrSGFuZGxlckZvcihwcmVzc2VkUG9pbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocHJlc3NlZFBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHBvaW50ZXIuYnV0dG9uID09PSAyKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2dvSGV4JywgaGV4IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlTGVmdENsaWNrKGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4ID0gKGhleDogSGV4KTogTG9jYWxBY3Rpb24gPT4ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdEhleCcsIGhleCB9XG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZU1vdmUnLCB1bml0SWQ6IG1vZGUudW5pdElkLCBoZXggfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2NvbXBsZXRlQXR0YWNrJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4LCBhdHRhY2tUeXBlOiBtb2RlLmF0dGFja1R5cGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTGVmdENsaWNrID0gKGhleDogSGV4KTogdm9pZCA9PiB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHRoaXMuZ2V0TG9jYWxBY3Rpb25Gb3JDbGlja2luZ0FIZXgoaGV4KSlcblxuICAvLyBTeW5jXG4gIC8vIC0tLS1cblxuICAvLyBIYW5kbGUgd29ybGQgZXZlbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBvbGRXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudChvbGRXb3JsZFN0YXRlLCBldmVudClcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgY2FzZSAncGxheWVyQ2hhbmdlZE5hbWUnOlxuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgICAgdGhpcy5oYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50KGV2ZW50LCBvbGRXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21iYXRXb3JsZEV2ZW50KGV2ZW50LCBvbGRXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRW5kZWRUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJFbmRlZFR1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckRlZmVhdGVkKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgICAgdGhpcy5oYW5kbGVHYW1lT3ZlcihldmVudClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZU5ld1R1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR2FtZU92ZXIgPSAoZXZlbnQ6IEdhbWVPdmVyV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmIChldmVudC52aWN0b3IgPT09IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWQpIHtcbiAgICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuVklDVE9SWV9NVVNJQylcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJEZWZlYXRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZygnUGxheWVyIGRlZmVhdGVkJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpLmRlZmVhdGVkKVxuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVEKVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3VHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMudXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKCkge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogdG9NYXliZSh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKSxcbiAgICB9KVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudCA9IChldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCwgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBjb25zdCB3YXNQcmV2aW91c2x5U2VsZWN0ZWQgPVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCAmJlxuICAgICAgb2xkV29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCk/LmlkID09PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayh1bml0SWQsIHRvKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgc2VsZWN0ZWRIZXg6IHRvTWF5YmUobmV3U2VsZWN0ZWRIZXgpLFxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoeyB0eXBlOiAnbW92ZScsIHVuaXRJZCwgZnJvbSwgdG8gfSlcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sgPSAodW5pdElkOiBVbml0SWQsIGRlZmF1bHRMb2NhdGlvbjogSGV4KTogT3B0aW9uPEhleD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICAvLyBSZXRhaW4gc2VsZWN0aW9uIGlmIHVuaXQgc3RpbGwgZXhpc3RzIGFuZCB3ZSBzdGlsbCBoYXZlIGFjdGlvbiBwb2ludHMsIGVsc2Ugc2VsZWN0IG5leHQgdW5pdCAob3Igbm90aGluZyBpZiB0aGVyZSBpc24ndCBvbmUpXG4gICAgbGV0IG5ld1NlbGVjdGVkSGV4XG4gICAgaWYgKCF1bml0IHx8IHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIGNvbnN0IG5leHRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHVuaXRJZClcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gbmV4dFVuaXQ/LmxvY2F0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gZGVmYXVsdExvY2F0aW9uXG4gICAgfVxuICAgIHJldHVybiBuZXdTZWxlY3RlZEhleFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21iYXRXb3JsZEV2ZW50ID0gKGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50LCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdChhdHRhY2tlciwgZGVmZW5kZXIsIG9sZFdvcmxkU3RhdGUpXG4gICAgdGhpcy5zeW5jU2NlbmUoe1xuICAgICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgICBhdHRhY2tUeXBlOiBldmVudC5hdHRhY2tUeXBlLFxuICAgICAgYXR0YWNrZXIsXG4gICAgICBkZWZlbmRlcixcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdCA9IChcbiAgICBhdHRhY2tlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIGRlZmVuZGVyOiBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gICAgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkVW5pdElkID0gbmV3IENvbWJpbmVkU3RhdGUob2xkV29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSkuZmluZFNlbGVjdGVkVW5pdCgpPy5pZFxuICAgIGlmIChwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgPT09IGF0dGFja2VyLnVuaXRJZCAmJiBhdHRhY2tlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKGF0dGFja2VyLnVuaXRJZCwgYXR0YWNrZXIubG9jYXRpb24pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICAgICAgICBzZWxlY3RlZEhleDogdG9NYXliZShuZXdTZWxlY3RlZEhleCksXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZXNlbGVjdCB1bml0IGtpbGxlZCBieSBhbm90aGVyIHBsYXllclxuICAgICAgaWYgKGRlZmVuZGVyLmtpbGxlZCAmJiBkZWZlbmRlci51bml0SWQgPT09IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCAmJiBkZWZlbmRlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgICAgc2VsZWN0ZWRIZXg6IG5vdGhpbmcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2EnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnbWVsZWUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncyc6XG4gICAgICBpZiAobW9kZS50eXBlID09PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9XG4gICAgICBicmVha1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tUeXBlLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleCwgYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3ROZXh0VW5pdCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgY29uc3QgdW5pdFRvU2VsZWN0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHNlbGVjdGVkVW5pdD8uaWQpXG4gICAgaWYgKHVuaXRUb1NlbGVjdCkge1xuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgICAgIC5zZXRTZWxlY3RlZEhleCh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKVxuICAgICAgICAuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2VsZWN0ZWRIZXg6IG5vdGhpbmcgfSkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleCkgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgsICdtZWxlZScpXG4gICAgICBpZiAodGFyZ2V0VW5pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoJ21lbGVlJywgc2VsZWN0ZWRVbml0LCB0YXJnZXRVbml0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNrSGV4ID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGF0dGFja2VyOiBVbml0LCBkZWZlbmRlcjogVW5pdCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyOiB7IHVuaXRJZDogYXR0YWNrZXIuaWQsIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbiB9LFxuICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uIH0sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicsIHR1cm46IHRoaXMud29ybGRTdGF0ZS50dXJuIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAodW5pdCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQsIGF0dGFja1R5cGUgfVxuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9ICh1bml0SWQ6IFVuaXRJZCwgZGVzdGluYXRpb246IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbikpIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAoXG4gICAgdW5pdElkOiBVbml0SWQsXG4gICAgdGFyZ2V0SGV4OiBIZXgsXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCwgYXR0YWNrVHlwZSlcbiAgICBpZiAoZGVmZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tUeXBlLCBhdHRhY2tlciwgZGVmZW5kZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bmRlZmluZWQpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgZnJvbVBvaW50LCBoZXhDb3JuZXJzIH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgSE9WRVJfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIsXG59IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgUG9seWdvbiA9IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uLy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbnR5cGUgVGlsZVN0YXRlID0gJ2RlZmF1bHQnIHwgJ3NlbGVjdGVkJyB8ICd0YXJnZXRhYmxlJ1xuXG5leHBvcnQgY2xhc3MgTWFwRGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBoZXhQb2x5Z29uczogTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+ID0gbmV3IE1hcDxzdHJpbmcsIFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uPigpXG4gIHByaXZhdGUgcHJldmlvdXNIb3ZlckhleD86IEhleFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuY3JlYXRlSGV4KGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhleCA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBvbHlnb25DZW50ZXIgPSBoZXhDZW50ZXIoaGV4KVxuICAgIHRoaXMuc2NlbmUuYWRkLmltYWdlKHBvbHlnb25DZW50ZXIueCwgcG9seWdvbkNlbnRlci55LCAnZ3Jhc3MnKS5zZXRTY2FsZSgwLjY1KS5zZXREZXB0aCgtNSlcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKS5zZXRPcmlnaW4oMCwgMCkuc2V0RmlsbFN0eWxlKDB4MDAwMDAsIDApXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUoaGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIERlcHRoc1xuICAvLyAtNSAtIGltYWdlXG4gIC8vIC00IC0gZGVmYXVsdCBib3JkZXJcbiAgLy8gLTMgLSB0YXJnZXRhYmxlIGJvcmRlclxuICAvLyAtMiAtIHNlbGVjdGVkXG4gIC8vIC0xIC0gaG92ZXJcblxuICBwcml2YXRlIGdldERlcHRoID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogbnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiAtNFxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiAtM1xuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gLTJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNUaWxlID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldFN0cm9rZVN0eWxlKDMsIHRoaXMuZ2V0SGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpLnNldERlcHRoKHRoaXMuZ2V0RGVwdGgodGlsZVN0YXRlKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHRocm93IGBObyBwb2x5Z29uIGZvdW5kIGZvciAke2hleH1gXG4gICAgcmV0dXJuIHBvbHlnb25cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGlsZVN0YXRlID0gKGhleDogSGV4KTogVGlsZVN0YXRlID0+IHtcbiAgICBjb25zdCB7IHBsYXllcklkLCBzZWxlY3RlZEhleCwgbW9kZSB9ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZVxuICAgIGlmIChzZWxlY3RlZEhleCAmJiBzZWxlY3RlZEhleC5lcXVhbHMoaGV4KSkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PT0gJ21vdmVVbml0Jykge1xuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXgpICYmICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpKSB7XG4gICAgICAgIHJldHVybiAndGFyZ2V0YWJsZSdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PT0gJ2F0dGFjaycpIHtcbiAgICAgIGlmIChzZWxlY3RlZEhleCAmJiBjYW5BdHRhY2tPY2N1cihtb2RlLmF0dGFja1R5cGUsIGhleCwgc2VsZWN0ZWRIZXgpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgIT09IHBsYXllcklkKSB7XG4gICAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4Qm9yZGVyQ29sb3VyID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3ZlckhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gSE9WRVJfVElMRV9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocG9pbnRlclBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlckhleCAmJiB0aGlzLnByZXZpb3VzSG92ZXJIZXguZXF1YWxzKGhleCkpIHJldHVyblxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXgpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUodGhpcy5wcmV2aW91c0hvdmVySGV4KVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleClcbiAgICAgICAgLnNldFN0cm9rZVN0eWxlKHRpbGVTdGF0ZSA9PT0gJ2RlZmF1bHQnID8gMiA6IDQsIHRoaXMuZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIodGlsZVN0YXRlKSlcbiAgICAgICAgLnNldERlcHRoKC0xKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gaGV4XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBoZXhXaWR0aCwgbWFwSGVpZ2h0IH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgQUNUSU9OX1RFWFRfQ09MT1VSLCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBEUkFXSU5HX09GRlNFVCwgSEVYX1NJWkUgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5cbmV4cG9ydCB0eXBlIExvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IChhY3Rpb246IExvY2FsQWN0aW9uKSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB2aWN0b3J5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZExvZ1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2NlbmUuYWRkXG4gICAgICAuaW1hZ2UoMzYsIDMyLCAnbGxhbWEnKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1tsb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMucGxheWVyVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoNzAsIDIwLCAnJylcbiAgICB0aGlzLmhvdXJnbGFzcyA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDg3NSwgMzAsICdob3VyZ2xhc3MnKS5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgIERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLFxuICAgICAgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksXG4gICAgICAnJyxcbiAgICApXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDI1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDUwLCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQzID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDc1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQzQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQzLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDcwMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksICcnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbmRUdXJuJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZGVmZWF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIChtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSkgLyAyLCAnWW91IGhhdmUgYmVlbiBkZWZlYXRlZCEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy52aWN0b3J5VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIDMwLCAnVmljdG9yeSEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy53b3JsZExvZ1RleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDk2MCwgNTAsICcnKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0Q2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnYWJvcnQnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQyQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdtZWxlZScgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQzQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0IG9mIFt0aGlzLmVuZFR1cm5UZXh0LCB0aGlzLmFjdGlvblRleHQsIHRoaXMuYWN0aW9uVGV4dDIsIHRoaXMuYWN0aW9uVGV4dDNdKVxuICAgICAgaWYgKGdhbWVPYmplY3QuZ2V0Qm91bmRzKCkuY29udGFpbnMocG9pbnQueCwgcG9pbnQueSkpIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpXG4gICAgdGhpcy5ob3VyZ2xhc3Muc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID4gMClcbiAgICB0aGlzLnBsYXllclRleHQuc2V0VGV4dChgJHtwbGF5ZXIubmFtZX0gLSBUdXJuICR7dGhpcy53b3JsZFN0YXRlLnR1cm59YClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0My5zZXRUZXh0KCcnKVxuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5zeW5jU2VsZWN0SGV4TW9kZVRleHQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLnN5bmNNb3ZlVW5pdE1vZGVUZXh0KG1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zeW5jQXR0YWNrTW9kZVRleHQobW9kZS51bml0SWQsIG1vZGUuYXR0YWNrVHlwZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgICBpZiAocGxheWVyLmVuZGVkVHVybikge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdXYWl0aW5nIGZvciBuZXh0IHR1cm4uLi4nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ0VuZCBUdXJuIChTaGlmdCArIEVudGVyKScpXG4gICAgfVxuICAgIHRoaXMuZGVmZWF0VGV4dC5zZXRWaXNpYmxlKHBsYXllci5kZWZlYXRlZClcbiAgICB0aGlzLnZpY3RvcnlUZXh0LnNldFZpc2libGUod29ybGRTdGF0ZS5nYW1lT3ZlckluZm8/LnZpY3RvciA9PT0gcGxheWVyLmlkKVxuICAgIHRoaXMud29ybGRMb2dUZXh0LnNldFRleHQoUi50YWtlTGFzdCgzMCwgdGhpcy53b3JsZFN0YXRlLndvcmxkTG9nKS5qb2luKCdcXG4nKSlcbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkLCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoYENsaWNrIHVuaXQgdG8gJHthdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFjaycgOiAnc3BpdCd9IChvciBFU0MgdG8gY2FuY2VsKWApXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJ1NwaXQgKHMpJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllck5hbWUgPSAocGxheWVySWQ6IFBsYXllcklkKTogc3RyaW5nID0+IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpLm5hbWVcblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBsYXllcklkLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9ID0gdW5pdFxuICAgIGNvbnN0IHBsYXllck5hbWUgPSB0aGlzLmdldFBsYXllck5hbWUocGxheWVySWQpXG4gICAgcmV0dXJuIGAke25hbWV9IC0gTGxhbWEgd2FycmlvciAtICR7cGxheWVyTmFtZX0gLSBIUCAke2hpdFBvaW50cy5jdXJyZW50fS8ke2hpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke2FjdGlvblBvaW50cy5jdXJyZW50fS8ke2FjdGlvblBvaW50cy5tYXh9YFxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IGhleENlbnRlciB9IGZyb20gJy4vZ2FtZS1zY2VuZSdcbmltcG9ydCB7IEhFQUxUSF9CT1JERVJfQ09MT1VSLCBIRUFMVEhfRU1QVFlfQ09MT1VSLCBIRUFMVEhfRlVMTF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBhZGRQb2ludHMsIGRpc3RhbmNlQmV0d2VlblBvaW50cywgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IHBsYXlUd2VlbiB9IGZyb20gJy4uLy4uL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcblxuY29uc3QgSEVBTFRIX0JBUl9XSURUSCA9IDUwXG5jb25zdCBIRUFMVEhfQkFSX0hFSUdIVCA9IDEyXG5jb25zdCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MgPSAyXG5jb25zdCBJTUFHRV9PRkZTRVQgPSB7IHg6IDAsIHk6IDQgfVxuY29uc3QgSEVBTFRIX0JBUl9PRkZTRVQgPSB7IHg6IC0yNSwgeTogLTQwIH1cblxuZXhwb3J0IGNsYXNzIFVuaXREaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgdW5pdDogVW5pdFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhCYXJHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzXG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgdW5pdDogVW5pdCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICB0aGlzLmltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIDAsICdsbGFtYScpLnNldFNjYWxlKDAuOCkuc2V0VGludCh0aGlzLmdldFBsYXllclRpbnQodGhpcy51bml0LnBsYXllcklkKSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzID0gc2NlbmUuYWRkLmdyYXBoaWNzKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyVGludCA9IChwbGF5ZXJJZDogUGxheWVySWQpID0+XG4gICAgUExBWUVSX1RJTlRTWyhQTEFZRVJfVElOVFMubGVuZ3RoICsgcGxheWVySWQgLSAxKSAlIFBMQVlFUl9USU5UUy5sZW5ndGhdXG5cbiAgcHJpdmF0ZSBnZXRIZWFsdGhCYXJQb3NpdGlvbiA9IChwb2ludDogUG9pbnQpOiBQb2ludCA9PiBhZGRQb2ludHMocG9pbnQsIEhFQUxUSF9CQVJfT0ZGU0VUKVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAodW5pdDogVW5pdCk6IHZvaWQgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09PSB0aGlzLnVuaXQuaWQpXG4gICAgdGhpcy51bml0ID0gdW5pdFxuICAgIGNvbnN0IHVuaXRQb2ludCA9IGhleENlbnRlcih0aGlzLnVuaXQubG9jYXRpb24pXG4gICAgdGhpcy5pbWFnZS5zZXRQb3NpdGlvbih1bml0UG9pbnQueCArIElNQUdFX09GRlNFVC54LCB1bml0UG9pbnQueSArIElNQUdFX09GRlNFVC55KVxuICAgIHRoaXMuc3luY0hlYWx0aEJhcih1bml0UG9pbnQpXG4gIH1cblxuICBwcml2YXRlIHN5bmNIZWFsdGhCYXIgPSAodW5pdFBvaW50OiBQb2ludCkgPT4ge1xuICAgIGNvbnN0IGhlYWx0aEJhclBvc2l0aW9uID0gdGhpcy5nZXRIZWFsdGhCYXJQb3NpdGlvbih1bml0UG9pbnQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5zZXRQb3NpdGlvbihoZWFsdGhCYXJQb3NpdGlvbi54LCBoZWFsdGhCYXJQb3NpdGlvbi55KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuY2xlYXIoKVxuXG4gICAgLy8gRHJhdyBib3JkZXJcbiAgICBjb25zdCBpbm5lcldpZHRoID0gSEVBTFRIX0JBUl9XSURUSCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IEhFQUxUSF9CQVJfSEVJR0hUIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9CT1JERVJfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoMCwgMCwgSEVBTFRIX0JBUl9XSURUSCwgSEVBTFRIX0JBUl9IRUlHSFQpXG5cbiAgICAvLyBEcmF3IGVtcHR5IGJhY2tncm91bmRcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRU1QVFlfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuXG4gICAgLy8gRmlsbCBpbiBiYXJcbiAgICBjb25zdCB7IGN1cnJlbnQsIG1heCB9ID0gdGhpcy51bml0LmhpdFBvaW50c1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9GVUxMX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgKGlubmVyV2lkdGggKiBjdXJyZW50KSAvIG1heCxcbiAgICAgIGlubmVySGVpZ2h0LFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBydW5Nb3ZlQW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IE1PVkVfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwXG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogTU9WRV9BTklNQVRJT05fRFVSQVRJT04sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiBNT1ZFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBydW5EZWF0aEFuaW1hdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB0d2VlbiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiBbdGhpcy5pbWFnZSwgdGhpcy5oZWFsdGhCYXJHcmFwaGljc10sXG4gICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgYXdhaXQgcGxheVR3ZWVuKHR3ZWVuKVxuICB9XG5cbiAgcHVibGljIHJ1blNwaXRBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZnJvbVBvaW50ID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgdG9Qb2ludCA9IGhleENlbnRlcih0bylcbiAgICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlQmV0d2VlblBvaW50cyhmcm9tUG9pbnQsIHRvUG9pbnQpXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShmcm9tUG9pbnQueCwgZnJvbVBvaW50LnksICdzcGl0Jykuc2V0U2NhbGUoMC44KVxuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IGltYWdlLFxuICAgICAgeDoge1xuICAgICAgICBmcm9tOiBmcm9tUG9pbnQueCxcbiAgICAgICAgdG86IHRvUG9pbnQueCxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIGZyb206IGZyb21Qb2ludC55LFxuICAgICAgICB0bzogdG9Qb2ludC55LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiBkaXN0YW5jZSAqIDQsXG4gICAgICBlYXNlOiAnUXVhZCcsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gICAgaW1hZ2UuZGVzdHJveSgpXG4gIH1cblxuICBwdWJsaWMgcnVuRGFtYWdlQW5pbWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uOiBIZXgsIGRhbWFnZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgbG9jYXRpb25Qb2ludCA9IGhleENlbnRlcihsb2NhdGlvbilcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KGxvY2F0aW9uUG9pbnQueCwgbG9jYXRpb25Qb2ludC55LCBkYW1hZ2UudG9TdHJpbmcoKSwge1xuICAgICAgICBjb2xvcjogJyNmZjg4ODgnLFxuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAyLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNilcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgeToge1xuICAgICAgICBmcm9tOiBsb2NhdGlvblBvaW50LnkgLSA1MCxcbiAgICAgICAgdG86IGxvY2F0aW9uUG9pbnQueSAtIDc1LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgZWFzZTogJ0xpbmVhcicsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGVhc2U6ICdDdWJpYy5pbicsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICB0ZXh0LmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIHJ1bkF0dGFja0FuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2NlbmUudHdlZW5zLmtpbGxUd2VlbnNPZihbdGhpcy5oZWFsdGhCYXJHcmFwaGljcywgdGhpcy5pbWFnZV0pXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5kZXN0cm95KClcbiAgICB0aGlzLmltYWdlLmRlc3Ryb3koKVxuICB9XG59XG5cbnR5cGUgVHdlZW5YWSA9IHsgeDogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfTsgeTogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfSB9XG5cbmNvbnN0IGNhbGN1bGF0ZVR3ZWVuWFkgPSAoZnJvbTogUG9pbnQsIHRvOiBQb2ludCwgb2Zmc2V0OiBQb2ludCk6IFR3ZWVuWFkgPT4gKHtcbiAgeDoge1xuICAgIGZyb206IGZyb20ueCArIG9mZnNldC54LFxuICAgIHRvOiB0by54ICsgb2Zmc2V0LngsXG4gIH0sXG4gIHk6IHtcbiAgICBmcm9tOiBmcm9tLnkgKyBvZmZzZXQueSxcbiAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICB9LFxufSlcbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL21lbnUtYnV0dG9uJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiB9IGZyb20gJy4uLy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBzZXRVcmxJbmZvIH0gZnJvbSAnLi4vYm9vdC9ib290LXNjZW5lJ1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lEIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgY29uc3QgTUFJTl9NRU5VX1NDRU5FX0tFWSA9ICdNYWluTWVudSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IE1BSU5fTUVOVV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNClcbiAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdIb3N0IEdhbWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5oYW5kbGVIb3N0R2FtZSgpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSG9zdEdhbWUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRFdmVudERiID0gYXdhaXQgb3BlbldvcmxkRXZlbnREYigpXG4gICAgY29uc3QgZ2FtZUlkOiBHYW1lSWQgPSB1dWlkKClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IEhPU1RfUExBWUVSX0lEXG4gICAgY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgSU5JVElBTF9XT1JMRF9TVEFURSwgMClcbiAgICBzZXJ2ZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCB7IHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IElOSVRJQUxfV09STERfU1RBVEUgfSlcbiAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkIH0pXG4gICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciwgd29ybGRTdGF0ZTogc2VydmVyLndvcmxkU3RhdGUsIHBsYXllcklkOiBwbGF5ZXJJZCB9XG4gICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlQb2ludCA9IChwb2ludDogUG9pbnQsIG46IG51bWJlcik6IFBvaW50ID0+ICh7IHg6IHBvaW50LnggKiBuLCB5OiBwb2ludC55ICogbiB9KVxuXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHtcbiAgeDogcG9pbnQxLnggLSBwb2ludDIueCxcbiAgeTogcG9pbnQxLnkgLSBwb2ludDIueSxcbn0pXG5cbmNvbnN0IHNxdWFyZSA9IChuOiBudW1iZXIpOiBudW1iZXIgPT4gbiAqIG5cblxuZXhwb3J0IGNvbnN0IGRpc3RhbmNlQmV0d2VlblBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogbnVtYmVyID0+XG4gIE1hdGguc3FydChzcXVhcmUocG9pbnQxLnggLSBwb2ludDIueCkgKyBzcXVhcmUocG9pbnQxLnkgLSBwb2ludDIueSkpXG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSwgQXR0YWNrV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgQ29tYmF0V29ybGRFdmVudCwgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgcmFuZG9tSW50SW5jbHVzaXZlIH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcblxuZXhwb3J0IGNvbnN0IGNhbkF0dGFja09jY3VyID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGZyb206IEhleCwgdG86IEhleCk6IGJvb2xlYW4gPT4ge1xuICBzd2l0Y2ggKGF0dGFja1R5cGUpIHtcbiAgICBjYXNlICdtZWxlZSc6XG4gICAgICByZXR1cm4gZnJvbS5pc0FkamFjZW50VG8odG8pXG4gICAgY2FzZSAnc3BpdCc6XG4gICAgICByZXR1cm4gZnJvbS5kaXN0YW5jZVRvKHRvKSA8PSAyXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IHRoaXMudmFsaWRhdGVBdHRhY2soYWN0aW9uKVxuICAgIGNvbnN0IHsgYXR0YWNrVHlwZSB9ID0gYWN0aW9uXG4gICAgY29uc3QgcmF3QXR0YWNrZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKDgsIDEyKSA6IDBcbiAgICBjb25zdCByYXdEZWZlbmRlckRhbWFnZSA9IGF0dGFja1R5cGUgPT09ICdtZWxlZScgPyByYW5kb21JbnRJbmNsdXNpdmUoMTcsIDIzKSA6IHJhbmRvbUludEluY2x1c2l2ZSg0LCA2KVxuICAgIGNvbnN0IGF0dGFja2VyRGFtYWdlID0gTWF0aC5taW4oYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQsIHJhd0F0dGFja2VyRGFtYWdlKVxuICAgIGNvbnN0IGRlZmVuZGVyRGFtYWdlID0gTWF0aC5taW4oZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQsIHJhd0RlZmVuZGVyRGFtYWdlKVxuICAgIGNvbnN0IGNvbWJhdFdvcmxkRXZlbnQgPSB0aGlzLm1ha2VDb21iYXRXb3JsZEV2ZW50KGF0dGFja1R5cGUsIGF0dGFja2VyLCBhdHRhY2tlckRhbWFnZSwgZGVmZW5kZXIsIGRlZmVuZGVyRGFtYWdlKVxuXG4gICAgbGV0IG5ld1dvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChjb21iYXRXb3JsZEV2ZW50KVxuICAgIGNvbnN0IGV2ZW50czogV29ybGRFdmVudFtdID0gW2NvbWJhdFdvcmxkRXZlbnRdXG4gICAgbGV0IG5leHRXb3JsZEV2ZW50SWQgPSB0aGlzLm5leHRXb3JsZEV2ZW50SWQgKyAxXG4gICAgaWYgKG5ld1dvcmxkU3RhdGUuaXNQbGF5ZXJEZWZlYXRlZChkZWZlbmRlci5wbGF5ZXJJZCkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5wbGF5ZXJEZWZlYXRlZEV2ZW50KG5leHRXb3JsZEV2ZW50SWQrKywgZGVmZW5kZXIucGxheWVySWQpXG4gICAgICBldmVudHMucHVzaChldmVudClcbiAgICAgIG5ld1dvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgfVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmlzUGxheWVyRGVmZWF0ZWQoYXR0YWNrZXIucGxheWVySWQpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMucGxheWVyRGVmZWF0ZWRFdmVudChuZXh0V29ybGRFdmVudElkKyssIGF0dGFja2VyLnBsYXllcklkKVxuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICBuZXdXb3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICBjb25zdCB1bmRlZmVhdGVkUGxheWVycyA9IG5ld1dvcmxkU3RhdGUucGxheWVycy5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5kZWZlYXRlZClcbiAgICBpZiAoUi5pc0VtcHR5KHVuZGVmZWF0ZWRQbGF5ZXJzKSkge1xuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInIH0pXG4gICAgfSBlbHNlIGlmICh1bmRlZmVhdGVkUGxheWVycy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IHZpY3RvciA9IHVuZGVmZWF0ZWRQbGF5ZXJzWzBdLmlkXG4gICAgICBldmVudHMucHVzaCh7IGlkOiBuZXh0V29ybGRFdmVudElkKyssIHR5cGU6ICdnYW1lT3ZlcicsIHZpY3RvciB9KVxuICAgIH1cbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cblxuICBwcml2YXRlIHBsYXllckRlZmVhdGVkRXZlbnQgPSAoaWQ6IFdvcmxkRXZlbnRJZCwgcGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50ID0+ICh7XG4gICAgaWQsXG4gICAgdHlwZTogJ3BsYXllckRlZmVhdGVkJyxcbiAgICBwbGF5ZXJJZDogcGxheWVySWQsXG4gIH0pXG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogeyBhdHRhY2tlcjogVW5pdDsgZGVmZW5kZXI6IFVuaXQgfSA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXJJZCA9IGFjdGlvbi5hdHRhY2tlci51bml0SWRcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXJJZClcbiAgICBpZiAoIWF0dGFja2VyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7YXR0YWNrZXJJZH1gXG4gICAgaWYgKGF0dGFja2VyLnBsYXllcklkICE9PSB0aGlzLnBsYXllcklkKSB0aHJvdyBgQ2Fubm90IGNvbnRyb2wgYW5vdGhlciBwbGF5ZXIncyB1bml0OiAke2F0dGFja2VyLmlkfWBcbiAgICBpZiAoYXR0YWNrZXIuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIGF0dGFja2BcbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uYXR0YWNrZXIubG9jYXRpb24pKSB0aHJvdyBgQXR0YWNrZXIgbm90IGluIGV4cGVjdGVkIGxvY2F0aW9uYFxuXG4gICAgY29uc3QgZGVmZW5kZXJJZCA9IGFjdGlvbi5kZWZlbmRlci51bml0SWRcbiAgICBjb25zdCBkZWZlbmRlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXJJZClcbiAgICBpZiAoIWRlZmVuZGVyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXJJZH1gXG4gICAgaWYgKGRlZmVuZGVyLnBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB0aHJvdyBgQ2Fubm90IGF0dGFjayBvd24gdW5pdGBcbiAgICBpZiAoIWRlZmVuZGVyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uZGVmZW5kZXIubG9jYXRpb24pKSB0aHJvdyBgRGVmZW5kZXIgbm90IGluIGV4cGVjdGVkIGxvY2F0aW9uYFxuXG4gICAgaWYgKCFjYW5BdHRhY2tPY2N1cihhY3Rpb24uYXR0YWNrVHlwZSwgYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgYXR0YWNrIG9mIHR5cGUgJHthY3Rpb24uYXR0YWNrVHlwZX0gYmV0d2VlbiBoZXhlcyAke2F0dGFja2VyLmxvY2F0aW9ufSB0byAke2RlZmVuZGVyLmxvY2F0aW9ufSB0b28gZmFyIGFwYXJ0YFxuICAgIHJldHVybiB7IGF0dGFja2VyLCBkZWZlbmRlciB9XG4gIH1cblxuICBwcml2YXRlIG1ha2VDb21iYXRXb3JsZEV2ZW50ID0gKFxuICAgIGF0dGFja1R5cGU6IEF0dGFja1R5cGUsXG4gICAgYXR0YWNrZXI6IFVuaXQsXG4gICAgYXR0YWNrZXJEYW1hZ2U6IG51bWJlcixcbiAgICBkZWZlbmRlcjogVW5pdCxcbiAgICBkZWZlbmRlckRhbWFnZTogbnVtYmVyLFxuICApOiBDb21iYXRXb3JsZEV2ZW50ID0+ICh7XG4gICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICB0eXBlOiAnY29tYmF0JyxcbiAgICBhdHRhY2tUeXBlLFxuICAgIGF0dGFja2VyOiB7XG4gICAgICBwbGF5ZXJJZDogYXR0YWNrZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGF0dGFja2VyLmlkLFxuICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBhdHRhY2tlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT09IGF0dGFja2VyRGFtYWdlLFxuICAgIH0sXG4gICAgZGVmZW5kZXI6IHtcbiAgICAgIHBsYXllcklkOiBkZWZlbmRlci5wbGF5ZXJJZCxcbiAgICAgIHVuaXRJZDogZGVmZW5kZXIuaWQsXG4gICAgICBsb2NhdGlvbjogZGVmZW5kZXIubG9jYXRpb24sXG4gICAgICBkYW1hZ2U6IGRlZmVuZGVyRGFtYWdlLFxuICAgICAga2lsbGVkOiBkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCA9PT0gZGVmZW5kZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgfSlcbn1cbiIsImltcG9ydCB7XG4gIEpvaW5lZFJlc3BvbnNlLFxuICBKb2luUmVxdWVzdCxcbiAgUmVqb2luZWRSZXNwb25zZSxcbiAgUmVqb2luUmVxdWVzdCxcbiAgV29ybGRBY3Rpb25SZXF1ZXN0LFxuICBXb3JsZEV2ZW50TWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBQZWVyQ2xpZW50IH0gZnJvbSAnLi9wZWVyLWNsaWVudCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3dvcmxkLXN0YXRlLW93bmVyJ1xuXG5leHBvcnQgY2xhc3MgQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyQ2xpZW50OiBQZWVyQ2xpZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHVibGljIHJlbW92ZUxpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBlZXJDbGllbnQ6IFBlZXJDbGllbnQpIHtcbiAgICB0aGlzLnBlZXJDbGllbnQgPSBwZWVyQ2xpZW50XG4gICAgcGVlckNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnRNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50TWVzc2FnZSA9IChtZXNzYWdlOiBXb3JsZEV2ZW50TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmV2ZW50KVxuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb25uZWN0ID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxDbGllbnQ+ID0+IHtcbiAgICBjb25zdCBwZWVyQ2xpZW50ID0gYXdhaXQgUGVlckNsaWVudC5jb25uZWN0KGdhbWVJZClcbiAgICByZXR1cm4gbmV3IENsaWVudChwZWVyQ2xpZW50KVxuICB9XG5cbiAgcHVibGljIHJlam9pbiA9IGFzeW5jIChwbGF5ZXJJZDogUGxheWVySWQpOiBQcm9taXNlPFdvcmxkU3RhdGU+ID0+IHtcbiAgICBjb25zdCByZWpvaW5SZXF1ZXN0OiBSZWpvaW5SZXF1ZXN0ID0geyB0eXBlOiAncmVqb2luJywgcGxheWVySWQgfVxuICAgIGNvbnN0IHJlam9pbmVkUmVzcG9uc2U6IFJlam9pbmVkUmVzcG9uc2UgPSBhd2FpdCB0aGlzLnBlZXJDbGllbnQuc2VuZFJlcXVlc3QocmVqb2luUmVxdWVzdClcbiAgICByZXR1cm4gV29ybGRTdGF0ZS5mcm9tSnNvbihyZWpvaW5lZFJlc3BvbnNlLndvcmxkU3RhdGUpXG4gIH1cblxuICBwdWJsaWMgam9pbiA9IGFzeW5jICgpOiBQcm9taXNlPHsgcGxheWVySWQ6IFBsYXllcklkOyB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlIH0+ID0+IHtcbiAgICBjb25zdCBqb2luUmVxdWVzdDogSm9pblJlcXVlc3QgPSB7IHR5cGU6ICdqb2luJyB9XG4gICAgY29uc3Qgam9pbmVkUmVzcG9uc2U6IEpvaW5lZFJlc3BvbnNlID0gYXdhaXQgdGhpcy5wZWVyQ2xpZW50LnNlbmRSZXF1ZXN0KGpvaW5SZXF1ZXN0KVxuICAgIGNvbnN0IHBsYXllcklkID0gam9pbmVkUmVzcG9uc2UucGxheWVySWRcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihqb2luZWRSZXNwb25zZS53b3JsZFN0YXRlKVxuICAgIHJldHVybiB7IHBsYXllcklkLCB3b3JsZFN0YXRlIH1cbiAgfVxuXG4gIHB1YmxpYyBzZW5kQWN0aW9uID0gYXN5bmMgKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2U6IFdvcmxkQWN0aW9uUmVxdWVzdCA9IHtcbiAgICAgIHR5cGU6ICd3b3JsZEFjdGlvbicsXG4gICAgICBhY3Rpb246IHNlcmlhbGlzZVRvSnNvbihhY3Rpb24pLFxuICAgICAgcGxheWVySWQ6IHBsYXllcklkLFxuICAgIH1cbiAgICBhd2FpdCB0aGlzLnBlZXJDbGllbnQuc2VuZFJlcXVlc3QobWVzc2FnZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQge1xuICBCcm9hZGNhc3RNZXNzYWdlMixcbiAgUGVlcklkLFxuICBSZXF1ZXN0SWQsXG4gIFJlcXVlc3RNZXNzYWdlMixcbiAgUmVzcG9uc2VNZXNzYWdlMixcbiAgU2VydmVyVG9DbGllbnRNZXNzYWdlMixcbn0gZnJvbSAnLi9wZWVyLXNlcnZlcidcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcbmltcG9ydCB7IG5ld1BlZXIgfSBmcm9tICcuL3BlZXItdXRpbHMnXG5cbnR5cGUgUmVzb2x2ZTxUPiA9ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBQZWVyTGlzdGVuZXIgPSAobWVzc2FnZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBQZWVyQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0c3RhbmRpbmdSZXF1ZXN0czogTWFwPFJlcXVlc3RJZCwgUmVzb2x2ZTxhbnk+PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogUGVlckxpc3RlbmVyW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25EYXRhID0gKG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZTIpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiByZWNlaXZlZCBtZXNzYWdlJylcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdyZXNwb25zZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlUmVzcG9uc2UobWVzc2FnZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jyb2FkY2FzdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQnJvYWRjYXN0KG1lc3NhZ2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbm5lY3QgPSAocGVlcklkOiBQZWVySWQpOiBQcm9taXNlPFBlZXJDbGllbnQ+ID0+XG4gICAgbmV3IFByb21pc2U8UGVlckNsaWVudD4oKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHBlZXIgPSBuZXdQZWVyKClcbiAgICAgIHBlZXIub24oJ2Vycm9yJywgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICAgIHBlZXIub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IG9wZW4nKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gcGVlci5jb25uZWN0KHBlZXJJZCwgeyByZWxpYWJsZTogdHJ1ZSB9KVxuICAgICAgICBjb25uZWN0aW9uLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IGNvbm5lY3Rpb24gb3BlbicpXG4gICAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFBlZXJDbGllbnQoY29ubmVjdGlvbilcbiAgICAgICAgICByZXNvbHZlKGNsaWVudClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICBwdWJsaWMgc2VuZFJlcXVlc3QgPSAocmVxdWVzdDogYW55KTogUHJvbWlzZTxhbnk+ID0+XG4gICAgbmV3IFByb21pc2U8YW55PigocmVzb2x2ZTogUmVzb2x2ZTxhbnk+KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0TWVzc2FnZTogUmVxdWVzdE1lc3NhZ2UyID0ge1xuICAgICAgICB0eXBlOiAncmVxdWVzdCcsXG4gICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiBzZW5kaW5nIHJlcXVlc3QnKVxuICAgICAgLy8gY29uc29sZS5sb2cocmVxdWVzdE1lc3NhZ2UpXG4gICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZChyZXF1ZXN0TWVzc2FnZSlcbiAgICAgIHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5zZXQocmVxdWVzdE1lc3NhZ2UuaWQsIHJlc29sdmUpXG4gICAgfSlcblxuICBwcml2YXRlIGhhbmRsZVJlc3BvbnNlID0gKG1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZTIpOiB2b2lkID0+IHtcbiAgICBjb25zdCByZXF1ZXN0SWQgPSBtZXNzYWdlLnJlc3BvbnNlVG9cbiAgICBjb25zdCByZXNvbHZlOiBPcHRpb248UmVzb2x2ZTxhbnk+PiA9IHRoaXMub3V0c3RhbmRpbmdSZXF1ZXN0cy5nZXQocmVxdWVzdElkKVxuICAgIGlmIChyZXNvbHZlKSB7XG4gICAgICByZXNvbHZlKG1lc3NhZ2UucmVzcG9uc2UpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYENMSUVOVDogcmVzcG9uc2UgcmVjZWl2ZWQgZm9yIHVua25vd24gcmVxdWVzdCAke3JlcXVlc3RJZH1gKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAobWVzc2FnZTogYW55KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXIobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJyb2FkY2FzdCA9IChtZXNzYWdlOiBCcm9hZGNhc3RNZXNzYWdlMik6IHZvaWQgPT4ge1xuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKG1lc3NhZ2UuYm9keSlcbiAgfVxufVxuIiwiaW1wb3J0IFBlZXIgPSByZXF1aXJlKCdwZWVyanMnKVxuaW1wb3J0IHsgbmV3UGVlciB9IGZyb20gJy4vcGVlci11dGlscydcblxuZXhwb3J0IHR5cGUgUGVlcklkID0gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIFJlcXVlc3RJZCA9IHN0cmluZ1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RNZXNzYWdlMiB7XG4gIHR5cGU6ICdyZXF1ZXN0J1xuICBpZDogUmVxdWVzdElkXG4gIHJlcXVlc3Q6IGFueVxufVxuXG5leHBvcnQgdHlwZSBDbGllbnRUb1NlcnZlck1lc3NhZ2UyID0gUmVxdWVzdE1lc3NhZ2UyXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VNZXNzYWdlMiB7XG4gIHR5cGU6ICdyZXNwb25zZSdcbiAgcmVzcG9uc2VUbzogUmVxdWVzdElkXG4gIHJlc3BvbnNlOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcm9hZGNhc3RNZXNzYWdlMiB7XG4gIHR5cGU6ICdicm9hZGNhc3QnXG4gIGJvZHk6IGFueVxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UyID0gUmVzcG9uc2VNZXNzYWdlMiB8IEJyb2FkY2FzdE1lc3NhZ2UyXG5cbmV4cG9ydCBjbGFzcyBQZWVyU2VydmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyOiBQZWVyXG4gIHByaXZhdGUgcmVhZG9ubHkgY29ubmVjdGlvbnM6IFBlZXIuRGF0YUNvbm5lY3Rpb25bXSA9IFtdXG4gIHByaXZhdGUgcmVhZG9ubHkgaGFuZGxlTWVzc2FnZTogKG1lc3NhZ2U6IGFueSkgPT4gYW55XG5cbiAgY29uc3RydWN0b3IoaWQ6IFBlZXJJZCwgaGFuZGxlTWVzc2FnZTogKG1lc3NhZ2U6IGFueSkgPT4gYW55KSB7XG4gICAgdGhpcy5oYW5kbGVNZXNzYWdlID0gaGFuZGxlTWVzc2FnZVxuICAgIHRoaXMucGVlciA9IG5ld1BlZXIoaWQpXG4gICAgdGhpcy5wZWVyLm9uKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgdGhpcy5wZWVyLm9uKCdjb25uZWN0aW9uJywgdGhpcy5oYW5kbGVOZXdDb25uZWN0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOZXdDb25uZWN0aW9uID0gKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VSVkVSOiByZWNlaXZlZCBuZXcgY29ubmVjdGlvbiBmcm9tICcgKyBjb25uZWN0aW9uLnBlZXIpXG4gICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEoY29ubmVjdGlvbikpXG4gIH1cblxuICBwdWJsaWMgYnJvYWRjYXN0ID0gKG1lc3NhZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGJyb2FkY2FzdE1lc3NhZ2U6IEJyb2FkY2FzdE1lc3NhZ2UyID0geyB0eXBlOiAnYnJvYWRjYXN0JywgYm9keTogbWVzc2FnZSB9XG4gICAgZm9yIChjb25zdCBjb25uZWN0aW9uIG9mIHRoaXMuY29ubmVjdGlvbnMpIGNvbm5lY3Rpb24uc2VuZChicm9hZGNhc3RNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb25uZWN0aW9uRGF0YSA9IChjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKSA9PiAobWVzc2FnZTogQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlMik6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdTRVJWRVI6IHJlY2VpdmVkIG5ldyBtZXNzYWdlIGZyb20gJyArIGNvbm5lY3Rpb24ucGVlcilcbiAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5oYW5kbGVNZXNzYWdlKG1lc3NhZ2UucmVxdWVzdClcbiAgICBjb25zdCByZXNwb25zZU1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZTIgPSB7XG4gICAgICB0eXBlOiAncmVzcG9uc2UnLFxuICAgICAgcmVzcG9uc2VUbzogbWVzc2FnZS5pZCxcbiAgICAgIHJlc3BvbnNlLFxuICAgIH1cbiAgICBjb25uZWN0aW9uLnNlbmQocmVzcG9uc2VNZXNzYWdlKVxuICB9XG59XG4iLCJpbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5cbmV4cG9ydCBjb25zdCBuZXdQZWVyID0gKGlkPzogc3RyaW5nLCBvcHRpb25zPzogUGVlci5QZWVySlNPcHRpb24pOiBQZWVyID0+IHtcbiAgY29uc3QgX1BlZXIgPSAod2luZG93IGFzIGFueSkuUGVlciBhcyB0eXBlb2YgUGVlclxuICByZXR1cm4gbmV3IF9QZWVyKGlkLCBvcHRpb25zKVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkRXZlbnRMaXN0ZW5lciwgV29ybGRTdGF0ZU93bmVyIH0gZnJvbSAnLi93b3JsZC1zdGF0ZS1vd25lcidcbmltcG9ydCB7IFBsYXllckFkZGVkV29ybGRFdmVudCwgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgQ2xpZW50UmVxdWVzdCwgUmVqb2luUmVxdWVzdCwgV29ybGRFdmVudE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQWRkUGxheWVyV29ybGRBY3Rpb24sIFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkRXZlbnREYiB9IGZyb20gJy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBQZWVyU2VydmVyIH0gZnJvbSAnLi9wZWVyLXNlcnZlcidcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZU93bmVyOiBXb3JsZFN0YXRlT3duZXJcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYlxuICBwcml2YXRlIHJlYWRvbmx5IGdhbWVJZDogR2FtZUlkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyU2VydmVyOiBQZWVyU2VydmVyXG5cbiAgcHVibGljIGdldCB3b3JsZFN0YXRlKCk6IFdvcmxkU3RhdGUge1xuICAgIHJldHVybiB0aGlzLndvcmxkU3RhdGVPd25lci53b3JsZFN0YXRlXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHJlc3RvcmVHYW1lID0gYXN5bmMgKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8U2VydmVyPiA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgd29ybGRFdmVudERiLmdldEV2ZW50c0ZvckdhbWUoZ2FtZUlkKVxuICAgIGxldCB3b3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgUi5zb3J0QnkoKGV2ZW50KSA9PiBldmVudC5pZCwgZXZlbnRzKSkge1xuICAgICAgd29ybGRTdGF0ZSA9IHdvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTZXJ2ZXIod29ybGRFdmVudERiLCBnYW1lSWQsIHdvcmxkU3RhdGUsIGV2ZW50cy5sZW5ndGggKyAxKVxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSBsaXN0ZW5lcihldmVudClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZEV2ZW50RGIgPSB3b3JsZEV2ZW50RGJcbiAgICB0aGlzLmdhbWVJZCA9IGdhbWVJZFxuICAgIHRoaXMucGVlclNlcnZlciA9IG5ldyBQZWVyU2VydmVyKHRoaXMuZ2FtZUlkLCB0aGlzLmhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSlcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lciA9IG5ldyBXb3JsZFN0YXRlT3duZXIod29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZClcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lci5hZGRMaXN0ZW5lcigoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICAgICAgdGhpcy53b3JsZEV2ZW50RGIuc3RvcmUodGhpcy5nYW1lSWQsIGV2ZW50KVxuICAgICAgY29uc3QgbWVzc2FnZTogV29ybGRFdmVudE1lc3NhZ2UgPSB7IHR5cGU6ICd3b3JsZEV2ZW50JywgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCkgfVxuICAgICAgdGhpcy5wZWVyU2VydmVyLmJyb2FkY2FzdChtZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudEpvaW4gPSAoKTogYW55ID0+IHtcbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICAvLyBUT0RPOiB0ZWxsIHRoZSBjbGllbnQgXCJiYWQgbHVja1wiXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFkZFBsYXllckFjdGlvbjogQWRkUGxheWVyV29ybGRBY3Rpb24gPSB7IHR5cGU6ICdhZGRQbGF5ZXInIH1cbiAgICAgIGNvbnN0IHBsYXllckFkZGVkRXZlbnQgPSA8UGxheWVyQWRkZWRXb3JsZEV2ZW50PnRoaXMuaGFuZGxlQWN0aW9uKDEsIGFkZFBsYXllckFjdGlvbilbMF1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdqb2luZWQnLFxuICAgICAgICBwbGF5ZXJJZDogcGxheWVyQWRkZWRFdmVudC5wbGF5ZXJJZCxcbiAgICAgICAgd29ybGRTdGF0ZTogdGhpcy53b3JsZFN0YXRlLnRvSnNvbigpLFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50UmVqb2luID0gKG1lc3NhZ2U6IFJlam9pblJlcXVlc3QpOiBhbnkgPT4ge1xuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5pc1ZhbGlkUGxheWVySWQobWVzc2FnZS5wbGF5ZXJJZCkpXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAncmVqb2luZWQnLFxuICAgICAgICB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLnRvSnNvbigpLFxuICAgICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gVE9ETzogdGVsbCB0aGUgY2xpZW50IG5vXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRUb1NlcnZlck1lc3NhZ2UgPSAobWVzc2FnZTogQ2xpZW50UmVxdWVzdCk6IGFueSA9PiB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnam9pbic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNsaWVudEpvaW4oKVxuICAgICAgY2FzZSAncmVqb2luJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2xpZW50UmVqb2luKG1lc3NhZ2UpXG4gICAgICBjYXNlICd3b3JsZEFjdGlvbic6XG4gICAgICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmhhbmRsZUFjdGlvbihtZXNzYWdlLnBsYXllcklkLCBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuYWN0aW9uKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCBhY3Rpb24pXG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQXR0YWNrV29ybGRBY3Rpb24sXG4gIENoYW5nZVBsYXllck5hbWVXb3JsZEFjdGlvbixcbiAgRW5kVHVybldvcmxkQWN0aW9uLFxuICBJbml0aWFsaXNlV29ybGRBY3Rpb24sXG4gIE1vdmVVbml0V29ybGRBY3Rpb24sXG4gIFdvcmxkQWN0aW9uLFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHtcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgTmV3VHVybldvcmxkRXZlbnQsXG4gIFBsYXllckFkZGVkV29ybGRFdmVudCxcbiAgUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkR2VuZXJhdG9yIH0gZnJvbSAnLi93b3JsZC1nZW5lcmF0b3InXG5pbXBvcnQgeyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNsYXNzIFdvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVXb3JsZEV2ZW50cyA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLmNhbGN1bGF0ZVNwZWNpZmljV29ybGRFdmVudHMoYWN0aW9uKVxuICAgIHJldHVybiB0aGlzLmFkZE5ld1R1cm5JZk5lZWRlZChldmVudHMpXG4gIH1cblxuICBwcml2YXRlIGFkZE5ld1R1cm5JZk5lZWRlZChldmVudHM6IFdvcmxkRXZlbnRbXSkge1xuICAgIGNvbnN0IGxhc3RFdmVudCA9IFIubGFzdChldmVudHMpXG4gICAgaWYgKGxhc3RFdmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW11cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3V29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50cyhldmVudHMpXG4gICAgICBpZiAobmV3V29ybGRTdGF0ZS5jYW5BbnlQbGF5ZXJBY3QoKSB8fCBuZXdXb3JsZFN0YXRlLnVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZXZlbnRzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXh0V29ybGRFdmVudElkID0gbGFzdEV2ZW50LmlkICsgMVxuICAgICAgICBjb25zdCBuZXdUdXJuRXZlbnQ6IE5ld1R1cm5Xb3JsZEV2ZW50ID0geyBpZDogbmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ25ld1R1cm4nIH1cbiAgICAgICAgcmV0dXJuIFIuYXBwZW5kKG5ld1R1cm5FdmVudCwgZXZlbnRzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlU3BlY2lmaWNXb3JsZEV2ZW50cyA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdpbml0aWFsaXNlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlSW5pdGlhbGlzZShhY3Rpb24pXG4gICAgICBjYXNlICdhZGRQbGF5ZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBZGRQbGF5ZXIoKVxuICAgICAgY2FzZSAnY2hhbmdlUGxheWVyTmFtZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNoYW5nZVBsYXllck5hbWUoYWN0aW9uKVxuICAgICAgY2FzZSAnc3RhcnRHYW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU3RhcnRHYW1lKClcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUF0dGFjayhhY3Rpb24pXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdmVVbml0KGFjdGlvbilcbiAgICAgIGNhc2UgJ2VuZFR1cm4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbmRUdXJuKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUluaXRpYWxpc2UgPSAoYWN0aW9uOiBJbml0aWFsaXNlV29ybGRBY3Rpb24pOiBbSW5pdGlhbGlzZVdvcmxkRXZlbnRdID0+IHtcbiAgICBpZiAodGhpcy5uZXh0V29ybGRFdmVudElkID4gMCkge1xuICAgICAgdGhyb3cgYENhbiBvbmx5IGluaXRpYWxpc2UgYXMgdGhlIGZpcnN0IGV2ZW50YFxuICAgIH1cbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ2luaXRpYWxpc2UnLCBzdGF0ZTogYWN0aW9uLnN0YXRlIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFkZFBsYXllciA9ICgpOiBbUGxheWVyQWRkZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdQbGF5ZXJJZHMgPSB0aGlzLndvcmxkU3RhdGUuZ2V0UGxheWVySWRzKClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IFIuYXBwbHkoTWF0aC5tYXgsIGV4aXN0aW5nUGxheWVySWRzKSArIDFcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckFkZGVkJywgcGxheWVySWQgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSA9IChhY3Rpb246IENoYW5nZVBsYXllck5hbWVXb3JsZEFjdGlvbik6IFtQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnRdID0+IHtcbiAgICB0aGlzLmdldFBsYXllcigpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdwbGF5ZXJDaGFuZ2VkTmFtZScsIHBsYXllcklkOiB0aGlzLnBsYXllcklkLCBuYW1lOiBhY3Rpb24ubmFtZSB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKTogW0dhbWVTdGFydGVkV29ybGRFdmVudF0gPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIHRocm93IGBDYW5ub3Qgc3RhcnQgYW4gYWxyZWFkeS1zdGFydGVkIGdhbWVgXG4gICAgfVxuICAgIGlmICh0aGlzLnBsYXllcklkICE9PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgdGhyb3cgYENhbm5vdCBzdGFydCB0aGUgZ2FtZSB1bmxlc3MgdGhlIGhvc3RgXG4gICAgfVxuICAgIGNvbnN0IHVuaXRzID0gbmV3IFdvcmxkR2VuZXJhdG9yKHRoaXMud29ybGRTdGF0ZSkuZ2VuZXJhdGVVbml0cygpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdnYW1lU3RhcnRlZCcsIHVuaXRzIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgbmV3IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHRoaXMucGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZCkuaGFuZGxlQXR0YWNrKGFjdGlvbilcblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbik6IFtVbml0TW92ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRvIH0gPSBhY3Rpb25cbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICB9XG4gICAgY29uc3QgZnJvbSA9IHVuaXQubG9jYXRpb25cbiAgICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICAgIH1cbiAgICBpZiAoIXRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyh0bykpIHtcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgICB9XG4gICAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB7XG4gICAgICB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIG1vdmVgXG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICAgIHR5cGU6ICd1bml0TW92ZWQnLFxuICAgICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICAgICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gICAgICAgIHVuaXRJZCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICB9LFxuICAgIF1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9IChhY3Rpb246IEVuZFR1cm5Xb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgaWYgKGFjdGlvbi50dXJuICE9PSB0aGlzLndvcmxkU3RhdGUudHVybikge1xuICAgICAgdGhyb3cgYENhbm5vdCBlbmQgYSB0dXJuIHRoYXQncyBub3QgdGhlIGN1cnJlbnQgdHVybmBcbiAgICB9XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKVxuICAgIGlmIChwbGF5ZXIuZW5kZWRUdXJuKSB7XG4gICAgICB0aHJvdyBgUGxheWVyIGhhcyBhbHJlYWR5IGVuZGVkIHRoZWlyIHR1cm5gXG4gICAgfVxuICAgIGNvbnN0IHBsYXllckVuZGVkVHVybkFjdGlvbjogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCA9IHtcbiAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICB0eXBlOiAncGxheWVyRW5kZWRUdXJuJyxcbiAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIH1cbiAgICByZXR1cm4gW3BsYXllckVuZGVkVHVybkFjdGlvbl1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgdGhyb3cgYE5vIHBsYXllciB3aXRoIElEICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmNvbnN0IExMQU1BX05BTUVTID0gW1xuICAnV2FsdGVyJyxcbiAgJ0RvbGx5JyxcbiAgJ0NoZXdwYWNhJyxcbiAgJ0JhcmFjayBPLiBMbGFtYScsXG4gICdDb21vIFNlJyxcbiAgJ0Z1enp5JyxcbiAgJ0plcmVteScsXG4gICdBbGZvbnNvJyxcbiAgJ1Jvc2UnLFxuICAnTG9yZW56bycsXG5dXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlbWFpbmluZ0hleGVzOiBIZXhbXVxuICBwcml2YXRlIG5leHRVbml0SWQ6IFVuaXRJZCA9IDFcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucmVtYWluaW5nSGV4ZXMgPSBBcnJheS5mcm9tKHdvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVW5pdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0ID0+IHtcbiAgICBjb25zdCBpZCA9IHRoaXMubmV4dFVuaXRJZCsrXG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIGNvbnN0IG5hbWUgPSByYW5kb21FbGVtZW50KExMQU1BX05BTUVTKVxuICAgIHJldHVybiBuZXcgVW5pdCh7XG4gICAgICBpZCxcbiAgICAgIHBsYXllcklkLFxuICAgICAgbmFtZSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVW5pdHMgPSAoKTogVW5pdFtdID0+XG4gICAgUi5jaGFpbigocGxheWVyKSA9PiBbdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKSwgdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKV0sIHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzKVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi93b3JsZC1hY3Rpb24taGFuZGxlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBXb3JsZEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIFdvcmxkU3RhdGVPd25lciB7XG4gIHB1YmxpYyB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykgbGlzdGVuZXIoZXZlbnQpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3Qgd29ybGRBY3Rpb25IYW5kbGVyID0gbmV3IFdvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHBsYXllcklkLCB0aGlzLm5leHRXb3JsZEV2ZW50SWQpXG4gICAgY29uc3QgZXZlbnRzID0gd29ybGRBY3Rpb25IYW5kbGVyLmNhbGN1bGF0ZVdvcmxkRXZlbnRzKGFjdGlvbilcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgdGhpcy53b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgICB9XG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkICs9IGV2ZW50cy5sZW5ndGhcbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5cbmNvbnN0IHBhZGRpbmcgPSAxMFxuY29uc3QgbWluaW11bVdpZHRoID0gMjAwXG5jb25zdCBtaW5pbXVtSGVpZ2h0ID0gNTBcblxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KVxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKVxuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApXG5cbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXG4gICAgICAudGV4dCh4ICsgcGFkZGluZywgeSArIHBhZGRpbmcsIHRleHQpXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHBhZGRpbmdcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgcGFkZGluZ1xuXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGggPj0gbWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IG1pbmltdW1XaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gbWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogbWluaW11bUhlaWdodFxuXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVydXAnLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljaylcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpXG4gIH1cblxuICBwdWJsaWMgc2V0WSh2YWx1ZT86IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMubGFiZWwuc2V0WSh2YWx1ZSlcbiAgICByZXR1cm4gc3VwZXIuc2V0WSh2YWx1ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXNlVG9Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKHNlcmlhbGlzZVRvSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGV4JyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV29ybGRNYXApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRNYXAnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1dvcmxkU3RhdGUnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBVbml0KSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1VuaXQnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIaXRQb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGl0UG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQWN0aW9uUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0FjdGlvblBvaW50cycgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdQbGF5ZXInIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gc2VyaWFsaXNlVG9Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlc2VyaWFsaXNlRnJvbUpzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZGVzZXJpYWxpc2VGcm9tSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdIZXgnKSB7XG4gICAgICAgIHJldHVybiBIZXguZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnV29ybGRNYXAnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZE1hcC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdXb3JsZFN0YXRlJykge1xuICAgICAgICByZXR1cm4gV29ybGRTdGF0ZS5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdVbml0Jykge1xuICAgICAgICByZXR1cm4gVW5pdC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdBY3Rpb25Qb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBBY3Rpb25Qb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnSGl0UG9pbnRzJykge1xuICAgICAgICByZXR1cm4gSGl0UG9pbnRzLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1BsYXllcicpIHtcbiAgICAgICAgcmV0dXJuIFBsYXllci5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzZXJpYWxpc2VGcm9tSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVHdlZW4gPSBQaGFzZXIuVHdlZW5zLlR3ZWVuXG5cbmV4cG9ydCBjb25zdCBwbGF5VHdlZW4gPSAodHdlZW46IFR3ZWVuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdHdlZW4uc2V0Q2FsbGJhY2soJ29uQ29tcGxldGUnLCByZXNvbHZlLCBbXSkucGxheSgpKVxuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEluY2x1c2l2ZSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT5cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50RXhjbHVzaXZlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUVsZW1lbnQgPSA8VD4oYXJyYXk6IFRbXSk6IFQgPT4gYXJyYXlbcmFuZG9tSW50RXhjbHVzaXZlKDAsIGFycmF5Lmxlbmd0aCldXG4iLCJleHBvcnQgdHlwZSBPcHRpb248VD4gPSBUIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVzdDxUPiB7XG4gIHR5cGU6ICdqdXN0J1xuICBpdGVtOiBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aGluZyB7XG4gIHR5cGU6ICdub3RoaW5nJ1xufVxuXG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IEp1c3Q8VD4gfCBOb3RoaW5nXG5cbmV4cG9ydCBjb25zdCB0b01heWJlID0gPFQ+KG9wdGlvbjogT3B0aW9uPFQ+KTogTWF5YmU8VD4gPT4gKG9wdGlvbiA9PT0gdW5kZWZpbmVkID8gbm90aGluZyA6IGp1c3Qob3B0aW9uKSlcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pXG4iLCJleHBvcnQgY2xhc3MgVW5yZWFjaGFibGVDYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBuZXZlcikge1xuICAgIHN1cGVyKGBVbnJlYWNoYWJsZSBjYXNlOiAke3ZhbHVlfWApXG4gIH1cbn1cbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uUG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyByZWR1Y2UgPSAocG9pbnRzOiBudW1iZXIpOiBBY3Rpb25Qb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBBY3Rpb25Qb2ludHMgPT5cbiAgICBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiB0aGlzLm1heCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSGV4LCBIZXhWZWN0b3IgfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGVudW0gSGV4RGlyZWN0aW9uIHtcbiAgRUFTVCA9ICdFQVNUJyxcbiAgV0VTVCA9ICdXRVNUJyxcbiAgTk9SVEhfRUFTVCA9ICdOT1JUSF9FQVNUJyxcbiAgU09VVEhfRUFTVCA9ICdTT1VUSF9FQVNUJyxcbiAgTk9SVEhfV0VTVCA9ICdOT1JUSF9XRVNUJyxcbiAgU09VVEhfV0VTVCA9ICdTT1VUSF9XRVNUJyxcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9ESVJFQ1RJT05TID0gW1xuICBIZXhEaXJlY3Rpb24uRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9FQVNULFxuXVxuXG5leHBvcnQgY29uc3QgZ2V0VW5pdFZlY3RvciA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleFZlY3RvciA9PiB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIDEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAxKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZGlyZWN0aW9uKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgZ2V0VW5pdFZlY3RvciwgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi9oZXgtZGlyZWN0aW9uJ1xuXG5leHBvcnQgY2xhc3MgSGV4IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGdldCB6KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC10aGlzLnggLSB0aGlzLnlcbiAgfVxuXG4gIHB1YmxpYyBwbHVzID0gKHRoYXQ6IEhleCk6IEhleCA9PiBuZXcgSGV4KHRoaXMueCArIHRoYXQueCwgdGhpcy55ICsgdGhhdC55KVxuXG4gIHB1YmxpYyBuZWlnaGJvdXJzID0gKCk6IEhleFtdID0+IEhleC5ORUlHSEJPVVJTLm1hcCh0aGlzLnBsdXMpXG5cbiAgcHVibGljIGlzQWRqYWNlbnRUbyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IFIuaW5jbHVkZXModGhhdCwgdGhpcy5uZWlnaGJvdXJzKCkpXG5cbiAgcHVibGljIGRpc3RhbmNlVG8gPSAodGhhdDogSGV4KTogbnVtYmVyID0+XG4gICAgKE1hdGguYWJzKHRoaXMueCAtIHRoYXQueCkgKyBNYXRoLmFicyh0aGlzLnkgLSB0aGF0LnkpICsgTWF0aC5hYnModGhpcy56IC0gdGhhdC56KSkgLyAyXG5cbiAgcHJpdmF0ZSBzdGF0aWMgTkVJR0hCT1VSUzogSGV4W10gPSBbXG4gICAgbmV3IEhleCgwLCAxKSxcbiAgICBuZXcgSGV4KDEsIDApLFxuICAgIG5ldyBIZXgoMSwgLTEpLFxuICAgIG5ldyBIZXgoMCwgLTEpLFxuICAgIG5ldyBIZXgoLTEsIDApLFxuICAgIG5ldyBIZXgoLTEsIDEpLFxuICBdXG5cbiAgcHVibGljIGVxdWFscyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IHRoaXMueCA9PT0gdGhhdC54ICYmIHRoaXMueSA9PT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcblxuICBwdWJsaWMgZ28gPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXggPT4gdGhpcy5wbHVzKGdldFVuaXRWZWN0b3IoZGlyZWN0aW9uKSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGV4ID0+IG5ldyBIZXgoanNvbi54LCBqc29uLnkpXG59XG5cbmV4cG9ydCB0eXBlIEhleFZlY3RvciA9IEhleFxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBIaXRQb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIGRhbWFnZSA9IChwb2ludHM6IG51bWJlcik6IEhpdFBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEhpdFBvaW50cyA9PlxuICAgIG5ldyBIaXRQb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQsIG1heDogdGhpcy5tYXggfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEhpdFBvaW50cyA9PiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDoganNvbi5jdXJyZW50LCBtYXg6IGpzb24ubWF4IH0pXG59XG4iLCJpbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcidcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfV09STERfU1RBVEU6IFdvcmxkU3RhdGUgPSBuZXcgV29ybGRTdGF0ZSh7XG4gIHR1cm46IDAsXG4gIG1hcDogbmV3IFdvcmxkTWFwKHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDYgfSksXG4gIHBsYXllcnM6IFtcbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ1BsYXllciAxJyxcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gIF0sXG4gIHVuaXRzOiBbXSxcbn0pXG4iLCJleHBvcnQgY29uc3QgSE9TVF9QTEFZRVJfSUQgPSAxXG5cbmV4cG9ydCB0eXBlIFBsYXllcklkID0gbnVtYmVyXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICByZWFkb25seSBpZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGVuZGVkVHVybjogYm9vbGVhblxuICByZWFkb25seSBkZWZlYXRlZDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGVuZGVkVHVybiA9IGZhbHNlLFxuICAgIGRlZmVhdGVkID0gZmFsc2UsXG4gIH06IHtcbiAgICBpZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBlbmRlZFR1cm4/OiBib29sZWFuXG4gICAgZGVmZWF0ZWQ/OiBib29sZWFuXG4gIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5lbmRlZFR1cm4gPSBlbmRlZFR1cm5cbiAgICB0aGlzLmRlZmVhdGVkID0gZGVmZWF0ZWRcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBpZCA9IHRoaXMuaWQsXG4gICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICBlbmRlZFR1cm4gPSB0aGlzLmVuZGVkVHVybixcbiAgICBkZWZlYXRlZCA9IHRoaXMuZGVmZWF0ZWQsXG4gIH06IHsgaWQ/OiBQbGF5ZXJJZDsgbmFtZT86IHN0cmluZzsgZW5kZWRUdXJuPzogYm9vbGVhbjsgZGVmZWF0ZWQ/OiBib29sZWFuIH0gPSB7fSk6IFBsYXllciA9PlxuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgZW5kZWRUdXJuLFxuICAgICAgZGVmZWF0ZWQsXG4gICAgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBpZDogdGhpcy5pZCwgbmFtZTogdGhpcy5uYW1lLCBlbmRlZFR1cm46IHRoaXMuZW5kZWRUdXJuLCBkZWZlYXRlZDogdGhpcy5kZWZlYXRlZCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogUGxheWVyID0+XG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgIGVuZGVkVHVybjoganNvbi5lbmRlZFR1cm4sXG4gICAgICBkZWZlYXRlZDoganNvbi5kZWZlYXRlZCxcbiAgICB9KVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBIaXRQb2ludHMgfSBmcm9tICcuL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBVbml0SWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFVuaXQge1xuICByZWFkb25seSBpZDogVW5pdElkXG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgbG9jYXRpb246IEhleFxuICByZWFkb25seSBoaXRQb2ludHM6IEhpdFBvaW50c1xuICByZWFkb25seSBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpZCxcbiAgICBwbGF5ZXJJZCxcbiAgICBuYW1lLFxuICAgIGxvY2F0aW9uLFxuICAgIGhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMsXG4gIH06IHtcbiAgICBpZDogVW5pdElkXG4gICAgcGxheWVySWQ6IFBsYXllcklkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgbG9jYXRpb246IEhleFxuICAgIGhpdFBvaW50czogSGl0UG9pbnRzXG4gICAgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcbiAgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgICB0aGlzLmhpdFBvaW50cyA9IGhpdFBvaW50c1xuICAgIHRoaXMuYWN0aW9uUG9pbnRzID0gYWN0aW9uUG9pbnRzXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLmRhbWFnZShwb2ludHMpIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIGlkID0gdGhpcy5pZCxcbiAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24sXG4gICAgaGl0UG9pbnRzID0gdGhpcy5oaXRQb2ludHMsXG4gICAgYWN0aW9uUG9pbnRzID0gdGhpcy5hY3Rpb25Qb2ludHMsXG4gIH06IHtcbiAgICBpZD86IFVuaXRJZFxuICAgIHBsYXllcklkPzogUGxheWVySWRcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgbG9jYXRpb24/OiBIZXhcbiAgICBoaXRQb2ludHM/OiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM/OiBBY3Rpb25Qb2ludHNcbiAgfSA9IHt9KTogVW5pdCA9PiBuZXcgVW5pdCh7IGlkLCBwbGF5ZXJJZCwgbmFtZSwgbG9jYXRpb24sIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0pXG5cbiAgcHVibGljIG1vdmUgPSAobG9jYXRpb246IEhleCwgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBsb2NhdGlvbiwgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZHVjZUFjdGlvblBvaW50cyA9IChhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWZyZXNoQWN0aW9uUG9pbnRzID0gKCk6IFVuaXQgPT4gdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWZyZXNoKCkgfSlcblxuICBwdWJsaWMgZ2V0IGhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPiAwXG4gIH1cblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIGlkOiB0aGlzLmlkLFxuICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbi50b0pzb24oKSxcbiAgICBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLnRvSnNvbigpLFxuICAgIGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMudG9Kc29uKCksXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBVbml0ID0+XG4gICAgbmV3IFVuaXQoe1xuICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICBwbGF5ZXJJZDoganNvbi5wbGF5ZXJJZCxcbiAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgIGxvY2F0aW9uOiBIZXguZnJvbUpzb24oanNvbi5sb2NhdGlvbiksXG4gICAgICBoaXRQb2ludHM6IEhpdFBvaW50cy5mcm9tSnNvbihqc29uLmhpdFBvaW50cyksXG4gICAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cy5mcm9tSnNvbihqc29uLmFjdGlvblBvaW50cyksXG4gICAgfSlcbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFdvcmxkRXZlbnQsXG4gIEdhbWVPdmVyV29ybGRFdmVudCxcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgUGxheWVyQWRkZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQsXG4gIFBsYXllckRlZmVhdGVkV29ybGRFdmVudCxcbiAgUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCB7IGNhbkF0dGFja09jY3VyIH0gZnJvbSAnLi4vc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNvbnN0IGFwcGx5RXZlbnQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgcmV0dXJuIGhhbmRsZUluaXRpYWxpc2UoZXZlbnQpXG4gICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckFkZGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJDaGFuZ2VkTmFtZSc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQ2hhbmdlZE5hbWUoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lU3RhcnRlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckVuZGVkVHVybihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckRlZmVhdGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICduZXdUdXJuJzpcbiAgICAgIHJldHVybiBoYW5kbGVOZXdUdXJuKHN0YXRlKVxuICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lT3ZlcihzdGF0ZSwgZXZlbnQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihldmVudClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVJbml0aWFsaXNlID0gKGV2ZW50OiBJbml0aWFsaXNlV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBpZiAoZXZlbnQuaWQgPiAwKSB7XG4gICAgdGhyb3cgYEluaXRpYWxpc2UgbXVzdCBiZSB0aGUgZmlyc3QgZXZlbnRgXG4gIH1cbiAgcmV0dXJuIGV2ZW50LnN0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckFkZGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyQWRkZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IGV2ZW50LnBsYXllcklkLCBzdGF0ZS5wbGF5ZXJzKSkge1xuICAgIHRocm93IGBQbGF5ZXIgSUQgYWxyZWFkeSBpbiB1c2VgXG4gIH1cbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcih7IGlkOiBwbGF5ZXJJZCwgbmFtZTogYFBsYXllciAke3BsYXllcklkfWAgfSlcbiAgcmV0dXJuIHN0YXRlLmFkZFBsYXllcihwbGF5ZXIpXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckNoYW5nZWROYW1lID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQsIG5hbWUgfSA9IGV2ZW50XG4gIGdldFBsYXllcihzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZS51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgbmFtZSB9KSlcbn1cblxuY29uc3QgZ2V0UGxheWVyID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQpOiBQbGF5ZXIgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBzdGF0ZS5maW5kUGxheWVyKHBsYXllcklkKVxuICBpZiAoIXBsYXllcikgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICByZXR1cm4gcGxheWVyXG59XG5cbmNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgIHRocm93IGBHYW1lIGFscmVhZHkgc3RhcnRlZGBcbiAgfVxuICByZXR1cm4gc3RhdGUuY29weSh7IHR1cm46IDEsIHVuaXRzOiBldmVudC51bml0cyB9KVxufVxuXG5jb25zdCBoYW5kbGVVbml0TW92ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgdW5pdElkLCBwbGF5ZXJJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gIGlmICghc3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICBjb25zdCB1bml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgaWYgKCF1bml0KSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgY29uc3QgZnJvbVVuaXQgPSBzdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oZnJvbSlcbiAgaWYgKGZyb21Vbml0Py5pZCAhPT0gdW5pdElkKSB7XG4gICAgdGhyb3cgYEludmFsaWQgZnJvbSBsb2NhdGlvbiBmb3IgdW5pdCBtb3ZlbWVudC4gVW5pdCBhdCAke2Zyb219IGlzICR7ZnJvbVVuaXQ/LmlkfSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSAke3VuaXRJZH1gXG4gIH1cbiAgY29uc3QgdG9Vbml0ID0gc3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKVxuICBpZiAodG9Vbml0KSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YFxuICBpZiAodW5pdC5wbGF5ZXJJZCAhPT0gcGxheWVySWQpIHRocm93IGBJbnZhbGlkIGF0dGVtcHQgdG8gbW92ZSB1bml0IG9mIGFub3RoZXIgcGxheWVyYFxuICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSB0aHJvdyBgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgXG4gIHJldHVybiBzdGF0ZS5yZXBsYWNlVW5pdCh1bml0LmlkLCB1bml0Lm1vdmUodG8sIGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSlcbn1cblxuY29uc3QgaGFuZGxlQ29tYmF0ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogQ29tYmF0V29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gZXZlbnRcblxuICBjb25zdCBhdHRhY2tlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXIudW5pdElkKVxuICBpZiAoIWF0dGFja2VyVW5pdCkgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VyLnVuaXRJZH1gXG4gIGlmICghYXR0YWNrZXJVbml0LmxvY2F0aW9uLmVxdWFscyhhdHRhY2tlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGF0dGFja2VyLiBBdHRhY2tpbmcgdW5pdCAke2F0dGFja2VyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHthdHRhY2tlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7YXR0YWNrZXIubG9jYXRpb259YFxuXG4gIGNvbnN0IGRlZmVuZGVyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChkZWZlbmRlci51bml0SWQpXG4gIGlmICghZGVmZW5kZXJVbml0KSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXIudW5pdElkfWBcbiAgaWYgKCFkZWZlbmRlclVuaXQubG9jYXRpb24uZXF1YWxzKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBgSW52YWxpZCBsb2NhdGlvbiBmb3IgZGVmZW5kZXIuIERlZmVuZGluZyB1bml0ICR7ZGVmZW5kZXJVbml0LmlkfSBpcyBhdCBsb2NhdGlvbiAke2RlZmVuZGVyVW5pdC5sb2NhdGlvbn0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgYXQgJHtkZWZlbmRlci5sb2NhdGlvbn1gXG5cbiAgaWYgKGF0dGFja2VyVW5pdC5wbGF5ZXJJZCA9PT0gZGVmZW5kZXJVbml0LnBsYXllcklkKSB0aHJvdyBgSW52YWxpZCBjb21iYXQgd2l0aCBzZWxmYFxuICBpZiAoIWNhbkF0dGFja09jY3VyKGV2ZW50LmF0dGFja1R5cGUsIGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgY29tYmF0IG9mIHR5cGUgJHtldmVudC5hdHRhY2tUeXBlfSBiZXR3ZWVuIGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuICBpZiAoYXR0YWNrZXJVbml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpIHRocm93IGBJbnZhbGlkIGFjdGlvbiBwb2ludCB1c2FnZWBcblxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZVxuXG4gIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoYXR0YWNrZXJVbml0LmlkKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVwZGF0ZWRBdHRhY2tlciA9IGF0dGFja2VyVW5pdC5kYW1hZ2UoYXR0YWNrZXIuZGFtYWdlKS5yZWR1Y2VBY3Rpb25Qb2ludHMoZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChhdHRhY2tlclVuaXQuaWQsIHVwZGF0ZWRBdHRhY2tlcilcbiAgfVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoZGVmZW5kZXJVbml0LmlkKVxuICB9IGVsc2Uge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoZGVmZW5kZXJVbml0LmlkLCBkZWZlbmRlclVuaXQuZGFtYWdlKGRlZmVuZGVyLmRhbWFnZSkpXG4gIH1cblxuICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgJHtkZWZlbmRlclVuaXQubmFtZX0gd2FzIHRha2VuIG91dCBpbiBhIHN1aWNpZGUgYXR0YWNrIGJ5ICR7YXR0YWNrZXJVbml0Lm5hbWV9LmApXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYCR7ZGVmZW5kZXJVbml0Lm5hbWV9IHdhcyBicnV0YWxseSBtdXJkZXJlZCBieSAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICAgIH1cbiAgfSBlbHNlIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGAke2F0dGFja2VyVW5pdC5uYW1lfSBkaWVkIGluIGEgZnV0aWxlIGF0dGVtcHQgdG8gdGFrZSBvbiAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZlcmIgPSBldmVudC5hdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFja2VkJyA6ICdzcGF0IGF0J1xuICAgIGNvbnN0IHRha2luZ0RhbWFnZUNsYXVzZSA9IGF0dGFja2VyLmRhbWFnZSA9PT0gMCA/ICcnIDogYCBhbmQgdGFraW5nICR7YXR0YWNrZXIuZGFtYWdlfSBkYW1hZ2VgXG4gICAgY29uc3QgbWVzc2FnZSA9IGAke2F0dGFja2VyVW5pdC5uYW1lfSAke3ZlcmJ9ICR7ZGVmZW5kZXJVbml0Lm5hbWV9LCBjYXVzaW5nICR7ZGVmZW5kZXIuZGFtYWdlfSBkYW1hZ2Uke3Rha2luZ0RhbWFnZUNsYXVzZX0uYFxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2cobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gbmV3U3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBnZXRQbGF5ZXIoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGUudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogdHJ1ZSB9KSlcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRGVmZWF0ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJEZWZlYXRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gZ2V0UGxheWVyKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlXG4gICAgLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBkZWZlYXRlZDogdHJ1ZSB9KSlcbiAgICAuYWRkV29ybGRMb2coYCR7cGxheWVyLm5hbWV9IGhhcyBiZWVuIHZhbnF1aXNoZWQuYClcbn1cblxuY29uc3QgaGFuZGxlTmV3VHVybiA9IChzdGF0ZTogV29ybGRTdGF0ZSk6IFdvcmxkU3RhdGUgPT5cbiAgc3RhdGUubmV3VHVybigpLmFkZFdvcmxkTG9nKGBUdXJuICR7c3RhdGUudHVybiArIDF9IGhhcyBiZWd1bi5gKVxuXG5jb25zdCBoYW5kbGVHYW1lT3ZlciA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IEdhbWVPdmVyV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHZpY3RvciB9ID0gZXZlbnRcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGUuZ2FtZU92ZXIodmljdG9yKVxuICBpZiAodmljdG9yKSB7XG4gICAgY29uc3QgdmljdG9yUGxheWVyID0gZ2V0UGxheWVyKHN0YXRlLCB2aWN0b3IpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhg8J+PhiAke3ZpY3RvclBsYXllci5uYW1lfSBpcyB2aWN0b3Jpb3VzIWApXG4gIH0gZWxzZSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgVGhlcmUgYXJlIG5vIHdpbm5lcnMgaW4gd2FyLmApXG4gIH1cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgV29ybGRNYXAge1xuICByZWFkb25seSB3aWR0aDogbnVtYmVyXG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyB3aWR0aCwgaGVpZ2h0IH06IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIGFzc2VydCh3aWR0aCA+IDApXG4gICAgYXNzZXJ0KGhlaWdodCA+IDApXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyBpc0luQm91bmRzID0gKGhleDogSGV4KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgcSA9IGhleC54ICsgTWF0aC5mbG9vcihoZXgueSAvIDIpXG4gICAgcmV0dXJuIDAgPD0gcSAmJiBxIDwgdGhpcy53aWR0aCAmJiAwIDw9IGhleC55ICYmIGhleC55IDwgdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyAqZ2V0TWFwSGV4ZXMoKTogSXRlcmFibGVJdGVyYXRvcjxIZXg+IHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmhlaWdodDsgcm93KyspXG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLndpZHRoOyBjb2x1bW4rKykge1xuICAgICAgICBjb25zdCB4ID0gLU1hdGguZmxvb3Iocm93IC8gMikgKyBjb2x1bW5cbiAgICAgICAgeWllbGQgbmV3IEhleCh4LCByb3cpXG4gICAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyB3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRNYXAgPT4gbmV3IFdvcmxkTWFwKHsgd2lkdGg6IGpzb24ud2lkdGgsIGhlaWdodDoganNvbi5oZWlnaHQgfSlcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi93b3JsZC1tYXAnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuL3VuaXQnXG5pbXBvcnQgeyBqdXN0LCBNYXliZSwgT3B0aW9uLCB0b01heWJlLCB0b09wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuL3dvcmxkLWV2ZW50cydcblxuaW50ZXJmYWNlIEdhbWVPdmVySW5mbyB7XG4gIHZpY3RvcjogT3B0aW9uPFBsYXllcklkPlxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZSB7XG4gIHJlYWRvbmx5IHR1cm46IG51bWJlciAvKiB0dXJuID0gMCBiZWZvcmUgdGhlIGdhbWUgaGFzIHN0YXJ0ZWQgKi9cbiAgcmVhZG9ubHkgbWFwOiBXb3JsZE1hcFxuICByZWFkb25seSB1bml0czogVW5pdFtdXG4gIHJlYWRvbmx5IHBsYXllcnM6IFBsYXllcltdXG4gIHJlYWRvbmx5IGdhbWVPdmVySW5mbz86IEdhbWVPdmVySW5mb1xuICByZWFkb25seSB3b3JsZExvZzogc3RyaW5nW11cblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgdHVybixcbiAgICBtYXAsXG4gICAgdW5pdHMsXG4gICAgcGxheWVycyxcbiAgICBnYW1lT3ZlckluZm8sXG4gICAgd29ybGRMb2cgPSBbXSxcbiAgfToge1xuICAgIHR1cm46IG51bWJlclxuICAgIG1hcDogV29ybGRNYXBcbiAgICB1bml0czogVW5pdFtdXG4gICAgcGxheWVyczogUGxheWVyW11cbiAgICBnYW1lT3ZlckluZm8/OiBPcHRpb248R2FtZU92ZXJJbmZvPlxuICAgIHdvcmxkTG9nPzogc3RyaW5nW11cbiAgfSkge1xuICAgIHRoaXMudHVybiA9IHR1cm5cbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMudW5pdHMgPSB1bml0c1xuICAgIHRoaXMucGxheWVycyA9IHBsYXllcnNcbiAgICB0aGlzLmdhbWVPdmVySW5mbyA9IGdhbWVPdmVySW5mb1xuICAgIHRoaXMud29ybGRMb2cgPSB3b3JsZExvZ1xuICAgIGFzc2VydCh0dXJuID49IDApXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgdHVybiA9IHRoaXMudHVybixcbiAgICBtYXAgPSB0aGlzLm1hcCxcbiAgICB1bml0cyA9IHRoaXMudW5pdHMsXG4gICAgcGxheWVycyA9IHRoaXMucGxheWVycyxcbiAgICBnYW1lT3ZlckluZm8gPSB0b01heWJlKHRoaXMuZ2FtZU92ZXJJbmZvKSxcbiAgICB3b3JsZExvZyA9IHRoaXMud29ybGRMb2csXG4gIH06IHtcbiAgICB0dXJuPzogbnVtYmVyXG4gICAgbWFwPzogV29ybGRNYXBcbiAgICB1bml0cz86IFVuaXRbXVxuICAgIHBsYXllcnM/OiBQbGF5ZXJbXVxuICAgIGdhbWVPdmVySW5mbz86IE1heWJlPEdhbWVPdmVySW5mbz5cbiAgICB3b3JsZExvZz86IHN0cmluZ1tdXG4gIH0gPSB7fSk6IFdvcmxkU3RhdGUgPT4gbmV3IFdvcmxkU3RhdGUoeyB0dXJuLCBtYXAsIHVuaXRzLCBwbGF5ZXJzLCBnYW1lT3ZlckluZm86IHRvT3B0aW9uKGdhbWVPdmVySW5mbyksIHdvcmxkTG9nIH0pXG5cbiAgcHVibGljIGdldCBpc0dhbWVPdmVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVySW5mbyAhPT0gdW5kZWZpbmVkXG4gIH1cblxuICBwdWJsaWMgZ2V0IGdhbWVIYXNTdGFydGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR1cm4gPiAwXG4gIH1cblxuICBwdWJsaWMgZ2V0UGxheWVySWRzID0gKCk6IFBsYXllcklkW10gPT4gdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuaWQpXG5cbiAgcHVibGljIGlzUGxheWVyRGVmZWF0ZWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiB0aGlzLmdldFVuaXRzRm9yUGxheWVyKHBsYXllcklkKS5sZW5ndGggPT09IDBcblxuICBwdWJsaWMgY2FuUGxheWVyQWN0ID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGVuZGVkVHVybiA9IHRoaXMuZmluZFBsYXllcihwbGF5ZXJJZCk/LmVuZGVkVHVyblxuICAgIHJldHVybiAhZW5kZWRUdXJuICYmIFIuYW55KCh1bml0KSA9PiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMsIHRoaXMuZ2V0VW5pdHNGb3JQbGF5ZXIocGxheWVySWQpKVxuICB9XG5cbiAgcHVibGljIGNhbkFueVBsYXllckFjdCA9ICgpOiBib29sZWFuID0+IFIuYW55KChwbGF5ZXIpID0+IHRoaXMuY2FuUGxheWVyQWN0KHBsYXllci5pZCksIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2V0VW5pdHNGb3JQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogVW5pdFtdID0+IHRoaXMudW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LnBsYXllcklkID09PSBwbGF5ZXJJZClcblxuICBwdWJsaWMgZmluZFBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBPcHRpb248UGxheWVyPiA9PiBSLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmlkID09PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHtcbiAgICAgIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllclxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0QnlJZCA9ICh1bml0SWQ6IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQuaWQgPT09IHVuaXRJZCwgdGhpcy51bml0cylcblxuICBwdWJsaWMgZ2V0VW5pdEJ5SWQgPSAodW5pdElkOiBudW1iZXIpOiBVbml0ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgfVxuICAgIHJldHVybiB1bml0XG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IFIuZmluZCgodW5pdCkgPT4gdW5pdC5sb2NhdGlvbi5lcXVhbHMoaGV4KSwgdGhpcy51bml0cylcblxuICBwdWJsaWMgcmVwbGFjZVVuaXQgPSAodW5pdElkOiBVbml0SWQsIHVuaXQ6IFVuaXQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHtcbiAgICAgIHVuaXRzOiBSLmFwcGVuZChcbiAgICAgICAgdW5pdCxcbiAgICAgICAgUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT09IHVuaXRJZCwgdGhpcy51bml0cyksXG4gICAgICApLFxuICAgIH0pXG5cbiAgcHVibGljIHJlbW92ZVVuaXQgPSAodW5pdElkOiBVbml0SWQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgdW5pdHM6IFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9PSB1bml0SWQsIHRoaXMudW5pdHMpIH0pXG5cbiAgcHVibGljIHVwZGF0ZVBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQsIG1vZGlmeTogKHBsYXllcjogUGxheWVyKSA9PiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlUGxheWVyKHBsYXllcklkLCBtb2RpZnkocGxheWVyKSlcbiAgfVxuXG4gIHB1YmxpYyByZXBsYWNlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgcGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHtcbiAgICBhc3NlcnQocGxheWVySWQgPT09IHBsYXllci5pZClcbiAgICByZXR1cm4gdGhpcy5jb3B5KHtcbiAgICAgIHBsYXllcnM6IFIuYXBwZW5kKFxuICAgICAgICBwbGF5ZXIsXG4gICAgICAgIFIuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5pZCAhPT0gcGxheWVySWQsIHRoaXMucGxheWVycyksXG4gICAgICApLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYWRkUGxheWVyID0gKHBsYXllcjogUGxheWVyKTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBwbGF5ZXJzOiBSLmFwcGVuZChwbGF5ZXIsIHRoaXMucGxheWVycykgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIHR1cm46IHRoaXMudHVybixcbiAgICBtYXA6IHRoaXMubWFwLnRvSnNvbigpLFxuICAgIHVuaXRzOiB0aGlzLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC50b0pzb24oKSksXG4gICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIudG9Kc29uKCkpLFxuICAgIGdhbWVPdmVySW5mbzogdGhpcy5nYW1lT3ZlckluZm8sXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBXb3JsZFN0YXRlID0+XG4gICAgbmV3IFdvcmxkU3RhdGUoe1xuICAgICAgdHVybjoganNvbi50dXJuLFxuICAgICAgbWFwOiBXb3JsZE1hcC5mcm9tSnNvbihqc29uLm1hcCksXG4gICAgICB1bml0czoganNvbi51bml0cy5tYXAoKHVuaXQ6IGFueSkgPT4gVW5pdC5mcm9tSnNvbih1bml0KSksXG4gICAgICBwbGF5ZXJzOiBqc29uLnBsYXllcnMubWFwKCh1bml0OiBhbnkpID0+IFBsYXllci5mcm9tSnNvbih1bml0KSksXG4gICAgICBnYW1lT3ZlckluZm86IGpzb24uZ2FtZU92ZXJJbmZvLFxuICAgIH0pXG5cbiAgcHVibGljIGlzVmFsaWRQbGF5ZXJJZCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2FtZU92ZXIgPSAodmljdG9yOiBPcHRpb248bnVtYmVyPik6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgZ2FtZU92ZXJJbmZvOiBqdXN0KHsgdmljdG9yIH0pIH0pXG5cbiAgcHVibGljIGFwcGx5RXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IGFwcGx5RXZlbnQodGhpcywgZXZlbnQpXG5cbiAgcHVibGljIGFwcGx5RXZlbnRzID0gKGV2ZW50czogV29ybGRFdmVudFtdKTogV29ybGRTdGF0ZSA9PiB7XG4gICAgbGV0IHN0YXRlOiBXb3JsZFN0YXRlID0gdGhpc1xuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICBzdGF0ZSA9IHN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbiAgcHVibGljIGFkZFdvcmxkTG9nID0gKG1lc3NhZ2U6IHN0cmluZyk6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgd29ybGRMb2c6IFIuYXBwZW5kKG1lc3NhZ2UsIHRoaXMud29ybGRMb2cpIH0pXG5cbiAgcHVibGljIG5ld1R1cm4gPSAoKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICB0dXJuOiB0aGlzLnR1cm4gKyAxLFxuICAgICAgdW5pdHM6IHRoaXMudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LnJlZnJlc2hBY3Rpb25Qb2ludHMoKSksXG4gICAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiBmYWxzZSB9KSksXG4gICAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=