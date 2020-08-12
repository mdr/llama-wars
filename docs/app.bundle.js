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
    ATTACK_1: 'attack1',
    ATTACK_2: 'attack2',
    ATTACK_3: 'attack3',
    DEATH: 'death',
    WALK: 'walk',
    NEW_TURN: 'new-turn',
    PLAYER_DEFEATED: 'player-defeated',
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
        // https://opengameart.org/content/puddle-corpses
        this.load.image('spit', 'assets/sprites/puddle_green.png');
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
var attack_world_action_handler_1 = __webpack_require__(/*! ../server/attack-world-action-handler */ "./src/server/attack-world-action-handler.ts");
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
        this.unitCanAttackHex = function (unit, location, attackType) {
            var targetUnit = _this.findUnitInLocation(location);
            if (_this.unitCouldPotentiallyAttack(unit) &&
                targetUnit != undefined &&
                targetUnit.playerId != _this.localGameState.playerId &&
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
var json_serialisation_1 = __webpack_require__(/*! ../../util/json-serialisation */ "./src/util/json-serialisation.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
var lobby_display_objects_1 = __webpack_require__(/*! ./lobby-display-objects */ "./src/scenes/lobby/lobby-display-objects.ts");
var CreatedLobbyScene = /** @class */ (function () {
    function CreatedLobbyScene(scene, serverOrClient, playerId, worldState) {
        var _this = this;
        this.makeLobbyDisplayObjects = function (scene, playerId) {
            return new lobby_display_objects_1.LobbyDisplayObjects(scene, playerId, _this.handleStartGame, _this.handleChangePlayerName);
        };
        this.actAsClient = function (client) {
            _this.listener = function (message) { return _this.handleServerToClientMessage(message, client); };
            client.addListener(_this.listener);
        };
        this.handleServerToClientMessage = function (message, client) {
            if (message.type == 'worldEvent') {
                var event_1 = json_serialisation_1.deserialiseFromJson(message.event);
                _this.worldState = _this.worldState.applyEvent(event_1);
                if (event_1.type == 'gameStarted') {
                    if (_this.listener) {
                        client.removeListener(_this.listener);
                        _this.listener = undefined;
                    }
                    _this.launchGameScene();
                }
            }
            _this.sync();
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
            return server.addListener(function () {
                _this.worldState = server.worldState;
                _this.sync();
            });
        };
        this.handleStartGame = function () {
            _this.dispatchAction({ type: 'startGame' });
            _this.launchGameScene();
        };
        this.scene = scene;
        this.serverOrClient = serverOrClient;
        this.playerId = playerId;
        this.worldState = worldState;
        this.scene.sound.add(asset_keys_1.AudioKeys.CLICK);
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
                    backgroundColor: playerId == _this.playerId ? '#333333' : '#000000',
                })
                    .setFontSize(18)
                    .setPadding(0, 0, 0, 0)
                    .setInteractive()
                    .on('pointerdown', function () {
                    if (playerId == _this.playerId) {
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
            if (_this.startGameButton)
                _this.startGameButton.setY(y);
            if (_this.waitingForHostText)
                _this.waitingForHostText.setY(y);
        };
        this.scene = scene;
        this.playerId = playerId;
        this.onStartGame = onStartGame;
        this.onChangePlayerName = onChangePlayerName;
        this.scene.add.text(100, 50, 'Llama Wars', { fill: '#FFFFFF' }).setFontSize(24);
        if (playerId == player_1.HOST_PLAYER_ID) {
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
                attackType: event.attackType,
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
                return { type: 'enterAttackMode', attackType: 'melee' };
            break;
        case 's':
            if (mode.type == 'selectHex')
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
            if (defender)
                return _this.attackHex(attackType, attacker, defender);
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
            if (mode.type == 'moveUnit') {
                if (selectedHex && hex.isAdjacentTo(selectedHex) && !_this.findUnitInLocation(hex)) {
                    return 'targetable';
                }
            }
            if (mode.type == 'attack') {
                if (selectedHex && attack_world_action_handler_1.canAttackOccur(mode.attackType, hex, selectedHex)) {
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
            _this.hourglass.setVisible(localGameState.actionOutstandingWithServer);
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
            if (player.defeated) {
                _this.defeatTextTweenX.play();
                _this.defeatTextTweenY.play();
            }
            _this.victoryText.setVisible(((_a = worldState.gameOverInfo) === null || _a === void 0 ? void 0 : _a.victor) === player.id);
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
        this.runSpitAnimation = function (from, to) { return __awaiter(_this, void 0, void 0, function () {
            var fromPoint, toPoint, image, tween;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromPoint = game_scene_1.hexCenter(from);
                        toPoint = game_scene_1.hexCenter(to);
                        image = this.scene.add.image(fromPoint.x, fromPoint.y, 'spit');
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
                            duration: 300,
                            ease: 'Linear',
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
            var rawDefenderDamage = attackType === 'melee' ? random_util_1.randomIntInclusive(-17, 23) : random_util_1.randomIntInclusive(4, 6);
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
var player_1 = __webpack_require__(/*! ../world/player */ "./src/world/player.ts");
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
        this.distanceTo = function (that) {
            return (Math.abs(_this.x - that.x) + Math.abs(_this.y - that.y) + Math.abs(_this.z - that.z)) / 2;
        };
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
    if (!attack_world_action_handler_1.canAttackOccur(event.attackType, attacker.location, defender.location))
        throw "Invalid combat of type " + event.attackType + " between hexes " + attacker.location + " to " + defender.location;
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
        this.getPlayerIds = function () { return _this.players.map(function (player) { return player.id; }); };
        this.isPlayerDefeated = function (playerId) { return _this.getUnitsForPlayer(playerId).length == 0; };
        this.canPlayerAct = function (playerId) {
            var _a;
            var endedTurn = (_a = _this.findPlayer(playerId)) === null || _a === void 0 ? void 0 : _a.endedTurn;
            return !endedTurn && R.any(function (unit) { return unit.hasUnspentActionPoints; }, _this.getUnitsForPlayer(playerId));
        };
        this.canAnyPlayerAct = function () { return R.any(function (player) { return _this.canPlayerAct(player.id); }, _this.players); };
        this.getUnitsForPlayer = function (playerId) { return _this.units.filter(function (unit) { return unit.playerId === playerId; }); };
        this.findPlayer = function (playerId) { return R.find(function (player) { return player.id == playerId; }, _this.players); };
        this.getPlayer = function (playerId) {
            var player = _this.findPlayer(playerId);
            if (!player) {
                throw "No player found with ID " + playerId;
            }
            return player;
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb21iaW5lZC1zdGF0ZS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaGV4LWdlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2JieS9jcmVhdGVkLWxvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvbG9iYnktZGlzcGxheS1vYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvbG9iYnktc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2NhbC1nYW1lLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2Rpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL2tleWJvYXJkLW1hcHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1nYW1lL21hcC1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS90ZXh0cy1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS91bml0LWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51L21haW4tbWVudS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvd29ybGQtYWN0aW9uLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1zdGF0ZS1vd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWVudS1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3BoYXNlci90d2Vlbi11dGlscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9yYW5kb20tdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC90eXBlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9hY3Rpb24tcG9pbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oZXgtZGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hpdC1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFD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LEdBQUcsS0FBSztRQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFnQkQsc0JBQVcsc0NBQWM7YUFBekI7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQTBFYSxtQkFBUSxHQUFHLFVBQUMsSUFBUztRQUNqQyxXQUFJLFVBQVUsQ0FBQztZQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVMsSUFBSyxrQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBbkIsQ0FBbUIsQ0FBQztZQUN6RCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFTLElBQUssc0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUM7WUFDL0QsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2hDLENBQUM7SUFORixDQU1FO0lBT04saUJBQUM7Q0FBQTtBQXBJWSxnQ0FBVSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgRGV4aWUsIHsgQ29sbGVjdGlvbiB9IGZyb20gJ2RleGllJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFdvcmxkRXZlbnRSZWNvcmQge1xuICBnYW1lSWQ6IEdhbWVJZFxuICBldmVudDogYW55IC8vIHNlcmlhbGlzZWQgV29ybGRFdmVudFxufVxuXG5leHBvcnQgY2xhc3MgTGxhbWFEZXhpZSBleHRlbmRzIERleGllIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtaWdub3JlXG4gIHdvcmxkRXZlbnRzOiBEZXhpZS5UYWJsZTxXb3JsZEV2ZW50UmVjb3JkLCBzdHJpbmc+XG59XG5cbmV4cG9ydCBjb25zdCBvcGVuV29ybGRFdmVudERiID0gYXN5bmMgKCk6IFByb21pc2U8V29ybGRFdmVudERiPiA9PiB7XG4gIGNvbnN0IGRleGllID0gbmV3IERleGllKCdsbGFtYS13YXJzJylcbiAgZGV4aWUudmVyc2lvbigxKS5zdG9yZXMoe1xuICAgIHdvcmxkRXZlbnRzOiAnKyssZ2FtZUlkJyxcbiAgfSlcbiAgYXdhaXQgZGV4aWUub3BlbigpXG4gIHJldHVybiBuZXcgV29ybGRFdmVudERiKDxMbGFtYURleGllPmRleGllKVxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRFdmVudERiIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkZXhpZTogTGxhbWFEZXhpZVxuXG4gIGNvbnN0cnVjdG9yKGRleGllOiBMbGFtYURleGllKSB7XG4gICAgdGhpcy5kZXhpZSA9IGRleGllXG4gIH1cblxuICBwdWJsaWMgc3RvcmUgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQsIGV2ZW50OiBXb3JsZEV2ZW50KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgYXdhaXQgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy5hZGQoe1xuICAgICAgZ2FtZUlkLFxuICAgICAgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCksXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBnZXRFdmVudHNGb3JHYW1lID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxXb3JsZEV2ZW50W10+ID0+IHtcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGhpcy5kZXhpZS53b3JsZEV2ZW50cy53aGVyZSgnZ2FtZUlkJykuZXF1YWxzKGdhbWVJZCkudG9BcnJheSgpXG4gICAgcmV0dXJuIHJlY29yZHMubWFwKChyZWNvcmQpID0+IGRlc2VyaWFsaXNlRnJvbUpzb24ocmVjb3JkLmV2ZW50KSlcbiAgfVxuXG4gIHB1YmxpYyBoYXNFdmVudHNGb3JHYW1lID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gICAgY29uc3QgcmVjb3JkID0gYXdhaXQgdGhpcy5xdWVyeUV2ZW50c0J5R2FtZUlkKGdhbWVJZCkuZmlyc3QoKVxuICAgIHJldHVybiByZWNvcmQgIT0gdW5kZWZpbmVkXG4gIH1cblxuICBwcml2YXRlIHF1ZXJ5RXZlbnRzQnlHYW1lSWQgPSAoZ2FtZUlkOiBzdHJpbmcpOiBDb2xsZWN0aW9uPFdvcmxkRXZlbnRSZWNvcmQsIHN0cmluZz4gPT5cbiAgICB0aGlzLmRleGllLndvcmxkRXZlbnRzLndoZXJlKCdnYW1lSWQnKS5lcXVhbHMoZ2FtZUlkKVxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGhcbn1cblxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodFxufVxuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnXG5pbXBvcnQgVGV4dEVkaXRQbHVnaW4gZnJvbSAncGhhc2VyMy1yZXgtcGx1Z2lucy9wbHVnaW5zL3RleHRlZGl0LXBsdWdpbi5qcydcblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdMbGFtYSBXYXJzJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHBhcmVudDogJ2dhbWUnLFxuICBkb206IHtcbiAgICBjcmVhdGVDb250YWluZXI6IHRydWUsXG4gIH0sXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxuICBwbHVnaW5zOiB7XG4gICAgZ2xvYmFsOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JleFRleHRFZGl0JyxcbiAgICAgICAgcGx1Z2luOiBUZXh0RWRpdFBsdWdpbixcbiAgICAgICAgc3RhcnQ6IHRydWUsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG59XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUuc2V0R2FtZVNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcbiAgZ2FtZS5zY2FsZS5yZWZyZXNoKClcbn0pXG4iLCJleHBvcnQgY29uc3QgQXVkaW9LZXlzID0ge1xuICBBVFRBQ0tfMTogJ2F0dGFjazEnLFxuICBBVFRBQ0tfMjogJ2F0dGFjazInLFxuICBBVFRBQ0tfMzogJ2F0dGFjazMnLFxuICBERUFUSDogJ2RlYXRoJyxcbiAgV0FMSzogJ3dhbGsnLFxuICBORVdfVFVSTjogJ25ldy10dXJuJyxcbiAgUExBWUVSX0RFRkVBVEVEOiAncGxheWVyLWRlZmVhdGVkJyxcbiAgVklDVE9SWV9NVVNJQzogJ3ZpY3RvcnktbXVzaWMnLFxuICBDTElDSzogJ2NsaWNrJyxcbiAgU1BJVDogJ3NwaXQnLFxufVxuXG5leHBvcnQgY29uc3QgQUxMX0FVRElPX0tFWVMgPSBbXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMSxcbiAgQXVkaW9LZXlzLkFUVEFDS18yLFxuICBBdWRpb0tleXMuQVRUQUNLXzMsXG4gIEF1ZGlvS2V5cy5ERUFUSCxcbiAgQXVkaW9LZXlzLldBTEssXG4gIEF1ZGlvS2V5cy5ORVdfVFVSTixcbiAgQXVkaW9LZXlzLlBMQVlFUl9ERUZFQVRFRCxcbiAgQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsXG4gIEF1ZGlvS2V5cy5DTElDSyxcbiAgQXVkaW9LZXlzLlNQSVQsXG5dXG4iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCBGaWxlQ29uZmlnID0gUGhhc2VyLlR5cGVzLkxvYWRlci5GaWxlQ29uZmlnXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZUlkLCBHYW1lU2NlbmVEYXRhIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBNQUlOX01FTlVfU0NFTkVfS0VZIH0gZnJvbSAnLi4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBvcGVuV29ybGRFdmVudERiLCBXb3JsZEV2ZW50RGIgfSBmcm9tICcuLi8uLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IENsaWVudCwgU2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2VydmVyL21lc3NhZ2VzJ1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgY29uc3QgQk9PVF9TQ0VORV9LRVkgPSAnQm9vdCdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEJPT1RfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSByZWpvaW5lZExpc3RlbmVyOiBPcHRpb248U2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXI+XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjVcblxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMFxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGgsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgcHJvZ3Jlc3NCYXJXaWR0aCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0LFxuICAgICAgMHgwMDAwMDAsXG4gICAgKVxuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICAxMCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsXG4gICAgICAweDg4ODg4OCxcbiAgICApXG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpXG5cbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZVxuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDBcbiAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7cGVyY2VudH0lYClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZTogRmlsZUNvbmZpZykgPT4ge1xuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICBsb2FkaW5nVGV4dC5kZXN0cm95KClcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKVxuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXIuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KClcbiAgICAgIHRoaXMubGF1bmNoR2FtZSgpXG4gICAgfSlcblxuICAgIHRoaXMubG9hZEFzc2V0cygpXG4gIH1cblxuICBwcml2YXRlIGxhdW5jaEdhbWUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgdXJsSW5mbyA9IGdldFVybEluZm8oKVxuICAgIGlmICh1cmxJbmZvKSB7XG4gICAgICBhd2FpdCB0aGlzLmpvaW5PclJlc3RvcmVHYW1lKHVybEluZm8pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTUFJTl9NRU5VX1NDRU5FX0tFWSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5PclJlc3RvcmVHYW1lID0gYXN5bmMgKHVybEluZm86IFVybEluZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB3b3JsZEV2ZW50RGIgPSBhd2FpdCBvcGVuV29ybGRFdmVudERiKClcbiAgICBjb25zdCBnYW1lSWQgPSB1cmxJbmZvLmdhbWVJZFxuICAgIGNvbnN0IHBsYXllcklkID0gdXJsSW5mby5wbGF5ZXJJZFxuICAgIGNvbnN0IGlzU2VydmVyID0gYXdhaXQgd29ybGRFdmVudERiLmhhc0V2ZW50c0ZvckdhbWUoZ2FtZUlkKVxuICAgIGlmIChpc1NlcnZlcikge1xuICAgICAgYXdhaXQgdGhpcy5yZXN0b3JlR2FtZUFzU2VydmVyKGdhbWVJZCwgd29ybGRFdmVudERiKVxuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCB0aGlzLmpvaW5PclJlc3RvcmVDbGllbnQoZ2FtZUlkLCBwbGF5ZXJJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5PclJlc3RvcmVDbGllbnQgPSBhc3luYyAoZ2FtZUlkOiBHYW1lSWQsIHBsYXllcklkOiBPcHRpb248UGxheWVySWQ+KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgQ2xpZW50LmNvbm5lY3QoZ2FtZUlkKVxuICAgIGlmIChwbGF5ZXJJZCkge1xuICAgICAgdGhpcy5yZWpvaW5Bc0NsaWVudChjbGllbnQsIGdhbWVJZCwgcGxheWVySWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuam9pbkFzQ2xpZW50KGNsaWVudCwgZ2FtZUlkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbkFzQ2xpZW50ID0gKGNsaWVudDogQ2xpZW50LCBnYW1lSWQ6IEdhbWVJZCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVqb2luZWRMaXN0ZW5lciA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT0gJ2pvaW5lZCcpIHtcbiAgICAgICAgaWYgKHRoaXMucmVqb2luZWRMaXN0ZW5lcikge1xuICAgICAgICAgIGNsaWVudC5yZW1vdmVMaXN0ZW5lcih0aGlzLnJlam9pbmVkTGlzdGVuZXIpXG4gICAgICAgICAgdGhpcy5yZWpvaW5lZExpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGxheWVySWQgPSBtZXNzYWdlLnBsYXllcklkXG4gICAgICAgIHNldFVybEluZm8oeyBnYW1lSWQsIHBsYXllcklkIH0pXG4gICAgICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBXb3JsZFN0YXRlLmZyb21Kc29uKG1lc3NhZ2Uud29ybGRTdGF0ZSlcbiAgICAgICAgaWYgKHdvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQsIHdvcmxkU3RhdGUsIHBsYXllcklkIH1cbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IGNsaWVudCwgd29ybGRTdGF0ZSwgcGxheWVySWQgfVxuICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2xpZW50LmFkZExpc3RlbmVyKHRoaXMucmVqb2luZWRMaXN0ZW5lcilcbiAgICBjbGllbnQuc2VuZCh7IHR5cGU6ICdqb2luJyB9KVxuICB9XG5cbiAgcHJpdmF0ZSByZWpvaW5Bc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCwgZ2FtZUlkOiBHYW1lSWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVqb2luZWRMaXN0ZW5lciA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT0gJ3Jlam9pbmVkJykge1xuICAgICAgICBpZiAodGhpcy5yZWpvaW5lZExpc3RlbmVyKSB7XG4gICAgICAgICAgY2xpZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMucmVqb2luZWRMaXN0ZW5lcilcbiAgICAgICAgICB0aGlzLnJlam9pbmVkTGlzdGVuZXIgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihtZXNzYWdlLndvcmxkU3RhdGUpXG4gICAgICAgIGlmICh3b3JsZFN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50LCB3b3JsZFN0YXRlLCBwbGF5ZXJJZCB9XG4gICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBjbGllbnQsIHdvcmxkU3RhdGUsIHBsYXllcklkIH1cbiAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLnJlam9pbmVkTGlzdGVuZXIpXG4gICAgY2xpZW50LnNlbmQoeyB0eXBlOiAncmVqb2luJywgcGxheWVySWQgfSlcbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUdhbWVBc1NlcnZlciA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgd29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBzZXJ2ZXIgPSBhd2FpdCBTZXJ2ZXIucmVzdG9yZUdhbWUod29ybGRFdmVudERiLCBnYW1lSWQpXG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IHNlcnZlci53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciwgd29ybGRTdGF0ZTogd29ybGRTdGF0ZSwgcGxheWVySWQ6IDEgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogc2VydmVyLCB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLCBwbGF5ZXJJZDogMSB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaGV4LXRpbGVzZXQtcGFja1xuICAgIHRoaXMubG9hZC5pbWFnZSgnbGxhbWEnLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWFfMTQucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2hvdXJnbGFzcy1pY29uXG4gICAgdGhpcy5sb2FkLmltYWdlKCdob3VyZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvSG91cmdsYXNzLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy10ZXh0dXJlcy10aWxlc1xuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtdGV4dHVyZVxuICAgIHRoaXMubG9hZC5pbWFnZSgnZ3Jhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvZ3Jhc3MyLnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9wdWRkbGUtY29ycHNlc1xuICAgIHRoaXMubG9hZC5pbWFnZSgnc3BpdCcsICdhc3NldHMvc3ByaXRlcy9wdWRkbGVfZ3JlZW4ucG5nJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvMzctaGl0c3B1bmNoZXNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18xLCAnYXNzZXRzL2F1ZGlvL2hpdDE0Lm1wMy5tcDMnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzIsICdhc3NldHMvYXVkaW8vaGl0MTcubXAzLm1wMycpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMywgJ2Fzc2V0cy9hdWRpby9oaXQxOC5tcDMubXAzJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L21hbGUtZ3J1bnR5ZWxsaW5nLXNvdW5kc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuREVBVEgsICdhc3NldHMvYXVkaW8vMXllbGw0LndhdicpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy1mb290LXN0ZXAtc291bmRzLXlvLWZyYW5raWVcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLldBTEssICdhc3NldHMvYXVkaW8vc2Z4X3N0ZXBfZ3Jhc3NfbC5tcDMnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvdWktc291bmQtZWZmZWN0cy1wYWNrXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5ORVdfVFVSTiwgJ2Fzc2V0cy9hdWRpby9NRU5VIEFfU2VsZWN0LndhdicpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsICdhc3NldHMvYXVkaW8vTUVTU0FHRS1CX0RlY2xpbmUud2F2JylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvY2xlYXItc2tpZXNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsICdhc3NldHMvYXVkaW8vQ2xlYXIgU2tpZXMubXAzJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3VpLXNvdW5kLWVmZmVjdHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkNMSUNLLCAnYXNzZXRzL2F1ZGlvL2NsaWNrLndhdicpXG4gICAgLy9odHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL3R2bGF1ZGlvL3NvdW5kcy8yNjc4OTcvXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5TUElULCAnYXNzZXRzL2F1ZGlvL3NwaXQud2F2JylcbiAgfVxufVxuXG5pbnRlcmZhY2UgVXJsSW5mbyB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIHBsYXllcklkPzogUGxheWVySWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVybEluZm8gPSAoKTogT3B0aW9uPFVybEluZm8+ID0+IHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gIGlmIChoYXNoID09ICcnKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgcGF0aCA9IGhhc2guc3Vic3RyKDEpXG4gIGNvbnN0IHNlZ21lbnRzID0gcGF0aC5zcGxpdCgnLycpXG4gIGNvbnN0IGdhbWVJZCA9IHNlZ21lbnRzWzBdXG4gIGNvbnN0IHBsYXllcklkID0gc2VnbWVudHMubGVuZ3RoID4gMSA/IE51bWJlci5wYXJzZUludChzZWdtZW50c1sxXSkgOiB1bmRlZmluZWRcbiAgcmV0dXJuIHsgZ2FtZUlkLCBwbGF5ZXJJZCB9XG59XG5cbmV4cG9ydCBjb25zdCBzZXRVcmxJbmZvID0gKHVybEluZm86IFVybEluZm8pOiB2b2lkID0+IHtcbiAgbGV0IGhhc2ggPSB1cmxJbmZvLmdhbWVJZFxuICBpZiAodXJsSW5mby5wbGF5ZXJJZCAhPSB1bmRlZmluZWQpIHtcbiAgICBoYXNoICs9ICcvJyArIHVybEluZm8ucGxheWVySWRcbiAgfVxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2hcbn1cbiIsImltcG9ydCBDb2xvciA9IFBoYXNlci5EaXNwbGF5LkNvbG9yXG5cbmV4cG9ydCB0eXBlIENvbG91clN0cmluZyA9IHN0cmluZ1xuZXhwb3J0IHR5cGUgQ29sb3VyTnVtYmVyID0gbnVtYmVyXG5cbmV4cG9ydCBjb25zdCBjb2xvdXJOdW1iZXIgPSAoY29sb3VyU3RyaW5nOiBDb2xvdXJTdHJpbmcpOiBDb2xvdXJOdW1iZXIgPT4gQ29sb3IuSGV4U3RyaW5nVG9Db2xvcihjb2xvdXJTdHJpbmcpLmNvbG9yXG5cbmV4cG9ydCBjb25zdCBIRUFMVEhfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzAwMDAwMCcpXG5leHBvcnQgY29uc3QgSEVBTFRIX0VNUFRZX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmZmZicpXG5leHBvcnQgY29uc3QgSEVBTFRIX0ZVTExfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjNGRmMDM3JylcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIT1ZFUl9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2NjZmZiZScpXG5leHBvcnQgY29uc3QgU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZDA4JylcbmV4cG9ydCBjb25zdCBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzlkZjFlNycpXG5cbmV4cG9ydCBjb25zdCBBQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2NjY2MwMCdcbmV4cG9ydCBjb25zdCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2ZmZmYwMCdcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9USU5UUyA9IFsnI2ZmYmJiYicsICcjYmJiYmZmJywgJyNiYmZmYmInLCAnI2JiZmZmZicsICcjZmZmZmJiJywgJyNmZmJiZmYnXS5tYXAoY29sb3VyTnVtYmVyKVxuIiwiaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbmV4cG9ydCBjbGFzcyBDb21iaW5lZFN0YXRlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBmaW5kU2VsZWN0ZWRVbml0ID0gKCk6IE9wdGlvbjxVbml0PiA9PlxuICAgIHRoaXMuc2VsZWN0ZWRIZXggPyB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbih0aGlzLnNlbGVjdGVkSGV4KSA6IHVuZGVmaW5lZFxuXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRIZXgoKTogT3B0aW9uPEhleD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKGhleClcblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlID0gKHVuaXQ6IFVuaXQpOiBib29sZWFuID0+XG4gICAgdW5pdC5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkICYmIHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrID0gKHVuaXQ6IFVuaXQpOiBib29sZWFuID0+XG4gICAgdW5pdC5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkICYmIHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDYW5Nb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgaGV4OiBIZXgpOiBib29sZWFuID0+XG4gICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkgJiZcbiAgICBoZXguaXNBZGphY2VudFRvKHVuaXQubG9jYXRpb24pICYmXG4gICAgdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkgJiZcbiAgICAhdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHRoZSB1bml0IGluIHRoZSBoZXggdG8gYXR0YWNrLCBpZiBhbiBhdHRhY2sgaXMgcG9zc2libGUsIGVsc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGljIHVuaXRDYW5BdHRhY2tIZXggPSAodW5pdDogVW5pdCwgbG9jYXRpb246IEhleCwgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VW5pdCA9IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGxvY2F0aW9uKVxuICAgIGlmIChcbiAgICAgIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkgJiZcbiAgICAgIHRhcmdldFVuaXQgIT0gdW5kZWZpbmVkICYmXG4gICAgICB0YXJnZXRVbml0LnBsYXllcklkICE9IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWQgJiZcbiAgICAgIGNhbkF0dGFja09jY3VyKGF0dGFja1R5cGUsIHVuaXQubG9jYXRpb24sIGxvY2F0aW9uKVxuICAgIClcbiAgICAgIHJldHVybiB0YXJnZXRVbml0XG4gIH1cblxuICBwdWJsaWMgZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMgPSAodW5pdElkPzogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCBjYW5kaWRhdGVVbml0cyA9IFIuc29ydEJ5KFxuICAgICAgKHVuaXQpID0+IHVuaXQuaWQsXG4gICAgICB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdHNGb3JQbGF5ZXIodGhpcy5wbGF5ZXJJZCkuZmlsdGVyKCh1bml0KSA9PiB1bml0Lmhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMpLFxuICAgIClcbiAgICBpZiAodW5pdElkKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCA+IHVuaXRJZCkpID8/XG4gICAgICAgIFIuaGVhZChjYW5kaWRhdGVVbml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgPCB1bml0SWQpKVxuICAgICAgKVxuICAgIGVsc2UgcmV0dXJuIFIuaGVhZChjYW5kaWRhdGVVbml0cylcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBsYXllciB3aXRoIGlkICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHBsYXllclxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLW1hcCdcblxuZXhwb3J0IGNvbnN0IGNlbnRlclBvaW50ID0gKGhleDogSGV4KTogUG9pbnQgPT4gKHtcbiAgeDogaGV4LnggKiBNYXRoLnNxcnQoMykgKyAoaGV4LnkgKiBNYXRoLnNxcnQoMykpIC8gMixcbiAgeTogKGhleC55ICogMykgLyAyLFxufSlcblxuZXhwb3J0IGNvbnN0IGZyb21Qb2ludCA9IChwb2ludDogUG9pbnQpOiBIZXggPT4ge1xuICBjb25zdCB4ID0gKHBvaW50LnggKiBNYXRoLnNxcnQoMykpIC8gMyAtIHBvaW50LnkgLyAzXG4gIGNvbnN0IHkgPSAoMiAqIHBvaW50LnkpIC8gM1xuICByZXR1cm4gcm91bmQobmV3IEhleCh4LCB5KSlcbn1cblxuY29uc3Qgcm91bmQgPSAoaGV4OiBIZXgpOiBIZXggPT4ge1xuICBjb25zdCByeCA9IE1hdGgucm91bmQoaGV4LngpXG4gIGNvbnN0IHJ5ID0gTWF0aC5yb3VuZChoZXgueSlcbiAgY29uc3QgcnogPSBNYXRoLnJvdW5kKGhleC56KVxuXG4gIGNvbnN0IHhEaWZmID0gTWF0aC5hYnMocnggLSBoZXgueClcbiAgY29uc3QgeURpZmYgPSBNYXRoLmFicyhyeSAtIGhleC55KVxuICBjb25zdCB6RGlmZiA9IE1hdGguYWJzKHJ6IC0gaGV4LnkpXG5cbiAgaWYgKHhEaWZmID4geURpZmYgJiYgeERpZmYgPiB6RGlmZikgcmV0dXJuIG5ldyBIZXgoLXJ5IC0gcnosIHJ5KVxuICBlbHNlIGlmICh5RGlmZiA+IHpEaWZmKSByZXR1cm4gbmV3IEhleChyeCwgLXJ4IC0gcnopXG4gIGVsc2UgcmV0dXJuIG5ldyBIZXgocngsIHJ5KVxufVxuXG5jb25zdCBoZXhBbmdsZSA9IE1hdGguUEkgLyAzXG5jb25zdCBoZXhPZmZzZXQgPSBNYXRoLlBJIC8gNlxuXG5jb25zdCBoZXhDb3JuZXIgPSAoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyLCBpOiBudW1iZXIpOiBQb2ludCA9PiB7XG4gIGNvbnN0IGFuZ2xlUmFkaWFucyA9IGhleEFuZ2xlICogaSAtIGhleE9mZnNldFxuICBjb25zdCB4ID0gY2VudGVyLnggKyBzaXplICogTWF0aC5jb3MoYW5nbGVSYWRpYW5zKVxuICBjb25zdCB5ID0gY2VudGVyLnkgKyBzaXplICogTWF0aC5zaW4oYW5nbGVSYWRpYW5zKVxuICByZXR1cm4geyB4LCB5IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBoZXhDb3JuZXJzKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8UG9pbnQ+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB5aWVsZCBoZXhDb3JuZXIoY2VudGVyLCBzaXplLCBpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtYXBIZWlnaHQgPSAobWFwOiBXb3JsZE1hcCk6IG51bWJlciA9PiAobWFwLmhlaWdodCAqIDMpIC8gMlxuXG5leHBvcnQgY29uc3QgaGV4V2lkdGggPSAoaGV4U2l6ZTogbnVtYmVyKTogbnVtYmVyID0+IGhleFNpemUgKiBNYXRoLnNxcnQoMylcbiIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC9ib290LXNjZW5lJ1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tICcuL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUnXG5pbXBvcnQgeyBMb2JieVNjZW5lIH0gZnJvbSAnLi9sb2JieS9sb2JieS1zY2VuZSdcblxuZXhwb3J0IGRlZmF1bHQgW0Jvb3RTY2VuZSwgR2FtZVNjZW5lLCBNYWluTWVudVNjZW5lLCBMb2JieVNjZW5lXVxuIiwiaW1wb3J0IHsgQ2xpZW50LCBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2VMaXN0ZW5lciB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBHQU1FX1NDRU5FX0tFWSwgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi4vLi4vc2VydmVyL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiB9IGZyb20gJy4uLy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBMb2JieURpc3BsYXlPYmplY3RzIH0gZnJvbSAnLi9sb2JieS1kaXNwbGF5LW9iamVjdHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVkTG9iYnlTY2VuZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9iYnlEaXNwbGF5T2JqZWN0czogTG9iYnlEaXNwbGF5T2JqZWN0c1xuICBwcml2YXRlIGxpc3RlbmVyPzogU2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXJcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50LCBwbGF5ZXJJZDogUGxheWVySWQsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLkNMSUNLKVxuICAgIHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cyA9IHRoaXMubWFrZUxvYmJ5RGlzcGxheU9iamVjdHMoc2NlbmUsIHBsYXllcklkKVxuICAgIGlmIChzZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIENsaWVudCkge1xuICAgICAgdGhpcy5hY3RBc0NsaWVudChzZXJ2ZXJPckNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcihzZXJ2ZXJPckNsaWVudClcbiAgICB9XG4gICAgdGhpcy5zeW5jKClcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUxvYmJ5RGlzcGxheU9iamVjdHMgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgcGxheWVySWQ6IFBsYXllcklkKSA9PlxuICAgIG5ldyBMb2JieURpc3BsYXlPYmplY3RzKHNjZW5lLCBwbGF5ZXJJZCwgdGhpcy5oYW5kbGVTdGFydEdhbWUsIHRoaXMuaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSlcblxuICBwcml2YXRlIGFjdEFzQ2xpZW50ID0gKGNsaWVudDogQ2xpZW50KTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpID0+IHRoaXMuaGFuZGxlU2VydmVyVG9DbGllbnRNZXNzYWdlKG1lc3NhZ2UsIGNsaWVudClcbiAgICBjbGllbnQuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VydmVyVG9DbGllbnRNZXNzYWdlID0gKG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZSwgY2xpZW50OiBDbGllbnQpOiB2b2lkID0+IHtcbiAgICBpZiAobWVzc2FnZS50eXBlID09ICd3b3JsZEV2ZW50Jykge1xuICAgICAgY29uc3QgZXZlbnQ6IFdvcmxkRXZlbnQgPSBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuZXZlbnQpXG4gICAgICB0aGlzLndvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICAgIGlmIChldmVudC50eXBlID09ICdnYW1lU3RhcnRlZCcpIHtcbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXIpIHtcbiAgICAgICAgICBjbGllbnQucmVtb3ZlTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgICAgICAgICB0aGlzLmxpc3RlbmVyID0gdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXVuY2hHYW1lU2NlbmUoKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnN5bmMoKVxuICB9XG5cbiAgcHJpdmF0ZSBsYXVuY2hHYW1lU2NlbmUgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0ge1xuICAgICAgc2VydmVyT3JDbGllbnQ6IHRoaXMuc2VydmVyT3JDbGllbnQsXG4gICAgICB3b3JsZFN0YXRlOiB0aGlzLndvcmxkU3RhdGUsXG4gICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICB9XG4gICAgdGhpcy5zY2VuZS5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lID0gKG5hbWU6IHN0cmluZyk6IHZvaWQgPT4gdGhpcy5kaXNwYXRjaEFjdGlvbih7IHR5cGU6ICdjaGFuZ2VQbGF5ZXJOYW1lJywgbmFtZSB9KVxuXG4gIHByaXZhdGUgZGlzcGF0Y2hBY3Rpb24gPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLnNlcnZlck9yQ2xpZW50IGluc3RhbmNlb2YgU2VydmVyKSB7XG4gICAgICB0aGlzLnNlcnZlck9yQ2xpZW50LmhhbmRsZUFjdGlvbih0aGlzLnBsYXllcklkLCBhY3Rpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuc2VuZEFjdGlvbih0aGlzLnBsYXllcklkLCBhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIHN5bmMgPSAoKTogdm9pZCA9PiB0aGlzLmxvYmJ5RGlzcGxheU9iamVjdHMuc3luYyh0aGlzLndvcmxkU3RhdGUpXG5cbiAgcHJpdmF0ZSBhY3RBc1NlcnZlciA9IChzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT5cbiAgICBzZXJ2ZXIuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgICAgdGhpcy53b3JsZFN0YXRlID0gc2VydmVyLndvcmxkU3RhdGVcbiAgICAgIHRoaXMuc3luYygpXG4gICAgfSlcblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpID0+IHtcbiAgICB0aGlzLmRpc3BhdGNoQWN0aW9uKHsgdHlwZTogJ3N0YXJ0R2FtZScgfSlcbiAgICB0aGlzLmxhdW5jaEdhbWVTY2VuZSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi8uLi91aS9tZW51LWJ1dHRvbidcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuXG5leHBvcnQgY2xhc3MgTG9iYnlEaXNwbGF5T2JqZWN0cyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG9uU3RhcnRHYW1lOiBWb2lkRnVuY3Rpb25cbiAgcHJpdmF0ZSByZWFkb25seSBvbkNoYW5nZVBsYXllck5hbWU6IChuYW1lOiBzdHJpbmcpID0+IHZvaWRcblxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllck5hbWVUZXh0czogTWFwPFBsYXllcklkLCBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFydEdhbWVCdXR0b24/OiBNZW51QnV0dG9uXG4gIHByaXZhdGUgcmVhZG9ubHkgd2FpdGluZ0Zvckhvc3RUZXh0PzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxuICAgIHBsYXllcklkOiBQbGF5ZXJJZCxcbiAgICBvblN0YXJ0R2FtZTogVm9pZEZ1bmN0aW9uLFxuICAgIG9uQ2hhbmdlUGxheWVyTmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZCxcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5vblN0YXJ0R2FtZSA9IG9uU3RhcnRHYW1lXG4gICAgdGhpcy5vbkNoYW5nZVBsYXllck5hbWUgPSBvbkNoYW5nZVBsYXllck5hbWVcbiAgICB0aGlzLnNjZW5lLmFkZC50ZXh0KDEwMCwgNTAsICdMbGFtYSBXYXJzJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpXG4gICAgaWYgKHBsYXllcklkID09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbiA9IG5ldyBNZW51QnV0dG9uKHRoaXMuc2NlbmUsIDEwMCwgMCwgJ1N0YXJ0IEdhbWUnLCB0aGlzLmhhbmRsZVN0YXJ0R2FtZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53YWl0aW5nRm9ySG9zdFRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDEwMCwgMCwgJ1dhaXRpbmcgZm9yIGhvc3QgdG8gc3RhcnQgdGhlIGdhbWUuLi4nKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRHYW1lID0gKCkgPT4ge1xuICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgdGhpcy5vblN0YXJ0R2FtZSgpXG4gIH1cblxuICBwdWJsaWMgc3luYyA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcmVxdWlyZWRQbGF5ZXJJZHMgPSB3b3JsZFN0YXRlLmdldFBsYXllcklkcygpXG4gICAgY29uc3QgY3VycmVudFBsYXllcklkcyA9IEFycmF5LmZyb20odGhpcy5wbGF5ZXJOYW1lVGV4dHMua2V5cygpKVxuICAgIGNvbnN0IHN1cnBsdXNQbGF5ZXJJZHMgPSBSLmRpZmZlcmVuY2UoY3VycmVudFBsYXllcklkcywgcmVxdWlyZWRQbGF5ZXJJZHMpXG4gICAgZm9yIChjb25zdCBwbGF5ZXJJZCBvZiBzdXJwbHVzUGxheWVySWRzKSB7XG4gICAgICB0aGlzLnBsYXllck5hbWVUZXh0cy5nZXQocGxheWVySWQpPy5kZXN0cm95KClcbiAgICB9XG4gICAgY29uc3QgbWlzc2luZ1BsYXllcklkcyA9IFIuZGlmZmVyZW5jZShyZXF1aXJlZFBsYXllcklkcywgY3VycmVudFBsYXllcklkcylcbiAgICBmb3IgKGNvbnN0IHBsYXllcklkIG9mIG1pc3NpbmdQbGF5ZXJJZHMpIHtcbiAgICAgIGNvbnN0IHBsYXllciA9IHdvcmxkU3RhdGUuZ2V0UGxheWVyKHBsYXllcklkKVxuICAgICAgY29uc3QgcGxheWVyVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAgIC50ZXh0KDEwMCwgMCwgcGxheWVyLm5hbWUsIHtcbiAgICAgICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICAgICAgZml4ZWRXaWR0aDogMjAwLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCA/ICcjMzMzMzMzJyA6ICcjMDAwMDAwJyxcbiAgICAgICAgfSlcbiAgICAgICAgLnNldEZvbnRTaXplKDE4KVxuICAgICAgICAuc2V0UGFkZGluZygwLCAwLCAwLCAwKVxuICAgICAgICAuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgIGlmIChwbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnNjZW5lLnBsdWdpbnMuZ2V0KCdyZXhUZXh0RWRpdCcpIGFzIGFueVxuICAgICAgICAgICAgcGx1Z2luLmVkaXQocGxheWVyVGV4dCwge1xuICAgICAgICAgICAgICBvbkNsb3NlOiAoKSA9PiB0aGlzLm9uQ2hhbmdlUGxheWVyTmFtZShwbGF5ZXJUZXh0LnRleHQpLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB0aGlzLnBsYXllck5hbWVUZXh0cy5zZXQocGxheWVySWQsIHBsYXllclRleHQpXG4gICAgfVxuICAgIGxldCB5ID0gMTAwXG4gICAgY29uc3Qgc29ydGVkUGxheWVycyA9IFIuc29ydEJ5KChwbGF5ZXIpID0+IHBsYXllci5pZCwgd29ybGRTdGF0ZS5wbGF5ZXJzKVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHNvcnRlZFBsYXllcnMpIHtcbiAgICAgIGNvbnN0IHBsYXllclRleHQgPSB0aGlzLnBsYXllck5hbWVUZXh0cy5nZXQocGxheWVyLmlkKSFcbiAgICAgIHBsYXllclRleHQuc2V0VGV4dChwbGF5ZXIubmFtZSkuc2V0WSh5KVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICBpZiAodGhpcy5zdGFydEdhbWVCdXR0b24pIHRoaXMuc3RhcnRHYW1lQnV0dG9uLnNldFkoeSlcbiAgICBpZiAodGhpcy53YWl0aW5nRm9ySG9zdFRleHQpIHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0LnNldFkoeSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmVyL2NsaWVudCdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uLy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENyZWF0ZWRMb2JieVNjZW5lIH0gZnJvbSAnLi9jcmVhdGVkLWxvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgY29uc3QgTE9CQllfU0NFTkVfS0VZID0gJ0xvYmJ5J1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYmJ5U2NlbmVEYXRhIHtcbiAgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwbGF5ZXJJZDogUGxheWVySWRcbiAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxufVxuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogTE9CQllfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgTG9iYnlTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9IChzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBzZXJ2ZXJPckNsaWVudCwgcGxheWVySWQsIHdvcmxkU3RhdGUgfSA9IHNjZW5lRGF0YVxuICAgIG5ldyBDcmVhdGVkTG9iYnlTY2VuZSh0aGlzLCBzZXJ2ZXJPckNsaWVudCwgcGxheWVySWQsIHdvcmxkU3RhdGUpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21haW4tZ2FtZS9tb2RlJ1xuaW1wb3J0IHsgTWF5YmUsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5cbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVTdGF0ZSB7XG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBtb2RlOiBNb2RlXG4gIHJlYWRvbmx5IHNlbGVjdGVkSGV4OiBPcHRpb248SGV4PlxuICByZWFkb25seSBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgcGxheWVySWQsXG4gICAgbW9kZSxcbiAgICBzZWxlY3RlZEhleCxcbiAgICBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSBmYWxzZSxcbiAgfToge1xuICAgIHBsYXllcklkOiBQbGF5ZXJJZFxuICAgIG1vZGU6IE1vZGVcbiAgICBzZWxlY3RlZEhleD86IE9wdGlvbjxIZXg+XG4gICAgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogYm9vbGVhblxuICB9KSB7XG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5tb2RlID0gbW9kZVxuICAgIHRoaXMuc2VsZWN0ZWRIZXggPSBzZWxlY3RlZEhleFxuICAgIHRoaXMuYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgcGxheWVySWQgPSB0aGlzLnBsYXllcklkLFxuICAgIG1vZGUgPSB0aGlzLm1vZGUsXG4gICAgc2VsZWN0ZWRIZXggPSB0b01heWJlKHRoaXMuc2VsZWN0ZWRIZXgpLFxuICAgIGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlciA9IHRoaXMuYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyLFxuICB9OiB7XG4gICAgcGxheWVySWQ/OiBQbGF5ZXJJZFxuICAgIG1vZGU/OiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBNYXliZTxIZXg+XG4gICAgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogYm9vbGVhblxuICB9ID0ge30pOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIG5ldyBMb2NhbEdhbWVTdGF0ZSh7IHBsYXllcklkLCBtb2RlLCBzZWxlY3RlZEhleDogdG9PcHRpb24oc2VsZWN0ZWRIZXgpLCBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgfSlcblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRIZXggPSAoc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+KTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgc2VsZWN0ZWRIZXg6IHRvTWF5YmUoc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldE1vZGUgPSAobW9kZTogTW9kZSk6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IG1vZGUgfSlcbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSA9IG5ldyBMb2NhbEdhbWVTdGF0ZSh7XG4gIHBsYXllcklkOiAxLFxuICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG59KVxuIiwiaW1wb3J0IHsgTWFwRGlzcGxheU9iamVjdCB9IGZyb20gJy4vbWFwLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVuaXREaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi91bml0LWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25EaXNwYXRjaGVyLCBUZXh0c0Rpc3BsYXlPYmplY3QgfSBmcm9tICcuL3RleHRzLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uLy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBBdHRhY2tUeXBlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtYWN0aW9ucydcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQW5pbWF0aW9uU3BlYyB7XG4gIHR5cGU6ICdtb3ZlJ1xuICB1bml0SWQ6IFVuaXRJZFxuICBmcm9tOiBIZXhcbiAgdG86IEhleFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbWJhdEFuaW1hdGlvblNwZWMge1xuICB0eXBlOiAnY29tYmF0J1xuICBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlXG4gIGF0dGFja2VyOiB7XG4gICAgdW5pdElkOiBVbml0SWRcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgZGFtYWdlOiBudW1iZXJcbiAgICBraWxsZWQ6IGJvb2xlYW5cbiAgfVxuICBkZWZlbmRlcjoge1xuICAgIHVuaXRJZDogVW5pdElkXG4gICAgbG9jYXRpb246IEhleFxuICAgIGRhbWFnZTogbnVtYmVyXG4gICAga2lsbGVkOiBib29sZWFuXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQW5pbWF0aW9uU3BlYyA9IE1vdmVBbmltYXRpb25TcGVjIHwgQ29tYmF0QW5pbWF0aW9uU3BlY1xuXG5leHBvcnQgY2xhc3MgRGlzcGxheU9iamVjdHMge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSByZWFkb25seSBtYXBEaXNwbGF5T2JqZWN0OiBNYXBEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgcmVhZG9ubHkgdW5pdERpc3BsYXlPYmplY3RzOiBNYXA8VW5pdElkLCBVbml0RGlzcGxheU9iamVjdD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBhbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgdGV4dHNEaXNwbGF5T2JqZWN0OiBUZXh0c0Rpc3BsYXlPYmplY3RcbiAgcHJpdmF0ZSByZWFkb25seSBsb2NhbEFjdGlvbkRpc3BhdGNoZXI6IExvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICBwcml2YXRlIGlzQW5pbWF0aW5nOiBib29sZWFuID0gZmFsc2VcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgYW5pbWF0aW9uczogQW5pbWF0aW9uU3BlY1tdID0gW11cblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxuICAgIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICAgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlLFxuICAgIGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyLFxuICApIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSBsb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3QgPSBuZXcgTWFwRGlzcGxheU9iamVjdChzY2VuZSwgdGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0ID0gbmV3IFRleHRzRGlzcGxheU9iamVjdChcbiAgICAgIHNjZW5lLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLFxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSxcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyLFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludDogUG9pbnQpOiB2b2lkID0+IHRoaXMubWFwRGlzcGxheU9iamVjdD8uaGFuZGxlUG9pbnRlck1vdmUocG9pbnQpXG5cbiAgcHVibGljIGhhc0NsaWNrSGFuZGxlckZvciA9IChwb2ludDogUG9pbnQpOiBib29sZWFuID0+IHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0Lmhhc0NsaWNrSGFuZGxlckZvcihwb2ludClcblxuICBwdWJsaWMgc3luY1NjZW5lID0gKFxuICAgIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICAgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlLFxuICAgIGFuaW1hdGlvbjogT3B0aW9uPEFuaW1hdGlvblNwZWM+LFxuICApOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0Py5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0Py5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuXG4gICAgaWYgKGFuaW1hdGlvbikge1xuICAgICAgdGhpcy5hbmltYXRpb25zID0gUi5hcHBlbmQoYW5pbWF0aW9uKSh0aGlzLmFuaW1hdGlvbnMpXG4gICAgICB0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKGFuaW1hdGlvbikuZm9yRWFjaCh0aGlzLm1hbmFnZVVuaXRBc0JlaW5nQW5pbWF0ZWQpXG4gICAgICB0aGlzLnRyaWdnZXJBbmltYXRpb25zKClcbiAgICB9XG5cbiAgICB0aGlzLnN5bmNVbml0cygpXG4gIH1cblxuICBwcml2YXRlIHN5bmNVbml0cyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnJlbW92ZVVuaXREaXNwbGF5T2JqZWN0c05vTG9uZ2VyTmVlZGVkKClcbiAgICBjb25zdCB1bml0c1RvU3luYyA9IHRoaXMud29ybGRTdGF0ZS51bml0cy5maWx0ZXIoKHVuaXQpID0+ICF0aGlzLmFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzLmhhcyh1bml0LmlkKSlcbiAgICBmb3IgKGNvbnN0IHVuaXQgb2YgdW5pdHNUb1N5bmMpIHtcbiAgICAgIGxldCB1bml0RGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0LmlkKVxuICAgICAgaWYgKCF1bml0RGlzcGxheU9iamVjdCkge1xuICAgICAgICB1bml0RGlzcGxheU9iamVjdCA9IG5ldyBVbml0RGlzcGxheU9iamVjdCh0aGlzLnNjZW5lLCB1bml0KVxuICAgICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5zZXQodW5pdC5pZCwgdW5pdERpc3BsYXlPYmplY3QpXG4gICAgICB9XG4gICAgICB1bml0RGlzcGxheU9iamVjdC5zeW5jU2NlbmUodW5pdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZVVuaXREaXNwbGF5T2JqZWN0c05vTG9uZ2VyTmVlZGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN1cnBsdXNVbml0SWRzID0gUi5kaWZmZXJlbmNlKFxuICAgICAgQXJyYXkuZnJvbSh0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5rZXlzKCkpLFxuICAgICAgdGhpcy53b3JsZFN0YXRlLnVuaXRzLm1hcCgodW5pdCkgPT4gdW5pdC5pZCksXG4gICAgKVxuICAgIGZvciAoY29uc3QgdW5pdElkIG9mIHN1cnBsdXNVbml0SWRzKSB7XG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKT8uZGVzdHJveSgpXG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJpZ2dlckFuaW1hdGlvbnMgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuaXNBbmltYXRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb2Nlc3NBbmltYXRpb25zKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlcXVlbmNlQW5pbWF0aW9ucyA9ICgpOiB7XG4gICAgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdzogQW5pbWF0aW9uU3BlY1tdXG4gICAgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyOiBBbmltYXRpb25TcGVjW11cbiAgfSA9PiB7XG4gICAgY29uc3QgdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucyA9IG5ldyBTZXQ8VW5pdElkPigpXG4gICAgY29uc3QgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdyA9IFtdXG4gICAgY29uc3QgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyID0gW11cbiAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiB0aGlzLmFuaW1hdGlvbnMpIHtcbiAgICAgIGNvbnN0IHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uID0gdGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICBjb25zdCBhZmZlY3RlZEJ5RWFybGllckFuaW1hdGlvbnMgPSBSLmFueShcbiAgICAgICAgKHVuaXRJZCkgPT4gdW5pdElkc0ludm9sdmVkSW5FYXJsaWVyQW5pbWF0aW9ucy5oYXModW5pdElkKSxcbiAgICAgICAgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24sXG4gICAgICApXG4gICAgICBpZiAoYWZmZWN0ZWRCeUVhcmxpZXJBbmltYXRpb25zKSB7XG4gICAgICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlci5wdXNoKGFuaW1hdGlvbilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3cucHVzaChhbmltYXRpb24pXG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHVuaXRJZCBvZiB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbikge1xuICAgICAgICB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zLmFkZCh1bml0SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3csIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciB9XG4gIH1cblxuICBwcml2YXRlIHByb2Nlc3NBbmltYXRpb25zID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlXG4gICAgdHJ5IHtcbiAgICAgIHdoaWxlICh0aGlzLmFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCB7IGFuaW1hdGlvbnNUb1BlcmZvcm1Ob3csIGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlciB9ID0gdGhpcy5zZXF1ZW5jZUFuaW1hdGlvbnMoKVxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYW5pbWF0aW9uc1RvUGVyZm9ybU5vdy5tYXAodGhpcy5ydW5BbmltYXRpb24pKVxuICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBhbmltYXRpb25zVG9QZXJmb3JtTm93KSB7XG4gICAgICAgICAgdGhpcy5yZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQoYW5pbWF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRzRnJvbUJlaW5nQW5pbWF0ZWRXaGVyZU5vTG9uZ2VyTmVlZGVkID0gKGFuaW1hdGlvbjogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgIGNvbnN0IHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMgPSB0aGlzLmdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMoKVxuICAgIGNvbnN0IHVuaXRJZHNUb1JlbGVhc2UgPSBSLmRpZmZlcmVuY2UodW5pdElkc0luQW5pbWF0aW9uLCB1bml0SWRzSW5SZW1haW5pbmdBbmltYXRpb25zKVxuICAgIHVuaXRJZHNUb1JlbGVhc2UuZm9yRWFjaCh0aGlzLnJlbGVhc2VVbml0RnJvbUJlaW5nQW5pbWF0ZWQpXG4gIH1cblxuICBwcml2YXRlIG1hbmFnZVVuaXRBc0JlaW5nQW5pbWF0ZWQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZClcbiAgICBpZiAoZGlzcGxheU9iamVjdCkge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICAgIHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbGVhc2VVbml0RnJvbUJlaW5nQW5pbWF0ZWQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmICghZGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke3VuaXRJZH1gXG4gICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAodW5pdCkge1xuICAgICAgZGlzcGxheU9iamVjdC5zeW5jU2NlbmUodW5pdClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0SWQsIGRpc3BsYXlPYmplY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlPYmplY3QuZGVzdHJveSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbml0c0ludm9sdmVkSW5BbmltYXRpb25zID0gKCk6IFVuaXRJZFtdID0+IFIuY2hhaW4odGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiwgdGhpcy5hbmltYXRpb25zKVxuXG4gIHByaXZhdGUgZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24gPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogVW5pdElkW10gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICByZXR1cm4gW2FuaW1hdGlvbi51bml0SWRdXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICByZXR1cm4gW2FuaW1hdGlvbi5hdHRhY2tlci51bml0SWQsIGFuaW1hdGlvbi5kZWZlbmRlci51bml0SWRdXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBydW5BbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgc3dpdGNoIChhbmltYXRpb24udHlwZSkge1xuICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgIGF3YWl0IHRoaXMucnVuTW92ZUFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bkNvbWJhdEFuaW1hdGlvbihhbmltYXRpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoYW5pbWF0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcnVuTW92ZUFuaW1hdGlvbiA9IGFzeW5jIChhbmltYXRpb246IE1vdmVBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGFuaW1hdGlvbi51bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YW5pbWF0aW9uLnVuaXRJZH1gXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5XQUxLKVxuICAgIGF3YWl0IGRpc3BsYXlPYmplY3QucnVuTW92ZUFuaW1hdGlvbihhbmltYXRpb24uZnJvbSwgYW5pbWF0aW9uLnRvKVxuICB9XG5cbiAgcHJpdmF0ZSBydW5Db21iYXRBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBDb21iYXRBbmltYXRpb25TcGVjKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGFuaW1hdGlvblxuICAgIGNvbnN0IGF0dGFja2VyRGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGF0dGFja2VyLnVuaXRJZClcbiAgICBpZiAoIWF0dGFja2VyRGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke2F0dGFja2VyLnVuaXRJZH1gXG4gICAgY29uc3QgZGVmZW5kZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoZGVmZW5kZXIudW5pdElkKVxuICAgIGlmICghZGVmZW5kZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7ZGVmZW5kZXIudW5pdElkfWBcbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShyYW5kb21FbGVtZW50KFtBdWRpb0tleXMuQVRUQUNLXzEsIEF1ZGlvS2V5cy5BVFRBQ0tfMiwgQXVkaW9LZXlzLkFUVEFDS18zXSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuU1BJVClcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCB8fCBkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuREVBVEgpXG4gICAgfVxuICAgIGNvbnN0IHNpbXVsdGFuZW91c0FuaW1hdGlvbnM6IFByb21pc2U8dm9pZD5bXSA9IFtdXG4gICAgaWYgKGFuaW1hdGlvbi5hdHRhY2tUeXBlID09PSAnbWVsZWUnKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkF0dGFja0FuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIH0gZWxzZSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1blNwaXRBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgc2ltdWx0YW5lb3VzQW5pbWF0aW9ucy5wdXNoKGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5EZWF0aEFuaW1hdGlvbigpKVxuICAgIH1cbiAgICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKCkpXG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKHNpbXVsdGFuZW91c0FuaW1hdGlvbnMpXG4gICAgaWYgKGF0dGFja2VyLmRhbWFnZSA+IDApIGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5EYW1hZ2VBbmltYXRpb24oYXR0YWNrZXIubG9jYXRpb24sIGF0dGFja2VyLmRhbWFnZSlcbiAgICBpZiAoZGVmZW5kZXIuZGFtYWdlID4gMCkgZGVmZW5kZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihkZWZlbmRlci5sb2NhdGlvbiwgZGVmZW5kZXIuZGFtYWdlKVxuICB9XG59XG4iLCJpbXBvcnQgeyBhZGRQb2ludHMsIG11bHRpcGx5UG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uLCB0b01heWJlIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSwgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgQUxMX0FVRElPX0tFWVMsIEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBtYXBUb0xvY2FsQWN0aW9uIH0gZnJvbSAnLi9rZXlib2FyZC1tYXBwZXInXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25Qcm9jZXNzb3IsIExvY2FsQWN0aW9uUmVzdWx0IH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvbWVzc2FnZXMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uIH0gZnJvbSAnLi4vLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQW5pbWF0aW9uU3BlYywgRGlzcGxheU9iamVjdHMgfSBmcm9tICcuL2Rpc3BsYXktb2JqZWN0cydcbmltcG9ydCBQb2ludGVyID0gUGhhc2VyLklucHV0LlBvaW50ZXJcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgY29uc3QgR0FNRV9TQ0VORV9LRVkgPSAnR2FtZSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEdBTUVfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG4gIHBsYXllcklkOiBQbGF5ZXJJZFxuICB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfU0laRSA9IDQ4XG5leHBvcnQgY29uc3QgRFJBV0lOR19PRkZTRVQgPSB7IHg6IDYwLCB5OiAxMDAgfVxuZXhwb3J0IGNvbnN0IGhleENlbnRlciA9IChoZXg6IEhleCk6IFBvaW50ID0+IGFkZFBvaW50cyhtdWx0aXBseVBvaW50KGNlbnRlclBvaW50KGhleCksIEhFWF9TSVpFKSwgRFJBV0lOR19PRkZTRVQpXG5cbmV4cG9ydCB0eXBlIEdhbWVJZCA9IHN0cmluZ1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSBzZXJ2ZXJPckNsaWVudD86IFNlcnZlciB8IENsaWVudFxuXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUgPSBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEVcblxuICBwcml2YXRlIGRpc3BsYXlPYmplY3RzPzogRGlzcGxheU9iamVjdHNcblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIC8vIENyZWF0ZVxuICAvLyAtLS0tLS1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgc2VydmVyT3JDbGllbnQsIHBsYXllcklkLCB3b3JsZFN0YXRlIH0gPSBzY2VuZURhdGFcbiAgICB0aGlzLnNldFVwU291bmQoKVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFLmNvcHkoeyBwbGF5ZXJJZCB9KVxuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBzZXJ2ZXJPckNsaWVudFxuICAgIGlmIChzZXJ2ZXJPckNsaWVudCBpbnN0YW5jZW9mIFNlcnZlcikge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcihzZXJ2ZXJPckNsaWVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RBc0NsaWVudChzZXJ2ZXJPckNsaWVudClcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzID0gbmV3IERpc3BsYXlPYmplY3RzKHRoaXMsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSwgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbilcbiAgICB0aGlzLmhhbmRsZU5ld1R1cm4oKVxuICAgIHRoaXMuc2V0VXBJbnB1dHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcFNvdW5kID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goKGtleSkgPT4gdGhpcy5zb3VuZC5hZGQoa2V5KSlcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoYW5pbWF0aW9uPzogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT5cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlLCBhbmltYXRpb24pXG5cbiAgLy8gTmV0d29ya2luZ1xuICAvLyAtLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCA9IChjbGllbnQ6IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBjbGllbnRcbiAgICBjbGllbnQuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlcnZlclRvQ2xpZW50TWVzc2FnZSA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnam9pbmVkJzpcbiAgICAgIGNhc2UgJ3Jlam9pbmVkJzpcbiAgICAgICAgY29uc29sZS5sb2coJ1VuZXhwZWN0ZWQgbWVzc2FnZSBtaWQtZ2FtZScpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3b3JsZEV2ZW50JzpcbiAgICAgICAgdGhpcy5oYW5kbGVXb3JsZEV2ZW50KGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5ldmVudCkpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFjdEFzU2VydmVyID0gKHNlcnZlcjogU2VydmVyKTogdm9pZCA9PiB7XG4gICAgc2VydmVyLmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlV29ybGRFdmVudClcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBzZXJ2ZXIud29ybGRTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luY1NlbmRUb1NlcnZlciA9IGFzeW5jIChhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKCF0aGlzLnNlcnZlck9yQ2xpZW50KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIHNlcnZlck9yQ2xpZW50YFxuICAgIGlmICh0aGlzLnNlcnZlck9yQ2xpZW50IGluc3RhbmNlb2YgU2VydmVyKSB7XG4gICAgICB0aGlzLnNlcnZlck9yQ2xpZW50LmhhbmRsZUFjdGlvbih0aGlzLnBsYXllcklkLCBhY3Rpb24pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmVyT3JDbGllbnQuc2VuZEFjdGlvbih0aGlzLnBsYXllcklkLCBhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgLy8gSW5wdXQgaGFuZGxlcnNcbiAgLy8gLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIHNldFVwSW5wdXRzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuaW5wdXQubW91c2UuZGlzYWJsZUNvbnRleHRNZW51KClcbiAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXkpXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJtb3ZlJywgdGhpcy5oYW5kbGVQb2ludGVyTW92ZSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgbG9jYWxBY3Rpb24gPSBtYXBUb0xvY2FsQWN0aW9uKGV2ZW50LCB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgaWYgKGxvY2FsQWN0aW9uKSB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKGxvY2FsQWN0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMb2NhbEFjdGlvbiA9IChsb2NhbEFjdGlvbjogTG9jYWxBY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zdCBsb2NhbEFjdGlvblByb2Nlc3NvciA9IG5ldyBMb2NhbEFjdGlvblByb2Nlc3Nvcih0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxBY3Rpb25Qcm9jZXNzb3IucHJvY2Vzcyhsb2NhbEFjdGlvbilcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB0aGlzLmVuYWN0TG9jYWxBY3Rpb25SZXN1bHQocmVzdWx0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW5hY3RMb2NhbEFjdGlvblJlc3VsdCA9IChyZXN1bHQ6IExvY2FsQWN0aW9uUmVzdWx0KTogdm9pZCA9PiB7XG4gICAgaWYgKHJlc3VsdC5uZXdMb2NhbEdhbWVTdGF0ZSkge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHJlc3VsdC5uZXdMb2NhbEdhbWVTdGF0ZVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgIH1cbiAgICBpZiAocmVzdWx0LndvcmxkQWN0aW9uKSB7XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyOiB0cnVlIH0pXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICAgIHRoaXMuYXN5bmNTZW5kVG9TZXJ2ZXIocmVzdWx0LndvcmxkQWN0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcjogZmFsc2UgfSlcbiAgICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvaW50ZXJNb3ZlID0gKHBvaW50ZXI6IFBvaW50ZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwb2ludGVyUG9pbnQgPSB7IHg6IHBvaW50ZXIueCwgeTogcG9pbnRlci55IH1cbiAgICB0aGlzLmRpc3BsYXlPYmplY3RzPy5oYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvaW50ZXJEb3duID0gKHBvaW50ZXI6IFBvaW50ZXIpOiB2b2lkID0+IHtcbiAgICAvLyBJZ25vcmUgY2xpY2tzIG9uIHRoZXNlIGFzIHRoZXkgaGF2ZSB0aGVpciBvd24gaGFuZGxlcnNcbiAgICBjb25zdCBwcmVzc2VkUG9pbnQgPSB7IHg6IHBvaW50ZXIueCwgeTogcG9pbnRlci55IH1cbiAgICBpZiAodGhpcy5kaXNwbGF5T2JqZWN0cz8uaGFzQ2xpY2tIYW5kbGVyRm9yKHByZXNzZWRQb2ludCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBoZXggPSBmcm9tUG9pbnQobXVsdGlwbHlQb2ludChzdWJ0cmFjdFBvaW50cyhwcmVzc2VkUG9pbnQsIERSQVdJTkdfT0ZGU0VUKSwgMSAvIEhFWF9TSVpFKSlcbiAgICBpZiAocG9pbnRlci5idXR0b24gPT0gMikge1xuICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdnb0hleCcsIGhleCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUxlZnRDbGljayhoZXgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMb2NhbEFjdGlvbkZvckNsaWNraW5nQUhleCA9IChoZXg6IEhleCk6IExvY2FsQWN0aW9uID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdzZWxlY3RIZXgnLCBoZXggfVxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4geyB0eXBlOiAnY29tcGxldGVNb3ZlJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4IH1cbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZUF0dGFjaycsIHVuaXRJZDogbW9kZS51bml0SWQsIGhleCwgYXR0YWNrVHlwZTogbW9kZS5hdHRhY2tUeXBlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxlZnRDbGljayA9IChoZXg6IEhleCk6IHZvaWQgPT4gdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih0aGlzLmdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4KGhleCkpXG5cbiAgLy8gU3luY1xuICAvLyAtLS0tXG5cbiAgLy8gSGFuZGxlIHdvcmxkIGV2ZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgb2xkV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQob2xkV29ybGRTdGF0ZSwgZXZlbnQpXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdpbml0aWFsaXNlJzpcbiAgICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgIGNhc2UgJ3BsYXllckNoYW5nZWROYW1lJzpcbiAgICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3VuaXRNb3ZlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudChldmVudCwgb2xkV29ybGRTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQ29tYmF0V29ybGRFdmVudChldmVudCwgb2xkV29ybGRTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckVuZGVkVHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyRW5kZWRUdXJuKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckRlZmVhdGVkJzpcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJEZWZlYXRlZCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdnYW1lT3Zlcic6XG4gICAgICAgIHRoaXMuaGFuZGxlR2FtZU92ZXIoZXZlbnQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICduZXdUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVOZXdUdXJuKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihldmVudClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdhbWVPdmVyID0gKGV2ZW50OiBHYW1lT3ZlcldvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoZXZlbnQudmljdG9yID09PSB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkKSB7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMpXG4gICAgfVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGxheWVyRGVmZWF0ZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQpXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOZXdUdXJuID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogdG9NYXliZSh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKSxcbiAgICB9KVxuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuTkVXX1RVUk4pXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50ID0gKGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50LCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIGZyb20sIHRvIH0gPSBldmVudFxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IHdhc1ByZXZpb3VzbHlTZWxlY3RlZCA9XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4ICYmIG9sZFdvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXgpPy5pZCA9PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKHVuaXRJZCwgdG8pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICAgICAgICBzZWxlY3RlZEhleDogdG9NYXliZShuZXdTZWxlY3RlZEhleCksXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSh7IHR5cGU6ICdtb3ZlJywgdW5pdElkLCBmcm9tLCB0byB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayA9ICh1bml0SWQ6IFVuaXRJZCwgZGVmYXVsdExvY2F0aW9uOiBIZXgpOiBPcHRpb248SGV4PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIC8vIFJldGFpbiBzZWxlY3Rpb24gaWYgdW5pdCBzdGlsbCBleGlzdHMgYW5kIHdlIHN0aWxsIGhhdmUgYWN0aW9uIHBvaW50cywgZWxzZSBzZWxlY3QgbmV4dCB1bml0IChvciBub3RoaW5nIGlmIHRoZXJlIGlzbid0IG9uZSlcbiAgICBsZXQgbmV3U2VsZWN0ZWRIZXhcbiAgICBpZiAoIXVuaXQgfHwgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA9PSAwKSB7XG4gICAgICBjb25zdCBuZXh0VW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cyh1bml0SWQpXG4gICAgICBuZXdTZWxlY3RlZEhleCA9IG5leHRVbml0Py5sb2NhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTZWxlY3RlZEhleCA9IGRlZmF1bHRMb2NhdGlvblxuICAgIH1cbiAgICByZXR1cm4gbmV3U2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tYmF0V29ybGRFdmVudCA9IChldmVudDogQ29tYmF0V29ybGRFdmVudCwgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQoYXR0YWNrZXIsIGRlZmVuZGVyLCBvbGRXb3JsZFN0YXRlKVxuICAgIHRoaXMuc3luY1NjZW5lKHtcbiAgICAgIHR5cGU6ICdjb21iYXQnLFxuICAgICAgYXR0YWNrVHlwZTogZXZlbnQuYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyLFxuICAgICAgZGVmZW5kZXIsXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQgPSAoXG4gICAgYXR0YWNrZXI6IENvbWJhdFBhcnRpY2lwYW50SW5mbyxcbiAgICBkZWZlbmRlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIG9sZFdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsXG4gICkgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCA9IG5ldyBDb21iaW5lZFN0YXRlKG9sZFdvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpLmZpbmRTZWxlY3RlZFVuaXQoKT8uaWRcbiAgICBpZiAocHJldmlvdXNseVNlbGVjdGVkVW5pdElkID09IGF0dGFja2VyLnVuaXRJZCAmJiBhdHRhY2tlci5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEhleCA9IHRoaXMuY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2soYXR0YWNrZXIudW5pdElkLCBhdHRhY2tlci5sb2NhdGlvbilcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoe1xuICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgIHNlbGVjdGVkSGV4OiB0b01heWJlKG5ld1NlbGVjdGVkSGV4KSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlc2VsZWN0IHVuaXQga2lsbGVkIGJ5IGFub3RoZXIgcGxheWVyXG4gICAgICBpZiAoZGVmZW5kZXIua2lsbGVkICYmIGRlZmVuZGVyLnVuaXRJZCA9PSBwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgJiYgZGVmZW5kZXIucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgICAgc2VsZWN0ZWRIZXg6IG5vdGhpbmcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyTW92ZU1vZGUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYSc6XG4gICAgICBpZiAobW9kZS50eXBlID09ICdzZWxlY3RIZXgnKSByZXR1cm4geyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ21lbGVlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ3MnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9XG4gICAgICBicmVha1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tUeXBlLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleCwgYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3ROZXh0VW5pdCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgY29uc3QgdW5pdFRvU2VsZWN0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhVbnNwZW50QWN0aW9uUG9pbnRzKHNlbGVjdGVkVW5pdD8uaWQpXG4gICAgaWYgKHVuaXRUb1NlbGVjdCkge1xuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgICAgIC5zZXRTZWxlY3RlZEhleCh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKVxuICAgICAgICAuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2VsZWN0ZWRIZXg6IG5vdGhpbmcgfSkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleCkgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgsICdtZWxlZScpXG4gICAgICBpZiAodGFyZ2V0VW5pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoJ21lbGVlJywgc2VsZWN0ZWRVbml0LCB0YXJnZXRVbml0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNrSGV4ID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGF0dGFja2VyOiBVbml0LCBkZWZlbmRlcjogVW5pdCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyOiB7IHVuaXRJZDogYXR0YWNrZXIuaWQsIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbiB9LFxuICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uIH0sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicsIHR1cm46IHRoaXMud29ybGRTdGF0ZS50dXJuIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAodW5pdCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQsIGF0dGFja1R5cGUgfVxuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9ICh1bml0SWQ6IFVuaXRJZCwgZGVzdGluYXRpb246IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbikpIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAoXG4gICAgdW5pdElkOiBVbml0SWQsXG4gICAgdGFyZ2V0SGV4OiBIZXgsXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCwgYXR0YWNrVHlwZSlcbiAgICBpZiAoZGVmZW5kZXIpIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tUeXBlLCBhdHRhY2tlciwgZGVmZW5kZXIpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bmRlZmluZWQpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgZnJvbVBvaW50LCBoZXhDb3JuZXJzIH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgSE9WRVJfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIsXG59IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgUG9seWdvbiA9IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uXG5pbXBvcnQgeyBjYW5BdHRhY2tPY2N1ciB9IGZyb20gJy4uLy4uL3NlcnZlci9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbnR5cGUgVGlsZVN0YXRlID0gJ2RlZmF1bHQnIHwgJ3NlbGVjdGVkJyB8ICd0YXJnZXRhYmxlJ1xuXG5leHBvcnQgY2xhc3MgTWFwRGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBoZXhQb2x5Z29uczogTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+ID0gbmV3IE1hcDxzdHJpbmcsIFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uPigpXG4gIHByaXZhdGUgcHJldmlvdXNIb3ZlckhleD86IEhleFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuY3JlYXRlSGV4KGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhleCA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBvbHlnb25DZW50ZXIgPSBoZXhDZW50ZXIoaGV4KVxuICAgIHRoaXMuc2NlbmUuYWRkLmltYWdlKHBvbHlnb25DZW50ZXIueCwgcG9seWdvbkNlbnRlci55LCAnZ3Jhc3MnKS5zZXRTY2FsZSgwLjY1KS5zZXREZXB0aCgtNSlcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKS5zZXRPcmlnaW4oMCwgMCkuc2V0RmlsbFN0eWxlKDB4MDAwMDAsIDApXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUoaGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIERlcHRoc1xuICAvLyAtNSAtIGltYWdlXG4gIC8vIC00IC0gZGVmYXVsdCBib3JkZXJcbiAgLy8gLTMgLSB0YXJnZXRhYmxlIGJvcmRlclxuICAvLyAtMiAtIHNlbGVjdGVkXG4gIC8vIC0xIC0gaG92ZXJcblxuICBwcml2YXRlIGdldERlcHRoID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogbnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiAtNFxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiAtM1xuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gLTJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNUaWxlID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldFN0cm9rZVN0eWxlKDMsIHRoaXMuZ2V0SGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpLnNldERlcHRoKHRoaXMuZ2V0RGVwdGgodGlsZVN0YXRlKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHRocm93IGBObyBwb2x5Z29uIGZvdW5kIGZvciAke2hleH1gXG4gICAgcmV0dXJuIHBvbHlnb25cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGlsZVN0YXRlID0gKGhleDogSGV4KTogVGlsZVN0YXRlID0+IHtcbiAgICBjb25zdCB7IHBsYXllcklkLCBzZWxlY3RlZEhleCwgbW9kZSB9ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZVxuICAgIGlmIChzZWxlY3RlZEhleCAmJiBzZWxlY3RlZEhleC5lcXVhbHMoaGV4KSkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PSAnbW92ZVVuaXQnKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRIZXggJiYgaGV4LmlzQWRqYWNlbnRUbyhzZWxlY3RlZEhleCkgJiYgIXRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGhleCkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09ICdhdHRhY2snKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRIZXggJiYgY2FuQXR0YWNrT2NjdXIobW9kZS5hdHRhY2tUeXBlLCBoZXgsIHNlbGVjdGVkSGV4KSkge1xuICAgICAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuICAgICAgICBpZiAodW5pdCAmJiB1bml0LnBsYXllcklkICE9IHBsYXllcklkKSB7XG4gICAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4Qm9yZGVyQ29sb3VyID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgICBjYXNlICd0YXJnZXRhYmxlJzpcbiAgICAgICAgcmV0dXJuIFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIb3ZlckhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gSE9WRVJfVElMRV9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocG9pbnRlclBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlckhleCAmJiB0aGlzLnByZXZpb3VzSG92ZXJIZXguZXF1YWxzKGhleCkpIHJldHVyblxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXgpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUodGhpcy5wcmV2aW91c0hvdmVySGV4KVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleClcbiAgICAgICAgLnNldFN0cm9rZVN0eWxlKHRpbGVTdGF0ZSA9PT0gJ2RlZmF1bHQnID8gMiA6IDQsIHRoaXMuZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIodGlsZVN0YXRlKSlcbiAgICAgICAgLnNldERlcHRoKC0xKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVySGV4ID0gaGV4XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBoZXhXaWR0aCwgbWFwSGVpZ2h0IH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgQUNUSU9OX1RFWFRfQ09MT1VSLCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBEUkFXSU5HX09GRlNFVCwgSEVYX1NJWkUgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vcG9pbnQnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5cbmV4cG9ydCB0eXBlIExvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IChhY3Rpb246IExvY2FsQWN0aW9uKSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZlYXRUZXh0VHdlZW5YOiBQaGFzZXIuVHdlZW5zLlR3ZWVuXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dFR3ZWVuWTogUGhhc2VyLlR3ZWVucy5Ud2VlblxuICBwcml2YXRlIHJlYWRvbmx5IHZpY3RvcnlUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmUsXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IGxvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICAgIGNvbnN0IG1hcCA9IHRoaXMud29ybGRTdGF0ZS5tYXBcbiAgICB0aGlzLnNjZW5lLmFkZFxuICAgICAgLmltYWdlKDM2LCAzMiwgJ2xsYW1hJylcbiAgICAgIC5zZXRTY2FsZSgwLjgpXG4gICAgICAuc2V0VGludChQTEFZRVJfVElOVFNbbG9jYWxHYW1lU3RhdGUucGxheWVySWQgLSAxXSlcbiAgICB0aGlzLnBsYXllclRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDcwLCAyMCwgJycpXG4gICAgdGhpcy5ob3VyZ2xhc3MgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSg4NzUsIDMwLCAnaG91cmdsYXNzJykuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoXG4gICAgICBEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMixcbiAgICAgIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LFxuICAgICAgJycsXG4gICAgKVxuICAgIHRoaXMuYWN0aW9uVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyAyNSwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0Q2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuYWN0aW9uVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5hY3Rpb25UZXh0MiA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA1MCwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0MkNsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dDIuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5hY3Rpb25UZXh0MyA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA3NSwgJycsIHtcbiAgICAgICAgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSLFxuICAgICAgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVBY3Rpb25UZXh0M0NsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dDMuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5lbmRUdXJuVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg3MDAsIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LCAnJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW5kVHVybicgfSkpXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5lbmRUdXJuVGV4dC5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmRlZmVhdFRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoNDYyLCAobWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkpIC8gMiwgJ1lvdSBoYXZlIGJlZW4gZGVmZWF0ZWQhJywge1xuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiA0LFxuICAgICAgfSlcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgICAgLnNldEZvbnRTaXplKDQyKVxuICAgICAgLnNldFZpc2libGUoZmFsc2UpXG4gICAgICAuc2V0RGVwdGgoMTAwKVxuICAgIHRoaXMuZGVmZWF0VGV4dFR3ZWVuWCA9IHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmRlZmVhdFRleHQsXG4gICAgICB4OiAnKz01MCcsXG4gICAgICBkdXJhdGlvbjogMTkwMCxcbiAgICAgIGVhc2U6ICdTaW5lLmVhc2VJbk91dCcsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICB9KVxuICAgIHRoaXMuZGVmZWF0VGV4dFR3ZWVuWSA9IHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmRlZmVhdFRleHQsXG4gICAgICB5OiAnKz01MCcsXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGVhc2U6ICdTaW5lLmVhc2VJbk91dCcsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgICAgcmVwZWF0OiAtMSxcbiAgICAgIHBhdXNlZDogdHJ1ZSxcbiAgICB9KVxuICAgIHRoaXMudmljdG9yeVRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoNDYyLCAzMCwgJ1ZpY3RvcnkhJywge1xuICAgICAgICBzdHJva2U6ICcjMDAwMDAwJyxcbiAgICAgICAgc3Ryb2tlVGhpY2tuZXNzOiA0LFxuICAgICAgfSlcbiAgICAgIC5zZXRPcmlnaW4oMC41KVxuICAgICAgLnNldEZvbnRTaXplKDQyKVxuICAgICAgLnNldFZpc2libGUoZmFsc2UpXG4gICAgICAuc2V0RGVwdGgoMTAwKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0Q2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnYWJvcnQnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQyQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdtZWxlZScgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHQzQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlID09PSAnc2VsZWN0SGV4Jykge1xuICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYXNDbGlja0hhbmRsZXJGb3IgPSAocG9pbnQ6IFBvaW50KTogYm9vbGVhbiA9PiB7XG4gICAgZm9yIChjb25zdCBnYW1lT2JqZWN0IG9mIFt0aGlzLmVuZFR1cm5UZXh0LCB0aGlzLmFjdGlvblRleHQsIHRoaXMuYWN0aW9uVGV4dDIsIHRoaXMuYWN0aW9uVGV4dDNdKVxuICAgICAgaWYgKGdhbWVPYmplY3QuZ2V0Qm91bmRzKCkuY29udGFpbnMocG9pbnQueCwgcG9pbnQueSkpIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpXG4gICAgdGhpcy5ob3VyZ2xhc3Muc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5hY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIpXG4gICAgdGhpcy5wbGF5ZXJUZXh0LnNldFRleHQoYCR7cGxheWVyLm5hbWV9IC0gVHVybiAke3RoaXMud29ybGRTdGF0ZS50dXJufWApXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQoJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0Mi5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dDMuc2V0VGV4dCgnJylcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuc3luY1NlbGVjdEhleE1vZGVUZXh0KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5zeW5jTW92ZVVuaXRNb2RlVGV4dChtb2RlLnVuaXRJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuc3luY0F0dGFja01vZGVUZXh0KG1vZGUudW5pdElkLCBtb2RlLmF0dGFja1R5cGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gICAgaWYgKHBsYXllci5lbmRlZFR1cm4pIHtcbiAgICAgIHRoaXMuZW5kVHVyblRleHQuc2V0VGV4dCgnV2FpdGluZyBmb3IgbmV4dCB0dXJuLi4uJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdFbmQgVHVybiAoU2hpZnQgKyBFbnRlciknKVxuICAgIH1cbiAgICB0aGlzLmRlZmVhdFRleHQuc2V0VmlzaWJsZShwbGF5ZXIuZGVmZWF0ZWQpXG4gICAgaWYgKHBsYXllci5kZWZlYXRlZCkge1xuICAgICAgdGhpcy5kZWZlYXRUZXh0VHdlZW5YLnBsYXkoKVxuICAgICAgdGhpcy5kZWZlYXRUZXh0VHdlZW5ZLnBsYXkoKVxuICAgIH1cbiAgICB0aGlzLnZpY3RvcnlUZXh0LnNldFZpc2libGUod29ybGRTdGF0ZS5nYW1lT3ZlckluZm8/LnZpY3RvciA9PT0gcGxheWVyLmlkKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jQXR0YWNrTW9kZVRleHQgPSAodW5pdElkOiBVbml0SWQsIGF0dGFja1R5cGU6IEF0dGFja1R5cGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCh0aGlzLmRlc2NyaWJlVW5pdCh1bml0KSlcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dChgQ2xpY2sgdW5pdCB0byAke2F0dGFja1R5cGUgPT09ICdtZWxlZScgPyAnYXR0YWNrJyA6ICdzcGl0J30gKG9yIEVTQyB0byBjYW5jZWwpYClcbiAgfVxuXG4gIHByaXZhdGUgc3luY01vdmVVbml0TW9kZVRleHQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCh0aGlzLmRlc2NyaWJlVW5pdCh1bml0KSlcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnQ2xpY2sgdGlsZSB0byBtb3ZlIHRvIChvciBFU0MgdG8gY2FuY2VsKScpXG4gIH1cblxuICBwcml2YXRlIHN5bmNTZWxlY3RIZXhNb2RlVGV4dCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQoc2VsZWN0ZWRVbml0KSlcbiAgICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlKHNlbGVjdGVkVW5pdCkpIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCdNb3ZlIChtKScpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHNlbGVjdGVkVW5pdCkpIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnQXR0YWNrIChhKScpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHNlbGVjdGVkVW5pdCkpIHRoaXMuYWN0aW9uVGV4dDMuc2V0VGV4dCgnU3BpdCAocyknKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyTmFtZSA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBzdHJpbmcgPT4gdGhpcy53b3JsZFN0YXRlLmdldFBsYXllcihwbGF5ZXJJZCkubmFtZVxuXG4gIHByaXZhdGUgZGVzY3JpYmVVbml0ID0gKHVuaXQ6IFVuaXQpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGxheWVySWQsIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0gPSB1bml0XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IHRoaXMuZ2V0UGxheWVyTmFtZShwbGF5ZXJJZClcbiAgICByZXR1cm4gYCR7bmFtZX0gLSBMbGFtYSB3YXJyaW9yIC0gJHtwbGF5ZXJOYW1lfSAtIEhQICR7aGl0UG9pbnRzLmN1cnJlbnR9LyR7aGl0UG9pbnRzLm1heH0gLSBhY3Rpb25zICR7YWN0aW9uUG9pbnRzLmN1cnJlbnR9LyR7YWN0aW9uUG9pbnRzLm1heH1gXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSEVBTFRIX0JPUkRFUl9DT0xPVVIsIEhFQUxUSF9FTVBUWV9DT0xPVVIsIEhFQUxUSF9GVUxMX0NPTE9VUiwgUExBWUVSX1RJTlRTIH0gZnJvbSAnLi4vY29sb3VycydcbmltcG9ydCB7IGFkZFBvaW50cywgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IHBsYXlUd2VlbiB9IGZyb20gJy4uLy4uL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmNvbnN0IEhFQUxUSF9CQVJfV0lEVEggPSA1MFxuY29uc3QgSEVBTFRIX0JBUl9IRUlHSFQgPSAxMlxuY29uc3QgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTID0gMlxuY29uc3QgSU1BR0VfT0ZGU0VUID0geyB4OiAwLCB5OiA0IH1cbmNvbnN0IEhFQUxUSF9CQVJfT0ZGU0VUID0geyB4OiAtMjUsIHk6IC00MCB9XG5cbmV4cG9ydCBjbGFzcyBVbml0RGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHVuaXQ6IFVuaXRcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoQmFyR3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljc1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgdGhpcy5pbWFnZSA9IHNjZW5lLmFkZFxuICAgICAgLmltYWdlKDAsIDAsICdsbGFtYScpXG4gICAgICAuc2V0U2NhbGUoMC44KVxuICAgICAgLnNldFRpbnQoUExBWUVSX1RJTlRTW3RoaXMudW5pdC5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MgPSBzY2VuZS5hZGQuZ3JhcGhpY3MoKVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZWFsdGhCYXJQb3NpdGlvbiA9IChwb2ludDogUG9pbnQpOiBQb2ludCA9PiBhZGRQb2ludHMocG9pbnQsIEhFQUxUSF9CQVJfT0ZGU0VUKVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAodW5pdDogVW5pdCk6IHZvaWQgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09IHRoaXMudW5pdC5pZClcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgY29uc3QgdW5pdFBvaW50ID0gaGV4Q2VudGVyKHRoaXMudW5pdC5sb2NhdGlvbilcbiAgICB0aGlzLmltYWdlLnNldFBvc2l0aW9uKHVuaXRQb2ludC54ICsgSU1BR0VfT0ZGU0VULngsIHVuaXRQb2ludC55ICsgSU1BR0VfT0ZGU0VULnkpXG4gICAgdGhpcy5zeW5jSGVhbHRoQmFyKHVuaXRQb2ludClcbiAgfVxuXG4gIHByaXZhdGUgc3luY0hlYWx0aEJhciA9ICh1bml0UG9pbnQ6IFBvaW50KSA9PiB7XG4gICAgY29uc3QgaGVhbHRoQmFyUG9zaXRpb24gPSB0aGlzLmdldEhlYWx0aEJhclBvc2l0aW9uKHVuaXRQb2ludClcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLnNldFBvc2l0aW9uKGhlYWx0aEJhclBvc2l0aW9uLngsIGhlYWx0aEJhclBvc2l0aW9uLnkpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5jbGVhcigpXG5cbiAgICAvLyBEcmF3IGJvcmRlclxuICAgIGNvbnN0IGlubmVyV2lkdGggPSBIRUFMVEhfQkFSX1dJRFRIIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIGNvbnN0IGlubmVySGVpZ2h0ID0gSEVBTFRIX0JBUl9IRUlHSFQgLSAyICogSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0JPUkRFUl9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdCgwLCAwLCBIRUFMVEhfQkFSX1dJRFRILCBIRUFMVEhfQkFSX0hFSUdIVClcblxuICAgIC8vIERyYXcgZW1wdHkgYmFja2dyb3VuZFxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9FTVBUWV9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdChIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQpXG5cbiAgICAvLyBGaWxsIGluIGJhclxuICAgIGNvbnN0IHsgY3VycmVudCwgbWF4IH0gPSB0aGlzLnVuaXQuaGl0UG9pbnRzXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0ZVTExfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoXG4gICAgICBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsXG4gICAgICBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsXG4gICAgICAoaW5uZXJXaWR0aCAqIGN1cnJlbnQpIC8gbWF4LFxuICAgICAgaW5uZXJIZWlnaHQsXG4gICAgKVxuICB9XG5cbiAgcHVibGljIHJ1bk1vdmVBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgTU9WRV9BTklNQVRJT05fRFVSQVRJT04gPSA1MDBcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiBNT1ZFX0FOSU1BVElPTl9EVVJBVElPTixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5oZWFsdGhCYXJHcmFwaGljcyxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSEVBTFRIX0JBUl9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IE1PVkVfQU5JTUFUSU9OX0RVUkFUSU9OLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtwbGF5VHdlZW4odHdlZW4xKSwgcGxheVR3ZWVuKHR3ZWVuMildKVxuICB9XG5cbiAgcHVibGljIHJ1bkRlYXRoQW5pbWF0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IFt0aGlzLmltYWdlLCB0aGlzLmhlYWx0aEJhckdyYXBoaWNzXSxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gIH1cblxuICBwdWJsaWMgcnVuU3BpdEFuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBmcm9tUG9pbnQgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCB0b1BvaW50ID0gaGV4Q2VudGVyKHRvKVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoZnJvbVBvaW50LngsIGZyb21Qb2ludC55LCAnc3BpdCcpXG4gICAgY29uc3QgdHdlZW4gPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogaW1hZ2UsXG4gICAgICB4OiB7XG4gICAgICAgIGZyb206IGZyb21Qb2ludC54LFxuICAgICAgICB0bzogdG9Qb2ludC54LFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgZnJvbTogZnJvbVBvaW50LnksXG4gICAgICAgIHRvOiB0b1BvaW50LnksXG4gICAgICB9LFxuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGVhc2U6ICdMaW5lYXInLFxuICAgIH0pXG4gICAgYXdhaXQgcGxheVR3ZWVuKHR3ZWVuKVxuICAgIGltYWdlLmRlc3Ryb3koKVxuICB9XG5cbiAgcHVibGljIHJ1bkRhbWFnZUFuaW1hdGlvbiA9IGFzeW5jIChsb2NhdGlvbjogSGV4LCBkYW1hZ2U6IG51bWJlcik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uUG9pbnQgPSBoZXhDZW50ZXIobG9jYXRpb24pXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChsb2NhdGlvblBvaW50LngsIGxvY2F0aW9uUG9pbnQueSwgZGFtYWdlLnRvU3RyaW5nKCksIHtcbiAgICAgICAgY29sb3I6ICcjZmY4ODg4JyxcbiAgICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogMixcbiAgICAgIH0pXG4gICAgICAuc2V0Rm9udFNpemUoMjYpXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIHk6IHtcbiAgICAgICAgZnJvbTogbG9jYXRpb25Qb2ludC55IC0gNTAsXG4gICAgICAgIHRvOiBsb2NhdGlvblBvaW50LnkgLSA3NSxcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgIGVhc2U6ICdMaW5lYXInLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRleHQsXG4gICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICBlYXNlOiAnQ3ViaWMuaW4nLFxuICAgIH0pXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3BsYXlUd2Vlbih0d2VlbjEpLCBwbGF5VHdlZW4odHdlZW4yKV0pXG4gICAgdGV4dC5kZXN0cm95KClcbiAgfVxuXG4gIHB1YmxpYyBydW5BdHRhY2tBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4KTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBjb25zdCB0d2VlbjIgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGhpcy5oZWFsdGhCYXJHcmFwaGljcyxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSEVBTFRIX0JBUl9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgIH0pXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3BsYXlUd2Vlbih0d2VlbjEpLCBwbGF5VHdlZW4odHdlZW4yKV0pXG4gIH1cblxuICBwdWJsaWMgZGVzdHJveSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5raWxsVHdlZW5zT2YoW3RoaXMuaGVhbHRoQmFyR3JhcGhpY3MsIHRoaXMuaW1hZ2VdKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZGVzdHJveSgpXG4gICAgdGhpcy5pbWFnZS5kZXN0cm95KClcbiAgfVxufVxuXG50eXBlIFR3ZWVuWFkgPSB7IHg6IHsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH07IHk6IHsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH0gfVxuXG5jb25zdCBjYWxjdWxhdGVUd2VlblhZID0gKGZyb206IFBvaW50LCB0bzogUG9pbnQsIG9mZnNldDogUG9pbnQpOiBUd2VlblhZID0+ICh7XG4gIHg6IHtcbiAgICBmcm9tOiBmcm9tLnggKyBvZmZzZXQueCxcbiAgICB0bzogdG8ueCArIG9mZnNldC54LFxuICB9LFxuICB5OiB7XG4gICAgZnJvbTogZnJvbS55ICsgb2Zmc2V0LnksXG4gICAgdG86IHRvLnkgKyBvZmZzZXQueSxcbiAgfSxcbn0pXG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi8uLi91aS9tZW51LWJ1dHRvbidcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IG9wZW5Xb3JsZEV2ZW50RGIgfSBmcm9tICcuLi8uLi9kYi93b3JsZC1ldmVudC1kYidcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUgfSBmcm9tICcuLi8uLi93b3JsZC9pbml0aWFsLXdvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgc2V0VXJsSW5mbyB9IGZyb20gJy4uL2Jvb3QvYm9vdC1zY2VuZSdcbmltcG9ydCB7IExPQkJZX1NDRU5FX0tFWSwgTG9iYnlTY2VuZURhdGEgfSBmcm9tICcuLi9sb2JieS9sb2JieS1zY2VuZSdcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcblxuZXhwb3J0IGNvbnN0IE1BSU5fTUVOVV9TQ0VORV9LRVkgPSAnTWFpbk1lbnUnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBNQUlOX01FTlVfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmFkZC50ZXh0KDEwMCwgNTAsICdMbGFtYSBXYXJzJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpXG4gICAgdGhpcy5zb3VuZC5hZGQoQXVkaW9LZXlzLkNMSUNLKVxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnSG9zdCBHYW1lJywgKCkgPT4ge1xuICAgICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMuaGFuZGxlSG9zdEdhbWUoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUhvc3RHYW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZDogR2FtZUlkID0gdXVpZCgpXG4gICAgY29uc3QgcGxheWVySWQgPSBIT1NUX1BMQVlFUl9JRFxuICAgIGNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIod29ybGRFdmVudERiLCBnYW1lSWQsIElOSVRJQUxfV09STERfU1RBVEUsIDApXG4gICAgc2VydmVyLmhhbmRsZUFjdGlvbihwbGF5ZXJJZCwgeyB0eXBlOiAnaW5pdGlhbGlzZScsIHN0YXRlOiBJTklUSUFMX1dPUkxEX1NUQVRFIH0pXG4gICAgc2V0VXJsSW5mbyh7IGdhbWVJZCB9KVxuICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIsIHdvcmxkU3RhdGU6IHNlcnZlci53b3JsZFN0YXRlLCBwbGF5ZXJJZDogcGxheWVySWQgfVxuICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBwb2ludCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvaW50ID0+ICh7IHgsIHkgfSlcblxuZXhwb3J0IGNvbnN0IG11bHRpcGx5UG9pbnQgPSAocG9pbnQ6IFBvaW50LCBuOiBudW1iZXIpOiBQb2ludCA9PiAoeyB4OiBwb2ludC54ICogbiwgeTogcG9pbnQueSAqIG4gfSlcblxuZXhwb3J0IGNvbnN0IGFkZFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHsgeDogcG9pbnQxLnggKyBwb2ludDIueCwgeTogcG9pbnQxLnkgKyBwb2ludDIueSB9KVxuXG5leHBvcnQgY29uc3Qgc3VidHJhY3RQb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IFBvaW50ID0+ICh7XG4gIHg6IHBvaW50MS54IC0gcG9pbnQyLngsXG4gIHk6IHBvaW50MS55IC0gcG9pbnQyLnksXG59KVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEF0dGFja1R5cGUsIEF0dGFja1dvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFBsYXllckRlZmVhdGVkV29ybGRFdmVudCwgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IHJhbmRvbUludEluY2x1c2l2ZSB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5cbmV4cG9ydCBjb25zdCBjYW5BdHRhY2tPY2N1ciA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLCBmcm9tOiBIZXgsIHRvOiBIZXgpOiBib29sZWFuID0+IHtcbiAgc3dpdGNoIChhdHRhY2tUeXBlKSB7XG4gICAgY2FzZSAnbWVsZWUnOlxuICAgICAgcmV0dXJuIGZyb20uaXNBZGphY2VudFRvKHRvKVxuICAgIGNhc2UgJ3NwaXQnOlxuICAgICAgcmV0dXJuIGZyb20uZGlzdGFuY2VUbyh0bykgPD0gMlxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQXR0YWNrID0gKGFjdGlvbjogQXR0YWNrV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSB0aGlzLnZhbGlkYXRlQXR0YWNrKGFjdGlvbilcbiAgICBjb25zdCB7IGF0dGFja1R5cGUgfSA9IGFjdGlvblxuICAgIGNvbnN0IHJhd0F0dGFja2VyRGFtYWdlID0gYXR0YWNrVHlwZSA9PT0gJ21lbGVlJyA/IHJhbmRvbUludEluY2x1c2l2ZSg4LCAxMikgOiAwXG4gICAgY29uc3QgcmF3RGVmZW5kZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKC0xNywgMjMpIDogcmFuZG9tSW50SW5jbHVzaXZlKDQsIDYpXG4gICAgY29uc3QgYXR0YWNrZXJEYW1hZ2UgPSBNYXRoLm1pbihhdHRhY2tlci5oaXRQb2ludHMuY3VycmVudCwgcmF3QXR0YWNrZXJEYW1hZ2UpXG4gICAgY29uc3QgZGVmZW5kZXJEYW1hZ2UgPSBNYXRoLm1pbihkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCwgcmF3RGVmZW5kZXJEYW1hZ2UpXG4gICAgY29uc3QgY29tYmF0V29ybGRFdmVudCA9IHRoaXMubWFrZUNvbWJhdFdvcmxkRXZlbnQoYXR0YWNrVHlwZSwgYXR0YWNrZXIsIGF0dGFja2VyRGFtYWdlLCBkZWZlbmRlciwgZGVmZW5kZXJEYW1hZ2UpXG5cbiAgICBsZXQgbmV3V29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZS5hcHBseUV2ZW50KGNvbWJhdFdvcmxkRXZlbnQpXG4gICAgY29uc3QgZXZlbnRzOiBXb3JsZEV2ZW50W10gPSBbY29tYmF0V29ybGRFdmVudF1cbiAgICBsZXQgbmV4dFdvcmxkRXZlbnRJZCA9IHRoaXMubmV4dFdvcmxkRXZlbnRJZCArIDFcbiAgICBpZiAobmV3V29ybGRTdGF0ZS5pc1BsYXllckRlZmVhdGVkKGRlZmVuZGVyLnBsYXllcklkKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLnBsYXllckRlZmVhdGVkRXZlbnQobmV4dFdvcmxkRXZlbnRJZCsrLCBkZWZlbmRlci5wbGF5ZXJJZClcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KVxuICAgICAgbmV3V29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgaWYgKG5ld1dvcmxkU3RhdGUuaXNQbGF5ZXJEZWZlYXRlZChhdHRhY2tlci5wbGF5ZXJJZCkpIHtcbiAgICAgIGNvbnN0IGV2ZW50ID0gdGhpcy5wbGF5ZXJEZWZlYXRlZEV2ZW50KG5leHRXb3JsZEV2ZW50SWQrKywgYXR0YWNrZXIucGxheWVySWQpXG4gICAgICBldmVudHMucHVzaChldmVudClcbiAgICAgIG5ld1dvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgfVxuICAgIGNvbnN0IHVuZGVmZWF0ZWRQbGF5ZXJzID0gbmV3V29ybGRTdGF0ZS5wbGF5ZXJzLmZpbHRlcigocGxheWVyKSA9PiAhcGxheWVyLmRlZmVhdGVkKVxuICAgIGlmIChSLmlzRW1wdHkodW5kZWZlYXRlZFBsYXllcnMpKSB7XG4gICAgICBldmVudHMucHVzaCh7IGlkOiBuZXh0V29ybGRFdmVudElkKyssIHR5cGU6ICdnYW1lT3ZlcicgfSlcbiAgICB9IGVsc2UgaWYgKHVuZGVmZWF0ZWRQbGF5ZXJzLmxlbmd0aCA9PSAxKSB7XG4gICAgICBjb25zdCB2aWN0b3IgPSB1bmRlZmVhdGVkUGxheWVyc1swXS5pZFxuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInLCB2aWN0b3IgfSlcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5ZXJEZWZlYXRlZEV2ZW50ID0gKGlkOiBXb3JsZEV2ZW50SWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllckRlZmVhdGVkV29ybGRFdmVudCA9PiAoe1xuICAgIGlkLFxuICAgIHR5cGU6ICdwbGF5ZXJEZWZlYXRlZCcsXG4gICAgcGxheWVySWQ6IHBsYXllcklkLFxuICB9KVxuXG4gIHByaXZhdGUgdmFsaWRhdGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IHsgYXR0YWNrZXI6IFVuaXQ7IGRlZmVuZGVyOiBVbml0IH0gPT4ge1xuICAgIGNvbnN0IGF0dGFja2VySWQgPSBhY3Rpb24uYXR0YWNrZXIudW5pdElkXG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VySWQpXG4gICAgaWYgKCFhdHRhY2tlcikgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VySWR9YFxuICAgIGlmIChhdHRhY2tlci5wbGF5ZXJJZCAhPSB0aGlzLnBsYXllcklkKSB0aHJvdyBgQ2Fubm90IGNvbnRyb2wgYW5vdGhlciBwbGF5ZXIncyB1bml0OiAke2F0dGFja2VyLmlkfWBcbiAgICBpZiAoYXR0YWNrZXIuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIGF0dGFja2BcbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uYXR0YWNrZXIubG9jYXRpb24pKSB0aHJvdyBgQXR0YWNrZXIgbm90IGluIGV4cGVjdGVkIGxvY2F0aW9uYFxuXG4gICAgY29uc3QgZGVmZW5kZXJJZCA9IGFjdGlvbi5kZWZlbmRlci51bml0SWRcbiAgICBjb25zdCBkZWZlbmRlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXJJZClcbiAgICBpZiAoIWRlZmVuZGVyKSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7ZGVmZW5kZXJJZH1gXG4gICAgaWYgKGRlZmVuZGVyLnBsYXllcklkID09IHRoaXMucGxheWVySWQpIHRocm93IGBDYW5ub3QgYXR0YWNrIG93biB1bml0YFxuICAgIGlmICghZGVmZW5kZXIubG9jYXRpb24uZXF1YWxzKGFjdGlvbi5kZWZlbmRlci5sb2NhdGlvbikpIHRocm93IGBEZWZlbmRlciBub3QgaW4gZXhwZWN0ZWQgbG9jYXRpb25gXG5cbiAgICBpZiAoIWNhbkF0dGFja09jY3VyKGFjdGlvbi5hdHRhY2tUeXBlLCBhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBhdHRhY2sgb2YgdHlwZSAke2FjdGlvbi5hdHRhY2tUeXBlfSBiZXR3ZWVuIGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259IHRvbyBmYXIgYXBhcnRgXG4gICAgcmV0dXJuIHsgYXR0YWNrZXIsIGRlZmVuZGVyIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFrZUNvbWJhdFdvcmxkRXZlbnQgPSAoXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgICBhdHRhY2tlcjogVW5pdCxcbiAgICBhdHRhY2tlckRhbWFnZTogbnVtYmVyLFxuICAgIGRlZmVuZGVyOiBVbml0LFxuICAgIGRlZmVuZGVyRGFtYWdlOiBudW1iZXIsXG4gICk6IENvbWJhdFdvcmxkRXZlbnQgPT4gKHtcbiAgICBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLFxuICAgIHR5cGU6ICdjb21iYXQnLFxuICAgIGF0dGFja1R5cGUsXG4gICAgYXR0YWNrZXI6IHtcbiAgICAgIHBsYXllcklkOiBhdHRhY2tlci5wbGF5ZXJJZCxcbiAgICAgIHVuaXRJZDogYXR0YWNrZXIuaWQsXG4gICAgICBsb2NhdGlvbjogYXR0YWNrZXIubG9jYXRpb24sXG4gICAgICBkYW1hZ2U6IGF0dGFja2VyRGFtYWdlLFxuICAgICAga2lsbGVkOiBhdHRhY2tlci5oaXRQb2ludHMuY3VycmVudCA9PSBhdHRhY2tlckRhbWFnZSxcbiAgICB9LFxuICAgIGRlZmVuZGVyOiB7XG4gICAgICBwbGF5ZXJJZDogZGVmZW5kZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGRlZmVuZGVyLmlkLFxuICAgICAgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBkZWZlbmRlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT0gZGVmZW5kZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBhY3Rpb25Qb2ludHNDb25zdW1lZDogMSxcbiAgfSlcbn1cbiIsImltcG9ydCB7IENsaWVudFRvU2VydmVyTWVzc2FnZSwgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5cbmV4cG9ydCB0eXBlIFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyID0gKG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzZXJ2ZXJDb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2VMaXN0ZW5lcltdID0gW11cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFNlcnZlclRvQ2xpZW50TWVzc2FnZUxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogU2VydmVyVG9DbGllbnRNZXNzYWdlTGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSBsaXN0ZW5lcihtZXNzYWdlKVxuICB9XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyQ29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbikge1xuICAgIHRoaXMuc2VydmVyQ29ubmVjdGlvbiA9IHNlcnZlckNvbm5lY3Rpb25cbiAgICBzZXJ2ZXJDb25uZWN0aW9uLm9uKCdkYXRhJywgKG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKG1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY29ubmVjdCA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8Q2xpZW50PiA9PiB7XG4gICAgY29uc3Qgc2VydmVyQ29ubmVjdGlvbiA9IGF3YWl0IENsaWVudC5kb0Nvbm5lY3QoZ2FtZUlkKVxuICAgIHJldHVybiBuZXcgQ2xpZW50KHNlcnZlckNvbm5lY3Rpb24pXG4gIH1cblxuICBwdWJsaWMgc2VuZCA9IChtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UpOiB2b2lkID0+IHRoaXMuc2VydmVyQ29ubmVjdGlvbi5zZW5kKG1lc3NhZ2UpXG5cbiAgcHJpdmF0ZSBzdGF0aWMgZG9Db25uZWN0ID0gKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxQZWVyLkRhdGFDb25uZWN0aW9uPiA9PlxuICAgIG5ldyBQcm9taXNlPFBlZXIuRGF0YUNvbm5lY3Rpb24+KChyZXNvbHZlKSA9PiB7XG4gICAgICBjb25zdCBwZWVyID0gbmV3UGVlcigpXG4gICAgICBwZWVyLm9uKCdlcnJvcicsIChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpXG4gICAgICBwZWVyLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gcGVlci5jb25uZWN0KGdhbWVJZCwgeyByZWxpYWJsZTogdHJ1ZSB9KVxuICAgICAgICBjb25uZWN0aW9uLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoY29ubmVjdGlvbilcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcblxuICBwdWJsaWMgc2VuZEFjdGlvbiA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiB2b2lkID0+XG4gICAgdGhpcy5zZW5kKHtcbiAgICAgIHR5cGU6ICd3b3JsZEFjdGlvbicsXG4gICAgICBhY3Rpb246IHNlcmlhbGlzZVRvSnNvbihhY3Rpb24pLFxuICAgICAgcGxheWVySWQ6IHBsYXllcklkLFxuICAgIH0pXG59XG5cbmV4cG9ydCBjb25zdCBuZXdQZWVyID0gKGlkPzogc3RyaW5nLCBvcHRpb25zPzogUGVlci5QZWVySlNPcHRpb24pOiBQZWVyID0+IG5ldyAod2luZG93IGFzIGFueSkuUGVlcihpZCwgb3B0aW9ucykgYXMgUGVlclxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcbmltcG9ydCB7IFdvcmxkRXZlbnRMaXN0ZW5lciwgV29ybGRTdGF0ZU93bmVyIH0gZnJvbSAnLi93b3JsZC1zdGF0ZS1vd25lcidcbmltcG9ydCB7IFBsYXllckFkZGVkV29ybGRFdmVudCwgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlLCBSZWpvaW5NZXNzYWdlLCBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgeyBuZXdQZWVyIH0gZnJvbSAnLi9jbGllbnQnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQWRkUGxheWVyV29ybGRBY3Rpb24sIFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkRXZlbnREYiB9IGZyb20gJy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlT3duZXI6IFdvcmxkU3RhdGVPd25lclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbm5lY3Rpb25zOiBQZWVyLkRhdGFDb25uZWN0aW9uW10gPSBbXVxuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiXG4gIHByaXZhdGUgcmVhZG9ubHkgZ2FtZUlkOiBHYW1lSWRcblxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogV29ybGRFdmVudExpc3RlbmVyW10gPSBbXVxuXG4gIHB1YmxpYyBnZXQgd29ybGRTdGF0ZSgpOiBXb3JsZFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy53b3JsZFN0YXRlT3duZXIud29ybGRTdGF0ZVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyByZXN0b3JlR2FtZSA9IGFzeW5jICh3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYiwgZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPFNlcnZlcj4gPT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHdvcmxkRXZlbnREYi5nZXRFdmVudHNGb3JHYW1lKGdhbWVJZClcbiAgICBsZXQgd29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIFIuc29ydEJ5KChldmVudCkgPT4gZXZlbnQuaWQsIGV2ZW50cykpIHtcbiAgICAgIHdvcmxkU3RhdGUgPSBhcHBseUV2ZW50KHdvcmxkU3RhdGUsIGV2ZW50KVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgd29ybGRTdGF0ZSwgZXZlbnRzLmxlbmd0aCArIDEpXG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIGxpc3RlbmVyKGV2ZW50KVxuICB9XG5cbiAgY29uc3RydWN0b3Iod29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIsIGdhbWVJZDogR2FtZUlkLCB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkRXZlbnREYiA9IHdvcmxkRXZlbnREYlxuICAgIHRoaXMuZ2FtZUlkID0gZ2FtZUlkXG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIgPSBuZXcgV29ybGRTdGF0ZU93bmVyKHdvcmxkU3RhdGUsIG5leHRXb3JsZEV2ZW50SWQpXG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIuYWRkTGlzdGVuZXIoKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgICAgIHRoaXMud29ybGRFdmVudERiLnN0b3JlKHRoaXMuZ2FtZUlkLCBldmVudClcbiAgICAgIGZvciAoY29uc3QgY2xpZW50Q29ubmVjdGlvbiBvZiB0aGlzLmNvbm5lY3Rpb25zKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZSA9IHsgdHlwZTogJ3dvcmxkRXZlbnQnLCBldmVudDogc2VyaWFsaXNlVG9Kc29uKGV2ZW50KSB9XG4gICAgICAgIGNsaWVudENvbm5lY3Rpb24uc2VuZChtZXNzYWdlKVxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc3QgcGVlciA9IG5ld1BlZXIodGhpcy5nYW1lSWQpXG4gICAgcGVlci5vbignZXJyb3InLCAoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIHBlZXIub24oJ2Nvbm5lY3Rpb24nLCAoY29ubmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9ucy5wdXNoKGNvbm5lY3Rpb24pXG4gICAgICBjb25uZWN0aW9uLm9uKCdkYXRhJywgKG1lc3NhZ2U6IENsaWVudFRvU2VydmVyTWVzc2FnZSkgPT4gdGhpcy5oYW5kbGVDbGllbnRUb1NlcnZlck1lc3NhZ2UobWVzc2FnZSwgY29ubmVjdGlvbikpXG4gICAgfSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50Sm9pbiA9IChjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgLy8gVE9ETzogdGVsbCB0aGUgY2xpZW50IFwiYmFkIGx1Y2tcIlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhZGRQbGF5ZXJBY3Rpb246IEFkZFBsYXllcldvcmxkQWN0aW9uID0geyB0eXBlOiAnYWRkUGxheWVyJyB9XG4gICAgICBjb25zdCBwbGF5ZXJBZGRlZEV2ZW50ID0gPFBsYXllckFkZGVkV29ybGRFdmVudD50aGlzLmhhbmRsZUFjdGlvbigxLCBhZGRQbGF5ZXJBY3Rpb24pWzBdXG4gICAgICBjb25uZWN0aW9uLnNlbmQoe1xuICAgICAgICB0eXBlOiAnam9pbmVkJyxcbiAgICAgICAgcGxheWVySWQ6IHBsYXllckFkZGVkRXZlbnQucGxheWVySWQsXG4gICAgICAgIHdvcmxkU3RhdGU6IHRoaXMud29ybGRTdGF0ZS50b0pzb24oKSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRSZWpvaW4gPSAobWVzc2FnZTogUmVqb2luTWVzc2FnZSwgY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGVcbiAgICBpZiAod29ybGRTdGF0ZS5pc1ZhbGlkUGxheWVySWQobWVzc2FnZS5wbGF5ZXJJZCkpXG4gICAgICBjb25uZWN0aW9uLnNlbmQoe1xuICAgICAgICB0eXBlOiAncmVqb2luZWQnLFxuICAgICAgICB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLnRvSnNvbigpLFxuICAgICAgfSlcbiAgICBlbHNlIHtcbiAgICAgIC8vIFRPRE86IHRlbGwgdGhlIGNsaWVudCBub1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlID0gKG1lc3NhZ2U6IENsaWVudFRvU2VydmVyTWVzc2FnZSwgY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbik6IHZvaWQgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2pvaW4nOlxuICAgICAgICB0aGlzLmhhbmRsZUNsaWVudEpvaW4oY29ubmVjdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3Jlam9pbic6XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpZW50UmVqb2luKG1lc3NhZ2UsIGNvbm5lY3Rpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICd3b3JsZEFjdGlvbic6XG4gICAgICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmhhbmRsZUFjdGlvbihtZXNzYWdlLnBsYXllcklkLCBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuYWN0aW9uKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCBhY3Rpb24pXG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQXR0YWNrV29ybGRBY3Rpb24sXG4gIENoYW5nZVBsYXllck5hbWVXb3JsZEFjdGlvbixcbiAgRW5kVHVybldvcmxkQWN0aW9uLFxuICBJbml0aWFsaXNlV29ybGRBY3Rpb24sXG4gIE1vdmVVbml0V29ybGRBY3Rpb24sXG4gIFdvcmxkQWN0aW9uLFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHtcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgUGxheWVyQWRkZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQsXG4gIFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXIsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRHZW5lcmF0b3IgfSBmcm9tICcuL3dvcmxkLWdlbmVyYXRvcidcbmltcG9ydCB7IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlciB9IGZyb20gJy4vYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcblxuZXhwb3J0IGNsYXNzIFdvcmxkQWN0aW9uSGFuZGxlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmV4dFdvcmxkRXZlbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBjYWxjdWxhdGVXb3JsZEV2ZW50cyA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdpbml0aWFsaXNlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlSW5pdGlhbGlzZShhY3Rpb24pXG4gICAgICBjYXNlICdhZGRQbGF5ZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBZGRQbGF5ZXIoKVxuICAgICAgY2FzZSAnY2hhbmdlUGxheWVyTmFtZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNoYW5nZVBsYXllck5hbWUoYWN0aW9uKVxuICAgICAgY2FzZSAnc3RhcnRHYW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU3RhcnRHYW1lKClcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUF0dGFjayhhY3Rpb24pXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vdmVVbml0KGFjdGlvbilcbiAgICAgIGNhc2UgJ2VuZFR1cm4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbmRUdXJuKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUluaXRpYWxpc2UgPSAoYWN0aW9uOiBJbml0aWFsaXNlV29ybGRBY3Rpb24pOiBbSW5pdGlhbGlzZVdvcmxkRXZlbnRdID0+IHtcbiAgICBpZiAodGhpcy5uZXh0V29ybGRFdmVudElkID4gMCkge1xuICAgICAgdGhyb3cgYENhbiBvbmx5IGluaXRpYWxpc2UgYXMgdGhlIGZpcnN0IGV2ZW50YFxuICAgIH1cbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ2luaXRpYWxpc2UnLCBzdGF0ZTogYWN0aW9uLnN0YXRlIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFkZFBsYXllciA9ICgpOiBbUGxheWVyQWRkZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdQbGF5ZXJJZHMgPSB0aGlzLndvcmxkU3RhdGUuZ2V0UGxheWVySWRzKClcbiAgICBjb25zdCBwbGF5ZXJJZCA9IFIuYXBwbHkoTWF0aC5tYXgsIGV4aXN0aW5nUGxheWVySWRzKSArIDFcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckFkZGVkJywgcGxheWVySWQgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2hhbmdlUGxheWVyTmFtZSA9IChhY3Rpb246IENoYW5nZVBsYXllck5hbWVXb3JsZEFjdGlvbik6IFtQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnRdID0+IHtcbiAgICB0aGlzLmdldFBsYXllcigpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdwbGF5ZXJDaGFuZ2VkTmFtZScsIHBsYXllcklkOiB0aGlzLnBsYXllcklkLCBuYW1lOiBhY3Rpb24ubmFtZSB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKTogW0dhbWVTdGFydGVkV29ybGRFdmVudF0gPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIHRocm93IGBDYW5ub3Qgc3RhcnQgYW4gYWxyZWFkeS1zdGFydGVkIGdhbWVgXG4gICAgfVxuICAgIGlmICh0aGlzLnBsYXllcklkICE9PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgdGhyb3cgYENhbm5vdCBzdGFydCB0aGUgZ2FtZSB1bmxlc3MgdGhlIGhvc3RgXG4gICAgfVxuICAgIGNvbnN0IHVuaXRzID0gbmV3IFdvcmxkR2VuZXJhdG9yKHRoaXMud29ybGRTdGF0ZSkuZ2VuZXJhdGVVbml0cygpXG4gICAgcmV0dXJuIFt7IGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsIHR5cGU6ICdnYW1lU3RhcnRlZCcsIHVuaXRzIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgbmV3IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHRoaXMucGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZCkuaGFuZGxlQXR0YWNrKGFjdGlvbilcblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbik6IFtVbml0TW92ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRvIH0gPSBhY3Rpb25cbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICBjb25zdCBmcm9tID0gdW5pdC5sb2NhdGlvblxuICAgIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKSkgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gbW92ZWBcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLFxuICAgICAgICB0eXBlOiAndW5pdE1vdmVkJyxcbiAgICAgICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgICAgIGFjdGlvblBvaW50c0NvbnN1bWVkOiAxLFxuICAgICAgICB1bml0SWQsXG4gICAgICAgIGZyb20sXG4gICAgICAgIHRvLFxuICAgICAgfSxcbiAgICBdXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVuZFR1cm4gPSAoYWN0aW9uOiBFbmRUdXJuV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGlmIChhY3Rpb24udHVybiAhPT0gdGhpcy53b3JsZFN0YXRlLnR1cm4pIHtcbiAgICAgIHRocm93IGBDYW5ub3QgZW5kIGEgdHVybiB0aGF0J3Mgbm90IHRoZSBjdXJyZW50IHR1cm5gXG4gICAgfVxuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZ2V0UGxheWVyKClcbiAgICBpZiAocGxheWVyLmVuZGVkVHVybikge1xuICAgICAgdGhyb3cgYFBsYXllciBoYXMgYWxyZWFkeSBlbmRlZCB0aGVpciB0dXJuYFxuICAgIH1cbiAgICBjb25zdCBwbGF5ZXJFbmRlZFR1cm5BY3Rpb246IFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQgPSB7XG4gICAgICBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLFxuICAgICAgdHlwZTogJ3BsYXllckVuZGVkVHVybicsXG4gICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICB9XG4gICAgY29uc3QgbmV3V29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBwbGF5ZXJFbmRlZFR1cm5BY3Rpb24pXG4gICAgaWYgKG5ld1dvcmxkU3RhdGUuY2FuQW55UGxheWVyQWN0KCkpIHtcbiAgICAgIHJldHVybiBbcGxheWVyRW5kZWRUdXJuQWN0aW9uXVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gW3BsYXllckVuZGVkVHVybkFjdGlvbiwgeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkICsgMSwgdHlwZTogJ25ld1R1cm4nIH1dXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgTm8gcGxheWVyIHdpdGggSUQgJHt0aGlzLnBsYXllcklkfWBcbiAgICByZXR1cm4gcGxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IHJhbmRvbUVsZW1lbnQgfSBmcm9tICcuLi91dGlsL3JhbmRvbS11dGlsJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBIaXRQb2ludHMgfSBmcm9tICcuLi93b3JsZC9oaXQtcG9pbnRzJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5jb25zdCBMTEFNQV9OQU1FUyA9IFsnV2FsdGVyJywgJ0RvbGx5JywgJ0NoZXdwYWNhJywgJ0JhcmFjayBPLiBMbGFtYScsICdDb21vIFNlJ11cblxuZXhwb3J0IGNsYXNzIFdvcmxkR2VuZXJhdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVtYWluaW5nSGV4ZXM6IEhleFtdXG4gIHByaXZhdGUgbmV4dFVuaXRJZDogVW5pdElkID0gMVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IEFycmF5LmZyb20od29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdGVVbml0ID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFVuaXQgPT4ge1xuICAgIGNvbnN0IGlkID0gdGhpcy5uZXh0VW5pdElkKytcbiAgICBjb25zdCBsb2NhdGlvbiA9IHJhbmRvbUVsZW1lbnQodGhpcy5yZW1haW5pbmdIZXhlcylcbiAgICB0aGlzLnJlbWFpbmluZ0hleGVzID0gUi53aXRob3V0KFtsb2NhdGlvbl0sIHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgY29uc3QgbmFtZSA9IHJhbmRvbUVsZW1lbnQoTExBTUFfTkFNRVMpXG4gICAgcmV0dXJuIG5ldyBVbml0KHtcbiAgICAgIGlkLFxuICAgICAgcGxheWVySWQsXG4gICAgICBuYW1lLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBhY3Rpb25Qb2ludHM6IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiAyLCBtYXg6IDIgfSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2VuZXJhdGVVbml0cyA9ICgpOiBVbml0W10gPT5cbiAgICBSLmNoYWluKChwbGF5ZXIpID0+IFt0aGlzLmdlbmVyYXRlVW5pdChwbGF5ZXIuaWQpLCB0aGlzLmdlbmVyYXRlVW5pdChwbGF5ZXIuaWQpXSwgdGhpcy53b3JsZFN0YXRlLnBsYXllcnMpXG59XG4iLCJpbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi93b3JsZC1hY3Rpb24taGFuZGxlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBXb3JsZEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIFdvcmxkU3RhdGVPd25lciB7XG4gIHB1YmxpYyB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkXG4gIHByaXZhdGUgcmVhZG9ubHkgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCA9IG5leHRXb3JsZEV2ZW50SWRcbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykgbGlzdGVuZXIoZXZlbnQpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3Qgd29ybGRBY3Rpb25IYW5kbGVyID0gbmV3IFdvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHBsYXllcklkLCB0aGlzLm5leHRXb3JsZEV2ZW50SWQpXG4gICAgY29uc3QgZXZlbnRzID0gd29ybGRBY3Rpb25IYW5kbGVyLmNhbGN1bGF0ZVdvcmxkRXZlbnRzKGFjdGlvbilcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudCh0aGlzLndvcmxkU3RhdGUsIGV2ZW50KVxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gICAgfVxuICAgIHRoaXMubmV4dFdvcmxkRXZlbnRJZCArPSBldmVudHMubGVuZ3RoXG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuXG5jb25zdCBwYWRkaW5nID0gMTBcbmNvbnN0IG1pbmltdW1XaWR0aCA9IDIwMFxuY29uc3QgbWluaW11bUhlaWdodCA9IDUwXG5cbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XG4gIHByaXZhdGUgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljaz86ICgpID0+IHZvaWQpIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSlcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcylcbiAgICB0aGlzLnNldE9yaWdpbigwLCAwKVxuXG4gICAgdGhpcy5sYWJlbCA9IHNjZW5lLmFkZFxuICAgICAgLnRleHQoeCArIHBhZGRpbmcsIHkgKyBwYWRkaW5nLCB0ZXh0KVxuICAgICAgLnNldEZvbnRTaXplKDE4KVxuICAgICAgLnNldEFsaWduKCdjZW50ZXInKVxuXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyBwYWRkaW5nXG4gICAgY29uc3QgbGFiZWxIZWlnaHQgPSB0aGlzLmxhYmVsLmhlaWdodCArIHBhZGRpbmdcblxuICAgIHRoaXMud2lkdGggPSBsYWJlbFdpZHRoID49IG1pbmltdW1XaWR0aCA/IGxhYmVsV2lkdGggOiBtaW5pbXVtV2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGxhYmVsSGVpZ2h0ID49IG1pbmltdW1IZWlnaHQgPyBsYWJlbEhlaWdodCA6IG1pbmltdW1IZWlnaHRcblxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIHRoaXMub24oJ3BvaW50ZXJ1cCcsIG9uQ2xpY2spXG4gICAgfVxuXG4gICAgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKVxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZGRkZGRicpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyNCQkJCQkInKVxuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4NDQ0NDQ0KVxuICB9XG5cbiAgcHVibGljIHNldFkodmFsdWU/OiBudW1iZXIpOiB0aGlzIHtcbiAgICB0aGlzLmxhYmVsLnNldFkodmFsdWUpXG4gICAgcmV0dXJuIHN1cGVyLnNldFkodmFsdWUpXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIaXRQb2ludHMgfSBmcm9tICcuLi93b3JsZC9oaXQtcG9pbnRzJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcblxuZXhwb3J0IGNvbnN0IHNlcmlhbGlzZVRvSnNvbiA9ICh2YWx1ZTogYW55KTogYW55ID0+IHtcbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgIHJldHVybiB2YWx1ZVxuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChzZXJpYWxpc2VUb0pzb24pXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgSGV4KSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0hleCcgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFdvcmxkTWFwKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1dvcmxkTWFwJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV29ybGRTdGF0ZSkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdXb3JsZFN0YXRlJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgVW5pdCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdVbml0JyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgSGl0UG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0hpdFBvaW50cycgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFjdGlvblBvaW50cykge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdBY3Rpb25Qb2ludHMnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBQbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnUGxheWVyJyB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdPYmplY3Q6IGFueSA9IHt9XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IHNlcmlhbGlzZVRvSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZXNlcmlhbGlzZUZyb21Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGRlc2VyaWFsaXNlRnJvbUpzb24pXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdIZXgnKSB7XG4gICAgICAgIHJldHVybiBIZXguZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdXb3JsZE1hcCcpIHtcbiAgICAgICAgcmV0dXJuIFdvcmxkTWFwLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PSAnV29ybGRTdGF0ZScpIHtcbiAgICAgICAgcmV0dXJuIFdvcmxkU3RhdGUuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdVbml0Jykge1xuICAgICAgICByZXR1cm4gVW5pdC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT0gJ0FjdGlvblBvaW50cycpIHtcbiAgICAgICAgcmV0dXJuIEFjdGlvblBvaW50cy5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT0gJ0hpdFBvaW50cycpIHtcbiAgICAgICAgcmV0dXJuIEhpdFBvaW50cy5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT0gJ1BsYXllcicpIHtcbiAgICAgICAgcmV0dXJuIFBsYXllci5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzZXJpYWxpc2VGcm9tSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVHdlZW4gPSBQaGFzZXIuVHdlZW5zLlR3ZWVuXG5cbmV4cG9ydCBjb25zdCBwbGF5VHdlZW4gPSAodHdlZW46IFR3ZWVuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdHdlZW4uc2V0Q2FsbGJhY2soJ29uQ29tcGxldGUnLCByZXNvbHZlLCBbXSkucGxheSgpKVxuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEluY2x1c2l2ZSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT5cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50RXhjbHVzaXZlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUVsZW1lbnQgPSA8VD4oYXJyYXk6IFRbXSk6IFQgPT4gYXJyYXlbcmFuZG9tSW50RXhjbHVzaXZlKDAsIGFycmF5Lmxlbmd0aCldXG4iLCJleHBvcnQgdHlwZSBPcHRpb248VD4gPSBUIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVzdDxUPiB7XG4gIHR5cGU6ICdqdXN0J1xuICBpdGVtOiBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aGluZyB7XG4gIHR5cGU6ICdub3RoaW5nJ1xufVxuXG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IEp1c3Q8VD4gfCBOb3RoaW5nXG5cbmV4cG9ydCBjb25zdCB0b01heWJlID0gPFQ+KG9wdGlvbjogT3B0aW9uPFQ+KTogTWF5YmU8VD4gPT4gKG9wdGlvbiA9PSB1bmRlZmluZWQgPyBub3RoaW5nIDoganVzdChvcHRpb24pKVxuXG5leHBvcnQgY29uc3QgdG9PcHRpb24gPSA8VD4obWF5YmU6IE1heWJlPFQ+KTogT3B0aW9uPFQ+ID0+IHtcbiAgc3dpdGNoIChtYXliZS50eXBlKSB7XG4gICAgY2FzZSAnanVzdCc6XG4gICAgICByZXR1cm4gbWF5YmUuaXRlbVxuICAgIGNhc2UgJ25vdGhpbmcnOlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBub3RoaW5nOiBOb3RoaW5nID0geyB0eXBlOiAnbm90aGluZycgfVxuZXhwb3J0IGNvbnN0IGp1c3QgPSA8VD4oaXRlbTogVCk6IEp1c3Q8VD4gPT4gKHtcbiAgdHlwZTogJ2p1c3QnLFxuICBpdGVtLFxufSlcbiIsImV4cG9ydCBjbGFzcyBVbnJlYWNoYWJsZUNhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IG5ldmVyKSB7XG4gICAgc3VwZXIoYFVucmVhY2hhYmxlIGNhc2U6ICR7dmFsdWV9YClcbiAgfVxufVxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25Qb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIHJlZHVjZSA9IChwb2ludHM6IG51bWJlcik6IEFjdGlvblBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEFjdGlvblBvaW50cyA9PlxuICAgIG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgcmVmcmVzaCA9ICgpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IHRoaXMubWF4LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxufVxuIiwiaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIZXgsIEhleFZlY3RvciB9IGZyb20gJy4vaGV4J1xuXG5leHBvcnQgZW51bSBIZXhEaXJlY3Rpb24ge1xuICBFQVNUID0gJ0VBU1QnLFxuICBXRVNUID0gJ1dFU1QnLFxuICBOT1JUSF9FQVNUID0gJ05PUlRIX0VBU1QnLFxuICBTT1VUSF9FQVNUID0gJ1NPVVRIX0VBU1QnLFxuICBOT1JUSF9XRVNUID0gJ05PUlRIX1dFU1QnLFxuICBTT1VUSF9XRVNUID0gJ1NPVVRIX1dFU1QnLFxufVxuXG5leHBvcnQgY29uc3QgSEVYX0RJUkVDVElPTlMgPSBbXG4gIEhleERpcmVjdGlvbi5FQVNULFxuICBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5XRVNULFxuICBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QsXG5dXG5cbmV4cG9ydCBjb25zdCBnZXRVbml0VmVjdG9yID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogSGV4VmVjdG9yID0+IHtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlIEhleERpcmVjdGlvbi5FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMSwgMClcbiAgICBjYXNlIEhleERpcmVjdGlvbi5XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoLTEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIC0xKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgwLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5TT1VUSF9FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5TT1VUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoLTEsIDEpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihkaXJlY3Rpb24pXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBnZXRVbml0VmVjdG9yLCBIZXhEaXJlY3Rpb24gfSBmcm9tICcuL2hleC1kaXJlY3Rpb24nXG5cbmV4cG9ydCBjbGFzcyBIZXgge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICB9XG5cbiAgZ2V0IHooKTogbnVtYmVyIHtcbiAgICByZXR1cm4gLXRoaXMueCAtIHRoaXMueVxuICB9XG5cbiAgcHVibGljIHBsdXMgPSAodGhhdDogSGV4KTogSGV4ID0+IG5ldyBIZXgodGhpcy54ICsgdGhhdC54LCB0aGlzLnkgKyB0aGF0LnkpXG5cbiAgcHVibGljIG5laWdoYm91cnMgPSAoKTogSGV4W10gPT4gSGV4Lk5FSUdIQk9VUlMubWFwKHRoaXMucGx1cylcblxuICBwdWJsaWMgaXNBZGphY2VudFRvID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gUi5pbmNsdWRlcyh0aGF0LCB0aGlzLm5laWdoYm91cnMoKSlcblxuICBwdWJsaWMgZGlzdGFuY2VUbyA9ICh0aGF0OiBIZXgpOiBudW1iZXIgPT5cbiAgICAoTWF0aC5hYnModGhpcy54IC0gdGhhdC54KSArIE1hdGguYWJzKHRoaXMueSAtIHRoYXQueSkgKyBNYXRoLmFicyh0aGlzLnogLSB0aGF0LnopKSAvIDJcblxuICBwcml2YXRlIHN0YXRpYyBORUlHSEJPVVJTOiBIZXhbXSA9IFtcbiAgICBuZXcgSGV4KDAsIDEpLFxuICAgIG5ldyBIZXgoMSwgMCksXG4gICAgbmV3IEhleCgxLCAtMSksXG4gICAgbmV3IEhleCgwLCAtMSksXG4gICAgbmV3IEhleCgtMSwgMCksXG4gICAgbmV3IEhleCgtMSwgMSksXG4gIF1cblxuICBwdWJsaWMgZXF1YWxzID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gdGhpcy54ID09IHRoYXQueCAmJiB0aGlzLnkgPT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcblxuICBwdWJsaWMgZ28gPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXggPT4gdGhpcy5wbHVzKGdldFVuaXRWZWN0b3IoZGlyZWN0aW9uKSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGV4ID0+IG5ldyBIZXgoanNvbi54LCBqc29uLnkpXG59XG5cbmV4cG9ydCB0eXBlIEhleFZlY3RvciA9IEhleFxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBIaXRQb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIGRhbWFnZSA9IChwb2ludHM6IG51bWJlcik6IEhpdFBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEhpdFBvaW50cyA9PlxuICAgIG5ldyBIaXRQb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQsIG1heDogdGhpcy5tYXggfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEhpdFBvaW50cyA9PiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDoganNvbi5jdXJyZW50LCBtYXg6IGpzb24ubWF4IH0pXG59XG4iLCJpbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL3BsYXllcidcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfV09STERfU1RBVEU6IFdvcmxkU3RhdGUgPSBuZXcgV29ybGRTdGF0ZSh7XG4gIHR1cm46IDAsXG4gIG1hcDogbmV3IFdvcmxkTWFwKHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDYgfSksXG4gIHBsYXllcnM6IFtcbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiAxLFxuICAgICAgbmFtZTogJ1BsYXllciAxJyxcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gIF0sXG4gIHVuaXRzOiBbXSxcbn0pXG4iLCJleHBvcnQgY29uc3QgSE9TVF9QTEFZRVJfSUQgPSAxXG5cbmV4cG9ydCB0eXBlIFBsYXllcklkID0gbnVtYmVyXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICByZWFkb25seSBpZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGVuZGVkVHVybjogYm9vbGVhblxuICByZWFkb25seSBkZWZlYXRlZDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpZCxcbiAgICBuYW1lLFxuICAgIGVuZGVkVHVybiA9IGZhbHNlLFxuICAgIGRlZmVhdGVkID0gZmFsc2UsXG4gIH06IHtcbiAgICBpZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBlbmRlZFR1cm4/OiBib29sZWFuXG4gICAgZGVmZWF0ZWQ/OiBib29sZWFuXG4gIH0pIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5lbmRlZFR1cm4gPSBlbmRlZFR1cm5cbiAgICB0aGlzLmRlZmVhdGVkID0gZGVmZWF0ZWRcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBpZCA9IHRoaXMuaWQsXG4gICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICBlbmRlZFR1cm4gPSB0aGlzLmVuZGVkVHVybixcbiAgICBkZWZlYXRlZCA9IHRoaXMuZGVmZWF0ZWQsXG4gIH06IHsgaWQ/OiBQbGF5ZXJJZDsgbmFtZT86IHN0cmluZzsgZW5kZWRUdXJuPzogYm9vbGVhbjsgZGVmZWF0ZWQ/OiBib29sZWFuIH0gPSB7fSk6IFBsYXllciA9PlxuICAgIG5ldyBQbGF5ZXIoe1xuICAgICAgaWQsXG4gICAgICBuYW1lLFxuICAgICAgZW5kZWRUdXJuLFxuICAgICAgZGVmZWF0ZWQsXG4gICAgfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBpZDogdGhpcy5pZCwgbmFtZTogdGhpcy5uYW1lLCBlbmRlZFR1cm46IHRoaXMuZW5kZWRUdXJuLCBkZWZlYXRlZDogdGhpcy5kZWZlYXRlZCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogUGxheWVyID0+XG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgIGVuZGVkVHVybjoganNvbi5lbmRlZFR1cm4sXG4gICAgICBkZWZlYXRlZDoganNvbi5kZWZlYXRlZCxcbiAgICB9KVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuL2FjdGlvbi1wb2ludHMnXG5pbXBvcnQgeyBIaXRQb2ludHMgfSBmcm9tICcuL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBVbml0SWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFVuaXQge1xuICByZWFkb25seSBpZDogVW5pdElkXG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgbG9jYXRpb246IEhleFxuICByZWFkb25seSBoaXRQb2ludHM6IEhpdFBvaW50c1xuICByZWFkb25seSBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBpZCxcbiAgICBwbGF5ZXJJZCxcbiAgICBuYW1lLFxuICAgIGxvY2F0aW9uLFxuICAgIGhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMsXG4gIH06IHtcbiAgICBpZDogVW5pdElkXG4gICAgcGxheWVySWQ6IFBsYXllcklkXG4gICAgbmFtZTogc3RyaW5nXG4gICAgbG9jYXRpb246IEhleFxuICAgIGhpdFBvaW50czogSGl0UG9pbnRzXG4gICAgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcbiAgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgICB0aGlzLmhpdFBvaW50cyA9IGhpdFBvaW50c1xuICAgIHRoaXMuYWN0aW9uUG9pbnRzID0gYWN0aW9uUG9pbnRzXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLmRhbWFnZShwb2ludHMpIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIGlkID0gdGhpcy5pZCxcbiAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24sXG4gICAgaGl0UG9pbnRzID0gdGhpcy5oaXRQb2ludHMsXG4gICAgYWN0aW9uUG9pbnRzID0gdGhpcy5hY3Rpb25Qb2ludHMsXG4gIH06IHtcbiAgICBpZD86IFVuaXRJZFxuICAgIHBsYXllcklkPzogUGxheWVySWRcbiAgICBuYW1lPzogc3RyaW5nXG4gICAgbG9jYXRpb24/OiBIZXhcbiAgICBoaXRQb2ludHM/OiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM/OiBBY3Rpb25Qb2ludHNcbiAgfSA9IHt9KTogVW5pdCA9PiBuZXcgVW5pdCh7IGlkLCBwbGF5ZXJJZCwgbmFtZSwgbG9jYXRpb24sIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0pXG5cbiAgcHVibGljIG1vdmUgPSAobG9jYXRpb246IEhleCwgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBsb2NhdGlvbiwgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZHVjZUFjdGlvblBvaW50cyA9IChhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWZyZXNoQWN0aW9uUG9pbnRzID0gKCk6IFVuaXQgPT4gdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWZyZXNoKCkgfSlcblxuICBwdWJsaWMgZ2V0IGhhc1Vuc3BlbnRBY3Rpb25Qb2ludHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPiAwXG4gIH1cblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoe1xuICAgIGlkOiB0aGlzLmlkLFxuICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbi50b0pzb24oKSxcbiAgICBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLnRvSnNvbigpLFxuICAgIGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMudG9Kc29uKCksXG4gIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBVbml0ID0+XG4gICAgbmV3IFVuaXQoe1xuICAgICAgaWQ6IGpzb24uaWQsXG4gICAgICBwbGF5ZXJJZDoganNvbi5wbGF5ZXJJZCxcbiAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgIGxvY2F0aW9uOiBIZXguZnJvbUpzb24oanNvbi5sb2NhdGlvbiksXG4gICAgICBoaXRQb2ludHM6IEhpdFBvaW50cy5mcm9tSnNvbihqc29uLmhpdFBvaW50cyksXG4gICAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cy5mcm9tSnNvbihqc29uLmFjdGlvblBvaW50cyksXG4gICAgfSlcbn1cbiIsImltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIENvbWJhdFdvcmxkRXZlbnQsXG4gIEdhbWVPdmVyV29ybGRFdmVudCxcbiAgR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50LFxuICBJbml0aWFsaXNlV29ybGRFdmVudCxcbiAgUGxheWVyQWRkZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQsXG4gIFBsYXllckRlZmVhdGVkV29ybGRFdmVudCxcbiAgUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCB7IGNhbkF0dGFja09jY3VyIH0gZnJvbSAnLi4vc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlcidcblxuZXhwb3J0IGNvbnN0IGFwcGx5RXZlbnQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgcmV0dXJuIGhhbmRsZUluaXRpYWxpc2UoZXZlbnQpXG4gICAgY2FzZSAncGxheWVyQWRkZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckFkZGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJDaGFuZ2VkTmFtZSc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQ2hhbmdlZE5hbWUoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lU3RhcnRlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckVuZGVkVHVybihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAncGxheWVyRGVmZWF0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckRlZmVhdGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICduZXdUdXJuJzpcbiAgICAgIHJldHVybiBoYW5kbGVOZXdUdXJuKHN0YXRlKVxuICAgIGNhc2UgJ2dhbWVPdmVyJzpcbiAgICAgIHJldHVybiBoYW5kbGVHYW1lT3ZlcihzdGF0ZSwgZXZlbnQpXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihldmVudClcbiAgfVxufVxuXG5jb25zdCBoYW5kbGVJbml0aWFsaXNlID0gKGV2ZW50OiBJbml0aWFsaXNlV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBpZiAoZXZlbnQuaWQgPiAwKSB7XG4gICAgdGhyb3cgYEluaXRpYWxpc2UgbXVzdCBiZSB0aGUgZmlyc3QgZXZlbnRgXG4gIH1cbiAgcmV0dXJuIGV2ZW50LnN0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckFkZGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyQWRkZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT0gZXZlbnQucGxheWVySWQsIHN0YXRlLnBsYXllcnMpKSB7XG4gICAgdGhyb3cgYFBsYXllciBJRCBhbHJlYWR5IGluIHVzZWBcbiAgfVxuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHsgaWQ6IHBsYXllcklkLCBuYW1lOiBgUGxheWVyICR7cGxheWVySWR9YCB9KVxuICByZXR1cm4gc3RhdGUuYWRkUGxheWVyKHBsYXllcilcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyQ2hhbmdlZE5hbWUgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBQbGF5ZXJDaGFuZ2VkTmFtZVdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCwgbmFtZSB9ID0gZXZlbnRcbiAgdmFsaWRhdGVQbGF5ZXJJZChzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZS51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgbmFtZSB9KSlcbn1cblxuY29uc3QgdmFsaWRhdGVQbGF5ZXJJZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgcGxheWVySWQ6IFBsYXllcklkKTogdm9pZCA9PiB7XG4gIGNvbnN0IHBsYXllciA9IHN0YXRlLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gIGlmICghcGxheWVyKSB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG59XG5cbmNvbnN0IGhhbmRsZUdhbWVTdGFydGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChzdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgIHRocm93IGBHYW1lIGFscmVhZHkgc3RhcnRlZGBcbiAgfVxuICByZXR1cm4gc3RhdGUuY29weSh7IHR1cm46IDEsIHVuaXRzOiBldmVudC51bml0cyB9KVxufVxuXG5jb25zdCBoYW5kbGVVbml0TW92ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgdW5pdElkLCBwbGF5ZXJJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gIGlmICghc3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKSB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICBjb25zdCB1bml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgaWYgKCF1bml0KSB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgY29uc3QgZnJvbVVuaXQgPSBzdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oZnJvbSlcbiAgaWYgKGZyb21Vbml0Py5pZCAhPSB1bml0SWQpIHtcbiAgICB0aHJvdyBgSW52YWxpZCBmcm9tIGxvY2F0aW9uIGZvciB1bml0IG1vdmVtZW50LiBVbml0IGF0ICR7ZnJvbX0gaXMgJHtmcm9tVW5pdD8uaWR9LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlICR7dW5pdElkfWBcbiAgfVxuICBjb25zdCB0b1VuaXQgPSBzdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odG8pXG4gIGlmICh0b1VuaXQpIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gYWxyZWFkeS1vY2N1cGllZCBoZXhgXG4gIGlmICh1bml0LnBsYXllcklkICE9IHBsYXllcklkKSB0aHJvdyBgSW52YWxpZCBhdHRlbXB0IHRvIG1vdmUgdW5pdCBvZiBhbm90aGVyIHBsYXllcmBcbiAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuICByZXR1cm4gc3RhdGUucmVwbGFjZVVuaXQodW5pdC5pZCwgdW5pdC5tb3ZlKHRvLCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG59XG5cbmNvbnN0IGhhbmRsZUNvbWJhdCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG5cbiAgY29uc3QgYXR0YWNrZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VyLnVuaXRJZClcbiAgaWYgKCFhdHRhY2tlclVuaXQpIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHthdHRhY2tlci51bml0SWR9YFxuICBpZiAoIWF0dGFja2VyVW5pdC5sb2NhdGlvbi5lcXVhbHMoYXR0YWNrZXIubG9jYXRpb24pKVxuICAgIHRocm93IGBJbnZhbGlkIGxvY2F0aW9uIGZvciBhdHRhY2tlci4gQXR0YWNraW5nIHVuaXQgJHthdHRhY2tlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7YXR0YWNrZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2F0dGFja2VyLmxvY2F0aW9ufWBcblxuICBjb25zdCBkZWZlbmRlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoZGVmZW5kZXIudW5pdElkKVxuICBpZiAoIWRlZmVuZGVyVW5pdCkgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVyLnVuaXRJZH1gXG4gIGlmICghZGVmZW5kZXJVbml0LmxvY2F0aW9uLmVxdWFscyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGRlZmVuZGVyLiBEZWZlbmRpbmcgdW5pdCAke2RlZmVuZGVyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHtkZWZlbmRlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7ZGVmZW5kZXIubG9jYXRpb259YFxuXG4gIGlmIChhdHRhY2tlclVuaXQucGxheWVySWQgPT0gZGVmZW5kZXJVbml0LnBsYXllcklkKSB0aHJvdyBgSW52YWxpZCBjb21iYXQgd2l0aCBzZWxmYFxuICBpZiAoIWNhbkF0dGFja09jY3VyKGV2ZW50LmF0dGFja1R5cGUsIGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgY29tYmF0IG9mIHR5cGUgJHtldmVudC5hdHRhY2tUeXBlfSBiZXR3ZWVuIGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuICBpZiAoYXR0YWNrZXJVbml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpIHRocm93IGBJbnZhbGlkIGFjdGlvbiBwb2ludCB1c2FnZWBcblxuICBsZXQgbmV3U3RhdGUgPSBzdGF0ZVxuXG4gIGlmIChhdHRhY2tlci5raWxsZWQpIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChhdHRhY2tlclVuaXQuaWQpXG4gIGVsc2VcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KFxuICAgICAgYXR0YWNrZXJVbml0LmlkLFxuICAgICAgYXR0YWNrZXJVbml0LmRhbWFnZShhdHRhY2tlci5kYW1hZ2UpLnJlZHVjZUFjdGlvblBvaW50cyhldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCksXG4gICAgKVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChkZWZlbmRlclVuaXQuaWQpXG4gIGVsc2UgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChkZWZlbmRlclVuaXQuaWQsIGRlZmVuZGVyVW5pdC5kYW1hZ2UoZGVmZW5kZXIuZGFtYWdlKSlcblxuICByZXR1cm4gbmV3U3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICB2YWxpZGF0ZVBsYXllcklkKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IHRydWUgfSkpXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckRlZmVhdGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIHZhbGlkYXRlUGxheWVySWQoc3RhdGUsIHBsYXllcklkKVxuICByZXR1cm4gc3RhdGUudXBkYXRlUGxheWVyKHBsYXllcklkLCAocGxheWVyKSA9PiBwbGF5ZXIuY29weSh7IGRlZmVhdGVkOiB0cnVlIH0pKVxufVxuXG5jb25zdCBoYW5kbGVOZXdUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlKTogV29ybGRTdGF0ZSA9PlxuICBzdGF0ZS5jb3B5KHtcbiAgICB0dXJuOiBzdGF0ZS50dXJuICsgMSxcbiAgICB1bml0czogc3RhdGUudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LnJlZnJlc2hBY3Rpb25Qb2ludHMoKSksXG4gICAgcGxheWVyczogc3RhdGUucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IGZhbHNlIH0pKSxcbiAgfSlcblxuY29uc3QgaGFuZGxlR2FtZU92ZXIgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBHYW1lT3ZlcldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB2aWN0b3IgfSA9IGV2ZW50XG4gIGlmICh2aWN0b3IpIHtcbiAgICB2YWxpZGF0ZVBsYXllcklkKHN0YXRlLCB2aWN0b3IpXG4gIH1cbiAgcmV0dXJuIHN0YXRlLmdhbWVPdmVyKHZpY3Rvcilcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBXb3JsZE1hcCB7XG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXJcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IHdpZHRoLCBoZWlnaHQgfTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9KSB7XG4gICAgYXNzZXJ0KHdpZHRoID4gMClcbiAgICBhc3NlcnQoaGVpZ2h0ID4gMClcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICB9XG5cbiAgcHVibGljIGlzSW5Cb3VuZHMgPSAoaGV4OiBIZXgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBxID0gaGV4LnggKyBNYXRoLmZsb29yKGhleC55IC8gMilcbiAgICByZXR1cm4gMCA8PSBxICYmIHEgPCB0aGlzLndpZHRoICYmIDAgPD0gaGV4LnkgJiYgaGV4LnkgPCB0aGlzLmhlaWdodFxuICB9XG5cbiAgcHVibGljICpnZXRNYXBIZXhlcygpOiBJdGVyYWJsZUl0ZXJhdG9yPEhleD4ge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuaGVpZ2h0OyByb3crKylcbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMud2lkdGg7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IHggPSAtTWF0aC5mbG9vcihyb3cgLyAyKSArIGNvbHVtblxuICAgICAgICB5aWVsZCBuZXcgSGV4KHgsIHJvdylcbiAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IHdpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBXb3JsZE1hcCA9PiBuZXcgV29ybGRNYXAoeyB3aWR0aDoganNvbi53aWR0aCwgaGVpZ2h0OiBqc29uLmhlaWdodCB9KVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuL3dvcmxkLW1hcCdcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4vdW5pdCdcbmltcG9ydCB7IGp1c3QsIE1heWJlLCBPcHRpb24sIHRvTWF5YmUsIHRvT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4vd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4vd29ybGQtZXZlbnRzJ1xuXG5pbnRlcmZhY2UgR2FtZU92ZXJJbmZvIHtcbiAgdmljdG9yOiBPcHRpb248UGxheWVySWQ+XG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZFN0YXRlIHtcbiAgcmVhZG9ubHkgdHVybjogbnVtYmVyIC8qIHR1cm4gPSAwIGJlZm9yZSB0aGUgZ2FtZSBoYXMgc3RhcnRlZCAqL1xuICByZWFkb25seSBtYXA6IFdvcmxkTWFwXG4gIHJlYWRvbmx5IHVuaXRzOiBVbml0W11cbiAgcmVhZG9ubHkgcGxheWVyczogUGxheWVyW11cbiAgcmVhZG9ubHkgZ2FtZU92ZXJJbmZvPzogR2FtZU92ZXJJbmZvXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHR1cm4sXG4gICAgbWFwLFxuICAgIHVuaXRzLFxuICAgIHBsYXllcnMsXG4gICAgZ2FtZU92ZXJJbmZvLFxuICB9OiB7XG4gICAgdHVybjogbnVtYmVyXG4gICAgbWFwOiBXb3JsZE1hcFxuICAgIHVuaXRzOiBVbml0W11cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXVxuICAgIGdhbWVPdmVySW5mbz86IE9wdGlvbjxHYW1lT3ZlckluZm8+XG4gIH0pIHtcbiAgICB0aGlzLnR1cm4gPSB0dXJuXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLnVuaXRzID0gdW5pdHNcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzXG4gICAgdGhpcy5nYW1lT3ZlckluZm8gPSBnYW1lT3ZlckluZm9cbiAgICBhc3NlcnQodHVybiA+PSAwKVxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHR1cm4gPSB0aGlzLnR1cm4sXG4gICAgbWFwID0gdGhpcy5tYXAsXG4gICAgdW5pdHMgPSB0aGlzLnVuaXRzLFxuICAgIHBsYXllcnMgPSB0aGlzLnBsYXllcnMsXG4gICAgZ2FtZU92ZXJJbmZvID0gdG9NYXliZSh0aGlzLmdhbWVPdmVySW5mbyksXG4gIH06IHtcbiAgICB0dXJuPzogbnVtYmVyXG4gICAgbWFwPzogV29ybGRNYXBcbiAgICB1bml0cz86IFVuaXRbXVxuICAgIHBsYXllcnM/OiBQbGF5ZXJbXVxuICAgIGdhbWVPdmVySW5mbz86IE1heWJlPEdhbWVPdmVySW5mbz5cbiAgfSA9IHt9KTogV29ybGRTdGF0ZSA9PiBuZXcgV29ybGRTdGF0ZSh7IHR1cm4sIG1hcCwgdW5pdHMsIHBsYXllcnMsIGdhbWVPdmVySW5mbzogdG9PcHRpb24oZ2FtZU92ZXJJbmZvKSB9KVxuXG4gIHB1YmxpYyBnZXQgZ2FtZUhhc1N0YXJ0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHVybiA+IDBcbiAgfVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXJJZHMgPSAoKTogUGxheWVySWRbXSA9PiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5pZClcblxuICBwdWJsaWMgaXNQbGF5ZXJEZWZlYXRlZCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IHRoaXMuZ2V0VW5pdHNGb3JQbGF5ZXIocGxheWVySWQpLmxlbmd0aCA9PSAwXG5cbiAgcHVibGljIGNhblBsYXllckFjdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBlbmRlZFR1cm4gPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpPy5lbmRlZFR1cm5cbiAgICByZXR1cm4gIWVuZGVkVHVybiAmJiBSLmFueSgodW5pdCkgPT4gdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzLCB0aGlzLmdldFVuaXRzRm9yUGxheWVyKHBsYXllcklkKSlcbiAgfVxuXG4gIHB1YmxpYyBjYW5BbnlQbGF5ZXJBY3QgPSAoKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiB0aGlzLmNhblBsYXllckFjdChwbGF5ZXIuaWQpLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdldFVuaXRzRm9yUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFVuaXRbXSA9PiB0aGlzLnVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5wbGF5ZXJJZCA9PT0gcGxheWVySWQpXG5cbiAgcHVibGljIGZpbmRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogT3B0aW9uPFBsYXllcj4gPT4gUi5maW5kKChwbGF5ZXIpID0+IHBsYXllci5pZCA9PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHtcbiAgICAgIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllclxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0QnlJZCA9ICh1bml0SWQ6IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiBSLmZpbmQoKHVuaXQpID0+IHVuaXQuaWQgPT0gdW5pdElkLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyBnZXRVbml0QnlJZCA9ICh1bml0SWQ6IG51bWJlcik6IFVuaXQgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICB9XG4gICAgcmV0dXJuIHVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gUi5maW5kKCh1bml0KSA9PiB1bml0LmxvY2F0aW9uLmVxdWFscyhoZXgpLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyByZXBsYWNlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCwgdW5pdDogVW5pdCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoe1xuICAgICAgdW5pdHM6IFIuYXBwZW5kKFxuICAgICAgICB1bml0LFxuICAgICAgICBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPSB1bml0SWQsIHRoaXMudW5pdHMpLFxuICAgICAgKSxcbiAgICB9KVxuXG4gIHB1YmxpYyByZW1vdmVVbml0ID0gKHVuaXRJZDogVW5pdElkKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHVuaXRzOiBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPSB1bml0SWQsIHRoaXMudW5pdHMpIH0pXG5cbiAgcHVibGljIHVwZGF0ZVBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQsIG1vZGlmeTogKHBsYXllcjogUGxheWVyKSA9PiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpIHRocm93IGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlUGxheWVyKHBsYXllcklkLCBtb2RpZnkocGxheWVyKSlcbiAgfVxuXG4gIHB1YmxpYyByZXBsYWNlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgcGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHtcbiAgICBhc3NlcnQocGxheWVySWQgPT0gcGxheWVyLmlkKVxuICAgIHJldHVybiB0aGlzLmNvcHkoe1xuICAgICAgcGxheWVyczogUi5hcHBlbmQoXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgUi5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmlkICE9IHBsYXllcklkLCB0aGlzLnBsYXllcnMpLFxuICAgICAgKSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGFkZFBsYXllciA9IChwbGF5ZXI6IFBsYXllcik6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgcGxheWVyczogUi5hcHBlbmQocGxheWVyLCB0aGlzLnBsYXllcnMpIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBhbnkgPT4gKHtcbiAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgbWFwOiB0aGlzLm1hcC50b0pzb24oKSxcbiAgICB1bml0czogdGhpcy51bml0cy5tYXAoKHVuaXQpID0+IHVuaXQudG9Kc29uKCkpLFxuICAgIHBsYXllcnM6IHRoaXMucGxheWVycy5tYXAoKHBsYXllcikgPT4gcGxheWVyLnRvSnNvbigpKSxcbiAgICBnYW1lT3ZlckluZm86IHRoaXMuZ2FtZU92ZXJJbmZvLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRTdGF0ZSA9PlxuICAgIG5ldyBXb3JsZFN0YXRlKHtcbiAgICAgIHR1cm46IGpzb24udHVybixcbiAgICAgIG1hcDogV29ybGRNYXAuZnJvbUpzb24oanNvbi5tYXApLFxuICAgICAgdW5pdHM6IGpzb24udW5pdHMubWFwKCh1bml0OiBhbnkpID0+IFVuaXQuZnJvbUpzb24odW5pdCkpLFxuICAgICAgcGxheWVyczoganNvbi5wbGF5ZXJzLm1hcCgodW5pdDogYW55KSA9PiBQbGF5ZXIuZnJvbUpzb24odW5pdCkpLFxuICAgICAgZ2FtZU92ZXJJbmZvOiBqc29uLmdhbWVPdmVySW5mbyxcbiAgICB9KVxuXG4gIHB1YmxpYyBpc1ZhbGlkUGxheWVySWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZ2FtZU92ZXIgPSAodmljdG9yOiBPcHRpb248bnVtYmVyPik6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgZ2FtZU92ZXJJbmZvOiBqdXN0KHsgdmljdG9yIH0pIH0pXG5cbiAgcHVibGljIGFwcGx5RXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IGFwcGx5RXZlbnQodGhpcywgZXZlbnQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9