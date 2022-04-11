/**
 * 762. Prime Number of Set Bits in Binary Representation (762. 二进制表示中质数个计算置位)
 * Read the Problem: Binary bit
 * Solution: Bit Operation lowbit
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const isPrime = x => {
        if (x === 1 || x === 0) return false;

        for(let i = 2; i * i <= x; ++i) {
            if (x % i === 0) return false;
        }

        return true;
    };

    const primeMap = new Map();
    for (let i = 0; i <= 32; ++i) {
        primeMap.set(i, isPrime(i));
    }

    const lowbit = n => n & -n;
    const countOnesMap = new Map();
    const countOnes = x => {
        let temp = x;
        let count = 0;

        while (temp) {
            if (countOnesMap.has(temp)) {
                count += countOnesMap.get(temp);
                break;
            }
            temp -= lowbit(temp);
            count++;
        }

        countOnesMap.set(x, count);
        return count;
    };

    let countPrime = 0;
    for (let i = left; i <= right; ++i) {
        let count = countOnes(i);
        if (primeMap.get(count)) {
            countPrime++;
        }
    }

    return countPrime;
};