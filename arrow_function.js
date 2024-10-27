// arrow function is a syntax that simplify writing a call back function

// we will see an example of an arrow function

let animals= ['birds', 'zebra', 'whale']

// using a call back function
animals.forEach(function(animal){
    console.log(animal)
})

// using an arrow notation to call back a function and both do the same task

animals.forEach((animal)=>{
    console.log(animal)
})