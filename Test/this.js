console.log(this);

const origin = {
  a: 1,
  b: function () {
    console.log(this.a);
  },
  c: this.a,
  d: {
    a: 'd-a',
    e: function () {
      console.log(this.a);
    }
  }
}

origin.b();
console.log(origin.c);
origin.d.e();
