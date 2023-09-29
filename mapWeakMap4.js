// //Map 
// const persons = [
//     {firstname : "Raja", lastname: "singh"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];
  
//   persons.map(getFullName);
  
//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }


let map1 = new Map();
  
map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1.set("website", "geeksforgeeks")
    .set("friend 1","gourav")
    .set("friend 2","sourav");
  
console.log(map1);
      
console.log("map1 has website ? "+ 
                    map1.has("website"));
  
console.log("map1 has friend 3 ? " + 
                    map1.has("friend 3"));
  
console.log("get value for key website "+
                    map1.get("website"));
  
console.log("get value for key friend 3 "+
                    map1.get("friend 3"));
console.log("delete element with key website " 
                    + map1.delete("website"));
      
console.log("map1 has website ? "+ 
                    map1.has("website"));
  
console.log("delete element with key website " +
                    map1.delete("friend 3"));
  
map1.clear();
  
console.log(map1);



// // WeakMap


// const weakMap = new WeakMap();
// console.log(weakMap); // WeakMap {} 

// let obj = {};

// // adding object (element) to WeakMap
// weakMap.set(obj, 'hello');

// console.log(weakMap); // WeakMap {{} => "hello"}

// // get the element of a WeakMap
// console.log(weakMap.get(obj)); // hello

// // check if an element is present in WeakMap
// console.log(weakMap.has(obj)); // true

// // delete the element of WeakMap
// console.log(weakMap.delete(obj)); // true

// console.log(weakMap); // WeakMap {} 