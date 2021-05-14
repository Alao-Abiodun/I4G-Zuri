"use strict";

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./routes/user.route"));

var _mongoose = _interopRequireDefault(require("mongoose"));

require("core-js/stable");

require("regenerator-runtime/runtime");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var _process$env = process.env,
    PORT = _process$env.PORT,
    MONGO_URI = _process$env.MONGO_URI;

_mongoose["default"].connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('Database connected');
})["catch"](function () {
  return console.log('Database is not connected');
});

var app = (0, _express["default"])();
app.use(_express["default"].json());
var port = PORT || 3422;
app.get('/', function (req, res) {
  res.json({
    message: 'The Express Application is Open 😀😀😀😀😀'
  });
});
app.use('/api/v1', _user["default"]);
app.listen(port, function () {
  console.log("The server is running on PORT ".concat(port));
});