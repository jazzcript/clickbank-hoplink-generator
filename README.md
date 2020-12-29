# ClickBank Hoplink Generator

Request from ClickBank a hoplink with your affiliate id and chosen product with optional tracking available.

`npm i clickbank-hoplink-generator`


# Usage

```javascript
const getHoplink = require('clickbank-hoplink-generator');

const affiliate = 'n33xr';
const product = 'SPEECHELO';
const trackId = 'ANSWER42'; // optional

getHoplink(affiliate, product, trackId).then(function (hoplink) {
  console.log(hoplink);
});
```