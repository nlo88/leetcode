/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = (head) => {
    
    let currentNode = head;
    let temp = null;
        
    while ( currentNode ) {
        let nextNode = currentNode.next;
        currentNode.next = temp;
        temp = currentNode;
        currentNode = nextNode;
        
    }
    return temp
  
};