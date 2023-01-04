/*
You are given an array prices where prices[i] 
is the price of a given stock on the ith day.

You want to maximize your profit 
by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

1. Understand the problem
2. Understand the solution
3. Pseudocode 
4. Code

Array ith element is the price of a given stock on day i.
One Stransation
Maximum profit
Buy first then you can sell

Input: [7,1,5,3,6,4]
Output: 5

day 0, $7
day 1, $1 
day 2, $3 

Cannot sell a lost in a desceding order

Buy first then sell
No one saif the array is sorted
find the minimum price and bring the 

What kind of pattern? 



prices is an array
prices =[ ]

prices contain 
    value of the stock, on a given (ith) day

index [i] of the array is the price of the stock

we want to buy when value at the lowest
we want to sell when value at the highest
=  maximum profit

array always going to have a value
stock value never in negative <= 100.000

if no profit , return 0 

find the min value, if the min value is on the last index of the array, stop, return to 0

otherwise
find the max value
max value - min value = profit

*/



// let prices = [7, 1, 5, 3, 6, 4];
// console.log(prices, "hi");

// var maxProfit = function (prices) {
//   let profit;

//   let min = Math.min(...prices);
//   console.log(min);
//   if (prices.length - 1 === min) {
//     return 0;
//   } else {
//     let max = Math.max(...prices);
//     if (prices[0] === max) {
//       prices.shift();
//     }
//     console.log(prices);
//     max = Math.max(...prices);
//     profit = max - min;
//     console.log(profit);
//     return profit;
//   }
// };
// maxProfit(prices);
