"use strict";

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./routes/user.route"));

var _db = _interopRequireDefault(require("./databases/db"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = process.env.PORT;

_db["default"].connectDB();

var app = (0, _express["default"])();
app.use(_express["default"].json());
var port = PORT || 3422;
app.get('/', function (req, res) {
  res.json({
    message: 'The Express Application is Open 😀😀😀'
  });
});
app.use('/api/v1', _user["default"]);
app.listen(port, function () {
  console.log("The server is running on PORT ".concat(port));
});