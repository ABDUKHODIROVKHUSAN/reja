// MIT A _ TASK
// function countLetter(letter, emergency) {
//   let count = 0;
//   for (let i = 0; i < emergency.length; i++) {
//     if (emergency[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("e", "emergency")); 

// MIT B TASK

function countDigits(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      count++;
    }
  }
  return count;
}

console.log(countDigits("SoccerR7R9M10j21u1"));