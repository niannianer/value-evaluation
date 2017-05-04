/**
 * Created by hekk on 2017/4/27.
 */
const md5 = require('md5');
const version = Math.random().toString().substr(2, 6);

const setSign = (account = '') => {
  return md5(`mfmm${account}1234`);

};
const checkSign = (account = '', sign = '') => {
  return setSign(account) === sign;
};

console.log(setSign('liuliu'));


module.exports = {
  version,
  setSign,
  checkSign
};