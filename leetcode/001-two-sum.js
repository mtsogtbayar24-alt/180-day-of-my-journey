/**
 * LeetCode #1 - Two Sum (Easy)
 * Date: 2026-06-07 (Day 1)
 *
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 */

var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }
};

// Test
console.log(twoSum([2,7,11,15], 9)); // [0,1]
