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
declare const _default: {
    now: typeof now;
    toClearDate: typeof toClearDate;
    toUnixDate: typeof toUnixDate;
};
/**
 *
 * @param {numner} time
 * @return {number} roundedTime
 * for future use
 */
export default _default;
