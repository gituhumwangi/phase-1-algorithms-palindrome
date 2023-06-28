function isPalindrome(word) {
  // Write your algorithm here

  //find the length of the string
  const len = word.length

  for(let i = 0; i < len/2 ; i++){

   return (word[i] !== word[len - 1 -i] ? false : true)
  }
}

/* 
  Add your pseudocode here
*/
//The program takes strings as input
//the inputs should be all in lowercases
//the argument takes in one string and should return a true or a false depending on the functionality of the code
//the program should have condition to return whether true or false
//inputs:string  output:boolean
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
