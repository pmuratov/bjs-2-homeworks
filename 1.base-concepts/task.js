"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  
  if (d < 0) {
  arr = [];
  } else if (d === 0) {
  arr = [-b / (2 * a)];
  } else if (d > 0) {
  arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100
  console.log(percent)
  let P, S, monthlyPayment, result;
  P = percent / 12
  console.log(P)
  S = amount - contribution
  console.log(S)
  monthlyPayment = S * (P + (P / ((Math.pow((1 + P), countMonths)) - 1)))
  console.log(monthlyPayment)
  result = +(monthlyPayment * countMonths).toFixed(2)
  return result;
}