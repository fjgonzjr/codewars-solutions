// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example n = 3 result in:

// "I\n I\n  I"
// or printed:

// I
//  I
//   I
// Another example, a 7-step stairs should be drawn like this:

// I
//  I
//   I
//    I
//     I
//      I
//       I

// My Solution:
function drawStairs(n) {
    let ans = []
    for(let i = 0;i < n;i++){
      if(n === 1) {
        return 'I'
      }else{
        ans.push(`I\n${' '.repeat(i)}`)
      }
    }
    return ans.join(' ').trim()
}