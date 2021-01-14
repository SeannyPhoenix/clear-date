const clearDate = require('../build/index.js');

const inaugurationUTC = new Date('2021-01-20T12:00:00.000-04:00');
const inaugurationCD = clearDate.toClearDate(inaugurationUTC.getTime());

console.log(inaugurationCD);
// 19.666666666666668

const julyFourthCD = 184.625;
const julyFourthUTC = new Date(clearDate.toUnixDate(julyFourthCD));

console.log(julyFourthUTC);
// 2021-07-04T15:00:00.000Z

console.log(clearDate.now());
// 12.991123298611111
