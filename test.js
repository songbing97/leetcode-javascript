async function test() {
  console.log(1);
  const a = await Promise.resolve(2);
  console.log(a);
  return ;
}

test();
console.log('-------')