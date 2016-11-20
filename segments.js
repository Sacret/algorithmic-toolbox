function findSegmentDots(segments) {
  let dots = [];
  let sortedSegments = segments.sort((segmentA, segmentB) => segmentA[1] - segmentB[1]);
  while (sortedSegments.length) {
    let currentDot = sortedSegments[0][1];
    dots.push(currentDot);
    sortedSegments = sortedSegments.filter((segment) => {
      return segment[0] > currentDot || segment[1] < currentDot;
    });
  }
  return dots;
}

if (require.main !== module) {
  const test = require('ava');

  test('findSegmentDots', (t) => {
    t.deepEqual(findSegmentDots([[1, 3], [2, 4], [3, 5]]), [3]);
    t.deepEqual(findSegmentDots([[1, 3], [2, 5], [3, 6]]), [3]);
    t.deepEqual(findSegmentDots([[4, 7], [1, 3], [2, 5], [5, 6]]), [3, 6]);
    t.deepEqual(findSegmentDots([[1, 6], [2, 3], [3, 6], [6, 7]]), [3, 7]);
    t.deepEqual(findSegmentDots([[1, 2], [3, 4], [0, 5]]), [2, 4]);
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
  input.splice(0, 1);
  const segments = input.map((str) => {
    const segmentStr = str.split(' ');
    return [+segmentStr[0], +segmentStr[1]]; 
  });

  const result = findSegmentDots(segments);
  console.log(result.length + '\n' + result.join(' '));
  rl.close();
  process.exit(0);
});
