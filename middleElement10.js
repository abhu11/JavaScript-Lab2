
// const median = arr => {
//     const mid = Math.floor(arr.length / 2),
//       nums = [...arr].sort((a, b) => a - b);
//     return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
//   };
//   console.log(median([5, 6, 50, 1, -5]));
//   console.log(median([1, 2, 3, 4, 5]));
  

  //2 

  //Find the median

var numArray = [2, 3, 6, 4, 8, 10, 11, 13, 1, 17, 25, 200, 210, 60];

numArray.sort(function(a, b) {return a-b;});
//log the contents of the array
console.log(numArray);
//log the array length
console.log("array length is: " + numArray.length);
//Split the array in half
var middle = Math.floor(numArray.length / 2);
//function to find the median
function findMedian () {
  if(numArray.length % 2 === 0) {
    console.log("middle nums when array length is even: " + numArray[middle - 1]  + " " + numArray[middle]);
  } else {
    console.log("middle num when array length is odd: " + numArray[middle]);
  }
}
//call function
findMedian();