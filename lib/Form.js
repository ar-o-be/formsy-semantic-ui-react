'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _semanticUiReact = require('semantic-ui-react');

var _FormsyInput = require('./FormsyInput');

var _FormsyInput2 = _interopRequireDefault(_FormsyInput);

var _FormsyTextArea = require('./FormsyTextArea');

var _FormsyTextArea2 = _interopRequireDefault(_FormsyTextArea);

var _FormsyCheckbox = require('./FormsyCheckbox');

var _FormsyCheckbox2 = _interopRequireDefault(_FormsyCheckbox);

var _FormsyDropdown = require('./FormsyDropdown');

var _FormsyDropdown2 = _interopRequireDefault(_FormsyDropdown);

var _FormsySelect = require('./FormsySelect');

var _FormsySelect2 = _interopRequireDefault(_FormsySelect);

var _FormsyRadioGroup = require('./FormsyRadioGroup');

var _FormsyRadioGroup2 = _interopRequireDefault(_FormsyRadioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = (_temp2 = _class = function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args))), _this), _this.updateInputWithErrors = function (errors) {
      return _this.formsyForm.updateInputWithErrors(errors);
    }, _this.reset = function (mapping) {
      return _this.formsyForm.reset(mapping);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Form, [{
    key: 'render',
    value: function () {
      function render() {
        var _this2 = this;

        var _props = this.props,
            children = _props.children,
            onSubmit = _props.onSubmit;

        var _props2 = this.props,
            mapping = _props2.mapping,
            validationErrors = _props2.validationErrors,
            onValid = _props2.onValid,
            onValidSubmit = _props2.onValidSubmit,
            onInvalid = _props2.onInvalid,
            onInvalidSubmit = _props2.onInvalidSubmit,
            onChange = _props2.onChange,
            reset = _props2.reset,
            preventExternalInvalidation = _props2.preventExternalInvalidation,
            onSuccess = _props2.onSuccess,
            onError = _props2.onError,
            nonFormsyReactFormProps = _objectWithoutProperties(_props2, ['mapping', 'validationErrors', 'onValid', 'onValidSubmit', 'onInvalid', 'onInvalidSubmit', 'onChange', 'reset', 'preventExternalInvalidation', 'onSuccess', 'onError']);

        var _props3 = this.props,
            as = _props3.as,
            error = _props3.error,
            inverted = _props3.inverted,
            loading = _props3.loading,
            reply = _props3.reply,
            size = _props3.size,
            success = _props3.success,
            warning = _props3.warning,
            width = _props3.width,
            nonSemanticUIFormProps = _objectWithoutProperties(_props3, ['as', 'error', 'inverted', 'loading', 'reply', 'size', 'success', 'warning', 'width']);

        return _react2['default'].createElement(
          _formsyReact2['default'].Form,
          _extends({
            noValidate: true,
            ref: function () {
              function ref(_ref2) {
                return _this2.formsyForm = _ref2;
              }

              return ref;
            }(),
            onSubmit: onSubmit
          }, nonSemanticUIFormProps),
          _react2['default'].createElement(
            _semanticUiReact.Form,
            _extends({ as: as }, nonFormsyReactFormProps),
            children
          )
        );
      }

      return render;
    }()
  }]);

  return Form;
}(_react.Component), _class.propTypes = {
  as: _propTypes2['default'].any,
  children: _propTypes2['default'].node,
  onSubmit: _propTypes2['default'].func
}, _class.defaultProps = {
  as: 'div'
}, _class.Input = function (props) {
  return _react2['default'].createElement(_FormsyInput2['default'], _extends({ as: _semanticUiReact.Form.Input }, props));
}, _class.TextArea = function (props) {
  return _react2['default'].createElement(_FormsyTextArea2['default'], _extends({ as: _semanticUiReact.Form.TextArea }, props));
}, _class.Select = function (props) {
  return _react2['default'].createElement(_FormsySelect2['default'], _extends({ as: _semanticUiReact.Form.Select }, props));
}, _class.RadioGroup = function (props) {
  return _react2['default'].createElement(_FormsyRadioGroup2['default'], _extends({ formRadioGroup: true }, props));
}, _class.Dropdown = function (props) {
  return _react2['default'].createElement(_FormsyDropdown2['default'], _extends({ as: _semanticUiReact.Form.Dropdown }, props));
}, _class.Checkbox = _FormsyCheckbox2['default'], _class.Button = _semanticUiReact.Form.Button, _class.Radio = _semanticUiReact.Form.Radio, _class.Field = _semanticUiReact.Form.Field, _class.Group = _semanticUiReact.Form.Group, _temp2);
exports['default'] = Form;