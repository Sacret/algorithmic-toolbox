function gcd(a, b) {
  while (a && b) {
    let [min, max] = (a < b) ? [a, b] : [b, a];
    a = min;
    b = max % min;
  }
  return a || b;
}

if (require.main !== module) {
  const test = require('ava');

  test('gcd', (t) => {
    t.is(gcd(12, 8), 4);
    t.is(gcd(12, 6), 6);
    t.is(gcd(14159572, 63967072), 4);
  });
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let [a, b] = line.split(' ');
  console.log(gcd(a, b));
  rl.close();
});
