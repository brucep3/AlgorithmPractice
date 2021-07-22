/**
 * lc-1109. Corporate Flight Bookings
 * Solution: 差分
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
    const diff = new Array(n + 2).fill(0);

    const insert = (l, r, c) => {
        diff[l] += c;
        diff[r + 1] -= c;
    };

    for (const [first, last, seats] of bookings) {
        insert(first, last, seats);
    }

    const answer = [];
    for (let i = 1, sum = diff[0]; i <= n; ++i) {
        sum += diff[i];
        answer.push(sum);
    }

    return answer;
};