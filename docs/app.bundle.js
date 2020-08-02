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
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
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
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
        // Source: https://opengameart.org/content/hex-tileset-pack
        this.load.image('llama', 'assets/sprites/llama_14.png');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


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
exports.GameScene = void 0;
var point_1 = __webpack_require__(/*! ./point */ "./src/scenes/point.ts");
var hex_geometry_1 = __webpack_require__(/*! ./hex-geometry */ "./src/scenes/hex-geometry.ts");
var world_state_1 = __webpack_require__(/*! ../world/world-state */ "./src/world/world-state.ts");
var server_1 = __webpack_require__(/*! ../server/server */ "./src/server/server.ts");
var world_event_evaluator_1 = __webpack_require__(/*! ../world/world-event-evaluator */ "./src/world/world-event-evaluator.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var point = function (x, y) { return ({ x: x, y: y }); };
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
var selectedTileColour = 0xffff44;
var defaultTileColour = 0xa1fd5e;
var movableTileColour = 0xd1ff8e;
var actionTextColour = '#cccc00';
var highlighedActonTextColour = '#ffff00';
var hexSize = 48;
var drawingOffset = { x: 60, y: 60 };
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.server = new server_1.Server();
        _this.worldState = world_state_1.INITIAL_WORLD_STATE;
        _this.mode = { type: 'selectHex' };
        _this.hexPolygons = new Map();
        _this.updateScene = function () {
            var e_1, _a, e_2, _b;
            try {
                for (var _c = __values(world_state_1.getMapHexes(_this.worldState.map)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var hex = _d.value;
                    var polygon = _this.getHexPolygon(hex);
                    if (_this.selectedHex && _this.selectedHex.equals(hex)) {
                        polygon.setFillStyle(selectedTileColour);
                    }
                    else {
                        polygon.setFillStyle(defaultTileColour);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (_this.worldState.unitLocation) {
                var unitPoint = _this.hexCenter(_this.worldState.unitLocation);
                _this.unitImage.setPosition(unitPoint.x, unitPoint.y);
            }
            switch (_this.mode.type) {
                case 'selectHex':
                    if (_this.selectedHex && _this.selectedHex.equals(_this.worldState.unitLocation)) {
                        _this.selectionText.setText('Walter - Llama warrior');
                        _this.actionText.setText('[M]ove');
                    }
                    else {
                        _this.selectionText.setText('');
                        _this.actionText.setText('');
                    }
                    break;
                case 'moveUnit':
                    _this.selectionText.setText('Walter - Llama warrior');
                    _this.actionText.setText('Click tile to move to (or ESC to cancel)');
                    try {
                        for (var _e = __values(_this.selectedHex.neighbours()), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var neighbour = _f.value;
                            if (world_state_1.isInBounds(neighbour, _this.worldState.map)) {
                                var polygon = _this.getHexPolygon(neighbour);
                                polygon.setFillStyle(movableTileColour);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    break;
            }
        };
        _this.handleWorldEvent = function (event) {
            _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event);
            switch (event.type) {
                case 'unitMoved':
                    var beforeCoords = _this.hexCenter(event.from);
                    var afterCoords = _this.hexCenter(event.to);
                    // this.updateScene()
                    _this.unitImage.setFlipX(afterCoords.x < beforeCoords.x);
                    _this.tweens.add({
                        targets: _this.unitImage,
                        x: { from: beforeCoords.x, to: afterCoords.x },
                        y: { from: beforeCoords.y, to: afterCoords.y },
                        duration: 500,
                        ease: 'Cubic',
                    });
                    break;
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
            }
        };
        _this.handleStartMove = function () {
            if (_this.selectedHex && _this.selectedHex.equals(_this.worldState.unitLocation)) {
                _this.mode = { type: 'moveUnit' };
                _this.updateScene();
            }
        };
        _this.handleMoveUnit = function (hex) {
            if (hex.equals(_this.worldState.unitLocation)) {
                // abort if you click yourself
                _this.mode = { type: 'selectHex' };
                _this.updateScene();
            }
            else if (hex.isAdjacentTo(_this.worldState.unitLocation) && world_state_1.isInBounds(hex, _this.worldState.map)) {
                var action = { type: 'moveUnit', to: hex };
                _this.server.handleAction(action);
                _this.selectedHex = undefined;
                _this.mode = { type: 'selectHex' };
                _this.updateScene();
            }
        };
        _this.handleSelectHex = function (hex) {
            if (!world_state_1.isInBounds(hex, _this.worldState.map)) {
                // If click is out of bounds, deselect any selected hex
                if (_this.selectedHex) {
                    _this.selectedHex = undefined;
                    _this.updateScene();
                }
            }
            else if (_this.selectedHex && _this.selectedHex.equals(hex)) {
                // if selected hex is clicked, toggle selection off
                _this.selectedHex = undefined;
                _this.updateScene();
            }
            else {
                _this.selectedHex = hex;
                _this.updateScene();
            }
        };
        _this.getHexPolygon = function (hex) {
            var polygon = _this.hexPolygons.get(hex.toString());
            if (!polygon) {
                throw 'No polygon found for ' + hex;
            }
            else {
                return polygon;
            }
        };
        _this.hexCenter = function (hex) { return point_1.addPoints(point_1.multiplyPoint(hex_geometry_1.centerPoint(hex), hexSize), drawingOffset); };
        _this.server.addListener(_this.handleWorldEvent);
        return _this;
    }
    GameScene.prototype.addPolygon = function (center, size, colour) {
        var vertices = Array.from(hexCorners(point(0, 0), size));
        return this.add.polygon(center.x, center.y, vertices, colour).setOrigin(0, 0).setStrokeStyle(3, 0x000000);
    };
    GameScene.prototype.create = function () {
        var e_3, _a;
        var _this = this;
        var _b = this.worldState, map = _b.map, unitLocation = _b.unitLocation;
        try {
            for (var _c = __values(world_state_1.getMapHexes(this.worldState.map)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var hex = _d.value;
                var polygonCenter = this.hexCenter(hex);
                var polygon = this.addPolygon(polygonCenter, hexSize, defaultTileColour);
                this.hexPolygons.set(hex.toString(), polygon);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.selectionText = this.add.text(50, map.height * hexSize * 3 / 2 + 50, '');
        var unitPoint = this.hexCenter(unitLocation);
        this.unitImage = this.add.image(unitPoint.x, unitPoint.y, 'llama').setScale(0.9);
        this.actionText = this.add.text(50, map.height * hexSize * 3 / 2 + 75, '', { fill: actionTextColour }).setInteractive()
            .on('pointerdown', function () { return _this.handleActionTextClick(); })
            .on('pointerover', function () { return _this.actionText.setFill(highlighedActonTextColour); })
            .on('pointerout', function () { return _this.actionText.setFill(actionTextColour); });
        this.input.mouse.disableContextMenu();
        this.input.keyboard.on('keydown-ESC', function () {
            _this.handleAbortMove();
        });
        this.input.keyboard.on('keydown-M', function () {
            switch (_this.mode.type) {
                case 'selectHex':
                    _this.handleStartMove();
                    break;
                default:
            }
        });
        this.input.on('pointerdown', function (pointer) {
            var pressedPoint = { x: pointer.x, y: pointer.y };
            var hex = hex_geometry_1.fromPoint(point_1.multiplyPoint(point_1.subtractPoints(pressedPoint, drawingOffset), 1 / hexSize));
            switch (_this.mode.type) {
                case 'selectHex':
                    _this.handleSelectHex(hex);
                    break;
                case 'moveUnit':
                    _this.handleMoveUnit(hex);
                    break;
            }
        });
    };
    GameScene.prototype.handleAbortMove = function () {
        if (this.mode.type == 'moveUnit') {
            this.mode = { type: 'selectHex' };
            this.updateScene();
        }
    };
    GameScene.prototype.update = function () {
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

Object.defineProperty(exports, "__esModule", { value: true });
exports.fromPoint = exports.centerPoint = void 0;
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


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
exports.default = [boot_scene_1.BootScene, main_menu_scene_1.MainMenuScene, game_scene_1.GameScene];


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
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        this.add
            .text(100, 50, 'This is a sample main menu. Click the "Start" button below to run your game.', {
            fill: '#FFFFFF',
        })
            .setFontSize(24);
        new menu_button_1.MenuButton(this, 100, 150, 'Start Game', function () {
            _this.scene.start('Game');
        });
        new menu_button_1.MenuButton(this, 100, 250, 'Settings', function () { return console.log('settings button clicked'); });
        new menu_button_1.MenuButton(this, 100, 350, 'Help', function () { return console.log('help button clicked'); });
    };
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
exports.subtractPoints = exports.addPoints = exports.multiplyPoint = void 0;
exports.multiplyPoint = function (point, n) { return ({ x: point.x * n, y: point.y * n }); };
exports.addPoints = function (point1, point2) { return ({ x: point1.x + point2.x, y: point1.y + point2.y }); };
exports.subtractPoints = function (point1, point2) { return ({ x: point1.x - point2.x, y: point1.y - point2.y }); };


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
        this.handleAction = function (action) {
            switch (action.type) {
                case 'moveUnit':
                    var from = _this.worldState.unitLocation;
                    var to = action.to;
                    if (!from.isAdjacentTo(to)) {
                        throw "Invalid unit movement between non-adjacent hexes " + from + " to " + to;
                    }
                    if (!world_state_1.isInBounds(to, _this.worldState.map)) {
                        throw "Invalid unit movement to out-of-bounds hex " + to;
                    }
                    var event_1 = { type: 'unitMoved', from: from, to: to };
                    _this.worldState = world_event_evaluator_1.applyEvent(_this.worldState, event_1);
                    _this.notifyListeners(event_1);
            }
        };
    }
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

/***/ "./src/world/world-event-evaluator.ts":
/*!********************************************!*\
  !*** ./src/world/world-event-evaluator.ts ***!
  \********************************************/
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
exports.applyEvent = void 0;
var world_state_1 = __webpack_require__(/*! ./world-state */ "./src/world/world-state.ts");
exports.applyEvent = function (state, event) {
    switch (event.type) {
        case 'unitMoved':
            if (!event.from.isAdjacentTo(event.to)) {
                throw "Invalid unit movement between non-adjacent hexes " + event.from + " to " + event.to;
            }
            if (!world_state_1.isInBounds(event.to, state.map)) {
                throw "Invalid unit movement to out-of-bounds hex " + event.to;
            }
            return __assign(__assign({}, state), { unitLocation: event.to });
    }
};


/***/ }),

/***/ "./src/world/world-state.ts":
/*!**********************************!*\
  !*** ./src/world/world-state.ts ***!
  \**********************************/
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
exports.getMapHexes = exports.isInBounds = exports.INITIAL_WORLD_STATE = void 0;
var hex_1 = __webpack_require__(/*! ./hex */ "./src/world/hex.ts");
exports.INITIAL_WORLD_STATE = {
    map: { width: 10, height: 6 }, unitLocation: new hex_1.Hex(1, 1),
};
exports.isInBounds = function (hex, map) {
    var q = hex.x + Math.floor(hex.y / 2);
    return 0 <= q && q < map.width && 0 <= hex.y && hex.y < map.height;
};
function getMapHexes(map) {
    var r, c, x, hex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                r = 0;
                _a.label = 1;
            case 1:
                if (!(r < map.height)) return [3 /*break*/, 6];
                c = 0;
                _a.label = 2;
            case 2:
                if (!(c < map.width)) return [3 /*break*/, 5];
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
}
exports.getMapHexes = getMapHexes;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9ib290LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZS1zY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2hleC1nZW9tZXRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWFpbi1tZW51LXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvcG9pbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VpL21lbnUtYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9oZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3dvcmxkLWV2ZW50LWV2YWx1YXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvd29ybGQtc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNB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QixHQUFHLEdBQUcsSUFBSSxTQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekIscUJBQU0sR0FBRzs7Z0JBQVQsU0FBUzs7O2dCQUhvQixDQUFDLEVBQUU7OztnQkFESixDQUFDLEVBQUU7Ozs7O0NBT3BDO0FBUkQsa0NBUUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5cbmV4cG9ydCBjb25zdCBnZXRHYW1lV2lkdGggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSk6IG51bWJlciA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcbn07XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xuXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ1NhbXBsZScsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG5cbiAgc2NhbGU6IHtcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gIH0sXG5cbiAgc2NlbmU6IFNjZW5lcyxcblxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXG4gICAgYXJjYWRlOiB7XG4gICAgICBkZWJ1ZzogdHJ1ZSxcbiAgICB9LFxuICB9LFxuXG4gIHBhcmVudDogJ2dhbWUnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcbn07XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lLnNjYWxlLnJlZnJlc2goKTtcbn0pO1xuIiwiaW1wb3J0IHsgZ2V0R2FtZVdpZHRoLCBnZXRHYW1lSGVpZ2h0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnQm9vdCcsXG59O1xuXG4vKipcbiAqIFRoZSBpbml0aWFsIHNjZW5lIHRoYXQgbG9hZHMgYWxsIG5lY2Vzc2FyeSBhc3NldHMgdG8gdGhlIGdhbWUgYW5kIGRpc3BsYXlzIGEgbG9hZGluZyBiYXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBCb290U2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgcHJlbG9hZCgpOiB2b2lkIHtcbiAgICBjb25zdCBoYWxmV2lkdGggPSBnZXRHYW1lV2lkdGgodGhpcykgKiAwLjU7XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IGdldEdhbWVIZWlnaHQodGhpcykgKiAwLjU7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckhlaWdodCA9IDEwMDtcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICBoYWxmV2lkdGgsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgcHJvZ3Jlc3NCYXJXaWR0aCxcbiAgICAgIHByb2dyZXNzQmFySGVpZ2h0LFxuICAgICAgMHgwMDAwMDAsXG4gICAgKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgIGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsXG4gICAgICBoYWxmSGVpZ2h0LFxuICAgICAgMTAsXG4gICAgICBwcm9ncmVzc0JhckhlaWdodCAtIDIwLFxuICAgICAgMHg4ODg4ODgsXG4gICAgKTtcblxuICAgIGNvbnN0IGxvYWRpbmdUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSA3NSwgaGFsZkhlaWdodCAtIDEwMCwgJ0xvYWRpbmcuLi4nKS5zZXRGb250U2l6ZSgyNCk7XG4gICAgY29uc3QgcGVyY2VudFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0LCAnMCUnKS5zZXRGb250U2l6ZSgyNCk7XG4gICAgY29uc3QgYXNzZXRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCArIDEwMCwgJycpLnNldEZvbnRTaXplKDI0KTtcblxuICAgIHRoaXMubG9hZC5vbigncHJvZ3Jlc3MnLCAodmFsdWUpID0+IHtcbiAgICAgIHByb2dyZXNzQmFyLndpZHRoID0gKHByb2dyZXNzQmFyV2lkdGggLSAzMCkgKiB2YWx1ZTtcblxuICAgICAgY29uc3QgcGVyY2VudCA9IHZhbHVlICogMTAwO1xuICAgICAgcGVyY2VudFRleHQuc2V0VGV4dChgJHtwZXJjZW50fSVgKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZC5vbignZmlsZXByb2dyZXNzJywgKGZpbGUpID0+IHtcbiAgICAgIGFzc2V0VGV4dC5zZXRUZXh0KGZpbGUua2V5KTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZC5vbignY29tcGxldGUnLCAoKSA9PiB7XG4gICAgICBsb2FkaW5nVGV4dC5kZXN0cm95KCk7XG4gICAgICBwZXJjZW50VGV4dC5kZXN0cm95KCk7XG4gICAgICBhc3NldFRleHQuZGVzdHJveSgpO1xuICAgICAgcHJvZ3Jlc3NCYXIuZGVzdHJveSgpO1xuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuZGVzdHJveSgpO1xuXG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgYnkgdGhlIGdhbWUgKHNwcml0ZXMsIGltYWdlcywgYW5pbWF0aW9ucywgdGlsZXMsIG11c2ljLCBldGMpXG4gICAqIHNob3VsZCBiZSBhZGRlZCB0byB0aGlzIG1ldGhvZC4gT25jZSBsb2FkZWQgaW4sIHRoZSBsb2FkZXIgd2lsbCBrZWVwIHRyYWNrIG9mIHRoZW0sIGluZGVwZWRlbnQgb2Ygd2hpY2ggc2NlbmVcbiAgICogaXMgY3VycmVudGx5IGFjdGl2ZSwgc28gdGhleSBjYW4gYmUgYWNjZXNzZWQgYW55d2hlcmUuXG4gICAqL1xuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG5cbiAgICAvLyBTb3VyY2U6IGh0dHBzOi8vb3BlbmdhbWVhcnQub3JnL2NvbnRlbnQvaGV4LXRpbGVzZXQtcGFja1xuICAgIHRoaXMubG9hZC5pbWFnZSgnbGxhbWEnLCAnYXNzZXRzL3Nwcml0ZXMvbGxhbWFfMTQucG5nJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGFkZFBvaW50cywgbXVsdGlwbHlQb2ludCwgUG9pbnQsIHN1YnRyYWN0UG9pbnRzIH0gZnJvbSAnLi9wb2ludCdcbmltcG9ydCB7IEhleCB9IGZyb20gJy4uL3dvcmxkL2hleCdcbmltcG9ydCB7IGNlbnRlclBvaW50LCBmcm9tUG9pbnQgfSBmcm9tICcuL2hleC1nZW9tZXRyeSdcbmltcG9ydCB7IGdldE1hcEhleGVzLCBJTklUSUFMX1dPUkxEX1NUQVRFLCBpc0luQm91bmRzLCBXb3JsZFN0YXRlIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtc3RhdGUnXG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuLi9zZXJ2ZXIvc2VydmVyJ1xuaW1wb3J0IHsgV29ybGRFdmVudCB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgUG9seWdvbiA9IFBoYXNlci5HYW1lT2JqZWN0cy5Qb2x5Z29uXG5pbXBvcnQgeyBXb3JsZEFjdGlvbiB9IGZyb20gJy4uL3dvcmxkL3dvcmxkLWFjdGlvbnMnXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnR2FtZScsXG59XG5cbmludGVyZmFjZSBNb3ZlVW5pdE1vZGUge1xuICB0eXBlOiAnbW92ZVVuaXQnXG59XG5cbmludGVyZmFjZSBTZWxlY3RIZXhNb2RlIHtcbiAgdHlwZTogJ3NlbGVjdEhleCdcbn1cblxudHlwZSBNb2RlID0gTW92ZVVuaXRNb2RlIHwgU2VsZWN0SGV4TW9kZVxuXG5cbmNvbnN0IHBvaW50ID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9pbnQgPT4gKHsgeCwgeSB9KVxuXG5jb25zdCBoZXhBbmdsZSA9IE1hdGguUEkgLyAzXG5jb25zdCBoZXhPZmZzZXQgPSBNYXRoLlBJIC8gNlxuXG5jb25zdCBoZXhDb3JuZXIgPSAoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyLCBpOiBudW1iZXIpOiBQb2ludCA9PiB7XG4gIGNvbnN0IGFuZ2xlUmFkaWFucyA9IGhleEFuZ2xlICogaSAtIGhleE9mZnNldFxuICBjb25zdCB4ID0gY2VudGVyLnggKyBzaXplICogTWF0aC5jb3MoYW5nbGVSYWRpYW5zKVxuICBjb25zdCB5ID0gY2VudGVyLnkgKyBzaXplICogTWF0aC5zaW4oYW5nbGVSYWRpYW5zKVxuICByZXR1cm4geyB4LCB5IH1cbn1cblxuZnVuY3Rpb24qIGhleENvcm5lcnMoY2VudGVyOiBQb2ludCwgc2l6ZTogbnVtYmVyKTogSXRlcmFibGVJdGVyYXRvcjxQb2ludD4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHlpZWxkIGhleENvcm5lcihjZW50ZXIsIHNpemUsIGkpXG4gIH1cbn1cblxuY29uc3Qgc2VsZWN0ZWRUaWxlQ29sb3VyID0gMHhmZmZmNDRcbmNvbnN0IGRlZmF1bHRUaWxlQ29sb3VyID0gMHhhMWZkNWVcbmNvbnN0IG1vdmFibGVUaWxlQ29sb3VyID0gMHhkMWZmOGVcbmNvbnN0IGFjdGlvblRleHRDb2xvdXIgPSAnI2NjY2MwMCdcbmNvbnN0IGhpZ2hsaWdoZWRBY3RvblRleHRDb2xvdXIgPSAnI2ZmZmYwMCdcbmNvbnN0IGhleFNpemUgPSA0OFxuY29uc3QgZHJhd2luZ09mZnNldCA9IHsgeDogNjAsIHk6IDYwIH1cblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgc2VydmVyOiBTZXJ2ZXIgPSBuZXcgU2VydmVyKClcblxuICBwcml2YXRlIHdvcmxkU3RhdGU6IFdvcmxkU3RhdGUgPSBJTklUSUFMX1dPUkxEX1NUQVRFXG5cbiAgcHJpdmF0ZSBtb2RlOiBNb2RlID0geyB0eXBlOiAnc2VsZWN0SGV4JyB9XG4gIHByaXZhdGUgc2VsZWN0ZWRIZXg/OiBIZXhcblxuICBwcml2YXRlIHNlbGVjdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gIHByaXZhdGUgYWN0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgcHJpdmF0ZSB1bml0SW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICBwcml2YXRlIGhleFBvbHlnb25zOiBNYXA8U3RyaW5nLCBQaGFzZXIuR2FtZU9iamVjdHMuUG9seWdvbj4gPSBuZXcgTWFwPFN0cmluZywgUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24+KClcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihzY2VuZUNvbmZpZylcbiAgICB0aGlzLnNlcnZlci5hZGRMaXN0ZW5lcih0aGlzLmhhbmRsZVdvcmxkRXZlbnQpXG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVNjZW5lID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGhleCBvZiBnZXRNYXBIZXhlcyh0aGlzLndvcmxkU3RhdGUubWFwKSkge1xuICAgICAgY29uc3QgcG9seWdvbiA9IHRoaXMuZ2V0SGV4UG9seWdvbihoZXgpXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEhleCAmJiB0aGlzLnNlbGVjdGVkSGV4LmVxdWFscyhoZXgpKSB7XG4gICAgICAgIHBvbHlnb24uc2V0RmlsbFN0eWxlKHNlbGVjdGVkVGlsZUNvbG91cilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvbHlnb24uc2V0RmlsbFN0eWxlKGRlZmF1bHRUaWxlQ29sb3VyKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy53b3JsZFN0YXRlLnVuaXRMb2NhdGlvbikge1xuICAgICAgY29uc3QgdW5pdFBvaW50ID0gdGhpcy5oZXhDZW50ZXIodGhpcy53b3JsZFN0YXRlLnVuaXRMb2NhdGlvbilcbiAgICAgIHRoaXMudW5pdEltYWdlLnNldFBvc2l0aW9uKHVuaXRQb2ludC54LCB1bml0UG9pbnQueSlcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLm1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRIZXggJiYgdGhpcy5zZWxlY3RlZEhleC5lcXVhbHModGhpcy53b3JsZFN0YXRlLnVuaXRMb2NhdGlvbikpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvblRleHQuc2V0VGV4dCgnV2FsdGVyIC0gTGxhbWEgd2FycmlvcicpXG4gICAgICAgICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJ1tNXW92ZScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQoJycpXG4gICAgICAgICAgdGhpcy5hY3Rpb25UZXh0LnNldFRleHQoJycpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25UZXh0LnNldFRleHQoJ1dhbHRlciAtIExsYW1hIHdhcnJpb3InKVxuICAgICAgICB0aGlzLmFjdGlvblRleHQuc2V0VGV4dCgnQ2xpY2sgdGlsZSB0byBtb3ZlIHRvIChvciBFU0MgdG8gY2FuY2VsKScpXG4gICAgICAgIGZvciAoY29uc3QgbmVpZ2hib3VyIG9mIHRoaXMuc2VsZWN0ZWRIZXghLm5laWdoYm91cnMoKSkge1xuICAgICAgICAgIGlmIChpc0luQm91bmRzKG5laWdoYm91ciwgdGhpcy53b3JsZFN0YXRlLm1hcCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmdldEhleFBvbHlnb24obmVpZ2hib3VyKVxuICAgICAgICAgICAgcG9seWdvbi5zZXRGaWxsU3R5bGUobW92YWJsZVRpbGVDb2xvdXIpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVXb3JsZEV2ZW50ID0gKGV2ZW50OiBXb3JsZEV2ZW50KSA9PiB7XG4gICAgdGhpcy53b3JsZFN0YXRlID0gYXBwbHlFdmVudCh0aGlzLndvcmxkU3RhdGUsIGV2ZW50KVxuICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgICAgY29uc3QgYmVmb3JlQ29vcmRzID0gdGhpcy5oZXhDZW50ZXIoZXZlbnQuZnJvbSlcbiAgICAgICAgY29uc3QgYWZ0ZXJDb29yZHMgPSB0aGlzLmhleENlbnRlcihldmVudC50bylcbiAgICAgICAgLy8gdGhpcy51cGRhdGVTY2VuZSgpXG4gICAgICAgIHRoaXMudW5pdEltYWdlLnNldEZsaXBYKGFmdGVyQ29vcmRzLnggPCBiZWZvcmVDb29yZHMueClcbiAgICAgICAgdGhpcy50d2VlbnMuYWRkKHtcbiAgICAgICAgICB0YXJnZXRzOiB0aGlzLnVuaXRJbWFnZSxcbiAgICAgICAgICB4OiB7IGZyb206IGJlZm9yZUNvb3Jkcy54LCB0bzogYWZ0ZXJDb29yZHMueCB9LFxuICAgICAgICAgIHk6IHsgZnJvbTogYmVmb3JlQ29vcmRzLnksIHRvOiBhZnRlckNvb3Jkcy55IH0sXG4gICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICBlYXNlOiAnQ3ViaWMnLFxuICAgICAgICB9KVxuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkUG9seWdvbihjZW50ZXI6IFBvaW50LCBzaXplOiBudW1iZXIsIGNvbG91cjogbnVtYmVyKTogUGhhc2VyLkdhbWVPYmplY3RzLlBvbHlnb24ge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gQXJyYXkuZnJvbShoZXhDb3JuZXJzKHBvaW50KDAsIDApLCBzaXplKSlcbiAgICByZXR1cm4gdGhpcy5hZGQucG9seWdvbihjZW50ZXIueCwgY2VudGVyLnksIHZlcnRpY2VzLCBjb2xvdXIpLnNldE9yaWdpbigwLCAwKS5zZXRTdHJva2VTdHlsZSgzLCAweDAwMDAwMClcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgeyBtYXAsIHVuaXRMb2NhdGlvbiB9ID0gdGhpcy53b3JsZFN0YXRlXG4gICAgZm9yIChsZXQgaGV4IG9mIGdldE1hcEhleGVzKHRoaXMud29ybGRTdGF0ZS5tYXApKSB7XG4gICAgICBjb25zdCBwb2x5Z29uQ2VudGVyID0gdGhpcy5oZXhDZW50ZXIoaGV4KVxuICAgICAgY29uc3QgcG9seWdvbiA9IHRoaXMuYWRkUG9seWdvbihwb2x5Z29uQ2VudGVyLCBoZXhTaXplLCBkZWZhdWx0VGlsZUNvbG91cilcbiAgICAgIHRoaXMuaGV4UG9seWdvbnMuc2V0KGhleC50b1N0cmluZygpLCBwb2x5Z29uKVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KDUwLCBtYXAuaGVpZ2h0ICogaGV4U2l6ZSAqIDMgLyAyICsgNTAsICcnKVxuICAgIGNvbnN0IHVuaXRQb2ludCA9IHRoaXMuaGV4Q2VudGVyKHVuaXRMb2NhdGlvbilcbiAgICB0aGlzLnVuaXRJbWFnZSA9IHRoaXMuYWRkLmltYWdlKHVuaXRQb2ludC54LCB1bml0UG9pbnQueSwgJ2xsYW1hJykuc2V0U2NhbGUoMC45KVxuXG4gICAgdGhpcy5hY3Rpb25UZXh0ID0gdGhpcy5hZGQudGV4dCg1MCwgbWFwLmhlaWdodCAqIGhleFNpemUgKiAzIC8gMiArIDc1LCAnJywgeyBmaWxsOiBhY3Rpb25UZXh0Q29sb3VyIH0pLnNldEludGVyYWN0aXZlKClcbiAgICAgIC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLmhhbmRsZUFjdGlvblRleHRDbGljaygpKVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHRoaXMuYWN0aW9uVGV4dC5zZXRGaWxsKGhpZ2hsaWdoZWRBY3RvblRleHRDb2xvdXIpKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgKCkgPT4gdGhpcy5hY3Rpb25UZXh0LnNldEZpbGwoYWN0aW9uVGV4dENvbG91cikpXG5cbiAgICB0aGlzLmlucHV0Lm1vdXNlLmRpc2FibGVDb250ZXh0TWVudSgpXG5cbiAgICB0aGlzLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duLUVTQycsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQWJvcnRNb3ZlKClcbiAgICB9KVxuICAgIHRoaXMuaW5wdXQua2V5Ym9hcmQub24oJ2tleWRvd24tTScsICgpID0+IHtcbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVN0YXJ0TW92ZSgpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAocG9pbnRlcikgPT4ge1xuICAgICAgY29uc3QgcHJlc3NlZFBvaW50ID0geyB4OiBwb2ludGVyLngsIHk6IHBvaW50ZXIueSB9XG4gICAgICBjb25zdCBoZXggPSBmcm9tUG9pbnQobXVsdGlwbHlQb2ludChzdWJ0cmFjdFBvaW50cyhwcmVzc2VkUG9pbnQsIGRyYXdpbmdPZmZzZXQpLCAxIC8gaGV4U2l6ZSkpXG5cbiAgICAgIHN3aXRjaCAodGhpcy5tb2RlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEhleChoZXgpXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICAgIHRoaXMuaGFuZGxlTW92ZVVuaXQoaGV4KVxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBYm9ydE1vdmUoKSB7XG4gICAgaWYgKHRoaXMubW9kZS50eXBlID09ICdtb3ZlVW5pdCcpIHtcbiAgICAgIHRoaXMubW9kZSA9IHsgdHlwZTogJ3NlbGVjdEhleCcgfVxuICAgICAgdGhpcy51cGRhdGVTY2VuZSgpXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVBY3Rpb25UZXh0Q2xpY2sgPSAoKSA9PiB7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUudHlwZSkge1xuICAgICAgY2FzZSAnc2VsZWN0SGV4JzpcbiAgICAgICAgdGhpcy5oYW5kbGVTdGFydE1vdmUoKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbW92ZVVuaXQnOlxuICAgICAgICB0aGlzLmhhbmRsZUFib3J0TW92ZSgpXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTdGFydE1vdmUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRIZXggJiYgdGhpcy5zZWxlY3RlZEhleC5lcXVhbHModGhpcy53b3JsZFN0YXRlLnVuaXRMb2NhdGlvbikpIHtcbiAgICAgIHRoaXMubW9kZSA9IHsgdHlwZTogJ21vdmVVbml0JyB9XG4gICAgICB0aGlzLnVwZGF0ZVNjZW5lKClcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU1vdmVVbml0ID0gKGhleDogSGV4KSA9PiB7XG4gICAgaWYgKGhleC5lcXVhbHModGhpcy53b3JsZFN0YXRlLnVuaXRMb2NhdGlvbikpIHtcbiAgICAgIC8vIGFib3J0IGlmIHlvdSBjbGljayB5b3Vyc2VsZlxuICAgICAgdGhpcy5tb2RlID0geyB0eXBlOiAnc2VsZWN0SGV4JyB9XG4gICAgICB0aGlzLnVwZGF0ZVNjZW5lKClcbiAgICB9IGVsc2UgaWYgKGhleC5pc0FkamFjZW50VG8odGhpcy53b3JsZFN0YXRlLnVuaXRMb2NhdGlvbikgJiYgaXNJbkJvdW5kcyhoZXgsIHRoaXMud29ybGRTdGF0ZS5tYXApKSB7XG4gICAgICBjb25zdCBhY3Rpb246IFdvcmxkQWN0aW9uID0geyB0eXBlOiAnbW92ZVVuaXQnLCB0bzogaGV4IH1cbiAgICAgIHRoaXMuc2VydmVyLmhhbmRsZUFjdGlvbihhY3Rpb24pXG4gICAgICB0aGlzLnNlbGVjdGVkSGV4ID0gdW5kZWZpbmVkXG4gICAgICB0aGlzLm1vZGUgPSB7IHR5cGU6ICdzZWxlY3RIZXgnIH1cbiAgICAgIHRoaXMudXBkYXRlU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VsZWN0SGV4ID0gKGhleDogSGV4KSA9PiB7XG4gICAgaWYgKCFpc0luQm91bmRzKGhleCwgdGhpcy53b3JsZFN0YXRlLm1hcCkpIHtcbiAgICAgIC8vIElmIGNsaWNrIGlzIG91dCBvZiBib3VuZHMsIGRlc2VsZWN0IGFueSBzZWxlY3RlZCBoZXhcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSGV4KSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIZXggPSB1bmRlZmluZWRcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZSgpXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSGV4ICYmIHRoaXMuc2VsZWN0ZWRIZXguZXF1YWxzKGhleCkpIHtcbiAgICAgIC8vIGlmIHNlbGVjdGVkIGhleCBpcyBjbGlja2VkLCB0b2dnbGUgc2VsZWN0aW9uIG9mZlxuICAgICAgdGhpcy5zZWxlY3RlZEhleCA9IHVuZGVmaW5lZFxuICAgICAgdGhpcy51cGRhdGVTY2VuZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRIZXggPSBoZXhcbiAgICAgIHRoaXMudXBkYXRlU2NlbmUoKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGV4UG9seWdvbiA9IChoZXg6IEhleCk6IFBvbHlnb24gPT4ge1xuICAgIGNvbnN0IHBvbHlnb24gPSB0aGlzLmhleFBvbHlnb25zLmdldChoZXgudG9TdHJpbmcoKSlcbiAgICBpZiAoIXBvbHlnb24pIHtcbiAgICAgIHRocm93ICdObyBwb2x5Z29uIGZvdW5kIGZvciAnICsgaGV4XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBwb2x5Z29uXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoZXhDZW50ZXIgPSAoaGV4OiBIZXgpID0+IGFkZFBvaW50cyhtdWx0aXBseVBvaW50KGNlbnRlclBvaW50KGhleCksIGhleFNpemUpLCBkcmF3aW5nT2Zmc2V0KVxuXG4gIHB1YmxpYyB1cGRhdGUoKTogdm9pZCB7XG5cbiAgfVxufVxuIiwiaW1wb3J0IHsgSGV4IH0gZnJvbSAnLi4vd29ybGQvaGV4J1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuL3BvaW50J1xuXG5leHBvcnQgY29uc3QgY2VudGVyUG9pbnQgPSAoaGV4OiBIZXgpOiBQb2ludCA9PlxuICAoe1xuICAgIHg6IGhleC54ICogTWF0aC5zcXJ0KDMpICsgaGV4LnkgKiBNYXRoLnNxcnQoMykgLyAyLFxuICAgIHk6IGhleC55ICogMyAvIDIsXG4gIH0pXG5cbmV4cG9ydCBjb25zdCBmcm9tUG9pbnQgPSAocG9pbnQ6IFBvaW50KTogSGV4ID0+IHtcbiAgY29uc3QgeCA9IHBvaW50LnggKiBNYXRoLnNxcnQoMykgLyAzIC0gcG9pbnQueSAvIDNcbiAgY29uc3QgeSA9IDIgKiBwb2ludC55IC8gM1xuICByZXR1cm4gcm91bmQobmV3IEhleCh4LCB5KSk7XG59XG5cbmNvbnN0IHJvdW5kID0gKGhleDogSGV4KTogSGV4ID0+IHtcbiAgY29uc3QgcnggPSBNYXRoLnJvdW5kKGhleC54KVxuICBjb25zdCByeSA9IE1hdGgucm91bmQoaGV4LnkpXG4gIGNvbnN0IHJ6ID0gTWF0aC5yb3VuZChoZXgueilcblxuICBjb25zdCB4RGlmZiA9IE1hdGguYWJzKHJ4IC0gaGV4LngpXG4gIGNvbnN0IHlEaWZmID0gTWF0aC5hYnMocnkgLSBoZXgueSlcbiAgY29uc3QgekRpZmYgPSBNYXRoLmFicyhyeiAtIGhleC55KVxuXG4gIGlmICh4RGlmZiA+IHlEaWZmICYmIHhEaWZmID4gekRpZmYpXG4gICAgcmV0dXJuIG5ldyBIZXgoLXJ5IC0gcnosIHJ5KVxuICBlbHNlIGlmICh5RGlmZiA+IHpEaWZmKVxuICAgIHJldHVybiBuZXcgSGV4KHJ4LCAtcnggLSByeilcbiAgZWxzZVxuICAgIHJldHVybiBuZXcgSGV4KHJ4LCByeSlcbn1cbiIsImltcG9ydCB7IE1haW5NZW51U2NlbmUgfSBmcm9tICcuL21haW4tbWVudS1zY2VuZSc7XG5pbXBvcnQgeyBCb290U2NlbmUgfSBmcm9tICcuL2Jvb3Qtc2NlbmUnO1xuaW1wb3J0IHsgR2FtZVNjZW5lIH0gZnJvbSAnLi9nYW1lLXNjZW5lJztcblxuZXhwb3J0IGRlZmF1bHQgW0Jvb3RTY2VuZSwgTWFpbk1lbnVTY2VuZSwgR2FtZVNjZW5lXTtcbiIsImltcG9ydCB7IE1lbnVCdXR0b24gfSBmcm9tICcuLi91aS9tZW51LWJ1dHRvbic7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnTWFpbk1lbnUnLFxufTtcblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IHN0YXJ0cywgc2hvd3MgdGhlIHNwbGFzaCBzY3JlZW5zLCBhbmQgbG9hZHMgdGhlIG5lY2Vzc2FyeSBhc3NldHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFxuICAgICAgLnRleHQoMTAwLCA1MCwgJ1RoaXMgaXMgYSBzYW1wbGUgbWFpbiBtZW51LiBDbGljayB0aGUgXCJTdGFydFwiIGJ1dHRvbiBiZWxvdyB0byBydW4geW91ciBnYW1lLicsIHtcbiAgICAgICAgZmlsbDogJyNGRkZGRkYnLFxuICAgICAgfSlcbiAgICAgIC5zZXRGb250U2l6ZSgyNCk7XG5cbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDE1MCwgJ1N0YXJ0IEdhbWUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJyk7XG4gICAgfSk7XG5cbiAgICBuZXcgTWVudUJ1dHRvbih0aGlzLCAxMDAsIDI1MCwgJ1NldHRpbmdzJywgKCkgPT4gY29uc29sZS5sb2coJ3NldHRpbmdzIGJ1dHRvbiBjbGlja2VkJykpO1xuXG4gICAgbmV3IE1lbnVCdXR0b24odGhpcywgMTAwLCAzNTAsICdIZWxwJywgKCkgPT4gY29uc29sZS5sb2coJ2hlbHAgYnV0dG9uIGNsaWNrZWQnKSk7XG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICByZWFkb25seSB4OiBudW1iZXJcbiAgcmVhZG9ubHkgeTogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBtdWx0aXBseVBvaW50ID0gKHBvaW50OiBQb2ludCwgbjogbnVtYmVyKTogUG9pbnQgPT4gKHsgeDogcG9pbnQueCAqIG4sIHk6IHBvaW50LnkgKiBuIH0pXG5leHBvcnQgY29uc3QgYWRkUG9pbnRzID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpOiBQb2ludCA9PiAoeyB4OiBwb2ludDEueCArIHBvaW50Mi54LCB5OiBwb2ludDEueSArIHBvaW50Mi55IH0pXG5leHBvcnQgY29uc3Qgc3VidHJhY3RQb2ludHMgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCk6IFBvaW50ID0+ICh7IHg6IHBvaW50MS54IC0gcG9pbnQyLngsIHk6IHBvaW50MS55IC0gcG9pbnQyLnkgfSlcbiIsImltcG9ydCB7IElOSVRJQUxfV09STERfU1RBVEUsIGlzSW5Cb3VuZHMsIFdvcmxkU3RhdGUgfSBmcm9tICcuLi93b3JsZC93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkQWN0aW9uIH0gZnJvbSAnLi4vd29ybGQvd29ybGQtYWN0aW9ucydcbmltcG9ydCB7IGFwcGx5RXZlbnQgfSBmcm9tICcuLi93b3JsZC93b3JsZC1ldmVudC1ldmFsdWF0b3InXG5pbXBvcnQgeyBVbml0TW92ZWRXb3JsZEV2ZW50LCBXb3JsZEV2ZW50IH0gZnJvbSAnLi4vd29ybGQvd29ybGQtZXZlbnRzJ1xuXG5leHBvcnQgdHlwZSBXb3JsZEV2ZW50TGlzdGVuZXIgPSAoZXZlbnQ6IFdvcmxkRXZlbnQpID0+IHZvaWRcblxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIHByaXZhdGUgd29ybGRTdGF0ZTogV29ybGRTdGF0ZSA9IElOSVRJQUxfV09STERfU1RBVEVcbiAgcHJpdmF0ZSBsaXN0ZW5lcnM6IFdvcmxkRXZlbnRMaXN0ZW5lcltdID0gW11cblxuICBwdWJsaWMgYWRkTGlzdGVuZXIgPSAobGlzdGVuZXI6IFdvcmxkRXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUxpc3RlbmVycyA9IChldmVudDogV29ybGRFdmVudCk6IHZvaWQgPT4ge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgIGxpc3RlbmVyKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVBY3Rpb24gPSAoYWN0aW9uOiBXb3JsZEFjdGlvbik6IHZvaWQgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgJ21vdmVVbml0JzpcbiAgICAgICAgY29uc3QgZnJvbSA9IHRoaXMud29ybGRTdGF0ZS51bml0TG9jYXRpb25cbiAgICAgICAgY29uc3QgdG8gPSBhY3Rpb24udG9cbiAgICAgICAgaWYgKCFmcm9tLmlzQWRqYWNlbnRUbyh0bykpIHtcbiAgICAgICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IGJldHdlZW4gbm9uLWFkamFjZW50IGhleGVzICR7ZnJvbX0gdG8gJHt0b31gXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0luQm91bmRzKHRvLCB0aGlzLndvcmxkU3RhdGUubWFwKSkge1xuICAgICAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgdG8gb3V0LW9mLWJvdW5kcyBoZXggJHt0b31gXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnQ6IFVuaXRNb3ZlZFdvcmxkRXZlbnQgPSB7IHR5cGU6ICd1bml0TW92ZWQnLCBmcm9tLCB0byB9XG4gICAgICAgIHRoaXMud29ybGRTdGF0ZSA9IGFwcGx5RXZlbnQodGhpcy53b3JsZFN0YXRlLCBldmVudClcbiAgICAgICAgdGhpcy5ub3RpZnlMaXN0ZW5lcnMoZXZlbnQpXG4gICAgfVxuICB9XG5cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuY29uc3QgcGFkZGluZyA9IDEwO1xuY29uc3QgbWluaW11bVdpZHRoID0gMjAwO1xuY29uc3QgbWluaW11bUhlaWdodCA9IDUwO1xuXG5leHBvcnQgY2xhc3MgTWVudUJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUge1xuICBwcml2YXRlIGxhYmVsOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcblxuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG4gICAgdGhpcy5zZXRPcmlnaW4oMCwgMCk7XG5cbiAgICB0aGlzLmxhYmVsID0gc2NlbmUuYWRkXG4gICAgICAudGV4dCh4ICsgcGFkZGluZywgeSArIHBhZGRpbmcsIHRleHQpXG4gICAgICAuc2V0Rm9udFNpemUoMTgpXG4gICAgICAuc2V0QWxpZ24oJ2NlbnRlcicpO1xuXG4gICAgY29uc3QgbGFiZWxXaWR0aCA9IHRoaXMubGFiZWwud2lkdGggKyBwYWRkaW5nO1xuICAgIGNvbnN0IGxhYmVsSGVpZ2h0ID0gdGhpcy5sYWJlbC5oZWlnaHQgKyBwYWRkaW5nO1xuXG4gICAgdGhpcy53aWR0aCA9IGxhYmVsV2lkdGggPj0gbWluaW11bVdpZHRoID8gbGFiZWxXaWR0aCA6IG1pbmltdW1XaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGxhYmVsSGVpZ2h0ID49IG1pbmltdW1IZWlnaHQgPyBsYWJlbEhlaWdodCA6IG1pbmltdW1IZWlnaHQ7XG5cbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSk7XG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSgpIHtcbiAgICB0aGlzLmxhYmVsLnNldENvbG9yKCcjMDAwMDAwJyk7XG4gICAgdGhpcy5zZXRGaWxsU3R5bGUoMHg4ODg4ODgpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25SZXN0U3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0ZGRkZGRicpO1xuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4ODg4ODg4KTtcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5sYWJlbC5zZXRDb2xvcignI0JCQkJCQicpO1xuICAgIHRoaXMuc2V0RmlsbFN0eWxlKDB4NDQ0NDQ0KTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSdcblxuZXhwb3J0IGNsYXNzIEhleCB7XG4gIHJlYWRvbmx5IHg6IG51bWJlclxuICByZWFkb25seSB5OiBudW1iZXJcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIHRoaXMueCA9IHhcbiAgICB0aGlzLnkgPSB5XG4gIH1cblxuICBnZXQgeigpOiBudW1iZXIge1xuICAgIHJldHVybiAtdGhpcy54IC0gdGhpcy55XG4gIH1cblxuICBwdWJsaWMgcGx1cyA9ICh0aGF0OiBIZXgpID0+IG5ldyBIZXgodGhpcy54ICsgdGhhdC54LCB0aGlzLnkgKyB0aGF0LnkpXG5cbiAgcHVibGljIG5laWdoYm91cnMgPSAoKTogSGV4W10gPT4gSGV4Lk5FSUdIQk9VUlMubWFwKHRoaXMucGx1cylcblxuICBwdWJsaWMgaXNBZGphY2VudFRvID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gUi5pbmNsdWRlcyh0aGF0LCB0aGlzLm5laWdoYm91cnMoKSlcblxuICBwcml2YXRlIHN0YXRpYyBORUlHSEJPVVJTOiBIZXhbXSA9IFtcbiAgICBuZXcgSGV4KDAsIDEpLFxuICAgIG5ldyBIZXgoMSwgMCksXG4gICAgbmV3IEhleCgxLCAtMSksXG4gICAgbmV3IEhleCgwLCAtMSksXG4gICAgbmV3IEhleCgtMSwgMCksXG4gICAgbmV3IEhleCgtMSwgMSksXG4gIF1cblxuICBwdWJsaWMgZXF1YWxzID0gKHRoYXQ6IEhleCk6IGJvb2xlYW4gPT4gdGhpcy54ID09IHRoYXQueCAmJiB0aGlzLnkgPT0gdGhhdC55XG5cbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiBgSGV4KCR7dGhpcy54fSwgJHt0aGlzLnl9KWBcbn1cbiIsImltcG9ydCB7IGlzSW5Cb3VuZHMsIFdvcmxkTWFwLCBXb3JsZFN0YXRlIH0gZnJvbSAnLi93b3JsZC1zdGF0ZSdcbmltcG9ydCB7IFdvcmxkRXZlbnQgfSBmcm9tICcuL3dvcmxkLWV2ZW50cydcbmltcG9ydCB7IEhleCB9IGZyb20gJy4vaGV4J1xuXG5leHBvcnQgY29uc3QgYXBwbHlFdmVudCA9IChzdGF0ZTogV29ybGRTdGF0ZSwgZXZlbnQ6IFdvcmxkRXZlbnQpOiBXb3JsZFN0YXRlID0+IHtcbiAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgY2FzZSAndW5pdE1vdmVkJzpcbiAgICAgIGlmICghZXZlbnQuZnJvbS5pc0FkamFjZW50VG8oZXZlbnQudG8pKSB7XG4gICAgICAgIHRocm93IGBJbnZhbGlkIHVuaXQgbW92ZW1lbnQgYmV0d2VlbiBub24tYWRqYWNlbnQgaGV4ZXMgJHtldmVudC5mcm9tfSB0byAke2V2ZW50LnRvfWBcbiAgICAgIH1cbiAgICAgIGlmICghaXNJbkJvdW5kcyhldmVudC50bywgc3RhdGUubWFwKSkge1xuICAgICAgICB0aHJvdyBgSW52YWxpZCB1bml0IG1vdmVtZW50IHRvIG91dC1vZi1ib3VuZHMgaGV4ICR7ZXZlbnQudG99YFxuICAgICAgfVxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVuaXRMb2NhdGlvbjogZXZlbnQudG8gfVxuICB9XG59XG4iLCJpbXBvcnQgeyBIZXggfSBmcm9tICcuL2hleCdcblxuZXhwb3J0IGludGVyZmFjZSBXb3JsZE1hcCB7XG4gIHdpZHRoOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfV09STERfU1RBVEU6IFdvcmxkU3RhdGUgPSB7XG4gIG1hcDogeyB3aWR0aDogMTAsIGhlaWdodDogNiB9LCB1bml0TG9jYXRpb246IG5ldyBIZXgoMSwgMSksXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV29ybGRTdGF0ZSB7XG4gIG1hcDogV29ybGRNYXBcbiAgdW5pdExvY2F0aW9uOiBIZXhcbn1cblxuZXhwb3J0IGNvbnN0IGlzSW5Cb3VuZHMgPSAoaGV4OiBIZXgsIG1hcDogV29ybGRNYXApOiBib29sZWFuID0+IHtcbiAgY29uc3QgcSA9IGhleC54ICsgTWF0aC5mbG9vcihoZXgueSAvIDIpXG4gIHJldHVybiAwIDw9IHEgJiYgcSA8IG1hcC53aWR0aCAmJiAwIDw9IGhleC55ICYmIGhleC55IDwgbWFwLmhlaWdodFxufVxuXG5leHBvcnQgZnVuY3Rpb24gKmdldE1hcEhleGVzKG1hcDogV29ybGRNYXApOiBJdGVyYWJsZUl0ZXJhdG9yPEhleD4ge1xuICBmb3IgKGxldCByID0gMDsgciA8IG1hcC5oZWlnaHQ7IHIrKykge1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgbWFwLndpZHRoOyBjKyspIHtcbiAgICAgIGNvbnN0IHggPSAtTWF0aC5mbG9vcihyIC8gMikgKyBjXG4gICAgICBjb25zdCBoZXggPSBuZXcgSGV4KHgsIHIpXG4gICAgICB5aWVsZCBoZXhcbiAgICB9XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9