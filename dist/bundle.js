
    (function (modules) {
      // 模拟 require
      function require (filePath) {
        // 模拟 module
        let module = { exports: {} }
        // 执行模块代码
        modules[filePath](require, module, module.exports)
        // 暴露 module.exports
        return module.exports
      }
      // 加载入口模块
      require('./src/entry.js')
    })({ './src/entry.js': (
      function (require, module, exports) { "use strict";

var _say = _interopRequireDefault(require("./say.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _say.default)()); }
    ),'./say.js': (
      function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _name = require("./name.js");

function say() {
  return "My name is ".concat(_name.name, ".");
}

var _default = say;
exports.default = _default; }
    ),'./name.js': (
      function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = void 0;
var name = 'FishPlusOrange';
exports.name = name; }
    ), })
  