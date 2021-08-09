/**
 * @typedef cas
 * @property {boolean} mine
 * @property {boolean} hidden
 */
const SIZE = 16;
const BOMB = 40;
function getCoor() {
  return Math.floor(Math.random() * SIZE);
}
/**
 *
 * @param {number} x
 * @param {number} y
 */
const getAdjacent = (x, y, grid) => {
  const size = SIZE - 1;
  let result = [
    { x: x - 1, y: y - 1 },
    { x: x + 1, y: y + 1 },
    { x: x - 1, y: y + 1 },
    { x: x + 1, y: y - 1 },
    { x: x - 1, y: y },
    { x: x + 1, y: y },
    { x: x, y: y - 1 },
    { x: x, y: y + 1 },
  ];
  result = result.filter(
    (coor) => coor.x >= 0 && coor.x <= size && coor.y >= 0 && coor.y <= size
  );
  let count = 0;
  result.forEach((adj) => {
    if (grid[adj.x][adj.y].mine) {
      count++;
    }
  });

  return { adj: result, BombCount: count };
};
export default function createGrid() {
  /**
   * @type {cas[][]}
   */
  let grid = Array.from(Array(SIZE), () =>
    [...new Array(SIZE)].map((x) => (x = { mine: false, hidden: true,flagged:false }))
  );
  for (let i = 0; i < BOMB; i++) {
    let x = getCoor();
    let y = getCoor();
    while (grid[x][y].mine === true) {
      x = getCoor();
      y = getCoor();
    }
    grid[x][y].mine = true;
  }

 grid = grid.map((col, j, tab) =>
    col.map(
      (cas, i) =>
        (cas = {
          ...cas,
          adj: getAdjacent(j, i, tab).adj,
          BombCount: getAdjacent(j, i, tab).BombCount,
        })
    )
  );
  return grid;
}
