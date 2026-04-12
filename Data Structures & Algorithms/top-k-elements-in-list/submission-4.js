class Solution {
    topKFrequent(nums, k) {
        let freqMap = {};

        // Step 1: Count frequency
        for (let num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
        }

        // Step 2: Sort based on frequency
        let sorted = Object.keys(freqMap).sort((a, b) => {
            return freqMap[b] - freqMap[a];
        });

        // Step 3: Take top k
        return sorted.slice(0, k);
    }
}