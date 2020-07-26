
// Sample Example

const mytask = {
procedure: 'addition', 
numbers: {
a: 4,
b: 5,
c: 6
}
};

 function calculate1() {
 return mytask.numbers.a + mytask.numbers.b + mytask.numbers.c;
}


// Old Way
const mytask1 = {
procedure: 'addition', 
numbers: {
a: 4,
b: 5,
c: 6
}
};

function calculate2() {

const a  = mytask1.numbers.a;
const b  = mytask1.numbers.b;
const c  = mytask1.numbers.c;
return a + b + c;
}


// Implement in destructure

const mytask2 = {
procedure: 'addition', 
numbers: {
a: 4,
b: 5,
c: 6
}
};

function calculate3() {
const { a , b , c }  = mytask2.numbers;
return a + b + c;
}

// with default value
const mytask3 = {
procedure: 'addition', 
numbers: {
a: 4,
b: 5,
c: 6
}
};

function calculate4() {
const { a , b , c , d = 0 }  = mytask3.numbers;
return a + b + c + d;
}

// with changing name

const mytask4 = {
procedure: 'addition', 
numbers: {
a: 4,
b: 5,
c: 6
}
};

// function calculate5() {
// const { one: a , two: b , three: c , four: d = 4 }  = mytask4.numbers;

// return one + two + three + four;
// }


//Nasted Destructure

const mytask5 = {
procedure: 'addition', 
numbers: {
a: 4,
b: 5,
c: 6
}
};

function calculate6() {
const { procedure , numbers: { a , b , c , d = 0 } }  = mytask5;

  if(procedure === 'addition') 
    return a + b + c + d;

return null;
}


console.log(calculate1());
console.log(calculate2());
console.log(calculate3());
console.log(calculate4());
console.log(calculate6());