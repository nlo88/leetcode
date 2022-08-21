// Given an integer array and a window of size w, 
// find the current maximum value in the window as it slides through the entire array.

//If the window size is greater than the array size, 
//we will consider the entire array as a single window.

// array that is an integer
// window size is = 3

// check the input: nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// window_size = 3

// check the output: [3, 4, 5, 6, 7, 8, 9, 10]

// find the current maximum value within the window size of 3
// as it slides through the entire array

// start from 1-2-3 , slides through next to the array, to find maximum num of each set of window
// generate result list as form of array


// traverse all the N elements of the array (loop)
// find maximum element in the subarray K (loop)
// store the maximum element of each window (3) in the result array
//  return the result




let findMaxSlidingWindow = function(nums, windowSize) {
    var result = [];
    
    for (let i=0; i<nums.length; i++){
        let max = nums[i]
        for (let j=k; j<nums.length; j++){

            if (windowSize > nums.length){
                return nums
            } else {
                max = Math.max(nums[j])
                result.push(max)
            }
        }
    }
    return result;
  };
  
  
  
  
  
  
  
  
  
  
  