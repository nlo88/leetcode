function fun(num, mat) {
    ///we can implement it using recursive approach
    //if num==0 return the mat  [base case]
    ///else
    /// apply the rules [applyRule] function
    ///create function to search for empty cells which is adjacent to a hedge and replace it with '1'
    ///create function to search for a hedge cell that is surrounded from all direction and replace it with '0'
    ///num--;
    ///call the function
    ///[applyRule]
    ///create an empty Set [set1]
    ///scan the matrix
    ///when hitting '1' look in eight directions and store the coordinates of any '0' cell and add it to the set
  
    ///create an empty Set [set2]
    ///scan the matrix
    ///when hitting '0' check all eight directions if all '1' store the coordinates inside the Set
    ///when finishing scanning the matrix replace all cells in set1  with 0 and all cells in set2 with 1
  
    if (num == 0) {
      return mat;
    }
  
    //call applyRules
  
    mat = applyRules(mat);
  
    num--;
    return fun(num, mat);
  }
 
  function applyRules(mat) {
    const set1 = new Set();
    for (let row in mat) {
      for (let col in mat[row]) {
        if (mat[row][col] == 1) {
          if (mat[row * 1 - 1] != undefined) {
            if (
              mat[row * 1 - 1][col * 1 - 1] != undefined &&
              mat[row * 1 - 1][col * 1 - 1] == 0
            ) {
              set1.add([row * 1 - 1, col * 1 - 1]);
            }
  
            if (
              mat[row * 1 - 1][col * 1] != undefined &&
              mat[row * 1 - 1][col * 1] == 0
            ) {
              set1.add([row * 1 - 1, col * 1]);
            }
            if (
              mat[row * 1 - 1][col * 1 + 1] != undefined &&
              mat[row * 1 - 1][col * 1 + 1] == 0
            ) {
              set1.add([row * 1 - 1, col * 1 + 1]);
            }
          }
  
          if (
            mat[row * 1][col * 1 - 1] != undefined &&
            mat[row * 1][col * 1 - 1] == 0
          ) {
            set1.add([row * 1, col * 1 - 1]);
          }
  
          if (
            mat[row][col * 1 + 1] != undefined &&
            mat[row * 1][col * 1 + 1] == 0
          ) {
            set1.add([row * 1, col * 1 + 1]);
          }
  
          if (mat[row * 1 + 1] != undefined) {
            if (
              mat[row * 1 + 1][col * 1 - 1] != undefined &&
              mat[row * 1 + 1][col * 1 - 1] == 0
            ) {
              set1.add([row * 1 + 1, col * 1 - 1]);
            }
  
            if (
              mat[row * 1 + 1][col * 1] != undefined &&
              mat[row * 1 + 1][col * 1] == 0
            ) {
              set1.add([row * 1 + 1, col * 1]);
            }
            if (
              mat[row * 1 + 1][col * 1 + 1] != undefined &&
              mat[row * 1 + 1][col * 1 + 1] == 0
            ) {
              set1.add([row * 1 + 1, col * 1 + 1]);
            }
          }
        }
      }
    }

    const set2 = new Set();
    for (let row in mat) {
      for (let col in mat[row * 1]) {
        if (mat[row * 1][col * 1] == 1) {
          let surrounded = true;
          if (mat[row * 1 - 1] == undefined) {
            surrounded = false;
          } else {
            if (
              mat[row * 1 - 1][col * 1 - 1] == undefined ||
              mat[row * 1 - 1][col * 1 - 1] == 0
            ) {
              surrounded = false;
            }
  
            if (
              mat[row * 1 - 1][col * 1] == undefined ||
              mat[row * 1 - 1][col * 1] == 0
            ) {
              surrounded = false;
            }
            if (
              mat[row * 1 - 1][col * 1 + 1] == undefined ||
              mat[row * 1 - 1][col * 1 + 1] == 0
            ) {
              surrounded = false;
            }
          }
          if (
            mat[row * 1][col * 1 - 1] == undefined ||
            mat[row * 1][col * 1 - 1] == 0
          ) {
            surrounded = false;
          }
  
          if (
            mat[row * 1][col * 1 + 1] == undefined ||
            mat[row * 1][col * 1 + 1] == 0
          ) {
            surrounded = false;
          }
  
          if (mat[row * 1 + 1] == undefined) {
            surrounded = false;
          } else {
            if (
              mat[row * 1 + 1][col * 1 - 1] == undefined ||
              mat[row * 1 + 1][col * 1 - 1] == 0
            ) {
              surrounded = false;
            }
  
            if (
              mat[row * 1 + 1][col * 1] == undefined ||
              mat[row * 1 + 1][col * 1] == 0
            ) {
              surrounded = false;
            }
            if (
              mat[row * 1 + 1][col * 1 + 1] == undefined ||
              mat[row * 1 + 1][col * 1 + 1] == 0
            ) {
              surrounded = false;
            }
          }
  
          if (surrounded) {
            set2.add([row * 1, col * 1]);
          }
        }
      }
    }
  
    for (let el of set1) {
      mat[el[0]][el[1]] = 1;
    }
  
    for (let el of set2) {
      mat[el[0]][el[1]] = 0;
    }
  
    return mat;
  }