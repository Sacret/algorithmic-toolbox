function findMaxValue(things, volume) {
  let maxValue = 0;
  things.sort((thingA, thingB) => {
    return thingB.price / thingB.volume - thingA.price / thingA.volume;
  });
  while (volume > 0 || things.length) {
    if (volume >= things[0].volume) {
      volume -= things[0].volume;
      maxValue += things[0].price;
      things.splice(0, 1);
      continue;
    }
    let part = volume / things[0].volume;
    volume = 0;
    maxValue += part * things[0].price;
    things.splice(0, 1);
  }
  return maxValue;
}

if (require.main !== module) {
  const test = require('ava');

  test('findMaxValue', (t) => {
    const things1 = [{
      price: 60,
      volume: 20
    }, {
      price: 100,
      volume: 50
    }, {
      price: 120,
      volume: 30
    }];
    t.is(findMaxValue(things1, 50), 180);

    const things2 = [{
      price: 20,
      volume: 4
    }, {
      price: 18,
      volume: 3
    }, {
      price: 14,
      volume: 2
    }];
    t.is(findMaxValue(things2, 7), 42);
  });
}

const readline = require('readline');
let input = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (cmd) => {
  input.push(cmd);
});

rl.on('close', (cmd) => {
  const volume = input[0].split(' ')[1];
  input.splice(0, 1);

  const things = input.map((str) => {
    const thingStr = str.split(' ');
    return {
      price: +thingStr[0],
      volume: +thingStr[1]
    }; 
  });

  const result = findMaxValue(things);
  console.log(result.toFixed(3));
  rl.close();
  process.exit(0);
});
