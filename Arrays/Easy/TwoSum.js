/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

var twoSum = function(nums, target){
        for(var i=0; i<nums.length; i++){
            for(j= i+1; j<nums.length; j++){
               if (nums[i] + nums[j] === target){
                   return[i,j]
               } 
            }
        }
    }


    const pairwithTargetsum = function(arr, targetSum) {
        // TODO: Write your code here
        for (let i=0; i<arr.length;i++){
          for(let j=-i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === targetSum){
              return [i,j]
            }
          }
        }
        return [-1, -1];
      }


    //   const pair_with_targetsum = function(arr, target_sum) {
    //     // TODO: Write your code here
    //     for (let i=0; i<arr.length;i++){
    //       for(let j=-i+1; j<arr.length; j++){
    //         if(arr[i] + arr[j] === target_sum){
    //           return [i,j]
    //         }
    //       }
    //     }
    //     return [-1, -1];
    //   }
            
   