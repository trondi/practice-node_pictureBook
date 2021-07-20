const path = require('path');
const os = require('os');
const fs = require('fs');

// 1. 사용자가 원하는 폴더의 이름을 받아온다.
const folder = process.argv[2]; //test 인자를 받아옴
const workingDir = path.join(os.homedir(), 'Pictures', folder); //현재 운영체제에 있는 워킹 디렉토리에 우리가 원하는 픽처 폴더안에 사용자가 원하는 폴더에서 작업. 작업 시작전에 최대한 인풋이 정확하게 들어왔는지 확인

if(!folder || !fs.existsSync(workingDir)) {  //만약 사용자가 적절한 폴더를 가져오지 못했다면 에러 출력 || 존재하지 않는 경로
    console.error('Please enter folder name in Pictures');
    return; //처리하지 않고 리턴
}

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir); // 폴더를 만들고 파일들을 정리해야하기 때문에 동기적 활동
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) &&fs.mkdirSync(duplicatedDir); 


// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, (IMG_E1234)