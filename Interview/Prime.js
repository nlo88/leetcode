/*Prime Factorization of a Number
     2 | 120
       2 | 60
         2 | 30
           3 | 15
             5 | 5
                 1
                 
    ans = [2,2,2,3,5]
    
     3 | 99
     3 | 33
    11 | 11
       |  1
       
    ans [3,3,11]
    
O(N^2) + O(NlogN) + O(1) == O(N^2 + NlogN + 1) == O(N^2 + NlogN) = O(N^2)
//def prime_factors(N):
*/

const primeFactor = (num) => {
  let answer = []
  let currentValue = 2
	while (num > 1){
    if (num % currentValue === 0) {
      num = num / currentValue
      answer.push(currentValue)
    } else {
      currentValue +=1
    }
  }
  return answer;
} 