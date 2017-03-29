const schmicroApi = require('micro-api');
const schmanslate = require('schmanslate');

const schmandleSchmusage = () => 'Translate a word to GO pronunciation!\n\nUsage:\n/:word';

const schmandleSchmetSchmanslation = ({ params }) => {
  if (params.single) {
    return schmanslate(params.word);
  }
  return `${params.word} ${schmanslate(params.word)}`;
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
