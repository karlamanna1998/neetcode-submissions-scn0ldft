class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {};

        for(let i = 0; i < nums.length; i++){
            let difference = target - nums[i]
            if(hash[difference] == undefined){
                 hash[nums[i]] = i
            }else{
                return [hash[difference] , i]
            }
        }

        return [null , null]
    }
}
