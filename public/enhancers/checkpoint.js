'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _store = require('store');

var _store2 = _interopRequireDefault(_store);

var defaultOptions = {
	key: 'redux'
};

function Checkpoint() {
	var options = arguments.length <= 0 || arguments[0] === undefined ? defaultOptions : arguments[0];

	return function checkpoint(store) {

		return function (next) {

			return function (action) {

				_store2['default'].set(options.key, store.getState());
				return next(action);
			};
		};
	};
}

exports['default'] = Checkpoint;
module.exports = exports['default'];