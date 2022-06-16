// try {
//   const a = new Promise((resolve, reject) => {
//     reject('a');
//   })
  
//   a.then(
//     (value) => {
//       console.log('thenValue:', value);
//     }, 
//     (error) => {
//       console.log('thenError:', error); // console, if there is an onRejcted function before Catch, the catch function won't execute.
//       throw new Error('error In onRejcted')
//     }
//   ).catch((error) => {
//     console.log('catchError:', error);
//   })
// } catch (error) {
//   console.log('catchErrorWrap:', error);
// }

// const b = new Promise((resolve, reject) => {
//   reject('b');
// })

// b.then(
//   (value) => {
//     console.log('thenValue1:', value);
//   }
// ).then(
//   (value) => {
//     console.log('thenValue2:', value);
//   }
// ).catch((error) => {
//   console.log('catchError:', error);
// }).catch((error) => {
//   console.log('catchError2:', error);
// })

// 1、then当中的第二个捕获函数，有更高的捕获优先级，一旦被捕获了，catch就无法捕获
// 2、resolve后面发生的异常不会被捕获，因为promise的状态具有不可变性。
// 3、promise的error不会为外围的catch捕获，它是独立的。

// const c = new Promise((resolve, reject) => {
//   resolve('c');
//   reject('error-c');
// })

// c.then(
//   (value) => {
//     console.log('thenValue1:', value);
//   }
// ).then(
//   (value) => {
//     console.log('thenValue2:', value); // undefined
//   }
// ).catch((error) => {
//   console.log('catchError:', error);
// }).catch((error) => {
//   console.log('catchError2:', error);
// })

// const d = new Promise((resolve, reject) => {
//   resolve('d');
//   reject('error-d');
// })

// d.then(
//   (value) => {
//     console.log('thenValue1:', value); // d
//   }
// )
// d.then(
//   (value) => {
//     console.log('thenValue2:', value); // d
//   }
// ).catch((error) => {
//   console.log('catchError:', error);
// }).catch((error) => {
//   console.log('catchError2:', error);
// })

// const e = new Promise((resolve, reject) => {
//   resolve('e');
//   reject('error-e');
// })

// e.then(
//   (value) => {
//     console.log('thenValue1:', value);
//     return 'then - 1: e'
//   }
// ).then(
//   (value) => {
//     console.log('thenValue2:', value); // then - 1: e
//   }
// ).catch((error) => {
//   console.log('catchError:', error);
// }).catch((error) => {
//   console.log('catchError2:', error);
// })

try {
  const f = new Promise((resolve, reject) => {
    resolve('f');
    reject('error-f');
  })
  
  f.then(
    (value) => {
      console.log('thenValue1:', value);
      throw 'then - 1: f'
    }
  ).then(
    (value) => {
      console.log('thenValue2:', value); // then - 1: e
    }
  ).catch(e =>{
    console.log('catch- f:', e);
  }).finally((e) => {
    console.log(e)
    // throw new Error('finally')
  })
} catch (error) {
  console.log('catchErrorWrap:', error);
}