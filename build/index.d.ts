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
 * @return {string} formatted time "xxx0.000 00"
 */
export declare function format(time: number): string;
declare const _default: {
    now: typeof now;
    toClearDate: typeof toClearDate;
    toUnixDate: typeof toUnixDate;
    format: typeof format;
};
export default _default;
