'use strict';

var _express = _interopRequireDefault(require('express'));

var _user = _interopRequireDefault(require('./routes/user.route'));

var _mongoose = _interopRequireDefault(require('mongoose'));

var regeneratorRuntime = require('regenerator-runtime');

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

var _process$env = process.env,
  PORT = _process$env.PORT,
  MONGO_URI = _process$env.MONGO_URI;

var connection = /*#__PURE__*/ (function () {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _mongoose['default'].connect(MONGO_URI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                });

              case 3:
                console.log('Database connected');
                _context.next = 11;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);
                console.log('Database is not connected');
                console.log(_context.t0.message);
                process.exit(1);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[0, 6]]
      );
    })
  );

  return function connection() {
    return _ref.apply(this, arguments);
  };
})();

connection();
var app = (0, _express['default'])();
app.use(_express['default'].json());
var port = PORT || 3422;
app.get('/', function (req, res) {
  res.json({
    message: 'The Express Application is Open 😀😀😀',
  });
});
app.use('/api/v1', _user['default']);
app.listen(port, function () {
  console.log('The server is running on PORT '.concat(port));
});
