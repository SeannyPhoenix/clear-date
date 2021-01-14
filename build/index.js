"use strict";
const zeroTime = '2021-01-01T00:00:00.000Z';
const zeroUTC = new Date(zeroTime).getTime();
// ms in a day
const msPerUnit = 86400000;
/**
 *
 * @return {number} The current date in Clear Date
 */
function now() {
    const now = Date.now();
    return toClearDate(now);
}
/**
 *
 * @param {number} msSinceEpoch
 * @return {number} clearDate
 */
function toClearDate(msSinceEpoch) {
    const msSinceZero = msSinceEpoch - zeroUTC;
    const clearDate = msSinceZero / msPerUnit;
    return clearDate;
}
/**
 *
 * @param {number} clearDate
 * @return {number} msSinceEpoch
 */
function toUnixDate(clearDate) {
    const msSinceZero = clearDate * msPerUnit;
    const msSinceEpoch = msSinceZero + zeroUTC;
    return msSinceEpoch;
}
/**
 *
 * @param {numner} time
 * @return {number} roundedTime
 * for future use
 */
// function roundDate(time: number): number {
//   return Math.floor(time*1000000)/1000000;
// }
module.exports = {
    now,
    toClearDate,
    toUnixDate,
};
