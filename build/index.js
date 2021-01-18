"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.toUnixDate = exports.toClearDate = exports.now = void 0;
// 0000hrs, 1 January, 2021, UTC
const zeroTime = '2021-01-01T00:00:00.000Z';
// miliseconds since the epoch
const zeroUTC = new Date(zeroTime).getTime();
// miliseconds in a day
const msPerUnit = 86400000;
/**
 *
 * @return {number} The current date in Clear Date
 */
function now() {
    const now = Date.now();
    return toClearDate(now);
}
exports.now = now;
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
exports.toClearDate = toClearDate;
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
exports.toUnixDate = toUnixDate;
/**
 *
 * @param {numner} time
 * @return {string} formatted time "xxx0.000 00"
 */
function format(time) {
    const stringify = `${Math.floor(time * 100000)}`;
    // const length = stringify.length;
    const formatted = stringify.slice(0, stringify.length - 5) +
        '.' +
        stringify.slice(stringify.length - 5, stringify.length - 2) +
        ' ' +
        stringify.slice(stringify.length - 2);
    return formatted;
}
exports.format = format;
exports.default = {
    now,
    toClearDate,
    toUnixDate,
    format,
};
