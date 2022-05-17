/**
 * Solution: Math
 * A(x1, y1), B(x2, y2), C(x3, y3)
 * S = 1/2 * | (x2 - x1)(y3 - y1) - (x3 - x1)(y2 - y1) |
 * Time Complexity: O(n ^ 3)
 * Space Complexity: O(1)
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    const calTriangleSquare = (point1, point2, point3) => {
        return 0.5 * Math.abs(
            (point2[0] - point1[0]) * (point3[1] - point1[1])
            - (point3[0] - point1[0]) * (point2[1] - point1[1])
        );
    };

    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < points.length; ++i) {
        for (let j = i + 1; j < points.length; ++j) {
            for (let k = j + 1; k < points.length; ++k) {
                max = Math.max(calTriangleSquare(points[i], points[j], points[k]), max);
            }
        }
    }

    return max;
};