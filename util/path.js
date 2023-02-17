const path = require('path');

// process.mainModule.filename 为我们提供了文件路径，该文件负责我们应用程序的运行，而这个文件名就是通过我们放在dirname里文件路径获取到的
module.exports = path.dirname(require.main.filename);