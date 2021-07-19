const path = require('path');

const folder = process.argv[2]; //인자를 받아옴

if(!folder) { //만약 사용자가 적절한 폴더를 가져오지 못했다면 에러 출력
    console.error('Please enter folder name in Pictures');
}

const workingDir = path.join(os.homedir(), 'Pictures', folder);
//현재 운영체제에 있는 워킹 디렉토리에 우리가 원하는 픽처 폴더안에 사용자가 원하는 폴더에서 작업
console.log(workingDir);