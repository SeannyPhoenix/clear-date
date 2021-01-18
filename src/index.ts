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
export function now(): number {
  const now = Date.now();
  return toClearDate(now);
}

/**
 *
 * @param {number} msSinceEpoch
 * @return {number} clearDate
 */
export function toClearDate(msSinceEpoch: number): number {
  const msSinceZero = msSinceEpoch - zeroUTC;
  const clearDate = msSinceZero/msPerUnit;
  return clearDate;
}

/**
 *
 * @param {number} clearDate
 * @return {number} msSinceEpoch
 */
export function toUnixDate(clearDate: number): number {
  const msSinceZero = clearDate * msPerUnit;
  const msSinceEpoch = msSinceZero + zeroUTC;
  return msSinceEpoch;
}

/**
 *
 * @param {numner} time
 * @return {string} formatted time "xxx0.000 00"
 */
export function format(time: number): string {
  const stringify = `${Math.floor(time*100000)}`;
  // const length = stringify.length;
  const formatted =
    stringify.slice(0, stringify.length - 5) +
    '.' +
    stringify.slice(stringify.length - 5, stringify.length - 2) +
    ' ' +
    stringify.slice(stringify.length - 2);
  return formatted;
}

export default {
  now,
  toClearDate,
  toUnixDate,
  format,
};
