const BinarySearchTree = require('../DST-BST-colleen/BST')
/* 1. How many searches?
Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16. */

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};
//8
// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18
/* start: 0; end : 9
[4]= 11 --3 5 6 8 11 12 14 15 17 18
start: 0 end: 3
item: [1]--5
[3]=8  3 5 6 8
start: 1 end: 3
[1]=5 5 6 8
start: 2 end: 3
[2]=6 
start: 3 end: 3
[3]=8  */

//16
//3, 5, 6, 8, 11, 12, 14, 15, 17, 18
/* start: 0 end: 9
[4]:11  3 5 6 8 11 12 14 15 17 18
start: 5 end: 9
[7]: 15 12 ----18
start: 8 end: 9
[8]: 17 
start: 8 end: 7
return -1
 */

/* 
2. Adding a React UI
For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.

1) Linear search

Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5

<form onSubmit={(e)=>handleSubmit(e)}><button>Submit</button></form>

2) Binary search

Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out. */

/* function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
       binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
       binarySearch(array, value, start, index - 1);
  }
};

console.log(binarySearch([89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5], 65)) */

//3. Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.
//book--card catalog--find category which has sub categories and sub categories including location --then write down the 'location' of that book, take to section and find aisle, then shelf, then book
/* 
dewey(title, dewey){
return title where dewey--
find (dewey[i]...)
} */

/* 
4. Searching in a BST
** No coding is needed for these drills**. Once you have answered it, you can then code the tree and implement the traversal to see if your answer is correct.

1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91 and root 35 left: 25 15 14 19 27 // right: 89 79 91 90. What would be its postorder traversal?

          35
        /    \
      25      79
    /   \     /\
  /15\  27      89
14   19           \90
                      \91

           35
          /  \
       25      89
      /  \     /  \
     15    27 79   91
    / \             /
   14 19           90 

14 19 15 27 25 79 90 91 89 35
   

2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal? */
/* 
                      8
                  /      \
                 6        10
               /   \      /  \
              5     7    9   11    

    8 6 5 7 10 9 11 */

    
   /*  5. Implement different tree traversals
    Using your BinarySearchTree class from your previous lesson, create a binary search tree with the following dataset: 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22. Then implement inOrder(), preOrder(), and postOrder() functions. Test your functions with the following datasets.
    
    A pre-order traversal should give you the following order: 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
    
    In-order: 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
    
    Post-order: 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
     */


    

  
function setBST(){
  let array = [25,15,50,10,24,35,70,4,12,18,31,44,66,90,22]
  let BST = new BinarySearchTree()
  for(let i=0; i < array.length; i++){
    BST.insert(array[i])
  }
  return BST
}
  
let tree = setBST()

function postOrder(tree, arr=[]){
//in order: left node parent

if(tree.left){
  postOrder(tree.left, arr)
}
if(tree.right){
  postOrder(tree.right, arr)
}

arr.push(tree.key)


return arr
}

console.log(postOrder(tree))


function pOrder(tree, arr=[]){
  //in order: left node parent
  arr.push(tree.key)

  if(tree.left){
    pOrder(tree.left, arr)
  }
  if(tree.right){
    pOrder(tree.right, arr)
  }
  
  return arr
  }

console.log(pOrder(tree))


function inOrder(tree, arr=[]){
  //in order: left node parent

  if(tree.left){
    inOrder(tree.left, arr)

  }
  arr.push(tree.key)
  if(tree.right){
    inOrder(tree.right, arr)
  }
  
  return arr
  }

  console.log(inOrder(tree))