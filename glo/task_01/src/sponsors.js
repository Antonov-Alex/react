"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.money = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;

var calcCash = function calcCash(own) {
  //let total = own;
  var total = 0;
  own.map(function (el) {
    return total += el;
  });
  return total;
};

var money = calcCash(sponsors.cash);
exports.money = money;