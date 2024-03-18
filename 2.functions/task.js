//функция получает числа
function getArrayParams(...arr) {
  return { min: Math.min(...arr), max: Math.max(...arr), avg: +(arr.reduce((a, b) => (a + b), 0) / arr.length).toFixed(2) };
}

//функция получает массив
function getArrayParams(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr), avg: +(arr.reduce((a, b) => (a + b), 0) / arr.length).toFixed(2) };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
