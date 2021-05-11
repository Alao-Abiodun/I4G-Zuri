'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

// require("regenerator-runtime/runtime");
const regeneratorRuntime = require('regenerator-runtime');

var _mongoose = _interopRequireDefault(require('mongoose'));

var _dotenv = _interopRequireDefault(require('dotenv'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

_dotenv['default'].config();

var MONGO_URI = process.env.MONGO_URI;
var mongoDBConnection = {
  connectDB: function connectDB() {
    return _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _mongoose['default']
                  .connect(MONGO_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                  })
                  .then(function () {
                    return console.log('Database connected');
                  })
                  ['catch'](function () {
                    return console.log('Database is not connected');
                  });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )();
  },
};
var _default = mongoDBConnection;
exports['default'] = _default;
