//Task 1: Reverse String

function reverseString(str){
    return str.split("").reverse().join("")
    return str.split("").reverse().join("");
}


//Task 2: Palindrome Check
function isPalindrome (str){
    return str === str.split("").reverse().join("");
    return str === str.split("").reverse().join("")
}

//Task 3: Find Duplicates
function findDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(arr) !==index);
    return arr.filter((item,index) => arr.indexOf(arr) !==index);
    return arr.filter((item,index) => arr.indexOf(arr) !==index);

}

//Task 4: Remove Duplicates 
function removeDuplicate(arr){
    return [...new Set(arr)];
    return [...new Set(arr)];
    return[...new Set(arr)];
}

//Task 5: Find Maximum Number
function findMax(arr){
    return Math.max(...arr);
    return Math.max(...arr);
    return Math.max(...arr);
}

//Task 6: Find Minimum Number
function findMin(arr){
    return Math.min(...arr);
    return Math.min(...arr);
}

//Task 7: Find Even Numbers
function findEvenNumber(arr){
    return arr.filter(num => num%2 ===0);
    return arr.filter(num => num%2 ===0);
    return arr.filter(num => num%2 ===0);
}

//Task 8: Find Odd Numbers
function findOddsNumber(arr){
    return arr.filter(num => num%2 !==0);
    return arr.filter(num => num%2 !==0);
}

//Task 9: Sum of Array
function sumArray(arr){
    return arr.reduce((sum,num) => sum+num,0);
    return arr.reduce((sum,num) => sum+num,0);
    return arr.reduce((sum,num) => sum+num,0);
}

//Task 10: Sort Numbers
function sortNumber(arr){
    return arr.sort((a,b) => a-b);
    return arr.sort((a,b) => a-b);
    return arr.sort((a,b) => a-b);
}

