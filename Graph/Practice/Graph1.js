// const depthFirstPrint = (graph, source) => {
//     const stack = [ source ];

//     while (stack.length > 0){
//         const current = stack.pop();
//         console.log(current);
//         graph[current]
//     }
// };
// /*
// a -- c -- e
// |
// b
// |
// d -- f
// */
// const graph = {
//     a: ['b','c'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: [],
// };
// depthFirstPrint(graph, 'a')
// // output a


// Iterative Flavour
// const depthFirstPrint = (graph, source) => {
//     const stack = [source];

//     while (stack.length > 0){
//         const current = stack.pop();
//         console.log(current);
        
//         for(let neighbor of graph[current]){
//             stack.push(neighbor);
//         }
//     }
// };
// /*
// a -- c -- e
// |
// b
// |
// d -- f
// implement depth first iteratevly, as well as recursive flavors.
// */
// const graph = {
//     a: ['b','c'], // or we can also write a: ['c', 'b']
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: [],
// };
// depthFirstPrint(graph, 'a')
// // output a c e b d f

// // Recursive Flavor
// // we don't have return for loop, because we explicit the empty null 
// const depthFirstPrint = (graph, source) => {
//    console.log(source);
//    for (let neighbor of graph[source]){
//    depthFirstPrint(graph, neighbor); // recursive call
//    }
// };
// /*
// a -- c -- e
// |
// b
// |
// d -- f
// */
// const graph = {
//     a: ['b','c'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: [],
// };
// depthFirstPrint(graph, 'a')
// // output a b d f c e 

// Breath First :Queue
const breathhFirstPrint = (graph, source) => {
    const queue = [ source ];
    while (queue.length > 0){
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
};
/*
a -- c -- e
|
b
|
d -- f
*/
const graph = {
    a: ['c','d'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: [],
};
breathhFirstPrint(graph, 'a')
// output a
