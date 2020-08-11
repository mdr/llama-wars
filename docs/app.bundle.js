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
    PLAYER_DEFEATED: 'player-defeated',
    VICTORY_MUSIC: 'victory-music',
};
exports.ALL_AUDIO_KEYS = [
    exports.AudioKeys.ATTACK,
    exports.AudioKeys.DEATH,
    exports.AudioKeys.WALK,
    exports.AudioKeys.NEW_TURN,
    exports.AudioKeys.PLAYER_DEFEATED,
    exports.AudioKeys.VICTORY_MUSIC,
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
        this.load.audio(asset_keys_1.AudioKeys.PLAYER_DEFEATED, 'assets/audio/MESSAGE-B_Decline.wav');
        // https://opengameart.org/content/clear-skies
        this.load.audio(asset_keys_1.AudioKeys.VICTORY_MUSIC, 'assets/audio/Clear Skies.mp3');
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
            return unit.playerId == _this.playerId && unit.hasUnspentActionPoints && !_this.getCurrentPlayer().endedTurn;
        };
        this.unitCouldPotentiallyAttack = function (unit) {
            return unit.playerId == _this.playerId && unit.hasUnspentActionPoints && !_this.getCurrentPlayer().endedTurn;
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
                            if (_this.serverOrClient) {
                                if (_this.serverOrClient instanceof server_1.Server) {
                                    _this.serverOrClient.handleAction(playerId, { type: 'changePlayerName', name: playerText.text });
                                }
                                else {
                                    _this.serverOrClient.sendAction(playerId, { type: 'changePlayerName', name: playerText.text });
                                }
                            }
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
        var sortedPlayers = R.sortBy(function (player) { return player.id; }, this.worldState.players);
        try {
            for (var sortedPlayers_1 = __values(sortedPlayers), sortedPlayers_1_1 = sortedPlayers_1.next(); !sortedPlayers_1_1.done; sortedPlayers_1_1 = sortedPlayers_1.next()) {
                var player = sortedPlayers_1_1.value;
                var playerText = this.playerNameTexts.get(player.id);
                playerText.setText(player.name).setY(y);
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
            var unitToSelect = _this.combinedState.findNextUnitWithUnspentActionPoints();
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
            var _a;
            _this.worldState = worldState;
            _this.localGameState = localGameState;
            var player = _this.combinedState.getCurrentPlayer();
            _this.hourglass.setVisible(localGameState.actionOutstandingWithServer);
            _this.playerText.setText(player.name + " - Turn " + _this.worldState.turn);
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
            if (player.endedTurn) {
                _this.endTurnText.setText('Waiting for next turn...');
            }
            else {
                _this.endTurnText.setText('End Turn (Shift + Enter)');
            }
            _this.defeatText.setVisible(player.defeated);
            if (player.defeated) {
                _this.defeatTextTweenX.play();
                _this.defeatTextTweenY.play();
            }
            _this.victoryText.setVisible(((_a = worldState.gameOverInfo) === null || _a === void 0 ? void 0 : _a.victor) === player.id);
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
        this.defeatText = this.scene.add
            .text(462, (hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y) / 2, 'You have been defeated!', {
            stroke: '#000000',
            strokeThickness: 4,
        })
            .setOrigin(0.5)
            .setFontSize(42)
            .setVisible(false)
            .setDepth(100);
        this.defeatTextTweenX = this.scene.tweens.add({
            targets: this.defeatText,
            x: '+=50',
            duration: 1900,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
            paused: true,
        });
        this.defeatTextTweenY = this.scene.tweens.add({
            targets: this.defeatText,
            y: '+=50',
            duration: 2000,
            ease: 'Sine.easeInOut',
            yoyo: true,
            repeat: -1,
            paused: true,
        });
        this.victoryText = this.scene.add
            .text(462, 30, 'Victory!', {
            stroke: '#000000',
            strokeThickness: 4,
        })
            .setOrigin(0.5)
            .setFontSize(42)
            .setVisible(false)
            .setDepth(100);
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

/***/ "./src/server/attack-world-action-handler.ts":
/*!***************************************************!*\
  !*** ./src/server/attack-world-action-handler.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackWorldActionHandler = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var random_util_1 = __webpack_require__(/*! ../util/random-util */ "./src/util/random-util.ts");
var AttackWorldActionHandler = /** @class */ (function () {
    function AttackWorldActionHandler(worldState, playerId, nextWorldEventId) {
        var _this = this;
        this.handleAttack = function (action) {
            var _a = _this.validateAttack(action), attacker = _a.attacker, defender = _a.defender;
            var attackerDamage = Math.min(attacker.hitPoints.current, 10 + random_util_1.randomIntInclusive(-2, 2));
            var defenderDamage = Math.min(defender.hitPoints.current, 20 + random_util_1.randomIntInclusive(-3, 3));
            var combatWorldEvent = _this.makeCombatWorldEvent(attacker, attackerDamage, defender, defenderDamage);
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
            else if (undefeatedPlayers.length == 1) {
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
            return { attacker: attacker, defender: defender };
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
                var playerAddedEvent = _this.handleAction(1, addPlayerAction)[0];
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldActionHandler = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var world_generator_1 = __webpack_require__(/*! ./world-generator */ "./src/server/world-generator.ts");
var attack_world_action_handler_1 = __webpack_require__(/*! ./attack-world-action-handler */ "./src/server/attack-world-action-handler.ts");
var world_event_evaluator_1 = __webpack_require__(/*! ../world/world-event-evaluator */ "./src/world/world-event-evaluator.ts");
var WorldActionHandler = /** @class */ (function () {
    function WorldActionHandler(worldState, playerId, nextWorldEventId) {
        var _this = this;
        this.calculateWorldEvents = function (action) {
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
                    return _this.handleEndTurn();
            }
        };
        this.handleInitialise = function (action) {
            if (_this.nextWorldEventId > 0) {
                throw "Can only initialise as the first event";
            }
            return [{ id: _this.nextWorldEventId, type: 'initialise', state: action.state }];
        };
        this.handleAddPlayer = function () {
            var existingPlayerIds = _this.worldState.players.map(function (player) { return player.id; });
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
            var units = new world_generator_1.WorldGenerator(_this.worldState).generateUnits();
            return [{ id: _this.nextWorldEventId, type: 'gameStarted', units: units }];
        };
        this.handleAttack = function (action) {
            return new attack_world_action_handler_1.AttackWorldActionHandler(_this.worldState, _this.playerId, _this.nextWorldEventId).handleAttack(action);
        };
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
        this.handleEndTurn = function () {
            var player = _this.getPlayer();
            if (player.endedTurn) {
                throw "Player has already ended their turn";
            }
            var playerEndedTurnAction = {
                id: _this.nextWorldEventId,
                type: 'playerEndedTurn',
                playerId: _this.playerId,
            };
            var newWorldState = world_event_evaluator_1.applyEvent(_this.worldState, playerEndedTurnAction);
            if (newWorldState.canAnyPlayerAct()) {
                return [playerEndedTurnAction];
            }
            else {
                return [playerEndedTurnAction, { id: _this.nextWorldEventId + 1, type: 'newTurn' }];
            }
        };
        this.getPlayer = function () {
            var player = _this.worldState.findPlayer(_this.playerId);
            if (!player)
                throw "No player with ID " + _this.playerId;
            return player;
        };
        this.worldState = worldState;
        this.playerId = playerId;
        this.nextWorldEventId = nextWorldEventId;
    }
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
var LLAMA_NAMES = ['Walter', 'Dolly', 'Chewpaca', 'Barack O. Llama', 'Como Se'];
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
            var e_2, _a;
            var worldActionHandler = new world_action_handler_1.WorldActionHandler(_this.worldState, playerId, _this.nextWorldEventId);
            var events = worldActionHandler.calculateWorldEvents(action);
            try {
                for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                    var event_1 = events_1_1.value;
                    _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event_1);
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
    if (R.any(function (player) { return player.id == event.playerId; }, state.players)) {
        throw "Player ID already in use";
    }
    var playerId = event.playerId;
    var player = new player_1.Player({ id: playerId, name: "Player " + playerId });
    return state.addPlayer(player);
};
var handlePlayerChangedName = function (state, event) {
    var playerId = event.playerId, name = event.name;
    validatePlayerId(state, playerId);
    return state.updatePlayer(playerId, function (player) { return player.copy({ name: name }); });
};
var validatePlayerId = function (state, playerId) {
    var player = state.findPlayer(playerId);
    if (!player)
        throw "No player found with ID " + playerId;
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
    validatePlayerId(state, playerId);
    return state.updatePlayer(playerId, function (player) { return player.copy({ endedTurn: true }); });
};
var handlePlayerDefeated = function (state, event) {
    var playerId = event.playerId;
    validatePlayerId(state, playerId);
    return state.updatePlayer(playerId, function (player) { return player.copy({ defeated: true }); });
};
var handleNewTurn = function (state) {
    return state.copy({
        turn: state.turn + 1,
        units: state.units.map(function (unit) { return unit.refreshActionPoints(); }),
        players: state.players.map(function (player) { return player.copy({ endedTurn: false }); }),
    });
};
var handleGameOver = function (state, event) {
    var victor = event.victor;
    if (victor) {
        validatePlayerId(state, victor);
    }
    return state.gameOver(victor);
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
var types_1 = __webpack_require__(/*! ../util/types */ "./src/util/types.ts");
var player_1 = __webpack_require__(/*! ./player */ "./src/world/player.ts");
var assert = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
var world_event_evaluator_1 = __webpack_require__(/*! ./world-event-evaluator */ "./src/world/world-event-evaluator.ts");
var WorldState = /** @class */ (function () {
    function WorldState(_a) {
        var _this = this;
        var turn = _a.turn, map = _a.map, units = _a.units, players = _a.players, gameOverInfo = _a.gameOverInfo;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.turn, turn = _c === void 0 ? _this.turn : _c, _d = _b.map, map = _d === void 0 ? _this.map : _d, _e = _b.units, units = _e === void 0 ? _this.units : _e, _f = _b.players, players = _f === void 0 ? _this.players : _f, _g = _b.gameOverInfo, gameOverInfo = _g === void 0 ? types_1.toMaybe(_this.gameOverInfo) : _g;
            return new WorldState({ turn: turn, map: map, units: units, players: players, gameOverInfo: types_1.toOption(gameOverInfo) });
        };
        this.isPlayerDefeated = function (playerId) { return _this.getUnitsForPlayer(playerId).length == 0; };
        this.canPlayerAct = function (playerId) {
            var _a;
            var endedTurn = (_a = _this.findPlayer(playerId)) === null || _a === void 0 ? void 0 : _a.endedTurn;
            return !endedTurn && R.any(function (unit) { return unit.hasUnspentActionPoints; }, _this.getUnitsForPlayer(playerId));
        };
        this.canAnyPlayerAct = function () { return R.any(function (player) { return _this.canPlayerAct(player.id); }, _this.players); };
        this.getUnitsForPlayer = function (playerId) { return _this.units.filter(function (unit) { return unit.playerId === playerId; }); };
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
        this.updatePlayer = function (playerId, modify) {
            var player = _this.findPlayer(playerId);
            if (!player)
                throw "No player found with ID " + playerId;
            return _this.replacePlayer(playerId, modify(player));
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
            gameOverInfo: _this.gameOverInfo,
        }); };
        this.isValidPlayerId = function (playerId) { return R.any(function (player) { return player.id == playerId; }, _this.players); };
        this.gameOver = function (victor) { return _this.copy({ gameOverInfo: types_1.just({ victor: victor }) }); };
        this.applyEvent = function (event) { return world_event_evaluator_1.applyEvent(_this, event); };
        this.turn = turn;
        this.map = map;
        this.units = units;
        this.players = players;
        this.gameOverInfo = gameOverInfo;
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
        });
    };
    return WorldState;
}());
exports.WorldState = WorldState;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb21iaW5lZC1zdGF0ZS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaGV4LWdlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2JieS9sb2JieS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvY2FsLWdhbWUtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvZGlzcGxheS1vYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUva2V5Ym9hcmQtbWFwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2xvY2FsLWFjdGlvbi1wcm9jZXNzb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvbWFwLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3RleHRzLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL3VuaXQtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUvbWFpbi1tZW51LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLWdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91aS9tZW51LWJ1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXNlcmlhbGlzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbS11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2FjdGlvbi1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGl0LXBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC91bml0LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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QyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDcEQsSUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDM0IsT0FBTyxLQUFLLENBQUMsSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRCxJQUFNLEtBQUssR0FBRyxVQUFDLEdBQVE7SUFDckIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxJQUFJLEtBQUssR0FBRyxLQUFLO1FBQUUsT0FBTyxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQzNELElBQUksS0FBSyxHQUFHLEtBQUs7UUFBRSxPQUFPLElBQUksU0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7O1FBQy9DLE9BQU8sSUFBSSxTQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFD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O0lBQ25CLENBQUM7SUFnQkQsc0JBQVcsc0NBQWM7YUFBekI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQWdFYSxtQkFBUSxHQUFHLFVBQUMsSUFBUztRQUNqQyxXQUFJLFVBQVUsQ0FBQztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVMsSUFBSyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztZQUN6RCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLElBQUssc0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUM7WUFDL0QsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2hDLENBQUM7SUFORixDQU1FO0lBT04saUJBQUM7Q0FBQTtBQTFIWSxnQ0FBVSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgRGV4aWUsIHsgQ29sbGVjdGlvbiB9IGZyb20gJ2RleGllJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFdvcmxkRXZlbnRSZWNvcmQge1xuICBnYW1lSWQ6IEdhbWVJZFxuICBldmVudDogYW55IC8vIHNlcmlhbGlzZWQgV29ybGRFdmVudFxufVxuXG5leHBvcnQgY2xhc3MgTGxhbWFEZXhpZSBleHRlbmRzIERleGllIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIHdvcmxkRXZlbnRzOiBEZXhpZS5UYWJsZTxXb3JsZEV2ZW50UmVjb3JkLCBzdHJpbmc+XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuV29ybGRFdmVudERiID0gYXN5bmMgKCk6IFByb21pc2U8V29ybGRFdmVudERiPiA9PiB7XG4gIGNvbnN0IGRleGllID0gbmV3IERleGllKCdsbGFtYS13YXJzJylcbiAgZGV4aWUudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgIHdvcmxkRXZlbnRzOiAnKyssZ2FtZUlkJyxcbiAgfSlcbiAgYXdhaXQgZGV4aWUub3BlbigpXG4gIHJldHVybiBuZXcgV29ybGRFdmVudERiKDxMbGFtYURleGllPmRleGllKVxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRFdmVudERiIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkZXhpZTogTGxhbWFEZXhpZVxuXG4gIGNvbnN0cnVjdG9yKGRleGllOiBMbGFtYURleGllKSB7XG4gICAgdGhpcy5kZXhpZSA9IGRleGllXG4gIH1cblxuICBwdWJsaWMgc3RvcmUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQsIGV2ZW50OiBXb3JsZEV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYXdhaXQgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy5hZGQoe1xuICAgICAgZ2FtZUlkLFxuICAgICAgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCksXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRFdmVudHNGb3JHYW1lID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxXb3JsZEV2ZW50W10+ID0+IHtcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy53aGVyZSgnZ2FtZUlkJykuZXF1YWxzKGdhbWVJZCkudG9BcnJheSgpXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGRlc2VyaWFsaXNlRnJvbUpzb24ocmVjb3JkLmV2ZW50KSlcbiAgfVxuXG4gIHB1YmxpYyBoYXNFdmVudHNGb3JHYW1lID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgdGhpcy5xdWVyeUV2ZW50c0J5R2FtZUlkKGdhbWVJZCkuZmlyc3QoKVxuICAgIHJldHVybiByZWNvcmQgIT0gdW5kZWZpbmVkXG4gIH1cblxuICBwcml2YXRlIHF1ZXJ5RXZlbnRzQnlHYW1lSWQgPSAoZ2FtZUlkOiBzdHJpbmcpOiBDb2xsZWN0aW9uPFdvcmxkRXZlbnRSZWNvcmQsIHN0cmluZz4gPT5cbiAgICB0aGlzLmRleGllLndvcmxkRXZlbnRzLndoZXJlKCdnYW1lSWQnKS5lcXVhbHMoZ2FtZUlkKVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGhcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodFxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnXG5pbXBvcnQgVGV4dEVkaXRQbHVnaW4gZnJvbSAncGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3RleHRlZGl0LXBsdWdpbi5qcydcblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdMbGFtYSBXYXJzJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHBhcmVudDogJ2dhbWUnLFxuICBkb206IHtcbiAgICBjcmVhdGVDb250YWluZXI6IHRydWUsXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxuICBwbHVnaW5zOiB7XG4gICAgZ2xvYmFsOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JleFRleHRFZGl0JyxcbiAgICAgICAgcGx1Z2luOiBUZXh0RWRpdFBsdWdpbixcbiAgICAgICAgc3RhcnQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUuc2V0R2FtZVNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcbiAgZ2FtZS5zY2FsZS5yZWZyZXNoKClcbn0pXG4iLCJleHBvcnQgY29uc3QgQXVkaW9LZXlzID0ge1xuICBBVFRBQ0s6ICdhdHRhY2snLFxuICBERUFUSDogJ2RlYXRoJyxcbiAgV0FMSzogJ3dhbGsnLFxuICBORVdfVFVSTjogJ25ldy10dXJuJyxcbiAgUExBWUVSX0RFRkVBVEVEOiAncGxheWVyLWRlZmVhdGVkJyxcbiAgVklDVE9SWV9NVVNJQzogJ3ZpY3RvcnktbXVzaWMnLFxufVxuXG5leHBvcnQgY29uc3QgQUxMX0FVRElPX0tFWVMgPSBbXG4gIEF1ZGlvS2V5cy5BVFRBQ0ssXG4gIEF1ZGlvS2V5cy5ERUFUSCxcbiAgQXVkaW9LZXlzLldBTEssXG4gIEF1ZGlvS2V5cy5ORVdfVFVSTixcbiAgQXVkaW9LZXlzLlBMQVlFUl9ERUZFQVRFRCxcbiAgQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsXG5dXG4iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCBGaWxlQ29uZmlnID0gUGhhc2VyLlR5cGVzLkxvYWRlci5GaWxlQ29uZmlnXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZUlkLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNQUlOX01FTlVfU0NFTkVfS0VZIH0gZnJvbSAnLi4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBvcGVuV29ybGRFdmVudERiLCBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi8uLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IENsaWVudCwgU2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2VydmVyL21lc3NhZ2VzJ1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgY29uc3QgQk9PVF9TQ0VORV9LRVkgPSAnQm9vdCdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEJPT1RfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSByZWpvaW5lZExpc3RlbmVyOiBPcHRpb248U2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXI+XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjVcblxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMFxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGgsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgcHJvZ3Jlc3NCYXJXaWR0aCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0LFxuICAgICAgMHgwMDAwMDAsXG4gICAgKVxuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICAxMCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsXG4gICAgICAweDg4ODg4OCxcbiAgICApXG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpXG5cbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZVxuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDBcbiAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7cGVyY2VudH0lYClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZTogRmlsZUNvbmZpZykgPT4ge1xuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICBsb2FkaW5nVGV4dC5kZXN0cm95KClcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKVxuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXIuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KClcbiAgICAgIHRoaXMubGF1bmNoR2FtZSgpXG4gICAgfSlcblxuICAgIHRoaXMubG9hZEFzc2V0cygpXG4gIH1cblxuICBwcml2YXRlIGxhdW5jaEdhbWUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgdXJsSW5mbyA9IGdldFVybEluZm8oKVxuICAgIGlmICh1cmxJbmZvKSB7XG4gICAgICBhd2FpdCB0aGlzLmpvaW5PclJlc3RvcmVHYW1lKHVybEluZm8pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTUFJTl9NRU5VX1NDRU5FX0tFWSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5PclJlc3RvcmVHYW1lID0gYXN5bmMgKHVybEluZm86IFVybEluZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB3b3JsZEV2ZW50RGIgPSBhd2FpdCBvcGVuV29ybGRFdmVudERiKClcbiAgICBjb25zdCBnYW1lSWQgPSB1cmxJbmZvLmdhbWVJZFxuICAgIGNvbnN0IHBsYXllcklkID0gdXJsSW5mby5wbGF5ZXJJZFxuICAgIGNvbnN0IGlzU2VydmVyID0gYXdhaXQgd29ybGRFdmVudERiLmhhc0V2ZW50c0ZvckdhbWUoZ2FtZUlkKVxuICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgYXdhaXQgdGhpcy5yZXN0b3JlR2FtZUFzU2VydmVyKGdhbWVJZCwgd29ybGRFdmVudERiKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLmpvaW5PclJlc3RvcmVDbGllbnQoZ2FtZUlkLCBwbGF5ZXJJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5PclJlc3RvcmVDbGllbnQgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQsIHBsYXllcklkOiBPcHRpb248UGxheWVySWQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmNvbm5lY3QoZ2FtZUlkKVxuICAgIGlmIChwbGF5ZXJJZCkge1xuICAgICAgdGhpcy5yZWpvaW5Bc0NsaWVudChjbGllbnQsIGdhbWVJZCwgcGxheWVySWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuam9pbkFzQ2xpZW50KGNsaWVudCwgZ2FtZUlkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbkFzQ2xpZW50ID0gKGNsaWVudDogQ2xpZW50LCBnYW1lSWQ6IEdhbWVJZCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVqb2luZWRMaXN0ZW5lciA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT0gJ2pvaW5lZCcpIHtcbiAgICAgICAgaWYgKHRoaXMucmVqb2luZWRMaXN0ZW5lcikge1xuICAgICAgICAgIGNsaWVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLnJlam9pbmVkTGlzdGVuZXIpXG4gICAgICAgICAgdGhpcy5yZWpvaW5lZExpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVySWQgPSBtZXNzYWdlLnBsYXllcklkXG4gICAgICAgIHNldFVybEluZm8oeyBnYW1lSWQsIHBsYXllcklkIH0pXG4gICAgICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBXb3JsZFN0YXRlLmZyb21Kc29uKG1lc3NhZ2Uud29ybGRTdGF0ZSlcbiAgICAgICAgaWYgKHdvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQsIHdvcmxkU3RhdGUsIHBsYXllcklkIH1cbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IGNsaWVudCwgd29ybGRTdGF0ZSwgcGxheWVySWQgfVxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2xpZW50LmFkZExpc3RlbmVyKHRoaXMucmVqb2luZWRMaXN0ZW5lcilcbiAgICBjbGllbnQuc2VuZCh7IHR5cGU6ICdqb2luJyB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZWpvaW5Bc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCwgZ2FtZUlkOiBHYW1lSWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVqb2luZWRMaXN0ZW5lciA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT0gJ3Jlam9pbmVkJykge1xuICAgICAgICBpZiAodGhpcy5yZWpvaW5lZExpc3RlbmVyKSB7XG4gICAgICAgICAgY2xpZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMucmVqb2luZWRMaXN0ZW5lcilcbiAgICAgICAgICB0aGlzLnJlam9pbmVkTGlzdGVuZXIgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihtZXNzYWdlLndvcmxkU3RhdGUpXG4gICAgICAgIGlmICh3b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50LCB3b3JsZFN0YXRlLCBwbGF5ZXJJZCB9XG4gICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQsIHdvcmxkU3RhdGUsIHBsYXllcklkIH1cbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLnJlam9pbmVkTGlzdGVuZXIpXG4gICAgY2xpZW50LnNlbmQoeyB0eXBlOiAncmVqb2luJywgcGxheWVySWQgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUdhbWVBc1NlcnZlciA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgd29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBzZXJ2ZXIgPSBhd2FpdCBTZXJ2ZXIucmVzdG9yZUdhbWUod29ybGRFdmVudERiLCBnYW1lSWQpXG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IHNlcnZlci53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciwgd29ybGRTdGF0ZTogd29ybGRTdGF0ZSwgcGxheWVySWQ6IDEgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyLCB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLCBwbGF5ZXJJZDogMSB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaGV4LXRpbGVzZXQtcGFja1xuICAgIHRoaXMubG9hZC5pbWFnZSgnbGxhbWEnLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWFfMTQucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2hvdXJnbGFzcy1pY29uXG4gICAgdGhpcy5sb2FkLmltYWdlKCdob3VyZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvSG91cmdsYXNzLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy10ZXh0dXJlcy10aWxlc1xuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtdGV4dHVyZVxuICAgIHRoaXMubG9hZC5pbWFnZSgnZ3Jhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvZ3Jhc3MyLnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50LzM3LWhpdHNwdW5jaGVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0ssICdhc3NldHMvYXVkaW8vaGl0MTgubXAzLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9tYWxlLWdydW50eWVsbGluZy1zb3VuZHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkRFQVRILCAnYXNzZXRzL2F1ZGlvLzF5ZWxsNC53YXYnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtZm9vdC1zdGVwLXNvdW5kcy15by1mcmFua2llXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5XQUxLLCAnYXNzZXRzL2F1ZGlvL3NmeF9zdGVwX2dyYXNzX2wubXAzJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3VpLXNvdW5kLWVmZmVjdHMtcGFja1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuTkVXX1RVUk4sICdhc3NldHMvYXVkaW8vTUVOVSBBX1NlbGVjdC53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVELCAnYXNzZXRzL2F1ZGlvL01FU1NBR0UtQl9EZWNsaW5lLndhdicpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2NsZWFyLXNraWVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDLCAnYXNzZXRzL2F1ZGlvL0NsZWFyIFNraWVzLm1wMycpXG4gIH1cbn1cblxuaW50ZXJmYWNlIFVybEluZm8ge1xuICBnYW1lSWQ6IEdhbWVJZFxuICBwbGF5ZXJJZD86IFBsYXllcklkXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVcmxJbmZvID0gKCk6IE9wdGlvbjxVcmxJbmZvPiA9PiB7XG4gIGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaFxuICBpZiAoaGFzaCA9PSAnJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHBhdGggPSBoYXNoLnN1YnN0cigxKVxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKVxuICBjb25zdCBnYW1lSWQgPSBzZWdtZW50c1swXVxuICBjb25zdCBwbGF5ZXJJZCA9IHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoc2VnbWVudHNbMV0pIDogdW5kZWZpbmVkXG4gIHJldHVybiB7IGdhbWVJZCwgcGxheWVySWQgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0VXJsSW5mbyA9ICh1cmxJbmZvOiBVcmxJbmZvKTogdm9pZCA9PiB7XG4gIGxldCBoYXNoID0gdXJsSW5mby5nYW1lSWRcbiAgaWYgKHVybEluZm8ucGxheWVySWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgaGFzaCArPSAnLycgKyB1cmxJbmZvLnBsYXllcklkXG4gIH1cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoXG59XG4iLCJpbXBvcnQgQ29sb3IgPSBQaGFzZXIuRGlzcGxheS5Db2xvclxuXG5leHBvcnQgdHlwZSBDb2xvdXJTdHJpbmcgPSBzdHJpbmdcbmV4cG9ydCB0eXBlIENvbG91ck51bWJlciA9IG51bWJlclxuXG5leHBvcnQgY29uc3QgY29sb3VyTnVtYmVyID0gKGNvbG91clN0cmluZzogQ29sb3VyU3RyaW5nKTogQ29sb3VyTnVtYmVyID0+IENvbG9yLkhleFN0cmluZ1RvQ29sb3IoY29sb3VyU3RyaW5nKS5jb2xvclxuXG5leHBvcnQgY29uc3QgSEVBTFRIX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyMwMDAwMDAnKVxuZXhwb3J0IGNvbnN0IEhFQUxUSF9FTVBUWV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZmZmYnKVxuZXhwb3J0IGNvbnN0IEhFQUxUSF9GVUxMX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzRkZjAzNycpXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzAwMDAwMCcpXG5leHBvcnQgY29uc3QgSE9WRVJfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNjY2ZmYmUnKVxuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmQwOCcpXG5leHBvcnQgY29uc3QgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM5ZGYxZTcnKVxuXG5leHBvcnQgY29uc3QgQUNUSU9OX1RFWFRfQ09MT1VSID0gJyNjY2NjMDAnXG5leHBvcnQgY29uc3QgSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSID0gJyNmZmZmMDAnXG5cbmV4cG9ydCBjb25zdCBQTEFZRVJfVElOVFMgPSBbJyNmZmJiYmInLCAnI2JiYmJmZicsICcjYmJmZmJiJywgJyNiYmZmZmYnLCAnI2ZmZmZiYicsICcjZmZiYmZmJ10ubWFwKGNvbG91ck51bWJlcilcbiIsImltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcblxuZXhwb3J0IGNsYXNzIENvbWJpbmVkU3RhdGUge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHVibGljIGZpbmRTZWxlY3RlZFVuaXQgPSAoKTogT3B0aW9uPFVuaXQ+ID0+XG4gICAgdGhpcy5zZWxlY3RlZEhleCA/IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMuc2VsZWN0ZWRIZXgpIDogdW5kZWZpbmVkXG5cbiAgcHVibGljIGdldCBzZWxlY3RlZEhleCgpOiBPcHRpb248SGV4PiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGxheWVySWQoKTogUGxheWVySWQge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkXG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyB1bml0Q291bGRQb3RlbnRpYWxseU1vdmUgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENhbk1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBoZXg6IEhleCk6IGJvb2xlYW4gPT5cbiAgICB0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSh1bml0KSAmJlxuICAgIGhleC5pc0FkamFjZW50VG8odW5pdC5sb2NhdGlvbikgJiZcbiAgICB0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSAmJlxuICAgICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgLyoqXG4gICAqIEByZXR1cm4gdGhlIHVuaXQgaW4gdGhlIGhleCB0byBhdHRhY2ssIGlmIGFuIGF0dGFjayBpcyBwb3NzaWJsZSwgZWxzZSB1bmRlZmluZWQuXG4gICAqL1xuICBwdWJsaWMgdW5pdENhbkF0dGFja0hleCA9ICh1bml0OiBVbml0LCBsb2NhdGlvbjogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24obG9jYXRpb24pXG4gICAgaWYgKFxuICAgICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSAmJlxuICAgICAgdGFyZ2V0VW5pdCAhPSB1bmRlZmluZWQgJiZcbiAgICAgIHRhcmdldFVuaXQucGxheWVySWQgIT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAmJlxuICAgICAgdW5pdC5sb2NhdGlvbi5pc0FkamFjZW50VG8obG9jYXRpb24pXG4gICAgKVxuICAgICAgcmV0dXJuIHRhcmdldFVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cyA9ICh1bml0SWQ/OiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT4ge1xuICAgIGNvbnN0IGNhbmRpZGF0ZVVuaXRzID0gUi5zb3J0QnkoXG4gICAgICAodW5pdCkgPT4gdW5pdC5pZCxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS5nZXRVbml0c0ZvclBsYXllcih0aGlzLnBsYXllcklkKS5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyksXG4gICAgKVxuICAgIGlmICh1bml0SWQpXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkID4gdW5pdElkKSkgPz9cbiAgICAgICAgUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCA8IHVuaXRJZCkpXG4gICAgICApXG4gICAgZWxzZSByZXR1cm4gUi5oZWFkKGNhbmRpZGF0ZVVuaXRzKVxuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGxheWVyIHdpdGggaWQgJHt0aGlzLnBsYXllcklkfWBcbiAgICByZXR1cm4gcGxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuXG5leHBvcnQgY29uc3QgY2VudGVyUG9pbnQgPSAoaGV4OiBIZXgpOiBQb2ludCA9PiAoe1xuICB4OiBoZXgueCAqIE1hdGguc3FydCgzKSArIChoZXgueSAqIE1hdGguc3FydCgzKSkgLyAyLFxuICB5OiAoaGV4LnkgKiAzKSAvIDIsXG59KVxuXG5leHBvcnQgY29uc3QgZnJvbVBvaW50ID0gKHBvaW50OiBQb2ludCk6IEhleCA9PiB7XG4gIGNvbnN0IHggPSAocG9pbnQueCAqIE1hdGguc3FydCgzKSkgLyAzIC0gcG9pbnQueSAvIDNcbiAgY29uc3QgeSA9ICgyICogcG9pbnQueSkgLyAzXG4gIHJldHVybiByb3VuZChuZXcgSGV4KHgsIHkpKVxufVxuXG5jb25zdCByb3VuZCA9IChoZXg6IEhleCk6IEhleCA9PiB7XG4gIGNvbnN0IHJ4ID0gTWF0aC5yb3VuZChoZXgueClcbiAgY29uc3QgcnkgPSBNYXRoLnJvdW5kKGhleC55KVxuICBjb25zdCByeiA9IE1hdGgucm91bmQoaGV4LnopXG5cbiAgY29uc3QgeERpZmYgPSBNYXRoLmFicyhyeCAtIGhleC54KVxuICBjb25zdCB5RGlmZiA9IE1hdGguYWJzKHJ5IC0gaGV4LnkpXG4gIGNvbnN0IHpEaWZmID0gTWF0aC5hYnMocnogLSBoZXgueSlcblxuICBpZiAoeERpZmYgPiB5RGlmZiAmJiB4RGlmZiA+IHpEaWZmKSByZXR1cm4gbmV3IEhleCgtcnkgLSByeiwgcnkpXG4gIGVsc2UgaWYgKHlEaWZmID4gekRpZmYpIHJldHVybiBuZXcgSGV4KHJ4LCAtcnggLSByeilcbiAgZWxzZSByZXR1cm4gbmV3IEhleChyeCwgcnkpXG59XG5cbmNvbnN0IGhleEFuZ2xlID0gTWF0aC5QSSAvIDNcbmNvbnN0IGhleE9mZnNldCA9IE1hdGguUEkgLyA2XG5cbmNvbnN0IGhleENvcm5lciA9IChjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIsIGk6IG51bWJlcik6IFBvaW50ID0+IHtcbiAgY29uc3QgYW5nbGVSYWRpYW5zID0gaGV4QW5nbGUgKiBpIC0gaGV4T2Zmc2V0XG4gIGNvbnN0IHggPSBjZW50ZXIueCArIHNpemUgKiBNYXRoLmNvcyhhbmdsZVJhZGlhbnMpXG4gIGNvbnN0IHkgPSBjZW50ZXIueSArIHNpemUgKiBNYXRoLnNpbihhbmdsZVJhZGlhbnMpXG4gIHJldHVybiB7IHgsIHkgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGhleENvcm5lcnMoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxQb2ludD4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHlpZWxkIGhleENvcm5lcihjZW50ZXIsIHNpemUsIGkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hcEhlaWdodCA9IChtYXA6IFdvcmxkTWFwKTogbnVtYmVyID0+IChtYXAuaGVpZ2h0ICogMykgLyAyXG5cbmV4cG9ydCBjb25zdCBoZXhXaWR0aCA9IChoZXhTaXplOiBudW1iZXIpOiBudW1iZXIgPT4gaGV4U2l6ZSAqIE1hdGguc3FydCgzKVxuIiwiaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290L2Jvb3Qtc2NlbmUnXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IExvYmJ5U2NlbmUgfSBmcm9tICcuL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBHYW1lU2NlbmUsIE1haW5NZW51U2NlbmUsIExvYmJ5U2NlbmVdXG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBDbGllbnQsIFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi8uLi91aS9tZW51LWJ1dHRvbidcbmltcG9ydCB7IEdBTUVfU0NFTkVfS0VZLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2VydmVyL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiB9IGZyb20gJy4uLy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcblxuZXhwb3J0IGNvbnN0IExPQkJZX1NDRU5FX0tFWSA9ICdMb2JieSdcblxuZXhwb3J0IGludGVyZmFjZSBMb2JieVNjZW5lRGF0YSB7XG4gIHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnRcbiAgcGxheWVySWQ6IFBsYXllcklkXG4gIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbn1cblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IExPQkJZX1NDRU5FX0tFWSxcbn1cblxuZXhwb3J0IGNsYXNzIExvYmJ5U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gIHByaXZhdGUgc2VydmVyT3JDbGllbnQ/OiBTZXJ2ZXIgfCBDbGllbnRcbiAgcHJpdmF0ZSBwbGF5ZXJJZD86IFBsYXllcklkXG5cbiAgcHJpdmF0ZSBwbGF5ZXJOYW1lVGV4dHM6IE1hcDxQbGF5ZXJJZCwgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgc3RhcnRHYW1lQnV0dG9uPzogTWVudUJ1dHRvblxuICBwcml2YXRlIHdhaXRpbmdGb3JIb3N0VGV4dD86IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgbGlzdGVuZXI/OiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2VMaXN0ZW5lclxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIHN5bmMoKTogdm9pZCB7XG4gICAgY29uc3QgcmVxdWlyZWRQbGF5ZXJJZHMgPSB0aGlzLndvcmxkU3RhdGUucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmlkKVxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJZHMgPSBBcnJheS5mcm9tKHRoaXMucGxheWVyTmFtZVRleHRzLmtleXMoKSlcbiAgICBjb25zdCBzdXJwbHVzUGxheWVySWRzID0gUi5kaWZmZXJlbmNlKGN1cnJlbnRQbGF5ZXJJZHMsIHJlcXVpcmVkUGxheWVySWRzKVxuICAgIGZvciAoY29uc3QgcGxheWVySWQgb2Ygc3VycGx1c1BsYXllcklkcykge1xuICAgICAgdGhpcy5wbGF5ZXJOYW1lVGV4dHMuZ2V0KHBsYXllcklkKT8uZGVzdHJveSgpXG4gICAgfVxuICAgIGNvbnN0IG1pc3NpbmdQbGF5ZXJJZHMgPSBSLmRpZmZlcmVuY2UocmVxdWlyZWRQbGF5ZXJJZHMsIGN1cnJlbnRQbGF5ZXJJZHMpXG4gICAgZm9yIChjb25zdCBwbGF5ZXJJZCBvZiBtaXNzaW5nUGxheWVySWRzKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZCkhXG4gICAgICBjb25zdCBwbGF5ZXJUZXh0ID0gdGhpcy5hZGRcbiAgICAgICAgLnRleHQoMTAwLCAwLCBwbGF5ZXIubmFtZSwge1xuICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyxcbiAgICAgICAgICBmaXhlZFdpZHRoOiAyMDAsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkID8gJyMzMzMzMzMnIDogJyMwMDAwMDAnLFxuICAgICAgICB9KVxuICAgICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAgIC5zZXRQYWRkaW5nKDAsIDAsIDAsIDApXG4gICAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHBsYXllcklkID09IHRoaXMucGxheWVySWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2lucy5nZXQoJ3JleFRleHRFZGl0JykgYXMgYW55XG4gICAgICAgICAgICBwbHVnaW4uZWRpdChwbGF5ZXJUZXh0LCB7XG4gICAgICAgICAgICAgIG9uQ2xvc2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJPckNsaWVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJPckNsaWVudC5oYW5kbGVBY3Rpb24ocGxheWVySWQsIHsgdHlwZTogJ2NoYW5nZVBsYXllck5hbWUnLCBuYW1lOiBwbGF5ZXJUZXh0LnRleHQgfSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuc2VuZEFjdGlvbihwbGF5ZXJJZCwgeyB0eXBlOiAnY2hhbmdlUGxheWVyTmFtZScsIG5hbWU6IHBsYXllclRleHQudGV4dCB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgdGhpcy5wbGF5ZXJOYW1lVGV4dHMuc2V0KHBsYXllcklkLCBwbGF5ZXJUZXh0KVxuICAgIH1cbiAgICBsZXQgeSA9IDEwMFxuICAgIGNvbnN0IHNvcnRlZFBsYXllcnMgPSBSLnNvcnRCeSgocGxheWVyKSA9PiBwbGF5ZXIuaWQsIHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzKVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHNvcnRlZFBsYXllcnMpIHtcbiAgICAgIGNvbnN0IHBsYXllclRleHQgPSB0aGlzLnBsYXllck5hbWVUZXh0cy5nZXQocGxheWVyLmlkKSFcbiAgICAgIHBsYXllclRleHQuc2V0VGV4dChwbGF5ZXIubmFtZSkuc2V0WSh5KVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICBpZiAodGhpcy5zdGFydEdhbWVCdXR0b24pIHRoaXMuc3RhcnRHYW1lQnV0dG9uLnNldFkoeSlcbiAgICBpZiAodGhpcy53YWl0aW5nRm9ySG9zdFRleHQpIHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0LnNldFkoeSlcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgc2VydmVyT3JDbGllbnQsIHBsYXllcklkLCB3b3JsZFN0YXRlIH0gPSBzY2VuZURhdGFcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG5cbiAgICBpZiAoc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBDbGllbnQpIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoc2VydmVyT3JDbGllbnQsIHBsYXllcklkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdEFTZXJ2ZXIoc2VydmVyT3JDbGllbnQpXG4gICAgfVxuICAgIHRoaXMuY3JlYXRlQ29uc3RhbnRHYW1lT2JqZWN0cygpXG4gICAgdGhpcy5zeW5jKClcbiAgfVxuXG4gIHByaXZhdGUgYWN0QVNlcnZlciA9IChzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT4ge1xuICAgIHNlcnZlci5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXIud29ybGRTdGF0ZVxuICAgICAgdGhpcy5zeW5jKClcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb25zdGFudEdhbWVPYmplY3RzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNClcbiAgICBpZiAodGhpcy5wbGF5ZXJJZCA9PSAxKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbiA9IG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMCwgJ1N0YXJ0IEdhbWUnLCAoKSA9PiB0aGlzLmhhbmRsZVN0YXJ0R2FtZSgpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCA9IHRoaXMuYWRkLnRleHQoMTAwLCAwLCAnV2FpdGluZyBmb3IgaG9zdCB0byBzdGFydCB0aGUgZ2FtZS4uLicpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCwgcGxheWVySWQ6IFBsYXllcklkKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlU2VydmVyVG9DbGllbnRNZXNzYWdlKG1lc3NhZ2UsIGNsaWVudCwgcGxheWVySWQpXG4gICAgfVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgPSAobWVzc2FnZTogU2VydmVyVG9DbGllbnRNZXNzYWdlLCBjbGllbnQ6IENsaWVudCwgcGxheWVySWQ6IFBsYXllcklkKTogdm9pZCA9PiB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PSAnd29ybGRFdmVudCcpIHtcbiAgICAgIGNvbnN0IGV2ZW50OiBXb3JsZEV2ZW50ID0gZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmV2ZW50KVxuICAgICAgY29uc3Qgb2xkV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudChvbGRXb3JsZFN0YXRlLCBldmVudClcbiAgICAgIGlmIChldmVudC50eXBlID09ICdnYW1lU3RhcnRlZCcpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIpIHtcbiAgICAgICAgICBjbGllbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0ge1xuICAgICAgICAgIHNlcnZlck9yQ2xpZW50OiBjbGllbnQsXG4gICAgICAgICAgd29ybGRTdGF0ZTogdGhpcy53b3JsZFN0YXRlLFxuICAgICAgICAgIHBsYXllcklkOiBwbGF5ZXJJZCxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3luYygpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICBpZiAoIXRoaXMuc2VydmVyT3JDbGllbnQpIHtcbiAgICAgIHRocm93IGBVbmV4cGVjdGVkIGFic2VuY2Ugb2Ygc2VydmVyT3JDbGllbnRgXG4gICAgfVxuICAgIGlmICghdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgdGhyb3cgYFVuZXhwZWN0ZWQgYWJzZW5jZSBvZiBwbGF5ZXJJZGBcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuaGFuZGxlQWN0aW9uKHRoaXMucGxheWVySWQsIHsgdHlwZTogJ3N0YXJ0R2FtZScgfSlcbiAgICB9XG4gICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0ge1xuICAgICAgc2VydmVyT3JDbGllbnQ6IHRoaXMuc2VydmVyT3JDbGllbnQsXG4gICAgICB3b3JsZFN0YXRlOiB0aGlzLndvcmxkU3RhdGUsXG4gICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICB9XG4gICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tYWluLWdhbWUvbW9kZSdcbmltcG9ydCB7IE1heWJlLCBPcHRpb24sIHRvTWF5YmUsIHRvT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lU3RhdGUge1xuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbW9kZTogTW9kZVxuICByZWFkb25seSBzZWxlY3RlZEhleDogT3B0aW9uPEhleD5cbiAgcmVhZG9ubHkgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHBsYXllcklkLFxuICAgIG1vZGUsXG4gICAgc2VsZWN0ZWRIZXgsXG4gICAgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gZmFsc2UsXG4gIH06IHtcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBtb2RlOiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBPcHRpb248SGV4PlxuICAgIGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcj86IGJvb2xlYW5cbiAgfSkge1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICB0aGlzLnNlbGVjdGVkSGV4ID0gc2VsZWN0ZWRIZXhcbiAgICB0aGlzLmFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlciA9IGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlclxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBtb2RlID0gdGhpcy5tb2RlLFxuICAgIHNlbGVjdGVkSGV4ID0gdG9NYXliZSh0aGlzLnNlbGVjdGVkSGV4KSxcbiAgICBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSB0aGlzLmFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcixcbiAgfToge1xuICAgIHBsYXllcklkPzogUGxheWVySWRcbiAgICBtb2RlPzogTW9kZVxuICAgIHNlbGVjdGVkSGV4PzogTWF5YmU8SGV4PlxuICAgIGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcj86IGJvb2xlYW5cbiAgfSA9IHt9KTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICBuZXcgTG9jYWxHYW1lU3RhdGUoeyBwbGF5ZXJJZCwgbW9kZSwgc2VsZWN0ZWRIZXg6IHRvT3B0aW9uKHNlbGVjdGVkSGV4KSwgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyIH0pXG5cbiAgcHVibGljIHNldFNlbGVjdGVkSGV4ID0gKHNlbGVjdGVkSGV4OiBPcHRpb248SGV4Pik6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IHNlbGVjdGVkSGV4OiB0b01heWJlKHNlbGVjdGVkSGV4KSB9KVxuXG4gIHB1YmxpYyBzZXRNb2RlID0gKG1vZGU6IE1vZGUpOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLmNvcHkoeyBtb2RlIH0pXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUgPSBuZXcgTG9jYWxHYW1lU3RhdGUoe1xuICBwbGF5ZXJJZDogMSxcbiAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxufSlcbiIsImltcG9ydCB7IE1hcERpc3BsYXlPYmplY3QgfSBmcm9tICcuL21hcC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBVbml0RGlzcGxheU9iamVjdCB9IGZyb20gJy4vdW5pdC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IExvY2FsQWN0aW9uRGlzcGF0Y2hlciwgVGV4dHNEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi90ZXh0cy1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQW5pbWF0aW9uU3BlYyB7XG4gIHR5cGU6ICdtb3ZlJ1xuICB1bml0SWQ6IFVuaXRJZFxuICBmcm9tOiBIZXhcbiAgdG86IEhleFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbWJhdEFuaW1hdGlvblNwZWMge1xuICB0eXBlOiAnY29tYmF0J1xuICBhdHRhY2tlcjoge1xuICAgIHVuaXRJZDogVW5pdElkXG4gICAgbG9jYXRpb246IEhleFxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAga2lsbGVkOiBib29sZWFuXG4gIH1cbiAgZGVmZW5kZXI6IHtcbiAgICB1bml0SWQ6IFVuaXRJZFxuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGtpbGxlZDogYm9vbGVhblxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEFuaW1hdGlvblNwZWMgPSBNb3ZlQW5pbWF0aW9uU3BlYyB8IENvbWJhdEFuaW1hdGlvblNwZWNcblxuZXhwb3J0IGNsYXNzIERpc3BsYXlPYmplY3RzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgbWFwRGlzcGxheU9iamVjdDogTWFwRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHJlYWRvbmx5IHVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IHRleHRzRGlzcGxheU9iamVjdDogVGV4dHNEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgcHJpdmF0ZSBpc0FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIGFuaW1hdGlvbnM6IEFuaW1hdGlvblNwZWNbXSA9IFtdXG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZSxcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyID0gbG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0ID0gbmV3IE1hcERpc3BsYXlPYmplY3Qoc2NlbmUsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdCA9IG5ldyBUZXh0c0Rpc3BsYXlPYmplY3QoXG4gICAgICBzY2VuZSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZSxcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUsXG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcixcbiAgICApXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnQ6IFBvaW50KTogdm9pZCA9PiB0aGlzLm1hcERpc3BsYXlPYmplY3Q/LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50KVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB0aGlzLnRleHRzRGlzcGxheU9iamVjdC5oYXNDbGlja0hhbmRsZXJGb3IocG9pbnQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9IChcbiAgICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICAgIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSxcbiAgICBhbmltYXRpb246IE9wdGlvbjxBbmltYXRpb25TcGVjPixcbiAgKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdD8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcblxuICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IFIuYXBwZW5kKGFuaW1hdGlvbikodGhpcy5hbmltYXRpb25zKVxuICAgICAgdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pLmZvckVhY2godGhpcy5tYW5hZ2VVbml0QXNCZWluZ0FuaW1hdGVkKVxuICAgICAgdGhpcy50cmlnZ2VyQW5pbWF0aW9ucygpXG4gICAgfVxuXG4gICAgdGhpcy5zeW5jVW5pdHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVW5pdHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5yZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCgpXG4gICAgY29uc3QgdW5pdHNUb1N5bmMgPSB0aGlzLndvcmxkU3RhdGUudW5pdHMuZmlsdGVyKCh1bml0KSA9PiAhdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5oYXModW5pdC5pZCkpXG4gICAgZm9yIChjb25zdCB1bml0IG9mIHVuaXRzVG9TeW5jKSB7XG4gICAgICBsZXQgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdC5pZClcbiAgICAgIGlmICghdW5pdERpc3BsYXlPYmplY3QpIHtcbiAgICAgICAgdW5pdERpc3BsYXlPYmplY3QgPSBuZXcgVW5pdERpc3BsYXlPYmplY3QodGhpcy5zY2VuZSwgdW5pdClcbiAgICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXQuaWQsIHVuaXREaXNwbGF5T2JqZWN0KVxuICAgICAgfVxuICAgICAgdW5pdERpc3BsYXlPYmplY3Quc3luY1NjZW5lKHVuaXQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVVbml0RGlzcGxheU9iamVjdHNOb0xvbmdlck5lZWRlZCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdXJwbHVzVW5pdElkcyA9IFIuZGlmZmVyZW5jZShcbiAgICAgIEFycmF5LmZyb20odGhpcy51bml0RGlzcGxheU9iamVjdHMua2V5cygpKSxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQuaWQpLFxuICAgIClcbiAgICBmb3IgKGNvbnN0IHVuaXRJZCBvZiBzdXJwbHVzVW5pdElkcykge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZCk/LmRlc3Ryb3koKVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJBbmltYXRpb25zID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmlzQW5pbWF0aW5nKSB7XG4gICAgICByZXR1cm5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9jZXNzQW5pbWF0aW9ucygpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXF1ZW5jZUFuaW1hdGlvbnMgPSAoKToge1xuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3c6IEFuaW1hdGlvblNwZWNbXVxuICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlcjogQW5pbWF0aW9uU3BlY1tdXG4gIH0gPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMgPSBuZXcgU2V0PFVuaXRJZD4oKVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cgPSBbXVxuICAgIGNvbnN0IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciA9IFtdXG4gICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgdGhpcy5hbmltYXRpb25zKSB7XG4gICAgICBjb25zdCB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgY29uc3QgYWZmZWN0ZWRCeUVhcmxpZXJBbmltYXRpb25zID0gUi5hbnkoXG4gICAgICAgICh1bml0SWQpID0+IHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMuaGFzKHVuaXRJZCksXG4gICAgICAgIHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uLFxuICAgICAgKVxuICAgICAgaWYgKGFmZmVjdGVkQnlFYXJsaWVyQW5pbWF0aW9ucykge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIucHVzaChhbmltYXRpb24pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbmltYXRpb25zVG9QZXJmb3JtTm93LnB1c2goYW5pbWF0aW9uKVxuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB1bml0SWQgb2YgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24pIHtcbiAgICAgICAgdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucy5hZGQodW5pdElkKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcm9jZXNzQW5pbWF0aW9ucyA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICB0aGlzLmlzQW5pbWF0aW5nID0gdHJ1ZVxuICAgIHRyeSB7XG4gICAgICB3aGlsZSAodGhpcy5hbmltYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgeyBhbmltYXRpb25zVG9QZXJmb3JtTm93LCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgfSA9IHRoaXMuc2VxdWVuY2VBbmltYXRpb25zKClcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cubWFwKHRoaXMucnVuQW5pbWF0aW9uKSlcbiAgICAgICAgZm9yIChjb25zdCBhbmltYXRpb24gb2YgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdykge1xuICAgICAgICAgIHRoaXMucmVsZWFzZVVuaXRzRnJvbUJlaW5nQW5pbWF0ZWRXaGVyZU5vTG9uZ2VyTmVlZGVkKGFuaW1hdGlvbilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2VcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbGVhc2VVbml0c0Zyb21CZWluZ0FuaW1hdGVkV2hlcmVOb0xvbmdlck5lZWRlZCA9IChhbmltYXRpb246IEFuaW1hdGlvblNwZWMpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0SWRzSW5BbmltYXRpb24gPSB0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICBjb25zdCB1bml0SWRzSW5SZW1haW5pbmdBbmltYXRpb25zID0gdGhpcy5nZXRVbml0c0ludm9sdmVkSW5BbmltYXRpb25zKClcbiAgICBjb25zdCB1bml0SWRzVG9SZWxlYXNlID0gUi5kaWZmZXJlbmNlKHVuaXRJZHNJbkFuaW1hdGlvbiwgdW5pdElkc0luUmVtYWluaW5nQW5pbWF0aW9ucylcbiAgICB1bml0SWRzVG9SZWxlYXNlLmZvckVhY2godGhpcy5yZWxlYXNlVW5pdEZyb21CZWluZ0FuaW1hdGVkKVxuICB9XG5cbiAgcHJpdmF0ZSBtYW5hZ2VVbml0QXNCZWluZ0FuaW1hdGVkID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKGRpc3BsYXlPYmplY3QpIHtcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgICB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0SWQsIGRpc3BsYXlPYmplY3QpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWxlYXNlVW5pdEZyb21CZWluZ0FuaW1hdGVkID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZClcbiAgICBpZiAoIWRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHt1bml0SWR9YFxuICAgIHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgIGRpc3BsYXlPYmplY3Quc3luY1NjZW5lKHVuaXQpXG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdElkLCBkaXNwbGF5T2JqZWN0KVxuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5T2JqZWN0LmRlc3Ryb3koKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VW5pdHNJbnZvbHZlZEluQW5pbWF0aW9ucyA9ICgpOiBVbml0SWRbXSA9PiBSLmNoYWluKHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24sIHRoaXMuYW5pbWF0aW9ucylcblxuICBwcml2YXRlIGdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uID0gKGFuaW1hdGlvbjogQW5pbWF0aW9uU3BlYyk6IFVuaXRJZFtdID0+IHtcbiAgICBzd2l0Y2ggKGFuaW1hdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgcmV0dXJuIFthbmltYXRpb24udW5pdElkXVxuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgcmV0dXJuIFthbmltYXRpb24uYXR0YWNrZXIudW5pdElkLCBhbmltYXRpb24uZGVmZW5kZXIudW5pdElkXVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuQW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbjogQW5pbWF0aW9uU3BlYyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bk1vdmVBbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5Db21iYXRBbmltYXRpb24oYW5pbWF0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFuaW1hdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bk1vdmVBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBNb3ZlQW5pbWF0aW9uU3BlYyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChhbmltYXRpb24udW5pdElkKVxuICAgIGlmICghZGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke2FuaW1hdGlvbi51bml0SWR9YFxuICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuV0FMSylcbiAgICBhd2FpdCBkaXNwbGF5T2JqZWN0LnJ1bk1vdmVBbmltYXRpb24oYW5pbWF0aW9uLmZyb20sIGFuaW1hdGlvbi50bylcbiAgfVxuXG4gIHByaXZhdGUgcnVuQ29tYmF0QW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbjogQ29tYmF0QW5pbWF0aW9uU3BlYyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBhbmltYXRpb25cbiAgICBjb25zdCBhdHRhY2tlckRpc3BsYXlPYmplY3QgPSB0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmdldChhdHRhY2tlci51bml0SWQpXG4gICAgaWYgKCFhdHRhY2tlckRpc3BsYXlPYmplY3QpIHRocm93IGBVbmV4cGVjdGVkIG1pc3NpbmcgZGlzcGxheSBvYmplY3QgZm9yIHVuaXQgJHthdHRhY2tlci51bml0SWR9YFxuICAgIGNvbnN0IGRlZmVuZGVyRGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGRlZmVuZGVyLnVuaXRJZClcbiAgICBpZiAoIWRlZmVuZGVyRGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke2RlZmVuZGVyLnVuaXRJZH1gXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5BVFRBQ0spXG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCB8fCBkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuREVBVEgpXG4gICAgfVxuICAgIGNvbnN0IHNpbXVsdGFuZW91c0FuaW1hdGlvbnMgPSBbXVxuICAgIHNpbXVsdGFuZW91c0FuaW1hdGlvbnMucHVzaChhdHRhY2tlckRpc3BsYXlPYmplY3QucnVuQXR0YWNrQW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgc2ltdWx0YW5lb3VzQW5pbWF0aW9ucy5wdXNoKGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5EZWF0aEFuaW1hdGlvbigpKVxuICAgIH1cbiAgICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKCkpXG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKHNpbXVsdGFuZW91c0FuaW1hdGlvbnMpXG4gICAgYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgYXR0YWNrZXIuZGFtYWdlKVxuICAgIGRlZmVuZGVyRGlzcGxheU9iamVjdC5ydW5EYW1hZ2VBbmltYXRpb24oZGVmZW5kZXIubG9jYXRpb24sIGRlZmVuZGVyLmRhbWFnZSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkUG9pbnRzLCBtdWx0aXBseVBvaW50LCBQb2ludCwgc3VidHJhY3RQb2ludHMgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IGNlbnRlclBvaW50LCBmcm9tUG9pbnQgfSBmcm9tICcuLi9oZXgtZ2VvbWV0cnknXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gIENvbWJhdFdvcmxkRXZlbnQsXG4gIEdhbWVPdmVyV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IG5vdGhpbmcsIE9wdGlvbiwgdG9NYXliZSB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUsIExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IEFMTF9BVURJT19LRVlTLCBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgbWFwVG9Mb2NhbEFjdGlvbiB9IGZyb20gJy4va2V5Ym9hcmQtbWFwcGVyJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IExvY2FsQWN0aW9uUHJvY2Vzc29yLCBMb2NhbEFjdGlvblJlc3VsdCB9IGZyb20gJy4vbG9jYWwtYWN0aW9uLXByb2Nlc3NvcidcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuLi9jb21iaW5lZC1zdGF0ZS1tZXRob2RzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2VydmVyL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiB9IGZyb20gJy4uLy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IEFuaW1hdGlvblNwZWMsIERpc3BsYXlPYmplY3RzIH0gZnJvbSAnLi9kaXNwbGF5LW9iamVjdHMnXG5pbXBvcnQgUG9pbnRlciA9IFBoYXNlci5JbnB1dC5Qb2ludGVyXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcblxuZXhwb3J0IGNvbnN0IEdBTUVfU0NFTkVfS0VZID0gJ0dhbWUnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBHQU1FX1NDRU5FX0tFWSxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lU2NlbmVEYXRhIHtcbiAgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwbGF5ZXJJZDogUGxheWVySWRcbiAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxufVxuXG5leHBvcnQgY29uc3QgSEVYX1NJWkUgPSA0OFxuZXhwb3J0IGNvbnN0IERSQVdJTkdfT0ZGU0VUID0geyB4OiA2MCwgeTogMTAwIH1cbmV4cG9ydCBjb25zdCBoZXhDZW50ZXIgPSAoaGV4OiBIZXgpOiBQb2ludCA9PiBhZGRQb2ludHMobXVsdGlwbHlQb2ludChjZW50ZXJQb2ludChoZXgpLCBIRVhfU0laRSksIERSQVdJTkdfT0ZGU0VUKVxuXG5leHBvcnQgdHlwZSBHYW1lSWQgPSBzdHJpbmdcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgc2VydmVyT3JDbGllbnQ/OiBTZXJ2ZXIgfCBDbGllbnRcblxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFXG5cbiAgcHJpdmF0ZSBkaXNwbGF5T2JqZWN0cz86IERpc3BsYXlPYmplY3RzXG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICAvLyBDcmVhdGVcbiAgLy8gLS0tLS0tXG5cbiAgcHVibGljIGNyZWF0ZSA9IChzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHNlcnZlck9yQ2xpZW50LCBwbGF5ZXJJZCwgd29ybGRTdGF0ZSB9ID0gc2NlbmVEYXRhXG4gICAgdGhpcy5zZXRVcFNvdW5kKClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURS5jb3B5KHsgcGxheWVySWQgfSlcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICBpZiAoc2VydmVyT3JDbGllbnQgaW5zdGFuY2VvZiBTZXJ2ZXIpIHtcbiAgICAgIHRoaXMuYWN0QXNTZXJ2ZXIoc2VydmVyT3JDbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoc2VydmVyT3JDbGllbnQpXG4gICAgfVxuXG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cyA9IG5ldyBEaXNwbGF5T2JqZWN0cyh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24pXG4gICAgdGhpcy5oYW5kbGVOZXdUdXJuKClcbiAgICB0aGlzLnNldFVwSW5wdXRzKClcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBTb3VuZCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICBBTExfQVVESU9fS0VZUy5mb3JFYWNoKChrZXkpID0+IHRoaXMuc291bmQuYWRkKGtleSkpXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKGFuaW1hdGlvbj86IEFuaW1hdGlvblNwZWMpOiB2b2lkID0+XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cz8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSwgYW5pbWF0aW9uKVxuXG4gIC8vIE5ldHdvcmtpbmdcbiAgLy8gLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgYWN0QXNDbGllbnQgPSAoY2xpZW50OiBDbGllbnQpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gY2xpZW50XG4gICAgY2xpZW50LmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlU2VydmVyVG9DbGllbnRNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgPSAobWVzc2FnZTogU2VydmVyVG9DbGllbnRNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2pvaW5lZCc6XG4gICAgICBjYXNlICdyZWpvaW5lZCc6XG4gICAgICAgIGNvbnNvbGUubG9nKCdVbmV4cGVjdGVkIG1lc3NhZ2UgbWlkLWdhbWUnKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnd29ybGRFdmVudCc6XG4gICAgICAgIHRoaXMuaGFuZGxlV29ybGRFdmVudChkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuZXZlbnQpKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RBc1NlcnZlciA9IChzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT4ge1xuICAgIHNlcnZlci5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnQpXG4gICAgdGhpcy53b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmNTZW5kVG9TZXJ2ZXIgPSBhc3luYyAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmICghdGhpcy5zZXJ2ZXJPckNsaWVudCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBzZXJ2ZXJPckNsaWVudGBcbiAgICBpZiAodGhpcy5zZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5zZXJ2ZXJPckNsaWVudC5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcnZlck9yQ2xpZW50LnNlbmRBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIC8vIElucHV0IGhhbmRsZXJzXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBzZXRVcElucHV0cyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmlucHV0Lm1vdXNlLmRpc2FibGVDb250ZXh0TWVudSgpXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5KVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bilcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uID0gbWFwVG9Mb2NhbEFjdGlvbihldmVudCwgdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlKVxuICAgIGlmIChsb2NhbEFjdGlvbikgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbihsb2NhbEFjdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTG9jYWxBY3Rpb24gPSAobG9jYWxBY3Rpb246IExvY2FsQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb25Qcm9jZXNzb3IgPSBuZXcgTG9jYWxBY3Rpb25Qcm9jZXNzb3IodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsQWN0aW9uUHJvY2Vzc29yLnByb2Nlc3MobG9jYWxBY3Rpb24pXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgdGhpcy5lbmFjdExvY2FsQWN0aW9uUmVzdWx0KHJlc3VsdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVuYWN0TG9jYWxBY3Rpb25SZXN1bHQgPSAocmVzdWx0OiBMb2NhbEFjdGlvblJlc3VsdCk6IHZvaWQgPT4ge1xuICAgIGlmIChyZXN1bHQubmV3TG9jYWxHYW1lU3RhdGUpIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSByZXN1bHQubmV3TG9jYWxHYW1lU3RhdGVcbiAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICB9XG4gICAgaWYgKHJlc3VsdC53b3JsZEFjdGlvbikge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcjogdHJ1ZSB9KVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuXG4gICAgICB0aGlzLmFzeW5jU2VuZFRvU2VydmVyKHJlc3VsdC53b3JsZEFjdGlvbikudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IGZhbHNlIH0pXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9pbnRlclBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cz8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyRG93biA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGVzZSBhcyB0aGV5IGhhdmUgdGhlaXIgb3duIGhhbmRsZXJzXG4gICAgY29uc3QgcHJlc3NlZFBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgaWYgKHRoaXMuZGlzcGxheU9iamVjdHM/Lmhhc0NsaWNrSGFuZGxlckZvcihwcmVzc2VkUG9pbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocHJlc3NlZFBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHBvaW50ZXIuYnV0dG9uID09IDIpIHtcbiAgICAgIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24oeyB0eXBlOiAnZ29IZXgnLCBoZXggfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVMZWZ0Q2xpY2soaGV4KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTGVmdENsaWNrID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ3NlbGVjdEhleCcsIGhleCB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2NvbXBsZXRlTW92ZScsIHVuaXRJZDogbW9kZS51bml0SWQsIGhleCB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdjb21wbGV0ZUF0dGFjaycsIHVuaXRJZDogbW9kZS51bml0SWQsIGhleCB9KVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICB9XG5cbiAgLy8gU3luY1xuICAvLyAtLS0tXG5cbiAgLy8gSGFuZGxlIHdvcmxkIGV2ZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgb2xkV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQob2xkV29ybGRTdGF0ZSwgZXZlbnQpXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdpbml0aWFsaXNlJzpcbiAgICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgIGNhc2UgJ3BsYXllckNoYW5nZWROYW1lJzpcbiAgICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3VuaXRNb3ZlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudChldmVudCwgb2xkV29ybGRTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQ29tYmF0V29ybGRFdmVudChldmVudCwgb2xkV29ybGRTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckVuZGVkVHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyRW5kZWRUdXJuKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckRlZmVhdGVkJzpcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJEZWZlYXRlZCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdnYW1lT3Zlcic6XG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoZXZlbnQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICduZXdUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVOZXdUdXJuKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihldmVudClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdhbWVPdmVyID0gKGV2ZW50OiBHYW1lT3ZlcldvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQudmljdG9yID09PSB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkKSB7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMpXG4gICAgfVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGxheWVyRGVmZWF0ZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQpXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOZXdUdXJuID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogdG9NYXliZSh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKSxcbiAgICB9KVxuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuTkVXX1RVUk4pXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50ID0gKGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50LCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIGZyb20sIHRvIH0gPSBldmVudFxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IHdhc1ByZXZpb3VzbHlTZWxlY3RlZCA9XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4ICYmIG9sZFdvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXgpPy5pZCA9PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKHVuaXRJZCwgdG8pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICAgICAgICBzZWxlY3RlZEhleDogdG9NYXliZShuZXdTZWxlY3RlZEhleCksXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSh7IHR5cGU6ICdtb3ZlJywgdW5pdElkLCBmcm9tLCB0byB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayA9ICh1bml0SWQ6IFVuaXRJZCwgZGVmYXVsdExvY2F0aW9uOiBIZXgpOiBPcHRpb248SGV4PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIC8vIFJldGFpbiBzZWxlY3Rpb24gaWYgdW5pdCBzdGlsbCBleGlzdHMgYW5kIHdlIHN0aWxsIGhhdmUgYWN0aW9uIHBvaW50cywgZWxzZSBzZWxlY3QgbmV4dCB1bml0IChvciBub3RoaW5nIGlmIHRoZXJlIGlzbid0IG9uZSlcbiAgICBsZXQgbmV3U2VsZWN0ZWRIZXhcbiAgICBpZiAoIXVuaXQgfHwgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA9PSAwKSB7XG4gICAgICBjb25zdCBuZXh0VW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cyh1bml0SWQpXG4gICAgICBuZXdTZWxlY3RlZEhleCA9IG5leHRVbml0Py5sb2NhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTZWxlY3RlZEhleCA9IGRlZmF1bHRMb2NhdGlvblxuICAgIH1cbiAgICByZXR1cm4gbmV3U2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tYmF0V29ybGRFdmVudCA9IChldmVudDogQ29tYmF0V29ybGRFdmVudCwgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQoYXR0YWNrZXIsIGRlZmVuZGVyLCBvbGRXb3JsZFN0YXRlKVxuICAgIHRoaXMuc3luY1NjZW5lKHtcbiAgICAgIHR5cGU6ICdjb21iYXQnLFxuICAgICAgYXR0YWNrZXIsXG4gICAgICBkZWZlbmRlcixcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdCA9IChcbiAgICBhdHRhY2tlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIGRlZmVuZGVyOiBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gICAgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkVW5pdElkID0gbmV3IENvbWJpbmVkU3RhdGUob2xkV29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSkuZmluZFNlbGVjdGVkVW5pdCgpPy5pZFxuICAgIGlmIChwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgPT0gYXR0YWNrZXIudW5pdElkICYmIGF0dGFja2VyLnBsYXllcklkID09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayhhdHRhY2tlci51bml0SWQsIGF0dGFja2VyLmxvY2F0aW9uKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgc2VsZWN0ZWRIZXg6IHRvTWF5YmUobmV3U2VsZWN0ZWRIZXgpLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVzZWxlY3QgdW5pdCBraWxsZWQgYnkgYW5vdGhlciBwbGF5ZXJcbiAgICAgIGlmIChkZWZlbmRlci5raWxsZWQgJiYgZGVmZW5kZXIudW5pdElkID09IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCAmJiBkZWZlbmRlci5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoe1xuICAgICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgICBzZWxlY3RlZEhleDogbm90aGluZyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBVdGlsIHF1ZXJpZXNcbiAgLy8gLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBnZXQgcGxheWVySWQoKTogUGxheWVySWQge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkXG4gIH1cbn1cbiIsImltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4LWRpcmVjdGlvbidcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21vZGUnXG5cbmV4cG9ydCBjb25zdCBtYXBUb0xvY2FsQWN0aW9uID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBtb2RlOiBNb2RlKTogT3B0aW9uPExvY2FsQWN0aW9uPiA9PiB7XG4gIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICBjYXNlICc0JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLldFU1QgfVxuICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgIGNhc2UgJzYnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uRUFTVCB9XG4gICAgY2FzZSAnNyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5OT1JUSF9XRVNUIH1cbiAgICBjYXNlICczJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1QgfVxuICAgIGNhc2UgJzknOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVCB9XG4gICAgY2FzZSAnMSc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9XRVNUIH1cbiAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2Fib3J0JyB9XG4gICAgY2FzZSAnRW50ZXInOlxuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSByZXR1cm4geyB0eXBlOiAnZW5kVHVybicgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICduJzpcbiAgICAgIGlmIChldmVudC5jdHJsS2V5KSByZXR1cm4geyB0eXBlOiAnc2VsZWN0TmV4dFVuaXQnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbSc6XG4gICAgICBpZiAobW9kZS50eXBlID09ICdzZWxlY3RIZXgnKSByZXR1cm4geyB0eXBlOiAnZW50ZXJNb3ZlTW9kZScgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhJzpcbiAgICAgIGlmIChtb2RlLnR5cGUgPT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnIH1cbiAgICAgIGJyZWFrXG4gIH1cbn1cbiIsImltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5pbXBvcnQgeyBub3RoaW5nLCBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4LWRpcmVjdGlvbidcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21vZGUnXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbEFjdGlvblJlc3VsdCB7XG4gIG5ld0xvY2FsR2FtZVN0YXRlPzogTG9jYWxHYW1lU3RhdGVcbiAgd29ybGRBY3Rpb24/OiBXb3JsZEFjdGlvblxufVxuXG5leHBvcnQgY2xhc3MgTG9jYWxBY3Rpb25Qcm9jZXNzb3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gIH1cblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBwdWJsaWMgcHJvY2VzcyA9IChhY3Rpb246IExvY2FsQWN0aW9uKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnZ28nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVHbyhhY3Rpb24uZGlyZWN0aW9uKVxuICAgICAgY2FzZSAnZ29IZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVHb0hleChhY3Rpb24uaGV4KVxuICAgICAgY2FzZSAnc2VsZWN0TmV4dFVuaXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3ROZXh0VW5pdCgpXG4gICAgICBjYXNlICdhYm9ydCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICAgIGNhc2UgJ2VuZFR1cm4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbmRUdXJuKClcbiAgICAgIGNhc2UgJ2VudGVyTW92ZU1vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlck1vdmVNb2RlKClcbiAgICAgIGNhc2UgJ2VudGVyQXR0YWNrTW9kZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVudGVyQXR0YWNrTW9kZSgpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbGVjdEhleChhY3Rpb24uaGV4KVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdE5leHRVbml0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMoc2VsZWN0ZWRVbml0Py5pZClcbiAgICBpZiAodW5pdFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICAgICAgLnNldFNlbGVjdGVkSGV4KHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pXG4gICAgICAgIC5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiBuZXdMb2NhbEdhbWVTdGF0ZSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFib3J0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBzZWxlY3RlZEhleDogbm90aGluZyB9KSB9XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSkgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRIZXggPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gICAgaWYgKHNlbGVjdGVkSGV4KSByZXR1cm4gdGhpcy5tb3ZlT3JBdHRhY2tIZXgoc2VsZWN0ZWRIZXguZ28oZGlyZWN0aW9uKSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlR29IZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHRoaXMubW92ZU9yQXR0YWNrSGV4KGhleClcblxuICBwcml2YXRlIG1vdmVPckF0dGFja0hleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAoc2VsZWN0ZWRVbml0KSB7XG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5Nb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVUb0hleChzZWxlY3RlZFVuaXQsIGhleClcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleChzZWxlY3RlZFVuaXQsIGhleClcbiAgICAgIGlmICh0YXJnZXRVbml0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChzZWxlY3RlZFVuaXQsIHRhcmdldFVuaXQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2tIZXggPSAoYXR0YWNrZXI6IFVuaXQsIGRlZmVuZGVyOiBVbml0KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ2F0dGFjaycsXG4gICAgICBhdHRhY2tlcjogeyB1bml0SWQ6IGF0dGFja2VyLmlkLCBsb2NhdGlvbjogYXR0YWNrZXIubG9jYXRpb24gfSxcbiAgICAgIGRlZmVuZGVyOiB7IHVuaXRJZDogZGVmZW5kZXIuaWQsIGxvY2F0aW9uOiBkZWZlbmRlci5sb2NhdGlvbiB9LFxuICAgIH0sXG4gIH0pXG5cbiAgcHJpdmF0ZSBtb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgZGVzdGluYXRpb246IEhleCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdtb3ZlVW5pdCcsXG4gICAgICB1bml0SWQ6IHVuaXQuaWQsXG4gICAgICB0bzogZGVzdGluYXRpb24sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIGhhbmRsZUVuZFR1cm4gPSAoKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVybikge1xuICAgICAgcmV0dXJuIHsgd29ybGRBY3Rpb246IHsgdHlwZTogJ2VuZFR1cm4nIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSkge1xuICAgICAgY29uc3QgbmV3TW9kZTogTW9kZSA9IHsgdHlwZTogJ2F0dGFjaycsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZShuZXdNb2RlKVxuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVNb3ZlID0gKHVuaXRJZDogVW5pdElkLCBkZXN0aW5hdGlvbjogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKSkgcmV0dXJuIHRoaXMubW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21wbGV0ZUF0dGFjayA9ICh1bml0SWQ6IFVuaXRJZCwgdGFyZ2V0SGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleChhdHRhY2tlciwgdGFyZ2V0SGV4KVxuICAgIGlmIChkZWZlbmRlcikgcmV0dXJuIHRoaXMuYXR0YWNrSGV4KGF0dGFja2VyLCBkZWZlbmRlcilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0SGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRIZXggPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgLy8gSWYgY2xpY2sgaXMgb3V0IG9mIGJvdW5kcywgZGVzZWxlY3QgYW55IHNlbGVjdGVkIGhleFxuICAgICAgaWYgKHNlbGVjdGVkSGV4KSB7XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZCkgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRIZXggJiYgc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIC8vIGlmIHNlbGVjdGVkIGhleCBpcyBjbGlja2VkLCB0b2dnbGUgc2VsZWN0aW9uIG9mZlxuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0U2VsZWN0ZWRIZXgodW5kZWZpbmVkKSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KGhleCkgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgRFJBV0lOR19PRkZTRVQsIEhFWF9TSVpFLCBoZXhDZW50ZXIgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBtdWx0aXBseVBvaW50LCBwb2ludCwgUG9pbnQsIHN1YnRyYWN0UG9pbnRzIH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBmcm9tUG9pbnQsIGhleENvcm5lcnMgfSBmcm9tICcuLi9oZXgtZ2VvbWV0cnknXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQge1xuICBDb2xvdXJOdW1iZXIsXG4gIERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSLFxuICBIT1ZFUl9USUxFX0NPTE9VUixcbiAgU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSLFxuICBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUixcbn0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCBQb2x5Z29uID0gUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb25cblxudHlwZSBUaWxlU3RhdGUgPSAnZGVmYXVsdCcgfCAnc2VsZWN0ZWQnIHwgJ3RhcmdldGFibGUnXG5cbmV4cG9ydCBjbGFzcyBNYXBEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGhleFBvbHlnb25zOiBNYXA8c3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4gPSBuZXcgTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+KClcbiAgcHJpdmF0ZSBwcmV2aW91c0hvdmVySGV4PzogSGV4XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGZvciAoY29uc3QgaGV4IG9mIHRoaXMud29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSkgdGhpcy5jcmVhdGVIZXgoaGV4KVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIZXggPSAoaGV4OiBIZXgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwb2x5Z29uQ2VudGVyID0gaGV4Q2VudGVyKGhleClcbiAgICB0aGlzLnNjZW5lLmFkZC5pbWFnZShwb2x5Z29uQ2VudGVyLngsIHBvbHlnb25DZW50ZXIueSwgJ2dyYXNzJykuc2V0U2NhbGUoMC42NSkuc2V0RGVwdGgoLTUpXG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMuYWRkUG9seWdvbihwb2x5Z29uQ2VudGVyLCBIRVhfU0laRSlcbiAgICB0aGlzLmhleFBvbHlnb25zLnNldChoZXgudG9TdHJpbmcoKSwgcG9seWdvbilcbiAgfVxuXG4gIHByaXZhdGUgYWRkUG9seWdvbihjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIpOiBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbiB7XG4gICAgY29uc3QgdmVydGljZXMgPSBbLi4uaGV4Q29ybmVycyhwb2ludCgwLCAwKSwgc2l6ZSldXG4gICAgcmV0dXJuIHRoaXMuc2NlbmUuYWRkLnBvbHlnb24oY2VudGVyLngsIGNlbnRlci55LCB2ZXJ0aWNlcykuc2V0T3JpZ2luKDAsIDApLnNldEZpbGxTdHlsZSgweDAwMDAwLCAwKVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgZm9yIChjb25zdCBoZXggb2YgdGhpcy53b3JsZFN0YXRlLm1hcC5nZXRNYXBIZXhlcygpKSB7XG4gICAgICB0aGlzLnN5bmNUaWxlKGhleClcbiAgICB9XG4gIH1cblxuICAvLyBEZXB0aHNcbiAgLy8gLTUgLSBpbWFnZVxuICAvLyAtNCAtIGRlZmF1bHQgYm9yZGVyXG4gIC8vIC0zIC0gdGFyZ2V0YWJsZSBib3JkZXJcbiAgLy8gLTIgLSBzZWxlY3RlZFxuICAvLyAtMSAtIGhvdmVyXG5cbiAgcHJpdmF0ZSBnZXREZXB0aCA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IG51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gLTRcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gLTNcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIC0yXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVGlsZSA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICB0aGlzLmdldEhleFBvbHlnb24oaGV4KS5zZXRTdHJva2VTdHlsZSgzLCB0aGlzLmdldEhleEJvcmRlckNvbG91cih0aWxlU3RhdGUpKS5zZXREZXB0aCh0aGlzLmdldERlcHRoKHRpbGVTdGF0ZSkpXG4gIH1cblxuICBwcml2YXRlIGdldEhleFBvbHlnb24gPSAoaGV4OiBIZXgpOiBQb2x5Z29uID0+IHtcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5oZXhQb2x5Z29ucy5nZXQoaGV4LnRvU3RyaW5nKCkpXG4gICAgaWYgKCFwb2x5Z29uKSB0aHJvdyBgTm8gcG9seWdvbiBmb3VuZCBmb3IgJHtoZXh9YFxuICAgIHJldHVybiBwb2x5Z29uXG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVRpbGVTdGF0ZSA9IChoZXg6IEhleCk6IFRpbGVTdGF0ZSA9PiB7XG4gICAgY29uc3QgeyBwbGF5ZXJJZCwgc2VsZWN0ZWRIZXgsIG1vZGUgfSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICBpZiAoc2VsZWN0ZWRIZXggJiYgc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIHJldHVybiAnc2VsZWN0ZWQnXG4gICAgfVxuICAgIGlmIChtb2RlLnR5cGUgPT0gJ21vdmVVbml0Jykge1xuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXgpICYmICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpKSB7XG4gICAgICAgIHJldHVybiAndGFyZ2V0YWJsZSdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PSAnYXR0YWNrJykge1xuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXgpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgIT0gcGxheWVySWQpIHtcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldGFibGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdkZWZhdWx0J1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZXhCb3JkZXJDb2xvdXIgPSAodGlsZVN0YXRlOiBUaWxlU3RhdGUpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIHN3aXRjaCAodGlsZVN0YXRlKSB7XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEhvdmVySGV4Qm9yZGVyQ29sb3VyID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIGhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludDogUG9pbnQpOiB2b2lkIHtcbiAgICBjb25zdCBoZXggPSBmcm9tUG9pbnQobXVsdGlwbHlQb2ludChzdWJ0cmFjdFBvaW50cyhwb2ludGVyUG9pbnQsIERSQVdJTkdfT0ZGU0VUKSwgMSAvIEhFWF9TSVpFKSlcbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVySGV4ICYmIHRoaXMucHJldmlvdXNIb3ZlckhleC5lcXVhbHMoaGV4KSkgcmV0dXJuXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlckhleCkge1xuICAgICAgdGhpcy5zeW5jVGlsZSh0aGlzLnByZXZpb3VzSG92ZXJIZXgpXG4gICAgICB0aGlzLnByZXZpb3VzSG92ZXJIZXggPSB1bmRlZmluZWRcbiAgICB9XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyhoZXgpKSB7XG4gICAgICBjb25zdCB0aWxlU3RhdGUgPSB0aGlzLmNhbGN1bGF0ZVRpbGVTdGF0ZShoZXgpXG4gICAgICB0aGlzLmdldEhleFBvbHlnb24oaGV4KVxuICAgICAgICAuc2V0U3Ryb2tlU3R5bGUodGlsZVN0YXRlID09PSAnZGVmYXVsdCcgPyAyIDogNCwgdGhpcy5nZXRIb3ZlckhleEJvcmRlckNvbG91cih0aWxlU3RhdGUpKVxuICAgICAgICAuc2V0RGVwdGgoLTEpXG4gICAgICB0aGlzLnByZXZpb3VzSG92ZXJIZXggPSBoZXhcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IGhleFdpZHRoLCBtYXBIZWlnaHQgfSBmcm9tICcuLi9oZXgtZ2VvbWV0cnknXG5pbXBvcnQgeyBBQ1RJT05fVEVYVF9DT0xPVVIsIEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiwgUExBWUVSX1RJTlRTIH0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSB9IGZyb20gJy4vZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5cbmV4cG9ydCB0eXBlIExvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IChhY3Rpb246IExvY2FsQWN0aW9uKSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZlYXRUZXh0VHdlZW5YOiBQaGFzZXIuVHdlZW5zLlR3ZWVuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dFR3ZWVuWTogUGhhc2VyLlR3ZWVucy5Ud2VlblxuICBwcml2YXRlIHJlYWRvbmx5IHZpY3RvcnlUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmUsXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IGxvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICAgIGNvbnN0IG1hcCA9IHRoaXMud29ybGRTdGF0ZS5tYXBcbiAgICB0aGlzLnNjZW5lLmFkZFxuICAgICAgLmltYWdlKDM2LCAzMiwgJ2xsYW1hJylcbiAgICAgIC5zZXRTY2FsZSgwLjgpXG4gICAgICAuc2V0VGludChQTEFZRVJfVElOVFNbbG9jYWxHYW1lU3RhdGUucGxheWVySWQgLSAxXSlcbiAgICB0aGlzLnBsYXllclRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDcwLCAyMCwgJycpXG4gICAgdGhpcy5ob3VyZ2xhc3MgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSg4NzUsIDMwLCAnaG91cmdsYXNzJykuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoXG4gICAgICBEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMixcbiAgICAgIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LFxuICAgICAgJycsXG4gICAgKVxuICAgIHRoaXMuYWN0aW9uVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyAyNSwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0Q2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuYWN0aW9uVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5hY3Rpb25UZXh0MiA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA1MCwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0MkNsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dDIuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5lbmRUdXJuVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg3MDAsIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LCAnJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW5kVHVybicgfSkpXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5lbmRUdXJuVGV4dC5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmRlZmVhdFRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoNDYyLCAobWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkpIC8gMiwgJ1lvdSBoYXZlIGJlZW4gZGVmZWF0ZWQhJywge1xuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiA0LFxuICAgICAgfSlcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgICAgLnNldEZvbnRTaXplKDQyKVxuICAgICAgLnNldFZpc2libGUoZmFsc2UpXG4gICAgICAuc2V0RGVwdGgoMTAwKVxuICAgIHRoaXMuZGVmZWF0VGV4dFR3ZWVuWCA9IHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmRlZmVhdFRleHQsXG4gICAgICB4OiAnKz01MCcsXG4gICAgICBkdXJhdGlvbjogMTkwMCxcbiAgICAgIGVhc2U6ICdTaW5lLmVhc2VJbk91dCcsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICB9KVxuICAgIHRoaXMuZGVmZWF0VGV4dFR3ZWVuWSA9IHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmRlZmVhdFRleHQsXG4gICAgICB5OiAnKz01MCcsXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGVhc2U6ICdTaW5lLmVhc2VJbk91dCcsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICB9KVxuICAgIHRoaXMudmljdG9yeVRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoNDYyLCAzMCwgJ1ZpY3RvcnkhJywge1xuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiA0LFxuICAgICAgfSlcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgICAgLnNldEZvbnRTaXplKDQyKVxuICAgICAgLnNldFZpc2libGUoZmFsc2UpXG4gICAgICAuc2V0RGVwdGgoMTAwKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0Q2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnYWJvcnQnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQyQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJyB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgZm9yIChjb25zdCBvYmogb2YgW3RoaXMuZW5kVHVyblRleHQsIHRoaXMuYWN0aW9uVGV4dCwgdGhpcy5hY3Rpb25UZXh0Ml0pXG4gICAgICBpZiAob2JqLmdldEJvdW5kcygpLmNvbnRhaW5zKHBvaW50LngsIHBvaW50LnkpKSByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5jb21iaW5lZFN0YXRlLmdldEN1cnJlbnRQbGF5ZXIoKVxuICAgIHRoaXMuaG91cmdsYXNzLnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyKVxuICAgIHRoaXMucGxheWVyVGV4dC5zZXRUZXh0KGAke3BsYXllci5uYW1lfSAtIFR1cm4gJHt0aGlzLndvcmxkU3RhdGUudHVybn1gKVxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnJylcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuc3luY1NlbGVjdEhleE1vZGVUZXh0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5zeW5jTW92ZVVuaXRNb2RlVGV4dChtb2RlLnVuaXRJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuc3luY0F0dGFja01vZGVUZXh0KG1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICAgIGlmIChwbGF5ZXIuZW5kZWRUdXJuKSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ1dhaXRpbmcgZm9yIG5leHQgdHVybi4uLicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kVHVyblRleHQuc2V0VGV4dCgnRW5kIFR1cm4gKFNoaWZ0ICsgRW50ZXIpJylcbiAgICB9XG4gICAgdGhpcy5kZWZlYXRUZXh0LnNldFZpc2libGUocGxheWVyLmRlZmVhdGVkKVxuICAgIGlmIChwbGF5ZXIuZGVmZWF0ZWQpIHtcbiAgICAgIHRoaXMuZGVmZWF0VGV4dFR3ZWVuWC5wbGF5KClcbiAgICAgIHRoaXMuZGVmZWF0VGV4dFR3ZWVuWS5wbGF5KClcbiAgICB9XG4gICAgdGhpcy52aWN0b3J5VGV4dC5zZXRWaXNpYmxlKHdvcmxkU3RhdGUuZ2FtZU92ZXJJbmZvPy52aWN0b3IgPT09IHBsYXllci5pZClcbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHVuaXQgdG8gYXR0YWNrIChvciBFU0MgdG8gY2FuY2VsKScpXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzY3JpYmVVbml0ID0gKHVuaXQ6IFVuaXQpOiBzdHJpbmcgPT5cbiAgICBgJHt1bml0Lm5hbWV9IC0gTGxhbWEgd2FycmlvciAtIEhQICR7dW5pdC5oaXRQb2ludHMuY3VycmVudH0vJHt1bml0LmhpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke3VuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnR9LyR7dW5pdC5hY3Rpb25Qb2ludHMubWF4fWBcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSEVBTFRIX0JPUkRFUl9DT0xPVVIsIEhFQUxUSF9FTVBUWV9DT0xPVVIsIEhFQUxUSF9GVUxMX0NPTE9VUiwgUExBWUVSX1RJTlRTIH0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IGFkZFBvaW50cywgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IHBsYXlUd2VlbiB9IGZyb20gJy4uLy4uL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmNvbnN0IEhFQUxUSF9CQVJfV0lEVEggPSA1MFxuY29uc3QgSEVBTFRIX0JBUl9IRUlHSFQgPSAxMlxuY29uc3QgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTID0gMlxuY29uc3QgSU1BR0VfT0ZGU0VUID0geyB4OiAwLCB5OiA0IH1cbmNvbnN0IEhFQUxUSF9CQVJfT0ZGU0VUID0geyB4OiAtMjUsIHk6IC00MCB9XG5cbmV4cG9ydCBjbGFzcyBVbml0RGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHVuaXQ6IFVuaXRcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoQmFyR3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljc1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgdGhpcy5pbWFnZSA9IHNjZW5lLmFkZFxuICAgICAgLmltYWdlKDAsIDAsICdsbGFtYScpXG4gICAgICAuc2V0U2NhbGUoMC44KVxuICAgICAgLnNldFRpbnQoUExBWUVSX1RJTlRTW3RoaXMudW5pdC5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MgPSBzY2VuZS5hZGQuZ3JhcGhpY3MoKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZWFsdGhCYXJQb3NpdGlvbiA9IChwb2ludDogUG9pbnQpOiBQb2ludCA9PiBhZGRQb2ludHMocG9pbnQsIEhFQUxUSF9CQVJfT0ZGU0VUKVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAodW5pdDogVW5pdCk6IHZvaWQgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09IHRoaXMudW5pdC5pZClcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgY29uc3QgdW5pdFBvaW50ID0gaGV4Q2VudGVyKHRoaXMudW5pdC5sb2NhdGlvbilcbiAgICB0aGlzLmltYWdlLnNldFBvc2l0aW9uKHVuaXRQb2ludC54ICsgSU1BR0VfT0ZGU0VULngsIHVuaXRQb2ludC55ICsgSU1BR0VfT0ZGU0VULnkpXG4gICAgdGhpcy5zeW5jSGVhbHRoQmFyKHVuaXRQb2ludClcbiAgfVxuXG4gIHByaXZhdGUgc3luY0hlYWx0aEJhciA9ICh1bml0UG9pbnQ6IFBvaW50KSA9PiB7XG4gICAgY29uc3QgaGVhbHRoQmFyUG9zaXRpb24gPSB0aGlzLmdldEhlYWx0aEJhclBvc2l0aW9uKHVuaXRQb2ludClcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLnNldFBvc2l0aW9uKGhlYWx0aEJhclBvc2l0aW9uLngsIGhlYWx0aEJhclBvc2l0aW9uLnkpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5jbGVhcigpXG5cbiAgICAvLyBEcmF3IGJvcmRlclxuICAgIGNvbnN0IGlubmVyV2lkdGggPSBIRUFMVEhfQkFSX1dJRFRIIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gSEVBTFRIX0JBUl9IRUlHSFQgLSAyICogSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0JPUkRFUl9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdCgwLCAwLCBIRUFMVEhfQkFSX1dJRFRILCBIRUFMVEhfQkFSX0hFSUdIVClcblxuICAgIC8vIERyYXcgZW1wdHkgYmFja2dyb3VuZFxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9FTVBUWV9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdChIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpXG5cbiAgICAvLyBGaWxsIGluIGJhclxuICAgIGNvbnN0IHsgY3VycmVudCwgbWF4IH0gPSB0aGlzLnVuaXQuaGl0UG9pbnRzXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0ZVTExfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoXG4gICAgICBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsXG4gICAgICBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsXG4gICAgICAoaW5uZXJXaWR0aCAqIGN1cnJlbnQpIC8gbWF4LFxuICAgICAgaW5uZXJIZWlnaHQsXG4gICAgKVxuICB9XG5cbiAgcHVibGljIHJ1bk1vdmVBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgTU9WRV9BTklNQVRJT05fRFVSQVRJT04gPSA1MDBcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiBNT1ZFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5oZWFsdGhCYXJHcmFwaGljcyxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSEVBTFRIX0JBUl9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IE1PVkVfQU5JTUFUSU9OX0RVUkFUSU9OLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtwbGF5VHdlZW4odHdlZW4xKSwgcGxheVR3ZWVuKHR3ZWVuMildKVxuICB9XG5cbiAgcHVibGljIHJ1bkRlYXRoQW5pbWF0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IFt0aGlzLmltYWdlLCB0aGlzLmhlYWx0aEJhckdyYXBoaWNzXSxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gIH1cblxuICBwdWJsaWMgcnVuRGFtYWdlQW5pbWF0aW9uID0gYXN5bmMgKGxvY2F0aW9uOiBIZXgsIGRhbWFnZTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgbG9jYXRpb25Qb2ludCA9IGhleENlbnRlcihsb2NhdGlvbilcbiAgICBjb25zdCB0ZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KGxvY2F0aW9uUG9pbnQueCwgbG9jYXRpb25Qb2ludC55LCBkYW1hZ2UudG9TdHJpbmcoKSwge1xuICAgICAgICBjb2xvcjogJyNmZjg4ODgnLFxuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiAyLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNilcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0ZXh0LFxuICAgICAgeToge1xuICAgICAgICBmcm9tOiBsb2NhdGlvblBvaW50LnkgLSA1MCxcbiAgICAgICAgdG86IGxvY2F0aW9uUG9pbnQueSAtIDc1LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgZWFzZTogJ0xpbmVhcicsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGVhc2U6ICdDdWJpYy5pbicsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICB0ZXh0LmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIHJ1bkF0dGFja0FuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2NlbmUudHdlZW5zLmtpbGxUd2VlbnNPZihbdGhpcy5oZWFsdGhCYXJHcmFwaGljcywgdGhpcy5pbWFnZV0pXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5kZXN0cm95KClcbiAgICB0aGlzLmltYWdlLmRlc3Ryb3koKVxuICB9XG59XG5cbnR5cGUgVHdlZW5YWSA9IHsgeDogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfTsgeTogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfSB9XG5cbmNvbnN0IGNhbGN1bGF0ZVR3ZWVuWFkgPSAoZnJvbTogUG9pbnQsIHRvOiBQb2ludCwgb2Zmc2V0OiBQb2ludCk6IFR3ZWVuWFkgPT4gKHtcbiAgeDoge1xuICAgIGZyb206IGZyb20ueCArIG9mZnNldC54LFxuICAgIHRvOiB0by54ICsgb2Zmc2V0LngsXG4gIH0sXG4gIHk6IHtcbiAgICBmcm9tOiBmcm9tLnkgKyBvZmZzZXQueSxcbiAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICB9LFxufSlcbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL21lbnUtYnV0dG9uJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiB9IGZyb20gJy4uLy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBzZXRVcmxJbmZvIH0gZnJvbSAnLi4vYm9vdC9ib290LXNjZW5lJ1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgY29uc3QgTUFJTl9NRU5VX1NDRU5FX0tFWSA9ICdNYWluTWVudSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IE1BSU5fTUVOVV9TQ0VORV9LRVksXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYWRkLnRleHQoMTAwLCA1MCwgJ0xsYW1hIFdhcnMnLCB7IGZpbGw6ICcjRkZGRkZGJyB9KS5zZXRGb250U2l6ZSgyNClcblxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnSG9zdCBHYW1lJywgKCkgPT4gdGhpcy5oYW5kbGVTdGFydEdhbWUoKSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRHYW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZDogR2FtZUlkID0gdXVpZCgpXG4gICAgY29uc3QgcGxheWVySWQgPSAxXG4gICAgY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgSU5JVElBTF9XT1JMRF9TVEFURSwgMClcbiAgICBzZXJ2ZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCB7IHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IElOSVRJQUxfV09STERfU1RBVEUgfSlcbiAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkIH0pXG4gICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciwgd29ybGRTdGF0ZTogc2VydmVyLndvcmxkU3RhdGUsIHBsYXllcklkOiBwbGF5ZXJJZCB9XG4gICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlQb2ludCA9IChwb2ludDogUG9pbnQsIG46IG51bWJlcik6IFBvaW50ID0+ICh7IHg6IHBvaW50LnggKiBuLCB5OiBwb2ludC55ICogbiB9KVxuXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHtcbiAgeDogcG9pbnQxLnggLSBwb2ludDIueCxcbiAgeTogcG9pbnQxLnkgLSBwb2ludDIueSxcbn0pXG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXR0YWNrV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgQ29tYmF0V29ybGRFdmVudCwgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgcmFuZG9tSW50SW5jbHVzaXZlIH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcblxuZXhwb3J0IGNsYXNzIEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IHRoaXMudmFsaWRhdGVBdHRhY2soYWN0aW9uKVxuICAgIGNvbnN0IGF0dGFja2VyRGFtYWdlID0gTWF0aC5taW4oYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQsIDEwICsgcmFuZG9tSW50SW5jbHVzaXZlKC0yLCAyKSlcbiAgICBjb25zdCBkZWZlbmRlckRhbWFnZSA9IE1hdGgubWluKGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50LCAyMCArIHJhbmRvbUludEluY2x1c2l2ZSgtMywgMykpXG4gICAgY29uc3QgY29tYmF0V29ybGRFdmVudCA9IHRoaXMubWFrZUNvbWJhdFdvcmxkRXZlbnQoYXR0YWNrZXIsIGF0dGFja2VyRGFtYWdlLCBkZWZlbmRlciwgZGVmZW5kZXJEYW1hZ2UpXG5cbiAgICBsZXQgbmV3V29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50KGNvbWJhdFdvcmxkRXZlbnQpXG4gICAgY29uc3QgZXZlbnRzOiBXb3JsZEV2ZW50W10gPSBbY29tYmF0V29ybGRFdmVudF1cbiAgICBsZXQgbmV4dFdvcmxkRXZlbnRJZCA9IHRoaXMubmV4dFdvcmxkRXZlbnRJZCArIDFcbiAgICBpZiAobmV3V29ybGRTdGF0ZS5pc1BsYXllckRlZmVhdGVkKGRlZmVuZGVyLnBsYXllcklkKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLnBsYXllckRlZmVhdGVkRXZlbnQobmV4dFdvcmxkRXZlbnRJZCsrLCBkZWZlbmRlci5wbGF5ZXJJZClcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KVxuICAgICAgbmV3V29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgaWYgKG5ld1dvcmxkU3RhdGUuaXNQbGF5ZXJEZWZlYXRlZChhdHRhY2tlci5wbGF5ZXJJZCkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5wbGF5ZXJEZWZlYXRlZEV2ZW50KG5leHRXb3JsZEV2ZW50SWQrKywgYXR0YWNrZXIucGxheWVySWQpXG4gICAgICBldmVudHMucHVzaChldmVudClcbiAgICAgIG5ld1dvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgfVxuICAgIGNvbnN0IHVuZGVmZWF0ZWRQbGF5ZXJzID0gbmV3V29ybGRTdGF0ZS5wbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLmRlZmVhdGVkKVxuICAgIGlmIChSLmlzRW1wdHkodW5kZWZlYXRlZFBsYXllcnMpKSB7XG4gICAgICBldmVudHMucHVzaCh7IGlkOiBuZXh0V29ybGRFdmVudElkKyssIHR5cGU6ICdnYW1lT3ZlcicgfSlcbiAgICB9IGVsc2UgaWYgKHVuZGVmZWF0ZWRQbGF5ZXJzLmxlbmd0aCA9PSAxKSB7XG4gICAgICBjb25zdCB2aWN0b3IgPSB1bmRlZmVhdGVkUGxheWVyc1swXS5pZFxuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInLCB2aWN0b3IgfSlcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5ZXJEZWZlYXRlZEV2ZW50ID0gKGlkOiBXb3JsZEV2ZW50SWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllckRlZmVhdGVkV29ybGRFdmVudCA9PiAoe1xuICAgIGlkLFxuICAgIHR5cGU6ICdwbGF5ZXJEZWZlYXRlZCcsXG4gICAgcGxheWVySWQ6IHBsYXllcklkLFxuICB9KVxuXG4gIHByaXZhdGUgdmFsaWRhdGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IHsgYXR0YWNrZXI6IFVuaXQ7IGRlZmVuZGVyOiBVbml0IH0gPT4ge1xuICAgIGNvbnN0IGF0dGFja2VySWQgPSBhY3Rpb24uYXR0YWNrZXIudW5pdElkXG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VySWQpXG4gICAgaWYgKCFhdHRhY2tlcikgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VySWR9YFxuICAgIGlmIChhdHRhY2tlci5wbGF5ZXJJZCAhPSB0aGlzLnBsYXllcklkKSB0aHJvdyBgQ2Fubm90IGNvbnRyb2wgYW5vdGhlciBwbGF5ZXIncyB1bml0OiAke2F0dGFja2VyLmlkfWBcbiAgICBpZiAoYXR0YWNrZXIuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIGF0dGFja2BcbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uYXR0YWNrZXIubG9jYXRpb24pKSB0aHJvdyBgQXR0YWNrZXIgbm90IGluIGV4cGVjdGVkIGxvY2F0aW9uYFxuXG4gICAgY29uc3QgZGVmZW5kZXJJZCA9IGFjdGlvbi5kZWZlbmRlci51bml0SWRcbiAgICBjb25zdCBkZWZlbmRlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXJJZClcbiAgICBpZiAoIWRlZmVuZGVyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXJJZH1gXG4gICAgaWYgKGRlZmVuZGVyLnBsYXllcklkID09IHRoaXMucGxheWVySWQpIHRocm93IGBDYW5ub3QgYXR0YWNrIG93biB1bml0YFxuICAgIGlmICghZGVmZW5kZXIubG9jYXRpb24uZXF1YWxzKGFjdGlvbi5kZWZlbmRlci5sb2NhdGlvbikpIHRocm93IGBEZWZlbmRlciBub3QgaW4gZXhwZWN0ZWQgbG9jYXRpb25gXG5cbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmlzQWRqYWNlbnRUbyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IGF0dGFjayBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2F0dGFja2VyLmxvY2F0aW9ufSB0byAke2RlZmVuZGVyLmxvY2F0aW9ufWBcbiAgICByZXR1cm4geyBhdHRhY2tlciwgZGVmZW5kZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlQ29tYmF0V29ybGRFdmVudCA9IChcbiAgICBhdHRhY2tlcjogVW5pdCxcbiAgICBhdHRhY2tlckRhbWFnZTogbnVtYmVyLFxuICAgIGRlZmVuZGVyOiBVbml0LFxuICAgIGRlZmVuZGVyRGFtYWdlOiBudW1iZXIsXG4gICk6IENvbWJhdFdvcmxkRXZlbnQgPT4gKHtcbiAgICBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLFxuICAgIHR5cGU6ICdjb21iYXQnLFxuICAgIGF0dGFja2VyOiB7XG4gICAgICBwbGF5ZXJJZDogYXR0YWNrZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGF0dGFja2VyLmlkLFxuICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBhdHRhY2tlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT0gYXR0YWNrZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBkZWZlbmRlcjoge1xuICAgICAgcGxheWVySWQ6IGRlZmVuZGVyLnBsYXllcklkLFxuICAgICAgdW5pdElkOiBkZWZlbmRlci5pZCxcbiAgICAgIGxvY2F0aW9uOiBkZWZlbmRlci5sb2NhdGlvbixcbiAgICAgIGRhbWFnZTogZGVmZW5kZXJEYW1hZ2UsXG4gICAgICBraWxsZWQ6IGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50ID09IGRlZmVuZGVyRGFtYWdlLFxuICAgIH0sXG4gICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBDbGllbnRUb1NlcnZlck1lc3NhZ2UsIFNlcnZlclRvQ2xpZW50TWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZXMnXG5pbXBvcnQgeyBHYW1lSWQgfSBmcm9tICcuLi9zY2VuZXMvbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBzZXJpYWxpc2VUb0pzb24gfSBmcm9tICcuLi91dGlsL2pzb24tc2VyaWFsaXNhdGlvbidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IFBlZXIgPSByZXF1aXJlKCdwZWVyanMnKVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2VMaXN0ZW5lciA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIENsaWVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2VydmVyQ29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvblxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogU2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXJbXSA9IFtdXG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2VMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXI6IFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAobWVzc2FnZTogU2VydmVyVG9DbGllbnRNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykgbGlzdGVuZXIobWVzc2FnZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNlcnZlckNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pIHtcbiAgICB0aGlzLnNlcnZlckNvbm5lY3Rpb24gPSBzZXJ2ZXJDb25uZWN0aW9uXG4gICAgc2VydmVyQ29ubmVjdGlvbi5vbignZGF0YScsIChtZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhtZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGNvbm5lY3QgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPENsaWVudD4gPT4ge1xuICAgIGNvbnN0IHNlcnZlckNvbm5lY3Rpb24gPSBhd2FpdCBDbGllbnQuZG9Db25uZWN0KGdhbWVJZClcbiAgICByZXR1cm4gbmV3IENsaWVudChzZXJ2ZXJDb25uZWN0aW9uKVxuICB9XG5cbiAgcHVibGljIHNlbmQgPSAobWVzc2FnZTogQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlKTogdm9pZCA9PiB0aGlzLnNlcnZlckNvbm5lY3Rpb24uc2VuZChtZXNzYWdlKVxuXG4gIHByaXZhdGUgc3RhdGljIGRvQ29ubmVjdCA9IChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8UGVlci5EYXRhQ29ubmVjdGlvbj4gPT5cbiAgICBuZXcgUHJvbWlzZTxQZWVyLkRhdGFDb25uZWN0aW9uPigocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgcGVlciA9IG5ld1BlZXIoKVxuICAgICAgcGVlci5vbignZXJyb3InLCAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgcGVlci5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IHBlZXIuY29ubmVjdChnYW1lSWQsIHsgcmVsaWFibGU6IHRydWUgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKGNvbm5lY3Rpb24pXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgcHVibGljIHNlbmRBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogdm9pZCA9PlxuICAgIHRoaXMuc2VuZCh7XG4gICAgICB0eXBlOiAnd29ybGRBY3Rpb24nLFxuICAgICAgYWN0aW9uOiBzZXJpYWxpc2VUb0pzb24oYWN0aW9uKSxcbiAgICAgIHBsYXllcklkOiBwbGF5ZXJJZCxcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgbmV3UGVlciA9IChpZD86IHN0cmluZywgb3B0aW9ucz86IFBlZXIuUGVlckpTT3B0aW9uKTogUGVlciA9PiBuZXcgKHdpbmRvdyBhcyBhbnkpLlBlZXIoaWQsIG9wdGlvbnMpIGFzIFBlZXJcbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIsIFdvcmxkU3RhdGVPd25lciB9IGZyb20gJy4vd29ybGQtc3RhdGUtb3duZXInXG5pbXBvcnQgeyBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQsIFdvcmxkRXZlbnRJZCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IENsaWVudFRvU2VydmVyTWVzc2FnZSwgUmVqb2luTWVzc2FnZSwgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgbmV3UGVlciB9IGZyb20gJy4vY2xpZW50J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEFkZFBsYXllcldvcmxkQWN0aW9uLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZU93bmVyOiBXb3JsZFN0YXRlT3duZXJcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uczogUGVlci5EYXRhQ29ubmVjdGlvbltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYlxuICBwcml2YXRlIHJlYWRvbmx5IGdhbWVJZDogR2FtZUlkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBwdWJsaWMgZ2V0IHdvcmxkU3RhdGUoKTogV29ybGRTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMud29ybGRTdGF0ZU93bmVyLndvcmxkU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzdG9yZUdhbWUgPSBhc3luYyAod29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIsIGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxTZXJ2ZXI+ID0+IHtcbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCB3b3JsZEV2ZW50RGIuZ2V0RXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgbGV0IHdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBSLnNvcnRCeSgoZXZlbnQpID0+IGV2ZW50LmlkLCBldmVudHMpKSB7XG4gICAgICB3b3JsZFN0YXRlID0gYXBwbHlFdmVudCh3b3JsZFN0YXRlLCBldmVudClcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTZXJ2ZXIod29ybGRFdmVudERiLCBnYW1lSWQsIHdvcmxkU3RhdGUsIGV2ZW50cy5sZW5ndGggKyAxKVxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSBsaXN0ZW5lcihldmVudClcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZEV2ZW50RGIgPSB3b3JsZEV2ZW50RGJcbiAgICB0aGlzLmdhbWVJZCA9IGdhbWVJZFxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyID0gbmV3IFdvcmxkU3RhdGVPd25lcih3b3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkKVxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmFkZExpc3RlbmVyKChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gICAgICB0aGlzLndvcmxkRXZlbnREYi5zdG9yZSh0aGlzLmdhbWVJZCwgZXZlbnQpXG4gICAgICBmb3IgKGNvbnN0IGNsaWVudENvbm5lY3Rpb24gb2YgdGhpcy5jb25uZWN0aW9ucykge1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgPSB7IHR5cGU6ICd3b3JsZEV2ZW50JywgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCkgfVxuICAgICAgICBjbGllbnRDb25uZWN0aW9uLnNlbmQobWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnN0IHBlZXIgPSBuZXdQZWVyKHRoaXMuZ2FtZUlkKVxuICAgIHBlZXIub24oJ2Vycm9yJywgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICBwZWVyLm9uKCdjb25uZWN0aW9uJywgKGNvbm5lY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuY29ubmVjdGlvbnMucHVzaChjb25uZWN0aW9uKVxuICAgICAgY29ubmVjdGlvbi5vbignZGF0YScsIChtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UpID0+IHRoaXMuaGFuZGxlQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlKG1lc3NhZ2UsIGNvbm5lY3Rpb24pKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudEpvaW4gPSAoY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbik6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIC8vIFRPRE86IHRlbGwgdGhlIGNsaWVudCBcImJhZCBsdWNrXCJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWRkUGxheWVyQWN0aW9uOiBBZGRQbGF5ZXJXb3JsZEFjdGlvbiA9IHsgdHlwZTogJ2FkZFBsYXllcicgfVxuICAgICAgY29uc3QgcGxheWVyQWRkZWRFdmVudCA9IDxQbGF5ZXJBZGRlZFdvcmxkRXZlbnQ+dGhpcy5oYW5kbGVBY3Rpb24oMSwgYWRkUGxheWVyQWN0aW9uKVswXVxuICAgICAgY29ubmVjdGlvbi5zZW5kKHtcbiAgICAgICAgdHlwZTogJ2pvaW5lZCcsXG4gICAgICAgIHBsYXllcklkOiBwbGF5ZXJBZGRlZEV2ZW50LnBsYXllcklkLFxuICAgICAgICB3b3JsZFN0YXRlOiB0aGlzLndvcmxkU3RhdGUudG9Kc29uKCksXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50UmVqb2luID0gKG1lc3NhZ2U6IFJlam9pbk1lc3NhZ2UsIGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuaXNWYWxpZFBsYXllcklkKG1lc3NhZ2UucGxheWVySWQpKVxuICAgICAgY29ubmVjdGlvbi5zZW5kKHtcbiAgICAgICAgdHlwZTogJ3Jlam9pbmVkJyxcbiAgICAgICAgd29ybGRTdGF0ZTogd29ybGRTdGF0ZS50b0pzb24oKSxcbiAgICAgIH0pXG4gICAgZWxzZSB7XG4gICAgICAvLyBUT0RPOiB0ZWxsIHRoZSBjbGllbnQgbm9cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSA9IChtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UsIGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdqb2luJzpcbiAgICAgICAgdGhpcy5oYW5kbGVDbGllbnRKb2luKGNvbm5lY3Rpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdyZWpvaW4nOlxuICAgICAgICB0aGlzLmhhbmRsZUNsaWVudFJlam9pbihtZXNzYWdlLCBjb25uZWN0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnd29ybGRBY3Rpb24nOlxuICAgICAgICB0aGlzLndvcmxkU3RhdGVPd25lci5oYW5kbGVBY3Rpb24obWVzc2FnZS5wbGF5ZXJJZCwgZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmFjdGlvbikpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PlxuICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmhhbmRsZUFjdGlvbihwbGF5ZXJJZCwgYWN0aW9uKVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIEF0dGFja1dvcmxkQWN0aW9uLFxuICBDaGFuZ2VQbGF5ZXJOYW1lV29ybGRBY3Rpb24sXG4gIEluaXRpYWxpc2VXb3JsZEFjdGlvbixcbiAgTW92ZVVuaXRXb3JsZEFjdGlvbixcbiAgV29ybGRBY3Rpb24sXG59IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQge1xuICBHYW1lU3RhcnRlZFdvcmxkRXZlbnQsXG4gIEluaXRpYWxpc2VXb3JsZEV2ZW50LFxuICBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCxcbiAgUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkR2VuZXJhdG9yIH0gZnJvbSAnLi93b3JsZC1nZW5lcmF0b3InXG5pbXBvcnQgeyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlV29ybGRFdmVudHMgPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUluaXRpYWxpc2UoYWN0aW9uKVxuICAgICAgY2FzZSAnYWRkUGxheWVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQWRkUGxheWVyKClcbiAgICAgIGNhc2UgJ2NoYW5nZVBsYXllck5hbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lKGFjdGlvbilcbiAgICAgIGNhc2UgJ3N0YXJ0R2FtZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVN0YXJ0R2FtZSgpXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBdHRhY2soYWN0aW9uKVxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb3ZlVW5pdChhY3Rpb24pXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJbml0aWFsaXNlID0gKGFjdGlvbjogSW5pdGlhbGlzZVdvcmxkQWN0aW9uKTogW0luaXRpYWxpc2VXb3JsZEV2ZW50XSA9PiB7XG4gICAgaWYgKHRoaXMubmV4dFdvcmxkRXZlbnRJZCA+IDApIHtcbiAgICAgIHRocm93IGBDYW4gb25seSBpbml0aWFsaXNlIGFzIHRoZSBmaXJzdCBldmVudGBcbiAgICB9XG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdpbml0aWFsaXNlJywgc3RhdGU6IGFjdGlvbi5zdGF0ZSB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBZGRQbGF5ZXIgPSAoKTogW1BsYXllckFkZGVkV29ybGRFdmVudF0gPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nUGxheWVySWRzID0gdGhpcy53b3JsZFN0YXRlLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5pZClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IFIuYXBwbHkoTWF0aC5tYXgsIGV4aXN0aW5nUGxheWVySWRzKSArIDFcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckFkZGVkJywgcGxheWVySWQgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSA9IChhY3Rpb246IENoYW5nZVBsYXllck5hbWVXb3JsZEFjdGlvbik6IFtQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnRdID0+IHtcbiAgICB0aGlzLmdldFBsYXllcigpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdwbGF5ZXJDaGFuZ2VkTmFtZScsIHBsYXllcklkOiB0aGlzLnBsYXllcklkLCBuYW1lOiBhY3Rpb24ubmFtZSB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKTogW0dhbWVTdGFydGVkV29ybGRFdmVudF0gPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIHRocm93IGBDYW5ub3Qgc3RhcnQgYW4gYWxyZWFkeS1zdGFydGVkIGdhbWVgXG4gICAgfVxuICAgIGNvbnN0IHVuaXRzID0gbmV3IFdvcmxkR2VuZXJhdG9yKHRoaXMud29ybGRTdGF0ZSkuZ2VuZXJhdGVVbml0cygpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdnYW1lU3RhcnRlZCcsIHVuaXRzIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgbmV3IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHRoaXMucGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZCkuaGFuZGxlQXR0YWNrKGFjdGlvbilcblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbik6IFtVbml0TW92ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRvIH0gPSBhY3Rpb25cbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICBjb25zdCBmcm9tID0gdW5pdC5sb2NhdGlvblxuICAgIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKSkgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gbW92ZWBcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLFxuICAgICAgICB0eXBlOiAndW5pdE1vdmVkJyxcbiAgICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgICAgIGFjdGlvblBvaW50c0NvbnN1bWVkOiAxLFxuICAgICAgICB1bml0SWQsXG4gICAgICAgIGZyb20sXG4gICAgICAgIHRvLFxuICAgICAgfSxcbiAgICBdXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVuZFR1cm4gPSAoKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmdldFBsYXllcigpXG4gICAgaWYgKHBsYXllci5lbmRlZFR1cm4pIHtcbiAgICAgIHRocm93IGBQbGF5ZXIgaGFzIGFscmVhZHkgZW5kZWQgdGhlaXIgdHVybmBcbiAgICB9XG4gICAgY29uc3QgcGxheWVyRW5kZWRUdXJuQWN0aW9uOiBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50ID0ge1xuICAgICAgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCxcbiAgICAgIHR5cGU6ICdwbGF5ZXJFbmRlZFR1cm4nLFxuICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgfVxuICAgIGNvbnN0IG5ld1dvcmxkU3RhdGUgPSBhcHBseUV2ZW50KHRoaXMud29ybGRTdGF0ZSwgcGxheWVyRW5kZWRUdXJuQWN0aW9uKVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmNhbkFueVBsYXllckFjdCgpKSB7XG4gICAgICByZXR1cm4gW3BsYXllckVuZGVkVHVybkFjdGlvbl1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtwbGF5ZXJFbmRlZFR1cm5BY3Rpb24sIHsgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCArIDEsIHR5cGU6ICduZXdUdXJuJyB9XVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikgdGhyb3cgYE5vIHBsYXllciB3aXRoIElEICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHBsYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyByYW5kb21FbGVtZW50IH0gZnJvbSAnLi4vdXRpbC9yYW5kb20tdXRpbCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvaGl0LXBvaW50cydcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuY29uc3QgTExBTUFfTkFNRVMgPSBbJ1dhbHRlcicsICdEb2xseScsICdDaGV3cGFjYScsICdCYXJhY2sgTy4gTGxhbWEnLCAnQ29tbyBTZSddXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlbWFpbmluZ0hleGVzOiBIZXhbXVxuICBwcml2YXRlIG5leHRVbml0SWQ6IFVuaXRJZCA9IDFcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucmVtYWluaW5nSGV4ZXMgPSBBcnJheS5mcm9tKHdvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVW5pdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0ID0+IHtcbiAgICBjb25zdCBpZCA9IHRoaXMubmV4dFVuaXRJZCsrXG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIGNvbnN0IG5hbWUgPSByYW5kb21FbGVtZW50KExMQU1BX05BTUVTKVxuICAgIHJldHVybiBuZXcgVW5pdCh7XG4gICAgICBpZCxcbiAgICAgIHBsYXllcklkLFxuICAgICAgbmFtZSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlVW5pdHMgPSAoKTogVW5pdFtdID0+XG4gICAgUi5jaGFpbigocGxheWVyKSA9PiBbdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKSwgdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKV0sIHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzKVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IFdvcmxkRXZlbnQsIFdvcmxkRXZlbnRJZCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFdvcmxkQWN0aW9uSGFuZGxlciB9IGZyb20gJy4vd29ybGQtYWN0aW9uLWhhbmRsZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcblxuZXhwb3J0IHR5cGUgV29ybGRFdmVudExpc3RlbmVyID0gKGV2ZW50OiBXb3JsZEV2ZW50KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBXb3JsZFN0YXRlT3duZXIge1xuICBwdWJsaWMgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIG5leHRXb3JsZEV2ZW50SWQ6IFdvcmxkRXZlbnRJZFxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogV29ybGRFdmVudExpc3RlbmVyW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5leHRXb3JsZEV2ZW50SWQ6IFdvcmxkRXZlbnRJZCkge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIGxpc3RlbmVyKGV2ZW50KVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUFjdGlvbiA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHdvcmxkQWN0aW9uSGFuZGxlciA9IG5ldyBXb3JsZEFjdGlvbkhhbmRsZXIodGhpcy53b3JsZFN0YXRlLCBwbGF5ZXJJZCwgdGhpcy5uZXh0V29ybGRFdmVudElkKVxuICAgIGNvbnN0IGV2ZW50cyA9IHdvcmxkQWN0aW9uSGFuZGxlci5jYWxjdWxhdGVXb3JsZEV2ZW50cyhhY3Rpb24pXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBldmVudClcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICAgIH1cbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgKz0gZXZlbnRzLmxlbmd0aFxuICAgIHJldHVybiBldmVudHNcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuY29uc3QgcGFkZGluZyA9IDEwXG5jb25zdCBtaW5pbXVtV2lkdGggPSAyMDBcbmNvbnN0IG1pbmltdW1IZWlnaHQgPSA1MFxuXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xuICBwcml2YXRlIGxhYmVsOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpXG4gICAgc2NlbmUuYWRkLmV4aXN0aW5nKHRoaXMpXG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMClcblxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGRcbiAgICAgIC50ZXh0KHggKyBwYWRkaW5nLCB5ICsgcGFkZGluZywgdGV4dClcbiAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJylcblxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSB0aGlzLmxhYmVsLndpZHRoICsgcGFkZGluZ1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyBwYWRkaW5nXG5cbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSBtaW5pbXVtV2lkdGggPyBsYWJlbFdpZHRoIDogbWluaW11bVdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBsYWJlbEhlaWdodCA+PSBtaW5pbXVtSGVpZ2h0ID8gbGFiZWxIZWlnaHQgOiBtaW5pbXVtSGVpZ2h0XG5cbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKVxuICAgIH1cblxuICAgIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjMDAwMDAwJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNGRkZGRkYnKVxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjQkJCQkJCJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDQ0NDQ0NClcbiAgfVxuXG4gIHB1YmxpYyBzZXRZKHZhbHVlPzogbnVtYmVyKTogdGhpcyB7XG4gICAgdGhpcy5sYWJlbC5zZXRZKHZhbHVlKVxuICAgIHJldHVybiBzdXBlci5zZXRZKHZhbHVlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLW1hcCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGl0UG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvaGl0LXBvaW50cydcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpc2VUb0pzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoc2VyaWFsaXNlVG9Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhleCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIZXgnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZE1hcCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdXb3JsZE1hcCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdvcmxkU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRTdGF0ZScgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFVuaXQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnVW5pdCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhpdFBvaW50cykge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIaXRQb2ludHMnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBBY3Rpb25Qb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnQWN0aW9uUG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgUGxheWVyKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1BsYXllcicgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3T2JqZWN0OiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBzZXJpYWxpc2VUb0pzb24odmFsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3RcbiAgICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVzZXJpYWxpc2VGcm9tSnNvbiA9ICh2YWx1ZTogYW55KTogYW55ID0+IHtcbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChkZXNlcmlhbGlzZUZyb21Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PSAnSGV4Jykge1xuICAgICAgICByZXR1cm4gSGV4LmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PSAnV29ybGRNYXAnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZE1hcC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT0gJ1dvcmxkU3RhdGUnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZFN0YXRlLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PSAnVW5pdCcpIHtcbiAgICAgICAgcmV0dXJuIFVuaXQuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdBY3Rpb25Qb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBBY3Rpb25Qb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdIaXRQb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBIaXRQb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdQbGF5ZXInKSB7XG4gICAgICAgIHJldHVybiBQbGF5ZXIuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdPYmplY3Q6IGFueSA9IHt9XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IGRlc2VyaWFsaXNlRnJvbUpzb24odmFsKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdPYmplY3RcbiAgICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFR3ZWVuID0gUGhhc2VyLlR3ZWVucy5Ud2VlblxuXG5leHBvcnQgY29uc3QgcGxheVR3ZWVuID0gKHR3ZWVuOiBUd2Vlbik6IFByb21pc2U8dm9pZD4gPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHR3ZWVuLnNldENhbGxiYWNrKCdvbkNvbXBsZXRlJywgcmVzb2x2ZSwgW10pLnBsYXkoKSlcbiIsImV4cG9ydCBjb25zdCByYW5kb21JbnRJbmNsdXNpdmUgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+XG4gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUludEV4Y2x1c2l2ZSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluXG5cbmV4cG9ydCBjb25zdCByYW5kb21FbGVtZW50ID0gPFQ+KGFycmF5OiBUW10pOiBUID0+IGFycmF5W3JhbmRvbUludEV4Y2x1c2l2ZSgwLCBhcnJheS5sZW5ndGgpXVxuIiwiZXhwb3J0IHR5cGUgT3B0aW9uPFQ+ID0gVCB8IHVuZGVmaW5lZFxuXG5leHBvcnQgaW50ZXJmYWNlIEp1c3Q8VD4ge1xuICB0eXBlOiAnanVzdCdcbiAgaXRlbTogVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGhpbmcge1xuICB0eXBlOiAnbm90aGluZydcbn1cblxuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBKdXN0PFQ+IHwgTm90aGluZ1xuXG5leHBvcnQgY29uc3QgdG9NYXliZSA9IDxUPihvcHRpb246IE9wdGlvbjxUPik6IE1heWJlPFQ+ID0+IChvcHRpb24gPT0gdW5kZWZpbmVkID8gbm90aGluZyA6IGp1c3Qob3B0aW9uKSlcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pXG4iLCJleHBvcnQgY2xhc3MgVW5yZWFjaGFibGVDYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBuZXZlcikge1xuICAgIHN1cGVyKGBVbnJlYWNoYWJsZSBjYXNlOiAke3ZhbHVlfWApXG4gIH1cbn1cbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uUG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyByZWR1Y2UgPSAocG9pbnRzOiBudW1iZXIpOiBBY3Rpb25Qb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBBY3Rpb25Qb2ludHMgPT5cbiAgICBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiB0aGlzLm1heCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSGV4LCBIZXhWZWN0b3IgfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGVudW0gSGV4RGlyZWN0aW9uIHtcbiAgRUFTVCA9ICdFQVNUJyxcbiAgV0VTVCA9ICdXRVNUJyxcbiAgTk9SVEhfRUFTVCA9ICdOT1JUSF9FQVNUJyxcbiAgU09VVEhfRUFTVCA9ICdTT1VUSF9FQVNUJyxcbiAgTk9SVEhfV0VTVCA9ICdOT1JUSF9XRVNUJyxcbiAgU09VVEhfV0VTVCA9ICdTT1VUSF9XRVNUJyxcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9ESVJFQ1RJT05TID0gW1xuICBIZXhEaXJlY3Rpb24uRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9FQVNULFxuXVxuXG5leHBvcnQgY29uc3QgZ2V0VW5pdFZlY3RvciA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleFZlY3RvciA9PiB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIDEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAxKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZGlyZWN0aW9uKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgZ2V0VW5pdFZlY3RvciwgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi9oZXgtZGlyZWN0aW9uJ1xuXG5leHBvcnQgY2xhc3MgSGV4IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGdldCB6KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC10aGlzLnggLSB0aGlzLnlcbiAgfVxuXG4gIHB1YmxpYyBwbHVzID0gKHRoYXQ6IEhleCk6IEhleCA9PiBuZXcgSGV4KHRoaXMueCArIHRoYXQueCwgdGhpcy55ICsgdGhhdC55KVxuXG4gIHB1YmxpYyBuZWlnaGJvdXJzID0gKCk6IEhleFtdID0+IEhleC5ORUlHSEJPVVJTLm1hcCh0aGlzLnBsdXMpXG5cbiAgcHVibGljIGlzQWRqYWNlbnRUbyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IFIuaW5jbHVkZXModGhhdCwgdGhpcy5uZWlnaGJvdXJzKCkpXG5cbiAgcHJpdmF0ZSBzdGF0aWMgTkVJR0hCT1VSUzogSGV4W10gPSBbXG4gICAgbmV3IEhleCgwLCAxKSxcbiAgICBuZXcgSGV4KDEsIDApLFxuICAgIG5ldyBIZXgoMSwgLTEpLFxuICAgIG5ldyBIZXgoMCwgLTEpLFxuICAgIG5ldyBIZXgoLTEsIDApLFxuICAgIG5ldyBIZXgoLTEsIDEpLFxuICBdXG5cbiAgcHVibGljIGVxdWFscyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IHRoaXMueCA9PSB0aGF0LnggJiYgdGhpcy55ID09IHRoYXQueVxuXG4gIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4gYEhleCgke3RoaXMueH0sICR7dGhpcy55fSlgXG5cbiAgcHVibGljIGdvID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogSGV4ID0+IHRoaXMucGx1cyhnZXRVbml0VmVjdG9yKGRpcmVjdGlvbikpXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEhleCA9PiBuZXcgSGV4KGpzb24ueCwganNvbi55KVxufVxuXG5leHBvcnQgdHlwZSBIZXhWZWN0b3IgPSBIZXhcbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgSGl0UG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBIaXRQb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBIaXRQb2ludHMgPT5cbiAgICBuZXcgSGl0UG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBIaXRQb2ludHMgPT4gbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxufVxuIiwiaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuL3dvcmxkLW1hcCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1dPUkxEX1NUQVRFOiBXb3JsZFN0YXRlID0gbmV3IFdvcmxkU3RhdGUoe1xuICB0dXJuOiAwLFxuICBtYXA6IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiAxMCwgaGVpZ2h0OiA2IH0pLFxuICBwbGF5ZXJzOiBbXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogMSxcbiAgICAgIG5hbWU6ICdQbGF5ZXIgMScsXG4gICAgICBlbmRlZFR1cm46IGZhbHNlLFxuICAgIH0pLFxuICBdLFxuICB1bml0czogW10sXG59KVxuIiwiZXhwb3J0IHR5cGUgUGxheWVySWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIHJlYWRvbmx5IGlkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgZW5kZWRUdXJuOiBib29sZWFuXG4gIHJlYWRvbmx5IGRlZmVhdGVkOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgZW5kZWRUdXJuID0gZmFsc2UsXG4gICAgZGVmZWF0ZWQgPSBmYWxzZSxcbiAgfToge1xuICAgIGlkOiBQbGF5ZXJJZFxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGVuZGVkVHVybj86IGJvb2xlYW5cbiAgICBkZWZlYXRlZD86IGJvb2xlYW5cbiAgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmVuZGVkVHVybiA9IGVuZGVkVHVyblxuICAgIHRoaXMuZGVmZWF0ZWQgPSBkZWZlYXRlZFxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIGlkID0gdGhpcy5pZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGVuZGVkVHVybiA9IHRoaXMuZW5kZWRUdXJuLFxuICAgIGRlZmVhdGVkID0gdGhpcy5kZWZlYXRlZCxcbiAgfTogeyBpZD86IFBsYXllcklkOyBuYW1lPzogc3RyaW5nOyBlbmRlZFR1cm4/OiBib29sZWFuOyBkZWZlYXRlZD86IGJvb2xlYW4gfSA9IHt9KTogUGxheWVyID0+XG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBlbmRlZFR1cm4sXG4gICAgICBkZWZlYXRlZCxcbiAgICB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGlkOiB0aGlzLmlkLCBuYW1lOiB0aGlzLm5hbWUsIGVuZGVkVHVybjogdGhpcy5lbmRlZFR1cm4sIGRlZmVhdGVkOiB0aGlzLmRlZmVhdGVkIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBQbGF5ZXIgPT5cbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiBqc29uLmlkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgZW5kZWRUdXJuOiBqc29uLmVuZGVkVHVybixcbiAgICAgIGRlZmVhdGVkOiBqc29uLmRlZmVhdGVkLFxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4vYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4vaGl0LXBvaW50cydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFVuaXRJZCA9IG51bWJlclxuXG5leHBvcnQgY2xhc3MgVW5pdCB7XG4gIHJlYWRvbmx5IGlkOiBVbml0SWRcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICByZWFkb25seSBsb2NhdGlvbjogSGV4XG4gIHJlYWRvbmx5IGhpdFBvaW50czogSGl0UG9pbnRzXG4gIHJlYWRvbmx5IGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIHBsYXllcklkLFxuICAgIG5hbWUsXG4gICAgbG9jYXRpb24sXG4gICAgaGl0UG9pbnRzLFxuICAgIGFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkOiBVbml0SWRcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuICB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzXG4gICAgdGhpcy5hY3Rpb25Qb2ludHMgPSBhY3Rpb25Qb2ludHNcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBVbml0ID0+IHRoaXMuY29weSh7IGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMuZGFtYWdlKHBvaW50cykgfSlcblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgaWQgPSB0aGlzLmlkLFxuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbixcbiAgICBoaXRQb2ludHMgPSB0aGlzLmhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMgPSB0aGlzLmFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkPzogVW5pdElkXG4gICAgcGxheWVySWQ/OiBQbGF5ZXJJZFxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBsb2NhdGlvbj86IEhleFxuICAgIGhpdFBvaW50cz86IEhpdFBvaW50c1xuICAgIGFjdGlvblBvaW50cz86IEFjdGlvblBvaW50c1xuICB9ID0ge30pOiBVbml0ID0+IG5ldyBVbml0KHsgaWQsIHBsYXllcklkLCBuYW1lLCBsb2NhdGlvbiwgaGl0UG9pbnRzLCBhY3Rpb25Qb2ludHMgfSlcblxuICBwdWJsaWMgbW92ZSA9IChsb2NhdGlvbjogSGV4LCBhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGxvY2F0aW9uLCBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZHVjZShhY3Rpb25Qb2ludHNDb25zdW1lZCkgfSlcblxuICBwdWJsaWMgcmVkdWNlQWN0aW9uUG9pbnRzID0gKGFjdGlvblBvaW50c0NvbnN1bWVkOiBudW1iZXIpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZnJlc2hBY3Rpb25Qb2ludHMgPSAoKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZnJlc2goKSB9KVxuXG4gIHB1YmxpYyBnZXQgaGFzVW5zcGVudEFjdGlvblBvaW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDBcbiAgfVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgaWQ6IHRoaXMuaWQsXG4gICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLnRvSnNvbigpLFxuICAgIGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMudG9Kc29uKCksXG4gICAgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy50b0pzb24oKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFVuaXQgPT5cbiAgICBuZXcgVW5pdCh7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIHBsYXllcklkOiBqc29uLnBsYXllcklkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgbG9jYXRpb246IEhleC5mcm9tSnNvbihqc29uLmxvY2F0aW9uKSxcbiAgICAgIGhpdFBvaW50czogSGl0UG9pbnRzLmZyb21Kc29uKGpzb24uaGl0UG9pbnRzKSxcbiAgICAgIGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzLmZyb21Kc29uKGpzb24uYWN0aW9uUG9pbnRzKSxcbiAgICB9KVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBHYW1lU3RhcnRlZFdvcmxkRXZlbnQsXG4gIEluaXRpYWxpc2VXb3JsZEV2ZW50LFxuICBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCxcbiAgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICByZXR1cm4gaGFuZGxlSW5pdGlhbGlzZShldmVudClcbiAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQWRkZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckNoYW5nZWROYW1lJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJDaGFuZ2VkTmFtZShzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVTdGFydGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVVuaXRNb3ZlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnY29tYmF0JzpcbiAgICAgIHJldHVybiBoYW5kbGVDb21iYXQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckVuZGVkVHVybic6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRW5kZWRUdXJuKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJEZWZlYXRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRGVmZWF0ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1R1cm4oc3RhdGUpXG4gICAgY2FzZSAnZ2FtZU92ZXInOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVPdmVyKHN0YXRlLCBldmVudClcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUluaXRpYWxpc2UgPSAoZXZlbnQ6IEluaXRpYWxpc2VXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChldmVudC5pZCA+IDApIHtcbiAgICB0aHJvdyBgSW5pdGlhbGlzZSBtdXN0IGJlIHRoZSBmaXJzdCBldmVudGBcbiAgfVxuICByZXR1cm4gZXZlbnQuc3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyQWRkZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PSBldmVudC5wbGF5ZXJJZCwgc3RhdGUucGxheWVycykpIHtcbiAgICB0aHJvdyBgUGxheWVyIElEIGFscmVhZHkgaW4gdXNlYFxuICB9XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoeyBpZDogcGxheWVySWQsIG5hbWU6IGBQbGF5ZXIgJHtwbGF5ZXJJZH1gIH0pXG4gIHJldHVybiBzdGF0ZS5hZGRQbGF5ZXIocGxheWVyKVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJDaGFuZ2VkTmFtZSA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkLCBuYW1lIH0gPSBldmVudFxuICB2YWxpZGF0ZVBsYXllcklkKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBuYW1lIH0pKVxufVxuXG5jb25zdCB2YWxpZGF0ZVBsYXllcklkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQpOiB2b2lkID0+IHtcbiAgY29uc3QgcGxheWVyID0gc3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgaWYgKCFwbGF5ZXIpIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbn1cblxuY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBHYW1lU3RhcnRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKHN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgdGhyb3cgYEdhbWUgYWxyZWFkeSBzdGFydGVkYFxuICB9XG4gIHJldHVybiBzdGF0ZS5jb3B5KHsgdHVybjogMSwgdW5pdHM6IGV2ZW50LnVuaXRzIH0pXG59XG5cbmNvbnN0IGhhbmRsZVVuaXRNb3ZlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB1bml0SWQsIHBsYXllcklkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHtmcm9tfSB0byAke3RvfWBcbiAgaWYgKCFzdGF0ZS5tYXAuaXNJbkJvdW5kcyh0bykpIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gIGNvbnN0IHVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICBpZiAoIXVuaXQpIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICBjb25zdCBmcm9tVW5pdCA9IHN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihmcm9tKVxuICBpZiAoZnJvbVVuaXQ/LmlkICE9IHVuaXRJZCkge1xuICAgIHRocm93IGBJbnZhbGlkIGZyb20gbG9jYXRpb24gZm9yIHVuaXQgbW92ZW1lbnQuIFVuaXQgYXQgJHtmcm9tfSBpcyAke2Zyb21Vbml0Py5pZH0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgJHt1bml0SWR9YFxuICB9XG4gIGNvbnN0IHRvVW5pdCA9IHN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bylcbiAgaWYgKHRvVW5pdCkgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgaWYgKHVuaXQucGxheWVySWQgIT0gcGxheWVySWQpIHRocm93IGBJbnZhbGlkIGF0dGVtcHQgdG8gbW92ZSB1bml0IG9mIGFub3RoZXIgcGxheWVyYFxuICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSB0aHJvdyBgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgXG4gIHJldHVybiBzdGF0ZS5yZXBsYWNlVW5pdCh1bml0LmlkLCB1bml0Lm1vdmUodG8sIGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSlcbn1cblxuY29uc3QgaGFuZGxlQ29tYmF0ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogQ29tYmF0V29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gZXZlbnRcblxuICBjb25zdCBhdHRhY2tlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXIudW5pdElkKVxuICBpZiAoIWF0dGFja2VyVW5pdCkgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VyLnVuaXRJZH1gXG4gIGlmICghYXR0YWNrZXJVbml0LmxvY2F0aW9uLmVxdWFscyhhdHRhY2tlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGF0dGFja2VyLiBBdHRhY2tpbmcgdW5pdCAke2F0dGFja2VyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHthdHRhY2tlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7YXR0YWNrZXIubG9jYXRpb259YFxuXG4gIGNvbnN0IGRlZmVuZGVyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChkZWZlbmRlci51bml0SWQpXG4gIGlmICghZGVmZW5kZXJVbml0KSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXIudW5pdElkfWBcbiAgaWYgKCFkZWZlbmRlclVuaXQubG9jYXRpb24uZXF1YWxzKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBgSW52YWxpZCBsb2NhdGlvbiBmb3IgZGVmZW5kZXIuIERlZmVuZGluZyB1bml0ICR7ZGVmZW5kZXJVbml0LmlkfSBpcyBhdCBsb2NhdGlvbiAke2RlZmVuZGVyVW5pdC5sb2NhdGlvbn0sIGJ1dCB3YXMgZXhwZWN0ZWQgdG8gYmUgYXQgJHtkZWZlbmRlci5sb2NhdGlvbn1gXG5cbiAgaWYgKGF0dGFja2VyVW5pdC5wbGF5ZXJJZCA9PSBkZWZlbmRlclVuaXQucGxheWVySWQpIHRocm93IGBJbnZhbGlkIGNvbWJhdCB3aXRoIHNlbGZgXG4gIGlmICghYXR0YWNrZXIubG9jYXRpb24uaXNBZGphY2VudFRvKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBgSW52YWxpZCBjb21iYXQgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHthdHRhY2tlci5sb2NhdGlvbn0gdG8gJHtkZWZlbmRlci5sb2NhdGlvbn1gXG4gIGlmIChhdHRhY2tlclVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlXG5cbiAgaWYgKGF0dGFja2VyLmtpbGxlZCkgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGF0dGFja2VyVW5pdC5pZClcbiAgZWxzZVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoXG4gICAgICBhdHRhY2tlclVuaXQuaWQsXG4gICAgICBhdHRhY2tlclVuaXQuZGFtYWdlKGF0dGFja2VyLmRhbWFnZSkucmVkdWNlQWN0aW9uUG9pbnRzKGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSxcbiAgICApXG5cbiAgaWYgKGRlZmVuZGVyLmtpbGxlZCkgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGRlZmVuZGVyVW5pdC5pZClcbiAgZWxzZSBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KGRlZmVuZGVyVW5pdC5pZCwgZGVmZW5kZXJVbml0LmRhbWFnZShkZWZlbmRlci5kYW1hZ2UpKVxuXG4gIHJldHVybiBuZXdTdGF0ZVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIHZhbGlkYXRlUGxheWVySWQoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGUudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogdHJ1ZSB9KSlcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRGVmZWF0ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJEZWZlYXRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgdmFsaWRhdGVQbGF5ZXJJZChzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZS51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZGVmZWF0ZWQ6IHRydWUgfSkpXG59XG5cbmNvbnN0IGhhbmRsZU5ld1R1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLmNvcHkoe1xuICAgIHR1cm46IHN0YXRlLnR1cm4gKyAxLFxuICAgIHVuaXRzOiBzdGF0ZS51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQucmVmcmVzaEFjdGlvblBvaW50cygpKSxcbiAgICBwbGF5ZXJzOiBzdGF0ZS5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogZmFsc2UgfSkpLFxuICB9KVxuXG5jb25zdCBoYW5kbGVHYW1lT3ZlciA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IEdhbWVPdmVyV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHZpY3RvciB9ID0gZXZlbnRcbiAgaWYgKHZpY3Rvcikge1xuICAgIHZhbGlkYXRlUGxheWVySWQoc3RhdGUsIHZpY3RvcilcbiAgfVxuICByZXR1cm4gc3RhdGUuZ2FtZU92ZXIodmljdG9yKVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuZXhwb3J0IGNsYXNzIFdvcmxkTWFwIHtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlclxuICByZWFkb25seSBoZWlnaHQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgd2lkdGgsIGhlaWdodCB9OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcbiAgICBhc3NlcnQod2lkdGggPiAwKVxuICAgIGFzc2VydChoZWlnaHQgPiAwKVxuICAgIHRoaXMud2lkdGggPSB3aWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0XG4gIH1cblxuICBwdWJsaWMgaXNJbkJvdW5kcyA9IChoZXg6IEhleCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHEgPSBoZXgueCArIE1hdGguZmxvb3IoaGV4LnkgLyAyKVxuICAgIHJldHVybiAwIDw9IHEgJiYgcSA8IHRoaXMud2lkdGggJiYgMCA8PSBoZXgueSAmJiBoZXgueSA8IHRoaXMuaGVpZ2h0XG4gIH1cblxuICBwdWJsaWMgKmdldE1hcEhleGVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SGV4PiB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5oZWlnaHQ7IHJvdysrKVxuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy53aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgeCA9IC1NYXRoLmZsb29yKHJvdyAvIDIpICsgY29sdW1uXG4gICAgICAgIHlpZWxkIG5ldyBIZXgoeCwgcm93KVxuICAgICAgfVxuICB9XG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkTWFwID0+IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiBqc29uLndpZHRoLCBoZWlnaHQ6IGpzb24uaGVpZ2h0IH0pXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi91bml0J1xuaW1wb3J0IHsganVzdCwgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgeyBXb3JsZEV2ZW50IH0gZnJvbSAnLi93b3JsZC1ldmVudHMnXG5cbmludGVyZmFjZSBHYW1lT3ZlckluZm8ge1xuICB2aWN0b3I6IE9wdGlvbjxQbGF5ZXJJZD5cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkU3RhdGUge1xuICByZWFkb25seSB0dXJuOiBudW1iZXIgLyogdHVybiA9IDAgYmVmb3JlIHRoZSBnYW1lIGhhcyBzdGFydGVkICovXG4gIHJlYWRvbmx5IG1hcDogV29ybGRNYXBcbiAgcmVhZG9ubHkgdW5pdHM6IFVuaXRbXVxuICByZWFkb25seSBwbGF5ZXJzOiBQbGF5ZXJbXVxuICByZWFkb25seSBnYW1lT3ZlckluZm8/OiBHYW1lT3ZlckluZm9cblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgdHVybixcbiAgICBtYXAsXG4gICAgdW5pdHMsXG4gICAgcGxheWVycyxcbiAgICBnYW1lT3ZlckluZm8sXG4gIH06IHtcbiAgICB0dXJuOiBudW1iZXJcbiAgICBtYXA6IFdvcmxkTWFwXG4gICAgdW5pdHM6IFVuaXRbXVxuICAgIHBsYXllcnM6IFBsYXllcltdXG4gICAgZ2FtZU92ZXJJbmZvPzogT3B0aW9uPEdhbWVPdmVySW5mbz5cbiAgfSkge1xuICAgIHRoaXMudHVybiA9IHR1cm5cbiAgICB0aGlzLm1hcCA9IG1hcFxuICAgIHRoaXMudW5pdHMgPSB1bml0c1xuICAgIHRoaXMucGxheWVycyA9IHBsYXllcnNcbiAgICB0aGlzLmdhbWVPdmVySW5mbyA9IGdhbWVPdmVySW5mb1xuICAgIGFzc2VydCh0dXJuID49IDApXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgdHVybiA9IHRoaXMudHVybixcbiAgICBtYXAgPSB0aGlzLm1hcCxcbiAgICB1bml0cyA9IHRoaXMudW5pdHMsXG4gICAgcGxheWVycyA9IHRoaXMucGxheWVycyxcbiAgICBnYW1lT3ZlckluZm8gPSB0b01heWJlKHRoaXMuZ2FtZU92ZXJJbmZvKSxcbiAgfToge1xuICAgIHR1cm4/OiBudW1iZXJcbiAgICBtYXA/OiBXb3JsZE1hcFxuICAgIHVuaXRzPzogVW5pdFtdXG4gICAgcGxheWVycz86IFBsYXllcltdXG4gICAgZ2FtZU92ZXJJbmZvPzogTWF5YmU8R2FtZU92ZXJJbmZvPlxuICB9ID0ge30pOiBXb3JsZFN0YXRlID0+IG5ldyBXb3JsZFN0YXRlKHsgdHVybiwgbWFwLCB1bml0cywgcGxheWVycywgZ2FtZU92ZXJJbmZvOiB0b09wdGlvbihnYW1lT3ZlckluZm8pIH0pXG5cbiAgcHVibGljIGdldCBnYW1lSGFzU3RhcnRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50dXJuID4gMFxuICB9XG5cbiAgcHVibGljIGlzUGxheWVyRGVmZWF0ZWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiB0aGlzLmdldFVuaXRzRm9yUGxheWVyKHBsYXllcklkKS5sZW5ndGggPT0gMFxuXG4gIHB1YmxpYyBjYW5QbGF5ZXJBY3QgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgZW5kZWRUdXJuID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKT8uZW5kZWRUdXJuXG4gICAgcmV0dXJuICFlbmRlZFR1cm4gJiYgUi5hbnkoKHVuaXQpID0+IHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cywgdGhpcy5nZXRVbml0c0ZvclBsYXllcihwbGF5ZXJJZCkpXG4gIH1cblxuICBwdWJsaWMgY2FuQW55UGxheWVyQWN0ID0gKCk6IGJvb2xlYW4gPT4gUi5hbnkoKHBsYXllcikgPT4gdGhpcy5jYW5QbGF5ZXJBY3QocGxheWVyLmlkKSwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnZXRVbml0c0ZvclBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0W10gPT4gdGhpcy51bml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQucGxheWVySWQgPT09IHBsYXllcklkKVxuXG4gIHB1YmxpYyBmaW5kUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IE9wdGlvbjxQbGF5ZXI+ID0+IFIuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZmluZFVuaXRCeUlkID0gKHVuaXRJZDogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+IFIuZmluZCgodW5pdCkgPT4gdW5pdC5pZCA9PSB1bml0SWQsIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIGdldFVuaXRCeUlkID0gKHVuaXRJZDogbnVtYmVyKTogVW5pdCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIH1cbiAgICByZXR1cm4gdW5pdFxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQubG9jYXRpb24uZXF1YWxzKGhleCksIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIHJlcGxhY2VVbml0ID0gKHVuaXRJZDogVW5pdElkLCB1bml0OiBVbml0KTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICB1bml0czogUi5hcHBlbmQoXG4gICAgICAgIHVuaXQsXG4gICAgICAgIFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9IHVuaXRJZCwgdGhpcy51bml0cyksXG4gICAgICApLFxuICAgIH0pXG5cbiAgcHVibGljIHJlbW92ZVVuaXQgPSAodW5pdElkOiBVbml0SWQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgdW5pdHM6IFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9IHVuaXRJZCwgdGhpcy51bml0cykgfSlcblxuICBwdWJsaWMgdXBkYXRlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgbW9kaWZ5OiAocGxheWVyOiBQbGF5ZXIpID0+IFBsYXllcik6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VQbGF5ZXIocGxheWVySWQsIG1vZGlmeShwbGF5ZXIpKVxuICB9XG5cbiAgcHVibGljIHJlcGxhY2VQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkLCBwbGF5ZXI6IFBsYXllcik6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGFzc2VydChwbGF5ZXJJZCA9PSBwbGF5ZXIuaWQpXG4gICAgcmV0dXJuIHRoaXMuY29weSh7XG4gICAgICBwbGF5ZXJzOiBSLmFwcGVuZChcbiAgICAgICAgcGxheWVyLFxuICAgICAgICBSLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuaWQgIT0gcGxheWVySWQsIHRoaXMucGxheWVycyksXG4gICAgICApLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYWRkUGxheWVyID0gKHBsYXllcjogUGxheWVyKTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBwbGF5ZXJzOiBSLmFwcGVuZChwbGF5ZXIsIHRoaXMucGxheWVycykgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIHR1cm46IHRoaXMudHVybixcbiAgICBtYXA6IHRoaXMubWFwLnRvSnNvbigpLFxuICAgIHVuaXRzOiB0aGlzLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC50b0pzb24oKSksXG4gICAgcGxheWVyczogdGhpcy5wbGF5ZXJzLm1hcCgocGxheWVyKSA9PiBwbGF5ZXIudG9Kc29uKCkpLFxuICAgIGdhbWVPdmVySW5mbzogdGhpcy5nYW1lT3ZlckluZm8sXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBXb3JsZFN0YXRlID0+XG4gICAgbmV3IFdvcmxkU3RhdGUoe1xuICAgICAgdHVybjoganNvbi50dXJuLFxuICAgICAgbWFwOiBXb3JsZE1hcC5mcm9tSnNvbihqc29uLm1hcCksXG4gICAgICB1bml0czoganNvbi51bml0cy5tYXAoKHVuaXQ6IGFueSkgPT4gVW5pdC5mcm9tSnNvbih1bml0KSksXG4gICAgICBwbGF5ZXJzOiBqc29uLnBsYXllcnMubWFwKCh1bml0OiBhbnkpID0+IFBsYXllci5mcm9tSnNvbih1bml0KSksXG4gICAgICBnYW1lT3ZlckluZm86IGpzb24uZ2FtZU92ZXJJbmZvLFxuICAgIH0pXG5cbiAgcHVibGljIGlzVmFsaWRQbGF5ZXJJZCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IFIuYW55KChwbGF5ZXIpID0+IHBsYXllci5pZCA9PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnYW1lT3ZlciA9ICh2aWN0b3I6IE9wdGlvbjxudW1iZXI+KTogV29ybGRTdGF0ZSA9PiB0aGlzLmNvcHkoeyBnYW1lT3ZlckluZm86IGp1c3QoeyB2aWN0b3IgfSkgfSlcblxuICBwdWJsaWMgYXBwbHlFdmVudCA9IChldmVudDogV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4gYXBwbHlFdmVudCh0aGlzLCBldmVudClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=