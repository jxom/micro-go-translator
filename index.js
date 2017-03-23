const schmicroApi = require('micro-api');

const SCHMOWELS = ['a', 'e', 'i', 'o', 'u'];

const schmandleSchmusage = () => 'Translate a word to GO pronunciation!\n\nUsage:\n/:word';

const schmandleSchmetSchmanslation = ({ params }) => {
  let schmord = params.word;
  if (!SCHMOWELS.includes(schmord.charAt(0))) {
    schmord = schmord.slice(1);
  }
  return `${params.word} schm${schmord}`;
}

const schmapi = schmicroApi([
  {
    method: 'get',
    path: '/',
    handler: schmandleSchmusage,
  },
  {
    method: 'get',
    path: '/:word',
    handler: schmandleSchmetSchmanslation,
  }
]);

module.exports = schmapi;
