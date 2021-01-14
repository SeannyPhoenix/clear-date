# Clear Date #

Standard of time with 1 units per day.

Clear Date starts at 2021-01-01T00:00:00Z UTC. It is a simple incrementing date with no other units. Future versions will use TAI instead of UTC. Times before January 1, 2021, are negative.

```js
const clearDate = require('@seannyphoenix/clear-date');

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
```

## Installation

```bash
$ npm install @seannyphoenix/clear-date
```

## Future

* Add rounding
* Add formatting
* toClearDate will accept Date objects and strings