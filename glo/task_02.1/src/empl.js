"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Empl =
/*#__PURE__*/
function () {
  function Empl(arr) {
    _classCallCheck(this, Empl);

    this.arr = arr;
  }

  _createClass(Empl, [{
    key: "employersNames",
    value: function employersNames() {
      var filteredNames = this.arr.filter(function (el) {
        return el.length > 0 && el !== '';
      });
      filteredNames = filteredNames.map(function (item) {
        return item.toLowerCase();
      });
      return filteredNames;
    }
  }]);

  return Empl;
}();

var _default = Empl;
exports.default = _default;