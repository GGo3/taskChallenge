const bordSize = 5;
let boardColumns = [];


const moveUp = document.querySelector('.up');
const moveDown = document.querySelector('.down');
const moveLeft = document.querySelector('.left');
const moveRight = document.querySelector('.right');

//****************1) создание двумерного массива ****************

for (let i = 0; i < bordSize; i++) {
  let boardRows = [];
  for (let k = 0; k < bordSize; k++){
    boardRows[k] = null;
  }
  boardColumns[i] = boardRows;
}

//**************** */ 2) функция очистки массива ****************

const clearArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      (arr[i][k] !== 2) ? arr[i][k] = null : '';
    }
  }
};
clearArr(boardColumns);

//**************** 3) функция подсчета ненулевых(непустых) клеток во всём массиве ****************

let clearValue = 1;
const checkArr = (arrCheck) => {
  clearValue = 0;
  for (let i = 0; i < arrCheck.length; i++) {
    for (let k = 0; k < arrCheck[i].length; k++) {
      if (arrCheck[i][k] !== null){
        clearValue++;
      }
    }
  }
};

//**************** 4) функция отображения на странице игрового поле(клетки массива) и строка статуса, в которой написано количество ненулевых клеток. Нулевые клетки закрашены белым цветом.

const mainEl = document.querySelector('.main');
let str = '';
let currentPosition=[0, 0];
boardColumns[currentPosition[0]][currentPosition[1]] = 1;


const createBoard = (arrBoard) => {
  let str = '';
  mainEl.innerHTML = '';
  for (let i = 0; i < arrBoard.length; i++) {
    for (let k = 0; k < arrBoard[i].length; k++) {
      if (arrBoard[i][k] == 1){
        str = `${str}<div class="defolts_cells blue"></div>`;
      } else if (arrBoard[i][k] == 2){
        str = `${str}<div class="defolts_cells orange"></div>`;
      } else {
        str = `${str}<div class="defolts_cells white"></div>`;
      }
      if (currentPosition[1] == 4) {
        moveRight.classList.add('unavaible-arrow');
      } else {
        moveRight.classList.remove('unavaible-arrow');
      }
      if (currentPosition[0] == 4) {
        moveDown.classList.add('unavaible-arrow');
      } else {
        moveDown.classList.remove('unavaible-arrow');
      }
      if (currentPosition[1] == 0) {
        moveLeft.classList.add('unavaible-arrow');
      } else {
        moveLeft.classList.remove('unavaible-arrow');
      }
      if (currentPosition[0] == 0) {
        moveUp.classList.add('unavaible-arrow');
      } else {
        moveUp.classList.remove('unavaible-arrow');
      }
    }
  }
  str = `${str}<div class="status">${clearValue}</div>`;
  mainEl.innerHTML = str;
};



createBoard(boardColumns);



// 6) сделай управление мышкой и клавиатурой, там где находится курсор (курсор- это любая клетка поля), закрашиваем клетку синим цветом. Первоначальное положение курсора в левом верхнем углу. В массиве, в соответствующую ячейку писать "1". Уход с клетки возвращает значение null;


let currentStatus = null;


const moveCell = (x, y, avaibleNextPosition) => {
  if (boardColumns[currentPosition[0] + x][currentPosition[1] + y] == 2) {
    currentStatus = false;
  } else currentStatus = true;
  if (currentStatus && avaibleNextPosition) {
    cursorTrace(boardColumns);
    clearArr(boardColumns);
    boardColumns[currentPosition[0] + x][currentPosition[1] + y] = 1;
    currentPosition[0] += x;
    currentPosition[1] += y;
    createBoard(boardColumns);
    checkArr(boardColumns);
  }
};

const moveCellUp = () => moveCell(-1, 0, checkBottomRestriction(currentPosition[0]));
const moveCellDown = () => moveCell(1, 0, checkTopRestriction(currentPosition[0]));
const moveCellLeft = () => moveCell(0, -1, checkBottomRestriction(currentPosition[1]));
const moveCellRight = () => moveCell(0, 1, checkTopRestriction(currentPosition[1]));

moveDown.addEventListener('click', moveCellDown);
moveUp.addEventListener('click', moveCellUp);
moveLeft.addEventListener('click', moveCellLeft);
moveRight.addEventListener('click', moveCellRight);

const handleKeyboard = (t) => {
  t = t || window.event;
  switch (t.keyCode) {
    case 38:
      moveCellUp();
      break;
    case 40:
      moveCellDown();
      break;
    case 37:
      moveCellLeft();
      break;
    case 39:
      moveCellRight();
      break;
  }
};
document.addEventListener('keydown', handleKeyboard);

// 7) Создана функция для  отображение следа на клетках после курсора оранжевым цветом.  В соответствующих ячейках массива где след будет писать "2". След весь от начала игры. Также, для корректной работы, внесены правики в функцию очистки массива,массивы с цифрой 2 добавлены в исключения. Внесены правки в функцию создания клеток, появились клетки оранжевого стиля. 

const cursorTrace = (arrTrace) => {
  for (let i = 0; i < arrTrace.length; i++) {
    for (let k = 0; k < arrTrace[i].length; k++) {
      if (arrTrace[i][k] == 1){
        arrTrace[i][k] = 2;
      }
    }
  }
};
// 8) Создал 2 функции которые провреют, будет ли следующий ход привишать дозволеный верхний или нижний лимит. Передал эти функции в параметр avaibleNextPosition функции moveCell. Таким образом кнопка не будет срабатывать если попробовать выйти за ромки таблички. в 104-106 строку добавил проверку для того чтобы не наступать на хвост пройденого пути. Добавил в функцию createBoard откулючение кнопок по параметрам, чтобы было видно что они не сработают если нажать на них.

const checkTopRestriction = (position) => {
  if ( (position + 1) > 4) {
    return false;
  } else return true;
}
const checkBottomRestriction = (position) => {
  if ( (position - 1) < 0) {
    return false;
  } else return true;
}