const clearDate = require('../build/index.js');

const inaugurationUTC = new Date('2021-01-20T12:00:00.000-04:00');
const inaugurationCD = clearDate.toClearDate(inaugurationUTC.getTime());

// 19.666666666666668
console.log(inaugurationCD);
// 19.666 66
console.log(clearDate.format(inaugurationCD));

const julyFourthCD = 184.625;
const julyFourthUTC = new Date(clearDate.toUnixDate(julyFourthCD));

// 2021-07-04T15:00:00.000Z
console.log(julyFourthUTC);
// 184. 625 00
console.log(clearDate.format(julyFourthCD));

const now = clearDate.now();
// 12.991123298611111
console.log(now);
// 12.991 11
console.log(clearDate.format(now));
