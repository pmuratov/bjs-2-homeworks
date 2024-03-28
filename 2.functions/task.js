function getArrayParams(...arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
    avg: +(arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2),
  };
}

function summElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  return +arr.reduce((a, b) => a + b, 0).toFixed(2);
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let sumEvenElement = 0,
    sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? (sumEvenElement += arr[i]) : (sumOddElement += arr[i]);
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) {
    return 0;
  }

  let accum = 0,
    counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      accum += arr[i];
      counter++;
    }
  }
  return accum / counter;
}

function makeWork(arrOfArr, func) {
  if (!arrOfArr.length) {
    return 0;
  }

  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let elem = func(...arrOfArr[i]);
    maxWorkerResult = elem > maxWorkerResult ? elem : maxWorkerResult;
  }
  return maxWorkerResult;
}
