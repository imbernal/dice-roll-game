(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function moveDode() {

	var num = Math.floor(Math.random() * 12) + 1;
	$('#dieContainer h4').html(num);
}
module.exports.die = moveDode;

},{}],2:[function(require,module,exports){
"use strict";

function play(currentNum, player) {

	var totalMovePositions = 0;
	var currentPosition = player.currentPosition;

	if (currentNum + currentPosition > 12) {
		totalMovePositions = 12;
	} else totalMovePositions = currentNum + currentPosition;

	var _loop = function _loop(i) {

		setTimeout(function () {
			var currentImage = $("#sec" + i).css("background-image");
			console.log($("#sec" + i).css("background-image"));
			if (currentImage.includes('hillary')) {

				$("#sec" + i).css("background-image", "url('img/hillary.png')");
			} else $("#sec" + i).css("background-image", "url('img/trump.png')");
		}, 200 * i);

		setTimeout(function () {
			$("#sec" + (i - 1)).css("background-image", "url('img/tile.jpg')");
		}, 230 * i);

		setTimeout(function () {
			$('#Statistics').click(function () {
				var a = "Trump Has " + player.winsCant + " game won and " + player.loseCant + " game lost.";
				$('#data').html(a);
			});
		}, 250 * i);
	};

	for (var i = currentPosition; i <= totalMovePositions; i++) {
		_loop(i);
	}

	return totalMovePositions;
}

module.exports.play = play;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PLayer = function () {
	function PLayer(name, winsCant, loseCant, currentPosition, isMyTurn) {
		_classCallCheck(this, PLayer);

		this.winsCant = winsCant;
		this.loseCant = loseCant;
		this.name = name;
		this.currentPosition = currentPosition;
		this.isMyTurn = isMyTurn;
	}

	_createClass(PLayer, [{
		key: "addWinsCont",
		value: function addWinsCont() {
			return this.winsCant++;
		}
	}, {
		key: "addloseCant",
		value: function addloseCant() {
			return this.loseCant++;
		}
	}, {
		key: "playerCurrentPosition",
		value: function playerCurrentPosition(currentPosition) {

			this.currentPosition = currentPosition;
		}
	}, {
		key: "iPlayed",
		value: function iPlayed(isMyTurn) {
			this.isMyTurn = isMyTurn;
		}
	}]);

	return PLayer;
}();

module.exports.player = PLayer;

},{}],4:[function(require,module,exports){
'use strict';

var die = require('./_die.js');

var player = require('./_playerClass.js');

var play = require('./_play.js');

var player1 = new player.player("hillary", 0, 0, 1, true);

var player2 = new player.player("trump", 0, 0, 1, false);

var whoPLay = null;

$('#dieContainer img, #dieContainer h4').click(function () {
	$('#dieContainer img').attr('src', 'img/Dodecahedron3.gif');
	$('#dieContainer h4').html("");

	if (player1.isMyTurn) {
		whoPLay = player1;
		player1.iPlayed(false);
		player2.iPlayed(false);
	} else {
		whoPLay = player2;
		player1.iPlayed(true);
		player2.iPlayed(false);
	}

	setTimeout(die.die, 1900);

	setTimeout(function () {
		var starGame = play.play(parseInt($('#dieContainer h4').html()), whoPLay);

		whoPLay.playerCurrentPosition(starGame);

		setTimeout(function () {
			if (whoPLay.currentPosition == 12) {
				if (whoPLay.name == "hillary") {
					whoPLay.addWinsCont();
					player2.addloseCant();
				} else {
					whoPLay.addWinsCont();
					player1.addloseCant();
				}
			}
		}, 3000);
	}, 2000);

	// if(player1.currentPosition == 12){
	// 		alert("gane");
	// 	}
});

},{"./_die.js":1,"./_play.js":2,"./_playerClass.js":3}]},{},[4]);
