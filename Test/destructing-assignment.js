const a = function(b, {c, d = 'dddd'} = {}) {
  console.log(b)
  console.log(c)
  console.log(d)
}

a(1, {c: 2, d: 3});
a(1);