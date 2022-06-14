function Promise0 () {
  return 1;
}

async function Promise1 () {
  return await 1;
}

async function Promise2 () {
  return 1;
}

function Promise3 () {
  return Promise.resolve(1);
}

function Promise4 () {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}


// Promise0().then((value) => { // error function
//   console.log(value + 'promise1')
// })
Promise1().then((value) => {
  console.log(value + 'promise1')
})
Promise2().then((value) => {
  console.log(value + 'promise1')
})
Promise3().then((value) => {
  console.log(value + 'promise1')
})
Promise4().then((value) => {
  console.log(value + 'promise1')
})