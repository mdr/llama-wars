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
            _this.scene.start('MainMenu');
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
var broadcast_channel_1 = __webpack_require__(/*! broadcast-channel */ "./node_modules/broadcast-channel/dist/es/index.js");
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
        _this.server = undefined;
        _this.worldState = world_state_1.INITIAL_WORLD_STATE;
        _this.localGameState = local_game_state_1.INITIAL_LOCAL_GAME_STATE;
        _this.unitDisplayObjects = new Map();
        // Create
        // ------
        _this.create = function (gameSceneData) {
            _this.sound.pauseOnBlur = false;
            _this.channel = new broadcast_channel_1.BroadcastChannel('llama-comms');
            if (gameSceneData.mode == 'start') {
                _this.actAsServer();
            }
            else {
                _this.actAsClient();
            }
            asset_keys_1.ALL_AUDIO_KEYS.forEach(function (key) { return _this.sound.add(key); });
            _this.createDisplayObjects();
            _this.setUpInputs();
            _this.syncScene();
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
                            this.connection.send({
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
    GameScene.prototype.actAsClient = function () {
        var _this = this;
        var peer = new window.Peer();
        // const peer = new (window as any).Peer({
        //   key: 'peerjs',
        //   host: 'localhost',
        //   path: 'myapp',
        //   port: 9000,
        // })
        console.log('Acting as client');
        peer.on('open', function (id) {
            console.log('Opened ' + id);
            var connection = peer.connect('llama-wars-1');
            connection.on('open', function () {
                console.log('connection opened');
                _this.connection = connection;
                connection.send({ type: 'join', clientId: clientId });
                connection.on('data', function (message) {
                    console.log(message);
                    switch (message.type) {
                        case 'joined':
                            if (message.clientId == clientId) {
                                _this.localGameState = _this.localGameState.copy({ playerId: message.playerId });
                                _this.worldState = world_state_1.WorldState.fromJson(message.worldState);
                                _this.syncScene();
                            }
                            break;
                        case 'worldEvent':
                            if (!_this.server) {
                                _this.handleWorldEvent(json_serialisation_1.deserialiseFromJson(message.event));
                            }
                            break;
                    }
                });
            });
        });
        peer.on('error', function (err) {
            alert('' + err);
        });
        var clientId = Math.floor(Math.random() * 100000);
        // this.configureClientUsingBroadcastChannel(clientId)
    };
    GameScene.prototype.configureClientUsingBroadcastChannel = function (clientId) {
        var _this = this;
        this.channel.postMessage({ type: 'join', clientId: clientId });
        this.channel.addEventListener('message', function (message) {
            switch (message.type) {
                case 'joined':
                    if (message.clientId == clientId) {
                        _this.localGameState = _this.localGameState.copy({ playerId: message.playerId });
                        _this.worldState = world_state_1.WorldState.fromJson(message.worldState);
                        _this.syncScene();
                    }
                    break;
                case 'worldEvent':
                    if (!_this.server) {
                        _this.handleWorldEvent(json_serialisation_1.deserialiseFromJson(message.event));
                    }
                    break;
            }
        });
    };
    GameScene.prototype.actAsServer = function () {
        var _this = this;
        var server = new server_1.Server();
        this.server = server;
        //
        // const peer = new (window as any).Peer('llama-wars-1', {
        //   key: 'peerjs',
        //   host: 'localhost',
        //   path: 'myapp',
        //   port: 9000,
        // })
        var peer = new window.Peer('llama-wars-1');
        peer.on('open', function (id) {
            console.log('Opened ' + id);
        });
        peer.on('error', function (err) {
            alert('' + err);
        });
        console.log('Acting as server');
        peer.on('connection', function (connection) {
            console.log('Connection made from ' + connection.peer);
            server.addListener(function (event) {
                connection.send({ type: 'worldEvent', event: json_serialisation_1.serialiseToJson(event) });
                _this.handleWorldEvent(event);
            });
            connection.on('data', function (message) {
                console.log(message);
                console.log('Received data');
                switch (message.type) {
                    case 'join':
                        connection.send({
                            type: 'joined',
                            clientId: message.clientId,
                            playerId: 2,
                            worldState: server.worldState.toJson(),
                        });
                        break;
                    case 'worldAction':
                        server.handleAction(message.playerId, json_serialisation_1.deserialiseFromJson(message.action));
                }
            });
        });
        // this.configureServerUsingBroadcastChannel(server)
    };
    GameScene.prototype.configureServerUsingBroadcastChannel = function (server) {
        var _this = this;
        server.addListener(function (event) {
            _this.channel.postMessage({ type: 'worldEvent', event: json_serialisation_1.serialiseToJson(event) });
            _this.handleWorldEvent(event);
        });
        this.channel.addEventListener('message', function (message) {
            switch (message.type) {
                case 'join':
                    _this.channel.postMessage({
                        type: 'joined',
                        clientId: message.clientId,
                        playerId: 2,
                        worldState: server.worldState.toJson(),
                    });
                    break;
                case 'worldAction':
                    server.handleAction(message.playerId, json_serialisation_1.deserialiseFromJson(message.action));
            }
        });
    };
    GameScene.prototype.createDisplayObjects = function () {
        var e_2, _a;
        this.mapDisplayObject = new map_display_object_1.MapDisplayObject(this, this.worldState, this.localGameState);
        this.textsDisplayObject = new texts_display_object_1.TextsDisplayObject(this, this.worldState, this.localGameState, this.handleLocalAction);
        try {
            for (var _b = __values(this.worldState.units), _c = _b.next(); !_c.done; _c = _b.next()) {
                var unit = _c.value;
                var unitDisplayObject = new unit_display_object_1.UnitDisplayObject(this, unit);
                this.unitDisplayObjects.set(unit.id, unitDisplayObject);
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
            var data = { mode: 'start' };
            _this.scene.start('Game', data);
        });
        new menu_button_1.MenuButton(this, 100, 250, 'Join Game', function () {
            var data = { mode: 'join' };
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


/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** ../../src/methods/node.js (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!***************************!*\
  !*** ./node.js (ignored) ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9hc3NldC1rZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9jb21iaW5lZC1zdGF0ZS1tZXRob2RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2hleC1nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMva2V5Ym9hcmQtbWFwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbG9jYWwtYWN0aW9uLXByb2Nlc3Nvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvY2FsLWdhbWUtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYXAtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RleHRzLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdW5pdC1kaXNwbGF5LW9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWkvbWVudS1idXR0b24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvanNvbi1zZXJpYWxpc2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC1kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLXN0YXRlLnRzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWV0aG9kcy9ub2RlLmpzIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vLi9ub2RlLmpzIChpZ25vcmVkKSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFD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QUFFLENBQUMsQ0FBQztZQUN2QixTQUFTLEVBQUUsSUFBSSxnQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDcEQsWUFBWSxFQUFFLElBQUksbUJBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3ZELENBQUM7S0FDSDtDQUNGLENBQUM7Ozs7Ozs7Ozs7OztBQ3BJRixlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcydcblxuY29uc3QgZ2FtZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdTYW1wbGUnLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHNjYWxlOiB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICB9LFxuXG4gIHNjZW5lOiBTY2VuZXMsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBwYXJlbnQ6ICdnYW1lJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMCcsXG59XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUuc2NhbGUuc2V0R2FtZVNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcbiAgZ2FtZS5zY2FsZS5yZWZyZXNoKClcbn0pXG4iLCJleHBvcnQgY29uc3QgQXVkaW9LZXlzID0ge1xuICBBVFRBQ0s6ICdhdHRhY2snLFxuICBERUFUSDogJ2RlYXRoJyxcbiAgV0FMSzogJ3dhbGsnLFxuICBORVdfVFVSTjogJ25ldy10dXJuJyxcbn1cblxuZXhwb3J0IGNvbnN0IEFMTF9BVURJT19LRVlTID0gW0F1ZGlvS2V5cy5BVFRBQ0ssIEF1ZGlvS2V5cy5ERUFUSCwgQXVkaW9LZXlzLldBTEssIEF1ZGlvS2V5cy5ORVdfVFVSTl0iLCJpbXBvcnQgeyBnZXRHYW1lV2lkdGgsIGdldEdhbWVIZWlnaHQgfSBmcm9tICcuLi9oZWxwZXJzJ1xuaW1wb3J0IHsgQXVkaW9LZXlzIH0gZnJvbSAnLi9hc3NldC1rZXlzJ1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0Jvb3QnLFxufVxuXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcykgKiAwLjVcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gZ2V0R2FtZUhlaWdodCh0aGlzKSAqIDAuNVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDBcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwXG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckNvbnRhaW5lciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICBwcm9ncmVzc0JhcldpZHRoLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQsXG4gICAgICAweDAwMDAwMCxcbiAgICApXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIDEwLFxuICAgICAgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCxcbiAgICAgIDB4ODg4ODg4LFxuICAgIClcblxuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNClcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWUpID0+IHtcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZVxuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDBcbiAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7cGVyY2VudH0lYClcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZSkgPT4ge1xuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICBsb2FkaW5nVGV4dC5kZXN0cm95KClcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKVxuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXIuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KClcblxuICAgICAgLy8gdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNYWluTWVudScpXG4gICAgfSlcblxuICAgIHRoaXMubG9hZEFzc2V0cygpXG4gIH1cblxuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgLy8gU291cmNlOiBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2hleC10aWxlc2V0LXBhY2tcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xsYW1hJywgJ2Fzc2V0cy9zcHJpdGVzL2xsYW1hXzE0LnBuZycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9ob3VyZ2xhc3MtaWNvblxuICAgIHRoaXMubG9hZC5pbWFnZSgnaG91cmdsYXNzJywgJ2Fzc2V0cy9zcHJpdGVzL0hvdXJnbGFzcy5wbmcnKVxuXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC8zNy1oaXRzcHVuY2hlc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLLCAnYXNzZXRzL2F1ZGlvL2hpdDE4Lm1wMy5tcDMnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbWFsZS1ncnVudHllbGxpbmctc291bmRzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5ERUFUSCwgJ2Fzc2V0cy9hdWRpby8xeWVsbDQud2F2JylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLWZvb3Qtc3RlcC1zb3VuZHMteW8tZnJhbmtpZVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuV0FMSywgJ2Fzc2V0cy9hdWRpby9zZnhfc3RlcF9ncmFzc19sLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC91aS1zb3VuZC1lZmZlY3RzLXBhY2tcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLk5FV19UVVJOLCAnYXNzZXRzL2F1ZGlvL01FTlUgQV9TZWxlY3Qud2F2JylcbiAgfVxufVxuIiwiaW1wb3J0IENvbG9yID0gUGhhc2VyLkRpc3BsYXkuQ29sb3JcblxuZXhwb3J0IHR5cGUgQ29sb3VyU3RyaW5nID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb2xvdXJOdW1iZXIgPSBudW1iZXJcblxuZXhwb3J0IGNvbnN0IGNvbG91ck51bWJlciA9IChjb2xvdXJTdHJpbmc6IENvbG91clN0cmluZyk6IENvbG91ck51bWJlciA9PiBDb2xvci5IZXhTdHJpbmdUb0NvbG9yKGNvbG91clN0cmluZykuY29sb3JcblxuZXhwb3J0IGNvbnN0IEhFQUxUSF9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRU1QVFlfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZmZmJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRlVMTF9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM0ZGYwMzcnKVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2NjZmZiZScpXG5leHBvcnQgY29uc3QgSE9WRVJfREVGQVVMVF9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2RjZmZkMScpXG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmQwOCcpXG5leHBvcnQgY29uc3QgSE9WRVJfU0VMRUNURURfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZkYmYnKVxuXG5leHBvcnQgY29uc3QgVEFSR0VUQUJMRV9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzlkZjFlNycpXG5leHBvcnQgY29uc3QgSE9WRVJfVEFSR0VUQUJMRV9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2NlZjBlYicpXG5cbmV4cG9ydCBjb25zdCBBQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2NjY2MwMCdcbmV4cG9ydCBjb25zdCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2ZmZmYwMCdcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl8xX1RJTlQgPSAweGZmYmJiYlxuZXhwb3J0IGNvbnN0IFBMQVlFUl8yX1RJTlQgPSAweGJiYmJmZlxuIiwiaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBQbGF5ZXIsIFBsYXllcklkLCBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5cbmV4cG9ydCBjbGFzcyBDb21iaW5lZFN0YXRlIHtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG5cbiAgY29uc3RydWN0b3Iod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHVibGljIGZpbmRTZWxlY3RlZFVuaXQgPSAoKTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMuc2VsZWN0ZWRIZXggPyB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbih0aGlzLnNlbGVjdGVkSGV4KSA6IHVuZGVmaW5lZFxuXG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRIZXgoKTogT3B0aW9uPEhleD4ge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBsYXllcklkKCk6IFBsYXllcklkIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKGhleClcblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlID0gKHVuaXQ6IFVuaXQpOiBib29sZWFuID0+XG4gICAgdW5pdC5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkICYmIHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPiAwICYmICF0aGlzLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm5cblxuICBwdWJsaWMgdW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDAgJiYgIXRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVyblxuXG4gIHB1YmxpYyB1bml0Q2FuTW92ZVRvSGV4ID0gKHVuaXQ6IFVuaXQsIGhleDogSGV4KTogYm9vbGVhbiA9PlxuICAgIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlNb3ZlKHVuaXQpXG4gICAgJiYgaGV4LmlzQWRqYWNlbnRUbyh1bml0LmxvY2F0aW9uKVxuICAgICYmIHRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyhoZXgpXG4gICAgJiYgIXRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGhleClcblxuICBwdWJsaWMgdW5pdENhbkF0dGFja0hleCA9ICh1bml0OiBVbml0LCBsb2NhdGlvbjogSGV4KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgdGFyZ2V0VW5pdCA9IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGxvY2F0aW9uKVxuICAgIHJldHVybiB0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHVuaXQpXG4gICAgICAmJiB0YXJnZXRVbml0ICE9IHVuZGVmaW5lZFxuICAgICAgJiYgdGFyZ2V0VW5pdC5wbGF5ZXJJZCAhPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkXG4gICAgICAmJiB1bml0LmxvY2F0aW9uLmlzQWRqYWNlbnRUbyhsb2NhdGlvbilcbiAgfVxuXG4gIHB1YmxpYyBmaW5kTmV4dFVuaXRXaXRoQWN0aW9uUG9pbnRzID0gKHVuaXRJZD86IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgY2FuZGlkYXRlVW5pdHMgPSBSLnNvcnRCeSh1bml0ID0+IHVuaXQuaWQsIHRoaXMud29ybGRTdGF0ZS51bml0cy5maWx0ZXIodW5pdCA9PiB1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDApKVxuICAgIGlmICh1bml0SWQpXG4gICAgICByZXR1cm4gUi5oZWFkKGNhbmRpZGF0ZVVuaXRzLmZpbHRlcih1bml0ID0+IHVuaXQuaWQgPiB1bml0SWQpKSA/PyBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKHVuaXQgPT4gdW5pdC5pZCA8IHVuaXRJZCkpXG4gICAgZWxzZVxuICAgICAgcmV0dXJuIFIuaGVhZChjYW5kaWRhdGVVbml0cylcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50UGxheWVyID0gKCk6IFBsYXllciA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIodGhpcy5wbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcilcbiAgICAgIHRocm93IGBDb3VsZCBub3QgZmluZCBwbGF5ZXIgd2l0aCBpZCAke3RoaXMucGxheWVySWR9YFxuICAgIHJldHVybiBwbGF5ZXJcbiAgfVxuXG59IiwiaW1wb3J0IHsgQnJvYWRjYXN0Q2hhbm5lbCB9IGZyb20gJ2Jyb2FkY2FzdC1jaGFubmVsJ1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IGFkZFBvaW50cywgbXVsdGlwbHlQb2ludCwgUG9pbnQsIHN1YnRyYWN0UG9pbnRzIH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IGNlbnRlclBvaW50LCBmcm9tUG9pbnQgfSBmcm9tICcuL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUsIFBsYXllcklkLCBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHtcbiAgQ29tYmF0UGFydGljaXBhbnRJbmZvLFxuICBDb21iYXRXb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgVW5pdElkIH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVuaXREaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi91bml0LWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBNYXBEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi9tYXAtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBub3RoaW5nLCBPcHRpb24sIHRvTWF5YmUgfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFLCBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IEFMTF9BVURJT19LRVlTLCBBdWRpb0tleXMgfSBmcm9tICcuL2Fzc2V0LWtleXMnXG5pbXBvcnQgeyBtYXBUb0xvY2FsQWN0aW9uIH0gZnJvbSAnLi9rZXlib2FyZC1tYXBwZXInXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgTG9jYWxBY3Rpb25Qcm9jZXNzb3IsIExvY2FsQWN0aW9uUmVzdWx0IH0gZnJvbSAnLi9sb2NhbC1hY3Rpb24tcHJvY2Vzc29yJ1xuaW1wb3J0IHsgVGV4dHNEaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi90ZXh0cy1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IENvbWJpbmVkU3RhdGUgfSBmcm9tICcuL2NvbWJpbmVkLXN0YXRlLW1ldGhvZHMnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vc2VydmVyL21lc3NhZ2VzJ1xuaW1wb3J0IHsgR2FtZVNjZW5lRGF0YSB9IGZyb20gJy4vbWFpbi1tZW51LXNjZW5lJ1xuaW1wb3J0IFBvaW50ZXIgPSBQaGFzZXIuSW5wdXQuUG9pbnRlclxuaW1wb3J0IHsgZGVzZXJpYWxpc2VGcm9tSnNvbiwgc2VyaWFsaXNlVG9Kc29uIH0gZnJvbSAnLi4vdXRpbC9qc29uLXNlcmlhbGlzYXRpb24nXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnR2FtZScsXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfU0laRSA9IDQ4XG5leHBvcnQgY29uc3QgRFJBV0lOR19PRkZTRVQgPSB7IHg6IDYwLCB5OiAxMDAgfVxuZXhwb3J0IGNvbnN0IGhleENlbnRlciA9IChoZXg6IEhleCk6IFBvaW50ID0+IGFkZFBvaW50cyhtdWx0aXBseVBvaW50KGNlbnRlclBvaW50KGhleCksIEhFWF9TSVpFKSwgRFJBV0lOR19PRkZTRVQpXG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBwcml2YXRlIHNlcnZlcjogT3B0aW9uPFNlcnZlcj4gPSB1bmRlZmluZWRcbiAgcHJpdmF0ZSBjaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsPE1lc3NhZ2U+XG5cbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURVxuXG4gIHByaXZhdGUgbWFwRGlzcGxheU9iamVjdDogTWFwRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgdGV4dHNEaXNwbGF5T2JqZWN0OiBUZXh0c0Rpc3BsYXlPYmplY3RcbiAgcHJpdmF0ZSBjb25uZWN0aW9uOiBhbnlcblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIC8vIENyZWF0ZVxuICAvLyAtLS0tLS1cblxuICBwdWJsaWMgY3JlYXRlID0gKGdhbWVTY2VuZURhdGE6IEdhbWVTY2VuZURhdGEpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2VcbiAgICB0aGlzLmNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbDxNZXNzYWdlPignbGxhbWEtY29tbXMnKVxuICAgIGlmIChnYW1lU2NlbmVEYXRhLm1vZGUgPT0gJ3N0YXJ0Jykge1xuICAgICAgdGhpcy5hY3RBc1NlcnZlcigpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0QXNDbGllbnQoKVxuICAgIH1cblxuICAgIEFMTF9BVURJT19LRVlTLmZvckVhY2goa2V5ID0+IHRoaXMuc291bmQuYWRkKGtleSkpXG4gICAgdGhpcy5jcmVhdGVEaXNwbGF5T2JqZWN0cygpXG4gICAgdGhpcy5zZXRVcElucHV0cygpXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBhY3RBc0NsaWVudCgpIHtcbiAgICBjb25zdCBwZWVyID0gbmV3ICh3aW5kb3cgYXMgYW55KS5QZWVyKClcbiAgICAvLyBjb25zdCBwZWVyID0gbmV3ICh3aW5kb3cgYXMgYW55KS5QZWVyKHtcbiAgICAvLyAgIGtleTogJ3BlZXJqcycsXG4gICAgLy8gICBob3N0OiAnbG9jYWxob3N0JyxcbiAgICAvLyAgIHBhdGg6ICdteWFwcCcsXG4gICAgLy8gICBwb3J0OiA5MDAwLFxuICAgIC8vIH0pXG4gICAgY29uc29sZS5sb2coJ0FjdGluZyBhcyBjbGllbnQnKVxuICAgIHBlZXIub24oJ29wZW4nLCBpZCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnT3BlbmVkICcgKyBpZClcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBwZWVyLmNvbm5lY3QoJ2xsYW1hLXdhcnMtMScpXG4gICAgICBjb25uZWN0aW9uLm9uKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGlvbiBvcGVuZWQnKVxuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uXG4gICAgICAgIGNvbm5lY3Rpb24uc2VuZCh7IHR5cGU6ICdqb2luJywgY2xpZW50SWQgfSlcbiAgICAgICAgY29ubmVjdGlvbi5vbignZGF0YScsIChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnam9pbmVkJzpcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuY2xpZW50SWQgPT0gY2xpZW50SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgcGxheWVySWQ6IG1lc3NhZ2UucGxheWVySWQgfSlcbiAgICAgICAgICAgICAgICB0aGlzLndvcmxkU3RhdGUgPSBXb3JsZFN0YXRlLmZyb21Kc29uKG1lc3NhZ2Uud29ybGRTdGF0ZSlcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3dvcmxkRXZlbnQnOlxuICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VydmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXb3JsZEV2ZW50KGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5ldmVudCkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gICAgcGVlci5vbignZXJyb3InLCBmdW5jdGlvbihlcnIpIHtcbiAgICAgIGFsZXJ0KCcnICsgZXJyKVxuICAgIH0pXG4gICAgY29uc3QgY2xpZW50SWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApXG4gICAgLy8gdGhpcy5jb25maWd1cmVDbGllbnRVc2luZ0Jyb2FkY2FzdENoYW5uZWwoY2xpZW50SWQpXG4gIH1cblxuICBwcml2YXRlIGNvbmZpZ3VyZUNsaWVudFVzaW5nQnJvYWRjYXN0Q2hhbm5lbChjbGllbnRJZDogbnVtYmVyKSB7XG4gICAgdGhpcy5jaGFubmVsLnBvc3RNZXNzYWdlKHsgdHlwZTogJ2pvaW4nLCBjbGllbnRJZCB9KVxuICAgIHRoaXMuY2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcbiAgICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2pvaW5lZCc6XG4gICAgICAgICAgaWYgKG1lc3NhZ2UuY2xpZW50SWQgPT0gY2xpZW50SWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBwbGF5ZXJJZDogbWVzc2FnZS5wbGF5ZXJJZCB9KVxuICAgICAgICAgICAgdGhpcy53b3JsZFN0YXRlID0gV29ybGRTdGF0ZS5mcm9tSnNvbihtZXNzYWdlLndvcmxkU3RhdGUpXG4gICAgICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ3dvcmxkRXZlbnQnOlxuICAgICAgICAgIGlmICghdGhpcy5zZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlV29ybGRFdmVudChkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuZXZlbnQpKVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcml2YXRlIGFjdEFzU2VydmVyKCkge1xuICAgIGNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoKVxuICAgIHRoaXMuc2VydmVyID0gc2VydmVyXG4gICAgLy9cbiAgICAvLyBjb25zdCBwZWVyID0gbmV3ICh3aW5kb3cgYXMgYW55KS5QZWVyKCdsbGFtYS13YXJzLTEnLCB7XG4gICAgLy8gICBrZXk6ICdwZWVyanMnLFxuICAgIC8vICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgLy8gICBwYXRoOiAnbXlhcHAnLFxuICAgIC8vICAgcG9ydDogOTAwMCxcbiAgICAvLyB9KVxuICAgIGNvbnN0IHBlZXIgPSBuZXcgKHdpbmRvdyBhcyBhbnkpLlBlZXIoJ2xsYW1hLXdhcnMtMScpXG4gICAgcGVlci5vbignb3BlbicsIGZ1bmN0aW9uKGlkKSB7XG4gICAgICBjb25zb2xlLmxvZygnT3BlbmVkICcgKyBpZClcbiAgICB9KVxuICAgIHBlZXIub24oJ2Vycm9yJywgZnVuY3Rpb24oZXJyKSB7XG4gICAgICBhbGVydCgnJyArIGVycilcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKCdBY3RpbmcgYXMgc2VydmVyJylcbiAgICBwZWVyLm9uKCdjb25uZWN0aW9uJywgKGNvbm5lY3Rpb24pID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0aW9uIG1hZGUgZnJvbSAnICsgY29ubmVjdGlvbi5wZWVyKVxuICAgICAgc2VydmVyLmFkZExpc3RlbmVyKChldmVudCkgPT4ge1xuICAgICAgICBjb25uZWN0aW9uLnNlbmQoeyB0eXBlOiAnd29ybGRFdmVudCcsIGV2ZW50OiBzZXJpYWxpc2VUb0pzb24oZXZlbnQpIH0pXG4gICAgICAgIHRoaXMuaGFuZGxlV29ybGRFdmVudChldmVudClcbiAgICAgIH0pXG4gICAgICBjb25uZWN0aW9uLm9uKCdkYXRhJywgKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICAgICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIGRhdGEnKVxuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2pvaW4nOlxuICAgICAgICAgICAgY29ubmVjdGlvbi5zZW5kKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2pvaW5lZCcsXG4gICAgICAgICAgICAgIGNsaWVudElkOiBtZXNzYWdlLmNsaWVudElkLFxuICAgICAgICAgICAgICBwbGF5ZXJJZDogMixcbiAgICAgICAgICAgICAgd29ybGRTdGF0ZTogc2VydmVyLndvcmxkU3RhdGUudG9Kc29uKCksXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjYXNlICd3b3JsZEFjdGlvbic6XG4gICAgICAgICAgICBzZXJ2ZXIuaGFuZGxlQWN0aW9uKG1lc3NhZ2UucGxheWVySWQsIGRlc2VyaWFsaXNlRnJvbUpzb24obWVzc2FnZS5hY3Rpb24pKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgLy8gdGhpcy5jb25maWd1cmVTZXJ2ZXJVc2luZ0Jyb2FkY2FzdENoYW5uZWwoc2VydmVyKVxuICB9XG5cbiAgcHJpdmF0ZSBjb25maWd1cmVTZXJ2ZXJVc2luZ0Jyb2FkY2FzdENoYW5uZWwoc2VydmVyOiBTZXJ2ZXIpIHtcbiAgICBzZXJ2ZXIuYWRkTGlzdGVuZXIoKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmNoYW5uZWwucG9zdE1lc3NhZ2UoeyB0eXBlOiAnd29ybGRFdmVudCcsIGV2ZW50OiBzZXJpYWxpc2VUb0pzb24oZXZlbnQpIH0pXG4gICAgICB0aGlzLmhhbmRsZVdvcmxkRXZlbnQoZXZlbnQpXG4gICAgfSlcbiAgICB0aGlzLmNoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChtZXNzYWdlKSA9PiB7XG4gICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgICBjYXNlICdqb2luJzpcbiAgICAgICAgICB0aGlzLmNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ2pvaW5lZCcsXG4gICAgICAgICAgICBjbGllbnRJZDogbWVzc2FnZS5jbGllbnRJZCxcbiAgICAgICAgICAgIHBsYXllcklkOiAyLFxuICAgICAgICAgICAgd29ybGRTdGF0ZTogc2VydmVyLndvcmxkU3RhdGUudG9Kc29uKCksXG4gICAgICAgICAgfSlcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICd3b3JsZEFjdGlvbic6XG4gICAgICAgICAgc2VydmVyLmhhbmRsZUFjdGlvbihtZXNzYWdlLnBsYXllcklkLCBkZXNlcmlhbGlzZUZyb21Kc29uKG1lc3NhZ2UuYWN0aW9uKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVEaXNwbGF5T2JqZWN0cygpIHtcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3QgPSBuZXcgTWFwRGlzcGxheU9iamVjdCh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy50ZXh0c0Rpc3BsYXlPYmplY3QgPSBuZXcgVGV4dHNEaXNwbGF5T2JqZWN0KHRoaXMsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSwgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbilcbiAgICBmb3IgKGNvbnN0IHVuaXQgb2YgdGhpcy53b3JsZFN0YXRlLnVuaXRzKSB7XG4gICAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdCA9IG5ldyBVbml0RGlzcGxheU9iamVjdCh0aGlzLCB1bml0KVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXQuaWQsIHVuaXREaXNwbGF5T2JqZWN0KVxuICAgIH1cbiAgfVxuXG4gIC8vIElucHV0IGhhbmRsZXJzXG4gIC8vIC0tLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBzZXRVcElucHV0cyA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmlucHV0Lm1vdXNlLmRpc2FibGVDb250ZXh0TWVudSgpXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5KVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bilcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uID0gbWFwVG9Mb2NhbEFjdGlvbihldmVudCwgdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlKVxuICAgIGlmIChsb2NhbEFjdGlvbilcbiAgICAgIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24obG9jYWxBY3Rpb24pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxvY2FsQWN0aW9uID0gKGxvY2FsQWN0aW9uOiBMb2NhbEFjdGlvbik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGxvY2FsQWN0aW9uUHJvY2Vzc29yID0gbmV3IExvY2FsQWN0aW9uUHJvY2Vzc29yKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbEFjdGlvblByb2Nlc3Nvci5wcm9jZXNzKGxvY2FsQWN0aW9uKVxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHRoaXMuZW5hY3RMb2NhbEFjdGlvblJlc3VsdChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbmFjdExvY2FsQWN0aW9uUmVzdWx0ID0gKHJlc3VsdDogTG9jYWxBY3Rpb25SZXN1bHQpOiB2b2lkID0+IHtcbiAgICBpZiAocmVzdWx0Lm5ld0xvY2FsR2FtZVN0YXRlKSB7XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gcmVzdWx0Lm5ld0xvY2FsR2FtZVN0YXRlXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICAgIGlmIChyZXN1bHQud29ybGRBY3Rpb24pIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXI6IHRydWUgfSlcbiAgICAgIHRoaXMuc3luY1NjZW5lKClcblxuICAgICAgdGhpcy5hc3luY1NlbmRUb1NlcnZlcihyZXN1bHQud29ybGRBY3Rpb24pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyOiBmYWxzZSB9KVxuICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmNTZW5kVG9TZXJ2ZXIgPSBhc3luYyAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IFByb21pc2U8dm9pZD4gPT4ge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKCksIDEyMCkpXG4gICAgaWYgKHRoaXMuc2VydmVyKSB7XG4gICAgICB0aGlzLnNlcnZlci5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24uc2VuZCh7XG4gICAgICAgIHR5cGU6ICd3b3JsZEFjdGlvbicsXG4gICAgICAgIGFjdGlvbjogc2VyaWFsaXNlVG9Kc29uKGFjdGlvbiksXG4gICAgICAgIHBsYXllcklkOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkLFxuICAgICAgfSlcbiAgICAgIC8vIGF3YWl0IHRoaXMuY2hhbm5lbC5wb3N0TWVzc2FnZSh7XG4gICAgICAvLyAgIHR5cGU6ICd3b3JsZEFjdGlvbicsXG4gICAgICAvLyAgIGFjdGlvbjogc2VyaWFsaXNlVG9Kc29uKGFjdGlvbiksXG4gICAgICAvLyAgIHBsYXllcklkOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkLFxuICAgICAgLy8gfSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvaW50ZXJNb3ZlID0gKHBvaW50ZXI6IFBvaW50ZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwb2ludGVyUG9pbnQgPSB7IHg6IHBvaW50ZXIueCwgeTogcG9pbnRlci55IH1cbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3QuaGFuZGxlUG9pbnRlck1vdmUocG9pbnRlclBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyRG93biA9IChwb2ludGVyOiBQb2ludGVyKTogdm9pZCA9PiB7XG4gICAgLy8gSWdub3JlIGNsaWNrcyBvbiB0aGVzZSBhcyB0aGV5IGhhdmUgdGhlaXIgb3duIGhhbmRsZXJzXG4gICAgY29uc3QgcHJlc3NlZFBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgaWYgKHRoaXMudGV4dHNEaXNwbGF5T2JqZWN0Lmhhc0NsaWNrSGFuZGxlckZvcihwcmVzc2VkUG9pbnQpKVxuICAgICAgcmV0dXJuXG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocHJlc3NlZFBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHBvaW50ZXIuYnV0dG9uID09IDIpIHtcbiAgICAgIHRoaXMuaGFuZGxlTG9jYWxBY3Rpb24oeyB0eXBlOiAnZ29IZXgnLCBoZXggfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVMZWZ0Q2xpY2soaGV4KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTGVmdENsaWNrID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ3NlbGVjdEhleCcsIGhleCB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLmhhbmRsZUxvY2FsQWN0aW9uKHsgdHlwZTogJ2NvbXBsZXRlTW92ZScsIHVuaXRJZDogbW9kZS51bml0SWQsIGhleCB9KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVMb2NhbEFjdGlvbih7IHR5cGU6ICdjb21wbGV0ZUF0dGFjaycsIHVuaXRJZDogbW9kZS51bml0SWQsIGhleCB9KVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICB9XG5cbiAgLy8gU3luY1xuICAvLyAtLS0tXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3Quc3luY1NjZW5lKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLnRleHRzRGlzcGxheU9iamVjdC5zeW5jU2NlbmUodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuXG4gICAgY29uc3Qgc3VycGx1c1VuaXRJZHMgPSBSLmRpZmZlcmVuY2UoQXJyYXkuZnJvbSh0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5rZXlzKCkpLCB0aGlzLndvcmxkU3RhdGUudW5pdHMubWFwKHVuaXQgPT4gdW5pdC5pZCkpXG4gICAgZm9yIChjb25zdCB1bml0SWQgb2Ygc3VycGx1c1VuaXRJZHMpIHtcbiAgICAgIGNvbnN0IHVuaXREaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZCkhXG4gICAgICB1bml0RGlzcGxheU9iamVjdC5kZXN0cm95KClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZSh1bml0SWQpXG4gICAgfVxuXG4gICAgdGhpcy53b3JsZFN0YXRlLnVuaXRzLmZvckVhY2godW5pdCA9PiB7XG4gICAgICBsZXQgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLnVuaXREaXNwbGF5T2JqZWN0cy5nZXQodW5pdC5pZClcbiAgICAgIGlmICghdW5pdERpc3BsYXlPYmplY3QpIHtcbiAgICAgICAgdW5pdERpc3BsYXlPYmplY3QgPSBuZXcgVW5pdERpc3BsYXlPYmplY3QodGhpcywgdW5pdClcbiAgICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuc2V0KHVuaXQuaWQsIHVuaXREaXNwbGF5T2JqZWN0KVxuICAgICAgfVxuICAgICAgdW5pdERpc3BsYXlPYmplY3Quc3luY1NjZW5lKHVuaXQpXG4gICAgfSlcbiAgfVxuXG4gIC8vIEhhbmRsZSB3b3JsZCBldmVudHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHByaXZhdGUgaGFuZGxlV29ybGRFdmVudCA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG9sZFdvcmxkU3RhdGUgPSB0aGlzLndvcmxkU3RhdGVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBhcHBseUV2ZW50KG9sZFdvcmxkU3RhdGUsIGV2ZW50KVxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgICAgdGhpcy5oYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50KGV2ZW50LCBvbGRXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21iYXRXb3JsZEV2ZW50KGV2ZW50LCBvbGRXb3JsZFN0YXRlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRW5kZWRUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJFbmRlZFR1cm4oKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbmV3VHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlTmV3VHVybigpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbGF5ZXJFbmRlZFR1cm4gPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOZXdUdXJuID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXRUb1NlbGVjdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoQWN0aW9uUG9pbnRzKClcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgIHNlbGVjdGVkSGV4OiB0b01heWJlKHVuaXRUb1NlbGVjdD8ubG9jYXRpb24pLFxuICAgIH0pXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuTkVXX1RVUk4pXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVVuaXRNb3ZlZFdvcmxkRXZlbnQgPSAoZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQsIG9sZFdvcmxkU3RhdGU6IFdvcmxkU3RhdGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IHVuaXRJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5XQUxLKVxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGNvbnN0IHdhc1ByZXZpb3VzbHlTZWxlY3RlZCA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2VsZWN0ZWRIZXggJiYgb2xkV29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleCk/LmlkID09IHVuaXRJZFxuICAgIGlmICh3YXNQcmV2aW91c2x5U2VsZWN0ZWQgJiYgdW5pdC5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZEhleCA9IHRoaXMuY2FsY3VsYXRlTmV3U2VsZWN0ZWRVbml0QWZ0ZXJNb3ZlT3JBdHRhY2sodW5pdElkLCB0bylcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoe1xuICAgICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICAgIHNlbGVjdGVkSGV4OiB0b01heWJlKG5ld1NlbGVjdGVkSGV4KSxcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuc3luY1NjZW5lKClcblxuICAgIHRoaXMuZ2V0VW5pdERpc3BsYXlPYmplY3QodW5pdElkKS5tb3ZlKGZyb20sIHRvKVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayA9ICh1bml0SWQ6IFVuaXRJZCwgZGVmYXVsdExvY2F0aW9uOiBIZXgpOiBPcHRpb248SGV4PiA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIC8vIFJldGFpbiBzZWxlY3Rpb24gaWYgdW5pdCBzdGlsbCBleGlzdHMgYW5kIHdlIHN0aWxsIGhhdmUgYWN0aW9uIHBvaW50cywgZWxzZSBzZWxlY3QgbmV4dCB1bml0IChvciBub3RoaW5nIGlmIHRoZXJlIGlzbid0IG9uZSlcbiAgICBsZXQgbmV3U2VsZWN0ZWRIZXhcbiAgICBpZiAoIXVuaXQgfHwgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA9PSAwKSB7XG4gICAgICBjb25zdCBuZXh0VW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kTmV4dFVuaXRXaXRoQWN0aW9uUG9pbnRzKHVuaXRJZClcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gbmV4dFVuaXQ/LmxvY2F0aW9uXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1NlbGVjdGVkSGV4ID0gZGVmYXVsdExvY2F0aW9uXG4gICAgfVxuICAgIHJldHVybiBuZXdTZWxlY3RlZEhleFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21iYXRXb3JsZEV2ZW50ID0gKGV2ZW50OiBDb21iYXRXb3JsZEV2ZW50LCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKSA9PiB7XG4gICAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG4gICAgdGhpcy5zb3VuZC5wbGF5KEF1ZGlvS2V5cy5BVFRBQ0spXG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCB8fCBkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuREVBVEgpXG4gICAgfVxuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uQWZ0ZXJDb21iYXQoYXR0YWNrZXIsIGRlZmVuZGVyLCBvbGRXb3JsZFN0YXRlKVxuICAgIHRoaXMuc3luY1NjZW5lKClcblxuICAgIGNvbnN0IGF0dGFja2VyRGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldChhdHRhY2tlci51bml0SWQpXG4gICAgaWYgKGF0dGFja2VyRGlzcGxheU9iamVjdClcbiAgICAgIGF0dGFja2VyRGlzcGxheU9iamVjdC5hdHRhY2soYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25BZnRlckNvbWJhdCA9IChhdHRhY2tlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLCBkZWZlbmRlcjogQ29tYmF0UGFydGljaXBhbnRJbmZvLCBvbGRXb3JsZFN0YXRlOiBXb3JsZFN0YXRlKSA9PiB7XG4gICAgY29uc3QgcHJldmlvdXNseVNlbGVjdGVkVW5pdElkID0gbmV3IENvbWJpbmVkU3RhdGUob2xkV29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSkuZmluZFNlbGVjdGVkVW5pdCgpPy5pZFxuICAgIGlmIChwcmV2aW91c2x5U2VsZWN0ZWRVbml0SWQgPT0gYXR0YWNrZXIudW5pdElkICYmIGF0dGFja2VyLnBsYXllcklkID09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayhhdHRhY2tlci51bml0SWQsIGF0dGFja2VyLmxvY2F0aW9uKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgc2VsZWN0ZWRIZXg6IHRvTWF5YmUobmV3U2VsZWN0ZWRIZXgpLFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZGVzZWxlY3QgdW5pdCBraWxsZWQgYnkgYW5vdGhlciBwbGF5ZXJcbiAgICAgIGlmIChkZWZlbmRlci5raWxsZWQgJiYgZGVmZW5kZXIudW5pdElkID09IHByZXZpb3VzbHlTZWxlY3RlZFVuaXRJZCAmJiBkZWZlbmRlci5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoe1xuICAgICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgICBzZWxlY3RlZEhleDogbm90aGluZyxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBVdGlsIHF1ZXJpZXNcbiAgLy8gLS0tLS0tLS0tLS0tXG5cbiAgcHJpdmF0ZSBnZXRVbml0RGlzcGxheU9iamVjdCA9ICh1bml0SWQ6IG51bWJlcik6IFVuaXREaXNwbGF5T2JqZWN0ID0+IHtcbiAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKCF1bml0RGlzcGxheU9iamVjdClcbiAgICAgIHRocm93IGBDb3VsZCBub3QgZmluZCB1bml0IHdpdGggSUQgJHt1bml0SWR9YFxuICAgIHJldHVybiB1bml0RGlzcGxheU9iamVjdFxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcGxheWVySWQoKTogUGxheWVySWQge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnBsYXllcklkXG4gIH1cblxufSIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IFdvcmxkTWFwIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtbWFwJ1xuXG5leHBvcnQgY29uc3QgY2VudGVyUG9pbnQgPSAoaGV4OiBIZXgpOiBQb2ludCA9PlxuICAoe1xuICAgIHg6IGhleC54ICogTWF0aC5zcXJ0KDMpICsgaGV4LnkgKiBNYXRoLnNxcnQoMykgLyAyLFxuICAgIHk6IGhleC55ICogMyAvIDIsXG4gIH0pXG5cbmV4cG9ydCBjb25zdCBmcm9tUG9pbnQgPSAocG9pbnQ6IFBvaW50KTogSGV4ID0+IHtcbiAgY29uc3QgeCA9IHBvaW50LnggKiBNYXRoLnNxcnQoMykgLyAzIC0gcG9pbnQueSAvIDNcbiAgY29uc3QgeSA9IDIgKiBwb2ludC55IC8gM1xuICByZXR1cm4gcm91bmQobmV3IEhleCh4LCB5KSk7XG59XG5cbmNvbnN0IHJvdW5kID0gKGhleDogSGV4KTogSGV4ID0+IHtcbiAgY29uc3QgcnggPSBNYXRoLnJvdW5kKGhleC54KVxuICBjb25zdCByeSA9IE1hdGgucm91bmQoaGV4LnkpXG4gIGNvbnN0IHJ6ID0gTWF0aC5yb3VuZChoZXgueilcblxuICBjb25zdCB4RGlmZiA9IE1hdGguYWJzKHJ4IC0gaGV4LngpXG4gIGNvbnN0IHlEaWZmID0gTWF0aC5hYnMocnkgLSBoZXgueSlcbiAgY29uc3QgekRpZmYgPSBNYXRoLmFicyhyeiAtIGhleC55KVxuXG4gIGlmICh4RGlmZiA+IHlEaWZmICYmIHhEaWZmID4gekRpZmYpXG4gICAgcmV0dXJuIG5ldyBIZXgoLXJ5IC0gcnosIHJ5KVxuICBlbHNlIGlmICh5RGlmZiA+IHpEaWZmKVxuICAgIHJldHVybiBuZXcgSGV4KHJ4LCAtcnggLSByeilcbiAgZWxzZVxuICAgIHJldHVybiBuZXcgSGV4KHJ4LCByeSlcbn1cblxuY29uc3QgaGV4QW5nbGUgPSBNYXRoLlBJIC8gM1xuY29uc3QgaGV4T2Zmc2V0ID0gTWF0aC5QSSAvIDZcblxuY29uc3QgaGV4Q29ybmVyID0gKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlciwgaTogbnVtYmVyKTogUG9pbnQgPT4ge1xuICBjb25zdCBhbmdsZVJhZGlhbnMgPSBoZXhBbmdsZSAqIGkgLSBoZXhPZmZzZXRcbiAgY29uc3QgeCA9IGNlbnRlci54ICsgc2l6ZSAqIE1hdGguY29zKGFuZ2xlUmFkaWFucylcbiAgY29uc3QgeSA9IGNlbnRlci55ICsgc2l6ZSAqIE1hdGguc2luKGFuZ2xlUmFkaWFucylcbiAgcmV0dXJuIHsgeCwgeSB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogaGV4Q29ybmVycyhjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIpOiBJdGVyYWJsZUl0ZXJhdG9yPFBvaW50PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgeWllbGQgaGV4Q29ybmVyKGNlbnRlciwgc2l6ZSwgaSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbWFwSGVpZ2h0ID0gKG1hcDogV29ybGRNYXApOiBudW1iZXIgPT4gbWFwLmhlaWdodCAqIDMgLyAyXG5cbmV4cG9ydCBjb25zdCBoZXhXaWR0aCA9IChoZXhTaXplOiBudW1iZXIpOiBudW1iZXIgPT4gaGV4U2l6ZSAqIE1hdGguc3FydCgzKVxuXG4iLCJpbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tICcuL2Jvb3Qtc2NlbmUnO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcbmltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tICcuL21haW4tbWVudS1zY2VuZSdcblxuZXhwb3J0IGRlZmF1bHQgW0Jvb3RTY2VuZSwgR2FtZVNjZW5lLCBNYWluTWVudVNjZW5lXTtcbiIsImltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgSGV4RGlyZWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvaGV4LWRpcmVjdGlvbidcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21vZGUnXG5cbmV4cG9ydCBjb25zdCBtYXBUb0xvY2FsQWN0aW9uID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBtb2RlOiBNb2RlKTogT3B0aW9uPExvY2FsQWN0aW9uPiA9PiB7XG4gIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICBjYXNlICc0JzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLldFU1QgfVxuICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgIGNhc2UgJzYnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uRUFTVCB9XG4gICAgY2FzZSAnNyc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5OT1JUSF9XRVNUIH1cbiAgICBjYXNlICczJzpcbiAgICAgIHJldHVybiB7IHR5cGU6ICdnbycsIGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1QgfVxuICAgIGNhc2UgJzknOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2dvJywgZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVCB9XG4gICAgY2FzZSAnMSc6XG4gICAgICByZXR1cm4geyB0eXBlOiAnZ28nLCBkaXJlY3Rpb246IEhleERpcmVjdGlvbi5TT1VUSF9XRVNUIH1cbiAgICBjYXNlICdFc2NhcGUnOlxuICAgICAgcmV0dXJuIHsgdHlwZTogJ2Fib3J0JyB9XG4gICAgY2FzZSAnRW50ZXInOlxuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnZW5kVHVybicgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICduJzpcbiAgICAgIGlmIChldmVudC5jdHJsS2V5KVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnc2VsZWN0TmV4dFVuaXQnIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbSc6XG4gICAgICBpZiAobW9kZS50eXBlID09ICdzZWxlY3RIZXgnKVxuICAgICAgICByZXR1cm4geyB0eXBlOiAnZW50ZXJNb3ZlTW9kZScgfVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhJzpcbiAgICAgIGlmIChtb2RlLnR5cGUgPT0gJ3NlbGVjdEhleCcpXG4gICAgICAgIHJldHVybiB7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnIH1cbiAgICAgIGJyZWFrXG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEFjdGlvbiB9IGZyb20gJy4vbG9jYWwtYWN0aW9uJ1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IFVuaXQsIFVuaXRJZCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleERpcmVjdGlvbiB9IGZyb20gJy4uL3dvcmxkL2hleC1kaXJlY3Rpb24nXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcblxuZXhwb3J0IGludGVyZmFjZSBMb2NhbEFjdGlvblJlc3VsdCB7XG4gIG5ld0xvY2FsR2FtZVN0YXRlPzogTG9jYWxHYW1lU3RhdGVcbiAgd29ybGRBY3Rpb24/OiBXb3JsZEFjdGlvblxufVxuXG5leHBvcnQgY2xhc3MgTG9jYWxBY3Rpb25Qcm9jZXNzb3Ige1xuICBwcml2YXRlIHJlYWRvbmx5IHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSByZWFkb25seSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcblxuICBjb25zdHJ1Y3Rvcih3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gIH1cblxuICBwcml2YXRlIGdldCBjb21iaW5lZFN0YXRlKCk6IENvbWJpbmVkU3RhdGUge1xuICAgIHJldHVybiBuZXcgQ29tYmluZWRTdGF0ZSh0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gIH1cblxuICBwdWJsaWMgcHJvY2VzcyA9IChhY3Rpb246IExvY2FsQWN0aW9uKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnZ28nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVHbyhhY3Rpb24uZGlyZWN0aW9uKVxuICAgICAgY2FzZSAnZ29IZXgnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVHb0hleChhY3Rpb24uaGV4KVxuICAgICAgY2FzZSAnc2VsZWN0TmV4dFVuaXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVTZWxlY3ROZXh0VW5pdCgpXG4gICAgICBjYXNlICdhYm9ydCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUFib3J0KClcbiAgICAgIGNhc2UgJ2VuZFR1cm4nOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbmRUdXJuKClcbiAgICAgIGNhc2UgJ2VudGVyTW92ZU1vZGUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVFbnRlck1vdmVNb2RlKClcbiAgICAgIGNhc2UgJ2VudGVyQXR0YWNrTW9kZSc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVudGVyQXR0YWNrTW9kZSgpXG4gICAgICBjYXNlICdjb21wbGV0ZU1vdmUnOlxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDb21wbGV0ZU1vdmUoYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ2NvbXBsZXRlQXR0YWNrJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ29tcGxldGVBdHRhY2soYWN0aW9uLnVuaXRJZCwgYWN0aW9uLmhleClcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVNlbGVjdEhleChhY3Rpb24uaGV4KVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdE5leHRVbml0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuY29tYmluZWRTdGF0ZS5maW5kU2VsZWN0ZWRVbml0KClcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZE5leHRVbml0V2l0aEFjdGlvblBvaW50cyhzZWxlY3RlZFVuaXQ/LmlkKVxuICAgIGlmICh1bml0VG9TZWxlY3QpIHtcbiAgICAgIGNvbnN0IG5ld0xvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKS5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiBuZXdMb2NhbEdhbWVTdGF0ZSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFib3J0ID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIHN3aXRjaCAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBzZWxlY3RlZEhleDogbm90aGluZyB9KSB9XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSkgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvID0gKGRpcmVjdGlvbjogSGV4RGlyZWN0aW9uKTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRIZXggPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gICAgaWYgKHNlbGVjdGVkSGV4KVxuICAgICAgcmV0dXJuIHRoaXMubW92ZU9yQXR0YWNrSGV4KHNlbGVjdGVkSGV4LmdvKGRpcmVjdGlvbikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUdvSGV4ID0gKGhleDogSGV4KTogT3B0aW9uPExvY2FsQWN0aW9uUmVzdWx0PiA9PiB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuTW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KSlcbiAgICAgICAgcmV0dXJuIHRoaXMubW92ZVRvSGV4KHNlbGVjdGVkVW5pdCwgaGV4KVxuICAgICAgZWxzZSBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dGFja0hleChzZWxlY3RlZFVuaXQsIGhleClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGF0dGFja0hleCA9IChhdHRhY2tlcjogVW5pdCwgdGFyZ2V0SGV4OiBIZXgpOiBMb2NhbEFjdGlvblJlc3VsdCA9PiB7XG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRhcmdldEhleCkhXG4gICAgcmV0dXJuIHtcbiAgICAgIHdvcmxkQWN0aW9uOiB7XG4gICAgICAgIHR5cGU6ICdhdHRhY2snLFxuICAgICAgICBhdHRhY2tlcjogeyB1bml0SWQ6IGF0dGFja2VyLmlkLCBsb2NhdGlvbjogYXR0YWNrZXIubG9jYXRpb24gfSxcbiAgICAgICAgZGVmZW5kZXI6IHsgdW5pdElkOiBkZWZlbmRlci5pZCwgbG9jYXRpb246IHRhcmdldEhleCB9LFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBkZXN0aW5hdGlvbjogSGV4KTogTG9jYWxBY3Rpb25SZXN1bHQgPT4gKHtcbiAgICB3b3JsZEFjdGlvbjoge1xuICAgICAgdHlwZTogJ21vdmVVbml0JyxcbiAgICAgIHVuaXRJZDogdW5pdC5pZCxcbiAgICAgIHRvOiBkZXN0aW5hdGlvbixcbiAgICB9LFxuICB9KVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBpZiAoIXRoaXMuY29tYmluZWRTdGF0ZS5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICByZXR1cm4geyB3b3JsZEFjdGlvbjogeyB0eXBlOiAnZW5kVHVybicgfSB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbnRlck1vdmVNb2RlID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHVuaXQgJiYgdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSh1bml0KSkge1xuICAgICAgY29uc3QgbmV3TW9kZTogTW9kZSA9IHsgdHlwZTogJ21vdmVVbml0JywgZnJvbTogdW5pdC5sb2NhdGlvbiwgdW5pdElkOiB1bml0LmlkIH1cbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUobmV3TW9kZSkgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW50ZXJBdHRhY2tNb2RlID0gKCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmNvbWJpbmVkU3RhdGUuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHVuaXQgJiYgdGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5QXR0YWNrKHVuaXQpKSB7XG4gICAgICBjb25zdCBuZXdNb2RlOiBNb2RlID0geyB0eXBlOiAnYXR0YWNrJywgZnJvbTogdW5pdC5sb2NhdGlvbiwgdW5pdElkOiB1bml0LmlkIH1cbiAgICAgIGNvbnN0IG5ld0xvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpXG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZSB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21wbGV0ZU1vdmUgPSAodW5pdElkOiBVbml0SWQsIGRlc3RpbmF0aW9uOiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDYW5Nb3ZlVG9IZXgodW5pdCwgZGVzdGluYXRpb24pKVxuICAgICAgcmV0dXJuIHRoaXMubW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21wbGV0ZUF0dGFjayA9ICh1bml0SWQ6IFVuaXRJZCwgdGFyZ2V0SGV4OiBIZXgpOiBPcHRpb248TG9jYWxBY3Rpb25SZXN1bHQ+ID0+IHtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q2FuQXR0YWNrSGV4KGF0dGFja2VyLCB0YXJnZXRIZXgpKVxuICAgICAgcmV0dXJuIHRoaXMuYXR0YWNrSGV4KGF0dGFja2VyLCB0YXJnZXRIZXgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCk6IE9wdGlvbjxMb2NhbEFjdGlvblJlc3VsdD4gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkSGV4ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmIChzZWxlY3RlZEhleCkge1xuICAgICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bmRlZmluZWQpIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAvLyBpZiBzZWxlY3RlZCBoZXggaXMgY2xpY2tlZCwgdG9nZ2xlIHNlbGVjdGlvbiBvZmZcbiAgICAgIHJldHVybiB7IG5ld0xvY2FsR2FtZVN0YXRlOiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldFNlbGVjdGVkSGV4KHVuZGVmaW5lZCkgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4geyBuZXdMb2NhbEdhbWVTdGF0ZTogdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpIH1cbiAgICB9XG4gIH1cblxufSIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgTWF5YmUsIG5vdGhpbmcsIE9wdGlvbiwgdG9NYXliZSwgdG9PcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuXG5leHBvcnQgY2xhc3MgTG9jYWxHYW1lU3RhdGUge1xuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbW9kZTogTW9kZVxuICByZWFkb25seSBzZWxlY3RlZEhleDogT3B0aW9uPEhleD5cbiAgcmVhZG9ubHkgYWN0aW9uT3V0c3RhbmRpbmdXaXRoU2VydmVyOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IoeyBwbGF5ZXJJZCwgbW9kZSwgc2VsZWN0ZWRIZXgsIGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlciA9IGZhbHNlIH06XG4gICAgICAgICAgICAgICAgeyBwbGF5ZXJJZDogUGxheWVySWQsIG1vZGU6IE1vZGUsIHNlbGVjdGVkSGV4PzogT3B0aW9uPEhleD4sIGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcj86IGJvb2xlYW4gfSkge1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICB0aGlzLnNlbGVjdGVkSGV4ID0gc2VsZWN0ZWRIZXhcbiAgICB0aGlzLmFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlciA9IGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlclxuICB9XG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgICAgICAgICAgICAgICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICAgICAgICAgICAgICAgICBtb2RlID0gdGhpcy5tb2RlLFxuICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSGV4ID0gdG9NYXliZSh0aGlzLnNlbGVjdGVkSGV4KSxcbiAgICAgICAgICAgICAgICAgICBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXIgPSB0aGlzLmFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcixcbiAgICAgICAgICAgICAgICAgfTogeyBwbGF5ZXJJZD86IFBsYXllcklkLCBtb2RlPzogTW9kZSwgc2VsZWN0ZWRIZXg/OiBNYXliZTxIZXg+LCBhY3Rpb25PdXRzdGFuZGluZ1dpdGhTZXJ2ZXI/OiBib29sZWFuIH0gPSB7fSk6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgbmV3IExvY2FsR2FtZVN0YXRlKHsgcGxheWVySWQsIG1vZGUsIHNlbGVjdGVkSGV4OiB0b09wdGlvbihzZWxlY3RlZEhleCksIGFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlciB9KVxuXG4gIHB1YmxpYyBzZXRTZWxlY3RlZEhleCA9IChzZWxlY3RlZEhleDogT3B0aW9uPEhleD4pOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHNlbGVjdGVkSGV4OiB0b01heWJlKHNlbGVjdGVkSGV4KSB9KVxuXG4gIHB1YmxpYyBzZXRNb2RlID0gKG1vZGU6IE1vZGUpOiBMb2NhbEdhbWVTdGF0ZSA9PiB0aGlzLmNvcHkoeyBtb2RlIH0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSA9IG5ldyBMb2NhbEdhbWVTdGF0ZSh7XG4gIHBsYXllcklkOiAxLFxuICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG59KVxuXG4iLCJpbXBvcnQgeyBNZW51QnV0dG9uIH0gZnJvbSAnLi4vdWkvbWVudS1idXR0b24nXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnTWFpbk1lbnUnLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVTY2VuZURhdGEge1xuICBtb2RlOiAnc3RhcnQnIHwgJ2pvaW4nXG59XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkXG4gICAgICAudGV4dCgxMDAsIDUwLCAnTGxhbWEgV2FycyAtIE1haW4gTWVudScsIHtcbiAgICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNClcblxuICAgIG5ldyBNZW51QnV0dG9uKHRoaXMsIDEwMCwgMTUwLCAnU3RhcnQgR2FtZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YTogR2FtZVNjZW5lRGF0YSA9IHsgbW9kZTogJ3N0YXJ0JyB9XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnLCBkYXRhKVxuICAgICAgfSxcbiAgICApXG5cbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDI1MCwgJ0pvaW4gR2FtZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGE6IEdhbWVTY2VuZURhdGEgPSB7IG1vZGU6ICdqb2luJyB9XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywgZGF0YSlcbiAgICB9KVxuXG4gIH1cbn1cbiIsImltcG9ydCB7IFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IERSQVdJTkdfT0ZGU0VULCBIRVhfU0laRSwgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBmcm9tUG9pbnQsIGhleENvcm5lcnMgfSBmcm9tICcuL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7XG4gIENvbG91ck51bWJlcixcbiAgREVGQVVMVF9USUxFX0NPTE9VUixcbiAgSE9WRVJfREVGQVVMVF9USUxFX0NPTE9VUixcbiAgSE9WRVJfU0VMRUNURURfVElMRV9DT0xPVVIsXG4gIEhPVkVSX1RBUkdFVEFCTEVfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQ09MT1VSLFxuICBUQVJHRVRBQkxFX1RJTEVfQ09MT1VSLFxufSBmcm9tICcuL2NvbG91cnMnXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCBQb2x5Z29uID0gUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb25cblxudHlwZSBUaWxlU3RhdGUgPSAnZGVmYXVsdCcgfCAnc2VsZWN0ZWQnIHwgJ3RhcmdldGFibGUnXG5cbmV4cG9ydCBjbGFzcyBNYXBEaXNwbGF5T2JqZWN0IHtcblxuICBwcml2YXRlIHJlYWRvbmx5IHNjZW5lOiBQaGFzZXIuU2NlbmVcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGV4UG9seWdvbnM6IE1hcDxTdHJpbmcsIFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uPiA9IG5ldyBNYXA8U3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4oKVxuICBwcml2YXRlIHByZXZpb3VzSG92ZXI/OiBIZXhcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgZm9yIChjb25zdCBoZXggb2YgdGhpcy53b3JsZFN0YXRlLm1hcC5nZXRNYXBIZXhlcygpKVxuICAgICAgdGhpcy5jcmVhdGVIZXgoaGV4KVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIZXggPSAoaGV4OiBIZXgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBwb2x5Z29uQ2VudGVyID0gaGV4Q2VudGVyKGhleClcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5hZGRQb2x5Z29uKHBvbHlnb25DZW50ZXIsIEhFWF9TSVpFKVxuICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRQb2x5Z29uKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uIHtcbiAgICBjb25zdCB2ZXJ0aWNlcyA9IFsuLi5oZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKV1cbiAgICByZXR1cm4gdGhpcy5zY2VuZS5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzKVxuICAgICAgLnNldE9yaWdpbigwLCAwKVxuICAgICAgLnNldFN0cm9rZVN0eWxlKDMsIDB4MDAwMDAwKVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh3b3JsZFN0YXRlOiBXb3JsZFN0YXRlLCBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgZm9yIChjb25zdCBoZXggb2YgdGhpcy53b3JsZFN0YXRlLm1hcC5nZXRNYXBIZXhlcygpKSB7XG4gICAgICB0aGlzLmdldEhleFBvbHlnb24oaGV4KS5zZXRGaWxsU3R5bGUodGhpcy5jYWxjdWxhdGVDb2xvdXIoaGV4KSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEhleFBvbHlnb24gPSAoaGV4OiBIZXgpOiBQb2x5Z29uID0+IHtcbiAgICBjb25zdCBwb2x5Z29uID0gdGhpcy5oZXhQb2x5Z29ucy5nZXQoaGV4LnRvU3RyaW5nKCkpXG4gICAgaWYgKCFwb2x5Z29uKVxuICAgICAgdGhyb3cgYE5vIHBvbHlnb24gZm91bmQgZm9yICR7aGV4fWBcbiAgICByZXR1cm4gcG9seWdvblxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVUaWxlU3RhdGUgPSAoaGV4OiBIZXgpOiBUaWxlU3RhdGUgPT4ge1xuICAgIGNvbnN0IHsgcGxheWVySWQsICBzZWxlY3RlZEhleCwgbW9kZSB9ID0gdGhpcy5sb2NhbEdhbWVTdGF0ZVxuICAgIGlmIChzZWxlY3RlZEhleCAmJiBzZWxlY3RlZEhleC5lcXVhbHMoaGV4KSkge1xuICAgICAgcmV0dXJuICdzZWxlY3RlZCdcbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PSAnbW92ZVVuaXQnKSB7XG4gICAgICBpZiAoaGV4LmlzQWRqYWNlbnRUbyhzZWxlY3RlZEhleCEpICYmICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpKSB7XG4gICAgICAgIHJldHVybiAndGFyZ2V0YWJsZSdcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG1vZGUudHlwZSA9PSAnYXR0YWNrJykge1xuICAgICAgaWYgKGhleC5pc0FkamFjZW50VG8oc2VsZWN0ZWRIZXghKSkge1xuICAgICAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuICAgICAgICBpZiAodW5pdCAmJiB1bml0LnBsYXllcklkICE9IHBsYXllcklkKSB7XG4gICAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAnZGVmYXVsdCdcbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQ29sb3VyID0gKGhleDogSGV4KTogQ29sb3VyTnVtYmVyID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleCkpIHtcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICByZXR1cm4gREVGQVVMVF9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAnc2VsZWN0ZWQnOlxuICAgICAgICByZXR1cm4gU0VMRUNURURfVElMRV9DT0xPVVJcbiAgICAgIGNhc2UgJ3RhcmdldGFibGUnOlxuICAgICAgICByZXR1cm4gVEFSR0VUQUJMRV9USUxFX0NPTE9VUlxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlSG92ZXJDb2xvdXIgPSAoaGV4OiBIZXgpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIHN3aXRjaCAodGhpcy5jYWxjdWxhdGVUaWxlU3RhdGUoaGV4KSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9ERUZBVUxUX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9TRUxFQ1RFRF9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9UQVJHRVRBQkxFX1RJTEVfQ09MT1VSXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHVibGljIGhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludDogUG9pbnQpOiB2b2lkIHtcbiAgICBjb25zdCBoZXggPSBmcm9tUG9pbnQobXVsdGlwbHlQb2ludChzdWJ0cmFjdFBvaW50cyhwb2ludGVyUG9pbnQsIERSQVdJTkdfT0ZGU0VUKSwgMSAvIEhFWF9TSVpFKSlcbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVyICYmIHRoaXMucHJldmlvdXNIb3Zlci5lcXVhbHMoaGV4KSlcbiAgICAgIHJldHVyblxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXIpIHtcbiAgICAgIHRoaXMuZ2V0SGV4UG9seWdvbih0aGlzLnByZXZpb3VzSG92ZXIpLnNldEZpbGxTdHlsZSh0aGlzLmNhbGN1bGF0ZUNvbG91cih0aGlzLnByZXZpb3VzSG92ZXIpKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVyID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKGhleCkuc2V0RmlsbFN0eWxlKHRoaXMuY2FsY3VsYXRlSG92ZXJDb2xvdXIoaGV4KSlcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlciA9IGhleFxuICAgIH1cbiAgfVxuXG59IiwiZXhwb3J0IGludGVyZmFjZSBQb2ludCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5leHBvcnQgY29uc3QgbXVsdGlwbHlQb2ludCA9IChwb2ludDogUG9pbnQsIG46IG51bWJlcik6IFBvaW50ID0+ICh7IHg6IHBvaW50LnggKiBuLCB5OiBwb2ludC55ICogbiB9KVxuXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5cbmV4cG9ydCBjb25zdCBzdWJ0cmFjdFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHtcbiAgeDogcG9pbnQxLnggLSBwb2ludDIueCxcbiAgeTogcG9pbnQxLnkgLSBwb2ludDIueSxcbn0pXG4iLCJpbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBMb2NhbEdhbWVTdGF0ZSB9IGZyb20gJy4vbG9jYWwtZ2FtZS1zdGF0ZSdcbmltcG9ydCB7IGhleFdpZHRoLCBtYXBIZWlnaHQgfSBmcm9tICcuL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IEFDVElPTl9URVhUX0NPTE9VUiwgSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSIH0gZnJvbSAnLi9jb2xvdXJzJ1xuaW1wb3J0IHsgRFJBV0lOR19PRkZTRVQsIEhFWF9TSVpFIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgQ29tYmluZWRTdGF0ZSB9IGZyb20gJy4vY29tYmluZWQtc3RhdGUtbWV0aG9kcydcblxudHlwZSBMb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSAoTG9jYWxBY3Rpb24pID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIFRleHRzRGlzcGxheU9iamVjdCB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIHJlYWRvbmx5IGxvY2FsQWN0aW9uRGlzcGF0Y2hlcjogTG9jYWxBY3Rpb25EaXNwYXRjaGVyXG5cbiAgcHJpdmF0ZSByZWFkb25seSBzZWxlY3Rpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHJlYWRvbmx5IGFjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgYWN0aW9uVGV4dDI6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgZW5kVHVyblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgcmVhZG9ubHkgcGxheWVyVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSByZWFkb25seSBob3VyZ2xhc3M6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuXG4gIHByaXZhdGUgZ2V0IGNvbWJpbmVkU3RhdGUoKTogQ29tYmluZWRTdGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDb21iaW5lZFN0YXRlKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSwgbG9jYWxBY3Rpb25EaXNwYXRjaGVyOiBMb2NhbEFjdGlvbkRpc3BhdGNoZXIpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLndvcmxkU3RhdGUgPSB3b3JsZFN0YXRlXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IGxvY2FsR2FtZVN0YXRlXG4gICAgdGhpcy5sb2NhbEFjdGlvbkRpc3BhdGNoZXIgPSBsb2NhbEFjdGlvbkRpc3BhdGNoZXJcbiAgICBjb25zdCBtYXAgPSB0aGlzLndvcmxkU3RhdGUubWFwXG4gICAgdGhpcy5wbGF5ZXJUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dCgyMywgMjAsICcnKVxuICAgIHRoaXMuaG91cmdsYXNzID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoODc1LCAzMCwgJ2hvdXJnbGFzcycpLnNldFZpc2libGUoZmFsc2UpXG5cbiAgICB0aGlzLnNlbGVjdGlvblRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSwgJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyAyNSwgJycsIHsgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSIH0pLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmFjdGlvblRleHQyID0gdGhpcy5zY2VuZS5hZGQudGV4dChEUkFXSU5HX09GRlNFVC54IC0gaGV4V2lkdGgoSEVYX1NJWkUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnkgKyA1MCwgJycsIHsgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSIH0pLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUFjdGlvblRleHQyQ2xpY2spXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0Mi5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICB0aGlzLmVuZFR1cm5UZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dCg3MDAsIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LCAnJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSkuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VuZFR1cm4nIH0pKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5lbmRUdXJuVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGlvblRleHRDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtb2RlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gICAgc3dpdGNoIChtb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMubG9jYWxBY3Rpb25EaXNwYXRjaGVyKHsgdHlwZTogJ2VudGVyTW92ZU1vZGUnIH0pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdhYm9ydCcgfSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDJDbGljayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlLnR5cGUgPT09ICdzZWxlY3RIZXgnKSB7XG4gICAgICB0aGlzLmxvY2FsQWN0aW9uRGlzcGF0Y2hlcih7IHR5cGU6ICdlbnRlckF0dGFja01vZGUnIH0pXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhhc0NsaWNrSGFuZGxlckZvciA9IChwb2ludDogUG9pbnQpOiBib29sZWFuID0+IHtcbiAgICBmb3IgKGNvbnN0IG9iaiBvZiBbdGhpcy5lbmRUdXJuVGV4dCwgdGhpcy5hY3Rpb25UZXh0LCB0aGlzLmFjdGlvblRleHQyXSlcbiAgICAgIGlmIChvYmouZ2V0Qm91bmRzKCkuY29udGFpbnMocG9pbnQueCwgcG9pbnQueSkpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBwdWJsaWMgc3luY1NjZW5lID0gKHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSk6IHZvaWQgPT4ge1xuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICB0aGlzLmhvdXJnbGFzcy5zZXRWaXNpYmxlKGxvY2FsR2FtZVN0YXRlLmFjdGlvbk91dHN0YW5kaW5nV2l0aFNlcnZlcilcbiAgICB0aGlzLnBsYXllclRleHQuc2V0VGV4dChgUGxheWVyICR7dGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZH0gLSBUdXJuICR7dGhpcy53b3JsZFN0YXRlLnR1cm59YClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJycpXG4gICAgY29uc3QgbW9kZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLnN5bmNTZWxlY3RIZXhNb2RlVGV4dCgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHRoaXMuc3luY01vdmVVbml0TW9kZVRleHQobW9kZS51bml0SWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnN5bmNBdHRhY2tNb2RlVGV4dChtb2RlLnVuaXRJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihtb2RlKVxuICAgIH1cbiAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLmdldEN1cnJlbnRQbGF5ZXIoKS5lbmRlZFR1cm4pIHtcbiAgICAgIHRoaXMuZW5kVHVyblRleHQuc2V0VGV4dCgnV2FpdGluZyBmb3IgbmV4dCB0dXJuLi4uJylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdFbmQgVHVybiAoU2hpZnQgKyBFbnRlciknKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3luY0F0dGFja01vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHVuaXQgdG8gYXR0YWNrIChvciBFU0MgdG8gY2FuY2VsKScpXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRVbml0ID0gdGhpcy5jb21iaW5lZFN0YXRlLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHNlbGVjdGVkVW5pdCkpXG4gICAgICBpZiAodGhpcy5jb21iaW5lZFN0YXRlLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKVxuICAgICAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMuY29tYmluZWRTdGF0ZS51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayhzZWxlY3RlZFVuaXQpKVxuICAgICAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJ0F0dGFjayAoYSknKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGVzY3JpYmVVbml0ID0gKHVuaXQ6IFVuaXQpOiBzdHJpbmcgPT5cbiAgICBgJHt1bml0Lm5hbWV9IC0gTGxhbWEgd2FycmlvciAtIEhQICR7dW5pdC5oaXRQb2ludHMuY3VycmVudH0vJHt1bml0LmhpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke3VuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnR9LyR7dW5pdC5hY3Rpb25Qb2ludHMubWF4fWBcblxufSIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSEVBTFRIX0JPUkRFUl9DT0xPVVIsIEhFQUxUSF9FTVBUWV9DT0xPVVIsIEhFQUxUSF9GVUxMX0NPTE9VUiwgUExBWUVSXzFfVElOVCwgUExBWUVSXzJfVElOVCB9IGZyb20gJy4vY29sb3VycydcbmltcG9ydCB7IGFkZFBvaW50cywgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmNvbnN0IEhFQUxUSF9CQVJfV0lEVEggPSA1MFxuY29uc3QgSEVBTFRIX0JBUl9IRUlHSFQgPSAxMlxuY29uc3QgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTID0gMlxuY29uc3QgSU1BR0VfT0ZGU0VUID0geyB4OiAwLCB5OiA0IH1cbmNvbnN0IEhFQUxUSF9CQVJfT0ZGU0VUID0geyB4OiAtMjUsIHk6IC00MCB9XG5cbmV4cG9ydCBjbGFzcyBVbml0RGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHVuaXQ6IFVuaXRcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoQmFyR3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljc1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgdGhpcy5pbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAwLCAnbGxhbWEnKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KHRoaXMudW5pdC5wbGF5ZXJJZCA9PSAxID8gUExBWUVSXzFfVElOVCA6IFBMQVlFUl8yX1RJTlQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcyA9IHNjZW5lLmFkZC5ncmFwaGljcygpXG4gIH1cblxuICBwcml2YXRlIGdldEhlYWx0aEJhclBvc2l0aW9uID0gKHBvaW50OiBQb2ludCk6IFBvaW50ID0+IGFkZFBvaW50cyhwb2ludCwgSEVBTFRIX0JBUl9PRkZTRVQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICh1bml0OiBVbml0KTogdm9pZCA9PiB7XG4gICAgYXNzZXJ0KHVuaXQuaWQgPT0gdGhpcy51bml0LmlkKVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICBjb25zdCB1bml0UG9pbnQgPSBoZXhDZW50ZXIodGhpcy51bml0LmxvY2F0aW9uKVxuICAgIHRoaXMuaW1hZ2Uuc2V0UG9zaXRpb24odW5pdFBvaW50LnggKyBJTUFHRV9PRkZTRVQueCwgdW5pdFBvaW50LnkgKyBJTUFHRV9PRkZTRVQueSlcbiAgICB0aGlzLnN5bmNIZWFsdGhCYXIodW5pdFBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jSGVhbHRoQmFyID0gKHVuaXRQb2ludDogUG9pbnQpID0+IHtcbiAgICBjb25zdCBoZWFsdGhCYXJQb3NpdGlvbiA9IHRoaXMuZ2V0SGVhbHRoQmFyUG9zaXRpb24odW5pdFBvaW50KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3Muc2V0UG9zaXRpb24oaGVhbHRoQmFyUG9zaXRpb24ueCwgaGVhbHRoQmFyUG9zaXRpb24ueSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmNsZWFyKClcblxuICAgIC8vIERyYXcgYm9yZGVyXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IEhFQUxUSF9CQVJfV0lEVEggLSAyICogSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTXG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBIRUFMVEhfQkFSX0hFSUdIVCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfQk9SREVSX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KDAsIDAsIEhFQUxUSF9CQVJfV0lEVEgsIEhFQUxUSF9CQVJfSEVJR0hUKVxuXG4gICAgLy8gRHJhdyBlbXB0eSBiYWNrZ3JvdW5kXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0VNUFRZX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcblxuICAgIC8vIEZpbGwgaW4gYmFyXG4gICAgY29uc3QgeyBjdXJyZW50LCBtYXggfSA9IHRoaXMudW5pdC5oaXRQb2ludHNcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRlVMTF9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdChIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgaW5uZXJXaWR0aCAqIGN1cnJlbnQgLyBtYXgsIGlubmVySGVpZ2h0KVxuICB9XG5cbiAgcHVibGljIG1vdmUgPSAoZnJvbTogSGV4LCB0bzogSGV4KSA9PiB7XG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGF0dGFjayA9IChmcm9tOiBIZXgsIHRvOiBIZXgpID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZGVzdHJveSgpXG4gICAgdGhpcy5pbWFnZS5kZXN0cm95KClcbiAgfVxufVxuXG50eXBlIFR3ZWVuWFkgPSB7IHg6IHsgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyIH0sIHk6IHsgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyIH0gfVxuXG5jb25zdCBjYWxjdWxhdGVUd2VlblhZID0gKGZyb206IFBvaW50LCB0bzogUG9pbnQsIG9mZnNldDogUG9pbnQpOiBUd2VlblhZID0+XG4gICh7XG4gICAgeDoge1xuICAgICAgZnJvbTogZnJvbS54ICsgb2Zmc2V0LngsXG4gICAgICB0bzogdG8ueCArIG9mZnNldC54LFxuICAgIH0sXG4gICAgeToge1xuICAgICAgZnJvbTogZnJvbS55ICsgb2Zmc2V0LnksXG4gICAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICAgIH0sXG4gIH0pXG5cbiIsImltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUsIFBsYXllcklkLCBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBBdHRhY2tXb3JsZEFjdGlvbiwgTW92ZVVuaXRXb3JsZEFjdGlvbiwgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFVuaXRNb3ZlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5pbXBvcnQgeyBVbml0IH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcblxuZXhwb3J0IHR5cGUgV29ybGRFdmVudExpc3RlbmVyID0gKGV2ZW50OiBXb3JsZEV2ZW50KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICBwdWJsaWMgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcikgPT4gdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcilcblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpXG4gICAgICBsaXN0ZW5lcihldmVudClcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IFdvcmxkQWN0aW9uKTogdm9pZCA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVBdHRhY2socGxheWVySWQsIGFjdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVNb3ZlVW5pdChwbGF5ZXJJZCwgYWN0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnZW5kVHVybic6XG4gICAgICAgIHRoaXMuaGFuZGxlRW5kVHVybihwbGF5ZXJJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcihhY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBdHRhY2sgPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IEF0dGFja1dvcmxkQWN0aW9uKSA9PiB7XG4gICAgY29uc3QgYXR0YWNrZXJJZCA9IGFjdGlvbi5hdHRhY2tlci51bml0SWRcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXJJZClcbiAgICBpZiAoIWF0dGFja2VyKVxuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VySWR9YFxuICAgIGlmIChhdHRhY2tlci5wbGF5ZXJJZCAhPSBwbGF5ZXJJZClcbiAgICAgIHRocm93IGBDYW5ub3QgY29udHJvbCBhbm90aGVyIHBsYXllcidzIHVuaXQ6ICR7YXR0YWNrZXIuaWR9YFxuICAgIGlmIChhdHRhY2tlci5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpXG4gICAgICB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIGF0dGFja2BcbiAgICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uYXR0YWNrZXIubG9jYXRpb24pKVxuICAgICAgdGhyb3cgYEF0dGFja2VyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGNvbnN0IGRlZmVuZGVySWQgPSBhY3Rpb24uZGVmZW5kZXIudW5pdElkXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVySWQpXG4gICAgaWYgKCFkZWZlbmRlcilcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlcklkfWBcbiAgICBpZiAoZGVmZW5kZXIucGxheWVySWQgPT0gcGxheWVySWQpXG4gICAgICB0aHJvdyBgQ2Fubm90IGF0dGFjayBvd24gdW5pdGBcbiAgICBpZiAoIWRlZmVuZGVyLmxvY2F0aW9uLmVxdWFscyhhY3Rpb24uZGVmZW5kZXIubG9jYXRpb24pKVxuICAgICAgdGhyb3cgYERlZmVuZGVyIG5vdCBpbiBleHBlY3RlZCBsb2NhdGlvbmBcblxuICAgIGlmICghYXR0YWNrZXIubG9jYXRpb24uaXNBZGphY2VudFRvKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgYXR0YWNrIGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuXG4gICAgY29uc3QgYXR0YWNrZXJEYW1hZ2UgPSBNYXRoLm1pbihhdHRhY2tlci5oaXRQb2ludHMuY3VycmVudCwgMTApXG4gICAgY29uc3QgZGVmZW5kZXJEYW1hZ2UgPSBNYXRoLm1pbihkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCwgMjApXG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLm1ha2VDb21iYXRXb3JsZEV2ZW50KGF0dGFja2VyLCBhdHRhY2tlckRhbWFnZSwgZGVmZW5kZXIsIGRlZmVuZGVyRGFtYWdlKVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBldmVudClcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUNvbWJhdFdvcmxkRXZlbnQgPSAoYXR0YWNrZXI6IFVuaXQsIGF0dGFja2VyRGFtYWdlOiBudW1iZXIsIGRlZmVuZGVyOiBVbml0LCBkZWZlbmRlckRhbWFnZTogbnVtYmVyKTogQ29tYmF0V29ybGRFdmVudCA9PiAoe1xuICAgIHR5cGU6ICdjb21iYXQnLFxuICAgIGF0dGFja2VyOiB7XG4gICAgICBwbGF5ZXJJZDogYXR0YWNrZXIucGxheWVySWQsXG4gICAgICB1bml0SWQ6IGF0dGFja2VyLmlkLFxuICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgZGFtYWdlOiBhdHRhY2tlckRhbWFnZSxcbiAgICAgIGtpbGxlZDogYXR0YWNrZXIuaGl0UG9pbnRzLmN1cnJlbnQgPT0gYXR0YWNrZXJEYW1hZ2UsXG4gICAgfSxcbiAgICBkZWZlbmRlcjoge1xuICAgICAgcGxheWVySWQ6IGRlZmVuZGVyLnBsYXllcklkLFxuICAgICAgdW5pdElkOiBkZWZlbmRlci5pZCxcbiAgICAgIGxvY2F0aW9uOiBkZWZlbmRlci5sb2NhdGlvbixcbiAgICAgIGRhbWFnZTogZGVmZW5kZXJEYW1hZ2UsXG4gICAgICBraWxsZWQ6IGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50ID09IGRlZmVuZGVyRGFtYWdlLFxuICAgIH0sXG4gICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gIH0pXG5cbiAgcHJpdmF0ZSBoYW5kbGVNb3ZlVW5pdCA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogTW92ZVVuaXRXb3JsZEFjdGlvbikgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCB0byB9ID0gYWN0aW9uXG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdClcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIGNvbnN0IGZyb20gPSB1bml0LmxvY2F0aW9uXG4gICAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpXG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBvdXQtb2YtYm91bmRzIGhleCAke3RvfWBcbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bykpXG4gICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YFxuICAgIGlmICh1bml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgMSlcbiAgICAgIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gbW92ZWBcbiAgICBjb25zdCBldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCA9IHtcbiAgICAgIHR5cGU6ICd1bml0TW92ZWQnLFxuICAgICAgcGxheWVySWQ6IHBsYXllcklkLFxuICAgICAgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IDEsXG4gICAgICB1bml0SWQsXG4gICAgICBmcm9tLFxuICAgICAgdG8sXG4gICAgfVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBldmVudClcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybihwbGF5ZXJJZDogUGxheWVySWQpOiB2b2lkIHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgICBpZiAoIXBsYXllcilcbiAgICAgIHRocm93IGBObyBwbGF5ZXIgd2l0aCBJRCAke3BsYXllcklkfWBcbiAgICBpZiAocGxheWVyLmVuZGVkVHVybilcbiAgICAgIHRocm93IGBQbGF5ZXIgaGFzIGFscmVhZHkgZW5kZWQgdGhlaXIgdHVybmBcbiAgICBsZXQgcGxheWVyc1lldFRvRW5kVGhlaXJUdXJuID0gdGhpcy53b3JsZFN0YXRlLnBsYXllcnMuZmlsdGVyKHBsYXllciA9PiAhcGxheWVyLmVuZGVkVHVybikubWFwKHBsYXllciA9PiBwbGF5ZXIuaWQpXG4gICAgbGV0IHdob2xlVHVybkVuZGVkID0gUi5lcXVhbHMocGxheWVyc1lldFRvRW5kVGhlaXJUdXJuLCBbcGxheWVySWRdKVxuICAgIGNvbnN0IGV2ZW50OiBXb3JsZEV2ZW50ID0gd2hvbGVUdXJuRW5kZWQgPyB7IHR5cGU6ICduZXdUdXJuJyB9IDogeyB0eXBlOiAncGxheWVyRW5kZWRUdXJuJywgcGxheWVySWQgfVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBldmVudClcbiAgICB0aGlzLm5vdGlmeUxpc3RlbmVycyhldmVudClcbiAgfVxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5jb25zdCBwYWRkaW5nID0gMTA7XG5jb25zdCBtaW5pbXVtV2lkdGggPSAyMDA7XG5jb25zdCBtaW5pbXVtSGVpZ2h0ID0gNTA7XG5cbmV4cG9ydCBjbGFzcyBNZW51QnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB7XG4gIHByaXZhdGUgbGFiZWw6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s/OiAoKSA9PiB2b2lkKSB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcbiAgICB0aGlzLnNldE9yaWdpbigwLCAwKTtcblxuICAgIHRoaXMubGFiZWwgPSBzY2VuZS5hZGRcbiAgICAgIC50ZXh0KHggKyBwYWRkaW5nLCB5ICsgcGFkZGluZywgdGV4dClcbiAgICAgIC5zZXRGb250U2l6ZSgxOClcbiAgICAgIC5zZXRBbGlnbignY2VudGVyJyk7XG5cbiAgICBjb25zdCBsYWJlbFdpZHRoID0gdGhpcy5sYWJlbC53aWR0aCArIHBhZGRpbmc7XG4gICAgY29uc3QgbGFiZWxIZWlnaHQgPSB0aGlzLmxhYmVsLmhlaWdodCArIHBhZGRpbmc7XG5cbiAgICB0aGlzLndpZHRoID0gbGFiZWxXaWR0aCA+PSBtaW5pbXVtV2lkdGggPyBsYWJlbFdpZHRoIDogbWluaW11bVdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gbGFiZWxIZWlnaHQgPj0gbWluaW11bUhlaWdodCA/IGxhYmVsSGVpZ2h0IDogbWluaW11bUhlaWdodDtcblxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcbiAgICB9XG5cbiAgICB0aGlzLmVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xuICAgIHRoaXMubGFiZWwuc2V0Q29sb3IoJyMwMDAwMDAnKTtcbiAgICB0aGlzLnNldEZpbGxTdHlsZSgweDg4ODg4OCk7XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjRkZGRkZGJyk7XG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjQkJCQkJCJyk7XG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg0NDQ0NDQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuLi93b3JsZC9oZXgnXG5cbmV4cG9ydCBjb25zdCBzZXJpYWxpc2VUb0pzb24gPSAodmFsdWU6IGFueSk6IGFueSA9PiB7XG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICBjYXNlICdudW1iZXInOlxuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICByZXR1cm4gdmFsdWVcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5tYXAoc2VyaWFsaXNlVG9Kc29uKVxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhleCkge1xuICAgICAgICByZXR1cm4geyAuLi52YWx1ZS50b0pzb24oKSwgX2xsYW1hQ2xhc3M6ICdIZXgnIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld09iamVjdCA9IHt9XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcbiAgICAgICAgICBuZXdPYmplY3Rba2V5XSA9IHNlcmlhbGlzZVRvSnNvbih2YWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld09iamVjdFxuICAgICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZXNlcmlhbGlzZUZyb21Kc29uID0gKHZhbHVlOiBhbnkpOiBhbnkgPT4ge1xuICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdib29sZWFuJzpcbiAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubWFwKGRlc2VyaWFsaXNlRnJvbUpzb24pXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLl9sbGFtYUNsYXNzID09ICdIZXgnKSB7XG4gICAgICAgIHJldHVybiBIZXguZnJvbUpzb24odmFsdWUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdPYmplY3QgPSB7fVxuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModmFsdWUpKSB7XG4gICAgICAgICAgbmV3T2JqZWN0W2tleV0gPSBkZXNlcmlhbGlzZUZyb21Kc29uKHZhbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3T2JqZWN0XG4gICAgICB9XG4gIH1cbn0iLCJleHBvcnQgdHlwZSBPcHRpb248VD4gPSBUIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVzdDxUPiB7XG4gIHR5cGU6ICdqdXN0J1xuICBpdGVtOiBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aGluZyB7XG4gIHR5cGU6ICdub3RoaW5nJ1xufVxuXG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IEp1c3Q8VD4gfCBOb3RoaW5nXG5cbmV4cG9ydCBjb25zdCB0b01heWJlID0gPFQ+KG9wdGlvbjogT3B0aW9uPFQ+KTogTWF5YmU8VD4gPT5cbiAgb3B0aW9uID09IHVuZGVmaW5lZCA/IG5vdGhpbmcgOiBqdXN0KG9wdGlvbilcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pIiwiZXhwb3J0IGNsYXNzIFVucmVhY2hhYmxlQ2FzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbmV2ZXIpIHtcbiAgICBzdXBlcihgVW5yZWFjaGFibGUgY2FzZTogJHt2YWx1ZX1gKVxuICB9XG59XG4iLCJpbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IEhleCwgSGV4VmVjdG9yIH0gZnJvbSAnLi9oZXgnXG5cbmV4cG9ydCBlbnVtIEhleERpcmVjdGlvbiB7XG4gIEVBU1QgPSAnRUFTVCcsXG4gIFdFU1QgPSAnV0VTVCcsXG4gIE5PUlRIX0VBU1QgPSAnTk9SVEhfRUFTVCcsXG4gIFNPVVRIX0VBU1QgPSAnU09VVEhfRUFTVCcsXG4gIE5PUlRIX1dFU1QgPSAnTk9SVEhfV0VTVCcsXG4gIFNPVVRIX1dFU1QgPSAnU09VVEhfV0VTVCcsXG59XG5cbmV4cG9ydCBjb25zdCBIRVhfRElSRUNUSU9OUyA9IFtcbiAgSGV4RGlyZWN0aW9uLkVBU1QsXG4gIEhleERpcmVjdGlvbi5TT1VUSF9FQVNULFxuICBIZXhEaXJlY3Rpb24uU09VVEhfV0VTVCxcbiAgSGV4RGlyZWN0aW9uLldFU1QsXG4gIEhleERpcmVjdGlvbi5OT1JUSF9XRVNULFxuICBIZXhEaXJlY3Rpb24uTk9SVEhfRUFTVCxcbl1cblxuZXhwb3J0IGNvbnN0IGdldFVuaXRWZWN0b3IgPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXhWZWN0b3IgPT4ge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgSGV4RGlyZWN0aW9uLkVBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgxLCAwKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLldFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgtMSwgMClcbiAgICBjYXNlIEhleERpcmVjdGlvbi5OT1JUSF9FQVNUOlxuICAgICAgcmV0dXJuIG5ldyBIZXgoMSwgLTEpXG4gICAgY2FzZSBIZXhEaXJlY3Rpb24uTk9SVEhfV0VTVDpcbiAgICAgIHJldHVybiBuZXcgSGV4KDAsIC0xKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLlNPVVRIX0VBU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgwLCAxKVxuICAgIGNhc2UgSGV4RGlyZWN0aW9uLlNPVVRIX1dFU1Q6XG4gICAgICByZXR1cm4gbmV3IEhleCgtMSwgMSlcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGRpcmVjdGlvbilcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IGdldFVuaXRWZWN0b3IsIEhleERpcmVjdGlvbiB9IGZyb20gJy4vaGV4LWRpcmVjdGlvbidcblxuZXhwb3J0IGNsYXNzIEhleCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBnZXQgeigpOiBudW1iZXIge1xuICAgIHJldHVybiAtdGhpcy54IC0gdGhpcy55XG4gIH1cblxuICBwdWJsaWMgcGx1cyA9ICh0aGF0OiBIZXgpID0+IG5ldyBIZXgodGhpcy54ICsgdGhhdC54LCB0aGlzLnkgKyB0aGF0LnkpXG5cbiAgcHVibGljIG5laWdoYm91cnMgPSAoKTogSGV4W10gPT4gSGV4Lk5FSUdIQk9VUlMubWFwKHRoaXMucGx1cylcblxuICBwdWJsaWMgaXNBZGphY2VudFRvID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gUi5pbmNsdWRlcyh0aGF0LCB0aGlzLm5laWdoYm91cnMoKSlcblxuICBwcml2YXRlIHN0YXRpYyBORUlHSEJPVVJTOiBIZXhbXSA9IFtcbiAgICBuZXcgSGV4KDAsIDEpLFxuICAgIG5ldyBIZXgoMSwgMCksXG4gICAgbmV3IEhleCgxLCAtMSksXG4gICAgbmV3IEhleCgwLCAtMSksXG4gICAgbmV3IEhleCgtMSwgMCksXG4gICAgbmV3IEhleCgtMSwgMSksXG4gIF1cblxuICBwdWJsaWMgZXF1YWxzID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gdGhpcy54ID09IHRoYXQueCAmJiB0aGlzLnkgPT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcblxuICBwdWJsaWMgZ28gPSAoZGlyZWN0aW9uOiBIZXhEaXJlY3Rpb24pOiBIZXggPT4gdGhpcy5wbHVzKGdldFVuaXRWZWN0b3IoZGlyZWN0aW9uKSlcblxuICBwdWJsaWMgdG9Kc29uID0gKCk6IG9iamVjdCA9PiAoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogSGV4ID0+IG5ldyBIZXgoanNvbi54LCBqc29uLnkpXG5cbn1cblxuZXhwb3J0IHR5cGUgSGV4VmVjdG9yID0gSGV4XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuL3dvcmxkLXN0YXRlJ1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uUG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXIsIG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyByZWR1Y2UgPSAocG9pbnRzOiBudW1iZXIpOiBBY3Rpb25Qb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXIsIG1heD86IG51bWJlciB9ID0ge30pOiBBY3Rpb25Qb2ludHMgPT5cbiAgICBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHJlZnJlc2ggPSAoKTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiB0aGlzLm1heCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogb2JqZWN0ID0+ICh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCwgbWF4OiB0aGlzLm1heCB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogQWN0aW9uUG9pbnRzID0+IG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50OiBqc29uLmN1cnJlbnQsIG1heDoganNvbi5tYXggfSlcblxufVxuXG5leHBvcnQgY2xhc3MgSGl0UG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXIsIG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBIaXRQb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXIsIG1heD86IG51bWJlciB9ID0ge30pOiBIaXRQb2ludHMgPT5cbiAgICBuZXcgSGl0UG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBvYmplY3QgPT4gKHsgY3VycmVudDogdGhpcy5jdXJyZW50LCBtYXg6IHRoaXMubWF4IH0pXG5cbiAgcHVibGljIHN0YXRpYyBmcm9tSnNvbiA9IChqc29uOiBhbnkpOiBIaXRQb2ludHMgPT4gbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQ6IGpzb24uY3VycmVudCwgbWF4OiBqc29uLm1heCB9KVxuXG59XG5cbmV4cG9ydCBjbGFzcyBVbml0IHtcbiAgcmVhZG9ubHkgaWQ6IFVuaXRJZFxuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGxvY2F0aW9uOiBIZXhcbiAgcmVhZG9ubHkgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgcmVhZG9ubHkgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgICAgICAgICAgaWQsIHBsYXllcklkLCBuYW1lLCBsb2NhdGlvbiwgaGl0UG9pbnRzLCBhY3Rpb25Qb2ludHMsXG4gICAgICAgICAgICAgIH06IHsgaWQ6IFVuaXRJZCwgcGxheWVySWQ6IFBsYXllcklkLCBuYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBIZXgsIGhpdFBvaW50czogSGl0UG9pbnRzLCBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cyB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzXG4gICAgdGhpcy5hY3Rpb25Qb2ludHMgPSBhY3Rpb25Qb2ludHNcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBVbml0ID0+IHRoaXMuY29weSh7IGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMuZGFtYWdlKHBvaW50cykgfSlcblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgICAgICAgICAgICAgICAgaWQgPSB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICBoaXRQb2ludHMgPSB0aGlzLmhpdFBvaW50cyxcbiAgICAgICAgICAgICAgICAgICBhY3Rpb25Qb2ludHMgPSB0aGlzLmFjdGlvblBvaW50cyxcbiAgICAgICAgICAgICAgICAgfTogeyBpZD86IFVuaXRJZCwgcGxheWVySWQ/OiBQbGF5ZXJJZCwgbmFtZT86IHN0cmluZywgbG9jYXRpb24/OiBIZXgsIGhpdFBvaW50cz86IEhpdFBvaW50cywgYWN0aW9uUG9pbnRzPzogQWN0aW9uUG9pbnRzIH0gPSB7fSk6IFVuaXQgPT5cbiAgICBuZXcgVW5pdCh7IGlkLCBwbGF5ZXJJZCwgbmFtZSwgbG9jYXRpb24sIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0pXG5cbiAgcHVibGljIG1vdmUgPSAobG9jYXRpb246IEhleCwgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBsb2NhdGlvbiwgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZHVjZUFjdGlvblBvaW50cyA9IChhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWZyZXNoQWN0aW9uUG9pbnRzID0gKCk6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZnJlc2goKSB9KVxuXG4gIHB1YmxpYyB0b0pzb24gPSAoKTogb2JqZWN0ID0+ICh7XG4gICAgaWQ6IHRoaXMuaWQsXG4gICAgcGxheWVySWQ6IHRoaXMucGxheWVySWQsXG4gICAgbmFtZTogdGhpcy5uYW1lLFxuICAgIGxvY2F0aW9uOiB0aGlzLmxvY2F0aW9uLnRvSnNvbigpLFxuICAgIGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMudG9Kc29uKCksXG4gICAgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy50b0pzb24oKSxcbiAgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFVuaXQgPT4gbmV3IFVuaXQoe1xuICAgIGlkOiBqc29uLmlkLFxuICAgIHBsYXllcklkOiBqc29uLnBsYXllcklkLFxuICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICBsb2NhdGlvbjogSGV4LmZyb21Kc29uKGpzb24ubG9jYXRpb24pLFxuICAgIGhpdFBvaW50czogSGl0UG9pbnRzLmZyb21Kc29uKGpzb24uaGl0UG9pbnRzKSxcbiAgICBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cy5mcm9tSnNvbihqc29uLmFjdGlvblBvaW50cyksXG4gIH0pXG5cbn1cblxuZXhwb3J0IHR5cGUgVW5pdElkID0gbnVtYmVyIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBDb21iYXRXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckVuZGVkVHVybihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnbmV3VHVybic6XG4gICAgICByZXR1cm4gaGFuZGxlTmV3VHVybihzdGF0ZSlcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVVuaXRNb3ZlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB1bml0SWQsIHBsYXllcklkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpXG4gICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICBpZiAoIXN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSlcbiAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICBjb25zdCB1bml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgaWYgKCF1bml0KVxuICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICBpZiAoc3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKGZyb20pPy5pZCAhPSB1bml0SWQpXG4gICAgdGhyb3cgYEludmFsaWQgZnJvbSBsb2NhdGlvbiBmb3IgdW5pdCBtb3ZlbWVudGBcbiAgaWYgKHN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bykpXG4gICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgaWYgKHVuaXQucGxheWVySWQgIT0gcGxheWVySWQpXG4gICAgdGhyb3cgYEludmFsaWQgYXR0ZW1wdCB0byBtb3ZlIHVuaXQgb2YgYW5vdGhlciBwbGF5ZXJgXG4gIGlmICh1bml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuICByZXR1cm4gc3RhdGUucmVwbGFjZVVuaXQodW5pdC5pZCwgdW5pdC5tb3ZlKHRvLCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG59XG5cbmNvbnN0IGhhbmRsZUNvbWJhdCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG5cbiAgY29uc3QgYXR0YWNrZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VyLnVuaXRJZClcbiAgaWYgKCFhdHRhY2tlclVuaXQpXG4gICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VyLnVuaXRJZH1gXG4gIGlmICghYXR0YWNrZXJVbml0LmxvY2F0aW9uLmVxdWFscyhhdHRhY2tlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGF0dGFja2VyLiBBdHRhY2tpbmcgdW5pdCAke2F0dGFja2VyVW5pdC5pZH0gaXMgYXQgbG9jYXRpb24gJHthdHRhY2tlclVuaXQubG9jYXRpb259LCBidXQgd2FzIGV4cGVjdGVkIHRvIGJlIGF0ICR7YXR0YWNrZXIubG9jYXRpb259YFxuXG4gIGNvbnN0IGRlZmVuZGVyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChkZWZlbmRlci51bml0SWQpXG4gIGlmICghZGVmZW5kZXJVbml0KVxuICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlci51bml0SWR9YFxuICBpZiAoIWRlZmVuZGVyVW5pdC5sb2NhdGlvbi5lcXVhbHMoZGVmZW5kZXIubG9jYXRpb24pKVxuICAgIHRocm93IGBJbnZhbGlkIGxvY2F0aW9uIGZvciBkZWZlbmRlci4gRGVmZW5kaW5nIHVuaXQgJHtkZWZlbmRlclVuaXQuaWR9IGlzIGF0IGxvY2F0aW9uICR7ZGVmZW5kZXJVbml0LmxvY2F0aW9ufSwgYnV0IHdhcyBleHBlY3RlZCB0byBiZSBhdCAke2RlZmVuZGVyLmxvY2F0aW9ufWBcblxuICBpZiAoYXR0YWNrZXJVbml0LnBsYXllcklkID09IGRlZmVuZGVyVW5pdC5wbGF5ZXJJZClcbiAgICB0aHJvdyBgSW52YWxpZCBjb21iYXQgd2l0aCBzZWxmYFxuICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmlzQWRqYWNlbnRUbyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgY29tYmF0IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuICBpZiAoYXR0YWNrZXJVbml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlXG5cbiAgaWYgKGF0dGFja2VyLmtpbGxlZClcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoYXR0YWNrZXJVbml0LmlkKVxuICBlbHNlXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChhdHRhY2tlclVuaXQuaWQsIGF0dGFja2VyVW5pdC5kYW1hZ2UoYXR0YWNrZXIuZGFtYWdlKS5yZWR1Y2VBY3Rpb25Qb2ludHMoZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpKVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGRlZmVuZGVyVW5pdC5pZClcbiAgZWxzZVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoZGVmZW5kZXJVbml0LmlkLCBkZWZlbmRlclVuaXQuZGFtYWdlKGRlZmVuZGVyLmRhbWFnZSkpXG5cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG5cbmNvbnN0IGhhbmRsZVBsYXllckVuZGVkVHVybiA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFBsYXllckVuZGVkVHVybldvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBwbGF5ZXJJZCB9ID0gZXZlbnRcbiAgY29uc3QgcGxheWVyID0gc3RhdGUuZmluZFBsYXllcihwbGF5ZXJJZClcbiAgaWYgKCFwbGF5ZXIpXG4gICAgdGhyb3cgYE5vIHBsYXllciBmb3VuZCB3aXRoIElEICR7cGxheWVySWR9YFxuICByZXR1cm4gc3RhdGUucmVwbGFjZVBsYXllcihwbGF5ZXJJZCwgcGxheWVyLmNvcHkoeyBlbmRlZFR1cm46IHRydWUgfSkpXG59XG5cbmNvbnN0IGhhbmRsZU5ld1R1cm4gPSAoc3RhdGU6IFdvcmxkU3RhdGUpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLmNvcHkoe1xuICAgIHR1cm46IHN0YXRlLnR1cm4gKyAxLFxuICAgIHVuaXRzOiBzdGF0ZS51bml0cy5tYXAodW5pdCA9PiB1bml0LnJlZnJlc2hBY3Rpb25Qb2ludHMoKSksXG4gICAgcGxheWVyczogc3RhdGUucGxheWVycy5tYXAocGxheWVyID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiBmYWxzZSB9KSksXG4gIH0pXG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgV29ybGRNYXAge1xuICByZWFkb25seSB3aWR0aDogbnVtYmVyXG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyB3aWR0aCwgaGVpZ2h0IH06IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIGFzc2VydCh3aWR0aCA+IDApXG4gICAgYXNzZXJ0KGhlaWdodCA+IDApXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyBpc0luQm91bmRzID0gKGhleDogSGV4KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgcSA9IGhleC54ICsgTWF0aC5mbG9vcihoZXgueSAvIDIpXG4gICAgcmV0dXJuIDAgPD0gcSAmJiBxIDwgdGhpcy53aWR0aCAmJiAwIDw9IGhleC55ICYmIGhleC55IDwgdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyogZ2V0TWFwSGV4ZXMoKTogSXRlcmFibGVJdGVyYXRvcjxIZXg+IHtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuaGVpZ2h0OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy53aWR0aDsgYysrKSB7XG4gICAgICAgIGNvbnN0IHggPSAtTWF0aC5mbG9vcihyIC8gMikgKyBjXG4gICAgICAgIGNvbnN0IGhleCA9IG5ldyBIZXgoeCwgcilcbiAgICAgICAgeWllbGQgaGV4XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBvYmplY3QgPT4gKHsgd2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHQgfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFdvcmxkTWFwID0+IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiBqc29uLndpZHRoLCBoZWlnaHQ6IGpzb24uaGVpZ2h0IH0pXG5cbn0iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzLCBIaXRQb2ludHMsIFVuaXQsIFVuaXRJZCB9IGZyb20gJy4vdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICByZWFkb25seSBpZDogUGxheWVySWRcbiAgcmVhZG9ubHkgZW5kZWRUdXJuOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IoeyBpZCwgZW5kZWRUdXJuIH06IHsgaWQ6IFBsYXllcklkLCBlbmRlZFR1cm46IGJvb2xlYW4gfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuZW5kZWRUdXJuID0gZW5kZWRUdXJuXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7IGlkID0gdGhpcy5pZCwgZW5kZWRUdXJuID0gdGhpcy5lbmRlZFR1cm4gfTogeyBpZD86IFBsYXllcklkLCBlbmRlZFR1cm4/OiBib29sZWFuIH0gPSB7fSk6IFBsYXllciA9PiBuZXcgUGxheWVyKHtcbiAgICBpZCxcbiAgICBlbmRlZFR1cm4sXG4gIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBvYmplY3QgPT4gKHsgaWQ6IHRoaXMuaWQsIGVuZGVkVHVybjogdGhpcy5lbmRlZFR1cm4gfSlcblxuICBwdWJsaWMgc3RhdGljIGZyb21Kc29uID0gKGpzb246IGFueSk6IFBsYXllciA9PiBuZXcgUGxheWVyKHsgaWQ6IGpzb24uaWQsIGVuZGVkVHVybjoganNvbi5lbmRlZFR1cm4gfSlcblxufVxuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZSB7XG4gIHJlYWRvbmx5IHR1cm46IG51bWJlclxuICByZWFkb25seSBtYXA6IFdvcmxkTWFwXG4gIHJlYWRvbmx5IHVuaXRzOiBVbml0W11cbiAgcmVhZG9ubHkgcGxheWVyczogUGxheWVyW11cblxuICBjb25zdHJ1Y3Rvcih7IHR1cm4sIG1hcCwgdW5pdHMsIHBsYXllcnMgfTogeyB0dXJuOiBudW1iZXIsIG1hcDogV29ybGRNYXAsIHVuaXRzOiBVbml0W10sIHBsYXllcnM6IFBsYXllcltdIH0pIHtcbiAgICB0aGlzLnR1cm4gPSB0dXJuXG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLnVuaXRzID0gdW5pdHNcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7IHR1cm4gPSB0aGlzLnR1cm4sIG1hcCA9IHRoaXMubWFwLCB1bml0cyA9IHRoaXMudW5pdHMsIHBsYXllcnMgPSB0aGlzLnBsYXllcnMgfTpcbiAgICAgICAgICAgICAgICAgICB7IHR1cm4/OiBudW1iZXIsIG1hcD86IFdvcmxkTWFwLCB1bml0cz86IFVuaXRbXSwgcGxheWVycz86IFBsYXllcltdIH0gPSB7fSk6IFdvcmxkU3RhdGUgPT5cbiAgICBuZXcgV29ybGRTdGF0ZSh7IHR1cm4sIG1hcCwgdW5pdHMsIHBsYXllcnMgfSlcblxuICBwdWJsaWMgZmluZFBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQpOiBPcHRpb248UGxheWVyPiA9PlxuICAgIFIuZmluZCgocGxheWVyKSA9PiBwbGF5ZXIuaWQgPT0gcGxheWVySWQsIHRoaXMucGxheWVycylcblxuICBwdWJsaWMgZmluZFVuaXRCeUlkID0gKHVuaXRJZDogVW5pdElkKTogT3B0aW9uPFVuaXQ+ID0+XG4gICAgUi5maW5kKCh1bml0KSA9PiB1bml0LmlkID09IHVuaXRJZCwgdGhpcy51bml0cylcblxuICBwdWJsaWMgZ2V0VW5pdEJ5SWQgPSAodW5pdElkOiBudW1iZXIpOiBVbml0ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgfVxuICAgIHJldHVybiB1bml0XG4gIH1cblxuICBwdWJsaWMgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+XG4gICAgUi5maW5kKCh1bml0KSA9PiB1bml0LmxvY2F0aW9uLmVxdWFscyhoZXgpLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyByZXBsYWNlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCwgdW5pdDogVW5pdCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyB1bml0czogUi5hcHBlbmQodW5pdCwgUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT0gdW5pdElkLCB0aGlzLnVuaXRzKSkgfSlcblxuICBwdWJsaWMgcmVtb3ZlVW5pdCA9ICh1bml0SWQ6IFVuaXRJZCk6IFdvcmxkU3RhdGUgPT5cbiAgICB0aGlzLmNvcHkoeyB1bml0czogUi5maWx0ZXIoKHVuaXQpID0+IHVuaXQuaWQgIT0gdW5pdElkLCB0aGlzLnVuaXRzKSB9KVxuXG4gIHB1YmxpYyByZXBsYWNlUGxheWVyID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgcGxheWVyOiBQbGF5ZXIpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgcGxheWVyczogUi5hcHBlbmQocGxheWVyLCBSLmZpbHRlcigocGxheWVyKSA9PiBwbGF5ZXIuaWQgIT0gcGxheWVySWQsIHRoaXMucGxheWVycykpIH0pXG5cbiAgcHVibGljIHRvSnNvbiA9ICgpOiBvYmplY3QgPT4gKHtcbiAgICB0dXJuOiB0aGlzLnR1cm4sXG4gICAgbWFwOiB0aGlzLm1hcC50b0pzb24oKSxcbiAgICB1bml0czogdGhpcy51bml0cy5tYXAodW5pdCA9PiB1bml0LnRvSnNvbigpKSxcbiAgICBwbGF5ZXJzOiB0aGlzLnBsYXllcnMubWFwKHBsYXllciA9PiBwbGF5ZXIudG9Kc29uKCkpLFxuICB9KVxuXG4gIHB1YmxpYyBzdGF0aWMgZnJvbUpzb24gPSAoanNvbjogYW55KTogV29ybGRTdGF0ZSA9PiBuZXcgV29ybGRTdGF0ZSh7XG4gICAgdHVybjoganNvbi50dXJuLFxuICAgIG1hcDogV29ybGRNYXAuZnJvbUpzb24oanNvbi5tYXApLFxuICAgIHVuaXRzOiBqc29uLnVuaXRzLm1hcCh1bml0ID0+IFVuaXQuZnJvbUpzb24odW5pdCkpLFxuICAgIHBsYXllcnM6IGpzb24ucGxheWVycy5tYXAodW5pdCA9PiBQbGF5ZXIuZnJvbUpzb24odW5pdCkpLFxuICB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1dPUkxEX1NUQVRFOiBXb3JsZFN0YXRlID0gbmV3IFdvcmxkU3RhdGUoe1xuICB0dXJuOiAxLFxuICBtYXA6IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiAxMCwgaGVpZ2h0OiA2IH0pLFxuICBwbGF5ZXJzOiBbXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogMSxcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogMixcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gIF0sXG4gIHVuaXRzOiBbXG4gICAgbmV3IFVuaXQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBwbGF5ZXJJZDogMSxcbiAgICAgIG5hbWU6ICdXYWx0ZXInLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMSwgMSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiAyLFxuICAgICAgcGxheWVySWQ6IDEsXG4gICAgICBuYW1lOiAnQmVja3knLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMCwgMyksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiAzLFxuICAgICAgcGxheWVySWQ6IDIsXG4gICAgICBuYW1lOiAnQ2hld3BhY2EnLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMiwgMSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiA0LFxuICAgICAgcGxheWVySWQ6IDIsXG4gICAgICBuYW1lOiAnQmFyYWNrIE8uIExsYW1hJyxcbiAgICAgIGxvY2F0aW9uOiBuZXcgSGV4KDMsIDIpLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICAgIGFjdGlvblBvaW50czogbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IDIsIG1heDogMiB9KSxcbiAgICB9KSxcbiAgXSxcbn0pXG5cbmV4cG9ydCB0eXBlIFBsYXllcklkID0gbnVtYmVyIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==