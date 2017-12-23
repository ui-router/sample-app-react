webpackJsonp([2],{

/***/ 129:
/*!*****************************!*\
  !*** ./src/prefs/states.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.states = undefined;

var _Preferences = __webpack_require__(/*! ./Preferences */ 144);

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

/***/ 144:
/*!**********************************!*\
  !*** ./src/prefs/Preferences.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ 4);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(/*! ../global/appConfig */ 28);

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
//# sourceMappingURL=2.bundle.js.map