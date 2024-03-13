"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  
  if (d === 0) {
  arr = [-b / (2 * a)];
  } else if (d > 0) {
  arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100
  let percentPerMonth = percent / 12,
  totalCreditAmount = amount - contribution,
  monthlyPayment = totalCreditAmount * (percentPerMonth + (percentPerMonth / ((Math.pow((1 + percentPerMonth), countMonths)) - 1)));
  return +(monthlyPayment * countMonths).toFixed(2);
}