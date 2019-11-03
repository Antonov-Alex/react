"use strict";

var _empl = _interopRequireDefault(require("./empl"));

var _sponsors = _interopRequireDefault(require("./sponsors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
var item = new _empl.default(employers);
var employersNames = item.employersNames();
var secondItem = new _sponsors.default(sponsors.cash);
var money = secondItem.calcCash();

var FinalClass =
/*#__PURE__*/
function () {
  function FinalClass(owner, money, emp, director) {
    _classCallCheck(this, FinalClass);

    this.money = money;
    this.owner = owner;
    this.emp = emp;
    this.director = director;
  }

  _createClass(FinalClass, [{
    key: "makeBusiness",
    value: function makeBusiness() {
      var sumSponsors = "".concat(sponsors.rus, " ").concat(sponsors.eu, ", unexpected sponsor");
      console.log("'We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.money, ". And our employers: \n        ").concat(this.emp));
      console.log("And we have a sponsors: ".concat(sumSponsors));
      console.log("Note. Be careful with  ".concat(sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return FinalClass;
}();

var result = new FinalClass('Sam', money, employersNames, 'Victor');
result.makeBusiness();