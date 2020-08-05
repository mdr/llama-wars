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
        this.load.audio('attack', 'assets/audio/hit18.mp3.ogg');
        // https://opengameart.org/content/male-gruntyelling-sounds
        this.load.audio('death', 'assets/audio/1yell4.wav');
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameScene = exports.hexCenter = exports.drawingOffset = exports.hexSize = void 0;
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
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
exports.hexSize = 48;
exports.drawingOffset = { x: 60, y: 60 };
exports.hexCenter = function (hex) { return point_1.addPoints(point_1.multiplyPoint(hex_geometry_1.centerPoint(hex), exports.hexSize), exports.drawingOffset); };
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.server = new server_1.Server();
        _this.worldState = world_state_1.INITIAL_WORLD_STATE;
        _this.localGameState = local_game_state_1.INITIAL_LOCAL_GAME_STATE;
        _this.unitDisplayObjects = new Map();
        _this.createUnit = function (unit) {
            var unitDisplayObject = new unit_display_object_1.UnitDisplayObject(_this, unit);
            _this.unitDisplayObjects.set(unit.id, unitDisplayObject);
        };
        _this.createTexts = function () {
            var map = _this.worldState.map;
            _this.selectionText = _this.add.text(exports.drawingOffset.x - hex_geometry_1.hexWidth(exports.hexSize) / 2, hex_geometry_1.mapHeight(map) * exports.hexSize + 50, '');
            _this.actionText = _this.add.text(exports.drawingOffset.x - hex_geometry_1.hexWidth(exports.hexSize) / 2, hex_geometry_1.mapHeight(map) * exports.hexSize + 75, '', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
                .on('pointerdown', _this.handleActionTextClick)
                .on('pointerover', function () { return _this.actionText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
                .on('pointerout', function () { return _this.actionText.setFill(colours_1.ACTION_TEXT_COLOUR); });
            _this.actionText2 = _this.add.text(exports.drawingOffset.x - hex_geometry_1.hexWidth(exports.hexSize) / 2, hex_geometry_1.mapHeight(map) * exports.hexSize + 100, '', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
                .on('pointerdown', _this.handleActionText2Click)
                .on('pointerover', function () { return _this.actionText2.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
                .on('pointerout', function () { return _this.actionText2.setFill(colours_1.ACTION_TEXT_COLOUR); });
            _this.endTurnText = _this.add.text(800, hex_geometry_1.mapHeight(map) * exports.hexSize + 50, 'End Turn', { fill: colours_1.ACTION_TEXT_COLOUR }).setInteractive()
                .on('pointerdown', _this.handleEndTurn)
                .on('pointerover', function () { return _this.endTurnText.setFill(colours_1.HOVER_ACTION_TEXT_COLOUR); })
                .on('pointerout', function () { return _this.endTurnText.setFill(colours_1.ACTION_TEXT_COLOUR); });
        };
        _this.handleEndTurn = function () {
            _this.localGameState = _this.localGameState.endTurn();
            _this.syncScene();
        };
        _this.syncScene = function () {
            _this.mapDisplayObject.stateUpdated(_this.worldState, _this.localGameState);
            _this.mapDisplayObject.syncScene();
            _this.worldState.units.forEach(_this.syncUnit);
            _this.syncText();
        };
        _this.syncUnit = function (unit) {
            var unitDisplayObject = _this.getUnitDisplayObject(unit.id);
            unitDisplayObject.unitUpdated(unit);
            unitDisplayObject.syncScene();
        };
        _this.syncText = function () {
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
            if (_this.selectedHex) {
                var unit = _this.findUnitInLocation(_this.selectedHex);
                if (unit) {
                    _this.selectionText.setText(_this.describeUnit(unit));
                    if (unit.playerId == _this.playerId && unit.actionPoints.current > 0) {
                        _this.actionText.setText('M - Move');
                        _this.actionText2.setText('A - Attack');
                    }
                }
            }
        };
        _this.describeUnit = function (unit) { return unit.name + " - Llama warrior - HP " + unit.hitPoints.current + "/" + unit.hitPoints.max + " - actions " + unit.actionPoints.current + "/" + unit.actionPoints.max; };
        _this.handleWorldEvent = function (event) {
            _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event);
            switch (event.type) {
                case 'unitMoved':
                    var unitId = event.unitId, from = event.from, to = event.to;
                    _this.getUnitDisplayObject(unitId).move(from, to);
                    break;
                case 'combat':
                    _this.handleCombatWorldEvent(event);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(event);
            }
        };
        _this.handleCombatWorldEvent = function (event) {
            var attacker = event.attacker, defender = event.defender;
            _this.sound.play('attack');
            if (attacker.killed || defender.killed) {
                _this.sound.play('death');
            }
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
            var pressedPoint = { x: pointer.x, y: pointer.y };
            var hex = hex_geometry_1.fromPoint(point_1.multiplyPoint(point_1.subtractPoints(pressedPoint, exports.drawingOffset), 1 / exports.hexSize));
            var mode = _this.mode;
            switch (mode.type) {
                case 'selectHex':
                    _this.handleSelectHex(hex);
                    break;
                case 'moveUnit':
                    _this.handleMoveUnit(hex, mode.unitId);
                    break;
                case 'attack':
                    _this.handleAttack(hex, mode.unitId);
                    break;
                default:
                    throw new unreachable_case_error_1.UnreachableCaseError(mode);
            }
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
                _this.localGameState = _this.localGameState.setMode({ type: 'selectHex' });
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
            if (_this.selectedHex) {
                var unit = _this.findUnitInLocation(_this.selectedHex);
                if (unit && unit.playerId == _this.playerId && unit.actionPoints.current > 0) {
                    _this.localGameState = _this.localGameState.setMode({ type: 'attack', from: _this.selectedHex, unitId: unit.id });
                    _this.syncScene();
                }
            }
        };
        _this.handleStartMove = function () {
            if (_this.selectedHex) {
                var unit = _this.findUnitInLocation(_this.selectedHex);
                if (unit && unit.playerId == _this.playerId && unit.actionPoints.current > 0) {
                    var newMode = { type: 'moveUnit', from: _this.selectedHex, unitId: unit.id };
                    _this.localGameState = _this.localGameState.setMode(newMode);
                    _this.syncScene();
                }
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
        _this.handleAttack = function (targetHex, unitId) {
            var targetUnit = _this.findUnitInLocation(targetHex);
            if (targetUnit) {
                if (targetUnit.playerId == _this.playerId) {
                    // abort if you attack yourself
                    _this.localGameState = _this.localGameState.setMode({ type: 'selectHex' });
                    _this.syncScene();
                }
                else {
                    var action = { type: 'attack', unitId: unitId, target: targetHex };
                    _this.server.handleAction(_this.playerId, action);
                    _this.localGameState = _this.localGameState.setMode({ type: 'selectHex' });
                    _this.syncScene();
                }
            }
        };
        _this.handleMoveUnit = function (hex, unitId) {
            var unitInHex = _this.findUnitInLocation(hex);
            if (unitInHex) {
                if (unitInHex.id == unitId) {
                    // abort if you click yourself
                    _this.localGameState = _this.localGameState.setMode({ type: 'selectHex' });
                    _this.syncScene();
                }
                else {
                    // do nothing
                }
            }
            else {
                var unit = _this.getUnitById(unitId);
                if (hex.isAdjacentTo(unit.location) && _this.worldState.map.isInBounds(hex)) {
                    var action = { type: 'moveUnit', unitId: unit.id, to: hex };
                    _this.server.handleAction(_this.playerId, action);
                    _this.localGameState = _this.localGameState.copy({ mode: { type: 'selectHex' }, selectedHex: types_1.just(hex) });
                    _this.syncScene();
                }
            }
        };
        _this.handleSelectHex = function (hex) {
            if (!_this.worldState.map.isInBounds(hex)) {
                // If click is out of bounds, deselect any selected hex
                if (_this.selectedHex) {
                    _this.localGameState = _this.localGameState.copy({ selectedHex: types_1.nothing });
                    _this.syncScene();
                }
            }
            else if (_this.selectedHex && _this.selectedHex.equals(hex)) {
                // if selected hex is clicked, toggle selection off
                _this.localGameState = _this.localGameState.copy({ selectedHex: types_1.nothing });
                _this.syncScene();
            }
            else {
                _this.localGameState = _this.localGameState.copy({ selectedHex: types_1.just(hex) });
                _this.syncScene();
            }
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
        this.sound.add('attack');
        this.sound.add('death');
        this.mapDisplayObject = new map_display_object_1.MapDisplayObject(this, this.worldState, this.localGameState);
        this.worldState.units.forEach(this.createUnit);
        this.createTexts();
        this.input.mouse.disableContextMenu();
        this.input.keyboard.on('keydown-ESC', this.handleEscape);
        this.input.keyboard.on('keydown-M', this.handleMKey);
        this.input.keyboard.on('keydown-A', this.handleAKey);
        this.input.on('pointerdown', this.handlePointerDown);
        this.input.on('pointermove', this.handlePointerMove);
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
            var polygon = _this.addPolygon(polygonCenter, game_scene_1.hexSize);
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
        var hex = hex_geometry_1.fromPoint(point_1.multiplyPoint(point_1.subtractPoints(pointerPoint, game_scene_1.drawingOffset), 1 / game_scene_1.hexSize));
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
exports.INITIAL_WORLD_STATE = exports.WorldState = void 0;
var hex_1 = __webpack_require__(/*! ./hex */ "./src/world/hex.ts");
var R = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var world_map_1 = __webpack_require__(/*! ./world-map */ "./src/world/world-map.ts");
var unit_1 = __webpack_require__(/*! ./unit */ "./src/world/unit.ts");
var WorldState = /** @class */ (function () {
    function WorldState(_a) {
        var _this = this;
        var map = _a.map, units = _a.units;
        this.copy = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.map, map = _c === void 0 ? _this.map : _c, _d = _b.units, units = _d === void 0 ? _this.units : _d;
            return new WorldState({ map: map, units: units });
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
        this.map = map;
        this.units = units;
    }
    return WorldState;
}());
exports.WorldState = WorldState;
exports.INITIAL_WORLD_STATE = new WorldState({
    map: new world_map_1.WorldMap({ width: 10, height: 6 }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ib290LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvY29sb3Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2dhbWUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9oZXgtZ2VvbWV0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2xvY2FsLWdhbWUtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYXAtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9wb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3VuaXQtZGlzcGxheS1vYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvaGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC91bml0LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLW1hcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7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Q0FBQztZQUN2QixTQUFTLEVBQUUsSUFBSSxnQkFBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDcEQsWUFBWSxFQUFFLElBQUksbUJBQVksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3ZELENBQUM7UUFDRixJQUFJLFdBQUksQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1lBQ0wsUUFBUSxFQUFFLENBQUM7WUFDWCxJQUFJLEVBQUUsaUJBQWlCO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLFNBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLGdCQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNwRCxZQUFZLEVBQUUsSUFBSSxtQkFBWSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDdkQsQ0FBQztLQUNIO0NBQ0YsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUuaGVpZ2h0O1xufTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5pbXBvcnQgU2NlbmVzIGZyb20gJy4vc2NlbmVzJ1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ1NhbXBsZScsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG5cbiAgc2NhbGU6IHtcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gIH0sXG5cbiAgc2NlbmU6IFNjZW5lcyxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIHBhcmVudDogJ2dhbWUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcbn1cblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZylcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZ2FtZS5zY2FsZS5zZXRHYW1lU2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuICBnYW1lLnNjYWxlLnJlZnJlc2goKVxufSlcbiIsImltcG9ydCB7IGdldEdhbWVXaWR0aCwgZ2V0R2FtZUhlaWdodCB9IGZyb20gJy4uL2hlbHBlcnMnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnQm9vdCcsXG59XG5cbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgfVxuXG4gIHB1YmxpYyBwcmVsb2FkKCk6IHZvaWQge1xuICAgIGNvbnN0IGhhbGZXaWR0aCA9IGdldEdhbWVXaWR0aCh0aGlzKSAqIDAuNVxuICAgIGNvbnN0IGhhbGZIZWlnaHQgPSBnZXRHYW1lSGVpZ2h0KHRoaXMpICogMC41XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckhlaWdodCA9IDEwMFxuICAgIGNvbnN0IHByb2dyZXNzQmFyV2lkdGggPSA0MDBcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgaGFsZldpZHRoLFxuICAgICAgaGFsZkhlaWdodCxcbiAgICAgIHByb2dyZXNzQmFyV2lkdGgsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCxcbiAgICAgIDB4MDAwMDAwLFxuICAgIClcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgMTAsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCAtIDIwLFxuICAgICAgMHg4ODg4ODgsXG4gICAgKVxuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KVxuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpXG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZSkgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlXG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMFxuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKVxuICAgIH0pXG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSlcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKVxuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpXG4gICAgICBhc3NldFRleHQuZGVzdHJveSgpXG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KClcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKVxuXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJylcbiAgICB9KVxuXG4gICAgdGhpcy5sb2FkQXNzZXRzKClcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaGV4LXRpbGVzZXQtcGFja1xuICAgIHRoaXMubG9hZC5pbWFnZSgnbGxhbWEnLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWFfMTQucG5nJylcbiAgICAvLyBodHRwczovL29wZW5nYW1lYXJ0Lm9yZy9jb250ZW50LzM3LWhpdHNwdW5jaGVzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdhdHRhY2snLCAnYXNzZXRzL2F1ZGlvL2hpdDE4Lm1wMy5vZ2cnKVxuICAgIC8vIGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvbWFsZS1ncnVudHllbGxpbmctc291bmRzXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdkZWF0aCcsICdhc3NldHMvYXVkaW8vMXllbGw0LndhdicpXG4gIH1cbn1cbiIsImltcG9ydCBDb2xvciA9IFBoYXNlci5EaXNwbGF5LkNvbG9yXG5cbmV4cG9ydCB0eXBlIENvbG91clN0cmluZyA9IHN0cmluZ1xuZXhwb3J0IHR5cGUgQ29sb3VyTnVtYmVyID0gbnVtYmVyXG5cbmV4cG9ydCBjb25zdCBjb2xvdXJOdW1iZXIgPSAoY29sb3VyU3RyaW5nOiBDb2xvdXJTdHJpbmcpOiBDb2xvdXJOdW1iZXIgPT4gQ29sb3IuSGV4U3RyaW5nVG9Db2xvcihjb2xvdXJTdHJpbmcpLmNvbG9yXG5cbmV4cG9ydCBjb25zdCBIRUFMVEhfQk9SREVSX0NPTE9VUiA9IGNvbG91ck51bWJlcignIzAwMDAwMCcpXG5leHBvcnQgY29uc3QgSEVBTFRIX0VNUFRZX0NPTE9VUiA9IGNvbG91ck51bWJlcignI2ZmZmZmZicpXG5leHBvcnQgY29uc3QgSEVBTFRIX0ZVTExfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjNGRmMDM3JylcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNjY2ZmYmUnKVxuZXhwb3J0IGNvbnN0IEhPVkVSX0RFRkFVTFRfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNkY2ZmZDEnKVxuXG5leHBvcnQgY29uc3QgU0VMRUNURURfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNmZmZkMDgnKVxuZXhwb3J0IGNvbnN0IEhPVkVSX1NFTEVDVEVEX1RJTEVfQ09MT1VSID0gY29sb3VyTnVtYmVyKCcjZmZmZGJmJylcblxuZXhwb3J0IGNvbnN0IFRBUkdFVEFCTEVfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyM5ZGYxZTcnKVxuZXhwb3J0IGNvbnN0IEhPVkVSX1RBUkdFVEFCTEVfVElMRV9DT0xPVVIgPSBjb2xvdXJOdW1iZXIoJyNjZWYwZWInKVxuXG5leHBvcnQgY29uc3QgQUNUSU9OX1RFWFRfQ09MT1VSID0gJyNjY2NjMDAnXG5leHBvcnQgY29uc3QgSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSID0gJyNmZmZmMDAnXG5cbmV4cG9ydCBjb25zdCBQTEFZRVJfMV9USU5UID0gMHhmZmJiYmJcbmV4cG9ydCBjb25zdCBQTEFZRVJfMl9USU5UID0gMHhiYmJiZmZcbiIsImltcG9ydCB7IGFkZFBvaW50cywgbXVsdGlwbHlQb2ludCwgc3VidHJhY3RQb2ludHMgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgY2VudGVyUG9pbnQsIGZyb21Qb2ludCwgaGV4V2lkdGgsIG1hcEhlaWdodCB9IGZyb20gJy4vaGV4LWdlb21ldHJ5J1xuaW1wb3J0IHsgSU5JVElBTF9XT1JMRF9TVEFURSwgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgU2VydmVyIH0gZnJvbSAnLi4vc2VydmVyL3NlcnZlcidcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudHMnXG5pbXBvcnQgeyBhcHBseUV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnQtZXZhbHVhdG9yJ1xuaW1wb3J0IHsgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgVW5pdCwgVW5pdElkIH0gZnJvbSAnLi4vd29ybGQvdW5pdCdcbmltcG9ydCB7IFVuaXREaXNwbGF5T2JqZWN0IH0gZnJvbSAnLi91bml0LWRpc3BsYXktb2JqZWN0J1xuaW1wb3J0IHsgQUNUSU9OX1RFWFRfQ09MT1VSLCBIT1ZFUl9BQ1RJT05fVEVYVF9DT0xPVVIgfSBmcm9tICcuL2NvbG91cnMnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IE1hcERpc3BsYXlPYmplY3QgfSBmcm9tICcuL21hcC1kaXNwbGF5LW9iamVjdCdcbmltcG9ydCB7IGp1c3QsIG5vdGhpbmcsIE9wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5pbXBvcnQgeyBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUsIExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IHsgTW9kZSB9IGZyb20gJy4vbW9kZSdcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdHYW1lJyxcbn1cblxuZXhwb3J0IGNvbnN0IGhleFNpemUgPSA0OFxuZXhwb3J0IGNvbnN0IGRyYXdpbmdPZmZzZXQgPSB7IHg6IDYwLCB5OiA2MCB9XG5leHBvcnQgY29uc3QgaGV4Q2VudGVyID0gKGhleDogSGV4KSA9PiBhZGRQb2ludHMobXVsdGlwbHlQb2ludChjZW50ZXJQb2ludChoZXgpLCBoZXhTaXplKSwgZHJhd2luZ09mZnNldClcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2VydmVyOiBTZXJ2ZXIgPSBuZXcgU2VydmVyKClcbiAgcHJpdmF0ZSB3b3JsZFN0YXRlOiBXb3JsZFN0YXRlID0gSU5JVElBTF9XT1JMRF9TVEFURVxuICBwcml2YXRlIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSA9IElOSVRJQUxfTE9DQUxfR0FNRV9TVEFURVxuICBwcml2YXRlIG1hcERpc3BsYXlPYmplY3Q6IE1hcERpc3BsYXlPYmplY3RcbiAgcHJpdmF0ZSB1bml0RGlzcGxheU9iamVjdHM6IE1hcDxVbml0SWQsIFVuaXREaXNwbGF5T2JqZWN0PiA9IG5ldyBNYXAoKVxuICBwcml2YXRlIHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSBhY3Rpb25UZXh0MjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSBlbmRUdXJuVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgICB0aGlzLnNlcnZlci5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnQpXG4gIH1cblxuICBwcml2YXRlIGdldCBtb2RlKCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLm1vZGVcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IHNlbGVjdGVkSGV4KCkge1xuICAgIHJldHVybiB0aGlzLmxvY2FsR2FtZVN0YXRlLnNlbGVjdGVkSGV4XG4gIH1cblxuICBwcml2YXRlIGdldCBwbGF5ZXJJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbEdhbWVTdGF0ZS5wbGF5ZXJJZFxuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNvdW5kLmFkZCgnYXR0YWNrJylcbiAgICB0aGlzLnNvdW5kLmFkZCgnZGVhdGgnKVxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdCA9IG5ldyBNYXBEaXNwbGF5T2JqZWN0KHRoaXMsIHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLndvcmxkU3RhdGUudW5pdHMuZm9yRWFjaCh0aGlzLmNyZWF0ZVVuaXQpXG4gICAgdGhpcy5jcmVhdGVUZXh0cygpXG5cbiAgICB0aGlzLmlucHV0Lm1vdXNlLmRpc2FibGVDb250ZXh0TWVudSgpXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bi1FU0MnLCB0aGlzLmhhbmRsZUVzY2FwZSlcbiAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duLU0nLCB0aGlzLmhhbmRsZU1LZXkpXG4gICAgdGhpcy5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bi1BJywgdGhpcy5oYW5kbGVBS2V5KVxuICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5oYW5kbGVQb2ludGVyRG93bilcbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVybW92ZScsIHRoaXMuaGFuZGxlUG9pbnRlck1vdmUpXG4gICAgdGhpcy5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVVbml0ID0gKHVuaXQ6IFVuaXQpID0+IHtcbiAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdCA9IG5ldyBVbml0RGlzcGxheU9iamVjdCh0aGlzLCB1bml0KVxuICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLnNldCh1bml0LmlkLCB1bml0RGlzcGxheU9iamVjdClcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVGV4dHMgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFwID0gdGhpcy53b3JsZFN0YXRlLm1hcFxuICAgIHRoaXMuc2VsZWN0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQoZHJhd2luZ09mZnNldC54IC0gaGV4V2lkdGgoaGV4U2l6ZSkgLyAyLCBtYXBIZWlnaHQobWFwKSAqIGhleFNpemUgKyA1MCwgJycpXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5hZGQudGV4dChkcmF3aW5nT2Zmc2V0LnggLSBoZXhXaWR0aChoZXhTaXplKSAvIDIsIG1hcEhlaWdodChtYXApICogaGV4U2l6ZSArIDc1LCAnJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSkuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlQWN0aW9uVGV4dENsaWNrKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dC5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmFjdGlvblRleHQuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuYWN0aW9uVGV4dDIgPSB0aGlzLmFkZC50ZXh0KGRyYXdpbmdPZmZzZXQueCAtIGhleFdpZHRoKGhleFNpemUpIC8gMiwgbWFwSGVpZ2h0KG1hcCkgKiBoZXhTaXplICsgMTAwLCAnJywgeyBmaWxsOiBBQ1RJT05fVEVYVF9DT0xPVVIgfSkuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuaGFuZGxlQWN0aW9uVGV4dDJDbGljaylcbiAgICAgIC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB0aGlzLmFjdGlvblRleHQyLnNldEZpbGwoSE9WRVJfQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsICgpID0+IHRoaXMuYWN0aW9uVGV4dDIuc2V0RmlsbChBQ1RJT05fVEVYVF9DT0xPVVIpKVxuICAgIHRoaXMuZW5kVHVyblRleHQgPSB0aGlzLmFkZC50ZXh0KDgwMCwgbWFwSGVpZ2h0KG1hcCkgKiBoZXhTaXplICsgNTAsICdFbmQgVHVybicsIHsgZmlsbDogQUNUSU9OX1RFWFRfQ09MT1VSIH0pLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCB0aGlzLmhhbmRsZUVuZFR1cm4pXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4gdGhpcy5lbmRUdXJuVGV4dC5zZXRGaWxsKEhPVkVSX0FDVElPTl9URVhUX0NPTE9VUikpXG4gICAgICAub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB0aGlzLmVuZFR1cm5UZXh0LnNldEZpbGwoQUNUSU9OX1RFWFRfQ09MT1VSKSlcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRW5kVHVybiA9ICgpID0+IHtcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5lbmRUdXJuKClcbiAgICB0aGlzLnN5bmNTY2VuZSgpXG4gIH1cblxuICBwcml2YXRlIHN5bmNTY2VuZSA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3Quc3RhdGVVcGRhdGVkKHRoaXMud29ybGRTdGF0ZSwgdGhpcy5sb2NhbEdhbWVTdGF0ZSlcbiAgICB0aGlzLm1hcERpc3BsYXlPYmplY3Quc3luY1NjZW5lKClcbiAgICB0aGlzLndvcmxkU3RhdGUudW5pdHMuZm9yRWFjaCh0aGlzLnN5bmNVbml0KVxuICAgIHRoaXMuc3luY1RleHQoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVW5pdCA9ICh1bml0OiBVbml0KTogdm9pZCA9PiB7XG4gICAgY29uc3QgdW5pdERpc3BsYXlPYmplY3QgPSB0aGlzLmdldFVuaXREaXNwbGF5T2JqZWN0KHVuaXQuaWQpXG4gICAgdW5pdERpc3BsYXlPYmplY3QudW5pdFVwZGF0ZWQodW5pdClcbiAgICB1bml0RGlzcGxheU9iamVjdC5zeW5jU2NlbmUoKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jVGV4dCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnJylcbiAgICB0aGlzLmFjdGlvblRleHQyLnNldFRleHQoJycpXG4gICAgc3dpdGNoICh0aGlzLm1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5zeW5jU2VsZWN0SGV4TW9kZVRleHQoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLnN5bmNNb3ZlVW5pdE1vZGVUZXh0KHRoaXMubW9kZS51bml0SWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdhdHRhY2snOlxuICAgICAgICB0aGlzLnN5bmNBdHRhY2tNb2RlVGV4dCh0aGlzLm1vZGUudW5pdElkKVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHRoaXMubW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN5bmNBdHRhY2tNb2RlVGV4dCA9ICh1bml0SWQ6IFVuaXRJZCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLmdldFVuaXRCeUlkKHVuaXRJZClcbiAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCh0aGlzLmRlc2NyaWJlVW5pdCh1bml0KSlcbiAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnQ2xpY2sgdW5pdCB0byBhdHRhY2sgKG9yIEVTQyB0byBjYW5jZWwpJylcbiAgfVxuXG4gIHByaXZhdGUgc3luY01vdmVVbml0TW9kZVRleHQgPSAodW5pdElkOiBVbml0SWQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB1bml0ID0gdGhpcy5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ0NsaWNrIHRpbGUgdG8gbW92ZSB0byAob3IgRVNDIHRvIGNhbmNlbCknKVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jU2VsZWN0SGV4TW9kZVRleHQgPSAoKTogdm9pZCA9PiB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRIZXgpIHtcbiAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbih0aGlzLnNlbGVjdGVkSGV4KVxuICAgICAgaWYgKHVuaXQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQodGhpcy5kZXNjcmliZVVuaXQodW5pdCkpXG4gICAgICAgIGlmICh1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDApIHtcbiAgICAgICAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnTSAtIE1vdmUnKVxuICAgICAgICAgIHRoaXMuYWN0aW9uVGV4dDIuc2V0VGV4dCgnQSAtIEF0dGFjaycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlc2NyaWJlVW5pdCA9ICh1bml0OiBVbml0KSA9PiBgJHt1bml0Lm5hbWV9IC0gTGxhbWEgd2FycmlvciAtIEhQICR7dW5pdC5oaXRQb2ludHMuY3VycmVudH0vJHt1bml0LmhpdFBvaW50cy5tYXh9IC0gYWN0aW9ucyAke3VuaXQuYWN0aW9uUG9pbnRzLmN1cnJlbnR9LyR7dW5pdC5hY3Rpb25Qb2ludHMubWF4fWBcblxuICBwcml2YXRlIGhhbmRsZVdvcmxkRXZlbnQgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICB0aGlzLndvcmxkU3RhdGUgPSBhcHBseUV2ZW50KHRoaXMud29ybGRTdGF0ZSwgZXZlbnQpXG4gICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICBjYXNlICd1bml0TW92ZWQnOlxuICAgICAgICBjb25zdCB7IHVuaXRJZCwgZnJvbSwgdG8gfSA9IGV2ZW50XG4gICAgICAgIHRoaXMuZ2V0VW5pdERpc3BsYXlPYmplY3QodW5pdElkKS5tb3ZlKGZyb20sIHRvKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnY29tYmF0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVDb21iYXRXb3JsZEV2ZW50KGV2ZW50KVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQ29tYmF0V29ybGRFdmVudCA9IChldmVudDogQ29tYmF0V29ybGRFdmVudCkgPT4ge1xuICAgIGNvbnN0IHsgYXR0YWNrZXIsIGRlZmVuZGVyIH0gPSBldmVudFxuICAgIHRoaXMuc291bmQucGxheSgnYXR0YWNrJylcbiAgICBpZiAoYXR0YWNrZXIua2lsbGVkIHx8IGRlZmVuZGVyLmtpbGxlZCkge1xuICAgICAgdGhpcy5zb3VuZC5wbGF5KCdkZWF0aCcpXG4gICAgfVxuICAgIGNvbnN0IGF0dGFja2VyRGlzcGxheU9iamVjdCA9IHRoaXMuZ2V0VW5pdERpc3BsYXlPYmplY3QoYXR0YWNrZXIudW5pdElkKVxuICAgIGNvbnN0IGRlZmVuZGVyRGlzcGxheU9iamVjdCA9IHRoaXMuZ2V0VW5pdERpc3BsYXlPYmplY3QoZGVmZW5kZXIudW5pdElkKVxuICAgIGF0dGFja2VyRGlzcGxheU9iamVjdC5hdHRhY2soYXR0YWNrZXIubG9jYXRpb24sIGRlZmVuZGVyLmxvY2F0aW9uKVxuICAgIGlmIChhdHRhY2tlci5raWxsZWQpIHtcbiAgICAgIGF0dGFja2VyRGlzcGxheU9iamVjdC5kZXN0cm95KClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZShhdHRhY2tlci51bml0SWQpXG4gICAgfVxuICAgIGlmIChkZWZlbmRlci5raWxsZWQpIHtcbiAgICAgIGRlZmVuZGVyRGlzcGxheU9iamVjdC5kZXN0cm95KClcbiAgICAgIHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmRlbGV0ZShkZWZlbmRlci51bml0SWQpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbml0RGlzcGxheU9iamVjdCA9ICh1bml0SWQ6IG51bWJlcik6IFVuaXREaXNwbGF5T2JqZWN0ID0+IHtcbiAgICBjb25zdCB1bml0RGlzcGxheU9iamVjdCA9IHRoaXMudW5pdERpc3BsYXlPYmplY3RzLmdldCh1bml0SWQpXG4gICAgaWYgKCF1bml0RGlzcGxheU9iamVjdClcbiAgICAgIHRocm93ICdDb3VsZCBub3QgZmluZCB1bml0IHdpdGggSUQgJyArIHVuaXRJZFxuICAgIHJldHVybiB1bml0RGlzcGxheU9iamVjdFxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVNS2V5ID0gKCkgPT4ge1xuICAgIHN3aXRjaCAodGhpcy5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhcnRNb3ZlKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGhpcy5tb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQUtleSA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLmhhbmRsZVN0YXJ0QXR0YWNrKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGhpcy5tb2RlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUG9pbnRlck1vdmUgPSAocG9pbnRlcikgPT4ge1xuICAgIGNvbnN0IHBvaW50ZXJQb2ludCA9IHsgeDogcG9pbnRlci54LCB5OiBwb2ludGVyLnkgfVxuICAgIHRoaXMubWFwRGlzcGxheU9iamVjdC5oYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQpXG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBvaW50ZXJEb3duID0gKHBvaW50ZXIpID0+IHtcbiAgICBjb25zdCBwcmVzc2VkUG9pbnQgPSB7IHg6IHBvaW50ZXIueCwgeTogcG9pbnRlci55IH1cbiAgICBjb25zdCBoZXggPSBmcm9tUG9pbnQobXVsdGlwbHlQb2ludChzdWJ0cmFjdFBvaW50cyhwcmVzc2VkUG9pbnQsIGRyYXdpbmdPZmZzZXQpLCAxIC8gaGV4U2l6ZSkpXG4gICAgY29uc3QgbW9kZSA9IHRoaXMubW9kZVxuICAgIHN3aXRjaCAobW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEhleChoZXgpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZVVuaXQoaGV4LCBtb2RlLnVuaXRJZClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuaGFuZGxlQXR0YWNrKGhleCwgbW9kZS51bml0SWQpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IobW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVzY2FwZSA9ICgpOiB2b2lkID0+IHtcbiAgICBzd2l0Y2ggKHRoaXMubW9kZS50eXBlKSB7XG4gICAgICBjYXNlICdzZWxlY3RIZXgnOlxuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgc2VsZWN0ZWRIZXg6IG5vdGhpbmcgfSlcbiAgICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVBYm9ydEF0dGFjaygpXG4gICAgICAgIHJldHVyblxuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLmhhbmRsZUFib3J0TW92ZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKHRoaXMubW9kZSlcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFib3J0TW92ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5tb2RlLnR5cGUgPT0gJ21vdmVVbml0Jykge1xuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydEF0dGFjayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5tb2RlLnR5cGUgPT0gJ2F0dGFjaycpIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLnNldE1vZGUoeyB0eXBlOiAnc2VsZWN0SGV4JyB9KVxuICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlQWN0aW9uVGV4dENsaWNrID0gKCkgPT4ge1xuICAgIHN3aXRjaCAodGhpcy5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhcnRNb3ZlKClcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5oYW5kbGVBYm9ydE1vdmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVBYm9ydEF0dGFjaygpXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGhpcy5tb2RlKVxuICAgIH1cbiAgfVxuXG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0MkNsaWNrID0gKCkgPT4ge1xuICAgIHN3aXRjaCAodGhpcy5tb2RlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3NlbGVjdEhleCc6XG4gICAgICAgIHRoaXMuaGFuZGxlU3RhcnRBdHRhY2soKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYXR0YWNrJzpcbiAgICAgICAgdGhpcy5oYW5kbGVBYm9ydEF0dGFjaygpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIC8vIFNob3VsZG4ndCBoYXBwZW5cbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBVbnJlYWNoYWJsZUNhc2VFcnJvcih0aGlzLm1vZGUpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydEF0dGFjayA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZEhleCkge1xuICAgICAgY29uc3QgdW5pdCA9IHRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKHRoaXMuc2VsZWN0ZWRIZXgpXG4gICAgICBpZiAodW5pdCAmJiB1bml0LnBsYXllcklkID09IHRoaXMucGxheWVySWQgJiYgdW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA+IDApIHtcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdhdHRhY2snLCBmcm9tOiB0aGlzLnNlbGVjdGVkSGV4LCB1bml0SWQ6IHVuaXQuaWQgfSlcbiAgICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3RhcnRNb3ZlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSGV4KSB7XG4gICAgICBjb25zdCB1bml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24odGhpcy5zZWxlY3RlZEhleClcbiAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgPT0gdGhpcy5wbGF5ZXJJZCAmJiB1bml0LmFjdGlvblBvaW50cy5jdXJyZW50ID4gMCkge1xuICAgICAgICBjb25zdCBuZXdNb2RlOiBNb2RlID0geyB0eXBlOiAnbW92ZVVuaXQnLCBmcm9tOiB0aGlzLnNlbGVjdGVkSGV4LCB1bml0SWQ6IHVuaXQuaWQgfVxuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKG5ld01vZGUpXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFVuaXRCeUlkID0gKHVuaXRJZDogbnVtYmVyKTogVW5pdCA9PiB7XG4gICAgY29uc3QgdW5pdCA9IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEJ5SWQodW5pdElkKVxuICAgIGlmICghdW5pdCkge1xuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgfVxuICAgIHJldHVybiB1bml0XG4gIH1cblxuICBwcml2YXRlIGZpbmRVbml0SW5Mb2NhdGlvbiA9IChoZXg6IEhleCk6IE9wdGlvbjxVbml0PiA9PiB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKGhleClcblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9ICh0YXJnZXRIZXg6IEhleCwgdW5pdElkOiBVbml0SWQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRVbml0ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24odGFyZ2V0SGV4KVxuICAgIGlmICh0YXJnZXRVbml0KSB7XG4gICAgICBpZiAodGFyZ2V0VW5pdC5wbGF5ZXJJZCA9PSB0aGlzLnBsYXllcklkKSB7XG4gICAgICAgIC8vIGFib3J0IGlmIHlvdSBhdHRhY2sgeW91cnNlbGZcbiAgICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuc2V0TW9kZSh7IHR5cGU6ICdzZWxlY3RIZXgnIH0pXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbjogV29ybGRBY3Rpb24gPSB7IHR5cGU6ICdhdHRhY2snLCB1bml0SWQ6IHVuaXRJZCwgdGFyZ2V0OiB0YXJnZXRIZXggfVxuICAgICAgICB0aGlzLnNlcnZlci5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTW92ZVVuaXQgPSAoaGV4OiBIZXgsIHVuaXRJZDogVW5pdElkKSA9PiB7XG4gICAgY29uc3QgdW5pdEluSGV4ID0gdGhpcy5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuICAgIGlmICh1bml0SW5IZXgpIHtcbiAgICAgIGlmICh1bml0SW5IZXguaWQgPT0gdW5pdElkKSB7XG4gICAgICAgIC8vIGFib3J0IGlmIHlvdSBjbGljayB5b3Vyc2VsZlxuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5zZXRNb2RlKHsgdHlwZTogJ3NlbGVjdEhleCcgfSlcbiAgICAgICAgdGhpcy5zeW5jU2NlbmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1bml0ID0gdGhpcy5nZXRVbml0QnlJZCh1bml0SWQpXG4gICAgICBpZiAoaGV4LmlzQWRqYWNlbnRUbyh1bml0LmxvY2F0aW9uKSAmJiB0aGlzLndvcmxkU3RhdGUubWFwLmlzSW5Cb3VuZHMoaGV4KSkge1xuICAgICAgICBjb25zdCBhY3Rpb246IFdvcmxkQWN0aW9uID0geyB0eXBlOiAnbW92ZVVuaXQnLCB1bml0SWQ6IHVuaXQuaWQsIHRvOiBoZXggfVxuICAgICAgICB0aGlzLnNlcnZlci5oYW5kbGVBY3Rpb24odGhpcy5wbGF5ZXJJZCwgYWN0aW9uKVxuICAgICAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gdGhpcy5sb2NhbEdhbWVTdGF0ZS5jb3B5KHsgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LCBzZWxlY3RlZEhleDoganVzdChoZXgpIH0pXG4gICAgICAgIHRoaXMuc3luY1NjZW5lKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdEhleCA9IChoZXg6IEhleCkgPT4ge1xuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKGhleCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSGV4KSB7XG4gICAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBzZWxlY3RlZEhleDogbm90aGluZyB9KVxuICAgICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSGV4ICYmIHRoaXMuc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIC8vIGlmIHNlbGVjdGVkIGhleCBpcyBjbGlja2VkLCB0b2dnbGUgc2VsZWN0aW9uIG9mZlxuICAgICAgdGhpcy5sb2NhbEdhbWVTdGF0ZSA9IHRoaXMubG9jYWxHYW1lU3RhdGUuY29weSh7IHNlbGVjdGVkSGV4OiBub3RoaW5nIH0pXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSB0aGlzLmxvY2FsR2FtZVN0YXRlLmNvcHkoeyBzZWxlY3RlZEhleDoganVzdChoZXgpIH0pXG4gICAgICB0aGlzLnN5bmNTY2VuZSgpXG4gICAgfVxuICB9XG5cbn1cblxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuLi93b3JsZC93b3JsZC1tYXAnXG5cbmV4cG9ydCBjb25zdCBjZW50ZXJQb2ludCA9IChoZXg6IEhleCk6IFBvaW50ID0+XG4gICh7XG4gICAgeDogaGV4LnggKiBNYXRoLnNxcnQoMykgKyBoZXgueSAqIE1hdGguc3FydCgzKSAvIDIsXG4gICAgeTogaGV4LnkgKiAzIC8gMixcbiAgfSlcblxuZXhwb3J0IGNvbnN0IGZyb21Qb2ludCA9IChwb2ludDogUG9pbnQpOiBIZXggPT4ge1xuICBjb25zdCB4ID0gcG9pbnQueCAqIE1hdGguc3FydCgzKSAvIDMgLSBwb2ludC55IC8gM1xuICBjb25zdCB5ID0gMiAqIHBvaW50LnkgLyAzXG4gIHJldHVybiByb3VuZChuZXcgSGV4KHgsIHkpKTtcbn1cblxuY29uc3Qgcm91bmQgPSAoaGV4OiBIZXgpOiBIZXggPT4ge1xuICBjb25zdCByeCA9IE1hdGgucm91bmQoaGV4LngpXG4gIGNvbnN0IHJ5ID0gTWF0aC5yb3VuZChoZXgueSlcbiAgY29uc3QgcnogPSBNYXRoLnJvdW5kKGhleC56KVxuXG4gIGNvbnN0IHhEaWZmID0gTWF0aC5hYnMocnggLSBoZXgueClcbiAgY29uc3QgeURpZmYgPSBNYXRoLmFicyhyeSAtIGhleC55KVxuICBjb25zdCB6RGlmZiA9IE1hdGguYWJzKHJ6IC0gaGV4LnkpXG5cbiAgaWYgKHhEaWZmID4geURpZmYgJiYgeERpZmYgPiB6RGlmZilcbiAgICByZXR1cm4gbmV3IEhleCgtcnkgLSByeiwgcnkpXG4gIGVsc2UgaWYgKHlEaWZmID4gekRpZmYpXG4gICAgcmV0dXJuIG5ldyBIZXgocngsIC1yeCAtIHJ6KVxuICBlbHNlXG4gICAgcmV0dXJuIG5ldyBIZXgocngsIHJ5KVxufVxuXG5jb25zdCBoZXhBbmdsZSA9IE1hdGguUEkgLyAzXG5jb25zdCBoZXhPZmZzZXQgPSBNYXRoLlBJIC8gNlxuXG5jb25zdCBoZXhDb3JuZXIgPSAoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyLCBpOiBudW1iZXIpOiBQb2ludCA9PiB7XG4gIGNvbnN0IGFuZ2xlUmFkaWFucyA9IGhleEFuZ2xlICogaSAtIGhleE9mZnNldFxuICBjb25zdCB4ID0gY2VudGVyLnggKyBzaXplICogTWF0aC5jb3MoYW5nbGVSYWRpYW5zKVxuICBjb25zdCB5ID0gY2VudGVyLnkgKyBzaXplICogTWF0aC5zaW4oYW5nbGVSYWRpYW5zKVxuICByZXR1cm4geyB4LCB5IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBoZXhDb3JuZXJzKGNlbnRlcjogUG9pbnQsIHNpemU6IG51bWJlcik6IEl0ZXJhYmxlSXRlcmF0b3I8UG9pbnQ+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICB5aWVsZCBoZXhDb3JuZXIoY2VudGVyLCBzaXplLCBpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtYXBIZWlnaHQgPSAobWFwOiBXb3JsZE1hcCk6IG51bWJlciA9PiBtYXAuaGVpZ2h0ICogMyAvIDJcblxuZXhwb3J0IGNvbnN0IGhleFdpZHRoID0gKGhleFNpemU6IG51bWJlcik6IG51bWJlciA9PiBoZXhTaXplICogTWF0aC5zcXJ0KDMpXG5cbiIsImltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC1zY2VuZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUtc2NlbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBbQm9vdFNjZW5lLCBHYW1lU2NlbmVdO1xuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgUGxheWVySWQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IE1vZGUgfSBmcm9tICcuL21vZGUnXG5pbXBvcnQgeyBNYXliZSwgbm90aGluZywgT3B0aW9uLCB0b01heWJlLCB0b09wdGlvbiB9IGZyb20gJy4uL3V0aWwvdHlwZXMnXG5cbmV4cG9ydCBjbGFzcyBMb2NhbEdhbWVTdGF0ZSB7XG4gIHJlYWRvbmx5IHBsYXllcklkOiBQbGF5ZXJJZFxuICByZWFkb25seSBtb2RlOiBNb2RlXG4gIHJlYWRvbmx5IHNlbGVjdGVkSGV4OiBPcHRpb248SGV4PlxuXG4gIGNvbnN0cnVjdG9yKHsgcGxheWVySWQsIG1vZGUsIHNlbGVjdGVkSGV4IH06IHsgcGxheWVySWQ6IFBsYXllcklkLCBtb2RlOiBNb2RlLCBzZWxlY3RlZEhleDogT3B0aW9uPEhleD4gfSkge1xuICAgIHRoaXMucGxheWVySWQgPSBwbGF5ZXJJZFxuICAgIHRoaXMubW9kZSA9IG1vZGVcbiAgICB0aGlzLnNlbGVjdGVkSGV4ID0gc2VsZWN0ZWRIZXhcbiAgfVxuXG4gIHB1YmxpYyBjb3B5ID0gKHtcbiAgICAgICAgICAgICAgICAgICBwbGF5ZXJJZCA9IHRoaXMucGxheWVySWQsXG4gICAgICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMubW9kZSxcbiAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEhleCA9IHRvTWF5YmUodGhpcy5zZWxlY3RlZEhleCksXG4gICAgICAgICAgICAgICAgIH06IHsgcGxheWVySWQ/OiBQbGF5ZXJJZCwgbW9kZT86IE1vZGUsIHNlbGVjdGVkSGV4PzogTWF5YmU8SGV4PiB9ID0ge30pOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIG5ldyBMb2NhbEdhbWVTdGF0ZSh7IHBsYXllcklkLCBtb2RlLCBzZWxlY3RlZEhleDogdG9PcHRpb24oc2VsZWN0ZWRIZXgpIH0pXG5cbiAgcHVibGljIHNldE1vZGUgPSAobW9kZTogTW9kZSk6IExvY2FsR2FtZVN0YXRlID0+IHRoaXMuY29weSh7IG1vZGUgfSlcblxuICBwdWJsaWMgZW5kVHVybiA9ICgpOiBMb2NhbEdhbWVTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7XG4gICAgICBwbGF5ZXJJZDogdGhpcy5wbGF5ZXJJZCA9PSAxID8gMiA6IDEsXG4gICAgICBtb2RlOiB7IHR5cGU6ICdzZWxlY3RIZXgnIH0sXG4gICAgICBzZWxlY3RlZEhleDogbm90aGluZyxcbiAgICB9KVxuXG59XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX0xPQ0FMX0dBTUVfU1RBVEUgPSBuZXcgTG9jYWxHYW1lU3RhdGUoe1xuICBwbGF5ZXJJZDogMSxcbiAgbW9kZTogeyB0eXBlOiAnc2VsZWN0SGV4JyB9LFxuICBzZWxlY3RlZEhleDogdW5kZWZpbmVkLFxufSlcblxuIiwiaW1wb3J0IHsgV29ybGRTdGF0ZSB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLXN0YXRlJ1xuaW1wb3J0IHsgZHJhd2luZ09mZnNldCwgaGV4Q2VudGVyLCBoZXhTaXplIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgbXVsdGlwbHlQb2ludCwgcG9pbnQsIFBvaW50LCBzdWJ0cmFjdFBvaW50cyB9IGZyb20gJy4vcG9pbnQnXG5pbXBvcnQgeyBmcm9tUG9pbnQsIGhleENvcm5lcnMgfSBmcm9tICcuL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7XG4gIENvbG91ck51bWJlcixcbiAgREVGQVVMVF9USUxFX0NPTE9VUixcbiAgSE9WRVJfREVGQVVMVF9USUxFX0NPTE9VUixcbiAgSE9WRVJfU0VMRUNURURfVElMRV9DT0xPVVIsXG4gIEhPVkVSX1RBUkdFVEFCTEVfVElMRV9DT0xPVVIsXG4gIFNFTEVDVEVEX1RJTEVfQ09MT1VSLFxuICBUQVJHRVRBQkxFX1RJTEVfQ09MT1VSLFxufSBmcm9tICcuL2NvbG91cnMnXG5pbXBvcnQgeyBVbnJlYWNoYWJsZUNhc2VFcnJvciB9IGZyb20gJy4uL3V0aWwvdW5yZWFjaGFibGUtY2FzZS1lcnJvcidcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vdXRpbC90eXBlcydcbmltcG9ydCB7IExvY2FsR2FtZVN0YXRlIH0gZnJvbSAnLi9sb2NhbC1nYW1lLXN0YXRlJ1xuaW1wb3J0IFBvbHlnb24gPSBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvblxuXG50eXBlIFRpbGVTdGF0ZSA9ICdkZWZhdWx0JyB8ICdzZWxlY3RlZCcgfCAndGFyZ2V0YWJsZSdcblxuZXhwb3J0IGNsYXNzIE1hcERpc3BsYXlPYmplY3Qge1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGVcbiAgcHJpdmF0ZSBsb2NhbEdhbWVTdGF0ZTogTG9jYWxHYW1lU3RhdGVcbiAgcHJpdmF0ZSBoZXhQb2x5Z29uczogTWFwPFN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+ID0gbmV3IE1hcDxTdHJpbmcsIFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uPigpXG4gIHByaXZhdGUgcHJldmlvdXNIb3Zlcj86IEhleFxuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUsIGxvY2FsR2FtZVN0YXRlOiBMb2NhbEdhbWVTdGF0ZSkge1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZVxuICAgIHRoaXMud29ybGRTdGF0ZSA9IHdvcmxkU3RhdGVcbiAgICB0aGlzLmxvY2FsR2FtZVN0YXRlID0gbG9jYWxHYW1lU3RhdGVcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpXG4gICAgICB0aGlzLmNyZWF0ZUhleChoZXgpXG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhleCA9IChoZXg6IEhleCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHBvbHlnb25DZW50ZXIgPSBoZXhDZW50ZXIoaGV4KVxuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmFkZFBvbHlnb24ocG9seWdvbkNlbnRlciwgaGV4U2l6ZSlcbiAgICB0aGlzLmhleFBvbHlnb25zLnNldChoZXgudG9TdHJpbmcoKSwgcG9seWdvbilcbiAgfVxuXG4gIHByaXZhdGUgYWRkUG9seWdvbihjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIpOiBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbiB7XG4gICAgY29uc3QgdmVydGljZXMgPSBbLi4uaGV4Q29ybmVycyhwb2ludCgwLCAwKSwgc2l6ZSldXG4gICAgcmV0dXJuIHRoaXMuc2NlbmUuYWRkLnBvbHlnb24oY2VudGVyLngsIGNlbnRlci55LCB2ZXJ0aWNlcylcbiAgICAgIC5zZXRPcmlnaW4oMCwgMClcbiAgICAgIC5zZXRTdHJva2VTdHlsZSgzLCAweDAwMDAwMClcbiAgfVxuXG4gIHB1YmxpYyBzdGF0ZVVwZGF0ZWQgPSAod29ybGRTdGF0ZTogV29ybGRTdGF0ZSwgbG9jYWxHYW1lU3RhdGU6IExvY2FsR2FtZVN0YXRlKTogdm9pZCA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gd29ybGRTdGF0ZVxuICAgIHRoaXMubG9jYWxHYW1lU3RhdGUgPSBsb2NhbEdhbWVTdGF0ZVxuICB9XG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICgpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGhleCBvZiB0aGlzLndvcmxkU3RhdGUubWFwLmdldE1hcEhleGVzKCkpIHtcbiAgICAgIHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpLnNldEZpbGxTdHlsZSh0aGlzLmNhbGN1bGF0ZUNvbG91cihoZXgpKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pXG4gICAgICB0aHJvdyBgTm8gcG9seWdvbiBmb3VuZCBmb3IgJHtoZXh9YFxuICAgIHJldHVybiBwb2x5Z29uXG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVRpbGVTdGF0ZSA9IChoZXg6IEhleCk6IFRpbGVTdGF0ZSA9PiB7XG4gICAgY29uc3QgeyBwbGF5ZXJJZCwgIHNlbGVjdGVkSGV4LCBtb2RlIH0gPSB0aGlzLmxvY2FsR2FtZVN0YXRlXG4gICAgaWYgKHNlbGVjdGVkSGV4ICYmIHNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICByZXR1cm4gJ3NlbGVjdGVkJ1xuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09ICdtb3ZlVW5pdCcpIHtcbiAgICAgIGlmIChoZXguaXNBZGphY2VudFRvKHNlbGVjdGVkSGV4ISkgJiYgIXRoaXMuZmluZFVuaXRJbkxvY2F0aW9uKGhleCkpIHtcbiAgICAgICAgcmV0dXJuICd0YXJnZXRhYmxlJ1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobW9kZS50eXBlID09ICdhdHRhY2snKSB7XG4gICAgICBpZiAoaGV4LmlzQWRqYWNlbnRUbyhzZWxlY3RlZEhleCEpKSB7XG4gICAgICAgIGNvbnN0IHVuaXQgPSB0aGlzLmZpbmRVbml0SW5Mb2NhdGlvbihoZXgpXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQucGxheWVySWQgIT0gcGxheWVySWQpIHtcbiAgICAgICAgICByZXR1cm4gJ3RhcmdldGFibGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICdkZWZhdWx0J1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVDb2xvdXIgPSAoaGV4OiBIZXgpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBERUZBVUxUX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBTRUxFQ1RFRF9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBUQVJHRVRBQkxFX1RJTEVfQ09MT1VSXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGlsZVN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlSG92ZXJDb2xvdXIgPSAoaGV4OiBIZXgpOiBDb2xvdXJOdW1iZXIgPT4ge1xuICAgIGNvbnN0IHRpbGVTdGF0ZSA9IHRoaXMuY2FsY3VsYXRlVGlsZVN0YXRlKGhleClcbiAgICBzd2l0Y2ggKHRpbGVTdGF0ZSkge1xuICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9ERUZBVUxUX1RJTEVfQ09MT1VSXG4gICAgICBjYXNlICdzZWxlY3RlZCc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9TRUxFQ1RFRF9USUxFX0NPTE9VUlxuICAgICAgY2FzZSAndGFyZ2V0YWJsZSc6XG4gICAgICAgIHJldHVybiBIT1ZFUl9UQVJHRVRBQkxFX1RJTEVfQ09MT1VSXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVW5yZWFjaGFibGVDYXNlRXJyb3IodGlsZVN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmluZFVuaXRJbkxvY2F0aW9uID0gKGhleDogSGV4KTogT3B0aW9uPFVuaXQ+ID0+IHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24oaGV4KVxuXG4gIHB1YmxpYyBoYW5kbGVQb2ludGVyTW92ZShwb2ludGVyUG9pbnQ6IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgaGV4ID0gZnJvbVBvaW50KG11bHRpcGx5UG9pbnQoc3VidHJhY3RQb2ludHMocG9pbnRlclBvaW50LCBkcmF3aW5nT2Zmc2V0KSwgMSAvIGhleFNpemUpKVxuICAgIGlmICh0aGlzLnByZXZpb3VzSG92ZXIgJiYgdGhpcy5wcmV2aW91c0hvdmVyLmVxdWFscyhoZXgpKVxuICAgICAgcmV0dXJuXG4gICAgaWYgKHRoaXMucHJldmlvdXNIb3Zlcikge1xuICAgICAgdGhpcy5nZXRIZXhQb2x5Z29uKHRoaXMucHJldmlvdXNIb3Zlcikuc2V0RmlsbFN0eWxlKHRoaXMuY2FsY3VsYXRlQ29sb3VyKHRoaXMucHJldmlvdXNIb3ZlcikpXG4gICAgICB0aGlzLnByZXZpb3VzSG92ZXIgPSB1bmRlZmluZWRcbiAgICB9XG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5tYXAuaXNJbkJvdW5kcyhoZXgpKSB7XG4gICAgICB0aGlzLmdldEhleFBvbHlnb24oaGV4KS5zZXRGaWxsU3R5bGUodGhpcy5jYWxjdWxhdGVIb3ZlckNvbG91cihoZXgpKVxuICAgICAgdGhpcy5wcmV2aW91c0hvdmVyID0gaGV4XG4gICAgfVxuICB9XG5cbn0iLCJleHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxufVxuXG5leHBvcnQgY29uc3QgcG9pbnQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQb2ludCA9PiAoeyB4LCB5IH0pXG5cbmV4cG9ydCBjb25zdCBtdWx0aXBseVBvaW50ID0gKHBvaW50OiBQb2ludCwgbjogbnVtYmVyKTogUG9pbnQgPT4gKHsgeDogcG9pbnQueCAqIG4sIHk6IHBvaW50LnkgKiBuIH0pXG5cbmV4cG9ydCBjb25zdCBhZGRQb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IFBvaW50ID0+ICh7IHg6IHBvaW50MS54ICsgcG9pbnQyLngsIHk6IHBvaW50MS55ICsgcG9pbnQyLnkgfSlcblxuZXhwb3J0IGNvbnN0IHN1YnRyYWN0UG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoe1xuICB4OiBwb2ludDEueCAtIHBvaW50Mi54LFxuICB5OiBwb2ludDEueSAtIHBvaW50Mi55LFxufSlcbiIsImltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IFVuaXQgfSBmcm9tICcuLi93b3JsZC91bml0J1xuaW1wb3J0IHsgaGV4Q2VudGVyIH0gZnJvbSAnLi9nYW1lLXNjZW5lJ1xuaW1wb3J0IHsgSEVBTFRIX0JPUkRFUl9DT0xPVVIsIEhFQUxUSF9FTVBUWV9DT0xPVVIsIEhFQUxUSF9GVUxMX0NPTE9VUiwgUExBWUVSXzFfVElOVCwgUExBWUVSXzJfVElOVCB9IGZyb20gJy4vY29sb3VycydcbmltcG9ydCB7IGFkZFBvaW50cywgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuaW1wb3J0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpXG5cbmNvbnN0IEhFQUxUSF9CQVJfV0lEVEggPSA1MFxuY29uc3QgSEVBTFRIX0JBUl9IRUlHSFQgPSAxMlxuY29uc3QgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTID0gMlxuY29uc3QgSU1BR0VfT0ZGU0VUID0geyB4OiAwLCB5OiA0IH1cbmNvbnN0IEhFQUxUSF9CQVJfT0ZGU0VUID0geyB4OiAtMjUsIHk6IC00MCB9XG5cbmV4cG9ydCBjbGFzcyBVbml0RGlzcGxheU9iamVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2NlbmU6IFBoYXNlci5TY2VuZVxuICBwcml2YXRlIHVuaXQ6IFVuaXRcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gIHByaXZhdGUgcmVhZG9ubHkgaGVhbHRoQmFyR3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljc1xuXG4gIGNvbnN0cnVjdG9yKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHVuaXQ6IFVuaXQpIHtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnVuaXQgPSB1bml0XG4gICAgdGhpcy5pbWFnZSA9IHNjZW5lLmFkZC5pbWFnZSgwLCAwLCAnbGxhbWEnKVxuICAgICAgLnNldFNjYWxlKDAuOClcbiAgICAgIC5zZXRUaW50KHRoaXMudW5pdC5wbGF5ZXJJZCA9PSAxID8gUExBWUVSXzFfVElOVCA6IFBMQVlFUl8yX1RJTlQpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcyA9IHNjZW5lLmFkZC5ncmFwaGljcygpXG4gIH1cblxuICBwcml2YXRlIGdldEhlYWx0aEJhclBvc2l0aW9uID0gKHBvaW50OiBQb2ludCk6IFBvaW50ID0+IGFkZFBvaW50cyhwb2ludCwgSEVBTFRIX0JBUl9PRkZTRVQpXG5cbiAgcHVibGljIHN5bmNTY2VuZSA9ICgpID0+IHtcbiAgICBjb25zdCB1bml0UG9pbnQgPSBoZXhDZW50ZXIodGhpcy51bml0LmxvY2F0aW9uKVxuICAgIHRoaXMuaW1hZ2Uuc2V0UG9zaXRpb24odW5pdFBvaW50LnggKyBJTUFHRV9PRkZTRVQueCwgdW5pdFBvaW50LnkgKyBJTUFHRV9PRkZTRVQueSlcbiAgICB0aGlzLnN5bmNIZWFsdGhCYXIodW5pdFBvaW50KVxuICB9XG5cbiAgcHJpdmF0ZSBzeW5jSGVhbHRoQmFyID0gKHVuaXRQb2ludDogUG9pbnQpID0+IHtcbiAgICBjb25zdCBoZWFsdGhCYXJQb3NpdGlvbiA9IHRoaXMuZ2V0SGVhbHRoQmFyUG9zaXRpb24odW5pdFBvaW50KVxuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3Muc2V0UG9zaXRpb24oaGVhbHRoQmFyUG9zaXRpb24ueCwgaGVhbHRoQmFyUG9zaXRpb24ueSlcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmNsZWFyKClcblxuICAgIC8vIERyYXcgYm9yZGVyXG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IEhFQUxUSF9CQVJfV0lEVEggLSAyICogSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTXG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSBIRUFMVEhfQkFSX0hFSUdIVCAtIDIgKiBIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1NcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfQk9SREVSX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KDAsIDAsIEhFQUxUSF9CQVJfV0lEVEgsIEhFQUxUSF9CQVJfSEVJR0hUKVxuXG4gICAgLy8gRHJhdyBlbXB0eSBiYWNrZ3JvdW5kXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsU3R5bGUoSEVBTFRIX0VNUFRZX0NPTE9VUilcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxSZWN0KEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgSEVBTFRIX0JBUl9CT1JERVJfVEhJQ0tORVNTLCBpbm5lcldpZHRoLCBpbm5lckhlaWdodClcblxuICAgIC8vIEZpbGwgaW4gYmFyXG4gICAgY29uc3QgeyBjdXJyZW50LCBtYXggfSA9IHRoaXMudW5pdC5oaXRQb2ludHNcbiAgICB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLmZpbGxTdHlsZShIRUFMVEhfRlVMTF9DT0xPVVIpXG4gICAgdGhpcy5oZWFsdGhCYXJHcmFwaGljcy5maWxsUmVjdChIRUFMVEhfQkFSX0JPUkRFUl9USElDS05FU1MsIEhFQUxUSF9CQVJfQk9SREVSX1RISUNLTkVTUywgaW5uZXJXaWR0aCAqIGN1cnJlbnQgLyBtYXgsIGlubmVySGVpZ2h0KVxuICB9XG5cbiAgcHVibGljIHVuaXRVcGRhdGVkID0gKHVuaXQ6IFVuaXQpID0+IHtcbiAgICBhc3NlcnQodW5pdC5pZCA9PSB0aGlzLnVuaXQuaWQpXG4gICAgdGhpcy51bml0ID0gdW5pdFxuICB9XG5cbiAgcHVibGljIG1vdmUgPSAoZnJvbTogSGV4LCB0bzogSGV4KSA9PiB7XG4gICAgY29uc3QgYmVmb3JlQ29vcmRzID0gaGV4Q2VudGVyKGZyb20pXG4gICAgY29uc3QgYWZ0ZXJDb29yZHMgPSBoZXhDZW50ZXIodG8pXG4gICAgdGhpcy5pbWFnZS5zZXRGbGlwWChhZnRlckNvb3Jkcy54IDwgYmVmb3JlQ29vcmRzLngpXG4gICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgIHRhcmdldHM6IHRoaXMuaW1hZ2UsXG4gICAgICAuLi5jYWxjdWxhdGVUd2VlblhZKGJlZm9yZUNvb3JkcywgYWZ0ZXJDb29yZHMsIElNQUdFX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICB9KVxuICB9XG5cbiAgcHVibGljIGF0dGFjayA9IChmcm9tOiBIZXgsIHRvOiBIZXgpID0+IHtcbiAgICBjb25zdCBiZWZvcmVDb29yZHMgPSBoZXhDZW50ZXIoZnJvbSlcbiAgICBjb25zdCBhZnRlckNvb3JkcyA9IGhleENlbnRlcih0bylcbiAgICB0aGlzLmltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgdGFyZ2V0czogdGhpcy5pbWFnZSxcbiAgICAgIC4uLmNhbGN1bGF0ZVR3ZWVuWFkoYmVmb3JlQ29vcmRzLCBhZnRlckNvb3JkcywgSU1BR0VfT0ZGU0VUKSxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgeW95bzogdHJ1ZSxcbiAgICB9KVxuICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICB0YXJnZXRzOiB0aGlzLmhlYWx0aEJhckdyYXBoaWNzLFxuICAgICAgLi4uY2FsY3VsYXRlVHdlZW5YWShiZWZvcmVDb29yZHMsIGFmdGVyQ29vcmRzLCBIRUFMVEhfQkFSX09GRlNFVCksXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgZWFzZTogJ0N1YmljJyxcbiAgICAgIHlveW86IHRydWUsXG4gICAgfSlcbiAgfVxuXG4gIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xuICAgIHRoaXMuaGVhbHRoQmFyR3JhcGhpY3MuZGVzdHJveSgpXG4gICAgdGhpcy5pbWFnZS5kZXN0cm95KClcbiAgfVxufVxuXG50eXBlIFR3ZWVuWFkgPSB7IHg6IHsgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyIH0sIHk6IHsgZnJvbTogbnVtYmVyLCB0bzogbnVtYmVyIH0gfVxuXG5jb25zdCBjYWxjdWxhdGVUd2VlblhZID0gKGZyb206IFBvaW50LCB0bzogUG9pbnQsIG9mZnNldDogUG9pbnQpOiBUd2VlblhZID0+XG4gICh7XG4gICAgeDoge1xuICAgICAgZnJvbTogZnJvbS54ICsgb2Zmc2V0LngsXG4gICAgICB0bzogdG8ueCArIG9mZnNldC54LFxuICAgIH0sXG4gICAgeToge1xuICAgICAgZnJvbTogZnJvbS55ICsgb2Zmc2V0LnksXG4gICAgICB0bzogdG8ueSArIG9mZnNldC55LFxuICAgIH0sXG4gIH0pXG5cbiIsImltcG9ydCB7XG4gIElOSVRJQUxfV09STERfU1RBVEUsXG4gIFBsYXllcklkLFxuICBXb3JsZFN0YXRlLFxufSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IEF0dGFja0FjdGlvbiwgTW92ZVVuaXRXb3JsZEFjdGlvbiwgV29ybGRBY3Rpb24gfSBmcm9tICcuLi93b3JsZC93b3JsZC1hY3Rpb25zJ1xuaW1wb3J0IHsgYXBwbHlFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvcidcbmltcG9ydCB7XG4gIENvbWJhdFdvcmxkRXZlbnQsXG4gIFVuaXRNb3ZlZFdvcmxkRXZlbnQsXG4gIFdvcmxkRXZlbnQsXG59IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcblxuZXhwb3J0IHR5cGUgV29ybGRFdmVudExpc3RlbmVyID0gKGV2ZW50OiBXb3JsZEV2ZW50KSA9PiB2b2lkXG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG4gIHByaXZhdGUgbGlzdGVuZXJzOiBXb3JsZEV2ZW50TGlzdGVuZXJbXSA9IFtdXG5cbiAgcHVibGljIGFkZExpc3RlbmVyID0gKGxpc3RlbmVyOiBXb3JsZEV2ZW50TGlzdGVuZXIpID0+IHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG5cbiAgcHJpdmF0ZSBub3RpZnlMaXN0ZW5lcnMgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpOiB2b2lkID0+IHtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMubGlzdGVuZXJzKVxuICAgICAgbGlzdGVuZXIoZXZlbnQpXG4gIH1cblxuICBwdWJsaWMgaGFuZGxlQWN0aW9uID0gKHBsYXllcklkOiBQbGF5ZXJJZCwgYWN0aW9uOiBXb3JsZEFjdGlvbik6IHZvaWQgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ2F0dGFjayc6XG4gICAgICAgIHRoaXMuaGFuZGxlQXR0YWNrKHBsYXllcklkLCBhY3Rpb24pXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtb3ZlVW5pdCc6XG4gICAgICAgIHRoaXMuaGFuZGxlTW92ZVVuaXQocGxheWVySWQsIGFjdGlvbilcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUF0dGFjayA9IChwbGF5ZXJJZDogUGxheWVySWQsIGFjdGlvbjogQXR0YWNrQWN0aW9uKSA9PiB7XG4gICAgY29uc3QgeyB1bml0SWQsIHRhcmdldCB9ID0gYWN0aW9uXG4gICAgY29uc3QgYXR0YWNrZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIWF0dGFja2VyKVxuICAgICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke3VuaXRJZH1gXG4gICAgY29uc3QgZnJvbSA9IGF0dGFja2VyLmxvY2F0aW9uXG4gICAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0YXJnZXQpKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBhdHRhY2sgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHtmcm9tfSB0byAke3RhcmdldH1gXG4gICAgY29uc3QgZGVmZW5kZXIgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKHRhcmdldClcbiAgICBpZiAoIWRlZmVuZGVyKVxuICAgICAgdGhyb3cgYE5vIHRhcmdldCB1bml0IHRvIGF0dGFjayBhdCAke3RhcmdldH1gXG4gICAgaWYgKHBsYXllcklkID09IGRlZmVuZGVyLnBsYXllcklkKVxuICAgICAgdGhyb3cgYENhbm5vdCBhdHRhY2sgb3duIHVuaXRgXG4gICAgaWYgKGF0dGFja2VyLmFjdGlvblBvaW50cy5jdXJyZW50IDwgMSlcbiAgICAgIHRocm93IGBOb3QgZW5vdWdoIGFjdGlvbiBwb2ludHMgdG8gYXR0YWNrYFxuXG4gICAgY29uc3QgYXR0YWNrZXJEYW1hZ2UgPSBNYXRoLm1pbihhdHRhY2tlci5oaXRQb2ludHMuY3VycmVudCwgMTApXG4gICAgY29uc3QgZGVmZW5kZXJEYW1hZ2UgPSBNYXRoLm1pbihkZWZlbmRlci5oaXRQb2ludHMuY3VycmVudCwgMjApXG4gICAgY29uc3QgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQgPSB7XG4gICAgICB0eXBlOiAnY29tYmF0JyxcbiAgICAgIGF0dGFja2VyOiB7XG4gICAgICAgIHBsYXllcklkOiBhdHRhY2tlci5wbGF5ZXJJZCxcbiAgICAgICAgdW5pdElkOiBhdHRhY2tlci5pZCxcbiAgICAgICAgbG9jYXRpb246IGF0dGFja2VyLmxvY2F0aW9uLFxuICAgICAgICBkYW1hZ2U6IGF0dGFja2VyRGFtYWdlLFxuICAgICAgICBraWxsZWQ6IGF0dGFja2VyLmhpdFBvaW50cy5jdXJyZW50ID09IGF0dGFja2VyRGFtYWdlLFxuICAgICAgfSxcbiAgICAgIGRlZmVuZGVyOiB7XG4gICAgICAgIHBsYXllcklkOiBkZWZlbmRlci5wbGF5ZXJJZCxcbiAgICAgICAgdW5pdElkOiBkZWZlbmRlci5pZCxcbiAgICAgICAgbG9jYXRpb246IGRlZmVuZGVyLmxvY2F0aW9uLFxuICAgICAgICBkYW1hZ2U6IGRlZmVuZGVyRGFtYWdlLFxuICAgICAgICBraWxsZWQ6IGRlZmVuZGVyLmhpdFBvaW50cy5jdXJyZW50ID09IGRlZmVuZGVyRGFtYWdlLFxuICAgICAgfSxcbiAgICAgIGFjdGlvblBvaW50c0NvbnN1bWVkOiAxLFxuICAgIH1cbiAgICB0aGlzLndvcmxkU3RhdGUgPSBhcHBseUV2ZW50KHRoaXMud29ybGRTdGF0ZSwgZXZlbnQpXG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gIH1cblxuXG4gIHByaXZhdGUgaGFuZGxlTW92ZVVuaXQgPSAocGxheWVySWQ6IFBsYXllcklkLCBhY3Rpb246IE1vdmVVbml0V29ybGRBY3Rpb24pID0+IHtcbiAgICBjb25zdCB7IHVuaXRJZCwgdG8gfSA9IGFjdGlvblxuICAgIGNvbnN0IHVuaXQgPSB0aGlzLndvcmxkU3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgICBpZiAoIXVuaXQpXG4gICAgICB0aHJvdyBgTm8gdW5pdCBmb3VuZCB3aXRoIElEICR7dW5pdElkfWBcbiAgICBjb25zdCBmcm9tID0gdW5pdC5sb2NhdGlvblxuICAgIGlmICghZnJvbS5pc0FkamFjZW50VG8odG8pKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICAgIGlmICghdGhpcy53b3JsZFN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSlcbiAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gICAgaWYgKHRoaXMud29ybGRTdGF0ZS5maW5kVW5pdEluTG9jYXRpb24odG8pKVxuICAgICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgICBpZiAodW5pdC5hY3Rpb25Qb2ludHMuY3VycmVudCA8IDEpXG4gICAgICB0aHJvdyBgTm90IGVub3VnaCBhY3Rpb24gcG9pbnRzIHRvIG1vdmVgXG4gICAgY29uc3QgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQgPSB7XG4gICAgICB0eXBlOiAndW5pdE1vdmVkJyxcbiAgICAgIHBsYXllcklkOiBwbGF5ZXJJZCxcbiAgICAgIGFjdGlvblBvaW50c0NvbnN1bWVkOiAxLFxuICAgICAgdW5pdElkLFxuICAgICAgZnJvbSxcbiAgICAgIHRvLFxuICAgIH1cbiAgICB0aGlzLndvcmxkU3RhdGUgPSBhcHBseUV2ZW50KHRoaXMud29ybGRTdGF0ZSwgZXZlbnQpXG4gICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gIH1cbn0iLCJleHBvcnQgdHlwZSBPcHRpb248VD4gPSBUIHwgdW5kZWZpbmVkXG5cbmV4cG9ydCBpbnRlcmZhY2UgSnVzdDxUPiB7XG4gIHR5cGU6ICdqdXN0J1xuICBpdGVtOiBUXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTm90aGluZyB7XG4gIHR5cGU6ICdub3RoaW5nJ1xufVxuXG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IEp1c3Q8VD4gfCBOb3RoaW5nXG5cbmV4cG9ydCBjb25zdCB0b01heWJlID0gPFQ+KG9wdGlvbjogT3B0aW9uPFQ+KTogTWF5YmU8VD4gPT5cbiAgb3B0aW9uID09IHVuZGVmaW5lZCA/IG5vdGhpbmcgOiBqdXN0KG9wdGlvbilcblxuZXhwb3J0IGNvbnN0IHRvT3B0aW9uID0gPFQ+KG1heWJlOiBNYXliZTxUPik6IE9wdGlvbjxUPiA9PiB7XG4gIHN3aXRjaCAobWF5YmUudHlwZSkge1xuICAgIGNhc2UgJ2p1c3QnOlxuICAgICAgcmV0dXJuIG1heWJlLml0ZW1cbiAgICBjYXNlICdub3RoaW5nJzpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgbm90aGluZzogTm90aGluZyA9IHsgdHlwZTogJ25vdGhpbmcnIH1cbmV4cG9ydCBjb25zdCBqdXN0ID0gPFQ+KGl0ZW06IFQpOiBKdXN0PFQ+ID0+ICh7XG4gIHR5cGU6ICdqdXN0JyxcbiAgaXRlbSxcbn0pIiwiZXhwb3J0IGNsYXNzIFVucmVhY2hhYmxlQ2FzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih2YWx1ZTogbmV2ZXIpIHtcbiAgICBzdXBlcihgVW5yZWFjaGFibGUgY2FzZTogJHt2YWx1ZX1gKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuXG5leHBvcnQgY2xhc3MgSGV4IHtcbiAgcmVhZG9ubHkgeDogbnVtYmVyXG4gIHJlYWRvbmx5IHk6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geFxuICAgIHRoaXMueSA9IHlcbiAgfVxuXG4gIGdldCB6KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIC10aGlzLnggLSB0aGlzLnlcbiAgfVxuXG4gIHB1YmxpYyBwbHVzID0gKHRoYXQ6IEhleCkgPT4gbmV3IEhleCh0aGlzLnggKyB0aGF0LngsIHRoaXMueSArIHRoYXQueSlcblxuICBwdWJsaWMgbmVpZ2hib3VycyA9ICgpOiBIZXhbXSA9PiBIZXguTkVJR0hCT1VSUy5tYXAodGhpcy5wbHVzKVxuXG4gIHB1YmxpYyBpc0FkamFjZW50VG8gPSAodGhhdDogSGV4KTogYm9vbGVhbiA9PiBSLmluY2x1ZGVzKHRoYXQsIHRoaXMubmVpZ2hib3VycygpKVxuXG4gIHByaXZhdGUgc3RhdGljIE5FSUdIQk9VUlM6IEhleFtdID0gW1xuICAgIG5ldyBIZXgoMCwgMSksXG4gICAgbmV3IEhleCgxLCAwKSxcbiAgICBuZXcgSGV4KDEsIC0xKSxcbiAgICBuZXcgSGV4KDAsIC0xKSxcbiAgICBuZXcgSGV4KC0xLCAwKSxcbiAgICBuZXcgSGV4KC0xLCAxKSxcbiAgXVxuXG4gIHB1YmxpYyBlcXVhbHMgPSAodGhhdDogSGV4KTogYm9vbGVhbiA9PiB0aGlzLnggPT0gdGhhdC54ICYmIHRoaXMueSA9PSB0aGF0LnlcblxuICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IGBIZXgoJHt0aGlzLnh9LCAke3RoaXMueX0pYFxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0JylcbmltcG9ydCB7IFBsYXllcklkIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcblxuZXhwb3J0IGNsYXNzIEFjdGlvblBvaW50cyB7XG4gIHJlYWRvbmx5IGN1cnJlbnQ6IG51bWJlclxuICByZWFkb25seSBtYXg6IG51bWJlclxuXG4gIGNvbnN0cnVjdG9yKHsgY3VycmVudCwgbWF4IH06IHsgY3VycmVudDogbnVtYmVyLCBtYXg6IG51bWJlciB9KSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMubWF4ID0gbWF4XG4gICAgYXNzZXJ0KG1heCA+IDApXG4gICAgYXNzZXJ0KGN1cnJlbnQgPj0gMClcbiAgICBhc3NlcnQoY3VycmVudCA8PSBtYXgpXG4gIH1cblxuICBwdWJsaWMgcmVkdWNlID0gKHBvaW50czogbnVtYmVyKTogQWN0aW9uUG9pbnRzID0+IHRoaXMuY29weSh7IGN1cnJlbnQ6IHRoaXMuY3VycmVudCAtIHBvaW50cyB9KVxuXG4gIHB1YmxpYyBjb3B5ID0gKHsgY3VycmVudCA9IHRoaXMuY3VycmVudCwgbWF4ID0gdGhpcy5tYXggfTogeyBjdXJyZW50PzogbnVtYmVyLCBtYXg/OiBudW1iZXIgfSA9IHt9KTogQWN0aW9uUG9pbnRzID0+XG4gICAgbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQsIG1heCB9KVxufVxuXG5leHBvcnQgY2xhc3MgSGl0UG9pbnRzIHtcbiAgcmVhZG9ubHkgY3VycmVudDogbnVtYmVyXG4gIHJlYWRvbmx5IG1heDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyBjdXJyZW50LCBtYXggfTogeyBjdXJyZW50OiBudW1iZXIsIG1heDogbnVtYmVyIH0pIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5tYXggPSBtYXhcbiAgICBhc3NlcnQobWF4ID4gMClcbiAgICBhc3NlcnQoY3VycmVudCA+PSAwKVxuICAgIGFzc2VydChjdXJyZW50IDw9IG1heClcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBIaXRQb2ludHMgPT4gdGhpcy5jb3B5KHsgY3VycmVudDogdGhpcy5jdXJyZW50IC0gcG9pbnRzIH0pXG5cbiAgcHVibGljIGNvcHkgPSAoeyBjdXJyZW50ID0gdGhpcy5jdXJyZW50LCBtYXggPSB0aGlzLm1heCB9OiB7IGN1cnJlbnQ/OiBudW1iZXIsIG1heD86IG51bWJlciB9ID0ge30pOiBIaXRQb2ludHMgPT5cbiAgICBuZXcgSGl0UG9pbnRzKHsgY3VycmVudCwgbWF4IH0pXG59XG5cbmV4cG9ydCBjbGFzcyBVbml0IHtcbiAgcmVhZG9ubHkgaWQ6IFVuaXRJZFxuICByZWFkb25seSBwbGF5ZXJJZDogUGxheWVySWRcbiAgcmVhZG9ubHkgbmFtZTogc3RyaW5nXG4gIHJlYWRvbmx5IGxvY2F0aW9uOiBIZXhcbiAgcmVhZG9ubHkgaGl0UG9pbnRzOiBIaXRQb2ludHNcbiAgcmVhZG9ubHkgYWN0aW9uUG9pbnRzOiBBY3Rpb25Qb2ludHNcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgICAgICAgICAgaWQsIHBsYXllcklkLCBuYW1lLCBsb2NhdGlvbiwgaGl0UG9pbnRzLCBhY3Rpb25Qb2ludHMsXG4gICAgICAgICAgICAgIH06IHsgaWQ6IFVuaXRJZCwgcGxheWVySWQ6IFBsYXllcklkLCBuYW1lOiBzdHJpbmcsIGxvY2F0aW9uOiBIZXgsIGhpdFBvaW50czogSGl0UG9pbnRzLCBhY3Rpb25Qb2ludHM6IEFjdGlvblBvaW50cyB9KSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkXG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvblxuICAgIHRoaXMuaGl0UG9pbnRzID0gaGl0UG9pbnRzXG4gICAgdGhpcy5hY3Rpb25Qb2ludHMgPSBhY3Rpb25Qb2ludHNcbiAgfVxuXG4gIHB1YmxpYyBkYW1hZ2UgPSAocG9pbnRzOiBudW1iZXIpOiBVbml0ID0+IHRoaXMuY29weSh7IGhpdFBvaW50czogdGhpcy5oaXRQb2ludHMuZGFtYWdlKHBvaW50cykgfSlcblxuICBwdWJsaWMgY29weSA9ICh7XG4gICAgICAgICAgICAgICAgICAgaWQgPSB0aGlzLmlkLFxuICAgICAgICAgICAgICAgICAgIHBsYXllcklkID0gdGhpcy5wbGF5ZXJJZCxcbiAgICAgICAgICAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvbixcbiAgICAgICAgICAgICAgICAgICBoaXRQb2ludHMgPSB0aGlzLmhpdFBvaW50cyxcbiAgICAgICAgICAgICAgICAgICBhY3Rpb25Qb2ludHMgPSB0aGlzLmFjdGlvblBvaW50cyxcbiAgICAgICAgICAgICAgICAgfTogeyBpZD86IFVuaXRJZCwgcGxheWVySWQ/OiBQbGF5ZXJJZCwgbmFtZT86IHN0cmluZywgbG9jYXRpb24/OiBIZXgsIGhpdFBvaW50cz86IEhpdFBvaW50cywgYWN0aW9uUG9pbnRzPzogQWN0aW9uUG9pbnRzIH0gPSB7fSk6IFVuaXQgPT5cbiAgICBuZXcgVW5pdCh7IGlkLCBwbGF5ZXJJZCwgbmFtZSwgbG9jYXRpb24sIGhpdFBvaW50cywgYWN0aW9uUG9pbnRzIH0pXG5cbiAgcHVibGljIG1vdmUgPSAobG9jYXRpb246IEhleCwgYWN0aW9uUG9pbnRzQ29uc3VtZWQ6IG51bWJlcik6IFVuaXQgPT5cbiAgICB0aGlzLmNvcHkoeyBsb2NhdGlvbiwgYWN0aW9uUG9pbnRzOiB0aGlzLmFjdGlvblBvaW50cy5yZWR1Y2UoYWN0aW9uUG9pbnRzQ29uc3VtZWQpIH0pXG5cbiAgcHVibGljIHJlZHVjZUFjdGlvblBvaW50cyA9IChhY3Rpb25Qb2ludHNDb25zdW1lZDogbnVtYmVyKTogVW5pdCA9PlxuICAgIHRoaXMuY29weSh7IGFjdGlvblBvaW50czogdGhpcy5hY3Rpb25Qb2ludHMucmVkdWNlKGFjdGlvblBvaW50c0NvbnN1bWVkKSB9KVxufVxuXG5leHBvcnQgdHlwZSBVbml0SWQgPSBudW1iZXIiLCJpbXBvcnQgeyBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IENvbWJhdFdvcmxkRXZlbnQsIFVuaXRNb3ZlZFdvcmxkRXZlbnQsIFdvcmxkRXZlbnQgfSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IFVucmVhY2hhYmxlQ2FzZUVycm9yIH0gZnJvbSAnLi4vdXRpbC91bnJlYWNoYWJsZS1jYXNlLWVycm9yJ1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIHJldHVybiBoYW5kbGVVbml0TW92ZWQoc3RhdGUsIGV2ZW50KVxuICAgIGNhc2UgJ2NvbWJhdCc6XG4gICAgICByZXR1cm4gaGFuZGxlQ29tYmF0KHN0YXRlLCBldmVudClcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFVucmVhY2hhYmxlQ2FzZUVycm9yKGV2ZW50KVxuICB9XG59XG5cbmNvbnN0IGhhbmRsZVVuaXRNb3ZlZCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyB1bml0SWQsIHBsYXllcklkLCBmcm9tLCB0byB9ID0gZXZlbnRcbiAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpXG4gICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCBiZXR3ZWVuIG5vbi1hZGphY2VudCBoZXhlcyAke2Zyb219IHRvICR7dG99YFxuICBpZiAoIXN0YXRlLm1hcC5pc0luQm91bmRzKHRvKSlcbiAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7dG99YFxuICBjb25zdCB1bml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKHVuaXRJZClcbiAgaWYgKCF1bml0KVxuICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHt1bml0SWR9YFxuICBpZiAoc3RhdGUuZmluZFVuaXRJbkxvY2F0aW9uKGZyb20pPy5pZCAhPSB1bml0SWQpXG4gICAgdGhyb3cgYEludmFsaWQgZnJvbSBsb2NhdGlvbiBmb3IgdW5pdCBtb3ZlbWVudGBcbiAgaWYgKHN0YXRlLmZpbmRVbml0SW5Mb2NhdGlvbih0bykpXG4gICAgdGhyb3cgYEludmFsaWQgdW5pdCBtb3ZlbWVudCB0byBhbHJlYWR5LW9jY3VwaWVkIGhleGBcbiAgaWYgKHVuaXQucGxheWVySWQgIT0gcGxheWVySWQpXG4gICAgdGhyb3cgYEludmFsaWQgYXR0ZW1wdCB0byBtb3ZlIHVuaXQgb2YgYW5vdGhlciBwbGF5ZXJgXG4gIGlmICh1bml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuICByZXR1cm4gc3RhdGUucmVwbGFjZVVuaXQodW5pdC5pZCwgdW5pdC5tb3ZlKHRvLCBldmVudC5hY3Rpb25Qb2ludHNDb25zdW1lZCkpXG59XG5cbmNvbnN0IGhhbmRsZUNvbWJhdCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IENvbWJhdFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgY29uc3QgeyBhdHRhY2tlciwgZGVmZW5kZXIgfSA9IGV2ZW50XG5cbiAgY29uc3QgYXR0YWNrZXJVbml0ID0gc3RhdGUuZmluZFVuaXRCeUlkKGF0dGFja2VyLnVuaXRJZClcbiAgaWYgKCFhdHRhY2tlclVuaXQpXG4gICAgdGhyb3cgYE5vIHVuaXQgZm91bmQgd2l0aCBJRCAke2F0dGFja2VyLnVuaXRJZH1gXG4gIGlmIChhdHRhY2tlclVuaXQubG9jYXRpb24gIT0gYXR0YWNrZXIubG9jYXRpb24pXG4gICAgdGhyb3cgYEludmFsaWQgbG9jYXRpb24gZm9yIGF0dGFja2VyYFxuXG4gIGNvbnN0IGRlZmVuZGVyVW5pdCA9IHN0YXRlLmZpbmRVbml0QnlJZChkZWZlbmRlci51bml0SWQpXG4gIGlmICghZGVmZW5kZXJVbml0KVxuICAgIHRocm93IGBObyB1bml0IGZvdW5kIHdpdGggSUQgJHtkZWZlbmRlci51bml0SWR9YFxuICBpZiAoZGVmZW5kZXJVbml0LmxvY2F0aW9uICE9IGRlZmVuZGVyLmxvY2F0aW9uKVxuICAgIHRocm93IGBJbnZhbGlkIGxvY2F0aW9uIGZvciBkZWZlbmRlcmBcblxuICBpZiAoYXR0YWNrZXJVbml0LnBsYXllcklkID09IGRlZmVuZGVyVW5pdC5wbGF5ZXJJZClcbiAgICB0aHJvdyBgSW52YWxpZCBjb21iYXQgd2l0aCBzZWxmYFxuICBpZiAoIWF0dGFja2VyLmxvY2F0aW9uLmlzQWRqYWNlbnRUbyhkZWZlbmRlci5sb2NhdGlvbikpXG4gICAgdGhyb3cgYEludmFsaWQgY29tYmF0IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7YXR0YWNrZXIubG9jYXRpb259IHRvICR7ZGVmZW5kZXIubG9jYXRpb259YFxuICBpZiAoYXR0YWNrZXJVbml0LmFjdGlvblBvaW50cy5jdXJyZW50IDwgZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpXG4gICAgdGhyb3cgYEludmFsaWQgYWN0aW9uIHBvaW50IHVzYWdlYFxuXG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlXG5cbiAgaWYgKGF0dGFja2VyLmtpbGxlZClcbiAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLnJlbW92ZVVuaXQoYXR0YWNrZXJVbml0LmlkKVxuICBlbHNlXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZXBsYWNlVW5pdChhdHRhY2tlclVuaXQuaWQsIGF0dGFja2VyVW5pdC5kYW1hZ2UoYXR0YWNrZXIuZGFtYWdlKS5yZWR1Y2VBY3Rpb25Qb2ludHMoZXZlbnQuYWN0aW9uUG9pbnRzQ29uc3VtZWQpKVxuXG4gIGlmIChkZWZlbmRlci5raWxsZWQpXG4gICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5yZW1vdmVVbml0KGRlZmVuZGVyVW5pdC5pZClcbiAgZWxzZVxuICAgIG5ld1N0YXRlID0gbmV3U3RhdGUucmVwbGFjZVVuaXQoZGVmZW5kZXJVbml0LmlkLCBkZWZlbmRlclVuaXQuZGFtYWdlKGRlZmVuZGVyLmRhbWFnZSkpXG5cbiAgcmV0dXJuIG5ld1N0YXRlXG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcbmltcG9ydCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKVxuXG5leHBvcnQgY2xhc3MgV29ybGRNYXAge1xuICByZWFkb25seSB3aWR0aDogbnVtYmVyXG4gIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoeyB3aWR0aCwgaGVpZ2h0IH06IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIGFzc2VydCh3aWR0aCA+IDApXG4gICAgYXNzZXJ0KGhlaWdodCA+IDApXG4gICAgdGhpcy53aWR0aCA9IHdpZHRoXG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyBpc0luQm91bmRzID0gKGhleDogSGV4KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgcSA9IGhleC54ICsgTWF0aC5mbG9vcihoZXgueSAvIDIpXG4gICAgcmV0dXJuIDAgPD0gcSAmJiBxIDwgdGhpcy53aWR0aCAmJiAwIDw9IGhleC55ICYmIGhleC55IDwgdGhpcy5oZWlnaHRcbiAgfVxuXG4gIHB1YmxpYyogZ2V0TWFwSGV4ZXMoKTogSXRlcmFibGVJdGVyYXRvcjxIZXg+IHtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IHRoaXMuaGVpZ2h0OyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy53aWR0aDsgYysrKSB7XG4gICAgICAgIGNvbnN0IHggPSAtTWF0aC5mbG9vcihyIC8gMikgKyBjXG4gICAgICAgIGNvbnN0IGhleCA9IG5ldyBIZXgoeCwgcilcbiAgICAgICAgeWllbGQgaGV4XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi9oZXgnXG5pbXBvcnQgKiBhcyBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IHsgV29ybGRNYXAgfSBmcm9tICcuL3dvcmxkLW1hcCdcbmltcG9ydCB7IEFjdGlvblBvaW50cywgSGl0UG9pbnRzLCBVbml0LCBVbml0SWQgfSBmcm9tICcuL3VuaXQnXG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuLi91dGlsL3R5cGVzJ1xuXG5leHBvcnQgY2xhc3MgV29ybGRTdGF0ZSB7XG4gIHJlYWRvbmx5IG1hcDogV29ybGRNYXBcbiAgcmVhZG9ubHkgdW5pdHM6IFVuaXRbXVxuXG4gIGNvbnN0cnVjdG9yKHsgbWFwLCB1bml0cyB9OiB7IG1hcDogV29ybGRNYXAsIHVuaXRzOiBVbml0W10gfSkge1xuICAgIHRoaXMubWFwID0gbWFwXG4gICAgdGhpcy51bml0cyA9IHVuaXRzXG4gIH1cblxuICBwdWJsaWMgY29weSA9ICh7IG1hcCA9IHRoaXMubWFwLCB1bml0cyA9IHRoaXMudW5pdHMgfTogeyBtYXA/OiBXb3JsZE1hcCwgdW5pdHM/OiBVbml0W10gfSA9IHt9KTogV29ybGRTdGF0ZSA9PlxuICAgIG5ldyBXb3JsZFN0YXRlKHsgbWFwLCB1bml0cyB9KVxuXG4gIHB1YmxpYyBmaW5kVW5pdEJ5SWQgPSAodW5pdElkOiBVbml0SWQpOiBPcHRpb248VW5pdD4gPT5cbiAgICBSLmZpbmQoKHVuaXQpID0+IHVuaXQuaWQgPT0gdW5pdElkLCB0aGlzLnVuaXRzKVxuXG4gIHB1YmxpYyBmaW5kVW5pdEluTG9jYXRpb24gPSAoaGV4OiBIZXgpOiBPcHRpb248VW5pdD4gPT5cbiAgICBSLmZpbmQoKHVuaXQpID0+IHVuaXQubG9jYXRpb24uZXF1YWxzKGhleCksIHRoaXMudW5pdHMpXG5cbiAgcHVibGljIHJlcGxhY2VVbml0ID0gKHVuaXRJZDogVW5pdElkLCB1bml0OiBVbml0KTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHVuaXRzOiBSLmFwcGVuZCh1bml0LCBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPSB1bml0SWQsIHRoaXMudW5pdHMpKSB9KVxuXG4gIHB1YmxpYyByZW1vdmVVbml0ID0gKHVuaXRJZDogVW5pdElkKTogV29ybGRTdGF0ZSA9PlxuICAgIHRoaXMuY29weSh7IHVuaXRzOiBSLmZpbHRlcigodW5pdCkgPT4gdW5pdC5pZCAhPSB1bml0SWQsIHRoaXMudW5pdHMpIH0pXG5cbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfV09STERfU1RBVEU6IFdvcmxkU3RhdGUgPSBuZXcgV29ybGRTdGF0ZSh7XG4gIG1hcDogbmV3IFdvcmxkTWFwKHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDYgfSksXG4gIHVuaXRzOiBbXG4gICAgbmV3IFVuaXQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBwbGF5ZXJJZDogMSxcbiAgICAgIG5hbWU6ICdXYWx0ZXInLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMSwgMSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiAyLFxuICAgICAgcGxheWVySWQ6IDEsXG4gICAgICBuYW1lOiAnQmVja3knLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMCwgMyksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiAzLFxuICAgICAgcGxheWVySWQ6IDIsXG4gICAgICBuYW1lOiAnQ2hld3BhY2EnLFxuICAgICAgbG9jYXRpb246IG5ldyBIZXgoMiwgMSksXG4gICAgICBoaXRQb2ludHM6IG5ldyBIaXRQb2ludHMoeyBjdXJyZW50OiAxMDAsIG1heDogMTAwIH0pLFxuICAgICAgYWN0aW9uUG9pbnRzOiBuZXcgQWN0aW9uUG9pbnRzKHsgY3VycmVudDogMiwgbWF4OiAyIH0pLFxuICAgIH0pLFxuICAgIG5ldyBVbml0KHtcbiAgICAgIGlkOiA0LFxuICAgICAgcGxheWVySWQ6IDIsXG4gICAgICBuYW1lOiAnQmFyYWNrIE8uIExsYW1hJyxcbiAgICAgIGxvY2F0aW9uOiBuZXcgSGV4KDMsIDIpLFxuICAgICAgaGl0UG9pbnRzOiBuZXcgSGl0UG9pbnRzKHsgY3VycmVudDogMTAwLCBtYXg6IDEwMCB9KSxcbiAgICAgIGFjdGlvblBvaW50czogbmV3IEFjdGlvblBvaW50cyh7IGN1cnJlbnQ6IDIsIG1heDogMiB9KSxcbiAgICB9KSxcbiAgXSxcbn0pXG5cbmV4cG9ydCB0eXBlIFBsYXllcklkID0gbnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==