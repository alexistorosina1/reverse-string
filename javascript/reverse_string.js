function reverseString(str) {
  let splitString = str.split("")
  let reverseArray = splitString.reverse()
  let joinArrary = reverseArray.join("")
  return joinArrary("hello world")

  // str.split("").reverse().join("")?
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
