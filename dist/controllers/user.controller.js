'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var regeneratorRuntime = require('regenerator-runtime');

var _user = _interopRequireDefault(require('../models/user.model'));

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

var userController = {
  addUser: function addUser(req, res) {
    return _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var _req$body, name, email, country, user, newUser, data;

        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  (_req$body = req.body),
                    (name = _req$body.name),
                    (email = _req$body.email),
                    (country = _req$body.country);
                  _context.next = 4;
                  return _user['default'].findOne({
                    email: email,
                  });

                case 4:
                  user = _context.sent;

                  if (!user) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt(
                    'return',
                    res.status(401).json({
                      message: 'User already exist',
                    })
                  );

                case 7:
                  newUser = new _user['default']({
                    name: name,
                    email: email,
                    country: country,
                  });
                  _context.next = 10;
                  return newUser.save();

                case 10:
                  data = _context.sent;
                  res.status(201).json({
                    message: 'User created successfully',
                    data: data,
                  });
                  _context.next = 17;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context['catch'](0);
                  res.status(404).json({
                    message: 'A new user can not be created...',
                    data: _context.t0,
                  });

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[0, 14]]
        );
      })
    )();
  },
  retrieveUsers: function retrieveUsers(req, res) {
    return _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
        var users;
        return regeneratorRuntime.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _user['default'].find({});

                case 3:
                  users = _context2.sent;
                  return _context2.abrupt(
                    'return',
                    res.status(200).json({
                      message: 'Users retrieved successfully',
                      data: users,
                    })
                  );

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt(
                    'return',
                    res.status(400).json({
                      message: 'There is an error',
                      data: _context2.t0,
                    })
                  );

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[0, 7]]
        );
      })
    )();
  },
  updateUser: function updateUser(req, res) {
    return _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var id, _req$body2, name, email, country, user;

        return regeneratorRuntime.wrap(
          function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  _context3.prev = 0;
                  id = req.params.id;
                  (_req$body2 = req.body),
                    (name = _req$body2.name),
                    (email = _req$body2.email),
                    (country = _req$body2.country);
                  _context3.next = 5;
                  return _user['default'].findOneAndUpdate(
                    {
                      _id: id,
                    },
                    {
                      name: name,
                      email: email,
                      country: country,
                    },
                    {
                      new: true,
                      upsert: true,
                    },
                    {
                      useFindAndModify: false,
                    }
                  );

                case 5:
                  user = _context3.sent;
                  return _context3.abrupt(
                    'return',
                    res.status(200).json({
                      message: 'User updated successfully',
                      data: user,
                    })
                  );

                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3['catch'](0);
                  console.log(_context3.t0);
                  return _context3.abrupt(
                    'return',
                    res.status(404).json({
                      message: _context3.t0,
                    })
                  );

                case 13:
                case 'end':
                  return _context3.stop();
              }
            }
          },
          _callee3,
          null,
          [[0, 9]]
        );
      })
    )();
  },
  removeUser: function removeUser(req, res) {
    return _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee4() {
        var id, user;
        return regeneratorRuntime.wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  _context4.prev = 0;
                  id = req.params.id;
                  _context4.next = 4;
                  return _user['default'].findOneAndDelete(
                    {
                      _id: id,
                    },
                    {
                      useFindAndModify: false,
                    }
                  );

                case 4:
                  user = _context4.sent;
                  return _context4.abrupt(
                    'return',
                    res.status(200).json({
                      message: 'User deleted successfully',
                      data: user,
                    })
                  );

                case 8:
                  _context4.prev = 8;
                  _context4.t0 = _context4['catch'](0);
                  return _context4.abrupt(
                    'return',
                    res.status(404).json({
                      message: _context4.t0,
                    })
                  );

                case 11:
                case 'end':
                  return _context4.stop();
              }
            }
          },
          _callee4,
          null,
          [[0, 8]]
        );
      })
    )();
  },
};
var _default = userController;
exports['default'] = _default;
