(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function moveDode(numTotal) {

	var num = Math.floor(Math.random() * numTotal) + 1;
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
			var aux = i - 1;

			if (player.name == "hillary") {
				$("#sec" + i).css("background-image", "url('img/hillary.png')");

				if (i == player.rivalPosition + 1) {
					$("#sec" + aux).css("background-image", "url('img/trump.png')");
				} else $("#sec" + aux).css("background-image", "url('img/tile.jpg')");
			} else {
				$("#sec" + i).css("background-image", "url('img/trump.png')");

				if (i == player.rivalPosition + 1) {
					$("#sec" + aux).css("background-image", "url('img/hillary.png')");
				} else $("#sec" + aux).css("background-image", "url('img/tile.jpg')");
			}
		}, 200 * i);

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
	function PLayer(name, winsCant, loseCant, currentPosition, isMyTurn, rivalPosition) {
		_classCallCheck(this, PLayer);

		this.winsCant = winsCant;
		this.loseCant = loseCant;
		this.name = name;
		this.currentPosition = currentPosition;
		this.isMyTurn = isMyTurn;
		this.rivalPosition = rivalPosition;
	}

	_createClass(PLayer, [{
		key: "addWinsCont",
		value: function addWinsCont() {
			this.winsCant += 1;
		}
	}, {
		key: "addloseCant",
		value: function addloseCant() {
			this.loseCant += 1;
		}
	}, {
		key: "playerCurrentPosition",
		value: function playerCurrentPosition(currentPosition) {

			this.currentPosition = currentPosition;
		}
	}, {
		key: "setRivalPosition",
		value: function setRivalPosition(rivalPosition) {

			this.rivalPosition = rivalPosition;
		}
	}, {
		key: "iPlayed",
		value: function iPlayed(isMyTurn) {
			this.isMyTurn = isMyTurn;
		}
	}, {
		key: "setPlayer",
		value: function setPlayer() {
			this.currentPosition = 0;
			this.rivalPosition = 0;
		}
	}, {
		key: "setIsmyTurn",
		value: function setIsmyTurn(val) {
			this.isMyTurn = val;
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

var player1 = new player.player("hillary", 0, 0, 0, true, 0);

var player2 = new player.player("trump", 0, 0, 0, false, 0);

var winNum = 0;
var loseNum = 0;

var whoPLay = null;

var numberRandom = 12;

$('#gameAgain').click(function () {
	player1.setPlayer();
	player1.setIsmyTurn(true);
	player2.setPlayer();
	player2.setIsmyTurn(false);

	for (var i = 1; i <= 12; i++) {

		$('#sec' + i).css('background-image', "url('img/tile.jpg')");
	}
	$('.modal').modal("hide");
	$('#dieContainer img, #dieContainer h4').on('click', playing);
	$('#dieContainer h4').html('');
});

function playing() {
	$('#dieContainer img').attr('src', 'img/Dodecahedron3.gif');
	$('#dieContainer h4').html("");

	if (player1.isMyTurn) {
		whoPLay = player1;
		player1.setRivalPosition(player2.currentPosition);
		player1.iPlayed(false);
		player2.iPlayed(false);
	} else {
		whoPLay = player2;
		player2.setRivalPosition(player1.currentPosition);
		player1.iPlayed(true);
		player2.iPlayed(false);
	}

	setTimeout(function () {
		die.die(numberRandom);
	}, 1900);

	setTimeout(function () {
		var starGame = play.play(parseInt($('#dieContainer h4').html()), whoPLay);

		whoPLay.playerCurrentPosition(starGame);

		if (whoPLay.name == "hillary") numberRandom = 12 - player2.currentPosition;else numberRandom = 12 - player1.currentPosition;

		setTimeout(function () {
			if (whoPLay.currentPosition == 12) {
				$('#dieContainer img, #dieContainer h4').off('click');

				if (whoPLay.name == "hillary") {
					whoPLay.addWinsCont();
					player2.addloseCant();
				} else {
					whoPLay.addWinsCont();
					player1.addloseCant();
				}
				$('#trumpStadistics').html('Trump has ' + player2.winsCant + ' games won and ' + player2.loseCant + ' games lost');
				$('#hillaryStadistics').html('Hillary has ' + player1.winsCant + ' games won and ' + player1.loseCant + ' games lost');
				$('.modal').modal("show");
			}
		}, 3000);
	}, 2000);

	// if(player1.currentPosition == 12){
	// 		alert("gane");
	// 	}
}

$('#dieContainer img, #dieContainer h4').on('click', playing);

},{"./_die.js":1,"./_play.js":2,"./_playerClass.js":3}]},{},[4]);
