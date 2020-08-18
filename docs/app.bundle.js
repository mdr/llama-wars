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
var combined_state_methods_1 = __webpack_require__(/*! ../combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var player_1 = __webpack_require__(/*! ../../world/player */ "./src/world/player.ts");
var asset_keys_1 = __webpack_require__(/*! ../asset-keys */ "./src/scenes/asset-keys.ts");
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
            if (player.endedTurn) {
                _this.endTurnText.setText('Waiting for next turn...');
            }
            else {
                _this.endTurnText.setText('End Turn (Shift + Enter)');
            }
            _this.defeatText.setVisible(player.defeated);
            _this.victoryText.setVisible(((_b = worldState.gameOverInfo) === null || _b === void 0 ? void 0 : _b.victor) === player.id);
            _this.worldLogText.setText(R.takeLast(30, _this.worldState.worldLog).join('\n'));
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
            .image(36, 32, 'llama-2')
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
        this.worldLogText = this.scene.add.text(960, 50, '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RiL3dvcmxkLWV2ZW50LWRiLnRzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYXNzZXQta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3QvdXJsLWluZm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb2xvdXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvY29tYmluZWQtc3RhdGUtbWV0aG9kcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2hleC1nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9iYnkvY3JlYXRlZC1sb2JieS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LWRpc3BsYXktb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvYmJ5L2xvYmJ5LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9jYWwtZ2FtZS1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9kaXNwbGF5LW9iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9rZXlib2FyZC1tYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvbG9jYWwtYWN0aW9uLXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tZ2FtZS9tYXAtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvdGV4dHMtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLWdhbWUvdW5pdC1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2F0dGFjay13b3JsZC1hY3Rpb24taGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BlZXItY2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcGVlci1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wZWVyLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvd29ybGQtYWN0aW9uLWhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1nZW5lcmF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci93b3JsZC1zdGF0ZS1vd25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWVudS1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYXN5bmMtdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9qc29uLXNlcmlhbGlzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3JhbmRvbS11dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2FjdGlvbi1wb2ludHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGl0LXBvaW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC91bml0LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87UUFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUTtRQUN4QixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBa0JELHNCQUFXLGtDQUFVO2FBQXJCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVM7UUFDeEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxzQ0FBYzthQUF6QjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBMkVhLG1CQUFRLEdBQUcsVUFBQyxJQUFTO1FBQ2pDLFdBQUksVUFBVSxDQUFDO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsR0FBRyxFQUFFLG9CQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDaEMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUyxJQUFLLGtCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFuQixDQUFtQixDQUFDO1lBQ3pELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVMsSUFBSyxzQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsQ0FBQztZQUMvRCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFQRixDQU9FO0lBNEJOLGlCQUFDO0NBQUE7QUFyS1ksZ0NBQVUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IERleGllLCB7IENvbGxlY3Rpb24gfSBmcm9tICdkZXhpZSdcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uLCBzZXJpYWxpc2VUb0pzb24gfSBmcm9tICcuLi91dGlsL2pzb24tc2VyaWFsaXNhdGlvbidcblxuZXhwb3J0IGludGVyZmFjZSBXb3JsZEV2ZW50UmVjb3JkIHtcbiAgZ2FtZUlkOiBHYW1lSWRcbiAgZXZlbnQ6IGFueSAvLyBzZXJpYWxpc2VkIFdvcmxkRXZlbnRcbn1cblxuZXhwb3J0IGNsYXNzIExsYW1hRGV4aWUgZXh0ZW5kcyBEZXhpZSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWlnbm9yZVxuICB3b3JsZEV2ZW50czogRGV4aWUuVGFibGU8V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPlxufVxuXG5leHBvcnQgY29uc3Qgb3BlbldvcmxkRXZlbnREYiA9IGFzeW5jICgpOiBQcm9taXNlPFdvcmxkRXZlbnREYj4gPT4ge1xuICBjb25zdCBkZXhpZSA9IG5ldyBEZXhpZSgnbGxhbWEtd2FycycpXG4gIGRleGllLnZlcnNpb24oMSkuc3RvcmVzKHtcbiAgICB3b3JsZEV2ZW50czogJysrLGdhbWVJZCcsXG4gIH0pXG4gIGF3YWl0IGRleGllLm9wZW4oKVxuICByZXR1cm4gbmV3IFdvcmxkRXZlbnREYig8TGxhbWFEZXhpZT5kZXhpZSlcbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkRXZlbnREYiB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGV4aWU6IExsYW1hRGV4aWVcblxuICBjb25zdHJ1Y3RvcihkZXhpZTogTGxhbWFEZXhpZSkge1xuICAgIHRoaXMuZGV4aWUgPSBkZXhpZVxuICB9XG5cbiAgcHVibGljIHN0b3JlID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkLCBldmVudDogV29ybGRFdmVudCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGF3YWl0IHRoaXMuZGV4aWUud29ybGRFdmVudHMuYWRkKHtcbiAgICAgIGdhbWVJZCxcbiAgICAgIGV2ZW50OiBzZXJpYWxpc2VUb0pzb24oZXZlbnQpLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgZ2V0RXZlbnRzRm9yR2FtZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8V29ybGRFdmVudFtdPiA9PiB7XG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpLnRvQXJyYXkoKVxuICAgIHJldHVybiByZWNvcmRzLm1hcCgocmVjb3JkKSA9PiBkZXNlcmlhbGlzZUZyb21Kc29uKHJlY29yZC5ldmVudCkpXG4gIH1cblxuICBwdWJsaWMgaGFzRXZlbnRzRm9yR2FtZSA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHRoaXMucXVlcnlFdmVudHNCeUdhbWVJZChnYW1lSWQpLmZpcnN0KClcbiAgICByZXR1cm4gcmVjb3JkICE9PSB1bmRlZmluZWRcbiAgfVxuXG4gIHByaXZhdGUgcXVlcnlFdmVudHNCeUdhbWVJZCA9IChnYW1lSWQ6IHN0cmluZyk6IENvbGxlY3Rpb248V29ybGRFdmVudFJlY29yZCwgc3RyaW5nPiA9PlxuICAgIHRoaXMuZGV4aWUud29ybGRFdmVudHMud2hlcmUoJ2dhbWVJZCcpLmVxdWFscyhnYW1lSWQpXG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aFxufVxuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcydcbmltcG9ydCBUZXh0RWRpdFBsdWdpbiBmcm9tICdwaGFzZXIzLXJleC1wbHVnaW5zL3BsdWdpbnMvdGV4dGVkaXQtcGx1Z2luLmpzJ1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ0xsYW1hIFdhcnMnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9LFxuXG4gIHNjZW5lOiBTY2VuZXMsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgcGFyZW50OiAnZ2FtZScsXG4gIGRvbToge1xuICAgIGNyZWF0ZUNvbnRhaW5lcjogdHJ1ZSxcbiAgfSxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG4gIHBsdWdpbnM6IHtcbiAgICBnbG9iYWw6IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmV4VGV4dEVkaXQnLFxuICAgICAgICBwbHVnaW46IFRleHRFZGl0UGx1Z2luLFxuICAgICAgICBzdGFydDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5zZXRHYW1lU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuICBnYW1lLnNjYWxlLnJlZnJlc2goKVxufSlcbiIsImV4cG9ydCBjb25zdCBJbWFnZUtleXMgPSB7XG4gIExMQU1BXzE6ICdsbGFtYS0xJyxcbiAgTExBTUFfMjogJ2xsYW1hLTInLFxuICBMTEFNQV8zOiAnbGxhbWEtMycsXG4gIExMQU1BXzQ6ICdsbGFtYS00JyxcbiAgTExBTUFfRUFUXzE6ICdsbGFtYS1lYXQtMScsXG4gIExMQU1BX0VBVF8yOiAnbGxhbWEtZWF0LTInLFxuICBMTEFNQV9FQVRfMzogJ2xsYW1hLWVhdC0zJyxcbiAgTExBTUFfRUFUXzQ6ICdsbGFtYS1lYXQtNCcsXG4gIEhPVVJHTEFTUzogJ2hvdXJnbGFzcycsXG4gIEdSQVNTOiAnZ3Jhc3MnLFxuICBTUElUOiAnc3BpdCcsXG4gIE1PVU5UQUlOOiAnbW91bnRhaW4nLFxuICBDUk9XTjogJ2Nyb3duJyxcbn1cblxuZXhwb3J0IGNvbnN0IEF1ZGlvS2V5cyA9IHtcbiAgQVRUQUNLXzE6ICdhdHRhY2sxJyxcbiAgQVRUQUNLXzI6ICdhdHRhY2syJyxcbiAgQVRUQUNLXzM6ICdhdHRhY2szJyxcbiAgREVBVEg6ICdkZWF0aCcsXG4gIFdBTEs6ICd3YWxrJyxcbiAgTkVXX1RVUk46ICduZXctdHVybicsXG4gIFBMQVlFUl9ERUZFQVRFRDogJ3BsYXllci1kZWZlYXRlZCcsXG4gIFBMQVlFUl9KT0lORURfTE9CQlk6ICdwbGF5ZXItZGVmZWF0ZWQnLFxuICBWSUNUT1JZX01VU0lDOiAndmljdG9yeS1tdXNpYycsXG4gIENMSUNLOiAnY2xpY2snLFxuICBTUElUOiAnc3BpdCcsXG59XG5cbmV4cG9ydCBjb25zdCBBTExfQVVESU9fS0VZUyA9IFtcbiAgQXVkaW9LZXlzLkFUVEFDS18xLFxuICBBdWRpb0tleXMuQVRUQUNLXzIsXG4gIEF1ZGlvS2V5cy5BVFRBQ0tfMyxcbiAgQXVkaW9LZXlzLkRFQVRILFxuICBBdWRpb0tleXMuV0FMSyxcbiAgQXVkaW9LZXlzLk5FV19UVVJOLFxuICBBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVELFxuICBBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSxcbiAgQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsXG4gIEF1ZGlvS2V5cy5DTElDSyxcbiAgQXVkaW9LZXlzLlNQSVQsXG5dXG4iLCJpbXBvcnQgeyBnZXRHYW1lSGVpZ2h0LCBnZXRHYW1lV2lkdGggfSBmcm9tICcuLi8uLi9oZWxwZXJzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzLCBJbWFnZUtleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVJZCwgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4uL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTUFJTl9NRU5VX1NDRU5FX0tFWSB9IGZyb20gJy4uL21haW4tbWVudS9tYWluLW1lbnUtc2NlbmUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiwgV29ybGRFdmVudERiIH0gZnJvbSAnLi4vLi4vZGIvd29ybGQtZXZlbnQtZGInXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgTE9CQllfU0NFTkVfS0VZLCBMb2JieVNjZW5lRGF0YSB9IGZyb20gJy4uL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuaW1wb3J0IHsgZ2V0VXJsSW5mbywgc2V0VXJsSW5mbywgVXJsSW5mbyB9IGZyb20gJy4vdXJsLWluZm8nXG5pbXBvcnQgRmlsZUNvbmZpZyA9IFBoYXNlci5UeXBlcy5Mb2FkZXIuRmlsZUNvbmZpZ1xuXG5leHBvcnQgY29uc3QgQk9PVF9TQ0VORV9LRVkgPSAnQm9vdCdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEJPT1RfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcykgKiAwLjVcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAqIDAuNVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDBcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwXG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQsXG4gICAgICAweDAwMDAwMCxcbiAgICApXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIDEwLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCxcbiAgICAgIDB4ODg4ODg4LFxuICAgIClcblxuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNClcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlXG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSBNYXRoLnJvdW5kKHZhbHVlICogMTAwKVxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlOiBGaWxlQ29uZmlnKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSlcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKVxuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpXG4gICAgICBhc3NldFRleHQuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKVxuICAgICAgdGhpcy5sYXVuY2hHYW1lKClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkQXNzZXRzKClcbiAgfVxuXG4gIHByaXZhdGUgbGF1bmNoR2FtZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCB1cmxJbmZvID0gZ2V0VXJsSW5mbygpXG4gICAgaWYgKHVybEluZm8pIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUdhbWUodXJsSW5mbylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY2VuZS5zdGFydChNQUlOX01FTlVfU0NFTkVfS0VZKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUdhbWUgPSBhc3luYyAodXJsSW5mbzogVXJsSW5mbyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZCA9IHVybEluZm8uZ2FtZUlkXG4gICAgY29uc3QgcGxheWVySWQgPSB1cmxJbmZvLnBsYXllcklkXG4gICAgY29uc3QgaXNTZXJ2ZXIgPSBhd2FpdCB3b3JsZEV2ZW50RGIuaGFzRXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlc3RvcmVHYW1lQXNTZXJ2ZXIoZ2FtZUlkLCB3b3JsZEV2ZW50RGIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IHRoaXMuam9pbk9yUmVzdG9yZUNsaWVudChnYW1lSWQsIHBsYXllcklkKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgam9pbk9yUmVzdG9yZUNsaWVudCA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgcGxheWVySWQ6IE9wdGlvbjxQbGF5ZXJJZD4pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBsZXQgY2xpZW50XG4gICAgdHJ5IHtcbiAgICAgIGNsaWVudCA9IGF3YWl0IENsaWVudC5jb25uZWN0KGdhbWVJZClcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNob3dNZXNzYWdlKCdVbmFibGUgdG8gam9pbiBnYW1lLCBjb3VsZCBub3QgY29ubmVjdCB0byBzZXJ2ZXIuJylcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAocGxheWVySWQpIHtcbiAgICAgIHRoaXMucmVqb2luQXNDbGllbnQoY2xpZW50LCBnYW1lSWQsIHBsYXllcklkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmpvaW5Bc0NsaWVudChjbGllbnQsIGdhbWVJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGpvaW5Bc0NsaWVudCA9IGFzeW5jIChjbGllbnQ6IENsaWVudCwgZ2FtZUlkOiBHYW1lSWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBqb2luUmVzdWx0ID0gYXdhaXQgY2xpZW50LmpvaW4oKVxuICAgIGlmIChqb2luUmVzdWx0KSB7XG4gICAgICBjb25zdCB7IHBsYXllcklkIH0gPSBqb2luUmVzdWx0XG4gICAgICBzZXRVcmxJbmZvKHsgZ2FtZUlkLCBwbGF5ZXJJZCB9KVxuICAgICAgdGhpcy5qb2luR2FtZShjbGllbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd01lc3NhZ2UoJ1VuYWJsZSB0byBqb2luIGdhbWUgYXMgaXQgaGFzIGFscmVhZHkgc3RhcnRlZC4nKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd01lc3NhZ2UgPSAobWVzc2FnZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLmdhbWUuc2NhbGUuZ2FtZVNpemVcbiAgICB0aGlzLmFkZFxuICAgICAgLnRleHQod2lkdGggLyAyLCBoZWlnaHQgLyAyLCBtZXNzYWdlKVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoMjQpXG4gIH1cblxuICBwcml2YXRlIHJlam9pbkFzQ2xpZW50ID0gYXN5bmMgKGNsaWVudDogQ2xpZW50LCBnYW1lSWQ6IEdhbWVJZCwgcGxheWVySWQ6IFBsYXllcklkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IGF3YWl0IGNsaWVudC5yZWpvaW4ocGxheWVySWQpXG4gICAgaWYgKHdvcmxkU3RhdGUpIHtcbiAgICAgIHRoaXMuam9pbkdhbWUoY2xpZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBpbmZvcm0gY2xpZW50XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBqb2luR2FtZSA9IChjbGllbnQ6IENsaWVudCkgPT4ge1xuICAgIGlmIChjbGllbnQud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBHYW1lU2NlbmVEYXRhID0geyBzZXJ2ZXJPckNsaWVudDogY2xpZW50IH1cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoR0FNRV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc2NlbmVEYXRhOiBMb2JieVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IGNsaWVudCB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KExPQkJZX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVzdG9yZUdhbWVBc1NlcnZlciA9IGFzeW5jIChnYW1lSWQ6IEdhbWVJZCwgd29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBzZXJ2ZXIgPSBhd2FpdCBTZXJ2ZXIucmVzdG9yZUdhbWUod29ybGRFdmVudERiLCBnYW1lSWQpXG4gICAgY29uc3Qgd29ybGRTdGF0ZSA9IHNlcnZlci53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSA9IHsgc2VydmVyT3JDbGllbnQ6IHNlcnZlciB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KEdBTUVfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIgfVxuICAgICAgdGhpcy5zY2VuZS5zdGFydChMT0JCWV9TQ0VORV9LRVksIHNjZW5lRGF0YSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgLy8gU291cmNlOiBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2xwYy1zdHlsZS1mYXJtLWFuaW1hbHNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BXzEsICdhc3NldHMvc3ByaXRlcy9sbGFtYS9sbGFtYV8xNS5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfMiwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hL2xsYW1hXzE0LnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV8zLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWEvbGxhbWFfMTMucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BXzQsICdhc3NldHMvc3ByaXRlcy9sbGFtYS9sbGFtYV8xMi5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfRUFUXzEsICdhc3NldHMvc3ByaXRlcy9sbGFtYS1lYXQvbGxhbWFfZWF0XzEyLnBuZycpXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5MTEFNQV9FQVRfMiwgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hLWVhdC9sbGFtYV9lYXRfMTMucG5nJylcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLkxMQU1BX0VBVF8zLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWEtZWF0L2xsYW1hX2VhdF8xNC5wbmcnKVxuICAgIHRoaXMubG9hZC5pbWFnZShJbWFnZUtleXMuTExBTUFfRUFUXzQsICdhc3NldHMvc3ByaXRlcy9sbGFtYS1lYXQvbGxhbWFfZWF0XzE1LnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2hvdXJnbGFzcy1pY29uXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5IT1VSR0xBU1MsICdhc3NldHMvc3ByaXRlcy9Ib3VyZ2xhc3MucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLXRleHR1cmVzLXRpbGVzXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ncmFzcy10ZXh0dXJlXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5HUkFTUywgJ2Fzc2V0cy9zcHJpdGVzL2dyYXNzMi5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvcHVkZGxlLWNvcnBzZXNcbiAgICB0aGlzLmxvYWQuaW1hZ2UoSW1hZ2VLZXlzLlNQSVQsICdhc3NldHMvc3ByaXRlcy9wdWRkbGVfbGlnaHRfYmx1ZS5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvd29ybGQtbWFwLXRpbGVzXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5NT1VOVEFJTiwgJ2Fzc2V0cy9zcHJpdGVzL21vdW50YWluc19vdXRlci5wbmcnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ2FtZS1pY29ucy0wXG4gICAgdGhpcy5sb2FkLmltYWdlKEltYWdlS2V5cy5DUk9XTiwgJ2Fzc2V0cy9zcHJpdGVzL2Nyb3duLnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50LzM3LWhpdHNwdW5jaGVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0tfMSwgJ2Fzc2V0cy9hdWRpby9oaXQxNC5tcDMubXAzJylcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkFUVEFDS18yLCAnYXNzZXRzL2F1ZGlvL2hpdDE3Lm1wMy5tcDMnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLXzMsICdhc3NldHMvYXVkaW8vaGl0MTgubXAzLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9tYWxlLWdydW50eWVsbGluZy1zb3VuZHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkRFQVRILCAnYXNzZXRzL2F1ZGlvLzF5ZWxsNC53YXYnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtZm9vdC1zdGVwLXNvdW5kcy15by1mcmFua2llXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5XQUxLLCAnYXNzZXRzL2F1ZGlvL3NmeF9zdGVwX2dyYXNzX2wubXAzJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3VpLXNvdW5kLWVmZmVjdHMtcGFja1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuTkVXX1RVUk4sICdhc3NldHMvYXVkaW8vTUVOVSBBX1NlbGVjdC53YXYnKVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuUExBWUVSX0pPSU5FRF9MT0JCWSwgJ2Fzc2V0cy9hdWRpby9NRU5VIEJfU2VsZWN0LndhdicpXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5QTEFZRVJfREVGRUFURUQsICdhc3NldHMvYXVkaW8vTUVTU0FHRS1CX0RlY2xpbmUud2F2JylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvY2xlYXItc2tpZXNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLlZJQ1RPUllfTVVTSUMsICdhc3NldHMvYXVkaW8vQ2xlYXIgU2tpZXMubXAzJylcblxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3VpLXNvdW5kLWVmZmVjdHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkNMSUNLLCAnYXNzZXRzL2F1ZGlvL2NsaWNrLndhdicpXG4gICAgLy9odHRwczovL2ZyZWVzb3VuZC5vcmcvcGVvcGxlL3R2bGF1ZGlvL3NvdW5kcy8yNjc4OTcvXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5TUElULCAnYXNzZXRzL2F1ZGlvL3NwaXQud2F2JylcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3V0aWwvdHlwZXMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsSW5mbyB7XG4gIGdhbWVJZDogR2FtZUlkXG4gIHBsYXllcklkPzogUGxheWVySWRcbn1cblxuZXhwb3J0IGNvbnN0IGdldFVybEluZm8gPSAoKTogT3B0aW9uPFVybEluZm8+ID0+IHtcbiAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gIGlmIChoYXNoID09PSAnJykge1xuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IHBhdGggPSBoYXNoLnN1YnN0cigxKVxuICBjb25zdCBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy8nKVxuICBjb25zdCBnYW1lSWQgPSBzZWdtZW50c1swXVxuICBjb25zdCBwbGF5ZXJJZCA9IHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBOdW1iZXIucGFyc2VJbnQoc2VnbWVudHNbMV0pIDogdW5kZWZpbmVkXG4gIHJldHVybiB7IGdhbWVJZCwgcGxheWVySWQgfVxufVxuXG5leHBvcnQgY29uc3Qgc2V0VXJsSW5mbyA9ICh1cmxJbmZvOiBVcmxJbmZvKTogdm9pZCA9PiB7XG4gIGxldCBoYXNoID0gdXJsSW5mby5nYW1lSWRcbiAgaWYgKHVybEluZm8ucGxheWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgIGhhc2ggKz0gJy8nICsgdXJsSW5mby5wbGF5ZXJJZFxuICB9XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaFxufVxuIiwiaW1wb3J0IENvbG9yID0gUGhhc2VyLkRpc3BsYXkuQ29sb3JcblxuZXhwb3J0IHR5cGUgQ29sb3VyU3RyaW5nID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb2xvdXJOdW1iZXIgPSBudW1iZXJcblxuZXhwb3J0IGNvbnN0IGNvbG91ck51bWJlciA9IChjb2xvdXJTdHJpbmc6IENvbG91clN0cmluZyk6IENvbG91ck51bWJlciA9PiBDb2xvci5IZXhTdHJpbmdUb0NvbG9yKGNvbG91clN0cmluZykuY29sb3JcblxuZXhwb3J0IGNvbnN0IEhFQUxUSF9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRU1QVFlfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZmZmJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRlVMTF9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM0ZGYwMzcnKVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyMwMDAwMDAnKVxuZXhwb3J0IGNvbnN0IEhPVkVSX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjY2NmZmJlJylcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZkMDgnKVxuZXhwb3J0IGNvbnN0IFRBUkdFVEFCTEVfVElMRV9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjOWRmMWU3JylcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9URVhUX0NPTE9VUiA9ICcjY2NjYzAwJ1xuZXhwb3J0IGNvbnN0IEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiA9ICcjZmZmZjAwJ1xuXG5leHBvcnQgY29uc3QgUExBWUVSX1RJTlRTID0gW1xuICAnI2ZmYmJiYicsXG4gICcjYmJiYmZmJyxcbiAgJyNiYmZmYmInLFxuICAnI2JiZmZmZicsXG4gICcjZmZmZmJiJyxcbiAgJyNmZmJiZmYnLFxuICAnI2ZmZmZmZicsXG4gICcjYmJiYmJiJyxcbl0ubWFwKGNvbG91ck51bWJlcilcbiIsImltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEF0dGFja1R5cGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgY2FuQXR0YWNrT2NjdXIgfSBmcm9tICcuLi9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY2xhc3MgQ29tYmluZWRTdGF0ZSB7XG4gIHByb3RlY3RlZCByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByb3RlY3RlZCByZWFkb25seSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gIH1cblxuICBwdWJsaWMgZmluZFNlbGVjdGVkVW5pdCA9ICgpOiBPcHRpb248VW5pdD4gPT5cbiAgICB0aGlzLnNlbGVjdGVkSGV4ID8gdGhpcy5maW5kVW5pdEluTG9jYXRpb24odGhpcy5zZWxlY3RlZEhleCkgOiB1bmRlZmluZWRcblxuICBwdWJsaWMgZ2V0IHNlbGVjdGVkSGV4KCk6IE9wdGlvbjxIZXg+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICB9XG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIHVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT09IHRoaXMucGxheWVySWQgJiYgdW5pdC5oYXNVbnNwZW50QWN0aW9uUG9pbnRzICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09PSB0aGlzLnBsYXllcklkICYmIHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDYW5Nb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgaGV4OiBIZXgpOiBib29sZWFuID0+XG4gICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkgJiZcbiAgICBoZXguaXNBZGphY2VudFRvKHVuaXQubG9jYXRpb24pICYmXG4gICAgdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkgJiZcbiAgICAhdGhpcy53b3JsZFN0YXRlLm1hcC5pc01vdW50YWluKGhleCkgJiZcbiAgICAhdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHRoZSB1bml0IGluIHRoZSBoZXggdG8gYXR0YWNrLCBpZiBhbiBhdHRhY2sgaXMgcG9zc2libGUsIGVsc2UgdW5kZWZpbmVkLlxuICAgKi9cbiAgcHVibGljIHVuaXRDYW5BdHRhY2tIZXggPSAodW5pdDogVW5pdCwgbG9jYXRpb246IEhleCwgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VW5pdCA9IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGxvY2F0aW9uKVxuICAgIGlmIChcbiAgICAgIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkgJiZcbiAgICAgIHRhcmdldFVuaXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGFyZ2V0VW5pdC5wbGF5ZXJJZCAhPT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAmJlxuICAgICAgY2FuQXR0YWNrT2NjdXIoYXR0YWNrVHlwZSwgdW5pdC5sb2NhdGlvbiwgbG9jYXRpb24pXG4gICAgKVxuICAgICAgcmV0dXJuIHRhcmdldFVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cyA9ICh1bml0SWQ/OiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT4ge1xuICAgIGNvbnN0IGNhbmRpZGF0ZVVuaXRzID0gUi5zb3J0QnkoXG4gICAgICAodW5pdCkgPT4gdW5pdC5pZCxcbiAgICAgIHRoaXMud29ybGRTdGF0ZS5nZXRVbml0c0ZvclBsYXllcih0aGlzLnBsYXllcklkKS5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cyksXG4gICAgKVxuICAgIGlmICh1bml0SWQpXG4gICAgICByZXR1cm4gKFxuICAgICAgICBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkID4gdW5pdElkKSkgPz9cbiAgICAgICAgUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCA8IHVuaXRJZCkpXG4gICAgICApXG4gICAgZWxzZSByZXR1cm4gUi5oZWFkKGNhbmRpZGF0ZVVuaXRzKVxuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGxheWVyIHdpdGggaWQgJHt0aGlzLnBsYXllcklkfWBcbiAgICByZXR1cm4gcGxheWVyXG4gIH1cbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuXG5leHBvcnQgY29uc3QgY2VudGVyUG9pbnQgPSAoaGV4OiBIZXgpOiBQb2ludCA9PiAoe1xuICB4OiBoZXgueCAqIE1hdGguc3FydCgzKSArIChoZXgueSAqIE1hdGguc3FydCgzKSkgLyAyLFxuICB5OiAoaGV4LnkgKiAzKSAvIDIsXG59KVxuXG5leHBvcnQgY29uc3QgZnJvbVBvaW50ID0gKHBvaW50OiBQb2ludCk6IEhleCA9PiB7XG4gIGNvbnN0IHggPSAocG9pbnQueCAqIE1hdGguc3FydCgzKSkgLyAzIC0gcG9pbnQueSAvIDNcbiAgY29uc3QgeSA9ICgyICogcG9pbnQueSkgLyAzXG4gIHJldHVybiByb3VuZChuZXcgSGV4KHgsIHkpKVxufVxuXG5jb25zdCByb3VuZCA9IChoZXg6IEhleCk6IEhleCA9PiB7XG4gIGNvbnN0IHJ4ID0gTWF0aC5yb3VuZChoZXgueClcbiAgY29uc3QgcnkgPSBNYXRoLnJvdW5kKGhleC55KVxuICBjb25zdCByeiA9IE1hdGgucm91bmQoaGV4LnopXG5cbiAgY29uc3QgeERpZmYgPSBNYXRoLmFicyhyeCAtIGhleC54KVxuICBjb25zdCB5RGlmZiA9IE1hdGguYWJzKHJ5IC0gaGV4LnkpXG4gIGNvbnN0IHpEaWZmID0gTWF0aC5hYnMocnogLSBoZXgueSlcblxuICBpZiAoeERpZmYgPiB5RGlmZiAmJiB4RGlmZiA+IHpEaWZmKSByZXR1cm4gbmV3IEhleCgtcnkgLSByeiwgcnkpXG4gIGVsc2UgaWYgKHlEaWZmID4gekRpZmYpIHJldHVybiBuZXcgSGV4KHJ4LCAtcnggLSByeilcbiAgZWxzZSByZXR1cm4gbmV3IEhleChyeCwgcnkpXG59XG5cbmNvbnN0IGhleEFuZ2xlID0gTWF0aC5QSSAvIDNcbmNvbnN0IGhleE9mZnNldCA9IE1hdGguUEkgLyA2XG5cbmNvbnN0IGhleENvcm5lciA9IChjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIsIGk6IG51bWJlcik6IFBvaW50ID0+IHtcbiAgY29uc3QgYW5nbGVSYWRpYW5zID0gaGV4QW5nbGUgKiBpIC0gaGV4T2Zmc2V0XG4gIGNvbnN0IHggPSBjZW50ZXIueCArIHNpemUgKiBNYXRoLmNvcyhhbmdsZVJhZGlhbnMpXG4gIGNvbnN0IHkgPSBjZW50ZXIueSArIHNpemUgKiBNYXRoLnNpbihhbmdsZVJhZGlhbnMpXG4gIHJldHVybiB7IHgsIHkgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGhleENvcm5lcnMoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxQb2ludD4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHlpZWxkIGhleENvcm5lcihjZW50ZXIsIHNpemUsIGkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hcEhlaWdodCA9IChtYXA6IFdvcmxkTWFwKTogbnVtYmVyID0+IChtYXAuaGVpZ2h0ICogMykgLyAyXG5cbmV4cG9ydCBjb25zdCBoZXhXaWR0aCA9IChoZXhTaXplOiBudW1iZXIpOiBudW1iZXIgPT4gaGV4U2l6ZSAqIE1hdGguc3FydCgzKVxuIiwiaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290L2Jvb3Qtc2NlbmUnXG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51L21haW4tbWVudS1zY2VuZSdcbmltcG9ydCB7IExvYmJ5U2NlbmUgfSBmcm9tICcuL2xvYmJ5L2xvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBHYW1lU2NlbmUsIE1haW5NZW51U2NlbmUsIExvYmJ5U2NlbmVdXG4iLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgR0FNRV9TQ0VORV9LRVksIEdhbWVTY2VuZURhdGEgfSBmcm9tICcuLi9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgTG9iYnlEaXNwbGF5T2JqZWN0cyB9IGZyb20gJy4vbG9iYnktZGlzcGxheS1vYmplY3RzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3dvcmxkLXN0YXRlLW93bmVyJ1xuaW1wb3J0IHsgZmlyZUFuZEZvcmdldCB9IGZyb20gJy4uLy4uL3V0aWwvYXN5bmMtdXRpbCdcblxuZXhwb3J0IGNsYXNzIENyZWF0ZWRMb2JieVNjZW5lIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgcmVhZG9ubHkgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICBwcml2YXRlIHJlYWRvbmx5IGxvYmJ5RGlzcGxheU9iamVjdHM6IExvYmJ5RGlzcGxheU9iamVjdHNcbiAgcHJpdmF0ZSBsaXN0ZW5lcj86IFdvcmxkRXZlbnRMaXN0ZW5lclxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHNlcnZlck9yQ2xpZW50OiBTZXJ2ZXIgfCBDbGllbnQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnNlcnZlck9yQ2xpZW50ID0gc2VydmVyT3JDbGllbnRcbiAgICB0aGlzLnBsYXllcklkID0gc2VydmVyT3JDbGllbnQucGxheWVySWRcbiAgICB0aGlzLnNjZW5lLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLnNjZW5lLnNvdW5kLmFkZChBdWRpb0tleXMuQ0xJQ0spXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5hZGQoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMuc2NlbmUuc291bmQuYWRkKEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZKVxuICAgIHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cyA9IHRoaXMubWFrZUxvYmJ5RGlzcGxheU9iamVjdHMoc2NlbmUsIHRoaXMucGxheWVySWQpXG4gICAgaWYgKHNlcnZlck9yQ2xpZW50IGluc3RhbmNlb2YgQ2xpZW50KSB7XG4gICAgICB0aGlzLmFjdEFzQ2xpZW50KHNlcnZlck9yQ2xpZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdEFzU2VydmVyKHNlcnZlck9yQ2xpZW50KVxuICAgIH1cbiAgICB0aGlzLnN5bmMoKVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlTG9iYnlEaXNwbGF5T2JqZWN0cyA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCBwbGF5ZXJJZDogUGxheWVySWQpID0+XG4gICAgbmV3IExvYmJ5RGlzcGxheU9iamVjdHMoc2NlbmUsIHBsYXllcklkLCB0aGlzLmhhbmRsZVN0YXJ0R2FtZSwgdGhpcy5oYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lKVxuXG4gIHByaXZhdGUgYWN0QXNDbGllbnQgPSAoY2xpZW50OiBDbGllbnQpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVyID0gKGV2ZW50OiBXb3JsZEV2ZW50KSA9PiB0aGlzLmhhbmRsZVdvcmxkRXZlbnQoZXZlbnQsIGNsaWVudClcbiAgICBjbGllbnQuYWRkTGlzdGVuZXIodGhpcy5saXN0ZW5lcilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlV29ybGRFdmVudCA9IChldmVudDogV29ybGRFdmVudCwgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudCk6IHZvaWQgPT4ge1xuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcikge1xuICAgICAgICAgIHNlcnZlck9yQ2xpZW50LnJlbW92ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG4gICAgICAgICAgdGhpcy5saXN0ZW5lciA9IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF1bmNoR2FtZVNjZW5lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5QTEFZRVJfSk9JTkVEX0xPQkJZKVxuICAgICAgICB0aGlzLnN5bmMoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zeW5jKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxhdW5jaEdhbWVTY2VuZSA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzY2VuZURhdGE6IEdhbWVTY2VuZURhdGEgPSB7XG4gICAgICBzZXJ2ZXJPckNsaWVudDogdGhpcy5zZXJ2ZXJPckNsaWVudCxcbiAgICB9XG4gICAgdGhpcy5zY2VuZS5zY2VuZS5zdGFydChHQU1FX1NDRU5FX0tFWSwgc2NlbmVEYXRhKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lID0gKG5hbWU6IHN0cmluZyk6IHZvaWQgPT4gdGhpcy5kaXNwYXRjaEFjdGlvbih7IHR5cGU6ICdjaGFuZ2VQbGF5ZXJOYW1lJywgbmFtZSB9KVxuXG4gIHByaXZhdGUgZGlzcGF0Y2hBY3Rpb24gPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IHZvaWQgPT4ge1xuICAgIGZpcmVBbmRGb3JnZXQoKCkgPT4gdGhpcy5zZXJ2ZXJPckNsaWVudC5zZW5kQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbikpXG4gIH1cblxuICBwdWJsaWMgc3luYyA9ICgpOiB2b2lkID0+IHRoaXMubG9iYnlEaXNwbGF5T2JqZWN0cy5zeW5jKHRoaXMuc2VydmVyT3JDbGllbnQud29ybGRTdGF0ZSlcblxuICBwcml2YXRlIGFjdEFzU2VydmVyID0gKHNlcnZlcjogU2VydmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lciA9IChldmVudCkgPT4gdGhpcy5oYW5kbGVXb3JsZEV2ZW50KGV2ZW50LCBzZXJ2ZXIpXG4gICAgc2VydmVyLmFkZExpc3RlbmVyKHRoaXMubGlzdGVuZXIpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpID0+IHRoaXMuZGlzcGF0Y2hBY3Rpb24oeyB0eXBlOiAnc3RhcnRHYW1lJyB9KVxufVxuIiwiaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vLi4vdWkvbWVudS1idXR0b24nXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgQXVkaW9LZXlzLCBJbWFnZUtleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgUExBWUVSX1RJTlRTIH0gZnJvbSAnLi4vY29sb3VycydcblxuaW50ZXJmYWNlIFBsYXllck9iamVjdHMge1xuICBuYW1lVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgbGxhbWE6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcbn1cblxuZXhwb3J0IGNsYXNzIExvYmJ5RGlzcGxheU9iamVjdHMge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBvblN0YXJ0R2FtZTogVm9pZEZ1bmN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgb25DaGFuZ2VQbGF5ZXJOYW1lOiAobmFtZTogc3RyaW5nKSA9PiB2b2lkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJPYmplY3RzOiBNYXA8UGxheWVySWQsIFBsYXllck9iamVjdHM+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgcmVhZG9ubHkgaG9zdENyb3duOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBzdGFydEdhbWVCdXR0b24/OiBNZW51QnV0dG9uXG4gIHByaXZhdGUgcmVhZG9ubHkgd2FpdGluZ0Zvckhvc3RUZXh0PzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lLFxuICAgIHBsYXllcklkOiBQbGF5ZXJJZCxcbiAgICBvblN0YXJ0R2FtZTogVm9pZEZ1bmN0aW9uLFxuICAgIG9uQ2hhbmdlUGxheWVyTmFtZTogKG5hbWU6IHN0cmluZykgPT4gdm9pZCxcbiAgKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5vblN0YXJ0R2FtZSA9IG9uU3RhcnRHYW1lXG4gICAgdGhpcy5vbkNoYW5nZVBsYXllck5hbWUgPSBvbkNoYW5nZVBsYXllck5hbWVcbiAgICB0aGlzLnNjZW5lLmFkZC50ZXh0KDEwMCwgNTAsICdMbGFtYSBXYXJzJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpXG4gICAgaWYgKHBsYXllcklkID09PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgdGhpcy5zdGFydEdhbWVCdXR0b24gPSBuZXcgTWVudUJ1dHRvbih0aGlzLnNjZW5lLCAxMDAsIDAsICdTdGFydCBHYW1lJywgdGhpcy5oYW5kbGVTdGFydEdhbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2FpdGluZ0Zvckhvc3RUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dCgxMDAsIDAsICdXYWl0aW5nIGZvciBob3N0IHRvIHN0YXJ0IHRoZSBnYW1lLi4uJylcbiAgICB9XG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnbGxhbWEtd2FsaycsXG4gICAgICBmcmFtZXM6IFtcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8xIH0gYXMgYW55LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzIgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8zIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfNCB9LFxuICAgICAgXSxcbiAgICAgIGZyYW1lUmF0ZTogOCxcbiAgICAgIHJlcGVhdDogLTEsXG4gICAgfSlcbiAgICB0aGlzLmhvc3RDcm93biA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDMzMCwgMCwgJ2Nyb3duJykuc2V0U2NhbGUoMC42KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEdhbWUgPSAoKSA9PiB7XG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICB0aGlzLm9uU3RhcnRHYW1lKClcbiAgfVxuXG4gIHB1YmxpYyBzeW5jID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLmNyZWF0ZUFuZERlc3Ryb3lQbGF5ZXJPYmplY3RzKHdvcmxkU3RhdGUpXG4gICAgbGV0IHkgPSAxMDBcbiAgICBjb25zdCBzb3J0ZWRQbGF5ZXJzID0gd29ybGRTdGF0ZS5nZXRTb3J0ZWRQbGF5ZXJzKClcbiAgICBmb3IgKGNvbnN0IHBsYXllciBvZiBzb3J0ZWRQbGF5ZXJzKSB7XG4gICAgICBpZiAocGxheWVyLmlkID09PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgICB0aGlzLmhvc3RDcm93bi5zZXRZKHkgKyA1KVxuICAgICAgfVxuICAgICAgY29uc3QgeyBuYW1lVGV4dCwgbGxhbWEgfSA9IHRoaXMuZ2V0UGxheWVyT2JqZWN0cyhwbGF5ZXIuaWQpXG4gICAgICBuYW1lVGV4dC5zZXRUZXh0KHBsYXllci5uYW1lKS5zZXRZKHkpXG4gICAgICBsbGFtYS5zZXRZKHkgKyAxMClcbiAgICAgIHkgKz0gNTBcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhcnRHYW1lQnV0dG9uKSB7XG4gICAgICB0aGlzLnN0YXJ0R2FtZUJ1dHRvbi5zZXRZKHkpXG4gICAgfVxuICAgIGlmICh0aGlzLndhaXRpbmdGb3JIb3N0VGV4dCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9ySG9zdFRleHQuc2V0WSh5KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyT2JqZWN0cyA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBQbGF5ZXJPYmplY3RzID0+IHtcbiAgICBjb25zdCBwbGF5ZXJPYmplY3RzID0gdGhpcy5wbGF5ZXJPYmplY3RzLmdldChwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllck9iamVjdHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gcGxheWVyIG9iamVjdHMgZm91bmQgZm9yICR7cGxheWVySWR9YClcbiAgICB9XG4gICAgcmV0dXJuIHBsYXllck9iamVjdHNcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQW5kRGVzdHJveVBsYXllck9iamVjdHMgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJlcXVpcmVkUGxheWVySWRzID0gd29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IGN1cnJlbnRQbGF5ZXJJZHMgPSBBcnJheS5mcm9tKHRoaXMucGxheWVyT2JqZWN0cy5rZXlzKCkpXG5cbiAgICBjb25zdCBzdXJwbHVzUGxheWVySWRzID0gUi5kaWZmZXJlbmNlKGN1cnJlbnRQbGF5ZXJJZHMsIHJlcXVpcmVkUGxheWVySWRzKVxuICAgIGZvciAoY29uc3QgcGxheWVySWQgb2Ygc3VycGx1c1BsYXllcklkcykge1xuICAgICAgY29uc3QgeyBuYW1lVGV4dCwgbGxhbWEgfSA9IHRoaXMuZ2V0UGxheWVyT2JqZWN0cyhwbGF5ZXJJZClcbiAgICAgIG5hbWVUZXh0LmRlc3Ryb3koKVxuICAgICAgbGxhbWEuZGVzdHJveSgpXG4gICAgICB0aGlzLnBsYXllck9iamVjdHMuZGVsZXRlKHBsYXllcklkKVxuICAgIH1cblxuICAgIGNvbnN0IG1pc3NpbmdQbGF5ZXJJZHMgPSBSLmRpZmZlcmVuY2UocmVxdWlyZWRQbGF5ZXJJZHMsIGN1cnJlbnRQbGF5ZXJJZHMpXG4gICAgZm9yIChjb25zdCBwbGF5ZXJJZCBvZiBtaXNzaW5nUGxheWVySWRzKSB7XG4gICAgICBjb25zdCBwbGF5ZXIgPSB3b3JsZFN0YXRlLmdldFBsYXllcihwbGF5ZXJJZClcbiAgICAgIHRoaXMuY3JlYXRlT2JqZWN0c0ZvclBsYXllcihwbGF5ZXIpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVPYmplY3RzRm9yUGxheWVyKHBsYXllcjogUGxheWVyKSB7XG4gICAgY29uc3QgbmFtZVRleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoMTAwLCAwLCBwbGF5ZXIubmFtZSwge1xuICAgICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICAgIGZpeGVkV2lkdGg6IDIwMCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwbGF5ZXIuaWQgPT09IHRoaXMucGxheWVySWQgPyAnIzMzMzMzMycgOiAnIzAwMDAwMCcsXG4gICAgICB9KVxuICAgICAgLnNldEZvbnRTaXplKDE4KVxuICAgICAgLnNldFBhZGRpbmcoMCwgMCwgMCwgMClcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5oYW5kbGVQbGF5ZXJUZXh0Q2xpY2socGxheWVyLCBuYW1lVGV4dCkpXG4gICAgY29uc3QgbGxhbWEgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnNwcml0ZSg3MCwgMCwgSW1hZ2VLZXlzLkxMQU1BX0VBVF8xKVxuICAgICAgLnNldFNjYWxlKDAuNilcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1twbGF5ZXIuaWQgLSAxXSlcbiAgICAgIC5wbGF5KCdsbGFtYS13YWxrJylcbiAgICBjb25zdCBwbGF5ZXJPYmplY3RzOiBQbGF5ZXJPYmplY3RzID0geyBuYW1lVGV4dCwgbGxhbWEgfVxuICAgIHRoaXMucGxheWVyT2JqZWN0cy5zZXQocGxheWVyLmlkLCBwbGF5ZXJPYmplY3RzKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJUZXh0Q2xpY2sgPSAocGxheWVyOiBQbGF5ZXIsIHBsYXllclRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0KTogdm9pZCA9PiB7XG4gICAgaWYgKHBsYXllci5pZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5zY2VuZS5wbHVnaW5zLmdldCgncmV4VGV4dEVkaXQnKSBhcyBhbnlcbiAgICAgIHBsdWdpbi5lZGl0KHBsYXllclRleHQsIHtcbiAgICAgICAgb25DbG9zZTogKCkgPT4gdGhpcy5vbkNoYW5nZVBsYXllck5hbWUocGxheWVyVGV4dC50ZXh0KSxcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY2xpZW50J1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IENyZWF0ZWRMb2JieVNjZW5lIH0gZnJvbSAnLi9jcmVhdGVkLWxvYmJ5LXNjZW5lJ1xuXG5leHBvcnQgY29uc3QgTE9CQllfU0NFTkVfS0VZID0gJ0xvYmJ5J1xuXG5leHBvcnQgaW50ZXJmYWNlIExvYmJ5U2NlbmVEYXRhIHtcbiAgc2VydmVyT3JDbGllbnQ6IFNlcnZlciB8IENsaWVudFxufVxuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogTE9CQllfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgTG9iYnlTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9IChzY2VuZURhdGE6IExvYmJ5U2NlbmVEYXRhKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBzZXJ2ZXJPckNsaWVudCB9ID0gc2NlbmVEYXRhXG4gICAgbmV3IENyZWF0ZWRMb2JieVNjZW5lKHRoaXMsIHNlcnZlck9yQ2xpZW50KVxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tYWluLWdhbWUvbW9kZSdcbmltcG9ydCB7IE1heWJlLCBPcHRpb24sIHRvTWF5YmUsIHRvT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCB0eXBlIFNpZGViYXIgPSAnbG9nJyB8ICdwbGF5ZXJzJ1xuXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lU3RhdGUge1xuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbW9kZTogTW9kZVxuICByZWFkb25seSBzZWxlY3RlZEhleDogT3B0aW9uPEhleD5cbiAgcmVhZG9ubHkgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcjogbnVtYmVyXG4gIHJlYWRvbmx5IHNpZGViYXI6IFNpZGViYXJcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgcGxheWVySWQsXG4gICAgbW9kZSxcbiAgICBzZWxlY3RlZEhleCxcbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gMCxcbiAgICBzaWRlYmFyLFxuICB9OiB7XG4gICAgcGxheWVySWQ6IFBsYXllcklkXG4gICAgbW9kZTogTW9kZVxuICAgIHNlbGVjdGVkSGV4PzogT3B0aW9uPEhleD5cbiAgICBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogbnVtYmVyXG4gICAgc2lkZWJhcjogU2lkZWJhclxuICB9KSB7XG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5tb2RlID0gbW9kZVxuICAgIHRoaXMuc2VsZWN0ZWRIZXggPSBzZWxlY3RlZEhleFxuICAgIHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9IGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXJcbiAgICB0aGlzLnNpZGViYXIgPSBzaWRlYmFyXG4gICAgYXNzZXJ0KGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPj0gMClcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgbW9kZSA9IHRoaXMubW9kZSxcbiAgICBzZWxlY3RlZEhleCA9IHRvTWF5YmUodGhpcy5zZWxlY3RlZEhleCksXG4gICAgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlciA9IHRoaXMuYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcixcbiAgICBzaWRlYmFyID0gdGhpcy5zaWRlYmFyLFxuICB9OiB7XG4gICAgcGxheWVySWQ/OiBQbGF5ZXJJZFxuICAgIG1vZGU/OiBNb2RlXG4gICAgc2VsZWN0ZWRIZXg/OiBNYXliZTxIZXg+XG4gICAgYWN0aW9uc091dHN0YW5kaW5nV2l0aFNlcnZlcj86IG51bWJlclxuICAgIHNpZGViYXI/OiBTaWRlYmFyXG4gIH0gPSB7fSk6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgbmV3IExvY2FsR2FtZVN0YXRlKHsgcGxheWVySWQsIG1vZGUsIHNlbGVjdGVkSGV4OiB0b09wdGlvbihzZWxlY3RlZEhleCksIGFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIsIHNpZGViYXIgfSlcblxuICBwdWJsaWMgZGVzZWxlY3QgPSAoKTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5zZXRTZWxlY3RlZEhleCh1bmRlZmluZWQpXG5cbiAgcHVibGljIHNldFNlbGVjdGVkSGV4ID0gKHNlbGVjdGVkSGV4OiBPcHRpb248SGV4Pik6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IHNlbGVjdGVkSGV4OiB0b01heWJlKHNlbGVjdGVkSGV4KSB9KVxuXG4gIHB1YmxpYyBzZXRNb2RlID0gKG1vZGU6IE1vZGUpOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLmNvcHkoeyBtb2RlIH0pXG5cbiAgcHVibGljIGluY3JlbWVudEFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSAoKTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyOiB0aGlzLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgKyAxIH0pXG5cbiAgcHVibGljIGRlY3JlbWVudEFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSAoKTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyBhY3Rpb25zT3V0c3RhbmRpbmdXaXRoU2VydmVyOiB0aGlzLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgLSAxIH0pXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUgPSBuZXcgTG9jYWxHYW1lU3RhdGUoe1xuICBwbGF5ZXJJZDogMSxcbiAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICBzaWRlYmFyOiAnbG9nJyxcbn0pXG4iLCJpbXBvcnQgeyBNYXBEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi9tYXAtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBVbml0SWQgfSBmcm9tICcuLi8uLi93b3JsZC91bml0J1xuaW1wb3J0IHsgVW5pdERpc3BsYXlPYmplY3QgfSBmcm9tICcuL3VuaXQtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsIFRleHRzRGlzcGxheU9iamVjdCB9IGZyb20gJy4vdGV4dHMtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IEF1ZGlvS2V5cywgSW1hZ2VLZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IHJhbmRvbUVsZW1lbnQgfSBmcm9tICcuLi8uLi91dGlsL3JhbmRvbS11dGlsJ1xuaW1wb3J0IHsgQXR0YWNrVHlwZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBmaXJlQW5kRm9yZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbC9hc3luYy11dGlsJ1xuXG5leHBvcnQgdHlwZSBBbmltYXRpb25TcGVlZCA9ICdub3JtYWwnIHwgJ3F1aWNrJ1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVBbmltYXRpb25TcGVjIHtcbiAgdHlwZTogJ21vdmUnXG4gIHVuaXRJZDogVW5pdElkXG4gIGZyb206IEhleFxuICB0bzogSGV4XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tYmF0QW5pbWF0aW9uU3BlYyB7XG4gIHR5cGU6ICdjb21iYXQnXG4gIGF0dGFja1R5cGU6IEF0dGFja1R5cGVcbiAgYXR0YWNrZXI6IHtcbiAgICB1bml0SWQ6IFVuaXRJZFxuICAgIGxvY2F0aW9uOiBIZXhcbiAgICBkYW1hZ2U6IG51bWJlclxuICAgIGtpbGxlZDogYm9vbGVhblxuICB9XG4gIGRlZmVuZGVyOiB7XG4gICAgdW5pdElkOiBVbml0SWRcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgZGFtYWdlOiBudW1iZXJcbiAgICBraWxsZWQ6IGJvb2xlYW5cbiAgfVxufVxuXG5leHBvcnQgdHlwZSBBbmltYXRpb25TcGVjID0gTW92ZUFuaW1hdGlvblNwZWMgfCBDb21iYXRBbmltYXRpb25TcGVjXG5cbmV4cG9ydCBjbGFzcyBEaXNwbGF5T2JqZWN0cyB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHJlYWRvbmx5IG1hcERpc3BsYXlPYmplY3Q6IE1hcERpc3BsYXlPYmplY3RcbiAgcHJpdmF0ZSByZWFkb25seSB1bml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGFuaW1hdGVkVW5pdERpc3BsYXlPYmplY3RzOiBNYXA8VW5pdElkLCBVbml0RGlzcGxheU9iamVjdD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSB0ZXh0c0Rpc3BsYXlPYmplY3Q6IFRleHRzRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyXG4gIHByaXZhdGUgaXNBbmltYXRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSBhbmltYXRpb25zOiBBbmltYXRpb25TcGVjW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmUsXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IGxvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdCA9IG5ldyBNYXBEaXNwbGF5T2JqZWN0KHNjZW5lLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3QgPSBuZXcgVGV4dHNEaXNwbGF5T2JqZWN0KFxuICAgICAgc2NlbmUsXG4gICAgICB0aGlzLndvcmxkU3RhdGUsXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlLFxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICAgKVxuICAgIHRoaXMuc2NlbmUuYW5pbXMuY3JlYXRlKHtcbiAgICAgIGtleTogJ2xsYW1hLXdhbGsnLFxuICAgICAgZnJhbWVzOiBbXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfMSB9IGFzIGFueSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV8yIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfMyB9LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BXzQgfSxcbiAgICAgIF0sXG4gICAgICBmcmFtZVJhdGU6IDgsXG4gICAgICByZXBlYXQ6IC0xLFxuICAgIH0pXG4gICAgdGhpcy5zY2VuZS5hbmltcy5jcmVhdGUoe1xuICAgICAga2V5OiAnbGxhbWEtZWF0JyxcbiAgICAgIGZyYW1lczogW1xuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BX0VBVF8xIH0gYXMgYW55LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BX0VBVF8yIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzMgfSxcbiAgICAgICAgeyBrZXk6IEltYWdlS2V5cy5MTEFNQV9FQVRfNCB9LFxuICAgICAgICB7IGtleTogSW1hZ2VLZXlzLkxMQU1BX0VBVF8zIH0sXG4gICAgICAgIHsga2V5OiBJbWFnZUtleXMuTExBTUFfRUFUXzQgfSxcbiAgICAgIF0sXG4gICAgICBmcmFtZVJhdGU6IDQsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgIH0pXG4gICAgdGhpcy5zY2hlZHVsZUVhdGluZ0FuaW1hdGlvbigpXG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlRWF0aW5nQW5pbWF0aW9uID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHRpbWVzID0gWzQwMDAsIDUwMDAsIDcwMDBdXG4gICAgY29uc3QgZGVsYXkgPSByYW5kb21FbGVtZW50KHRpbWVzKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgdW5pdERpc3BsYXlPYmplY3RzID0gQXJyYXkuZnJvbSh0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy52YWx1ZXMoKSlcbiAgICAgIGlmICh1bml0RGlzcGxheU9iamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCByYW5kb21Vbml0ID0gcmFuZG9tRWxlbWVudCh1bml0RGlzcGxheU9iamVjdHMpXG4gICAgICAgIGZpcmVBbmRGb3JnZXQoKCkgPT4gcmFuZG9tVW5pdC5ydW5FYXRBbmltYXRpb24oKSlcbiAgICAgIH1cbiAgICAgIHRoaXMuc2NoZWR1bGVFYXRpbmdBbmltYXRpb24oKVxuICAgIH0sIGRlbGF5KVxuICB9XG5cbiAgcHVibGljIGhhbmRsZVBvaW50ZXJNb3ZlID0gKHBvaW50OiBQb2ludCk6IHZvaWQgPT4gdGhpcy5tYXBEaXNwbGF5T2JqZWN0Py5oYW5kbGVQb2ludGVyTW92ZShwb2ludClcblxuICBwdWJsaWMgaGFzQ2xpY2tIYW5kbGVyRm9yID0gKHBvaW50OiBQb2ludCk6IGJvb2xlYW4gPT4gdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3QuaGFzQ2xpY2tIYW5kbGVyRm9yKHBvaW50KVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgYW5pbWF0aW9uOiBPcHRpb248QW5pbWF0aW9uU3BlYz4sXG4gICk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3Q/LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3Q/LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG5cbiAgICBpZiAoYW5pbWF0aW9uKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbnMgPSBSLmFwcGVuZChhbmltYXRpb24pKHRoaXMuYW5pbWF0aW9ucylcbiAgICAgIHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKS5mb3JFYWNoKHRoaXMubWFuYWdlVW5pdEFzQmVpbmdBbmltYXRlZClcbiAgICAgIHRoaXMudHJpZ2dlckFuaW1hdGlvbnMoKVxuICAgIH1cblxuICAgIHRoaXMuc3luY1VuaXRzKClcbiAgfVxuXG4gIHByaXZhdGUgc3luY1VuaXRzID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMucmVtb3ZlVW5pdERpc3BsYXlPYmplY3RzTm9Mb25nZXJOZWVkZWQoKVxuICAgIGNvbnN0IHVuaXRzVG9TeW5jID0gdGhpcy53b3JsZFN0YXRlLnVuaXRzLmZpbHRlcigodW5pdCkgPT4gIXRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuaGFzKHVuaXQuaWQpKVxuICAgIGZvciAoY29uc3QgdW5pdCBvZiB1bml0c1RvU3luYykge1xuICAgICAgbGV0IHVuaXREaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXQuaWQpXG4gICAgICBpZiAoIXVuaXREaXNwbGF5T2JqZWN0KSB7XG4gICAgICAgIHVuaXREaXNwbGF5T2JqZWN0ID0gbmV3IFVuaXREaXNwbGF5T2JqZWN0KHRoaXMuc2NlbmUsIHVuaXQpXG4gICAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0LmlkLCB1bml0RGlzcGxheU9iamVjdClcbiAgICAgIH1cbiAgICAgIHVuaXREaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlVW5pdERpc3BsYXlPYmplY3RzTm9Mb25nZXJOZWVkZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3VycGx1c1VuaXRJZHMgPSBSLmRpZmZlcmVuY2UoXG4gICAgICBBcnJheS5mcm9tKHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmtleXMoKSksXG4gICAgICB0aGlzLndvcmxkU3RhdGUudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LmlkKSxcbiAgICApXG4gICAgZm9yIChjb25zdCB1bml0SWQgb2Ygc3VycGx1c1VuaXRJZHMpIHtcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpPy5kZXN0cm95KClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmlnZ2VyQW5pbWF0aW9ucyA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5pc0FuaW1hdGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvY2Vzc0FuaW1hdGlvbnMoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VxdWVuY2VBbmltYXRpb25zID0gKCk6IHtcbiAgICBhbmltYXRpb25zVG9QZXJmb3JtTm93OiBBbmltYXRpb25TcGVjW11cbiAgICBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXI6IEFuaW1hdGlvblNwZWNbXVxuICB9ID0+IHtcbiAgICBjb25zdCB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zID0gbmV3IFNldDxVbml0SWQ+KClcbiAgICBjb25zdCBhbmltYXRpb25zVG9QZXJmb3JtTm93ID0gW11cbiAgICBjb25zdCBhbmltYXRpb25zVG9QZXJmb3JtTGF0ZXIgPSBbXVxuICAgIGZvciAoY29uc3QgYW5pbWF0aW9uIG9mIHRoaXMuYW5pbWF0aW9ucykge1xuICAgICAgY29uc3QgdW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24gPSB0aGlzLmdldFVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKGFuaW1hdGlvbilcbiAgICAgIGNvbnN0IGFmZmVjdGVkQnlFYXJsaWVyQW5pbWF0aW9ucyA9IFIuYW55KFxuICAgICAgICAodW5pdElkKSA9PiB1bml0SWRzSW52b2x2ZWRJbkVhcmxpZXJBbmltYXRpb25zLmhhcyh1bml0SWQpLFxuICAgICAgICB1bml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbixcbiAgICAgIClcbiAgICAgIGlmIChhZmZlY3RlZEJ5RWFybGllckFuaW1hdGlvbnMpIHtcbiAgICAgICAgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyLnB1c2goYW5pbWF0aW9uKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdy5wdXNoKGFuaW1hdGlvbilcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgdW5pdElkIG9mIHVuaXRJZHNJbnZvbHZlZEluQW5pbWF0aW9uKSB7XG4gICAgICAgIHVuaXRJZHNJbnZvbHZlZEluRWFybGllckFuaW1hdGlvbnMuYWRkKHVuaXRJZClcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdywgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0FuaW1hdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdGhpcy5pc0FuaW1hdGluZyA9IHRydWVcbiAgICB0cnkge1xuICAgICAgd2hpbGUgKHRoaXMuYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHsgYW5pbWF0aW9uc1RvUGVyZm9ybU5vdywgYW5pbWF0aW9uc1RvUGVyZm9ybUxhdGVyIH0gPSB0aGlzLnNlcXVlbmNlQW5pbWF0aW9ucygpXG4gICAgICAgIHRoaXMuYW5pbWF0aW9ucyA9IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlclxuICAgICAgICBjb25zdCBzcGVlZCA9IGFuaW1hdGlvbnNUb1BlcmZvcm1MYXRlci5sZW5ndGggPT09IDAgPyAnbm9ybWFsJyA6ICdxdWljaydcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYW5pbWF0aW9uc1RvUGVyZm9ybU5vdy5tYXAoKGFuaW1hdGlvbikgPT4gdGhpcy5ydW5BbmltYXRpb24oYW5pbWF0aW9uLCBzcGVlZCkpKVxuICAgICAgICBmb3IgKGNvbnN0IGFuaW1hdGlvbiBvZiBhbmltYXRpb25zVG9QZXJmb3JtTm93KSB7XG4gICAgICAgICAgdGhpcy5yZWxlYXNlVW5pdHNGcm9tQmVpbmdBbmltYXRlZFdoZXJlTm9Mb25nZXJOZWVkZWQoYW5pbWF0aW9uKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVsZWFzZVVuaXRzRnJvbUJlaW5nQW5pbWF0ZWRXaGVyZU5vTG9uZ2VyTmVlZGVkID0gKGFuaW1hdGlvbjogQW5pbWF0aW9uU3BlYyk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXRJZHNJbkFuaW1hdGlvbiA9IHRoaXMuZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24oYW5pbWF0aW9uKVxuICAgIGNvbnN0IHVuaXRJZHNJblJlbWFpbmluZ0FuaW1hdGlvbnMgPSB0aGlzLmdldFVuaXRzSW52b2x2ZWRJbkFuaW1hdGlvbnMoKVxuICAgIGNvbnN0IHVuaXRJZHNUb1JlbGVhc2UgPSBSLmRpZmZlcmVuY2UodW5pdElkc0luQW5pbWF0aW9uLCB1bml0SWRzSW5SZW1haW5pbmdBbmltYXRpb25zKVxuICAgIHVuaXRJZHNUb1JlbGVhc2UuZm9yRWFjaCh0aGlzLnJlbGVhc2VVbml0RnJvbUJlaW5nQW5pbWF0ZWQpXG4gIH1cblxuICBwcml2YXRlIG1hbmFnZVVuaXRBc0JlaW5nQW5pbWF0ZWQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZClcbiAgICBpZiAoZGlzcGxheU9iamVjdCkge1xuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKHVuaXRJZClcbiAgICAgIHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXRJZCwgZGlzcGxheU9iamVjdClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbGVhc2VVbml0RnJvbUJlaW5nQW5pbWF0ZWQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBkaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmICghZGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke3VuaXRJZH1gXG4gICAgdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAodW5pdCkge1xuICAgICAgZGlzcGxheU9iamVjdC5zeW5jU2NlbmUodW5pdClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0SWQsIGRpc3BsYXlPYmplY3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlPYmplY3QuZGVzdHJveSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbml0c0ludm9sdmVkSW5BbmltYXRpb25zID0gKCk6IFVuaXRJZFtdID0+IFIuY2hhaW4odGhpcy5nZXRVbml0SWRzSW52b2x2ZWRJbkFuaW1hdGlvbiwgdGhpcy5hbmltYXRpb25zKVxuXG4gIHByaXZhdGUgZ2V0VW5pdElkc0ludm9sdmVkSW5BbmltYXRpb24gPSAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjKTogVW5pdElkW10gPT4ge1xuICAgIHN3aXRjaCAoYW5pbWF0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICByZXR1cm4gW2FuaW1hdGlvbi51bml0SWRdXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICByZXR1cm4gW2FuaW1hdGlvbi5hdHRhY2tlci51bml0SWQsIGFuaW1hdGlvbi5kZWZlbmRlci51bml0SWRdXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBydW5BbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBBbmltYXRpb25TcGVjLCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBzd2l0Y2ggKGFuaW1hdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5Nb3ZlQW5pbWF0aW9uKGFuaW1hdGlvbiwgc3BlZWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdjb21iYXQnOlxuICAgICAgICBhd2FpdCB0aGlzLnJ1bkNvbWJhdEFuaW1hdGlvbihhbmltYXRpb24sIHNwZWVkKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFuaW1hdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJ1bk1vdmVBbmltYXRpb24gPSBhc3luYyAoYW5pbWF0aW9uOiBNb3ZlQW5pbWF0aW9uU3BlYywgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGFuaW1hdGlvbi51bml0SWQpXG4gICAgaWYgKCFkaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7YW5pbWF0aW9uLnVuaXRJZH1gXG4gICAgdGhpcy5zY2VuZS5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5XQUxLKVxuICAgIGF3YWl0IGRpc3BsYXlPYmplY3QucnVuTW92ZUFuaW1hdGlvbihhbmltYXRpb24uZnJvbSwgYW5pbWF0aW9uLnRvLCBzcGVlZClcbiAgfVxuXG4gIHByaXZhdGUgcnVuQ29tYmF0QW5pbWF0aW9uID0gYXN5bmMgKGFuaW1hdGlvbjogQ29tYmF0QW5pbWF0aW9uU3BlYywgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGFuaW1hdGlvblxuICAgIGNvbnN0IGF0dGFja2VyRGlzcGxheU9iamVjdCA9IHRoaXMuYW5pbWF0ZWRVbml0RGlzcGxheU9iamVjdHMuZ2V0KGF0dGFja2VyLnVuaXRJZClcbiAgICBpZiAoIWF0dGFja2VyRGlzcGxheU9iamVjdCkgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBkaXNwbGF5IG9iamVjdCBmb3IgdW5pdCAke2F0dGFja2VyLnVuaXRJZH1gXG4gICAgY29uc3QgZGVmZW5kZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5hbmltYXRlZFVuaXREaXNwbGF5T2JqZWN0cy5nZXQoZGVmZW5kZXIudW5pdElkKVxuICAgIGlmICghZGVmZW5kZXJEaXNwbGF5T2JqZWN0KSB0aHJvdyBgVW5leHBlY3RlZCBtaXNzaW5nIGRpc3BsYXkgb2JqZWN0IGZvciB1bml0ICR7ZGVmZW5kZXIudW5pdElkfWBcbiAgICBpZiAoYW5pbWF0aW9uLmF0dGFja1R5cGUgPT09ICdtZWxlZScpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShyYW5kb21FbGVtZW50KFtBdWRpb0tleXMuQVRUQUNLXzEsIEF1ZGlvS2V5cy5BVFRBQ0tfMiwgQXVkaW9LZXlzLkFUVEFDS18zXSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuU1BJVClcbiAgICB9XG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCB8fCBkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuREVBVEgpXG4gICAgfVxuICAgIGNvbnN0IHNpbXVsdGFuZW91c0FuaW1hdGlvbnM6IFByb21pc2U8dm9pZD5bXSA9IFtdXG4gICAgaWYgKGFuaW1hdGlvbi5hdHRhY2tUeXBlID09PSAnbWVsZWUnKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkF0dGFja0FuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24sIHNwZWVkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2ltdWx0YW5lb3VzQW5pbWF0aW9ucy5wdXNoKGF0dGFja2VyRGlzcGxheU9iamVjdC5ydW5TcGl0QW5pbWF0aW9uKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbiwgc3BlZWQpKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgICBzaW11bHRhbmVvdXNBbmltYXRpb25zLnB1c2goYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkRlYXRoQW5pbWF0aW9uKHNwZWVkKSlcbiAgICB9XG4gICAgaWYgKGRlZmVuZGVyLmtpbGxlZCkge1xuICAgICAgc2ltdWx0YW5lb3VzQW5pbWF0aW9ucy5wdXNoKGRlZmVuZGVyRGlzcGxheU9iamVjdC5ydW5EZWF0aEFuaW1hdGlvbihzcGVlZCkpXG4gICAgfVxuICAgIGF3YWl0IFByb21pc2UuYWxsKHNpbXVsdGFuZW91c0FuaW1hdGlvbnMpXG4gICAgaWYgKGF0dGFja2VyLmRhbWFnZSA+IDApIHtcbiAgICAgIGZpcmVBbmRGb3JnZXQoKCkgPT4gYXR0YWNrZXJEaXNwbGF5T2JqZWN0LnJ1bkRhbWFnZUFuaW1hdGlvbihhdHRhY2tlci5sb2NhdGlvbiwgYXR0YWNrZXIuZGFtYWdlLCBzcGVlZCkpXG4gICAgfVxuICAgIGlmIChkZWZlbmRlci5kYW1hZ2UgPiAwKSB7XG4gICAgICBmaXJlQW5kRm9yZ2V0KCgpID0+IGRlZmVuZGVyRGlzcGxheU9iamVjdC5ydW5EYW1hZ2VBbmltYXRpb24oZGVmZW5kZXIubG9jYXRpb24sIGRlZmVuZGVyLmRhbWFnZSwgc3BlZWQpKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgYWRkUG9pbnRzLCBtdWx0aXBseVBvaW50LCBQb2ludCwgc3VidHJhY3RQb2ludHMgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uLy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IGNlbnRlclBvaW50LCBmcm9tUG9pbnQgfSBmcm9tICcuLi9oZXgtZ2VvbWV0cnknXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gIENvbWJhdFdvcmxkRXZlbnQsXG4gIEdhbWVPdmVyV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSwgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgQUxMX0FVRElPX0tFWVMsIEF1ZGlvS2V5cyB9IGZyb20gJy4uL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBtYXBUb0xvY2FsQWN0aW9uIH0gZnJvbSAnLi9rZXlib2FyZC1tYXBwZXInXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25Qcm9jZXNzb3IsIExvY2FsQWN0aW9uUmVzdWx0IH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENsaWVudCB9IGZyb20gJy4uLy4uL3NlcnZlci9jbGllbnQnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQW5pbWF0aW9uU3BlYywgRGlzcGxheU9iamVjdHMgfSBmcm9tICcuL2Rpc3BsYXktb2JqZWN0cydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IFBvaW50ZXIgPSBQaGFzZXIuSW5wdXQuUG9pbnRlclxuXG5leHBvcnQgY29uc3QgR0FNRV9TQ0VORV9LRVkgPSAnR2FtZSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6IEdBTUVfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTY2VuZURhdGEge1xuICBzZXJ2ZXJPckNsaWVudDogU2VydmVyIHwgQ2xpZW50XG59XG5cbmV4cG9ydCBjb25zdCBIRVhfU0laRSA9IDQ4XG5leHBvcnQgY29uc3QgRFJBV0lOR19PRkZTRVQgPSB7IHg6IDYwLCB5OiAxMDAgfVxuZXhwb3J0IGNvbnN0IGhleENlbnRlciA9IChoZXg6IEhleCk6IFBvaW50ID0+IGFkZFBvaW50cyhtdWx0aXBseVBvaW50KGNlbnRlclBvaW50KGhleCksIEhFWF9TSVpFKSwgRFJBV0lOR19PRkZTRVQpXG5cbmV4cG9ydCB0eXBlIEdhbWVJZCA9IHN0cmluZ1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSBjcmVhdGVkOiBib29sZWFuID0gZmFsc2VcbiAgcHJpdmF0ZSBzZXJ2ZXJPckNsaWVudD86IFNlcnZlciB8IENsaWVudFxuXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUgPSBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEVcblxuICBwcml2YXRlIGRpc3BsYXlPYmplY3RzPzogRGlzcGxheU9iamVjdHNcblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIC8vIENyZWF0ZVxuICAvLyAtLS0tLS1cblxuICBwdWJsaWMgY3JlYXRlID0gKHNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLmNyZWF0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignR2FtZSBzY2VuZSBoYXMgYWxyZWFkeSBiZWVuIGNyZWF0ZWQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyZWF0ZWQgPSB0cnVlXG4gICAgfVxuICAgIGNvbnN0IHsgc2VydmVyT3JDbGllbnQgfSA9IHNjZW5lRGF0YVxuICAgIHRoaXMuc2V0VXBTb3VuZCgpXG4gICAgdGhpcy53b3JsZFN0YXRlID0gc2VydmVyT3JDbGllbnQud29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUuY29weSh7IHBsYXllcklkOiBzZXJ2ZXJPckNsaWVudC5wbGF5ZXJJZCB9KVxuICAgIHRoaXMuc2VydmVyT3JDbGllbnQgPSBzZXJ2ZXJPckNsaWVudFxuICAgIHNlcnZlck9yQ2xpZW50LmFkZExpc3RlbmVyKHRoaXMuaGFuZGxlV29ybGRFdmVudClcblxuICAgIHRoaXMuZGlzcGxheU9iamVjdHMgPSBuZXcgRGlzcGxheU9iamVjdHModGhpcywgdGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlLCB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKVxuICAgIHRoaXMudXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKClcbiAgICB0aGlzLnNldFVwSW5wdXRzKClcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBTb3VuZCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICBBTExfQVVESU9fS0VZUy5mb3JFYWNoKChrZXkpID0+IHRoaXMuc291bmQuYWRkKGtleSkpXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKGFuaW1hdGlvbj86IEFuaW1hdGlvblNwZWMpOiB2b2lkID0+XG4gICAgdGhpcy5kaXNwbGF5T2JqZWN0cz8uc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSwgYW5pbWF0aW9uKVxuXG4gIC8vIE5ldHdvcmtpbmdcbiAgLy8gLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgYXN5bmNTZW5kVG9TZXJ2ZXIgPSBhc3luYyAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGlmICghdGhpcy5zZXJ2ZXJPckNsaWVudCkge1xuICAgICAgdGhyb3cgYFVuZXhwZWN0ZWQgbWlzc2luZyBzZXJ2ZXJPckNsaWVudGBcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zZXJ2ZXJPckNsaWVudC5zZW5kQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgfVxuXG4gIC8vIElucHV0IGhhbmRsZXJzXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBzZXRVcElucHV0cyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmlucHV0Lm1vdXNlLmRpc2FibGVDb250ZXh0TWVudSgpXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5KVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bilcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uID0gbWFwVG9Mb2NhbEFjdGlvbihldmVudCwgdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlKVxuICAgIGlmIChsb2NhbEFjdGlvbikge1xuICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbihsb2NhbEFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxvY2FsQWN0aW9uID0gKGxvY2FsQWN0aW9uOiBMb2NhbEFjdGlvbik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uUHJvY2Vzc29yID0gbmV3IExvY2FsQWN0aW9uUHJvY2Vzc29yKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbEFjdGlvblByb2Nlc3Nvci5wcm9jZXNzKGxvY2FsQWN0aW9uKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMuZW5hY3RMb2NhbEFjdGlvblJlc3VsdChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbmFjdExvY2FsQWN0aW9uUmVzdWx0ID0gKHJlc3VsdDogTG9jYWxBY3Rpb25SZXN1bHQpOiB2b2lkID0+IHtcbiAgICBpZiAocmVzdWx0Lm5ld0xvY2FsR2FtZVN0YXRlKSB7XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gcmVzdWx0Lm5ld0xvY2FsR2FtZVN0YXRlXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICAgIGlmIChyZXN1bHQud29ybGRBY3Rpb24pIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmluY3JlbWVudEFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIoKVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuXG4gICAgICB0aGlzLmFzeW5jU2VuZFRvU2VydmVyKHJlc3VsdC53b3JsZEFjdGlvbikuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlY3JlbWVudEFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIoKVxuICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnRlcjogUG9pbnRlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBvaW50ZXJQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIHRoaXMuZGlzcGxheU9iamVjdHM/LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlckRvd24gPSAocG9pbnRlcjogUG9pbnRlcik6IHZvaWQgPT4ge1xuICAgIC8vIElnbm9yZSBjbGlja3Mgb24gdGhlc2UgYXMgdGhleSBoYXZlIHRoZWlyIG93biBoYW5kbGVyc1xuICAgIGNvbnN0IHByZXNzZWRQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIGlmICh0aGlzLmRpc3BsYXlPYmplY3RzPy5oYXNDbGlja0hhbmRsZXJGb3IocHJlc3NlZFBvaW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGhleCA9IGZyb21Qb2ludChtdWx0aXBseVBvaW50KHN1YnRyYWN0UG9pbnRzKHByZXNzZWRQb2ludCwgRFJBV0lOR19PRkZTRVQpLCAxIC8gSEVYX1NJWkUpKVxuICAgIGlmIChwb2ludGVyLmJ1dHRvbiA9PT0gMikge1xuICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdnb0hleCcsIGhleCB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUxlZnRDbGljayhoZXgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRMb2NhbEFjdGlvbkZvckNsaWNraW5nQUhleCA9IChoZXg6IEhleCk6IExvY2FsQWN0aW9uID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdzZWxlY3RIZXgnLCBoZXggfVxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4geyB0eXBlOiAnY29tcGxldGVNb3ZlJywgdW5pdElkOiBtb2RlLnVuaXRJZCwgaGV4IH1cbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdjb21wbGV0ZUF0dGFjaycsIHVuaXRJZDogbW9kZS51bml0SWQsIGhleCwgYXR0YWNrVHlwZTogbW9kZS5hdHRhY2tUeXBlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxlZnRDbGljayA9IChoZXg6IEhleCk6IHZvaWQgPT4gdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih0aGlzLmdldExvY2FsQWN0aW9uRm9yQ2xpY2tpbmdBSGV4KGhleCkpXG5cbiAgLy8gSGFuZGxlIHdvcmxkIGV2ZW50c1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBuZXdXb3JsZFN0YXRlXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICdpbml0aWFsaXNlJzpcbiAgICAgIGNhc2UgJ3BsYXllckFkZGVkJzpcbiAgICAgIGNhc2UgJ3BsYXllckNoYW5nZWROYW1lJzpcbiAgICAgIGNhc2UgJ2dhbWVTdGFydGVkJzpcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3VuaXRNb3ZlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudChldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21iYXRXb3JsZEV2ZW50KGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckVuZGVkVHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwbGF5ZXJEZWZlYXRlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyRGVmZWF0ZWQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZ2FtZU92ZXInOlxuICAgICAgICB0aGlzLmhhbmRsZUdhbWVPdmVyKGV2ZW50KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbmV3VHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlTmV3VHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHYW1lT3ZlciA9IChldmVudDogR2FtZU92ZXJXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKGV2ZW50LnZpY3RvciA9PT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCkge1xuICAgICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5WSUNUT1JZX01VU0lDKVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllckVuZGVkVHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsYXllckRlZmVhdGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuUExBWUVSX0RFRkVBVEVEKVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3VHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMudXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKClcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQXNBdFN0YXJ0T2ZUdXJuKCkge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoVW5zcGVudEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICAgIC5jb3B5KHsgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9IH0pXG4gICAgICAuc2V0U2VsZWN0ZWRIZXgodW5pdFRvU2VsZWN0Py5sb2NhdGlvbilcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVuaXRNb3ZlZFdvcmxkRXZlbnQgPSAoZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBjb25zdCB3YXNQcmV2aW91c2x5U2VsZWN0ZWQgPVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCAmJlxuICAgICAgcHJldmlvdXNXb3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4KT8uaWQgPT09IHVuaXRJZFxuICAgIGlmICh3YXNQcmV2aW91c2x5U2VsZWN0ZWQgJiYgdW5pdC5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKHVuaXRJZCwgdG8pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9IH0pLnNldFNlbGVjdGVkSGV4KG5ld1NlbGVjdGVkSGV4KVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSh7IHR5cGU6ICdtb3ZlJywgdW5pdElkLCBmcm9tLCB0byB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayA9ICh1bml0SWQ6IFVuaXRJZCwgZGVmYXVsdExvY2F0aW9uOiBIZXgpOiBPcHRpb248SGV4PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIC8vIFJldGFpbiBzZWxlY3Rpb24gaWYgdW5pdCBzdGlsbCBleGlzdHMgYW5kIHdlIHN0aWxsIGhhdmUgYWN0aW9uIHBvaW50cywgZWxzZSBzZWxlY3QgbmV4dCB1bml0IChvciBub3RoaW5nIGlmIHRoZXJlIGlzbid0IG9uZSlcbiAgICBsZXQgbmV3U2VsZWN0ZWRIZXhcbiAgICBpZiAoIXVuaXQgfHwgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA9PT0gMCkge1xuICAgICAgY29uc3QgbmV4dFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHModW5pdElkKVxuICAgICAgbmV3U2VsZWN0ZWRIZXggPSBuZXh0VW5pdD8ubG9jYXRpb25cbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U2VsZWN0ZWRIZXggPSBkZWZhdWx0TG9jYXRpb25cbiAgICB9XG4gICAgcmV0dXJuIG5ld1NlbGVjdGVkSGV4XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbWJhdFdvcmxkRXZlbnQgPSAoZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQoYXR0YWNrZXIsIGRlZmVuZGVyLCBwcmV2aW91c1dvcmxkU3RhdGUpXG4gICAgdGhpcy5zeW5jU2NlbmUoe1xuICAgICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgICBhdHRhY2tUeXBlOiBldmVudC5hdHRhY2tUeXBlLFxuICAgICAgYXR0YWNrZXIsXG4gICAgICBkZWZlbmRlcixcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdCA9IChcbiAgICBhdHRhY2tlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICAgIGRlZmVuZGVyOiBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gICAgcHJldmlvdXNXb3JsZFN0YXRlOiBXb3JsZFN0YXRlLFxuICApID0+IHtcbiAgICBjb25zdCBwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgPSBuZXcgQ29tYmluZWRTdGF0ZShwcmV2aW91c1dvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpLmZpbmRTZWxlY3RlZFVuaXQoKT8uaWRcbiAgICBpZiAocHJldmlvdXNseVNlbGVjdGVkVW5pdElkID09PSBhdHRhY2tlci51bml0SWQgJiYgYXR0YWNrZXIucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayhhdHRhY2tlci51bml0SWQsIGF0dGFja2VyLmxvY2F0aW9uKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSB9KS5zZXRTZWxlY3RlZEhleChuZXdTZWxlY3RlZEhleClcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVzZWxlY3QgdW5pdCBraWxsZWQgYnkgYW5vdGhlciBwbGF5ZXJcbiAgICAgIGlmIChkZWZlbmRlci5raWxsZWQgJiYgZGVmZW5kZXIudW5pdElkID09PSBwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgJiYgZGVmZW5kZXIucGxheWVySWQgPT09IHRoaXMucGxheWVySWQpIHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSB9KS5kZXNlbGVjdCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG59XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi8uLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSkgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlck1vdmVNb2RlJyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ2EnOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PT0gJ3NlbGVjdEhleCcpIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnLCBhdHRhY2tUeXBlOiAnbWVsZWUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncyc6XG4gICAgICBpZiAobW9kZS50eXBlID09PSAnc2VsZWN0SGV4JykgcmV0dXJuIHsgdHlwZTogJ2VudGVyQXR0YWNrTW9kZScsIGF0dGFja1R5cGU6ICdzcGl0JyB9XG4gICAgICBicmVha1xuICB9XG59XG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSwgU2lkZWJhciB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tUeXBlLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uLy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4uL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleCwgYWN0aW9uLmF0dGFja1R5cGUpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NoYW5nZVNpZGViYXInOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDaGFuZ2VTaWRlYmFyKGFjdGlvbi5zaWRlYmFyKVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdE5leHRVbml0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aFVuc3BlbnRBY3Rpb25Qb2ludHMoc2VsZWN0ZWRVbml0Py5pZClcbiAgICBpZiAodW5pdFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGVcbiAgICAgICAgLnNldFNlbGVjdGVkSGV4KHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pXG4gICAgICAgIC5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiBuZXdMb2NhbEdhbWVTdGF0ZSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFib3J0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlc2VsZWN0KCkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleCkgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgsICdtZWxlZScpXG4gICAgICBpZiAodGFyZ2V0VW5pdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoJ21lbGVlJywgc2VsZWN0ZWRVbml0LCB0YXJnZXRVbml0KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNrSGV4ID0gKGF0dGFja1R5cGU6IEF0dGFja1R5cGUsIGF0dGFja2VyOiBVbml0LCBkZWZlbmRlcjogVW5pdCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgYXR0YWNrVHlwZSxcbiAgICAgIGF0dGFja2VyOiB7IHVuaXRJZDogYXR0YWNrZXIuaWQsIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbiB9LFxuICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uIH0sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicsIHR1cm46IHRoaXMud29ybGRTdGF0ZS50dXJuIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBpZiAodW5pdCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQsIGF0dGFja1R5cGUgfVxuICAgICAgY29uc3QgbmV3TG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9ICh1bml0SWQ6IFVuaXRJZCwgZGVzdGluYXRpb246IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbikpIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAoXG4gICAgdW5pdElkOiBVbml0SWQsXG4gICAgdGFyZ2V0SGV4OiBIZXgsXG4gICAgYXR0YWNrVHlwZTogQXR0YWNrVHlwZSxcbiAgKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCwgYXR0YWNrVHlwZSlcbiAgICBpZiAoZGVmZW5kZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tUeXBlLCBhdHRhY2tlciwgZGVmZW5kZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5kZXNlbGVjdCgpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmRlc2VsZWN0KCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNoYW5nZVNpZGViYXIgPSAoc2lkZWJhcjogU2lkZWJhcik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4gKHtcbiAgICBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2lkZWJhciB9KSxcbiAgfSlcbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgZnJvbVBvaW50LCBoZXhDb3JuZXJzIH0gZnJvbSAnLi4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgSE9WRVJfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUixcbiAgVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVIsXG59IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4uL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBDb21iaW5lZFN0YXRlIH0gZnJvbSAnLi4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCBQb2x5Z29uID0gUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb25cblxudHlwZSBUaWxlU3RhdGUgPSAnZGVmYXVsdCcgfCAnc2VsZWN0ZWQnIHwgJ3RhcmdldGFibGUnXG5cbmV4cG9ydCBjbGFzcyBNYXBEaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGhleFBvbHlnb25zOiBNYXA8c3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4gPSBuZXcgTWFwPHN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+KClcbiAgcHJpdmF0ZSBwcmV2aW91c0hvdmVySGV4PzogSGV4XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGZvciAoY29uc3QgaGV4IG9mIHRoaXMud29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSkge1xuICAgICAgdGhpcy5jcmVhdGVIZXgoaGV4KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSGV4ID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9seWdvbkNlbnRlciA9IGhleENlbnRlcihoZXgpXG4gICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9seWdvbkNlbnRlci54LCBwb2x5Z29uQ2VudGVyLnksICdncmFzcycpLnNldFNjYWxlKDAuNjUpLnNldERlcHRoKC01KVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzTW91bnRhaW4oaGV4KSkge1xuICAgICAgdGhpcy5zY2VuZS5hZGQuaW1hZ2UocG9seWdvbkNlbnRlci54LCBwb2x5Z29uQ2VudGVyLnksICdtb3VudGFpbicpLnNldERlcHRoKC01KVxuICAgIH1cbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKS5zZXRPcmlnaW4oMCwgMCkuc2V0RmlsbFN0eWxlKDB4MDAwMDAsIDApXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuc3luY1RpbGUoaGV4KVxuICAgIH1cbiAgfVxuXG4gIC8vIERlcHRoc1xuICAvLyAtNSAtIGltYWdlXG4gIC8vIC00IC0gZGVmYXVsdCBib3JkZXJcbiAgLy8gLTMgLSB0YXJnZXRhYmxlIGJvcmRlclxuICAvLyAtMiAtIHNlbGVjdGVkXG4gIC8vIC0xIC0gaG92ZXJcblxuICBwcml2YXRlIGdldERlcHRoID0gKHRpbGVTdGF0ZTogVGlsZVN0YXRlKTogbnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiAtNFxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiAtM1xuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gLTJcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNUaWxlID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdGlsZVN0YXRlID0gdGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KVxuICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldFN0cm9rZVN0eWxlKDMsIHRoaXMuZ2V0SGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpLnNldERlcHRoKHRoaXMuZ2V0RGVwdGgodGlsZVN0YXRlKSlcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHRocm93IGBObyBwb2x5Z29uIGZvdW5kIGZvciAke2hleH1gXG4gICAgcmV0dXJuIHBvbHlnb25cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlVGlsZVN0YXRlID0gKGhleDogSGV4KTogVGlsZVN0YXRlID0+IHtcbiAgICBjb25zdCB7IHNlbGVjdGVkSGV4LCBtb2RlIH0gPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09PSAnbW92ZVVuaXQnKSB7XG4gICAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKG1vZGUudW5pdElkKVxuICAgICAgaWYgKHNlbGVjdGVkSGV4ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHVuaXQsIGhleCkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09PSAnYXR0YWNrJykge1xuICAgICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZChtb2RlLnVuaXRJZClcbiAgICAgIGlmIChzZWxlY3RlZEhleCAmJiB0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleCh1bml0LCBoZXgsIG1vZGUuYXR0YWNrVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gJ2RlZmF1bHQnXG4gIH1cblxuICBwcml2YXRlIGdldEhleEJvcmRlckNvbG91ciA9ICh0aWxlU3RhdGU6IFRpbGVTdGF0ZSk6IENvbG91ck51bWJlciA9PiB7XG4gICAgc3dpdGNoICh0aWxlU3RhdGUpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gREVGQVVMVF9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICAgIGNhc2UgJ3NlbGVjdGVkJzpcbiAgICAgICAgcmV0dXJuIFNFTEVDVEVEX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQk9SREVSX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0SG92ZXJIZXhCb3JkZXJDb2xvdXIgPSAodGlsZVN0YXRlOiBUaWxlU3RhdGUpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIHN3aXRjaCAodGlsZVN0YXRlKSB7XG4gICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgcmV0dXJuIEhPVkVSX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBTRUxFQ1RFRF9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gVEFSR0VUQUJMRV9USUxFX0JPUkRFUl9DT0xPVVJcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50OiBQb2ludCk6IHZvaWQge1xuICAgIGNvbnN0IGhleCA9IGZyb21Qb2ludChtdWx0aXBseVBvaW50KHN1YnRyYWN0UG9pbnRzKHBvaW50ZXJQb2ludCwgRFJBV0lOR19PRkZTRVQpLCAxIC8gSEVYX1NJWkUpKVxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXJIZXggJiYgdGhpcy5wcmV2aW91c0hvdmVySGV4LmVxdWFscyhoZXgpKSByZXR1cm5cbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVySGV4KSB7XG4gICAgICB0aGlzLnN5bmNUaWxlKHRoaXMucHJldmlvdXNIb3ZlckhleClcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlckhleCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpXG4gICAgICAgIC5zZXRTdHJva2VTdHlsZSh0aWxlU3RhdGUgPT09ICdkZWZhdWx0JyA/IDIgOiA0LCB0aGlzLmdldEhvdmVySGV4Qm9yZGVyQ29sb3VyKHRpbGVTdGF0ZSkpXG4gICAgICAgIC5zZXREZXB0aCgtMSlcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlckhleCA9IGhleFxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uLy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgaGV4V2lkdGgsIG1hcEhlaWdodCB9IGZyb20gJy4uL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IEFDVElPTl9URVhUX0NPTE9VUiwgSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSLCBQTEFZRVJfVElOVFMgfSBmcm9tICcuLi9jb2xvdXJzJ1xuaW1wb3J0IHsgRFJBV0lOR19PRkZTRVQsIEhFWF9TSVpFIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi8uLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL3BvaW50J1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuLi9jb21iaW5lZC1zdGF0ZS1tZXRob2RzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhPU1RfUExBWUVSX0lELCBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEF1ZGlvS2V5cywgSW1hZ2VLZXlzIH0gZnJvbSAnLi4vYXNzZXQta2V5cydcbmltcG9ydCB7IEF0dGFja1R5cGUgfSBmcm9tICcuLi8uLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuXG5leHBvcnQgdHlwZSBMb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbikgPT4gdm9pZFxuXG5pbnRlcmZhY2UgUGxheWVyT2JqZWN0cyB7XG4gIG5hbWVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBsbGFtYTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0c0Rpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXJcblxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBhY3Rpb25UZXh0MzogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGhvdXJnbGFzczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmZWF0VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB2aWN0b3J5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZExvZ1RleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0V29ybGRMb2dUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IHNlbGVjdFBsYXllcnNUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IHBsYXllck9iamVjdHM6IE1hcDxQbGF5ZXJJZCwgUGxheWVyT2JqZWN0cz4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSByZWFkb25seSBob3N0Q3Jvd246IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjZW5lOiBQaGFzZXIuU2NlbmUsXG4gICAgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSxcbiAgICBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUsXG4gICAgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXIsXG4gICkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlciA9IGxvY2FsQWN0aW9uRGlzcGF0Y2hlclxuICAgIGNvbnN0IG1hcCA9IHRoaXMud29ybGRTdGF0ZS5tYXBcbiAgICB0aGlzLnNjZW5lLmFkZFxuICAgICAgLmltYWdlKDM2LCAzMiwgJ2xsYW1hLTInKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1tsb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCAtIDFdKVxuICAgIHRoaXMucGxheWVyVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoNzAsIDIwLCAnJylcbiAgICB0aGlzLmhvdXJnbGFzcyA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDg3NSwgMzAsICdob3VyZ2xhc3MnKS5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgIERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLFxuICAgICAgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksXG4gICAgICAnJyxcbiAgICApXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDI1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDUwLCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQzID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDc1LCAnJywge1xuICAgICAgICBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIsXG4gICAgICB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQzQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0My5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQzLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDcwMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksICcnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbmRUdXJuJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuc2VsZWN0V29ybGRMb2dUZXh0ID0gdGhpcy5zY2VuZS5hZGRcbiAgICAgIC50ZXh0KDk2MCwgMjYsICdMb2cnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KVxuICAgICAgLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdjaGFuZ2VTaWRlYmFyJywgc2lkZWJhcjogJ2xvZycgfSkpXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5zZWxlY3RXb3JsZExvZ1RleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5zZWxlY3RXb3JsZExvZ1RleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuc2VsZWN0UGxheWVyc1RleHQgPSB0aGlzLnNjZW5lLmFkZFxuICAgICAgLnRleHQoMTAyNCwgMjYsICdQbGF5ZXJzJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSlcbiAgICAgIC5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnY2hhbmdlU2lkZWJhcicsIHNpZGViYXI6ICdwbGF5ZXJzJyB9KSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLnNlbGVjdFBsYXllcnNUZXh0LnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuc2VsZWN0UGxheWVyc1RleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZGVmZWF0VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIChtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSkgLyAyLCAnWW91IGhhdmUgYmVlbiBkZWZlYXRlZCEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy52aWN0b3J5VGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dCg0NjIsIDMwLCAnVmljdG9yeSEnLCB7XG4gICAgICAgIHN0cm9rZTogJyMwMDAwMDAnLFxuICAgICAgICBzdHJva2VUaGlja25lc3M6IDQsXG4gICAgICB9KVxuICAgICAgLnNldE9yaWdpbigwLjUpXG4gICAgICAuc2V0Rm9udFNpemUoNDIpXG4gICAgICAuc2V0VmlzaWJsZShmYWxzZSlcbiAgICAgIC5zZXREZXB0aCgxMDApXG4gICAgdGhpcy53b3JsZExvZ1RleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KDk2MCwgNTAsICcnKVxuICAgIHRoaXMuaG9zdENyb3duID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMTIzNSwgMCwgJ2Nyb3duJykuc2V0U2NhbGUoMC42KVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHdvcmxkU3RhdGUuZ2V0U29ydGVkUGxheWVycygpKSB7XG4gICAgICBjb25zdCBuYW1lVGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAgIC50ZXh0KDEwMDUsIDAsIHBsYXllci5uYW1lLCB7XG4gICAgICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgICAgIGZpeGVkV2lkdGg6IDIwMCxcbiAgICAgICAgICBmb250U3R5bGU6IHBsYXllci5pZCA9PT0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCA/ICdib2xkJyA6ICdub3JtYWwnLFxuICAgICAgICB9KVxuICAgICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAgIC5zZXRQYWRkaW5nKDAsIDAsIDAsIDApXG4gICAgICBjb25zdCBsbGFtYSA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAgIC5zcHJpdGUoOTc1LCAwLCBJbWFnZUtleXMuTExBTUFfRUFUXzEpXG4gICAgICAgIC5zZXRTY2FsZSgwLjYpXG4gICAgICAgIC5zZXRUaW50KFBMQVlFUl9USU5UU1twbGF5ZXIuaWQgLSAxXSlcbiAgICAgIGNvbnN0IHBsYXllck9iamVjdHM6IFBsYXllck9iamVjdHMgPSB7IG5hbWVUZXh0LCBsbGFtYSB9XG4gICAgICB0aGlzLnBsYXllck9iamVjdHMuc2V0KHBsYXllci5pZCwgcGxheWVyT2JqZWN0cylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHRDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuc2NlbmUuc291bmQucGxheShBdWRpb0tleXMuQ0xJQ0spXG4gICAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyTW92ZU1vZGUnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdhYm9ydCcgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDJDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSB7XG4gICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ21lbGVlJyB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDNDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSB7XG4gICAgICB0aGlzLnNjZW5lLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkNMSUNLKVxuICAgICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIoeyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJywgYXR0YWNrVHlwZTogJ3NwaXQnIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhc0NsaWNrSGFuZGxlckZvciA9IChwb2ludDogUG9pbnQpOiBib29sZWFuID0+IHtcbiAgICBmb3IgKGNvbnN0IGdhbWVPYmplY3Qgb2YgW3RoaXMuZW5kVHVyblRleHQsIHRoaXMuYWN0aW9uVGV4dCwgdGhpcy5hY3Rpb25UZXh0MiwgdGhpcy5hY3Rpb25UZXh0M10pXG4gICAgICBpZiAoZ2FtZU9iamVjdC5nZXRCb3VuZHMoKS5jb250YWlucyhwb2ludC54LCBwb2ludC55KSkgcmV0dXJuIHRydWVcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKClcbiAgICB0aGlzLmhvdXJnbGFzcy5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLmFjdGlvbnNPdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPiAwKVxuICAgIHRoaXMucGxheWVyVGV4dC5zZXRUZXh0KGAke3BsYXllci5uYW1lfSAtIFR1cm4gJHt0aGlzLndvcmxkU3RhdGUudHVybn1gKVxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCcnKVxuICAgIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJycpXG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnN5bmNTZWxlY3RIZXhNb2RlVGV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHRoaXMuc3luY01vdmVVbml0TW9kZVRleHQobW9kZS51bml0SWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnN5bmNBdHRhY2tNb2RlVGV4dChtb2RlLnVuaXRJZCwgbW9kZS5hdHRhY2tUeXBlKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICAgIGlmIChwbGF5ZXIuZW5kZWRUdXJuKSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ1dhaXRpbmcgZm9yIG5leHQgdHVybi4uLicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZW5kVHVyblRleHQuc2V0VGV4dCgnRW5kIFR1cm4gKFNoaWZ0ICsgRW50ZXIpJylcbiAgICB9XG4gICAgdGhpcy5kZWZlYXRUZXh0LnNldFZpc2libGUocGxheWVyLmRlZmVhdGVkKVxuICAgIHRoaXMudmljdG9yeVRleHQuc2V0VmlzaWJsZSh3b3JsZFN0YXRlLmdhbWVPdmVySW5mbz8udmljdG9yID09PSBwbGF5ZXIuaWQpXG4gICAgdGhpcy53b3JsZExvZ1RleHQuc2V0VGV4dChSLnRha2VMYXN0KDMwLCB0aGlzLndvcmxkU3RhdGUud29ybGRMb2cpLmpvaW4oJ1xcbicpKVxuICAgIHRoaXMud29ybGRMb2dUZXh0LnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuc2lkZWJhciA9PT0gJ2xvZycpXG4gICAgbGV0IHkgPSA2NVxuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHdvcmxkU3RhdGUuZ2V0U29ydGVkUGxheWVycygpKSB7XG4gICAgICBpZiAocGxheWVyLmlkID09PSBIT1NUX1BMQVlFUl9JRCkge1xuICAgICAgICB0aGlzLmhvc3RDcm93bi5zZXRZKHkgKyA1KVxuICAgICAgfVxuICAgICAgY29uc3QgeyBuYW1lVGV4dCwgbGxhbWEgfSA9IHRoaXMuZ2V0UGxheWVyT2JqZWN0cyhwbGF5ZXIuaWQpXG4gICAgICBuYW1lVGV4dFxuICAgICAgICAuc2V0VGV4dChwbGF5ZXIubmFtZSlcbiAgICAgICAgLnNldFkoeSlcbiAgICAgICAgLnNldFZpc2libGUobG9jYWxHYW1lU3RhdGUuc2lkZWJhciA9PT0gJ3BsYXllcnMnKVxuICAgICAgbGxhbWFcbiAgICAgICAgLnNldFkoeSArIDEwKVxuICAgICAgICAuc2V0VmlzaWJsZShsb2NhbEdhbWVTdGF0ZS5zaWRlYmFyID09PSAncGxheWVycycpXG4gICAgICAgIC5zZXRGbGlwWCghdGhpcy53b3JsZFN0YXRlLmNhblBsYXllckFjdChwbGF5ZXIuaWQpKVxuICAgICAgeSArPSA1MFxuICAgIH1cbiAgICB0aGlzLmhvc3RDcm93bi5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLnNpZGViYXIgPT09ICdwbGF5ZXJzJylcbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkLCBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoYENsaWNrIHVuaXQgdG8gJHthdHRhY2tUeXBlID09PSAnbWVsZWUnID8gJ2F0dGFjaycgOiAnc3BpdCd9IChvciBFU0MgdG8gY2FuY2VsKWApXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKSB0aGlzLmFjdGlvblRleHQzLnNldFRleHQoJ1NwaXQgKHMpJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFBsYXllck5hbWUgPSAocGxheWVySWQ6IFBsYXllcklkKTogc3RyaW5nID0+IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXIocGxheWVySWQpLm5hbWVcblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBsYXllcklkLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9ID0gdW5pdFxuICAgIGNvbnN0IHBsYXllck5hbWUgPSB0aGlzLmdldFBsYXllck5hbWUocGxheWVySWQpXG4gICAgcmV0dXJuIGAke25hbWV9IC0gTGxhbWEgd2FycmlvciAtICR7cGxheWVyTmFtZX0gLSBIUCAke2hpdFBvaW50cy5jdXJyZW50fS8ke2hpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke2FjdGlvblBvaW50cy5jdXJyZW50fS8ke2FjdGlvblBvaW50cy5tYXh9YFxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQbGF5ZXJPYmplY3RzID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllck9iamVjdHMgPT4ge1xuICAgIGNvbnN0IHBsYXllck9iamVjdHMgPSB0aGlzLnBsYXllck9iamVjdHMuZ2V0KHBsYXllcklkKVxuICAgIGlmICghcGxheWVyT2JqZWN0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBwbGF5ZXIgb2JqZWN0cyBmb3VuZCBmb3IgJHtwbGF5ZXJJZH1gKVxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyT2JqZWN0c1xuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi8uLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IGhleENlbnRlciB9IGZyb20gJy4vZ2FtZS1zY2VuZSdcbmltcG9ydCB7IEhFQUxUSF9CT1JERVJfQ09MT1VSLCBIRUFMVEhfRU1QVFlfQ09MT1VSLCBIRUFMVEhfRlVMTF9DT0xPVVIsIFBMQVlFUl9USU5UUyB9IGZyb20gJy4uL2NvbG91cnMnXG5pbXBvcnQgeyBhZGRQb2ludHMsIGRpc3RhbmNlQmV0d2VlblBvaW50cywgUG9pbnQgfSBmcm9tICcuLi9wb2ludCdcbmltcG9ydCB7IHBsYXlUd2VlbiB9IGZyb20gJy4uLy4uL3V0aWwvcGhhc2VyL3R3ZWVuLXV0aWxzJ1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uLy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IEFuaW1hdGlvblNwZWVkIH0gZnJvbSAnLi9kaXNwbGF5LW9iamVjdHMnXG5pbXBvcnQgeyByYW5kb21JbnRJbmNsdXNpdmUgfSBmcm9tICcuLi8uLi91dGlsL3JhbmRvbS11dGlsJ1xuXG5jb25zdCBIRUFMVEhfQkFSX1dJRFRIID0gNTBcbmNvbnN0IEhFQUxUSF9CQVJfSEVJR0hUID0gMTJcbmNvbnN0IEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUyA9IDJcbmNvbnN0IElNQUdFX09GRlNFVCA9IHsgeDogMCwgeTogNCB9XG5jb25zdCBIRUFMVEhfQkFSX09GRlNFVCA9IHsgeDogLTI1LCB5OiAtNDAgfVxuXG5leHBvcnQgY2xhc3MgVW5pdERpc3BsYXlPYmplY3Qge1xuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB1bml0OiBVbml0XG4gIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcbiAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhCYXJHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzXG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgdW5pdDogVW5pdCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICB0aGlzLmltYWdlID0gc2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAnbGxhbWEtMicpLnNldFNjYWxlKDAuOCkuc2V0VGludCh0aGlzLmdldFBsYXllclRpbnQodGhpcy51bml0LnBsYXllcklkKSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzID0gc2NlbmUuYWRkLmdyYXBoaWNzKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyVGludCA9IChwbGF5ZXJJZDogUGxheWVySWQpID0+XG4gICAgUExBWUVSX1RJTlRTWyhQTEFZRVJfVElOVFMubGVuZ3RoICsgcGxheWVySWQgLSAxKSAlIFBMQVlFUl9USU5UUy5sZW5ndGhdXG5cbiAgcHJpdmF0ZSBnZXRIZWFsdGhCYXJQb3NpdGlvbiA9IChwb2ludDogUG9pbnQpOiBQb2ludCA9PiBhZGRQb2ludHMocG9pbnQsIEhFQUxUSF9CQVJfT0ZGU0VUKVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAodW5pdDogVW5pdCk6IHZvaWQgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09PSB0aGlzLnVuaXQuaWQpXG4gICAgdGhpcy51bml0ID0gdW5pdFxuICAgIGNvbnN0IHVuaXRQb2ludCA9IGhleENlbnRlcih0aGlzLnVuaXQubG9jYXRpb24pXG4gICAgdGhpcy5pbWFnZS5zZXRQb3NpdGlvbih1bml0UG9pbnQueCArIElNQUdFX09GRlNFVC54LCB1bml0UG9pbnQueSArIElNQUdFX09GRlNFVC55KVxuICAgIHRoaXMuc3luY0hlYWx0aEJhcih1bml0UG9pbnQpXG4gIH1cblxuICBwcml2YXRlIHN5bmNIZWFsdGhCYXIgPSAodW5pdFBvaW50OiBQb2ludCkgPT4ge1xuICAgIGNvbnN0IGhlYWx0aEJhclBvc2l0aW9uID0gdGhpcy5nZXRIZWFsdGhCYXJQb3NpdGlvbih1bml0UG9pbnQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5zZXRQb3NpdGlvbihoZWFsdGhCYXJQb3NpdGlvbi54LCBoZWFsdGhCYXJQb3NpdGlvbi55KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuY2xlYXIoKVxuXG4gICAgLy8gRHJhdyBib3JkZXJcbiAgICBjb25zdCBpbm5lcldpZHRoID0gSEVBTFRIX0JBUl9XSURUSCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IEhFQUxUSF9CQVJfSEVJR0hUIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9CT1JERVJfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoMCwgMCwgSEVBTFRIX0JBUl9XSURUSCwgSEVBTFRIX0JBUl9IRUlHSFQpXG5cbiAgICAvLyBEcmF3IGVtcHR5IGJhY2tncm91bmRcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRU1QVFlfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuXG4gICAgLy8gRmlsbCBpbiBiYXJcbiAgICBjb25zdCB7IGN1cnJlbnQsIG1heCB9ID0gdGhpcy51bml0LmhpdFBvaW50c1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9GVUxMX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLFxuICAgICAgKGlubmVyV2lkdGggKiBjdXJyZW50KSAvIG1heCxcbiAgICAgIGlubmVySGVpZ2h0LFxuICAgIClcbiAgfVxuXG4gIHB1YmxpYyBydW5Nb3ZlQW5pbWF0aW9uID0gYXN5bmMgKGZyb206IEhleCwgdG86IEhleCwgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLnNjYWxlU3BlZWQoNTAwLCBzcGVlZClcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLmFuaW1zLnBsYXkoJ2xsYW1hLXdhbGsnKVxuICAgIHRoaXMuaW1hZ2Uuc2V0RmxpcFgoYWZ0ZXJDb29yZHMueCA8IGJlZm9yZUNvb3Jkcy54KVxuICAgIGNvbnN0IHR3ZWVuMSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmltYWdlLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBJTUFHRV9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIGNvbnN0IHR3ZWVuMiA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZSh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3BsYXlUd2Vlbih0d2VlbjEpLCBwbGF5VHdlZW4odHdlZW4yKV0pXG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmltYWdlLmFuaW1zLmN1cnJlbnRBbmltLmZyYW1lc1sxXVxuICAgIHRoaXMuaW1hZ2UuYW5pbXMuc3RvcE9uRnJhbWUoZnJhbWUpXG4gIH1cblxuICBwcml2YXRlIHNjYWxlU3BlZWQgPSAoZHVyYXRpb246IG51bWJlciwgc3BlZWQ6IEFuaW1hdGlvblNwZWVkKSA9PiAoc3BlZWQgPT09ICdub3JtYWwnID8gZHVyYXRpb24gOiBkdXJhdGlvbiAvIDQpXG5cbiAgcHVibGljIHJ1bkRlYXRoQW5pbWF0aW9uID0gYXN5bmMgKHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5zY2FsZVNwZWVkKDEwMDAsIHNwZWVkKVxuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IFt0aGlzLmltYWdlLCB0aGlzLmhlYWx0aEJhckdyYXBoaWNzXSxcbiAgICAgIGFscGhhOiB7IGZyb206IDEsIHRvOiAwIH0sXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgfSlcbiAgICBhd2FpdCBwbGF5VHdlZW4odHdlZW4pXG4gIH1cblxuICBwdWJsaWMgcnVuU3BpdEFuaW1hdGlvbiA9IGFzeW5jIChmcm9tOiBIZXgsIHRvOiBIZXgsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGZyb21Qb2ludCA9IGhleENlbnRlcihmcm9tKVxuICAgIGNvbnN0IHRvUG9pbnQgPSBoZXhDZW50ZXIodG8pXG4gICAgY29uc3QgZGlzdGFuY2UgPSBkaXN0YW5jZUJldHdlZW5Qb2ludHMoZnJvbVBvaW50LCB0b1BvaW50KVxuICAgIGNvbnN0IGltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoZnJvbVBvaW50LngsIGZyb21Qb2ludC55LCAnc3BpdCcpLnNldFNjYWxlKDAuOClcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuc2NhbGVTcGVlZChkaXN0YW5jZSAqIDQsIHNwZWVkKVxuICAgIGNvbnN0IHR3ZWVuID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IGltYWdlLFxuICAgICAgeDoge1xuICAgICAgICBmcm9tOiBmcm9tUG9pbnQueCxcbiAgICAgICAgdG86IHRvUG9pbnQueCxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIGZyb206IGZyb21Qb2ludC55LFxuICAgICAgICB0bzogdG9Qb2ludC55LFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdRdWFkJyxcbiAgICB9KVxuICAgIGF3YWl0IHBsYXlUd2Vlbih0d2VlbilcbiAgICBpbWFnZS5kZXN0cm95KClcbiAgfVxuXG4gIHB1YmxpYyBydW5EYW1hZ2VBbmltYXRpb24gPSBhc3luYyAobG9jYXRpb246IEhleCwgZGFtYWdlOiBudW1iZXIsIHNwZWVkOiBBbmltYXRpb25TcGVlZCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IGxvY2F0aW9uUG9pbnQgPSBoZXhDZW50ZXIobG9jYXRpb24pXG4gICAgY29uc3QgdGV4dCA9IHRoaXMuc2NlbmUuYWRkXG4gICAgICAudGV4dChsb2NhdGlvblBvaW50LngsIGxvY2F0aW9uUG9pbnQueSwgZGFtYWdlLnRvU3RyaW5nKCksIHtcbiAgICAgICAgY29sb3I6ICcjZmY4ODg4JyxcbiAgICAgICAgc3Ryb2tlOiAnIzAwMDAwMCcsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogMixcbiAgICAgIH0pXG4gICAgICAuc2V0Rm9udFNpemUoMjYpXG4gICAgICAuc2V0T3JpZ2luKDAuNSlcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuc2NhbGVTcGVlZCgyMDAwLCBzcGVlZClcbiAgICBjb25zdCB0d2VlbjEgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGUoe1xuICAgICAgdGFyZ2V0czogdGV4dCxcbiAgICAgIHk6IHtcbiAgICAgICAgZnJvbTogbG9jYXRpb25Qb2ludC55IC0gNTAsXG4gICAgICAgIHRvOiBsb2NhdGlvblBvaW50LnkgLSA3NSxcbiAgICAgIH0sXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdMaW5lYXInLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRleHQsXG4gICAgICBhbHBoYTogeyBmcm9tOiAxLCB0bzogMCB9LFxuICAgICAgZHVyYXRpb24sXG4gICAgICBlYXNlOiAnQ3ViaWMuaW4nLFxuICAgIH0pXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW3BsYXlUd2Vlbih0d2VlbjEpLCBwbGF5VHdlZW4odHdlZW4yKV0pXG4gICAgdGV4dC5kZXN0cm95KClcbiAgfVxuXG4gIHB1YmxpYyBydW5FYXRBbmltYXRpb24gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgaWYgKHJhbmRvbUludEluY2x1c2l2ZSgxLCAzKSA9PT0gMSkge1xuICAgICAgdGhpcy5pbWFnZS50b2dnbGVGbGlwWCgpXG4gICAgfVxuICAgIHRoaXMuaW1hZ2UuYW5pbXMucGxheSgnbGxhbWEtZWF0JylcbiAgfVxuXG4gIHB1YmxpYyBydW5BdHRhY2tBbmltYXRpb24gPSBhc3luYyAoZnJvbTogSGV4LCB0bzogSGV4LCBzcGVlZDogQW5pbWF0aW9uU3BlZWQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICB0aGlzLmltYWdlLmFuaW1zLnBsYXkoJ2xsYW1hLXdhbGsnKVxuICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5zY2FsZVNwZWVkKDQwMCwgc3BlZWQpXG4gICAgY29uc3QgdHdlZW4xID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgIH0pXG4gICAgY29uc3QgdHdlZW4yID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcGxheVR3ZWVuKHR3ZWVuMSksIHBsYXlUd2Vlbih0d2VlbjIpXSlcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuaW1hZ2UuYW5pbXMuY3VycmVudEFuaW0uZnJhbWVzWzFdXG4gICAgdGhpcy5pbWFnZS5hbmltcy5zdG9wT25GcmFtZShmcmFtZSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc2NlbmUudHdlZW5zLmtpbGxUd2VlbnNPZihbdGhpcy5oZWFsdGhCYXJHcmFwaGljcywgdGhpcy5pbWFnZV0pXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5kZXN0cm95KClcbiAgICB0aGlzLmltYWdlLmRlc3Ryb3koKVxuICB9XG59XG5cbnR5cGUgVHdlZW5YWSA9IHsgeDogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfTsgeTogeyBmcm9tOiBudW1iZXI7IHRvOiBudW1iZXIgfSB9XG5cbmNvbnN0IGNhbGN1bGF0ZVR3ZWVuWFkgPSAoZnJvbTogUG9pbnQsIHRvOiBQb2ludCwgb2Zmc2V0OiBQb2ludCk6IFR3ZWVuWFkgPT4gKHtcbiAgeDoge1xuICAgIGZyb206IGZyb20ueCArIG9mZnNldC54LFxuICAgIHRvOiB0by54ICsgb2Zmc2V0LngsXG4gIH0sXG4gIHk6IHtcbiAgICBmcm9tOiBmcm9tLnkgKyBvZmZzZXQueSxcbiAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICB9LFxufSlcbiIsImltcG9ydCB7IHY0IGFzIHV1aWQgfSBmcm9tICd1dWlkJ1xuaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uLy4uL3VpL21lbnUtYnV0dG9uJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vbWFpbi1nYW1lL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgb3BlbldvcmxkRXZlbnREYiB9IGZyb20gJy4uLy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uLy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMT0JCWV9TQ0VORV9LRVksIExvYmJ5U2NlbmVEYXRhIH0gZnJvbSAnLi4vbG9iYnkvbG9iYnktc2NlbmUnXG5pbXBvcnQgeyBBdWRpb0tleXMgfSBmcm9tICcuLi9hc3NldC1rZXlzJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQgfSBmcm9tICcuLi8uLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBzZXRVcmxJbmZvIH0gZnJvbSAnLi4vYm9vdC91cmwtaW5mbydcblxuZXhwb3J0IGNvbnN0IE1BSU5fTUVOVV9TQ0VORV9LRVkgPSAnTWFpbk1lbnUnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiBNQUlOX01FTlVfU0NFTkVfS0VZLFxufVxuXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmFkZC50ZXh0KDEwMCwgNTAsICdMbGFtYSBXYXJzJywgeyBmaWxsOiAnI0ZGRkZGRicgfSkuc2V0Rm9udFNpemUoMjQpXG4gICAgdGhpcy5zb3VuZC5wYXVzZU9uQmx1ciA9IGZhbHNlXG4gICAgdGhpcy5zb3VuZC5hZGQoQXVkaW9LZXlzLkNMSUNLKVxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnSG9zdCBHYW1lJywgKCkgPT4ge1xuICAgICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5DTElDSylcbiAgICAgIHRoaXMuaGFuZGxlSG9zdEdhbWUoKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUhvc3RHYW1lID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGNvbnN0IHdvcmxkRXZlbnREYiA9IGF3YWl0IG9wZW5Xb3JsZEV2ZW50RGIoKVxuICAgIGNvbnN0IGdhbWVJZDogR2FtZUlkID0gdXVpZCgpXG4gICAgY29uc3QgcGxheWVySWQgPSBIT1NUX1BMQVlFUl9JRFxuICAgIGNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIod29ybGRFdmVudERiLCBnYW1lSWQsIElOSVRJQUxfV09STERfU1RBVEUsIDApXG4gICAgc2VydmVyLmhhbmRsZUFjdGlvbihwbGF5ZXJJZCwgeyB0eXBlOiAnaW5pdGlhbGlzZScsIHN0YXRlOiBJTklUSUFMX1dPUkxEX1NUQVRFIH0pXG4gICAgc2V0VXJsSW5mbyh7IGdhbWVJZCB9KVxuICAgIGNvbnN0IHNjZW5lRGF0YTogTG9iYnlTY2VuZURhdGEgPSB7IHNlcnZlck9yQ2xpZW50OiBzZXJ2ZXIgfVxuICAgIHRoaXMuc2NlbmUuc3RhcnQoTE9CQllfU0NFTkVfS0VZLCBzY2VuZURhdGEpXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBwb2ludCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvaW50ID0+ICh7IHgsIHkgfSlcblxuZXhwb3J0IGNvbnN0IG11bHRpcGx5UG9pbnQgPSAocG9pbnQ6IFBvaW50LCBuOiBudW1iZXIpOiBQb2ludCA9PiAoeyB4OiBwb2ludC54ICogbiwgeTogcG9pbnQueSAqIG4gfSlcblxuZXhwb3J0IGNvbnN0IGFkZFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHsgeDogcG9pbnQxLnggKyBwb2ludDIueCwgeTogcG9pbnQxLnkgKyBwb2ludDIueSB9KVxuXG5leHBvcnQgY29uc3Qgc3VidHJhY3RQb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IFBvaW50ID0+ICh7XG4gIHg6IHBvaW50MS54IC0gcG9pbnQyLngsXG4gIHk6IHBvaW50MS55IC0gcG9pbnQyLnksXG59KVxuXG5jb25zdCBzcXVhcmUgPSAobjogbnVtYmVyKTogbnVtYmVyID0+IG4gKiBuXG5cbmV4cG9ydCBjb25zdCBkaXN0YW5jZUJldHdlZW5Qb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IG51bWJlciA9PlxuICBNYXRoLnNxcnQoc3F1YXJlKHBvaW50MS54IC0gcG9pbnQyLngpICsgc3F1YXJlKHBvaW50MS55IC0gcG9pbnQyLnkpKVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEF0dGFja1R5cGUsIEF0dGFja1dvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFBsYXllckRlZmVhdGVkV29ybGRFdmVudCwgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3BsYXllcidcbmltcG9ydCB7IHJhbmRvbUludEluY2x1c2l2ZSB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5cbmV4cG9ydCBjb25zdCBjYW5BdHRhY2tPY2N1ciA9IChhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLCBmcm9tOiBIZXgsIHRvOiBIZXgpOiBib29sZWFuID0+IHtcbiAgc3dpdGNoIChhdHRhY2tUeXBlKSB7XG4gICAgY2FzZSAnbWVsZWUnOlxuICAgICAgcmV0dXJuIGZyb20uaXNBZGphY2VudFRvKHRvKVxuICAgIGNhc2UgJ3NwaXQnOlxuICAgICAgcmV0dXJuIGZyb20uZGlzdGFuY2VUbyh0bykgPD0gMlxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdHRhY2tXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQXR0YWNrID0gKGFjdGlvbjogQXR0YWNrV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSB0aGlzLnZhbGlkYXRlQXR0YWNrKGFjdGlvbilcbiAgICBjb25zdCB7IGF0dGFja1R5cGUgfSA9IGFjdGlvblxuICAgIGNvbnN0IHJhd0F0dGFja2VyRGFtYWdlID0gYXR0YWNrVHlwZSA9PT0gJ21lbGVlJyA/IHJhbmRvbUludEluY2x1c2l2ZSg4LCAxMikgOiAwXG4gICAgY29uc3QgcmF3RGVmZW5kZXJEYW1hZ2UgPSBhdHRhY2tUeXBlID09PSAnbWVsZWUnID8gcmFuZG9tSW50SW5jbHVzaXZlKDE3LCAyMykgOiByYW5kb21JbnRJbmNsdXNpdmUoNCwgNilcbiAgICBjb25zdCBhdHRhY2tlckRhbWFnZSA9IE1hdGgubWluKGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50LCByYXdBdHRhY2tlckRhbWFnZSlcbiAgICBjb25zdCBkZWZlbmRlckRhbWFnZSA9IE1hdGgubWluKGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50LCByYXdEZWZlbmRlckRhbWFnZSlcbiAgICBjb25zdCBjb21iYXRXb3JsZEV2ZW50ID0gdGhpcy5tYWtlQ29tYmF0V29ybGRFdmVudChhdHRhY2tUeXBlLCBhdHRhY2tlciwgYXR0YWNrZXJEYW1hZ2UsIGRlZmVuZGVyLCBkZWZlbmRlckRhbWFnZSlcblxuICAgIGxldCBuZXdXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnQoY29tYmF0V29ybGRFdmVudClcbiAgICBjb25zdCBldmVudHM6IFdvcmxkRXZlbnRbXSA9IFtjb21iYXRXb3JsZEV2ZW50XVxuICAgIGxldCBuZXh0V29ybGRFdmVudElkID0gdGhpcy5uZXh0V29ybGRFdmVudElkICsgMVxuICAgIGlmIChuZXdXb3JsZFN0YXRlLmlzUGxheWVyRGVmZWF0ZWQoZGVmZW5kZXIucGxheWVySWQpKSB7XG4gICAgICBjb25zdCBldmVudCA9IHRoaXMucGxheWVyRGVmZWF0ZWRFdmVudChuZXh0V29ybGRFdmVudElkKyssIGRlZmVuZGVyLnBsYXllcklkKVxuICAgICAgZXZlbnRzLnB1c2goZXZlbnQpXG4gICAgICBuZXdXb3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICBpZiAobmV3V29ybGRTdGF0ZS5pc1BsYXllckRlZmVhdGVkKGF0dGFja2VyLnBsYXllcklkKSkge1xuICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLnBsYXllckRlZmVhdGVkRXZlbnQobmV4dFdvcmxkRXZlbnRJZCsrLCBhdHRhY2tlci5wbGF5ZXJJZClcbiAgICAgIGV2ZW50cy5wdXNoKGV2ZW50KVxuICAgICAgbmV3V29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGUuYXBwbHlFdmVudChldmVudClcbiAgICB9XG4gICAgY29uc3QgdW5kZWZlYXRlZFBsYXllcnMgPSBuZXdXb3JsZFN0YXRlLnBsYXllcnMuZmlsdGVyKChwbGF5ZXIpID0+ICFwbGF5ZXIuZGVmZWF0ZWQpXG4gICAgaWYgKFIuaXNFbXB0eSh1bmRlZmVhdGVkUGxheWVycykpIHtcbiAgICAgIGV2ZW50cy5wdXNoKHsgaWQ6IG5leHRXb3JsZEV2ZW50SWQrKywgdHlwZTogJ2dhbWVPdmVyJyB9KVxuICAgIH0gZWxzZSBpZiAodW5kZWZlYXRlZFBsYXllcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCB2aWN0b3IgPSB1bmRlZmVhdGVkUGxheWVyc1swXS5pZFxuICAgICAgZXZlbnRzLnB1c2goeyBpZDogbmV4dFdvcmxkRXZlbnRJZCsrLCB0eXBlOiAnZ2FtZU92ZXInLCB2aWN0b3IgfSlcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50c1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5ZXJEZWZlYXRlZEV2ZW50ID0gKGlkOiBXb3JsZEV2ZW50SWQsIHBsYXllcklkOiBQbGF5ZXJJZCk6IFBsYXllckRlZmVhdGVkV29ybGRFdmVudCA9PiAoe1xuICAgIGlkLFxuICAgIHR5cGU6ICdwbGF5ZXJEZWZlYXRlZCcsXG4gICAgcGxheWVySWQ6IHBsYXllcklkLFxuICB9KVxuXG4gIHByaXZhdGUgdmFsaWRhdGVBdHRhY2sgPSAoYWN0aW9uOiBBdHRhY2tXb3JsZEFjdGlvbik6IHsgYXR0YWNrZXI6IFVuaXQ7IGRlZmVuZGVyOiBVbml0IH0gPT4ge1xuICAgIGNvbnN0IGF0dGFja2VySWQgPSBhY3Rpb24uYXR0YWNrZXIudW5pdElkXG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VySWQpXG4gICAgaWYgKCFhdHRhY2tlcikgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VySWR9YFxuICAgIGlmIChhdHRhY2tlci5wbGF5ZXJJZCAhPT0gdGhpcy5wbGF5ZXJJZCkgdGhyb3cgYENhbm5vdCBjb250cm9sIGFub3RoZXIgcGxheWVyJ3MgdW5pdDogJHthdHRhY2tlci5pZH1gXG4gICAgaWYgKGF0dGFja2VyLmFjdGlvblBvaW50cy5jdXJyZW50IDwgMSkgdGhyb3cgYE5vdCBlbm91Z2ggYWN0aW9uIHBvaW50cyB0byBhdHRhY2tgXG4gICAgaWYgKCFhdHRhY2tlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmF0dGFja2VyLmxvY2F0aW9uKSkgdGhyb3cgYEF0dGFja2VyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGNvbnN0IGRlZmVuZGVySWQgPSBhY3Rpb24uZGVmZW5kZXIudW5pdElkXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVySWQpXG4gICAgaWYgKCFkZWZlbmRlcikgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVySWR9YFxuICAgIGlmIChkZWZlbmRlci5wbGF5ZXJJZCA9PT0gdGhpcy5wbGF5ZXJJZCkgdGhyb3cgYENhbm5vdCBhdHRhY2sgb3duIHVuaXRgXG4gICAgaWYgKCFkZWZlbmRlci5sb2NhdGlvbi5lcXVhbHMoYWN0aW9uLmRlZmVuZGVyLmxvY2F0aW9uKSkgdGhyb3cgYERlZmVuZGVyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGlmICghY2FuQXR0YWNrT2NjdXIoYWN0aW9uLmF0dGFja1R5cGUsIGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IGF0dGFjayBvZiB0eXBlICR7YWN0aW9uLmF0dGFja1R5cGV9IGJldHdlZW4gaGV4ZXMgJHthdHRhY2tlci5sb2NhdGlvbn0gdG8gJHtkZWZlbmRlci5sb2NhdGlvbn0gdG9vIGZhciBhcGFydGBcbiAgICByZXR1cm4geyBhdHRhY2tlciwgZGVmZW5kZXIgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlQ29tYmF0V29ybGRFdmVudCA9IChcbiAgICBhdHRhY2tUeXBlOiBBdHRhY2tUeXBlLFxuICAgIGF0dGFja2VyOiBVbml0LFxuICAgIGF0dGFja2VyRGFtYWdlOiBudW1iZXIsXG4gICAgZGVmZW5kZXI6IFVuaXQsXG4gICAgZGVmZW5kZXJEYW1hZ2U6IG51bWJlcixcbiAgKTogQ29tYmF0V29ybGRFdmVudCA9PiAoe1xuICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgdHlwZTogJ2NvbWJhdCcsXG4gICAgYXR0YWNrVHlwZSxcbiAgICBhdHRhY2tlcjoge1xuICAgICAgcGxheWVySWQ6IGF0dGFja2VyLnBsYXllcklkLFxuICAgICAgdW5pdElkOiBhdHRhY2tlci5pZCxcbiAgICAgIGxvY2F0aW9uOiBhdHRhY2tlci5sb2NhdGlvbixcbiAgICAgIGRhbWFnZTogYXR0YWNrZXJEYW1hZ2UsXG4gICAgICBraWxsZWQ6IGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50ID09PSBhdHRhY2tlckRhbWFnZSxcbiAgICB9LFxuICAgIGRlZmVuZGVyOiB7XG4gICAgICBwbGF5ZXJJZDogZGVmZW5kZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGRlZmVuZGVyLmlkLFxuICAgICAgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBkZWZlbmRlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogZGVmZW5kZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT09IGRlZmVuZGVyRGFtYWdlLFxuICAgIH0sXG4gICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gIH0pXG59XG4iLCJpbXBvcnQge1xuICBKb2luUmVxdWVzdCxcbiAgSm9pblJlc3BvbnNlLFxuICBSZWpvaW5SZXF1ZXN0LFxuICBSZWpvaW5SZXNwb25zZSxcbiAgV29ybGRBY3Rpb25SZXF1ZXN0LFxuICBXb3JsZEV2ZW50TWVzc2FnZSxcbn0gZnJvbSAnLi9tZXNzYWdlcydcbmltcG9ydCB7IEdhbWVJZCB9IGZyb20gJy4uL3NjZW5lcy9tYWluLWdhbWUvZ2FtZS1zY2VuZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGRlc2VyaWFsaXNlRnJvbUpzb24sIHNlcmlhbGlzZVRvSnNvbiB9IGZyb20gJy4uL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uJ1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBQZWVyQ2xpZW50IH0gZnJvbSAnLi9wZWVyLWNsaWVudCdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBXb3JsZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3dvcmxkLXN0YXRlLW93bmVyJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgd2l0aFRpbWVvdXQgfSBmcm9tICcuLi91dGlsL2FzeW5jLXV0aWwnXG5pbXBvcnQgeyBJTklUSUFMX1dPUkxEX1NUQVRFIH0gZnJvbSAnLi4vd29ybGQvaW5pdGlhbC13b3JsZC1zdGF0ZSdcblxuY29uc3QgVElNRU9VVCA9IDUwMDBcblxuZXhwb3J0IGNsYXNzIENsaWVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcGVlckNsaWVudDogUGVlckNsaWVudFxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogV29ybGRFdmVudExpc3RlbmVyW10gPSBbXVxuICBwcml2YXRlIF93b3JsZFN0YXRlOiBXb3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICBwcml2YXRlIF9wbGF5ZXJJZDogUGxheWVySWQgPSAtMVxuXG4gIHB1YmxpYyBnZXQgd29ybGRTdGF0ZSgpOiBXb3JsZFN0YXRlIHtcbiAgICByZXR1cm4gdGhpcy5fd29ybGRTdGF0ZVxuICB9XG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYXllcklkXG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHBlZXJDbGllbnQ6IFBlZXJDbGllbnQpIHtcbiAgICB0aGlzLnBlZXJDbGllbnQgPSBwZWVyQ2xpZW50XG4gICAgcGVlckNsaWVudC5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnRNZXNzYWdlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50TWVzc2FnZSA9IChtZXNzYWdlOiBXb3JsZEV2ZW50TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGV2ZW50ID0gZGVzZXJpYWxpc2VGcm9tSnNvbihtZXNzYWdlLmV2ZW50KVxuICAgIGNvbnN0IHByZXZpb3VzV29ybGRTdGF0ZSA9IHRoaXMuX3dvcmxkU3RhdGVcbiAgICBjb25zdCBuZXdXb3JsZFN0YXRlID0gcHJldmlvdXNXb3JsZFN0YXRlLmFwcGx5RXZlbnQoZXZlbnQpXG4gICAgdGhpcy5fd29ybGRTdGF0ZSA9IG5ld1dvcmxkU3RhdGVcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlKVxuICB9XG5cbiAgcHVibGljIHN0YXRpYyBjb25uZWN0ID0gYXN5bmMgKGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxDbGllbnQ+ID0+IHtcbiAgICBjb25zdCBwZWVyQ2xpZW50ID0gYXdhaXQgd2l0aFRpbWVvdXQoVElNRU9VVCkoUGVlckNsaWVudC5jb25uZWN0KGdhbWVJZCkpXG4gICAgcmV0dXJuIG5ldyBDbGllbnQocGVlckNsaWVudClcbiAgfVxuXG4gIHB1YmxpYyByZWpvaW4gPSBhc3luYyAocGxheWVySWQ6IFBsYXllcklkKTogUHJvbWlzZTxPcHRpb248V29ybGRTdGF0ZT4+ID0+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBSZWpvaW5SZXF1ZXN0ID0geyB0eXBlOiAncmVqb2luJywgcGxheWVySWQgfVxuICAgIGNvbnN0IHJlc3BvbnNlOiBSZWpvaW5SZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VuZFJlcXVlc3QocmVxdWVzdClcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Jlam9pbmVkJzpcbiAgICAgICAgY29uc3Qgd29ybGRTdGF0ZSA9IFdvcmxkU3RhdGUuZnJvbUpzb24ocmVzcG9uc2Uud29ybGRTdGF0ZSlcbiAgICAgICAgdGhpcy5fcGxheWVySWQgPSBwbGF5ZXJJZFxuICAgICAgICB0aGlzLl93b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgICAgICByZXR1cm4gd29ybGRTdGF0ZVxuICAgICAgY2FzZSAndW5hYmxlVG9SZWpvaW4nOlxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IocmVzcG9uc2UpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGpvaW4gPSBhc3luYyAoKTogUHJvbWlzZTxPcHRpb248eyBwbGF5ZXJJZDogUGxheWVySWQ7IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgfT4+ID0+IHtcbiAgICBjb25zdCByZXF1ZXN0OiBKb2luUmVxdWVzdCA9IHsgdHlwZTogJ2pvaW4nIH1cbiAgICBjb25zdCByZXNwb25zZTogSm9pblJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZW5kUmVxdWVzdChyZXF1ZXN0KVxuICAgIHN3aXRjaCAocmVzcG9uc2UudHlwZSkge1xuICAgICAgY2FzZSAnam9pbmVkJzpcbiAgICAgICAgY29uc3QgcGxheWVySWQgPSByZXNwb25zZS5wbGF5ZXJJZFxuICAgICAgICBjb25zdCB3b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihyZXNwb25zZS53b3JsZFN0YXRlKVxuICAgICAgICB0aGlzLl9wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgICAgIHRoaXMuX3dvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgICAgIHJldHVybiB7IHBsYXllcklkLCB3b3JsZFN0YXRlIH1cbiAgICAgIGNhc2UgJ3VuYWJsZVRvSm9pbic6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihyZXNwb25zZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbmRSZXF1ZXN0ID0gYXN5bmMgKHJlcXVlc3Q6IGFueSk6IFByb21pc2U8YW55PiA9PiB3aXRoVGltZW91dChUSU1FT1VUKSh0aGlzLnBlZXJDbGllbnQuc2VuZFJlcXVlc3QocmVxdWVzdCkpXG5cbiAgcHVibGljIHNlbmRBY3Rpb24gPSBhc3luYyAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgY29uc3QgcmVxdWVzdDogV29ybGRBY3Rpb25SZXF1ZXN0ID0ge1xuICAgICAgdHlwZTogJ3dvcmxkQWN0aW9uJyxcbiAgICAgIGFjdGlvbjogc2VyaWFsaXNlVG9Kc29uKGFjdGlvbiksXG4gICAgICBwbGF5ZXJJZDogcGxheWVySWQsXG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2VuZFJlcXVlc3QocmVxdWVzdClcbiAgfVxufVxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5pbXBvcnQge1xuICBCcm9hZGNhc3RNZXNzYWdlLFxuICBFcnJvclJlc3BvbnNlTWVzc2FnZSxcbiAgUGVlcklkLFxuICBSZXF1ZXN0SWQsXG4gIFJlcXVlc3RNZXNzYWdlLFxuICBSZXNwb25zZU1lc3NhZ2UsXG4gIFNlcnZlclRvQ2xpZW50TWVzc2FnZSxcbn0gZnJvbSAnLi9wZWVyLXNlcnZlcidcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcbmltcG9ydCB7IG5ld1BlZXIgfSBmcm9tICcuL3BlZXItdXRpbHMnXG5pbXBvcnQgeyBSZWplY3QsIFJlc29sdmUgfSBmcm9tICcuLi91dGlsL2FzeW5jLXV0aWwnXG5cbmludGVyZmFjZSBSZXNvbHZlQW5kUmVqZWN0PFQ+IHtcbiAgcmVzb2x2ZTogUmVzb2x2ZTxUPlxuICByZWplY3Q6IFJlamVjdFxufVxuXG5leHBvcnQgdHlwZSBQZWVyTGlzdGVuZXIgPSAobWVzc2FnZTogYW55KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBQZWVyQ2xpZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uOiBQZWVyLkRhdGFDb25uZWN0aW9uXG4gIHByaXZhdGUgcmVhZG9ubHkgb3V0c3RhbmRpbmdSZXF1ZXN0czogTWFwPFJlcXVlc3RJZCwgUmVzb2x2ZUFuZFJlamVjdDxhbnk+PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogUGVlckxpc3RlbmVyW10gPSBbXVxuXG4gIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uXG4gICAgY29ubmVjdGlvbi5vbignZGF0YScsIHRoaXMuaGFuZGxlQ29ubmVjdGlvbkRhdGEpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25EYXRhID0gKG1lc3NhZ2U6IFNlcnZlclRvQ2xpZW50TWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IHJlY2VpdmVkIG1lc3NhZ2UnKVxuICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Jlc3BvbnNlJzpcbiAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShtZXNzYWdlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZXJyb3JSZXNwb25zZSc6XG4gICAgICAgIHRoaXMuaGFuZGxlRXJyb3JSZXNwb25zZShtZXNzYWdlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYnJvYWRjYXN0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVCcm9hZGNhc3QobWVzc2FnZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY29ubmVjdCA9IChwZWVySWQ6IFBlZXJJZCk6IFByb21pc2U8UGVlckNsaWVudD4gPT5cbiAgICBuZXcgUHJvbWlzZTxQZWVyQ2xpZW50PigocmVzb2x2ZTogUmVzb2x2ZTxhbnk+LCByZWplY3Q6IFJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgcGVlciA9IG5ld1BlZXIoKVxuICAgICAgbGV0IHJlc29sdmVkID0gZmFsc2VcbiAgICAgIHBlZXIub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcGVlci5vbignb3BlbicsICgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUVOVDogb3BlbicpXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBwZWVyLmNvbm5lY3QocGVlcklkLCB7IHJlbGlhYmxlOiB0cnVlIH0pXG4gICAgICAgIGNvbm5lY3Rpb24ub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NMSUVOVDogY29ubmVjdGlvbiBvcGVuJylcbiAgICAgICAgICBjb25zdCBjbGllbnQgPSBuZXcgUGVlckNsaWVudChjb25uZWN0aW9uKVxuICAgICAgICAgIHJlc29sdmUoY2xpZW50KVxuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuXG4gIHB1YmxpYyBzZW5kUmVxdWVzdCA9IChyZXF1ZXN0OiBhbnkpOiBQcm9taXNlPGFueT4gPT5cbiAgICBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlOiBSZXNvbHZlPGFueT4sIHJlamVjdDogUmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0TWVzc2FnZTogUmVxdWVzdE1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6ICdyZXF1ZXN0JyxcbiAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdDTElFTlQ6IHNlbmRpbmcgcmVxdWVzdCcpXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXF1ZXN0TWVzc2FnZSlcbiAgICAgIHRoaXMuY29ubmVjdGlvbi5zZW5kKHJlcXVlc3RNZXNzYWdlKVxuICAgICAgdGhpcy5vdXRzdGFuZGluZ1JlcXVlc3RzLnNldChyZXF1ZXN0TWVzc2FnZS5pZCwgeyByZXNvbHZlLCByZWplY3QgfSlcbiAgICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlUmVzcG9uc2UgPSAobWVzc2FnZTogUmVzcG9uc2VNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcmVxdWVzdElkID0gbWVzc2FnZS5yZXNwb25zZVRvXG4gICAgY29uc3QgcmVzb2x2ZUFuZFJlamVjdDogT3B0aW9uPFJlc29sdmVBbmRSZWplY3Q8YW55Pj4gPSB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZ2V0KHJlcXVlc3RJZClcbiAgICBpZiAocmVzb2x2ZUFuZFJlamVjdCkge1xuICAgICAgcmVzb2x2ZUFuZFJlamVjdC5yZXNvbHZlKG1lc3NhZ2UucmVzcG9uc2UpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYENMSUVOVDogcmVzcG9uc2UgcmVjZWl2ZWQgZm9yIHVua25vd24gcmVxdWVzdCAke3JlcXVlc3RJZH1gKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3JSZXNwb25zZSA9IChtZXNzYWdlOiBFcnJvclJlc3BvbnNlTWVzc2FnZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3RJZCA9IG1lc3NhZ2UucmVzcG9uc2VUb1xuICAgIGNvbnN0IHJlc29sdmVBbmRSZWplY3Q6IE9wdGlvbjxSZXNvbHZlQW5kUmVqZWN0PGFueT4+ID0gdGhpcy5vdXRzdGFuZGluZ1JlcXVlc3RzLmdldChyZXF1ZXN0SWQpXG4gICAgaWYgKHJlc29sdmVBbmRSZWplY3QpIHtcbiAgICAgIHJlc29sdmVBbmRSZWplY3QucmVqZWN0KCdFcnJvciByZWNlaXZlZCBmcm9tIHNlcnZlcicpXG4gICAgICB0aGlzLm91dHN0YW5kaW5nUmVxdWVzdHMuZGVsZXRlKHJlcXVlc3RJZClcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coYENMSUVOVDogZXJyb3IgcmVzcG9uc2UgcmVjZWl2ZWQgZm9yIHVua25vd24gcmVxdWVzdCAke3JlcXVlc3RJZH1gKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVMaXN0ZW5lciA9IChsaXN0ZW5lcjogUGVlckxpc3RlbmVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKVxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAobWVzc2FnZTogYW55KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXIobWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUJyb2FkY2FzdCA9IChtZXNzYWdlOiBCcm9hZGNhc3RNZXNzYWdlKTogdm9pZCA9PiB7XG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMobWVzc2FnZS5ib2R5KVxuICB9XG59XG4iLCJpbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5pbXBvcnQgeyBuZXdQZWVyIH0gZnJvbSAnLi9wZWVyLXV0aWxzJ1xuXG5leHBvcnQgdHlwZSBQZWVySWQgPSBzdHJpbmdcblxuZXhwb3J0IHR5cGUgUmVxdWVzdElkID0gc3RyaW5nXG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdE1lc3NhZ2Uge1xuICB0eXBlOiAncmVxdWVzdCdcbiAgaWQ6IFJlcXVlc3RJZFxuICByZXF1ZXN0OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlID0gUmVxdWVzdE1lc3NhZ2VcblxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZU1lc3NhZ2Uge1xuICB0eXBlOiAncmVzcG9uc2UnXG4gIHJlc3BvbnNlVG86IFJlcXVlc3RJZFxuICByZXNwb25zZTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JSZXNwb25zZU1lc3NhZ2Uge1xuICB0eXBlOiAnZXJyb3JSZXNwb25zZSdcbiAgcmVzcG9uc2VUbzogUmVxdWVzdElkXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvYWRjYXN0TWVzc2FnZSB7XG4gIHR5cGU6ICdicm9hZGNhc3QnXG4gIGJvZHk6IGFueVxufVxuXG5leHBvcnQgdHlwZSBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgPSBSZXNwb25zZU1lc3NhZ2UgfCBFcnJvclJlc3BvbnNlTWVzc2FnZSB8IEJyb2FkY2FzdE1lc3NhZ2VcblxuZXhwb3J0IGNsYXNzIFBlZXJTZXJ2ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHBlZXI6IFBlZXJcbiAgcHJpdmF0ZSByZWFkb25seSBjb25uZWN0aW9uczogUGVlci5EYXRhQ29ubmVjdGlvbltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSBoYW5kbGVNZXNzYWdlOiAobWVzc2FnZTogYW55KSA9PiBhbnlcblxuICBjb25zdHJ1Y3RvcihpZDogUGVlcklkLCBoYW5kbGVNZXNzYWdlOiAobWVzc2FnZTogYW55KSA9PiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlXG4gICAgdGhpcy5wZWVyID0gbmV3UGVlcihpZClcbiAgICB0aGlzLnBlZXIub24oJ2Vycm9yJywgKGVycikgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB0aGlzLnBlZXIub24oJ2Nvbm5lY3Rpb24nLCB0aGlzLmhhbmRsZU5ld0Nvbm5lY3Rpb24pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU5ld0Nvbm5lY3Rpb24gPSAoY29ubmVjdGlvbjogUGVlci5EYXRhQ29ubmVjdGlvbikgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdTRVJWRVI6IHJlY2VpdmVkIG5ldyBjb25uZWN0aW9uIGZyb20gJyArIGNvbm5lY3Rpb24ucGVlcilcbiAgICB0aGlzLmNvbm5lY3Rpb25zLnB1c2goY29ubmVjdGlvbilcbiAgICBjb25uZWN0aW9uLm9uKCdkYXRhJywgdGhpcy5oYW5kbGVDb25uZWN0aW9uRGF0YShjb25uZWN0aW9uKSlcbiAgfVxuXG4gIHB1YmxpYyBicm9hZGNhc3QgPSAobWVzc2FnZTogYW55KTogdm9pZCA9PiB7XG4gICAgY29uc3QgYnJvYWRjYXN0TWVzc2FnZTogQnJvYWRjYXN0TWVzc2FnZSA9IHsgdHlwZTogJ2Jyb2FkY2FzdCcsIGJvZHk6IG1lc3NhZ2UgfVxuICAgIGZvciAoY29uc3QgY29ubmVjdGlvbiBvZiB0aGlzLmNvbm5lY3Rpb25zKSB7XG4gICAgICBjb25uZWN0aW9uLnNlbmQoYnJvYWRjYXN0TWVzc2FnZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbm5lY3Rpb25EYXRhID0gKGNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pID0+IChtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UpOiB2b2lkID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnU0VSVkVSOiByZWNlaXZlZCBuZXcgbWVzc2FnZSBmcm9tICcgKyBjb25uZWN0aW9uLnBlZXIpXG4gICAgLy8gY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBsZXQgcmVzcG9uc2VcbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSB0aGlzLmhhbmRsZU1lc3NhZ2UobWVzc2FnZS5yZXF1ZXN0KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2VNZXNzYWdlOiBFcnJvclJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgICAgdHlwZTogJ2Vycm9yUmVzcG9uc2UnLFxuICAgICAgICByZXNwb25zZVRvOiBtZXNzYWdlLmlkLFxuICAgICAgfVxuICAgICAgY29ubmVjdGlvbi5zZW5kKGVycm9yUmVzcG9uc2VNZXNzYWdlKVxuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgICBjb25zdCByZXNwb25zZU1lc3NhZ2U6IFJlc3BvbnNlTWVzc2FnZSA9IHtcbiAgICAgIHR5cGU6ICdyZXNwb25zZScsXG4gICAgICByZXNwb25zZVRvOiBtZXNzYWdlLmlkLFxuICAgICAgcmVzcG9uc2UsXG4gICAgfVxuICAgIGNvbm5lY3Rpb24uc2VuZChyZXNwb25zZU1lc3NhZ2UpXG4gIH1cbn1cbiIsImltcG9ydCBQZWVyID0gcmVxdWlyZSgncGVlcmpzJylcblxuZXhwb3J0IGNvbnN0IG5ld1BlZXIgPSAoaWQ/OiBzdHJpbmcsIG9wdGlvbnM/OiBQZWVyLlBlZXJKU09wdGlvbik6IFBlZXIgPT4ge1xuICBjb25zdCBfUGVlciA9ICh3aW5kb3cgYXMgYW55KS5QZWVyIGFzIHR5cGVvZiBQZWVyXG4gIHJldHVybiBuZXcgX1BlZXIoaWQsIG9wdGlvbnMpXG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRFdmVudExpc3RlbmVyLCBXb3JsZFN0YXRlT3duZXIgfSBmcm9tICcuL3dvcmxkLXN0YXRlLW93bmVyJ1xuaW1wb3J0IHsgUGxheWVyQWRkZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50LCBXb3JsZEV2ZW50SWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBDbGllbnRSZXF1ZXN0LCBKb2luUmVzcG9uc2UsIFJlam9pblJlcXVlc3QsIFJlam9pblJlc3BvbnNlLCBXb3JsZEV2ZW50TWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZXMnXG5pbXBvcnQgeyBkZXNlcmlhbGlzZUZyb21Kc29uLCBzZXJpYWxpc2VUb0pzb24gfSBmcm9tICcuLi91dGlsL2pzb24tc2VyaWFsaXNhdGlvbidcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgQWRkUGxheWVyV29ybGRBY3Rpb24sIFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IFdvcmxkRXZlbnREYiB9IGZyb20gJy4uL2RiL3dvcmxkLWV2ZW50LWRiJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi4vc2NlbmVzL21haW4tZ2FtZS9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSB9IGZyb20gJy4uL3dvcmxkL2luaXRpYWwtd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBQZWVyU2VydmVyIH0gZnJvbSAnLi9wZWVyLXNlcnZlcidcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZU93bmVyOiBXb3JsZFN0YXRlT3duZXJcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZEV2ZW50RGI6IFdvcmxkRXZlbnREYlxuICBwcml2YXRlIHJlYWRvbmx5IGdhbWVJZDogR2FtZUlkXG5cbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cbiAgcHJpdmF0ZSByZWFkb25seSBwZWVyU2VydmVyOiBQZWVyU2VydmVyXG5cbiAgcHVibGljIGdldCBwbGF5ZXJJZCgpOiBQbGF5ZXJJZCB7XG4gICAgcmV0dXJuIEhPU1RfUExBWUVSX0lEXG4gIH1cblxuICBwdWJsaWMgZ2V0IHdvcmxkU3RhdGUoKTogV29ybGRTdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMud29ybGRTdGF0ZU93bmVyLndvcmxkU3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgcmVzdG9yZUdhbWUgPSBhc3luYyAod29ybGRFdmVudERiOiBXb3JsZEV2ZW50RGIsIGdhbWVJZDogR2FtZUlkKTogUHJvbWlzZTxTZXJ2ZXI+ID0+IHtcbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCB3b3JsZEV2ZW50RGIuZ2V0RXZlbnRzRm9yR2FtZShnYW1lSWQpXG4gICAgY29uc3Qgc29ydGVkRXZlbnRzID0gUi5zb3J0QnkoKGV2ZW50KSA9PiBldmVudC5pZCwgZXZlbnRzKVxuICAgIGNvbnN0IHdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFLmFwcGx5RXZlbnRzKHNvcnRlZEV2ZW50cylcbiAgICByZXR1cm4gbmV3IFNlcnZlcih3b3JsZEV2ZW50RGIsIGdhbWVJZCwgd29ybGRTdGF0ZSwgZXZlbnRzLmxlbmd0aCArIDEpXG4gIH1cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKSB7XG4gICAgICBsaXN0ZW5lcihldmVudCwgcHJldmlvdXNXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHdvcmxkRXZlbnREYjogV29ybGRFdmVudERiLCBnYW1lSWQ6IEdhbWVJZCwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZDogV29ybGRFdmVudElkKSB7XG4gICAgdGhpcy53b3JsZEV2ZW50RGIgPSB3b3JsZEV2ZW50RGJcbiAgICB0aGlzLmdhbWVJZCA9IGdhbWVJZFxuICAgIHRoaXMucGVlclNlcnZlciA9IG5ldyBQZWVyU2VydmVyKHRoaXMuZ2FtZUlkLCB0aGlzLmhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZSlcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lciA9IG5ldyBXb3JsZFN0YXRlT3duZXIod29ybGRTdGF0ZSwgbmV4dFdvcmxkRXZlbnRJZClcbiAgICB0aGlzLndvcmxkU3RhdGVPd25lci5hZGRMaXN0ZW5lcihcbiAgICAgIChldmVudDogV29ybGRFdmVudCwgcHJldmlvdXNXb3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXdXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gICAgICAgIHRoaXMud29ybGRFdmVudERiLnN0b3JlKHRoaXMuZ2FtZUlkLCBldmVudClcbiAgICAgICAgY29uc3QgbWVzc2FnZTogV29ybGRFdmVudE1lc3NhZ2UgPSB7IHR5cGU6ICd3b3JsZEV2ZW50JywgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCkgfVxuICAgICAgICB0aGlzLnBlZXJTZXJ2ZXIuYnJvYWRjYXN0KG1lc3NhZ2UpXG4gICAgICB9LFxuICAgIClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ2xpZW50Sm9pbiA9ICgpOiBKb2luUmVzcG9uc2UgPT4ge1xuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZ2FtZUhhc1N0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6ICd1bmFibGVUb0pvaW4nIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWRkUGxheWVyQWN0aW9uOiBBZGRQbGF5ZXJXb3JsZEFjdGlvbiA9IHsgdHlwZTogJ2FkZFBsYXllcicgfVxuICAgICAgY29uc3QgcGxheWVyQWRkZWRFdmVudCA9IDxQbGF5ZXJBZGRlZFdvcmxkRXZlbnQ+dGhpcy5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWRkUGxheWVyQWN0aW9uKVswXVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ2pvaW5lZCcsXG4gICAgICAgIHBsYXllcklkOiBwbGF5ZXJBZGRlZEV2ZW50LnBsYXllcklkLFxuICAgICAgICB3b3JsZFN0YXRlOiB0aGlzLndvcmxkU3RhdGUudG9Kc29uKCksXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRSZWpvaW4gPSAobWVzc2FnZTogUmVqb2luUmVxdWVzdCk6IFJlam9pblJlc3BvbnNlID0+IHtcbiAgICBjb25zdCB3b3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgaWYgKHdvcmxkU3RhdGUuaXNWYWxpZFBsYXllcklkKG1lc3NhZ2UucGxheWVySWQpKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiAncmVqb2luZWQnLCB3b3JsZFN0YXRlOiB3b3JsZFN0YXRlLnRvSnNvbigpIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdHlwZTogJ3VuYWJsZVRvUmVqb2luJyB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGllbnRUb1NlcnZlck1lc3NhZ2UgPSAobWVzc2FnZTogQ2xpZW50UmVxdWVzdCk6IGFueSA9PiB7XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnam9pbic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNsaWVudEpvaW4oKVxuICAgICAgY2FzZSAncmVqb2luJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2xpZW50UmVqb2luKG1lc3NhZ2UpXG4gICAgICBjYXNlICd3b3JsZEFjdGlvbic6XG4gICAgICAgIHRoaXMud29ybGRTdGF0ZU93bmVyLmhhbmRsZUFjdGlvbihtZXNzYWdlLnBsYXllcklkLCBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuYWN0aW9uKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgdGhpcy53b3JsZFN0YXRlT3duZXIuaGFuZGxlQWN0aW9uKHBsYXllcklkLCBhY3Rpb24pXG5cbiAgcHVibGljIHNlbmRBY3Rpb24gPSBhc3luYyAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgdGhpcy5oYW5kbGVBY3Rpb24ocGxheWVySWQsIGFjdGlvbilcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7XG4gIEF0dGFja1dvcmxkQWN0aW9uLFxuICBDaGFuZ2VQbGF5ZXJOYW1lV29ybGRBY3Rpb24sXG4gIEVuZFR1cm5Xb3JsZEFjdGlvbixcbiAgSW5pdGlhbGlzZVdvcmxkQWN0aW9uLFxuICBNb3ZlVW5pdFdvcmxkQWN0aW9uLFxuICBXb3JsZEFjdGlvbixcbn0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7XG4gIEdhbWVTdGFydGVkV29ybGRFdmVudCxcbiAgSW5pdGlhbGlzZVdvcmxkRXZlbnQsXG4gIE5ld1R1cm5Xb3JsZEV2ZW50LFxuICBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCxcbiAgUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCxcbiAgVW5pdE1vdmVkV29ybGRFdmVudCxcbiAgV29ybGRFdmVudCxcbn0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgSE9TVF9QTEFZRVJfSUQsIFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBXb3JsZEdlbmVyYXRvciB9IGZyb20gJy4vd29ybGQtZ2VuZXJhdG9yJ1xuaW1wb3J0IHsgQXR0YWNrV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi9hdHRhY2std29ybGQtYWN0aW9uLWhhbmRsZXInXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEFjdGlvbkhhbmRsZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcHJpdmF0ZSByZWFkb25seSBuZXh0V29ybGRFdmVudElkOiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQsIG5leHRXb3JsZEV2ZW50SWQ6IG51bWJlcikge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm5leHRXb3JsZEV2ZW50SWQgPSBuZXh0V29ybGRFdmVudElkXG4gIH1cblxuICBwdWJsaWMgY2FsY3VsYXRlV29ybGRFdmVudHMgPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgY29uc3QgZXZlbnRzID0gdGhpcy5jYWxjdWxhdGVTcGVjaWZpY1dvcmxkRXZlbnRzKGFjdGlvbilcbiAgICByZXR1cm4gdGhpcy5iZWdpbk5ld1R1cm5JZk5lZWRlZChldmVudHMpXG4gIH1cblxuICBwcml2YXRlIGJlZ2luTmV3VHVybklmTmVlZGVkKGV2ZW50czogV29ybGRFdmVudFtdKSB7XG4gICAgY29uc3QgbGFzdEV2ZW50ID0gUi5sYXN0KGV2ZW50cylcbiAgICBpZiAobGFzdEV2ZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlLmFwcGx5RXZlbnRzKGV2ZW50cylcbiAgICAgIGlmIChuZXdXb3JsZFN0YXRlLmNhbkFueVBsYXllckFjdCgpIHx8IG5ld1dvcmxkU3RhdGUudW5pdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiBldmVudHNcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5leHRXb3JsZEV2ZW50SWQgPSBsYXN0RXZlbnQuaWQgKyAxXG4gICAgICAgIGNvbnN0IG5ld1R1cm5FdmVudDogTmV3VHVybldvcmxkRXZlbnQgPSB7IGlkOiBuZXh0V29ybGRFdmVudElkLCB0eXBlOiAnbmV3VHVybicgfVxuICAgICAgICByZXR1cm4gUi5hcHBlbmQobmV3VHVybkV2ZW50LCBldmVudHMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVTcGVjaWZpY1dvcmxkRXZlbnRzID0gKGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2luaXRpYWxpc2UnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVJbml0aWFsaXNlKGFjdGlvbilcbiAgICAgIGNhc2UgJ2FkZFBsYXllcic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFkZFBsYXllcigpXG4gICAgICBjYXNlICdjaGFuZ2VQbGF5ZXJOYW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ2hhbmdlUGxheWVyTmFtZShhY3Rpb24pXG4gICAgICBjYXNlICdzdGFydEdhbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTdGFydEdhbWUoKVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXR0YWNrKGFjdGlvbilcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW92ZVVuaXQoYWN0aW9uKVxuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVuZFR1cm4oYWN0aW9uKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5pdGlhbGlzZSA9IChhY3Rpb246IEluaXRpYWxpc2VXb3JsZEFjdGlvbik6IFtJbml0aWFsaXNlV29ybGRFdmVudF0gPT4ge1xuICAgIGlmICh0aGlzLm5leHRXb3JsZEV2ZW50SWQgPiAwKSB7XG4gICAgICB0aHJvdyBgQ2FuIG9ubHkgaW5pdGlhbGlzZSBhcyB0aGUgZmlyc3QgZXZlbnRgXG4gICAgfVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAnaW5pdGlhbGlzZScsIHN0YXRlOiBhY3Rpb24uc3RhdGUgfV1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWRkUGxheWVyID0gKCk6IFtQbGF5ZXJBZGRlZFdvcmxkRXZlbnRdID0+IHtcbiAgICBjb25zdCBleGlzdGluZ1BsYXllcklkcyA9IHRoaXMud29ybGRTdGF0ZS5nZXRQbGF5ZXJJZHMoKVxuICAgIGNvbnN0IHBsYXllcklkID0gUi5hcHBseShNYXRoLm1heCwgZXhpc3RpbmdQbGF5ZXJJZHMpICsgMVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAncGxheWVyQWRkZWQnLCBwbGF5ZXJJZCB9XVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2VQbGF5ZXJOYW1lID0gKGFjdGlvbjogQ2hhbmdlUGxheWVyTmFtZVdvcmxkQWN0aW9uKTogW1BsYXllckNoYW5nZWROYW1lV29ybGRFdmVudF0gPT4ge1xuICAgIHRoaXMuZ2V0UGxheWVyKClcbiAgICByZXR1cm4gW3sgaWQ6IHRoaXMubmV4dFdvcmxkRXZlbnRJZCwgdHlwZTogJ3BsYXllckNoYW5nZWROYW1lJywgcGxheWVySWQ6IHRoaXMucGxheWVySWQsIG5hbWU6IGFjdGlvbi5uYW1lIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVN0YXJ0R2FtZSA9ICgpOiBbR2FtZVN0YXJ0ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5nYW1lSGFzU3RhcnRlZCkge1xuICAgICAgdGhyb3cgYENhbm5vdCBzdGFydCBhbiBhbHJlYWR5LXN0YXJ0ZWQgZ2FtZWBcbiAgICB9XG4gICAgaWYgKHRoaXMucGxheWVySWQgIT09IEhPU1RfUExBWUVSX0lEKSB7XG4gICAgICB0aHJvdyBgQ2Fubm90IHN0YXJ0IHRoZSBnYW1lIHVubGVzcyB0aGUgaG9zdGBcbiAgICB9XG4gICAgY29uc3Qgd29ybGRHZW5lcmF0b3IgPSBuZXcgV29ybGRHZW5lcmF0b3IodGhpcy53b3JsZFN0YXRlKVxuICAgIGNvbnN0IHVuaXRzID0gd29ybGRHZW5lcmF0b3IuZ2VuZXJhdGVVbml0cygpXG4gICAgY29uc3QgbW91bnRhaW5zID0gd29ybGRHZW5lcmF0b3IuZ2VuZXJhdGVNb3VudGFpbnMoKVxuICAgIHJldHVybiBbeyBpZDogdGhpcy5uZXh0V29ybGRFdmVudElkLCB0eXBlOiAnZ2FtZVN0YXJ0ZWQnLCB1bml0cywgbW91bnRhaW5zIH1dXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKTogV29ybGRFdmVudFtdID0+XG4gICAgbmV3IEF0dGFja1dvcmxkQWN0aW9uSGFuZGxlcih0aGlzLndvcmxkU3RhdGUsIHRoaXMucGxheWVySWQsIHRoaXMubmV4dFdvcmxkRXZlbnRJZCkuaGFuZGxlQXR0YWNrKGFjdGlvbilcblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbik6IFtVbml0TW92ZWRXb3JsZEV2ZW50XSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRvIH0gPSBhY3Rpb25cbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICB9XG4gICAgY29uc3QgZnJvbSA9IHVuaXQubG9jYXRpb25cbiAgICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICAgIH1cbiAgICBpZiAoIXRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyh0bykpIHtcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKSkge1xuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgICB9XG4gICAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCAxKSB7XG4gICAgICB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIG1vdmVgXG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICAgIHR5cGU6ICd1bml0TW92ZWQnLFxuICAgICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCxcbiAgICAgICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gICAgICAgIHVuaXRJZCxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgdG8sXG4gICAgICB9LFxuICAgIF1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9IChhY3Rpb246IEVuZFR1cm5Xb3JsZEFjdGlvbik6IFdvcmxkRXZlbnRbXSA9PiB7XG4gICAgaWYgKGFjdGlvbi50dXJuICE9PSB0aGlzLndvcmxkU3RhdGUudHVybikge1xuICAgICAgdGhyb3cgYENhbm5vdCBlbmQgYSB0dXJuIHRoYXQncyBub3QgdGhlIGN1cnJlbnQgdHVybmBcbiAgICB9XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy5nZXRQbGF5ZXIoKVxuICAgIGlmIChwbGF5ZXIuZW5kZWRUdXJuKSB7XG4gICAgICB0aHJvdyBgUGxheWVyIGhhcyBhbHJlYWR5IGVuZGVkIHRoZWlyIHR1cm5gXG4gICAgfVxuICAgIGNvbnN0IHBsYXllckVuZGVkVHVybkFjdGlvbjogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCA9IHtcbiAgICAgIGlkOiB0aGlzLm5leHRXb3JsZEV2ZW50SWQsXG4gICAgICB0eXBlOiAncGxheWVyRW5kZWRUdXJuJyxcbiAgICAgIHBsYXllcklkOiB0aGlzLnBsYXllcklkLFxuICAgIH1cbiAgICByZXR1cm4gW3BsYXllckVuZGVkVHVybkFjdGlvbl1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgdGhyb3cgYE5vIHBsYXllciB3aXRoIElEICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgfVxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC9wbGF5ZXInXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgcmFuZG9tRWxlbWVudCB9IGZyb20gJy4uL3V0aWwvcmFuZG9tLXV0aWwnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzIH0gZnJvbSAnLi4vd29ybGQvYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5cbmNvbnN0IExMQU1BX05BTUVTID0gW1xuICAnV2FsdGVyJyxcbiAgJ0RvbGx5JyxcbiAgJ0NoZXdwYWNhJyxcbiAgJ0JhcmFjayBPLiBMbGFtYScsXG4gICdDb21vIFNlJyxcbiAgJ0Z1enp5JyxcbiAgJ0plcmVteScsXG4gICdBbGZvbnNvJyxcbiAgJ1Jvc2UnLFxuICAnTG9yZW56bycsXG4gICdSaXRhJyxcbiAgJ0FudG9uJyxcbiAgJ0Jlcm5hcmQnLFxuICAnQ2Fzc2llJyxcbiAgJ0ZyYW5jZXNjYScsXG4gICdNaWxseScsXG4gICdDYXJsb3MnLFxuICAnUmljYXJkbycsXG5dXG5cbmV4cG9ydCBjbGFzcyBXb3JsZEdlbmVyYXRvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIHJlbWFpbmluZ0hleGVzOiBIZXhbXVxuICBwcml2YXRlIG5leHRVbml0SWQ6IFVuaXRJZCA9IDFcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMucmVtYWluaW5nSGV4ZXMgPSBBcnJheS5mcm9tKHdvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpXG4gIH1cblxuICBwcml2YXRlIGdlbmVyYXRlVW5pdCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0ID0+IHtcbiAgICBjb25zdCBpZCA9IHRoaXMubmV4dFVuaXRJZCsrXG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIGNvbnN0IG5hbWUgPSByYW5kb21FbGVtZW50KExMQU1BX05BTUVTKVxuICAgIHJldHVybiBuZXcgVW5pdCh7XG4gICAgICBpZCxcbiAgICAgIHBsYXllcklkLFxuICAgICAgbmFtZSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZU1vdW50YWluID0gKCk6IEhleCA9PiB7XG4gICAgY29uc3QgbG9jYXRpb24gPSByYW5kb21FbGVtZW50KHRoaXMucmVtYWluaW5nSGV4ZXMpXG4gICAgdGhpcy5yZW1haW5pbmdIZXhlcyA9IFIud2l0aG91dChbbG9jYXRpb25dLCB0aGlzLnJlbWFpbmluZ0hleGVzKVxuICAgIHJldHVybiBsb2NhdGlvblxuICB9XG5cbiAgcHVibGljIGdlbmVyYXRlTW91bnRhaW5zID0gKCk6IEhleFtdID0+IFIucmFuZ2UoMSwgMTApLm1hcCh0aGlzLmdlbmVyYXRlTW91bnRhaW4pXG5cbiAgcHVibGljIGdlbmVyYXRlVW5pdHMgPSAoKTogVW5pdFtdID0+XG4gICAgUi5jaGFpbigocGxheWVyKSA9PiBbdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKSwgdGhpcy5nZW5lcmF0ZVVuaXQocGxheWVyLmlkKV0sIHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzKVxufVxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRFdmVudCwgV29ybGRFdmVudElkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb25IYW5kbGVyIH0gZnJvbSAnLi93b3JsZC1hY3Rpb24taGFuZGxlcidcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuXG5leHBvcnQgdHlwZSBXb3JsZEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZU93bmVyIHtcbiAgcHVibGljIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWRcbiAgcHJpdmF0ZSByZWFkb25seSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBuZXh0V29ybGRFdmVudElkOiBXb3JsZEV2ZW50SWQpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkID0gbmV4dFdvcmxkRXZlbnRJZFxuICB9XG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpOiB2b2lkID0+IHtcbiAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZTogV29ybGRTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50LCBwcmV2aW91c1dvcmxkU3RhdGUsIG5ld1dvcmxkU3RhdGUpXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUFjdGlvbiA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiBXb3JsZEV2ZW50W10gPT4ge1xuICAgIGNvbnN0IHdvcmxkQWN0aW9uSGFuZGxlciA9IG5ldyBXb3JsZEFjdGlvbkhhbmRsZXIodGhpcy53b3JsZFN0YXRlLCBwbGF5ZXJJZCwgdGhpcy5uZXh0V29ybGRFdmVudElkKVxuICAgIGNvbnN0IGV2ZW50cyA9IHdvcmxkQWN0aW9uSGFuZGxlci5jYWxjdWxhdGVXb3JsZEV2ZW50cyhhY3Rpb24pXG4gICAgZm9yIChjb25zdCBldmVudCBvZiBldmVudHMpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzV29ybGRTdGF0ZSA9IHRoaXMud29ybGRTdGF0ZVxuICAgICAgY29uc3QgbmV3V29ybGRTdGF0ZSA9IHByZXZpb3VzV29ybGRTdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgICAgdGhpcy53b3JsZFN0YXRlID0gbmV3V29ybGRTdGF0ZVxuICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQsIHByZXZpb3VzV29ybGRTdGF0ZSwgbmV3V29ybGRTdGF0ZSlcbiAgICB9XG4gICAgdGhpcy5uZXh0V29ybGRFdmVudElkICs9IGV2ZW50cy5sZW5ndGhcbiAgICByZXR1cm4gZXZlbnRzXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5cbmNvbnN0IHBhZGRpbmcgPSAxMFxuY29uc3QgbWluaW11bVdpZHRoID0gMjAwXG5jb25zdCBtaW5pbXVtSGVpZ2h0ID0gNTBcblxuZXhwb3J0IGNsYXNzIE1lbnVCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHtcbiAgcHJpdmF0ZSBsYWJlbDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KVxuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKVxuICAgIHRoaXMuc2V0T3JpZ2luKDAsIDApXG5cbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXG4gICAgICAudGV4dCh4ICsgcGFkZGluZywgeSArIHBhZGRpbmcsIHRleHQpXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpXG5cbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHBhZGRpbmdcbiAgICBjb25zdCBsYWJlbEhlaWdodCA9IHRoaXMubGFiZWwuaGVpZ2h0ICsgcGFkZGluZ1xuXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGggPj0gbWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IG1pbmltdW1XaWR0aFxuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gbWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogbWluaW11bUhlaWdodFxuXG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSlcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVydXAnLCB0aGlzLmVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUpXG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljaylcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignIzAwMDAwMCcpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpXG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJylcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OClcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpXG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpXG4gIH1cblxuICBwdWJsaWMgc2V0WSh2YWx1ZT86IG51bWJlcik6IHRoaXMge1xuICAgIHRoaXMubGFiZWwuc2V0WSh2YWx1ZSlcbiAgICByZXR1cm4gc3VwZXIuc2V0WSh2YWx1ZSlcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgQmx1ZWJpcmQgZnJvbSAnYmx1ZWJpcmQnXG5cbmV4cG9ydCBjb25zdCBmaXJlQW5kRm9yZ2V0ID0gPFQ+KGFzeW5jVGFzazogKCkgPT4gUHJvbWlzZTxUPik6IHZvaWQgPT4ge1xuICBhc3luY1Rhc2soKVxufVxuXG5leHBvcnQgY29uc3Qgd2l0aFRpbWVvdXQgPSAodGltZW91dDogbnVtYmVyKSA9PiA8VD4ocHJvbWlzZTogUHJvbWlzZTxUPik6IFByb21pc2U8VD4gPT5cbiAgQmx1ZWJpcmQuUHJvbWlzZS5yZXNvbHZlKHByb21pc2UpLnRpbWVvdXQodGltZW91dClcblxuZXhwb3J0IHR5cGUgUmVzb2x2ZTxUPiA9ICh2YWx1ZT86IFQgfCBQcm9taXNlTGlrZTxUPikgPT4gdm9pZFxuZXhwb3J0IHR5cGUgUmVqZWN0ID0gKHJlYXNvbj86IGFueSkgPT4gdm9pZFxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4uL3dvcmxkL2hpdC1wb2ludHMnXG5pbXBvcnQgeyBBY3Rpb25Qb2ludHMgfSBmcm9tICcuLi93b3JsZC9hY3Rpb24tcG9pbnRzJ1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vd29ybGQvcGxheWVyJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXNlVG9Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKHNlcmlhbGlzZVRvSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGV4JyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgV29ybGRNYXApIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnV29ybGRNYXAnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBXb3JsZFN0YXRlKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1dvcmxkU3RhdGUnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBVbml0KSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ1VuaXQnIH1cbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBIaXRQb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udmFsdWUudG9Kc29uKCksIF9sbGFtYUNsYXNzOiAnSGl0UG9pbnRzJyB9XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgQWN0aW9uUG9pbnRzKSB7XG4gICAgICAgIHJldHVybiB7IC4uLnZhbHVlLnRvSnNvbigpLCBfbGxhbWFDbGFzczogJ0FjdGlvblBvaW50cycgfVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFBsYXllcikge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdQbGF5ZXInIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gc2VyaWFsaXNlVG9Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlc2VyaWFsaXNlRnJvbUpzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoZGVzZXJpYWxpc2VGcm9tSnNvbilcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdIZXgnKSB7XG4gICAgICAgIHJldHVybiBIZXguZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnV29ybGRNYXAnKSB7XG4gICAgICAgIHJldHVybiBXb3JsZE1hcC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdXb3JsZFN0YXRlJykge1xuICAgICAgICByZXR1cm4gV29ybGRTdGF0ZS5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdVbml0Jykge1xuICAgICAgICByZXR1cm4gVW5pdC5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUuX2xsYW1hQ2xhc3MgPT09ICdBY3Rpb25Qb2ludHMnKSB7XG4gICAgICAgIHJldHVybiBBY3Rpb25Qb2ludHMuZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09PSAnSGl0UG9pbnRzJykge1xuICAgICAgICByZXR1cm4gSGl0UG9pbnRzLmZyb21Kc29uKHZhbHVlKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5fbGxhbWFDbGFzcyA9PT0gJ1BsYXllcicpIHtcbiAgICAgICAgcmV0dXJuIFBsYXllci5mcm9tSnNvbih2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdDogYW55ID0ge31cbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIE9iamVjdC5lbnRyaWVzKHZhbHVlKSkge1xuICAgICAgICAgIG5ld09iamVjdFtrZXldID0gZGVzZXJpYWxpc2VGcm9tSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVHdlZW4gPSBQaGFzZXIuVHdlZW5zLlR3ZWVuXG5cbmV4cG9ydCBjb25zdCBwbGF5VHdlZW4gPSAodHdlZW46IFR3ZWVuKTogUHJvbWlzZTx2b2lkPiA9PlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdHdlZW4uc2V0Q2FsbGJhY2soJ29uQ29tcGxldGUnLCByZXNvbHZlLCBbXSkucGxheSgpKVxuIiwiZXhwb3J0IGNvbnN0IHJhbmRvbUludEluY2x1c2l2ZSA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIgPT5cbiAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pblxuXG5leHBvcnQgY29uc3QgcmFuZG9tSW50RXhjbHVzaXZlID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbUVsZW1lbnQgPSA8VD4oYXJyYXk6IFRbXSk6IFQgPT4gYXJyYXlbcmFuZG9tSW50RXhjbHVzaXZlKDAsIGFycmF5Lmxlbmd0aCldXG4iLCJleHBvcnQgdHlwZSBPcHRpb248VD4gPSBUIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVzdDxUPiB7XG4gIHR5cGU6ICdqdXN0J1xuICBpdGVtOiBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aGluZyB7XG4gIHR5cGU6ICdub3RoaW5nJ1xufVxuXG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IEp1c3Q8VD4gfCBOb3RoaW5nXG5cbmV4cG9ydCBjb25zdCB0b01heWJlID0gPFQ+KG9wdGlvbjogT3B0aW9uPFQ+KTogTWF5YmU8VD4gPT4gKG9wdGlvbiA9PT0gdW5kZWZpbmVkID8gbm90aGluZyA6IGp1c3Qob3B0aW9uKSlcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pXG4iLCJleHBvcnQgY2xhc3MgVW5yZWFjaGFibGVDYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBuZXZlcikge1xuICAgIHN1cGVyKGBVbnJlYWNoYWJsZSBjYXNlOiAke3ZhbHVlfWApXG4gIH1cbn1cbiIsImltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgQWN0aW9uUG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXI7IG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyByZWR1Y2UgPSAocG9pbnRzOiBudW1iZXIpOiBBY3Rpb25Qb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXI7IG1heD86IG51bWJlciB9ID0ge30pOiBBY3Rpb25Qb2ludHMgPT5cbiAgICBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiB0aGlzLm1heCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcbn1cbiIsImltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgSGV4LCBIZXhWZWN0b3IgfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGVudW0gSGV4RGlyZWN0aW9uIHtcbiAgRUFTVCA9ICdFQVNUJyxcbiAgV0VTVCA9ICdXRVNUJyxcbiAgTk9SVEhfRUFTVCA9ICdOT1JUSF9FQVNUJyxcbiAgU09VVEhfRUFTVCA9ICdTT1VUSF9FQVNUJyxcbiAgTk9SVEhfV0VTVCA9ICdOT1JUSF9XRVNUJyxcbiAgU09VVEhfV0VTVCA9ICdTT1VUSF9XRVNUJyxcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9ESVJFQ1RJT05TID0gW1xuICBIZXhEaXJlY3Rpb24uRUFTVCxcbiAgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uV0VTVCxcbiAgSGV4RGlyZWN0aW9uLk5PUlRIX1dFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9FQVNULFxuXVxuXG5leHBvcnQgY29uc3QgZ2V0VW5pdFZlY3RvciA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IEhleFZlY3RvciA9PiB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDEsIDApXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAtMSlcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9XRVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMCwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfRUFTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIDEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KC0xLCAxKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZGlyZWN0aW9uKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgZ2V0VW5pdFZlY3RvciwgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi9oZXgtZGlyZWN0aW9uJ1xuXG5leHBvcnQgY2xhc3MgSGV4IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGdldCB6KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC10aGlzLnggLSB0aGlzLnlcbiAgfVxuXG4gIHB1YmxpYyBwbHVzID0gKHRoYXQ6IEhleCk6IEhleCA9PiBuZXcgSGV4KHRoaXMueCArIHRoYXQueCwgdGhpcy55ICsgdGhhdC55KVxuXG4gIHB1YmxpYyBuZWlnaGJvdXJzID0gKCk6IEhleFtdID0+IEhleC5ORUlHSEJPVVJTLm1hcCh0aGlzLnBsdXMpXG5cbiAgcHVibGljIGlzQWRqYWNlbnRUbyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IFIuaW5jbHVkZXModGhhdCwgdGhpcy5uZWlnaGJvdXJzKCkpXG5cbiAgcHVibGljIGRpc3RhbmNlVG8gPSAodGhhdDogSGV4KTogbnVtYmVyID0+XG4gICAgKE1hdGguYWJzKHRoaXMueCAtIHRoYXQueCkgKyBNYXRoLmFicyh0aGlzLnkgLSB0aGF0LnkpICsgTWF0aC5hYnModGhpcy56IC0gdGhhdC56KSkgLyAyXG5cbiAgcHJpdmF0ZSBzdGF0aWMgTkVJR0hCT1VSUzogSGV4W10gPSBbXG4gICAgbmV3IEhleCgwLCAxKSxcbiAgICBuZXcgSGV4KDEsIDApLFxuICAgIG5ldyBIZXgoMSwgLTEpLFxuICAgIG5ldyBIZXgoMCwgLTEpLFxuICAgIG5ldyBIZXgoLTEsIDApLFxuICAgIG5ldyBIZXgoLTEsIDEpLFxuICBdXG5cbiAgcHVibGljIGVxdWFscyA9ICh0aGF0OiBIZXgpOiBib29sZWFuID0+IHRoaXMueCA9PT0gdGhhdC54ICYmIHRoaXMueSA9PT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcblxuICBwdWJsaWMgZ28gPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXggPT4gdGhpcy5wbHVzKGdldFVuaXRWZWN0b3IoZGlyZWN0aW9uKSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGV4ID0+IG5ldyBIZXgoanNvbi54LCBqc29uLnkpXG59XG5cbmV4cG9ydCB0eXBlIEhleFZlY3RvciA9IEhleFxuIiwiaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBIaXRQb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlcjsgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIGRhbWFnZSA9IChwb2ludHM6IG51bWJlcik6IEhpdFBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEhpdFBvaW50cyA9PlxuICAgIG5ldyBIaXRQb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IGFueSA9PiAoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQsIG1heDogdGhpcy5tYXggfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IEhpdFBvaW50cyA9PiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDoganNvbi5jdXJyZW50LCBtYXg6IGpzb24ubWF4IH0pXG59XG4iLCJpbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBIT1NUX1BMQVlFUl9JRCwgUGxheWVyIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1dPUkxEX1NUQVRFOiBXb3JsZFN0YXRlID0gbmV3IFdvcmxkU3RhdGUoe1xuICB0dXJuOiAwLFxuICBtYXA6IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiAxMCwgaGVpZ2h0OiA2IH0pLFxuICBwbGF5ZXJzOiBbXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogSE9TVF9QTEFZRVJfSUQsXG4gICAgICBuYW1lOiAnUGxheWVyIDEnLFxuICAgICAgZW5kZWRUdXJuOiBmYWxzZSxcbiAgICB9KSxcbiAgXSxcbiAgdW5pdHM6IFtdLFxufSlcbiIsImV4cG9ydCBjb25zdCBIT1NUX1BMQVlFUl9JRCA9IDFcblxuZXhwb3J0IHR5cGUgUGxheWVySWQgPSBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIHJlYWRvbmx5IGlkOiBQbGF5ZXJJZFxuICByZWFkb25seSBuYW1lOiBzdHJpbmdcbiAgcmVhZG9ubHkgZW5kZWRUdXJuOiBib29sZWFuXG4gIHJlYWRvbmx5IGRlZmVhdGVkOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIG5hbWUsXG4gICAgZW5kZWRUdXJuID0gZmFsc2UsXG4gICAgZGVmZWF0ZWQgPSBmYWxzZSxcbiAgfToge1xuICAgIGlkOiBQbGF5ZXJJZFxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGVuZGVkVHVybj86IGJvb2xlYW5cbiAgICBkZWZlYXRlZD86IGJvb2xlYW5cbiAgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmVuZGVkVHVybiA9IGVuZGVkVHVyblxuICAgIHRoaXMuZGVmZWF0ZWQgPSBkZWZlYXRlZFxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIGlkID0gdGhpcy5pZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGVuZGVkVHVybiA9IHRoaXMuZW5kZWRUdXJuLFxuICAgIGRlZmVhdGVkID0gdGhpcy5kZWZlYXRlZCxcbiAgfTogeyBpZD86IFBsYXllcklkOyBuYW1lPzogc3RyaW5nOyBlbmRlZFR1cm4/OiBib29sZWFuOyBkZWZlYXRlZD86IGJvb2xlYW4gfSA9IHt9KTogUGxheWVyID0+XG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBlbmRlZFR1cm4sXG4gICAgICBkZWZlYXRlZCxcbiAgICB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7IGlkOiB0aGlzLmlkLCBuYW1lOiB0aGlzLm5hbWUsIGVuZGVkVHVybjogdGhpcy5lbmRlZFR1cm4sIGRlZmVhdGVkOiB0aGlzLmRlZmVhdGVkIH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBQbGF5ZXIgPT5cbiAgICBuZXcgUGxheWVyKHtcbiAgICAgIGlkOiBqc29uLmlkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgZW5kZWRUdXJuOiBqc29uLmVuZGVkVHVybixcbiAgICAgIGRlZmVhdGVkOiBqc29uLmRlZmVhdGVkLFxuICAgIH0pXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCB7IEFjdGlvblBvaW50cyB9IGZyb20gJy4vYWN0aW9uLXBvaW50cydcbmltcG9ydCB7IEhpdFBvaW50cyB9IGZyb20gJy4vaGl0LXBvaW50cydcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCB0eXBlIFVuaXRJZCA9IG51bWJlclxuXG5leHBvcnQgY2xhc3MgVW5pdCB7XG4gIHJlYWRvbmx5IGlkOiBVbml0SWRcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICByZWFkb25seSBsb2NhdGlvbjogSGV4XG4gIHJlYWRvbmx5IGhpdFBvaW50czogSGl0UG9pbnRzXG4gIHJlYWRvbmx5IGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGlkLFxuICAgIHBsYXllcklkLFxuICAgIG5hbWUsXG4gICAgbG9jYXRpb24sXG4gICAgaGl0UG9pbnRzLFxuICAgIGFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkOiBVbml0SWRcbiAgICBwbGF5ZXJJZDogUGxheWVySWRcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBsb2NhdGlvbjogSGV4XG4gICAgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50c1xuICB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzXG4gICAgdGhpcy5hY3Rpb25Qb2ludHMgPSBhY3Rpb25Qb2ludHNcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBVbml0ID0+IHRoaXMuY29weSh7IGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMuZGFtYWdlKHBvaW50cykgfSlcblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgaWQgPSB0aGlzLmlkLFxuICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbixcbiAgICBoaXRQb2ludHMgPSB0aGlzLmhpdFBvaW50cyxcbiAgICBhY3Rpb25Qb2ludHMgPSB0aGlzLmFjdGlvblBvaW50cyxcbiAgfToge1xuICAgIGlkPzogVW5pdElkXG4gICAgcGxheWVySWQ/OiBQbGF5ZXJJZFxuICAgIG5hbWU/OiBzdHJpbmdcbiAgICBsb2NhdGlvbj86IEhleFxuICAgIGhpdFBvaW50cz86IEhpdFBvaW50c1xuICAgIGFjdGlvblBvaW50cz86IEFjdGlvblBvaW50c1xuICB9ID0ge30pOiBVbml0ID0+IG5ldyBVbml0KHsgaWQsIHBsYXllcklkLCBuYW1lLCBsb2NhdGlvbiwgaGl0UG9pbnRzLCBhY3Rpb25Qb2ludHMgfSlcblxuICBwdWJsaWMgbW92ZSA9IChsb2NhdGlvbjogSGV4LCBhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGxvY2F0aW9uLCBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZHVjZShhY3Rpb25Qb2ludHNDb25zdW1lZCkgfSlcblxuICBwdWJsaWMgcmVkdWNlQWN0aW9uUG9pbnRzID0gKGFjdGlvblBvaW50c0NvbnN1bWVkOiBudW1iZXIpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZnJlc2hBY3Rpb25Qb2ludHMgPSAoKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZnJlc2goKSB9KVxuXG4gIHB1YmxpYyBnZXQgaGFzVW5zcGVudEFjdGlvblBvaW50cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDBcbiAgfVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgaWQ6IHRoaXMuaWQsXG4gICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLnRvSnNvbigpLFxuICAgIGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMudG9Kc29uKCksXG4gICAgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy50b0pzb24oKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFVuaXQgPT5cbiAgICBuZXcgVW5pdCh7XG4gICAgICBpZDoganNvbi5pZCxcbiAgICAgIHBsYXllcklkOiBqc29uLnBsYXllcklkLFxuICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgbG9jYXRpb246IEhleC5mcm9tSnNvbihqc29uLmxvY2F0aW9uKSxcbiAgICAgIGhpdFBvaW50czogSGl0UG9pbnRzLmZyb21Kc29uKGpzb24uaGl0UG9pbnRzKSxcbiAgICAgIGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzLmZyb21Kc29uKGpzb24uYWN0aW9uUG9pbnRzKSxcbiAgICB9KVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHtcbiAgQ29tYmF0V29ybGRFdmVudCxcbiAgR2FtZU92ZXJXb3JsZEV2ZW50LFxuICBHYW1lU3RhcnRlZFdvcmxkRXZlbnQsXG4gIEluaXRpYWxpc2VXb3JsZEV2ZW50LFxuICBQbGF5ZXJBZGRlZFdvcmxkRXZlbnQsXG4gIFBsYXllckNoYW5nZWROYW1lV29ybGRFdmVudCxcbiAgUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgUGxheWVyLCBQbGF5ZXJJZCB9IGZyb20gJy4vcGxheWVyJ1xuaW1wb3J0IHsgY2FuQXR0YWNrT2NjdXIgfSBmcm9tICcuLi9zZXJ2ZXIvYXR0YWNrLXdvcmxkLWFjdGlvbi1oYW5kbGVyJ1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAnaW5pdGlhbGlzZSc6XG4gICAgICByZXR1cm4gaGFuZGxlSW5pdGlhbGlzZShldmVudClcbiAgICBjYXNlICdwbGF5ZXJBZGRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyQWRkZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckNoYW5nZWROYW1lJzpcbiAgICAgIHJldHVybiBoYW5kbGVQbGF5ZXJDaGFuZ2VkTmFtZShzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnZ2FtZVN0YXJ0ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVTdGFydGVkKHN0YXRlLCBldmVudClcbiAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVVuaXRNb3ZlZChzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnY29tYmF0JzpcbiAgICAgIHJldHVybiBoYW5kbGVDb21iYXQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ3BsYXllckVuZGVkVHVybic6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRW5kZWRUdXJuKHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJEZWZlYXRlZCc6XG4gICAgICByZXR1cm4gaGFuZGxlUGxheWVyRGVmZWF0ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZU5ld1R1cm4oc3RhdGUpXG4gICAgY2FzZSAnZ2FtZU92ZXInOlxuICAgICAgcmV0dXJuIGhhbmRsZUdhbWVPdmVyKHN0YXRlLCBldmVudClcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZUluaXRpYWxpc2UgPSAoZXZlbnQ6IEluaXRpYWxpc2VXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGlmIChldmVudC5pZCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEluaXRpYWxpc2UgbXVzdCBiZSB0aGUgZmlyc3QgZXZlbnRgKVxuICB9XG4gIHJldHVybiBldmVudC5zdGF0ZVxufVxuXG5jb25zdCBoYW5kbGVQbGF5ZXJBZGRlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckFkZGVkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBpZiAoUi5hbnkoKHBsYXllcikgPT4gcGxheWVyLmlkID09PSBldmVudC5wbGF5ZXJJZCwgc3RhdGUucGxheWVycykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFBsYXllciBJRCBhbHJlYWR5IGluIHVzZWApXG4gIH1cbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllcih7IGlkOiBwbGF5ZXJJZCwgbmFtZTogYFBsYXllciAke3BsYXllcklkfWAgfSlcbiAgcmV0dXJuIHN0YXRlLmFkZFBsYXllcihwbGF5ZXIpXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckNoYW5nZWROYW1lID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyQ2hhbmdlZE5hbWVXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQsIG5hbWUgfSA9IGV2ZW50XG4gIGdldFBsYXllcihzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZS51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgbmFtZSB9KSlcbn1cblxuY29uc3QgZ2V0UGxheWVyID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBwbGF5ZXJJZDogUGxheWVySWQpOiBQbGF5ZXIgPT4ge1xuICBjb25zdCBwbGF5ZXIgPSBzdGF0ZS5maW5kUGxheWVyKHBsYXllcklkKVxuICBpZiAoIXBsYXllcikgdGhyb3cgbmV3IEVycm9yKGBObyBwbGF5ZXIgZm91bmQgd2l0aCBJRCAke3BsYXllcklkfWApXG4gIHJldHVybiBwbGF5ZXJcbn1cblxuY29uc3QgaGFuZGxlR2FtZVN0YXJ0ZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBHYW1lU3RhcnRlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgaWYgKHN0YXRlLmdhbWVIYXNTdGFydGVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBHYW1lIGFscmVhZHkgc3RhcnRlZGApXG4gIH1cbiAgcmV0dXJuIHN0YXRlXG4gICAgLmNvcHkoeyB0dXJuOiAxLCB1bml0czogZXZlbnQudW5pdHMgfSlcbiAgICAudXBkYXRlV29ybGRNYXAoKG1hcCkgPT4gbWFwLmNvcHkoeyBtb3VudGFpbnM6IGV2ZW50Lm1vdW50YWlucyB9KSlcbiAgICAuYWRkV29ybGRMb2coJ0xldCBiYXR0bGUgY29tbWVuY2UhJylcbn1cblxuY29uc3QgaGFuZGxlVW5pdE1vdmVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHVuaXRJZCwgcGxheWVySWQsIGZyb20sIHRvIH0gPSBldmVudFxuICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gKVxuICB9XG4gIGlmICghc3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gKVxuICB9XG4gIGNvbnN0IHVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICBpZiAoIXVuaXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gKVxuICB9XG4gIGlmICghdW5pdC5sb2NhdGlvbi5lcXVhbHMoZnJvbSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgVW5pdCBpcyBub3QgaW4gdGhlIGV4cGVjdGVkIGxvY2F0aW9uIGZvciBtb3ZlbWVudC4gVW5pdCBpcyBhdCAke3VuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7ZnJvbX1gLFxuICAgIClcbiAgfVxuICBjb25zdCB0b1VuaXQgPSBzdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odG8pXG4gIGlmICh0b1VuaXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGApXG4gIH1cbiAgaWYgKHVuaXQucGxheWVySWQgIT09IHBsYXllcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGF0dGVtcHQgdG8gbW92ZSB1bml0IG9mIGFub3RoZXIgcGxheWVyYClcbiAgfVxuICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFjdGlvbiBwb2ludCB1c2FnZWApXG4gIH1cbiAgcmV0dXJuIHN0YXRlLnJlcGxhY2VVbml0KHVuaXQuaWQsIHVuaXQubW92ZSh0bywgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpKVxufVxuXG5jb25zdCBoYW5kbGVDb21iYXQgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuXG4gIGNvbnN0IGF0dGFja2VyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChhdHRhY2tlci51bml0SWQpXG4gIGlmICghYXR0YWNrZXJVbml0KSB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VyLnVuaXRJZH1gKVxuICBpZiAoIWF0dGFja2VyVW5pdC5sb2NhdGlvbi5lcXVhbHMoYXR0YWNrZXIubG9jYXRpb24pKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIGxvY2F0aW9uIGZvciBhdHRhY2tlci4gQXR0YWNraW5nIHVuaXQgJHthdHRhY2tlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7YXR0YWNrZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2F0dGFja2VyLmxvY2F0aW9ufWAsXG4gICAgKVxuXG4gIGNvbnN0IGRlZmVuZGVyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChkZWZlbmRlci51bml0SWQpXG4gIGlmICghZGVmZW5kZXJVbml0KSB0aHJvdyBuZXcgRXJyb3IoYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVyLnVuaXRJZH1gKVxuICBpZiAoIWRlZmVuZGVyVW5pdC5sb2NhdGlvbi5lcXVhbHMoZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBJbnZhbGlkIGxvY2F0aW9uIGZvciBkZWZlbmRlci4gRGVmZW5kaW5nIHVuaXQgJHtkZWZlbmRlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7ZGVmZW5kZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2RlZmVuZGVyLmxvY2F0aW9ufWAsXG4gICAgKVxuXG4gIGlmIChhdHRhY2tlclVuaXQucGxheWVySWQgPT09IGRlZmVuZGVyVW5pdC5wbGF5ZXJJZCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbWJhdCB3aXRoIHNlbGZgKVxuICBpZiAoIWNhbkF0dGFja09jY3VyKGV2ZW50LmF0dGFja1R5cGUsIGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgY29tYmF0IG9mIHR5cGUgJHtldmVudC5hdHRhY2tUeXBlfSBiZXR3ZWVuIGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YCxcbiAgICApXG4gIGlmIChhdHRhY2tlclVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGFjdGlvbiBwb2ludCB1c2FnZWApXG5cbiAgbGV0IG5ld1N0YXRlID0gc3RhdGVcblxuICBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGF0dGFja2VyVW5pdC5pZClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB1cGRhdGVkQXR0YWNrZXIgPSBhdHRhY2tlclVuaXQuZGFtYWdlKGF0dGFja2VyLmRhbWFnZSkucmVkdWNlQWN0aW9uUG9pbnRzKGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoYXR0YWNrZXJVbml0LmlkLCB1cGRhdGVkQXR0YWNrZXIpXG4gIH1cblxuICBpZiAoZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGRlZmVuZGVyVW5pdC5pZClcbiAgfSBlbHNlIHtcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KGRlZmVuZGVyVW5pdC5pZCwgZGVmZW5kZXJVbml0LmRhbWFnZShkZWZlbmRlci5kYW1hZ2UpKVxuICB9XG5cbiAgaWYgKGRlZmVuZGVyLmtpbGxlZCkge1xuICAgIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYCR7ZGVmZW5kZXJVbml0Lm5hbWV9IHdhcyB0YWtlbiBvdXQgaW4gYSBzdWljaWRlIGF0dGFjayBieSAke2F0dGFja2VyVW5pdC5uYW1lfS5gKVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKGAke2RlZmVuZGVyVW5pdC5uYW1lfSB3YXMgYnJ1dGFsbHkgbXVyZGVyZWQgYnkgJHthdHRhY2tlclVuaXQubmFtZX0uYClcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXR0YWNrZXIua2lsbGVkKSB7XG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5hZGRXb3JsZExvZyhgJHthdHRhY2tlclVuaXQubmFtZX0gZGllZCBpbiBhIGZ1dGlsZSBhdHRlbXB0IHRvIHRha2Ugb24gJHthdHRhY2tlclVuaXQubmFtZX0uYClcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2ZXJiID0gZXZlbnQuYXR0YWNrVHlwZSA9PT0gJ21lbGVlJyA/ICdhdHRhY2tlZCcgOiAnc3BhdCBhdCdcbiAgICBjb25zdCB0YWtpbmdEYW1hZ2VDbGF1c2UgPSBhdHRhY2tlci5kYW1hZ2UgPT09IDAgPyAnJyA6IGAgYW5kIHRha2luZyAke2F0dGFja2VyLmRhbWFnZX0gZGFtYWdlYFxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgJHthdHRhY2tlclVuaXQubmFtZX0gJHt2ZXJifSAke2RlZmVuZGVyVW5pdC5uYW1lfSwgY2F1c2luZyAke2RlZmVuZGVyLmRhbWFnZX0gZGFtYWdlJHt0YWtpbmdEYW1hZ2VDbGF1c2V9LmBcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLmFkZFdvcmxkTG9nKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckVuZGVkVHVybiA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgZ2V0UGxheWVyKHN0YXRlLCBwbGF5ZXJJZClcbiAgcmV0dXJuIHN0YXRlLnVwZGF0ZVBsYXllcihwbGF5ZXJJZCwgKHBsYXllcikgPT4gcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IHRydWUgfSkpXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckRlZmVhdGVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRGVmZWF0ZWRXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiB7XG4gIGNvbnN0IHsgcGxheWVySWQgfSA9IGV2ZW50XG4gIGNvbnN0IHBsYXllciA9IGdldFBsYXllcihzdGF0ZSwgcGxheWVySWQpXG4gIHJldHVybiBzdGF0ZVxuICAgIC51cGRhdGVQbGF5ZXIocGxheWVySWQsIChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZGVmZWF0ZWQ6IHRydWUgfSkpXG4gICAgLmFkZFdvcmxkTG9nKGAke3BsYXllci5uYW1lfSBoYXMgYmVlbiB2YW5xdWlzaGVkLmApXG59XG5cbmNvbnN0IGhhbmRsZU5ld1R1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLm5ld1R1cm4oKS5hZGRXb3JsZExvZyhgVHVybiAke3N0YXRlLnR1cm4gKyAxfSBoYXMgYmVndW4uYClcblxuY29uc3QgaGFuZGxlR2FtZU92ZXIgPSAoc3RhdGU6IFdvcmxkU3RhdGUsIGV2ZW50OiBHYW1lT3ZlcldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB2aWN0b3IgfSA9IGV2ZW50XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlLmdhbWVPdmVyKHZpY3RvcilcbiAgaWYgKHZpY3Rvcikge1xuICAgIGNvbnN0IHZpY3RvclBsYXllciA9IGdldFBsYXllcihzdGF0ZSwgdmljdG9yKVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYPCfj4YgJHt2aWN0b3JQbGF5ZXIubmFtZX0gaXMgdmljdG9yaW91cyFgKVxuICB9IGVsc2Uge1xuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUuYWRkV29ybGRMb2coYFRoZXJlIGFyZSBubyB3aW5uZXJzIGluIHdhci5gKVxuICB9XG4gIHJldHVybiBuZXdTdGF0ZVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGNsYXNzIFdvcmxkTWFwIHtcbiAgcmVhZG9ubHkgd2lkdGg6IG51bWJlclxuICByZWFkb25seSBoZWlnaHQ6IG51bWJlclxuICByZWFkb25seSBtb3VudGFpbnM6IEhleFtdXG5cbiAgY29uc3RydWN0b3IoeyB3aWR0aCwgaGVpZ2h0LCBtb3VudGFpbnMgPSBbXSB9OiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyOyBtb3VudGFpbnM/OiBIZXhbXSB9KSB7XG4gICAgYXNzZXJ0KHdpZHRoID4gMClcbiAgICBhc3NlcnQoaGVpZ2h0ID4gMClcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICAgIHRoaXMubW91bnRhaW5zID0gbW91bnRhaW5zXG4gIH1cblxuICBwdWJsaWMgaXNJbkJvdW5kcyA9IChoZXg6IEhleCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IHEgPSBoZXgueCArIE1hdGguZmxvb3IoaGV4LnkgLyAyKVxuICAgIHJldHVybiAwIDw9IHEgJiYgcSA8IHRoaXMud2lkdGggJiYgMCA8PSBoZXgueSAmJiBoZXgueSA8IHRoaXMuaGVpZ2h0XG4gIH1cblxuICBwdWJsaWMgKmdldE1hcEhleGVzKCk6IEl0ZXJhYmxlSXRlcmF0b3I8SGV4PiB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5oZWlnaHQ7IHJvdysrKVxuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy53aWR0aDsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgeCA9IC1NYXRoLmZsb29yKHJvdyAvIDIpICsgY29sdW1uXG4gICAgICAgIHlpZWxkIG5ldyBIZXgoeCwgcm93KVxuICAgICAgfVxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgIHdpZHRoID0gdGhpcy53aWR0aCxcbiAgICBoZWlnaHQgPSB0aGlzLmhlaWdodCxcbiAgICBtb3VudGFpbnMgPSB0aGlzLm1vdW50YWlucyxcbiAgfTogeyB3aWR0aD86IG51bWJlcjsgaGVpZ2h0PzogbnVtYmVyOyBtb3VudGFpbnM/OiBIZXhbXSB9ID0ge30pOiBXb3JsZE1hcCA9PlxuICAgIG5ldyBXb3JsZE1hcCh7IHdpZHRoLCBoZWlnaHQsIG1vdW50YWlucyB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICBtb3VudGFpbnM6IHRoaXMubW91bnRhaW5zLm1hcCgobW91bnRhaW4pID0+IG1vdW50YWluLnRvSnNvbigpKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkTWFwID0+XG4gICAgbmV3IFdvcmxkTWFwKHsgd2lkdGg6IGpzb24ud2lkdGgsIGhlaWdodDoganNvbi5oZWlnaHQsIG1vdW50YWluczoganNvbi5tb3VudGFpbnMubWFwKEhleC5mcm9tSnNvbikgfSlcblxuICBwdWJsaWMgaXNNb3VudGFpbiA9IChoZXg6IEhleCk6IGJvb2xlYW4gPT4gUi5jb250YWlucyhoZXgsIHRoaXMubW91bnRhaW5zKVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuL3dvcmxkLW1hcCdcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4vdW5pdCdcbmltcG9ydCB7IGp1c3QsIE1heWJlLCBPcHRpb24sIHRvTWF5YmUsIHRvT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQgfSBmcm9tICcuL3BsYXllcidcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4vd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4vd29ybGQtZXZlbnRzJ1xuXG5pbnRlcmZhY2UgR2FtZU92ZXJJbmZvIHtcbiAgdmljdG9yOiBPcHRpb248UGxheWVySWQ+XG59XG5cbmV4cG9ydCBjbGFzcyBXb3JsZFN0YXRlIHtcbiAgcmVhZG9ubHkgdHVybjogbnVtYmVyIC8qIHR1cm4gPSAwIGJlZm9yZSB0aGUgZ2FtZSBoYXMgc3RhcnRlZCAqL1xuICByZWFkb25seSBtYXA6IFdvcmxkTWFwXG4gIHJlYWRvbmx5IHVuaXRzOiBVbml0W11cbiAgcmVhZG9ubHkgcGxheWVyczogUGxheWVyW11cbiAgcmVhZG9ubHkgZ2FtZU92ZXJJbmZvPzogR2FtZU92ZXJJbmZvXG4gIHJlYWRvbmx5IHdvcmxkTG9nOiBzdHJpbmdbXVxuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICB0dXJuLFxuICAgIG1hcCxcbiAgICB1bml0cyxcbiAgICBwbGF5ZXJzLFxuICAgIGdhbWVPdmVySW5mbyxcbiAgICB3b3JsZExvZyA9IFtdLFxuICB9OiB7XG4gICAgdHVybjogbnVtYmVyXG4gICAgbWFwOiBXb3JsZE1hcFxuICAgIHVuaXRzOiBVbml0W11cbiAgICBwbGF5ZXJzOiBQbGF5ZXJbXVxuICAgIGdhbWVPdmVySW5mbz86IE9wdGlvbjxHYW1lT3ZlckluZm8+XG4gICAgd29ybGRMb2c/OiBzdHJpbmdbXVxuICB9KSB7XG4gICAgdGhpcy50dXJuID0gdHVyblxuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy51bml0cyA9IHVuaXRzXG4gICAgdGhpcy5wbGF5ZXJzID0gcGxheWVyc1xuICAgIHRoaXMuZ2FtZU92ZXJJbmZvID0gZ2FtZU92ZXJJbmZvXG4gICAgdGhpcy53b3JsZExvZyA9IHdvcmxkTG9nXG4gICAgYXNzZXJ0KHR1cm4gPj0gMClcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICB0dXJuID0gdGhpcy50dXJuLFxuICAgIG1hcCA9IHRoaXMubWFwLFxuICAgIHVuaXRzID0gdGhpcy51bml0cyxcbiAgICBwbGF5ZXJzID0gdGhpcy5wbGF5ZXJzLFxuICAgIGdhbWVPdmVySW5mbyA9IHRvTWF5YmUodGhpcy5nYW1lT3ZlckluZm8pLFxuICAgIHdvcmxkTG9nID0gdGhpcy53b3JsZExvZyxcbiAgfToge1xuICAgIHR1cm4/OiBudW1iZXJcbiAgICBtYXA/OiBXb3JsZE1hcFxuICAgIHVuaXRzPzogVW5pdFtdXG4gICAgcGxheWVycz86IFBsYXllcltdXG4gICAgZ2FtZU92ZXJJbmZvPzogTWF5YmU8R2FtZU92ZXJJbmZvPlxuICAgIHdvcmxkTG9nPzogc3RyaW5nW11cbiAgfSA9IHt9KTogV29ybGRTdGF0ZSA9PiBuZXcgV29ybGRTdGF0ZSh7IHR1cm4sIG1hcCwgdW5pdHMsIHBsYXllcnMsIGdhbWVPdmVySW5mbzogdG9PcHRpb24oZ2FtZU92ZXJJbmZvKSwgd29ybGRMb2cgfSlcblxuICBwdWJsaWMgZ2V0IGlzR2FtZU92ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXJJbmZvICE9PSB1bmRlZmluZWRcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ2FtZUhhc1N0YXJ0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHVybiA+IDBcbiAgfVxuXG4gIHB1YmxpYyBnZXRQbGF5ZXJJZHMgPSAoKTogUGxheWVySWRbXSA9PiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5pZClcblxuICBwdWJsaWMgaXNQbGF5ZXJEZWZlYXRlZCA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBib29sZWFuID0+IHRoaXMuZ2V0VW5pdHNGb3JQbGF5ZXIocGxheWVySWQpLmxlbmd0aCA9PT0gMFxuXG4gIHB1YmxpYyBjYW5QbGF5ZXJBY3QgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgZW5kZWRUdXJuID0gdGhpcy5maW5kUGxheWVyKHBsYXllcklkKT8uZW5kZWRUdXJuXG4gICAgcmV0dXJuICFlbmRlZFR1cm4gJiYgUi5hbnkoKHVuaXQpID0+IHVuaXQuaGFzVW5zcGVudEFjdGlvblBvaW50cywgdGhpcy5nZXRVbml0c0ZvclBsYXllcihwbGF5ZXJJZCkpXG4gIH1cblxuICBwdWJsaWMgY2FuQW55UGxheWVyQWN0ID0gKCk6IGJvb2xlYW4gPT4gUi5hbnkoKHBsYXllcikgPT4gdGhpcy5jYW5QbGF5ZXJBY3QocGxheWVyLmlkKSwgdGhpcy5wbGF5ZXJzKVxuXG4gIHB1YmxpYyBnZXRVbml0c0ZvclBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBVbml0W10gPT4gdGhpcy51bml0cy5maWx0ZXIoKHVuaXQpID0+IHVuaXQucGxheWVySWQgPT09IHBsYXllcklkKVxuXG4gIHB1YmxpYyBmaW5kUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCk6IE9wdGlvbjxQbGF5ZXI+ID0+IFIuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdldFBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBQbGF5ZXIgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikge1xuICAgICAgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICAgIH1cbiAgICByZXR1cm4gcGxheWVyXG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRCeUlkID0gKHVuaXRJZDogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+IFIuZmluZCgodW5pdCkgPT4gdW5pdC5pZCA9PT0gdW5pdElkLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyBnZXRVbml0QnlJZCA9ICh1bml0SWQ6IG51bWJlcik6IFVuaXQgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICB9XG4gICAgcmV0dXJuIHVuaXRcbiAgfVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gUi5maW5kKCh1bml0KSA9PiB1bml0LmxvY2F0aW9uLmVxdWFscyhoZXgpLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyByZXBsYWNlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCwgdW5pdDogVW5pdCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoe1xuICAgICAgdW5pdHM6IFIuYXBwZW5kKFxuICAgICAgICB1bml0LFxuICAgICAgICBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPT0gdW5pdElkLCB0aGlzLnVuaXRzKSxcbiAgICAgICksXG4gICAgfSlcblxuICBwdWJsaWMgcmVtb3ZlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyB1bml0czogUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT09IHVuaXRJZCwgdGhpcy51bml0cykgfSlcblxuICBwdWJsaWMgdXBkYXRlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgbW9kaWZ5OiAocGxheWVyOiBQbGF5ZXIpID0+IFBsYXllcik6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IHRoaXMuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcikgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VQbGF5ZXIocGxheWVySWQsIG1vZGlmeShwbGF5ZXIpKVxuICB9XG5cbiAgcHVibGljIHJlcGxhY2VQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkLCBwbGF5ZXI6IFBsYXllcik6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGFzc2VydChwbGF5ZXJJZCA9PT0gcGxheWVyLmlkKVxuICAgIHJldHVybiB0aGlzLmNvcHkoe1xuICAgICAgcGxheWVyczogUi5hcHBlbmQoXG4gICAgICAgIHBsYXllcixcbiAgICAgICAgUi5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmlkICE9PSBwbGF5ZXJJZCwgdGhpcy5wbGF5ZXJzKSxcbiAgICAgICksXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBhZGRQbGF5ZXIgPSAocGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IHBsYXllcnM6IFIuYXBwZW5kKHBsYXllciwgdGhpcy5wbGF5ZXJzKSB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogYW55ID0+ICh7XG4gICAgdHVybjogdGhpcy50dXJuLFxuICAgIG1hcDogdGhpcy5tYXAudG9Kc29uKCksXG4gICAgdW5pdHM6IHRoaXMudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LnRvSnNvbigpKSxcbiAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci50b0pzb24oKSksXG4gICAgZ2FtZU92ZXJJbmZvOiB0aGlzLmdhbWVPdmVySW5mbyxcbiAgICB3b3JsZExvZzogdGhpcy53b3JsZExvZyxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkU3RhdGUgPT5cbiAgICBuZXcgV29ybGRTdGF0ZSh7XG4gICAgICB0dXJuOiBqc29uLnR1cm4sXG4gICAgICBtYXA6IFdvcmxkTWFwLmZyb21Kc29uKGpzb24ubWFwKSxcbiAgICAgIHVuaXRzOiBqc29uLnVuaXRzLm1hcCgodW5pdDogYW55KSA9PiBVbml0LmZyb21Kc29uKHVuaXQpKSxcbiAgICAgIHBsYXllcnM6IGpzb24ucGxheWVycy5tYXAoKHVuaXQ6IGFueSkgPT4gUGxheWVyLmZyb21Kc29uKHVuaXQpKSxcbiAgICAgIGdhbWVPdmVySW5mbzoganNvbi5nYW1lT3ZlckluZm8sXG4gICAgICB3b3JsZExvZzoganNvbi53b3JsZExvZyxcbiAgICB9KVxuXG4gIHB1YmxpYyBpc1ZhbGlkUGxheWVySWQgPSAocGxheWVySWQ6IFBsYXllcklkKTogYm9vbGVhbiA9PiBSLmFueSgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGdhbWVPdmVyID0gKHZpY3RvcjogT3B0aW9uPG51bWJlcj4pOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IGdhbWVPdmVySW5mbzoganVzdCh7IHZpY3RvciB9KSB9KVxuXG4gIHB1YmxpYyBhcHBseUV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogV29ybGRTdGF0ZSA9PiBhcHBseUV2ZW50KHRoaXMsIGV2ZW50KVxuXG4gIHB1YmxpYyBhcHBseUV2ZW50cyA9IChldmVudHM6IFdvcmxkRXZlbnRbXSk6IFdvcmxkU3RhdGUgPT4ge1xuICAgIGxldCBzdGF0ZTogV29ybGRTdGF0ZSA9IHRoaXNcbiAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIGV2ZW50cykge1xuICAgICAgc3RhdGUgPSBzdGF0ZS5hcHBseUV2ZW50KGV2ZW50KVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG4gIHB1YmxpYyBhZGRXb3JsZExvZyA9IChtZXNzYWdlOiBzdHJpbmcpOiBXb3JsZFN0YXRlID0+IHRoaXMuY29weSh7IHdvcmxkTG9nOiBSLmFwcGVuZChtZXNzYWdlLCB0aGlzLndvcmxkTG9nKSB9KVxuXG4gIHB1YmxpYyB1cGRhdGVXb3JsZE1hcCA9IChtb2RpZnk6IChtYXA6IFdvcmxkTWFwKSA9PiBXb3JsZE1hcCk6IFdvcmxkU3RhdGUgPT4gdGhpcy5jb3B5KHsgbWFwOiBtb2RpZnkodGhpcy5tYXApIH0pXG5cbiAgcHVibGljIG5ld1R1cm4gPSAoKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICB0dXJuOiB0aGlzLnR1cm4gKyAxLFxuICAgICAgdW5pdHM6IHRoaXMudW5pdHMubWFwKCh1bml0KSA9PiB1bml0LnJlZnJlc2hBY3Rpb25Qb2ludHMoKSksXG4gICAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKChwbGF5ZXIpID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiBmYWxzZSB9KSksXG4gICAgfSlcblxuICBwdWJsaWMgZ2V0U29ydGVkUGxheWVycyA9ICgpOiBQbGF5ZXJbXSA9PiBSLnNvcnRCeSgocGxheWVyKSA9PiBwbGF5ZXIuaWQsIHRoaXMucGxheWVycylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=