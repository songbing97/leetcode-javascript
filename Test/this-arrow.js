const origin = {
  a: 1,
  b: () => {
    console.log(this.a);
  },
  c: this.a,
  d: {
    a: 'd-a',
    e: () => {
      console.log(this.a);
    }
  },
  e: () => {
    const k = {
      d: 'k-d',
      f: () => {
        console.log(this.d);
      }
    }
    k.f();
  },
  f: function() {
    const k = {
      d: 'k-d',
      f: () => {
        console.log(this.d);
      }
    }
    k.f();
  },
  j: function() {
    const k = {
      d: 'k-d',
      f: function() {
        console.log(this.d);
      }
    }
    k.f();
  }
}

origin.b();
console.log(origin.c);
origin.d.e();
origin.e();
origin.f();
origin.j();
