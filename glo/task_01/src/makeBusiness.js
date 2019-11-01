"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import {employers, employersNames} from './employers';
//import {sponsors, money, calcCash} from './sponsors';
var SomeClass =
/*#__PURE__*/
function () {
  function SomeClass(owner, cash, emp) {
    var director = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Victor';

    _classCallCheck(this, SomeClass);

    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.director = director;
  }

  _createClass(SomeClass, [{
    key: "makeBusiness",
    value: function makeBusiness() {
      var sumSponsors = "".concat(sponsors.rus, " ").concat(sponsors.eu, ", unexpected sponsor");
      console.log("'We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: \n        ").concat(this.emp));
      console.log("And we have a sponsors: ".concat(sumSponsors));
      console.log("Note. Be careful with  ".concat(sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return SomeClass;
}();

var _default = SomeClass; //makeBusiness('Sam',  money, employersNames,);

exports.default = _default;