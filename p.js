//  maps filter and reduce 

// maps - it maps each element in the array and made the changes according to us 

const arr = [1,5,32,5]
// function double(x){
//   return x*2
// }
// const output = arr.map(double)
// const output = arr.map((x)=> x.toString(2))
// console.log(output)


// filter - on the basis of condition it gives the filtered array

// function isOdd(x) {
//   return x%2 === 0 ;
// }
// const output = arr.filter(isOdd)
// console.log(output)

// reduce - take two parameterss accumulater and current

// sum or max
const output1 = arr.reduce(function(acc,curr){
 acc = acc + curr 
 return acc
},0)
console.log(output1);

const output2 = arr.reduce(function(max,curr){
if(curr>max)
  max = curr
return max
},0)
console.log(output2);

// -----------------------------------------
const people = [
  { firstName: "Aman", lastName: "Sharma", age: 24 },
  { firstName: "Riya", lastName: "Verma", age: 22 },
  { firstName: "Kabir", lastName: "Mehta", age: 27 },
  { firstName: "Neha", lastName: "Singh", age: 21 },
  { firstName: "Rohan", lastName: "Kapoor", age: 26 }
];

const output3 = people.map(x => x.firstName + " " + x.lastName)
console.log(output3);

const output4 = people.reduce(function(acc,curr){
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
  }
  else {
    acc[curr.age] = 1
  }
  return acc 
},{})
console.log(output4)

// m1
const output5 = people.filter(
   (x)=> {
    if(x.age > 22) {
       console.log(x.firstName)
    }
  }
)

// m2 we can chain these map ,filter ,reduce
const output6 = people.filter((x) => x.age>22).map((x) => x.firstName)
console.log(output6)








