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
var gameConfig = {
    title: 'Sample',
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
    backgroundColor: '#000000',
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

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootScene = void 0;
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var asset_keys_1 = __webpack_require__(/*! ./asset-keys */ "./src/scenes/asset-keys.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
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
            // this.scene.start('Game')
            var hash = window.location.hash;
            if (hash == "") {
                _this.scene.start('MainMenu');
            }
            else {
                var data = { id: window.location.hash.substr(1) };
                _this.scene.start('Game', data);
            }
        });
        this.loadAssets();
    };
    BootScene.prototype.loadAssets = function () {
        // Source: https://opengameart.org/content/hex-tileset-pack
        this.load.image('llama', 'assets/sprites/llama_14.png');
        // https://opengameart.org/content/hourglass-icon
        this.load.image('hourglass', 'assets/sprites/Hourglass.png');
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


/***/ }),

/***/ "./src/scenes/colours.ts":
/*!*******************************!*\
  !*** ./src/scenes/colours.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAYER_2_TINT = exports.PLAYER_1_TINT = exports.HOVER_ACTION_TEXT_COLOUR = exports.ACTION_TEXT_COLOUR = exports.HOVER_TARGETABLE_TILE_COLOUR = exports.TARGETABLE_TILE_COLOUR = exports.HOVER_SELECTED_TILE_COLOUR = exports.SELECTED_TILE_COLOUR = exports.HOVER_DEFAULT_TILE_COLOUR = exports.DEFAULT_TILE_COLOUR = exports.HEALTH_FULL_COLOUR = exports.HEALTH_EMPTY_COLOUR = exports.HEALTH_BORDER_COLOUR = exports.colourNumber = void 0;
var Color = Phaser.Display.Color;
exports.colourNumber = function (colourString) { return Color.HexStringToColor(colourString).color; };
exports.HEALTH_BORDER_COLOUR = exports.colourNumber('#000000');
exports.HEALTH_EMPTY_COLOUR = exports.colourNumber('#ffffff');
exports.HEALTH_FULL_COLOUR = exports.colourNumber('#4df037');
exports.DEFAULT_TILE_COLOUR = exports.colourNumber('#ccffbe');
exports.HOVER_DEFAULT_TILE_COLOUR = exports.colourNumber('#dcffd1');
exports.SELECTED_TILE_COLOUR = exports.colourNumber('#fffd08');
exports.HOVER_SELECTED_TILE_COLOUR = exports.colourNumber('#fffdbf');
exports.TARGETABLE_TILE_COLOUR = exports.colourNumber('#9df1e7');
exports.HOVER_TARGETABLE_TILE_COLOUR = exports.colourNumber('#cef0eb');
exports.ACTION_TEXT_COLOUR = '#cccc00';
exports.HOVER_ACTION_TEXT_COLOUR = '#ffff00';
exports.PLAYER_1_TINT = 0xffbbbb;
exports.PLAYER_2_TINT = 0xbbbbff;


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
        this.findSelectedUnit = function () { return _this.selectedHex ? _this.findUnitInLocation(_this.selectedHex) : undefined; };
        this.findUnitInLocation = function (hex) { return _this.worldState.findUnitInLocation(hex); };
        this.unitCouldPotentiallyMove = function (unit) {
            return unit.playerId == _this.playerId && unit.actionPoints.current > 0 && !_this.getCurrentPlayer().endedTurn;
        };
        this.unitCouldPotentiallyAttack = function (unit) {
            return unit.playerId == _this.playerId && unit.actionPoints.current > 0 && !_this.getCurrentPlayer().endedTurn;
        };
        this.unitCanMoveToHex = function (unit, hex) {
            return _this.unitCouldPotentiallyMove(unit)
                && hex.isAdjacentTo(unit.location)
                && _this.worldState.map.isInBounds(hex)
                && !_this.findUnitInLocation(hex);
        };
        this.unitCanAttackHex = function (unit, location) {
            var targetUnit = _this.findUnitInLocation(location);
            return _this.unitCouldPotentiallyAttack(unit)
                && targetUnit != undefined
                && targetUnit.playerId != _this.localGameState.playerId
                && unit.location.isAdjacentTo(location);
        };
        this.findNextUnitWithActionPoints = function (unitId) {
            var _a;
            var candidateUnits = R.sortBy(function (unit) { return unit.id; }, _this.worldState.units.filter(function (unit) { return unit.playerId == _this.playerId && unit.actionPoints.current > 0; }));
            if (unitId)
                return (_a = R.head(candidateUnits.filter(function (unit) { return unit.id > unitId; }))) !== null && _a !== void 0 ? _a : R.head(candidateUnits.filter(function (unit) { return unit.id < unitId; }));
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

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
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
exports.GameScene = exports.hexCenter = exports.DRAWING_OFFSET = exports.HEX_SIZE = void 0;
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var point_1 = __webpack_require__(/*! ./point */ "./src/scenes/point.ts");
var hex_geometry_1 = __webpack_require__(/*! ./hex-geometry */ "./src/scenes/hex-geometry.ts");
var world_state_1 = __webpack_require__(/*! ../world/world-state */ "./src/world/world-state.ts");
var server_1 = __webpack_require__(/*! ../server/server */ "./src/server/server.ts");
var world_event_evaluator_1 = __webpack_require__(/*! ../world/world-event-evaluator */ "./src/world/world-event-evaluator.ts");
var unit_display_object_1 = __webpack_require__(/*! ./unit-display-object */ "./src/scenes/unit-display-object.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var map_display_object_1 = __webpack_require__(/*! ./map-display-object */ "./src/scenes/map-display-object.ts");
var types_1 = __webpack_require__(/*! ../util/types */ "./src/util/types.ts");
var local_game_state_1 = __webpack_require__(/*! ./local-game-state */ "./src/scenes/local-game-state.ts");
var asset_keys_1 = __webpack_require__(/*! ./asset-keys */ "./src/scenes/asset-keys.ts");
var keyboard_mapper_1 = __webpack_require__(/*! ./keyboard-mapper */ "./src/scenes/keyboard-mapper.ts");
var local_action_processor_1 = __webpack_require__(/*! ./local-action-processor */ "./src/scenes/local-action-processor.ts");
var texts_display_object_1 = __webpack_require__(/*! ./texts-display-object */ "./src/scenes/texts-display-object.ts");
var combined_state_methods_1 = __webpack_require__(/*! ./combined-state-methods */ "./src/scenes/combined-state-methods.ts");
var json_serialisation_1 = __webpack_require__(/*! ../util/json-serialisation */ "./src/util/json-serialisation.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
exports.HEX_SIZE = 48;
exports.DRAWING_OFFSET = { x: 60, y: 100 };
exports.hexCenter = function (hex) { return point_1.addPoints(point_1.multiplyPoint(hex_geometry_1.centerPoint(hex), exports.HEX_SIZE), exports.DRAWING_OFFSET); };
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        // Server-only:
        _this.server = undefined;
        _this.clientConnections = [];
        _this.worldState = world_state_1.INITIAL_WORLD_STATE;
        _this.localGameState = local_game_state_1.INITIAL_LOCAL_GAME_STATE;
        _this.unitDisplayObjects = new Map();
        // Create
        // ------
        _this.create = function (gameSceneData) {
            _this.sound.pauseOnBlur = false;
            if (gameSceneData.id) {
                _this.actAsClient(gameSceneData.id);
            }
            else {
                _this.actAsServer();
            }
            asset_keys_1.ALL_AUDIO_KEYS.forEach(function (key) { return _this.sound.add(key); });
            _this.createDisplayObjects();
            _this.setUpInputs();
            _this.syncScene();
        };
        _this.newPeer = function (id, options) {
            return (new window.Peer(id, options));
        };
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
        _this.asyncSendToServer = function (action) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, 120); })];
                    case 1:
                        _a.sent();
                        if (this.server) {
                            this.server.handleAction(this.playerId, action);
                        }
                        else {
                            this.serverConnection.send({
                                type: 'worldAction',
                                action: json_serialisation_1.serialiseToJson(action),
                                playerId: this.localGameState.playerId,
                            });
                            // await this.channel.postMessage({
                            //   type: 'worldAction',
                            //   action: serialiseToJson(action),
                            //   playerId: this.localGameState.playerId,
                            // })
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handlePointerMove = function (pointer) {
            var pointerPoint = { x: pointer.x, y: pointer.y };
            _this.mapDisplayObject.handlePointerMove(pointerPoint);
        };
        _this.handlePointerDown = function (pointer) {
            // Ignore clicks on these as they have their own handlers
            var pressedPoint = { x: pointer.x, y: pointer.y };
            if (_this.textsDisplayObject.hasClickHandlerFor(pressedPoint))
                return;
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
        _this.syncScene = function () {
            var e_1, _a;
            _this.mapDisplayObject.syncScene(_this.worldState, _this.localGameState);
            _this.textsDisplayObject.syncScene(_this.worldState, _this.localGameState);
            var surplusUnitIds = R.difference(Array.from(_this.unitDisplayObjects.keys()), _this.worldState.units.map(function (unit) { return unit.id; }));
            try {
                for (var surplusUnitIds_1 = __values(surplusUnitIds), surplusUnitIds_1_1 = surplusUnitIds_1.next(); !surplusUnitIds_1_1.done; surplusUnitIds_1_1 = surplusUnitIds_1.next()) {
                    var unitId = surplusUnitIds_1_1.value;
                    var unitDisplayObject = _this.unitDisplayObjects.get(unitId);
                    unitDisplayObject.destroy();
                    _this.unitDisplayObjects.delete(unitId);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (surplusUnitIds_1_1 && !surplusUnitIds_1_1.done && (_a = surplusUnitIds_1.return)) _a.call(surplusUnitIds_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.worldState.units.forEach(function (unit) {
                var unitDisplayObject = _this.unitDisplayObjects.get(unit.id);
                if (!unitDisplayObject) {
                    unitDisplayObject = new unit_display_object_1.UnitDisplayObject(_this, unit);
                    _this.unitDisplayObjects.set(unit.id, unitDisplayObject);
                }
                unitDisplayObject.syncScene(unit);
            });
        };
        // Handle world events
        // -------------------
        _this.handleWorldEvent = function (event) {
            var oldWorldState = _this.worldState;
            _this.worldState = world_event_evaluator_1.applyEvent(oldWorldState, event);
            switch (event.type) {
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
            _this.syncScene();
            _this.sound.play(asset_keys_1.AudioKeys.NEW_TURN);
        };
        _this.handleUnitMovedWorldEvent = function (event, oldWorldState) {
            var _a;
            var unitId = event.unitId, from = event.from, to = event.to;
            _this.sound.play(asset_keys_1.AudioKeys.WALK);
            var unit = _this.worldState.getUnitById(unitId);
            var wasPreviouslySelected = _this.localGameState.selectedHex && ((_a = oldWorldState.findUnitInLocation(_this.localGameState.selectedHex)) === null || _a === void 0 ? void 0 : _a.id) == unitId;
            if (wasPreviouslySelected && unit.playerId == _this.playerId) {
                var newSelectedHex = _this.calculateNewSelectedUnitAfterMoveOrAttack(unitId, to);
                _this.localGameState = _this.localGameState.copy({
                    mode: { type: 'selectHex' },
                    selectedHex: types_1.toMaybe(newSelectedHex),
                });
            }
            _this.syncScene();
            _this.getUnitDisplayObject(unitId).move(from, to);
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
            _this.sound.play(asset_keys_1.AudioKeys.ATTACK);
            if (attacker.killed || defender.killed) {
                _this.sound.play(asset_keys_1.AudioKeys.DEATH);
            }
            _this.updateSelectionAfterCombat(attacker, defender, oldWorldState);
            _this.syncScene();
            var attackerDisplayObject = _this.unitDisplayObjects.get(attacker.unitId);
            if (attackerDisplayObject)
                attackerDisplayObject.attack(attacker.location, defender.location);
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
        // Util queries
        // ------------
        _this.getUnitDisplayObject = function (unitId) {
            var unitDisplayObject = _this.unitDisplayObjects.get(unitId);
            if (!unitDisplayObject)
                throw "Could not find unit with ID " + unitId;
            return unitDisplayObject;
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
    GameScene.prototype.actAsClient = function (gameId) {
        var _this = this;
        var peer = this.newPeer();
        peer.on('open', function () {
            var connection = peer.connect(gameId);
            connection.on('open', function () {
                _this.serverConnection = connection;
                connection.send({ type: 'join' });
                connection.on('data', function (message) {
                    console.log(message);
                    switch (message.type) {
                        case 'joined':
                            _this.localGameState = _this.localGameState.copy({ playerId: message.playerId });
                            _this.worldState = world_state_1.WorldState.fromJson(message.worldState);
                            _this.syncScene();
                            break;
                        case 'worldEvent':
                            _this.handleWorldEvent(json_serialisation_1.deserialiseFromJson(message.event));
                            break;
                        default:
                            throw new unreachable_case_error_1.UnreachableCaseError(message);
                    }
                });
            });
        });
        peer.on('error', function (err) { return console.log(err); });
    };
    GameScene.prototype.actAsServer = function () {
        var _this = this;
        var server = new server_1.Server();
        server.addListener(function (event) {
            var e_2, _a;
            _this.handleWorldEvent(event);
            try {
                for (var _b = __values(_this.clientConnections), _c = _b.next(); !_c.done; _c = _b.next()) {
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
        this.server = server;
        var peer = this.newPeer();
        peer.on('open', function (id) { return window.location.hash = id; });
        peer.on('error', function (err) { return console.log(err); });
        peer.on('connection', function (clientConnection) {
            _this.clientConnections.push(clientConnection);
            clientConnection.on('data', function (message) {
                return _this.handleClientToServerMessage(message, clientConnection);
            });
        });
    };
    GameScene.prototype.handleClientToServerMessage = function (message, clientConnection) {
        console.log(message);
        var server = this.server;
        switch (message.type) {
            case 'join':
                clientConnection.send({
                    type: 'joined',
                    playerId: 2,
                    worldState: server.worldState.toJson(),
                });
                break;
            case 'worldAction':
                server.handleAction(message.playerId, json_serialisation_1.deserialiseFromJson(message.action));
                break;
            default:
                throw new unreachable_case_error_1.UnreachableCaseError(message);
        }
    };
    GameScene.prototype.createDisplayObjects = function () {
        var e_3, _a;
        this.mapDisplayObject = new map_display_object_1.MapDisplayObject(this, this.worldState, this.localGameState);
        this.textsDisplayObject = new texts_display_object_1.TextsDisplayObject(this, this.worldState, this.localGameState, this.handleLocalAction);
        try {
            for (var _b = __values(this.worldState.units), _c = _b.next(); !_c.done; _c = _b.next()) {
                var unit = _c.value;
                var unitDisplayObject = new unit_display_object_1.UnitDisplayObject(this, unit);
                this.unitDisplayObjects.set(unit.id, unitDisplayObject);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Object.defineProperty(GameScene.prototype, "playerId", {
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
exports.centerPoint = function (hex) {
    return ({
        x: hex.x * Math.sqrt(3) + hex.y * Math.sqrt(3) / 2,
        y: hex.y * 3 / 2,
    });
};
exports.fromPoint = function (point) {
    var x = point.x * Math.sqrt(3) / 3 - point.y / 3;
    var y = 2 * point.y / 3;
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
exports.mapHeight = function (map) { return map.height * 3 / 2; };
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
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
exports.default = [boot_scene_1.BootScene, game_scene_1.GameScene, main_menu_scene_1.MainMenuScene];


/***/ }),

/***/ "./src/scenes/keyboard-mapper.ts":
/*!***************************************!*\
  !*** ./src/scenes/keyboard-mapper.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.mapToLocalAction = void 0;
var hex_direction_1 = __webpack_require__(/*! ../world/hex-direction */ "./src/world/hex-direction.ts");
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

/***/ "./src/scenes/local-action-processor.ts":
/*!**********************************************!*\
  !*** ./src/scenes/local-action-processor.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalActionProcessor = void 0;
var types_1 = __webpack_require__(/*! ../util/types */ "./src/util/types.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var combined_state_methods_1 = __webpack_require__(/*! ./combined-state-methods */ "./src/scenes/combined-state-methods.ts");
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
                var newLocalGameState = _this.localGameState.setSelectedHex(unitToSelect === null || unitToSelect === void 0 ? void 0 : unitToSelect.location).setMode({ type: 'selectHex' });
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
                if (_this.combinedState.unitCanMoveToHex(selectedUnit, hex))
                    return _this.moveToHex(selectedUnit, hex);
                else if (_this.combinedState.unitCanAttackHex(selectedUnit, hex)) {
                    return _this.attackHex(selectedUnit, hex);
                }
            }
        };
        this.attackHex = function (attacker, targetHex) {
            var defender = _this.combinedState.findUnitInLocation(targetHex);
            return {
                worldAction: {
                    type: 'attack',
                    attacker: { unitId: attacker.id, location: attacker.location },
                    defender: { unitId: defender.id, location: targetHex },
                },
            };
        };
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
            if (_this.combinedState.unitCanAttackHex(attacker, targetHex))
                return _this.attackHex(attacker, targetHex);
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
        this.setSelectedHex = function (selectedHex) {
            return _this.copy({ selectedHex: types_1.toMaybe(selectedHex) });
        };
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

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainMenuScene = void 0;
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        this.add
            .text(100, 50, 'Llama Wars - Main Menu', {
            fill: '#FFFFFF',
        })
            .setFontSize(24);
        new menu_button_1.MenuButton(this, 100, 150, 'Start Game', function () {
            var data = {};
            _this.scene.start('Game', data);
        });
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/scenes/map-display-object.ts":
/*!******************************************!*\
  !*** ./src/scenes/map-display-object.ts ***!
  \******************************************/
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
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
var point_1 = __webpack_require__(/*! ./point */ "./src/scenes/point.ts");
var hex_geometry_1 = __webpack_require__(/*! ./hex-geometry */ "./src/scenes/hex-geometry.ts");
var colours_1 = __webpack_require__(/*! ./colours */ "./src/scenes/colours.ts");
var MapDisplayObject = /** @class */ (function () {
    function MapDisplayObject(scene, worldState, localGameState) {
        var e_1, _a;
        var _this = this;
        this.hexPolygons = new Map();
        this.createHex = function (hex) {
            var polygonCenter = game_scene_1.hexCenter(hex);
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
                    _this.getHexPolygon(hex).setFillStyle(_this.calculateColour(hex));
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
                if (hex.isAdjacentTo(selectedHex) && !_this.findUnitInLocation(hex)) {
                    return 'targetable';
                }
            }
            if (mode.type == 'attack') {
                if (hex.isAdjacentTo(selectedHex)) {
                    var unit = _this.findUnitInLocation(hex);
                    if (unit && unit.playerId != playerId) {
                        return 'targetable';
                    }
                }
            }
            return 'default';
        };
        this.calculateColour = function (hex) {
            switch (_this.calculateTileState(hex)) {
                case 'default':
                    return colours_1.DEFAULT_TILE_COLOUR;
                case 'selected':
                    return colours_1.SELECTED_TILE_COLOUR;
                case 'targetable':
                    return colours_1.TARGETABLE_TILE_COLOUR;
            }
        };
        this.calculateHoverColour = function (hex) {
            switch (_this.calculateTileState(hex)) {
                case 'default':
                    return colours_1.HOVER_DEFAULT_TILE_COLOUR;
                case 'selected':
                    return colours_1.HOVER_SELECTED_TILE_COLOUR;
                case 'targetable':
                    return colours_1.HOVER_TARGETABLE_TILE_COLOUR;
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
        return this.scene.add.polygon(center.x, center.y, vertices)
            .setOrigin(0, 0)
            .setStrokeStyle(3, 0x000000);
    };
    MapDisplayObject.prototype.handlePointerMove = function (pointerPoint) {
        var hex = hex_geometry_1.fromPoint(point_1.multiplyPoint(point_1.subtractPoints(pointerPoint, game_scene_1.DRAWING_OFFSET), 1 / game_scene_1.HEX_SIZE));
        if (this.previousHover && this.previousHover.equals(hex))
            return;
        if (this.previousHover) {
            this.getHexPolygon(this.previousHover).setFillStyle(this.calculateColour(this.previousHover));
            this.previousHover = undefined;
        }
        if (this.worldState.map.isInBounds(hex)) {
            this.getHexPolygon(hex).setFillStyle(this.calculateHoverColour(hex));
            this.previousHover = hex;
        }
    };
    return MapDisplayObject;
}());
exports.MapDisplayObject = MapDisplayObject;


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

/***/ "./src/scenes/texts-display-object.ts":
/*!********************************************!*\
  !*** ./src/scenes/texts-display-object.ts ***!
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
exports.TextsDisplayObject = void 0;
var hex_geometry_1 = __webpack_require__(/*! ./hex-geometry */ "./src/scenes/hex-geometry.ts");
var colours_1 = __webpack_require__(/*! ./colours */ "./src/scenes/colours.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var combined_state_methods_1 = __webpack_require__(/*! ./combined-state-methods */ "./src/scenes/combined-state-methods.ts");
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
            _this.playerText.setText("Player " + _this.localGameState.playerId + " - Turn " + _this.worldState.turn);
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
        this.playerText = this.scene.add.text(23, 20, '');
        this.hourglass = this.scene.add.image(875, 30, 'hourglass').setVisible(false);
        this.selectionText = this.scene.add.text(game_scene_1.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(game_scene_1.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y, '');
        this.actionText = this.scene.add.text(game_scene_1.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(game_scene_1.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 25, '', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
            .on('pointerdown', this.handleActionTextClick)
            .on('pointerover', function () { return _this.actionText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.actionText.setFill(colours_1.ACTION_TEXT_COLOUR); });
        this.actionText2 = this.scene.add.text(game_scene_1.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(game_scene_1.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y + 50, '', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
            .on('pointerdown', this.handleActionText2Click)
            .on('pointerover', function () { return _this.actionText2.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
            .on('pointerout', function () { return _this.actionText2.setFill(colours_1.ACTION_TEXT_COLOUR); });
        this.endTurnText = this.scene.add.text(700, hex_geometry_1.mapHeight(map) * game_scene_1.HEX_SIZE + game_scene_1.DRAWING_OFFSET.y, '', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
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

/***/ "./src/scenes/unit-display-object.ts":
/*!*******************************************!*\
  !*** ./src/scenes/unit-display-object.ts ***!
  \*******************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitDisplayObject = void 0;
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
var colours_1 = __webpack_require__(/*! ./colours */ "./src/scenes/colours.ts");
var point_1 = __webpack_require__(/*! ./point */ "./src/scenes/point.ts");
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
            _this.healthBarGraphics.fillRect(HEALTH_BAR_BORDER_THICKNESS, HEALTH_BAR_BORDER_THICKNESS, innerWidth * current / max, innerHeight);
        };
        this.move = function (from, to) {
            var beforeCoords = game_scene_1.hexCenter(from);
            var afterCoords = game_scene_1.hexCenter(to);
            _this.image.setFlipX(afterCoords.x < beforeCoords.x);
            _this.scene.tweens.add(__assign(__assign({ targets: _this.image }, calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET)), { duration: 500, ease: 'Cubic' }));
            _this.scene.tweens.add(__assign(__assign({ targets: _this.healthBarGraphics }, calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET)), { duration: 500, ease: 'Cubic' }));
        };
        this.attack = function (from, to) {
            var beforeCoords = game_scene_1.hexCenter(from);
            var afterCoords = game_scene_1.hexCenter(to);
            _this.image.setFlipX(afterCoords.x < beforeCoords.x);
            _this.scene.tweens.add(__assign(__assign({ targets: _this.image }, calculateTweenXY(beforeCoords, afterCoords, IMAGE_OFFSET)), { duration: 400, ease: 'Cubic', yoyo: true }));
            _this.scene.tweens.add(__assign(__assign({ targets: _this.healthBarGraphics }, calculateTweenXY(beforeCoords, afterCoords, HEALTH_BAR_OFFSET)), { duration: 400, ease: 'Cubic', yoyo: true }));
        };
        this.destroy = function () {
            _this.healthBarGraphics.destroy();
            _this.image.destroy();
        };
        this.scene = scene;
        this.unit = unit;
        this.image = scene.add.image(0, 0, 'llama')
            .setScale(0.8)
            .setTint(this.unit.playerId == 1 ? colours_1.PLAYER_1_TINT : colours_1.PLAYER_2_TINT);
        this.healthBarGraphics = scene.add.graphics();
    }
    return UnitDisplayObject;
}());
exports.UnitDisplayObject = UnitDisplayObject;
var calculateTweenXY = function (from, to, offset) {
    return ({
        x: {
            from: from.x + offset.x,
            to: to.x + offset.x,
        },
        y: {
            from: from.y + offset.y,
            to: to.y + offset.y,
        },
    });
};


/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
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
exports.Server = void 0;
var world_state_1 = __webpack_require__(/*! ../world/world-state */ "./src/world/world-state.ts");
var world_event_evaluator_1 = __webpack_require__(/*! ../world/world-event-evaluator */ "./src/world/world-event-evaluator.ts");
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.worldState = world_state_1.INITIAL_WORLD_STATE;
        this.listeners = [];
        this.addListener = function (listener) { return _this.listeners.push(listener); };
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
            switch (action.type) {
                case 'attack':
                    _this.handleAttack(playerId, action);
                    break;
                case 'moveUnit':
                    _this.handleMoveUnit(playerId, action);
                    break;
                case 'endTurn':
                    _this.handleEndTurn(playerId);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(action);
            }
        };
        this.handleAttack = function (playerId, action) {
            var attackerId = action.attacker.unitId;
            var attacker = _this.worldState.findUnitById(attackerId);
            if (!attacker)
                throw "No unit found with ID " + attackerId;
            if (attacker.playerId != playerId)
                throw "Cannot control another player's unit: " + attacker.id;
            if (attacker.actionPoints.current < 1)
                throw "Not enough action points to attack";
            if (!attacker.location.equals(action.attacker.location))
                throw "Attacker not in expected location";
            var defenderId = action.defender.unitId;
            var defender = _this.worldState.findUnitById(defenderId);
            if (!defender)
                throw "No unit found with ID " + defenderId;
            if (defender.playerId == playerId)
                throw "Cannot attack own unit";
            if (!defender.location.equals(action.defender.location))
                throw "Defender not in expected location";
            if (!attacker.location.isAdjacentTo(defender.location))
                throw "Invalid unit attack between non-adjacent hexes " + attacker.location + " to " + defender.location;
            var attackerDamage = Math.min(attacker.hitPoints.current, 10);
            var defenderDamage = Math.min(defender.hitPoints.current, 20);
            var event = _this.makeCombatWorldEvent(attacker, attackerDamage, defender, defenderDamage);
            _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event);
            _this.notifyListeners(event);
        };
        this.makeCombatWorldEvent = function (attacker, attackerDamage, defender, defenderDamage) { return ({
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
        this.handleMoveUnit = function (playerId, action) {
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
            var event = {
                type: 'unitMoved',
                playerId: playerId,
                actionPointsConsumed: 1,
                unitId: unitId,
                from: from,
                to: to,
            };
            _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event);
            _this.notifyListeners(event);
        };
    }
    Server.prototype.handleEndTurn = function (playerId) {
        var player = this.worldState.findPlayer(playerId);
        if (!player)
            throw "No player with ID " + playerId;
        if (player.endedTurn)
            throw "Player has already ended their turn";
        var playersYetToEndTheirTurn = this.worldState.players.filter(function (player) { return !player.endedTurn; }).map(function (player) { return player.id; });
        var wholeTurnEnded = R.equals(playersYetToEndTheirTurn, [playerId]);
        var event = wholeTurnEnded ? { type: 'newTurn' } : { type: 'playerEndedTurn', playerId: playerId };
        this.worldState = world_event_evaluator_1.applyEvent(this.worldState, event);
        this.notifyListeners(event);
    };
    return Server;
}());
exports.Server = Server;


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

/***/ "./src/util/types.ts":
/*!***************************!*\
  !*** ./src/util/types.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.just = exports.nothing = exports.toOption = exports.toMaybe = void 0;
exports.toMaybe = function (option) {
    return option == undefined ? exports.nothing : exports.just(option);
};
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

/***/ "./src/world/unit.ts":
/*!***************************!*\
  !*** ./src/world/unit.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = exports.HitPoints = exports.ActionPoints = void 0;
var hex_1 = __webpack_require__(/*! ./hex */ "./src/world/hex.ts");
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
        this.refreshActionPoints = function () {
            return _this.copy({ actionPoints: _this.actionPoints.refresh() });
        };
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
    Unit.fromJson = function (json) { return new Unit({
        id: json.id,
        playerId: json.playerId,
        name: json.name,
        location: hex_1.Hex.fromJson(json.location),
        hitPoints: HitPoints.fromJson(json.hitPoints),
        actionPoints: ActionPoints.fromJson(json.actionPoints),
    }); };
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
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
exports.applyEvent = function (state, event) {
    switch (event.type) {
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
var handleUnitMoved = function (state, event) {
    var _a;
    var unitId = event.unitId, playerId = event.playerId, from = event.from, to = event.to;
    if (!from.isAdjacentTo(to))
        throw "Invalid unit movement between non-adjacent hexes " + from + " to " + to;
    if (!state.map.isInBounds(to))
        throw "Invalid unit movement to out-of-bounds hex " + to;
    var unit = state.findUnitById(unitId);
    if (!unit)
        throw "No unit found with ID " + unitId;
    if (((_a = state.findUnitInLocation(from)) === null || _a === void 0 ? void 0 : _a.id) != unitId)
        throw "Invalid from location for unit movement";
    if (state.findUnitInLocation(to))
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
        var r, c, x, hex;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    r = 0;
                    _a.label = 1;
                case 1:
                    if (!(r < this.height)) return [3 /*break*/, 6];
                    c = 0;
                    _a.label = 2;
                case 2:
                    if (!(c < this.width)) return [3 /*break*/, 5];
                    x = -Math.floor(r / 2) + c;
                    hex = new hex_1.Hex(x, r);
                    return [4 /*yield*/, hex];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    c++;
                    return [3 /*break*/, 2];
                case 5:
                    r++;
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
exports.INITIAL_WORLD_STATE = exports.WorldState = exports.Player = void 0;
var hex_1 = __webpack_require__(/*! ./hex */ "./src/world/hex.ts");
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var world_map_1 = __webpack_require__(/*! ./world-map */ "./src/world/world-map.ts");
var unit_1 = __webpack_require__(/*! ./unit */ "./src/world/unit.ts");
var Player = /** @class */ (function () {
    function Player(_a) {
        var _this = this;
        var id = _a.id, endedTurn = _a.endedTurn;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? _this.id : _c, _d = _b.endedTurn, endedTurn = _d === void 0 ? _this.endedTurn : _d;
            return new Player({
                id: id,
                endedTurn: endedTurn,
            });
        };
        this.toJson = function () { return ({ id: _this.id, endedTurn: _this.endedTurn }); };
        this.id = id;
        this.endedTurn = endedTurn;
    }
    Player.fromJson = function (json) { return new Player({ id: json.id, endedTurn: json.endedTurn }); };
    return Player;
}());
exports.Player = Player;
var WorldState = /** @class */ (function () {
    function WorldState(_a) {
        var _this = this;
        var turn = _a.turn, map = _a.map, units = _a.units, players = _a.players;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.turn, turn = _c === void 0 ? _this.turn : _c, _d = _b.map, map = _d === void 0 ? _this.map : _d, _e = _b.units, units = _e === void 0 ? _this.units : _e, _f = _b.players, players = _f === void 0 ? _this.players : _f;
            return new WorldState({ turn: turn, map: map, units: units, players: players });
        };
        this.findPlayer = function (playerId) {
            return R.find(function (player) { return player.id == playerId; }, _this.players);
        };
        this.findUnitById = function (unitId) {
            return R.find(function (unit) { return unit.id == unitId; }, _this.units);
        };
        this.getUnitById = function (unitId) {
            var unit = _this.findUnitById(unitId);
            if (!unit) {
                throw "No unit found with ID " + unitId;
            }
            return unit;
        };
        this.findUnitInLocation = function (hex) {
            return R.find(function (unit) { return unit.location.equals(hex); }, _this.units);
        };
        this.replaceUnit = function (unitId, unit) {
            return _this.copy({ units: R.append(unit, R.filter(function (unit) { return unit.id != unitId; }, _this.units)) });
        };
        this.removeUnit = function (unitId) {
            return _this.copy({ units: R.filter(function (unit) { return unit.id != unitId; }, _this.units) });
        };
        this.replacePlayer = function (playerId, player) {
            return _this.copy({ players: R.append(player, R.filter(function (player) { return player.id != playerId; }, _this.players)) });
        };
        this.toJson = function () { return ({
            turn: _this.turn,
            map: _this.map.toJson(),
            units: _this.units.map(function (unit) { return unit.toJson(); }),
            players: _this.players.map(function (player) { return player.toJson(); }),
        }); };
        this.turn = turn;
        this.map = map;
        this.units = units;
        this.players = players;
    }
    WorldState.fromJson = function (json) { return new WorldState({
        turn: json.turn,
        map: world_map_1.WorldMap.fromJson(json.map),
        units: json.units.map(function (unit) { return unit_1.Unit.fromJson(unit); }),
        players: json.players.map(function (unit) { return Player.fromJson(unit); }),
    }); };
    return WorldState;
}());
exports.WorldState = WorldState;
exports.INITIAL_WORLD_STATE = new WorldState({
    turn: 1,
    map: new world_map_1.WorldMap({ width: 10, height: 6 }),
    players: [
        new Player({
            id: 1,
            endedTurn: false,
        }),
        new Player({
            id: 2,
            endedTurn: false,
        }),
    ],
    units: [
        new unit_1.Unit({
            id: 1,
            playerId: 1,
            name: 'Walter',
            location: new hex_1.Hex(1, 1),
            hitPoints: new unit_1.HitPoints({ current: 100, max: 100 }),
            actionPoints: new unit_1.ActionPoints({ current: 2, max: 2 }),
        }),
        new unit_1.Unit({
            id: 2,
            playerId: 1,
            name: 'Becky',
            location: new hex_1.Hex(0, 3),
            hitPoints: new unit_1.HitPoints({ current: 100, max: 100 }),
            actionPoints: new unit_1.ActionPoints({ current: 2, max: 2 }),
        }),
        new unit_1.Unit({
            id: 3,
            playerId: 2,
            name: 'Chewpaca',
            location: new hex_1.Hex(2, 1),
            hitPoints: new unit_1.HitPoints({ current: 100, max: 100 }),
            actionPoints: new unit_1.ActionPoints({ current: 2, max: 2 }),
        }),
        new unit_1.Unit({
            id: 4,
            playerId: 2,
            name: 'Barack O. Llama',
            location: new hex_1.Hex(3, 2),
            hitPoints: new unit_1.HitPoints({ current: 100, max: 100 }),
            actionPoints: new unit_1.ActionPoints({ current: 2, max: 2 }),
        }),
    ],
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9hc3NldC1rZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb21iaW5lZC1zdGF0ZS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2hleC1nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMva2V5Ym9hcmQtbWFwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9jYWwtYWN0aW9uLXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvY2FsLWdhbWUtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYXAtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RleHRzLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdW5pdC1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWVudS1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7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QUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFFN0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQWMsQ0FBQyxDQUFDLEdBQUcsdUJBQVEsQ0FBQyxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLHdCQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQVEsR0FBRywyQkFBYyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDckksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQWMsQ0FBQyxDQUFDLEdBQUcsdUJBQVEsQ0FBQyxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLHdCQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcscUJBQVEsR0FBRywyQkFBYyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLDRCQUFrQixFQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUU7YUFDbkwsRUFBRSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUM7YUFDN0MsRUFBRSxDQUFDLGFBQWEsRUFBRSxjQUFNLFlBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGtDQUF3QixDQUFDLEVBQWpELENBQWlELENBQUM7YUFDMUUsRUFBRSxDQUFDLFlBQVksRUFBRSxjQUFNLFlBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLDRCQUFrQixDQUFDLEVBQTNDLENBQTJDLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQWMsQ0FBQyxDQUFDLEdBQUcsdUJBQVEsQ0FBQyxxQkFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLHdCQUFTLENBQUMsR0FBRyxDQUFDLEdB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RSxJQUFJLGdCQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNwRCxZQUFZLEVBQUUsSUFBSSxtQkFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDdkQsQ0FBQztRQUNGLElBQUksV0FBSSxDQUFDO1lBQ1AsRUFBRSxFQUFFLENBQUM7WUFDTCxRQUFRLEVBQUUsQ0FBQztZQUNYLElBQUksRUFBRSxpQkFBaUI7WUFDdkIsUUFBUSxFQUFFLElBQUksU0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDdkIsU0FBUyxFQUFFLElBQUksZ0JBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3BELFlBQVksRUFBRSxJQUFJLG1CQUFZLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUN2RCxDQUFDO0tBQ0g7Q0FDRixDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XG59O1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnXG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnU2FtcGxlJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgcGFyZW50OiAnZ2FtZScsXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxufVxuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lLnNjYWxlLnNldEdhbWVTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpXG59KVxuIiwiZXhwb3J0IGNvbnN0IEF1ZGlvS2V5cyA9IHtcbiAgQVRUQUNLOiAnYXR0YWNrJyxcbiAgREVBVEg6ICdkZWF0aCcsXG4gIFdBTEs6ICd3YWxrJyxcbiAgTkVXX1RVUk46ICduZXctdHVybicsXG59XG5cbmV4cG9ydCBjb25zdCBBTExfQVVESU9fS0VZUyA9IFtBdWRpb0tleXMuQVRUQUNLLCBBdWRpb0tleXMuREVBVEgsIEF1ZGlvS2V5cy5XQUxLLCBBdWRpb0tleXMuTkVXX1RVUk5dIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4vYXNzZXQta2V5cydcbmltcG9ydCB7IEdhbWVTY2VuZURhdGEgfSBmcm9tICcuL21haW4tbWVudS1zY2VuZSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdCb290Jyxcbn1cblxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjVcblxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMFxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGgsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgcHJvZ3Jlc3NCYXJXaWR0aCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0LFxuICAgICAgMHgwMDAwMDAsXG4gICAgKVxuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICAxMCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsXG4gICAgICAweDg4ODg4OCxcbiAgICApXG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpXG5cbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XG4gICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWVcblxuICAgICAgY29uc3QgcGVyY2VudCA9IHZhbHVlICogMTAwXG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGUpID0+IHtcbiAgICAgIGFzc2V0VGV4dC5zZXRUZXh0KGZpbGUua2V5KVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KClcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpXG5cbiAgICAgIC8vIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKVxuICAgICAgY29uc3QgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoXG4gICAgICBpZiAoaGFzaCA9PSBcIlwiKSB7XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGE6IEdhbWVTY2VuZURhdGEgPSB7IGlkOiB3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkgfVxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywgZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkQXNzZXRzKClcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaGV4LXRpbGVzZXQtcGFja1xuICAgIHRoaXMubG9hZC5pbWFnZSgnbGxhbWEnLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWFfMTQucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2hvdXJnbGFzcy1pY29uXG4gICAgdGhpcy5sb2FkLmltYWdlKCdob3VyZ2xhc3MnLCAnYXNzZXRzL3Nwcml0ZXMvSG91cmdsYXNzLnBuZycpXG5cbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50LzM3LWhpdHNwdW5jaGVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5BVFRBQ0ssICdhc3NldHMvYXVkaW8vaGl0MTgubXAzLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9tYWxlLWdydW50eWVsbGluZy1zb3VuZHNcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLkRFQVRILCAnYXNzZXRzL2F1ZGlvLzF5ZWxsNC53YXYnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvZ3Jhc3MtZm9vdC1zdGVwLXNvdW5kcy15by1mcmFua2llXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5XQUxLLCAnYXNzZXRzL2F1ZGlvL3NmeF9zdGVwX2dyYXNzX2wubXAzJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L3VpLXNvdW5kLWVmZmVjdHMtcGFja1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuTkVXX1RVUk4sICdhc3NldHMvYXVkaW8vTUVOVSBBX1NlbGVjdC53YXYnKVxuICB9XG59XG4iLCJpbXBvcnQgQ29sb3IgPSBQaGFzZXIuRGlzcGxheS5Db2xvclxuXG5leHBvcnQgdHlwZSBDb2xvdXJTdHJpbmcgPSBzdHJpbmdcbmV4cG9ydCB0eXBlIENvbG91ck51bWJlciA9IG51bWJlclxuXG5leHBvcnQgY29uc3QgY29sb3VyTnVtYmVyID0gKGNvbG91clN0cmluZzogQ29sb3VyU3RyaW5nKTogQ29sb3VyTnVtYmVyID0+IENvbG9yLkhleFN0cmluZ1RvQ29sb3IoY29sb3VyU3RyaW5nKS5jb2xvclxuXG5leHBvcnQgY29uc3QgSEVBTFRIX0JPUkRFUl9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyMwMDAwMDAnKVxuZXhwb3J0IGNvbnN0IEhFQUxUSF9FTVBUWV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZmZmYnKVxuZXhwb3J0IGNvbnN0IEhFQUxUSF9GVUxMX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzRkZjAzNycpXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjY2NmZmJlJylcbmV4cG9ydCBjb25zdCBIT1ZFUl9ERUZBVUxUX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZGNmZmQxJylcblxuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZDA4JylcbmV4cG9ydCBjb25zdCBIT1ZFUl9TRUxFQ1RFRF9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmRiZicpXG5cbmV4cG9ydCBjb25zdCBUQVJHRVRBQkxFX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjOWRmMWU3JylcbmV4cG9ydCBjb25zdCBIT1ZFUl9UQVJHRVRBQkxFX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjY2VmMGViJylcblxuZXhwb3J0IGNvbnN0IEFDVElPTl9URVhUX0NPTE9VUiA9ICcjY2NjYzAwJ1xuZXhwb3J0IGNvbnN0IEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiA9ICcjZmZmZjAwJ1xuXG5leHBvcnQgY29uc3QgUExBWUVSXzFfVElOVCA9IDB4ZmZiYmJiXG5leHBvcnQgY29uc3QgUExBWUVSXzJfVElOVCA9IDB4YmJiYmZmXG4iLCJpbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IFBsYXllciwgUGxheWVySWQsIFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuZXhwb3J0IGNsYXNzIENvbWJpbmVkU3RhdGUge1xuXG4gIHByb3RlY3RlZCByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByb3RlY3RlZCByZWFkb25seSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gIH1cblxuICBwdWJsaWMgZmluZFNlbGVjdGVkVW5pdCA9ICgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy5zZWxlY3RlZEhleCA/IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMuc2VsZWN0ZWRIZXgpIDogdW5kZWZpbmVkXG5cbiAgcHVibGljIGdldCBzZWxlY3RlZEhleCgpOiBPcHRpb248SGV4PiB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGxheWVySWQoKTogUGxheWVySWQge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkXG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyB1bml0Q291bGRQb3RlbnRpYWxseU1vdmUgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDAgJiYgIXRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVyblxuXG4gIHB1YmxpYyB1bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0LmFjdGlvblBvaW50cy5jdXJyZW50ID4gMCAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHVibGljIHVuaXRDYW5Nb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgaGV4OiBIZXgpOiBib29sZWFuID0+XG4gICAgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdClcbiAgICAmJiBoZXguaXNBZGphY2VudFRvKHVuaXQubG9jYXRpb24pXG4gICAgJiYgdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleClcbiAgICAmJiAhdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyB1bml0Q2FuQXR0YWNrSGV4ID0gKHVuaXQ6IFVuaXQsIGxvY2F0aW9uOiBIZXgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24obG9jYXRpb24pXG4gICAgcmV0dXJuIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdClcbiAgICAgICYmIHRhcmdldFVuaXQgIT0gdW5kZWZpbmVkXG4gICAgICAmJiB0YXJnZXRVbml0LnBsYXllcklkICE9IHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgICAgICYmIHVuaXQubG9jYXRpb24uaXNBZGphY2VudFRvKGxvY2F0aW9uKVxuICB9XG5cbiAgcHVibGljIGZpbmROZXh0VW5pdFdpdGhBY3Rpb25Qb2ludHMgPSAodW5pdElkPzogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCBjYW5kaWRhdGVVbml0cyA9IFIuc29ydEJ5KHVuaXQgPT4gdW5pdC5pZCwgdGhpcy53b3JsZFN0YXRlLnVuaXRzLmZpbHRlcih1bml0ID0+IHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0LmFjdGlvblBvaW50cy5jdXJyZW50ID4gMCkpXG4gICAgaWYgKHVuaXRJZClcbiAgICAgIHJldHVybiBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKHVuaXQgPT4gdW5pdC5pZCA+IHVuaXRJZCkpID8/IFIuaGVhZChjYW5kaWRhdGVVbml0cy5maWx0ZXIodW5pdCA9PiB1bml0LmlkIDwgdW5pdElkKSlcbiAgICBlbHNlXG4gICAgICByZXR1cm4gUi5oZWFkKGNhbmRpZGF0ZVVuaXRzKVxuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKVxuICAgICAgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBsYXllciB3aXRoIGlkICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHBsYXllclxuICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgYWRkUG9pbnRzLCBtdWx0aXBseVBvaW50LCBQb2ludCwgc3VidHJhY3RQb2ludHMgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCB9IGZyb20gJy4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSwgUGxheWVySWQsIFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gJy4uL3NlcnZlci9zZXJ2ZXInXG5pbXBvcnQge1xuICBDb21iYXRQYXJ0aWNpcGFudEluZm8sXG4gIENvbWJhdFdvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgeyBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgVW5pdERpc3BsYXlPYmplY3QgfSBmcm9tICcuL3VuaXQtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IE1hcERpc3BsYXlPYmplY3QgfSBmcm9tICcuL21hcC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IG5vdGhpbmcsIE9wdGlvbiwgdG9NYXliZSB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUsIExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgQUxMX0FVRElPX0tFWVMsIEF1ZGlvS2V5cyB9IGZyb20gJy4vYXNzZXQta2V5cydcbmltcG9ydCB7IG1hcFRvTG9jYWxBY3Rpb24gfSBmcm9tICcuL2tleWJvYXJkLW1hcHBlcidcbmltcG9ydCB7IExvY2FsQWN0aW9uIH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24nXG5pbXBvcnQgeyBMb2NhbEFjdGlvblByb2Nlc3NvciwgTG9jYWxBY3Rpb25SZXN1bHQgfSBmcm9tICcuL2xvY2FsLWFjdGlvbi1wcm9jZXNzb3InXG5pbXBvcnQgeyBUZXh0c0Rpc3BsYXlPYmplY3QgfSBmcm9tICcuL3RleHRzLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IENsaWVudFRvU2VydmVyTWVzc2FnZSwgU2VydmVyVG9DbGllbnRNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmVyL21lc3NhZ2VzJ1xuaW1wb3J0IHsgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4vbWFpbi1tZW51LXNjZW5lJ1xuaW1wb3J0IFBvaW50ZXIgPSBQaGFzZXIuSW5wdXQuUG9pbnRlclxuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5pbXBvcnQgUGVlciA9IHJlcXVpcmUoJ3BlZXJqcycpXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnR2FtZScsXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfU0laRSA9IDQ4XG5leHBvcnQgY29uc3QgRFJBV0lOR19PRkZTRVQgPSB7IHg6IDYwLCB5OiAxMDAgfVxuZXhwb3J0IGNvbnN0IGhleENlbnRlciA9IChoZXg6IEhleCk6IFBvaW50ID0+IGFkZFBvaW50cyhtdWx0aXBseVBvaW50KGNlbnRlclBvaW50KGhleCksIEhFWF9TSVpFKSwgRFJBV0lOR19PRkZTRVQpXG5cbmV4cG9ydCB0eXBlIEdhbWVJZCA9IHN0cmluZ1xuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgLy8gU2VydmVyLW9ubHk6XG4gIHByaXZhdGUgc2VydmVyOiBPcHRpb248U2VydmVyPiA9IHVuZGVmaW5lZFxuICBwcml2YXRlIGNsaWVudENvbm5lY3Rpb25zOiBQZWVyLkRhdGFDb25uZWN0aW9uW10gPSBbXVxuXG4gIC8vIENsaWVudC1vbmx5OlxuICBwcml2YXRlIHNlcnZlckNvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb25cblxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFXG5cbiAgcHJpdmF0ZSBtYXBEaXNwbGF5T2JqZWN0OiBNYXBEaXNwbGF5T2JqZWN0XG4gIHByaXZhdGUgdW5pdERpc3BsYXlPYmplY3RzOiBNYXA8VW5pdElkLCBVbml0RGlzcGxheU9iamVjdD4gPSBuZXcgTWFwKClcbiAgcHJpdmF0ZSB0ZXh0c0Rpc3BsYXlPYmplY3Q6IFRleHRzRGlzcGxheU9iamVjdFxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgLy8gQ3JlYXRlXG4gIC8vIC0tLS0tLVxuXG4gIHB1YmxpYyBjcmVhdGUgPSAoZ2FtZVNjZW5lRGF0YTogR2FtZVNjZW5lRGF0YSk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZVxuICAgIGlmIChnYW1lU2NlbmVEYXRhLmlkKSB7XG4gICAgICB0aGlzLmFjdEFzQ2xpZW50KGdhbWVTY2VuZURhdGEuaWQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0QXNTZXJ2ZXIoKVxuICAgIH1cblxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goa2V5ID0+IHRoaXMuc291bmQuYWRkKGtleSkpXG4gICAgdGhpcy5jcmVhdGVEaXNwbGF5T2JqZWN0cygpXG4gICAgdGhpcy5zZXRVcElucHV0cygpXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudChnYW1lSWQ6IEdhbWVJZCkge1xuICAgIGNvbnN0IHBlZXIgPSB0aGlzLm5ld1BlZXIoKVxuICAgIHBlZXIub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gcGVlci5jb25uZWN0KGdhbWVJZClcbiAgICAgIGNvbm5lY3Rpb24ub24oJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VydmVyQ29ubmVjdGlvbiA9IGNvbm5lY3Rpb25cbiAgICAgICAgY29ubmVjdGlvbi5zZW5kKHsgdHlwZTogJ2pvaW4nIH0pXG4gICAgICAgIGNvbm5lY3Rpb24ub24oJ2RhdGEnLCAobWVzc2FnZTogU2VydmVyVG9DbGllbnRNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnam9pbmVkJzpcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IHBsYXllcklkOiBtZXNzYWdlLnBsYXllcklkIH0pXG4gICAgICAgICAgICAgIHRoaXMud29ybGRTdGF0ZSA9IFdvcmxkU3RhdGUuZnJvbUpzb24obWVzc2FnZS53b3JsZFN0YXRlKVxuICAgICAgICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICd3b3JsZEV2ZW50JzpcbiAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXb3JsZEV2ZW50KGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5ldmVudCkpXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobWVzc2FnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gICAgcGVlci5vbignZXJyb3InLCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgfVxuXG4gIHByaXZhdGUgbmV3UGVlciA9IChpZD86IHN0cmluZywgb3B0aW9ucz86IFBlZXIuUGVlckpTT3B0aW9uKSA9PlxuICAgIChuZXcgKHdpbmRvdyBhcyBhbnkpLlBlZXIoaWQsIG9wdGlvbnMpKSBhcyBQZWVyXG5cbiAgcHJpdmF0ZSBhY3RBc1NlcnZlcigpIHtcbiAgICBjb25zdCBzZXJ2ZXIgPSBuZXcgU2VydmVyKClcbiAgICBzZXJ2ZXIuYWRkTGlzdGVuZXIoKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICB0aGlzLmhhbmRsZVdvcmxkRXZlbnQoZXZlbnQpXG4gICAgICBmb3IgKGNvbnN0IGNsaWVudENvbm5lY3Rpb24gb2YgdGhpcy5jbGllbnRDb25uZWN0aW9ucykge1xuICAgICAgICBjb25zdCBtZXNzYWdlOiBTZXJ2ZXJUb0NsaWVudE1lc3NhZ2UgPSB7IHR5cGU6ICd3b3JsZEV2ZW50JywgZXZlbnQ6IHNlcmlhbGlzZVRvSnNvbihldmVudCkgfVxuICAgICAgICBjbGllbnRDb25uZWN0aW9uLnNlbmQobWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXJcbiAgICBjb25zdCBwZWVyID0gdGhpcy5uZXdQZWVyKClcbiAgICBwZWVyLm9uKCdvcGVuJywgKGlkOiBHYW1lSWQpID0+IHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaWQpXG4gICAgcGVlci5vbignZXJyb3InLCBlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICBwZWVyLm9uKCdjb25uZWN0aW9uJywgKGNsaWVudENvbm5lY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuY2xpZW50Q29ubmVjdGlvbnMucHVzaChjbGllbnRDb25uZWN0aW9uKVxuICAgICAgY2xpZW50Q29ubmVjdGlvbi5vbignZGF0YScsIChtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UpID0+XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xpZW50VG9TZXJ2ZXJNZXNzYWdlKG1lc3NhZ2UsIGNsaWVudENvbm5lY3Rpb24pKVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNsaWVudFRvU2VydmVyTWVzc2FnZShtZXNzYWdlOiBDbGllbnRUb1NlcnZlck1lc3NhZ2UsIGNsaWVudENvbm5lY3Rpb246IFBlZXIuRGF0YUNvbm5lY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKVxuICAgIGNvbnN0IHNlcnZlciA9IHRoaXMuc2VydmVyIVxuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdqb2luJzpcbiAgICAgICAgY2xpZW50Q29ubmVjdGlvbi5zZW5kKHtcbiAgICAgICAgICB0eXBlOiAnam9pbmVkJyxcbiAgICAgICAgICBwbGF5ZXJJZDogMixcbiAgICAgICAgICB3b3JsZFN0YXRlOiBzZXJ2ZXIud29ybGRTdGF0ZS50b0pzb24oKSxcbiAgICAgICAgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3dvcmxkQWN0aW9uJzpcbiAgICAgICAgc2VydmVyLmhhbmRsZUFjdGlvbihtZXNzYWdlLnBsYXllcklkLCBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuYWN0aW9uKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRGlzcGxheU9iamVjdHMoKSB7XG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0ID0gbmV3IE1hcERpc3BsYXlPYmplY3QodGhpcywgdGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0ID0gbmV3IFRleHRzRGlzcGxheU9iamVjdCh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUsIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24pXG4gICAgZm9yIChjb25zdCB1bml0IG9mIHRoaXMud29ybGRTdGF0ZS51bml0cykge1xuICAgICAgY29uc3QgdW5pdERpc3BsYXlPYmplY3QgPSBuZXcgVW5pdERpc3BsYXlPYmplY3QodGhpcywgdW5pdClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0LmlkLCB1bml0RGlzcGxheU9iamVjdClcbiAgICB9XG4gIH1cblxuICAvLyBJbnB1dCBoYW5kbGVyc1xuICAvLyAtLS0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgc2V0VXBJbnB1dHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5pbnB1dC5tb3VzZS5kaXNhYmxlQ29udGV4dE1lbnUoKVxuICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleSlcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24pXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcm1vdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBsb2NhbEFjdGlvbiA9IG1hcFRvTG9jYWxBY3Rpb24oZXZlbnQsIHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZSlcbiAgICBpZiAobG9jYWxBY3Rpb24pXG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKGxvY2FsQWN0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVMb2NhbEFjdGlvbiA9IChsb2NhbEFjdGlvbjogTG9jYWxBY3Rpb24pOiB2b2lkID0+IHtcbiAgICBjb25zdCBsb2NhbEFjdGlvblByb2Nlc3NvciA9IG5ldyBMb2NhbEFjdGlvblByb2Nlc3Nvcih0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxBY3Rpb25Qcm9jZXNzb3IucHJvY2Vzcyhsb2NhbEFjdGlvbilcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICB0aGlzLmVuYWN0TG9jYWxBY3Rpb25SZXN1bHQocmVzdWx0KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZW5hY3RMb2NhbEFjdGlvblJlc3VsdCA9IChyZXN1bHQ6IExvY2FsQWN0aW9uUmVzdWx0KTogdm9pZCA9PiB7XG4gICAgaWYgKHJlc3VsdC5uZXdMb2NhbEdhbWVTdGF0ZSkge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHJlc3VsdC5uZXdMb2NhbEdhbWVTdGF0ZVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgIH1cbiAgICBpZiAocmVzdWx0LndvcmxkQWN0aW9uKSB7XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyOiB0cnVlIH0pXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICAgIHRoaXMuYXN5bmNTZW5kVG9TZXJ2ZXIocmVzdWx0LndvcmxkQWN0aW9uKS50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcjogZmFsc2UgfSlcbiAgICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jU2VuZFRvU2VydmVyID0gYXN5bmMgKGFjdGlvbjogV29ybGRBY3Rpb24pOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQoKCkgPT4gcmVzb2x2ZSgpLCAxMjApKVxuICAgIGlmICh0aGlzLnNlcnZlcikge1xuICAgICAgdGhpcy5zZXJ2ZXIuaGFuZGxlQWN0aW9uKHRoaXMucGxheWVySWQsIGFjdGlvbilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJ2ZXJDb25uZWN0aW9uLnNlbmQoe1xuICAgICAgICB0eXBlOiAnd29ybGRBY3Rpb24nLFxuICAgICAgICBhY3Rpb246IHNlcmlhbGlzZVRvSnNvbihhY3Rpb24pLFxuICAgICAgICBwbGF5ZXJJZDogdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCxcbiAgICAgIH0pXG4gICAgICAvLyBhd2FpdCB0aGlzLmNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xuICAgICAgLy8gICB0eXBlOiAnd29ybGRBY3Rpb24nLFxuICAgICAgLy8gICBhY3Rpb246IHNlcmlhbGlzZVRvSnNvbihhY3Rpb24pLFxuICAgICAgLy8gICBwbGF5ZXJJZDogdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZCxcbiAgICAgIC8vIH0pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9pbnRlclBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlckRvd24gPSAocG9pbnRlcjogUG9pbnRlcik6IHZvaWQgPT4ge1xuICAgIC8vIElnbm9yZSBjbGlja3Mgb24gdGhlc2UgYXMgdGhleSBoYXZlIHRoZWlyIG93biBoYW5kbGVyc1xuICAgIGNvbnN0IHByZXNzZWRQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIGlmICh0aGlzLnRleHRzRGlzcGxheU9iamVjdC5oYXNDbGlja0hhbmRsZXJGb3IocHJlc3NlZFBvaW50KSlcbiAgICAgIHJldHVyblxuICAgIGNvbnN0IGhleCA9IGZyb21Qb2ludChtdWx0aXBseVBvaW50KHN1YnRyYWN0UG9pbnRzKHByZXNzZWRQb2ludCwgRFJBV0lOR19PRkZTRVQpLCAxIC8gSEVYX1NJWkUpKVxuICAgIGlmIChwb2ludGVyLmJ1dHRvbiA9PSAyKSB7XG4gICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2dvSGV4JywgaGV4IH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlTGVmdENsaWNrKGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxlZnRDbGljayA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdzZWxlY3RIZXgnLCBoZXggfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdjb21wbGV0ZU1vdmUnLCB1bml0SWQ6IG1vZGUudW5pdElkLCBoZXggfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24oeyB0eXBlOiAnY29tcGxldGVBdHRhY2snLCB1bml0SWQ6IG1vZGUudW5pdElkLCBoZXggfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN5bmNcbiAgLy8gLS0tLVxuXG4gIHB1YmxpYyBzeW5jU2NlbmUgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3Quc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcblxuICAgIGNvbnN0IHN1cnBsdXNVbml0SWRzID0gUi5kaWZmZXJlbmNlKEFycmF5LmZyb20odGhpcy51bml0RGlzcGxheU9iamVjdHMua2V5cygpKSwgdGhpcy53b3JsZFN0YXRlLnVuaXRzLm1hcCh1bml0ID0+IHVuaXQuaWQpKVxuICAgIGZvciAoY29uc3QgdW5pdElkIG9mIHN1cnBsdXNVbml0SWRzKSB7XG4gICAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpIVxuICAgICAgdW5pdERpc3BsYXlPYmplY3QuZGVzdHJveSgpXG4gICAgICB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5kZWxldGUodW5pdElkKVxuICAgIH1cblxuICAgIHRoaXMud29ybGRTdGF0ZS51bml0cy5mb3JFYWNoKHVuaXQgPT4ge1xuICAgICAgbGV0IHVuaXREaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXQuaWQpXG4gICAgICBpZiAoIXVuaXREaXNwbGF5T2JqZWN0KSB7XG4gICAgICAgIHVuaXREaXNwbGF5T2JqZWN0ID0gbmV3IFVuaXREaXNwbGF5T2JqZWN0KHRoaXMsIHVuaXQpXG4gICAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0LmlkLCB1bml0RGlzcGxheU9iamVjdClcbiAgICAgIH1cbiAgICAgIHVuaXREaXNwbGF5T2JqZWN0LnN5bmNTY2VuZSh1bml0KVxuICAgIH0pXG4gIH1cblxuICAvLyBIYW5kbGUgd29ybGQgZXZlbnRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBvbGRXb3JsZFN0YXRlID0gdGhpcy53b3JsZFN0YXRlXG4gICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudChvbGRXb3JsZFN0YXRlLCBldmVudClcbiAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgIGNhc2UgJ3VuaXRNb3ZlZCc6XG4gICAgICAgIHRoaXMuaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudChldmVudCwgb2xkV29ybGRTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlQ29tYmF0V29ybGRFdmVudChldmVudCwgb2xkV29ybGRTdGF0ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3BsYXllckVuZGVkVHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyRW5kZWRUdXJuKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ25ld1R1cm4nOlxuICAgICAgICB0aGlzLmhhbmRsZU5ld1R1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTmV3VHVybiA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aEFjdGlvblBvaW50cygpXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogdG9NYXliZSh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKSxcbiAgICB9KVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50ID0gKGV2ZW50OiBVbml0TW92ZWRXb3JsZEV2ZW50LCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIGZyb20sIHRvIH0gPSBldmVudFxuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuV0FMSylcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBjb25zdCB3YXNQcmV2aW91c2x5U2VsZWN0ZWQgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4ICYmIG9sZFdvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXgpPy5pZCA9PSB1bml0SWRcbiAgICBpZiAod2FzUHJldmlvdXNseVNlbGVjdGVkICYmIHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKHVuaXRJZCwgdG8pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICAgICAgICBzZWxlY3RlZEhleDogdG9NYXliZShuZXdTZWxlY3RlZEhleCksXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICB0aGlzLmdldFVuaXREaXNwbGF5T2JqZWN0KHVuaXRJZCkubW92ZShmcm9tLCB0bylcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sgPSAodW5pdElkOiBVbml0SWQsIGRlZmF1bHRMb2NhdGlvbjogSGV4KTogT3B0aW9uPEhleD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICAvLyBSZXRhaW4gc2VsZWN0aW9uIGlmIHVuaXQgc3RpbGwgZXhpc3RzIGFuZCB3ZSBzdGlsbCBoYXZlIGFjdGlvbiBwb2ludHMsIGVsc2Ugc2VsZWN0IG5leHQgdW5pdCAob3Igbm90aGluZyBpZiB0aGVyZSBpc24ndCBvbmUpXG4gICAgbGV0IG5ld1NlbGVjdGVkSGV4XG4gICAgaWYgKCF1bml0IHx8IHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPT0gMCkge1xuICAgICAgY29uc3QgbmV4dFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aEFjdGlvblBvaW50cyh1bml0SWQpXG4gICAgICBuZXdTZWxlY3RlZEhleCA9IG5leHRVbml0Py5sb2NhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTZWxlY3RlZEhleCA9IGRlZmF1bHRMb2NhdGlvblxuICAgIH1cbiAgICByZXR1cm4gbmV3U2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tYmF0V29ybGRFdmVudCA9IChldmVudDogQ29tYmF0V29ybGRFdmVudCwgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuQVRUQUNLKVxuICAgIGlmIChhdHRhY2tlci5raWxsZWQgfHwgZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkRFQVRIKVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGlvbkFmdGVyQ29tYmF0KGF0dGFja2VyLCBkZWZlbmRlciwgb2xkV29ybGRTdGF0ZSlcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG5cbiAgICBjb25zdCBhdHRhY2tlckRpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQoYXR0YWNrZXIudW5pdElkKVxuICAgIGlmIChhdHRhY2tlckRpc3BsYXlPYmplY3QpXG4gICAgICBhdHRhY2tlckRpc3BsYXlPYmplY3QuYXR0YWNrKGF0dGFja2VyLmxvY2F0aW9uLCBkZWZlbmRlci5sb2NhdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQgPSAoYXR0YWNrZXI6IENvbWJhdFBhcnRpY2lwYW50SW5mbywgZGVmZW5kZXI6IENvbWJhdFBhcnRpY2lwYW50SW5mbywgb2xkV29ybGRTdGF0ZTogV29ybGRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCA9IG5ldyBDb21iaW5lZFN0YXRlKG9sZFdvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpLmZpbmRTZWxlY3RlZFVuaXQoKT8uaWRcbiAgICBpZiAocHJldmlvdXNseVNlbGVjdGVkVW5pdElkID09IGF0dGFja2VyLnVuaXRJZCAmJiBhdHRhY2tlci5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEhleCA9IHRoaXMuY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2soYXR0YWNrZXIudW5pdElkLCBhdHRhY2tlci5sb2NhdGlvbilcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoe1xuICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgIHNlbGVjdGVkSGV4OiB0b01heWJlKG5ld1NlbGVjdGVkSGV4KSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlc2VsZWN0IHVuaXQga2lsbGVkIGJ5IGFub3RoZXIgcGxheWVyXG4gICAgICBpZiAoZGVmZW5kZXIua2lsbGVkICYmIGRlZmVuZGVyLnVuaXRJZCA9PSBwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgJiYgZGVmZW5kZXIucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgICAgc2VsZWN0ZWRIZXg6IG5vdGhpbmcsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXRpbCBxdWVyaWVzXG4gIC8vIC0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgZ2V0VW5pdERpc3BsYXlPYmplY3QgPSAodW5pdElkOiBudW1iZXIpOiBVbml0RGlzcGxheU9iamVjdCA9PiB7XG4gICAgY29uc3QgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdElkKVxuICAgIGlmICghdW5pdERpc3BsYXlPYmplY3QpXG4gICAgICB0aHJvdyBgQ291bGQgbm90IGZpbmQgdW5pdCB3aXRoIElEICR7dW5pdElkfWBcbiAgICByZXR1cm4gdW5pdERpc3BsYXlPYmplY3RcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG5cbn0iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLW1hcCdcblxuZXhwb3J0IGNvbnN0IGNlbnRlclBvaW50ID0gKGhleDogSGV4KTogUG9pbnQgPT5cbiAgKHtcbiAgICB4OiBoZXgueCAqIE1hdGguc3FydCgzKSArIGhleC55ICogTWF0aC5zcXJ0KDMpIC8gMixcbiAgICB5OiBoZXgueSAqIDMgLyAyLFxuICB9KVxuXG5leHBvcnQgY29uc3QgZnJvbVBvaW50ID0gKHBvaW50OiBQb2ludCk6IEhleCA9PiB7XG4gIGNvbnN0IHggPSBwb2ludC54ICogTWF0aC5zcXJ0KDMpIC8gMyAtIHBvaW50LnkgLyAzXG4gIGNvbnN0IHkgPSAyICogcG9pbnQueSAvIDNcbiAgcmV0dXJuIHJvdW5kKG5ldyBIZXgoeCwgeSkpO1xufVxuXG5jb25zdCByb3VuZCA9IChoZXg6IEhleCk6IEhleCA9PiB7XG4gIGNvbnN0IHJ4ID0gTWF0aC5yb3VuZChoZXgueClcbiAgY29uc3QgcnkgPSBNYXRoLnJvdW5kKGhleC55KVxuICBjb25zdCByeiA9IE1hdGgucm91bmQoaGV4LnopXG5cbiAgY29uc3QgeERpZmYgPSBNYXRoLmFicyhyeCAtIGhleC54KVxuICBjb25zdCB5RGlmZiA9IE1hdGguYWJzKHJ5IC0gaGV4LnkpXG4gIGNvbnN0IHpEaWZmID0gTWF0aC5hYnMocnogLSBoZXgueSlcblxuICBpZiAoeERpZmYgPiB5RGlmZiAmJiB4RGlmZiA+IHpEaWZmKVxuICAgIHJldHVybiBuZXcgSGV4KC1yeSAtIHJ6LCByeSlcbiAgZWxzZSBpZiAoeURpZmYgPiB6RGlmZilcbiAgICByZXR1cm4gbmV3IEhleChyeCwgLXJ4IC0gcnopXG4gIGVsc2VcbiAgICByZXR1cm4gbmV3IEhleChyeCwgcnkpXG59XG5cbmNvbnN0IGhleEFuZ2xlID0gTWF0aC5QSSAvIDNcbmNvbnN0IGhleE9mZnNldCA9IE1hdGguUEkgLyA2XG5cbmNvbnN0IGhleENvcm5lciA9IChjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIsIGk6IG51bWJlcik6IFBvaW50ID0+IHtcbiAgY29uc3QgYW5nbGVSYWRpYW5zID0gaGV4QW5nbGUgKiBpIC0gaGV4T2Zmc2V0XG4gIGNvbnN0IHggPSBjZW50ZXIueCArIHNpemUgKiBNYXRoLmNvcyhhbmdsZVJhZGlhbnMpXG4gIGNvbnN0IHkgPSBjZW50ZXIueSArIHNpemUgKiBNYXRoLnNpbihhbmdsZVJhZGlhbnMpXG4gIHJldHVybiB7IHgsIHkgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24qIGhleENvcm5lcnMoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxQb2ludD4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHlpZWxkIGhleENvcm5lcihjZW50ZXIsIHNpemUsIGkpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG1hcEhlaWdodCA9IChtYXA6IFdvcmxkTWFwKTogbnVtYmVyID0+IG1hcC5oZWlnaHQgKiAzIC8gMlxuXG5leHBvcnQgY29uc3QgaGV4V2lkdGggPSAoaGV4U2l6ZTogbnVtYmVyKTogbnVtYmVyID0+IGhleFNpemUgKiBNYXRoLnNxcnQoMylcblxuIiwiaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XG5pbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUtc2NlbmUnXG5cbmV4cG9ydCBkZWZhdWx0IFtCb290U2NlbmUsIEdhbWVTY2VuZSwgTWFpbk1lbnVTY2VuZV07XG4iLCJpbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuXG5leHBvcnQgY29uc3QgbWFwVG9Mb2NhbEFjdGlvbiA9IChldmVudDogS2V5Ym9hcmRFdmVudCwgbW9kZTogTW9kZSk6IE9wdGlvbjxMb2NhbEFjdGlvbj4gPT4ge1xuICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5XRVNUIH1cbiAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICBjYXNlICc2JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLkVBU1QgfVxuICAgIGNhc2UgJzcnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVCB9XG4gICAgY2FzZSAnMyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9FQVNUIH1cbiAgICBjYXNlICc5JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLk5PUlRIX0VBU1QgfVxuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCB9XG4gICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdhYm9ydCcgfVxuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSlcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2VuZFR1cm4nIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbic6XG4gICAgICBpZiAoZXZlbnQuY3RybEtleSlcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ3NlbGVjdE5leHRVbml0JyB9XG4gICAgICBicmVha1xuICAgIGNhc2UgJ20nOlxuICAgICAgaWYgKG1vZGUudHlwZSA9PSAnc2VsZWN0SGV4JylcbiAgICAgICAgcmV0dXJuIHsgdHlwZTogJ2VudGVyTW92ZU1vZGUnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYSc6XG4gICAgICBpZiAobW9kZS50eXBlID09ICdzZWxlY3RIZXgnKVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnZW50ZXJBdHRhY2tNb2RlJyB9XG4gICAgICBicmVha1xuICB9XG59XG5cbiIsImltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb24gfSBmcm9tICcuL2xvY2FsLWFjdGlvbidcbmltcG9ydCB7IG5vdGhpbmcsIE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBIZXhEaXJlY3Rpb24gfSBmcm9tICcuLi93b3JsZC9oZXgtZGlyZWN0aW9uJ1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbW9kZSdcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxBY3Rpb25SZXN1bHQge1xuICBuZXdMb2NhbEdhbWVTdGF0ZT86IExvY2FsR2FtZVN0YXRlXG4gIHdvcmxkQWN0aW9uPzogV29ybGRBY3Rpb25cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsQWN0aW9uUHJvY2Vzc29yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgY29tYmluZWRTdGF0ZSgpOiBDb21iaW5lZFN0YXRlIHtcbiAgICByZXR1cm4gbmV3IENvbWJpbmVkU3RhdGUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICB9XG5cbiAgcHVibGljIHByb2Nlc3MgPSAoYWN0aW9uOiBMb2NhbEFjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2dvJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR28oYWN0aW9uLmRpcmVjdGlvbilcbiAgICAgIGNhc2UgJ2dvSGV4JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlR29IZXgoYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdE5leHRVbml0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlU2VsZWN0TmV4dFVuaXQoKVxuICAgICAgY2FzZSAnYWJvcnQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBYm9ydCgpXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW5kVHVybigpXG4gICAgICBjYXNlICdlbnRlck1vdmVNb2RlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRW50ZXJNb3ZlTW9kZSgpXG4gICAgICBjYXNlICdlbnRlckF0dGFja01vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlckF0dGFja01vZGUoKVxuICAgICAgY2FzZSAnY29tcGxldGVNb3ZlJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVNb3ZlKGFjdGlvbi51bml0SWQsIGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdjb21wbGV0ZUF0dGFjayc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUNvbXBsZXRlQXR0YWNrKGFjdGlvbi51bml0SWQsIGFjdGlvbi5oZXgpXG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3RIZXgoYWN0aW9uLmhleClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3ROZXh0VW5pdCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgY29uc3QgdW5pdFRvU2VsZWN0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmROZXh0VW5pdFdpdGhBY3Rpb25Qb2ludHMoc2VsZWN0ZWRVbml0Py5pZClcbiAgICBpZiAodW5pdFRvU2VsZWN0KSB7XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0U2VsZWN0ZWRIZXgodW5pdFRvU2VsZWN0Py5sb2NhdGlvbikuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydCA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2VsZWN0ZWRIZXg6IG5vdGhpbmcgfSkgfVxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHbyA9IChkaXJlY3Rpb246IEhleERpcmVjdGlvbik6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmIChzZWxlY3RlZEhleClcbiAgICAgIHJldHVybiB0aGlzLm1vdmVPckF0dGFja0hleChzZWxlY3RlZEhleC5nbyhkaXJlY3Rpb24pKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVHb0hleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4gdGhpcy5tb3ZlT3JBdHRhY2tIZXgoaGV4KVxuXG4gIHByaXZhdGUgbW92ZU9yQXR0YWNrSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbk1vdmVUb0hleChzZWxlY3RlZFVuaXQsIGhleCkpXG4gICAgICAgIHJldHVybiB0aGlzLm1vdmVUb0hleChzZWxlY3RlZFVuaXQsIGhleClcbiAgICAgIGVsc2UgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuQXR0YWNrSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2tIZXggPSAoYXR0YWNrZXI6IFVuaXQsIHRhcmdldEhleDogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4ge1xuICAgIGNvbnN0IGRlZmVuZGVyID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0YXJnZXRIZXgpIVxuICAgIHJldHVybiB7XG4gICAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgICB0eXBlOiAnYXR0YWNrJyxcbiAgICAgICAgYXR0YWNrZXI6IHsgdW5pdElkOiBhdHRhY2tlci5pZCwgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uIH0sXG4gICAgICAgIGRlZmVuZGVyOiB7IHVuaXRJZDogZGVmZW5kZXIuaWQsIGxvY2F0aW9uOiB0YXJnZXRIZXggfSxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVG9IZXggPSAodW5pdDogVW5pdCwgZGVzdGluYXRpb246IEhleCk6IExvY2FsQWN0aW9uUmVzdWx0ID0+ICh7XG4gICAgd29ybGRBY3Rpb246IHtcbiAgICAgIHR5cGU6ICdtb3ZlVW5pdCcsXG4gICAgICB1bml0SWQ6IHVuaXQuaWQsXG4gICAgICB0bzogZGVzdGluYXRpb24sXG4gICAgfSxcbiAgfSlcblxuICBwcml2YXRlIGhhbmRsZUVuZFR1cm4gPSAoKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgaWYgKCF0aGlzLmNvbWJpbmVkU3RhdGUuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVybikge1xuICAgICAgcmV0dXJuIHsgd29ybGRBY3Rpb246IHsgdHlwZTogJ2VuZFR1cm4nIH0gfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJNb3ZlTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVudGVyQXR0YWNrTW9kZSA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmICh1bml0ICYmIHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSkge1xuICAgICAgY29uc3QgbmV3TW9kZTogTW9kZSA9IHsgdHlwZTogJ2F0dGFjaycsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICBjb25zdCBuZXdMb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZShuZXdNb2RlKVxuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGUgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVNb3ZlID0gKHVuaXRJZDogVW5pdElkLCBkZXN0aW5hdGlvbjogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKSlcbiAgICAgIHJldHVybiB0aGlzLm1vdmVUb0hleCh1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tcGxldGVBdHRhY2sgPSAodW5pdElkOiBVbml0SWQsIHRhcmdldEhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLmNvbWJpbmVkU3RhdGUudW5pdENhbkF0dGFja0hleChhdHRhY2tlciwgdGFyZ2V0SGV4KSlcbiAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChhdHRhY2tlciwgdGFyZ2V0SGV4KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWxlY3RIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEhleCA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXhcbiAgICBpZiAoIXRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyhoZXgpKSB7XG4gICAgICAvLyBJZiBjbGljayBpcyBvdXQgb2YgYm91bmRzLCBkZXNlbGVjdCBhbnkgc2VsZWN0ZWQgaGV4XG4gICAgICBpZiAoc2VsZWN0ZWRIZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0U2VsZWN0ZWRIZXgodW5kZWZpbmVkKSB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZEhleCAmJiBzZWxlY3RlZEhleC5lcXVhbHMoaGV4KSkge1xuICAgICAgLy8gaWYgc2VsZWN0ZWQgaGV4IGlzIGNsaWNrZWQsIHRvZ2dsZSBzZWxlY3Rpb24gb2ZmXG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bmRlZmluZWQpIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgbmV3TG9jYWxHYW1lU3RhdGU6IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0U2VsZWN0ZWRIZXgoaGV4KSB9XG4gICAgfVxuICB9XG5cbn0iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbW9kZSdcbmltcG9ydCB7IE1heWJlLCBub3RoaW5nLCBPcHRpb24sIHRvTWF5YmUsIHRvT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcblxuZXhwb3J0IGNsYXNzIExvY2FsR2FtZVN0YXRlIHtcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG1vZGU6IE1vZGVcbiAgcmVhZG9ubHkgc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+XG4gIHJlYWRvbmx5IGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcjogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHsgcGxheWVySWQsIG1vZGUsIHNlbGVjdGVkSGV4LCBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSBmYWxzZSB9OlxuICAgICAgICAgICAgICAgIHsgcGxheWVySWQ6IFBsYXllcklkLCBtb2RlOiBNb2RlLCBzZWxlY3RlZEhleD86IE9wdGlvbjxIZXg+LCBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBib29sZWFuIH0pIHtcbiAgICB0aGlzLnBsYXllcklkID0gcGxheWVySWRcbiAgICB0aGlzLm1vZGUgPSBtb2RlXG4gICAgdGhpcy5zZWxlY3RlZEhleCA9IHNlbGVjdGVkSGV4XG4gICAgdGhpcy5hY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXJcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICAgICAgICAgICAgICAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMubW9kZSxcbiAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEhleCA9IHRvTWF5YmUodGhpcy5zZWxlY3RlZEhleCksXG4gICAgICAgICAgICAgICAgICAgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyID0gdGhpcy5hY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIsXG4gICAgICAgICAgICAgICAgIH06IHsgcGxheWVySWQ/OiBQbGF5ZXJJZCwgbW9kZT86IE1vZGUsIHNlbGVjdGVkSGV4PzogTWF5YmU8SGV4PiwgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyPzogYm9vbGVhbiB9ID0ge30pOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIG5ldyBMb2NhbEdhbWVTdGF0ZSh7IHBsYXllcklkLCBtb2RlLCBzZWxlY3RlZEhleDogdG9PcHRpb24oc2VsZWN0ZWRIZXgpLCBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgfSlcblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRIZXggPSAoc2VsZWN0ZWRIZXg6IE9wdGlvbjxIZXg+KTogTG9jYWxHYW1lU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyBzZWxlY3RlZEhleDogdG9NYXliZShzZWxlY3RlZEhleCkgfSlcblxuICBwdWJsaWMgc2V0TW9kZSA9IChtb2RlOiBNb2RlKTogTG9jYWxHYW1lU3RhdGUgPT4gdGhpcy5jb3B5KHsgbW9kZSB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUgPSBuZXcgTG9jYWxHYW1lU3RhdGUoe1xuICBwbGF5ZXJJZDogMSxcbiAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxufSlcblxuIiwiaW1wb3J0IHsgTWVudUJ1dHRvbiB9IGZyb20gJy4uL3VpL21lbnUtYnV0dG9uJ1xuaW1wb3J0IHsgR2FtZUlkIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ01haW5NZW51Jyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHYW1lU2NlbmVEYXRhIHtcbiAgaWQ/OiBHYW1lSWRcbn1cblxuZXhwb3J0IGNsYXNzIE1haW5NZW51U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRcbiAgICAgIC50ZXh0KDEwMCwgNTAsICdMbGFtYSBXYXJzIC0gTWFpbiBNZW51Jywge1xuICAgICAgICBmaWxsOiAnI0ZGRkZGRicsXG4gICAgICB9KVxuICAgICAgLnNldEZvbnRTaXplKDI0KVxuXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAxNTAsICdTdGFydCBHYW1lJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhOiBHYW1lU2NlbmVEYXRhID0geyAgfVxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywgZGF0YSlcbiAgICAgIH0sXG4gICAgKVxuXG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBmcm9tUG9pbnQsIGhleENvcm5lcnMgfSBmcm9tICcuL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7XG4gIENvbG91ck51bWJlcixcbiAgREVGQVVMVF9USUxFX0NPTE9VUixcbiAgSE9WRVJfREVGQVVMVF9USUxFX0NPTE9VUixcbiAgSE9WRVJfU0VMRUNURURfVElMRV9DT0xPVVIsXG4gIEhPVkVSX1RBUkdFVEFCTEVfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQ09MT1VSLFxuICBUQVJHRVRBQkxFX1RJTEVfQ09MT1VSLFxufSBmcm9tICcuL2NvbG91cnMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCBQb2x5Z29uID0gUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb25cblxudHlwZSBUaWxlU3RhdGUgPSAnZGVmYXVsdCcgfCAnc2VsZWN0ZWQnIHwgJ3RhcmdldGFibGUnXG5cbmV4cG9ydCBjbGFzcyBNYXBEaXNwbGF5T2JqZWN0IHtcblxuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGV4UG9seWdvbnM6IE1hcDxTdHJpbmcsIFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uPiA9IG5ldyBNYXA8U3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4oKVxuICBwcml2YXRlIHByZXZpb3VzSG92ZXI/OiBIZXhcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgZm9yIChjb25zdCBoZXggb2YgdGhpcy53b3JsZFN0YXRlLm1hcC5nZXRNYXBIZXhlcygpKVxuICAgICAgdGhpcy5jcmVhdGVIZXgoaGV4KVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIZXggPSAoaGV4OiBIZXgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwb2x5Z29uQ2VudGVyID0gaGV4Q2VudGVyKGhleClcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKVxuICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgLnNldFN0cm9rZVN0eWxlKDMsIDB4MDAwMDAwKVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgZm9yIChjb25zdCBoZXggb2YgdGhpcy53b3JsZFN0YXRlLm1hcC5nZXRNYXBIZXhlcygpKSB7XG4gICAgICB0aGlzLmdldEhleFBvbHlnb24oaGV4KS5zZXRGaWxsU3R5bGUodGhpcy5jYWxjdWxhdGVDb2xvdXIoaGV4KSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEhleFBvbHlnb24gPSAoaGV4OiBIZXgpOiBQb2x5Z29uID0+IHtcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5oZXhQb2x5Z29ucy5nZXQoaGV4LnRvU3RyaW5nKCkpXG4gICAgaWYgKCFwb2x5Z29uKVxuICAgICAgdGhyb3cgYE5vIHBvbHlnb24gZm91bmQgZm9yICR7aGV4fWBcbiAgICByZXR1cm4gcG9seWdvblxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVUaWxlU3RhdGUgPSAoaGV4OiBIZXgpOiBUaWxlU3RhdGUgPT4ge1xuICAgIGNvbnN0IHsgcGxheWVySWQsICBzZWxlY3RlZEhleCwgbW9kZSB9ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZVxuICAgIGlmIChzZWxlY3RlZEhleCAmJiBzZWxlY3RlZEhleC5lcXVhbHMoaGV4KSkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PSAnbW92ZVVuaXQnKSB7XG4gICAgICBpZiAoaGV4LmlzQWRqYWNlbnRUbyhzZWxlY3RlZEhleCEpICYmICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpKSB7XG4gICAgICAgIHJldHVybiAndGFyZ2V0YWJsZSdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PSAnYXR0YWNrJykge1xuICAgICAgaWYgKGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXghKSkge1xuICAgICAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuICAgICAgICBpZiAodW5pdCAmJiB1bml0LnBsYXllcklkICE9IHBsYXllcklkKSB7XG4gICAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQ29sb3VyID0gKGhleDogSGV4KTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleCkpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gREVGQVVMVF9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9DT0xPVVJcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gVEFSR0VUQUJMRV9USUxFX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlSG92ZXJDb2xvdXIgPSAoaGV4OiBIZXgpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIHN3aXRjaCAodGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9ERUZBVUxUX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9TRUxFQ1RFRF9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9UQVJHRVRBQkxFX1RJTEVfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIGhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludDogUG9pbnQpOiB2b2lkIHtcbiAgICBjb25zdCBoZXggPSBmcm9tUG9pbnQobXVsdGlwbHlQb2ludChzdWJ0cmFjdFBvaW50cyhwb2ludGVyUG9pbnQsIERSQVdJTkdfT0ZGU0VUKSwgMSAvIEhFWF9TSVpFKSlcbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVyICYmIHRoaXMucHJldmlvdXNIb3Zlci5lcXVhbHMoaGV4KSlcbiAgICAgIHJldHVyblxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXIpIHtcbiAgICAgIHRoaXMuZ2V0SGV4UG9seWdvbih0aGlzLnByZXZpb3VzSG92ZXIpLnNldEZpbGxTdHlsZSh0aGlzLmNhbGN1bGF0ZUNvbG91cih0aGlzLnByZXZpb3VzSG92ZXIpKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVyID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleCkuc2V0RmlsbFN0eWxlKHRoaXMuY2FsY3VsYXRlSG92ZXJDb2xvdXIoaGV4KSlcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlciA9IGhleFxuICAgIH1cbiAgfVxuXG59IiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlQb2ludCA9IChwb2ludDogUG9pbnQsIG46IG51bWJlcik6IFBvaW50ID0+ICh7IHg6IHBvaW50LnggKiBuLCB5OiBwb2ludC55ICogbiB9KVxuXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHtcbiAgeDogcG9pbnQxLnggLSBwb2ludDIueCxcbiAgeTogcG9pbnQxLnkgLSBwb2ludDIueSxcbn0pXG4iLCJpbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IGhleFdpZHRoLCBtYXBIZWlnaHQgfSBmcm9tICcuL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IEFDVElPTl9URVhUX0NPTE9VUiwgSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSIH0gZnJvbSAnLi9jb2xvdXJzJ1xuaW1wb3J0IHsgRFJBV0lOR19PRkZTRVQsIEhFWF9TSVpFIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcblxudHlwZSBMb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSAoTG9jYWxBY3Rpb24pID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIFRleHRzRGlzcGxheU9iamVjdCB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyXG5cbiAgcHJpdmF0ZSByZWFkb25seSBzZWxlY3Rpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGFjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgZW5kVHVyblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVyVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBob3VyZ2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSwgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXIpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSBsb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgICBjb25zdCBtYXAgPSB0aGlzLndvcmxkU3RhdGUubWFwXG4gICAgdGhpcy5wbGF5ZXJUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dCgyMywgMjAsICcnKVxuICAgIHRoaXMuaG91cmdsYXNzID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoODc1LCAzMCwgJ2hvdXJnbGFzcycpLnNldFZpc2libGUoZmFsc2UpXG5cbiAgICB0aGlzLnNlbGVjdGlvblRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSwgJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyAyNSwgJycsIHsgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSIH0pLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGQudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA1MCwgJycsIHsgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSIH0pLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dCg3MDAsIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LCAnJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSkuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VuZFR1cm4nIH0pKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5lbmRUdXJuVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHRDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyTW92ZU1vZGUnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdhYm9ydCcgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDJDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSB7XG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhc0NsaWNrSGFuZGxlckZvciA9IChwb2ludDogUG9pbnQpOiBib29sZWFuID0+IHtcbiAgICBmb3IgKGNvbnN0IG9iaiBvZiBbdGhpcy5lbmRUdXJuVGV4dCwgdGhpcy5hY3Rpb25UZXh0LCB0aGlzLmFjdGlvblRleHQyXSlcbiAgICAgIGlmIChvYmouZ2V0Qm91bmRzKCkuY29udGFpbnMocG9pbnQueCwgcG9pbnQueSkpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLmhvdXJnbGFzcy5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLmFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcilcbiAgICB0aGlzLnBsYXllclRleHQuc2V0VGV4dChgUGxheWVyICR7dGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZH0gLSBUdXJuICR7dGhpcy53b3JsZFN0YXRlLnR1cm59YClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJycpXG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnN5bmNTZWxlY3RIZXhNb2RlVGV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHRoaXMuc3luY01vdmVVbml0TW9kZVRleHQobW9kZS51bml0SWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnN5bmNBdHRhY2tNb2RlVGV4dChtb2RlLnVuaXRJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm4pIHtcbiAgICAgIHRoaXMuZW5kVHVyblRleHQuc2V0VGV4dCgnV2FpdGluZyBmb3IgbmV4dCB0dXJuLi4uJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdFbmQgVHVybiAoU2hpZnQgKyBFbnRlciknKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHVuaXQgdG8gYXR0YWNrIChvciBFU0MgdG8gY2FuY2VsKScpXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKVxuICAgICAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKVxuICAgICAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzY3JpYmVVbml0ID0gKHVuaXQ6IFVuaXQpOiBzdHJpbmcgPT5cbiAgICBgJHt1bml0Lm5hbWV9IC0gTGxhbWEgd2FycmlvciAtIEhQICR7dW5pdC5oaXRQb2ludHMuY3VycmVudH0vJHt1bml0LmhpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke3VuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnR9LyR7dW5pdC5hY3Rpb25Qb2ludHMubWF4fWBcblxufSIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSEVBTFRIX0JPUkRFUl9DT0xPVVIsIEhFQUxUSF9FTVBUWV9DT0xPVVIsIEhFQUxUSF9GVUxMX0NPTE9VUiwgUExBWUVSXzFfVElOVCwgUExBWUVSXzJfVElOVCB9IGZyb20gJy4vY29sb3VycydcbmltcG9ydCB7IGFkZFBvaW50cywgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmNvbnN0IEhFQUxUSF9CQVJfV0lEVEggPSA1MFxuY29uc3QgSEVBTFRIX0JBUl9IRUlHSFQgPSAxMlxuY29uc3QgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTID0gMlxuY29uc3QgSU1BR0VfT0ZGU0VUID0geyB4OiAwLCB5OiA0IH1cbmNvbnN0IEhFQUxUSF9CQVJfT0ZGU0VUID0geyB4OiAtMjUsIHk6IC00MCB9XG5cbmV4cG9ydCBjbGFzcyBVbml0RGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHVuaXQ6IFVuaXRcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoQmFyR3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljc1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgdGhpcy5pbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAwLCAnbGxhbWEnKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KHRoaXMudW5pdC5wbGF5ZXJJZCA9PSAxID8gUExBWUVSXzFfVElOVCA6IFBMQVlFUl8yX1RJTlQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcyA9IHNjZW5lLmFkZC5ncmFwaGljcygpXG4gIH1cblxuICBwcml2YXRlIGdldEhlYWx0aEJhclBvc2l0aW9uID0gKHBvaW50OiBQb2ludCk6IFBvaW50ID0+IGFkZFBvaW50cyhwb2ludCwgSEVBTFRIX0JBUl9PRkZTRVQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh1bml0OiBVbml0KTogdm9pZCA9PiB7XG4gICAgYXNzZXJ0KHVuaXQuaWQgPT0gdGhpcy51bml0LmlkKVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICBjb25zdCB1bml0UG9pbnQgPSBoZXhDZW50ZXIodGhpcy51bml0LmxvY2F0aW9uKVxuICAgIHRoaXMuaW1hZ2Uuc2V0UG9zaXRpb24odW5pdFBvaW50LnggKyBJTUFHRV9PRkZTRVQueCwgdW5pdFBvaW50LnkgKyBJTUFHRV9PRkZTRVQueSlcbiAgICB0aGlzLnN5bmNIZWFsdGhCYXIodW5pdFBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jSGVhbHRoQmFyID0gKHVuaXRQb2ludDogUG9pbnQpID0+IHtcbiAgICBjb25zdCBoZWFsdGhCYXJQb3NpdGlvbiA9IHRoaXMuZ2V0SGVhbHRoQmFyUG9zaXRpb24odW5pdFBvaW50KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3Muc2V0UG9zaXRpb24oaGVhbHRoQmFyUG9zaXRpb24ueCwgaGVhbHRoQmFyUG9zaXRpb24ueSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmNsZWFyKClcblxuICAgIC8vIERyYXcgYm9yZGVyXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IEhFQUxUSF9CQVJfV0lEVEggLSAyICogSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTXG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBIRUFMVEhfQkFSX0hFSUdIVCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfQk9SREVSX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KDAsIDAsIEhFQUxUSF9CQVJfV0lEVEgsIEhFQUxUSF9CQVJfSEVJR0hUKVxuXG4gICAgLy8gRHJhdyBlbXB0eSBiYWNrZ3JvdW5kXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0VNUFRZX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcblxuICAgIC8vIEZpbGwgaW4gYmFyXG4gICAgY29uc3QgeyBjdXJyZW50LCBtYXggfSA9IHRoaXMudW5pdC5oaXRQb2ludHNcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRlVMTF9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdChIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgaW5uZXJXaWR0aCAqIGN1cnJlbnQgLyBtYXgsIGlubmVySGVpZ2h0KVxuICB9XG5cbiAgcHVibGljIG1vdmUgPSAoZnJvbTogSGV4LCB0bzogSGV4KSA9PiB7XG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGF0dGFjayA9IChmcm9tOiBIZXgsIHRvOiBIZXgpID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZGVzdHJveSgpXG4gICAgdGhpcy5pbWFnZS5kZXN0cm95KClcbiAgfVxufVxuXG50eXBlIFR3ZWVuWFkgPSB7IHg6IHsgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyIH0sIHk6IHsgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyIH0gfVxuXG5jb25zdCBjYWxjdWxhdGVUd2VlblhZID0gKGZyb206IFBvaW50LCB0bzogUG9pbnQsIG9mZnNldDogUG9pbnQpOiBUd2VlblhZID0+XG4gICh7XG4gICAgeDoge1xuICAgICAgZnJvbTogZnJvbS54ICsgb2Zmc2V0LngsXG4gICAgICB0bzogdG8ueCArIG9mZnNldC54LFxuICAgIH0sXG4gICAgeToge1xuICAgICAgZnJvbTogZnJvbS55ICsgb2Zmc2V0LnksXG4gICAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICAgIH0sXG4gIH0pXG5cbiIsImltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUsIFBsYXllcklkLCBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tXb3JsZEFjdGlvbiwgTW92ZVVuaXRXb3JsZEFjdGlvbiwgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFVuaXRNb3ZlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcblxuZXhwb3J0IHR5cGUgV29ybGRFdmVudExpc3RlbmVyID0gKGV2ZW50OiBXb3JsZEV2ZW50KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICBwdWJsaWMgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcikgPT4gdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpXG4gICAgICBsaXN0ZW5lcihldmVudClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVBdHRhY2socGxheWVySWQsIGFjdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZlVW5pdChwbGF5ZXJJZCwgYWN0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlRW5kVHVybihwbGF5ZXJJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBdHRhY2sgPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKSA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXJJZCA9IGFjdGlvbi5hdHRhY2tlci51bml0SWRcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXJJZClcbiAgICBpZiAoIWF0dGFja2VyKVxuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VySWR9YFxuICAgIGlmIChhdHRhY2tlci5wbGF5ZXJJZCAhPSBwbGF5ZXJJZClcbiAgICAgIHRocm93IGBDYW5ub3QgY29udHJvbCBhbm90aGVyIHBsYXllcidzIHVuaXQ6ICR7YXR0YWNrZXIuaWR9YFxuICAgIGlmIChhdHRhY2tlci5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpXG4gICAgICB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIGF0dGFja2BcbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uYXR0YWNrZXIubG9jYXRpb24pKVxuICAgICAgdGhyb3cgYEF0dGFja2VyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGNvbnN0IGRlZmVuZGVySWQgPSBhY3Rpb24uZGVmZW5kZXIudW5pdElkXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVySWQpXG4gICAgaWYgKCFkZWZlbmRlcilcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlcklkfWBcbiAgICBpZiAoZGVmZW5kZXIucGxheWVySWQgPT0gcGxheWVySWQpXG4gICAgICB0aHJvdyBgQ2Fubm90IGF0dGFjayBvd24gdW5pdGBcbiAgICBpZiAoIWRlZmVuZGVyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uZGVmZW5kZXIubG9jYXRpb24pKVxuICAgICAgdGhyb3cgYERlZmVuZGVyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGlmICghYXR0YWNrZXIubG9jYXRpb24uaXNBZGphY2VudFRvKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgYXR0YWNrIGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuXG4gICAgY29uc3QgYXR0YWNrZXJEYW1hZ2UgPSBNYXRoLm1pbihhdHRhY2tlci5oaXRQb2ludHMuY3VycmVudCwgMTApXG4gICAgY29uc3QgZGVmZW5kZXJEYW1hZ2UgPSBNYXRoLm1pbihkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCwgMjApXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLm1ha2VDb21iYXRXb3JsZEV2ZW50KGF0dGFja2VyLCBhdHRhY2tlckRhbWFnZSwgZGVmZW5kZXIsIGRlZmVuZGVyRGFtYWdlKVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBldmVudClcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUNvbWJhdFdvcmxkRXZlbnQgPSAoYXR0YWNrZXI6IFVuaXQsIGF0dGFja2VyRGFtYWdlOiBudW1iZXIsIGRlZmVuZGVyOiBVbml0LCBkZWZlbmRlckRhbWFnZTogbnVtYmVyKTogQ29tYmF0V29ybGRFdmVudCA9PiAoe1xuICAgIHR5cGU6ICdjb21iYXQnLFxuICAgIGF0dGFja2VyOiB7XG4gICAgICBwbGF5ZXJJZDogYXR0YWNrZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGF0dGFja2VyLmlkLFxuICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBhdHRhY2tlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT0gYXR0YWNrZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBkZWZlbmRlcjoge1xuICAgICAgcGxheWVySWQ6IGRlZmVuZGVyLnBsYXllcklkLFxuICAgICAgdW5pdElkOiBkZWZlbmRlci5pZCxcbiAgICAgIGxvY2F0aW9uOiBkZWZlbmRlci5sb2NhdGlvbixcbiAgICAgIGRhbWFnZTogZGVmZW5kZXJEYW1hZ2UsXG4gICAgICBraWxsZWQ6IGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50ID09IGRlZmVuZGVyRGFtYWdlLFxuICAgIH0sXG4gICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gIH0pXG5cbiAgcHJpdmF0ZSBoYW5kbGVNb3ZlVW5pdCA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCB0byB9ID0gYWN0aW9uXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdClcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIGNvbnN0IGZyb20gPSB1bml0LmxvY2F0aW9uXG4gICAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpXG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBvdXQtb2YtYm91bmRzIGhleCAke3RvfWBcbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bykpXG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YFxuICAgIGlmICh1bml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgMSlcbiAgICAgIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gbW92ZWBcbiAgICBjb25zdCBldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCA9IHtcbiAgICAgIHR5cGU6ICd1bml0TW92ZWQnLFxuICAgICAgcGxheWVySWQ6IHBsYXllcklkLFxuICAgICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gICAgICB1bml0SWQsXG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgfVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBldmVudClcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybihwbGF5ZXJJZDogUGxheWVySWQpOiB2b2lkIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcilcbiAgICAgIHRocm93IGBObyBwbGF5ZXIgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICBpZiAocGxheWVyLmVuZGVkVHVybilcbiAgICAgIHRocm93IGBQbGF5ZXIgaGFzIGFscmVhZHkgZW5kZWQgdGhlaXIgdHVybmBcbiAgICBsZXQgcGxheWVyc1lldFRvRW5kVGhlaXJUdXJuID0gdGhpcy53b3JsZFN0YXRlLnBsYXllcnMuZmlsdGVyKHBsYXllciA9PiAhcGxheWVyLmVuZGVkVHVybikubWFwKHBsYXllciA9PiBwbGF5ZXIuaWQpXG4gICAgbGV0IHdob2xlVHVybkVuZGVkID0gUi5lcXVhbHMocGxheWVyc1lldFRvRW5kVGhlaXJUdXJuLCBbcGxheWVySWRdKVxuICAgIGNvbnN0IGV2ZW50OiBXb3JsZEV2ZW50ID0gd2hvbGVUdXJuRW5kZWQgPyB7IHR5cGU6ICduZXdUdXJuJyB9IDogeyB0eXBlOiAncGxheWVyRW5kZWRUdXJuJywgcGxheWVySWQgfVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBldmVudClcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgfVxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5jb25zdCBwYWRkaW5nID0gMTA7XG5jb25zdCBtaW5pbXVtV2lkdGggPSAyMDA7XG5jb25zdCBtaW5pbXVtSGVpZ2h0ID0gNTA7XG5cbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XG4gIHByaXZhdGUgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcblxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGRcbiAgICAgIC50ZXh0KHggKyBwYWRkaW5nLCB5ICsgcGFkZGluZywgdGV4dClcbiAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJyk7XG5cbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHBhZGRpbmc7XG4gICAgY29uc3QgbGFiZWxIZWlnaHQgPSB0aGlzLmxhYmVsLmhlaWdodCArIHBhZGRpbmc7XG5cbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSBtaW5pbXVtV2lkdGggPyBsYWJlbFdpZHRoIDogbWluaW11bVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gbWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogbWluaW11bUhlaWdodDtcblxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKTtcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJyk7XG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjQkJCQkJCJyk7XG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpc2VUb0pzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoc2VyaWFsaXNlVG9Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhleCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIZXgnIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdCA9IHt9XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IHNlcmlhbGlzZVRvSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZXNlcmlhbGlzZUZyb21Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGRlc2VyaWFsaXNlRnJvbUpzb24pXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdIZXgnKSB7XG4gICAgICAgIHJldHVybiBIZXguZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdPYmplY3QgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBkZXNlcmlhbGlzZUZyb21Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn0iLCJleHBvcnQgdHlwZSBPcHRpb248VD4gPSBUIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVzdDxUPiB7XG4gIHR5cGU6ICdqdXN0J1xuICBpdGVtOiBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aGluZyB7XG4gIHR5cGU6ICdub3RoaW5nJ1xufVxuXG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IEp1c3Q8VD4gfCBOb3RoaW5nXG5cbmV4cG9ydCBjb25zdCB0b01heWJlID0gPFQ+KG9wdGlvbjogT3B0aW9uPFQ+KTogTWF5YmU8VD4gPT5cbiAgb3B0aW9uID09IHVuZGVmaW5lZCA/IG5vdGhpbmcgOiBqdXN0KG9wdGlvbilcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pIiwiZXhwb3J0IGNsYXNzIFVucmVhY2hhYmxlQ2FzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbmV2ZXIpIHtcbiAgICBzdXBlcihgVW5yZWFjaGFibGUgY2FzZTogJHt2YWx1ZX1gKVxuICB9XG59XG4iLCJpbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleCwgSGV4VmVjdG9yIH0gZnJvbSAnLi9oZXgnXG5cbmV4cG9ydCBlbnVtIEhleERpcmVjdGlvbiB7XG4gIEVBU1QgPSAnRUFTVCcsXG4gIFdFU1QgPSAnV0VTVCcsXG4gIE5PUlRIX0VBU1QgPSAnTk9SVEhfRUFTVCcsXG4gIFNPVVRIX0VBU1QgPSAnU09VVEhfRUFTVCcsXG4gIE5PUlRIX1dFU1QgPSAnTk9SVEhfV0VTVCcsXG4gIFNPVVRIX1dFU1QgPSAnU09VVEhfV0VTVCcsXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfRElSRUNUSU9OUyA9IFtcbiAgSGV4RGlyZWN0aW9uLkVBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9FQVNULFxuICBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCxcbiAgSGV4RGlyZWN0aW9uLldFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVCxcbl1cblxuZXhwb3J0IGNvbnN0IGdldFVuaXRWZWN0b3IgPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXhWZWN0b3IgPT4ge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgSGV4RGlyZWN0aW9uLkVBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLldFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgtMSwgMClcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMSwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIC0xKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgwLCAxKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgtMSwgMSlcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGRpcmVjdGlvbilcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IGdldFVuaXRWZWN0b3IsIEhleERpcmVjdGlvbiB9IGZyb20gJy4vaGV4LWRpcmVjdGlvbidcblxuZXhwb3J0IGNsYXNzIEhleCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBnZXQgeigpOiBudW1iZXIge1xuICAgIHJldHVybiAtdGhpcy54IC0gdGhpcy55XG4gIH1cblxuICBwdWJsaWMgcGx1cyA9ICh0aGF0OiBIZXgpID0+IG5ldyBIZXgodGhpcy54ICsgdGhhdC54LCB0aGlzLnkgKyB0aGF0LnkpXG5cbiAgcHVibGljIG5laWdoYm91cnMgPSAoKTogSGV4W10gPT4gSGV4Lk5FSUdIQk9VUlMubWFwKHRoaXMucGx1cylcblxuICBwdWJsaWMgaXNBZGphY2VudFRvID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gUi5pbmNsdWRlcyh0aGF0LCB0aGlzLm5laWdoYm91cnMoKSlcblxuICBwcml2YXRlIHN0YXRpYyBORUlHSEJPVVJTOiBIZXhbXSA9IFtcbiAgICBuZXcgSGV4KDAsIDEpLFxuICAgIG5ldyBIZXgoMSwgMCksXG4gICAgbmV3IEhleCgxLCAtMSksXG4gICAgbmV3IEhleCgwLCAtMSksXG4gICAgbmV3IEhleCgtMSwgMCksXG4gICAgbmV3IEhleCgtMSwgMSksXG4gIF1cblxuICBwdWJsaWMgZXF1YWxzID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gdGhpcy54ID09IHRoYXQueCAmJiB0aGlzLnkgPT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcblxuICBwdWJsaWMgZ28gPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXggPT4gdGhpcy5wbHVzKGdldFVuaXRWZWN0b3IoZGlyZWN0aW9uKSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IG9iamVjdCA9PiAoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGV4ID0+IG5ldyBIZXgoanNvbi54LCBqc29uLnkpXG5cbn1cblxuZXhwb3J0IHR5cGUgSGV4VmVjdG9yID0gSGV4XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uUG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXIsIG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyByZWR1Y2UgPSAocG9pbnRzOiBudW1iZXIpOiBBY3Rpb25Qb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXIsIG1heD86IG51bWJlciB9ID0ge30pOiBBY3Rpb25Qb2ludHMgPT5cbiAgICBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiB0aGlzLm1heCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogb2JqZWN0ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcblxufVxuXG5leHBvcnQgY2xhc3MgSGl0UG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXIsIG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBIaXRQb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXIsIG1heD86IG51bWJlciB9ID0ge30pOiBIaXRQb2ludHMgPT5cbiAgICBuZXcgSGl0UG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBvYmplY3QgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBIaXRQb2ludHMgPT4gbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxuXG59XG5cbmV4cG9ydCBjbGFzcyBVbml0IHtcbiAgcmVhZG9ubHkgaWQ6IFVuaXRJZFxuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGxvY2F0aW9uOiBIZXhcbiAgcmVhZG9ubHkgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgcmVhZG9ubHkgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgICAgICAgICAgaWQsIHBsYXllcklkLCBuYW1lLCBsb2NhdGlvbiwgaGl0UG9pbnRzLCBhY3Rpb25Qb2ludHMsXG4gICAgICAgICAgICAgIH06IHsgaWQ6IFVuaXRJZCwgcGxheWVySWQ6IFBsYXllcklkLCBuYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBIZXgsIGhpdFBvaW50czogSGl0UG9pbnRzLCBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cyB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzXG4gICAgdGhpcy5hY3Rpb25Qb2ludHMgPSBhY3Rpb25Qb2ludHNcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBVbml0ID0+IHRoaXMuY29weSh7IGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMuZGFtYWdlKHBvaW50cykgfSlcblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgICAgICAgICAgICAgICAgaWQgPSB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICBoaXRQb2ludHMgPSB0aGlzLmhpdFBvaW50cyxcbiAgICAgICAgICAgICAgICAgICBhY3Rpb25Qb2ludHMgPSB0aGlzLmFjdGlvblBvaW50cyxcbiAgICAgICAgICAgICAgICAgfTogeyBpZD86IFVuaXRJZCwgcGxheWVySWQ/OiBQbGF5ZXJJZCwgbmFtZT86IHN0cmluZywgbG9jYXRpb24/OiBIZXgsIGhpdFBvaW50cz86IEhpdFBvaW50cywgYWN0aW9uUG9pbnRzPzogQWN0aW9uUG9pbnRzIH0gPSB7fSk6IFVuaXQgPT5cbiAgICBuZXcgVW5pdCh7IGlkLCBwbGF5ZXJJZCwgbmFtZSwgbG9jYXRpb24sIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0pXG5cbiAgcHVibGljIG1vdmUgPSAobG9jYXRpb246IEhleCwgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBsb2NhdGlvbiwgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZHVjZUFjdGlvblBvaW50cyA9IChhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWZyZXNoQWN0aW9uUG9pbnRzID0gKCk6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZnJlc2goKSB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogb2JqZWN0ID0+ICh7XG4gICAgaWQ6IHRoaXMuaWQsXG4gICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLnRvSnNvbigpLFxuICAgIGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMudG9Kc29uKCksXG4gICAgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy50b0pzb24oKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFVuaXQgPT4gbmV3IFVuaXQoe1xuICAgIGlkOiBqc29uLmlkLFxuICAgIHBsYXllcklkOiBqc29uLnBsYXllcklkLFxuICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICBsb2NhdGlvbjogSGV4LmZyb21Kc29uKGpzb24ubG9jYXRpb24pLFxuICAgIGhpdFBvaW50czogSGl0UG9pbnRzLmZyb21Kc29uKGpzb24uaGl0UG9pbnRzKSxcbiAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cy5mcm9tSnNvbihqc29uLmFjdGlvblBvaW50cyksXG4gIH0pXG5cbn1cblxuZXhwb3J0IHR5cGUgVW5pdElkID0gbnVtYmVyIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBDb21iYXRXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckVuZGVkVHVybihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnbmV3VHVybic6XG4gICAgICByZXR1cm4gaGFuZGxlTmV3VHVybihzdGF0ZSlcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVVuaXRNb3ZlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB1bml0SWQsIHBsYXllcklkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpXG4gICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICBpZiAoIXN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSlcbiAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICBjb25zdCB1bml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgaWYgKCF1bml0KVxuICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICBpZiAoc3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKGZyb20pPy5pZCAhPSB1bml0SWQpXG4gICAgdGhyb3cgYEludmFsaWQgZnJvbSBsb2NhdGlvbiBmb3IgdW5pdCBtb3ZlbWVudGBcbiAgaWYgKHN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bykpXG4gICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgaWYgKHVuaXQucGxheWVySWQgIT0gcGxheWVySWQpXG4gICAgdGhyb3cgYEludmFsaWQgYXR0ZW1wdCB0byBtb3ZlIHVuaXQgb2YgYW5vdGhlciBwbGF5ZXJgXG4gIGlmICh1bml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuICByZXR1cm4gc3RhdGUucmVwbGFjZVVuaXQodW5pdC5pZCwgdW5pdC5tb3ZlKHRvLCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG59XG5cbmNvbnN0IGhhbmRsZUNvbWJhdCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG5cbiAgY29uc3QgYXR0YWNrZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VyLnVuaXRJZClcbiAgaWYgKCFhdHRhY2tlclVuaXQpXG4gICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VyLnVuaXRJZH1gXG4gIGlmICghYXR0YWNrZXJVbml0LmxvY2F0aW9uLmVxdWFscyhhdHRhY2tlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGF0dGFja2VyLiBBdHRhY2tpbmcgdW5pdCAke2F0dGFja2VyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHthdHRhY2tlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7YXR0YWNrZXIubG9jYXRpb259YFxuXG4gIGNvbnN0IGRlZmVuZGVyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChkZWZlbmRlci51bml0SWQpXG4gIGlmICghZGVmZW5kZXJVbml0KVxuICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlci51bml0SWR9YFxuICBpZiAoIWRlZmVuZGVyVW5pdC5sb2NhdGlvbi5lcXVhbHMoZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIHRocm93IGBJbnZhbGlkIGxvY2F0aW9uIGZvciBkZWZlbmRlci4gRGVmZW5kaW5nIHVuaXQgJHtkZWZlbmRlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7ZGVmZW5kZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2RlZmVuZGVyLmxvY2F0aW9ufWBcblxuICBpZiAoYXR0YWNrZXJVbml0LnBsYXllcklkID09IGRlZmVuZGVyVW5pdC5wbGF5ZXJJZClcbiAgICB0aHJvdyBgSW52YWxpZCBjb21iYXQgd2l0aCBzZWxmYFxuICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmlzQWRqYWNlbnRUbyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgY29tYmF0IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuICBpZiAoYXR0YWNrZXJVbml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlXG5cbiAgaWYgKGF0dGFja2VyLmtpbGxlZClcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoYXR0YWNrZXJVbml0LmlkKVxuICBlbHNlXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChhdHRhY2tlclVuaXQuaWQsIGF0dGFja2VyVW5pdC5kYW1hZ2UoYXR0YWNrZXIuZGFtYWdlKS5yZWR1Y2VBY3Rpb25Qb2ludHMoZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpKVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGRlZmVuZGVyVW5pdC5pZClcbiAgZWxzZVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoZGVmZW5kZXJVbml0LmlkLCBkZWZlbmRlclVuaXQuZGFtYWdlKGRlZmVuZGVyLmRhbWFnZSkpXG5cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckVuZGVkVHVybiA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gc3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgaWYgKCFwbGF5ZXIpXG4gICAgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICByZXR1cm4gc3RhdGUucmVwbGFjZVBsYXllcihwbGF5ZXJJZCwgcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IHRydWUgfSkpXG59XG5cbmNvbnN0IGhhbmRsZU5ld1R1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLmNvcHkoe1xuICAgIHR1cm46IHN0YXRlLnR1cm4gKyAxLFxuICAgIHVuaXRzOiBzdGF0ZS51bml0cy5tYXAodW5pdCA9PiB1bml0LnJlZnJlc2hBY3Rpb25Qb2ludHMoKSksXG4gICAgcGxheWVyczogc3RhdGUucGxheWVycy5tYXAocGxheWVyID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiBmYWxzZSB9KSksXG4gIH0pXG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgV29ybGRNYXAge1xuICByZWFkb25seSB3aWR0aDogbnVtYmVyXG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyB3aWR0aCwgaGVpZ2h0IH06IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIGFzc2VydCh3aWR0aCA+IDApXG4gICAgYXNzZXJ0KGhlaWdodCA+IDApXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyBpc0luQm91bmRzID0gKGhleDogSGV4KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgcSA9IGhleC54ICsgTWF0aC5mbG9vcihoZXgueSAvIDIpXG4gICAgcmV0dXJuIDAgPD0gcSAmJiBxIDwgdGhpcy53aWR0aCAmJiAwIDw9IGhleC55ICYmIGhleC55IDwgdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyogZ2V0TWFwSGV4ZXMoKTogSXRlcmFibGVJdGVyYXRvcjxIZXg+IHtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuaGVpZ2h0OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy53aWR0aDsgYysrKSB7XG4gICAgICAgIGNvbnN0IHggPSAtTWF0aC5mbG9vcihyIC8gMikgKyBjXG4gICAgICAgIGNvbnN0IGhleCA9IG5ldyBIZXgoeCwgcilcbiAgICAgICAgeWllbGQgaGV4XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBvYmplY3QgPT4gKHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkTWFwID0+IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiBqc29uLndpZHRoLCBoZWlnaHQ6IGpzb24uaGVpZ2h0IH0pXG5cbn0iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzLCBIaXRQb2ludHMsIFVuaXQsIFVuaXRJZCB9IGZyb20gJy4vdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICByZWFkb25seSBpZDogUGxheWVySWRcbiAgcmVhZG9ubHkgZW5kZWRUdXJuOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IoeyBpZCwgZW5kZWRUdXJuIH06IHsgaWQ6IFBsYXllcklkLCBlbmRlZFR1cm46IGJvb2xlYW4gfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuZW5kZWRUdXJuID0gZW5kZWRUdXJuXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7IGlkID0gdGhpcy5pZCwgZW5kZWRUdXJuID0gdGhpcy5lbmRlZFR1cm4gfTogeyBpZD86IFBsYXllcklkLCBlbmRlZFR1cm4/OiBib29sZWFuIH0gPSB7fSk6IFBsYXllciA9PiBuZXcgUGxheWVyKHtcbiAgICBpZCxcbiAgICBlbmRlZFR1cm4sXG4gIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBvYmplY3QgPT4gKHsgaWQ6IHRoaXMuaWQsIGVuZGVkVHVybjogdGhpcy5lbmRlZFR1cm4gfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFBsYXllciA9PiBuZXcgUGxheWVyKHsgaWQ6IGpzb24uaWQsIGVuZGVkVHVybjoganNvbi5lbmRlZFR1cm4gfSlcblxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZSB7XG4gIHJlYWRvbmx5IHR1cm46IG51bWJlclxuICByZWFkb25seSBtYXA6IFdvcmxkTWFwXG4gIHJlYWRvbmx5IHVuaXRzOiBVbml0W11cbiAgcmVhZG9ubHkgcGxheWVyczogUGxheWVyW11cblxuICBjb25zdHJ1Y3Rvcih7IHR1cm4sIG1hcCwgdW5pdHMsIHBsYXllcnMgfTogeyB0dXJuOiBudW1iZXIsIG1hcDogV29ybGRNYXAsIHVuaXRzOiBVbml0W10sIHBsYXllcnM6IFBsYXllcltdIH0pIHtcbiAgICB0aGlzLnR1cm4gPSB0dXJuXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLnVuaXRzID0gdW5pdHNcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7IHR1cm4gPSB0aGlzLnR1cm4sIG1hcCA9IHRoaXMubWFwLCB1bml0cyA9IHRoaXMudW5pdHMsIHBsYXllcnMgPSB0aGlzLnBsYXllcnMgfTpcbiAgICAgICAgICAgICAgICAgICB7IHR1cm4/OiBudW1iZXIsIG1hcD86IFdvcmxkTWFwLCB1bml0cz86IFVuaXRbXSwgcGxheWVycz86IFBsYXllcltdIH0gPSB7fSk6IFdvcmxkU3RhdGUgPT5cbiAgICBuZXcgV29ybGRTdGF0ZSh7IHR1cm4sIG1hcCwgdW5pdHMsIHBsYXllcnMgfSlcblxuICBwdWJsaWMgZmluZFBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBPcHRpb248UGxheWVyPiA9PlxuICAgIFIuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZmluZFVuaXRCeUlkID0gKHVuaXRJZDogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+XG4gICAgUi5maW5kKCh1bml0KSA9PiB1bml0LmlkID09IHVuaXRJZCwgdGhpcy51bml0cylcblxuICBwdWJsaWMgZ2V0VW5pdEJ5SWQgPSAodW5pdElkOiBudW1iZXIpOiBVbml0ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgfVxuICAgIHJldHVybiB1bml0XG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+XG4gICAgUi5maW5kKCh1bml0KSA9PiB1bml0LmxvY2F0aW9uLmVxdWFscyhoZXgpLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyByZXBsYWNlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCwgdW5pdDogVW5pdCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyB1bml0czogUi5hcHBlbmQodW5pdCwgUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT0gdW5pdElkLCB0aGlzLnVuaXRzKSkgfSlcblxuICBwdWJsaWMgcmVtb3ZlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyB1bml0czogUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT0gdW5pdElkLCB0aGlzLnVuaXRzKSB9KVxuXG4gIHB1YmxpYyByZXBsYWNlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgcGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgcGxheWVyczogUi5hcHBlbmQocGxheWVyLCBSLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuaWQgIT0gcGxheWVySWQsIHRoaXMucGxheWVycykpIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBvYmplY3QgPT4gKHtcbiAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgbWFwOiB0aGlzLm1hcC50b0pzb24oKSxcbiAgICB1bml0czogdGhpcy51bml0cy5tYXAodW5pdCA9PiB1bml0LnRvSnNvbigpKSxcbiAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKHBsYXllciA9PiBwbGF5ZXIudG9Kc29uKCkpLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRTdGF0ZSA9PiBuZXcgV29ybGRTdGF0ZSh7XG4gICAgdHVybjoganNvbi50dXJuLFxuICAgIG1hcDogV29ybGRNYXAuZnJvbUpzb24oanNvbi5tYXApLFxuICAgIHVuaXRzOiBqc29uLnVuaXRzLm1hcCh1bml0ID0+IFVuaXQuZnJvbUpzb24odW5pdCkpLFxuICAgIHBsYXllcnM6IGpzb24ucGxheWVycy5tYXAodW5pdCA9PiBQbGF5ZXIuZnJvbUpzb24odW5pdCkpLFxuICB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1dPUkxEX1NUQVRFOiBXb3JsZFN0YXRlID0gbmV3IFdvcmxkU3RhdGUoe1xuICB0dXJuOiAxLFxuICBtYXA6IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiAxMCwgaGVpZ2h0OiA2IH0pLFxuICBwbGF5ZXJzOiBbXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogMSxcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogMixcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gIF0sXG4gIHVuaXRzOiBbXG4gICAgbmV3IFVuaXQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBwbGF5ZXJJZDogMSxcbiAgICAgIG5hbWU6ICdXYWx0ZXInLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMSwgMSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiAyLFxuICAgICAgcGxheWVySWQ6IDEsXG4gICAgICBuYW1lOiAnQmVja3knLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMCwgMyksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiAzLFxuICAgICAgcGxheWVySWQ6IDIsXG4gICAgICBuYW1lOiAnQ2hld3BhY2EnLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMiwgMSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiA0LFxuICAgICAgcGxheWVySWQ6IDIsXG4gICAgICBuYW1lOiAnQmFyYWNrIE8uIExsYW1hJyxcbiAgICAgIGxvY2F0aW9uOiBuZXcgSGV4KDMsIDIpLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICAgIGFjdGlvblBvaW50czogbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IDIsIG1heDogMiB9KSxcbiAgICB9KSxcbiAgXSxcbn0pXG5cbmV4cG9ydCB0eXBlIFBsYXllcklkID0gbnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==