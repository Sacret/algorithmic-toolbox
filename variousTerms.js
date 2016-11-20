function findVariousTerms(num) {
  let terms = [];
  let currentTerm = 1;
  while (num) {
    if (num - currentTerm > num / 2) {
      num -= currentTerm;
      terms.push(currentTerm++);
      continue;
    }
    currentTerm = num;
    num = 0;
    terms.push(currentTerm);
  }
  return terms;
}

if (require.main !== module) {
  const test = require('ava');

  test('findVariousTerms', (t) => {
    t.deepEqual(findVariousTerms(4), [1, 3]);
    t.deepEqual(findVariousTerms(6), [1, 2, 3]);
  });
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const num = +line;
  const result = findVariousTerms(num)
  console.log(result.length + '\n' + result.join(' '));
  rl.close();
});
