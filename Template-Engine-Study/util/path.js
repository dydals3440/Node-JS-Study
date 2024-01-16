// 상위 다이렉트로 가는데 도움 주는 함수.
const path = require('path');

// dirname은 디렉토리 파일명만 알면된다.
// process.mainModule.filename(deprecated)
module.exports = path.dirname(require.main.filename);
