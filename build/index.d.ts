/**
 *
 * @return {number} The current date in Clear Date
 */
export declare function now(): number;
/**
 *
 * @param {number} msSinceEpoch
 * @return {number} clearDate
 */
export declare function toClearDate(msSinceEpoch: number): number;
/**
 *
 * @param {number} clearDate
 * @return {number} msSinceEpoch
 */
export declare function toUnixDate(clearDate: number): number;
/**
 *
 * @param {numner} time
 * @return {number} roundedTime
 * for future use
 */
