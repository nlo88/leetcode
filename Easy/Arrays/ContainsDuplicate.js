function containsDuplicate(nums){
	// let memory = {};
    // for (let i=0; i<nums.length; i++)
    //     if(memory[nums[i]] === undefined){
    //     memory[nums[i]] = 'i';
    //     } else {
    //     return true;
    //         }
    //     return false;

//solution # 2

    // create empty hashmap
    let hashMap ={};
    
    // loop through length of the array
    for (let i=0; i< nums.length; i++){
      
     // if index of nums found in hashmap
      if(nums[i] in hashMap){
           return true;
    }
    // hashmap of nums[i] must be the same as i
    hashMap[nums[i]] = i;
    }
    return false;


};


// Time complexity O(N)
// Space complexity O(N)