const testPromise = function () {
  return new Promise((resolve, reject) => {
    resolve('xxx');
    console.log('afterResolve')
  })
}

class Promise2 {
  constructor(fn) {
    console.log(fn)
  }
}

testPromise().then((value) => {
  console.log(value + 'then');
})

// new Promise2((resolve, reject) => {
//   resolve(1);
//   console.log('afterResolve2')
// })


async function testAsync() {
  console.log(0)
  await console.log(1);
  console.log(2);
  const value = await testPromise();
  console.log(value);
}

testAsync();
