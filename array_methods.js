 // // Push method
const arr_push = ["I" , "Am"];

var push = arr_push.push("Developer");

console.log(arr_push);


// // slice method
const  arr_slice = ["I" , "Am" , "Developer"];

var slice = arr_slice.slice(1, 2);

console.log(slice);


// // string method

const arr_string = ["I" , "Am" , "Developer"];

var string = arr_string.toString();

console.log(string);


// // shift method 


const arr_shift = ["I" , "Am" , "Developer"];

var shift = arr_shift.shift();

console.log(arr_shift);


// Map Method 

const arr_map = [1,4,9,16];
 var map =  arr_map.map(x => x * 2 );

 console.log(map);

 //pop method

 const arr_pop = ["I" , "Am" , "Developer"];

  var pop = arr_pop.pop();

  console.log(arr_pop);


// Filter Method

var arr_filter = ["I" , "Am" , "Developer"];

 var filter = arr_filter.filter(word => word.length > 3);

console.log(arr_filter);
 // Output

 // ["Am" , "Developer"]; 

 // Includes Method

 const arr_include = ["I" , "Am" , "Developer"];
  var include = arr_include.includes("Am");

  console.log(include);



