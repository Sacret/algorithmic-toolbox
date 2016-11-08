function fibonacciLastDigit(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    let prev = 0, curr = 1, next;
    for (let i = 2; i <= num; i++) {
      next = (prev % 10 + curr % 10) % 10;
      prev = curr % 10;
      curr = next;
    }
    return next;
  }
}

if (require.main !== module) {
  const test = require('ava');

  test('fibonacciLastDigit', (t) => {
    t.is(fibonacciLastDigit(3), 2);
    t.is(fibonacciLastDigit(5), 5);
    t.is(fibonacciLastDigit(7), 3);
    t.is(fibonacciLastDigit(132941), 1);
  });
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let num = +line;
  console.log(fibonacciLastDigit(num));
  rl.close();
});
