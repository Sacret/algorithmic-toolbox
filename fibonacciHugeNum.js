function fibonacciHugeNum(num, m) {
  const arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i-2] + arr[i-1];
  }
  return arr[num] % m;
}

if (require.main !== module) {
  const test = require('ava');

  test('fibonacciHugeNum', (t) => {
    t.is(fibonacciHugeNum(3, 2), 0);
    t.is(fibonacciHugeNum(5, 3), 2);
    t.is(fibonacciHugeNum(10, 2), 1);
  });
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [num, m] = line.split(' ');
  console.log(fibonacciHugeNum(num, m));
  rl.close();
});
