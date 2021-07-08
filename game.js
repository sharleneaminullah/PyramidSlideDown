/* Test data */
let pyramid1 = [[4], [1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];

let pyramid2 = [[3], [1], [2, 3], [4, 5, 6]];

let pyramid3 = [[3], [-1], [2, 4], [1, -1, -4]];

let pyramid4 = [
  [15],
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
];

/* Game solution */

/* Algorithm:
 * Iterate over the structure only once, do not check each possible combination
 * The path must be lowest, so pick the lowest number on the row
 * Path can only be adjacent, so min of current element index and one neighbour
 * Once found the min then add that to the sum
 *
 * For effeciency the solution follows bottom up calculation
 */

const lowestSumPath = (pyramid) => {
  let startRow = 1;
  let startCol = 0;

  for (let row = pyramid.length - 2; row > -1; row--) {
    for (let col = 0; col < pyramid[row].length; col++) {
      pyramid[row][col] =
        pyramid[row][col] +
        Math.min(pyramid[row + 1][col], pyramid[row + 1][col + 1]);
    }
  }
  return pyramid[startRow][startCol];
};

/* Test data and solution result visualization */

document.querySelector("#pyramid1").textContent = `1. Pyramid: ${pyramid1}`;
document.querySelector("#pyramidTop1").textContent = `Layers: ${pyramid1[0]}`;
document.querySelector("#pyramidResult1").textContent = `Sum: ${lowestSumPath(
  pyramid1
)}`;

document.querySelector("#pyramid2").textContent = `2. Pyramid: ${pyramid2}`;
document.querySelector("#pyramidTop2").textContent = `Layers: ${pyramid2[0]}`;
document.querySelector("#pyramidResult2").textContent = `Sum: ${lowestSumPath(
  pyramid2
)}`;

document.querySelector("#pyramid3").textContent = `3. Pyramid: ${pyramid3}`;
document.querySelector("#pyramidTop3").textContent = `Layers: ${pyramid3[0]}`;
document.querySelector("#pyramidResult3").textContent = `Sum: ${lowestSumPath(
  pyramid3
)}`;

document.querySelector("#pyramid4").textContent = `4. Pyramid: ${pyramid4}`;
document.querySelector("#pyramidTop4").textContent = `Layers: ${pyramid4[0]}`;
document.querySelector("#pyramidResult4").textContent = `Sum: ${lowestSumPath(
  pyramid4
)}`;

/* console.log(lowestSumPath(pyramid1));
console.log(lowestSumPath(pyramid2));
console.log(lowestSumPath(pyramid3));
console.log(lowestSumPath(pyramid4)); */
