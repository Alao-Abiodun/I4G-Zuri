"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/users', _user["default"].retrieveUsers);
router.post('/user', _user["default"].addUser);
router.put('/user/:id', _user["default"].updateUser);
router["delete"]('/user/:id', _user["default"].removeUser);
var _default = router;
exports["default"] = _default;