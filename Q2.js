let stepCounter = {
  counter: 0,
  increase: function () {
    this.counter++;
  },
  decrease: function () {
    this.counter--;
  },
  reset: function () {
    this.counter = 0;
  },
  print: function () {
    console.log(this.counter);
  },
};
stepCounter.increase();
stepCounter.increase();
stepCounter.reset();
stepCounter.print();
