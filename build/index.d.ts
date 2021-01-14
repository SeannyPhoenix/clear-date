declare const zeroTime = "2021-01-01T00:00:00.000Z";
declare const zeroUTC: number;
declare const msPerUnit = 86400000;
/**
 *
 * @return {number} The current date in Clear Date
 */
declare function now(): number;
/**
 *
 * @param {number} msSinceEpoch
 * @return {number} clearDate
 */
declare function toClearDate(msSinceEpoch: number): number;
/**
 *
 * @param {number} clearDate
 * @return {number} msSinceEpoch
 */
declare function toUnixDate(clearDate: number): number;
