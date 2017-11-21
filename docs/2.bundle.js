webpackJsonp([2],{

/***/ 288:
/* no static exports found */
/* all exports used */
/*!*****************************!*\
  !*** ./src/prefs/states.js ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.states = undefined;

var _Preferences = __webpack_require__(/*! ./Preferences */ 308);

var _Preferences2 = _interopRequireDefault(_Preferences);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This state allows the user to set their application preferences
 */
var prefsState = {
  parent: 'app',
  name: 'prefs',
  url: '/prefs',
  component: _Preferences2.default,
  // Mark this state as requiring authentication.  See ../global/requiresAuth.hook.js.
  data: { requiresAuth: true }
};

var states = exports.states = [prefsState];

/***/ }),

/***/ 308:
/* no static exports found */
/* all exports used */
/*!**********************************!*\
  !*** ./src/prefs/Preferences.js ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 11);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(/*! ../global/appConfig */ 57);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preferences = function (_Component) {
  _inherits(Preferences, _Component);

  function Preferences(props) {
    _classCallCheck(this, Preferences);

    var _this = _possibleConstructorReturn(this, (Preferences.__proto__ || Object.getPrototypeOf(Preferences)).call(this, props));

    _this.handleResetData = function () {
      sessionStorage.clear();
      document.location.reload(true);
    };

    _this.handleSavePrefs = function () {
      _appConfig2.default.restDelay = _this.state.restDelay;
      _appConfig2.default.save();
      document.location.reload(true);
    };

    _this.handleRestDelayChange = function (e) {
      _this.setState({ restDelay: e.target.value });
    };

    _this.state = {
      restDelay: _appConfig2.default.restDelay
    };
    return _this;
  }

  _createClass(Preferences, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary', onClick: this.handleResetData },
            _react2.default.createElement('i', { className: 'fa fa-recycle' }),
            ' ',
            _react2.default.createElement(
              'span',
              null,
              'Reset All Data'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'restDelay' },
            'Simulated REST API delay (ms)'
          ),
          _react2.default.createElement('input', { type: 'text', name: 'restDelay', value: this.state.restDelay, onChange: this.handleRestDelayChange }),
          _react2.default.createElement(
            'button',
            { className: 'btn btn-primary', onClick: this.handleSavePrefs },
            'Save'
          )
        )
      );
    }
  }]);

  return Preferences;
}(_react.Component);

exports.default = Preferences;

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJlZnMvc3RhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVmcy9QcmVmZXJlbmNlcy5qcyJdLCJuYW1lcyI6WyJwcmVmc1N0YXRlIiwicGFyZW50IiwibmFtZSIsInVybCIsImNvbXBvbmVudCIsImRhdGEiLCJyZXF1aXJlc0F1dGgiLCJzdGF0ZXMiLCJQcmVmZXJlbmNlcyIsInByb3BzIiwiaGFuZGxlUmVzZXREYXRhIiwic2Vzc2lvblN0b3JhZ2UiLCJjbGVhciIsImRvY3VtZW50IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVTYXZlUHJlZnMiLCJyZXN0RGVsYXkiLCJzdGF0ZSIsInNhdmUiLCJoYW5kbGVSZXN0RGVsYXlDaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUNBOzs7QUFHQSxJQUFNQSxhQUFhO0FBQ2pCQyxVQUFRLEtBRFM7QUFFakJDLFFBQU0sT0FGVztBQUdqQkMsT0FBSyxRQUhZO0FBSWpCQyxrQ0FKaUI7QUFLakI7QUFDQUMsUUFBTSxFQUFFQyxjQUFjLElBQWhCO0FBTlcsQ0FBbkI7O0FBU08sSUFBTUMsMEJBQVMsQ0FBQ1AsVUFBRCxDQUFmLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUVNUSxXOzs7QUFDSix1QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBIQUNaQSxLQURZOztBQUFBLFVBTXBCQyxlQU5vQixHQU1GLFlBQU07QUFDdEJDLHFCQUFlQyxLQUFmO0FBQ0FDLGVBQVNDLFFBQVQsQ0FBa0JDLE1BQWxCLENBQXlCLElBQXpCO0FBQ0QsS0FUbUI7O0FBQUEsVUFVcEJDLGVBVm9CLEdBVUYsWUFBTTtBQUN0QiwwQkFBVUMsU0FBVixHQUF1QixNQUFLQyxLQUFMLENBQVdELFNBQWxDO0FBQ0EsMEJBQVVFLElBQVY7QUFDQU4sZUFBU0MsUUFBVCxDQUFrQkMsTUFBbEIsQ0FBeUIsSUFBekI7QUFDRCxLQWRtQjs7QUFBQSxVQWVwQksscUJBZm9CLEdBZUksVUFBQ0MsQ0FBRCxFQUFNO0FBQzVCLFlBQUtDLFFBQUwsQ0FBYyxFQUFDTCxXQUFVSSxFQUFFRSxNQUFGLENBQVNDLEtBQXBCLEVBQWQ7QUFDRCxLQWpCbUI7O0FBRWxCLFVBQUtOLEtBQUwsR0FBYTtBQUNYRCxpQkFBVyxvQkFBVUE7QUFEVixLQUFiO0FBRmtCO0FBS25COzs7OzZCQWFRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBUSxXQUFVLGlCQUFsQixFQUFvQyxTQUFTLEtBQUtQLGVBQWxEO0FBQ0UsaURBQUcsV0FBVSxlQUFiLEdBREY7QUFDb0MsZUFEcEM7QUFDd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR4QztBQURGLFNBREY7QUFNRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTyxTQUFRLFdBQWY7QUFBQTtBQUFBLFdBREY7QUFFRSxtREFBTyxNQUFLLE1BQVosRUFBbUIsTUFBSyxXQUF4QixFQUFvQyxPQUFPLEtBQUtRLEtBQUwsQ0FBV0QsU0FBdEQsRUFBaUUsVUFBVSxLQUFLRyxxQkFBaEYsR0FGRjtBQUdFO0FBQUE7QUFBQSxjQUFRLFdBQVUsaUJBQWxCLEVBQW9DLFNBQVMsS0FBS0osZUFBbEQ7QUFBQTtBQUFBO0FBSEY7QUFORixPQURGO0FBY0Q7Ozs7OztrQkFHWVIsVyIsImZpbGUiOiIyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmVmZXJlbmNlcyBmcm9tICcuL1ByZWZlcmVuY2VzJztcbi8qKlxuICogVGhpcyBzdGF0ZSBhbGxvd3MgdGhlIHVzZXIgdG8gc2V0IHRoZWlyIGFwcGxpY2F0aW9uIHByZWZlcmVuY2VzXG4gKi9cbmNvbnN0IHByZWZzU3RhdGUgPSB7XG4gIHBhcmVudDogJ2FwcCcsXG4gIG5hbWU6ICdwcmVmcycsXG4gIHVybDogJy9wcmVmcycsXG4gIGNvbXBvbmVudDogUHJlZmVyZW5jZXMsXG4gIC8vIE1hcmsgdGhpcyBzdGF0ZSBhcyByZXF1aXJpbmcgYXV0aGVudGljYXRpb24uICBTZWUgLi4vZ2xvYmFsL3JlcXVpcmVzQXV0aC5ob29rLmpzLlxuICBkYXRhOiB7IHJlcXVpcmVzQXV0aDogdHJ1ZSB9XG59O1xuXG5leHBvcnQgY29uc3Qgc3RhdGVzID0gW3ByZWZzU3RhdGVdO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcmVmcy9zdGF0ZXMuanMiLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFwcENvbmZpZyBmcm9tICcuLi9nbG9iYWwvYXBwQ29uZmlnJztcblxuY2xhc3MgUHJlZmVyZW5jZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJlc3REZWxheTogQXBwQ29uZmlnLnJlc3REZWxheVxuICAgIH1cbiAgfVxuICBoYW5kbGVSZXNldERhdGEgPSAoKSA9PiB7XG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gIH1cbiAgaGFuZGxlU2F2ZVByZWZzID0gKCkgPT4ge1xuICAgIEFwcENvbmZpZy5yZXN0RGVsYXkgPSAgdGhpcy5zdGF0ZS5yZXN0RGVsYXk7XG4gICAgQXBwQ29uZmlnLnNhdmUoKTtcbiAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gIH1cbiAgaGFuZGxlUmVzdERlbGF5Q2hhbmdlID0gKGUpPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Jlc3REZWxheTplLnRhcmdldC52YWx1ZX0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVzZXREYXRhfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXJlY3ljbGVcIj48L2k+eycgJ308c3Bhbj5SZXNldCBBbGwgRGF0YTwvc3Bhbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyZXN0RGVsYXlcIj5TaW11bGF0ZWQgUkVTVCBBUEkgZGVsYXkgKG1zKTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInJlc3REZWxheVwiIHZhbHVlPXt0aGlzLnN0YXRlLnJlc3REZWxheX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlUmVzdERlbGF5Q2hhbmdlfSAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17dGhpcy5oYW5kbGVTYXZlUHJlZnN9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWZlcmVuY2VzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcmVmcy9QcmVmZXJlbmNlcy5qcyJdLCJzb3VyY2VSb290IjoiIn0=