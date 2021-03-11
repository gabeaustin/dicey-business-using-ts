"use strict";
var makeDieBtn = document.getElementById("make-die-btn");
var rerollBtn = document.getElementById("reroll-btn");
var sumBtn = document.getElementById("sum-btn");
var container = document.getElementById("container");
var diceContain = document.getElementById("dice-container");
var diceArr = [];
makeDieBtn === null || makeDieBtn === void 0 ? void 0 : makeDieBtn.addEventListener("click", function () {
    new Die();
});
var Die = /** @class */ (function () {
    function Die(value, die) {
        var _this = this;
        this.value = Math.floor(Math.random() * 6) + 1;
        this.die = document.createElement("div");
        this.die.className = "dice";
        this.roll();
        diceArr.push(this);
        diceContain === null || diceContain === void 0 ? void 0 : diceContain.appendChild(this.die);
        this.die.addEventListener("click", function () {
            _this.roll();
        });
        this.die.addEventListener("dblclick", function () {
            var dieIndex = diceArr.indexOf(_this);
            diceArr.splice(dieIndex, 1);
            _this.die.remove();
        });
    }
    Die.prototype.roll = function () {
        var randomNum = Math.floor(Math.random() * 6) + 1;
        this.value = randomNum;
        dieFace(this.value, this.die);
    };
    return Die;
}());
var dieFace = function (value, die) {
    var unicode = "";
    if (value === 1) {
        unicode = "&#9856";
        die.innerHTML = unicode;
    }
    else if (value === 2) {
        unicode = "&#9857";
        die.innerHTML = unicode;
    }
    else if (value === 3) {
        unicode = "&#9858";
        die.innerHTML = unicode;
    }
    else if (value === 4) {
        unicode = "&#9859";
        die.innerHTML = unicode;
    }
    else if (value === 5) {
        unicode = "&#9860";
        die.innerHTML = unicode;
    }
    else if (value === 6) {
        unicode = "&#9861";
        die.innerHTML = unicode;
    }
};
rerollBtn === null || rerollBtn === void 0 ? void 0 : rerollBtn.addEventListener("click", function () {
    diceArr.forEach(function (die) {
        die.roll();
    });
});
sumBtn === null || sumBtn === void 0 ? void 0 : sumBtn.addEventListener("click", function () {
    var sum = 0;
    diceArr.forEach(function (die) {
        sum = sum + die.value;
    });
    alert("The sum of the dice is " + sum);
});
