const MATCH_INTERFACES = {
  start: ['/static/', '/sso/', '/api/'],
  end: ['.html', '.png', '.js', '.ico'],
};

const pass1 = '/static/pass';
const pass2 = '/sso/pass';
const pass3 = '/api/pass';
const pass4 = '/api/pass/user';
const fail1 = '/';
const fail2 = '/fail';
const endpass1 = '.html';
const endpass2 = '.png';
const endpass3 = '.js';
const endpass4 = '.ico';
const endfail = '.css';

const matchUrl = (url) =>
  MATCH_INTERFACES.start.some((item) =>
    new RegExp('^' + item + '').test(url)
  ) || MATCH_INTERFACES.end.some((item) => new RegExp(item + '$').test(url));

console.log(pass1, matchUrl(pass1));
console.log(pass2, matchUrl(pass2));
console.log(pass3, matchUrl(pass3));
console.log(pass4, matchUrl(pass4));
console.log(fail1, matchUrl(fail1));
console.log(fail2, matchUrl(fail2));
console.log(endpass1, matchUrl(endpass1));
console.log(endpass2, matchUrl(endpass2));
console.log(endpass3, matchUrl(endpass3));
console.log(endpass4, matchUrl(endpass4));
console.log(endfail, matchUrl(endfail));
