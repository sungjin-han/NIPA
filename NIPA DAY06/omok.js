const readline = require('readline');
let board = Array(30).fill().map(() => Array(30).fill(-1));
let currentPlayer = 0;
let lastMoveTime = Date.now(); // 마지막으로 돌을 놓은 시간 저장

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printBoard() {
  for (let i = 0; i < 30; i++) {
    let row = '';
    for (let j = 0; j < 30; j++) {
      if (board[i][j] === -1) {
        row += ' -';
      } else {
        row += ' ' + board[i][j];
      }
    }
    console.log(row);
  }
}

function placeStone(x, y) {
  if (board[x][y] !== -1) {
    console.log("그곳엔 돌을 놓을 수 없습니다.");
    return false;
  }
  board[x][y] = currentPlayer;
  currentPlayer = 1 - currentPlayer; // 플레이어를 바꿈
  lastMoveTime = Date.now(); // 마지막 돌 놓은 시간 업데이트
  return true;
}

function checkWin(x, y, player) {
  const directions = [
    [-1, 0], // 가로
    [0, -1], // 세로
    [-1, -1], // 대각선1 /
    [-1, 1] // 대각선2 \
  ];

  function countStonesInDirection(dx, dy) {
    let count = 1; // 돌 놓음
    let i = x + dx, j = y + dy;
    while (i >= 0 && i < 30 && j >= 0 && j < 30 && board[i][j] === player) {
      count++;
      i += dx;
      j += dy;
    }
    return count;
  }

  for (const direction of directions) {
    const [dx, dy] = direction;
    const countInCurrentDirection = countStonesInDirection(dx, dy) +
      countStonesInDirection(-dx, -dy) - 1;

    if (countInCurrentDirection >= 5) {
      return true;
    }
  }

  return false;
}

function play() {
  printBoard();

  // 5분 동안 돌을 두지 않으면 게임을 종료하기 위해 확인
  const currentTime = Date.now();
  if (currentTime - lastMoveTime >= 5 * 60 * 1000) {
    console.log("게임이 5분 동안 활동이 없어 자동 종료됩니다.");
    rl.close();
    return;
  }

  rl.question('0,0부터 29,29까지의 좌표 중 원하는 위치를 입력해주세요. : ', (answer) => {
    const [x, y] = answer.split(',').map(Number);

    if (placeStone(x, y)) {
      if (checkWin(x, y, board[x][y])) {
        printBoard();
        console.log(`게임 끝. 플레이어 ${board[x][y]}가 이겼습니다.`);
        rl.close();
        return;
      }
    }

    play();
  });
}

play();
