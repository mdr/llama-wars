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
                        return [2 /*return*/, record != undefined];
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
    ATTACK: 'attack',
    DEATH: 'death',
    WALK: 'walk',
    NEW_TURN: 'new-turn',
};
exports.ALL_AUDIO_KEYS = [exports.AudioKeys.ATTACK, exports.AudioKeys.DEATH, exports.AudioKeys.WALK, exports.AudioKeys.NEW_TURN];


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
var world_state_1 = __webpack_require__(/*! ../../world/world-state */ "./src/world/world-state.ts");
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
        _this.joinAsClient = function (client, gameId) {
            _this.rejoinedListener = function (message) {
                if (message.type == 'joined') {
                    if (_this.rejoinedListener) {
                        client.removeListener(_this.rejoinedListener);
                        _this.rejoinedListener = undefined;
                    }
                    var playerId = message.playerId;
                    exports.setUrlInfo({ gameId: gameId, playerId: playerId });
                    var worldState = world_state_1.WorldState.fromJson(message.worldState);
                    if (worldState.gameHasStarted) {
                        var sceneData = { serverOrClient: client, worldState: worldState, playerId: playerId };
                        _this.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
                    }
                    else {
                        var sceneData = { serverOrClient: client, worldState: worldState, playerId: playerId };
                        _this.scene.start(lobby_scene_1.LOBBY_SCENE_KEY, sceneData);
                    }
                }
            };
            client.addListener(_this.rejoinedListener);
            client.send({ type: 'join' });
        };
        _this.rejoinAsClient = function (client, gameId, playerId) {
            _this.rejoinedListener = function (message) {
                if (message.type == 'rejoined') {
                    if (_this.rejoinedListener) {
                        client.removeListener(_this.rejoinedListener);
                        _this.rejoinedListener = undefined;
                    }
                    var worldState = world_state_1.WorldState.fromJson(message.worldState);
                    if (worldState.gameHasStarted) {
                        var sceneData = { serverOrClient: client, worldState: worldState, playerId: playerId };
                        _this.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
                    }
                    else {
                        var sceneData = { serverOrClient: client, worldState: worldState, playerId: playerId };
                        _this.scene.start(lobby_scene_1.LOBBY_SCENE_KEY, sceneData);
                    }
                }
            };
            client.addListener(_this.rejoinedListener);
            client.send({ type: 'rejoin', playerId: playerId });
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
        // https://opengameart.org/content/37-hitspunches
        this.load.audio(asset_keys_1.AudioKeys.ATTACK, 'assets/audio/hit18.mp3.mp3');
        // https://opengameart.org/content/male-gruntyelling-sounds
        this.load.audio(asset_keys_1.AudioKeys.DEATH, 'assets/audio/1yell4.wav');
        // https://opengameart.org/content/grass-foot-step-sounds-yo-frankie
        this.load.audio(asset_keys_1.AudioKeys.WALK, 'assets/audio/sfx_step_grass_l.mp3');
        // https://opengameart.org/content/ui-sound-effects-pack
        this.load.audio(asset_keys_1.AudioKeys.NEW_TURN, 'assets/audio/MENU A_Select.wav');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;
exports.getUrlInfo = function () {
    var hash = window.location.hash;
    if (hash == '') {
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
    if (urlInfo.playerId != undefined) {
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
exports.PLAYER_TINTS = ['#ffbbbb', '#bbbbff', '#bbffbb', '#bbffff', '#ffffbb', '#ffbbff'].map(exports.colourNumber);


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
var CombinedState = /** @class */ (function () {
    function CombinedState(worldState, localGameState) {
        var _this = this;
        this.findSelectedUnit = function () {
            return _this.selectedHex ? _this.findUnitInLocation(_this.selectedHex) : undefined;
        };
        this.findUnitInLocation = function (hex) { return _this.worldState.findUnitInLocation(hex); };
        this.unitCouldPotentiallyMove = function (unit) {
            return unit.playerId == _this.playerId && unit.actionPoints.current > 0 && !_this.getCurrentPlayer().endedTurn;
        };
        this.unitCouldPotentiallyAttack = function (unit) {
            return unit.playerId == _this.playerId && unit.actionPoints.current > 0 && !_this.getCurrentPlayer().endedTurn;
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
        this.unitCanAttackHex = function (unit, location) {
            var targetUnit = _this.findUnitInLocation(location);
            if (_this.unitCouldPotentiallyAttack(unit) &&
                targetUnit != undefined &&
                targetUnit.playerId != _this.localGameState.playerId &&
                unit.location.isAdjacentTo(location))
                return targetUnit;
        };
        this.findNextUnitWithActionPoints = function (unitId) {
            var _a;
            var candidateUnits = R.sortBy(function (unit) { return unit.id; }, _this.worldState.units.filter(function (unit) { return unit.playerId == _this.playerId && unit.actionPoints.current > 0; }));
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
exports.LobbyScene = exports.LOBBY_SCENE_KEY = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var initial_world_state_1 = __webpack_require__(/*! ../../world/initial-world-state */ "./src/world/initial-world-state.ts");
var client_1 = __webpack_require__(/*! ../../server/client */ "./src/server/client.ts");
var server_1 = __webpack_require__(/*! ../../server/server */ "./src/server/server.ts");
var menu_button_1 = __webpack_require__(/*! ../../ui/menu-button */ "./src/ui/menu-button.ts");
var game_scene_1 = __webpack_require__(/*! ../main-game/game-scene */ "./src/scenes/main-game/game-scene.ts");
var world_event_evaluator_1 = __webpack_require__(/*! ../../world/world-event-evaluator */ "./src/world/world-event-evaluator.ts");
var json_serialisation_1 = __webpack_require__(/*! ../../util/json-serialisation */ "./src/util/json-serialisation.ts");
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
        _this.worldState = initial_world_state_1.INITIAL_WORLD_STATE;
        _this.playerNameTexts = new Map();
        _this.create = function (sceneData) {
            var serverOrClient = sceneData.serverOrClient, playerId = sceneData.playerId, worldState = sceneData.worldState;
            _this.serverOrClient = serverOrClient;
            _this.playerId = playerId;
            _this.worldState = worldState;
            if (serverOrClient instanceof client_1.Client) {
                _this.actAsClient(serverOrClient, playerId);
            }
            else {
                _this.actAServer(serverOrClient);
            }
            _this.createConstantGameObjects();
            _this.sync();
        };
        _this.actAServer = function (server) {
            server.addListener(function () {
                _this.worldState = server.worldState;
                _this.sync();
            });
        };
        _this.createConstantGameObjects = function () {
            _this.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24);
            if (_this.playerId == 1) {
                _this.startGameButton = new menu_button_1.MenuButton(_this, 100, 0, 'Start Game', function () { return _this.handleStartGame(); });
            }
            else {
                _this.waitingForHostText = _this.add.text(100, 0, 'Waiting for host to start the game...');
            }
        };
        _this.actAsClient = function (client, playerId) {
            _this.listener = function (message) {
                _this.handleServerToClientMessage(message, client, playerId);
            };
            client.addListener(_this.listener);
        };
        _this.handleServerToClientMessage = function (message, client, playerId) {
            if (message.type == 'worldEvent') {
                var event_1 = json_serialisation_1.deserialiseFromJson(message.event);
                var oldWorldState = _this.worldState;
                _this.worldState = world_event_evaluator_1.applyEvent(oldWorldState, event_1);
                if (event_1.type == 'gameStarted') {
                    if (_this.listener) {
                        client.removeListener(_this.listener);
                        _this.listener = undefined;
                    }
                    var sceneData = {
                        serverOrClient: client,
                        worldState: _this.worldState,
                        playerId: playerId,
                    };
                    _this.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
                }
            }
            _this.sync();
        };
        _this.handleStartGame = function () {
            if (!_this.serverOrClient) {
                throw "Unexpected absence of serverOrClient";
            }
            if (!_this.playerId) {
                throw "Unexpected absence of playerId";
            }
            if (_this.serverOrClient instanceof server_1.Server) {
                _this.serverOrClient.handleAction(_this.playerId, { type: 'startGame' });
            }
            var sceneData = {
                serverOrClient: _this.serverOrClient,
                worldState: _this.worldState,
                playerId: _this.playerId,
            };
            _this.scene.start(game_scene_1.GAME_SCENE_KEY, sceneData);
        };
        return _this;
    }
    LobbyScene.prototype.sync = function () {
        var e_1, _a, e_2, _b, e_3, _c;
        var _this = this;
        var _d;
        var requiredPlayerIds = this.worldState.players.map(function (player) { return player.id; });
        var currentPlayerIds = Array.from(this.playerNameTexts.keys());
        var surplusPlayerIds = R.difference(currentPlayerIds, requiredPlayerIds);
        try {
            for (var surplusPlayerIds_1 = __values(surplusPlayerIds), surplusPlayerIds_1_1 = surplusPlayerIds_1.next(); !surplusPlayerIds_1_1.done; surplusPlayerIds_1_1 = surplusPlayerIds_1.next()) {
                var playerId = surplusPlayerIds_1_1.value;
                (_d = this.playerNameTexts.get(playerId)) === null || _d === void 0 ? void 0 : _d.destroy();
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
            var player = this_1.worldState.findPlayer(playerId);
            var playerText = this_1.add
                .text(100, 0, player.name, {
                fill: '#FFFFFF',
                fixedWidth: 200,
                backgroundColor: playerId == this_1.playerId ? '#333333' : '#000000',
            })
                .setFontSize(18)
                .setPadding(0, 0, 0, 0)
                .setInteractive()
                .on('pointerdown', function () {
                if (playerId == _this.playerId) {
                    var plugin = _this.plugins.get('rexTextEdit');
                    plugin.edit(playerText, {
                        onClose: function () {
                            return;
                        },
                    });
                }
            });
            this_1.playerNameTexts.set(playerId, playerText);
        };
        var this_1 = this;
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
        try {
            for (var _e = __values(this.worldState.players), _f = _e.next(); !_f.done; _f = _e.next()) {
                var player = _f.value;
                var playerText = this.playerNameTexts.get(player.id);
                playerText.setText(player.name).setY(y);
                y += 50;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this.startGameButton)
            this.startGameButton.setY(y);
        if (this.waitingForHostText)
            this.waitingForHostText.setY(y);
    };
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
var LocalGameState = /** @class */ (function () {
    function LocalGameState(_a) {
        var _this = this;
        var playerId = _a.playerId, mode = _a.mode, selectedHex = _a.selectedHex, _b = _a.actionOutstandingWithServer, actionOutstandingWithServer = _b === void 0 ? false : _b;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.playerId, playerId = _c === void 0 ? _this.playerId : _c, _d = _b.mode, mode = _d === void 0 ? _this.mode : _d, _e = _b.selectedHex, selectedHex = _e === void 0 ? types_1.toMaybe(_this.selectedHex) : _e, _f = _b.actionOutstandingWithServer, actionOutstandingWithServer = _f === void 0 ? _this.actionOutstandingWithServer : _f;
            return new LocalGameState({ playerId: playerId, mode: mode, selectedHex: types_1.toOption(selectedHex), actionOutstandingWithServer: actionOutstandingWithServer });
        };
        this.setSelectedHex = function (selectedHex) { return _this.copy({ selectedHex: types_1.toMaybe(selectedHex) }); };
        this.setMode = function (mode) { return _this.copy({ mode: mode }); };
        this.playerId = playerId;
        this.mode = mode;
        this.selectedHex = selectedHex;
        this.actionOutstandingWithServer = actionOutstandingWithServer;
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
                        this.scene.sound.play(asset_keys_1.AudioKeys.ATTACK);
                        if (attacker.killed || defender.killed) {
                            this.scene.sound.play(asset_keys_1.AudioKeys.DEATH);
                        }
                        simultaneousAnimations = [];
                        simultaneousAnimations.push(attackerDisplayObject.runAttackAnimation(attacker.location, defender.location));
                        if (attacker.killed) {
                            simultaneousAnimations.push(attackerDisplayObject.runDeathAnimation());
                        }
                        if (defender.killed) {
                            simultaneousAnimations.push(defenderDisplayObject.runDeathAnimation());
                        }
                        return [4 /*yield*/, Promise.all(simultaneousAnimations)];
                    case 1:
                        _a.sent();
                        attackerDisplayObject.runDamageAnimation(attacker.location, attacker.damage);
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
var json_serialisation_1 = __webpack_require__(/*! ../../util/json-serialisation */ "./src/util/json-serialisation.ts");
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
            _this.handleNewTurn();
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
            client.addListener(_this.handleServerToClientMessage);
        };
        _this.handleServerToClientMessage = function (message) {
            switch (message.type) {
                case 'joined':
                case 'rejoined':
                    console.log('Unexpected message mid-game');
                    break;
                case 'worldEvent':
                    _this.handleWorldEvent(json_serialisation_1.deserialiseFromJson(message.event));
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(message);
            }
        };
        _this.actAsServer = function (server) {
            server.addListener(_this.handleWorldEvent);
            _this.worldState = server.worldState;
        };
        _this.asyncSendToServer = function (action) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.serverOrClient)
                    throw "Unexpected missing serverOrClient";
                if (this.serverOrClient instanceof server_1.Server) {
                    this.serverOrClient.handleAction(this.playerId, action);
                }
                else {
                    this.serverOrClient.sendAction(this.playerId, action);
                }
                return [2 /*return*/];
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
                _this.localGameState = _this.localGameState.copy({ actionOutstandingWithServer: true });
                _this.syncScene();
                _this.asyncSendToServer(result.worldAction).then(function () {
                    _this.localGameState = _this.localGameState.copy({ actionOutstandingWithServer: false });
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
            if (pointer.button == 2) {
                _this.handleLocalAction({ type: 'goHex', hex: hex });
            }
            else {
                _this.handleLeftClick(hex);
            }
        };
        _this.handleLeftClick = function (hex) {
            var mode = _this.localGameState.mode;
            switch (mode.type) {
                case 'selectHex':
                    _this.handleLocalAction({ type: 'selectHex', hex: hex });
                    break;
                case 'moveUnit':
                    _this.handleLocalAction({ type: 'completeMove', unitId: mode.unitId, hex: hex });
                    break;
                case 'attack':
                    _this.handleLocalAction({ type: 'completeAttack', unitId: mode.unitId, hex: hex });
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(mode);
            }
        };
        // Sync
        // ----
        // Handle world events
        // -------------------
        _this.handleWorldEvent = function (event) {
            var oldWorldState = _this.worldState;
            _this.worldState = world_event_evaluator_1.applyEvent(oldWorldState, event);
            switch (event.type) {
                case 'initialise':
                case 'gameStarted':
                case 'playerAdded':
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
                case 'newTurn':
                    _this.handleNewTurn();
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(event);
            }
        };
        _this.handlePlayerEndedTurn = function () {
            _this.syncScene();
        };
        _this.handleNewTurn = function () {
            var unitToSelect = _this.combinedState.findNextUnitWithActionPoints();
            _this.localGameState = _this.localGameState.copy({
                mode: { type: 'selectHex' },
                selectedHex: types_1.toMaybe(unitToSelect === null || unitToSelect === void 0 ? void 0 : unitToSelect.location),
            });
            _this.sound.play(asset_keys_1.AudioKeys.NEW_TURN);
            _this.syncScene();
        };
        _this.handleUnitMovedWorldEvent = function (event, oldWorldState) {
            var _a;
            var unitId = event.unitId, from = event.from, to = event.to;
            var unit = _this.worldState.getUnitById(unitId);
            var wasPreviouslySelected = _this.localGameState.selectedHex && ((_a = oldWorldState.findUnitInLocation(_this.localGameState.selectedHex)) === null || _a === void 0 ? void 0 : _a.id) == unitId;
            if (wasPreviouslySelected && unit.playerId == _this.playerId) {
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
            if (!unit || unit.actionPoints.current == 0) {
                var nextUnit = _this.combinedState.findNextUnitWithActionPoints(unitId);
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
                attacker: attacker,
                defender: defender,
            });
        };
        _this.updateSelectionAfterCombat = function (attacker, defender, oldWorldState) {
            var _a;
            var previouslySelectedUnitId = (_a = new combined_state_methods_1.CombinedState(oldWorldState, _this.localGameState).findSelectedUnit()) === null || _a === void 0 ? void 0 : _a.id;
            if (previouslySelectedUnitId == attacker.unitId && attacker.playerId == _this.playerId) {
                var newSelectedHex = _this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId, attacker.location);
                _this.localGameState = _this.localGameState.copy({
                    mode: { type: 'selectHex' },
                    selectedHex: types_1.toMaybe(newSelectedHex),
                });
            }
            else {
                // deselect unit killed by another player
                if (defender.killed && defender.unitId == previouslySelectedUnitId && defender.playerId == _this.playerId) {
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
            if (mode.type == 'selectHex')
                return { type: 'enterMoveMode' };
            break;
        case 'a':
            if (mode.type == 'selectHex')
                return { type: 'enterAttackMode' };
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
                    return _this.handleEnterAttackMode();
                case 'completeMove':
                    return _this.handleCompleteMove(action.unitId, action.hex);
                case 'completeAttack':
                    return _this.handleCompleteAttack(action.unitId, action.hex);
                case 'selectHex':
                    return _this.handleSelectHex(action.hex);
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(action);
            }
        };
        this.handleSelectNextUnit = function () {
            var selectedUnit = _this.combinedState.findSelectedUnit();
            var unitToSelect = _this.combinedState.findNextUnitWithActionPoints(selectedUnit === null || selectedUnit === void 0 ? void 0 : selectedUnit.id);
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
                var targetUnit = _this.combinedState.unitCanAttackHex(selectedUnit, hex);
                if (targetUnit) {
                    return _this.attackHex(selectedUnit, targetUnit);
                }
            }
        };
        this.attackHex = function (attacker, defender) { return ({
            worldAction: {
                type: 'attack',
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
                return { worldAction: { type: 'endTurn' } };
            }
        };
        this.handleEnterMoveMode = function () {
            var unit = _this.combinedState.findSelectedUnit();
            if (unit && _this.combinedState.unitCouldPotentiallyMove(unit)) {
                var newMode = { type: 'moveUnit', from: unit.location, unitId: unit.id };
                return { newLocalGameState: _this.localGameState.setMode(newMode) };
            }
        };
        this.handleEnterAttackMode = function () {
            var unit = _this.combinedState.findSelectedUnit();
            if (unit && _this.combinedState.unitCouldPotentiallyAttack(unit)) {
                var newMode = { type: 'attack', from: unit.location, unitId: unit.id };
                var newLocalGameState = _this.localGameState.setMode(newMode);
                return { newLocalGameState: newLocalGameState };
            }
        };
        this.handleCompleteMove = function (unitId, destination) {
            var unit = _this.worldState.getUnitById(unitId);
            if (_this.combinedState.unitCanMoveToHex(unit, destination))
                return _this.moveToHex(unit, destination);
        };
        this.handleCompleteAttack = function (unitId, targetHex) {
            var attacker = _this.worldState.getUnitById(unitId);
            var defender = _this.combinedState.unitCanAttackHex(attacker, targetHex);
            if (defender)
                return _this.attackHex(attacker, defender);
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
            if (mode.type == 'moveUnit') {
                if (selectedHex && hex.isAdjacentTo(selectedHex) && !_this.findUnitInLocation(hex)) {
                    return 'targetable';
                }
            }
            if (mode.type == 'attack') {
                if (selectedHex && hex.isAdjacentTo(selectedHex)) {
                    var unit = _this.findUnitInLocation(hex);
                    if (unit && unit.playerId != playerId) {
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
var hex_geometry_1 = __webpack_require__(/*! ../hex-geometry */ "./src/scenes/hex-geometry.ts");
var colours_1 = __webpack_require__(/*! ../colours */ "./src/scenes/colours.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/main-game/game-scene.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var combined_state_methods_1 = __webpack_require__(/*! ../combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var TextsDisplayObject = /** @class */ (function () {
    function TextsDisplayObject(scene, worldState, localGameState, localActionDispatcher) {
        var _this = this;
        this.handleActionTextClick = function () {
            var mode = _this.localGameState.mode;
            switch (mode.type) {
                case 'selectHex':
                    _this.localActionDispatcher({ type: 'enterMoveMode' });
                    break;
                case 'moveUnit':
                case 'attack':
                    _this.localActionDispatcher({ type: 'abort' });
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(mode);
            }
        };
        this.handleActionText2Click = function () {
            if (_this.localGameState.mode.type === 'selectHex') {
                _this.localActionDispatcher({ type: 'enterAttackMode' });
            }
        };
        this.hasClickHandlerFor = function (point) {
            var e_1, _a;
            try {
                for (var _b = __values([_this.endTurnText, _this.actionText, _this.actionText2]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var obj = _c.value;
                    if (obj.getBounds().contains(point.x, point.y))
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
            _this.worldState = worldState;
            _this.localGameState = localGameState;
            _this.hourglass.setVisible(localGameState.actionOutstandingWithServer);
            _this.playerText.setText(_this.combinedState.getCurrentPlayer().name + " - Turn " + _this.worldState.turn);
            _this.selectionText.setText('');
            _this.actionText.setText('');
            _this.actionText2.setText('');
            var mode = _this.localGameState.mode;
            switch (mode.type) {
                case 'selectHex':
                    _this.syncSelectHexModeText();
                    break;
                case 'moveUnit':
                    _this.syncMoveUnitModeText(mode.unitId);
                    break;
                case 'attack':
                    _this.syncAttackModeText(mode.unitId);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(mode);
            }
            if (_this.combinedState.getCurrentPlayer().endedTurn) {
                _this.endTurnText.setText('Waiting for next turn...');
            }
            else {
                _this.endTurnText.setText('End Turn (Shift + Enter)');
            }
        };
        this.syncAttackModeText = function (unitId) {
            var unit = _this.worldState.getUnitById(unitId);
            _this.selectionText.setText(_this.describeUnit(unit));
            _this.actionText.setText('Click unit to attack (or ESC to cancel)');
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
            }
        };
        this.describeUnit = function (unit) {
            return unit.name + " - Llama warrior - HP " + unit.hitPoints.current + "/" + unit.hitPoints.max + " - actions " + unit.actionPoints.current + "/" + unit.actionPoints.max;
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
        this.endTurnText = this.scene.add
            .text(700, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y, '', { fill: colours_1.ACTION_TEXT_COLOUR })
            .setInteractive()
            .on('pointerdown', function () { return _this.localActionDispatcher({ type: 'endTurn' }); })
            .on('pointerover', function () { return _this.endTurnText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.endTurnText.setFill(colours_1.ACTION_TEXT_COLOUR); });
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
        this.getHealthBarPosition = function (point) { return point_1.addPoints(point, HEALTH_BAR_OFFSET); };
        this.syncScene = function (unit) {
            assert(unit.id == _this.unit.id);
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
        this.image = scene.add
            .image(0, 0, 'llama')
            .setScale(0.8)
            .setTint(colours_1.PLAYER_TINTS[this.unit.playerId - 1]);
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
            new menu_button_1.MenuButton(_this, 100, 150, 'Host Game', function () { return _this.handleStartGame(); });
        };
        _this.handleStartGame = function () { return __awaiter(_this, void 0, void 0, function () {
            var worldEventDb, gameId, playerId, server, sceneData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, world_event_db_1.openWorldEventDb()];
                    case 1:
                        worldEventDb = _a.sent();
                        gameId = uuid_1.v4();
                        playerId = 1;
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
exports.subtractPoints = exports.addPoints = exports.multiplyPoint = exports.point = void 0;
exports.point = function (x, y) { return ({ x: x, y: y }); };
exports.multiplyPoint = function (point, n) { return ({ x: point.x * n, y: point.y * n }); };
exports.addPoints = function (point1, point2) { return ({ x: point1.x + point2.x, y: point1.y + point2.y }); };
exports.subtractPoints = function (point1, point2) { return ({
    x: point1.x - point2.x,
    y: point1.y - point2.y,
}); };


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
exports.newPeer = exports.Client = void 0;
var json_serialisation_1 = __webpack_require__(/*! ../util/json-serialisation */ "./src/util/json-serialisation.ts");
var Client = /** @class */ (function () {
    function Client(serverConnection) {
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
        this.send = function (message) { return _this.serverConnection.send(message); };
        this.sendAction = function (playerId, action) {
            return _this.send({
                type: 'worldAction',
                action: json_serialisation_1.serialiseToJson(action),
                playerId: playerId,
            });
        };
        this.serverConnection = serverConnection;
        serverConnection.on('data', function (message) {
            console.log('Message received from server:');
            console.log(message);
            _this.notifyListeners(message);
        });
    }
    Client.connect = function (gameId) { return __awaiter(void 0, void 0, void 0, function () {
        var serverConnection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Client.doConnect(gameId)];
                case 1:
                    serverConnection = _a.sent();
                    return [2 /*return*/, new Client(serverConnection)];
            }
        });
    }); };
    Client.doConnect = function (gameId) {
        return new Promise(function (resolve) {
            var peer = exports.newPeer();
            peer.on('error', function (err) { return console.log(err); });
            peer.on('open', function () {
                var connection = peer.connect(gameId, { reliable: true });
                connection.on('open', function () {
                    resolve(connection);
                });
            });
        });
    };
    return Client;
}());
exports.Client = Client;
exports.newPeer = function (id, options) { return new window.Peer(id, options); };


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
var client_1 = __webpack_require__(/*! ./client */ "./src/server/client.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var initial_world_state_1 = __webpack_require__(/*! ../world/initial-world-state */ "./src/world/initial-world-state.ts");
var world_event_evaluator_1 = __webpack_require__(/*! ../world/world-event-evaluator */ "./src/world/world-event-evaluator.ts");
var Server = /** @class */ (function () {
    function Server(worldEventDb, gameId, worldState, nextWorldEventId) {
        var _this = this;
        this.connections = [];
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
        this.handleClientJoin = function (connection) {
            if (_this.worldState.gameHasStarted) {
                // TODO: tell the client "bad luck"
            }
            else {
                var addPlayerAction = { type: 'addPlayer' };
                var playerAddedEvent = _this.handleAction(1, addPlayerAction);
                connection.send({
                    type: 'joined',
                    playerId: playerAddedEvent.playerId,
                    worldState: _this.worldState.toJson(),
                });
            }
        };
        this.handleClientRejoin = function (message, connection) {
            var worldState = _this.worldState;
            if (worldState.isValidPlayerId(message.playerId))
                connection.send({
                    type: 'rejoined',
                    worldState: worldState.toJson(),
                });
            else {
                // TODO: tell the client no
            }
        };
        this.handleClientToServerMessage = function (message, connection) {
            console.log(message);
            switch (message.type) {
                case 'join':
                    _this.handleClientJoin(connection);
                    break;
                case 'rejoin':
                    _this.handleClientRejoin(message, connection);
                    break;
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
        this.worldStateOwner = new world_state_owner_1.WorldStateOwner(worldState, nextWorldEventId);
        this.worldStateOwner.addListener(function (event) {
            var e_2, _a;
            _this.notifyListeners(event);
            _this.worldEventDb.store(_this.gameId, event);
            try {
                for (var _b = __values(_this.connections), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var clientConnection = _c.value;
                    var message = { type: 'worldEvent', event: json_serialisation_1.serialiseToJson(event) };
                    clientConnection.send(message);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
        var peer = client_1.newPeer(this.gameId);
        peer.on('error', function (err) { return console.log(err); });
        peer.on('connection', function (connection) {
            _this.connections.push(connection);
            connection.on('data', function (message) { return _this.handleClientToServerMessage(message, connection); });
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
        var e_3, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, worldEventDb.getEventsForGame(gameId)];
                case 1:
                    events = _d.sent();
                    worldState = initial_world_state_1.INITIAL_WORLD_STATE;
                    try {
                        for (_a = __values(R.sortBy(function (event) { return event.id; }, events)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            event_1 = _b.value;
                            worldState = world_event_evaluator_1.applyEvent(worldState, event_1);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
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
exports.WorldActionHandler = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var unit_1 = __webpack_require__(/*! ../world/unit */ "./src/world/unit.ts");
var action_points_1 = __webpack_require__(/*! ../world/action-points */ "./src/world/action-points.ts");
var hit_points_1 = __webpack_require__(/*! ../world/hit-points */ "./src/world/hit-points.ts");
var random_util_1 = __webpack_require__(/*! ../util/random-util */ "./src/util/random-util.ts");
var LLAMA_NAMES = ['Walter', 'Dolly', 'Chewpaca', 'Barack O. Llama', 'Como Se'];
var WorldActionHandler = /** @class */ (function () {
    function WorldActionHandler(worldState, playerId, nextWorldEventId) {
        var _this = this;
        this.calculateWorldEvent = function (action) {
            switch (action.type) {
                case 'initialise':
                    return _this.handleInitialise(action);
                case 'addPlayer':
                    return _this.handleAddPlayer();
                case 'startGame':
                    return _this.handleStartGame();
                case 'attack':
                    return _this.handleAttack(action);
                case 'moveUnit':
                    return _this.handleMoveUnit(action);
                case 'endTurn':
                    return _this.handleEndTurn();
            }
        };
        this.handleInitialise = function (action) {
            if (_this.nextWorldEventId > 0) {
                throw "Can only initialise as the first event";
            }
            return { id: _this.nextWorldEventId, type: 'initialise', state: action.state };
        };
        this.handleAddPlayer = function () {
            var existingPlayerIds = _this.worldState.players.map(function (player) { return player.id; });
            var playerId = R.apply(Math.max, existingPlayerIds) + 1;
            return { id: _this.nextWorldEventId, type: 'playerAdded', playerId: playerId };
        };
        this.handleStartGame = function () {
            var e_1, _a;
            if (_this.worldState.gameHasStarted) {
                throw "Cannot start an already-started game";
            }
            var units = [];
            var remainingHexes = Array.from(_this.worldState.map.getMapHexes());
            var _loop_1 = function (player) {
                var generateUnit = function () {
                    var location = random_util_1.randomElement(remainingHexes);
                    remainingHexes = R.without([location], remainingHexes);
                    var unit = new unit_1.Unit({
                        id: units.length + 1,
                        playerId: player.id,
                        name: random_util_1.randomElement(LLAMA_NAMES),
                        location: location,
                        actionPoints: new action_points_1.ActionPoints({ current: 2, max: 2 }),
                        hitPoints: new hit_points_1.HitPoints({ current: 100, max: 100 }),
                    });
                    units.push(unit);
                };
                generateUnit();
                generateUnit();
            };
            try {
                for (var _b = __values(_this.worldState.players), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var player = _c.value;
                    _loop_1(player);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return { id: _this.nextWorldEventId, type: 'gameStarted', units: units };
        };
        this.handleAttack = function (action) {
            var attackerId = action.attacker.unitId;
            var attacker = _this.worldState.findUnitById(attackerId);
            if (!attacker)
                throw "No unit found with ID " + attackerId;
            if (attacker.playerId != _this.playerId)
                throw "Cannot control another player's unit: " + attacker.id;
            if (attacker.actionPoints.current < 1)
                throw "Not enough action points to attack";
            if (!attacker.location.equals(action.attacker.location))
                throw "Attacker not in expected location";
            var defenderId = action.defender.unitId;
            var defender = _this.worldState.findUnitById(defenderId);
            if (!defender)
                throw "No unit found with ID " + defenderId;
            if (defender.playerId == _this.playerId)
                throw "Cannot attack own unit";
            if (!defender.location.equals(action.defender.location))
                throw "Defender not in expected location";
            if (!attacker.location.isAdjacentTo(defender.location))
                throw "Invalid unit attack between non-adjacent hexes " + attacker.location + " to " + defender.location;
            var attackerDamage = Math.min(attacker.hitPoints.current, 10);
            var defenderDamage = Math.min(defender.hitPoints.current, 20);
            return _this.makeCombatWorldEvent(attacker, attackerDamage, defender, defenderDamage);
        };
        this.makeCombatWorldEvent = function (attacker, attackerDamage, defender, defenderDamage) { return ({
            id: _this.nextWorldEventId,
            type: 'combat',
            attacker: {
                playerId: attacker.playerId,
                unitId: attacker.id,
                location: attacker.location,
                damage: attackerDamage,
                killed: attacker.hitPoints.current == attackerDamage,
            },
            defender: {
                playerId: defender.playerId,
                unitId: defender.id,
                location: defender.location,
                damage: defenderDamage,
                killed: defender.hitPoints.current == defenderDamage,
            },
            actionPointsConsumed: 1,
        }); };
        this.handleMoveUnit = function (action) {
            var unitId = action.unitId, to = action.to;
            var unit = _this.worldState.findUnitById(unitId);
            if (!unit)
                throw "No unit found with ID " + unitId;
            var from = unit.location;
            if (!from.isAdjacentTo(to))
                throw "Invalid unit movement between non-adjacent hexes " + from + " to " + to;
            if (!_this.worldState.map.isInBounds(to))
                throw "Invalid unit movement to out-of-bounds hex " + to;
            if (_this.worldState.findUnitInLocation(to))
                throw "Invalid unit movement to already-occupied hex";
            if (unit.actionPoints.current < 1)
                throw "Not enough action points to move";
            return {
                id: _this.nextWorldEventId,
                type: 'unitMoved',
                playerId: _this.playerId,
                actionPointsConsumed: 1,
                unitId: unitId,
                from: from,
                to: to,
            };
        };
        this.handleEndTurn = function () {
            var player = _this.worldState.findPlayer(_this.playerId);
            if (!player)
                throw "No player with ID " + _this.playerId;
            if (player.endedTurn)
                throw "Player has already ended their turn";
            var playersYetToEndTheirTurn = _this.worldState.players
                .filter(function (player) { return !player.endedTurn; })
                .map(function (player) { return player.id; });
            var wholeTurnEnded = R.equals(playersYetToEndTheirTurn, [_this.playerId]);
            if (wholeTurnEnded) {
                return { id: _this.nextWorldEventId, type: 'newTurn' };
            }
            else {
                return { id: _this.nextWorldEventId, type: 'playerEndedTurn', playerId: _this.playerId };
            }
        };
        this.worldState = worldState;
        this.playerId = playerId;
        this.nextWorldEventId = nextWorldEventId;
    }
    return WorldActionHandler;
}());
exports.WorldActionHandler = WorldActionHandler;


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
var world_event_evaluator_1 = __webpack_require__(/*! ../world/world-event-evaluator */ "./src/world/world-event-evaluator.ts");
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
            var worldActionHandler = new world_action_handler_1.WorldActionHandler(_this.worldState, playerId, _this.nextWorldEventId);
            var event = worldActionHandler.calculateWorldEvent(action);
            _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event);
            _this.nextWorldEventId++;
            _this.notifyListeners(event);
            return event;
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
            else if (value._llamaClass == 'Hex') {
                return hex_1.Hex.fromJson(value);
            }
            else if (value._llamaClass == 'WorldMap') {
                return world_map_1.WorldMap.fromJson(value);
            }
            else if (value._llamaClass == 'WorldState') {
                return world_state_1.WorldState.fromJson(value);
            }
            else if (value._llamaClass == 'Unit') {
                return unit_1.Unit.fromJson(value);
            }
            else if (value._llamaClass == 'ActionPoints') {
                return action_points_1.ActionPoints.fromJson(value);
            }
            else if (value._llamaClass == 'HitPoints') {
                return hit_points_1.HitPoints.fromJson(value);
            }
            else if (value._llamaClass == 'Player') {
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
exports.randomElement = void 0;
exports.randomElement = function (array) { return array[Math.floor(Math.random() * array.length)]; };


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
exports.toMaybe = function (option) { return (option == undefined ? exports.nothing : exports.just(option)); };
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
        this.equals = function (that) { return _this.x == that.x && _this.y == that.y; };
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
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(_a) {
        var _this = this;
        var id = _a.id, name = _a.name, _b = _a.endedTurn, endedTurn = _b === void 0 ? false : _b;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? _this.id : _c, _d = _b.name, name = _d === void 0 ? _this.name : _d, _e = _b.endedTurn, endedTurn = _e === void 0 ? _this.endedTurn : _e;
            return new Player({
                id: id,
                name: name,
                endedTurn: endedTurn,
            });
        };
        this.toJson = function () { return ({ id: _this.id, name: _this.name, endedTurn: _this.endedTurn }); };
        this.id = id;
        this.name = name;
        this.endedTurn = endedTurn;
    }
    Player.fromJson = function (json) {
        return new Player({
            id: json.id,
            name: json.name,
            endedTurn: json.endedTurn,
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
exports.applyEvent = function (state, event) {
    switch (event.type) {
        case 'initialise':
            return handleInitialise(event);
        case 'playerAdded':
            return handlePlayerAdded(state, event);
        case 'gameStarted':
            return handleGameStarted(state, event);
        case 'unitMoved':
            return handleUnitMoved(state, event);
        case 'combat':
            return handleCombat(state, event);
        case 'playerEndedTurn':
            return handlePlayerEndedTurn(state, event);
        case 'newTurn':
            return handleNewTurn(state);
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
    if (R.any(function (player) { return player.id == event.playerId; }, state.players)) {
        throw "Player ID already in use";
    }
    var playerId = event.playerId;
    var player = new player_1.Player({ id: playerId, name: "Player " + playerId });
    return state.addPlayer(player);
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
    if ((fromUnit === null || fromUnit === void 0 ? void 0 : fromUnit.id) != unitId) {
        throw "Invalid from location for unit movement. Unit at " + from + " is " + (fromUnit === null || fromUnit === void 0 ? void 0 : fromUnit.id) + ", but was expected to be " + unitId;
    }
    var toUnit = state.findUnitInLocation(to);
    if (toUnit)
        throw "Invalid unit movement to already-occupied hex";
    if (unit.playerId != playerId)
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
    if (attackerUnit.playerId == defenderUnit.playerId)
        throw "Invalid combat with self";
    if (!attacker.location.isAdjacentTo(defender.location))
        throw "Invalid combat between non-adjacent hexes " + attacker.location + " to " + defender.location;
    if (attackerUnit.actionPoints.current < event.actionPointsConsumed)
        throw "Invalid action point usage";
    var newState = state;
    if (attacker.killed)
        newState = newState.removeUnit(attackerUnit.id);
    else
        newState = newState.replaceUnit(attackerUnit.id, attackerUnit.damage(attacker.damage).reduceActionPoints(event.actionPointsConsumed));
    if (defender.killed)
        newState = newState.removeUnit(defenderUnit.id);
    else
        newState = newState.replaceUnit(defenderUnit.id, defenderUnit.damage(defender.damage));
    return newState;
};
var handlePlayerEndedTurn = function (state, event) {
    var playerId = event.playerId;
    var player = state.findPlayer(playerId);
    if (!player)
        throw "No player found with ID " + playerId;
    return state.replacePlayer(playerId, player.copy({ endedTurn: true }));
};
var handleNewTurn = function (state) {
    return state.copy({
        turn: state.turn + 1,
        units: state.units.map(function (unit) { return unit.refreshActionPoints(); }),
        players: state.players.map(function (player) { return player.copy({ endedTurn: false }); }),
    });
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldState = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var world_map_1 = __webpack_require__(/*! ./world-map */ "./src/world/world-map.ts");
var unit_1 = __webpack_require__(/*! ./unit */ "./src/world/unit.ts");
var player_1 = __webpack_require__(/*! ./player */ "./src/world/player.ts");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var WorldState = /** @class */ (function () {
    function WorldState(_a) {
        var _this = this;
        var turn = _a.turn, map = _a.map, units = _a.units, players = _a.players;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.turn, turn = _c === void 0 ? _this.turn : _c, _d = _b.map, map = _d === void 0 ? _this.map : _d, _e = _b.units, units = _e === void 0 ? _this.units : _e, _f = _b.players, players = _f === void 0 ? _this.players : _f;
            return new WorldState({ turn: turn, map: map, units: units, players: players });
        };
        this.isPlayerDefeated = function (playerId) { return R.any(function (unit) { return unit.playerId == playerId; }, _this.units); };
        this.findPlayer = function (playerId) { return R.find(function (player) { return player.id == playerId; }, _this.players); };
        this.findUnitById = function (unitId) { return R.find(function (unit) { return unit.id == unitId; }, _this.units); };
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
                units: R.append(unit, R.filter(function (unit) { return unit.id != unitId; }, _this.units)),
            });
        };
        this.removeUnit = function (unitId) {
            return _this.copy({ units: R.filter(function (unit) { return unit.id != unitId; }, _this.units) });
        };
        this.replacePlayer = function (playerId, player) {
            assert(playerId == player.id);
            return _this.copy({
                players: R.append(player, R.filter(function (player) { return player.id != playerId; }, _this.players)),
            });
        };
        this.addPlayer = function (player) { return _this.copy({ players: R.append(player, _this.players) }); };
        this.toJson = function () { return ({
            turn: _this.turn,
            map: _this.map.toJson(),
            units: _this.units.map(function (unit) { return unit.toJson(); }),
            players: _this.players.map(function (player) { return player.toJson(); }),
        }); };
        this.isValidPlayerId = function (playerId) { return R.any(function (player) { return player.id == playerId; }, _this.players); };
        this.turn = turn;
        this.map = map;
        this.units = units;
        this.players = players;
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
        });
    };
    return WorldState;
}());
exports.WorldState = WorldState;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb21iaW5lZC1zdGF0ZS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaGV4LWdlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2JieS9sb2JieS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvY2FsLWdhbWUtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvZGlzcGxheS1vYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUva2V5Ym9hcmQtbWFwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2xvY2FsLWFjdGlvbi1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvbWFwLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3RleHRzLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3VuaXQtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUvbWFpbi1tZW51LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXNlcmlhbGlzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbS11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2FjdGlvbi1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGl0LXBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC91bml0LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtc3RhdGUu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QkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztZQUN6RCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLElBQUssc0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUM7U0FDaEUsQ0FBQztJQUxGLENBS0U7SUFHTixpQkFBQztDQUFBO0FBakZZLGdDQUFVIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBEZXhpZSwgeyBDb2xsZWN0aW9uIH0gZnJvbSAnZGV4aWUnXG5pbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgV29ybGRFdmVudFJlY29yZCB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIGV2ZW50OiBhbnkgLy8gc2VyaWFsaXNlZCBXb3JsZEV2ZW50XG59XG5cbmV4cG9ydCBjbGFzcyBMbGFtYURleGllIGV4dGVuZHMgRGV4aWUge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1pZ25vcmVcbiAgd29ybGRFdmVudHM6IERleGllLlRhYmxlPFdvcmxkRXZlbnRSZWNvcmQsIHN0cmluZz5cbn1cblxuZXhwb3J0IGNvbnN0IG9wZW5Xb3JsZEV2ZW50RGIgPSBhc3luYyAoKTogUHJvbWlzZTxXb3JsZEV2ZW50RGI+ID0+IHtcbiAgY29uc3QgZGV4aWUgPSBuZXcgRGV4aWUoJ2xsYW1hLXdhcnMnKVxuICBkZXhpZS52ZXJzaW9uKDEpLnN0b3Jlcyh7XG4gICAgd29ybGRFdmVudHM6ICcrKyxnYW1lSWQnLFxuICB9KVxuICBhd2FpdCBkZXhpZS5vcGVuKClcbiAgcmV0dXJuIG5ldyBXb3JsZEV2ZW50RGIoPExsYW1hRGV4aWU+ZGV4aWUpXG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZEV2ZW50RGIge1xuICBwcml2YXRlIHJlYWRvbmx5IGRleGllOiBMbGFtYURleGllXG5cbiAgY29uc3RydWN0b3IoZGV4aWU6IExsYW1hRGV4aWUpIHtcbiAgICB0aGlzLmRleGllID0gZGV4aWVcbiAgfVxuXG4gIHB1YmxpYyBzdG9yZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCB0aGlzLmRleGllLndvcmxkRXZlbnRzLmFkZCh7XG4gICAgICBnYW1lSWQsXG4gICAgICBldmVudDogc2VyaWFsaXNlVG9Kc29uKGV2ZW50KSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdldEV2ZW50c0ZvckdhbWUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPFdvcmxkRXZlbnRbXT4gPT4ge1xuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCB0aGlzLmRleGllLndvcmxkRXZlbnRzLndoZXJlKCdnYW1lSWQnKS5lcXVhbHMoZ2FtZUlkKS50b0FycmF5KClcbiAgICByZXR1cm4gcmVjb3Jkcy5tYXAoKHJlY29yZCkgPT4gZGVzZXJpYWxpc2VGcm9tSnNvbihyZWNvcmQuZXZlbnQpKVxuICB9XG5cbiAgcHVibGljIGhhc0V2ZW50c0ZvckdhbWUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgICBjb25zdCByZWNvcmQgPSBhd2FpdCB0aGlzLnF1ZXJ5RXZlbnRzQnlHYW1lSWQoZ2FtZUlkKS5maXJzdCgpXG4gICAgcmV0dXJuIHJlY29yZCAhPSB1bmRlZmluZWRcbiAgfVxuXG4gIHByaXZhdGUgcXVlcnlFdmVudHNCeUdhbWVJZCA9IChnYW1lSWQ6IHN0cmluZyk6IENvbGxlY3Rpb248V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPiA9PlxuICAgIHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpXG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aFxufVxuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcydcbmltcG9ydCBUZXh0RWRpdFBsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvdGV4dGVkaXQtcGx1Z2luLmpzJ1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ0xsYW1hIFdhcnMnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9LFxuXG4gIHNjZW5lOiBTY2VuZXMsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcGFyZW50OiAnZ2FtZScsXG4gIGRvbToge1xuICAgIGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gIHBsdWdpbnM6IHtcbiAgICBnbG9iYWw6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmV4VGV4dEVkaXQnLFxuICAgICAgICBwbHVnaW46IFRleHRFZGl0UGx1Z2luLFxuICAgICAgICBzdGFydDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5zZXRHYW1lU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuICBnYW1lLnNjYWxlLnJlZnJlc2goKVxufSlcbiIsImV4cG9ydCBjb25zdCBBdWRpb0tleXMgPSB7XG4gIEFUVEFDSzogJ2F0dGFjaycsXG4gIERFQVRIOiAnZGVhdGgnLFxuICBXQUxLOiAnd2FsaycsXG4gIE5FV19UVVJOOiAnbmV3LXR1cm4nLFxufVxuXG5leHBvcnQgY29uc3QgQUxMX0FVRElPX0tFWVMgPSBbQXVkaW9LZXlzLkFUVEFDSywgQXVkaW9LZXlzLkRFQVRILCBBdWRpb0tleXMuV0FMSywgQXVkaW9LZXlzLk5FV19UVVJOXVxuIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vLi4vaGVscGVycydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgRmlsZUNvbmZpZyA9IFBoYXNlci5UeXBlcy5Mb2FkZXIuRmlsZUNvbmZpZ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVJZCwgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTUFJTl9NRU5VX1NDRU5FX0tFWSB9IGZyb20gJy4uL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiwgV29ybGRFdmVudERiIH0gZnJvbSAnLi4vLi4vZGIvd29ybGQtZXZlbnQtZGInXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBDbGllbnQsIFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFNlcnZlclRvQ2xpZW50TWVzc2FnZSB9IGZyb20gJy4uLy4uL3NlcnZlci9tZXNzYWdlcydcbmltcG9ydCB7IExPQkJZX1NDRU5FX0tFWSwgTG9iYnlTY2VuZURhdGEgfSBmcm9tICcuLi9sb2JieS9sb2JieS1zY2VuZSdcblxuZXhwb3J0IGNvbnN0IEJPT1RfU0NFTkVfS0VZID0gJ0Jvb3QnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBCT09UX1NDRU5FX0tFWSxcbn1cblxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgcmVqb2luZWRMaXN0ZW5lcjogT3B0aW9uPFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyPlxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIHB1YmxpYyBwcmVsb2FkKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNVxuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckhlaWdodCA9IDEwMFxuICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSA0MDBcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoLFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIHByb2dyZXNzQmFyV2lkdGgsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCxcbiAgICAgIDB4MDAwMDAwLFxuICAgIClcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgMTAsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCAtIDIwLFxuICAgICAgMHg4ODg4ODgsXG4gICAgKVxuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWVcblxuICAgICAgY29uc3QgcGVyY2VudCA9IHZhbHVlICogMTAwXG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGU6IEZpbGVDb25maWcpID0+IHtcbiAgICAgIGFzc2V0VGV4dC5zZXRUZXh0KGZpbGUua2V5KVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KClcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLmxhdW5jaEdhbWUoKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2hHYW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHVybEluZm8gPSBnZXRVcmxJbmZvKClcbiAgICBpZiAodXJsSW5mbykge1xuICAgICAgYXdhaXQgdGhpcy5qb2luT3JSZXN0b3JlR2FtZSh1cmxJbmZvKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KE1BSU5fTUVOVV9TQ0VORV9LRVkpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luT3JSZXN0b3JlR2FtZSA9IGFzeW5jICh1cmxJbmZvOiBVcmxJbmZvKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRFdmVudERiID0gYXdhaXQgb3BlbldvcmxkRXZlbnREYigpXG4gICAgY29uc3QgZ2FtZUlkID0gdXJsSW5mby5nYW1lSWRcbiAgICBjb25zdCBwbGF5ZXJJZCA9IHVybEluZm8ucGxheWVySWRcbiAgICBjb25zdCBpc1NlcnZlciA9IGF3YWl0IHdvcmxkRXZlbnREYi5oYXNFdmVudHNGb3JHYW1lKGdhbWVJZClcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVzdG9yZUdhbWVBc1NlcnZlcihnYW1lSWQsIHdvcmxkRXZlbnREYilcbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5qb2luT3JSZXN0b3JlQ2xpZW50KGdhbWVJZCwgcGxheWVySWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luT3JSZXN0b3JlQ2xpZW50ID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCBwbGF5ZXJJZDogT3B0aW9uPFBsYXllcklkPik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IENsaWVudC5jb25uZWN0KGdhbWVJZClcbiAgICBpZiAocGxheWVySWQpIHtcbiAgICAgIHRoaXMucmVqb2luQXNDbGllbnQoY2xpZW50LCBnYW1lSWQsIHBsYXllcklkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmpvaW5Bc0NsaWVudChjbGllbnQsIGdhbWVJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5Bc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCwgZ2FtZUlkOiBHYW1lSWQpOiB2b2lkID0+IHtcbiAgICB0aGlzLnJlam9pbmVkTGlzdGVuZXIgPSAobWVzc2FnZTogU2VydmVyVG9DbGllbnRNZXNzYWdlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09ICdqb2luZWQnKSB7XG4gICAgICAgIGlmICh0aGlzLnJlam9pbmVkTGlzdGVuZXIpIHtcbiAgICAgICAgICBjbGllbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5yZWpvaW5lZExpc3RlbmVyKVxuICAgICAgICAgIHRoaXMucmVqb2luZWRMaXN0ZW5lciA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBsYXllcklkID0gbWVzc2FnZS5wbGF5ZXJJZFxuICAgICAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkLCBwbGF5ZXJJZCB9KVxuICAgICAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihtZXNzYWdlLndvcmxkU3RhdGUpXG4gICAgICAgIGlmICh3b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50LCB3b3JsZFN0YXRlLCBwbGF5ZXJJZCB9XG4gICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQsIHdvcmxkU3RhdGUsIHBsYXllcklkIH1cbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLnJlam9pbmVkTGlzdGVuZXIpXG4gICAgY2xpZW50LnNlbmQoeyB0eXBlOiAnam9pbicgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVqb2luQXNDbGllbnQgPSAoY2xpZW50OiBDbGllbnQsIGdhbWVJZDogR2FtZUlkLCBwbGF5ZXJJZDogUGxheWVySWQpOiB2b2lkID0+IHtcbiAgICB0aGlzLnJlam9pbmVkTGlzdGVuZXIgPSAobWVzc2FnZTogU2VydmVyVG9DbGllbnRNZXNzYWdlKSA9PiB7XG4gICAgICBpZiAobWVzc2FnZS50eXBlID09ICdyZWpvaW5lZCcpIHtcbiAgICAgICAgaWYgKHRoaXMucmVqb2luZWRMaXN0ZW5lcikge1xuICAgICAgICAgIGNsaWVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLnJlam9pbmVkTGlzdGVuZXIpXG4gICAgICAgICAgdGhpcy5yZWpvaW5lZExpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd29ybGRTdGF0ZSA9IFdvcmxkU3RhdGUuZnJvbUpzb24obWVzc2FnZS53b3JsZFN0YXRlKVxuICAgICAgICBpZiAod29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IGNsaWVudCwgd29ybGRTdGF0ZSwgcGxheWVySWQgfVxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoR0FNRV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50LCB3b3JsZFN0YXRlLCBwbGF5ZXJJZCB9XG4gICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjbGllbnQuYWRkTGlzdGVuZXIodGhpcy5yZWpvaW5lZExpc3RlbmVyKVxuICAgIGNsaWVudC5zZW5kKHsgdHlwZTogJ3Jlam9pbicsIHBsYXllcklkIH0pXG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVHYW1lQXNTZXJ2ZXIgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQsIHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgc2VydmVyID0gYXdhaXQgU2VydmVyLnJlc3RvcmVHYW1lKHdvcmxkRXZlbnREYiwgZ2FtZUlkKVxuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBzZXJ2ZXIud29ybGRTdGF0ZVxuICAgIGlmICh3b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIsIHdvcmxkU3RhdGU6IHdvcmxkU3RhdGUsIHBsYXllcklkOiAxIH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoR0FNRV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciwgd29ybGRTdGF0ZTogd29ybGRTdGF0ZSwgcGxheWVySWQ6IDEgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgLy8gU291cmNlOiBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2hleC10aWxlc2V0LXBhY2tcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xsYW1hJywgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hXzE0LnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ob3VyZ2xhc3MtaWNvblxuICAgIHRoaXMubG9hZC5pbWFnZSgnaG91cmdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL0hvdXJnbGFzcy5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtdGV4dHVyZXMtdGlsZXNcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLXRleHR1cmVcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2dyYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL2dyYXNzMi5wbmcnKVxuXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC8zNy1oaXRzcHVuY2hlc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLLCAnYXNzZXRzL2F1ZGlvL2hpdDE4Lm1wMy5tcDMnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbWFsZS1ncnVudHllbGxpbmctc291bmRzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5ERUFUSCwgJ2Fzc2V0cy9hdWRpby8xeWVsbDQud2F2JylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLWZvb3Qtc3RlcC1zb3VuZHMteW8tZnJhbmtpZVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuV0FMSywgJ2Fzc2V0cy9hdWRpby9zZnhfc3RlcF9ncmFzc19sLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC91aS1zb3VuZC1lZmZlY3RzLXBhY2tcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLk5FV19UVVJOLCAnYXNzZXRzL2F1ZGlvL01FTlUgQV9TZWxlY3Qud2F2JylcbiAgfVxufVxuXG5pbnRlcmZhY2UgVXJsSW5mbyB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIHBsYXllcklkPzogUGxheWVySWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVybEluZm8gPSAoKTogT3B0aW9uPFVybEluZm8+ID0+IHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gIGlmIChoYXNoID09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgcGF0aCA9IGhhc2guc3Vic3RyKDEpXG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpXG4gIGNvbnN0IGdhbWVJZCA9IHNlZ21lbnRzWzBdXG4gIGNvbnN0IHBsYXllcklkID0gc2VnbWVudHMubGVuZ3RoID4gMSA/IE51bWJlci5wYXJzZUludChzZWdtZW50c1sxXSkgOiB1bmRlZmluZWRcbiAgcmV0dXJuIHsgZ2FtZUlkLCBwbGF5ZXJJZCB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRVcmxJbmZvID0gKHVybEluZm86IFVybEluZm8pOiB2b2lkID0+IHtcbiAgbGV0IGhhc2ggPSB1cmxJbmZvLmdhbWVJZFxuICBpZiAodXJsSW5mby5wbGF5ZXJJZCAhPSB1bmRlZmluZWQpIHtcbiAgICBoYXNoICs9ICcvJyArIHVybEluZm8ucGxheWVySWRcbiAgfVxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hcbn1cbiIsImltcG9ydCBDb2xvciA9IFBoYXNlci5EaXNwbGF5LkNvbG9yXG5cbmV4cG9ydCB0eXBlIENvbG91clN0cmluZyA9IHN0cmluZ1xuZXhwb3J0IHR5cGUgQ29sb3VyTnVtYmVyID0gbnVtYmVyXG5cbmV4cG9ydCBjb25zdCBjb2xvdXJOdW1iZXIgPSAoY29sb3VyU3RyaW5nOiBDb2xvdXJTdHJpbmcpOiBDb2xvdXJOdW1iZXIgPT4gQ29sb3IuSGV4U3RyaW5nVG9Db2xvcihjb2xvdXJTdHJpbmcpLmNvbG9yXG5cbmV4cG9ydCBjb25zdCBIRUFMVEhfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzAwMDAwMCcpXG5leHBvcnQgY29uc3QgSEVBTFRIX0VNUFRZX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmZmZicpXG5leHBvcnQgY29uc3QgSEVBTFRIX0ZVTExfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjNGRmMDM3JylcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIT1ZFUl9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2NjZmZiZScpXG5leHBvcnQgY29uc3QgU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZDA4JylcbmV4cG9ydCBjb25zdCBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzlkZjFlNycpXG5cbmV4cG9ydCBjb25zdCBBQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2NjY2MwMCdcbmV4cG9ydCBjb25zdCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2ZmZmYwMCdcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9USU5UUyA9IFsnI2ZmYmJiYicsICcjYmJiYmZmJywgJyNiYmZmYmInLCAnI2JiZmZmZicsICcjZmZmZmJiJywgJyNmZmJiZmYnXS5tYXAoY29sb3VyTnVtYmVyKVxuIiwiaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgY2xhc3MgQ29tYmluZWRTdGF0ZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByb3RlY3RlZCByZWFkb25seSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gIH1cblxuICBwdWJsaWMgZmluZFNlbGVjdGVkVW5pdCA9ICgpOiBPcHRpb248VW5pdD4gPT5cbiAgICB0aGlzLnNlbGVjdGVkSGV4ID8gdGhpcy5maW5kVW5pdEluTG9jYXRpb24odGhpcy5zZWxlY3RlZEhleCkgOiB1bmRlZmluZWRcblxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSGV4KCk6IE9wdGlvbjxIZXg+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICB9XG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0LmFjdGlvblBvaW50cy5jdXJyZW50ID4gMCAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrID0gKHVuaXQ6IFVuaXQpOiBib29sZWFuID0+XG4gICAgdW5pdC5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkICYmIHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPiAwICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENhbk1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBoZXg6IEhleCk6IGJvb2xlYW4gPT5cbiAgICB0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSh1bml0KSAmJlxuICAgIGhleC5pc0FkamFjZW50VG8odW5pdC5sb2NhdGlvbikgJiZcbiAgICB0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSAmJlxuICAgICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgLyoqXG4gICAqIEByZXR1cm4gdGhlIHVuaXQgaW4gdGhlIGhleCB0byBhdHRhY2ssIGlmIGFuIGF0dGFjayBpcyBwb3NzaWJsZSwgZWxzZSB1bmRlZmluZWQuXG4gICAqL1xuICBwdWJsaWMgdW5pdENhbkF0dGFja0hleCA9ICh1bml0OiBVbml0LCBsb2NhdGlvbjogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24obG9jYXRpb24pXG4gICAgaWYgKFxuICAgICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSAmJlxuICAgICAgdGFyZ2V0VW5pdCAhPSB1bmRlZmluZWQgJiZcbiAgICAgIHRhcmdldFVuaXQucGxheWVySWQgIT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAmJlxuICAgICAgdW5pdC5sb2NhdGlvbi5pc0FkamFjZW50VG8obG9jYXRpb24pXG4gICAgKVxuICAgICAgcmV0dXJuIHRhcmdldFVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kTmV4dFVuaXRXaXRoQWN0aW9uUG9pbnRzID0gKHVuaXRJZD86IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgY2FuZGlkYXRlVW5pdHMgPSBSLnNvcnRCeShcbiAgICAgICh1bml0KSA9PiB1bml0LmlkLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLnVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkICYmIHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPiAwKSxcbiAgICApXG4gICAgaWYgKHVuaXRJZClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIFIuaGVhZChjYW5kaWRhdGVVbml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgPiB1bml0SWQpKSA/P1xuICAgICAgICBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkIDwgdW5pdElkKSlcbiAgICAgIClcbiAgICBlbHNlIHJldHVybiBSLmhlYWQoY2FuZGlkYXRlVW5pdHMpXG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VycmVudFBsYXllciA9ICgpOiBQbGF5ZXIgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMud29ybGRTdGF0ZS5maW5kUGxheWVyKHRoaXMucGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHRocm93IGBDb3VsZCBub3QgZmluZCBwbGF5ZXIgd2l0aCBpZCAke3RoaXMucGxheWVySWR9YFxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5cbmV4cG9ydCBjb25zdCBjZW50ZXJQb2ludCA9IChoZXg6IEhleCk6IFBvaW50ID0+ICh7XG4gIHg6IGhleC54ICogTWF0aC5zcXJ0KDMpICsgKGhleC55ICogTWF0aC5zcXJ0KDMpKSAvIDIsXG4gIHk6IChoZXgueSAqIDMpIC8gMixcbn0pXG5cbmV4cG9ydCBjb25zdCBmcm9tUG9pbnQgPSAocG9pbnQ6IFBvaW50KTogSGV4ID0+IHtcbiAgY29uc3QgeCA9IChwb2ludC54ICogTWF0aC5zcXJ0KDMpKSAvIDMgLSBwb2ludC55IC8gM1xuICBjb25zdCB5ID0gKDIgKiBwb2ludC55KSAvIDNcbiAgcmV0dXJuIHJvdW5kKG5ldyBIZXgoeCwgeSkpXG59XG5cbmNvbnN0IHJvdW5kID0gKGhleDogSGV4KTogSGV4ID0+IHtcbiAgY29uc3QgcnggPSBNYXRoLnJvdW5kKGhleC54KVxuICBjb25zdCByeSA9IE1hdGgucm91bmQoaGV4LnkpXG4gIGNvbnN0IHJ6ID0gTWF0aC5yb3VuZChoZXgueilcblxuICBjb25zdCB4RGlmZiA9IE1hdGguYWJzKHJ4IC0gaGV4LngpXG4gIGNvbnN0IHlEaWZmID0gTWF0aC5hYnMocnkgLSBoZXgueSlcbiAgY29uc3QgekRpZmYgPSBNYXRoLmFicyhyeiAtIGhleC55KVxuXG4gIGlmICh4RGlmZiA+IHlEaWZmICYmIHhEaWZmID4gekRpZmYpIHJldHVybiBuZXcgSGV4KC1yeSAtIHJ6LCByeSlcbiAgZWxzZSBpZiAoeURpZmYgPiB6RGlmZikgcmV0dXJuIG5ldyBIZXgocngsIC1yeCAtIHJ6KVxuICBlbHNlIHJldHVybiBuZXcgSGV4KHJ4LCByeSlcbn1cblxuY29uc3QgaGV4QW5nbGUgPSBNYXRoLlBJIC8gM1xuY29uc3QgaGV4T2Zmc2V0ID0gTWF0aC5QSSAvIDZcblxuY29uc3QgaGV4Q29ybmVyID0gKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlciwgaTogbnVtYmVyKTogUG9pbnQgPT4ge1xuICBjb25zdCBhbmdsZVJhZGlhbnMgPSBoZXhBbmdsZSAqIGkgLSBoZXhPZmZzZXRcbiAgY29uc3QgeCA9IGNlbnRlci54ICsgc2l6ZSAqIE1hdGguY29zKGFuZ2xlUmFkaWFucylcbiAgY29uc3QgeSA9IGNlbnRlci55ICsgc2l6ZSAqIE1hdGguc2luKGFuZ2xlUmFkaWFucylcbiAgcmV0dXJuIHsgeCwgeSB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogaGV4Q29ybmVycyhjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPFBvaW50PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgeWllbGQgaGV4Q29ybmVyKGNlbnRlciwgc2l6ZSwgaSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWFwSGVpZ2h0ID0gKG1hcDogV29ybGRNYXApOiBudW1iZXIgPT4gKG1hcC5oZWlnaHQgKiAzKSAvIDJcblxuZXhwb3J0IGNvbnN0IGhleFdpZHRoID0gKGhleFNpemU6IG51bWJlcik6IG51bWJlciA9PiBoZXhTaXplICogTWF0aC5zcXJ0KDMpXG4iLCJpbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tICcuL2Jvb3QvYm9vdC1zY2VuZSdcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUvbWFpbi1tZW51LXNjZW5lJ1xuaW1wb3J0IHsgTG9iYnlTY2VuZSB9IGZyb20gJy4vbG9iYnkvbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBkZWZhdWx0IFtCb290U2NlbmUsIEdhbWVTY2VuZSwgTWFpbk1lbnVTY2VuZSwgTG9iYnlTY2VuZV1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENsaWVudCwgU2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL21lbnUtYnV0dG9uJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVTY2VuZURhdGEgfSBmcm9tICcuLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgeyBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvbWVzc2FnZXMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uIH0gZnJvbSAnLi4vLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuXG5leHBvcnQgY29uc3QgTE9CQllfU0NFTkVfS0VZID0gJ0xvYmJ5J1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYmJ5U2NlbmVEYXRhIHtcbiAgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwbGF5ZXJJZDogUGxheWVySWRcbiAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxufVxuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogTE9CQllfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgTG9iYnlTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBzZXJ2ZXJPckNsaWVudD86IFNlcnZlciB8IENsaWVudFxuICBwcml2YXRlIHBsYXllcklkPzogUGxheWVySWRcblxuICBwcml2YXRlIHBsYXllck5hbWVUZXh0czogTWFwPFBsYXllcklkLCBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSBzdGFydEdhbWVCdXR0b24/OiBNZW51QnV0dG9uXG4gIHByaXZhdGUgd2FpdGluZ0Zvckhvc3RUZXh0PzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSBsaXN0ZW5lcj86IFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgc3luYygpIHtcbiAgICBjb25zdCByZXF1aXJlZFBsYXllcklkcyA9IHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuaWQpXG4gICAgY29uc3QgY3VycmVudFBsYXllcklkcyA9IEFycmF5LmZyb20odGhpcy5wbGF5ZXJOYW1lVGV4dHMua2V5cygpKVxuICAgIGNvbnN0IHN1cnBsdXNQbGF5ZXJJZHMgPSBSLmRpZmZlcmVuY2UoY3VycmVudFBsYXllcklkcywgcmVxdWlyZWRQbGF5ZXJJZHMpXG4gICAgZm9yIChjb25zdCBwbGF5ZXJJZCBvZiBzdXJwbHVzUGxheWVySWRzKSB7XG4gICAgICB0aGlzLnBsYXllck5hbWVUZXh0cy5nZXQocGxheWVySWQpPy5kZXN0cm95KClcbiAgICB9XG4gICAgY29uc3QgbWlzc2luZ1BsYXllcklkcyA9IFIuZGlmZmVyZW5jZShyZXF1aXJlZFBsYXllcklkcywgY3VycmVudFBsYXllcklkcylcbiAgICBmb3IgKGNvbnN0IHBsYXllcklkIG9mIG1pc3NpbmdQbGF5ZXJJZHMpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHRoaXMud29ybGRTdGF0ZS5maW5kUGxheWVyKHBsYXllcklkKSFcbiAgICAgIGNvbnN0IHBsYXllclRleHQgPSB0aGlzLmFkZFxuICAgICAgICAudGV4dCgxMDAsIDAsIHBsYXllci5uYW1lLCB7XG4gICAgICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgICAgIGZpeGVkV2lkdGg6IDIwMCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBsYXllcklkID09IHRoaXMucGxheWVySWQgPyAnIzMzMzMzMycgOiAnIzAwMDAwMCcsXG4gICAgICAgIH0pXG4gICAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgICAgLnNldFBhZGRpbmcoMCwgMCwgMCwgMClcbiAgICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICBpZiAocGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW5zLmdldCgncmV4VGV4dEVkaXQnKSBhcyBhbnlcbiAgICAgICAgICAgIHBsdWdpbi5lZGl0KHBsYXllclRleHQsIHtcbiAgICAgICAgICAgICAgb25DbG9zZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB0aGlzLnBsYXllck5hbWVUZXh0cy5zZXQocGxheWVySWQsIHBsYXllclRleHQpXG4gICAgfVxuICAgIGxldCB5ID0gMTAwXG4gICAgZm9yIChjb25zdCBwbGF5ZXIgb2YgdGhpcy53b3JsZFN0YXRlLnBsYXllcnMpIHtcbiAgICAgIGNvbnN0IHBsYXllclRleHQgPSB0aGlzLnBsYXllck5hbWVUZXh0cy5nZXQocGxheWVyLmlkKSFcbiAgICAgIHBsYXllclRleHQuc2V0VGV4dChwbGF5ZXIubmFtZSkuc2V0WSh5KVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICBpZiAodGhpcy5zdGFydEdhbWVCdXR0b24pIHRoaXMuc3RhcnRHYW1lQnV0dG9uLnNldFkoeSlcbiAgICBpZiAodGhpcy53YWl0aW5nRm9ySG9zdFRleHQpIHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0LnNldFkoeSlcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgc2VydmVyT3JDbGllbnQsIHBsYXllcklkLCB3b3JsZFN0YXRlIH0gPSBzY2VuZURhdGFcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG5cbiAgICBpZiAoc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBDbGllbnQpIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoc2VydmVyT3JDbGllbnQsIHBsYXllcklkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdEFTZXJ2ZXIoc2VydmVyT3JDbGllbnQpXG4gICAgfVxuICAgIHRoaXMuY3JlYXRlQ29uc3RhbnRHYW1lT2JqZWN0cygpXG4gICAgdGhpcy5zeW5jKClcbiAgfVxuXG4gIHByaXZhdGUgYWN0QVNlcnZlciA9IChzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT4ge1xuICAgIHNlcnZlci5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXIud29ybGRTdGF0ZVxuICAgICAgdGhpcy5zeW5jKClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb25zdGFudEdhbWVPYmplY3RzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNClcbiAgICBpZiAodGhpcy5wbGF5ZXJJZCA9PSAxKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbiA9IG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMCwgJ1N0YXJ0IEdhbWUnLCAoKSA9PiB0aGlzLmhhbmRsZVN0YXJ0R2FtZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCA9IHRoaXMuYWRkLnRleHQoMTAwLCAwLCAnV2FpdGluZyBmb3IgaG9zdCB0byBzdGFydCB0aGUgZ2FtZS4uLicpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCwgcGxheWVySWQ6IFBsYXllcklkKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlU2VydmVyVG9DbGllbnRNZXNzYWdlKG1lc3NhZ2UsIGNsaWVudCwgcGxheWVySWQpXG4gICAgfVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgPSAobWVzc2FnZTogU2VydmVyVG9DbGllbnRNZXNzYWdlLCBjbGllbnQ6IENsaWVudCwgcGxheWVySWQ6IFBsYXllcklkKTogdm9pZCA9PiB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PSAnd29ybGRFdmVudCcpIHtcbiAgICAgIGNvbnN0IGV2ZW50OiBXb3JsZEV2ZW50ID0gZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmV2ZW50KVxuICAgICAgY29uc3Qgb2xkV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudChvbGRXb3JsZFN0YXRlLCBldmVudClcbiAgICAgIGlmIChldmVudC50eXBlID09ICdnYW1lU3RhcnRlZCcpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIpIHtcbiAgICAgICAgICBjbGllbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0ge1xuICAgICAgICAgIHNlcnZlck9yQ2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgd29ybGRTdGF0ZTogdGhpcy53b3JsZFN0YXRlLFxuICAgICAgICAgIHBsYXllcklkOiBwbGF5ZXJJZCxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3luYygpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VydmVyT3JDbGllbnQpIHtcbiAgICAgIHRocm93IGBVbmV4cGVjdGVkIGFic2VuY2Ugb2Ygc2VydmVyT3JDbGllbnRgXG4gICAgfVxuICAgIGlmICghdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgdGhyb3cgYFVuZXhwZWN0ZWQgYWJzZW5jZSBvZiBwbGF5ZXJJZGBcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuaGFuZGxlQWN0aW9uKHRoaXMucGxheWVySWQsIHsgdHlwZTogJ3N0YXJ0R2FtZScgfSlcbiAgICB9XG4gICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0ge1xuICAgICAgc2VydmVyT3JDbGllbnQ6IHRoaXMuc2VydmVyT3JDbGllbnQsXG4gICAgICB3b3JsZFN0YXRlOiB0aGlzLndvcmxkU3RhdGUsXG4gICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICB9XG4gICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tYWluLWdhbWUvbW9kZSdcbmltcG9ydCB7IE1heWJlLCBPcHRpb24sIHRvTWF5YmUsIHRvT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lU3RhdGUge1xuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbW9kZTogTW9kZVxuICByZWFkb25seSBzZWxlY3RlZEhleDogT3B0aW9uPEhleD5cbiAgcmVhZG9ubHkgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHBsYXllcklkLFxuICAgIG1vZGUsXG4gICAgc2VsZWN0ZWRIZXgsXG4gICAgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gZmFsc2UsXG4gIH06IHtcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBtb2RlOiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBPcHRpb248SGV4PlxuICAgIGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcj86IGJvb2xlYW5cbiAgfSkge1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICB0aGlzLnNlbGVjdGVkSGV4ID0gc2VsZWN0ZWRIZXhcbiAgICB0aGlzLmFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlciA9IGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlclxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBtb2RlID0gdGhpcy5tb2RlLFxuICAgIHNlbGVjdGVkSGV4ID0gdG9NYXliZSh0aGlzLnNlbGVjdGVkSGV4KSxcbiAgICBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSB0aGlzLmFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcixcbiAgfToge1xuICAgIHBsYXllcklkPzogUGxheWVySWRcbiAgICBtb2RlPzogTW9kZVxuICAgIHNlbGVjdGVkSGV4PzogTWF5YmU8SGV4PlxuICAgIGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcj86IGJvb2xlYW5cbiAgfSA9IHt9KTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICBuZXcgTG9jYWxHYW1lU3RhdGUoeyBwbGF5ZXJJZCwgbW9kZSwgc2VsZWN0ZWRIZXg6IHRvT3B0aW9uKHNlbGVjdGVkSGV4KSwgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyIH0pXG5cbiAgcHVibGljIHNldFNlbGVjdGVkSGV4ID0gKHNlbGVjdGVkSGV4OiBPcHRpb248SGV4Pik6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IHNlbGVjdGVkSGV4OiB0b01heWJlKHNlbGVjdGVkSGV4KSB9KVxuXG4gIHB1YmxpYyBzZXRNb2RlID0gKG1vZGU6IE1vZGUpOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLmNvcHkoeyBtb2RlIH0pXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUgPSBuZXcgTG9jYWxHYW1lU3RhdGUoe1xuICBwbGF5ZXJJZDogMSxcbiAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxufSlcbiIsImltcG9ydCB7IE1hcERpc3BsYXlPYmplY3QgfSBmcm9tICcuL21hcC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBVbml0RGlzcGxheU9iamVjdCB9IGZyb20gJy4vdW5pdC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IExvY2FsQWN0aW9uRGlzcGF0Y2hlciwgVGV4dHNEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi90ZXh0cy1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQW5pbWF0aW9uU3BlYyB7XG4gIHR5cGU6ICdtb3ZlJ1xuICB1bml0SWQ6IFVuaXRJZFxuICBmcm9tOiBIZXhcbiAgdG86IEhleFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbWJhdEFuaW1hdGlvblNwZWMge1xuICB0eXBlOiAnY29tYmF0J1xuICBhdHRhY2tlcjoge1xuICAgIHVuaXRJZDogVW5pdElkXG4gICAgbG9jYXRpb246IEhleFxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAga2lsbGVkOiBib29sZWFuXG4gIH1cbiAgZGVmZW5kZXI6IHtcbiAgICB1bml0SWQ6IFVuaXRJZFxuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGtpbGxlZDogYm9vbGVhblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblNwZWMgPSBNb3ZlQW5pbWF0aW9uU3BlYyB8IENvbWJhdEFuaW1hdGlvblNwZWNcblxuZXhwb3J0IGNsYXNzIERpc3BsYXlPYmplY3RzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgbWFwRGlzcGxheU9iamVjdDogTWFwRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHJlYWRvbmx5IHVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IHRleHRzRGlzcGxheU9iamVjdDogVGV4dHNEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBpc0FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIGFuaW1hdGlvbnM6IEFuaW1hdGlvblNwZWNbXSA9IFtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0ID0gbmV3IE1hcERpc3BsYXlPYmplY3Qoc2NlbmUsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdCA9IG5ldyBUZXh0c0Rpc3BsYXlPYmplY3QoXG4gICAgICBzY2VuZSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZSxcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUsXG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnQ6IFBvaW50KTogdm9pZCA9PiB0aGlzLm1hcERpc3BsYXlPYmplY3Q/LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50KVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB0aGlzLnRleHRzRGlzcGxheU9iamVjdC5oYXNDbGlja0hhbmRsZXJGb3IocG9pbnQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9IChcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBhbmltYXRpb246IE9wdGlvbjxBbmltYXRpb25TcGVjPixcbiAgKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFIuYXBwZW5kKGFuaW1hdGlvbikodGhpcy5hbmltYXRpb25zKVxuICAgICAgdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pLmZvckVhY2godGhpcy5tYW5hZ2VVbml0QXNCZWluZ0FuaW1hdGVkKVxuICAgICAgdGhpcy50cmlnZ2VyQW5pbWF0aW9ucygpXG4gICAgfVxuXG4gICAgdGhpcy5zeW5jVW5pdHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVW5pdHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5yZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCgpXG4gICAgY29uc3QgdW5pdHNUb1N5bmMgPSB0aGlzLndvcmxkU3RhdGUudW5pdHMuZmlsdGVyKCh1bml0KSA9PiAhdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5oYXModW5pdC5pZCkpXG4gICAgZm9yIChjb25zdCB1bml0IG9mIHVuaXRzVG9TeW5jKSB7XG4gICAgICBsZXQgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdC5pZClcbiAgICAgIGlmICghdW5pdERpc3BsYXlPYmplY3QpIHtcbiAgICAgICAgdW5pdERpc3BsYXlPYmplY3QgPSBuZXcgVW5pdERpc3BsYXlPYmplY3QodGhpcy5zY2VuZSwgdW5pdClcbiAgICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXQuaWQsIHVuaXREaXNwbGF5T2JqZWN0KVxuICAgICAgfVxuICAgICAgdW5pdERpc3BsYXlPYmplY3Quc3luY1NjZW5lKHVuaXQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdXJwbHVzVW5pdElkcyA9IFIuZGlmZmVyZW5jZShcbiAgICAgIEFycmF5LmZyb20odGhpcy51bml0RGlzcGxheU9iamVjdHMua2V5cygpKSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQuaWQpLFxuICAgIClcbiAgICBmb3IgKGNvbnN0IHVuaXRJZCBvZiBzdXJwbHVzVW5pdElkcykge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZCk/LmRlc3Ryb3koKVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJBbmltYXRpb25zID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzQW5pbWF0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXF1ZW5jZUFuaW1hdGlvbnMgPSAoKToge1xuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3c6IEFuaW1hdGlvblNwZWNbXVxuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlcjogQW5pbWF0aW9uU3BlY1tdXG4gIH0gPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMgPSBuZXcgU2V0PFVuaXRJZD4oKVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cgPSBbXVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciA9IFtdXG4gICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICBjb25zdCB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgY29uc3QgYWZmZWN0ZWRCeUVhcmxpZXJBbmltYXRpb25zID0gUi5hbnkoXG4gICAgICAgICh1bml0SWQpID0+IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMuaGFzKHVuaXRJZCksXG4gICAgICAgIHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLFxuICAgICAgKVxuICAgICAgaWYgKGFmZmVjdGVkQnlFYXJsaWVyQW5pbWF0aW9ucykge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIucHVzaChhbmltYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTm93LnB1c2goYW5pbWF0aW9uKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB1bml0SWQgb2YgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24pIHtcbiAgICAgICAgdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucy5hZGQodW5pdElkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQW5pbWF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICB3aGlsZSAodGhpcy5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgeyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfSA9IHRoaXMuc2VxdWVuY2VBbmltYXRpb25zKClcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cubWFwKHRoaXMucnVuQW5pbWF0aW9uKSlcbiAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdykge1xuICAgICAgICAgIHRoaXMucmVsZWFzZVVuaXRzRnJvbUJlaW5nQW5pbWF0ZWRXaGVyZU5vTG9uZ2VyTmVlZGVkKGFuaW1hdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbGVhc2VVbml0c0Zyb21CZWluZ0FuaW1hdGVkV2hlcmVOb0xvbmdlck5lZWRlZCA9IChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0SWRzSW5BbmltYXRpb24gPSB0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICBjb25zdCB1bml0SWRzSW5SZW1haW5pbmdBbmltYXRpb25zID0gdGhpcy5nZXRVbml0c0ludm9sdmVkSW5BbmltYXRpb25zKClcbiAgICBjb25zdCB1bml0SWRzVG9SZWxlYXNlID0gUi5kaWZmZXJlbmNlKHVuaXRJZHNJbkFuaW1hdGlvbiwgdW5pdElkc0luUmVtYWluaW5nQW5pbWF0aW9ucylcbiAgICB1bml0SWRzVG9SZWxlYXNlLmZvckVhY2godGhpcy5yZWxlYXNlVW5pdEZyb21CZWluZ0FuaW1hdGVkKVxuICB9XG5cbiAgcHJpdmF0ZSBtYW5hZ2VVbml0QXNCZWluZ0FuaW1hdGVkID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKGRpc3BsYXlPYmplY3QpIHtcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgICB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0SWQsIGRpc3BsYXlPYmplY3QpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlVW5pdEZyb21CZWluZ0FuaW1hdGVkID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZClcbiAgICBpZiAoIWRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHt1bml0SWR9YFxuICAgIHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgIGRpc3BsYXlPYmplY3Quc3luY1NjZW5lKHVuaXQpXG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdElkLCBkaXNwbGF5T2JqZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5T2JqZWN0LmRlc3Ryb3koKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VW5pdHNJbnZvbHZlZEluQW5pbWF0aW9ucyA9ICgpOiBVbml0SWRbXSA9PiBSLmNoYWluKHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24sIHRoaXMuYW5pbWF0aW9ucylcblxuICBwcml2YXRlIGdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uID0gKGFuaW1hdGlvbjogQW5pbWF0aW9uU3BlYyk6IFVuaXRJZFtdID0+IHtcbiAgICBzd2l0Y2ggKGFuaW1hdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgcmV0dXJuIFthbmltYXRpb24udW5pdElkXVxuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgcmV0dXJuIFthbmltYXRpb24uYXR0YWNrZXIudW5pdElkLCBhbmltYXRpb24uZGVmZW5kZXIudW5pdElkXVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuQW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbjogQW5pbWF0aW9uU3BlYyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bk1vdmVBbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5Db21iYXRBbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFuaW1hdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bk1vdmVBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBNb3ZlQW5pbWF0aW9uU3BlYyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChhbmltYXRpb24udW5pdElkKVxuICAgIGlmICghZGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke2FuaW1hdGlvbi51bml0SWR9YFxuICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuV0FMSylcbiAgICBhd2FpdCBkaXNwbGF5T2JqZWN0LnJ1bk1vdmVBbmltYXRpb24oYW5pbWF0aW9uLmZyb20sIGFuaW1hdGlvbi50bylcbiAgfVxuXG4gIHByaXZhdGUgcnVuQ29tYmF0QW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbjogQ29tYmF0QW5pbWF0aW9uU3BlYyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBhbmltYXRpb25cbiAgICBjb25zdCBhdHRhY2tlckRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChhdHRhY2tlci51bml0SWQpXG4gICAgaWYgKCFhdHRhY2tlckRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHthdHRhY2tlci51bml0SWR9YFxuICAgIGNvbnN0IGRlZmVuZGVyRGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGRlZmVuZGVyLnVuaXRJZClcbiAgICBpZiAoIWRlZmVuZGVyRGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke2RlZmVuZGVyLnVuaXRJZH1gXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5BVFRBQ0spXG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCB8fCBkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuREVBVEgpXG4gICAgfVxuICAgIGNvbnN0IHNpbXVsdGFuZW91c0FuaW1hdGlvbnMgPSBbXVxuICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuQXR0YWNrQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgc2ltdWx0YW5lb3VzQW5pbWF0aW9ucy5wdXNoKGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5EZWF0aEFuaW1hdGlvbigpKVxuICAgIH1cbiAgICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKCkpXG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKHNpbXVsdGFuZW91c0FuaW1hdGlvbnMpXG4gICAgYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgYXR0YWNrZXIuZGFtYWdlKVxuICAgIGRlZmVuZGVyRGlzcGxheU9iamVjdC5ydW5EYW1hZ2VBbmltYXRpb24oZGVmZW5kZXIubG9jYXRpb24sIGRlZmVuZGVyLmRhbWFnZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkUG9pbnRzLCBtdWx0aXBseVBvaW50LCBQb2ludCwgc3VidHJhY3RQb2ludHMgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IGNlbnRlclBvaW50LCBmcm9tUG9pbnQgfSBmcm9tICcuLi9oZXgtZ2VvbWV0cnknXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBDb21iYXRQYXJ0aWNpcGFudEluZm8sIENvbWJhdFdvcmxkRXZlbnQsIFVuaXRNb3ZlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uLCB0b01heWJlIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSwgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgQUxMX0FVRElPX0tFWVMsIEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBtYXBUb0xvY2FsQWN0aW9uIH0gZnJvbSAnLi9rZXlib2FyZC1tYXBwZXInXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25Qcm9jZXNzb3IsIExvY2FsQWN0aW9uUmVzdWx0IH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvbWVzc2FnZXMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uIH0gZnJvbSAnLi4vLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQW5pbWF0aW9uU3BlYywgRGlzcGxheU9iamVjdHMgfSBmcm9tICcuL2Rpc3BsYXktb2JqZWN0cydcbmltcG9ydCBQb2ludGVyID0gUGhhc2VyLklucHV0LlBvaW50ZXJcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgY29uc3QgR0FNRV9TQ0VORV9LRVkgPSAnR2FtZSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEdBTUVfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG4gIHBsYXllcklkOiBQbGF5ZXJJZFxuICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfU0laRSA9IDQ4XG5leHBvcnQgY29uc3QgRFJBV0lOR19PRkZTRVQgPSB7IHg6IDYwLCB5OiAxMDAgfVxuZXhwb3J0IGNvbnN0IGhleENlbnRlciA9IChoZXg6IEhleCk6IFBvaW50ID0+IGFkZFBvaW50cyhtdWx0aXBseVBvaW50KGNlbnRlclBvaW50KGhleCksIEhFWF9TSVpFKSwgRFJBV0lOR19PRkZTRVQpXG5cbmV4cG9ydCB0eXBlIEdhbWVJZCA9IHN0cmluZ1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSBzZXJ2ZXJPckNsaWVudD86IFNlcnZlciB8IENsaWVudFxuXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUgPSBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEVcblxuICBwcml2YXRlIGRpc3BsYXlPYmplY3RzPzogRGlzcGxheU9iamVjdHNcblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIC8vIENyZWF0ZVxuICAvLyAtLS0tLS1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgc2VydmVyT3JDbGllbnQsIHBsYXllcklkLCB3b3JsZFN0YXRlIH0gPSBzY2VuZURhdGFcbiAgICB0aGlzLnNldFVwU291bmQoKVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFLmNvcHkoeyBwbGF5ZXJJZCB9KVxuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBzZXJ2ZXJPckNsaWVudFxuICAgIGlmIChzZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcihzZXJ2ZXJPckNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RBc0NsaWVudChzZXJ2ZXJPckNsaWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzID0gbmV3IERpc3BsYXlPYmplY3RzKHRoaXMsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSwgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbilcbiAgICB0aGlzLmhhbmRsZU5ld1R1cm4oKVxuICAgIHRoaXMuc2V0VXBJbnB1dHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFNvdW5kID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goKGtleSkgPT4gdGhpcy5zb3VuZC5hZGQoa2V5KSlcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoYW5pbWF0aW9uPzogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlLCBhbmltYXRpb24pXG5cbiAgLy8gTmV0d29ya2luZ1xuICAvLyAtLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBjbGllbnRcbiAgICBjbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlcnZlclRvQ2xpZW50TWVzc2FnZSA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnam9pbmVkJzpcbiAgICAgIGNhc2UgJ3Jlam9pbmVkJzpcbiAgICAgICAgY29uc29sZS5sb2coJ1VuZXhwZWN0ZWQgbWVzc2FnZSBtaWQtZ2FtZScpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3b3JsZEV2ZW50JzpcbiAgICAgICAgdGhpcy5oYW5kbGVXb3JsZEV2ZW50KGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5ldmVudCkpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFjdEFzU2VydmVyID0gKHNlcnZlcjogU2VydmVyKTogdm9pZCA9PiB7XG4gICAgc2VydmVyLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlV29ybGRFdmVudClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXIud29ybGRTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luY1NlbmRUb1NlcnZlciA9IGFzeW5jIChhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCF0aGlzLnNlcnZlck9yQ2xpZW50KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIHNlcnZlck9yQ2xpZW50YFxuICAgIGlmICh0aGlzLnNlcnZlck9yQ2xpZW50IGluc3RhbmNlb2YgU2VydmVyKSB7XG4gICAgICB0aGlzLnNlcnZlck9yQ2xpZW50LmhhbmRsZUFjdGlvbih0aGlzLnBsYXllcklkLCBhY3Rpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuc2VuZEFjdGlvbih0aGlzLnBsYXllcklkLCBhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgLy8gSW5wdXQgaGFuZGxlcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIHNldFVwSW5wdXRzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuaW5wdXQubW91c2UuZGlzYWJsZUNvbnRleHRNZW51KClcbiAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkpXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb24gPSBtYXBUb0xvY2FsQWN0aW9uKGV2ZW50LCB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgaWYgKGxvY2FsQWN0aW9uKSB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKGxvY2FsQWN0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMb2NhbEFjdGlvbiA9IChsb2NhbEFjdGlvbjogTG9jYWxBY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zdCBsb2NhbEFjdGlvblByb2Nlc3NvciA9IG5ldyBMb2NhbEFjdGlvblByb2Nlc3Nvcih0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxBY3Rpb25Qcm9jZXNzb3IucHJvY2Vzcyhsb2NhbEFjdGlvbilcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB0aGlzLmVuYWN0TG9jYWxBY3Rpb25SZXN1bHQocmVzdWx0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW5hY3RMb2NhbEFjdGlvblJlc3VsdCA9IChyZXN1bHQ6IExvY2FsQWN0aW9uUmVzdWx0KTogdm9pZCA9PiB7XG4gICAgaWYgKHJlc3VsdC5uZXdMb2NhbEdhbWVTdGF0ZSkge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHJlc3VsdC5uZXdMb2NhbEdhbWVTdGF0ZVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgIH1cbiAgICBpZiAocmVzdWx0LndvcmxkQWN0aW9uKSB7XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyOiB0cnVlIH0pXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICAgIHRoaXMuYXN5bmNTZW5kVG9TZXJ2ZXIocmVzdWx0LndvcmxkQWN0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcjogZmFsc2UgfSlcbiAgICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvaW50ZXJNb3ZlID0gKHBvaW50ZXI6IFBvaW50ZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwb2ludGVyUG9pbnQgPSB7IHg6IHBvaW50ZXIueCwgeTogcG9pbnRlci55IH1cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5oYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvaW50ZXJEb3duID0gKHBvaW50ZXI6IFBvaW50ZXIpOiB2b2lkID0+IHtcbiAgICAvLyBJZ25vcmUgY2xpY2tzIG9uIHRoZXNlIGFzIHRoZXkgaGF2ZSB0aGVpciBvd24gaGFuZGxlcnNcbiAgICBjb25zdCBwcmVzc2VkUG9pbnQgPSB7IHg6IHBvaW50ZXIueCwgeTogcG9pbnRlci55IH1cbiAgICBpZiAodGhpcy5kaXNwbGF5T2JqZWN0cz8uaGFzQ2xpY2tIYW5kbGVyRm9yKHByZXNzZWRQb2ludCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBoZXggPSBmcm9tUG9pbnQobXVsdGlwbHlQb2ludChzdWJ0cmFjdFBvaW50cyhwcmVzc2VkUG9pbnQsIERSQVdJTkdfT0ZGU0VUKSwgMSAvIEhFWF9TSVpFKSlcbiAgICBpZiAocG9pbnRlci5idXR0b24gPT0gMikge1xuICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdnb0hleCcsIGhleCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUxlZnRDbGljayhoZXgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMZWZ0Q2xpY2sgPSAoaGV4OiBIZXgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24oeyB0eXBlOiAnc2VsZWN0SGV4JywgaGV4IH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24oeyB0eXBlOiAnY29tcGxldGVNb3ZlJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4IH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2NvbXBsZXRlQXR0YWNrJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4IH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICAvLyBTeW5jXG4gIC8vIC0tLS1cblxuICAvLyBIYW5kbGUgd29ybGQgZXZlbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBvbGRXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudChvbGRXb3JsZFN0YXRlLCBldmVudClcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgICAgdGhpcy5oYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50KGV2ZW50LCBvbGRXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21iYXRXb3JsZEV2ZW50KGV2ZW50LCBvbGRXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRW5kZWRUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJFbmRlZFR1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbmV3VHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlTmV3VHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOZXdUdXJuID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoQWN0aW9uUG9pbnRzKClcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgIHNlbGVjdGVkSGV4OiB0b01heWJlKHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pLFxuICAgIH0pXG4gICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5ORVdfVFVSTilcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVuaXRNb3ZlZFdvcmxkRXZlbnQgPSAoZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQsIG9sZFdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHVuaXRJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgY29uc3Qgd2FzUHJldmlvdXNseVNlbGVjdGVkID1cbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXggJiYgb2xkV29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCk/LmlkID09IHVuaXRJZFxuICAgIGlmICh3YXNQcmV2aW91c2x5U2VsZWN0ZWQgJiYgdW5pdC5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEhleCA9IHRoaXMuY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sodW5pdElkLCB0bylcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoe1xuICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgIHNlbGVjdGVkSGV4OiB0b01heWJlKG5ld1NlbGVjdGVkSGV4KSxcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuc3luY1NjZW5lKHsgdHlwZTogJ21vdmUnLCB1bml0SWQsIGZyb20sIHRvIH0pXG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrID0gKHVuaXRJZDogVW5pdElkLCBkZWZhdWx0TG9jYXRpb246IEhleCk6IE9wdGlvbjxIZXg+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgLy8gUmV0YWluIHNlbGVjdGlvbiBpZiB1bml0IHN0aWxsIGV4aXN0cyBhbmQgd2Ugc3RpbGwgaGF2ZSBhY3Rpb24gcG9pbnRzLCBlbHNlIHNlbGVjdCBuZXh0IHVuaXQgKG9yIG5vdGhpbmcgaWYgdGhlcmUgaXNuJ3Qgb25lKVxuICAgIGxldCBuZXdTZWxlY3RlZEhleFxuICAgIGlmICghdW5pdCB8fCB1bml0LmFjdGlvblBvaW50cy5jdXJyZW50ID09IDApIHtcbiAgICAgIGNvbnN0IG5leHRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhBY3Rpb25Qb2ludHModW5pdElkKVxuICAgICAgbmV3U2VsZWN0ZWRIZXggPSBuZXh0VW5pdD8ubG9jYXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2VsZWN0ZWRIZXggPSBkZWZhdWx0TG9jYXRpb25cbiAgICB9XG4gICAgcmV0dXJuIG5ld1NlbGVjdGVkSGV4XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbWJhdFdvcmxkRXZlbnQgPSAoZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQsIG9sZFdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpID0+IHtcbiAgICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gZXZlbnRcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbkFmdGVyQ29tYmF0KGF0dGFja2VyLCBkZWZlbmRlciwgb2xkV29ybGRTdGF0ZSlcbiAgICB0aGlzLnN5bmNTY2VuZSh7XG4gICAgICB0eXBlOiAnY29tYmF0JyxcbiAgICAgIGF0dGFja2VyLFxuICAgICAgZGVmZW5kZXIsXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQgPSAoXG4gICAgYXR0YWNrZXI6IENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgICBkZWZlbmRlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIG9sZFdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICkgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCA9IG5ldyBDb21iaW5lZFN0YXRlKG9sZFdvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpLmZpbmRTZWxlY3RlZFVuaXQoKT8uaWRcbiAgICBpZiAocHJldmlvdXNseVNlbGVjdGVkVW5pdElkID09IGF0dGFja2VyLnVuaXRJZCAmJiBhdHRhY2tlci5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEhleCA9IHRoaXMuY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2soYXR0YWNrZXIudW5pdElkLCBhdHRhY2tlci5sb2NhdGlvbilcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoe1xuICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgIHNlbGVjdGVkSGV4OiB0b01heWJlKG5ld1NlbGVjdGVkSGV4KSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlc2VsZWN0IHVuaXQga2lsbGVkIGJ5IGFub3RoZXIgcGxheWVyXG4gICAgICBpZiAoZGVmZW5kZXIua2lsbGVkICYmIGRlZmVuZGVyLnVuaXRJZCA9PSBwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgJiYgZGVmZW5kZXIucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgICAgc2VsZWN0ZWRIZXg6IG5vdGhpbmcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyTW92ZU1vZGUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYSc6XG4gICAgICBpZiAobW9kZS50eXBlID09ICdzZWxlY3RIZXgnKSByZXR1cm4geyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJyB9XG4gICAgICBicmVha1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoKVxuICAgICAgY2FzZSAnY29tcGxldGVNb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVNb3ZlKGFjdGlvbi51bml0SWQsIGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdjb21wbGV0ZUF0dGFjayc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNvbXBsZXRlQXR0YWNrKGFjdGlvbi51bml0SWQsIGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3ROZXh0VW5pdCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgY29uc3QgdW5pdFRvU2VsZWN0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhBY3Rpb25Qb2ludHMoc2VsZWN0ZWRVbml0Py5pZClcbiAgICBpZiAodW5pdFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICAgICAgLnNldFNlbGVjdGVkSGV4KHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pXG4gICAgICAgIC5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiBuZXdMb2NhbEdhbWVTdGF0ZSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFib3J0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBzZWxlY3RlZEhleDogbm90aGluZyB9KSB9XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSkgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRIZXggPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gICAgaWYgKHNlbGVjdGVkSGV4KSByZXR1cm4gdGhpcy5tb3ZlT3JBdHRhY2tIZXgoc2VsZWN0ZWRIZXguZ28oZGlyZWN0aW9uKSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR29IZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHRoaXMubW92ZU9yQXR0YWNrSGV4KGhleClcblxuICBwcml2YXRlIG1vdmVPckF0dGFja0hleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAoc2VsZWN0ZWRVbml0KSB7XG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5Nb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVUb0hleChzZWxlY3RlZFVuaXQsIGhleClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleChzZWxlY3RlZFVuaXQsIGhleClcbiAgICAgIGlmICh0YXJnZXRVbml0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChzZWxlY3RlZFVuaXQsIHRhcmdldFVuaXQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2tIZXggPSAoYXR0YWNrZXI6IFVuaXQsIGRlZmVuZGVyOiBVbml0KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ2F0dGFjaycsXG4gICAgICBhdHRhY2tlcjogeyB1bml0SWQ6IGF0dGFja2VyLmlkLCBsb2NhdGlvbjogYXR0YWNrZXIubG9jYXRpb24gfSxcbiAgICAgIGRlZmVuZGVyOiB7IHVuaXRJZDogZGVmZW5kZXIuaWQsIGxvY2F0aW9uOiBkZWZlbmRlci5sb2NhdGlvbiB9LFxuICAgIH0sXG4gIH0pXG5cbiAgcHJpdmF0ZSBtb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgZGVzdGluYXRpb246IEhleCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdtb3ZlVW5pdCcsXG4gICAgICB1bml0SWQ6IHVuaXQuaWQsXG4gICAgICB0bzogZGVzdGluYXRpb24sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIGhhbmRsZUVuZFR1cm4gPSAoKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVybikge1xuICAgICAgcmV0dXJuIHsgd29ybGRBY3Rpb246IHsgdHlwZTogJ2VuZFR1cm4nIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSkge1xuICAgICAgY29uc3QgbmV3TW9kZTogTW9kZSA9IHsgdHlwZTogJ2F0dGFjaycsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZShuZXdNb2RlKVxuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVNb3ZlID0gKHVuaXRJZDogVW5pdElkLCBkZXN0aW5hdGlvbjogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKSkgcmV0dXJuIHRoaXMubW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21wbGV0ZUF0dGFjayA9ICh1bml0SWQ6IFVuaXRJZCwgdGFyZ2V0SGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleChhdHRhY2tlciwgdGFyZ2V0SGV4KVxuICAgIGlmIChkZWZlbmRlcikgcmV0dXJuIHRoaXMuYXR0YWNrSGV4KGF0dGFja2VyLCBkZWZlbmRlcilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0SGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRIZXggPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgLy8gSWYgY2xpY2sgaXMgb3V0IG9mIGJvdW5kcywgZGVzZWxlY3QgYW55IHNlbGVjdGVkIGhleFxuICAgICAgaWYgKHNlbGVjdGVkSGV4KSB7XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZCkgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRIZXggJiYgc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIC8vIGlmIHNlbGVjdGVkIGhleCBpcyBjbGlja2VkLCB0b2dnbGUgc2VsZWN0aW9uIG9mZlxuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0U2VsZWN0ZWRIZXgodW5kZWZpbmVkKSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KGhleCkgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgRFJBV0lOR19PRkZTRVQsIEhFWF9TSVpFLCBoZXhDZW50ZXIgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBtdWx0aXBseVBvaW50LCBwb2ludCwgUG9pbnQsIHN1YnRyYWN0UG9pbnRzIH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBmcm9tUG9pbnQsIGhleENvcm5lcnMgfSBmcm9tICcuLi9oZXgtZ2VvbWV0cnknXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQge1xuICBDb2xvdXJOdW1iZXIsXG4gIERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSLFxuICBIT1ZFUl9USUxFX0NPTE9VUixcbiAgU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSLFxuICBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUixcbn0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCBQb2x5Z29uID0gUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb25cblxudHlwZSBUaWxlU3RhdGUgPSAnZGVmYXVsdCcgfCAnc2VsZWN0ZWQnIHwgJ3RhcmdldGFibGUnXG5cbmV4cG9ydCBjbGFzcyBNYXBEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGhleFBvbHlnb25zOiBNYXA8c3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4gPSBuZXcgTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+KClcbiAgcHJpdmF0ZSBwcmV2aW91c0hvdmVySGV4PzogSGV4XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGZvciAoY29uc3QgaGV4IG9mIHRoaXMud29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSkgdGhpcy5jcmVhdGVIZXgoaGV4KVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIZXggPSAoaGV4OiBIZXgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwb2x5Z29uQ2VudGVyID0gaGV4Q2VudGVyKGhleClcbiAgICB0aGlzLnNjZW5lLmFkZC5pbWFnZShwb2x5Z29uQ2VudGVyLngsIHBvbHlnb25DZW50ZXIueSwgJ2dyYXNzJykuc2V0U2NhbGUoMC42NSkuc2V0RGVwdGgoLTUpXG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMuYWRkUG9seWdvbihwb2x5Z29uQ2VudGVyLCBIRVhfU0laRSlcbiAgICB0aGlzLmhleFBvbHlnb25zLnNldChoZXgudG9TdHJpbmcoKSwgcG9seWdvbilcbiAgfVxuXG4gIHByaXZhdGUgYWRkUG9seWdvbihjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIpOiBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbiB7XG4gICAgY29uc3QgdmVydGljZXMgPSBbLi4uaGV4Q29ybmVycyhwb2ludCgwLCAwKSwgc2l6ZSldXG4gICAgcmV0dXJuIHRoaXMuc2NlbmUuYWRkLnBvbHlnb24oY2VudGVyLngsIGNlbnRlci55LCB2ZXJ0aWNlcykuc2V0T3JpZ2luKDAsIDApLnNldEZpbGxTdHlsZSgweDAwMDAwLCAwKVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgZm9yIChjb25zdCBoZXggb2YgdGhpcy53b3JsZFN0YXRlLm1hcC5nZXRNYXBIZXhlcygpKSB7XG4gICAgICB0aGlzLnN5bmNUaWxlKGhleClcbiAgICB9XG4gIH1cblxuICAvLyBEZXB0aHNcbiAgLy8gLTUgLSBpbWFnZVxuICAvLyAtNCAtIGRlZmF1bHQgYm9yZGVyXG4gIC8vIC0zIC0gdGFyZ2V0YWJsZSBib3JkZXJcbiAgLy8gLTIgLSBzZWxlY3RlZFxuICAvLyAtMSAtIGhvdmVyXG5cbiAgcHJpdmF0ZSBnZXREZXB0aCA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IG51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gLTRcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gLTNcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIC0yXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVGlsZSA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICB0aGlzLmdldEhleFBvbHlnb24oaGV4KS5zZXRTdHJva2VTdHlsZSgzLCB0aGlzLmdldEhleEJvcmRlckNvbG91cih0aWxlU3RhdGUpKS5zZXREZXB0aCh0aGlzLmdldERlcHRoKHRpbGVTdGF0ZSkpXG4gIH1cblxuICBwcml2YXRlIGdldEhleFBvbHlnb24gPSAoaGV4OiBIZXgpOiBQb2x5Z29uID0+IHtcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5oZXhQb2x5Z29ucy5nZXQoaGV4LnRvU3RyaW5nKCkpXG4gICAgaWYgKCFwb2x5Z29uKSB0aHJvdyBgTm8gcG9seWdvbiBmb3VuZCBmb3IgJHtoZXh9YFxuICAgIHJldHVybiBwb2x5Z29uXG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVRpbGVTdGF0ZSA9IChoZXg6IEhleCk6IFRpbGVTdGF0ZSA9PiB7XG4gICAgY29uc3QgeyBwbGF5ZXJJZCwgc2VsZWN0ZWRIZXgsIG1vZGUgfSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICBpZiAoc2VsZWN0ZWRIZXggJiYgc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfVxuICAgIGlmIChtb2RlLnR5cGUgPT0gJ21vdmVVbml0Jykge1xuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXgpICYmICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpKSB7XG4gICAgICAgIHJldHVybiAndGFyZ2V0YWJsZSdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PSAnYXR0YWNrJykge1xuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXgpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgIT0gcGxheWVySWQpIHtcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldGFibGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdkZWZhdWx0J1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZXhCb3JkZXJDb2xvdXIgPSAodGlsZVN0YXRlOiBUaWxlU3RhdGUpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIHN3aXRjaCAodGlsZVN0YXRlKSB7XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEhvdmVySGV4Qm9yZGVyQ29sb3VyID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIGhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludDogUG9pbnQpOiB2b2lkIHtcbiAgICBjb25zdCBoZXggPSBmcm9tUG9pbnQobXVsdGlwbHlQb2ludChzdWJ0cmFjdFBvaW50cyhwb2ludGVyUG9pbnQsIERSQVdJTkdfT0ZGU0VUKSwgMSAvIEhFWF9TSVpFKSlcbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVySGV4ICYmIHRoaXMucHJldmlvdXNIb3ZlckhleC5lcXVhbHMoaGV4KSkgcmV0dXJuXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlckhleCkge1xuICAgICAgdGhpcy5zeW5jVGlsZSh0aGlzLnByZXZpb3VzSG92ZXJIZXgpXG4gICAgICB0aGlzLnByZXZpb3VzSG92ZXJIZXggPSB1bmRlZmluZWRcbiAgICB9XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyhoZXgpKSB7XG4gICAgICBjb25zdCB0aWxlU3RhdGUgPSB0aGlzLmNhbGN1bGF0ZVRpbGVTdGF0ZShoZXgpXG4gICAgICB0aGlzLmdldEhleFBvbHlnb24oaGV4KVxuICAgICAgICAuc2V0U3Ryb2tlU3R5bGUodGlsZVN0YXRlID09PSAnZGVmYXVsdCcgPyAyIDogNCwgdGhpcy5nZXRIb3ZlckhleEJvcmRlckNvbG91cih0aWxlU3RhdGUpKVxuICAgICAgICAuc2V0RGVwdGgoLTEpXG4gICAgICB0aGlzLnByZXZpb3VzSG92ZXJIZXggPSBoZXhcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IGhleFdpZHRoLCBtYXBIZWlnaHQgfSBmcm9tICcuLi9oZXgtZ2VvbWV0cnknXG5pbXBvcnQgeyBBQ1RJT05fVEVYVF9DT0xPVVIsIEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiwgUExBWUVSX1RJTlRTIH0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSB9IGZyb20gJy4vZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5cbmV4cG9ydCB0eXBlIExvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IChhY3Rpb246IExvY2FsQWN0aW9uKSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2NlbmUuYWRkXG4gICAgICAuaW1hZ2UoMzYsIDMyLCAnbGxhbWEnKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1tsb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMucGxheWVyVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoNzAsIDIwLCAnJylcbiAgICB0aGlzLmhvdXJnbGFzcyA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDg3NSwgMzAsICdob3VyZ2xhc3MnKS5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgIERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLFxuICAgICAgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksXG4gICAgICAnJyxcbiAgICApXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDI1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDUwLCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDcwMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksICcnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbmRUdXJuJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0Q2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnYWJvcnQnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQyQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJyB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgZm9yIChjb25zdCBvYmogb2YgW3RoaXMuZW5kVHVyblRleHQsIHRoaXMuYWN0aW9uVGV4dCwgdGhpcy5hY3Rpb25UZXh0Ml0pXG4gICAgICBpZiAob2JqLmdldEJvdW5kcygpLmNvbnRhaW5zKHBvaW50LngsIHBvaW50LnkpKSByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5ob3VyZ2xhc3Muc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5hY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIpXG4gICAgdGhpcy5wbGF5ZXJUZXh0LnNldFRleHQoYCR7dGhpcy5jb21iaW5lZFN0YXRlLmdldEN1cnJlbnRQbGF5ZXIoKS5uYW1lfSAtIFR1cm4gJHt0aGlzLndvcmxkU3RhdGUudHVybn1gKVxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnJylcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuc3luY1NlbGVjdEhleE1vZGVUZXh0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5zeW5jTW92ZVVuaXRNb2RlVGV4dChtb2RlLnVuaXRJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuc3luY0F0dGFja01vZGVUZXh0KG1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVybikge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdXYWl0aW5nIGZvciBuZXh0IHR1cm4uLi4nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ0VuZCBUdXJuIChTaGlmdCArIEVudGVyKScpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jQXR0YWNrTW9kZVRleHQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCh0aGlzLmRlc2NyaWJlVW5pdCh1bml0KSlcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnQ2xpY2sgdW5pdCB0byBhdHRhY2sgKG9yIEVTQyB0byBjYW5jZWwpJylcbiAgfVxuXG4gIHByaXZhdGUgc3luY01vdmVVbml0TW9kZVRleHQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCh0aGlzLmRlc2NyaWJlVW5pdCh1bml0KSlcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnQ2xpY2sgdGlsZSB0byBtb3ZlIHRvIChvciBFU0MgdG8gY2FuY2VsKScpXG4gIH1cblxuICBwcml2YXRlIHN5bmNTZWxlY3RIZXhNb2RlVGV4dCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQoc2VsZWN0ZWRVbml0KSlcbiAgICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlKHNlbGVjdGVkVW5pdCkpIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCdNb3ZlIChtKScpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHNlbGVjdGVkVW5pdCkpIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnQXR0YWNrIChhKScpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXNjcmliZVVuaXQgPSAodW5pdDogVW5pdCk6IHN0cmluZyA9PlxuICAgIGAke3VuaXQubmFtZX0gLSBMbGFtYSB3YXJyaW9yIC0gSFAgJHt1bml0LmhpdFBvaW50cy5jdXJyZW50fS8ke3VuaXQuaGl0UG9pbnRzLm1heH0gLSBhY3Rpb25zICR7dW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudH0vJHt1bml0LmFjdGlvblBvaW50cy5tYXh9YFxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBoZXhDZW50ZXIgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBIRUFMVEhfQk9SREVSX0NPTE9VUiwgSEVBTFRIX0VNUFRZX0NPTE9VUiwgSEVBTFRIX0ZVTExfQ09MT1VSLCBQTEFZRVJfVElOVFMgfSBmcm9tICcuLi9jb2xvdXJzJ1xuaW1wb3J0IHsgYWRkUG9pbnRzLCBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgcGxheVR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbC9waGFzZXIvdHdlZW4tdXRpbHMnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuY29uc3QgSEVBTFRIX0JBUl9XSURUSCA9IDUwXG5jb25zdCBIRUFMVEhfQkFSX0hFSUdIVCA9IDEyXG5jb25zdCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MgPSAyXG5jb25zdCBJTUFHRV9PRkZTRVQgPSB7IHg6IDAsIHk6IDQgfVxuY29uc3QgSEVBTFRIX0JBUl9PRkZTRVQgPSB7IHg6IC0yNSwgeTogLTQwIH1cblxuZXhwb3J0IGNsYXNzIFVuaXREaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgdW5pdDogVW5pdFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhCYXJHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzXG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgdW5pdDogVW5pdCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICB0aGlzLmltYWdlID0gc2NlbmUuYWRkXG4gICAgICAuaW1hZ2UoMCwgMCwgJ2xsYW1hJylcbiAgICAgIC5zZXRTY2FsZSgwLjgpXG4gICAgICAuc2V0VGludChQTEFZRVJfVElOVFNbdGhpcy51bml0LnBsYXllcklkIC0gMV0pXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcyA9IHNjZW5lLmFkZC5ncmFwaGljcygpXG4gIH1cblxuICBwcml2YXRlIGdldEhlYWx0aEJhclBvc2l0aW9uID0gKHBvaW50OiBQb2ludCk6IFBvaW50ID0+IGFkZFBvaW50cyhwb2ludCwgSEVBTFRIX0JBUl9PRkZTRVQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh1bml0OiBVbml0KTogdm9pZCA9PiB7XG4gICAgYXNzZXJ0KHVuaXQuaWQgPT0gdGhpcy51bml0LmlkKVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICBjb25zdCB1bml0UG9pbnQgPSBoZXhDZW50ZXIodGhpcy51bml0LmxvY2F0aW9uKVxuICAgIHRoaXMuaW1hZ2Uuc2V0UG9zaXRpb24odW5pdFBvaW50LnggKyBJTUFHRV9PRkZTRVQueCwgdW5pdFBvaW50LnkgKyBJTUFHRV9PRkZTRVQueSlcbiAgICB0aGlzLnN5bmNIZWFsdGhCYXIodW5pdFBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jSGVhbHRoQmFyID0gKHVuaXRQb2ludDogUG9pbnQpID0+IHtcbiAgICBjb25zdCBoZWFsdGhCYXJQb3NpdGlvbiA9IHRoaXMuZ2V0SGVhbHRoQmFyUG9zaXRpb24odW5pdFBvaW50KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3Muc2V0UG9zaXRpb24oaGVhbHRoQmFyUG9zaXRpb24ueCwgaGVhbHRoQmFyUG9zaXRpb24ueSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmNsZWFyKClcblxuICAgIC8vIERyYXcgYm9yZGVyXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IEhFQUxUSF9CQVJfV0lEVEggLSAyICogSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTXG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBIRUFMVEhfQkFSX0hFSUdIVCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfQk9SREVSX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KDAsIDAsIEhFQUxUSF9CQVJfV0lEVEgsIEhFQUxUSF9CQVJfSEVJR0hUKVxuXG4gICAgLy8gRHJhdyBlbXB0eSBiYWNrZ3JvdW5kXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0VNUFRZX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcblxuICAgIC8vIEZpbGwgaW4gYmFyXG4gICAgY29uc3QgeyBjdXJyZW50LCBtYXggfSA9IHRoaXMudW5pdC5oaXRQb2ludHNcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRlVMTF9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdChcbiAgICAgIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUyxcbiAgICAgIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUyxcbiAgICAgIChpbm5lcldpZHRoICogY3VycmVudCkgLyBtYXgsXG4gICAgICBpbm5lckhlaWdodCxcbiAgICApXG4gIH1cblxuICBwdWJsaWMgcnVuTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBNT1ZFX0FOSU1BVElPTl9EVVJBVElPTiA9IDUwMFxuICAgIGNvbnN0IGJlZm9yZUNvb3JkcyA9IGhleENlbnRlcihmcm9tKVxuICAgIGNvbnN0IGFmdGVyQ29vcmRzID0gaGV4Q2VudGVyKHRvKVxuICAgIHRoaXMuaW1hZ2Uuc2V0RmxpcFgoYWZ0ZXJDb29yZHMueCA8IGJlZm9yZUNvb3Jkcy54KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmltYWdlLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBJTUFHRV9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IE1PVkVfQU5JTUFUSU9OX0RVUkFUSU9OLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogTU9WRV9BTklNQVRJT05fRFVSQVRJT04sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3BsYXlUd2Vlbih0d2VlbjEpLCBwbGF5VHdlZW4odHdlZW4yKV0pXG4gIH1cblxuICBwdWJsaWMgcnVuRGVhdGhBbmltYXRpb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgdHdlZW4gPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogW3RoaXMuaW1hZ2UsIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3NdLFxuICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIGF3YWl0IHBsYXlUd2Vlbih0d2VlbilcbiAgfVxuXG4gIHB1YmxpYyBydW5EYW1hZ2VBbmltYXRpb24gPSBhc3luYyAobG9jYXRpb246IEhleCwgZGFtYWdlOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBsb2NhdGlvblBvaW50ID0gaGV4Q2VudGVyKGxvY2F0aW9uKVxuICAgIGNvbnN0IHRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQobG9jYXRpb25Qb2ludC54LCBsb2NhdGlvblBvaW50LnksIGRhbWFnZS50b1N0cmluZygpLCB7XG4gICAgICAgIGNvbG9yOiAnI2ZmODg4OCcsXG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDIsXG4gICAgICB9KVxuICAgICAgLnNldEZvbnRTaXplKDI2KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRleHQsXG4gICAgICB5OiB7XG4gICAgICAgIGZyb206IGxvY2F0aW9uUG9pbnQueSAtIDUwLFxuICAgICAgICB0bzogbG9jYXRpb25Qb2ludC55IC0gNzUsXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICBlYXNlOiAnTGluZWFyJyxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgYWxwaGE6IHsgZnJvbTogMSwgdG86IDAgfSxcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgZWFzZTogJ0N1YmljLmluJyxcbiAgICB9KVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtwbGF5VHdlZW4odHdlZW4xKSwgcGxheVR3ZWVuKHR3ZWVuMildKVxuICAgIHRleHQuZGVzdHJveSgpXG4gIH1cblxuICBwdWJsaWMgcnVuQXR0YWNrQW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGJlZm9yZUNvb3JkcyA9IGhleENlbnRlcihmcm9tKVxuICAgIGNvbnN0IGFmdGVyQ29vcmRzID0gaGV4Q2VudGVyKHRvKVxuICAgIHRoaXMuaW1hZ2Uuc2V0RmxpcFgoYWZ0ZXJDb29yZHMueCA8IGJlZm9yZUNvb3Jkcy54KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmltYWdlLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBJTUFHRV9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtwbGF5VHdlZW4odHdlZW4xKSwgcGxheVR3ZWVuKHR3ZWVuMildKVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zY2VuZS50d2VlbnMua2lsbFR3ZWVuc09mKFt0aGlzLmhlYWx0aEJhckdyYXBoaWNzLCB0aGlzLmltYWdlXSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmRlc3Ryb3koKVxuICAgIHRoaXMuaW1hZ2UuZGVzdHJveSgpXG4gIH1cbn1cblxudHlwZSBUd2VlblhZID0geyB4OiB7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9OyB5OiB7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9IH1cblxuY29uc3QgY2FsY3VsYXRlVHdlZW5YWSA9IChmcm9tOiBQb2ludCwgdG86IFBvaW50LCBvZmZzZXQ6IFBvaW50KTogVHdlZW5YWSA9PiAoe1xuICB4OiB7XG4gICAgZnJvbTogZnJvbS54ICsgb2Zmc2V0LngsXG4gICAgdG86IHRvLnggKyBvZmZzZXQueCxcbiAgfSxcbiAgeToge1xuICAgIGZyb206IGZyb20ueSArIG9mZnNldC55LFxuICAgIHRvOiB0by55ICsgb2Zmc2V0LnksXG4gIH0sXG59KVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vLi4vdWkvbWVudS1idXR0b24nXG5pbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBvcGVuV29ybGRFdmVudERiIH0gZnJvbSAnLi4vLi4vZGIvd29ybGQtZXZlbnQtZGInXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IHNldFVybEluZm8gfSBmcm9tICcuLi9ib290L2Jvb3Qtc2NlbmUnXG5pbXBvcnQgeyBMT0JCWV9TQ0VORV9LRVksIExvYmJ5U2NlbmVEYXRhIH0gZnJvbSAnLi4vbG9iYnkvbG9iYnktc2NlbmUnXG5cbmV4cG9ydCBjb25zdCBNQUlOX01FTlVfU0NFTkVfS0VZID0gJ01haW5NZW51J1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogTUFJTl9NRU5VX1NDRU5FX0tFWSxcbn1cblxuZXhwb3J0IGNsYXNzIE1haW5NZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5hZGQudGV4dCgxMDAsIDUwLCAnTGxhbWEgV2FycycsIHsgZmlsbDogJyNGRkZGRkYnIH0pLnNldEZvbnRTaXplKDI0KVxuXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdIb3N0IEdhbWUnLCAoKSA9PiB0aGlzLmhhbmRsZVN0YXJ0R2FtZSgpKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRFdmVudERiID0gYXdhaXQgb3BlbldvcmxkRXZlbnREYigpXG4gICAgY29uc3QgZ2FtZUlkOiBHYW1lSWQgPSB1dWlkKClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IDFcbiAgICBjb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKHdvcmxkRXZlbnREYiwgZ2FtZUlkLCBJTklUSUFMX1dPUkxEX1NUQVRFLCAwKVxuICAgIHNlcnZlci5oYW5kbGVBY3Rpb24ocGxheWVySWQsIHsgdHlwZTogJ2luaXRpYWxpc2UnLCBzdGF0ZTogSU5JVElBTF9XT1JMRF9TVEFURSB9KVxuICAgIHNldFVybEluZm8oeyBnYW1lSWQgfSlcbiAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyLCB3b3JsZFN0YXRlOiBzZXJ2ZXIud29ybGRTdGF0ZSwgcGxheWVySWQ6IHBsYXllcklkIH1cbiAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgcG9pbnQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQb2ludCA9PiAoeyB4LCB5IH0pXG5cbmV4cG9ydCBjb25zdCBtdWx0aXBseVBvaW50ID0gKHBvaW50OiBQb2ludCwgbjogbnVtYmVyKTogUG9pbnQgPT4gKHsgeDogcG9pbnQueCAqIG4sIHk6IHBvaW50LnkgKiBuIH0pXG5cbmV4cG9ydCBjb25zdCBhZGRQb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IFBvaW50ID0+ICh7IHg6IHBvaW50MS54ICsgcG9pbnQyLngsIHk6IHBvaW50MS55ICsgcG9pbnQyLnkgfSlcblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoe1xuICB4OiBwb2ludDEueCAtIHBvaW50Mi54LFxuICB5OiBwb2ludDEueSAtIHBvaW50Mi55LFxufSlcbiIsImltcG9ydCB7IENsaWVudFRvU2VydmVyTWVzc2FnZSwgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5cbmV4cG9ydCB0eXBlIFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyID0gKG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzZXJ2ZXJDb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2VMaXN0ZW5lcltdID0gW11cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogU2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSBsaXN0ZW5lcihtZXNzYWdlKVxuICB9XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyQ29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbikge1xuICAgIHRoaXMuc2VydmVyQ29ubmVjdGlvbiA9IHNlcnZlckNvbm5lY3Rpb25cbiAgICBzZXJ2ZXJDb25uZWN0aW9uLm9uKCdkYXRhJywgKG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ01lc3NhZ2UgcmVjZWl2ZWQgZnJvbSBzZXJ2ZXI6JylcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhtZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbm5lY3QgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPENsaWVudD4gPT4ge1xuICAgIGNvbnN0IHNlcnZlckNvbm5lY3Rpb24gPSBhd2FpdCBDbGllbnQuZG9Db25uZWN0KGdhbWVJZClcbiAgICByZXR1cm4gbmV3IENsaWVudChzZXJ2ZXJDb25uZWN0aW9uKVxuICB9XG5cbiAgcHVibGljIHNlbmQgPSAobWVzc2FnZTogQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlKTogdm9pZCA9PiB0aGlzLnNlcnZlckNvbm5lY3Rpb24uc2VuZChtZXNzYWdlKVxuXG4gIHByaXZhdGUgc3RhdGljIGRvQ29ubmVjdCA9IChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8UGVlci5EYXRhQ29ubmVjdGlvbj4gPT5cbiAgICBuZXcgUHJvbWlzZTxQZWVyLkRhdGFDb25uZWN0aW9uPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgcGVlciA9IG5ld1BlZXIoKVxuICAgICAgcGVlci5vbignZXJyb3InLCAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgcGVlci5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHBlZXIuY29ubmVjdChnYW1lSWQsIHsgcmVsaWFibGU6IHRydWUgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGNvbm5lY3Rpb24pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgcHVibGljIHNlbmRBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogdm9pZCA9PlxuICAgIHRoaXMuc2VuZCh7XG4gICAgICB0eXBlOiAnd29ybGRBY3Rpb24nLFxuICAgICAgYWN0aW9uOiBzZXJpYWxpc2VUb0pzb24oYWN0aW9uKSxcbiAgICAgIHBsYXllcklkOiBwbGF5ZXJJZCxcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgbmV3UGVlciA9IChpZD86IHN0cmluZywgb3B0aW9ucz86IFBlZXIuUGVlckpTT3B0aW9uKTogUGVlciA9PiBuZXcgKHdpbmRvdyBhcyBhbnkpLlBlZXIoaWQsIG9wdGlvbnMpIGFzIFBlZXJcbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIsIFdvcmxkU3RhdGVPd25lciB9IGZyb20gJy4vd29ybGQtc3RhdGUtb3duZXInXG5pbXBvcnQgeyBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQsIFdvcmxkRXZlbnRJZCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IENsaWVudFRvU2VydmVyTWVzc2FnZSwgUmVqb2luTWVzc2FnZSwgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgbmV3UGVlciB9IGZyb20gJy4vY2xpZW50J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEFkZFBsYXllcldvcmxkQWN0aW9uLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZU93bmVyOiBXb3JsZFN0YXRlT3duZXJcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uczogUGVlci5EYXRhQ29ubmVjdGlvbltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYlxuICBwcml2YXRlIHJlYWRvbmx5IGdhbWVJZDogR2FtZUlkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBwdWJsaWMgZ2V0IHdvcmxkU3RhdGUoKTogV29ybGRTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMud29ybGRTdGF0ZU93bmVyLndvcmxkU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzdG9yZUdhbWUgPSBhc3luYyAod29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIsIGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxTZXJ2ZXI+ID0+IHtcbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCB3b3JsZEV2ZW50RGIuZ2V0RXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgbGV0IHdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBSLnNvcnRCeSgoZXZlbnQpID0+IGV2ZW50LmlkLCBldmVudHMpKSB7XG4gICAgICB3b3JsZFN0YXRlID0gYXBwbHlFdmVudCh3b3JsZFN0YXRlLCBldmVudClcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTZXJ2ZXIod29ybGRFdmVudERiLCBnYW1lSWQsIHdvcmxkU3RhdGUsIGV2ZW50cy5sZW5ndGggKyAxKVxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSBsaXN0ZW5lcihldmVudClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZEV2ZW50RGIgPSB3b3JsZEV2ZW50RGJcbiAgICB0aGlzLmdhbWVJZCA9IGdhbWVJZFxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyID0gbmV3IFdvcmxkU3RhdGVPd25lcih3b3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkKVxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmFkZExpc3RlbmVyKChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gICAgICB0aGlzLndvcmxkRXZlbnREYi5zdG9yZSh0aGlzLmdhbWVJZCwgZXZlbnQpXG4gICAgICBmb3IgKGNvbnN0IGNsaWVudENvbm5lY3Rpb24gb2YgdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgPSB7IHR5cGU6ICd3b3JsZEV2ZW50JywgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCkgfVxuICAgICAgICBjbGllbnRDb25uZWN0aW9uLnNlbmQobWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHBlZXIgPSBuZXdQZWVyKHRoaXMuZ2FtZUlkKVxuICAgIHBlZXIub24oJ2Vycm9yJywgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICBwZWVyLm9uKCdjb25uZWN0aW9uJywgKGNvbm5lY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKVxuICAgICAgY29ubmVjdGlvbi5vbignZGF0YScsIChtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UpID0+IHRoaXMuaGFuZGxlQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlKG1lc3NhZ2UsIGNvbm5lY3Rpb24pKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudEpvaW4gPSAoY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbik6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIC8vIFRPRE86IHRlbGwgdGhlIGNsaWVudCBcImJhZCBsdWNrXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWRkUGxheWVyQWN0aW9uOiBBZGRQbGF5ZXJXb3JsZEFjdGlvbiA9IHsgdHlwZTogJ2FkZFBsYXllcicgfVxuICAgICAgY29uc3QgcGxheWVyQWRkZWRFdmVudCA9IDxQbGF5ZXJBZGRlZFdvcmxkRXZlbnQ+dGhpcy5oYW5kbGVBY3Rpb24oMSwgYWRkUGxheWVyQWN0aW9uKVxuICAgICAgY29ubmVjdGlvbi5zZW5kKHtcbiAgICAgICAgdHlwZTogJ2pvaW5lZCcsXG4gICAgICAgIHBsYXllcklkOiBwbGF5ZXJBZGRlZEV2ZW50LnBsYXllcklkLFxuICAgICAgICB3b3JsZFN0YXRlOiB0aGlzLndvcmxkU3RhdGUudG9Kc29uKCksXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50UmVqb2luID0gKG1lc3NhZ2U6IFJlam9pbk1lc3NhZ2UsIGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuaXNWYWxpZFBsYXllcklkKG1lc3NhZ2UucGxheWVySWQpKVxuICAgICAgY29ubmVjdGlvbi5zZW5kKHtcbiAgICAgICAgdHlwZTogJ3Jlam9pbmVkJyxcbiAgICAgICAgd29ybGRTdGF0ZTogd29ybGRTdGF0ZS50b0pzb24oKSxcbiAgICAgIH0pXG4gICAgZWxzZSB7XG4gICAgICAvLyBUT0RPOiB0ZWxsIHRoZSBjbGllbnQgbm9cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSA9IChtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UsIGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdqb2luJzpcbiAgICAgICAgdGhpcy5oYW5kbGVDbGllbnRKb2luKGNvbm5lY3Rpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdyZWpvaW4nOlxuICAgICAgICB0aGlzLmhhbmRsZUNsaWVudFJlam9pbihtZXNzYWdlLCBjb25uZWN0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnd29ybGRBY3Rpb24nOlxuICAgICAgICB0aGlzLndvcmxkU3RhdGVPd25lci5oYW5kbGVBY3Rpb24obWVzc2FnZS5wbGF5ZXJJZCwgZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmFjdGlvbikpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnQgPT5cbiAgICB0aGlzLndvcmxkU3RhdGVPd25lci5oYW5kbGVBY3Rpb24ocGxheWVySWQsIGFjdGlvbilcbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEF0dGFja1dvcmxkQWN0aW9uLCBJbml0aWFsaXNlV29ybGRBY3Rpb24sIE1vdmVVbml0V29ybGRBY3Rpb24sIFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFVuaXRNb3ZlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBIaXRQb2ludHMgfSBmcm9tICcuLi93b3JsZC9oaXQtcG9pbnRzJ1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5cbmNvbnN0IExMQU1BX05BTUVTID0gWydXYWx0ZXInLCAnRG9sbHknLCAnQ2hld3BhY2EnLCAnQmFyYWNrIE8uIExsYW1hJywgJ0NvbW8gU2UnXVxuXG5leHBvcnQgY2xhc3MgV29ybGRBY3Rpb25IYW5kbGVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHByaXZhdGUgcmVhZG9ubHkgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgcGxheWVySWQ6IFBsYXllcklkLCBuZXh0V29ybGRFdmVudElkOiBudW1iZXIpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGNhbGN1bGF0ZVdvcmxkRXZlbnQgPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnQgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVJbml0aWFsaXNlKGFjdGlvbilcbiAgICAgIGNhc2UgJ2FkZFBsYXllcic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFkZFBsYXllcigpXG4gICAgICBjYXNlICdzdGFydEdhbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTdGFydEdhbWUoKVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXR0YWNrKGFjdGlvbilcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZVVuaXQoYWN0aW9uKVxuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVuZFR1cm4oKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5pdGlhbGlzZSA9IChhY3Rpb246IEluaXRpYWxpc2VXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnQgPT4ge1xuICAgIGlmICh0aGlzLm5leHRXb3JsZEV2ZW50SWQgPiAwKSB7XG4gICAgICB0aHJvdyBgQ2FuIG9ubHkgaW5pdGlhbGlzZSBhcyB0aGUgZmlyc3QgZXZlbnRgXG4gICAgfVxuICAgIHJldHVybiB7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFkZFBsYXllciA9ICgpOiBXb3JsZEV2ZW50ID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1BsYXllcklkcyA9IHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuaWQpXG4gICAgY29uc3QgcGxheWVySWQgPSBSLmFwcGx5KE1hdGgubWF4LCBleGlzdGluZ1BsYXllcklkcykgKyAxXG4gICAgcmV0dXJuIHsgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckFkZGVkJywgcGxheWVySWQgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKTogV29ybGRFdmVudCA9PiB7XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgdGhyb3cgYENhbm5vdCBzdGFydCBhbiBhbHJlYWR5LXN0YXJ0ZWQgZ2FtZWBcbiAgICB9XG4gICAgY29uc3QgdW5pdHM6IFVuaXRbXSA9IFtdXG4gICAgbGV0IHJlbWFpbmluZ0hleGVzOiBIZXhbXSA9IEFycmF5LmZyb20odGhpcy53b3JsZFN0YXRlLm1hcC5nZXRNYXBIZXhlcygpKVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzKSB7XG4gICAgICBjb25zdCBnZW5lcmF0ZVVuaXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gcmFuZG9tRWxlbWVudChyZW1haW5pbmdIZXhlcylcbiAgICAgICAgcmVtYWluaW5nSGV4ZXMgPSBSLndpdGhvdXQoW2xvY2F0aW9uXSwgcmVtYWluaW5nSGV4ZXMpXG4gICAgICAgIGNvbnN0IHVuaXQ6IFVuaXQgPSBuZXcgVW5pdCh7XG4gICAgICAgICAgaWQ6IHVuaXRzLmxlbmd0aCArIDEsXG4gICAgICAgICAgcGxheWVySWQ6IHBsYXllci5pZCxcbiAgICAgICAgICBuYW1lOiByYW5kb21FbGVtZW50KExMQU1BX05BTUVTKSxcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgICAgICAgIGhpdFBvaW50czogbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQ6IDEwMCwgbWF4OiAxMDAgfSksXG4gICAgICAgIH0pXG4gICAgICAgIHVuaXRzLnB1c2godW5pdClcbiAgICAgIH1cbiAgICAgIGdlbmVyYXRlVW5pdCgpXG4gICAgICBnZW5lcmF0ZVVuaXQoKVxuICAgIH1cbiAgICByZXR1cm4geyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAnZ2FtZVN0YXJ0ZWQnLCB1bml0cyB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogQ29tYmF0V29ybGRFdmVudCA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXJJZCA9IGFjdGlvbi5hdHRhY2tlci51bml0SWRcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXJJZClcbiAgICBpZiAoIWF0dGFja2VyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7YXR0YWNrZXJJZH1gXG4gICAgaWYgKGF0dGFja2VyLnBsYXllcklkICE9IHRoaXMucGxheWVySWQpIHRocm93IGBDYW5ub3QgY29udHJvbCBhbm90aGVyIHBsYXllcidzIHVuaXQ6ICR7YXR0YWNrZXIuaWR9YFxuICAgIGlmIChhdHRhY2tlci5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gYXR0YWNrYFxuICAgIGlmICghYXR0YWNrZXIubG9jYXRpb24uZXF1YWxzKGFjdGlvbi5hdHRhY2tlci5sb2NhdGlvbikpIHRocm93IGBBdHRhY2tlciBub3QgaW4gZXhwZWN0ZWQgbG9jYXRpb25gXG5cbiAgICBjb25zdCBkZWZlbmRlcklkID0gYWN0aW9uLmRlZmVuZGVyLnVuaXRJZFxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZChkZWZlbmRlcklkKVxuICAgIGlmICghZGVmZW5kZXIpIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlcklkfWBcbiAgICBpZiAoZGVmZW5kZXIucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkgdGhyb3cgYENhbm5vdCBhdHRhY2sgb3duIHVuaXRgXG4gICAgaWYgKCFkZWZlbmRlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmRlZmVuZGVyLmxvY2F0aW9uKSkgdGhyb3cgYERlZmVuZGVyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGlmICghYXR0YWNrZXIubG9jYXRpb24uaXNBZGphY2VudFRvKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgYXR0YWNrIGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuXG4gICAgY29uc3QgYXR0YWNrZXJEYW1hZ2UgPSBNYXRoLm1pbihhdHRhY2tlci5oaXRQb2ludHMuY3VycmVudCwgMTApXG4gICAgY29uc3QgZGVmZW5kZXJEYW1hZ2UgPSBNYXRoLm1pbihkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCwgMjApXG4gICAgcmV0dXJuIHRoaXMubWFrZUNvbWJhdFdvcmxkRXZlbnQoYXR0YWNrZXIsIGF0dGFja2VyRGFtYWdlLCBkZWZlbmRlciwgZGVmZW5kZXJEYW1hZ2UpXG4gIH1cblxuICBwcml2YXRlIG1ha2VDb21iYXRXb3JsZEV2ZW50ID0gKFxuICAgIGF0dGFja2VyOiBVbml0LFxuICAgIGF0dGFja2VyRGFtYWdlOiBudW1iZXIsXG4gICAgZGVmZW5kZXI6IFVuaXQsXG4gICAgZGVmZW5kZXJEYW1hZ2U6IG51bWJlcixcbiAgKTogQ29tYmF0V29ybGRFdmVudCA9PiAoe1xuICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgYXR0YWNrZXI6IHtcbiAgICAgIHBsYXllcklkOiBhdHRhY2tlci5wbGF5ZXJJZCxcbiAgICAgIHVuaXRJZDogYXR0YWNrZXIuaWQsXG4gICAgICBsb2NhdGlvbjogYXR0YWNrZXIubG9jYXRpb24sXG4gICAgICBkYW1hZ2U6IGF0dGFja2VyRGFtYWdlLFxuICAgICAga2lsbGVkOiBhdHRhY2tlci5oaXRQb2ludHMuY3VycmVudCA9PSBhdHRhY2tlckRhbWFnZSxcbiAgICB9LFxuICAgIGRlZmVuZGVyOiB7XG4gICAgICBwbGF5ZXJJZDogZGVmZW5kZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGRlZmVuZGVyLmlkLFxuICAgICAgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBkZWZlbmRlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT0gZGVmZW5kZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgfSlcblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbik6IFVuaXRNb3ZlZFdvcmxkRXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCB0byB9ID0gYWN0aW9uXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdCkgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgY29uc3QgZnJvbSA9IHVuaXQubG9jYXRpb25cbiAgICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSkgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSkgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBvdXQtb2YtYm91bmRzIGhleCAke3RvfWBcbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bykpIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gYWxyZWFkeS1vY2N1cGllZCBoZXhgXG4gICAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIG1vdmVgXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICB0eXBlOiAndW5pdE1vdmVkJyxcbiAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gICAgICB1bml0SWQsXG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbmRUdXJuID0gKCk6IFdvcmxkRXZlbnQgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMud29ybGRTdGF0ZS5maW5kUGxheWVyKHRoaXMucGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHRocm93IGBObyBwbGF5ZXIgd2l0aCBJRCAke3RoaXMucGxheWVySWR9YFxuICAgIGlmIChwbGF5ZXIuZW5kZWRUdXJuKSB0aHJvdyBgUGxheWVyIGhhcyBhbHJlYWR5IGVuZGVkIHRoZWlyIHR1cm5gXG4gICAgY29uc3QgcGxheWVyc1lldFRvRW5kVGhlaXJUdXJuID0gdGhpcy53b3JsZFN0YXRlLnBsYXllcnNcbiAgICAgIC5maWx0ZXIoKHBsYXllcikgPT4gIXBsYXllci5lbmRlZFR1cm4pXG4gICAgICAubWFwKChwbGF5ZXIpID0+IHBsYXllci5pZClcbiAgICBjb25zdCB3aG9sZVR1cm5FbmRlZCA9IFIuZXF1YWxzKHBsYXllcnNZZXRUb0VuZFRoZWlyVHVybiwgW3RoaXMucGxheWVySWRdKVxuICAgIGlmICh3aG9sZVR1cm5FbmRlZCkge1xuICAgICAgcmV0dXJuIHsgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ25ld1R1cm4nIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckVuZGVkVHVybicsIHBsYXllcklkOiB0aGlzLnBsYXllcklkIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgeyBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL3dvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFdvcmxkRXZlbnRMaXN0ZW5lciA9IChldmVudDogV29ybGRFdmVudCkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZU93bmVyIHtcbiAgcHVibGljIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWRcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSBsaXN0ZW5lcihldmVudClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudCA9PiB7XG4gICAgY29uc3Qgd29ybGRBY3Rpb25IYW5kbGVyID0gbmV3IFdvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHBsYXllcklkLCB0aGlzLm5leHRXb3JsZEV2ZW50SWQpXG4gICAgY29uc3QgZXZlbnQgPSB3b3JsZEFjdGlvbkhhbmRsZXIuY2FsY3VsYXRlV29ybGRFdmVudChhY3Rpb24pXG4gICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudCh0aGlzLndvcmxkU3RhdGUsIGV2ZW50KVxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCsrXG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gICAgcmV0dXJuIGV2ZW50XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5cbmNvbnN0IHBhZGRpbmcgPSAxMFxuY29uc3QgbWluaW11bVdpZHRoID0gMjAwXG5jb25zdCBtaW5pbXVtSGVpZ2h0ID0gNTBcblxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KVxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKVxuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApXG5cbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXG4gICAgICAudGV4dCh4ICsgcGFkZGluZywgeSArIHBhZGRpbmcsIHRleHQpXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHBhZGRpbmdcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgcGFkZGluZ1xuXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGggPj0gbWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IG1pbmltdW1XaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gbWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogbWluaW11bUhlaWdodFxuXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVydXAnLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljaylcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpXG4gIH1cblxuICBwdWJsaWMgc2V0WSh2YWx1ZT86IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMubGFiZWwuc2V0WSh2YWx1ZSlcbiAgICByZXR1cm4gc3VwZXIuc2V0WSh2YWx1ZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXNlVG9Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKHNlcmlhbGlzZVRvSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGV4JyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV29ybGRNYXApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRNYXAnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1dvcmxkU3RhdGUnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBVbml0KSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1VuaXQnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIaXRQb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGl0UG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQWN0aW9uUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0FjdGlvblBvaW50cycgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdQbGF5ZXInIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gc2VyaWFsaXNlVG9Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlc2VyaWFsaXNlRnJvbUpzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZGVzZXJpYWxpc2VGcm9tSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT0gJ0hleCcpIHtcbiAgICAgICAgcmV0dXJuIEhleC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT0gJ1dvcmxkTWFwJykge1xuICAgICAgICByZXR1cm4gV29ybGRNYXAuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdXb3JsZFN0YXRlJykge1xuICAgICAgICByZXR1cm4gV29ybGRTdGF0ZS5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT0gJ1VuaXQnKSB7XG4gICAgICAgIHJldHVybiBVbml0LmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PSAnQWN0aW9uUG9pbnRzJykge1xuICAgICAgICByZXR1cm4gQWN0aW9uUG9pbnRzLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PSAnSGl0UG9pbnRzJykge1xuICAgICAgICByZXR1cm4gSGl0UG9pbnRzLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PSAnUGxheWVyJykge1xuICAgICAgICByZXR1cm4gUGxheWVyLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0OiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBkZXNlcmlhbGlzZUZyb21Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cbiIsImltcG9ydCBUd2VlbiA9IFBoYXNlci5Ud2VlbnMuVHdlZW5cblxuZXhwb3J0IGNvbnN0IHBsYXlUd2VlbiA9ICh0d2VlbjogVHdlZW4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB0d2Vlbi5zZXRDYWxsYmFjaygnb25Db21wbGV0ZScsIHJlc29sdmUsIFtdKS5wbGF5KCkpXG4iLCJleHBvcnQgY29uc3QgcmFuZG9tRWxlbWVudCA9IDxUPihhcnJheTogVFtdKTogVCA9PiBhcnJheVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnJheS5sZW5ndGgpXVxuIiwiZXhwb3J0IHR5cGUgT3B0aW9uPFQ+ID0gVCB8IHVuZGVmaW5lZFxuXG5leHBvcnQgaW50ZXJmYWNlIEp1c3Q8VD4ge1xuICB0eXBlOiAnanVzdCdcbiAgaXRlbTogVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGhpbmcge1xuICB0eXBlOiAnbm90aGluZydcbn1cblxuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBKdXN0PFQ+IHwgTm90aGluZ1xuXG5leHBvcnQgY29uc3QgdG9NYXliZSA9IDxUPihvcHRpb246IE9wdGlvbjxUPik6IE1heWJlPFQ+ID0+IChvcHRpb24gPT0gdW5kZWZpbmVkID8gbm90aGluZyA6IGp1c3Qob3B0aW9uKSlcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pXG4iLCJleHBvcnQgY2xhc3MgVW5yZWFjaGFibGVDYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBuZXZlcikge1xuICAgIHN1cGVyKGBVbnJlYWNoYWJsZSBjYXNlOiAke3ZhbHVlfWApXG4gIH1cbn1cbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uUG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyByZWR1Y2UgPSAocG9pbnRzOiBudW1iZXIpOiBBY3Rpb25Qb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBBY3Rpb25Qb2ludHMgPT5cbiAgICBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiB0aGlzLm1heCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSGV4LCBIZXhWZWN0b3IgfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGVudW0gSGV4RGlyZWN0aW9uIHtcbiAgRUFTVCA9ICdFQVNUJyxcbiAgV0VTVCA9ICdXRVNUJyxcbiAgTk9SVEhfRUFTVCA9ICdOT1JUSF9FQVNUJyxcbiAgU09VVEhfRUFTVCA9ICdTT1VUSF9FQVNUJyxcbiAgTk9SVEhfV0VTVCA9ICdOT1JUSF9XRVNUJyxcbiAgU09VVEhfV0VTVCA9ICdTT1VUSF9XRVNUJyxcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9ESVJFQ1RJT05TID0gW1xuICBIZXhEaXJlY3Rpb24uRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9FQVNULFxuXVxuXG5leHBvcnQgY29uc3QgZ2V0VW5pdFZlY3RvciA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleFZlY3RvciA9PiB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIDEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAxKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZGlyZWN0aW9uKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgZ2V0VW5pdFZlY3RvciwgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi9oZXgtZGlyZWN0aW9uJ1xuXG5leHBvcnQgY2xhc3MgSGV4IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGdldCB6KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC10aGlzLnggLSB0aGlzLnlcbiAgfVxuXG4gIHB1YmxpYyBwbHVzID0gKHRoYXQ6IEhleCk6IEhleCA9PiBuZXcgSGV4KHRoaXMueCArIHRoYXQueCwgdGhpcy55ICsgdGhhdC55KVxuXG4gIHB1YmxpYyBuZWlnaGJvdXJzID0gKCk6IEhleFtdID0+IEhleC5ORUlHSEJPVVJTLm1hcCh0aGlzLnBsdXMpXG5cbiAgcHVibGljIGlzQWRqYWNlbnRUbyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IFIuaW5jbHVkZXModGhhdCwgdGhpcy5uZWlnaGJvdXJzKCkpXG5cbiAgcHJpdmF0ZSBzdGF0aWMgTkVJR0hCT1VSUzogSGV4W10gPSBbXG4gICAgbmV3IEhleCgwLCAxKSxcbiAgICBuZXcgSGV4KDEsIDApLFxuICAgIG5ldyBIZXgoMSwgLTEpLFxuICAgIG5ldyBIZXgoMCwgLTEpLFxuICAgIG5ldyBIZXgoLTEsIDApLFxuICAgIG5ldyBIZXgoLTEsIDEpLFxuICBdXG5cbiAgcHVibGljIGVxdWFscyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IHRoaXMueCA9PSB0aGF0LnggJiYgdGhpcy55ID09IHRoYXQueVxuXG4gIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4gYEhleCgke3RoaXMueH0sICR7dGhpcy55fSlgXG5cbiAgcHVibGljIGdvID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogSGV4ID0+IHRoaXMucGx1cyhnZXRVbml0VmVjdG9yKGRpcmVjdGlvbikpXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEhleCA9PiBuZXcgSGV4KGpzb24ueCwganNvbi55KVxufVxuXG5leHBvcnQgdHlwZSBIZXhWZWN0b3IgPSBIZXhcbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgSGl0UG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBIaXRQb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBIaXRQb2ludHMgPT5cbiAgICBuZXcgSGl0UG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBIaXRQb2ludHMgPT4gbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxufVxuIiwiaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuL3dvcmxkLW1hcCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1dPUkxEX1NUQVRFOiBXb3JsZFN0YXRlID0gbmV3IFdvcmxkU3RhdGUoe1xuICB0dXJuOiAwLFxuICBtYXA6IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiAxMCwgaGVpZ2h0OiA2IH0pLFxuICBwbGF5ZXJzOiBbXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdQbGF5ZXIgMScsXG4gICAgICBlbmRlZFR1cm46IGZhbHNlLFxuICAgIH0pLFxuICBdLFxuICB1bml0czogW10sXG59KVxuIiwiZXhwb3J0IHR5cGUgUGxheWVySWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIHJlYWRvbmx5IGlkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgZW5kZWRUdXJuOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IoeyBpZCwgbmFtZSwgZW5kZWRUdXJuID0gZmFsc2UgfTogeyBpZDogUGxheWVySWQ7IG5hbWU6IHN0cmluZzsgZW5kZWRUdXJuPzogYm9vbGVhbiB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuZW5kZWRUdXJuID0gZW5kZWRUdXJuXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgaWQgPSB0aGlzLmlkLFxuICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgZW5kZWRUdXJuID0gdGhpcy5lbmRlZFR1cm4sXG4gIH06IHsgaWQ/OiBQbGF5ZXJJZDsgbmFtZT86IHN0cmluZzsgZW5kZWRUdXJuPzogYm9vbGVhbiB9ID0ge30pOiBQbGF5ZXIgPT5cbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGVuZGVkVHVybixcbiAgICB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGlkOiB0aGlzLmlkLCBuYW1lOiB0aGlzLm5hbWUsIGVuZGVkVHVybjogdGhpcy5lbmRlZFR1cm4gfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFBsYXllciA9PlxuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICBuYW1lOiBqc29uLm5hbWUsXG4gICAgICBlbmRlZFR1cm46IGpzb24uZW5kZWRUdXJuLFxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4vYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4vaGl0LXBvaW50cydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFVuaXRJZCA9IG51bWJlclxuXG5leHBvcnQgY2xhc3MgVW5pdCB7XG4gIHJlYWRvbmx5IGlkOiBVbml0SWRcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICByZWFkb25seSBsb2NhdGlvbjogSGV4XG4gIHJlYWRvbmx5IGhpdFBvaW50czogSGl0UG9pbnRzXG4gIHJlYWRvbmx5IGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIHBsYXllcklkLFxuICAgIG5hbWUsXG4gICAgbG9jYXRpb24sXG4gICAgaGl0UG9pbnRzLFxuICAgIGFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkOiBVbml0SWRcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuICB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzXG4gICAgdGhpcy5hY3Rpb25Qb2ludHMgPSBhY3Rpb25Qb2ludHNcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBVbml0ID0+IHRoaXMuY29weSh7IGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMuZGFtYWdlKHBvaW50cykgfSlcblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgaWQgPSB0aGlzLmlkLFxuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbixcbiAgICBoaXRQb2ludHMgPSB0aGlzLmhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMgPSB0aGlzLmFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkPzogVW5pdElkXG4gICAgcGxheWVySWQ/OiBQbGF5ZXJJZFxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBsb2NhdGlvbj86IEhleFxuICAgIGhpdFBvaW50cz86IEhpdFBvaW50c1xuICAgIGFjdGlvblBvaW50cz86IEFjdGlvblBvaW50c1xuICB9ID0ge30pOiBVbml0ID0+IG5ldyBVbml0KHsgaWQsIHBsYXllcklkLCBuYW1lLCBsb2NhdGlvbiwgaGl0UG9pbnRzLCBhY3Rpb25Qb2ludHMgfSlcblxuICBwdWJsaWMgbW92ZSA9IChsb2NhdGlvbjogSGV4LCBhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGxvY2F0aW9uLCBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZHVjZShhY3Rpb25Qb2ludHNDb25zdW1lZCkgfSlcblxuICBwdWJsaWMgcmVkdWNlQWN0aW9uUG9pbnRzID0gKGFjdGlvblBvaW50c0NvbnN1bWVkOiBudW1iZXIpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZnJlc2hBY3Rpb25Qb2ludHMgPSAoKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZnJlc2goKSB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgaWQ6IHRoaXMuaWQsXG4gICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLnRvSnNvbigpLFxuICAgIGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMudG9Kc29uKCksXG4gICAgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy50b0pzb24oKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFVuaXQgPT5cbiAgICBuZXcgVW5pdCh7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIHBsYXllcklkOiBqc29uLnBsYXllcklkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgbG9jYXRpb246IEhleC5mcm9tSnNvbihqc29uLmxvY2F0aW9uKSxcbiAgICAgIGhpdFBvaW50czogSGl0UG9pbnRzLmZyb21Kc29uKGpzb24uaGl0UG9pbnRzKSxcbiAgICAgIGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzLmZyb21Kc29uKGpzb24uYWN0aW9uUG9pbnRzKSxcbiAgICB9KVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgUGxheWVyQWRkZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBjb25zdCBhcHBseUV2ZW50ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICBjYXNlICdpbml0aWFsaXNlJzpcbiAgICAgIHJldHVybiBoYW5kbGVJbml0aWFsaXNlKGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJBZGRlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVTdGFydGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVVuaXRNb3ZlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnY29tYmF0JzpcbiAgICAgIHJldHVybiBoYW5kbGVDb21iYXQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckVuZGVkVHVybic6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRW5kZWRUdXJuKHN0YXRlLCBldmVudClcbiAgICBjYXNlICduZXdUdXJuJzpcbiAgICAgIHJldHVybiBoYW5kbGVOZXdUdXJuKHN0YXRlKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlSW5pdGlhbGlzZSA9IChldmVudDogSW5pdGlhbGlzZVdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKGV2ZW50LmlkID4gMCkge1xuICAgIHRocm93IGBJbml0aWFsaXNlIG11c3QgYmUgdGhlIGZpcnN0IGV2ZW50YFxuICB9XG4gIHJldHVybiBldmVudC5zdGF0ZVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJBZGRlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckFkZGVkV29ybGRFdmVudCkgPT4ge1xuICBpZiAoUi5hbnkoKHBsYXllcikgPT4gcGxheWVyLmlkID09IGV2ZW50LnBsYXllcklkLCBzdGF0ZS5wbGF5ZXJzKSkge1xuICAgIHRocm93IGBQbGF5ZXIgSUQgYWxyZWFkeSBpbiB1c2VgXG4gIH1cbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcih7IGlkOiBwbGF5ZXJJZCwgbmFtZTogYFBsYXllciAke3BsYXllcklkfWAgfSlcbiAgcmV0dXJuIHN0YXRlLmFkZFBsYXllcihwbGF5ZXIpXG59XG5cbmNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50KSA9PiB7XG4gIGlmIChzdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgIHRocm93IGBHYW1lIGFscmVhZHkgc3RhcnRlZGBcbiAgfVxuICByZXR1cm4gc3RhdGUuY29weSh7IHR1cm46IDEsIHVuaXRzOiBldmVudC51bml0cyB9KVxufVxuXG5jb25zdCBoYW5kbGVVbml0TW92ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgdW5pdElkLCBwbGF5ZXJJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gIGlmICghc3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICBjb25zdCB1bml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgaWYgKCF1bml0KSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgY29uc3QgZnJvbVVuaXQgPSBzdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oZnJvbSlcbiAgaWYgKGZyb21Vbml0Py5pZCAhPSB1bml0SWQpIHtcbiAgICB0aHJvdyBgSW52YWxpZCBmcm9tIGxvY2F0aW9uIGZvciB1bml0IG1vdmVtZW50LiBVbml0IGF0ICR7ZnJvbX0gaXMgJHtmcm9tVW5pdD8uaWR9LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlICR7dW5pdElkfWBcbiAgfVxuICBjb25zdCB0b1VuaXQgPSBzdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odG8pXG4gIGlmICh0b1VuaXQpIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gYWxyZWFkeS1vY2N1cGllZCBoZXhgXG4gIGlmICh1bml0LnBsYXllcklkICE9IHBsYXllcklkKSB0aHJvdyBgSW52YWxpZCBhdHRlbXB0IHRvIG1vdmUgdW5pdCBvZiBhbm90aGVyIHBsYXllcmBcbiAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuICByZXR1cm4gc3RhdGUucmVwbGFjZVVuaXQodW5pdC5pZCwgdW5pdC5tb3ZlKHRvLCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG59XG5cbmNvbnN0IGhhbmRsZUNvbWJhdCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG5cbiAgY29uc3QgYXR0YWNrZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VyLnVuaXRJZClcbiAgaWYgKCFhdHRhY2tlclVuaXQpIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHthdHRhY2tlci51bml0SWR9YFxuICBpZiAoIWF0dGFja2VyVW5pdC5sb2NhdGlvbi5lcXVhbHMoYXR0YWNrZXIubG9jYXRpb24pKVxuICAgIHRocm93IGBJbnZhbGlkIGxvY2F0aW9uIGZvciBhdHRhY2tlci4gQXR0YWNraW5nIHVuaXQgJHthdHRhY2tlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7YXR0YWNrZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2F0dGFja2VyLmxvY2F0aW9ufWBcblxuICBjb25zdCBkZWZlbmRlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXIudW5pdElkKVxuICBpZiAoIWRlZmVuZGVyVW5pdCkgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVyLnVuaXRJZH1gXG4gIGlmICghZGVmZW5kZXJVbml0LmxvY2F0aW9uLmVxdWFscyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGRlZmVuZGVyLiBEZWZlbmRpbmcgdW5pdCAke2RlZmVuZGVyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHtkZWZlbmRlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7ZGVmZW5kZXIubG9jYXRpb259YFxuXG4gIGlmIChhdHRhY2tlclVuaXQucGxheWVySWQgPT0gZGVmZW5kZXJVbml0LnBsYXllcklkKSB0aHJvdyBgSW52YWxpZCBjb21iYXQgd2l0aCBzZWxmYFxuICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmlzQWRqYWNlbnRUbyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgY29tYmF0IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuICBpZiAoYXR0YWNrZXJVbml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpIHRocm93IGBJbnZhbGlkIGFjdGlvbiBwb2ludCB1c2FnZWBcblxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZVxuXG4gIGlmIChhdHRhY2tlci5raWxsZWQpIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChhdHRhY2tlclVuaXQuaWQpXG4gIGVsc2VcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KFxuICAgICAgYXR0YWNrZXJVbml0LmlkLFxuICAgICAgYXR0YWNrZXJVbml0LmRhbWFnZShhdHRhY2tlci5kYW1hZ2UpLnJlZHVjZUFjdGlvblBvaW50cyhldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCksXG4gICAgKVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChkZWZlbmRlclVuaXQuaWQpXG4gIGVsc2UgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChkZWZlbmRlclVuaXQuaWQsIGRlZmVuZGVyVW5pdC5kYW1hZ2UoZGVmZW5kZXIuZGFtYWdlKSlcblxuICByZXR1cm4gbmV3U3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBzdGF0ZS5maW5kUGxheWVyKHBsYXllcklkKVxuICBpZiAoIXBsYXllcikgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICByZXR1cm4gc3RhdGUucmVwbGFjZVBsYXllcihwbGF5ZXJJZCwgcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IHRydWUgfSkpXG59XG5cbmNvbnN0IGhhbmRsZU5ld1R1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLmNvcHkoe1xuICAgIHR1cm46IHN0YXRlLnR1cm4gKyAxLFxuICAgIHVuaXRzOiBzdGF0ZS51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQucmVmcmVzaEFjdGlvblBvaW50cygpKSxcbiAgICBwbGF5ZXJzOiBzdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogZmFsc2UgfSkpLFxuICB9KVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIFdvcmxkTWFwIHtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlclxuICByZWFkb25seSBoZWlnaHQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGgsIGhlaWdodCB9OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcbiAgICBhc3NlcnQod2lkdGggPiAwKVxuICAgIGFzc2VydChoZWlnaHQgPiAwKVxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cblxuICBwdWJsaWMgaXNJbkJvdW5kcyA9IChoZXg6IEhleCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHEgPSBoZXgueCArIE1hdGguZmxvb3IoaGV4LnkgLyAyKVxuICAgIHJldHVybiAwIDw9IHEgJiYgcSA8IHRoaXMud2lkdGggJiYgMCA8PSBoZXgueSAmJiBoZXgueSA8IHRoaXMuaGVpZ2h0XG4gIH1cblxuICBwdWJsaWMgKmdldE1hcEhleGVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SGV4PiB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5oZWlnaHQ7IHJvdysrKVxuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy53aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgeCA9IC1NYXRoLmZsb29yKHJvdyAvIDIpICsgY29sdW1uXG4gICAgICAgIHlpZWxkIG5ldyBIZXgoeCwgcm93KVxuICAgICAgfVxuICB9XG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkTWFwID0+IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiBqc29uLndpZHRoLCBoZWlnaHQ6IGpzb24uaGVpZ2h0IH0pXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi91bml0J1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZSB7XG4gIHJlYWRvbmx5IHR1cm46IG51bWJlciAvKiB0dXJuID0gMCBiZWZvcmUgdGhlIGdhbWUgaGFzIHN0YXJ0ZWQgKi9cbiAgcmVhZG9ubHkgbWFwOiBXb3JsZE1hcFxuICByZWFkb25seSB1bml0czogVW5pdFtdXG4gIHJlYWRvbmx5IHBsYXllcnM6IFBsYXllcltdXG5cbiAgY29uc3RydWN0b3IoeyB0dXJuLCBtYXAsIHVuaXRzLCBwbGF5ZXJzIH06IHsgdHVybjogbnVtYmVyOyBtYXA6IFdvcmxkTWFwOyB1bml0czogVW5pdFtdOyBwbGF5ZXJzOiBQbGF5ZXJbXSB9KSB7XG4gICAgdGhpcy50dXJuID0gdHVyblxuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy51bml0cyA9IHVuaXRzXG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVyc1xuICAgIGFzc2VydCh0dXJuID49IDApXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgdHVybiA9IHRoaXMudHVybixcbiAgICBtYXAgPSB0aGlzLm1hcCxcbiAgICB1bml0cyA9IHRoaXMudW5pdHMsXG4gICAgcGxheWVycyA9IHRoaXMucGxheWVycyxcbiAgfTogeyB0dXJuPzogbnVtYmVyOyBtYXA/OiBXb3JsZE1hcDsgdW5pdHM/OiBVbml0W107IHBsYXllcnM/OiBQbGF5ZXJbXSB9ID0ge30pOiBXb3JsZFN0YXRlID0+XG4gICAgbmV3IFdvcmxkU3RhdGUoeyB0dXJuLCBtYXAsIHVuaXRzLCBwbGF5ZXJzIH0pXG5cbiAgcHVibGljIGdldCBnYW1lSGFzU3RhcnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50dXJuID4gMFxuICB9XG5cbiAgcHVibGljIGlzUGxheWVyRGVmZWF0ZWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiBSLmFueSgodW5pdCkgPT4gdW5pdC5wbGF5ZXJJZCA9PSBwbGF5ZXJJZCwgdGhpcy51bml0cylcblxuICBwdWJsaWMgZmluZFBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBPcHRpb248UGxheWVyPiA9PiBSLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmlkID09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGZpbmRVbml0QnlJZCA9ICh1bml0SWQ6IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQuaWQgPT0gdW5pdElkLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyBnZXRVbml0QnlJZCA9ICh1bml0SWQ6IG51bWJlcik6IFVuaXQgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICB9XG4gICAgcmV0dXJuIHVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gUi5maW5kKCh1bml0KSA9PiB1bml0LmxvY2F0aW9uLmVxdWFscyhoZXgpLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyByZXBsYWNlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCwgdW5pdDogVW5pdCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoe1xuICAgICAgdW5pdHM6IFIuYXBwZW5kKFxuICAgICAgICB1bml0LFxuICAgICAgICBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPSB1bml0SWQsIHRoaXMudW5pdHMpLFxuICAgICAgKSxcbiAgICB9KVxuXG4gIHB1YmxpYyByZW1vdmVVbml0ID0gKHVuaXRJZDogVW5pdElkKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHVuaXRzOiBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPSB1bml0SWQsIHRoaXMudW5pdHMpIH0pXG5cbiAgcHVibGljIHJlcGxhY2VQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkLCBwbGF5ZXI6IFBsYXllcik6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGFzc2VydChwbGF5ZXJJZCA9PSBwbGF5ZXIuaWQpXG4gICAgcmV0dXJuIHRoaXMuY29weSh7XG4gICAgICBwbGF5ZXJzOiBSLmFwcGVuZChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICBSLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuaWQgIT0gcGxheWVySWQsIHRoaXMucGxheWVycyksXG4gICAgICApLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYWRkUGxheWVyID0gKHBsYXllcjogUGxheWVyKTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBwbGF5ZXJzOiBSLmFwcGVuZChwbGF5ZXIsIHRoaXMucGxheWVycykgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIHR1cm46IHRoaXMudHVybixcbiAgICBtYXA6IHRoaXMubWFwLnRvSnNvbigpLFxuICAgIHVuaXRzOiB0aGlzLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC50b0pzb24oKSksXG4gICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIudG9Kc29uKCkpLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRTdGF0ZSA9PlxuICAgIG5ldyBXb3JsZFN0YXRlKHtcbiAgICAgIHR1cm46IGpzb24udHVybixcbiAgICAgIG1hcDogV29ybGRNYXAuZnJvbUpzb24oanNvbi5tYXApLFxuICAgICAgdW5pdHM6IGpzb24udW5pdHMubWFwKCh1bml0OiBhbnkpID0+IFVuaXQuZnJvbUpzb24odW5pdCkpLFxuICAgICAgcGxheWVyczoganNvbi5wbGF5ZXJzLm1hcCgodW5pdDogYW55KSA9PiBQbGF5ZXIuZnJvbUpzb24odW5pdCkpLFxuICAgIH0pXG5cbiAgcHVibGljIGlzVmFsaWRQbGF5ZXJJZCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==