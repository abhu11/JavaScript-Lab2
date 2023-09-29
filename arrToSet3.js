// //Using Set constructor

// let name = ["Tokyo", "Bunny", "Shyam", "Abhishek", "Moscow"]

// let name_set = new Set(name)

// console.log(name_set)


// //2  Using Array.prototype.map()

// let arr = [11, 31, 21, 19, 46, 46];

// let set = new Set();
// arr.map(item => set.add(item));

// console.log(set);

// // 3  Using Array.prototype.forEach()

// let arr = [11, 31, 21, 19, 46];

// let set = new Set();
// arr.forEach(item => set.add(item));
 
// console.log(set);


// 4 Using Array.prototype.reduce()

let arr = [11, 31, 21, 19, 46];

let set = new Set();

arr.reduce((_, e) => set.add(e), null);
 
console.log(set);