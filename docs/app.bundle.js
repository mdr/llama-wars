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
            _this.scene.start('Game');
        });
        this.loadAssets();
    };
    BootScene.prototype.loadAssets = function () {
        // Source: https://opengameart.org/content/hex-tileset-pack
        this.load.image('llama', 'assets/sprites/llama_14.png');
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
var colours_1 = __webpack_require__(/*! ./colours */ "./src/scenes/colours.ts");
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
var map_display_object_1 = __webpack_require__(/*! ./map-display-object */ "./src/scenes/map-display-object.ts");
var types_1 = __webpack_require__(/*! ../util/types */ "./src/util/types.ts");
var local_game_state_1 = __webpack_require__(/*! ./local-game-state */ "./src/scenes/local-game-state.ts");
var asset_keys_1 = __webpack_require__(/*! ./asset-keys */ "./src/scenes/asset-keys.ts");
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
        _this.server = new server_1.Server();
        _this.worldState = world_state_1.INITIAL_WORLD_STATE;
        _this.localGameState = local_game_state_1.INITIAL_LOCAL_GAME_STATE;
        _this.unitDisplayObjects = new Map();
        _this.setUpInputs = function () {
            _this.input.mouse.disableContextMenu();
            _this.input.keyboard.on('keydown', _this.handleKey);
            _this.input.on('pointerdown', _this.handlePointerDown);
            _this.input.on('pointermove', _this.handlePointerMove);
        };
        _this.handleKey = function (event) {
            switch (event.key) {
                case 'ArrowLeft':
                case '4':
                    if (_this.selectedHex)
                        _this.moveOrAttackHex(_this.selectedHex.goLeft());
                    break;
                case 'ArrowRight':
                case '6':
                    if (_this.selectedHex)
                        _this.moveOrAttackHex(_this.selectedHex.goRight());
                    break;
                case '7':
                    if (_this.selectedHex)
                        _this.moveOrAttackHex(_this.selectedHex.goNorthWest());
                    break;
                case '3':
                    if (_this.selectedHex)
                        _this.moveOrAttackHex(_this.selectedHex.goSouthEast());
                    break;
                case '9':
                    if (_this.selectedHex)
                        _this.moveOrAttackHex(_this.selectedHex.goNorthEast());
                    break;
                case '1':
                    if (_this.selectedHex)
                        _this.moveOrAttackHex(_this.selectedHex.goSouthWest());
                    break;
                case 'Enter':
                    _this.handleEnter(event);
                    break;
                case 'Escape':
                    _this.handleEscape();
                    break;
                case 'm':
                    _this.handleMKey();
                    break;
                case 'a':
                    _this.handleAKey();
                    break;
                case 'n':
                    _this.handleNKey(event);
                    break;
                default:
                    break;
            }
        };
        _this.createUnit = function (unit) {
            var unitDisplayObject = new unit_display_object_1.UnitDisplayObject(_this, unit);
            _this.unitDisplayObjects.set(unit.id, unitDisplayObject);
        };
        _this.createTexts = function () {
            var map = _this.worldState.map;
            _this.selectionText = _this.add.text(exports.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(exports.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * exports.HEX_SIZE + exports.DRAWING_OFFSET.y, '');
            _this.actionText = _this.add.text(exports.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(exports.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * exports.HEX_SIZE + exports.DRAWING_OFFSET.y + 25, '', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
                .on('pointerdown', _this.handleActionTextClick)
                .on('pointerover', function () { return _this.actionText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
                .on('pointerout', function () { return _this.actionText.setFill(colours_1.ACTION_TEXT_COLOUR); });
            _this.actionText2 = _this.add.text(exports.DRAWING_OFFSET.x - hex_geometry_1.hexWidth(exports.HEX_SIZE) / 2, hex_geometry_1.mapHeight(map) * exports.HEX_SIZE + exports.DRAWING_OFFSET.y + 50, '', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
                .on('pointerdown', _this.handleActionText2Click)
                .on('pointerover', function () { return _this.actionText2.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
                .on('pointerout', function () { return _this.actionText2.setFill(colours_1.ACTION_TEXT_COLOUR); });
            _this.endTurnText = _this.add.text(700, hex_geometry_1.mapHeight(map) * exports.HEX_SIZE + exports.DRAWING_OFFSET.y, '', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
                .on('pointerdown', _this.handleEndTurn)
                .on('pointerover', function () { return _this.endTurnText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
                .on('pointerout', function () { return _this.endTurnText.setFill(colours_1.ACTION_TEXT_COLOUR); });
            _this.playerText = _this.add.text(23, 20, '');
        };
        _this.handleEndTurn = function () {
            if (!_this.getCurrentPlayer().endedTurn) {
                _this.sendActionToServer({ type: 'endTurn' });
            }
        };
        _this.syncScene = function () {
            _this.mapDisplayObject.stateUpdated(_this.worldState, _this.localGameState);
            _this.mapDisplayObject.syncScene();
            _this.worldState.units.forEach(_this.syncUnit);
            _this.syncTexts();
        };
        _this.syncUnit = function (unit) {
            var unitDisplayObject = _this.getUnitDisplayObject(unit.id);
            unitDisplayObject.unitUpdated(unit);
            unitDisplayObject.syncScene();
        };
        _this.syncTexts = function () {
            _this.playerText.setText("Player " + _this.playerId);
            _this.selectionText.setText('');
            _this.actionText.setText('');
            _this.actionText2.setText('');
            switch (_this.mode.type) {
                case 'selectHex':
                    _this.syncSelectHexModeText();
                    break;
                case 'moveUnit':
                    _this.syncMoveUnitModeText(_this.mode.unitId);
                    break;
                case 'attack':
                    _this.syncAttackModeText(_this.mode.unitId);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(_this.mode);
            }
            if (_this.getCurrentPlayer().endedTurn) {
                _this.endTurnText.setText('Waiting for next turn...');
            }
            else {
                _this.endTurnText.setText('End Turn (Shift + Enter)');
            }
        };
        _this.syncAttackModeText = function (unitId) {
            var unit = _this.getUnitById(unitId);
            _this.selectionText.setText(_this.describeUnit(unit));
            _this.actionText.setText('Click unit to attack (or ESC to cancel)');
        };
        _this.syncMoveUnitModeText = function (unitId) {
            var unit = _this.getUnitById(unitId);
            _this.selectionText.setText(_this.describeUnit(unit));
            _this.actionText.setText('Click tile to move to (or ESC to cancel)');
        };
        _this.syncSelectHexModeText = function () {
            var selectedUnit = _this.findSelectedUnit();
            if (selectedUnit) {
                _this.selectionText.setText(_this.describeUnit(selectedUnit));
                if (_this.unitCouldPotentiallyMove(selectedUnit))
                    _this.actionText.setText('Move (m)');
                if (_this.unitCouldPotentiallyAttack(selectedUnit))
                    _this.actionText2.setText('Attack (a)');
            }
        };
        _this.describeUnit = function (unit) {
            return unit.name + " - Llama warrior - HP " + unit.hitPoints.current + "/" + unit.hitPoints.max + " - actions " + unit.actionPoints.current + "/" + unit.actionPoints.max;
        };
        _this.handleWorldEvent = function (event) {
            _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event);
            switch (event.type) {
                case 'unitMoved':
                    _this.handleUnitMovedWorldEvent(event);
                    break;
                case 'combat':
                    _this.handleCombatWorldEvent(event);
                    break;
                case 'playerEndedTurn':
                case 'wholeTurnEnded':
                    _this.handleTurnEnded();
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(event);
            }
        };
        _this.handleTurnEnded = function () {
            var player = R.head(R.sortBy(function (player) { return player.id; }, (_this.worldState.players.filter(function (player) { return !player.endedTurn; }))));
            if (!player)
                throw "Could not find player to take next turn";
            _this.localGameState = _this.localGameState.copy({ playerId: player.id });
            var unitToSelect = _this.findFirstUnitWithActionPoints();
            _this.localGameState = _this.localGameState.copy({ selectedHex: types_1.toMaybe(unitToSelect === null || unitToSelect === void 0 ? void 0 : unitToSelect.location) });
            _this.sound.play(asset_keys_1.AudioKeys.NEW_TURN);
            _this.syncScene();
        };
        _this.findNextUnitWithActionPoints = function (unitId) {
            var _a;
            var candidateUnits = R.sortBy(function (unit) { return unit.id; }, _this.worldState.units.filter(function (unit) { return unit.playerId == _this.playerId && unit.actionPoints.current > 0; }));
            return (_a = R.head(candidateUnits.filter(function (unit) { return unit.id > unitId; }))) !== null && _a !== void 0 ? _a : R.head(candidateUnits.filter(function (unit) { return unit.id < unitId; }));
        };
        _this.findFirstUnitWithActionPoints = function () {
            var candidateUnits = R.sortBy(function (unit) { return unit.id; }, _this.worldState.units.filter(function (unit) { return unit.playerId == _this.playerId && unit.actionPoints.current > 0; }));
            return R.head(candidateUnits);
        };
        _this.handleUnitMovedWorldEvent = function (event) {
            var unitId = event.unitId, from = event.from, to = event.to;
            _this.sound.play(asset_keys_1.AudioKeys.WALK);
            var unit = _this.getUnitById(unitId);
            if (unit.playerId == _this.playerId) {
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
            // Retain selection if we still have action points, else select next unit (or nothing)
            var newSelectedHex;
            if (!unit || unit.actionPoints.current == 0) {
                var nextUnit = _this.findNextUnitWithActionPoints(unitId);
                newSelectedHex = nextUnit === null || nextUnit === void 0 ? void 0 : nextUnit.location;
            }
            else {
                newSelectedHex = defaultLocation;
            }
            return newSelectedHex;
        };
        _this.handleCombatWorldEvent = function (event) {
            var attacker = event.attacker, defender = event.defender;
            _this.sound.play(asset_keys_1.AudioKeys.ATTACK);
            if (attacker.killed || defender.killed) {
                _this.sound.play(asset_keys_1.AudioKeys.DEATH);
            }
            if (attacker.playerId == _this.playerId) {
                var newSelectedHex = _this.calculateNewSelectedUnitAfterMoveOrAttack(attacker.unitId, attacker.location);
                _this.localGameState = _this.localGameState.copy({
                    mode: { type: 'selectHex' },
                    selectedHex: types_1.toMaybe(newSelectedHex),
                });
            }
            _this.syncScene();
            var attackerDisplayObject = _this.getUnitDisplayObject(attacker.unitId);
            var defenderDisplayObject = _this.getUnitDisplayObject(defender.unitId);
            attackerDisplayObject.attack(attacker.location, defender.location);
            if (attacker.killed) {
                attackerDisplayObject.destroy();
                _this.unitDisplayObjects.delete(attacker.unitId);
            }
            if (defender.killed) {
                defenderDisplayObject.destroy();
                _this.unitDisplayObjects.delete(defender.unitId);
            }
        };
        _this.getUnitDisplayObject = function (unitId) {
            var unitDisplayObject = _this.unitDisplayObjects.get(unitId);
            if (!unitDisplayObject)
                throw 'Could not find unit with ID ' + unitId;
            return unitDisplayObject;
        };
        _this.handleMKey = function () {
            switch (_this.mode.type) {
                case 'selectHex':
                    _this.handleStartMove();
                    break;
                case 'moveUnit':
                case 'attack':
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(_this.mode);
            }
        };
        _this.handleNKey = function (event) {
            if (event.ctrlKey) {
                var selectedUnit = _this.findSelectedUnit();
                var unitToSelect = selectedUnit ? _this.findNextUnitWithActionPoints(selectedUnit.id) : _this.findFirstUnitWithActionPoints();
                if (unitToSelect) {
                    _this.localGameState = _this.localGameState.setSelectedHex(unitToSelect === null || unitToSelect === void 0 ? void 0 : unitToSelect.location).setMode({ type: 'selectHex' });
                    _this.syncScene();
                }
            }
        };
        _this.findSelectedUnit = function () { return _this.selectedHex ? _this.findUnitInLocation(_this.selectedHex) : undefined; };
        _this.handleAKey = function () {
            switch (_this.mode.type) {
                case 'selectHex':
                    _this.handleStartAttack();
                    break;
                case 'moveUnit':
                case 'attack':
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(_this.mode);
            }
        };
        _this.handlePointerMove = function (pointer) {
            var pointerPoint = { x: pointer.x, y: pointer.y };
            _this.mapDisplayObject.handlePointerMove(pointerPoint);
        };
        _this.handlePointerDown = function (pointer) {
            var e_1, _a;
            try {
                // Ignore clicks on these as they have their own handlers
                for (var _b = __values([_this.endTurnText, _this.actionText, _this.actionText2]), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var obj = _c.value;
                    if (obj.getBounds().contains(pointer.x, pointer.y))
                        return;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var pressedPoint = { x: pointer.x, y: pointer.y };
            var hex = hex_geometry_1.fromPoint(point_1.multiplyPoint(point_1.subtractPoints(pressedPoint, exports.DRAWING_OFFSET), 1 / exports.HEX_SIZE));
            if (pointer.button == 2) {
                _this.moveOrAttackHex(hex);
            }
            else {
                _this.handleLeftClick(hex);
            }
        };
        _this.handleLeftClick = function (hex) {
            var mode = _this.mode;
            switch (mode.type) {
                case 'selectHex':
                    _this.handleSelectHex(hex);
                    break;
                case 'moveUnit':
                    _this.handleCompleteMove(hex, mode.unitId);
                    break;
                case 'attack':
                    _this.handleCompleteAttack(hex, mode.unitId);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(mode);
            }
        };
        _this.moveOrAttackHex = function (hex) {
            var selectedUnit = _this.findSelectedUnit();
            if (selectedUnit) {
                if (_this.unitCanMoveToHex(selectedUnit, hex))
                    _this.dispatchMoveUnitAction(selectedUnit, hex);
                else if (_this.unitCanAttackHex(selectedUnit, hex))
                    _this.dispatchAttackAction(selectedUnit, hex);
            }
        };
        _this.setMode = function (mode) {
            _this.localGameState = _this.localGameState.setMode(mode);
        };
        _this.unitCouldPotentiallyMove = function (unit) {
            return unit.playerId == _this.playerId && unit.actionPoints.current > 0 && !_this.getCurrentPlayer().endedTurn;
        };
        _this.unitCanMoveToHex = function (unit, hex) {
            return _this.unitCouldPotentiallyMove(unit)
                && hex.isAdjacentTo(unit.location)
                && _this.worldState.map.isInBounds(hex)
                && !_this.findUnitInLocation(hex);
        };
        _this.unitCouldPotentiallyAttack = function (unit) {
            return unit.playerId == _this.playerId && unit.actionPoints.current > 0 && !_this.getCurrentPlayer().endedTurn;
        };
        _this.unitCanAttackHex = function (unit, location) {
            var targetUnit = _this.findUnitInLocation(location);
            return _this.unitCouldPotentiallyAttack(unit)
                && targetUnit != undefined
                && targetUnit.playerId != _this.playerId
                && unit.location.isAdjacentTo(location);
        };
        _this.handleEnter = function (event) {
            if (!event.shiftKey)
                return;
            _this.handleEndTurn();
        };
        _this.handleEscape = function () {
            switch (_this.mode.type) {
                case 'selectHex':
                    _this.localGameState = _this.localGameState.copy({ selectedHex: types_1.nothing });
                    _this.syncScene();
                    break;
                case 'attack':
                    _this.handleAbortAttack();
                    return;
                case 'moveUnit':
                    _this.handleAbortMove();
                    return;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(_this.mode);
            }
        };
        _this.handleAbortMove = function () {
            if (_this.mode.type == 'moveUnit') {
                _this.setMode({ type: 'selectHex' });
                _this.syncScene();
            }
        };
        _this.handleAbortAttack = function () {
            if (_this.mode.type == 'attack') {
                _this.localGameState = _this.localGameState.setMode({ type: 'selectHex' });
                _this.syncScene();
            }
        };
        _this.handleActionTextClick = function () {
            switch (_this.mode.type) {
                case 'selectHex':
                    _this.handleStartMove();
                    break;
                case 'moveUnit':
                    _this.handleAbortMove();
                    break;
                case 'attack':
                    _this.handleAbortAttack();
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(_this.mode);
            }
        };
        _this.handleActionText2Click = function () {
            switch (_this.mode.type) {
                case 'selectHex':
                    _this.handleStartAttack();
                    break;
                case 'attack':
                    _this.handleAbortAttack();
                    break;
                case 'moveUnit':
                    // Shouldn't happen
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(_this.mode);
            }
        };
        _this.handleStartAttack = function () {
            var unit = _this.findSelectedUnit();
            if (unit && _this.unitCouldPotentiallyAttack(unit)) {
                _this.localGameState = _this.localGameState.setMode({ type: 'attack', from: unit.location, unitId: unit.id });
                _this.syncScene();
            }
        };
        _this.getCurrentPlayer = function () {
            var player = _this.worldState.findPlayer(_this.playerId);
            if (!player)
                throw "Could not find player with id " + _this.playerId;
            return player;
        };
        _this.handleStartMove = function () {
            var unit = _this.findSelectedUnit();
            if (unit && _this.unitCouldPotentiallyMove(unit)) {
                var newMode = { type: 'moveUnit', from: unit.location, unitId: unit.id };
                _this.localGameState = _this.localGameState.setMode(newMode);
                _this.syncScene();
            }
        };
        _this.getUnitById = function (unitId) {
            var unit = _this.worldState.findUnitById(unitId);
            if (!unit) {
                throw "No unit found with ID " + unitId;
            }
            return unit;
        };
        _this.findUnitInLocation = function (hex) { return _this.worldState.findUnitInLocation(hex); };
        _this.handleCompleteAttack = function (targetHex, unitId) {
            var attacker = _this.getUnitById(unitId);
            if (_this.unitCanAttackHex(attacker, targetHex))
                _this.dispatchAttackAction(attacker, targetHex);
        };
        _this.handleCompleteMove = function (destination, unitId) {
            var unit = _this.getUnitById(unitId);
            if (_this.unitCanMoveToHex(unit, destination))
                _this.dispatchMoveUnitAction(unit, destination);
        };
        _this.handleSelectHex = function (hex) {
            if (!_this.worldState.map.isInBounds(hex)) {
                // If click is out of bounds, deselect any selected hex
                if (_this.selectedHex) {
                    _this.localGameState = _this.localGameState.setSelectedHex(undefined);
                    _this.syncScene();
                }
            }
            else if (_this.selectedHex && _this.selectedHex.equals(hex)) {
                // if selected hex is clicked, toggle selection off
                _this.localGameState = _this.localGameState.setSelectedHex(undefined);
                _this.syncScene();
            }
            else {
                _this.localGameState = _this.localGameState.setSelectedHex(hex);
                _this.syncScene();
            }
        };
        _this.dispatchMoveUnitAction = function (unit, hex) {
            return _this.sendActionToServer({ type: 'moveUnit', unitId: unit.id, to: hex });
        };
        _this.dispatchAttackAction = function (attacker, targetHex) {
            return _this.sendActionToServer({ type: 'attack', unitId: attacker.id, target: targetHex });
        };
        _this.sendActionToServer = function (action) {
            return _this.server.handleAction(_this.playerId, action);
        };
        _this.server.addListener(_this.handleWorldEvent);
        return _this;
    }
    Object.defineProperty(GameScene.prototype, "mode", {
        get: function () {
            return this.localGameState.mode;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameScene.prototype, "selectedHex", {
        get: function () {
            return this.localGameState.selectedHex;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameScene.prototype, "playerId", {
        get: function () {
            return this.localGameState.playerId;
        },
        enumerable: false,
        configurable: true
    });
    GameScene.prototype.create = function () {
        var _this = this;
        asset_keys_1.ALL_AUDIO_KEYS.forEach(function (key) { return _this.sound.add(key); });
        this.mapDisplayObject = new map_display_object_1.MapDisplayObject(this, this.worldState, this.localGameState);
        this.worldState.units.forEach(this.createUnit);
        this.createTexts();
        this.setUpInputs();
        this.syncScene();
    };
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
exports.default = [boot_scene_1.BootScene, game_scene_1.GameScene];


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
        var playerId = _a.playerId, mode = _a.mode, selectedHex = _a.selectedHex;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.playerId, playerId = _c === void 0 ? _this.playerId : _c, _d = _b.mode, mode = _d === void 0 ? _this.mode : _d, _e = _b.selectedHex, selectedHex = _e === void 0 ? types_1.toMaybe(_this.selectedHex) : _e;
            return new LocalGameState({ playerId: playerId, mode: mode, selectedHex: types_1.toOption(selectedHex) });
        };
        this.setSelectedHex = function (selectedHex) {
            return _this.copy({ selectedHex: types_1.toMaybe(selectedHex) });
        };
        this.setMode = function (mode) { return _this.copy({ mode: mode }); };
        this.endTurn = function () {
            return _this.copy({
                playerId: _this.playerId == 1 ? 2 : 1,
                mode: { type: 'selectHex' },
                selectedHex: types_1.nothing,
            });
        };
        this.playerId = playerId;
        this.mode = mode;
        this.selectedHex = selectedHex;
    }
    return LocalGameState;
}());
exports.LocalGameState = LocalGameState;
exports.INITIAL_LOCAL_GAME_STATE = new LocalGameState({
    playerId: 1,
    mode: { type: 'selectHex' },
    selectedHex: undefined,
});


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
var unreachable_case_error_1 = __webpack_require__(/*! ../util/unreachable-case-error */ "./src/util/unreachable-case-error.ts");
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
        this.stateUpdated = function (worldState, localGameState) {
            _this.worldState = worldState;
            _this.localGameState = localGameState;
        };
        this.syncScene = function () {
            var e_2, _a;
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
            var tileState = _this.calculateTileState(hex);
            switch (tileState) {
                case 'default':
                    return colours_1.DEFAULT_TILE_COLOUR;
                case 'selected':
                    return colours_1.SELECTED_TILE_COLOUR;
                case 'targetable':
                    return colours_1.TARGETABLE_TILE_COLOUR;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(tileState);
            }
        };
        this.calculateHoverColour = function (hex) {
            var tileState = _this.calculateTileState(hex);
            switch (tileState) {
                case 'default':
                    return colours_1.HOVER_DEFAULT_TILE_COLOUR;
                case 'selected':
                    return colours_1.HOVER_SELECTED_TILE_COLOUR;
                case 'targetable':
                    return colours_1.HOVER_TARGETABLE_TILE_COLOUR;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(tileState);
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
        this.syncScene = function () {
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
        this.unitUpdated = function (unit) {
            assert(unit.id == _this.unit.id);
            _this.unit = unit;
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
            var unitId = action.unitId, target = action.target;
            var attacker = _this.worldState.findUnitById(unitId);
            if (!attacker)
                throw "No unit found with ID " + unitId;
            var from = attacker.location;
            if (!from.isAdjacentTo(target))
                throw "Invalid unit attack between non-adjacent hexes " + from + " to " + target;
            var defender = _this.worldState.findUnitInLocation(target);
            if (!defender)
                throw "No target unit to attack at " + target;
            if (playerId == defender.playerId)
                throw "Cannot attack own unit";
            if (attacker.actionPoints.current < 1)
                throw "Not enough action points to attack";
            var attackerDamage = Math.min(attacker.hitPoints.current, 10);
            var defenderDamage = Math.min(defender.hitPoints.current, 20);
            var event = {
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
            };
            _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event);
            _this.notifyListeners(event);
        };
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
        var event = wholeTurnEnded ? { type: 'wholeTurnEnded' } : { type: 'playerEndedTurn', playerId: playerId };
        this.worldState = world_event_evaluator_1.applyEvent(this.worldState, event);
        this.notifyListeners(event);
    };
    return Server;
}());
exports.Server = Server;


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
var Hex = /** @class */ (function () {
    function Hex(x, y) {
        var _this = this;
        this.plus = function (that) { return new Hex(_this.x + that.x, _this.y + that.y); };
        this.neighbours = function () { return Hex.NEIGHBOURS.map(_this.plus); };
        this.isAdjacentTo = function (that) { return R.includes(that, _this.neighbours()); };
        this.equals = function (that) { return _this.x == that.x && _this.y == that.y; };
        this.toString = function () { return "Hex(" + _this.x + ", " + _this.y + ")"; };
        this.goLeft = function () { return new Hex(_this.x - 1, _this.y); };
        this.goRight = function () { return new Hex(_this.x + 1, _this.y); };
        this.goNorthWest = function () { return new Hex(_this.x, _this.y - 1); };
        this.goSouthEast = function () { return new Hex(_this.x, _this.y + 1); };
        this.goNorthEast = function () { return new Hex(_this.x + 1, _this.y - 1); };
        this.goSouthWest = function () { return new Hex(_this.x - 1, _this.y + 1); };
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
        this.current = current;
        this.max = max;
        assert(max > 0);
        assert(current >= 0);
        assert(current <= max);
    }
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
        this.current = current;
        this.max = max;
        assert(max > 0);
        assert(current >= 0);
        assert(current <= max);
    }
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
        this.id = id;
        this.playerId = playerId;
        this.name = name;
        this.location = location;
        this.hitPoints = hitPoints;
        this.actionPoints = actionPoints;
    }
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
        case 'wholeTurnEnded':
            return handleWholeTurnEnded(state);
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
    if (attackerUnit.location != attacker.location)
        throw "Invalid location for attacker";
    var defenderUnit = state.findUnitById(defender.unitId);
    if (!defenderUnit)
        throw "No unit found with ID " + defender.unitId;
    if (defenderUnit.location != defender.location)
        throw "Invalid location for defender";
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
var handleWholeTurnEnded = function (state) {
    return state.copy({
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
        this.id = id;
        this.endedTurn = endedTurn;
    }
    return Player;
}());
exports.Player = Player;
var WorldState = /** @class */ (function () {
    function WorldState(_a) {
        var _this = this;
        var map = _a.map, units = _a.units, players = _a.players;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.map, map = _c === void 0 ? _this.map : _c, _d = _b.units, units = _d === void 0 ? _this.units : _d, _e = _b.players, players = _e === void 0 ? _this.players : _e;
            return new WorldState({ map: map, units: units, players: players });
        };
        this.findPlayer = function (playerId) {
            return R.find(function (player) { return player.id == playerId; }, _this.players);
        };
        this.findUnitById = function (unitId) {
            return R.find(function (unit) { return unit.id == unitId; }, _this.units);
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
        this.map = map;
        this.units = units;
        this.players = players;
    }
    return WorldState;
}());
exports.WorldState = WorldState;
exports.INITIAL_WORLD_STATE = new WorldState({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9hc3NldC1rZXlzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvYm9vdC1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2NvbG91cnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaGV4LWdlb21ldHJ5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9sb2NhbC1nYW1lLXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFwLWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy91bml0LWRpc3BsYXktb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3R5cGVzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL2hleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdW5pdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLXN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QUcsRUFBRSxDQUFDO1lBQ3BELFlBQVksRUFBRSxJQUFJLG1CQUFZLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUN2RCxDQUFDO0tBQ0g7Q0FDRixDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS53aWR0aDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lSGVpZ2h0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpOiBudW1iZXIgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XG59O1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnXG5cbmNvbnN0IGdhbWVDb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcgPSB7XG4gIHRpdGxlOiAnU2FtcGxlJyxcblxuICB0eXBlOiBQaGFzZXIuQVVUTyxcblxuICBzY2FsZToge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgfSxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgcGFyZW50OiAnZ2FtZScsXG4gIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnLFxufVxuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lLnNjYWxlLnNldEdhbWVTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gIGdhbWUuc2NhbGUucmVmcmVzaCgpXG59KVxuIiwiZXhwb3J0IGNvbnN0IEF1ZGlvS2V5cyA9IHtcbiAgQVRUQUNLOiAnYXR0YWNrJyxcbiAgREVBVEg6ICdkZWF0aCcsXG4gIFdBTEs6ICd3YWxrJyxcbiAgTkVXX1RVUk46ICduZXctdHVybicsXG59XG5cbmV4cG9ydCBjb25zdCBBTExfQVVESU9fS0VZUyA9IFtBdWRpb0tleXMuQVRUQUNLLCBBdWRpb0tleXMuREVBVEgsIEF1ZGlvS2V5cy5XQUxLLCBBdWRpb0tleXMuTkVXX1RVUk5dIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IEF1ZGlvS2V5cyB9IGZyb20gJy4vYXNzZXQta2V5cydcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdCb290Jyxcbn1cblxuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKVxuICB9XG5cbiAgcHVibGljIHByZWxvYWQoKTogdm9pZCB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gZ2V0R2FtZVdpZHRoKHRoaXMpICogMC41XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjVcblxuICAgIGNvbnN0IHByb2dyZXNzQmFySGVpZ2h0ID0gMTAwXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMFxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGgsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgcHJvZ3Jlc3NCYXJXaWR0aCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0LFxuICAgICAgMHgwMDAwMDAsXG4gICAgKVxuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoICsgMjAgLSBwcm9ncmVzc0JhckNvbnRhaW5lci53aWR0aCAqIDAuNSxcbiAgICAgIGhhbGZIZWlnaHQsXG4gICAgICAxMCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0IC0gMjAsXG4gICAgICAweDg4ODg4OCxcbiAgICApXG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNClcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpXG5cbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XG4gICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWVcblxuICAgICAgY29uc3QgcGVyY2VudCA9IHZhbHVlICogMTAwXG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApXG4gICAgfSlcblxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGUpID0+IHtcbiAgICAgIGFzc2V0VGV4dC5zZXRUZXh0KGZpbGUua2V5KVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpXG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KClcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKVxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpXG5cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQXNzZXRzKCkge1xuICAgIC8vIFNvdXJjZTogaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC9oZXgtdGlsZXNldC1wYWNrXG4gICAgdGhpcy5sb2FkLmltYWdlKCdsbGFtYScsICdhc3NldHMvc3ByaXRlcy9sbGFtYV8xNC5wbmcnKVxuXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC8zNy1oaXRzcHVuY2hlc1xuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuQVRUQUNLLCAnYXNzZXRzL2F1ZGlvL2hpdDE4Lm1wMy5tcDMnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbWFsZS1ncnVudHllbGxpbmctc291bmRzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKEF1ZGlvS2V5cy5ERUFUSCwgJ2Fzc2V0cy9hdWRpby8xeWVsbDQud2F2JylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50L2dyYXNzLWZvb3Qtc3RlcC1zb3VuZHMteW8tZnJhbmtpZVxuICAgIHRoaXMubG9hZC5hdWRpbyhBdWRpb0tleXMuV0FMSywgJ2Fzc2V0cy9hdWRpby9zZnhfc3RlcF9ncmFzc19sLm1wMycpXG4gICAgLy8gaHR0cHM6Ly9vcGVuZ2FtZWFydC5vcmcvY29udGVudC91aS1zb3VuZC1lZmZlY3RzLXBhY2tcbiAgICB0aGlzLmxvYWQuYXVkaW8oQXVkaW9LZXlzLk5FV19UVVJOLCAnYXNzZXRzL2F1ZGlvL01FTlUgQV9TZWxlY3Qud2F2JylcbiAgfVxufVxuIiwiaW1wb3J0IENvbG9yID0gUGhhc2VyLkRpc3BsYXkuQ29sb3JcblxuZXhwb3J0IHR5cGUgQ29sb3VyU3RyaW5nID0gc3RyaW5nXG5leHBvcnQgdHlwZSBDb2xvdXJOdW1iZXIgPSBudW1iZXJcblxuZXhwb3J0IGNvbnN0IGNvbG91ck51bWJlciA9IChjb2xvdXJTdHJpbmc6IENvbG91clN0cmluZyk6IENvbG91ck51bWJlciA9PiBDb2xvci5IZXhTdHJpbmdUb0NvbG9yKGNvbG91clN0cmluZykuY29sb3JcblxuZXhwb3J0IGNvbnN0IEhFQUxUSF9CT1JERVJfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjMDAwMDAwJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRU1QVFlfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZmZmJylcbmV4cG9ydCBjb25zdCBIRUFMVEhfRlVMTF9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM0ZGYwMzcnKVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2NjZmZiZScpXG5leHBvcnQgY29uc3QgSE9WRVJfREVGQVVMVF9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2RjZmZkMScpXG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmQwOCcpXG5leHBvcnQgY29uc3QgSE9WRVJfU0VMRUNURURfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZkYmYnKVxuXG5leHBvcnQgY29uc3QgVEFSR0VUQUJMRV9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzlkZjFlNycpXG5leHBvcnQgY29uc3QgSE9WRVJfVEFSR0VUQUJMRV9USUxFX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2NlZjBlYicpXG5cbmV4cG9ydCBjb25zdCBBQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2NjY2MwMCdcbmV4cG9ydCBjb25zdCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIgPSAnI2ZmZmYwMCdcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl8xX1RJTlQgPSAweGZmYmJiYlxuZXhwb3J0IGNvbnN0IFBMQVlFUl8yX1RJTlQgPSAweGJiYmJmZlxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcbmltcG9ydCB7IGFkZFBvaW50cywgbXVsdGlwbHlQb2ludCwgc3VidHJhY3RQb2ludHMgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCwgaGV4V2lkdGgsIG1hcEhlaWdodCB9IGZyb20gJy4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSwgUGxheWVyLCBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgQ29tYmF0V29ybGRFdmVudCwgVW5pdE1vdmVkV29ybGRFdmVudCwgV29ybGRFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgeyBNb3ZlVW5pdFdvcmxkQWN0aW9uLCBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5pbXBvcnQgeyBVbml0LCBVbml0SWQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgVW5pdERpc3BsYXlPYmplY3QgfSBmcm9tICcuL3VuaXQtZGlzcGxheS1vYmplY3QnXG5pbXBvcnQgeyBBQ1RJT05fVEVYVF9DT0xPVVIsIEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUiB9IGZyb20gJy4vY29sb3VycydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgTWFwRGlzcGxheU9iamVjdCB9IGZyb20gJy4vbWFwLWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgbm90aGluZywgT3B0aW9uLCB0b01heWJlIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURSwgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgeyBNb2RlIH0gZnJvbSAnLi9tb2RlJ1xuaW1wb3J0IHsgQUxMX0FVRElPX0tFWVMsIEF1ZGlvS2V5cyB9IGZyb20gJy4vYXNzZXQta2V5cydcbmltcG9ydCBQb2ludGVyID0gUGhhc2VyLklucHV0LlBvaW50ZXJcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdHYW1lJyxcbn1cblxuZXhwb3J0IGNvbnN0IEhFWF9TSVpFID0gNDhcbmV4cG9ydCBjb25zdCBEUkFXSU5HX09GRlNFVCA9IHsgeDogNjAsIHk6IDEwMCB9XG5leHBvcnQgY29uc3QgaGV4Q2VudGVyID0gKGhleDogSGV4KSA9PiBhZGRQb2ludHMobXVsdGlwbHlQb2ludChjZW50ZXJQb2ludChoZXgpLCBIRVhfU0laRSksIERSQVdJTkdfT0ZGU0VUKVxuXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSByZWFkb25seSBzZXJ2ZXI6IFNlcnZlciA9IG5ldyBTZXJ2ZXIoKVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gIHByaXZhdGUgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlID0gSU5JVElBTF9MT0NBTF9HQU1FX1NUQVRFXG4gIHByaXZhdGUgbWFwRGlzcGxheU9iamVjdDogTWFwRGlzcGxheU9iamVjdFxuICBwcml2YXRlIHVuaXREaXNwbGF5T2JqZWN0czogTWFwPFVuaXRJZCwgVW5pdERpc3BsYXlPYmplY3Q+ID0gbmV3IE1hcCgpXG4gIHByaXZhdGUgc2VsZWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSBhY3Rpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIGFjdGlvblRleHQyOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIGVuZFR1cm5UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICBwcml2YXRlIHBsYXllclRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpXG4gICAgdGhpcy5zZXJ2ZXIuYWRkTGlzdGVuZXIodGhpcy5oYW5kbGVXb3JsZEV2ZW50KVxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5tb2RlXG4gIH1cblxuICBwcml2YXRlIGdldCBzZWxlY3RlZEhleCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZWxlY3RlZEhleFxuICB9XG5cbiAgcHJpdmF0ZSBnZXQgcGxheWVySWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxHYW1lU3RhdGUucGxheWVySWRcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XG4gICAgQUxMX0FVRElPX0tFWVMuZm9yRWFjaChrZXkgPT4gdGhpcy5zb3VuZC5hZGQoa2V5KSlcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3QgPSBuZXcgTWFwRGlzcGxheU9iamVjdCh0aGlzLCB0aGlzLndvcmxkU3RhdGUsIHRoaXMubG9jYWxHYW1lU3RhdGUpXG4gICAgdGhpcy53b3JsZFN0YXRlLnVuaXRzLmZvckVhY2godGhpcy5jcmVhdGVVbml0KVxuICAgIHRoaXMuY3JlYXRlVGV4dHMoKVxuICAgIHRoaXMuc2V0VXBJbnB1dHMoKVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBJbnB1dHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5pbnB1dC5tb3VzZS5kaXNhYmxlQ29udGV4dE1lbnUoKVxuICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleSlcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlUG9pbnRlckRvd24pXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcm1vdmUnLCB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgIGNhc2UgJzQnOlxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEhleClcbiAgICAgICAgICB0aGlzLm1vdmVPckF0dGFja0hleCh0aGlzLnNlbGVjdGVkSGV4LmdvTGVmdCgpKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBjYXNlICc2JzpcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRIZXgpXG4gICAgICAgICAgdGhpcy5tb3ZlT3JBdHRhY2tIZXgodGhpcy5zZWxlY3RlZEhleC5nb1JpZ2h0KCkpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICc3JzpcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRIZXgpXG4gICAgICAgICAgdGhpcy5tb3ZlT3JBdHRhY2tIZXgodGhpcy5zZWxlY3RlZEhleC5nb05vcnRoV2VzdCgpKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnMyc6XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSGV4KVxuICAgICAgICAgIHRoaXMubW92ZU9yQXR0YWNrSGV4KHRoaXMuc2VsZWN0ZWRIZXguZ29Tb3V0aEVhc3QoKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJzknOlxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEhleClcbiAgICAgICAgICB0aGlzLm1vdmVPckF0dGFja0hleCh0aGlzLnNlbGVjdGVkSGV4LmdvTm9ydGhFYXN0KCkpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICcxJzpcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRIZXgpXG4gICAgICAgICAgdGhpcy5tb3ZlT3JBdHRhY2tIZXgodGhpcy5zZWxlY3RlZEhleC5nb1NvdXRoV2VzdCgpKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICB0aGlzLmhhbmRsZUVudGVyKGV2ZW50KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgdGhpcy5oYW5kbGVFc2NhcGUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbSc6XG4gICAgICAgIHRoaXMuaGFuZGxlTUtleSgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhJzpcbiAgICAgICAgdGhpcy5oYW5kbGVBS2V5KClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ24nOlxuICAgICAgICB0aGlzLmhhbmRsZU5LZXkoZXZlbnQpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVVbml0ID0gKHVuaXQ6IFVuaXQpID0+IHtcbiAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdCA9IG5ldyBVbml0RGlzcGxheU9iamVjdCh0aGlzLCB1bml0KVxuICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0LmlkLCB1bml0RGlzcGxheU9iamVjdClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGV4dHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQoRFJBV0lOR19PRkZTRVQueCAtIGhleFdpZHRoKEhFWF9TSVpFKSAvIDIsIG1hcEhlaWdodChtYXApICogSEVYX1NJWkUgKyBEUkFXSU5HX09GRlNFVC55LCAnJylcbiAgICB0aGlzLmFjdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDI1LCAnJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSkuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlQWN0aW9uVGV4dENsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dC5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuYWN0aW9uVGV4dDIgPSB0aGlzLmFkZC50ZXh0KERSQVdJTkdfT0ZGU0VULnggLSBoZXhXaWR0aChIRVhfU0laRSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIEhFWF9TSVpFICsgRFJBV0lOR19PRkZTRVQueSArIDUwLCAnJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSkuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlQWN0aW9uVGV4dDJDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuYWN0aW9uVGV4dDIuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZW5kVHVyblRleHQgPSB0aGlzLmFkZC50ZXh0KDcwMCwgbWFwSGVpZ2h0KG1hcCkgKiBIRVhfU0laRSArIERSQVdJTkdfT0ZGU0VULnksICcnLCB7IGZpbGw6IEFDVElPTl9URVhUX0NPTE9VUiB9KS5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVFbmRUdXJuKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuZW5kVHVyblRleHQuc2V0RmlsbChIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5lbmRUdXJuVGV4dC5zZXRGaWxsKEFDVElPTl9URVhUX0NPTE9VUikpXG4gICAgdGhpcy5wbGF5ZXJUZXh0ID0gdGhpcy5hZGQudGV4dCgyMywgMjAsICcnKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbmRUdXJuID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuKSB7XG4gICAgICB0aGlzLnNlbmRBY3Rpb25Ub1NlcnZlcih7IHR5cGU6ICdlbmRUdXJuJyB9KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3luY1NjZW5lID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdC5zdGF0ZVVwZGF0ZWQodGhpcy53b3JsZFN0YXRlLCB0aGlzLmxvY2FsR2FtZVN0YXRlKVxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdC5zeW5jU2NlbmUoKVxuICAgIHRoaXMud29ybGRTdGF0ZS51bml0cy5mb3JFYWNoKHRoaXMuc3luY1VuaXQpXG4gICAgdGhpcy5zeW5jVGV4dHMoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVW5pdCA9ICh1bml0OiBVbml0KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLmdldFVuaXREaXNwbGF5T2JqZWN0KHVuaXQuaWQpXG4gICAgdW5pdERpc3BsYXlPYmplY3QudW5pdFVwZGF0ZWQodW5pdClcbiAgICB1bml0RGlzcGxheU9iamVjdC5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVGV4dHMgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5wbGF5ZXJUZXh0LnNldFRleHQoYFBsYXllciAke3RoaXMucGxheWVySWR9YClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJycpXG4gICAgc3dpdGNoICh0aGlzLm1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5zeW5jU2VsZWN0SGV4TW9kZVRleHQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLnN5bmNNb3ZlVW5pdE1vZGVUZXh0KHRoaXMubW9kZS51bml0SWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnN5bmNBdHRhY2tNb2RlVGV4dCh0aGlzLm1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHRoaXMubW9kZSlcbiAgICB9XG4gICAgaWYgKHRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVybikge1xuICAgICAgdGhpcy5lbmRUdXJuVGV4dC5zZXRUZXh0KCdXYWl0aW5nIGZvciBuZXh0IHR1cm4uLi4nKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuZFR1cm5UZXh0LnNldFRleHQoJ0VuZCBUdXJuIChTaGlmdCArIEVudGVyKScpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jQXR0YWNrTW9kZVRleHQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHVuaXQgdG8gYXR0YWNrIChvciBFU0MgdG8gY2FuY2VsKScpXG4gIH1cblxuICBwcml2YXRlIHN5bmNNb3ZlVW5pdE1vZGVUZXh0ID0gKHVuaXRJZDogVW5pdElkKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dC5zZXRUZXh0KHRoaXMuZGVzY3JpYmVVbml0KHVuaXQpKVxuICAgIHRoaXMuYWN0aW9uVGV4dC5zZXRUZXh0KCdDbGljayB0aWxlIHRvIG1vdmUgdG8gKG9yIEVTQyB0byBjYW5jZWwpJylcbiAgfVxuXG4gIHByaXZhdGUgc3luY1NlbGVjdEhleE1vZGVUZXh0ID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHNlbGVjdGVkVW5pdCkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQoc2VsZWN0ZWRVbml0KSlcbiAgICAgIGlmICh0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZShzZWxlY3RlZFVuaXQpKVxuICAgICAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTW92ZSAobSknKVxuICAgICAgaWYgKHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2soc2VsZWN0ZWRVbml0KSlcbiAgICAgICAgdGhpcy5hY3Rpb25UZXh0Mi5zZXRUZXh0KCdBdHRhY2sgKGEpJylcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KTogc3RyaW5nID0+XG4gICAgYCR7dW5pdC5uYW1lfSAtIExsYW1hIHdhcnJpb3IgLSBIUCAke3VuaXQuaGl0UG9pbnRzLmN1cnJlbnR9LyR7dW5pdC5oaXRQb2ludHMubWF4fSAtIGFjdGlvbnMgJHt1bml0LmFjdGlvblBvaW50cy5jdXJyZW50fS8ke3VuaXQuYWN0aW9uUG9pbnRzLm1heH1gXG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudCh0aGlzLndvcmxkU3RhdGUsIGV2ZW50KVxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgICAgdGhpcy5oYW5kbGVVbml0TW92ZWRXb3JsZEV2ZW50KGV2ZW50KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21iYXRXb3JsZEV2ZW50KGV2ZW50KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGxheWVyRW5kZWRUdXJuJzpcbiAgICAgIGNhc2UgJ3dob2xlVHVybkVuZGVkJzpcbiAgICAgICAgdGhpcy5oYW5kbGVUdXJuRW5kZWQoKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVHVybkVuZGVkID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBsYXllciA9IFIuaGVhZChSLnNvcnRCeShwbGF5ZXIgPT4gcGxheWVyLmlkLCAodGhpcy53b3JsZFN0YXRlLnBsYXllcnMuZmlsdGVyKHBsYXllciA9PiAhcGxheWVyLmVuZGVkVHVybikpKSlcbiAgICBpZiAoIXBsYXllcilcbiAgICAgIHRocm93IGBDb3VsZCBub3QgZmluZCBwbGF5ZXIgdG8gdGFrZSBuZXh0IHR1cm5gXG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IHBsYXllcklkOiBwbGF5ZXIuaWQgfSlcbiAgICBjb25zdCB1bml0VG9TZWxlY3QgPSB0aGlzLmZpbmRGaXJzdFVuaXRXaXRoQWN0aW9uUG9pbnRzKClcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2VsZWN0ZWRIZXg6IHRvTWF5YmUodW5pdFRvU2VsZWN0Py5sb2NhdGlvbikgfSlcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLk5FV19UVVJOKVxuICAgIHRoaXMuc3luY1NjZW5lKClcbiAgfVxuXG4gIHByaXZhdGUgZmluZE5leHRVbml0V2l0aEFjdGlvblBvaW50cyA9ICh1bml0SWQ6IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PiB7XG4gICAgY29uc3QgY2FuZGlkYXRlVW5pdHMgPSBSLnNvcnRCeSh1bml0ID0+IHVuaXQuaWQsIHRoaXMud29ybGRTdGF0ZS51bml0cy5maWx0ZXIodW5pdCA9PiB1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDApKVxuICAgIHJldHVybiBSLmhlYWQoY2FuZGlkYXRlVW5pdHMuZmlsdGVyKHVuaXQgPT4gdW5pdC5pZCA+IHVuaXRJZCkpID8/IFIuaGVhZChjYW5kaWRhdGVVbml0cy5maWx0ZXIodW5pdCA9PiB1bml0LmlkIDwgdW5pdElkKSlcbiAgfVxuXG4gIHByaXZhdGUgZmluZEZpcnN0VW5pdFdpdGhBY3Rpb25Qb2ludHMgPSAoKTogT3B0aW9uPFVuaXQ+ID0+IHtcbiAgICBjb25zdCBjYW5kaWRhdGVVbml0cyA9IFIuc29ydEJ5KHVuaXQgPT4gdW5pdC5pZCwgdGhpcy53b3JsZFN0YXRlLnVuaXRzLmZpbHRlcih1bml0ID0+IHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0LmFjdGlvblBvaW50cy5jdXJyZW50ID4gMCkpXG4gICAgcmV0dXJuIFIuaGVhZChjYW5kaWRhdGVVbml0cylcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVW5pdE1vdmVkV29ybGRFdmVudCA9IChldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgdW5pdElkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLldBTEspXG4gICAgY29uc3QgdW5pdCA9IHRoaXMuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQpIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkSGV4ID0gdGhpcy5jYWxjdWxhdGVOZXdTZWxlY3RlZFVuaXRBZnRlck1vdmVPckF0dGFjayh1bml0SWQsIHRvKVxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7XG4gICAgICAgIG1vZGU6IHsgdHlwZTogJ3NlbGVjdEhleCcgfSxcbiAgICAgICAgc2VsZWN0ZWRIZXg6IHRvTWF5YmUobmV3U2VsZWN0ZWRIZXgpLFxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuXG4gICAgdGhpcy5nZXRVbml0RGlzcGxheU9iamVjdCh1bml0SWQpLm1vdmUoZnJvbSwgdG8pXG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrID0gKHVuaXRJZDogVW5pdElkLCBkZWZhdWx0TG9jYXRpb246IEhleCk6IE9wdGlvbjxIZXg+ID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0QnlJZCh1bml0SWQpXG4gICAgLy8gUmV0YWluIHNlbGVjdGlvbiBpZiB3ZSBzdGlsbCBoYXZlIGFjdGlvbiBwb2ludHMsIGVsc2Ugc2VsZWN0IG5leHQgdW5pdCAob3Igbm90aGluZylcbiAgICBsZXQgbmV3U2VsZWN0ZWRIZXhcbiAgICBpZiAoIXVuaXQgfHwgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA9PSAwKSB7XG4gICAgICBjb25zdCBuZXh0VW5pdCA9IHRoaXMuZmluZE5leHRVbml0V2l0aEFjdGlvblBvaW50cyh1bml0SWQpXG4gICAgICBuZXdTZWxlY3RlZEhleCA9IG5leHRVbml0Py5sb2NhdGlvblxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTZWxlY3RlZEhleCA9IGRlZmF1bHRMb2NhdGlvblxuICAgIH1cbiAgICByZXR1cm4gbmV3U2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tYmF0V29ybGRFdmVudCA9IChldmVudDogQ29tYmF0V29ybGRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuICAgIHRoaXMuc291bmQucGxheShBdWRpb0tleXMuQVRUQUNLKVxuICAgIGlmIChhdHRhY2tlci5raWxsZWQgfHwgZGVmZW5kZXIua2lsbGVkKSB7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoQXVkaW9LZXlzLkRFQVRIKVxuICAgIH1cbiAgICBpZiAoYXR0YWNrZXIucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCkge1xuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRIZXggPSB0aGlzLmNhbGN1bGF0ZU5ld1NlbGVjdGVkVW5pdEFmdGVyTW92ZU9yQXR0YWNrKGF0dGFja2VyLnVuaXRJZCwgYXR0YWNrZXIubG9jYXRpb24pXG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHtcbiAgICAgICAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICAgICAgICBzZWxlY3RlZEhleDogdG9NYXliZShuZXdTZWxlY3RlZEhleCksXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgY29uc3QgYXR0YWNrZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5nZXRVbml0RGlzcGxheU9iamVjdChhdHRhY2tlci51bml0SWQpXG4gICAgY29uc3QgZGVmZW5kZXJEaXNwbGF5T2JqZWN0ID0gdGhpcy5nZXRVbml0RGlzcGxheU9iamVjdChkZWZlbmRlci51bml0SWQpXG4gICAgYXR0YWNrZXJEaXNwbGF5T2JqZWN0LmF0dGFjayhhdHRhY2tlci5sb2NhdGlvbiwgZGVmZW5kZXIubG9jYXRpb24pXG4gICAgaWYgKGF0dGFja2VyLmtpbGxlZCkge1xuICAgICAgYXR0YWNrZXJEaXNwbGF5T2JqZWN0LmRlc3Ryb3koKVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKGF0dGFja2VyLnVuaXRJZClcbiAgICB9XG4gICAgaWYgKGRlZmVuZGVyLmtpbGxlZCkge1xuICAgICAgZGVmZW5kZXJEaXNwbGF5T2JqZWN0LmRlc3Ryb3koKVxuICAgICAgdGhpcy51bml0RGlzcGxheU9iamVjdHMuZGVsZXRlKGRlZmVuZGVyLnVuaXRJZClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXREaXNwbGF5T2JqZWN0ID0gKHVuaXRJZDogbnVtYmVyKTogVW5pdERpc3BsYXlPYmplY3QgPT4ge1xuICAgIGNvbnN0IHVuaXREaXNwbGF5T2JqZWN0ID0gdGhpcy51bml0RGlzcGxheU9iamVjdHMuZ2V0KHVuaXRJZClcbiAgICBpZiAoIXVuaXREaXNwbGF5T2JqZWN0KVxuICAgICAgdGhyb3cgJ0NvdWxkIG5vdCBmaW5kIHVuaXQgd2l0aCBJRCAnICsgdW5pdElkXG4gICAgcmV0dXJuIHVuaXREaXNwbGF5T2JqZWN0XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1LZXkgPSAoKSA9PiB7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5oYW5kbGVTdGFydE1vdmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVOS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkVW5pdCA9IHRoaXMuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgICBjb25zdCB1bml0VG9TZWxlY3QgPSBzZWxlY3RlZFVuaXQgPyB0aGlzLmZpbmROZXh0VW5pdFdpdGhBY3Rpb25Qb2ludHMoc2VsZWN0ZWRVbml0LmlkKSA6IHRoaXMuZmluZEZpcnN0VW5pdFdpdGhBY3Rpb25Qb2ludHMoKVxuICAgICAgaWYgKHVuaXRUb1NlbGVjdCkge1xuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleCh1bml0VG9TZWxlY3Q/LmxvY2F0aW9uKS5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFNlbGVjdGVkVW5pdCA9ICgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy5zZWxlY3RlZEhleCA/IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMuc2VsZWN0ZWRIZXgpIDogdW5kZWZpbmVkXG5cbiAgcHJpdmF0ZSBoYW5kbGVBS2V5ID0gKCkgPT4ge1xuICAgIHN3aXRjaCAodGhpcy5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhcnRBdHRhY2soKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQb2ludGVyTW92ZSA9IChwb2ludGVyKSA9PiB7XG4gICAgY29uc3QgcG9pbnRlclBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgdGhpcy5tYXBEaXNwbGF5T2JqZWN0LmhhbmRsZVBvaW50ZXJNb3ZlKHBvaW50ZXJQb2ludClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlckRvd24gPSAocG9pbnRlcjogUG9pbnRlcikgPT4ge1xuICAgIC8vIElnbm9yZSBjbGlja3Mgb24gdGhlc2UgYXMgdGhleSBoYXZlIHRoZWlyIG93biBoYW5kbGVyc1xuICAgIGZvciAoY29uc3Qgb2JqIG9mIFt0aGlzLmVuZFR1cm5UZXh0LCB0aGlzLmFjdGlvblRleHQsIHRoaXMuYWN0aW9uVGV4dDJdKVxuICAgICAgaWYgKG9iai5nZXRCb3VuZHMoKS5jb250YWlucyhwb2ludGVyLngsIHBvaW50ZXIueSkpXG4gICAgICAgIHJldHVyblxuICAgIGNvbnN0IHByZXNzZWRQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIGNvbnN0IGhleCA9IGZyb21Qb2ludChtdWx0aXBseVBvaW50KHN1YnRyYWN0UG9pbnRzKHByZXNzZWRQb2ludCwgRFJBV0lOR19PRkZTRVQpLCAxIC8gSEVYX1NJWkUpKVxuICAgIGlmIChwb2ludGVyLmJ1dHRvbiA9PSAyKSB7XG4gICAgICB0aGlzLm1vdmVPckF0dGFja0hleChoZXgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlTGVmdENsaWNrKGhleClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUxlZnRDbGljayA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IG1vZGUgPSB0aGlzLm1vZGVcbiAgICBzd2l0Y2ggKG1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5oYW5kbGVTZWxlY3RIZXgoaGV4KVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLmhhbmRsZUNvbXBsZXRlTW92ZShoZXgsIG1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21wbGV0ZUF0dGFjayhoZXgsIG1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKG1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlT3JBdHRhY2tIZXggPSAoaGV4OiBIZXgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZFVuaXQgPSB0aGlzLmZpbmRTZWxlY3RlZFVuaXQoKVxuICAgIGlmIChzZWxlY3RlZFVuaXQpIHtcbiAgICAgIGlmICh0aGlzLnVuaXRDYW5Nb3ZlVG9IZXgoc2VsZWN0ZWRVbml0LCBoZXgpKVxuICAgICAgICB0aGlzLmRpc3BhdGNoTW92ZVVuaXRBY3Rpb24oc2VsZWN0ZWRVbml0LCBoZXgpXG4gICAgICBlbHNlIGlmICh0aGlzLnVuaXRDYW5BdHRhY2tIZXgoc2VsZWN0ZWRVbml0LCBoZXgpKVxuICAgICAgICB0aGlzLmRpc3BhdGNoQXR0YWNrQWN0aW9uKHNlbGVjdGVkVW5pdCwgaGV4KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0TW9kZSA9IChtb2RlOiBNb2RlKTogdm9pZCA9PiB7XG4gICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZShtb2RlKVxuICB9XG5cbiAgcHJpdmF0ZSB1bml0Q291bGRQb3RlbnRpYWxseU1vdmUgPSAodW5pdDogVW5pdCk6IGJvb2xlYW4gPT5cbiAgICB1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDAgJiYgIXRoaXMuZ2V0Q3VycmVudFBsYXllcigpLmVuZGVkVHVyblxuXG4gIHByaXZhdGUgdW5pdENhbk1vdmVUb0hleCA9ICh1bml0OiBVbml0LCBoZXg6IEhleCk6IGJvb2xlYW4gPT5cbiAgICB0aGlzLnVuaXRDb3VsZFBvdGVudGlhbGx5TW92ZSh1bml0KVxuICAgICYmIGhleC5pc0FkamFjZW50VG8odW5pdC5sb2NhdGlvbilcbiAgICAmJiB0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KVxuICAgICYmICF0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHJpdmF0ZSB1bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayA9ICh1bml0OiBVbml0KTogYm9vbGVhbiA9PlxuICAgIHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0LmFjdGlvblBvaW50cy5jdXJyZW50ID4gMCAmJiAhdGhpcy5nZXRDdXJyZW50UGxheWVyKCkuZW5kZWRUdXJuXG5cbiAgcHJpdmF0ZSB1bml0Q2FuQXR0YWNrSGV4ID0gKHVuaXQ6IFVuaXQsIGxvY2F0aW9uOiBIZXgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24obG9jYXRpb24pXG4gICAgcmV0dXJuIHRoaXMudW5pdENvdWxkUG90ZW50aWFsbHlBdHRhY2sodW5pdClcbiAgICAgICYmIHRhcmdldFVuaXQgIT0gdW5kZWZpbmVkXG4gICAgICAmJiB0YXJnZXRVbml0LnBsYXllcklkICE9IHRoaXMucGxheWVySWRcbiAgICAgICYmIHVuaXQubG9jYXRpb24uaXNBZGphY2VudFRvKGxvY2F0aW9uKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFbnRlciA9IChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZXZlbnQuc2hpZnRLZXkpXG4gICAgICByZXR1cm5cbiAgICB0aGlzLmhhbmRsZUVuZFR1cm4oKVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFc2NhcGUgPSAoKTogdm9pZCA9PiB7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IHNlbGVjdGVkSGV4OiBub3RoaW5nIH0pXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuaGFuZGxlQWJvcnRBdHRhY2soKVxuICAgICAgICByZXR1cm5cbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVBYm9ydE1vdmUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydE1vdmUgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMubW9kZS50eXBlID09ICdtb3ZlVW5pdCcpIHtcbiAgICAgIHRoaXMuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydEF0dGFjayA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAodGhpcy5tb2RlLnR5cGUgPT0gJ2F0dGFjaycpIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUoeyB0eXBlOiAnc2VsZWN0SGV4JyB9KVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dENsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIHN3aXRjaCAodGhpcy5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhcnRNb3ZlKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVBYm9ydE1vdmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVBYm9ydEF0dGFjaygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGhpcy5tb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dDJDbGljayA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLmhhbmRsZVN0YXJ0QXR0YWNrKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuaGFuZGxlQWJvcnRBdHRhY2soKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICAvLyBTaG91bGRuJ3QgaGFwcGVuXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGhpcy5tb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRBdHRhY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHVuaXQgJiYgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseUF0dGFjayh1bml0KSkge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB1bml0LmxvY2F0aW9uLCB1bml0SWQ6IHVuaXQuaWQgfSlcbiAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRQbGF5ZXIgPSAoKTogUGxheWVyID0+IHtcbiAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFBsYXllcih0aGlzLnBsYXllcklkKVxuICAgIGlmICghcGxheWVyKVxuICAgICAgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBsYXllciB3aXRoIGlkICR7dGhpcy5wbGF5ZXJJZH1gXG4gICAgcmV0dXJuIHBsYXllclxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydE1vdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMuZmluZFNlbGVjdGVkVW5pdCgpXG4gICAgaWYgKHVuaXQgJiYgdGhpcy51bml0Q291bGRQb3RlbnRpYWxseU1vdmUodW5pdCkpIHtcbiAgICAgIGNvbnN0IG5ld01vZGU6IE1vZGUgPSB7IHR5cGU6ICdtb3ZlVW5pdCcsIGZyb206IHVuaXQubG9jYXRpb24sIHVuaXRJZDogdW5pdC5pZCB9XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbml0QnlJZCA9ICh1bml0SWQ6IG51bWJlcik6IFVuaXQgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpIHtcbiAgICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICAgIH1cbiAgICByZXR1cm4gdW5pdFxuICB9XG5cbiAgcHJpdmF0ZSBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT4gdGhpcy53b3JsZFN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG5cbiAgcHJpdmF0ZSBoYW5kbGVDb21wbGV0ZUF0dGFjayA9ICh0YXJnZXRIZXg6IEhleCwgdW5pdElkOiBVbml0SWQpID0+IHtcbiAgICBjb25zdCBhdHRhY2tlciA9IHRoaXMuZ2V0VW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICh0aGlzLnVuaXRDYW5BdHRhY2tIZXgoYXR0YWNrZXIsIHRhcmdldEhleCkpXG4gICAgICB0aGlzLmRpc3BhdGNoQXR0YWNrQWN0aW9uKGF0dGFja2VyLCB0YXJnZXRIZXgpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUNvbXBsZXRlTW92ZSA9IChkZXN0aW5hdGlvbjogSGV4LCB1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAodGhpcy51bml0Q2FuTW92ZVRvSGV4KHVuaXQsIGRlc3RpbmF0aW9uKSlcbiAgICAgIHRoaXMuZGlzcGF0Y2hNb3ZlVW5pdEFjdGlvbih1bml0LCBkZXN0aW5hdGlvbilcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0SGV4ID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgaWYgKCF0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgLy8gSWYgY2xpY2sgaXMgb3V0IG9mIGJvdW5kcywgZGVzZWxlY3QgYW55IHNlbGVjdGVkIGhleFxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRIZXgpIHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0U2VsZWN0ZWRIZXgodW5kZWZpbmVkKVxuICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSGV4ICYmIHRoaXMuc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIC8vIGlmIHNlbGVjdGVkIGhleCBpcyBjbGlja2VkLCB0b2dnbGUgc2VsZWN0aW9uIG9mZlxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0U2VsZWN0ZWRIZXgodW5kZWZpbmVkKVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRTZWxlY3RlZEhleChoZXgpXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNwYXRjaE1vdmVVbml0QWN0aW9uID0gKHVuaXQ6IFVuaXQsIGhleDogSGV4KTogdm9pZCA9PlxuICAgIHRoaXMuc2VuZEFjdGlvblRvU2VydmVyKHsgdHlwZTogJ21vdmVVbml0JywgdW5pdElkOiB1bml0LmlkLCB0bzogaGV4IH0pXG5cbiAgcHJpdmF0ZSBkaXNwYXRjaEF0dGFja0FjdGlvbiA9IChhdHRhY2tlcjogVW5pdCwgdGFyZ2V0SGV4OiBIZXgpOiB2b2lkID0+XG4gICAgdGhpcy5zZW5kQWN0aW9uVG9TZXJ2ZXIoeyB0eXBlOiAnYXR0YWNrJywgdW5pdElkOiBhdHRhY2tlci5pZCwgdGFyZ2V0OiB0YXJnZXRIZXggfSlcblxuICBwcml2YXRlIHNlbmRBY3Rpb25Ub1NlcnZlciA9IChhY3Rpb246IFdvcmxkQWN0aW9uKTogdm9pZCA9PlxuICAgIHRoaXMuc2VydmVyLmhhbmRsZUFjdGlvbih0aGlzLnBsYXllcklkLCBhY3Rpb24pXG5cbn1cblxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5cbmV4cG9ydCBjb25zdCBjZW50ZXJQb2ludCA9IChoZXg6IEhleCk6IFBvaW50ID0+XG4gICh7XG4gICAgeDogaGV4LnggKiBNYXRoLnNxcnQoMykgKyBoZXgueSAqIE1hdGguc3FydCgzKSAvIDIsXG4gICAgeTogaGV4LnkgKiAzIC8gMixcbiAgfSlcblxuZXhwb3J0IGNvbnN0IGZyb21Qb2ludCA9IChwb2ludDogUG9pbnQpOiBIZXggPT4ge1xuICBjb25zdCB4ID0gcG9pbnQueCAqIE1hdGguc3FydCgzKSAvIDMgLSBwb2ludC55IC8gM1xuICBjb25zdCB5ID0gMiAqIHBvaW50LnkgLyAzXG4gIHJldHVybiByb3VuZChuZXcgSGV4KHgsIHkpKTtcbn1cblxuY29uc3Qgcm91bmQgPSAoaGV4OiBIZXgpOiBIZXggPT4ge1xuICBjb25zdCByeCA9IE1hdGgucm91bmQoaGV4LngpXG4gIGNvbnN0IHJ5ID0gTWF0aC5yb3VuZChoZXgueSlcbiAgY29uc3QgcnogPSBNYXRoLnJvdW5kKGhleC56KVxuXG4gIGNvbnN0IHhEaWZmID0gTWF0aC5hYnMocnggLSBoZXgueClcbiAgY29uc3QgeURpZmYgPSBNYXRoLmFicyhyeSAtIGhleC55KVxuICBjb25zdCB6RGlmZiA9IE1hdGguYWJzKHJ6IC0gaGV4LnkpXG5cbiAgaWYgKHhEaWZmID4geURpZmYgJiYgeERpZmYgPiB6RGlmZilcbiAgICByZXR1cm4gbmV3IEhleCgtcnkgLSByeiwgcnkpXG4gIGVsc2UgaWYgKHlEaWZmID4gekRpZmYpXG4gICAgcmV0dXJuIG5ldyBIZXgocngsIC1yeCAtIHJ6KVxuICBlbHNlXG4gICAgcmV0dXJuIG5ldyBIZXgocngsIHJ5KVxufVxuXG5jb25zdCBoZXhBbmdsZSA9IE1hdGguUEkgLyAzXG5jb25zdCBoZXhPZmZzZXQgPSBNYXRoLlBJIC8gNlxuXG5jb25zdCBoZXhDb3JuZXIgPSAoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyLCBpOiBudW1iZXIpOiBQb2ludCA9PiB7XG4gIGNvbnN0IGFuZ2xlUmFkaWFucyA9IGhleEFuZ2xlICogaSAtIGhleE9mZnNldFxuICBjb25zdCB4ID0gY2VudGVyLnggKyBzaXplICogTWF0aC5jb3MoYW5nbGVSYWRpYW5zKVxuICBjb25zdCB5ID0gY2VudGVyLnkgKyBzaXplICogTWF0aC5zaW4oYW5nbGVSYWRpYW5zKVxuICByZXR1cm4geyB4LCB5IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBoZXhDb3JuZXJzKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8UG9pbnQ+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB5aWVsZCBoZXhDb3JuZXIoY2VudGVyLCBzaXplLCBpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtYXBIZWlnaHQgPSAobWFwOiBXb3JsZE1hcCk6IG51bWJlciA9PiBtYXAuaGVpZ2h0ICogMyAvIDJcblxuZXhwb3J0IGNvbnN0IGhleFdpZHRoID0gKGhleFNpemU6IG51bWJlcik6IG51bWJlciA9PiBoZXhTaXplICogTWF0aC5zcXJ0KDMpXG5cbiIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC1zY2VuZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUtc2NlbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBHYW1lU2NlbmVdO1xuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21vZGUnXG5pbXBvcnQgeyBNYXliZSwgbm90aGluZywgT3B0aW9uLCB0b01heWJlLCB0b09wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVTdGF0ZSB7XG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBtb2RlOiBNb2RlXG4gIHJlYWRvbmx5IHNlbGVjdGVkSGV4OiBPcHRpb248SGV4PlxuXG4gIGNvbnN0cnVjdG9yKHsgcGxheWVySWQsIG1vZGUsIHNlbGVjdGVkSGV4IH06IHsgcGxheWVySWQ6IFBsYXllcklkLCBtb2RlOiBNb2RlLCBzZWxlY3RlZEhleDogT3B0aW9uPEhleD4gfSkge1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICB0aGlzLnNlbGVjdGVkSGV4ID0gc2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICAgICAgICAgICAgICAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMubW9kZSxcbiAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEhleCA9IHRvTWF5YmUodGhpcy5zZWxlY3RlZEhleCksXG4gICAgICAgICAgICAgICAgIH06IHsgcGxheWVySWQ/OiBQbGF5ZXJJZCwgbW9kZT86IE1vZGUsIHNlbGVjdGVkSGV4PzogTWF5YmU8SGV4PiB9ID0ge30pOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIG5ldyBMb2NhbEdhbWVTdGF0ZSh7IHBsYXllcklkLCBtb2RlLCBzZWxlY3RlZEhleDogdG9PcHRpb24oc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldFNlbGVjdGVkSGV4ID0gKHNlbGVjdGVkSGV4OiBPcHRpb248SGV4Pik6IExvY2FsR2FtZVN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgc2VsZWN0ZWRIZXg6IHRvTWF5YmUoc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldE1vZGUgPSAobW9kZTogTW9kZSk6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IG1vZGUgfSlcblxuICBwdWJsaWMgZW5kVHVybiA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCA9PSAxID8gMiA6IDEsXG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogbm90aGluZyxcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUgPSBuZXcgTG9jYWxHYW1lU3RhdGUoe1xuICBwbGF5ZXJJZDogMSxcbiAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICBzZWxlY3RlZEhleDogdW5kZWZpbmVkLFxufSlcblxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgRFJBV0lOR19PRkZTRVQsIGhleENlbnRlciwgSEVYX1NJWkUgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBtdWx0aXBseVBvaW50LCBwb2ludCwgUG9pbnQsIHN1YnRyYWN0UG9pbnRzIH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IGZyb21Qb2ludCwgaGV4Q29ybmVycyB9IGZyb20gJy4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHtcbiAgQ29sb3VyTnVtYmVyLFxuICBERUZBVUxUX1RJTEVfQ09MT1VSLFxuICBIT1ZFUl9ERUZBVUxUX1RJTEVfQ09MT1VSLFxuICBIT1ZFUl9TRUxFQ1RFRF9USUxFX0NPTE9VUixcbiAgSE9WRVJfVEFSR0VUQUJMRV9USUxFX0NPTE9VUixcbiAgU0VMRUNURURfVElMRV9DT0xPVVIsXG4gIFRBUkdFVEFCTEVfVElMRV9DT0xPVVIsXG59IGZyb20gJy4vY29sb3VycydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuaW1wb3J0IHsgTG9jYWxHYW1lU3RhdGUgfSBmcm9tICcuL2xvY2FsLWdhbWUtc3RhdGUnXG5pbXBvcnQgUG9seWdvbiA9IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uXG5cbnR5cGUgVGlsZVN0YXRlID0gJ2RlZmF1bHQnIHwgJ3NlbGVjdGVkJyB8ICd0YXJnZXRhYmxlJ1xuXG5leHBvcnQgY2xhc3MgTWFwRGlzcGxheU9iamVjdCB7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZVxuICBwcml2YXRlIGhleFBvbHlnb25zOiBNYXA8U3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4gPSBuZXcgTWFwPFN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+KClcbiAgcHJpdmF0ZSBwcmV2aW91c0hvdmVyPzogSGV4XG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKSB7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lXG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICAgIGZvciAoY29uc3QgaGV4IG9mIHRoaXMud29ybGRTdGF0ZS5tYXAuZ2V0TWFwSGV4ZXMoKSlcbiAgICAgIHRoaXMuY3JlYXRlSGV4KGhleClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSGV4ID0gKGhleDogSGV4KTogdm9pZCA9PiB7XG4gICAgY29uc3QgcG9seWdvbkNlbnRlciA9IGhleENlbnRlcihoZXgpXG4gICAgY29uc3QgcG9seWdvbiA9IHRoaXMuYWRkUG9seWdvbihwb2x5Z29uQ2VudGVyLCBIRVhfU0laRSlcbiAgICB0aGlzLmhleFBvbHlnb25zLnNldChoZXgudG9TdHJpbmcoKSwgcG9seWdvbilcbiAgfVxuXG4gIHByaXZhdGUgYWRkUG9seWdvbihjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIpOiBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbiB7XG4gICAgY29uc3QgdmVydGljZXMgPSBbLi4uaGV4Q29ybmVycyhwb2ludCgwLCAwKSwgc2l6ZSldXG4gICAgcmV0dXJuIHRoaXMuc2NlbmUuYWRkLnBvbHlnb24oY2VudGVyLngsIGNlbnRlci55LCB2ZXJ0aWNlcylcbiAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgIC5zZXRTdHJva2VTdHlsZSgzLCAweDAwMDAwMClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0ZVVwZGF0ZWQgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICgpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldEZpbGxTdHlsZSh0aGlzLmNhbGN1bGF0ZUNvbG91cihoZXgpKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pXG4gICAgICB0aHJvdyBgTm8gcG9seWdvbiBmb3VuZCBmb3IgJHtoZXh9YFxuICAgIHJldHVybiBwb2x5Z29uXG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVRpbGVTdGF0ZSA9IChoZXg6IEhleCk6IFRpbGVTdGF0ZSA9PiB7XG4gICAgY29uc3QgeyBwbGF5ZXJJZCwgIHNlbGVjdGVkSGV4LCBtb2RlIH0gPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09ICdtb3ZlVW5pdCcpIHtcbiAgICAgIGlmIChoZXguaXNBZGphY2VudFRvKHNlbGVjdGVkSGV4ISkgJiYgIXRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGhleCkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09ICdhdHRhY2snKSB7XG4gICAgICBpZiAoaGV4LmlzQWRqYWNlbnRUbyhzZWxlY3RlZEhleCEpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgIT0gcGxheWVySWQpIHtcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldGFibGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdkZWZhdWx0J1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVDb2xvdXIgPSAoaGV4OiBIZXgpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBERUZBVUxUX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBTRUxFQ1RFRF9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQ09MT1VSXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGlsZVN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlSG92ZXJDb2xvdXIgPSAoaGV4OiBIZXgpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9ERUZBVUxUX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9TRUxFQ1RFRF9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9UQVJHRVRBQkxFX1RJTEVfQ09MT1VSXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGlsZVN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocG9pbnRlclBvaW50LCBEUkFXSU5HX09GRlNFVCksIDEgLyBIRVhfU0laRSkpXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3ZlciAmJiB0aGlzLnByZXZpb3VzSG92ZXIuZXF1YWxzKGhleCkpXG4gICAgICByZXR1cm5cbiAgICBpZiAodGhpcy5wcmV2aW91c0hvdmVyKSB7XG4gICAgICB0aGlzLmdldEhleFBvbHlnb24odGhpcy5wcmV2aW91c0hvdmVyKS5zZXRGaWxsU3R5bGUodGhpcy5jYWxjdWxhdGVDb2xvdXIodGhpcy5wcmV2aW91c0hvdmVyKSlcbiAgICAgIHRoaXMucHJldmlvdXNIb3ZlciA9IHVuZGVmaW5lZFxuICAgIH1cbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldEZpbGxTdHlsZSh0aGlzLmNhbGN1bGF0ZUhvdmVyQ29sb3VyKGhleCkpXG4gICAgICB0aGlzLnByZXZpb3VzSG92ZXIgPSBoZXhcbiAgICB9XG4gIH1cblxufSIsImV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBwb2ludCA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvaW50ID0+ICh7IHgsIHkgfSlcblxuZXhwb3J0IGNvbnN0IG11bHRpcGx5UG9pbnQgPSAocG9pbnQ6IFBvaW50LCBuOiBudW1iZXIpOiBQb2ludCA9PiAoeyB4OiBwb2ludC54ICogbiwgeTogcG9pbnQueSAqIG4gfSlcblxuZXhwb3J0IGNvbnN0IGFkZFBvaW50cyA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KTogUG9pbnQgPT4gKHsgeDogcG9pbnQxLnggKyBwb2ludDIueCwgeTogcG9pbnQxLnkgKyBwb2ludDIueSB9KVxuXG5leHBvcnQgY29uc3Qgc3VidHJhY3RQb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IFBvaW50ID0+ICh7XG4gIHg6IHBvaW50MS54IC0gcG9pbnQyLngsXG4gIHk6IHBvaW50MS55IC0gcG9pbnQyLnksXG59KVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgVW5pdCB9IGZyb20gJy4uL3dvcmxkL3VuaXQnXG5pbXBvcnQgeyBoZXhDZW50ZXIgfSBmcm9tICcuL2dhbWUtc2NlbmUnXG5pbXBvcnQgeyBIRUFMVEhfQk9SREVSX0NPTE9VUiwgSEVBTFRIX0VNUFRZX0NPTE9VUiwgSEVBTFRIX0ZVTExfQ09MT1VSLCBQTEFZRVJfMV9USU5ULCBQTEFZRVJfMl9USU5UIH0gZnJvbSAnLi9jb2xvdXJzJ1xuaW1wb3J0IHsgYWRkUG9pbnRzLCBQb2ludCB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcblxuY29uc3QgSEVBTFRIX0JBUl9XSURUSCA9IDUwXG5jb25zdCBIRUFMVEhfQkFSX0hFSUdIVCA9IDEyXG5jb25zdCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MgPSAyXG5jb25zdCBJTUFHRV9PRkZTRVQgPSB7IHg6IDAsIHk6IDQgfVxuY29uc3QgSEVBTFRIX0JBUl9PRkZTRVQgPSB7IHg6IC0yNSwgeTogLTQwIH1cblxuZXhwb3J0IGNsYXNzIFVuaXREaXNwbGF5T2JqZWN0IHtcbiAgcHJpdmF0ZSByZWFkb25seSBzY2VuZTogUGhhc2VyLlNjZW5lXG4gIHByaXZhdGUgdW5pdDogVW5pdFxuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgcHJpdmF0ZSByZWFkb25seSBoZWFsdGhCYXJHcmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzXG5cbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgdW5pdDogVW5pdCkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMudW5pdCA9IHVuaXRcbiAgICB0aGlzLmltYWdlID0gc2NlbmUuYWRkLmltYWdlKDAsIDAsICdsbGFtYScpXG4gICAgICAuc2V0U2NhbGUoMC44KVxuICAgICAgLnNldFRpbnQodGhpcy51bml0LnBsYXllcklkID09IDEgPyBQTEFZRVJfMV9USU5UIDogUExBWUVSXzJfVElOVClcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzID0gc2NlbmUuYWRkLmdyYXBoaWNzKClcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGVhbHRoQmFyUG9zaXRpb24gPSAocG9pbnQ6IFBvaW50KTogUG9pbnQgPT4gYWRkUG9pbnRzKHBvaW50LCBIRUFMVEhfQkFSX09GRlNFVClcblxuICBwdWJsaWMgc3luY1NjZW5lID0gKCkgPT4ge1xuICAgIGNvbnN0IHVuaXRQb2ludCA9IGhleENlbnRlcih0aGlzLnVuaXQubG9jYXRpb24pXG4gICAgdGhpcy5pbWFnZS5zZXRQb3NpdGlvbih1bml0UG9pbnQueCArIElNQUdFX09GRlNFVC54LCB1bml0UG9pbnQueSArIElNQUdFX09GRlNFVC55KVxuICAgIHRoaXMuc3luY0hlYWx0aEJhcih1bml0UG9pbnQpXG4gIH1cblxuICBwcml2YXRlIHN5bmNIZWFsdGhCYXIgPSAodW5pdFBvaW50OiBQb2ludCkgPT4ge1xuICAgIGNvbnN0IGhlYWx0aEJhclBvc2l0aW9uID0gdGhpcy5nZXRIZWFsdGhCYXJQb3NpdGlvbih1bml0UG9pbnQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5zZXRQb3NpdGlvbihoZWFsdGhCYXJQb3NpdGlvbi54LCBoZWFsdGhCYXJQb3NpdGlvbi55KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuY2xlYXIoKVxuXG4gICAgLy8gRHJhdyBib3JkZXJcbiAgICBjb25zdCBpbm5lcldpZHRoID0gSEVBTFRIX0JBUl9XSURUSCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICBjb25zdCBpbm5lckhlaWdodCA9IEhFQUxUSF9CQVJfSEVJR0hUIC0gMiAqIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTU1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9CT1JERVJfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoMCwgMCwgSEVBTFRIX0JBUl9XSURUSCwgSEVBTFRIX0JBUl9IRUlHSFQpXG5cbiAgICAvLyBEcmF3IGVtcHR5IGJhY2tncm91bmRcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRU1QVFlfQ09MT1VSKVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFJlY3QoSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0KVxuXG4gICAgLy8gRmlsbCBpbiBiYXJcbiAgICBjb25zdCB7IGN1cnJlbnQsIG1heCB9ID0gdGhpcy51bml0LmhpdFBvaW50c1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZmlsbFN0eWxlKEhFQUxUSF9GVUxMX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBpbm5lcldpZHRoICogY3VycmVudCAvIG1heCwgaW5uZXJIZWlnaHQpXG4gIH1cblxuICBwdWJsaWMgdW5pdFVwZGF0ZWQgPSAodW5pdDogVW5pdCkgPT4ge1xuICAgIGFzc2VydCh1bml0LmlkID09IHRoaXMudW5pdC5pZClcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gIH1cblxuICBwdWJsaWMgbW92ZSA9IChmcm9tOiBIZXgsIHRvOiBIZXgpID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYXR0YWNrID0gKGZyb206IEhleCwgdG86IEhleCkgPT4ge1xuICAgIGNvbnN0IGJlZm9yZUNvb3JkcyA9IGhleENlbnRlcihmcm9tKVxuICAgIGNvbnN0IGFmdGVyQ29vcmRzID0gaGV4Q2VudGVyKHRvKVxuICAgIHRoaXMuaW1hZ2Uuc2V0RmxpcFgoYWZ0ZXJDb29yZHMueCA8IGJlZm9yZUNvb3Jkcy54KVxuICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmltYWdlLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBJTUFHRV9PRkZTRVQpLFxuICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgIGVhc2U6ICdDdWJpYycsXG4gICAgICB5b3lvOiB0cnVlLFxuICAgIH0pXG4gICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIEhFQUxUSF9CQVJfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5kZXN0cm95KClcbiAgICB0aGlzLmltYWdlLmRlc3Ryb3koKVxuICB9XG59XG5cbnR5cGUgVHdlZW5YWSA9IHsgeDogeyBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIgfSwgeTogeyBmcm9tOiBudW1iZXIsIHRvOiBudW1iZXIgfSB9XG5cbmNvbnN0IGNhbGN1bGF0ZVR3ZWVuWFkgPSAoZnJvbTogUG9pbnQsIHRvOiBQb2ludCwgb2Zmc2V0OiBQb2ludCk6IFR3ZWVuWFkgPT5cbiAgKHtcbiAgICB4OiB7XG4gICAgICBmcm9tOiBmcm9tLnggKyBvZmZzZXQueCxcbiAgICAgIHRvOiB0by54ICsgb2Zmc2V0LngsXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBmcm9tOiBmcm9tLnkgKyBvZmZzZXQueSxcbiAgICAgIHRvOiB0by55ICsgb2Zmc2V0LnksXG4gICAgfSxcbiAgfSlcblxuIiwiaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSwgUGxheWVySWQsIFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEF0dGFja0FjdGlvbiwgTW92ZVVuaXRXb3JsZEFjdGlvbiwgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFVuaXRNb3ZlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgVW5yZWFjaGFibGVDYXNlRXJyb3IgfSBmcm9tICcuLi91dGlsL3VucmVhY2hhYmxlLWNhc2UtZXJyb3InXG5cbmV4cG9ydCB0eXBlIFdvcmxkRXZlbnRMaXN0ZW5lciA9IChldmVudDogV29ybGRFdmVudCkgPT4gdm9pZFxuXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICBwcml2YXRlIGxpc3RlbmVyczogV29ybGRFdmVudExpc3RlbmVyW10gPSBbXVxuXG4gIHB1YmxpYyBhZGRMaXN0ZW5lciA9IChsaXN0ZW5lcjogV29ybGRFdmVudExpc3RlbmVyKSA9PiB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKVxuXG4gIHByaXZhdGUgbm90aWZ5TGlzdGVuZXJzID0gKGV2ZW50OiBXb3JsZEV2ZW50KTogdm9pZCA9PiB7XG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLmxpc3RlbmVycylcbiAgICAgIGxpc3RlbmVyKGV2ZW50KVxuICB9XG5cbiAgcHVibGljIGhhbmRsZUFjdGlvbiA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogV29ybGRBY3Rpb24pOiB2b2lkID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLmhhbmRsZUF0dGFjayhwbGF5ZXJJZCwgYWN0aW9uKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLmhhbmRsZU1vdmVVbml0KHBsYXllcklkLCBhY3Rpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdlbmRUdXJuJzpcbiAgICAgICAgdGhpcy5oYW5kbGVFbmRUdXJuKHBsYXllcklkKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGFjdGlvbilcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogQXR0YWNrQWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRhcmdldCB9ID0gYWN0aW9uXG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIWF0dGFja2VyKVxuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgY29uc3QgZnJvbSA9IGF0dGFja2VyLmxvY2F0aW9uXG4gICAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0YXJnZXQpKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBhdHRhY2sgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHtmcm9tfSB0byAke3RhcmdldH1gXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRhcmdldClcbiAgICBpZiAoIWRlZmVuZGVyKVxuICAgICAgdGhyb3cgYE5vIHRhcmdldCB1bml0IHRvIGF0dGFjayBhdCAke3RhcmdldH1gXG4gICAgaWYgKHBsYXllcklkID09IGRlZmVuZGVyLnBsYXllcklkKVxuICAgICAgdGhyb3cgYENhbm5vdCBhdHRhY2sgb3duIHVuaXRgXG4gICAgaWYgKGF0dGFja2VyLmFjdGlvblBvaW50cy5jdXJyZW50IDwgMSlcbiAgICAgIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gYXR0YWNrYFxuXG4gICAgY29uc3QgYXR0YWNrZXJEYW1hZ2UgPSBNYXRoLm1pbihhdHRhY2tlci5oaXRQb2ludHMuY3VycmVudCwgMTApXG4gICAgY29uc3QgZGVmZW5kZXJEYW1hZ2UgPSBNYXRoLm1pbihkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCwgMjApXG4gICAgY29uc3QgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQgPSB7XG4gICAgICB0eXBlOiAnY29tYmF0JyxcbiAgICAgIGF0dGFja2VyOiB7XG4gICAgICAgIHBsYXllcklkOiBhdHRhY2tlci5wbGF5ZXJJZCxcbiAgICAgICAgdW5pdElkOiBhdHRhY2tlci5pZCxcbiAgICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgICBkYW1hZ2U6IGF0dGFja2VyRGFtYWdlLFxuICAgICAgICBraWxsZWQ6IGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50ID09IGF0dGFja2VyRGFtYWdlLFxuICAgICAgfSxcbiAgICAgIGRlZmVuZGVyOiB7XG4gICAgICAgIHBsYXllcklkOiBkZWZlbmRlci5wbGF5ZXJJZCxcbiAgICAgICAgdW5pdElkOiBkZWZlbmRlci5pZCxcbiAgICAgICAgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uLFxuICAgICAgICBkYW1hZ2U6IGRlZmVuZGVyRGFtYWdlLFxuICAgICAgICBraWxsZWQ6IGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50ID09IGRlZmVuZGVyRGFtYWdlLFxuICAgICAgfSxcbiAgICAgIGFjdGlvblBvaW50c0NvbnN1bWVkOiAxLFxuICAgIH1cbiAgICB0aGlzLndvcmxkU3RhdGUgPSBhcHBseUV2ZW50KHRoaXMud29ybGRTdGF0ZSwgZXZlbnQpXG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gIH1cblxuXG4gIHByaXZhdGUgaGFuZGxlTW92ZVVuaXQgPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IE1vdmVVbml0V29ybGRBY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IHVuaXRJZCwgdG8gfSA9IGFjdGlvblxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpXG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICBjb25zdCBmcm9tID0gdW5pdC5sb2NhdGlvblxuICAgIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSlcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odG8pKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpXG4gICAgICB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIG1vdmVgXG4gICAgY29uc3QgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQgPSB7XG4gICAgICB0eXBlOiAndW5pdE1vdmVkJyxcbiAgICAgIHBsYXllcklkOiBwbGF5ZXJJZCxcbiAgICAgIGFjdGlvblBvaW50c0NvbnN1bWVkOiAxLFxuICAgICAgdW5pdElkLFxuICAgICAgZnJvbSxcbiAgICAgIHRvLFxuICAgIH1cbiAgICB0aGlzLndvcmxkU3RhdGUgPSBhcHBseUV2ZW50KHRoaXMud29ybGRTdGF0ZSwgZXZlbnQpXG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVuZFR1cm4ocGxheWVySWQ6IFBsYXllcklkKTogdm9pZCB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcy53b3JsZFN0YXRlLmZpbmRQbGF5ZXIocGxheWVySWQpXG4gICAgaWYgKCFwbGF5ZXIpXG4gICAgICB0aHJvdyBgTm8gcGxheWVyIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gICAgaWYgKHBsYXllci5lbmRlZFR1cm4pXG4gICAgICB0aHJvdyBgUGxheWVyIGhhcyBhbHJlYWR5IGVuZGVkIHRoZWlyIHR1cm5gXG4gICAgbGV0IHBsYXllcnNZZXRUb0VuZFRoZWlyVHVybiA9IHRoaXMud29ybGRTdGF0ZS5wbGF5ZXJzLmZpbHRlcihwbGF5ZXIgPT4gIXBsYXllci5lbmRlZFR1cm4pLm1hcChwbGF5ZXIgPT4gcGxheWVyLmlkKVxuICAgIGxldCB3aG9sZVR1cm5FbmRlZCA9IFIuZXF1YWxzKHBsYXllcnNZZXRUb0VuZFRoZWlyVHVybiwgW3BsYXllcklkXSlcbiAgICBjb25zdCBldmVudDogV29ybGRFdmVudCA9IHdob2xlVHVybkVuZGVkID8geyB0eXBlOiAnd2hvbGVUdXJuRW5kZWQnIH0gOiB7IHR5cGU6ICdwbGF5ZXJFbmRlZFR1cm4nLCBwbGF5ZXJJZCB9XG4gICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudCh0aGlzLndvcmxkU3RhdGUsIGV2ZW50KVxuICAgIHRoaXMubm90aWZ5TGlzdGVuZXJzKGV2ZW50KVxuICB9XG59IiwiZXhwb3J0IHR5cGUgT3B0aW9uPFQ+ID0gVCB8IHVuZGVmaW5lZFxuXG5leHBvcnQgaW50ZXJmYWNlIEp1c3Q8VD4ge1xuICB0eXBlOiAnanVzdCdcbiAgaXRlbTogVFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5vdGhpbmcge1xuICB0eXBlOiAnbm90aGluZydcbn1cblxuZXhwb3J0IHR5cGUgTWF5YmU8VD4gPSBKdXN0PFQ+IHwgTm90aGluZ1xuXG5leHBvcnQgY29uc3QgdG9NYXliZSA9IDxUPihvcHRpb246IE9wdGlvbjxUPik6IE1heWJlPFQ+ID0+XG4gIG9wdGlvbiA9PSB1bmRlZmluZWQgPyBub3RoaW5nIDoganVzdChvcHRpb24pXG5cbmV4cG9ydCBjb25zdCB0b09wdGlvbiA9IDxUPihtYXliZTogTWF5YmU8VD4pOiBPcHRpb248VD4gPT4ge1xuICBzd2l0Y2ggKG1heWJlLnR5cGUpIHtcbiAgICBjYXNlICdqdXN0JzpcbiAgICAgIHJldHVybiBtYXliZS5pdGVtXG4gICAgY2FzZSAnbm90aGluZyc6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG5vdGhpbmc6IE5vdGhpbmcgPSB7IHR5cGU6ICdub3RoaW5nJyB9XG5leHBvcnQgY29uc3QganVzdCA9IDxUPihpdGVtOiBUKTogSnVzdDxUPiA9PiAoe1xuICB0eXBlOiAnanVzdCcsXG4gIGl0ZW0sXG59KSIsImV4cG9ydCBjbGFzcyBVbnJlYWNoYWJsZUNhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IodmFsdWU6IG5ldmVyKSB7XG4gICAgc3VwZXIoYFVucmVhY2hhYmxlIGNhc2U6ICR7dmFsdWV9YClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuZXhwb3J0IGNsYXNzIEhleCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBnZXQgeigpOiBudW1iZXIge1xuICAgIHJldHVybiAtdGhpcy54IC0gdGhpcy55XG4gIH1cblxuICBwdWJsaWMgcGx1cyA9ICh0aGF0OiBIZXgpID0+IG5ldyBIZXgodGhpcy54ICsgdGhhdC54LCB0aGlzLnkgKyB0aGF0LnkpXG5cbiAgcHVibGljIG5laWdoYm91cnMgPSAoKTogSGV4W10gPT4gSGV4Lk5FSUdIQk9VUlMubWFwKHRoaXMucGx1cylcblxuICBwdWJsaWMgaXNBZGphY2VudFRvID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gUi5pbmNsdWRlcyh0aGF0LCB0aGlzLm5laWdoYm91cnMoKSlcblxuICBwcml2YXRlIHN0YXRpYyBORUlHSEJPVVJTOiBIZXhbXSA9IFtcbiAgICBuZXcgSGV4KDAsIDEpLFxuICAgIG5ldyBIZXgoMSwgMCksXG4gICAgbmV3IEhleCgxLCAtMSksXG4gICAgbmV3IEhleCgwLCAtMSksXG4gICAgbmV3IEhleCgtMSwgMCksXG4gICAgbmV3IEhleCgtMSwgMSksXG4gIF1cblxuICBwdWJsaWMgZXF1YWxzID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gdGhpcy54ID09IHRoYXQueCAmJiB0aGlzLnkgPT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcblxuICBwdWJsaWMgZ29MZWZ0ID0gKCk6IEhleCA9PiBuZXcgSGV4KHRoaXMueCAtIDEsIHRoaXMueSlcbiAgcHVibGljIGdvUmlnaHQgPSAoKTogSGV4ID0+IG5ldyBIZXgodGhpcy54ICsgMSwgdGhpcy55KVxuXG4gIHB1YmxpYyBnb05vcnRoV2VzdCA9ICgpOiBIZXggPT4gbmV3IEhleCh0aGlzLngsIHRoaXMueSAtIDEpXG4gIHB1YmxpYyBnb1NvdXRoRWFzdCA9ICgpOiBIZXggPT4gbmV3IEhleCh0aGlzLngsIHRoaXMueSArIDEpXG4gIHB1YmxpYyBnb05vcnRoRWFzdCA9ICgpOiBIZXggPT4gbmV3IEhleCh0aGlzLnggKyAxLCB0aGlzLnkgLSAxKVxuICBwdWJsaWMgZ29Tb3V0aFdlc3QgPSAoKTogSGV4ID0+IG5ldyBIZXgodGhpcy54IC0gMSwgdGhpcy55ICsgMSlcbn1cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5pbXBvcnQgeyBQbGF5ZXJJZCB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25Qb2ludHMge1xuICByZWFkb25seSBjdXJyZW50OiBudW1iZXJcbiAgcmVhZG9ubHkgbWF4OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IGN1cnJlbnQsIG1heCB9OiB7IGN1cnJlbnQ6IG51bWJlciwgbWF4OiBudW1iZXIgfSkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnRcbiAgICB0aGlzLm1heCA9IG1heFxuICAgIGFzc2VydChtYXggPiAwKVxuICAgIGFzc2VydChjdXJyZW50ID49IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPD0gbWF4KVxuICB9XG5cbiAgcHVibGljIHJlZHVjZSA9IChwb2ludHM6IG51bWJlcik6IEFjdGlvblBvaW50cyA9PiB0aGlzLmNvcHkoeyBjdXJyZW50OiB0aGlzLmN1cnJlbnQgLSBwb2ludHMgfSlcblxuICBwdWJsaWMgY29weSA9ICh7IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQsIG1heCA9IHRoaXMubWF4IH06IHsgY3VycmVudD86IG51bWJlciwgbWF4PzogbnVtYmVyIH0gPSB7fSk6IEFjdGlvblBvaW50cyA9PlxuICAgIG5ldyBBY3Rpb25Qb2ludHMoeyBjdXJyZW50LCBtYXggfSlcblxuICBwdWJsaWMgcmVmcmVzaCA9ICgpOiBBY3Rpb25Qb2ludHMgPT4gbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IHRoaXMubWF4LCBtYXg6IHRoaXMubWF4IH0pXG5cbn1cblxuZXhwb3J0IGNsYXNzIEhpdFBvaW50cyB7XG4gIHJlYWRvbmx5IGN1cnJlbnQ6IG51bWJlclxuICByZWFkb25seSBtYXg6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgY3VycmVudCwgbWF4IH06IHsgY3VycmVudDogbnVtYmVyLCBtYXg6IG51bWJlciB9KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMubWF4ID0gbWF4XG4gICAgYXNzZXJ0KG1heCA+IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPj0gMClcbiAgICBhc3NlcnQoY3VycmVudCA8PSBtYXgpXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogSGl0UG9pbnRzID0+IHRoaXMuY29weSh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCAtIHBvaW50cyB9KVxuXG4gIHB1YmxpYyBjb3B5ID0gKHsgY3VycmVudCA9IHRoaXMuY3VycmVudCwgbWF4ID0gdGhpcy5tYXggfTogeyBjdXJyZW50PzogbnVtYmVyLCBtYXg/OiBudW1iZXIgfSA9IHt9KTogSGl0UG9pbnRzID0+XG4gICAgbmV3IEhpdFBvaW50cyh7IGN1cnJlbnQsIG1heCB9KVxufVxuXG5leHBvcnQgY2xhc3MgVW5pdCB7XG4gIHJlYWRvbmx5IGlkOiBVbml0SWRcbiAgcmVhZG9ubHkgcGxheWVySWQ6IFBsYXllcklkXG4gIHJlYWRvbmx5IG5hbWU6IHN0cmluZ1xuICByZWFkb25seSBsb2NhdGlvbjogSGV4XG4gIHJlYWRvbmx5IGhpdFBvaW50czogSGl0UG9pbnRzXG4gIHJlYWRvbmx5IGFjdGlvblBvaW50czogQWN0aW9uUG9pbnRzXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgICAgICAgICAgICAgIGlkLCBwbGF5ZXJJZCwgbmFtZSwgbG9jYXRpb24sIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzLFxuICAgICAgICAgICAgICB9OiB7IGlkOiBVbml0SWQsIHBsYXllcklkOiBQbGF5ZXJJZCwgbmFtZTogc3RyaW5nLCBsb2NhdGlvbjogSGV4LCBoaXRQb2ludHM6IEhpdFBvaW50cywgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHMgfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgICB0aGlzLmhpdFBvaW50cyA9IGhpdFBvaW50c1xuICAgIHRoaXMuYWN0aW9uUG9pbnRzID0gYWN0aW9uUG9pbnRzXG4gIH1cblxuICBwdWJsaWMgZGFtYWdlID0gKHBvaW50czogbnVtYmVyKTogVW5pdCA9PiB0aGlzLmNvcHkoeyBoaXRQb2ludHM6IHRoaXMuaGl0UG9pbnRzLmRhbWFnZShwb2ludHMpIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoe1xuICAgICAgICAgICAgICAgICAgIGlkID0gdGhpcy5pZCxcbiAgICAgICAgICAgICAgICAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgICAgICAgICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb24sXG4gICAgICAgICAgICAgICAgICAgaGl0UG9pbnRzID0gdGhpcy5oaXRQb2ludHMsXG4gICAgICAgICAgICAgICAgICAgYWN0aW9uUG9pbnRzID0gdGhpcy5hY3Rpb25Qb2ludHMsXG4gICAgICAgICAgICAgICAgIH06IHsgaWQ/OiBVbml0SWQsIHBsYXllcklkPzogUGxheWVySWQsIG5hbWU/OiBzdHJpbmcsIGxvY2F0aW9uPzogSGV4LCBoaXRQb2ludHM/OiBIaXRQb2ludHMsIGFjdGlvblBvaW50cz86IEFjdGlvblBvaW50cyB9ID0ge30pOiBVbml0ID0+XG4gICAgbmV3IFVuaXQoeyBpZCwgcGxheWVySWQsIG5hbWUsIGxvY2F0aW9uLCBoaXRQb2ludHMsIGFjdGlvblBvaW50cyB9KVxuXG4gIHB1YmxpYyBtb3ZlID0gKGxvY2F0aW9uOiBIZXgsIGFjdGlvblBvaW50c0NvbnN1bWVkOiBudW1iZXIpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgbG9jYXRpb24sIGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxuXG4gIHB1YmxpYyByZWR1Y2VBY3Rpb25Qb2ludHMgPSAoYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBhY3Rpb25Qb2ludHM6IHRoaXMuYWN0aW9uUG9pbnRzLnJlZHVjZShhY3Rpb25Qb2ludHNDb25zdW1lZCkgfSlcblxuICBwdWJsaWMgcmVmcmVzaEFjdGlvblBvaW50cyA9ICgpOiBVbml0ID0+XG4gICAgdGhpcy5jb3B5KHsgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWZyZXNoKCkgfSlcbn1cblxuZXhwb3J0IHR5cGUgVW5pdElkID0gbnVtYmVyIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4vd29ybGQtc3RhdGUnXG5pbXBvcnQge1xuICBDb21iYXRXb3JsZEV2ZW50LFxuICBQbGF5ZXJFbmRlZFR1cm5Xb3JsZEV2ZW50LFxuICBVbml0TW92ZWRXb3JsZEV2ZW50LFxuICBXb3JsZEV2ZW50LFxufSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBjYXNlICdwbGF5ZXJFbmRlZFR1cm4nOlxuICAgICAgcmV0dXJuIGhhbmRsZVBsYXllckVuZGVkVHVybihzdGF0ZSwgZXZlbnQpXG4gICAgY2FzZSAnd2hvbGVUdXJuRW5kZWQnOlxuICAgICAgcmV0dXJuIGhhbmRsZVdob2xlVHVybkVuZGVkKHN0YXRlKVxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IoZXZlbnQpXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlVW5pdE1vdmVkID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogVW5pdE1vdmVkV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHVuaXRJZCwgcGxheWVySWQsIGZyb20sIHRvIH0gPSBldmVudFxuICBpZiAoIWZyb20uaXNBZGphY2VudFRvKHRvKSlcbiAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gIGlmICghc3RhdGUubWFwLmlzSW5Cb3VuZHModG8pKVxuICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gIGNvbnN0IHVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICBpZiAoIXVuaXQpXG4gICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gIGlmIChzdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oZnJvbSk/LmlkICE9IHVuaXRJZClcbiAgICB0aHJvdyBgSW52YWxpZCBmcm9tIGxvY2F0aW9uIGZvciB1bml0IG1vdmVtZW50YFxuICBpZiAoc3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRvKSlcbiAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIGFscmVhZHktb2NjdXBpZWQgaGV4YFxuICBpZiAodW5pdC5wbGF5ZXJJZCAhPSBwbGF5ZXJJZClcbiAgICB0aHJvdyBgSW52YWxpZCBhdHRlbXB0IHRvIG1vdmUgdW5pdCBvZiBhbm90aGVyIHBsYXllcmBcbiAgaWYgKHVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZClcbiAgICB0aHJvdyBgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgXG4gIHJldHVybiBzdGF0ZS5yZXBsYWNlVW5pdCh1bml0LmlkLCB1bml0Lm1vdmUodG8sIGV2ZW50LmFjdGlvblBvaW50c0NvbnN1bWVkKSlcbn1cblxuY29uc3QgaGFuZGxlQ29tYmF0ID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogQ29tYmF0V29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IGF0dGFja2VyLCBkZWZlbmRlciB9ID0gZXZlbnRcblxuICBjb25zdCBhdHRhY2tlclVuaXQgPSBzdGF0ZS5maW5kVW5pdEJ5SWQoYXR0YWNrZXIudW5pdElkKVxuICBpZiAoIWF0dGFja2VyVW5pdClcbiAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7YXR0YWNrZXIudW5pdElkfWBcbiAgaWYgKGF0dGFja2VyVW5pdC5sb2NhdGlvbiAhPSBhdHRhY2tlci5sb2NhdGlvbilcbiAgICB0aHJvdyBgSW52YWxpZCBsb2NhdGlvbiBmb3IgYXR0YWNrZXJgXG5cbiAgY29uc3QgZGVmZW5kZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGRlZmVuZGVyLnVuaXRJZClcbiAgaWYgKCFkZWZlbmRlclVuaXQpXG4gICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2RlZmVuZGVyLnVuaXRJZH1gXG4gIGlmIChkZWZlbmRlclVuaXQubG9jYXRpb24gIT0gZGVmZW5kZXIubG9jYXRpb24pXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGRlZmVuZGVyYFxuXG4gIGlmIChhdHRhY2tlclVuaXQucGxheWVySWQgPT0gZGVmZW5kZXJVbml0LnBsYXllcklkKVxuICAgIHRocm93IGBJbnZhbGlkIGNvbWJhdCB3aXRoIHNlbGZgXG4gIGlmICghYXR0YWNrZXIubG9jYXRpb24uaXNBZGphY2VudFRvKGRlZmVuZGVyLmxvY2F0aW9uKSlcbiAgICB0aHJvdyBgSW52YWxpZCBjb21iYXQgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHthdHRhY2tlci5sb2NhdGlvbn0gdG8gJHtkZWZlbmRlci5sb2NhdGlvbn1gXG4gIGlmIChhdHRhY2tlclVuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnQgPCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZClcbiAgICB0aHJvdyBgSW52YWxpZCBhY3Rpb24gcG9pbnQgdXNhZ2VgXG5cbiAgbGV0IG5ld1N0YXRlID0gc3RhdGVcblxuICBpZiAoYXR0YWNrZXIua2lsbGVkKVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVtb3ZlVW5pdChhdHRhY2tlclVuaXQuaWQpXG4gIGVsc2VcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlcGxhY2VVbml0KGF0dGFja2VyVW5pdC5pZCwgYXR0YWNrZXJVbml0LmRhbWFnZShhdHRhY2tlci5kYW1hZ2UpLnJlZHVjZUFjdGlvblBvaW50cyhldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG5cbiAgaWYgKGRlZmVuZGVyLmtpbGxlZClcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoZGVmZW5kZXJVbml0LmlkKVxuICBlbHNlXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChkZWZlbmRlclVuaXQuaWQsIGRlZmVuZGVyVW5pdC5kYW1hZ2UoZGVmZW5kZXIuZGFtYWdlKSlcblxuICByZXR1cm4gbmV3U3RhdGVcbn1cblxuY29uc3QgaGFuZGxlUGxheWVyRW5kZWRUdXJuID0gKHN0YXRlOiBXb3JsZFN0YXRlLCBldmVudDogUGxheWVyRW5kZWRUdXJuV29ybGRFdmVudCk6IFdvcmxkU3RhdGUgPT4ge1xuICBjb25zdCB7IHBsYXllcklkIH0gPSBldmVudFxuICBjb25zdCBwbGF5ZXIgPSBzdGF0ZS5maW5kUGxheWVyKHBsYXllcklkKVxuICBpZiAoIXBsYXllcilcbiAgICB0aHJvdyBgTm8gcGxheWVyIGZvdW5kIHdpdGggSUQgJHtwbGF5ZXJJZH1gXG4gIHJldHVybiBzdGF0ZS5yZXBsYWNlUGxheWVyKHBsYXllcklkLCBwbGF5ZXIuY29weSh7IGVuZGVkVHVybjogdHJ1ZSB9KSlcbn1cblxuY29uc3QgaGFuZGxlV2hvbGVUdXJuRW5kZWQgPSAoc3RhdGU6IFdvcmxkU3RhdGUpOiBXb3JsZFN0YXRlID0+XG4gIHN0YXRlLmNvcHkoe1xuICAgIHVuaXRzOiBzdGF0ZS51bml0cy5tYXAodW5pdCA9PiB1bml0LnJlZnJlc2hBY3Rpb25Qb2ludHMoKSksXG4gICAgcGxheWVyczogc3RhdGUucGxheWVycy5tYXAocGxheWVyID0+IHBsYXllci5jb3B5KHsgZW5kZWRUdXJuOiBmYWxzZSB9KSksXG4gIH0pXG5cbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmV4cG9ydCBjbGFzcyBXb3JsZE1hcCB7XG4gIHJlYWRvbmx5IHdpZHRoOiBudW1iZXJcbiAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih7IHdpZHRoLCBoZWlnaHQgfTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9KSB7XG4gICAgYXNzZXJ0KHdpZHRoID4gMClcbiAgICBhc3NlcnQoaGVpZ2h0ID4gMClcbiAgICB0aGlzLndpZHRoID0gd2lkdGhcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodFxuICB9XG5cbiAgcHVibGljIGlzSW5Cb3VuZHMgPSAoaGV4OiBIZXgpOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBxID0gaGV4LnggKyBNYXRoLmZsb29yKGhleC55IC8gMilcbiAgICByZXR1cm4gMCA8PSBxICYmIHEgPCB0aGlzLndpZHRoICYmIDAgPD0gaGV4LnkgJiYgaGV4LnkgPCB0aGlzLmhlaWdodFxuICB9XG5cbiAgcHVibGljKiBnZXRNYXBIZXhlcygpOiBJdGVyYWJsZUl0ZXJhdG9yPEhleD4ge1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgdGhpcy5oZWlnaHQ7IHIrKykge1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLndpZHRoOyBjKyspIHtcbiAgICAgICAgY29uc3QgeCA9IC1NYXRoLmZsb29yKHIgLyAyKSArIGNcbiAgICAgICAgY29uc3QgaGV4ID0gbmV3IEhleCh4LCByKVxuICAgICAgICB5aWVsZCBoZXhcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgeyBXb3JsZE1hcCB9IGZyb20gJy4vd29ybGQtbWFwJ1xuaW1wb3J0IHsgQWN0aW9uUG9pbnRzLCBIaXRQb2ludHMsIFVuaXQsIFVuaXRJZCB9IGZyb20gJy4vdW5pdCdcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICByZWFkb25seSBpZDogUGxheWVySWRcbiAgcmVhZG9ubHkgZW5kZWRUdXJuOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IoeyBpZCwgZW5kZWRUdXJuIH06IHsgaWQ6IFBsYXllcklkLCBlbmRlZFR1cm46IGJvb2xlYW4gfSkge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuZW5kZWRUdXJuID0gZW5kZWRUdXJuXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7IGlkID0gdGhpcy5pZCwgZW5kZWRUdXJuID0gdGhpcy5lbmRlZFR1cm4gfTogeyBpZD86IFBsYXllcklkLCBlbmRlZFR1cm4/OiBib29sZWFuIH0gPSB7fSk6IFBsYXllciA9PiBuZXcgUGxheWVyKHtcbiAgICBpZCxcbiAgICBlbmRlZFR1cm4sXG4gIH0pXG5cbn1cblxuZXhwb3J0IGNsYXNzIFdvcmxkU3RhdGUge1xuICByZWFkb25seSBtYXA6IFdvcmxkTWFwXG4gIHJlYWRvbmx5IHVuaXRzOiBVbml0W11cbiAgcmVhZG9ubHkgcGxheWVyczogUGxheWVyW11cblxuICBjb25zdHJ1Y3Rvcih7IG1hcCwgdW5pdHMsIHBsYXllcnMgfTogeyBtYXA6IFdvcmxkTWFwLCB1bml0czogVW5pdFtdLCBwbGF5ZXJzOiBQbGF5ZXJbXSB9KSB7XG4gICAgdGhpcy5tYXAgPSBtYXBcbiAgICB0aGlzLnVuaXRzID0gdW5pdHNcbiAgICB0aGlzLnBsYXllcnMgPSBwbGF5ZXJzXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7IG1hcCA9IHRoaXMubWFwLCB1bml0cyA9IHRoaXMudW5pdHMsIHBsYXllcnMgPSB0aGlzLnBsYXllcnMgfTogeyBtYXA/OiBXb3JsZE1hcCwgdW5pdHM/OiBVbml0W10sIHBsYXllcnM/OiBQbGF5ZXJbXSB9ID0ge30pOiBXb3JsZFN0YXRlID0+XG4gICAgbmV3IFdvcmxkU3RhdGUoeyBtYXAsIHVuaXRzLCBwbGF5ZXJzIH0pXG5cbiAgcHVibGljIGZpbmRQbGF5ZXIgPSAocGxheWVySWQ6IFBsYXllcklkKTogT3B0aW9uPFBsYXllcj4gPT5cbiAgICBSLmZpbmQoKHBsYXllcikgPT4gcGxheWVyLmlkID09IHBsYXllcklkLCB0aGlzLnBsYXllcnMpXG5cbiAgcHVibGljIGZpbmRVbml0QnlJZCA9ICh1bml0SWQ6IFVuaXRJZCk6IE9wdGlvbjxVbml0PiA9PlxuICAgIFIuZmluZCgodW5pdCkgPT4gdW5pdC5pZCA9PSB1bml0SWQsIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PlxuICAgIFIuZmluZCgodW5pdCkgPT4gdW5pdC5sb2NhdGlvbi5lcXVhbHMoaGV4KSwgdGhpcy51bml0cylcblxuICBwdWJsaWMgcmVwbGFjZVVuaXQgPSAodW5pdElkOiBVbml0SWQsIHVuaXQ6IFVuaXQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgdW5pdHM6IFIuYXBwZW5kKHVuaXQsIFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9IHVuaXRJZCwgdGhpcy51bml0cykpIH0pXG5cbiAgcHVibGljIHJlbW92ZVVuaXQgPSAodW5pdElkOiBVbml0SWQpOiBXb3JsZFN0YXRlID0+XG4gICAgdGhpcy5jb3B5KHsgdW5pdHM6IFIuZmlsdGVyKCh1bml0KSA9PiB1bml0LmlkICE9IHVuaXRJZCwgdGhpcy51bml0cykgfSlcblxuICBwdWJsaWMgcmVwbGFjZVBsYXllciA9IChwbGF5ZXJJZDogUGxheWVySWQsIHBsYXllcjogUGxheWVyKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHBsYXllcnM6IFIuYXBwZW5kKHBsYXllciwgUi5maWx0ZXIoKHBsYXllcikgPT4gcGxheWVyLmlkICE9IHBsYXllcklkLCB0aGlzLnBsYXllcnMpKSB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1dPUkxEX1NUQVRFOiBXb3JsZFN0YXRlID0gbmV3IFdvcmxkU3RhdGUoe1xuICBtYXA6IG5ldyBXb3JsZE1hcCh7IHdpZHRoOiAxMCwgaGVpZ2h0OiA2IH0pLFxuICBwbGF5ZXJzOiBbXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogMSxcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gICAgbmV3IFBsYXllcih7XG4gICAgICBpZDogMixcbiAgICAgIGVuZGVkVHVybjogZmFsc2UsXG4gICAgfSksXG4gIF0sXG4gIHVuaXRzOiBbXG4gICAgbmV3IFVuaXQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBwbGF5ZXJJZDogMSxcbiAgICAgIG5hbWU6ICdXYWx0ZXInLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMSwgMSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiAyLFxuICAgICAgcGxheWVySWQ6IDEsXG4gICAgICBuYW1lOiAnQmVja3knLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMCwgMyksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiAzLFxuICAgICAgcGxheWVySWQ6IDIsXG4gICAgICBuYW1lOiAnQ2hld3BhY2EnLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMiwgMSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiA0LFxuICAgICAgcGxheWVySWQ6IDIsXG4gICAgICBuYW1lOiAnQmFyYWNrIE8uIExsYW1hJyxcbiAgICAgIGxvY2F0aW9uOiBuZXcgSGV4KDMsIDIpLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICAgIGFjdGlvblBvaW50czogbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IDIsIG1heDogMiB9KSxcbiAgICB9KSxcbiAgXSxcbn0pXG5cbmV4cG9ydCB0eXBlIFBsYXllcklkID0gbnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==