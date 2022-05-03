/**
 * 883. Projection Area of 3D Shapes (883. 三维形体投影面积)
 * Solution: Simulation
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * n is the number of cubes
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    let xy = grid.reduce(
        (prev, line) => prev + line.reduce((prev, e) => (e ? 1 : 0) + prev, 0)
        , 0);

    let xz = grid.reduce(
        (prev, line) => prev + Math.max(...line)
        , 0);

    let yz = 0;
    for (let j = 0; grid.length >= 0 && j < grid[0].length; ++j) {
        let max = 0;
        for (let i = 0; i < grid.length; ++i) max = Math.max(max, grid[i][j]);
        yz += max;
    }

    return xy + xz + yz;
};