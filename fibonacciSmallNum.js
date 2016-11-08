function fibonacciSmallNum(num) {
  const arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i-2] + arr[i-1];
  }
  return arr[num];
}

if (require.main !== module) {
  const test = require('ava');

  test('fibonacciSmallNum', (t) => {
    t.is(fibonacciSmallNum(3), 2);
    t.is(fibonacciSmallNum(5), 5);
    t.is(fibonacciSmallNum(7), 13);
  });
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let num = line;
  console.log(fibonacciSmallNum(num));
  rl.close();
});
