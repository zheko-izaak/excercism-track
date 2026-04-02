// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

const WORKING_DAYS_PER_MONTH = 22
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  var ratePerDay = 0;
  
  if (ratePerHour > 0) {
    ratePerDay = ratePerHour * 8;
  }

  return ratePerDay;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {

  var numberOfDays = 0;

  if (budget > 0 && ratePerHour > 0) {
    numberOfDays = Math.floor(budget / dayRate(ratePerHour));
  }

  return numberOfDays;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

  var remainingDays = 0;
  var wholeMonths = 0;
  var discountedPrice = 0;
  var totalPrice = 0;

  if (numDays > 0) {
    wholeMonths = Math.floor(numDays / WORKING_DAYS_PER_MONTH);
    remainingDays = numDays % WORKING_DAYS_PER_MONTH;
  }
  
  discountedPrice = (wholeMonths * WORKING_DAYS_PER_MONTH * dayRate(ratePerHour) * (1 - discount)) + (remainingDays * dayRate(ratePerHour));
  totalPrice = Math.ceil(discountedPrice);

  return totalPrice;
}
