"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spons =
/*#__PURE__*/
function () {
  function Spons(own) {
    _classCallCheck(this, Spons);

    this.own = own;
  }

  _createClass(Spons, [{
    key: "calcCash",
    value: function calcCash() {
      var total = 0;
      this.own.map(function (el) {
        return total += el;
      });
      return total;
    }
  }]);

  return Spons;
}();

var _default = Spons;
exports.default = _default;