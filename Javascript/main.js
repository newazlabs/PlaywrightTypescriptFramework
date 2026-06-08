//Task 1: Reverse String
function reverseString(str){
 return str.split("").reverse().join("");
}
const reversedWord = reverseString("hello");

//Task 2: Palindrome Check
function isPalindrome(str){
    return str === str.split("").reverse().join("");
}

//Task 3: Find Duplicates
function findDuplicates(arr){
    return arr.filter((item,index) => arr.indexOf(item) !==index);
}

//Task 4: Remove Duplicates 
function removeDuplicate(arr){
    return[...new Set(arr)];
}

//Task 5: Find Maximum Number
function findMax(arr){
    return Math.max(...arr);
}

//Task 6: Find Minimum Number
function finMin(arr){
    return Math.min(...arr);
}

//Task 7: Character Frequency Count
function charCount(str) {
    return str.split("").reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});
}

//Task 8: Vowel Count
function countVowels(str){
    return str.split("").filter(c => 'aeiouAEIOU'.includes(c)).length;
}

//Task 9: Find Even Numbers
function getEvenNumber(arr){
    return arr.filter(num => num%2 ===0);
}

//Task 10: Find Odd Numbers
function getOdds(arr){
    return arr.filter(num => num % 2 !==0);
}

//Task 11: Sum of Array
function sumArray(arr){
    return arr.reduce((sum,num) => sum+num,0);
}

//Task 12: Missing Number
function findMissing(arr){
    const n= arr.length + 1;
    const expected = (n * (n+1)) /2;
    const actual = arr.reduce((sum,num) => sum + num,0);
    return expected - actual;
}

//Task 13: Sort Numbers
function sortNumber(arr){
    return arr.sort((a,b) => a-b);
}

//Task 14: Second Largest Number 
function secondLargest(arr){
    const unique = [...new Set(arr)];
    unique.sort((a,b) => b-a);
    return unique[1];
}

//Task 15: Count Passed / Failed Tests
function countTests(testCases){
    return testCases.reduce((acc,test) =>{
        acc[test.status] = (acc[test.status] || 0)+1;
        return acc;
    },{});
}
