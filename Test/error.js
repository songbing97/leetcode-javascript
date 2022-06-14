// var test = async function () {
//   setTimeout(async function () {
//     console.log(Date.now());
//     await test();
//   }, 1);
// }
// test();

var a = {
  b: 1
}

var getA = function () {
  try {
    throw 2;
    console.log(Date.now());
    return {ok: 1}
    a.test();
  } catch (e) {
    // return 2;
    throw new Error(e);
    // throw {ok: false};
    // throw {ok: false};
    // return e;
  } finally {
    // return 1
    return new Error('test failed')
    // return 1;
    // return {ok: true};
  }
  // return 3;
}

let b = 'x';
try {
  b = getA();
} catch (e) {
  console.log('e:', e);
} finally {
  console.log(b);
}

console.log('end');
console.log(b)
