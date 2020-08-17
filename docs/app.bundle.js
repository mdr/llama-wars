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
                        url_info_1.setUrlInfo({ gameId: gameId, playerId: playerId });
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
        // Source: https://opengameart.org/content/hex-tileset-pack
        this.load.image('llama', 'assets/sprites/llama_14.png');
        // https://opengameart.org/content/hourglass-icon
        this.load.image('hourglass', 'assets/sprites/Hourglass.png');
        // https://opengameart.org/content/grass-textures-tiles
        // https://opengameart.org/content/grass-texture
        this.load.image('grass', 'assets/sprites/grass2.png');
        // https://opengameart.org/content/puddle-corpses
        this.load.image('spit', 'assets/sprites/puddle_light_blue.png');
        // https://opengameart.org/content/world-map-tiles
        this.load.image('mountain', 'assets/sprites/mountains_outer.png');
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
            var _a = _this.localGameState, playerId = _a.playerId, selectedHex = _a.selectedHex, mode = _a.mode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvdXJsLWluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb2xvdXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvY29tYmluZWQtc3RhdGUtbWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2hleC1nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvY3JlYXRlZC1sb2JieS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LWRpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9jYWwtZ2FtZS1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9kaXNwbGF5LW9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9rZXlib2FyZC1tYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvbG9jYWwtYWN0aW9uLXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9tYXAtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvdGV4dHMtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvdW5pdC1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BlZXItY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGVlci1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wZWVyLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvd29ybGQtYWN0aW9uLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1zdGF0ZS1vd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWVudS1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BoYXNlci90d2Vlbi11dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9yYW5kb20tdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9hY3Rpb24tcG9pbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oZXgtZGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hpdC1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztR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VyxHQUFHLFVBQUMsR0FBUSxJQUFZLFFBQUM7SUFDL0MsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDO0NBQ25CLENBQUMsRUFIOEMsQ0FHOUM7QUFFVyxpQkFBUyxHQUFHLFVBQUMsS0FBWTtJQUNwQyxJQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0IsT0FBTyxLQUFLLENBQUMsSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxJQUFNLEtBQUssR0FBRyxVQUFDLEdBQVE7SUFDckIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElB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LEtBQUssU0FBUztRQUN4QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHNDQUFjO2FBQXpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUEwRWEsbUJBQVEsR0FBRyxVQUFDLElBQVM7UUFDakMsV0FBSSxVQUFVLENBQUM7WUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsb0JBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLElBQUssa0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5CLENBQW1CLENBQUM7WUFDekQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUyxJQUFLLHNCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDO1lBQy9ELFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDO0lBTkYsQ0FNRTtJQTBCTixpQkFBQztDQUFBO0FBaktZLGdDQUFVIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBEZXhpZSwgeyBDb2xsZWN0aW9uIH0gZnJvbSAnZGV4aWUnXG5pbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgV29ybGRFdmVudFJlY29yZCB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIGV2ZW50OiBhbnkgLy8gc2VyaWFsaXNlZCBXb3JsZEV2ZW50XG59XG5cbmV4cG9ydCBjbGFzcyBMbGFtYURleGllIGV4dGVuZHMgRGV4aWUge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1pZ25vcmVcbiAgd29ybGRFdmVudHM6IERleGllLlRhYmxlPFdvcmxkRXZlbnRSZWNvcmQsIHN0cmluZz5cbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5Xb3JsZEV2ZW50RGIgPSBhc3luYyAoKTogUHJvbWlzZTxXb3JsZEV2ZW50RGI+ID0+IHtcbiAgY29uc3QgZGV4aWUgPSBuZXcgRGV4aWUoJ2xsYW1hLXdhcnMnKVxuICBkZXhpZS52ZXJzaW9uKDEpLnN0b3Jlcyh7XG4gICAgd29ybGRFdmVudHM6ICcrKyxnYW1lSWQnLFxuICB9KVxuICBhd2FpdCBkZXhpZS5vcGVuKClcbiAgcmV0dXJuIG5ldyBXb3JsZEV2ZW50RGIoPExsYW1hRGV4aWU+ZGV4aWUpXG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZEV2ZW50RGIge1xuICBwcml2YXRlIHJlYWRvbmx5IGRleGllOiBMbGFtYURleGllXG5cbiAgY29uc3RydWN0b3IoZGV4aWU6IExsYW1hRGV4aWUpIHtcbiAgICB0aGlzLmRleGllID0gZGV4aWVcbiAgfVxuXG4gIHB1YmxpYyBzdG9yZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCB0aGlzLmRleGllLndvcmxkRXZlbnRzLmFkZCh7XG4gICAgICBnYW1lSWQsXG4gICAgICBldmVudDogc2VyaWFsaXNlVG9Kc29uKGV2ZW50KSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdldEV2ZW50c0ZvckdhbWUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPFdvcmxkRXZlbnRbXT4gPT4ge1xuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCB0aGlzLmRleGllLndvcmxkRXZlbnRzLndoZXJlKCdnYW1lSWQnKS5lcXVhbHMoZ2FtZUlkKS50b0FycmF5KClcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHJlY29yZCkgPT4gZGVzZXJpYWxpc2VGcm9tSnNvbihyZWNvcmQuZXZlbnQpKVxuICB9XG5cbiAgcHVibGljIGhhc0V2ZW50c0ZvckdhbWUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCB0aGlzLnF1ZXJ5RXZlbnRzQnlHYW1lSWQoZ2FtZUlkKS5maXJzdCgpXG4gICAgcmV0dXJuIHJlY29yZCAhPT0gdW5kZWZpbmVkXG4gIH1cblxuICBwcml2YXRlIHF1ZXJ5RXZlbnRzQnlHYW1lSWQgPSAoZ2FtZUlkOiBzdHJpbmcpOiBDb2xsZWN0aW9uPFdvcmxkRXZlbnRSZWNvcmQsIHN0cmluZz4gPT5cbiAgICB0aGlzLmRleGllLndvcmxkRXZlbnRzLndoZXJlKCdnYW1lSWQnKS5lcXVhbHMoZ2FtZUlkKVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGhcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodFxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnXG5pbXBvcnQgVGV4dEVkaXRQbHVnaW4gZnJvbSAncGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3RleHRlZGl0LXBsdWdpbi5qcydcblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdMbGFtYSBXYXJzJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHBhcmVudDogJ2dhbWUnLFxuICBkb206IHtcbiAgICBjcmVhdGVDb250YWluZXI6IHRydWUsXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxuICBwbHVnaW5zOiB7XG4gICAgZ2xvYmFsOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JleFRleHRFZGl0JyxcbiAgICAgICAgcGx1Z2luOiBUZXh0RWRpdFBsdWdpbixcbiAgICAgICAgc3RhcnQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUuc2V0R2FtZVNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcbiAgZ2FtZS5zY2FsZS5yZWZyZXNoKClcbn0pXG4iLCJleHBvcnQgY29uc3QgQXVkaW9LZXlzID0ge1xuICBBVFRBQ0tfMTogJ2F0dGFjazEnLFxuICBBVFRBQ0tfMjogJ2F0dGFjazInLFxuICBBVFRBQ0tfMzogJ2F0dGFjazMnLFxuICBERUFUSDogJ2RlYXRoJyxcbiAgV0FMSzogJ3dhbGsnLFxuICBORVdfVFVSTjogJ25ldy10dXJuJyxcbiAgUExBWUVSX0RFRkVBVEVEOiAncGxheWVyLWRlZmVhdGVkJyxcbiAgUExBWUVSX0pPSU5FRF9MT0JCWTogJ3BsYXllci1kZWZlYXRlZCcsXG4gIFZJQ1RPUllfTVVTSUM6ICd2aWN0b3J5LW11c2ljJyxcbiAgQ0xJQ0s6ICdjbGljaycsXG4gIFNQSVQ6ICdzcGl0Jyxcbn1cblxuZXhwb3J0IGNvbnN0IEFMTF9BVURJT19LRVlTID0gW1xuICBBdWRpb0tleXMuQVRUQUNLXzEsXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMixcbiAgQXVkaW9LZXlzLkFUVEFDS18zLFxuICBBdWRpb0tleXMuREVBVEgsXG4gIEF1ZGlvS2V5cy5XQUxLLFxuICBBdWRpb0tleXMuTkVXX1RVUk4sXG4gIEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsXG4gIEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZLFxuICBBdWRpb0tleXMuVklDVE9SWV9NVVNJQyxcbiAgQXVkaW9LZXlzLkNMSUNLLFxuICBBdWRpb0tleXMuU1BJVCxcbl1cbiIsImltcG9ydCB7IGdldEdhbWVIZWlnaHQsIGdldEdhbWVXaWR0aCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVJZCwgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTUFJTl9NRU5VX1NDRU5FX0tFWSB9IGZyb20gJy4uL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiwgV29ybGRFdmVudERiIH0gZnJvbSAnLi4vLi4vZGIvd29ybGQtZXZlbnQtZGInXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuaW1wb3J0IEZpbGVDb25maWcgPSBQaGFzZXIuVHlwZXMuTG9hZGVyLkZpbGVDb25maWdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IGdldFVybEluZm8sIHNldFVybEluZm8sIFVybEluZm8gfSBmcm9tICcuL3VybC1pbmZvJ1xuXG5leHBvcnQgY29uc3QgQk9PVF9TQ0VORV9LRVkgPSAnQm9vdCdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEJPT1RfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcykgKiAwLjVcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAqIDAuNVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDBcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwXG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQsXG4gICAgICAweDAwMDAwMCxcbiAgICApXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIDEwLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCxcbiAgICAgIDB4ODg4ODg4LFxuICAgIClcblxuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNClcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlXG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKHZhbHVlICogMTAwKVxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlOiBGaWxlQ29uZmlnKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSlcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKVxuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpXG4gICAgICBhc3NldFRleHQuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5sYXVuY2hHYW1lKClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkQXNzZXRzKClcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoR2FtZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB1cmxJbmZvID0gZ2V0VXJsSW5mbygpXG4gICAgaWYgKHVybEluZm8pIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUdhbWUodXJsSW5mbylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydChNQUlOX01FTlVfU0NFTkVfS0VZKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUdhbWUgPSBhc3luYyAodXJsSW5mbzogVXJsSW5mbyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZCA9IHVybEluZm8uZ2FtZUlkXG4gICAgY29uc3QgcGxheWVySWQgPSB1cmxJbmZvLnBsYXllcklkXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSBhd2FpdCB3b3JsZEV2ZW50RGIuaGFzRXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlc3RvcmVHYW1lQXNTZXJ2ZXIoZ2FtZUlkLCB3b3JsZEV2ZW50RGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUNsaWVudChnYW1lSWQsIHBsYXllcklkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUNsaWVudCA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgcGxheWVySWQ6IE9wdGlvbjxQbGF5ZXJJZD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBDbGllbnQuY29ubmVjdChnYW1lSWQpXG4gICAgaWYgKHBsYXllcklkKSB7XG4gICAgICB0aGlzLnJlam9pbkFzQ2xpZW50KGNsaWVudCwgZ2FtZUlkLCBwbGF5ZXJJZClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qb2luQXNDbGllbnQoY2xpZW50LCBnYW1lSWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luQXNDbGllbnQgPSBhc3luYyAoY2xpZW50OiBDbGllbnQsIGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9ID0gYXdhaXQgY2xpZW50LmpvaW4oKVxuICAgIHNldFVybEluZm8oeyBnYW1lSWQsIHBsYXllcklkIH0pXG4gICAgdGhpcy5qb2luR2FtZSh3b3JsZFN0YXRlLCBjbGllbnQsIHBsYXllcklkKVxuICB9XG5cbiAgcHJpdmF0ZSByZWpvaW5Bc0NsaWVudCA9IGFzeW5jIChjbGllbnQ6IENsaWVudCwgZ2FtZUlkOiBHYW1lSWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBhd2FpdCBjbGllbnQucmVqb2luKHBsYXllcklkKVxuICAgIHRoaXMuam9pbkdhbWUod29ybGRTdGF0ZSwgY2xpZW50LCBwbGF5ZXJJZClcbiAgfVxuXG4gIHByaXZhdGUgam9pbkdhbWUgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgY2xpZW50OiBDbGllbnQsIHBsYXllcklkOiBudW1iZXIpID0+IHtcbiAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50LCB3b3JsZFN0YXRlLCBwbGF5ZXJJZCB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQsIHdvcmxkU3RhdGUsIHBsYXllcklkIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXN0b3JlR2FtZUFzU2VydmVyID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHNlcnZlciA9IGF3YWl0IFNlcnZlci5yZXN0b3JlR2FtZSh3b3JsZEV2ZW50RGIsIGdhbWVJZClcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyLCB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLCBwbGF5ZXJJZDogMSB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIsIHdvcmxkU3RhdGU6IHdvcmxkU3RhdGUsIHBsYXllcklkOiAxIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQXNzZXRzKCkge1xuICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9oZXgtdGlsZXNldC1wYWNrXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsbGFtYScsICdhc3NldHMvc3ByaXRlcy9sbGFtYV8xNC5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaG91cmdsYXNzLWljb25cbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2hvdXJnbGFzcycsICdhc3NldHMvc3ByaXRlcy9Ib3VyZ2xhc3MucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLXRleHR1cmVzLXRpbGVzXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy10ZXh0dXJlXG4gICAgdGhpcy5sb2FkLmltYWdlKCdncmFzcycsICdhc3NldHMvc3ByaXRlcy9ncmFzczIucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3B1ZGRsZS1jb3Jwc2VzXG4gICAgdGhpcy5sb2FkLmltYWdlKCdzcGl0JywgJ2Fzc2V0cy9zcHJpdGVzL3B1ZGRsZV9saWdodF9ibHVlLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC93b3JsZC1tYXAtdGlsZXNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ21vdW50YWluJywgJ2Fzc2V0cy9zcHJpdGVzL21vdW50YWluc19vdXRlci5wbmcnKVxuXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC8zNy1oaXRzcHVuY2hlc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzEsICdhc3NldHMvYXVkaW8vaGl0MTQubXAzLm1wMycpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMiwgJ2Fzc2V0cy9hdWRpby9oaXQxNy5tcDMubXAzJylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18zLCAnYXNzZXRzL2F1ZGlvL2hpdDE4Lm1wMy5tcDMnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbWFsZS1ncnVudHllbGxpbmctc291bmRzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5ERUFUSCwgJ2Fzc2V0cy9hdWRpby8xeWVsbDQud2F2JylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLWZvb3Qtc3RlcC1zb3VuZHMteW8tZnJhbmtpZVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuV0FMSywgJ2Fzc2V0cy9hdWRpby9zZnhfc3RlcF9ncmFzc19sLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC91aS1zb3VuZC1lZmZlY3RzLXBhY2tcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLk5FV19UVVJOLCAnYXNzZXRzL2F1ZGlvL01FTlUgQV9TZWxlY3Qud2F2JylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlksICdhc3NldHMvYXVkaW8vTUVOVSBCX1NlbGVjdC53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVELCAnYXNzZXRzL2F1ZGlvL01FU1NBR0UtQl9EZWNsaW5lLndhdicpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2NsZWFyLXNraWVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDLCAnYXNzZXRzL2F1ZGlvL0NsZWFyIFNraWVzLm1wMycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2d1aS1zb3VuZC1lZmZlY3RzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5DTElDSywgJ2Fzc2V0cy9hdWRpby9jbGljay53YXYnKVxuICAgIC8vaHR0cHM6Ly9mcmVlc291bmQub3JnL3Blb3BsZS90dmxhdWRpby9zb3VuZHMvMjY3ODk3L1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuU1BJVCwgJ2Fzc2V0cy9hdWRpby9zcGl0LndhdicpXG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFVybEluZm8ge1xuICBnYW1lSWQ6IEdhbWVJZFxuICBwbGF5ZXJJZD86IFBsYXllcklkXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVcmxJbmZvID0gKCk6IE9wdGlvbjxVcmxJbmZvPiA9PiB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaFxuICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBwYXRoID0gaGFzaC5zdWJzdHIoMSlcbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJylcbiAgY29uc3QgZ2FtZUlkID0gc2VnbWVudHNbMF1cbiAgY29uc3QgcGxheWVySWQgPSBzZWdtZW50cy5sZW5ndGggPiAxID8gTnVtYmVyLnBhcnNlSW50KHNlZ21lbnRzWzFdKSA6IHVuZGVmaW5lZFxuICByZXR1cm4geyBnYW1lSWQsIHBsYXllcklkIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNldFVybEluZm8gPSAodXJsSW5mbzogVXJsSW5mbyk6IHZvaWQgPT4ge1xuICBsZXQgaGFzaCA9IHVybEluZm8uZ2FtZUlkXG4gIGlmICh1cmxJbmZvLnBsYXllcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICBoYXNoICs9ICcvJyArIHVybEluZm8ucGxheWVySWRcbiAgfVxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hcbn1cbiIsImltcG9ydCBDb2xvciA9IFBoYXNlci5EaXNwbGF5LkNvbG9yXG5cbmV4cG9ydCB0eXBlIENvbG91clN0cmluZyA9IHN0cmluZ1xuZXhwb3J0IHR5cGUgQ29sb3VyTnVtYmVyID0gbnVtYmVyXG5cbmV4cG9ydCBjb25zdCBjb2xvdXJOdW1iZXIgPSAoY29sb3VyU3RyaW5nOiBDb2xvdXJTdHJpbmcpOiBDb2xvdXJOdW1iZXIgPT4gQ29sb3IuSGV4U3RyaW5nVG9Db2xvcihjb2xvdXJTdHJpbmcpLmNvbG9yXG5cbmV4cG9ydCBjb25zdCBIRUFMVEhfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzAwMDAwMCcpXG5leHBvcnQgY29uc3QgSEVBTFRIX0VNUFRZX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmZmZicpXG5leHBvcnQgY29uc3QgSEVBTFRIX0ZVTExfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjNGRmMDM3JylcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIT1ZFUl9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2NjZmZiZScpXG5leHBvcnQgY29uc3QgU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZDA4JylcbmV4cG9ydCBjb25zdCBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzlkZjFlNycpXG5cbmV4cG9ydCBjb25zdCBBQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2NjY2MwMCdcbmV4cG9ydCBjb25zdCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2ZmZmYwMCdcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9USU5UUyA9IFtcbiAgJyNmZmJiYmInLFxuICAnI2JiYmJmZicsXG4gICcjYmJmZmJiJyxcbiAgJyNiYmZmZmYnLFxuICAnI2ZmZmZiYicsXG4gICcjZmZiYmZmJyxcbiAgJyNmZmZmZmYnLFxuICAnI2JiYmJiYicsXG5dLm1hcChjb2xvdXJOdW1iZXIpXG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGNhbkF0dGFja09jY3VyIH0gZnJvbSAnLi4vc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNsYXNzIENvbWJpbmVkU3RhdGUge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHVibGljIGZpbmRTZWxlY3RlZFVuaXQgPSAoKTogT3B0aW9uPFVuaXQ+ID0+XG4gICAgdGhpcy5zZWxlY3RlZEhleCA/IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMuc2VsZWN0ZWRIZXgpIDogdW5kZWZpbmVkXG5cbiAgcHVibGljIGdldCBzZWxlY3RlZEhleCgpOiBPcHRpb248SGV4PiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGxheWVySWQoKTogUGxheWVySWQge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkXG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyB1bml0Q291bGRQb3RlbnRpYWxseU1vdmUgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09PSB0aGlzLnBsYXllcklkICYmIHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrID0gKHVuaXQ6IFVuaXQpOiBib29sZWFuID0+XG4gICAgdW5pdC5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMgJiYgIXRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVyblxuXG4gIHB1YmxpYyB1bml0Q2FuTW92ZVRvSGV4ID0gKHVuaXQ6IFVuaXQsIGhleDogSGV4KTogYm9vbGVhbiA9PlxuICAgIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlKHVuaXQpICYmXG4gICAgaGV4LmlzQWRqYWNlbnRUbyh1bml0LmxvY2F0aW9uKSAmJlxuICAgIHRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyhoZXgpICYmXG4gICAgIXRoaXMud29ybGRTdGF0ZS5tYXAuaXNNb3VudGFpbihoZXgpICYmXG4gICAgIXRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGhleClcblxuICAvKipcbiAgICogQHJldHVybiB0aGUgdW5pdCBpbiB0aGUgaGV4IHRvIGF0dGFjaywgaWYgYW4gYXR0YWNrIGlzIHBvc3NpYmxlLCBlbHNlIHVuZGVmaW5lZC5cbiAgICovXG4gIHB1YmxpYyB1bml0Q2FuQXR0YWNrSGV4ID0gKHVuaXQ6IFVuaXQsIGxvY2F0aW9uOiBIZXgsIGF0dGFja1R5cGU6IEF0dGFja1R5cGUpOiBPcHRpb248VW5pdD4gPT4ge1xuICAgIGNvbnN0IHRhcmdldFVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihsb2NhdGlvbilcbiAgICBpZiAoXG4gICAgICB0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHVuaXQpICYmXG4gICAgICB0YXJnZXRVbml0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRhcmdldFVuaXQucGxheWVySWQgIT09IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWQgJiZcbiAgICAgIGNhbkF0dGFja09jY3VyKGF0dGFja1R5cGUsIHVuaXQubG9jYXRpb24sIGxvY2F0aW9uKVxuICAgIClcbiAgICAgIHJldHVybiB0YXJnZXRVbml0XG4gIH1cblxuICBwdWJsaWMgZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMgPSAodW5pdElkPzogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCBjYW5kaWRhdGVVbml0cyA9IFIuc29ydEJ5KFxuICAgICAgKHVuaXQpID0+IHVuaXQuaWQsXG4gICAgICB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdHNGb3JQbGF5ZXIodGhpcy5wbGF5ZXJJZCkuZmlsdGVyKCh1bml0KSA9PiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMpLFxuICAgIClcbiAgICBpZiAodW5pdElkKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCA+IHVuaXRJZCkpID8/XG4gICAgICAgIFIuaGVhZChjYW5kaWRhdGVVbml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgPCB1bml0SWQpKVxuICAgICAgKVxuICAgIGVsc2UgcmV0dXJuIFIuaGVhZChjYW5kaWRhdGVVbml0cylcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBsYXllciB3aXRoIGlkICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHBsYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLW1hcCdcblxuZXhwb3J0IGNvbnN0IGNlbnRlclBvaW50ID0gKGhleDogSGV4KTogUG9pbnQgPT4gKHtcbiAgeDogaGV4LnggKiBNYXRoLnNxcnQoMykgKyAoaGV4LnkgKiBNYXRoLnNxcnQoMykpIC8gMixcbiAgeTogKGhleC55ICogMykgLyAyLFxufSlcblxuZXhwb3J0IGNvbnN0IGZyb21Qb2ludCA9IChwb2ludDogUG9pbnQpOiBIZXggPT4ge1xuICBjb25zdCB4ID0gKHBvaW50LnggKiBNYXRoLnNxcnQoMykpIC8gMyAtIHBvaW50LnkgLyAzXG4gIGNvbnN0IHkgPSAoMiAqIHBvaW50LnkpIC8gM1xuICByZXR1cm4gcm91bmQobmV3IEhleCh4LCB5KSlcbn1cblxuY29uc3Qgcm91bmQgPSAoaGV4OiBIZXgpOiBIZXggPT4ge1xuICBjb25zdCByeCA9IE1hdGgucm91bmQoaGV4LngpXG4gIGNvbnN0IHJ5ID0gTWF0aC5yb3VuZChoZXgueSlcbiAgY29uc3QgcnogPSBNYXRoLnJvdW5kKGhleC56KVxuXG4gIGNvbnN0IHhEaWZmID0gTWF0aC5hYnMocnggLSBoZXgueClcbiAgY29uc3QgeURpZmYgPSBNYXRoLmFicyhyeSAtIGhleC55KVxuICBjb25zdCB6RGlmZiA9IE1hdGguYWJzKHJ6IC0gaGV4LnkpXG5cbiAgaWYgKHhEaWZmID4geURpZmYgJiYgeERpZmYgPiB6RGlmZikgcmV0dXJuIG5ldyBIZXgoLXJ5IC0gcnosIHJ5KVxuICBlbHNlIGlmICh5RGlmZiA+IHpEaWZmKSByZXR1cm4gbmV3IEhleChyeCwgLXJ4IC0gcnopXG4gIGVsc2UgcmV0dXJuIG5ldyBIZXgocngsIHJ5KVxufVxuXG5jb25zdCBoZXhBbmdsZSA9IE1hdGguUEkgLyAzXG5jb25zdCBoZXhPZmZzZXQgPSBNYXRoLlBJIC8gNlxuXG5jb25zdCBoZXhDb3JuZXIgPSAoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyLCBpOiBudW1iZXIpOiBQb2ludCA9PiB7XG4gIGNvbnN0IGFuZ2xlUmFkaWFucyA9IGhleEFuZ2xlICogaSAtIGhleE9mZnNldFxuICBjb25zdCB4ID0gY2VudGVyLnggKyBzaXplICogTWF0aC5jb3MoYW5nbGVSYWRpYW5zKVxuICBjb25zdCB5ID0gY2VudGVyLnkgKyBzaXplICogTWF0aC5zaW4oYW5nbGVSYWRpYW5zKVxuICByZXR1cm4geyB4LCB5IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBoZXhDb3JuZXJzKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8UG9pbnQ+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB5aWVsZCBoZXhDb3JuZXIoY2VudGVyLCBzaXplLCBpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtYXBIZWlnaHQgPSAobWFwOiBXb3JsZE1hcCk6IG51bWJlciA9PiAobWFwLmhlaWdodCAqIDMpIC8gMlxuXG5leHBvcnQgY29uc3QgaGV4V2lkdGggPSAoaGV4U2l6ZTogbnVtYmVyKTogbnVtYmVyID0+IGhleFNpemUgKiBNYXRoLnNxcnQoMylcbiIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC9ib290LXNjZW5lJ1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tICcuL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUnXG5pbXBvcnQgeyBMb2JieVNjZW5lIH0gZnJvbSAnLi9sb2JieS9sb2JieS1zY2VuZSdcblxuZXhwb3J0IGRlZmF1bHQgW0Jvb3RTY2VuZSwgR2FtZVNjZW5lLCBNYWluTWVudVNjZW5lLCBMb2JieVNjZW5lXVxuIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEdBTUVfU0NFTkVfS0VZLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IExvYmJ5RGlzcGxheU9iamVjdHMgfSBmcm9tICcuL2xvYmJ5LWRpc3BsYXktb2JqZWN0cydcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uLy4uL3NlcnZlci93b3JsZC1zdGF0ZS1vd25lcidcblxuZXhwb3J0IGNsYXNzIENyZWF0ZWRMb2JieVNjZW5lIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBsb2JieURpc3BsYXlPYmplY3RzOiBMb2JieURpc3BsYXlPYmplY3RzXG4gIHByaXZhdGUgbGlzdGVuZXI/OiBXb3JsZEV2ZW50TGlzdGVuZXJcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50LCBwbGF5ZXJJZDogUGxheWVySWQsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wYXVzZU9uQmx1ciA9IGZhbHNlXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLkNMSUNLKVxuICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKEF1ZGlvS2V5cy5ORVdfVFVSTilcbiAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZChBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSlcbiAgICB0aGlzLmxvYmJ5RGlzcGxheU9iamVjdHMgPSB0aGlzLm1ha2VMb2JieURpc3BsYXlPYmplY3RzKHNjZW5lLCBwbGF5ZXJJZClcbiAgICBpZiAoc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBDbGllbnQpIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoc2VydmVyT3JDbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0QXNTZXJ2ZXIoc2VydmVyT3JDbGllbnQpXG4gICAgfVxuICAgIHRoaXMuc3luYygpXG4gIH1cblxuICBwcml2YXRlIG1ha2VMb2JieURpc3BsYXlPYmplY3RzID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHBsYXllcklkOiBQbGF5ZXJJZCkgPT5cbiAgICBuZXcgTG9iYnlEaXNwbGF5T2JqZWN0cyhzY2VuZSwgcGxheWVySWQsIHRoaXMuaGFuZGxlU3RhcnRHYW1lLCB0aGlzLmhhbmRsZUNoYW5nZVBsYXllck5hbWUpXG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpID0+IHRoaXMuaGFuZGxlV29ybGRFdmVudChldmVudCwgY2xpZW50KVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgIGNsaWVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICAgICAgICAgIHRoaXMubGlzdGVuZXIgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhdW5jaEdhbWVTY2VuZSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSlcbiAgICAgICAgdGhpcy5zeW5jKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMuc3luYygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50MiA9IChldmVudDogV29ybGRFdmVudCwgc2VydmVyOiBTZXJ2ZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ORVdfVFVSTilcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIpIHtcbiAgICAgICAgICBzZXJ2ZXIucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXVuY2hHYW1lU2NlbmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLlBMQVlFUl9KT0lORURfTE9CQlkpXG4gICAgICAgIHRoaXMuc3luYygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnN5bmMoKVxuICAgIH1cbiAgfVxuICBwcml2YXRlIGxhdW5jaEdhbWVTY2VuZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7XG4gICAgICBzZXJ2ZXJPckNsaWVudDogdGhpcy5zZXJ2ZXJPckNsaWVudCxcbiAgICAgIHdvcmxkU3RhdGU6IHRoaXMud29ybGRTdGF0ZSxcbiAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIH1cbiAgICB0aGlzLnNjZW5lLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVBsYXllck5hbWUgPSAobmFtZTogc3RyaW5nKTogdm9pZCA9PiB0aGlzLmRpc3BhdGNoQWN0aW9uKHsgdHlwZTogJ2NoYW5nZVBsYXllck5hbWUnLCBuYW1lIH0pXG5cbiAgcHJpdmF0ZSBkaXNwYXRjaEFjdGlvbiA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuaGFuZGxlQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJ2ZXJPckNsaWVudC5zZW5kQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3luYyA9ICgpOiB2b2lkID0+IHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cy5zeW5jKHRoaXMud29ybGRTdGF0ZSlcblxuICBwcml2YXRlIGFjdEFzU2VydmVyID0gKHNlcnZlcjogU2VydmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChldmVudCkgPT4gdGhpcy5oYW5kbGVXb3JsZEV2ZW50MihldmVudCwgc2VydmVyKVxuICAgIHNlcnZlci5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKSA9PiB0aGlzLmRpc3BhdGNoQWN0aW9uKHsgdHlwZTogJ3N0YXJ0R2FtZScgfSlcbn1cbiIsImltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi8uLi91aS9tZW51LWJ1dHRvbidcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuXG5leHBvcnQgY2xhc3MgTG9iYnlEaXNwbGF5T2JqZWN0cyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG9uU3RhcnRHYW1lOiBWb2lkRnVuY3Rpb25cbiAgcHJpdmF0ZSByZWFkb25seSBvbkNoYW5nZVBsYXllck5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWRcblxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllck5hbWVUZXh0czogTWFwPFBsYXllcklkLCBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFydEdhbWVCdXR0b24/OiBNZW51QnV0dG9uXG4gIHByaXZhdGUgcmVhZG9ubHkgd2FpdGluZ0Zvckhvc3RUZXh0PzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxuICAgIHBsYXllcklkOiBQbGF5ZXJJZCxcbiAgICBvblN0YXJ0R2FtZTogVm9pZEZ1bmN0aW9uLFxuICAgIG9uQ2hhbmdlUGxheWVyTmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZCxcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5vblN0YXJ0R2FtZSA9IG9uU3RhcnRHYW1lXG4gICAgdGhpcy5vbkNoYW5nZVBsYXllck5hbWUgPSBvbkNoYW5nZVBsYXllck5hbWVcbiAgICB0aGlzLnNjZW5lLmFkZC50ZXh0KDEwMCwgNTAsICdMbGFtYSBXYXJzJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpXG4gICAgaWYgKHBsYXllcklkID09PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24gPSBuZXcgTWVudUJ1dHRvbih0aGlzLnNjZW5lLCAxMDAsIDAsICdTdGFydCBHYW1lJywgdGhpcy5oYW5kbGVTdGFydEdhbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dCgxMDAsIDAsICdXYWl0aW5nIGZvciBob3N0IHRvIHN0YXJ0IHRoZSBnYW1lLi4uJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgIHRoaXMub25TdGFydEdhbWUoKVxuICB9XG5cbiAgcHVibGljIHN5bmMgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJlcXVpcmVkUGxheWVySWRzID0gd29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJZHMgPSBBcnJheS5mcm9tKHRoaXMucGxheWVyTmFtZVRleHRzLmtleXMoKSlcbiAgICBjb25zdCBzdXJwbHVzUGxheWVySWRzID0gUi5kaWZmZXJlbmNlKGN1cnJlbnRQbGF5ZXJJZHMsIHJlcXVpcmVkUGxheWVySWRzKVxuICAgIGZvciAoY29uc3QgcGxheWVySWQgb2Ygc3VycGx1c1BsYXllcklkcykge1xuICAgICAgdGhpcy5wbGF5ZXJOYW1lVGV4dHMuZ2V0KHBsYXllcklkKT8uZGVzdHJveSgpXG4gICAgfVxuICAgIGNvbnN0IG1pc3NpbmdQbGF5ZXJJZHMgPSBSLmRpZmZlcmVuY2UocmVxdWlyZWRQbGF5ZXJJZHMsIGN1cnJlbnRQbGF5ZXJJZHMpXG4gICAgZm9yIChjb25zdCBwbGF5ZXJJZCBvZiBtaXNzaW5nUGxheWVySWRzKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB3b3JsZFN0YXRlLmdldFBsYXllcihwbGF5ZXJJZClcbiAgICAgIGNvbnN0IHBsYXllclRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgICAudGV4dCgxMDAsIDAsIHBsYXllci5uYW1lLCB7XG4gICAgICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgICAgIGZpeGVkV2lkdGg6IDIwMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBsYXllcklkID09PSB0aGlzLnBsYXllcklkID8gJyMzMzMzMzMnIDogJyMwMDAwMDAnLFxuICAgICAgICB9KVxuICAgICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAgIC5zZXRQYWRkaW5nKDAsIDAsIDAsIDApXG4gICAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHBsYXllcklkID09PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnNjZW5lLnBsdWdpbnMuZ2V0KCdyZXhUZXh0RWRpdCcpIGFzIGFueVxuICAgICAgICAgICAgcGx1Z2luLmVkaXQocGxheWVyVGV4dCwge1xuICAgICAgICAgICAgICBvbkNsb3NlOiAoKSA9PiB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZShwbGF5ZXJUZXh0LnRleHQpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB0aGlzLnBsYXllck5hbWVUZXh0cy5zZXQocGxheWVySWQsIHBsYXllclRleHQpXG4gICAgfVxuICAgIGxldCB5ID0gMTAwXG4gICAgY29uc3Qgc29ydGVkUGxheWVycyA9IFIuc29ydEJ5KChwbGF5ZXIpID0+IHBsYXllci5pZCwgd29ybGRTdGF0ZS5wbGF5ZXJzKVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHNvcnRlZFBsYXllcnMpIHtcbiAgICAgIGNvbnN0IHBsYXllclRleHQgPSB0aGlzLnBsYXllck5hbWVUZXh0cy5nZXQocGxheWVyLmlkKVxuICAgICAgcGxheWVyVGV4dD8uc2V0VGV4dChwbGF5ZXIubmFtZSkuc2V0WSh5KVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICBpZiAodGhpcy5zdGFydEdhbWVCdXR0b24pIHtcbiAgICAgIHRoaXMuc3RhcnRHYW1lQnV0dG9uLnNldFkoeSlcbiAgICB9XG4gICAgaWYgKHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0KSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dC5zZXRZKHkpXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQ3JlYXRlZExvYmJ5U2NlbmUgfSBmcm9tICcuL2NyZWF0ZWQtbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBjb25zdCBMT0JCWV9TQ0VORV9LRVkgPSAnTG9iYnknXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9iYnlTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG4gIHBsYXllcklkOiBQbGF5ZXJJZFxuICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG59XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBMT0JCWV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBMb2JieVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHNlcnZlck9yQ2xpZW50LCBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9ID0gc2NlbmVEYXRhXG4gICAgbmV3IENyZWF0ZWRMb2JieVNjZW5lKHRoaXMsIHNlcnZlck9yQ2xpZW50LCBwbGF5ZXJJZCwgd29ybGRTdGF0ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbWFpbi1nYW1lL21vZGUnXG5pbXBvcnQgeyBNYXliZSwgT3B0aW9uLCB0b01heWJlLCB0b09wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lU3RhdGUge1xuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbW9kZTogTW9kZVxuICByZWFkb25seSBzZWxlY3RlZEhleDogT3B0aW9uPEhleD5cbiAgcmVhZG9ubHkgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcjogbnVtYmVyXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHBsYXllcklkLFxuICAgIG1vZGUsXG4gICAgc2VsZWN0ZWRIZXgsXG4gICAgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9IDAsXG4gIH06IHtcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBtb2RlOiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBPcHRpb248SGV4PlxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBudW1iZXJcbiAgfSkge1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICB0aGlzLnNlbGVjdGVkSGV4ID0gc2VsZWN0ZWRIZXhcbiAgICB0aGlzLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyXG4gICAgYXNzZXJ0KGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPj0gMClcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgbW9kZSA9IHRoaXMubW9kZSxcbiAgICBzZWxlY3RlZEhleCA9IHRvTWF5YmUodGhpcy5zZWxlY3RlZEhleCksXG4gICAgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcixcbiAgfToge1xuICAgIHBsYXllcklkPzogUGxheWVySWRcbiAgICBtb2RlPzogTW9kZVxuICAgIHNlbGVjdGVkSGV4PzogTWF5YmU8SGV4PlxuICAgIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBudW1iZXJcbiAgfSA9IHt9KTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICBuZXcgTG9jYWxHYW1lU3RhdGUoeyBwbGF5ZXJJZCwgbW9kZSwgc2VsZWN0ZWRIZXg6IHRvT3B0aW9uKHNlbGVjdGVkSGV4KSwgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciB9KVxuXG4gIHB1YmxpYyBzZXRTZWxlY3RlZEhleCA9IChzZWxlY3RlZEhleDogT3B0aW9uPEhleD4pOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLmNvcHkoeyBzZWxlY3RlZEhleDogdG9NYXliZShzZWxlY3RlZEhleCkgfSlcblxuICBwdWJsaWMgc2V0TW9kZSA9IChtb2RlOiBNb2RlKTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgbW9kZSB9KVxuXG4gIHB1YmxpYyBpbmNyZW1lbnRBY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gKCk6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcjogdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyICsgMSB9KVxuXG4gIHB1YmxpYyBkZWNyZW1lbnRBY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gKCk6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcjogdGhpcy5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyIC0gMSB9KVxufVxuXG5leHBvcnQgY29uc3QgSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFID0gbmV3IExvY2FsR2FtZVN0YXRlKHtcbiAgcGxheWVySWQ6IDEsXG4gIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbn0pXG4iLCJpbXBvcnQgeyBNYXBEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi9tYXAtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgVW5pdERpc3BsYXlPYmplY3QgfSBmcm9tICcuL3VuaXQtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsIFRleHRzRGlzcGxheU9iamVjdCB9IGZyb20gJy4vdGV4dHMtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyByYW5kb21FbGVtZW50IH0gZnJvbSAnLi4vLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCB7IEF0dGFja1R5cGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVBbmltYXRpb25TcGVjIHtcbiAgdHlwZTogJ21vdmUnXG4gIHVuaXRJZDogVW5pdElkXG4gIGZyb206IEhleFxuICB0bzogSGV4XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0QW5pbWF0aW9uU3BlYyB7XG4gIHR5cGU6ICdjb21iYXQnXG4gIGF0dGFja1R5cGU6IEF0dGFja1R5cGVcbiAgYXR0YWNrZXI6IHtcbiAgICB1bml0SWQ6IFVuaXRJZFxuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGtpbGxlZDogYm9vbGVhblxuICB9XG4gIGRlZmVuZGVyOiB7XG4gICAgdW5pdElkOiBVbml0SWRcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgZGFtYWdlOiBudW1iZXJcbiAgICBraWxsZWQ6IGJvb2xlYW5cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBbmltYXRpb25TcGVjID0gTW92ZUFuaW1hdGlvblNwZWMgfCBDb21iYXRBbmltYXRpb25TcGVjXG5cbmV4cG9ydCBjbGFzcyBEaXNwbGF5T2JqZWN0cyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHJlYWRvbmx5IG1hcERpc3BsYXlPYmplY3Q6IE1hcERpc3BsYXlPYmplY3RcbiAgcHJpdmF0ZSByZWFkb25seSB1bml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzOiBNYXA8VW5pdElkLCBVbml0RGlzcGxheU9iamVjdD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSB0ZXh0c0Rpc3BsYXlPYmplY3Q6IFRleHRzRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gIHByaXZhdGUgaXNBbmltYXRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSBhbmltYXRpb25zOiBBbmltYXRpb25TcGVjW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmUsXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IGxvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdCA9IG5ldyBNYXBEaXNwbGF5T2JqZWN0KHNjZW5lLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3QgPSBuZXcgVGV4dHNEaXNwbGF5T2JqZWN0KFxuICAgICAgc2NlbmUsXG4gICAgICB0aGlzLndvcmxkU3RhdGUsXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlLFxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICAgKVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVBvaW50ZXJNb3ZlID0gKHBvaW50OiBQb2ludCk6IHZvaWQgPT4gdGhpcy5tYXBEaXNwbGF5T2JqZWN0Py5oYW5kbGVQb2ludGVyTW92ZShwb2ludClcblxuICBwdWJsaWMgaGFzQ2xpY2tIYW5kbGVyRm9yID0gKHBvaW50OiBQb2ludCk6IGJvb2xlYW4gPT4gdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3QuaGFzQ2xpY2tIYW5kbGVyRm9yKHBvaW50KVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgYW5pbWF0aW9uOiBPcHRpb248QW5pbWF0aW9uU3BlYz4sXG4gICk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3Q/LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3Q/LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbnMgPSBSLmFwcGVuZChhbmltYXRpb24pKHRoaXMuYW5pbWF0aW9ucylcbiAgICAgIHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKS5mb3JFYWNoKHRoaXMubWFuYWdlVW5pdEFzQmVpbmdBbmltYXRlZClcbiAgICAgIHRoaXMudHJpZ2dlckFuaW1hdGlvbnMoKVxuICAgIH1cblxuICAgIHRoaXMuc3luY1VuaXRzKClcbiAgfVxuXG4gIHByaXZhdGUgc3luY1VuaXRzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVtb3ZlVW5pdERpc3BsYXlPYmplY3RzTm9Mb25nZXJOZWVkZWQoKVxuICAgIGNvbnN0IHVuaXRzVG9TeW5jID0gdGhpcy53b3JsZFN0YXRlLnVuaXRzLmZpbHRlcigodW5pdCkgPT4gIXRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuaGFzKHVuaXQuaWQpKVxuICAgIGZvciAoY29uc3QgdW5pdCBvZiB1bml0c1RvU3luYykge1xuICAgICAgbGV0IHVuaXREaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXQuaWQpXG4gICAgICBpZiAoIXVuaXREaXNwbGF5T2JqZWN0KSB7XG4gICAgICAgIHVuaXREaXNwbGF5T2JqZWN0ID0gbmV3IFVuaXREaXNwbGF5T2JqZWN0KHRoaXMuc2NlbmUsIHVuaXQpXG4gICAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0LmlkLCB1bml0RGlzcGxheU9iamVjdClcbiAgICAgIH1cbiAgICAgIHVuaXREaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVW5pdERpc3BsYXlPYmplY3RzTm9Mb25nZXJOZWVkZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3VycGx1c1VuaXRJZHMgPSBSLmRpZmZlcmVuY2UoXG4gICAgICBBcnJheS5mcm9tKHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmtleXMoKSksXG4gICAgICB0aGlzLndvcmxkU3RhdGUudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LmlkKSxcbiAgICApXG4gICAgZm9yIChjb25zdCB1bml0SWQgb2Ygc3VycGx1c1VuaXRJZHMpIHtcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpPy5kZXN0cm95KClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyQW5pbWF0aW9ucyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvY2Vzc0FuaW1hdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VxdWVuY2VBbmltYXRpb25zID0gKCk6IHtcbiAgICBhbmltYXRpb25zVG9QZXJmb3JtTm93OiBBbmltYXRpb25TcGVjW11cbiAgICBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXI6IEFuaW1hdGlvblNwZWNbXVxuICB9ID0+IHtcbiAgICBjb25zdCB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zID0gbmV3IFNldDxVbml0SWQ+KClcbiAgICBjb25zdCBhbmltYXRpb25zVG9QZXJmb3JtTm93ID0gW11cbiAgICBjb25zdCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgPSBbXVxuICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIHRoaXMuYW5pbWF0aW9ucykge1xuICAgICAgY29uc3QgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24gPSB0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICAgIGNvbnN0IGFmZmVjdGVkQnlFYXJsaWVyQW5pbWF0aW9ucyA9IFIuYW55KFxuICAgICAgICAodW5pdElkKSA9PiB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zLmhhcyh1bml0SWQpLFxuICAgICAgICB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbixcbiAgICAgIClcbiAgICAgIGlmIChhZmZlY3RlZEJ5RWFybGllckFuaW1hdGlvbnMpIHtcbiAgICAgICAgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyLnB1c2goYW5pbWF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdy5wdXNoKGFuaW1hdGlvbilcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdW5pdElkIG9mIHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKSB7XG4gICAgICAgIHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMuYWRkKHVuaXRJZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdywgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0FuaW1hdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICB0cnkge1xuICAgICAgd2hpbGUgKHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHsgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdywgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyIH0gPSB0aGlzLnNlcXVlbmNlQW5pbWF0aW9ucygpXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlclxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChhbmltYXRpb25zVG9QZXJmb3JtTm93Lm1hcCh0aGlzLnJ1bkFuaW1hdGlvbikpXG4gICAgICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cpIHtcbiAgICAgICAgICB0aGlzLnJlbGVhc2VVbml0c0Zyb21CZWluZ0FuaW1hdGVkV2hlcmVOb0xvbmdlck5lZWRlZChhbmltYXRpb24pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQgPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdElkc0luQW5pbWF0aW9uID0gdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgY29uc3QgdW5pdElkc0luUmVtYWluaW5nQW5pbWF0aW9ucyA9IHRoaXMuZ2V0VW5pdHNJbnZvbHZlZEluQW5pbWF0aW9ucygpXG4gICAgY29uc3QgdW5pdElkc1RvUmVsZWFzZSA9IFIuZGlmZmVyZW5jZSh1bml0SWRzSW5BbmltYXRpb24sIHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMpXG4gICAgdW5pdElkc1RvUmVsZWFzZS5mb3JFYWNoKHRoaXMucmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZClcbiAgfVxuXG4gIHByaXZhdGUgbWFuYWdlVW5pdEFzQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmIChkaXNwbGF5T2JqZWN0KSB7XG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdElkLCBkaXNwbGF5T2JqZWN0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRGcm9tQmVpbmdBbmltYXRlZCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7dW5pdElkfWBcbiAgICB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh1bml0KSB7XG4gICAgICBkaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGxheU9iamVjdC5kZXN0cm95KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMgPSAoKTogVW5pdElkW10gPT4gUi5jaGFpbih0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLCB0aGlzLmFuaW1hdGlvbnMpXG5cbiAgcHJpdmF0ZSBnZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiBVbml0SWRbXSA9PiB7XG4gICAgc3dpdGNoIChhbmltYXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLnVuaXRJZF1cbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHJldHVybiBbYW5pbWF0aW9uLmF0dGFja2VyLnVuaXRJZCwgYW5pbWF0aW9uLmRlZmVuZGVyLnVuaXRJZF1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bkFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBzd2l0Y2ggKGFuaW1hdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5Nb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIGF3YWl0IHRoaXMucnVuQ29tYmF0QW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhbmltYXRpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBydW5Nb3ZlQW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbjogTW92ZUFuaW1hdGlvblNwZWMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYW5pbWF0aW9uLnVuaXRJZClcbiAgICBpZiAoIWRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHthbmltYXRpb24udW5pdElkfWBcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLldBTEspXG4gICAgYXdhaXQgZGlzcGxheU9iamVjdC5ydW5Nb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbi5mcm9tLCBhbmltYXRpb24udG8pXG4gIH1cblxuICBwcml2YXRlIHJ1bkNvbWJhdEFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IENvbWJhdEFuaW1hdGlvblNwZWMpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gYW5pbWF0aW9uXG4gICAgY29uc3QgYXR0YWNrZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYXR0YWNrZXIudW5pdElkKVxuICAgIGlmICghYXR0YWNrZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YXR0YWNrZXIudW5pdElkfWBcbiAgICBjb25zdCBkZWZlbmRlckRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChkZWZlbmRlci51bml0SWQpXG4gICAgaWYgKCFkZWZlbmRlckRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHtkZWZlbmRlci51bml0SWR9YFxuICAgIGlmIChhbmltYXRpb24uYXR0YWNrVHlwZSA9PT0gJ21lbGVlJykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KHJhbmRvbUVsZW1lbnQoW0F1ZGlvS2V5cy5BVFRBQ0tfMSwgQXVkaW9LZXlzLkFUVEFDS18yLCBBdWRpb0tleXMuQVRUQUNLXzNdKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5TUElUKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkIHx8IGRlZmVuZGVyLmtpbGxlZCkge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ERUFUSClcbiAgICB9XG4gICAgY29uc3Qgc2ltdWx0YW5lb3VzQW5pbWF0aW9uczogUHJvbWlzZTx2b2lkPltdID0gW11cbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuQXR0YWNrQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuU3BpdEFuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKCkpXG4gICAgfVxuICAgIGlmIChkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChkZWZlbmRlckRpc3BsYXlPYmplY3QucnVuRGVhdGhBbmltYXRpb24oKSlcbiAgICB9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoc2ltdWx0YW5lb3VzQW5pbWF0aW9ucylcbiAgICBpZiAoYXR0YWNrZXIuZGFtYWdlID4gMCkgYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgYXR0YWNrZXIuZGFtYWdlKVxuICAgIGlmIChkZWZlbmRlci5kYW1hZ2UgPiAwKSBkZWZlbmRlckRpc3BsYXlPYmplY3QucnVuRGFtYWdlQW5pbWF0aW9uKGRlZmVuZGVyLmxvY2F0aW9uLCBkZWZlbmRlci5kYW1hZ2UpXG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZFBvaW50cywgbXVsdGlwbHlQb2ludCwgUG9pbnQsIHN1YnRyYWN0UG9pbnRzIH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBjZW50ZXJQb2ludCwgZnJvbVBvaW50IH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICBDb21iYXRXb3JsZEV2ZW50LFxuICBHYW1lT3ZlcldvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IG5vdGhpbmcsIE9wdGlvbiwgdG9NYXliZSB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUsIExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IEFMTF9BVURJT19LRVlTLCBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgbWFwVG9Mb2NhbEFjdGlvbiB9IGZyb20gJy4va2V5Ym9hcmQtbWFwcGVyJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IExvY2FsQWN0aW9uUHJvY2Vzc29yLCBMb2NhbEFjdGlvblJlc3VsdCB9IGZyb20gJy4vbG9jYWwtYWN0aW9uLXByb2Nlc3NvcidcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuLi9jb21iaW5lZC1zdGF0ZS1tZXRob2RzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IEFuaW1hdGlvblNwZWMsIERpc3BsYXlPYmplY3RzIH0gZnJvbSAnLi9kaXNwbGF5LW9iamVjdHMnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCBQb2ludGVyID0gUGhhc2VyLklucHV0LlBvaW50ZXJcblxuZXhwb3J0IGNvbnN0IEdBTUVfU0NFTkVfS0VZID0gJ0dhbWUnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBHQU1FX1NDRU5FX0tFWSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lU2NlbmVEYXRhIHtcbiAgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwbGF5ZXJJZDogUGxheWVySWRcbiAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxufVxuXG5leHBvcnQgY29uc3QgSEVYX1NJWkUgPSA0OFxuZXhwb3J0IGNvbnN0IERSQVdJTkdfT0ZGU0VUID0geyB4OiA2MCwgeTogMTAwIH1cbmV4cG9ydCBjb25zdCBoZXhDZW50ZXIgPSAoaGV4OiBIZXgpOiBQb2ludCA9PiBhZGRQb2ludHMobXVsdGlwbHlQb2ludChjZW50ZXJQb2ludChoZXgpLCBIRVhfU0laRSksIERSQVdJTkdfT0ZGU0VUKVxuXG5leHBvcnQgdHlwZSBHYW1lSWQgPSBzdHJpbmdcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgY3JlYXRlZDogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgc2VydmVyT3JDbGllbnQ/OiBTZXJ2ZXIgfCBDbGllbnRcblxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFXG5cbiAgcHJpdmF0ZSBkaXNwbGF5T2JqZWN0cz86IERpc3BsYXlPYmplY3RzXG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICAvLyBDcmVhdGVcbiAgLy8gLS0tLS0tXG5cbiAgcHVibGljIGNyZWF0ZSA9IChzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5jcmVhdGVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0dhbWUgc2NlbmUgaGFzIGFscmVhZHkgYmVlbiBjcmVhdGVkJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jcmVhdGVkID0gdHJ1ZVxuICAgIH1cbiAgICBjb25zdCB7IHNlcnZlck9yQ2xpZW50LCBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9ID0gc2NlbmVEYXRhXG4gICAgdGhpcy5zZXRVcFNvdW5kKClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURS5jb3B5KHsgcGxheWVySWQgfSlcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICBpZiAoc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuYWN0QXNTZXJ2ZXIoc2VydmVyT3JDbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoc2VydmVyT3JDbGllbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cyA9IG5ldyBEaXNwbGF5T2JqZWN0cyh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24pXG4gICAgdGhpcy51cGRhdGVBc0F0U3RhcnRPZlR1cm4oKVxuICAgIHRoaXMuc2V0VXBJbnB1dHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFNvdW5kID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goKGtleSkgPT4gdGhpcy5zb3VuZC5hZGQoa2V5KSlcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoYW5pbWF0aW9uPzogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlLCBhbmltYXRpb24pXG5cbiAgLy8gTmV0d29ya2luZ1xuICAvLyAtLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBjbGllbnRcbiAgICBjbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVXb3JsZEV2ZW50KVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RBc1NlcnZlciA9IChzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT4ge1xuICAgIHNlcnZlci5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnQpXG4gICAgdGhpcy53b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmNTZW5kVG9TZXJ2ZXIgPSBhc3luYyAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmICghdGhpcy5zZXJ2ZXJPckNsaWVudCkge1xuICAgICAgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBzZXJ2ZXJPckNsaWVudGBcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuaGFuZGxlQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5zZXJ2ZXJPckNsaWVudC5zZW5kQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9XG4gIH1cblxuICAvLyBJbnB1dCBoYW5kbGVyc1xuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgc2V0VXBJbnB1dHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5pbnB1dC5tb3VzZS5kaXNhYmxlQ29udGV4dE1lbnUoKVxuICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleSlcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24pXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcm1vdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBsb2NhbEFjdGlvbiA9IG1hcFRvTG9jYWxBY3Rpb24oZXZlbnQsIHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZSlcbiAgICBpZiAobG9jYWxBY3Rpb24pIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24obG9jYWxBY3Rpb24pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxvY2FsQWN0aW9uID0gKGxvY2FsQWN0aW9uOiBMb2NhbEFjdGlvbik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uUHJvY2Vzc29yID0gbmV3IExvY2FsQWN0aW9uUHJvY2Vzc29yKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbEFjdGlvblByb2Nlc3Nvci5wcm9jZXNzKGxvY2FsQWN0aW9uKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMuZW5hY3RMb2NhbEFjdGlvblJlc3VsdChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbmFjdExvY2FsQWN0aW9uUmVzdWx0ID0gKHJlc3VsdDogTG9jYWxBY3Rpb25SZXN1bHQpOiB2b2lkID0+IHtcbiAgICBpZiAocmVzdWx0Lm5ld0xvY2FsR2FtZVN0YXRlKSB7XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gcmVzdWx0Lm5ld0xvY2FsR2FtZVN0YXRlXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICAgIGlmIChyZXN1bHQud29ybGRBY3Rpb24pIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmluY3JlbWVudEFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIoKVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuXG4gICAgICB0aGlzLmFzeW5jU2VuZFRvU2VydmVyKHJlc3VsdC53b3JsZEFjdGlvbikuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlY3JlbWVudEFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIoKVxuICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnRlcjogUG9pbnRlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBvaW50ZXJQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIHRoaXMuZGlzcGxheU9iamVjdHM/LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlckRvd24gPSAocG9pbnRlcjogUG9pbnRlcik6IHZvaWQgPT4ge1xuICAgIC8vIElnbm9yZSBjbGlja3Mgb24gdGhlc2UgYXMgdGhleSBoYXZlIHRoZWlyIG93biBoYW5kbGVyc1xuICAgIGNvbnN0IHByZXNzZWRQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIGlmICh0aGlzLmRpc3BsYXlPYmplY3RzPy5oYXNDbGlja0hhbmRsZXJGb3IocHJlc3NlZFBvaW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGhleCA9IGZyb21Qb2ludChtdWx0aXBseVBvaW50KHN1YnRyYWN0UG9pbnRzKHByZXNzZWRQb2ludCwgRFJBV0lOR19PRkZTRVQpLCAxIC8gSEVYX1NJWkUpKVxuICAgIGlmIChwb2ludGVyLmJ1dHRvbiA9PT0gMikge1xuICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdnb0hleCcsIGhleCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUxlZnRDbGljayhoZXgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMb2NhbEFjdGlvbkZvckNsaWNraW5nQUhleCA9IChoZXg6IEhleCk6IExvY2FsQWN0aW9uID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdzZWxlY3RIZXgnLCBoZXggfVxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4geyB0eXBlOiAnY29tcGxldGVNb3ZlJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4IH1cbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZUF0dGFjaycsIHVuaXRJZDogbW9kZS51bml0SWQsIGhleCwgYXR0YWNrVHlwZTogbW9kZS5hdHRhY2tUeXBlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxlZnRDbGljayA9IChoZXg6IEhleCk6IHZvaWQgPT4gdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih0aGlzLmdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4KGhleCkpXG5cbiAgLy8gSGFuZGxlIHdvcmxkIGV2ZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgb2xkV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IG9sZFdvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcblxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICBjYXNlICdwbGF5ZXJDaGFuZ2VkTmFtZSc6XG4gICAgICBjYXNlICdnYW1lU3RhcnRlZCc6XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgICB0aGlzLmhhbmRsZVVuaXRNb3ZlZFdvcmxkRXZlbnQoZXZlbnQsIG9sZFdvcmxkU3RhdGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICB0aGlzLmhhbmRsZUNvbWJhdFdvcmxkRXZlbnQoZXZlbnQsIG9sZFdvcmxkU3RhdGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckVuZGVkVHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJEZWZlYXRlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyRGVmZWF0ZWQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZ2FtZU92ZXInOlxuICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKGV2ZW50KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbmV3VHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlTmV3VHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHYW1lT3ZlciA9IChldmVudDogR2FtZU92ZXJXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKGV2ZW50LnZpY3RvciA9PT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCkge1xuICAgICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDKVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllckVuZGVkVHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllckRlZmVhdGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVEKVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3VHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMudXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKCkge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogdG9NYXliZSh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKSxcbiAgICB9KVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudCA9IChldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCwgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBjb25zdCB3YXNQcmV2aW91c2x5U2VsZWN0ZWQgPVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCAmJlxuICAgICAgb2xkV29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCk/LmlkID09PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayh1bml0SWQsIHRvKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgc2VsZWN0ZWRIZXg6IHRvTWF5YmUobmV3U2VsZWN0ZWRIZXgpLFxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoeyB0eXBlOiAnbW92ZScsIHVuaXRJZCwgZnJvbSwgdG8gfSlcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sgPSAodW5pdElkOiBVbml0SWQsIGRlZmF1bHRMb2NhdGlvbjogSGV4KTogT3B0aW9uPEhleD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICAvLyBSZXRhaW4gc2VsZWN0aW9uIGlmIHVuaXQgc3RpbGwgZXhpc3RzIGFuZCB3ZSBzdGlsbCBoYXZlIGFjdGlvbiBwb2ludHMsIGVsc2Ugc2VsZWN0IG5leHQgdW5pdCAob3Igbm90aGluZyBpZiB0aGVyZSBpc24ndCBvbmUpXG4gICAgbGV0IG5ld1NlbGVjdGVkSGV4XG4gICAgaWYgKCF1bml0IHx8IHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIGNvbnN0IG5leHRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHVuaXRJZClcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gbmV4dFVuaXQ/LmxvY2F0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gZGVmYXVsdExvY2F0aW9uXG4gICAgfVxuICAgIHJldHVybiBuZXdTZWxlY3RlZEhleFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21iYXRXb3JsZEV2ZW50ID0gKGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50LCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG4gICAgdGhpcy51cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdChhdHRhY2tlciwgZGVmZW5kZXIsIG9sZFdvcmxkU3RhdGUpXG4gICAgdGhpcy5zeW5jU2NlbmUoe1xuICAgICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgICBhdHRhY2tUeXBlOiBldmVudC5hdHRhY2tUeXBlLFxuICAgICAgYXR0YWNrZXIsXG4gICAgICBkZWZlbmRlcixcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdCA9IChcbiAgICBhdHRhY2tlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIGRlZmVuZGVyOiBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gICAgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkVW5pdElkID0gbmV3IENvbWJpbmVkU3RhdGUob2xkV29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSkuZmluZFNlbGVjdGVkVW5pdCgpPy5pZFxuICAgIGlmIChwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgPT09IGF0dGFja2VyLnVuaXRJZCAmJiBhdHRhY2tlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKGF0dGFja2VyLnVuaXRJZCwgYXR0YWNrZXIubG9jYXRpb24pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICAgICAgICBzZWxlY3RlZEhleDogdG9NYXliZShuZXdTZWxlY3RlZEhleCksXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZXNlbGVjdCB1bml0IGtpbGxlZCBieSBhbm90aGVyIHBsYXllclxuICAgICAgaWYgKGRlZmVuZGVyLmtpbGxlZCAmJiBkZWZlbmRlci51bml0SWQgPT09IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCAmJiBkZWZlbmRlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgICAgc2VsZWN0ZWRIZXg6IG5vdGhpbmcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2EnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnbWVsZWUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncyc6XG4gICAgICBpZiAobW9kZS50eXBlID09PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9XG4gICAgICBicmVha1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tUeXBlLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleCwgYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3ROZXh0VW5pdCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgY29uc3QgdW5pdFRvU2VsZWN0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHNlbGVjdGVkVW5pdD8uaWQpXG4gICAgaWYgKHVuaXRUb1NlbGVjdCkge1xuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgICAgIC5zZXRTZWxlY3RlZEhleCh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKVxuICAgICAgICAuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2VsZWN0ZWRIZXg6IG5vdGhpbmcgfSkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleCkgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgsICdtZWxlZScpXG4gICAgICBpZiAodGFyZ2V0VW5pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoJ21lbGVlJywgc2VsZWN0ZWRVbml0LCB0YXJnZXRVbml0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNrSGV4ID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGF0dGFja2VyOiBVbml0LCBkZWZlbmRlcjogVW5pdCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyOiB7IHVuaXRJZDogYXR0YWNrZXIuaWQsIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbiB9LFxuICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uIH0sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicsIHR1cm46IHRoaXMud29ybGRTdGF0ZS50dXJuIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAodW5pdCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQsIGF0dGFja1R5cGUgfVxuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9ICh1bml0SWQ6IFVuaXRJZCwgZGVzdGluYXRpb246IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbikpIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAoXG4gICAgdW5pdElkOiBVbml0SWQsXG4gICAgdGFyZ2V0SGV4OiBIZXgsXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCwgYXR0YWNrVHlwZSlcbiAgICBpZiAoZGVmZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tUeXBlLCBhdHRhY2tlciwgZGVmZW5kZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bmRlZmluZWQpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgZnJvbVBvaW50LCBoZXhDb3JuZXJzIH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgSE9WRVJfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIsXG59IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgUG9seWdvbiA9IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uLy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcblxudHlwZSBUaWxlU3RhdGUgPSAnZGVmYXVsdCcgfCAnc2VsZWN0ZWQnIHwgJ3RhcmdldGFibGUnXG5cbmV4cG9ydCBjbGFzcyBNYXBEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGhleFBvbHlnb25zOiBNYXA8c3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4gPSBuZXcgTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+KClcbiAgcHJpdmF0ZSBwcmV2aW91c0hvdmVySGV4PzogSGV4XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGZvciAoY29uc3QgaGV4IG9mIHRoaXMud29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSkge1xuICAgICAgdGhpcy5jcmVhdGVIZXgoaGV4KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSGV4ID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9seWdvbkNlbnRlciA9IGhleENlbnRlcihoZXgpXG4gICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9seWdvbkNlbnRlci54LCBwb2x5Z29uQ2VudGVyLnksICdncmFzcycpLnNldFNjYWxlKDAuNjUpLnNldERlcHRoKC01KVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzTW91bnRhaW4oaGV4KSkge1xuICAgICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9seWdvbkNlbnRlci54LCBwb2x5Z29uQ2VudGVyLnksICdtb3VudGFpbicpLnNldERlcHRoKC01KVxuICAgIH1cbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKS5zZXRPcmlnaW4oMCwgMCkuc2V0RmlsbFN0eWxlKDB4MDAwMDAsIDApXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUoaGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIERlcHRoc1xuICAvLyAtNSAtIGltYWdlXG4gIC8vIC00IC0gZGVmYXVsdCBib3JkZXJcbiAgLy8gLTMgLSB0YXJnZXRhYmxlIGJvcmRlclxuICAvLyAtMiAtIHNlbGVjdGVkXG4gIC8vIC0xIC0gaG92ZXJcblxuICBwcml2YXRlIGdldERlcHRoID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogbnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiAtNFxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiAtM1xuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gLTJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNUaWxlID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldFN0cm9rZVN0eWxlKDMsIHRoaXMuZ2V0SGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpLnNldERlcHRoKHRoaXMuZ2V0RGVwdGgodGlsZVN0YXRlKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHRocm93IGBObyBwb2x5Z29uIGZvdW5kIGZvciAke2hleH1gXG4gICAgcmV0dXJuIHBvbHlnb25cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGlsZVN0YXRlID0gKGhleDogSGV4KTogVGlsZVN0YXRlID0+IHtcbiAgICBjb25zdCB7IHBsYXllcklkLCBzZWxlY3RlZEhleCwgbW9kZSB9ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZVxuICAgIGlmIChzZWxlY3RlZEhleCAmJiBzZWxlY3RlZEhleC5lcXVhbHMoaGV4KSkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PT0gJ21vdmVVbml0Jykge1xuICAgICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZChtb2RlLnVuaXRJZClcbiAgICAgIGlmIChzZWxlY3RlZEhleCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBoZXgpKSB7XG4gICAgICAgIHJldHVybiAndGFyZ2V0YWJsZSdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PT0gJ2F0dGFjaycpIHtcbiAgICAgIGlmIChzZWxlY3RlZEhleCAmJiBjYW5BdHRhY2tPY2N1cihtb2RlLmF0dGFja1R5cGUsIGhleCwgc2VsZWN0ZWRIZXgpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgIT09IHBsYXllcklkKSB7XG4gICAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4Qm9yZGVyQ29sb3VyID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3ZlckhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gSE9WRVJfVElMRV9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocG9pbnRlclBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlckhleCAmJiB0aGlzLnByZXZpb3VzSG92ZXJIZXguZXF1YWxzKGhleCkpIHJldHVyblxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXgpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUodGhpcy5wcmV2aW91c0hvdmVySGV4KVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleClcbiAgICAgICAgLnNldFN0cm9rZVN0eWxlKHRpbGVTdGF0ZSA9PT0gJ2RlZmF1bHQnID8gMiA6IDQsIHRoaXMuZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIodGlsZVN0YXRlKSlcbiAgICAgICAgLnNldERlcHRoKC0xKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gaGV4XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBoZXhXaWR0aCwgbWFwSGVpZ2h0IH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgQUNUSU9OX1RFWFRfQ09MT1VSLCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBEUkFXSU5HX09GRlNFVCwgSEVYX1NJWkUgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5cbmV4cG9ydCB0eXBlIExvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IChhY3Rpb246IExvY2FsQWN0aW9uKSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB2aWN0b3J5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZExvZ1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2NlbmUuYWRkXG4gICAgICAuaW1hZ2UoMzYsIDMyLCAnbGxhbWEnKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1tsb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMucGxheWVyVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoNzAsIDIwLCAnJylcbiAgICB0aGlzLmhvdXJnbGFzcyA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDg3NSwgMzAsICdob3VyZ2xhc3MnKS5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgIERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLFxuICAgICAgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksXG4gICAgICAnJyxcbiAgICApXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDI1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDUwLCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQzID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDc1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQzQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQzLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDcwMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksICcnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbmRUdXJuJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZGVmZWF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIChtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSkgLyAyLCAnWW91IGhhdmUgYmVlbiBkZWZlYXRlZCEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy52aWN0b3J5VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIDMwLCAnVmljdG9yeSEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy53b3JsZExvZ1RleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDk2MCwgNTAsICcnKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0Q2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnYWJvcnQnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQyQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdtZWxlZScgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQzQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0IG9mIFt0aGlzLmVuZFR1cm5UZXh0LCB0aGlzLmFjdGlvblRleHQsIHRoaXMuYWN0aW9uVGV4dDIsIHRoaXMuYWN0aW9uVGV4dDNdKVxuICAgICAgaWYgKGdhbWVPYmplY3QuZ2V0Qm91bmRzKCkuY29udGFpbnMocG9pbnQueCwgcG9pbnQueSkpIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpXG4gICAgdGhpcy5ob3VyZ2xhc3Muc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5hY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID4gMClcbiAgICB0aGlzLnBsYXllclRleHQuc2V0VGV4dChgJHtwbGF5ZXIubmFtZX0gLSBUdXJuICR7dGhpcy53b3JsZFN0YXRlLnR1cm59YClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0My5zZXRUZXh0KCcnKVxuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5zeW5jU2VsZWN0SGV4TW9kZVRleHQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLnN5bmNNb3ZlVW5pdE1vZGVUZXh0KG1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zeW5jQXR0YWNrTW9kZVRleHQobW9kZS51bml0SWQsIG1vZGUuYXR0YWNrVHlwZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgICBpZiAocGxheWVyLmVuZGVkVHVybikge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdXYWl0aW5nIGZvciBuZXh0IHR1cm4uLi4nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ0VuZCBUdXJuIChTaGlmdCArIEVudGVyKScpXG4gICAgfVxuICAgIHRoaXMuZGVmZWF0VGV4dC5zZXRWaXNpYmxlKHBsYXllci5kZWZlYXRlZClcbiAgICB0aGlzLnZpY3RvcnlUZXh0LnNldFZpc2libGUod29ybGRTdGF0ZS5nYW1lT3ZlckluZm8/LnZpY3RvciA9PT0gcGxheWVyLmlkKVxuICAgIHRoaXMud29ybGRMb2dUZXh0LnNldFRleHQoUi50YWtlTGFzdCgzMCwgdGhpcy53b3JsZFN0YXRlLndvcmxkTG9nKS5qb2luKCdcXG4nKSlcbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkLCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoYENsaWNrIHVuaXQgdG8gJHthdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFjaycgOiAnc3BpdCd9IChvciBFU0MgdG8gY2FuY2VsKWApXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJ1NwaXQgKHMpJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllck5hbWUgPSAocGxheWVySWQ6IFBsYXllcklkKTogc3RyaW5nID0+IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpLm5hbWVcblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBsYXllcklkLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9ID0gdW5pdFxuICAgIGNvbnN0IHBsYXllck5hbWUgPSB0aGlzLmdldFBsYXllck5hbWUocGxheWVySWQpXG4gICAgcmV0dXJuIGAke25hbWV9IC0gTGxhbWEgd2FycmlvciAtICR7cGxheWVyTmFtZX0gLSBIUCAke2hpdFBvaW50cy5jdXJyZW50fS8ke2hpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke2FjdGlvblBvaW50cy5jdXJyZW50fS8ke2FjdGlvblBvaW50cy5tYXh9YFxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IGhleENlbnRlciB9IGZyb20gJy4vZ2FtZS1zY2VuZSdcbmltcG9ydCB7IEhFQUxUSF9CT1JERVJfQ09MT1VSLCBIRUFMVEhfRU1QVFlfQ09MT1VSLCBIRUFMVEhfRlVMTF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBhZGRQb2ludHMsIGRpc3RhbmNlQmV0d2VlblBvaW50cywgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IHBsYXlUd2VlbiB9IGZyb20gJy4uLy4uL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcblxuY29uc3QgSEVBTFRIX0JBUl9XSURUSCA9IDUwXG5jb25zdCBIRUFMVEhfQkFSX0hFSUdIVCA9IDEyXG5jb25zdCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MgPSAyXG5jb25zdCBJTUFHRV9PRkZTRVQgPSB7IHg6IDAsIHk6IDQgfVxuY29uc3QgSEVBTFRIX0JBUl9PRkZTRVQgPSB7IHg6IC0yNSwgeTogLTQwIH1cblxuZXhwb3J0IGNsYXNzIFVuaXREaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgdW5pdDogVW5pdFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhCYXJHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzXG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgdW5pdDogVW5pdCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICB0aGlzLmltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIDAsICdsbGFtYScpLnNldFNjYWxlKDAuOCkuc2V0VGludCh0aGlzLmdldFBsYXllclRpbnQodGhpcy51bml0LnBsYXllcklkKSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzID0gc2NlbmUuYWRkLmdyYXBoaWNzKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyVGludCA9IChwbGF5ZXJJZDogUGxheWVySWQpID0+XG4gICAgUExBWUVSX1RJTlRTWyhQTEFZRVJfVElOVFMubGVuZ3RoICsgcGxheWVySWQgLSAxKSAlIFBMQVlFUl9USU5UUy5sZW5ndGhdXG5cbiAgcHJpdmF0ZSBnZXRIZWFsdGhCYXJQb3NpdGlvbiA9IChwb2ludDogUG9pbnQpOiBQb2ludCA9PiBhZGRQb2ludHMocG9pbnQsIEhFQUxUSF9CQVJfT0ZGU0VUKVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAodW5pdDogVW5pdCk6IHZvaWQgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09PSB0aGlzLnVuaXQuaWQpXG4gICAgdGhpcy51bml0ID0gdW5pdFxuICAgIGNvbnN0IHVuaXRQb2ludCA9IGhleENlbnRlcih0aGlzLnVuaXQubG9jYXRpb24pXG4gICAgdGhpcy5pbWFnZS5zZXRQb3NpdGlvbih1bml0UG9pbnQueCArIElNQUdFX09GRlNFVC54LCB1bml0UG9pbnQueSArIElNQUdFX09GRlNFVC55KVxuICAgIHRoaXMuc3luY0hlYWx0aEJhcih1bml0UG9pbnQpXG4gIH1cblxuICBwcml2YXRlIHN5bmNIZWFsdGhCYXIgPSAodW5pdFBvaW50OiBQb2ludCkgPT4ge1xuICAgIGNvbnN0IGhlYWx0aEJhclBvc2l0aW9uID0gdGhpcy5nZXRIZWFsdGhCYXJQb3NpdGlvbih1bml0UG9pbnQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5zZXRQb3NpdGlvbihoZWFsdGhCYXJQb3NpdGlvbi54LCBoZWFsdGhCYXJQb3NpdGlvbi55KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuY2xlYXIoKVxuXG4gICAgLy8gRHJhdyBib3JkZXJcbiAgICBjb25zdCBpbm5lcldpZHRoID0gSEVBTFRIX0JBUl9XSURUSCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IEhFQUxUSF9CQVJfSEVJR0hUIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9CT1JERVJfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoMCwgMCwgSEVBTFRIX0JBUl9XSURUSCwgSEVBTFRIX0JBUl9IRUlHSFQpXG5cbiAgICAvLyBEcmF3IGVtcHR5IGJhY2tncm91bmRcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRU1QVFlfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuXG4gICAgLy8gRmlsbCBpbiBiYXJcbiAgICBjb25zdCB7IGN1cnJlbnQsIG1heCB9ID0gdGhpcy51bml0LmhpdFBvaW50c1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9GVUxMX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgKGlubmVyV2lkdGggKiBjdXJyZW50KSAvIG1heCxcbiAgICAgIGlubmVySGVpZ2h0LFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBydW5Nb3ZlQW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IE1PVkVfQU5JTUFUSU9OX0RVUkFUSU9OID0gNTAwXG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogTU9WRV9BTklNQVRJT05fRFVSQVRJT04sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiBNT1ZFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBydW5EZWF0aEFuaW1hdGlvbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB0d2VlbiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiBbdGhpcy5pbWFnZSwgdGhpcy5oZWFsdGhCYXJHcmFwaGljc10sXG4gICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgYXdhaXQgcGxheVR3ZWVuKHR3ZWVuKVxuICB9XG5cbiAgcHVibGljIHJ1blNwaXRBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZnJvbVBvaW50ID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgdG9Qb2ludCA9IGhleENlbnRlcih0bylcbiAgICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlQmV0d2VlblBvaW50cyhmcm9tUG9pbnQsIHRvUG9pbnQpXG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZShmcm9tUG9pbnQueCwgZnJvbVBvaW50LnksICdzcGl0Jykuc2V0U2NhbGUoMC44KVxuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IGltYWdlLFxuICAgICAgeDoge1xuICAgICAgICBmcm9tOiBmcm9tUG9pbnQueCxcbiAgICAgICAgdG86IHRvUG9pbnQueCxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIGZyb206IGZyb21Qb2ludC55LFxuICAgICAgICB0bzogdG9Qb2ludC55LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiBkaXN0YW5jZSAqIDQsXG4gICAgICBlYXNlOiAnUXVhZCcsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gICAgaW1hZ2UuZGVzdHJveSgpXG4gIH1cblxuICBwdWJsaWMgcnVuRGFtYWdlQW5pbWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uOiBIZXgsIGRhbWFnZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgbG9jYXRpb25Qb2ludCA9IGhleENlbnRlcihsb2NhdGlvbilcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KGxvY2F0aW9uUG9pbnQueCwgbG9jYXRpb25Qb2ludC55LCBkYW1hZ2UudG9TdHJpbmcoKSwge1xuICAgICAgICBjb2xvcjogJyNmZjg4ODgnLFxuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAyLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNilcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgeToge1xuICAgICAgICBmcm9tOiBsb2NhdGlvblBvaW50LnkgLSA1MCxcbiAgICAgICAgdG86IGxvY2F0aW9uUG9pbnQueSAtIDc1LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgZWFzZTogJ0xpbmVhcicsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGVhc2U6ICdDdWJpYy5pbicsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICB0ZXh0LmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIHJ1bkF0dGFja0FuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2NlbmUudHdlZW5zLmtpbGxUd2VlbnNPZihbdGhpcy5oZWFsdGhCYXJHcmFwaGljcywgdGhpcy5pbWFnZV0pXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5kZXN0cm95KClcbiAgICB0aGlzLmltYWdlLmRlc3Ryb3koKVxuICB9XG59XG5cbnR5cGUgVHdlZW5YWSA9IHsgeDogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfTsgeTogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfSB9XG5cbmNvbnN0IGNhbGN1bGF0ZVR3ZWVuWFkgPSAoZnJvbTogUG9pbnQsIHRvOiBQb2ludCwgb2Zmc2V0OiBQb2ludCk6IFR3ZWVuWFkgPT4gKHtcbiAgeDoge1xuICAgIGZyb206IGZyb20ueCArIG9mZnNldC54LFxuICAgIHRvOiB0by54ICsgb2Zmc2V0LngsXG4gIH0sXG4gIHk6IHtcbiAgICBmcm9tOiBmcm9tLnkgKyBvZmZzZXQueSxcbiAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICB9LFxufSlcbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL21lbnUtYnV0dG9uJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiB9IGZyb20gJy4uLy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMT0JCWV9TQ0VORV9LRVksIExvYmJ5U2NlbmVEYXRhIH0gZnJvbSAnLi4vbG9iYnkvbG9iYnktc2NlbmUnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBzZXRVcmxJbmZvIH0gZnJvbSAnLi4vYm9vdC91cmwtaW5mbydcblxuZXhwb3J0IGNvbnN0IE1BSU5fTUVOVV9TQ0VORV9LRVkgPSAnTWFpbk1lbnUnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBNQUlOX01FTlVfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmFkZC50ZXh0KDEwMCwgNTAsICdMbGFtYSBXYXJzJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpXG4gICAgdGhpcy5zb3VuZC5wYXVzZU9uQmx1ciA9IGZhbHNlXG4gICAgdGhpcy5zb3VuZC5hZGQoQXVkaW9LZXlzLkNMSUNLKVxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnSG9zdCBHYW1lJywgKCkgPT4ge1xuICAgICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMuaGFuZGxlSG9zdEdhbWUoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUhvc3RHYW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZDogR2FtZUlkID0gdXVpZCgpXG4gICAgY29uc3QgcGxheWVySWQgPSBIT1NUX1BMQVlFUl9JRFxuICAgIGNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIod29ybGRFdmVudERiLCBnYW1lSWQsIElOSVRJQUxfV09STERfU1RBVEUsIDApXG4gICAgc2VydmVyLmhhbmRsZUFjdGlvbihwbGF5ZXJJZCwgeyB0eXBlOiAnaW5pdGlhbGlzZScsIHN0YXRlOiBJTklUSUFMX1dPUkxEX1NUQVRFIH0pXG4gICAgc2V0VXJsSW5mbyh7IGdhbWVJZCB9KVxuICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIsIHdvcmxkU3RhdGU6IHNlcnZlci53b3JsZFN0YXRlLCBwbGF5ZXJJZDogcGxheWVySWQgfVxuICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBwb2ludCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvaW50ID0+ICh7IHgsIHkgfSlcblxuZXhwb3J0IGNvbnN0IG11bHRpcGx5UG9pbnQgPSAocG9pbnQ6IFBvaW50LCBuOiBudW1iZXIpOiBQb2ludCA9PiAoeyB4OiBwb2ludC54ICogbiwgeTogcG9pbnQueSAqIG4gfSlcblxuZXhwb3J0IGNvbnN0IGFkZFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHsgeDogcG9pbnQxLnggKyBwb2ludDIueCwgeTogcG9pbnQxLnkgKyBwb2ludDIueSB9KVxuXG5leHBvcnQgY29uc3Qgc3VidHJhY3RQb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IFBvaW50ID0+ICh7XG4gIHg6IHBvaW50MS54IC0gcG9pbnQyLngsXG4gIHk6IHBvaW50MS55IC0gcG9pbnQyLnksXG59KVxuXG5jb25zdCBzcXVhcmUgPSAobjogbnVtYmVyKTogbnVtYmVyID0+IG4gKiBuXG5cbmV4cG9ydCBjb25zdCBkaXN0YW5jZUJldHdlZW5Qb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IG51bWJlciA9PlxuICBNYXRoLnNxcnQoc3F1YXJlKHBvaW50MS54IC0gcG9pbnQyLngpICsgc3F1YXJlKHBvaW50MS55IC0gcG9pbnQyLnkpKVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEF0dGFja1R5cGUsIEF0dGFja1dvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFBsYXllckRlZmVhdGVkV29ybGRFdmVudCwgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IHJhbmRvbUludEluY2x1c2l2ZSB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5cbmV4cG9ydCBjb25zdCBjYW5BdHRhY2tPY2N1ciA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLCBmcm9tOiBIZXgsIHRvOiBIZXgpOiBib29sZWFuID0+IHtcbiAgc3dpdGNoIChhdHRhY2tUeXBlKSB7XG4gICAgY2FzZSAnbWVsZWUnOlxuICAgICAgcmV0dXJuIGZyb20uaXNBZGphY2VudFRvKHRvKVxuICAgIGNhc2UgJ3NwaXQnOlxuICAgICAgcmV0dXJuIGZyb20uZGlzdGFuY2VUbyh0bykgPD0gMlxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQXR0YWNrID0gKGFjdGlvbjogQXR0YWNrV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSB0aGlzLnZhbGlkYXRlQXR0YWNrKGFjdGlvbilcbiAgICBjb25zdCB7IGF0dGFja1R5cGUgfSA9IGFjdGlvblxuICAgIGNvbnN0IHJhd0F0dGFja2VyRGFtYWdlID0gYXR0YWNrVHlwZSA9PT0gJ21lbGVlJyA/IHJhbmRvbUludEluY2x1c2l2ZSg4LCAxMikgOiAwXG4gICAgY29uc3QgcmF3RGVmZW5kZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKDE3LCAyMykgOiByYW5kb21JbnRJbmNsdXNpdmUoNCwgNilcbiAgICBjb25zdCBhdHRhY2tlckRhbWFnZSA9IE1hdGgubWluKGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50LCByYXdBdHRhY2tlckRhbWFnZSlcbiAgICBjb25zdCBkZWZlbmRlckRhbWFnZSA9IE1hdGgubWluKGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50LCByYXdEZWZlbmRlckRhbWFnZSlcbiAgICBjb25zdCBjb21iYXRXb3JsZEV2ZW50ID0gdGhpcy5tYWtlQ29tYmF0V29ybGRFdmVudChhdHRhY2tUeXBlLCBhdHRhY2tlciwgYXR0YWNrZXJEYW1hZ2UsIGRlZmVuZGVyLCBkZWZlbmRlckRhbWFnZSlcblxuICAgIGxldCBuZXdXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnQoY29tYmF0V29ybGRFdmVudClcbiAgICBjb25zdCBldmVudHM6IFdvcmxkRXZlbnRbXSA9IFtjb21iYXRXb3JsZEV2ZW50XVxuICAgIGxldCBuZXh0V29ybGRFdmVudElkID0gdGhpcy5uZXh0V29ybGRFdmVudElkICsgMVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmlzUGxheWVyRGVmZWF0ZWQoZGVmZW5kZXIucGxheWVySWQpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMucGxheWVyRGVmZWF0ZWRFdmVudChuZXh0V29ybGRFdmVudElkKyssIGRlZmVuZGVyLnBsYXllcklkKVxuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICBuZXdXb3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICBpZiAobmV3V29ybGRTdGF0ZS5pc1BsYXllckRlZmVhdGVkKGF0dGFja2VyLnBsYXllcklkKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLnBsYXllckRlZmVhdGVkRXZlbnQobmV4dFdvcmxkRXZlbnRJZCsrLCBhdHRhY2tlci5wbGF5ZXJJZClcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KVxuICAgICAgbmV3V29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgY29uc3QgdW5kZWZlYXRlZFBsYXllcnMgPSBuZXdXb3JsZFN0YXRlLnBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIuZGVmZWF0ZWQpXG4gICAgaWYgKFIuaXNFbXB0eSh1bmRlZmVhdGVkUGxheWVycykpIHtcbiAgICAgIGV2ZW50cy5wdXNoKHsgaWQ6IG5leHRXb3JsZEV2ZW50SWQrKywgdHlwZTogJ2dhbWVPdmVyJyB9KVxuICAgIH0gZWxzZSBpZiAodW5kZWZlYXRlZFBsYXllcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCB2aWN0b3IgPSB1bmRlZmVhdGVkUGxheWVyc1swXS5pZFxuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInLCB2aWN0b3IgfSlcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5ZXJEZWZlYXRlZEV2ZW50ID0gKGlkOiBXb3JsZEV2ZW50SWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllckRlZmVhdGVkV29ybGRFdmVudCA9PiAoe1xuICAgIGlkLFxuICAgIHR5cGU6ICdwbGF5ZXJEZWZlYXRlZCcsXG4gICAgcGxheWVySWQ6IHBsYXllcklkLFxuICB9KVxuXG4gIHByaXZhdGUgdmFsaWRhdGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IHsgYXR0YWNrZXI6IFVuaXQ7IGRlZmVuZGVyOiBVbml0IH0gPT4ge1xuICAgIGNvbnN0IGF0dGFja2VySWQgPSBhY3Rpb24uYXR0YWNrZXIudW5pdElkXG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VySWQpXG4gICAgaWYgKCFhdHRhY2tlcikgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VySWR9YFxuICAgIGlmIChhdHRhY2tlci5wbGF5ZXJJZCAhPT0gdGhpcy5wbGF5ZXJJZCkgdGhyb3cgYENhbm5vdCBjb250cm9sIGFub3RoZXIgcGxheWVyJ3MgdW5pdDogJHthdHRhY2tlci5pZH1gXG4gICAgaWYgKGF0dGFja2VyLmFjdGlvblBvaW50cy5jdXJyZW50IDwgMSkgdGhyb3cgYE5vdCBlbm91Z2ggYWN0aW9uIHBvaW50cyB0byBhdHRhY2tgXG4gICAgaWYgKCFhdHRhY2tlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmF0dGFja2VyLmxvY2F0aW9uKSkgdGhyb3cgYEF0dGFja2VyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGNvbnN0IGRlZmVuZGVySWQgPSBhY3Rpb24uZGVmZW5kZXIudW5pdElkXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVySWQpXG4gICAgaWYgKCFkZWZlbmRlcikgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVySWR9YFxuICAgIGlmIChkZWZlbmRlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkgdGhyb3cgYENhbm5vdCBhdHRhY2sgb3duIHVuaXRgXG4gICAgaWYgKCFkZWZlbmRlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmRlZmVuZGVyLmxvY2F0aW9uKSkgdGhyb3cgYERlZmVuZGVyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGlmICghY2FuQXR0YWNrT2NjdXIoYWN0aW9uLmF0dGFja1R5cGUsIGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IGF0dGFjayBvZiB0eXBlICR7YWN0aW9uLmF0dGFja1R5cGV9IGJldHdlZW4gaGV4ZXMgJHthdHRhY2tlci5sb2NhdGlvbn0gdG8gJHtkZWZlbmRlci5sb2NhdGlvbn0gdG9vIGZhciBhcGFydGBcbiAgICByZXR1cm4geyBhdHRhY2tlciwgZGVmZW5kZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlQ29tYmF0V29ybGRFdmVudCA9IChcbiAgICBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLFxuICAgIGF0dGFja2VyOiBVbml0LFxuICAgIGF0dGFja2VyRGFtYWdlOiBudW1iZXIsXG4gICAgZGVmZW5kZXI6IFVuaXQsXG4gICAgZGVmZW5kZXJEYW1hZ2U6IG51bWJlcixcbiAgKTogQ29tYmF0V29ybGRFdmVudCA9PiAoe1xuICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgYXR0YWNrVHlwZSxcbiAgICBhdHRhY2tlcjoge1xuICAgICAgcGxheWVySWQ6IGF0dGFja2VyLnBsYXllcklkLFxuICAgICAgdW5pdElkOiBhdHRhY2tlci5pZCxcbiAgICAgIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbixcbiAgICAgIGRhbWFnZTogYXR0YWNrZXJEYW1hZ2UsXG4gICAgICBraWxsZWQ6IGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50ID09PSBhdHRhY2tlckRhbWFnZSxcbiAgICB9LFxuICAgIGRlZmVuZGVyOiB7XG4gICAgICBwbGF5ZXJJZDogZGVmZW5kZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGRlZmVuZGVyLmlkLFxuICAgICAgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBkZWZlbmRlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT09IGRlZmVuZGVyRGFtYWdlLFxuICAgIH0sXG4gICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gIH0pXG59XG4iLCJpbXBvcnQge1xuICBKb2luZWRSZXNwb25zZSxcbiAgSm9pblJlcXVlc3QsXG4gIFJlam9pbmVkUmVzcG9uc2UsXG4gIFJlam9pblJlcXVlc3QsXG4gIFdvcmxkQWN0aW9uUmVxdWVzdCxcbiAgV29ybGRFdmVudE1lc3NhZ2UsXG59IGZyb20gJy4vbWVzc2FnZXMnXG5pbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uLCBzZXJpYWxpc2VUb0pzb24gfSBmcm9tICcuLi91dGlsL2pzb24tc2VyaWFsaXNhdGlvbidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgUGVlckNsaWVudCB9IGZyb20gJy4vcGVlci1jbGllbnQnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgV29ybGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi93b3JsZC1zdGF0ZS1vd25lcidcblxuZXhwb3J0IGNsYXNzIENsaWVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGVlckNsaWVudDogUGVlckNsaWVudFxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogV29ybGRFdmVudExpc3RlbmVyW10gPSBbXVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihldmVudClcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwZWVyQ2xpZW50OiBQZWVyQ2xpZW50KSB7XG4gICAgdGhpcy5wZWVyQ2xpZW50ID0gcGVlckNsaWVudFxuICAgIHBlZXJDbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVXb3JsZEV2ZW50TWVzc2FnZSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlV29ybGRFdmVudE1lc3NhZ2UgPSAobWVzc2FnZTogV29ybGRFdmVudE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBjb25zdCBldmVudCA9IGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5ldmVudClcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY29ubmVjdCA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8Q2xpZW50PiA9PiB7XG4gICAgY29uc3QgcGVlckNsaWVudCA9IGF3YWl0IFBlZXJDbGllbnQuY29ubmVjdChnYW1lSWQpXG4gICAgcmV0dXJuIG5ldyBDbGllbnQocGVlckNsaWVudClcbiAgfVxuXG4gIHB1YmxpYyByZWpvaW4gPSBhc3luYyAocGxheWVySWQ6IFBsYXllcklkKTogUHJvbWlzZTxXb3JsZFN0YXRlPiA9PiB7XG4gICAgY29uc3QgcmVqb2luUmVxdWVzdDogUmVqb2luUmVxdWVzdCA9IHsgdHlwZTogJ3Jlam9pbicsIHBsYXllcklkIH1cbiAgICBjb25zdCByZWpvaW5lZFJlc3BvbnNlOiBSZWpvaW5lZFJlc3BvbnNlID0gYXdhaXQgdGhpcy5wZWVyQ2xpZW50LnNlbmRSZXF1ZXN0KHJlam9pblJlcXVlc3QpXG4gICAgcmV0dXJuIFdvcmxkU3RhdGUuZnJvbUpzb24ocmVqb2luZWRSZXNwb25zZS53b3JsZFN0YXRlKVxuICB9XG5cbiAgcHVibGljIGpvaW4gPSBhc3luYyAoKTogUHJvbWlzZTx7IHBsYXllcklkOiBQbGF5ZXJJZDsgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSB9PiA9PiB7XG4gICAgY29uc3Qgam9pblJlcXVlc3Q6IEpvaW5SZXF1ZXN0ID0geyB0eXBlOiAnam9pbicgfVxuICAgIGNvbnN0IGpvaW5lZFJlc3BvbnNlOiBKb2luZWRSZXNwb25zZSA9IGF3YWl0IHRoaXMucGVlckNsaWVudC5zZW5kUmVxdWVzdChqb2luUmVxdWVzdClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IGpvaW5lZFJlc3BvbnNlLnBsYXllcklkXG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IFdvcmxkU3RhdGUuZnJvbUpzb24oam9pbmVkUmVzcG9uc2Uud29ybGRTdGF0ZSlcbiAgICByZXR1cm4geyBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9XG4gIH1cblxuICBwdWJsaWMgc2VuZEFjdGlvbiA9IGFzeW5jIChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBtZXNzYWdlOiBXb3JsZEFjdGlvblJlcXVlc3QgPSB7XG4gICAgICB0eXBlOiAnd29ybGRBY3Rpb24nLFxuICAgICAgYWN0aW9uOiBzZXJpYWxpc2VUb0pzb24oYWN0aW9uKSxcbiAgICAgIHBsYXllcklkOiBwbGF5ZXJJZCxcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5wZWVyQ2xpZW50LnNlbmRSZXF1ZXN0KG1lc3NhZ2UpXG4gIH1cbn1cbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHtcbiAgQnJvYWRjYXN0TWVzc2FnZTIsXG4gIFBlZXJJZCxcbiAgUmVxdWVzdElkLFxuICBSZXF1ZXN0TWVzc2FnZTIsXG4gIFJlc3BvbnNlTWVzc2FnZTIsXG4gIFNlcnZlclRvQ2xpZW50TWVzc2FnZTIsXG59IGZyb20gJy4vcGVlci1zZXJ2ZXInXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5pbXBvcnQgeyBuZXdQZWVyIH0gZnJvbSAnLi9wZWVyLXV0aWxzJ1xuXG50eXBlIFJlc29sdmU8VD4gPSAodmFsdWU/OiBUIHwgUHJvbWlzZUxpa2U8VD4pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgUGVlckxpc3RlbmVyID0gKG1lc3NhZ2U6IGFueSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgUGVlckNsaWVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvblxuICBwcml2YXRlIHJlYWRvbmx5IG91dHN0YW5kaW5nUmVxdWVzdHM6IE1hcDxSZXF1ZXN0SWQsIFJlc29sdmU8YW55Pj4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFBlZXJMaXN0ZW5lcltdID0gW11cblxuICBjb25zdHJ1Y3Rvcihjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKSB7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvblxuICAgIGNvbm5lY3Rpb24ub24oJ2RhdGEnLCB0aGlzLmhhbmRsZUNvbm5lY3Rpb25EYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb25uZWN0aW9uRGF0YSA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UyKTogdm9pZCA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ0NMSUVOVDogcmVjZWl2ZWQgbWVzc2FnZScpXG4gICAgLy8gY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAncmVzcG9uc2UnOlxuICAgICAgICB0aGlzLmhhbmRsZVJlc3BvbnNlKG1lc3NhZ2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdicm9hZGNhc3QnOlxuICAgICAgICB0aGlzLmhhbmRsZUJyb2FkY2FzdChtZXNzYWdlKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb25uZWN0ID0gKHBlZXJJZDogUGVlcklkKTogUHJvbWlzZTxQZWVyQ2xpZW50PiA9PlxuICAgIG5ldyBQcm9taXNlPFBlZXJDbGllbnQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBwZWVyID0gbmV3UGVlcigpXG4gICAgICBwZWVyLm9uKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgICBwZWVyLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiBvcGVuJylcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHBlZXIuY29ubmVjdChwZWVySWQsIHsgcmVsaWFibGU6IHRydWUgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ0xJRU5UOiBjb25uZWN0aW9uIG9wZW4nKVxuICAgICAgICAgIGNvbnN0IGNsaWVudCA9IG5ldyBQZWVyQ2xpZW50KGNvbm5lY3Rpb24pXG4gICAgICAgICAgcmVzb2x2ZShjbGllbnQpXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgcHVibGljIHNlbmRSZXF1ZXN0ID0gKHJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiA9PlxuICAgIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmU6IFJlc29sdmU8YW55PikgPT4ge1xuICAgICAgY29uc3QgcmVxdWVzdE1lc3NhZ2U6IFJlcXVlc3RNZXNzYWdlMiA9IHtcbiAgICAgICAgdHlwZTogJ3JlcXVlc3QnLFxuICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUVOVDogc2VuZGluZyByZXF1ZXN0JylcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlcXVlc3RNZXNzYWdlKVxuICAgICAgdGhpcy5jb25uZWN0aW9uLnNlbmQocmVxdWVzdE1lc3NhZ2UpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuc2V0KHJlcXVlc3RNZXNzYWdlLmlkLCByZXNvbHZlKVxuICAgIH0pXG5cbiAgcHJpdmF0ZSBoYW5kbGVSZXNwb25zZSA9IChtZXNzYWdlOiBSZXNwb25zZU1lc3NhZ2UyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcmVxdWVzdElkID0gbWVzc2FnZS5yZXNwb25zZVRvXG4gICAgY29uc3QgcmVzb2x2ZTogT3B0aW9uPFJlc29sdmU8YW55Pj4gPSB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZ2V0KHJlcXVlc3RJZClcbiAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgcmVzb2x2ZShtZXNzYWdlLnJlc3BvbnNlKVxuICAgICAgdGhpcy5vdXRzdGFuZGluZ1JlcXVlc3RzLmRlbGV0ZShyZXF1ZXN0SWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGBDTElFTlQ6IHJlc3BvbnNlIHJlY2VpdmVkIGZvciB1bmtub3duIHJlcXVlc3QgJHtyZXF1ZXN0SWR9YClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFBlZXJMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXI6IFBlZXJMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKG1lc3NhZ2U6IGFueSk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVCcm9hZGNhc3QgPSAobWVzc2FnZTogQnJvYWRjYXN0TWVzc2FnZTIpOiB2b2lkID0+IHtcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhtZXNzYWdlLmJvZHkpXG4gIH1cbn1cbiIsImltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcbmltcG9ydCB7IG5ld1BlZXIgfSBmcm9tICcuL3BlZXItdXRpbHMnXG5cbmV4cG9ydCB0eXBlIFBlZXJJZCA9IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBSZXF1ZXN0SWQgPSBzdHJpbmdcblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0TWVzc2FnZTIge1xuICB0eXBlOiAncmVxdWVzdCdcbiAgaWQ6IFJlcXVlc3RJZFxuICByZXF1ZXN0OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlMiA9IFJlcXVlc3RNZXNzYWdlMlxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3BvbnNlTWVzc2FnZTIge1xuICB0eXBlOiAncmVzcG9uc2UnXG4gIHJlc3BvbnNlVG86IFJlcXVlc3RJZFxuICByZXNwb25zZTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvYWRjYXN0TWVzc2FnZTIge1xuICB0eXBlOiAnYnJvYWRjYXN0J1xuICBib2R5OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgU2VydmVyVG9DbGllbnRNZXNzYWdlMiA9IFJlc3BvbnNlTWVzc2FnZTIgfCBCcm9hZGNhc3RNZXNzYWdlMlxuXG5leHBvcnQgY2xhc3MgUGVlclNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGVlcjogUGVlclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbm5lY3Rpb25zOiBQZWVyLkRhdGFDb25uZWN0aW9uW10gPSBbXVxuICBwcml2YXRlIHJlYWRvbmx5IGhhbmRsZU1lc3NhZ2U6IChtZXNzYWdlOiBhbnkpID0+IGFueVxuXG4gIGNvbnN0cnVjdG9yKGlkOiBQZWVySWQsIGhhbmRsZU1lc3NhZ2U6IChtZXNzYWdlOiBhbnkpID0+IGFueSkge1xuICAgIHRoaXMuaGFuZGxlTWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2VcbiAgICB0aGlzLnBlZXIgPSBuZXdQZWVyKGlkKVxuICAgIHRoaXMucGVlci5vbignZXJyb3InLCAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIHRoaXMucGVlci5vbignY29ubmVjdGlvbicsIHRoaXMuaGFuZGxlTmV3Q29ubmVjdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3Q29ubmVjdGlvbiA9IChjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ1NFUlZFUjogcmVjZWl2ZWQgbmV3IGNvbm5lY3Rpb24gZnJvbSAnICsgY29ubmVjdGlvbi5wZWVyKVxuICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKVxuICAgIGNvbm5lY3Rpb24ub24oJ2RhdGEnLCB0aGlzLmhhbmRsZUNvbm5lY3Rpb25EYXRhKGNvbm5lY3Rpb24pKVxuICB9XG5cbiAgcHVibGljIGJyb2FkY2FzdCA9IChtZXNzYWdlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBjb25zdCBicm9hZGNhc3RNZXNzYWdlOiBCcm9hZGNhc3RNZXNzYWdlMiA9IHsgdHlwZTogJ2Jyb2FkY2FzdCcsIGJvZHk6IG1lc3NhZ2UgfVxuICAgIGZvciAoY29uc3QgY29ubmVjdGlvbiBvZiB0aGlzLmNvbm5lY3Rpb25zKSBjb25uZWN0aW9uLnNlbmQoYnJvYWRjYXN0TWVzc2FnZSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29ubmVjdGlvbkRhdGEgPSAoY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbikgPT4gKG1lc3NhZ2U6IENsaWVudFRvU2VydmVyTWVzc2FnZTIpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VSVkVSOiByZWNlaXZlZCBuZXcgbWVzc2FnZSBmcm9tICcgKyBjb25uZWN0aW9uLnBlZXIpXG4gICAgLy8gY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuaGFuZGxlTWVzc2FnZShtZXNzYWdlLnJlcXVlc3QpXG4gICAgY29uc3QgcmVzcG9uc2VNZXNzYWdlOiBSZXNwb25zZU1lc3NhZ2UyID0ge1xuICAgICAgdHlwZTogJ3Jlc3BvbnNlJyxcbiAgICAgIHJlc3BvbnNlVG86IG1lc3NhZ2UuaWQsXG4gICAgICByZXNwb25zZSxcbiAgICB9XG4gICAgY29ubmVjdGlvbi5zZW5kKHJlc3BvbnNlTWVzc2FnZSlcbiAgfVxufVxuIiwiaW1wb3J0IFBlZXIgPSByZXF1aXJlKCdwZWVyanMnKVxuXG5leHBvcnQgY29uc3QgbmV3UGVlciA9IChpZD86IHN0cmluZywgb3B0aW9ucz86IFBlZXIuUGVlckpTT3B0aW9uKTogUGVlciA9PiB7XG4gIGNvbnN0IF9QZWVyID0gKHdpbmRvdyBhcyBhbnkpLlBlZXIgYXMgdHlwZW9mIFBlZXJcbiAgcmV0dXJuIG5ldyBfUGVlcihpZCwgb3B0aW9ucylcbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIsIFdvcmxkU3RhdGVPd25lciB9IGZyb20gJy4vd29ybGQtc3RhdGUtb3duZXInXG5pbXBvcnQgeyBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQsIFdvcmxkRXZlbnRJZCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IENsaWVudFJlcXVlc3QsIFJlam9pblJlcXVlc3QsIFdvcmxkRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEFkZFBsYXllcldvcmxkQWN0aW9uLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgUGVlclNlcnZlciB9IGZyb20gJy4vcGVlci1zZXJ2ZXInXG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGVPd25lcjogV29ybGRTdGF0ZU93bmVyXG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGJcbiAgcHJpdmF0ZSByZWFkb25seSBnYW1lSWQ6IEdhbWVJZFxuXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG4gIHByaXZhdGUgcmVhZG9ubHkgcGVlclNlcnZlcjogUGVlclNlcnZlclxuXG4gIHB1YmxpYyBnZXQgd29ybGRTdGF0ZSgpOiBXb3JsZFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy53b3JsZFN0YXRlT3duZXIud29ybGRTdGF0ZVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZXN0b3JlR2FtZSA9IGFzeW5jICh3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYiwgZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPFNlcnZlcj4gPT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHdvcmxkRXZlbnREYi5nZXRFdmVudHNGb3JHYW1lKGdhbWVJZClcbiAgICBjb25zdCBzb3J0ZWRFdmVudHMgPSBSLnNvcnRCeSgoZXZlbnQpID0+IGV2ZW50LmlkLCBldmVudHMpXG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEUuYXBwbHlFdmVudHMoc29ydGVkRXZlbnRzKVxuICAgIHJldHVybiBuZXcgU2VydmVyKHdvcmxkRXZlbnREYiwgZ2FtZUlkLCB3b3JsZFN0YXRlLCBldmVudHMubGVuZ3RoICsgMSlcbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihldmVudClcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYiwgZ2FtZUlkOiBHYW1lSWQsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5leHRXb3JsZEV2ZW50SWQ6IFdvcmxkRXZlbnRJZCkge1xuICAgIHRoaXMud29ybGRFdmVudERiID0gd29ybGRFdmVudERiXG4gICAgdGhpcy5nYW1lSWQgPSBnYW1lSWRcbiAgICB0aGlzLnBlZXJTZXJ2ZXIgPSBuZXcgUGVlclNlcnZlcih0aGlzLmdhbWVJZCwgdGhpcy5oYW5kbGVDbGllbnRUb1NlcnZlck1lc3NhZ2UpXG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIgPSBuZXcgV29ybGRTdGF0ZU93bmVyKHdvcmxkU3RhdGUsIG5leHRXb3JsZEV2ZW50SWQpXG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIuYWRkTGlzdGVuZXIoKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgICAgIHRoaXMud29ybGRFdmVudERiLnN0b3JlKHRoaXMuZ2FtZUlkLCBldmVudClcbiAgICAgIGNvbnN0IG1lc3NhZ2U6IFdvcmxkRXZlbnRNZXNzYWdlID0geyB0eXBlOiAnd29ybGRFdmVudCcsIGV2ZW50OiBzZXJpYWxpc2VUb0pzb24oZXZlbnQpIH1cbiAgICAgIHRoaXMucGVlclNlcnZlci5icm9hZGNhc3QobWVzc2FnZSlcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRKb2luID0gKCk6IGFueSA9PiB7XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgLy8gVE9ETzogdGVsbCB0aGUgY2xpZW50IFwiYmFkIGx1Y2tcIlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhZGRQbGF5ZXJBY3Rpb246IEFkZFBsYXllcldvcmxkQWN0aW9uID0geyB0eXBlOiAnYWRkUGxheWVyJyB9XG4gICAgICBjb25zdCBwbGF5ZXJBZGRlZEV2ZW50ID0gPFBsYXllckFkZGVkV29ybGRFdmVudD50aGlzLmhhbmRsZUFjdGlvbigxLCBhZGRQbGF5ZXJBY3Rpb24pWzBdXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnam9pbmVkJyxcbiAgICAgICAgcGxheWVySWQ6IHBsYXllckFkZGVkRXZlbnQucGxheWVySWQsXG4gICAgICAgIHdvcmxkU3RhdGU6IHRoaXMud29ybGRTdGF0ZS50b0pzb24oKSxcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudFJlam9pbiA9IChtZXNzYWdlOiBSZWpvaW5SZXF1ZXN0KTogYW55ID0+IHtcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuaXNWYWxpZFBsYXllcklkKG1lc3NhZ2UucGxheWVySWQpKVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3Jlam9pbmVkJyxcbiAgICAgICAgd29ybGRTdGF0ZTogd29ybGRTdGF0ZS50b0pzb24oKSxcbiAgICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFRPRE86IHRlbGwgdGhlIGNsaWVudCBub1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlID0gKG1lc3NhZ2U6IENsaWVudFJlcXVlc3QpOiBhbnkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2pvaW4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDbGllbnRKb2luKClcbiAgICAgIGNhc2UgJ3Jlam9pbic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNsaWVudFJlam9pbihtZXNzYWdlKVxuICAgICAgY2FzZSAnd29ybGRBY3Rpb24nOlxuICAgICAgICB0aGlzLndvcmxkU3RhdGVPd25lci5oYW5kbGVBY3Rpb24obWVzc2FnZS5wbGF5ZXJJZCwgZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmFjdGlvbikpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PlxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmhhbmRsZUFjdGlvbihwbGF5ZXJJZCwgYWN0aW9uKVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIEF0dGFja1dvcmxkQWN0aW9uLFxuICBDaGFuZ2VQbGF5ZXJOYW1lV29ybGRBY3Rpb24sXG4gIEVuZFR1cm5Xb3JsZEFjdGlvbixcbiAgSW5pdGlhbGlzZVdvcmxkQWN0aW9uLFxuICBNb3ZlVW5pdFdvcmxkQWN0aW9uLFxuICBXb3JsZEFjdGlvbixcbn0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7XG4gIEdhbWVTdGFydGVkV29ybGRFdmVudCxcbiAgSW5pdGlhbGlzZVdvcmxkRXZlbnQsXG4gIE5ld1R1cm5Xb3JsZEV2ZW50LFxuICBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCxcbiAgUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBXb3JsZEdlbmVyYXRvciB9IGZyb20gJy4vd29ybGQtZ2VuZXJhdG9yJ1xuaW1wb3J0IHsgQXR0YWNrV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlV29ybGRFdmVudHMgPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5jYWxjdWxhdGVTcGVjaWZpY1dvcmxkRXZlbnRzKGFjdGlvbilcbiAgICByZXR1cm4gdGhpcy5hZGROZXdUdXJuSWZOZWVkZWQoZXZlbnRzKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGROZXdUdXJuSWZOZWVkZWQoZXZlbnRzOiBXb3JsZEV2ZW50W10pIHtcbiAgICBjb25zdCBsYXN0RXZlbnQgPSBSLmxhc3QoZXZlbnRzKVxuICAgIGlmIChsYXN0RXZlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1dvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudHMoZXZlbnRzKVxuICAgICAgaWYgKG5ld1dvcmxkU3RhdGUuY2FuQW55UGxheWVyQWN0KCkgfHwgbmV3V29ybGRTdGF0ZS51bml0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV4dFdvcmxkRXZlbnRJZCA9IGxhc3RFdmVudC5pZCArIDFcbiAgICAgICAgY29uc3QgbmV3VHVybkV2ZW50OiBOZXdUdXJuV29ybGRFdmVudCA9IHsgaWQ6IG5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICduZXdUdXJuJyB9XG4gICAgICAgIHJldHVybiBSLmFwcGVuZChuZXdUdXJuRXZlbnQsIGV2ZW50cylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVNwZWNpZmljV29ybGRFdmVudHMgPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUluaXRpYWxpc2UoYWN0aW9uKVxuICAgICAgY2FzZSAnYWRkUGxheWVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQWRkUGxheWVyKClcbiAgICAgIGNhc2UgJ2NoYW5nZVBsYXllck5hbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lKGFjdGlvbilcbiAgICAgIGNhc2UgJ3N0YXJ0R2FtZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVN0YXJ0R2FtZSgpXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBdHRhY2soYWN0aW9uKVxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb3ZlVW5pdChhY3Rpb24pXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJbml0aWFsaXNlID0gKGFjdGlvbjogSW5pdGlhbGlzZVdvcmxkQWN0aW9uKTogW0luaXRpYWxpc2VXb3JsZEV2ZW50XSA9PiB7XG4gICAgaWYgKHRoaXMubmV4dFdvcmxkRXZlbnRJZCA+IDApIHtcbiAgICAgIHRocm93IGBDYW4gb25seSBpbml0aWFsaXNlIGFzIHRoZSBmaXJzdCBldmVudGBcbiAgICB9XG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBZGRQbGF5ZXIgPSAoKTogW1BsYXllckFkZGVkV29ybGRFdmVudF0gPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nUGxheWVySWRzID0gdGhpcy53b3JsZFN0YXRlLmdldFBsYXllcklkcygpXG4gICAgY29uc3QgcGxheWVySWQgPSBSLmFwcGx5KE1hdGgubWF4LCBleGlzdGluZ1BsYXllcklkcykgKyAxXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdwbGF5ZXJBZGRlZCcsIHBsYXllcklkIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVBsYXllck5hbWUgPSAoYWN0aW9uOiBDaGFuZ2VQbGF5ZXJOYW1lV29ybGRBY3Rpb24pOiBbUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50XSA9PiB7XG4gICAgdGhpcy5nZXRQbGF5ZXIoKVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAncGxheWVyQ2hhbmdlZE5hbWUnLCBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCwgbmFtZTogYWN0aW9uLm5hbWUgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRHYW1lID0gKCk6IFtHYW1lU3RhcnRlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICB0aHJvdyBgQ2Fubm90IHN0YXJ0IGFuIGFscmVhZHktc3RhcnRlZCBnYW1lYFxuICAgIH1cbiAgICBpZiAodGhpcy5wbGF5ZXJJZCAhPT0gSE9TVF9QTEFZRVJfSUQpIHtcbiAgICAgIHRocm93IGBDYW5ub3Qgc3RhcnQgdGhlIGdhbWUgdW5sZXNzIHRoZSBob3N0YFxuICAgIH1cbiAgICBjb25zdCB3b3JsZEdlbmVyYXRvciA9IG5ldyBXb3JsZEdlbmVyYXRvcih0aGlzLndvcmxkU3RhdGUpXG4gICAgY29uc3QgdW5pdHMgPSB3b3JsZEdlbmVyYXRvci5nZW5lcmF0ZVVuaXRzKClcbiAgICBjb25zdCBtb3VudGFpbnMgPSB3b3JsZEdlbmVyYXRvci5nZW5lcmF0ZU1vdW50YWlucygpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdnYW1lU3RhcnRlZCcsIHVuaXRzLCBtb3VudGFpbnMgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQXR0YWNrID0gKGFjdGlvbjogQXR0YWNrV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT5cbiAgICBuZXcgQXR0YWNrV29ybGRBY3Rpb25IYW5kbGVyKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5wbGF5ZXJJZCwgdGhpcy5uZXh0V29ybGRFdmVudElkKS5oYW5kbGVBdHRhY2soYWN0aW9uKVxuXG4gIHByaXZhdGUgaGFuZGxlTW92ZVVuaXQgPSAoYWN0aW9uOiBNb3ZlVW5pdFdvcmxkQWN0aW9uKTogW1VuaXRNb3ZlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBjb25zdCB7IHVuaXRJZCwgdG8gfSA9IGFjdGlvblxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIH1cbiAgICBjb25zdCBmcm9tID0gdW5pdC5sb2NhdGlvblxuICAgIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB7XG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gICAgfVxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBvdXQtb2YtYm91bmRzIGhleCAke3RvfWBcbiAgICB9XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odG8pKSB7XG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YFxuICAgIH1cbiAgICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpIHtcbiAgICAgIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gbW92ZWBcbiAgICB9XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICAgICAgdHlwZTogJ3VuaXRNb3ZlZCcsXG4gICAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgICAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgICAgICAgdW5pdElkLFxuICAgICAgICBmcm9tLFxuICAgICAgICB0byxcbiAgICAgIH0sXG4gICAgXVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbmRUdXJuID0gKGFjdGlvbjogRW5kVHVybldvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBpZiAoYWN0aW9uLnR1cm4gIT09IHRoaXMud29ybGRTdGF0ZS50dXJuKSB7XG4gICAgICB0aHJvdyBgQ2Fubm90IGVuZCBhIHR1cm4gdGhhdCdzIG5vdCB0aGUgY3VycmVudCB0dXJuYFxuICAgIH1cbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcigpXG4gICAgaWYgKHBsYXllci5lbmRlZFR1cm4pIHtcbiAgICAgIHRocm93IGBQbGF5ZXIgaGFzIGFscmVhZHkgZW5kZWQgdGhlaXIgdHVybmBcbiAgICB9XG4gICAgY29uc3QgcGxheWVyRW5kZWRUdXJuQWN0aW9uOiBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50ID0ge1xuICAgICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICAgIHR5cGU6ICdwbGF5ZXJFbmRlZFR1cm4nLFxuICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgfVxuICAgIHJldHVybiBbcGxheWVyRW5kZWRUdXJuQWN0aW9uXVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICB0aHJvdyBgTm8gcGxheWVyIHdpdGggSUQgJHt0aGlzLnBsYXllcklkfWBcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyByYW5kb21FbGVtZW50IH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvaGl0LXBvaW50cydcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuY29uc3QgTExBTUFfTkFNRVMgPSBbXG4gICdXYWx0ZXInLFxuICAnRG9sbHknLFxuICAnQ2hld3BhY2EnLFxuICAnQmFyYWNrIE8uIExsYW1hJyxcbiAgJ0NvbW8gU2UnLFxuICAnRnV6enknLFxuICAnSmVyZW15JyxcbiAgJ0FsZm9uc28nLFxuICAnUm9zZScsXG4gICdMb3JlbnpvJyxcbl1cblxuZXhwb3J0IGNsYXNzIFdvcmxkR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVtYWluaW5nSGV4ZXM6IEhleFtdXG4gIHByaXZhdGUgbmV4dFVuaXRJZDogVW5pdElkID0gMVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IEFycmF5LmZyb20od29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVbml0ID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFVuaXQgPT4ge1xuICAgIGNvbnN0IGlkID0gdGhpcy5uZXh0VW5pdElkKytcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJhbmRvbUVsZW1lbnQodGhpcy5yZW1haW5pbmdIZXhlcylcbiAgICB0aGlzLnJlbWFpbmluZ0hleGVzID0gUi53aXRob3V0KFtsb2NhdGlvbl0sIHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgY29uc3QgbmFtZSA9IHJhbmRvbUVsZW1lbnQoTExBTUFfTkFNRVMpXG4gICAgcmV0dXJuIG5ldyBVbml0KHtcbiAgICAgIGlkLFxuICAgICAgcGxheWVySWQsXG4gICAgICBuYW1lLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBhY3Rpb25Qb2ludHM6IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiAyLCBtYXg6IDIgfSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlTW91bnRhaW4gPSAoKTogSGV4ID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJhbmRvbUVsZW1lbnQodGhpcy5yZW1haW5pbmdIZXhlcylcbiAgICB0aGlzLnJlbWFpbmluZ0hleGVzID0gUi53aXRob3V0KFtsb2NhdGlvbl0sIHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgcmV0dXJuIGxvY2F0aW9uXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVNb3VudGFpbnMgPSAoKTogSGV4W10gPT4gUi5yYW5nZSgxLCAxMCkubWFwKHRoaXMuZ2VuZXJhdGVNb3VudGFpbilcblxuICBwdWJsaWMgZ2VuZXJhdGVVbml0cyA9ICgpOiBVbml0W10gPT5cbiAgICBSLmNoYWluKChwbGF5ZXIpID0+IFt0aGlzLmdlbmVyYXRlVW5pdChwbGF5ZXIuaWQpLCB0aGlzLmdlbmVyYXRlVW5pdChwbGF5ZXIuaWQpXSwgdGhpcy53b3JsZFN0YXRlLnBsYXllcnMpXG59XG4iLCJpbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL3dvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFdvcmxkRXZlbnRMaXN0ZW5lciA9IChldmVudDogV29ybGRFdmVudCkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZU93bmVyIHtcbiAgcHVibGljIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWRcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSBsaXN0ZW5lcihldmVudClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBjb25zdCB3b3JsZEFjdGlvbkhhbmRsZXIgPSBuZXcgV29ybGRBY3Rpb25IYW5kbGVyKHRoaXMud29ybGRTdGF0ZSwgcGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZClcbiAgICBjb25zdCBldmVudHMgPSB3b3JsZEFjdGlvbkhhbmRsZXIuY2FsY3VsYXRlV29ybGRFdmVudHMoYWN0aW9uKVxuICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZXZlbnRzKSB7XG4gICAgICB0aGlzLndvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICAgIH1cbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgKz0gZXZlbnRzLmxlbmd0aFxuICAgIHJldHVybiBldmVudHNcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuY29uc3QgcGFkZGluZyA9IDEwXG5jb25zdCBtaW5pbXVtV2lkdGggPSAyMDBcbmNvbnN0IG1pbmltdW1IZWlnaHQgPSA1MFxuXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xuICBwcml2YXRlIGxhYmVsOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpXG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMClcblxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGRcbiAgICAgIC50ZXh0KHggKyBwYWRkaW5nLCB5ICsgcGFkZGluZywgdGV4dClcbiAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJylcblxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsLndpZHRoICsgcGFkZGluZ1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyBwYWRkaW5nXG5cbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSBtaW5pbXVtV2lkdGggPyBsYWJlbFdpZHRoIDogbWluaW11bVdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSBtaW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiBtaW5pbXVtSGVpZ2h0XG5cbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKVxuICAgIH1cblxuICAgIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjMDAwMDAwJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGRkYnKVxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjQkJCQkJCJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDQ0NDQ0NClcbiAgfVxuXG4gIHB1YmxpYyBzZXRZKHZhbHVlPzogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy5sYWJlbC5zZXRZKHZhbHVlKVxuICAgIHJldHVybiBzdXBlci5zZXRZKHZhbHVlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLW1hcCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvaGl0LXBvaW50cydcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpc2VUb0pzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoc2VyaWFsaXNlVG9Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhleCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIZXgnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZE1hcCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdXb3JsZE1hcCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdvcmxkU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRTdGF0ZScgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFVuaXQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnVW5pdCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhpdFBvaW50cykge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIaXRQb2ludHMnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBBY3Rpb25Qb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnQWN0aW9uUG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1BsYXllcicgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0OiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBzZXJpYWxpc2VUb0pzb24odmFsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3RcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpc2VGcm9tSnNvbiA9ICh2YWx1ZTogYW55KTogYW55ID0+IHtcbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChkZXNlcmlhbGlzZUZyb21Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ0hleCcpIHtcbiAgICAgICAgcmV0dXJuIEhleC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdXb3JsZE1hcCcpIHtcbiAgICAgICAgcmV0dXJuIFdvcmxkTWFwLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1dvcmxkU3RhdGUnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZFN0YXRlLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1VuaXQnKSB7XG4gICAgICAgIHJldHVybiBVbml0LmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ0FjdGlvblBvaW50cycpIHtcbiAgICAgICAgcmV0dXJuIEFjdGlvblBvaW50cy5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdIaXRQb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBIaXRQb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnUGxheWVyJykge1xuICAgICAgICByZXR1cm4gUGxheWVyLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0OiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBkZXNlcmlhbGlzZUZyb21Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBUd2VlbiA9IFBoYXNlci5Ud2VlbnMuVHdlZW5cblxuZXhwb3J0IGNvbnN0IHBsYXlUd2VlbiA9ICh0d2VlbjogVHdlZW4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB0d2Vlbi5zZXRDYWxsYmFjaygnb25Db21wbGV0ZScsIHJlc29sdmUsIFtdKS5wbGF5KCkpXG4iLCJleHBvcnQgY29uc3QgcmFuZG9tSW50SW5jbHVzaXZlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PlxuICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluXG5cbmV4cG9ydCBjb25zdCByYW5kb21JbnRFeGNsdXNpdmUgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pblxuXG5leHBvcnQgY29uc3QgcmFuZG9tRWxlbWVudCA9IDxUPihhcnJheTogVFtdKTogVCA9PiBhcnJheVtyYW5kb21JbnRFeGNsdXNpdmUoMCwgYXJyYXkubGVuZ3RoKV1cbiIsImV4cG9ydCB0eXBlIE9wdGlvbjxUPiA9IFQgfCB1bmRlZmluZWRcblxuZXhwb3J0IGludGVyZmFjZSBKdXN0PFQ+IHtcbiAgdHlwZTogJ2p1c3QnXG4gIGl0ZW06IFRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb3RoaW5nIHtcbiAgdHlwZTogJ25vdGhpbmcnXG59XG5cbmV4cG9ydCB0eXBlIE1heWJlPFQ+ID0gSnVzdDxUPiB8IE5vdGhpbmdcblxuZXhwb3J0IGNvbnN0IHRvTWF5YmUgPSA8VD4ob3B0aW9uOiBPcHRpb248VD4pOiBNYXliZTxUPiA9PiAob3B0aW9uID09PSB1bmRlZmluZWQgPyBub3RoaW5nIDoganVzdChvcHRpb24pKVxuXG5leHBvcnQgY29uc3QgdG9PcHRpb24gPSA8VD4obWF5YmU6IE1heWJlPFQ+KTogT3B0aW9uPFQ+ID0+IHtcbiAgc3dpdGNoIChtYXliZS50eXBlKSB7XG4gICAgY2FzZSAnanVzdCc6XG4gICAgICByZXR1cm4gbWF5YmUuaXRlbVxuICAgIGNhc2UgJ25vdGhpbmcnOlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBub3RoaW5nOiBOb3RoaW5nID0geyB0eXBlOiAnbm90aGluZycgfVxuZXhwb3J0IGNvbnN0IGp1c3QgPSA8VD4oaXRlbTogVCk6IEp1c3Q8VD4gPT4gKHtcbiAgdHlwZTogJ2p1c3QnLFxuICBpdGVtLFxufSlcbiIsImV4cG9ydCBjbGFzcyBVbnJlYWNoYWJsZUNhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IG5ldmVyKSB7XG4gICAgc3VwZXIoYFVucmVhY2hhYmxlIGNhc2U6ICR7dmFsdWV9YClcbiAgfVxufVxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25Qb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIHJlZHVjZSA9IChwb2ludHM6IG51bWJlcik6IEFjdGlvblBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEFjdGlvblBvaW50cyA9PlxuICAgIG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgcmVmcmVzaCA9ICgpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IHRoaXMubWF4LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxufVxuIiwiaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIZXgsIEhleFZlY3RvciB9IGZyb20gJy4vaGV4J1xuXG5leHBvcnQgZW51bSBIZXhEaXJlY3Rpb24ge1xuICBFQVNUID0gJ0VBU1QnLFxuICBXRVNUID0gJ1dFU1QnLFxuICBOT1JUSF9FQVNUID0gJ05PUlRIX0VBU1QnLFxuICBTT1VUSF9FQVNUID0gJ1NPVVRIX0VBU1QnLFxuICBOT1JUSF9XRVNUID0gJ05PUlRIX1dFU1QnLFxuICBTT1VUSF9XRVNUID0gJ1NPVVRIX1dFU1QnLFxufVxuXG5leHBvcnQgY29uc3QgSEVYX0RJUkVDVElPTlMgPSBbXG4gIEhleERpcmVjdGlvbi5FQVNULFxuICBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5XRVNULFxuICBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QsXG5dXG5cbmV4cG9ydCBjb25zdCBnZXRVbml0VmVjdG9yID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogSGV4VmVjdG9yID0+IHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIEhleERpcmVjdGlvbi5FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMSwgMClcbiAgICBjYXNlIEhleERpcmVjdGlvbi5XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoLTEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIC0xKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgwLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5TT1VUSF9FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5TT1VUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoLTEsIDEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihkaXJlY3Rpb24pXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBnZXRVbml0VmVjdG9yLCBIZXhEaXJlY3Rpb24gfSBmcm9tICcuL2hleC1kaXJlY3Rpb24nXG5cbmV4cG9ydCBjbGFzcyBIZXgge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgZ2V0IHooKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLXRoaXMueCAtIHRoaXMueVxuICB9XG5cbiAgcHVibGljIHBsdXMgPSAodGhhdDogSGV4KTogSGV4ID0+IG5ldyBIZXgodGhpcy54ICsgdGhhdC54LCB0aGlzLnkgKyB0aGF0LnkpXG5cbiAgcHVibGljIG5laWdoYm91cnMgPSAoKTogSGV4W10gPT4gSGV4Lk5FSUdIQk9VUlMubWFwKHRoaXMucGx1cylcblxuICBwdWJsaWMgaXNBZGphY2VudFRvID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gUi5pbmNsdWRlcyh0aGF0LCB0aGlzLm5laWdoYm91cnMoKSlcblxuICBwdWJsaWMgZGlzdGFuY2VUbyA9ICh0aGF0OiBIZXgpOiBudW1iZXIgPT5cbiAgICAoTWF0aC5hYnModGhpcy54IC0gdGhhdC54KSArIE1hdGguYWJzKHRoaXMueSAtIHRoYXQueSkgKyBNYXRoLmFicyh0aGlzLnogLSB0aGF0LnopKSAvIDJcblxuICBwcml2YXRlIHN0YXRpYyBORUlHSEJPVVJTOiBIZXhbXSA9IFtcbiAgICBuZXcgSGV4KDAsIDEpLFxuICAgIG5ldyBIZXgoMSwgMCksXG4gICAgbmV3IEhleCgxLCAtMSksXG4gICAgbmV3IEhleCgwLCAtMSksXG4gICAgbmV3IEhleCgtMSwgMCksXG4gICAgbmV3IEhleCgtMSwgMSksXG4gIF1cblxuICBwdWJsaWMgZXF1YWxzID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gdGhpcy54ID09PSB0aGF0LnggJiYgdGhpcy55ID09PSB0aGF0LnlcblxuICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IGBIZXgoJHt0aGlzLnh9LCAke3RoaXMueX0pYFxuXG4gIHB1YmxpYyBnbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleCA9PiB0aGlzLnBsdXMoZ2V0VW5pdFZlY3RvcihkaXJlY3Rpb24pKVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBIZXggPT4gbmV3IEhleChqc29uLngsIGpzb24ueSlcbn1cblxuZXhwb3J0IHR5cGUgSGV4VmVjdG9yID0gSGV4XG4iLCJpbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIEhpdFBvaW50cyB7XG4gIHJlYWRvbmx5IGN1cnJlbnQ6IG51bWJlclxuICByZWFkb25seSBtYXg6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgY3VycmVudCwgbWF4IH06IHsgY3VycmVudDogbnVtYmVyOyBtYXg6IG51bWJlciB9KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMubWF4ID0gbWF4XG4gICAgYXNzZXJ0KG1heCA+IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPj0gMClcbiAgICBhc3NlcnQoY3VycmVudCA8PSBtYXgpXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogSGl0UG9pbnRzID0+IHRoaXMuY29weSh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCAtIHBvaW50cyB9KVxuXG4gIHB1YmxpYyBjb3B5ID0gKHsgY3VycmVudCA9IHRoaXMuY3VycmVudCwgbWF4ID0gdGhpcy5tYXggfTogeyBjdXJyZW50PzogbnVtYmVyOyBtYXg/OiBudW1iZXIgfSA9IHt9KTogSGl0UG9pbnRzID0+XG4gICAgbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQsIG1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGl0UG9pbnRzID0+IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi93b3JsZC1tYXAnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcidcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfV09STERfU1RBVEU6IFdvcmxkU3RhdGUgPSBuZXcgV29ybGRTdGF0ZSh7XG4gIHR1cm46IDAsXG4gIG1hcDogbmV3IFdvcmxkTWFwKHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDYgfSksXG4gIHBsYXllcnM6IFtcbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiBIT1NUX1BMQVlFUl9JRCxcbiAgICAgIG5hbWU6ICdQbGF5ZXIgMScsXG4gICAgICBlbmRlZFR1cm46IGZhbHNlLFxuICAgIH0pLFxuICBdLFxuICB1bml0czogW10sXG59KVxuIiwiZXhwb3J0IGNvbnN0IEhPU1RfUExBWUVSX0lEID0gMVxuXG5leHBvcnQgdHlwZSBQbGF5ZXJJZCA9IG51bWJlclxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgcmVhZG9ubHkgaWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICByZWFkb25seSBlbmRlZFR1cm46IGJvb2xlYW5cbiAgcmVhZG9ubHkgZGVmZWF0ZWQ6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgaWQsXG4gICAgbmFtZSxcbiAgICBlbmRlZFR1cm4gPSBmYWxzZSxcbiAgICBkZWZlYXRlZCA9IGZhbHNlLFxuICB9OiB7XG4gICAgaWQ6IFBsYXllcklkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgZW5kZWRUdXJuPzogYm9vbGVhblxuICAgIGRlZmVhdGVkPzogYm9vbGVhblxuICB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuZW5kZWRUdXJuID0gZW5kZWRUdXJuXG4gICAgdGhpcy5kZWZlYXRlZCA9IGRlZmVhdGVkXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgaWQgPSB0aGlzLmlkLFxuICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgZW5kZWRUdXJuID0gdGhpcy5lbmRlZFR1cm4sXG4gICAgZGVmZWF0ZWQgPSB0aGlzLmRlZmVhdGVkLFxuICB9OiB7IGlkPzogUGxheWVySWQ7IG5hbWU/OiBzdHJpbmc7IGVuZGVkVHVybj86IGJvb2xlYW47IGRlZmVhdGVkPzogYm9vbGVhbiB9ID0ge30pOiBQbGF5ZXIgPT5cbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGVuZGVkVHVybixcbiAgICAgIGRlZmVhdGVkLFxuICAgIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgaWQ6IHRoaXMuaWQsIG5hbWU6IHRoaXMubmFtZSwgZW5kZWRUdXJuOiB0aGlzLmVuZGVkVHVybiwgZGVmZWF0ZWQ6IHRoaXMuZGVmZWF0ZWQgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFBsYXllciA9PlxuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICBuYW1lOiBqc29uLm5hbWUsXG4gICAgICBlbmRlZFR1cm46IGpzb24uZW5kZWRUdXJuLFxuICAgICAgZGVmZWF0ZWQ6IGpzb24uZGVmZWF0ZWQsXG4gICAgfSlcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi9oaXQtcG9pbnRzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcblxuZXhwb3J0IHR5cGUgVW5pdElkID0gbnVtYmVyXG5cbmV4cG9ydCBjbGFzcyBVbml0IHtcbiAgcmVhZG9ubHkgaWQ6IFVuaXRJZFxuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGxvY2F0aW9uOiBIZXhcbiAgcmVhZG9ubHkgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgcmVhZG9ubHkgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgaWQsXG4gICAgcGxheWVySWQsXG4gICAgbmFtZSxcbiAgICBsb2NhdGlvbixcbiAgICBoaXRQb2ludHMsXG4gICAgYWN0aW9uUG9pbnRzLFxuICB9OiB7XG4gICAgaWQ6IFVuaXRJZFxuICAgIHBsYXllcklkOiBQbGF5ZXJJZFxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBoaXRQb2ludHM6IEhpdFBvaW50c1xuICAgIGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzXG4gIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uXG4gICAgdGhpcy5oaXRQb2ludHMgPSBoaXRQb2ludHNcbiAgICB0aGlzLmFjdGlvblBvaW50cyA9IGFjdGlvblBvaW50c1xuICB9XG5cbiAgcHVibGljIGRhbWFnZSA9IChwb2ludHM6IG51bWJlcik6IFVuaXQgPT4gdGhpcy5jb3B5KHsgaGl0UG9pbnRzOiB0aGlzLmhpdFBvaW50cy5kYW1hZ2UocG9pbnRzKSB9KVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBpZCA9IHRoaXMuaWQsXG4gICAgcGxheWVySWQgPSB0aGlzLnBsYXllcklkLFxuICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uLFxuICAgIGhpdFBvaW50cyA9IHRoaXMuaGl0UG9pbnRzLFxuICAgIGFjdGlvblBvaW50cyA9IHRoaXMuYWN0aW9uUG9pbnRzLFxuICB9OiB7XG4gICAgaWQ/OiBVbml0SWRcbiAgICBwbGF5ZXJJZD86IFBsYXllcklkXG4gICAgbmFtZT86IHN0cmluZ1xuICAgIGxvY2F0aW9uPzogSGV4XG4gICAgaGl0UG9pbnRzPzogSGl0UG9pbnRzXG4gICAgYWN0aW9uUG9pbnRzPzogQWN0aW9uUG9pbnRzXG4gIH0gPSB7fSk6IFVuaXQgPT4gbmV3IFVuaXQoeyBpZCwgcGxheWVySWQsIG5hbWUsIGxvY2F0aW9uLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9KVxuXG4gIHB1YmxpYyBtb3ZlID0gKGxvY2F0aW9uOiBIZXgsIGFjdGlvblBvaW50c0NvbnN1bWVkOiBudW1iZXIpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgbG9jYXRpb24sIGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWR1Y2VBY3Rpb25Qb2ludHMgPSAoYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZHVjZShhY3Rpb25Qb2ludHNDb25zdW1lZCkgfSlcblxuICBwdWJsaWMgcmVmcmVzaEFjdGlvblBvaW50cyA9ICgpOiBVbml0ID0+IHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVmcmVzaCgpIH0pXG5cbiAgcHVibGljIGdldCBoYXNVbnNwZW50QWN0aW9uUG9pbnRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFjdGlvblBvaW50cy5jdXJyZW50ID4gMFxuICB9XG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHtcbiAgICBpZDogdGhpcy5pZCxcbiAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgbG9jYXRpb246IHRoaXMubG9jYXRpb24udG9Kc29uKCksXG4gICAgaGl0UG9pbnRzOiB0aGlzLmhpdFBvaW50cy50b0pzb24oKSxcbiAgICBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnRvSnNvbigpLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogVW5pdCA9PlxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiBqc29uLmlkLFxuICAgICAgcGxheWVySWQ6IGpzb24ucGxheWVySWQsXG4gICAgICBuYW1lOiBqc29uLm5hbWUsXG4gICAgICBsb2NhdGlvbjogSGV4LmZyb21Kc29uKGpzb24ubG9jYXRpb24pLFxuICAgICAgaGl0UG9pbnRzOiBIaXRQb2ludHMuZnJvbUpzb24oanNvbi5oaXRQb2ludHMpLFxuICAgICAgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHMuZnJvbUpzb24oanNvbi5hY3Rpb25Qb2ludHMpLFxuICAgIH0pXG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBDb21iYXRXb3JsZEV2ZW50LFxuICBHYW1lT3ZlcldvcmxkRXZlbnQsXG4gIEdhbWVTdGFydGVkV29ybGRFdmVudCxcbiAgSW5pdGlhbGlzZVdvcmxkRXZlbnQsXG4gIFBsYXllckFkZGVkV29ybGRFdmVudCxcbiAgUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50LFxuICBQbGF5ZXJEZWZlYXRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4vd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbmV4cG9ydCBjb25zdCBhcHBseUV2ZW50ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICBjYXNlICdpbml0aWFsaXNlJzpcbiAgICAgIHJldHVybiBoYW5kbGVJbml0aWFsaXNlKGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJBZGRlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAncGxheWVyQ2hhbmdlZE5hbWUnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckNoYW5nZWROYW1lKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdnYW1lU3RhcnRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlR2FtZVN0YXJ0ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3VuaXRNb3ZlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlVW5pdE1vdmVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdjb21iYXQnOlxuICAgICAgcmV0dXJuIGhhbmRsZUNvbWJhdChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAncGxheWVyRW5kZWRUdXJuJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4oc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckRlZmVhdGVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJEZWZlYXRlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnbmV3VHVybic6XG4gICAgICByZXR1cm4gaGFuZGxlTmV3VHVybihzdGF0ZSlcbiAgICBjYXNlICdnYW1lT3Zlcic6XG4gICAgICByZXR1cm4gaGFuZGxlR2FtZU92ZXIoc3RhdGUsIGV2ZW50KVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlSW5pdGlhbGlzZSA9IChldmVudDogSW5pdGlhbGlzZVdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKGV2ZW50LmlkID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW5pdGlhbGlzZSBtdXN0IGJlIHRoZSBmaXJzdCBldmVudGApXG4gIH1cbiAgcmV0dXJuIGV2ZW50LnN0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckFkZGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyQWRkZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IGV2ZW50LnBsYXllcklkLCBzdGF0ZS5wbGF5ZXJzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgUGxheWVyIElEIGFscmVhZHkgaW4gdXNlYClcbiAgfVxuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHsgaWQ6IHBsYXllcklkLCBuYW1lOiBgUGxheWVyICR7cGxheWVySWR9YCB9KVxuICByZXR1cm4gc3RhdGUuYWRkUGxheWVyKHBsYXllcilcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyQ2hhbmdlZE5hbWUgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCwgbmFtZSB9ID0gZXZlbnRcbiAgZ2V0UGxheWVyKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBuYW1lIH0pKVxufVxuXG5jb25zdCBnZXRQbGF5ZXIgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllciA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHN0YXRlLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gIGlmICghcGxheWVyKSB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YClcbiAgcmV0dXJuIHBsYXllclxufVxuXG5jb25zdCBoYW5kbGVHYW1lU3RhcnRlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IEdhbWVTdGFydGVkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBpZiAoc3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEdhbWUgYWxyZWFkeSBzdGFydGVkYClcbiAgfVxuICByZXR1cm4gc3RhdGVcbiAgICAuY29weSh7IHR1cm46IDEsIHVuaXRzOiBldmVudC51bml0cyB9KVxuICAgIC51cGRhdGVXb3JsZE1hcCgobWFwKSA9PiBtYXAuY29weSh7IG1vdW50YWluczogZXZlbnQubW91bnRhaW5zIH0pKVxuICAgIC5hZGRXb3JsZExvZygnTGV0IGJhdHRsZSBjb21tZW5jZSEnKVxufVxuXG5jb25zdCBoYW5kbGVVbml0TW92ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgdW5pdElkLCBwbGF5ZXJJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHtmcm9tfSB0byAke3RvfWApXG4gIH1cbiAgaWYgKCFzdGF0ZS5tYXAuaXNJbkJvdW5kcyh0bykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBvdXQtb2YtYm91bmRzIGhleCAke3RvfWApXG4gIH1cbiAgY29uc3QgdW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gIGlmICghdW5pdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWApXG4gIH1cbiAgaWYgKCF1bml0LmxvY2F0aW9uLmVxdWFscyhmcm9tKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBVbml0IGlzIG5vdCBpbiB0aGUgZXhwZWN0ZWQgbG9jYXRpb24gZm9yIG1vdmVtZW50LiBVbml0IGlzIGF0ICR7dW5pdC5sb2NhdGlvbn0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgYXQgJHtmcm9tfWAsXG4gICAgKVxuICB9XG4gIGNvbnN0IHRvVW5pdCA9IHN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bylcbiAgaWYgKHRvVW5pdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YClcbiAgfVxuICBpZiAodW5pdC5wbGF5ZXJJZCAhPT0gcGxheWVySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYXR0ZW1wdCB0byBtb3ZlIHVuaXQgb2YgYW5vdGhlciBwbGF5ZXJgKVxuICB9XG4gIGlmICh1bml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYClcbiAgfVxuICByZXR1cm4gc3RhdGUucmVwbGFjZVVuaXQodW5pdC5pZCwgdW5pdC5tb3ZlKHRvLCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG59XG5cbmNvbnN0IGhhbmRsZUNvbWJhdCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG5cbiAgY29uc3QgYXR0YWNrZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VyLnVuaXRJZClcbiAgaWYgKCFhdHRhY2tlclVuaXQpIHRocm93IG5ldyBFcnJvcihgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7YXR0YWNrZXIudW5pdElkfWApXG4gIGlmICghYXR0YWNrZXJVbml0LmxvY2F0aW9uLmVxdWFscyhhdHRhY2tlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgbG9jYXRpb24gZm9yIGF0dGFja2VyLiBBdHRhY2tpbmcgdW5pdCAke2F0dGFja2VyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHthdHRhY2tlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7YXR0YWNrZXIubG9jYXRpb259YCxcbiAgICApXG5cbiAgY29uc3QgZGVmZW5kZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVyLnVuaXRJZClcbiAgaWYgKCFkZWZlbmRlclVuaXQpIHRocm93IG5ldyBFcnJvcihgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXIudW5pdElkfWApXG4gIGlmICghZGVmZW5kZXJVbml0LmxvY2F0aW9uLmVxdWFscyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgbG9jYXRpb24gZm9yIGRlZmVuZGVyLiBEZWZlbmRpbmcgdW5pdCAke2RlZmVuZGVyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHtkZWZlbmRlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7ZGVmZW5kZXIubG9jYXRpb259YCxcbiAgICApXG5cbiAgaWYgKGF0dGFja2VyVW5pdC5wbGF5ZXJJZCA9PT0gZGVmZW5kZXJVbml0LnBsYXllcklkKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgY29tYmF0IHdpdGggc2VsZmApXG4gIGlmICghY2FuQXR0YWNrT2NjdXIoZXZlbnQuYXR0YWNrVHlwZSwgYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgSW52YWxpZCBjb21iYXQgb2YgdHlwZSAke2V2ZW50LmF0dGFja1R5cGV9IGJldHdlZW4gaGV4ZXMgJHthdHRhY2tlci5sb2NhdGlvbn0gdG8gJHtkZWZlbmRlci5sb2NhdGlvbn1gLFxuICAgIClcbiAgaWYgKGF0dGFja2VyVW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYClcblxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZVxuXG4gIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoYXR0YWNrZXJVbml0LmlkKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHVwZGF0ZWRBdHRhY2tlciA9IGF0dGFja2VyVW5pdC5kYW1hZ2UoYXR0YWNrZXIuZGFtYWdlKS5yZWR1Y2VBY3Rpb25Qb2ludHMoZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChhdHRhY2tlclVuaXQuaWQsIHVwZGF0ZWRBdHRhY2tlcilcbiAgfVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoZGVmZW5kZXJVbml0LmlkKVxuICB9IGVsc2Uge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoZGVmZW5kZXJVbml0LmlkLCBkZWZlbmRlclVuaXQuZGFtYWdlKGRlZmVuZGVyLmRhbWFnZSkpXG4gIH1cblxuICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgJHtkZWZlbmRlclVuaXQubmFtZX0gd2FzIHRha2VuIG91dCBpbiBhIHN1aWNpZGUgYXR0YWNrIGJ5ICR7YXR0YWNrZXJVbml0Lm5hbWV9LmApXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYCR7ZGVmZW5kZXJVbml0Lm5hbWV9IHdhcyBicnV0YWxseSBtdXJkZXJlZCBieSAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICAgIH1cbiAgfSBlbHNlIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGAke2F0dGFja2VyVW5pdC5uYW1lfSBkaWVkIGluIGEgZnV0aWxlIGF0dGVtcHQgdG8gdGFrZSBvbiAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHZlcmIgPSBldmVudC5hdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFja2VkJyA6ICdzcGF0IGF0J1xuICAgIGNvbnN0IHRha2luZ0RhbWFnZUNsYXVzZSA9IGF0dGFja2VyLmRhbWFnZSA9PT0gMCA/ICcnIDogYCBhbmQgdGFraW5nICR7YXR0YWNrZXIuZGFtYWdlfSBkYW1hZ2VgXG4gICAgY29uc3QgbWVzc2FnZSA9IGAke2F0dGFja2VyVW5pdC5uYW1lfSAke3ZlcmJ9ICR7ZGVmZW5kZXJVbml0Lm5hbWV9LCBjYXVzaW5nICR7ZGVmZW5kZXIuZGFtYWdlfSBkYW1hZ2Uke3Rha2luZ0RhbWFnZUNsYXVzZX0uYFxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2cobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gbmV3U3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBnZXRQbGF5ZXIoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGUudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogdHJ1ZSB9KSlcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRGVmZWF0ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJEZWZlYXRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gZ2V0UGxheWVyKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlXG4gICAgLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBkZWZlYXRlZDogdHJ1ZSB9KSlcbiAgICAuYWRkV29ybGRMb2coYCR7cGxheWVyLm5hbWV9IGhhcyBiZWVuIHZhbnF1aXNoZWQuYClcbn1cblxuY29uc3QgaGFuZGxlTmV3VHVybiA9IChzdGF0ZTogV29ybGRTdGF0ZSk6IFdvcmxkU3RhdGUgPT5cbiAgc3RhdGUubmV3VHVybigpLmFkZFdvcmxkTG9nKGBUdXJuICR7c3RhdGUudHVybiArIDF9IGhhcyBiZWd1bi5gKVxuXG5jb25zdCBoYW5kbGVHYW1lT3ZlciA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IEdhbWVPdmVyV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHZpY3RvciB9ID0gZXZlbnRcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGUuZ2FtZU92ZXIodmljdG9yKVxuICBpZiAodmljdG9yKSB7XG4gICAgY29uc3QgdmljdG9yUGxheWVyID0gZ2V0UGxheWVyKHN0YXRlLCB2aWN0b3IpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhg8J+PhiAke3ZpY3RvclBsYXllci5uYW1lfSBpcyB2aWN0b3Jpb3VzIWApXG4gIH0gZWxzZSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgVGhlcmUgYXJlIG5vIHdpbm5lcnMgaW4gd2FyLmApXG4gIH1cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuXG5leHBvcnQgY2xhc3MgV29ybGRNYXAge1xuICByZWFkb25seSB3aWR0aDogbnVtYmVyXG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyXG4gIHJlYWRvbmx5IG1vdW50YWluczogSGV4W11cblxuICBjb25zdHJ1Y3Rvcih7IHdpZHRoLCBoZWlnaHQsIG1vdW50YWlucyA9IFtdIH06IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IG1vdW50YWlucz86IEhleFtdIH0pIHtcbiAgICBhc3NlcnQod2lkdGggPiAwKVxuICAgIGFzc2VydChoZWlnaHQgPiAwKVxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gICAgdGhpcy5tb3VudGFpbnMgPSBtb3VudGFpbnNcbiAgfVxuXG4gIHB1YmxpYyBpc0luQm91bmRzID0gKGhleDogSGV4KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgcSA9IGhleC54ICsgTWF0aC5mbG9vcihoZXgueSAvIDIpXG4gICAgcmV0dXJuIDAgPD0gcSAmJiBxIDwgdGhpcy53aWR0aCAmJiAwIDw9IGhleC55ICYmIGhleC55IDwgdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyAqZ2V0TWFwSGV4ZXMoKTogSXRlcmFibGVJdGVyYXRvcjxIZXg+IHtcbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmhlaWdodDsgcm93KyspXG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLndpZHRoOyBjb2x1bW4rKykge1xuICAgICAgICBjb25zdCB4ID0gLU1hdGguZmxvb3Iocm93IC8gMikgKyBjb2x1bW5cbiAgICAgICAgeWllbGQgbmV3IEhleCh4LCByb3cpXG4gICAgICB9XG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgd2lkdGggPSB0aGlzLndpZHRoLFxuICAgIGhlaWdodCA9IHRoaXMuaGVpZ2h0LFxuICAgIG1vdW50YWlucyA9IHRoaXMubW91bnRhaW5zLFxuICB9OiB7IHdpZHRoPzogbnVtYmVyOyBoZWlnaHQ/OiBudW1iZXI7IG1vdW50YWlucz86IEhleFtdIH0gPSB7fSk6IFdvcmxkTWFwID0+XG4gICAgbmV3IFdvcmxkTWFwKHsgd2lkdGgsIGhlaWdodCwgbW91bnRhaW5zIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHtcbiAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgIG1vdW50YWluczogdGhpcy5tb3VudGFpbnMubWFwKChtb3VudGFpbikgPT4gbW91bnRhaW4udG9Kc29uKCkpLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRNYXAgPT5cbiAgICBuZXcgV29ybGRNYXAoeyB3aWR0aDoganNvbi53aWR0aCwgaGVpZ2h0OiBqc29uLmhlaWdodCwgbW91bnRhaW5zOiBqc29uLm1vdW50YWlucy5tYXAoSGV4LmZyb21Kc29uKSB9KVxuXG4gIHB1YmxpYyBpc01vdW50YWluID0gKGhleDogSGV4KTogYm9vbGVhbiA9PiBSLmNvbnRhaW5zKGhleCwgdGhpcy5tb3VudGFpbnMpXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi91bml0J1xuaW1wb3J0IHsganVzdCwgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi93b3JsZC1ldmVudHMnXG5cbmludGVyZmFjZSBHYW1lT3ZlckluZm8ge1xuICB2aWN0b3I6IE9wdGlvbjxQbGF5ZXJJZD5cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkU3RhdGUge1xuICByZWFkb25seSB0dXJuOiBudW1iZXIgLyogdHVybiA9IDAgYmVmb3JlIHRoZSBnYW1lIGhhcyBzdGFydGVkICovXG4gIHJlYWRvbmx5IG1hcDogV29ybGRNYXBcbiAgcmVhZG9ubHkgdW5pdHM6IFVuaXRbXVxuICByZWFkb25seSBwbGF5ZXJzOiBQbGF5ZXJbXVxuICByZWFkb25seSBnYW1lT3ZlckluZm8/OiBHYW1lT3ZlckluZm9cbiAgcmVhZG9ubHkgd29ybGRMb2c6IHN0cmluZ1tdXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHR1cm4sXG4gICAgbWFwLFxuICAgIHVuaXRzLFxuICAgIHBsYXllcnMsXG4gICAgZ2FtZU92ZXJJbmZvLFxuICAgIHdvcmxkTG9nID0gW10sXG4gIH06IHtcbiAgICB0dXJuOiBudW1iZXJcbiAgICBtYXA6IFdvcmxkTWFwXG4gICAgdW5pdHM6IFVuaXRbXVxuICAgIHBsYXllcnM6IFBsYXllcltdXG4gICAgZ2FtZU92ZXJJbmZvPzogT3B0aW9uPEdhbWVPdmVySW5mbz5cbiAgICB3b3JsZExvZz86IHN0cmluZ1tdXG4gIH0pIHtcbiAgICB0aGlzLnR1cm4gPSB0dXJuXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLnVuaXRzID0gdW5pdHNcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzXG4gICAgdGhpcy5nYW1lT3ZlckluZm8gPSBnYW1lT3ZlckluZm9cbiAgICB0aGlzLndvcmxkTG9nID0gd29ybGRMb2dcbiAgICBhc3NlcnQodHVybiA+PSAwKVxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHR1cm4gPSB0aGlzLnR1cm4sXG4gICAgbWFwID0gdGhpcy5tYXAsXG4gICAgdW5pdHMgPSB0aGlzLnVuaXRzLFxuICAgIHBsYXllcnMgPSB0aGlzLnBsYXllcnMsXG4gICAgZ2FtZU92ZXJJbmZvID0gdG9NYXliZSh0aGlzLmdhbWVPdmVySW5mbyksXG4gICAgd29ybGRMb2cgPSB0aGlzLndvcmxkTG9nLFxuICB9OiB7XG4gICAgdHVybj86IG51bWJlclxuICAgIG1hcD86IFdvcmxkTWFwXG4gICAgdW5pdHM/OiBVbml0W11cbiAgICBwbGF5ZXJzPzogUGxheWVyW11cbiAgICBnYW1lT3ZlckluZm8/OiBNYXliZTxHYW1lT3ZlckluZm8+XG4gICAgd29ybGRMb2c/OiBzdHJpbmdbXVxuICB9ID0ge30pOiBXb3JsZFN0YXRlID0+IG5ldyBXb3JsZFN0YXRlKHsgdHVybiwgbWFwLCB1bml0cywgcGxheWVycywgZ2FtZU92ZXJJbmZvOiB0b09wdGlvbihnYW1lT3ZlckluZm8pLCB3b3JsZExvZyB9KVxuXG4gIHB1YmxpYyBnZXQgaXNHYW1lT3ZlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lT3ZlckluZm8gIT09IHVuZGVmaW5lZFxuICB9XG5cbiAgcHVibGljIGdldCBnYW1lSGFzU3RhcnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50dXJuID4gMFxuICB9XG5cbiAgcHVibGljIGdldFBsYXllcklkcyA9ICgpOiBQbGF5ZXJJZFtdID0+IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmlkKVxuXG4gIHB1YmxpYyBpc1BsYXllckRlZmVhdGVkID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IGJvb2xlYW4gPT4gdGhpcy5nZXRVbml0c0ZvclBsYXllcihwbGF5ZXJJZCkubGVuZ3RoID09PSAwXG5cbiAgcHVibGljIGNhblBsYXllckFjdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBlbmRlZFR1cm4gPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpPy5lbmRlZFR1cm5cbiAgICByZXR1cm4gIWVuZGVkVHVybiAmJiBSLmFueSgodW5pdCkgPT4gdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzLCB0aGlzLmdldFVuaXRzRm9yUGxheWVyKHBsYXllcklkKSlcbiAgfVxuXG4gIHB1YmxpYyBjYW5BbnlQbGF5ZXJBY3QgPSAoKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiB0aGlzLmNhblBsYXllckFjdChwbGF5ZXIuaWQpLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdldFVuaXRzRm9yUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFVuaXRbXSA9PiB0aGlzLnVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5wbGF5ZXJJZCA9PT0gcGxheWVySWQpXG5cbiAgcHVibGljIGZpbmRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogT3B0aW9uPFBsYXllcj4gPT4gUi5maW5kKChwbGF5ZXIpID0+IHBsYXllci5pZCA9PT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2V0UGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB7XG4gICAgICB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEJ5SWQgPSAodW5pdElkOiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT4gUi5maW5kKCh1bml0KSA9PiB1bml0LmlkID09PSB1bml0SWQsIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIGdldFVuaXRCeUlkID0gKHVuaXRJZDogbnVtYmVyKTogVW5pdCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIH1cbiAgICByZXR1cm4gdW5pdFxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQubG9jYXRpb24uZXF1YWxzKGhleCksIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIHJlcGxhY2VVbml0ID0gKHVuaXRJZDogVW5pdElkLCB1bml0OiBVbml0KTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICB1bml0czogUi5hcHBlbmQoXG4gICAgICAgIHVuaXQsXG4gICAgICAgIFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9PSB1bml0SWQsIHRoaXMudW5pdHMpLFxuICAgICAgKSxcbiAgICB9KVxuXG4gIHB1YmxpYyByZW1vdmVVbml0ID0gKHVuaXRJZDogVW5pdElkKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHVuaXRzOiBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPT0gdW5pdElkLCB0aGlzLnVuaXRzKSB9KVxuXG4gIHB1YmxpYyB1cGRhdGVQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkLCBtb2RpZnk6IChwbGF5ZXI6IFBsYXllcikgPT4gUGxheWVyKTogV29ybGRTdGF0ZSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZVBsYXllcihwbGF5ZXJJZCwgbW9kaWZ5KHBsYXllcikpXG4gIH1cblxuICBwdWJsaWMgcmVwbGFjZVBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQsIHBsYXllcjogUGxheWVyKTogV29ybGRTdGF0ZSA9PiB7XG4gICAgYXNzZXJ0KHBsYXllcklkID09PSBwbGF5ZXIuaWQpXG4gICAgcmV0dXJuIHRoaXMuY29weSh7XG4gICAgICBwbGF5ZXJzOiBSLmFwcGVuZChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICBSLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuaWQgIT09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpLFxuICAgICAgKSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGFkZFBsYXllciA9IChwbGF5ZXI6IFBsYXllcik6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgcGxheWVyczogUi5hcHBlbmQocGxheWVyLCB0aGlzLnBsYXllcnMpIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHtcbiAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgbWFwOiB0aGlzLm1hcC50b0pzb24oKSxcbiAgICB1bml0czogdGhpcy51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQudG9Kc29uKCkpLFxuICAgIHBsYXllcnM6IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLnRvSnNvbigpKSxcbiAgICBnYW1lT3ZlckluZm86IHRoaXMuZ2FtZU92ZXJJbmZvLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRTdGF0ZSA9PlxuICAgIG5ldyBXb3JsZFN0YXRlKHtcbiAgICAgIHR1cm46IGpzb24udHVybixcbiAgICAgIG1hcDogV29ybGRNYXAuZnJvbUpzb24oanNvbi5tYXApLFxuICAgICAgdW5pdHM6IGpzb24udW5pdHMubWFwKCh1bml0OiBhbnkpID0+IFVuaXQuZnJvbUpzb24odW5pdCkpLFxuICAgICAgcGxheWVyczoganNvbi5wbGF5ZXJzLm1hcCgodW5pdDogYW55KSA9PiBQbGF5ZXIuZnJvbUpzb24odW5pdCkpLFxuICAgICAgZ2FtZU92ZXJJbmZvOiBqc29uLmdhbWVPdmVySW5mbyxcbiAgICB9KVxuXG4gIHB1YmxpYyBpc1ZhbGlkUGxheWVySWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdhbWVPdmVyID0gKHZpY3RvcjogT3B0aW9uPG51bWJlcj4pOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IGdhbWVPdmVySW5mbzoganVzdCh7IHZpY3RvciB9KSB9KVxuXG4gIHB1YmxpYyBhcHBseUV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiBhcHBseUV2ZW50KHRoaXMsIGV2ZW50KVxuXG4gIHB1YmxpYyBhcHBseUV2ZW50cyA9IChldmVudHM6IFdvcmxkRXZlbnRbXSk6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGxldCBzdGF0ZTogV29ybGRTdGF0ZSA9IHRoaXNcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBhZGRXb3JsZExvZyA9IChtZXNzYWdlOiBzdHJpbmcpOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IHdvcmxkTG9nOiBSLmFwcGVuZChtZXNzYWdlLCB0aGlzLndvcmxkTG9nKSB9KVxuXG4gIHB1YmxpYyB1cGRhdGVXb3JsZE1hcCA9IChtb2RpZnk6IChtYXA6IFdvcmxkTWFwKSA9PiBXb3JsZE1hcCk6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgbWFwOiBtb2RpZnkodGhpcy5tYXApIH0pXG5cbiAgcHVibGljIG5ld1R1cm4gPSAoKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICB0dXJuOiB0aGlzLnR1cm4gKyAxLFxuICAgICAgdW5pdHM6IHRoaXMudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LnJlZnJlc2hBY3Rpb25Qb2ludHMoKSksXG4gICAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiBmYWxzZSB9KSksXG4gICAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=