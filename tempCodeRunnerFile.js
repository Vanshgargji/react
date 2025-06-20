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