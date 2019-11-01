"use strict";

var _employers = require("./employers");

var _sponsors = require("./sponsors");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SomeClass =
/*#__PURE__*/
function () {
  function SomeClass(owner, cash, emp, director) {
    _classCallCheck(this, SomeClass);

    this.owner = owner;
    this.cash = cash;
    this.emp = emp;
    this.director = director;
  }

  _createClass(SomeClass, [{
    key: "makeBusiness",
    value: function makeBusiness() {
      var sumSponsors = "".concat(_sponsors.sponsors.rus, " ").concat(_sponsors.sponsors.eu, ", unexpected sponsor");
      console.log("'We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: \n       ").concat(this.emp));
      console.log("And we have a sponsors: ".concat(sumSponsors));
      console.log("Note. Be careful with  ".concat(_sponsors.sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return SomeClass;
}();

var task = new SomeClass('Sam', _sponsors.money, _employers.employersNames, 'Victor');
task.makeBusiness();